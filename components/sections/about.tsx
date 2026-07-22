"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#111111]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Composition (2 photos + stroke) - MATCHING FIGMA GRIDS */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square max-w-[500px] mx-auto"
          >
            {/* Background Brush Stroke */}
            <div className="absolute inset-0 bg-brush opacity-80 scale-[1.3] -rotate-[15deg] translate-x-8 translate-y-8" style={{ backgroundImage: "url('/brush.png')" }} />
            
            {/* Photo 1 (Main/Larger) */}
            <div className="absolute top-[5%] left-[0%] w-[65%] h-[80%] rounded-xl overflow-hidden border-[6px] border-[#111111] shadow-2xl z-10">
              <Image 
                src="/about1.jpg" // Awaiting user upload
                alt="About photo 1"
                fill
                className="object-cover photo-hover-effect"
              />
            </div>
            
            {/* Photo 2 (Smaller/Overlapping) */}
            <div className="absolute bottom-[5%] right-[0%] w-[55%] h-[60%] rounded-xl overflow-hidden border-[6px] border-[#111111] shadow-2xl z-20">
              <Image 
                src="/about2.jpg" // Awaiting user upload
                alt="About photo 2"
                fill
                className="object-cover photo-hover-effect"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8 text-white tracking-widest" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Creative <span className="text-[#14F1D9]">Generalist</span>
            </h2>
            <div className="space-y-6 text-[#A3A3A3] text-lg md:text-xl leading-[1.8]" style={{ fontFamily: 'var(--font-inter)' }}>
              <p>
                Я — специалист полного цикла. Мой подход заключается в том, чтобы взять идею на стадии зарождения и довести её до финальной, безупречной реализации. 
              </p>
              <p>
                В мире, где узкая специализация часто приводит к разрыву между смыслами и формой, я объединяю тексты, дизайн, маркетинг и технологии. Это позволяет мне видеть картину целиком и создавать продукты, которые не просто выглядят стильно и дорого, но и решают конкретные бизнес-задачи.
              </p>
              <p className="pl-6 border-l-[3px] border-[#14F1D9] italic font-semibold text-white/90">
                "От первого черновика пресс-релиза до финального пикселя в интерфейсе."
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
