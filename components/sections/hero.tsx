"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";

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

    let timeoutId: NodeJS.Timeout;
    const delays = [400, 1200, 2400, 1800, 3200, 2200, 3000];
    let stepIndex = 0;

    const scheduleNext = () => {
      const currentDelay = delays[stepIndex % delays.length];
      
      timeoutId = setTimeout(() => {
        setSplatters(prev => {
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
          // Keep initial splatters + up to 12 interactive splatters
          const initials = prev.filter(s => s.isInitial);
          const dynamic = prev.filter(s => !s.isInitial).slice(-12);
          return [...initials, ...dynamic, newSplat];
        });
        
        stepIndex++;
        scheduleNext();
      }, currentDelay);
    };

    scheduleNext();

    return () => clearTimeout(timeoutId);
  }, [isHovering]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      
      {/* MOBILE VERSION */}
      <div className="md:hidden relative w-full h-[100svh] overflow-hidden bg-[#111111] flex flex-col justify-end">
        {/* Dark Paper Background for Mobile */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/paper-bg-dark.png" 
            alt="Crumpled paper texture" 
            fill 
            className="object-cover opacity-60 mix-blend-screen"
            priority
          />
        </div>

        {/* Seamless ultra-smooth blend gradient at the top */}
        <div className="absolute top-0 left-0 right-0 w-full h-[35vh] bg-gradient-to-b from-[#111111] via-[#111111]/60 to-transparent z-[5] pointer-events-none" />

        {/* Mobile Splatter Backdrop Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div
            className="absolute mix-blend-screen"
            style={{
              left: "50%",
              top: "28%",
              transform: "translate(-50%, -50%) rotate(25deg) scale(2.2)",
              width: 320,
              height: 320
            }}
          >
            <img 
              src="/splatters/splatter_1.png" 
              alt="Splatter" 
              className="w-full h-full object-contain pointer-events-none"
              style={{ filter: "sepia(1) saturate(10) hue-rotate(140deg) brightness(1.2) opacity(0.35)" }}
            />
          </div>
        </div>

        {/* Full Height Portrait Photo Filling Mobile Viewport */}
        <div className="absolute inset-0 top-0 bottom-0 left-0 right-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full max-w-[540px]">
            <Image 
              src="/hero-cutout.png" 
              alt="Екатерина Разумова"
              fill
              className="object-cover object-[center_top] sm:object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
              priority
            />
          </div>
        </div>
        
        {/* Gradient overlay for perfect readability over the shirt */}
        <div className="absolute bottom-0 left-0 right-0 h-[52vh] bg-gradient-to-t from-[#111111] from-25% via-[#111111]/85 via-65% to-transparent z-15 pointer-events-none" />
        
        {/* Text on the shirt area (strictly below the face) */}
        <div className="relative z-20 pb-7 sm:pb-9 px-4 sm:px-6 text-center w-full pointer-events-none">
          <div className="pointer-events-auto">
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-2 leading-[1.05] text-white font-montserrat drop-shadow-2xl">
              ЕКАТЕРИНА<br/>РАЗУМОВА
            </h1>
            <p className="text-[#14F1D9] font-bold text-xs sm:text-sm mb-2.5 tracking-widest uppercase font-montserrat drop-shadow-md">
              CREATIVE GENERALIST
            </p>
            <p className="text-[11px] sm:text-xs text-white/90 leading-relaxed font-medium font-inter drop-shadow-md max-w-[340px] mx-auto">
              Texts & Design • PR & Media • UX/UI + AI • Mixed Art
            </p>
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="hidden md:flex relative w-full h-[100svh] overflow-hidden bg-[#111111]"
      >
        
        {/* Dark Paper Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/paper-bg-dark.png" 
            alt="Crumpled paper texture" 
            fill 
            className="object-cover opacity-60 mix-blend-screen"
            priority
          />
        </div>

        {/* Seamless ultra-smooth blend gradient at the top (covers paper, but NOT photo) */}
        <div className="absolute top-0 left-0 right-0 w-full h-[85vh] bg-gradient-to-b from-[#111111] from-[10%] via-[#111111]/40 via-[60%] to-transparent z-[5] pointer-events-none" />

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
                src="/splatters/splatter_1.png" 
                alt="Splatter" 
                className="w-full h-full object-contain pointer-events-none"
                style={{ filter: "sepia(1) saturate(10) hue-rotate(140deg) brightness(1.2) opacity(0.35)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Desktop Content Centered Container (Max 1440px to keep laptop proportions on ultrawide) */}
        <div className="relative w-full max-w-[1440px] h-full mx-auto z-10 flex items-center justify-between px-6 lg:px-12 pointer-events-none">
          {/* Full Height Photo Cutout on Desktop */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-[5rem] bottom-0 left-[2%] lg:left-[4%] w-[48%] xl:w-[45%] z-10 pointer-events-none"
          >
            <Image 
              src="/hero-cutout.png" 
              alt="Екатерина Разумова"
              fill
              className="object-contain object-[left_bottom] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              priority
            />
          </motion.div>

          {/* Typography */}
          <div className="absolute top-[5rem] bottom-0 right-[2%] lg:right-[4%] z-20 flex items-center justify-end pointer-events-none">
            <div className="text-center pointer-events-auto mt-20">
              <h1 className="text-[4.2rem] lg:text-[5.8rem] xl:text-[7.2rem] font-black uppercase tracking-tighter mb-4 leading-[0.98] text-white font-montserrat drop-shadow-2xl mix-blend-difference">
                ЕКАТЕРИНА<br/>РАЗУМОВА
              </h1>
              <p className="text-[#14F1D9] font-bold text-xl lg:text-2xl xl:text-3xl mb-6 tracking-widest uppercase font-montserrat drop-shadow-md">
                Creative Generalist
              </p>
              <p className="text-sm lg:text-base xl:text-lg text-white/90 leading-relaxed font-medium font-inter drop-shadow-md">
                Texts & Design • PR & Media • UX/UI + AI • Mixed Art
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient fade for smooth transition to next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 lg:h-[200px] bg-gradient-to-t from-[#111111] to-transparent z-[15] pointer-events-none" />
      </div>
    </section>
  );
}
