"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const competencies = [
  {
    title: "PR",
    items: ["Пресс-релизы", "Медиапланирование", "Коммуникация с журналистами", "Создание инфоповодов", "Инициирование публикаций", "Организация мероприятий (пресс-туры, пресс-конференции)"]
  },
  {
    title: "Тексты",
    items: ["Копирайтинг", "Журналистика", "Пресс-релизы", "Тексты для презентаций", "Посты для соцсетей", "SEO-тексты"]
  },
  {
    title: "SMM",
    items: ["Контент-планирование", "Визуал", "Монтаж видео для соцсетей", "Таргет"]
  },
  {
    title: "Обучение и консультации",
    items: ["Онлайн обучение", "Оффлайн обучение", "Администрирование онлайн-школы"]
  },
  {
    title: "UI/UX",
    items: ["Figma (Mobile & Desktop)", "Google Analytics", "Сборка и поддержка сайтов", "Антигравити и CloudCode (полный цикл от идеи до запуска)"]
  },
  {
    title: "Art",
    items: ["Эпоксидная смола", "Акрил", "Алкогольные чернила", "Текстурная паста", "Смешанные техники", "Предметы декора", "Картины", "Украшения", "Ёлочные игрушки"]
  }
];

export default function Competencies() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="approach" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold uppercase text-white mb-4"
          >
            Могу, Умею, <span className="text-primary">Практикую</span>
          </motion.h2>
          <p className="text-text-muted text-lg">Компетенции, позволяющие закрывать проекты под ключ.</p>
        </div>

        <div className="space-y-4">
          {competencies.map((comp, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={comp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/10 rounded-xl overflow-hidden bg-surface/50"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-xl font-semibold uppercase tracking-wide text-white">{comp.title}</h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                          {comp.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-text-muted">
                              <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
