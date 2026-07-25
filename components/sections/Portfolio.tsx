"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cases = [
  { id: 1, title: "Мокап агентства недвижимости, 2023", category: "UI/UX & Web", image: "/placeholder.jpg" },
  { id: 2, title: "Мокап магазина с электроникой, 2023", category: "UI/UX & Web", image: "/placeholder.jpg" },
  { id: 3, title: "Проект своего дома, визуализация, реализация", category: "Design", image: "/placeholder.jpg" },
  { id: 4, title: "Проект по ландшафту для своего участка", category: "Design", image: "/placeholder.jpg" },
  { id: 5, title: "Мастер-класс на форуме смолянистов, 2021", category: "Art & PR", image: "/placeholder.jpg" },
  { id: 6, title: "Репортаж на местном ТВ, 2020", category: "PR & Media", image: "/placeholder.jpg" },
];

export default function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.8; // Scroll by 80% of the container width
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-[#111111]">
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
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-[85vw] md:w-[45vw] lg:w-[400px] shrink-0 snap-center group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface border border-white/5 mb-6">
                <Image 
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[#14F1D9] text-xs font-bold uppercase tracking-widest mb-3">{c.category}</p>
                  <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#14F1D9] transition-colors leading-snug mb-4">{c.title}</h3>
                </div>
                <span className="flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-white mt-4">
                  Смотреть кейс 
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
