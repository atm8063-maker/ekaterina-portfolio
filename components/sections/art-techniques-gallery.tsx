"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

export type TechniqueMediaItem = {
  src: string;
  type: "image" | "video";
  title: string;
  tag: string;
};

const SEGMENT_GAP_PX = 12; /* gap-3 between duplicated strips */
const DRAG_CLICK_THRESHOLD_PX = 8;
const AUTO_SCROLL_PX_PER_FRAME = 0.45;

function TechniqueStripCard({
  item,
  itemIndex,
  scrollRoot,
}: {
  item: TechniqueMediaItem;
  itemIndex: number;
  scrollRoot: React.RefObject<HTMLDivElement | null>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeSrc, setActiveSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (item.type !== "video") return;
    const card = cardRef.current;
    const video = videoRef.current;
    if (!card || !video) return;

    const root = scrollRoot.current;
    const attachSrc = () => {
      setActiveSrc(item.src);
    };

    const loadObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        attachSrc();
        loadObserver.disconnect();
      },
      { root: null, rootMargin: "1800px 700px" },
    );

    const playObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          attachSrc();
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { root, threshold: [0, 0.35, 0.6] },
    );

    loadObserver.observe(card);
    playObserver.observe(card);
    return () => {
      loadObserver.disconnect();
      playObserver.disconnect();
      video.pause();
    };
  }, [item.src, item.type, scrollRoot]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activeSrc) return;
    const rootRect = scrollRoot.current?.getBoundingClientRect();
    const rect = video.getBoundingClientRect();
    const visible = rootRect
      ? rect.right > rootRect.left &&
        rect.left < rootRect.right &&
        rect.bottom > rootRect.top &&
        rect.top < rootRect.bottom
      : rect.bottom > 0 && rect.top < window.innerHeight;
    if (!visible) return;
    void video.play().catch(() => {});
  }, [activeSrc, scrollRoot]);

  return (
    <div
      ref={cardRef}
      data-technique-index={itemIndex}
      className="technique-strip-card group relative flex h-[140px] w-auto shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-none border border-white/15 bg-surface shadow-md transition-all hover:border-primary"
    >
      {item.type === "video" ? (
        <div className="relative flex h-[140px] w-auto items-center justify-center bg-black">
          <video
            ref={videoRef}
            src={activeSrc}
            loop
            muted
            playsInline
            preload={activeSrc ? "auto" : "none"}
            className="block h-[140px] w-auto max-w-none object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute right-1.5 top-1.5 border border-primary/60 bg-black/80 p-1 text-primary">
            <Play className="h-2.5 w-2.5 fill-primary" />
          </div>
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="block h-[140px] w-auto max-w-none object-contain transition-transform duration-300 group-hover:scale-105"
        />
      )}
    </div>
  );
}

type ArtTechniquesGalleryProps = {
  items: TechniqueMediaItem[];
  onOpenLightbox: (index: number) => void;
};

export function ArtTechniquesGallery({ items, onOpenLightbox }: ArtTechniquesGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLDivElement>(null);
  const loopWidthRef = useRef(0);
  const drag = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
    pointerId: -1,
    capturing: false,
  });
  const autoScrollPausedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const [stripReady, setStripReady] = useState(false);

  const measureLoop = useCallback(() => {
    const segment = segmentRef.current;
    if (!segment) return 0;
    const w = segment.offsetWidth + SEGMENT_GAP_PX;
    loopWidthRef.current = w;
    return w;
  }, []);

  const normalizeScroll = useCallback(() => {
    const el = scrollRef.current;
    const loop = loopWidthRef.current;
    if (!el || loop <= 0) return;

    let x = el.scrollLeft;
    if (x <= 0) {
      x += loop;
    } else if (x >= loop * 2) {
      x -= loop;
    } else if (x + el.clientWidth >= el.scrollWidth - 2) {
      x -= loop;
    }
    if (x !== el.scrollLeft) el.scrollLeft = x;
  }, []);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const apply = () => {
      const loop = measureLoop();
      if (loop > 0) {
        el.scrollLeft = loop;
        setStripReady(true);
      }
    };

    apply();

    const segment = segmentRef.current;
    if (!segment) return;

    const ro = new ResizeObserver(() => {
      apply();
    });
    ro.observe(segment);

    return () => ro.disconnect();
  }, [items.length, measureLoop]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => normalizeScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [normalizeScroll]);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const tick = () => {
      const el = scrollRef.current;
      if (el && !autoScrollPausedRef.current && loopWidthRef.current > 0) {
        el.scrollLeft += AUTO_SCROLL_PX_PER_FRAME;
        normalizeScroll();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [normalizeScroll, stripReady]);

  const openFromPointer = (e: React.PointerEvent<HTMLDivElement>) => {
    const hit = document.elementFromPoint(e.clientX, e.clientY);
    const card = hit?.closest<HTMLElement>("[data-technique-index]");
    if (!card) return;
    const index = Number(card.dataset.techniqueIndex);
    if (!Number.isNaN(index)) onOpenLightbox(index);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || e.button !== 0) return;
    autoScrollPausedRef.current = true;
    drag.current = {
      isDown: true,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
      moved: false,
      pointerId: e.pointerId,
      capturing: false,
    };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || !drag.current.isDown || e.pointerId !== drag.current.pointerId) return;
    const delta = e.clientX - drag.current.startX;
    if (Math.abs(delta) <= DRAG_CLICK_THRESHOLD_PX) return;

    if (!drag.current.moved) {
      drag.current.moved = true;
      el.setPointerCapture(e.pointerId);
      drag.current.capturing = true;
      el.classList.add("cursor-grabbing");
      el.classList.remove("cursor-grab");
    }
    el.scrollLeft = drag.current.scrollLeft - delta;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.isDown || e.pointerId !== drag.current.pointerId) return;

    const wasTap = !drag.current.moved;
    drag.current.isDown = false;
    autoScrollPausedRef.current = false;

    const el = scrollRef.current;
    if (drag.current.capturing && el?.hasPointerCapture(e.pointerId)) {
      el.releasePointerCapture(e.pointerId);
    }
    el?.classList.remove("cursor-grabbing");
    el?.classList.add("cursor-grab");
    normalizeScroll();

    if (wasTap) openFromPointer(e);
  };

  const renderSegment = (copy: "a" | "b", ariaHidden?: boolean) => (
    <div
      ref={copy === "a" ? segmentRef : undefined}
      aria-hidden={ariaHidden || undefined}
      className={`flex gap-3 ${copy === "a" ? "pl-6" : "pr-6"}`}
    >
      {items.map((item, idx) => (
        <TechniqueStripCard
          key={`${copy}-${item.src}-${idx}`}
          item={item}
          itemIndex={idx}
          scrollRoot={scrollRef}
        />
      ))}
    </div>
  );

  return (
    <div
      ref={scrollRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerCancel={endDrag}
      onDragStart={(e) => e.preventDefault()}
      onMouseEnter={() => {
        autoScrollPausedRef.current = true;
      }}
      onMouseLeave={() => {
        if (!drag.current.isDown) autoScrollPausedRef.current = false;
      }}
      className="group/techniques-strip marquee-pause relative z-20 w-full cursor-grab select-none overflow-x-auto overflow-y-hidden py-2 hide-scrollbar"
      style={{ visibility: stripReady ? "visible" : "hidden" }}
    >
      <div className="flex w-max gap-3">
        {renderSegment("a")}
        {renderSegment("b", true)}
      </div>
    </div>
  );
}
