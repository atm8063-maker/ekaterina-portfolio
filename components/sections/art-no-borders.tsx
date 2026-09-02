'use client';

import { motion } from "framer-motion";

export function ArtNoBorders() {
  return (
    <section className="py-16 lg:py-28 relative overflow-hidden text-white border-b border-white/10">
      <div className="w-full px-6 sm:px-12 lg:px-[8%] xl:px-[12%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center order-1"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-montserrat mb-6 leading-[1.1]">
              ШИРОКИЙ <br className="hidden sm:inline" />
              <span className="text-[#14F1D9]">ДИАПАЗОН СМОЛЫ</span>
            </h2>
            
            <p className="text-[#A3A3A3] text-base sm:text-lg lg:text-xl font-medium leading-[1.7] font-inter max-w-[560px]">
              Эпоксидная смола отлично демонстрирует свою универсальность при создании любых форматов. Я работаю как с малыми формами, так и с крупными: от миниатюрных украшений до мебели. Картины, домашний декор, посуда, арт-объекты, ёлочные игрушки — смола отлично подходит для любой категории.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#14F1D9]/25 via-[#074F98]/20 to-transparent rounded-[32px] blur-2xl z-0 pointer-events-none"></div>

              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] bg-[#111111]">
                <video 
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
