"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cases = [
  { id: 1, title: "Мокап агентства недвижимости, 2023", category: "UI/UX & Web", image: "/placeholder.jpg" },
  { id: 2, title: "Мокап магазина с электроникой, 2023", category: "UI/UX & Web", image: "/placeholder.jpg" },
  { id: 3, title: "Проект своего дома, визуализация, реализация", category: "Design", image: "/placeholder.jpg" },
  { id: 4, title: "Проект по ландшафту для своего участка", category: "Design", image: "/placeholder.jpg" },
  { id: 5, title: "Мастер-класс на форуме смолянистов, 2021", category: "Art & PR", image: "/placeholder.jpg" },
  { id: 6, title: "Репортаж на местном ТВ, 2020", category: "PR & Media", image: "/placeholder.jpg" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-[#111111]">
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
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-48 lg:h-[500px] bg-gradient-to-t from-[#111111] to-transparent z-[15] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold uppercase text-white"
          >
            МОИ <span className="text-primary">РАБОТЫ</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-surface border border-white/5 mb-4">
                <Image 
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 photo-hover-effect opacity-60"
                />
              </div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{c.category}</p>
              <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors leading-tight">{c.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
