"use client";

import React from "react";
import { buildMarqueeHalf } from "@/lib/marquee-sequence";

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
    "UX/UI Дизайн",
  ],
  industries: [
    "Honda",
    "Honda Civic Cup",
    "Авто",
    "Девелопмент",
    "Элитная недвижимость",
    "Арх.бюро",
    "Журфак МГУ",
    "Contented",
    "Resin Art",
    "Амбассадор",
    "Брендированная продукция",
  ],
};

function MarqueePills({
  tags,
  type,
  itemStyle,
}: {
  tags: string[];
  type: string;
  itemStyle: string;
}) {
  return (
    <>
      {tags.map((tag, i) => (
        <div
          key={`${type}-${i}-${tag}`}
          className={`${itemStyle} shrink-0 rounded-full px-4 py-2 text-[10px] uppercase tracking-wider md:px-5 md:py-2.5 md:text-xs`}
        >
          {tag}
        </div>
      ))}
    </>
  );
}

export function MarqueeRow({
  type,
  variant,
  direction = "left",
  speed = "40s",
  className = "",
}: {
  type: keyof typeof data;
  variant?: keyof typeof data | "white-solid" | "cyan-solid" | "white-border" | "cyan-border";
  direction?: "left" | "right";
  speed?: string;
  className?: string;
}) {
  const items = data[type];
  const half = buildMarqueeHalf(items);
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
    <section className={`relative z-20 w-full overflow-hidden bg-background ${className || "py-8 lg:py-12"}`}>
      <div className="marquee-pause w-full overflow-hidden px-2">
        {/* No padding on the animated node — it breaks the 50% loop period. */}
        <div
          className={`marquee-track ${animationClass} flex w-max flex-nowrap gap-4 md:gap-6`}
          style={{ ["--marquee-duration" as string]: speed }}
        >
          <MarqueePills tags={half} type={`${type}-a`} itemStyle={itemStyle} />
          <MarqueePills tags={half} type={`${type}-b`} itemStyle={itemStyle} />
        </div>
      </div>
    </section>
  );
}
