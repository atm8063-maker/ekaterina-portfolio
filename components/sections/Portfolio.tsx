"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getCases } from "@/lib/data";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { useLanguage } from "@/components/language-provider";

function caseCoverImage(slug: string): string {
  if (slug.includes("01-insigma")) return "/case_01.webp";
  if (slug.includes("02-contact")) return "/case_02.webp";
  if (slug.includes("03-pobeda")) return "/case_03.webp";
  if (slug.includes("04-kart-motors")) return "/case_04.webp";
  if (slug.includes("05-nick")) return "/case_05.webp";
  if (slug.includes("06-mafia")) return "/case_06.webp";
  if (slug.includes("08-mockup-real")) return "/case_08.webp";
  if (slug.includes("09-mockup-elec")) return "/case_09.webp";
  if (slug.includes("10-house")) return "/case_10.webp";
  if (slug.includes("11-landscape")) return "/case_11.webp";
  if (slug.includes("12-resin")) return "/case_12.webp";
  if (slug.includes("13-local-tv-report")) return "/case_13.webp";
  if (slug.includes("14-vertex")) return "/case_14.webp";
  return "/placeholder.webp";
}

export default function Portfolio() {
  const { lang, isEn } = useLanguage();
  const cases = getCases(lang);
  const visibleCases = cases.filter((c) => !c.hidden);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    visibleCases.forEach((c) => {
      const src = caseCoverImage(c.slug);
      const img = new window.Image();
      img.src = src;
    });
  }, [visibleCases]);

  const syncActiveIndexFromScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    const probe = el.scrollLeft + el.clientWidth * 0.35;
    let best = 0;
    let bestDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - probe);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    activeIndexRef.current = best;
  }, []);

  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const onScroll = () => {
      syncActiveIndexFromScroll();
      updateScrollState();
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [syncActiveIndexFromScroll, updateScrollState]);

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(visibleCases.length - 1, index));
    activeIndexRef.current = clamped;
    cardRefs.current[clamped]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const scroll = (direction: "left" | "right") => {
    const delta = direction === "left" ? -1 : 1;
    scrollToIndex(activeIndexRef.current + delta);
  };

  return (
    <section id="cases" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/paper-clean-dark.webp"
          alt="Paper texture"
          fill
          className="object-cover opacity-70 mix-blend-screen"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-[440px] lg:h-[670px] bg-gradient-to-b from-background from-[7%] via-background/40 via-[35%] to-transparent z-[15] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-48 lg:h-[500px] bg-gradient-to-t from-background to-transparent z-[15] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="mb-6 md:mb-12 flex items-end justify-between">
          <div>
            <MotionReveal as="h2" variant="fade-up" className="text-3xl md:text-5xl font-bold uppercase text-white font-montserrat mb-2">
              {isEn ? "CASE STUDIES" : "КЕЙСЫ"}
            </MotionReveal>
            {/* Mobile-only swipe hint */}
            <div className="md:hidden inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/15 rounded-full text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
              <span>←</span> {isEn ? "Swipe cases" : "Листайте кейсы"} <span>→</span>
            </div>
          </div>

          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-white/20 text-white/50 hov:text-primary hov:border-primary transition-all"
              aria-label="Previous cases"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-white/20 text-white/50 hov:text-primary hov:border-primary transition-all"
              aria-label="Next cases"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div className="relative">
          {/* Edge fade masks so a peeking next/prev card fades into the background instead of hard-clipping. Only shown once there's actually a card cut off in that direction — otherwise they darken the fully-visible first/last card for no reason. */}
          {canScrollLeft && (
            <div className="hidden md:block absolute top-0 bottom-12 left-0 w-24 lg:w-40 bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
          )}
          {canScrollRight && (
            <div className="hidden md:block absolute top-0 bottom-12 right-0 w-24 lg:w-40 bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />
          )}

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 -mx-6 px-6 gap-6 md:gap-8 scroll-smooth"
          >
            {visibleCases.map((c, i) => {
              const img = caseCoverImage(c.slug);

              return (
                <div
                  key={c.slug}
                  ref={(node) => {
                    cardRefs.current[i] = node;
                  }}
                  data-case-card
                  className="w-[85vw] md:w-[min(45vw,420px)] lg:w-[min(calc((100vw-7rem)/3),400px)] shrink-0 snap-start group flex flex-col"
                >
                  <Link
                    href={c.customHref || "/cases/" + c.slug}
                    scroll={false}
                    className="block w-full h-full"
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface border border-white/5 mb-6">
                      <Image
                        src={img}
                        alt={c.title}
                        fill
                        sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 400px"
                        className="object-contain transition-transform duration-500 group-hov:scale-105 opacity-60 group-hov:opacity-100"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">{c.tag}</p>
                        <h3 className="text-xl md:text-2xl font-semibold text-white group-hov:text-primary transition-colors leading-snug mb-4">
                          {c.title}
                        </h3>
                        <p className="text-sm text-white/60 mb-4 line-clamp-2">{c.description}</p>
                      </div>
                      <span className="flex items-center gap-2 text-sm font-semibold text-white/70 group-hov:text-primary mt-2">
                        {isEn ? "View case study" : "Смотреть кейс"}
                        <svg className="w-4 h-4 transition-transform group-hov:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
