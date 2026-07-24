"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#111111] text-center">
      {/* Clean Dark Paper Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.png" 
          alt="Paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
        />
      </div>

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 w-full h-[440px] lg:h-[670px] bg-gradient-to-b from-[#111111] from-[7%] via-[#111111]/40 via-[35%] to-transparent z-[15] pointer-events-none" />
      {/* Bottom gradient fade (optional for last section, but keeping for consistency or future additions) */}
      <div className="absolute bottom-0 left-0 w-full h-48 lg:h-[500px] bg-gradient-to-t from-[#111111] to-transparent z-[15] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-3xl relative z-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold uppercase text-white tracking-widest mb-12"
        >
          СВЯЗАТЬСЯ <span className="text-primary block mt-2">СО МНОЙ</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a 
            href="mailto:example@example.com" 
            className="px-10 py-5 bg-primary text-black font-bold uppercase tracking-widest rounded-none hover:bg-white transition-colors"
          >
            Написать на Email
          </a>
          <a 
            href="#" 
            className="px-10 py-5 bg-transparent border border-primary text-primary font-bold uppercase tracking-widest rounded-none hover:bg-primary/10 transition-colors"
          >
            Telegram
          </a>
        </motion.div>
      </div>
      
      <div className="mt-24 pt-8 text-center text-text-muted text-sm tracking-widest uppercase">
        <p>© {new Date().getFullYear()} Екатерина Разумова. Creative Generalist.</p>
      </div>
    </section>
  );
}
