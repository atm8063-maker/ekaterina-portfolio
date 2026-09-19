"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#111111] text-white flex flex-col lg:flex-row items-center justify-between min-h-[100svh] lg:h-[100svh] py-12 lg:py-0 px-6 sm:px-12 lg:px-16 xl:px-24">
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
        className="w-full lg:w-[54%] xl:w-[52%] flex flex-col justify-center order-1 lg:order-1 relative z-20 pb-4 lg:pb-0 pr-0 lg:pr-6 xl:pr-10"
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
          <div className="hidden lg:block pt-2">
            <Link href="#contact" className="inline-block bg-[#14F1D9] hover:bg-white text-[#111111] font-bold text-xs sm:text-sm md:text-base px-7 py-3.5 tracking-widest uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-montserrat whitespace-nowrap">
              ПОДРОБНЕЕ ОБО МНЕ
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Visual Composition / Cutout Photo (Right on desktop, Below text on mobile, slightly lifted & closer to text) */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="w-full lg:w-[46%] xl:w-[48%] order-2 lg:order-2 relative z-20 flex flex-col items-center lg:items-start justify-center lg:justify-start lg:h-[88svh] xl:h-[92svh] -mt-2 lg:-mt-10 xl:-mt-14 lg:-ml-4 xl:-ml-6"
      >
        <div className="relative w-full h-[380px] sm:h-[480px] lg:h-full max-w-[450px] sm:max-w-[540px] lg:max-w-none">
          <Image 
            src="/about-photo-cutout.png" 
            alt="Екатерина Разумова"
            fill
            className="object-contain object-top lg:object-left-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
            priority
          />
        </div>

        {/* Button (Mobile only: directly below photo) */}
        <div className="lg:hidden pt-4 pb-4 w-full flex justify-center">
          <Link href="#contact" className="inline-block bg-[#14F1D9] hover:bg-white text-[#111111] font-bold text-sm px-8 py-4 tracking-widest uppercase transition-all shadow-lg hover:shadow-xl font-montserrat text-center">
            ПОДРОБНЕЕ ОБО МНЕ
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
