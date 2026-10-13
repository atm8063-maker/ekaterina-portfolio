"use client";

import { useState } from "react";
import Image from "next/image";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { useLanguage } from "@/components/language-provider";

export default function About() {
  const { isEn } = useLanguage();
  const [isUnderDev, setIsUnderDev] = useState(false);
  const moreAboutMeLabel = isEn ? "More About Me" : "ПОДРОБНЕЕ ОБО МНЕ";
  const comingSoonLabel = isEn ? "Coming Soon" : "В разработке (Скоро)";
  const comingSoonToast = isEn ? "This section is coming soon!" : "Раздел в разработке, скоро появится!";

  const handleAboutClick = () => {
    setIsUnderDev(true);
    setTimeout(() => {
      setIsUnderDev(false);
    }, 3000);
  };

  return (
    <section id="about" className="relative overflow-hidden bg-background text-white flex flex-col lg:flex-row items-center justify-between min-h-[100svh] lg:h-[100svh] py-12 lg:py-0 px-6 sm:px-12 lg:px-16 xl:px-24">
      {/* Clean Dark Paper Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.webp" 
          alt="Paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
        />
      </div>

      {/* Seamless ultra-smooth blend gradient at the top & bottom */}
      <div className="absolute top-0 left-0 w-full h-[150px] lg:h-[220px] bg-gradient-to-b from-background via-background/60 to-transparent z-[15] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[150px] lg:h-[220px] bg-gradient-to-t from-background to-transparent z-[15] pointer-events-none" />

      {/* Text Content (Left on desktop, First on mobile) */}
      <MotionReveal
        variant="fade-left"
        duration={0.8}
        className="w-full lg:w-[54%] xl:w-[52%] flex flex-col justify-center order-1 lg:order-1 relative z-20 pb-2 lg:pb-0 pr-0 lg:pr-8 xl:pr-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3.2rem] font-bold uppercase mb-4 lg:mb-5 text-white font-montserrat leading-tight">
          {isEn ? <>MY <span className="text-primary">APPROACH</span></> : <>МОЙ <span className="text-primary">ПОДХОД</span></>}
        </h2>

        <div className="space-y-3.5 lg:space-y-4 text-muted-foreground text-sm sm:text-base lg:text-[1rem] xl:text-[1.12rem] font-medium leading-[1.65] lg:leading-[1.7] font-inter">
          {isEn ? (
            <>
              <p className="w-full lg:w-[108%] xl:w-[112%]">
                I&apos;m a full-cycle specialist. My approach is to take an <span className="text-primary">idea</span> at its earliest stage and carry it through to a finished <span className="text-primary">execution</span>.
              </p>
              <p className="w-full lg:w-[108%] xl:w-[112%]">
                In a world where narrow specialization often splits meaning from form, I <span className="text-primary">bring all the content together</span> into one whole, organically weaving <span className="text-primary">copy, design, PR, marketing and technology</span>. <span className="text-primary">A relevant degree, 20 years in creative work, and hands-on AI use</span> let me see the whole picture and build products that don&apos;t just look sharp and expensive, but <span className="text-primary">solve real business problems</span>.
              </p>
            </>
          ) : (
            <>
              <p className="w-full lg:w-[108%] xl:w-[112%]">
                Я — специалист полного цикла. Мой подход заключается в том, чтобы взять <span className="text-primary">идею</span> на стадии зарождения и довести её до финальной <span className="text-primary">реализации</span>.
              </p>
              <p className="w-full lg:w-[108%] xl:w-[112%]">
                В мире, где узкая специализация часто приводит к разрыву между смыслами и формой, я <span className="text-primary">объединяю весь контент</span> в единое целое, органично сплетая между собой <span className="text-primary">тексты, дизайн, pr, маркетинг и технологии</span>. <span className="text-primary">Профильное образование, 20 лет работы с креативом и применение ИИ</span> позволяют мне видеть картину целиком и создавать продукты, которые не просто выглядят стильно и дорого, но и <span className="text-primary">решают конкретные бизнес-задачи</span>.
              </p>
            </>
          )}

          {/* Quote */}
          <div className="pt-1.5 pb-2">
            <div className="pl-4 lg:pl-5 border-l-[3px] border-primary italic font-semibold text-white/90 space-y-1 text-xs sm:text-sm lg:text-[0.95rem] xl:text-[1.05rem] w-full lg:w-[106%] xl:w-[110%]">
              {isEn ? (
                <>
                  <p>From the first draft of UX copy to the final pixel in the interface.</p>
                  <p>From the opening line of a press release to a feature in Forbes.</p>
                  <p>From an Instagram post to a press tour.</p>
                </>
              ) : (
                <>
                  <p>От первого черновика UX-текста до финального пикселя в интерфейсе.</p>
                  <p>От начальной строки пресс-релиза до публикаций в Forbes.</p>
                  <p>От поста в инстаграме до пресс-тура.</p>
                </>
              )}
            </div>
          </div>
          
          {/* Button (Desktop only here) */}
          <div className="hidden lg:block pt-2 relative">
            <button 
              type="button"
              onClick={handleAboutClick}
              className="inline-flex items-center gap-2 font-bold text-xs sm:text-sm md:text-base px-7 py-3.5 tracking-widest uppercase transition-all shadow-lg hov:shadow-xl hov:-translate-y-0.5 font-montserrat whitespace-nowrap cursor-pointer bg-primary hov:bg-white text-background"
            >
              {isUnderDev ? comingSoonLabel : moreAboutMeLabel}
            </button>
            {isUnderDev && (
              <div
                role="status"
                className="absolute -top-10 left-0 bg-surface text-primary border border-primary/40 text-xs px-3 py-1.5 rounded-lg shadow-xl font-montserrat font-semibold flex items-center gap-1.5 z-30 pointer-events-none whitespace-nowrap motion-reveal motion-reveal--fade-up motion-reveal--on-load is-visible"
              >
                <span>⏳</span>
                <span>{comingSoonToast}</span>
              </div>
            )}
          </div>
        </div>
      </MotionReveal>

      {/* Visual Composition / Cutout Photo (Right on desktop, Below text on mobile, with mobile button underneath) */}
      <MotionReveal
        variant="fade-right"
        duration={0.9}
        className="w-full lg:w-[46%] xl:w-[48%] order-2 lg:order-2 relative z-20 flex flex-col items-center lg:items-start justify-center lg:justify-end lg:h-[86svh] xl:h-[90svh] -mt-4 lg:-mt-6 xl:-mt-8"
      >
        <div className="relative w-full h-[380px] sm:h-[480px] lg:h-full max-w-[440px] sm:max-w-[520px] lg:max-w-none">
          <Image 
            src="/about-photo-cutout.webp" 
            alt={isEn ? "Ekaterina Razumova" : "Екатерина Разумова"}
            fill
            className="object-contain object-top lg:object-right-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
          />
        </div>

        {/* Button (Mobile only: directly below photo) */}
        <div className="lg:hidden pt-4 pb-4 w-full flex flex-col items-center relative">
          <button 
            type="button"
            onClick={handleAboutClick}
            className="inline-flex items-center justify-center gap-2 font-bold text-sm px-8 py-4 tracking-widest uppercase transition-all shadow-lg hov:shadow-xl font-montserrat text-center w-full max-w-[320px] cursor-pointer bg-primary hov:bg-white text-background"
          >
            {isUnderDev ? comingSoonLabel : moreAboutMeLabel}
          </button>
          {isUnderDev && (
            <div
              role="status"
              className="mt-2 text-xs text-primary bg-surface px-3 py-1.5 rounded-lg border border-primary/40 text-center font-montserrat shadow-lg pointer-events-none motion-reveal motion-reveal--fade-up motion-reveal--on-load is-visible"
            >
              ⏳ {comingSoonToast}
            </div>
          )}
        </div>
      </MotionReveal>
    </section>
  );
}
