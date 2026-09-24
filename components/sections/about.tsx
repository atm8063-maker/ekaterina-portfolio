"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function About() {
  const [isUnderDev, setIsUnderDev] = useState(false);

  const handleAboutClick = () => {
    setIsUnderDev(true);
    setTimeout(() => {
      setIsUnderDev(false);
    }, 3000);
  };

  return (
    <section id="about" className="relative overflow-hidden bg-[#111111] text-white flex flex-col lg:flex-row items-center justify-between min-h-[100svh] lg:h-[100svh] py-12 lg:py-0 px-6 sm:px-12 lg:px-16 xl:px-24">
      {/* Clean Dark Paper Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.png" 
          alt="Paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
        />
      </div>

      {/* Seamless ultra-smooth blend gradient at the top & bottom */}
      <div className="absolute top-0 left-0 w-full h-[150px] lg:h-[220px] bg-gradient-to-b from-[#111111] via-[#111111]/60 to-transparent z-[15] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[150px] lg:h-[220px] bg-gradient-to-t from-[#111111] to-transparent z-[15] pointer-events-none" />

      {/* Text Content (Left on desktop, First on mobile) */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[54%] xl:w-[52%] flex flex-col justify-center order-1 lg:order-1 relative z-20 pb-2 lg:pb-0 pr-0 lg:pr-8 xl:pr-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3.2rem] font-bold uppercase mb-4 lg:mb-5 text-white font-montserrat leading-tight">
          МОЙ <span className="text-[#14F1D9]">ПОДХОД</span>
        </h2>
        
        <div className="space-y-3.5 lg:space-y-4 text-[#A3A3A3] text-sm sm:text-base lg:text-[1rem] xl:text-[1.12rem] font-medium leading-[1.65] lg:leading-[1.7] font-inter">
          <p className="w-full lg:w-[108%] xl:w-[112%]">
            Я — специалист полного цикла. Мой подход заключается в том, чтобы взять <span className="text-[#14F1D9]">идею</span> на стадии зарождения и довести её до финальной <span className="text-[#14F1D9]">реализации</span>. 
          </p>
          <p className="w-full lg:w-[108%] xl:w-[112%]">
            В мире, где узкая специализация часто приводит к разрыву между смыслами и формой, я <span className="text-[#14F1D9]">объединяю весь контент</span> в единое целое, органично сплетая между собой <span className="text-[#14F1D9]">тексты, дизайн, pr, маркетинг и технологии</span>. <span className="text-[#14F1D9]">Профильное образование, 20 лет работы с креативом и применение ИИ</span> позволяют мне видеть картину целиком и создавать продукты, которые не просто выглядят стильно и дорого, но и <span className="text-[#14F1D9]">решают конкретные бизнес-задачи</span>.
          </p>
          
          {/* Quote */}
          <div className="pt-1.5 pb-2">
            <div className="pl-4 lg:pl-5 border-l-[3px] border-[#14F1D9] italic font-semibold text-white/90 space-y-1 text-xs sm:text-sm lg:text-[0.95rem] xl:text-[1.05rem] w-full lg:w-[106%] xl:w-[110%]">
              <p>От первого черновика UX-текста до финального пикселя в интерфейсе.</p>
              <p>От начальной строки пресс-релиза до публикаций в Forbes.</p>
              <p>От поста в инстаграме до пресс-тура.</p>
            </div>
          </div>
          
          {/* Button (Desktop only here) */}
          <div className="hidden lg:block pt-2 relative">
            <button 
              type="button"
              onClick={handleAboutClick}
              className="inline-flex items-center gap-2 font-bold text-xs sm:text-sm md:text-base px-7 py-3.5 tracking-widest uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-montserrat whitespace-nowrap cursor-pointer bg-[#14F1D9] hover:bg-white text-[#111111]"
            >
              {isUnderDev ? 'В разработке (Скоро)' : 'ПОДРОБНЕЕ ОБО МНЕ'}
            </button>
            <AnimatePresence>
              {isUnderDev && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -top-10 left-0 bg-[#161616] text-[#14F1D9] border border-[#14F1D9]/40 text-xs px-3 py-1.5 rounded-lg shadow-xl font-montserrat font-semibold flex items-center gap-1.5 z-30 pointer-events-none whitespace-nowrap"
                >
                  <span>⏳</span>
                  <span>Раздел в разработке, скоро появится!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Visual Composition / Cutout Photo (Right on desktop, Below text on mobile, with mobile button underneath) */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="w-full lg:w-[46%] xl:w-[48%] order-2 lg:order-2 relative z-20 flex flex-col items-center lg:items-start justify-center lg:justify-end lg:h-[86svh] xl:h-[90svh] -mt-4 lg:-mt-6 xl:-mt-8"
      >
        <div className="relative w-full h-[380px] sm:h-[480px] lg:h-full max-w-[440px] sm:max-w-[520px] lg:max-w-none">
          <Image 
            src="/about-photo-cutout.png" 
            alt="Екатерина Разумова"
            fill
            className="object-contain object-top lg:object-right-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
            priority
          />
        </div>

        {/* Button (Mobile only: directly below photo) */}
        <div className="lg:hidden pt-4 pb-4 w-full flex flex-col items-center relative">
          <button 
            type="button"
            onClick={handleAboutClick}
            className="inline-flex items-center justify-center gap-2 font-bold text-sm px-8 py-4 tracking-widest uppercase transition-all shadow-lg hover:shadow-xl font-montserrat text-center w-full max-w-[320px] cursor-pointer bg-[#14F1D9] hover:bg-white text-[#111111]"
          >
            {isUnderDev ? 'В разработке (Скоро)' : 'ПОДРОБНЕЕ ОБО МНЕ'}
          </button>
          <AnimatePresence>
            {isUnderDev && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="mt-2 text-xs text-[#14F1D9] bg-[#161616] px-3 py-1.5 rounded-lg border border-[#14F1D9]/40 text-center font-montserrat shadow-lg pointer-events-none"
              >
                ⏳ Раздел в разработке, скоро появится!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
