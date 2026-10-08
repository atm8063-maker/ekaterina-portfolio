"use client";

import { useEffect } from "react";

/** Smooth scroll to location hash; matches career + art landing behavior. */
const RETRY_MS = [0, 100, 400, 900, 1800, 3200];

export function useHashScroll() {
  useEffect(() => {
    let rafId = 0;
    let debounceTimer = 0;

    const scrollBehavior = (): ScrollBehavior =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const targetId = decodeURIComponent(hash.replace("#", ""));
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
      }
    };

    const scheduleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(scrollToHash);
    };

    const timeouts = RETRY_MS.map((ms) => setTimeout(scheduleScroll, ms));

    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        if (!window.location.hash) return;
        window.clearTimeout(debounceTimer);
        debounceTimer = window.setTimeout(scheduleScroll, 80);
      });
      resizeObserver.observe(document.documentElement);
    }

    window.addEventListener("hashchange", scheduleScroll);
    return () => {
      timeouts.forEach(clearTimeout);
      window.clearTimeout(debounceTimer);
      cancelAnimationFrame(rafId);
      resizeObserver?.disconnect();
      window.removeEventListener("hashchange", scheduleScroll);
    };
  }, []);
}
