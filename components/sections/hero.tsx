"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { useLanguage } from "@/components/language-provider";

type SplatterData = {
  id: number;
  x: number | string;
  y: number | string;
  rotation: number;
  scale: number;
  flipX: number;
  flipY: number;
  isInitial?: boolean;
};

const INITIAL_SPLATTERS: SplatterData[] = [
  // 1. Top right, above title corner
  { id: 1, x: "82%", y: "20%", rotation: -20, scale: 1.7, flipX: -1, flipY: 1, isInitial: true },
  // 2. Far left, behind outer contour
  { id: 2, x: "16%", y: "45%", rotation: -40, scale: 1.8, flipX: 1, flipY: 1, isInitial: true },
  // 3. Lower right, below tags/subtitle
  { id: 3, x: "70%", y: "78%", rotation: 35, scale: 1.6, flipX: 1, flipY: -1, isInitial: true },
];

export default function Hero() {
  const { isEn } = useLanguage();
  const [splatters, setSplatters] = useState<SplatterData[]>(INITIAL_SPLATTERS);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mousePosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }, []);

  useEffect(() => {
    if (!isHovering) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;
    const delays = [400, 1200, 2400, 1800, 3200, 2200, 3000];
    let stepIndex = 0;

    const scheduleNext = () => {
      if (cancelled) return;
      const currentDelay = delays[stepIndex % delays.length];

      timeoutId = setTimeout(() => {
        if (cancelled) return;
        setSplatters((prev) => {
          const newSplat: SplatterData = {
            id: Date.now(),
            x: mousePosRef.current.x,
            y: mousePosRef.current.y,
            rotation: Math.random() * 360,
            scale: 0.6 + Math.random() * 1.6,
            flipX: Math.random() > 0.5 ? -1 : 1,
            flipY: Math.random() > 0.5 ? -1 : 1,
            isInitial: false,
          };
          const initials = prev.filter((s) => s.isInitial);
          const dynamic = prev.filter((s) => !s.isInitial).slice(-12);
          return [...initials, ...dynamic, newSplat];
        });

        stepIndex++;
        scheduleNext();
      }, currentDelay);
    };

    scheduleNext();

    return () => {
      cancelled = true;
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [isHovering]);

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      
      {/* MOBILE VERSION */}
      <div className="md:hidden relative w-full overflow-hidden bg-background h-viewport-full">
        {/* Dark Paper Background for Mobile */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/paper-bg-dark.webp" 
            alt="Crumpled paper texture" 
            fill 
            className="object-cover opacity-60 mix-blend-screen"
          />
        </div>

        {/* Seamless ultra-smooth blend gradient at the top (covers paper, but NOT photo) */}
        <div className="absolute top-0 left-0 right-0 w-full h-[85vh] bg-gradient-to-b from-background from-[10%] via-background/40 via-[60%] to-transparent z-[5] pointer-events-none" />

        {/* Mobile Splatter Backdrop Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div
            className="absolute mix-blend-screen"
            style={{
              left: "45%",
              top: "30%",
              transform: "translate(-50%, -50%) rotate(25deg) scale(2.2)",
              width: 300,
              height: 300
            }}
          >
            <img 
              src="/splatters/splatter_1.webp" 
              alt="Splatter" 
              className="w-full h-full object-contain pointer-events-none"
              style={{ filter: "sepia(1) saturate(10) hue-rotate(140deg) brightness(1.2) opacity(0.35)" }}
            />
          </div>
          <div
            className="absolute mix-blend-screen"
            style={{
              left: "75%",
              top: "65%",
              transform: "translate(-50%, -50%) rotate(-40deg) scale(1.8)",
              width: 300,
              height: 300
            }}
          >
            <img 
              src="/splatters/splatter_1.webp" 
              alt="Splatter" 
              className="w-full h-full object-contain pointer-events-none"
              style={{ filter: "sepia(1) saturate(10) hue-rotate(140deg) brightness(1.2) opacity(0.3)" }}
            />
          </div>
        </div>

        {/* Full screen photo cutout bounded strictly below the header */}
        <div className="absolute top-[5rem] bottom-0 left-0 right-0 z-10 pointer-events-none">
          <Image 
            src="/hero-cutout.webp" 
            alt={isEn ? "Ekaterina Razumova" : "Екатерина Разумова"}
            fill
            className="object-cover object-top"
            priority
            fetchPriority="high"
          />
        </div>
        
        {/* Gradient overlay for readability at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10 pointer-events-none" />
        
        {/* Text on the shoulder area (bottom zone) */}
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-6 right-4 sm:right-6 z-20">
          <h1 className="text-4xl font-bold uppercase tracking-tight mb-2 leading-none text-white font-montserrat drop-shadow-lg">
            {isEn ? <>Ekaterina<br/>Razumova</> : <>Екатерина<br/>Разумова</>}
          </h1>
          <p className="text-primary font-bold text-sm mb-4 tracking-widest uppercase font-montserrat drop-shadow-md">
            Creative Generalist
          </p>
          <p className="text-xs text-white/90 leading-relaxed font-medium font-inter drop-shadow-md">
            Texts & Design • PR & Media • UX/UI + AI • Mixed Art
          </p>
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="hidden md:flex relative w-full overflow-hidden bg-background h-viewport-full"
      >
        
        {/* Dark Paper Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/paper-bg-dark.webp" 
            alt="Crumpled paper texture" 
            fill 
            className="object-cover opacity-60 mix-blend-screen"
          />
        </div>

        {/* Seamless ultra-smooth blend gradient at the top (covers paper, but NOT photo) */}
        <div className="absolute top-0 left-0 right-0 w-full h-[85vh] bg-gradient-to-b from-background from-[10%] via-background/40 via-[60%] to-transparent z-[5] pointer-events-none" />

        {/* Splatter Animations Layer (on top of paper, behind photo) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {splatters.map((splat) => (
            <motion.div
              key={splat.id}
              initial={
                splat.isInitial
                  ? { scaleX: splat.scale * splat.flipX, scaleY: splat.scale * splat.flipY, opacity: 1 }
                  : { scaleX: 0, scaleY: 0, opacity: 0 }
              }
              animate={{ scaleX: splat.scale * splat.flipX, scaleY: splat.scale * splat.flipY, opacity: 1 }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
              className="absolute mix-blend-screen"
              style={{
                left: splat.x,
                top: splat.y,
                x: "-50%",
                y: "-50%",
                rotate: splat.rotation,
                width: 320,
                height: 320
              }}
            >
              <img 
                src="/splatters/splatter_1.webp" 
                alt="Splatter" 
                className="w-full h-full object-contain pointer-events-none"
                style={{ filter: "sepia(1) saturate(10) hue-rotate(140deg) brightness(1.2) opacity(0.35)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Composition frozen at 1440px (approved ultrawide fix, PR 23.09): beyond that,
            extra width goes to side margins instead of pulling photo and text apart.
            Left/right offsets match that fix; photo width is height-driven (fills the
            frame instead of leaving a gap on short-but-wide windows) with a cap near
            the fix's 45-48% so it doesn't outgrow the intended visual weight. Type size
            is a continuous function of the leftover space so it can't collide with the
            photo at any width in between — see clamp below. */}
        <div className="absolute inset-0 top-[5rem] mx-auto w-full max-w-[1440px]">
          {/* Full Height Photo Cutout on Desktop */}
          <div
            className="absolute top-0 bottom-0 left-[2%] lg:left-[4%] z-10 pointer-events-none motion-reveal motion-reveal--fade-up motion-reveal--on-load is-visible"
            style={{
              width: "min(70%, calc((100svh - 5rem) * 896 / 1200))",
              ["--motion-reveal-duration" as string]: "0.8s",
            }}
          >
            <Image
              src="/hero-cutout.webp"
              alt={isEn ? "Ekaterina Razumova" : "Екатерина Разумова"}
              fill
              className="object-contain object-[left_bottom] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              priority
              fetchPriority="high"
            />
          </div>

          {/* Typography */}
          <div className="absolute top-0 bottom-0 left-0 right-[2%] lg:right-[4%] z-20 flex items-center justify-end pointer-events-none -translate-x-[60px] lg:-translate-x-[90px] xl:-translate-x-[110px]">
            <div
              className="text-center pointer-events-auto mt-20"
              /* Блок не может быть шире свободного места справа от лица —
                 иначе подпись снизу растягивает его и сдвигает заголовок влево. */
              style={{ maxWidth: "calc(0.94 * min(100vw, 1440px) - 0.74 * min(0.7 * min(100vw, 1440px), 0.7467 * (100svh - 5rem)) - 28px)" }}
            >
              <h1
                className="font-black uppercase tracking-tighter mb-4 leading-[0.98] text-white font-montserrat drop-shadow-2xl mix-blend-difference"
                /* Ширина заголовка = 6.33 × кегль. Кегль берём такой, чтобы текст
                   начинался правее лица: лицо занимает левые 74% картинки, сама
                   картинка тянется по высоте (0.7467 — её пропорция), ширина —
                   min(46% контейнера, высота) — те же числа, что у фото выше.
                   0.94/28px — суммарные поля слева (2-4%) и справа (2-4%) от тикета. */
                style={{
                  fontSize:
                    "clamp(2.25rem, calc((0.94 * min(100vw, 1440px) - 0.74 * min(0.7 * min(100vw, 1440px), 0.7467 * (100svh - 5rem)) - 28px) / 6.33), 7.2rem)",
                }}
              >
                {isEn ? <>EKATERINA<br/>RAZUMOVA</> : <>ЕКАТЕРИНА<br/>РАЗУМОВА</>}
              </h1>
              <p
                className="text-primary font-bold mb-6 tracking-widest uppercase font-montserrat drop-shadow-md"
                style={{ fontSize: "clamp(1rem, 1.85vw, 1.875rem)" }}
              >
                Creative Generalist
              </p>
              <p
                className="text-white/90 leading-relaxed font-medium font-inter drop-shadow-md"
                style={{ fontSize: "clamp(0.875rem, 1.1vw, 1.125rem)" }}
              >
                Texts & Design • PR & Media • UX/UI + AI • Mixed Art
              </p>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade for smooth transition to next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 lg:h-[200px] bg-gradient-to-t from-background to-transparent z-[15] pointer-events-none" />
      </div>
    </section>
  );
}
