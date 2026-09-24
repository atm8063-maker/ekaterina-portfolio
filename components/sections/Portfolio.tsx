"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cases } from "@/lib/data";

export default function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="cases" className="py-24 relative overflow-hidden bg-[#111111]">
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
      <div className="absolute top-0 left-0 w-full h-[440px] lg:h-[670px] bg-gradient-to-b from-[#111111] from-[7%] via-[#111111]/40 via-[35%] to-transparent z-[15] pointer-events-none" />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-48 lg:h-[500px] bg-gradient-to-t from-[#111111] to-transparent z-[15] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="mb-12 flex items-end justify-between">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold uppercase text-white"
          >
            КЕЙСЫ
          </motion.h2>

          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-white/20 text-white/50 hover:text-[#14F1D9] hover:border-[#14F1D9] transition-all"
              aria-label="Previous cases"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-white/20 text-white/50 hover:text-[#14F1D9] hover:border-[#14F1D9] transition-all"
              aria-label="Next cases"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 -mx-6 px-6 gap-6 md:gap-8 scroll-smooth"
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
                transition={{ delay: i * 0.1 }}
                className="w-[85vw] md:w-[45vw] lg:w-[400px] shrink-0 snap-center group flex flex-col"
              >
                <Link href={c.customHref || "/cases/" + c.slug} className="block w-full h-full">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface border border-white/5 mb-6">
                    <Image 
                      src={img}
                      alt={c.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[#14F1D9] text-xs font-bold uppercase tracking-widest mb-3">{c.tag}</p>
                      <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#14F1D9] transition-colors leading-snug mb-4">{c.title}</h3>
                      <p className="text-sm text-white/60 mb-4 line-clamp-2">{c.description}</p>
                    </div>
                    <span className="flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-[#14F1D9] mt-2">
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
