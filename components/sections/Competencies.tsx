"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { MotionReveal } from "@/components/shared/motion-reveal";

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
    items: ["Figma (Mobile & Desktop)", "Google Analytics", "Сборка и поддержка сайтов", "Antigravity и Claude Code (полный цикл от идеи до запуска)"]
  },
  {
    title: "Art",
    items: ["Эпоксидная смола", "Акрил", "Алкогольные чернила", "Текстурная паста", "Смешанные техники", "Предметы декора", "Картины", "Украшения", "Ёлочные игрушки"]
  }
];

export default function Competencies() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="competencies" className="py-24 scroll-mt-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.webp" 
          alt="Paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-[440px] lg:h-[670px] bg-gradient-to-b from-background from-[7%] via-background/40 via-[35%] to-transparent z-[15] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-48 lg:h-[500px] bg-gradient-to-t from-background to-transparent z-[15] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-20">
        <div className="text-center mb-16">
          <MotionReveal as="h2" variant="fade-up" className="text-3xl md:text-5xl font-bold uppercase text-white mb-4">
            Могу, Умею, <span className="text-primary">Практикую</span>
          </MotionReveal>
          <p className="text-text-muted text-lg">Компетенции, позволяющие закрывать проекты под ключ.</p>
        </div>

        <div className="space-y-4">
          {competencies.map((comp, index) => {
            const isOpen = openIndex === index;
            return (
              <MotionReveal
                key={comp.title}
                variant="fade-up"
                delay={index * 0.1}
                className="border border-white/10 rounded-xl overflow-hidden bg-surface/50"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hov:bg-white/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-xl font-semibold uppercase tracking-wide text-white">{comp.title}</h3>
                  <span
                    className={`text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    <ChevronDown size={24} />
                  </span>
                </button>
                
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
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
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
