"use client";

import { motion } from "framer-motion";

export function ArtHero() {
  return (
    <section className="relative h-[100svh] w-full bg-[#111] overflow-hidden flex items-center justify-center font-sans">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          src="/hero-video.mp4" 
          autoPlay 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-80 scale-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#111]/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto pt-[60px]">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-5 py-2 mb-12 border border-white/20 bg-white/5 backdrop-blur-md text-white/80 text-sm tracking-[0.2em] uppercase font-medium shadow-2xl transition-all cursor-default"
        >
          Виртуальная выставка Екатерины Разумовой
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-8 drop-shadow-2xl leading-[1.1] font-montserrat uppercase"
        >
          Искусство <br /> без границ
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-white/70 max-w-4xl mx-auto font-light tracking-wide mb-12 leading-relaxed font-inter"
        >
          Погрузитесь в цифровое пространство, где встречаются декоративно-прикладное ремесло и артивизм, смоляные океаны и лаконичная графика, динамическое сочетание материалов и техник, онлайн и оффлайн форматы.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <a href="#art-gallery" className="group relative px-8 py-4 bg-white text-black font-medium tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 text-sm sm:text-base uppercase">
            <span className="relative z-10">Смотреть галерею</span>
          </a>
          <a href="#about" className="px-8 py-4 text-white font-medium tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/15 hover:border-white/30 text-sm sm:text-base uppercase">
            Узнать больше
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#111111] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
