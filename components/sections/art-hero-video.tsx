"use client";

import { useEffect, useRef, useState } from "react";

/** Pause once the hero has left the screen, same window as other clips. */
const PLAY_MARGIN = "320px 240px";
/** Dissolve long enough for the second clip's different crop to blend in. */
const FADE_MS = 1400;
const FADE_EASE = "cubic-bezier(0.77, 0, 0.175, 1)";
const CLIP_CLASS =
  "absolute inset-0 h-full w-full scale-[1.15] object-cover";

export function ArtHeroVideo() {
  const mainRef = useRef<HTMLVideoElement>(null);
  const loopRef = useRef<HTMLVideoElement>(null);
  const [loopOn, setLoopOn] = useState(false);
  const [mainSettled, setMainSettled] = useState(false);

  useEffect(() => {
    const main = mainRef.current;
    const loop = loopRef.current;
    if (!main || !loop) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fadeSeconds = FADE_MS / 1000;
    let near = true;
    let usingLoop = false;
    let cancelled = false;

    const playActive = () => {
      if (!near || document.hidden || cancelled) return;
      const el = usingLoop ? loop : main;
      if (!usingLoop && el.ended) return;
      void el.play().catch(() => {});
    };
    const pauseBoth = () => {
      main.pause();
      loop.pause();
    };

    let waitingForLoop = false;
    const onLoopReady = () => {
      waitingForLoop = false;
      beginFade();
    };
    const beginFade = () => {
      if (cancelled || usingLoop || reduced) return;
      if (loop.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
        if (waitingForLoop) return;
        waitingForLoop = true;
        loop.addEventListener("canplay", onLoopReady, { once: true });
        return;
      }
      usingLoop = true;
      void loop.play().catch(() => {});
      setLoopOn(true);
    };

    const onTime = () => {
      if (usingLoop || reduced || cancelled || !Number.isFinite(main.duration)) return;
      const remaining = main.duration - main.currentTime;
      if (main.ended || remaining <= fadeSeconds) beginFade();
    };

    const armLoop = () => {
      if (reduced || cancelled) return;
      loop.preload = "auto";
      loop.load();
    };

    main.addEventListener("ended", onTime);
    main.addEventListener("timeupdate", onTime);
    main.addEventListener("seeked", onTime);
    if (main.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) armLoop();
    else main.addEventListener("loadeddata", armLoop, { once: true });

    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          near = entries.some((entry) => entry.isIntersecting);
          if (near) playActive();
          else pauseBoth();
        },
        { rootMargin: PLAY_MARGIN },
      );
      io.observe(main);
    }

    const onVisibility = () => {
      if (document.hidden) pauseBoth();
      else playActive();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelled = true;
      io?.disconnect();
      main.removeEventListener("ended", onTime);
      main.removeEventListener("timeupdate", onTime);
      main.removeEventListener("seeked", onTime);
      main.removeEventListener("loadeddata", armLoop);
      loop.removeEventListener("canplay", onLoopReady);
      document.removeEventListener("visibilitychange", onVisibility);
      pauseBoth();
    };
  }, []);

  const fadeStyle = {
    transition: `opacity ${FADE_MS}ms ${FADE_EASE}`,
  };

  return (
    <div className="absolute inset-0 opacity-80">
      <video
        ref={mainRef}
        src="/hero-video.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        fetchPriority="high"
        onTransitionEnd={(event) => {
          if (event.propertyName === "opacity" && event.target === mainRef.current && loopOn) {
            setMainSettled(true);
          }
        }}
        className={`${CLIP_CLASS} ${mainSettled ? "invisible" : ""}`}
        style={{ ...fadeStyle, opacity: loopOn ? 0 : 1 }}
      />
      <video
        ref={loopRef}
        src="/art-aesthetics-loop.mp4"
        muted
        playsInline
        loop
        preload="none"
        className={CLIP_CLASS}
        style={{ ...fadeStyle, opacity: loopOn ? 1 : 0 }}
      />
    </div>
  );
}
