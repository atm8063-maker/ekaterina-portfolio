"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

/** Bypass `scroll-behavior: smooth` and Next.js post-nav scroll. */
export function scrollToTopInstant() {
  const root = document.documentElement;
  const body = document.body;
  const prevRoot = root.style.scrollBehavior;
  const prevBody = body.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  body.style.scrollBehavior = "auto";
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  root.scrollTop = 0;
  body.scrollTop = 0;
  root.style.scrollBehavior = prevRoot;
  body.style.scrollBehavior = prevBody;
}

function flushScrollToTop() {
  scrollToTopInstant();
  requestAnimationFrame(() => {
    scrollToTopInstant();
    requestAnimationFrame(scrollToTopInstant);
  });
}

function hasLocationHash() {
  return typeof window !== "undefined" && window.location.hash.length > 1;
}

/** Instant top on pathname change unless URL targets a #section (HashScrollProvider). */
export function ScrollToTopOnNavigate() {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);

  useLayoutEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;
    if (hasLocationHash()) return;
    flushScrollToTop();
  }, [pathname]);

  useEffect(() => {
    if (hasLocationHash()) return;
    flushScrollToTop();
    const t = window.setTimeout(scrollToTopInstant, 0);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return null;
}
