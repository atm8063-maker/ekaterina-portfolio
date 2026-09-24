"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cases } from "@/lib/data";

export default function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.8;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // Convert vertical mouse wheel on the tape to horizontal smooth scroll
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const handleWheel = (e: WheelEvent) => {
      // If mostly vertical scrolling, redirect horizontally
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) * 0.5) {
        if (
          (e.deltaY > 0 && el.scrollLeft < el.scrollWidth - el.clientWidth - 5) ||
          (e.deltaY < 0 && el.scrollLeft > 5)
        ) {
          e.preventDefault();
          el.scrollBy({
            left: e.deltaY * 1.5,
            behavior: "auto"
          });
        }
      }
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  // Desktop mouse click & drag
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="cases" className="py-20 lg:py-24 relative overflow-hidden bg-[#111111]">
      {/* Clean Dark Paper Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.png" 
          alt="Paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
        />
      </div>

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 w-full h-[300px] lg:h-[450px] bg-gradient-to-b from-[#111111] via-[#111111]/50 to-transparent z-[15] pointer-events-none" />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-36 lg:h-[300px] bg-gradient-to-t from-[#111111] to-transparent z-[15] pointer-events-none" />

      {/* Header Container (Centered) */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-20">
        <div className="mb-6 md:mb-10 flex items-end justify-between">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold uppercase text-white font-montserrat mb-2"
            >
              КЕЙСЫ
            </motion.h2>
            {/* Mobile swipe indicator */}
            <div className="md:hidden inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/15 rounded-full text-[11px] font-mono font-bold tracking-wider text-[#14F1D9] uppercase">
              <span>←</span> Листайте кейсы <span>→</span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-white/20 text-white/70 hover:text-[#14F1D9] hover:border-[#14F1D9] transition-all cursor-pointer bg-[#161616]/60 backdrop-blur-sm"
              aria-label="Previous cases"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-white/20 text-white/70 hover:text-[#14F1D9] hover:border-[#14F1D9] transition-all cursor-pointer bg-[#161616]/60 backdrop-blur-sm"
              aria-label="Next cases"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Full-width Horizontal Scroll Track */}
      <div className="w-full relative z-20">
        <div 
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-10 px-6 sm:px-10 lg:px-12 xl:px-16 gap-6 md:gap-8 scroll-smooth select-none ${isDragging ? "cursor-grabbing" : "cursor-grab md:cursor-default"}`}
        >
          {cases.filter(c => !c.hidden).map((c, i) => {
            let img = "/placeholder.jpg";
            if (c.slug.includes('01-insigma')) img = "/case_01.jpg";
            else if (c.slug.includes('02-contact')) img = "/case_02.jpg";
            else if (c.slug.includes('03-pobeda')) img = "/case_03.jpg";
            else if (c.slug.includes('04-kart-motors')) img = "/case_04.jpg";
            else if (c.slug.includes('05-nick')) img = "/case_05.jpg";
            else if (c.slug.includes('06-mafia')) img = "/case_06.jpg";
            else if (c.slug.includes('08-mockup-real')) img = "/case_08.jpg";
            else if (c.slug.includes('09-mockup-elec')) img = "/case_09.jpg";
            else if (c.slug.includes('10-house')) img = "/case_10.jpg";
            else if (c.slug.includes('11-landscape')) img = "/case_11.jpg";
            else if (c.slug.includes('12-resin')) img = "/case_12.jpg";
            else if (c.slug.includes('13-local-tv-report')) img = "/case_13.jpg";
            else if (c.slug.includes('14-vertex')) img = "/case_14.jpg";

            return (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="w-[82vw] sm:w-[50vw] md:w-[40vw] lg:w-[380px] xl:w-[420px] shrink-0 snap-center group flex flex-col"
              >
                <Link href={c.customHref || "/cases/" + c.slug} className="block w-full h-full">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface border border-white/10 mb-5 group-hover:border-[#14F1D9]/40 transition-colors">
                    <Image 
                      src={img}
                      alt={c.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[#14F1D9] text-xs font-bold uppercase tracking-widest mb-2.5 font-montserrat">{c.tag}</p>
                      <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#14F1D9] transition-colors leading-snug mb-3 font-montserrat">{c.title}</h3>
                      <p className="text-sm text-white/60 mb-4 line-clamp-2 font-inter leading-relaxed">{c.description}</p>
                    </div>
                    <span className="flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-[#14F1D9] mt-1 font-montserrat">
                      Смотреть кейс 
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
