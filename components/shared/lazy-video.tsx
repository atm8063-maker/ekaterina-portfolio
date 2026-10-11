"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = React.ComponentProps<"video"> & {
  /** Load on first paint. Use for the opening screen and an open lightbox. */
  eager?: boolean;
};

/** Start the file well before it can be seen, including fast flicks and horizontal strips. */
const ACTIVATE_MARGIN = "2200px 900px";
/** Play only while it is actually near the screen, so off-screen clips do not keep decoding. */
const PLAY_MARGIN = "320px 240px";

export function LazyVideo({
  eager = false,
  src,
  autoPlay = true,
  preload,
  muted = true,
  playsInline = true,
  loop,
  ...rest
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);

  useEffect(() => {
    if (eager) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: ACTIVATE_MARGIN },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !shouldLoad || autoPlay === false) return;

    let near = false;
    const tryPlay = () => {
      if (!near || document.hidden || el.ended) return;
      void el.play().catch(() => {});
    };
    const tryPause = () => {
      el.pause();
    };

    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver === "undefined") {
      near = true;
      tryPlay();
    } else {
      io = new IntersectionObserver(
        (entries) => {
          near = entries.some((entry) => entry.isIntersecting);
          if (near) tryPlay();
          else tryPause();
        },
        { rootMargin: PLAY_MARGIN },
      );
      io.observe(el);
    }

    const onVisibility = () => {
      if (document.hidden) tryPause();
      else tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      el.pause();
    };
  }, [shouldLoad, autoPlay]);

  return (
    <video
      ref={ref}
      {...rest}
      src={shouldLoad ? src : undefined}
      autoPlay={Boolean(shouldLoad && autoPlay)}
      muted={muted}
      playsInline={playsInline}
      loop={loop}
      preload={shouldLoad ? (preload ?? "auto") : "none"}
    />
  );
}
