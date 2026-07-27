"use client";

import React from "react";

const data = {
  programs: ["CloudCode", "Figma", "SketchUp", "Illustrator", "Антигравити", "Planoplan"],
  media: ["Forbes", "Коммерсант", "РБК", "БизнесFM", "Ведомости", "СМИ"],
  skills: ["Копирайтинг", "Реклама", "Пресс-конференции", "Пресс-туры", "Event", "Кураторство", "AI-генерация", "UX/UI Дизайн", "Медиапланирование"],
  industries: ["Honda", "Honda Civic Cup", "Авто", "Девелопмент", "Элитная недвижимость", "Арх.бюро", "Журфак МГУ", "Contented", "Resin Art", "Амбассадор", "Брендированная продукция"]
};

const createMarqueeContent = (items: string[]) => {
  return [...items, ...items, ...items, ...items];
};

export function MarqueeRow({ type, direction = "left", speed = "40s", className = "" }: { type: keyof typeof data, direction?: "left" | "right", speed?: string, className?: string }) {
  const items = data[type];
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  
  let itemStyle = "";
  if (type === "programs") {
    itemStyle = "bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)]";
  } else if (type === "media") {
    itemStyle = "bg-[#14F1D9] text-[#111111] font-bold shadow-[0_0_15px_rgba(20,241,217,0.3)]";
  } else if (type === "skills") {
    itemStyle = "bg-transparent border border-white/80 text-white font-semibold";
  } else if (type === "industries") {
    itemStyle = "bg-transparent border border-[#14F1D9] text-[#14F1D9] font-semibold";
  }

  return (
    <section className={`bg-[#111111] overflow-hidden relative z-20 w-full ${className || 'py-8 lg:py-12'}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
        .marquee-container:hover .animate-marquee-left,
        .marquee-container:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}} />

      <div className="marquee-container w-full flex whitespace-nowrap overflow-hidden">
        <div className={`${animationClass} flex gap-4 md:gap-6 px-2 w-max`} style={{ animationDuration: speed }}>
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
