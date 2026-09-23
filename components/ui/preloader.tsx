"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after initial load or timeout
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 500);
    };

    if (document.readyState === "complete") {
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    } else {
      window.addEventListener("load", handleLoad);
      const fallbackTimer = setTimeout(() => setIsLoading(false), 1500);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#111111] text-white pointer-events-auto"
        >
          {/* Animated Glow Backdrop */}
          <div className="absolute w-[280px] h-[280px] bg-[#14F1D9]/15 rounded-full blur-3xl animate-pulse pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Logo Silhouette */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <div 
                className="w-full h-full bg-[#14F1D9] animate-pulse" 
                style={{
                  maskImage: 'url(/logo.png)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskImage: 'url(/logo.png)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                }}
              />
            </div>

            {/* Title */}
            <div className="text-center space-y-1.5">
              <div className="text-xs sm:text-sm font-bold font-montserrat tracking-[0.3em] uppercase text-white">
                ЕКАТЕРИНА РАЗУМОВА
              </div>
              <div className="text-[10px] sm:text-xs font-mono text-[#14F1D9] tracking-widest uppercase">
                Загрузка портфолио...
              </div>
            </div>

            {/* Subtle Progress Bar */}
            <div className="w-36 h-[2px] bg-white/10 overflow-hidden rounded-full mt-2">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#14F1D9] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
