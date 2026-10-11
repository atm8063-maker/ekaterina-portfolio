'use client';

import Image from "next/image";
import { LazyVideo } from "@/components/shared/lazy-video";
import { MotionReveal } from "@/components/shared/motion-reveal";

export function ArtNoBorders() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden text-white bg-background">
      {/* Clean Dark Paper Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.webp" 
          alt="Paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
        />
      </div>

      {/* Top & bottom gradient blend fades */}
      <div className="absolute top-0 left-0 w-full h-24 lg:h-36 bg-gradient-to-b from-background via-background/60 to-transparent z-[15] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-36 bg-gradient-to-t from-background via-background/60 to-transparent z-[15] pointer-events-none" />

      <div className="w-full px-6 sm:px-12 lg:px-[8%] xl:px-[12%] relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <MotionReveal
            variant="fade-left"
            duration={0.8}
            className="lg:col-span-7 flex flex-col justify-center order-1"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-montserrat mb-6 leading-[1.1]">
              ШИРОКИЙ <br className="hidden sm:inline" />
              <span className="text-primary">ДИАПАЗОН СМОЛЫ</span>
            </h2>
            
            <p className="text-muted-foreground text-base sm:text-lg lg:text-xl font-medium leading-[1.7] font-inter max-w-[560px]">
              Эпоксидная смола отлично демонстрирует свою универсальность при создании любых форматов. Я работаю как с малыми формами, так и с крупными: от миниатюрных украшений до мебели. Картины, домашний декор, посуда, арт-объекты, ёлочные игрушки — смола отлично подходит для любой категории.
            </p>
          </MotionReveal>

          <MotionReveal
            variant="fade-up"
            delay={0.2}
            duration={0.8}
            className="lg:col-span-5 order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/25 via-[#074F98]/20 to-transparent rounded-[32px] blur-2xl z-0 pointer-events-none"></div>

              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] bg-background">
                <LazyVideo
                  src="/art-video-1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto aspect-[9/16] object-cover block"
                />

                <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/15 rounded-full flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest text-white uppercase shadow-lg">
                  RESIN IN MOTION
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
