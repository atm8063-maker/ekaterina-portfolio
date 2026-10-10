"use client";

import React from "react";

const data = {
  programs: ["Claude Code", "Figma", "SketchUp", "Illustrator", "Antigravity", "Planoplan", "Photoshop"],
  media: ["Forbes", "Коммерсантъ", "РБК", "Business FM", "Ведомости", "СМИ"],
  skills: [
    "Копирайтинг", 
    "Журналистика", 
    "Контент", 
    "SMM", 
    "SEO", 
    "Медиапланирование", 
    "Реклама", 
    "Пресс-конференции", 
    "Пресс-туры", 
    "Event", 
    "Кураторство", 
    "AI-генерация", 
    "UX/UI Дизайн"
  ],
  industries: ["Honda", "Honda Civic Cup", "Авто", "Девелопмент", "Элитная недвижимость", "Арх.бюро", "Журфак МГУ", "Contented", "Resin Art", "Амбассадор", "Брендированная продукция"]
};

const createMarqueeContent = (items: string[]) => {
  return [...items, ...items, ...items, ...items];
};

export function MarqueeRow({ 
  type, 
  variant,
  direction = "left", 
  speed = "40s", 
  className = "" 
}: { 
  type: keyof typeof data, 
  variant?: keyof typeof data | "white-solid" | "cyan-solid" | "white-border" | "cyan-border",
  direction?: "left" | "right", 
  speed?: string, 
  className?: string 
}) {
  const items = data[type];
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  
  const styleKey = variant || type;
  let itemStyle = "";
  if (styleKey === "programs" || styleKey === "white-solid") {
    itemStyle = "bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)]";
  } else if (styleKey === "media" || styleKey === "cyan-solid") {
    itemStyle = "bg-primary text-background font-bold shadow-[0_0_15px_rgba(20,241,217,0.3)]";
  } else if (styleKey === "skills" || styleKey === "white-border") {
    itemStyle = "bg-transparent border border-white/80 text-white font-semibold";
  } else if (styleKey === "industries" || styleKey === "cyan-border") {
    itemStyle = "bg-transparent border border-primary text-primary font-semibold";
  }

  return (
    <section className={`bg-background overflow-hidden relative z-20 w-full ${className || 'py-8 lg:py-12'}`}>
      <div className="marquee-pause w-full flex whitespace-nowrap overflow-hidden">
        <div
          className={`marquee-track ${animationClass} flex gap-4 md:gap-6 px-2`}
          style={{ ["--marquee-duration" as string]: speed }}
        >
          {createMarqueeContent(items).map((tag, i) => (
            <div key={`${type}-${i}`} className={`${itemStyle} uppercase tracking-wider px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs flex-shrink-0`}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
