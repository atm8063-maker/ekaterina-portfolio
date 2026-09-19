"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#111111] text-white flex flex-col lg:flex-row items-stretch min-h-[100vh] lg:min-h-[800px]">
      {/* Clean Dark Paper Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.png" 
          alt="Paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
        />
      </div>

      {/* Seamless ultra-smooth blend gradient at the top & bottom (covers paper and photo, but NOT text) */}
      <div className="absolute top-0 left-0 w-full h-[300px] lg:h-[400px] bg-gradient-to-b from-[#111111] via-[#111111]/60 to-transparent z-[15] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[200px] lg:h-[400px] bg-gradient-to-t from-[#111111] to-transparent z-[15] pointer-events-none" />

      {/* Text Content (Left side on desktop, wider to prevent vertical stretching) */}
      <motion.div 
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[58%] xl:w-[56%] flex flex-col justify-center order-1 lg:order-1 px-6 sm:px-12 lg:pl-16 xl:pl-24 lg:pr-6 relative z-20 py-12 lg:py-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6 text-white font-montserrat">
          МОЙ <br className="lg:hidden" /><span className="text-[#14F1D9]">ПОДХОД</span>
        </h2>
        <div className="space-y-5 text-[#A3A3A3] text-base md:text-lg lg:text-[1.15rem] font-medium leading-[1.7] font-inter">
          <p className="w-full max-w-none">
            Я — специалист полного цикла. Мой подход заключается в том, чтобы взять <span className="text-[#14F1D9]">идею</span> на стадии зарождения и довести её до финальной <span className="text-[#14F1D9]">реализации</span>. 
          </p>
          <p className="w-full max-w-none">
            В мире, где узкая специализация часто приводит к разрыву между смыслами и формой, я <span className="text-[#14F1D9]">объединяю весь контент</span> в единое целое, органично сплетая между собой <span className="text-[#14F1D9]">тексты, дизайн, pr, маркетинг и технологии</span>. <span className="text-[#14F1D9]">Профильное образование, 20 лет работы с креативом и применение ИИ</span> позволяют мне видеть картину целиком и создавать продукты, которые не просто выглядят стильно и дорого, но и <span className="text-[#14F1D9]">решают конкретные бизнес-задачи</span>.
          </p>
          
          {/* Quote */}
          <div className="pt-2 pb-4">
            <div className="pl-6 border-l-[3px] border-[#14F1D9] italic font-semibold text-white/90 space-y-1.5 text-sm md:text-base lg:text-[1.05rem]">
              <p>От первого черновика UX-текста до финального пикселя в интерфейсе.</p>
              <p>От начальной строки пресс-релиза до публикаций в Forbes.</p>
              <p>От поста в инстаграме до пресс-тура.</p>
            </div>
          </div>
          
          {/* Button */}
          <div className="pt-2">
            <Link href="#contact" className="inline-block bg-[#14F1D9] hover:bg-white text-[#111111] font-bold text-sm md:text-base px-8 py-3.5 tracking-widest uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 font-montserrat whitespace-nowrap">
              ПОДРОБНЕЕ ОБО МНЕ
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Visual Composition / Cutout Photo (Right side on desktop, 15% smaller and lifted higher) */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="w-full lg:w-[42%] xl:w-[44%] order-2 lg:order-2 relative z-20 flex items-start lg:items-start justify-center lg:justify-end px-4 sm:px-8 lg:pr-8 xl:pr-16 pt-4 lg:pt-8 pb-8 lg:pb-0"
      >
        <div className="relative w-full max-w-[480px] lg:max-w-none h-[480px] sm:h-[580px] lg:h-[720px] xl:h-[780px]">
          <Image 
            src="/about-photo-cutout.png" 
            alt="Екатерина Разумова"
            fill
            className="object-contain object-top lg:object-right-top drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
