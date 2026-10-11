"use client";

import { MotionReveal } from "@/components/shared/motion-reveal";
import { ArtHeroVideo } from "@/components/sections/art-hero-video";
import { useLanguage } from "@/components/language-provider";

export function ArtHero() {
  const { isEn } = useLanguage();
  return (
    <section id="hero" className="relative h-[100svh] w-full bg-background overflow-hidden flex items-center justify-center font-sans scroll-mt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <ArtHeroVideo />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto pt-[60px]">
        
        <MotionReveal
          onLoad
          variant="fade-down"
          delay={0.2}
          className="inline-block px-5 py-2 mb-12 border border-white/20 bg-white/5 backdrop-blur-md text-white/80 text-sm tracking-[0.2em] uppercase font-medium shadow-2xl transition-all cursor-default"
        >
          {isEn ? "A Virtual Exhibition by Ekaterina Razumova" : "Виртуальная выставка Екатерины Разумовой"}
        </MotionReveal>

        <MotionReveal
          as="h1"
          onLoad
          variant="fade-up"
          delay={0.4}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-8 drop-shadow-2xl leading-[1.1] font-montserrat uppercase"
        >
          {isEn ? <>Art <br /> Without Borders</> : <>Искусство <br /> без границ</>}
        </MotionReveal>

        <MotionReveal
          as="p"
          onLoad
          variant="fade-up"
          delay={0.6}
          className="text-base sm:text-lg md:text-xl text-white/70 max-w-4xl mx-auto font-light tracking-wide mb-12 leading-relaxed font-inter"
        >
          {isEn
            ? "Step into a digital space where applied craft meets artivism, resin oceans meet clean graphic lines, a dynamic mix of materials and techniques, online and offline formats."
            : "Погрузитесь в цифровое пространство, где встречаются декоративно-прикладное ремесло и артивизм, смоляные океаны и лаконичная графика, динамическое сочетание материалов и техник, онлайн и оффлайн форматы."}
        </MotionReveal>

        <MotionReveal
          onLoad
          variant="fade-up"
          delay={0.8}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <a href="#space" className="btn-press group relative px-8 py-4 bg-white text-black font-medium tracking-wider overflow-hidden hov:shadow-[0_10px_24px_rgba(0,0,0,0.28)] text-sm sm:text-base uppercase">
            <span className="relative z-10">{isEn ? "View Gallery" : "Смотреть галерею"}</span>
          </a>
          <a href="#numbers" className="btn-press px-8 py-4 text-white font-medium tracking-wider border border-white/10 bg-white/5 backdrop-blur-md hov:bg-white/15 hov:border-white/30 text-sm sm:text-base uppercase">
            {isEn ? "Learn More" : "Узнать больше"}
          </a>
        </MotionReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
