"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface border-t border-white/5 text-center">
      <div className="container mx-auto px-6 max-w-3xl">
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
