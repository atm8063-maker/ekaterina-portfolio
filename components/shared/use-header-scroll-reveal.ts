"use client";

import { useEffect, useRef, useState } from "react";

/** Aligns with `md:` — desktop nav / scroll compact logic from here up */
const DESKTOP_MEDIA = "(min-width: 768px)";

const TOP_FULL_PX = 32;
const MIN_SCROLL_BEFORE_COMPACT_PX = 48;
const SCROLL_DELTA_PX = 8;

export type HeaderScrollState = {
  compact: boolean;
};

/**
 * Desktop: full at top, compact on scroll down, full on scroll up.
 * Mobile: always compact (no scroll-driven size change).
 *
 * The first render must match the server. Reading matchMedia here made
 * desktop HTML differ from the server (hydration error on the header).
 * Start from the 80px desktop bar, then correct in an effect.
 */
export function useHeaderScrollState(paused: boolean): HeaderScrollState {
  const [isDesktop, setIsDesktop] = useState(true);
  const [scrollCompact, setScrollCompact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MEDIA);
    const onViewportChange = () => setIsDesktop(mq.matches);
    onViewportChange();
    mq.addEventListener("change", onViewportChange);
    return () => mq.removeEventListener("change", onViewportChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    if (paused) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- mobile menu open: full bar on desktop
      setScrollCompact(false);
      return;
    }

    let rafId = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const applyScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      setScrollCompact((prev) => {
        if (y <= TOP_FULL_PX) return false;
        if (reduced) return y > TOP_FULL_PX;
        if (delta > SCROLL_DELTA_PX && y > MIN_SCROLL_BEFORE_COMPACT_PX) return true;
        if (delta < -SCROLL_DELTA_PX) return false;
        return prev;
      });

      lastScrollY.current = y;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(applyScroll);
    };

    lastScrollY.current = window.scrollY;
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [paused, isDesktop]);

  const compact = isDesktop ? (paused ? false : scrollCompact) : true;

  return { compact };
}
