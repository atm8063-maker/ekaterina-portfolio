"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

/** Retries for lazy sections after cross-page # navigation. */
const RETRY_MS = [0, 100, 400, 900, 1800, 3200];

/** Ignore stale-hash cleanup briefly after we scroll to a target. */
const PROGRAMMATIC_SCROLL_MS = 2800;

const HEADER_OFFSET_PX = 80;

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function smoothScrollBehavior(): ScrollBehavior {
  return prefersReducedMotion() ? "auto" : "smooth";
}

export function scrollToHashElement(behavior: ScrollBehavior = smoothScrollBehavior()): void {
  const hash = window.location.hash;
  if (!hash) return;
  const targetId = decodeURIComponent(hash.replace("#", ""));
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior, block: "start" });
  }
}

function clearHashFromUrl(): void {
  if (!window.location.hash) return;
  const path = `${window.location.pathname}${window.location.search}`;
  history.replaceState(null, "", path);
}

function isHashTargetInView(targetId: string): boolean {
  const element = document.getElementById(targetId);
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const viewportH = window.innerHeight;
  const visible =
    Math.min(rect.bottom, viewportH) - Math.max(rect.top, HEADER_OFFSET_PX);
  if (visible <= 0) return false;

  const nearTopBand = rect.top < viewportH * 0.62 && rect.bottom > HEADER_OFFSET_PX;
  return nearTopBand;
}

/**
 * Hash in URL:
 * - Set on intentional nav (header, /#cases, case → catalog).
 * - Honored on load/refresh while hash is present (shareable deep links).
 * - Cleared when user scrolls away so F5 after browsing elsewhere opens at top.
 */
export function HashScrollProvider() {
  const pathname = usePathname();
  const programmaticUntil = useRef(0);

  const markProgrammaticScroll = () => {
    programmaticUntil.current = Date.now() + PROGRAMMATIC_SCROLL_MS;
  };

  useLayoutEffect(() => {
    if (!window.location.hash) return;
    markProgrammaticScroll();
    scrollToHashElement("auto");
    requestAnimationFrame(() => scrollToHashElement("auto"));
  }, [pathname]);

  useEffect(() => {
    let rafId = 0;
    let debounceTimer = 0;
    let scrollDebounce = 0;

    const scheduleScroll = (behavior: ScrollBehavior) => {
      markProgrammaticScroll();
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => scrollToHashElement(behavior));
    };

    const routeBehavior: ScrollBehavior = window.location.hash ? "auto" : smoothScrollBehavior();
    const timeouts = RETRY_MS.map((ms) => setTimeout(() => scheduleScroll(routeBehavior), ms));

    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        if (!window.location.hash) return;
        window.clearTimeout(debounceTimer);
        debounceTimer = window.setTimeout(() => scheduleScroll("auto"), 80);
      });
      resizeObserver.observe(document.documentElement);
    }

    const onHashChange = () => scheduleScroll(smoothScrollBehavior());
    window.addEventListener("hashchange", onHashChange);

    const syncHashWithScrollPosition = () => {
      if (Date.now() < programmaticUntil.current) return;
      const hash = window.location.hash;
      if (!hash) return;

      const targetId = decodeURIComponent(hash.replace("#", ""));
      if (!document.getElementById(targetId)) {
        clearHashFromUrl();
        return;
      }

      if (!isHashTargetInView(targetId)) {
        clearHashFromUrl();
      }
    };

    const onScroll = () => {
      window.clearTimeout(scrollDebounce);
      scrollDebounce = window.setTimeout(syncHashWithScrollPosition, 120);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const onDocumentClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as Element | null)?.closest("a");
      if (!anchor || anchor.target === "_blank") return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname) return;
      if (!url.hash) return;

      const targetId = decodeURIComponent(url.hash.slice(1));
      if (!document.getElementById(targetId)) return;

      e.preventDefault();
      const nextUrl = `${url.pathname}${url.search}${url.hash}`;
      const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      if (currentUrl !== nextUrl) {
        history.replaceState(null, "", nextUrl);
      }
      scheduleScroll(smoothScrollBehavior());
    };

    document.addEventListener("click", onDocumentClick, true);

    if (window.location.hash) {
      scheduleScroll("auto");
    }

    syncHashWithScrollPosition();

    return () => {
      timeouts.forEach(clearTimeout);
      window.clearTimeout(debounceTimer);
      window.clearTimeout(scrollDebounce);
      cancelAnimationFrame(rafId);
      resizeObserver?.disconnect();
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onDocumentClick, true);
    };
  }, [pathname]);

  return null;
}
