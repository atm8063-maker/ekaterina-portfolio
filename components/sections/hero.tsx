"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";

type SplatterData = {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  flipX: number;
  flipY: number;
};

export default function Hero() {
  const [splatters, setSplatters] = useState<SplatterData[]>([]);
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
    const delays = [500, 1500, 3000, 2300, 4000, 2700, 3700];
    let stepIndex = 0;

    const scheduleNext = () => {
      const currentDelay = delays[stepIndex % delays.length];
      const isFirst = stepIndex === 0;
      
      timeoutId = setTimeout(() => {
        setSplatters(prev => {
          const newSplat: SplatterData = {
            id: Date.now(),
            x: mousePosRef.current.x,
            y: mousePosRef.current.y,
            rotation: Math.random() * 360,
            // First splatter is small (0.3-0.5), subsequent are normal size (0.5-2.0)
            scale: isFirst ? 0.3 + Math.random() * 0.2 : 0.5 + Math.random() * 1.5,
            flipX: Math.random() > 0.5 ? -1 : 1,
            flipY: Math.random() > 0.5 ? -1 : 1,
          };
          return [...prev, newSplat].slice(-15); // keep max 15 splatters
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
      <div className="md:hidden relative w-full h-[100svh] overflow-hidden bg-[#111111]">
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

        {/* Seamless ultra-smooth blend gradient at the top (covers paper, but NOT photo) */}
        <div className="absolute top-0 left-0 right-0 w-full h-[85vh] bg-gradient-to-b from-[#111111] from-[10%] via-[#111111]/40 via-[60%] to-transparent z-[5] pointer-events-none" />

        {/* Full screen photo cutout bounded strictly below the header */}
        <div className="absolute top-[5rem] bottom-0 left-0 right-0 z-10 pointer-events-none">
          <Image 
            src="/hero-cutout.png" 
            alt="Екатерина Разумова"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        
        {/* Gradient overlay for readability at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent z-10 pointer-events-none" />
        
        {/* Text on the shoulder area (bottom zone) */}
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-6 right-4 sm:right-6 z-20">
          <h1 className="text-4xl font-bold uppercase tracking-tight mb-2 leading-none text-white font-montserrat drop-shadow-lg">
            Екатерина<br/>Разумова
          </h1>
          <p className="text-[#14F1D9] font-bold text-sm mb-4 tracking-widest uppercase font-montserrat drop-shadow-md">
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
              initial={{ scaleX: 0, scaleY: 0, opacity: 0 }}
              animate={{ scaleX: splat.scale * splat.flipX, scaleY: splat.scale * splat.flipY, opacity: 1 }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
              className="absolute mix-blend-screen"
              style={{
                left: splat.x,
                top: splat.y,
                x: "-50%",
                y: "-50%",
                rotate: splat.rotation,
                width: 300,
                height: 300
              }}
            >
              <img 
                src="/splatters/splatter_1.png" 
                alt="Splatter" 
                className="w-full h-full object-contain pointer-events-none"
                style={{ filter: "sepia(1) saturate(10) hue-rotate(140deg) brightness(1.2) opacity(0.3)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Full Height Photo Cutout on Desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-[5rem] bottom-0 left-[10%] lg:left-[15%] w-[45%] xl:w-[40%] z-10 pointer-events-none"
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
        <div className="absolute top-[5rem] bottom-0 left-0 right-[5%] lg:right-[10%] z-20 flex items-center justify-end pointer-events-none translate-x-[4px]">
          <div className="text-center pointer-events-auto mt-20">
            <h1 className="text-[4.5rem] lg:text-[6.5rem] xl:text-[8rem] font-black uppercase tracking-tighter mb-4 leading-[0.98] text-white font-montserrat drop-shadow-2xl mix-blend-difference">
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
        
        {/* Bottom gradient fade for smooth transition to next section */}
        <div className="absolute bottom-0 left-0 w-full h-48 lg:h-[500px] bg-gradient-to-t from-[#111111] to-transparent z-[15] pointer-events-none" />
      </div>
    </section>
  );
}
