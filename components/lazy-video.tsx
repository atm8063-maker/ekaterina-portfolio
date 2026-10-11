"use client";

import { useEffect, useRef, useState, VideoHTMLAttributes } from "react";

type LazyVideoProps = VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
  /** How far before entering the viewport to start loading. Default: 300px. */
  rootMargin?: string;
};

/**
 * Drop-in replacement for <video> that defers fetching `src` until the element
 * is about to enter the viewport (IntersectionObserver), instead of every
 * <video autoPlay> on the page loading and playing at once on first paint.
 */
export function LazyVideo({ src, rootMargin = "300px", autoPlay, muted, ...rest }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    if (shouldLoad && autoPlay) {
      const el = ref.current;
      if (!el) return;
      // The `muted` JSX attribute only sets the element's *default* muted
      // state per the HTML spec — it isn't guaranteed to sync the live
      // `.muted` IDL property on elements React creates via the DOM (rather
      // than parsed from HTML text). Set it explicitly before play() so
      // autoplay never has a chance to start with audio.
      el.muted = !!muted;
      el.play().catch(() => {});
    }
  }, [shouldLoad, autoPlay, muted]);

  return (
    <video
      ref={ref}
      src={shouldLoad ? src : undefined}
      preload="none"
      autoPlay={shouldLoad ? autoPlay : false}
      muted={muted}
      {...rest}
    />
  );
}
