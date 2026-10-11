'use client';

import Image from "next/image";
import { useRef } from "react";
import { useLanguage } from "@/components/language-provider";

type MediaItem = {
  outlet: string;
  headline: string;
  meta?: string;
  quote?: string;
  image: string;
  imagePosition?: "center" | "top";
  secondaryImage?: string;
  featured?: boolean;
};

const itemsRu: MediaItem[] = [
  {
    outlet: "Холод",
    headline: "«Я переехала в Черногорию и очень довольна»",
    meta: "Федеральное издание",
    quote: "Здесь по-доброму относятся к иммигрантам, а жизнь в маленьком городке у моря напоминает уютный ситком.",
    image: "/media-press/holod-montenegro.jpg",
    featured: true,
  },
  {
    outlet: "«Тамбовская жизнь» №116",
    headline: "«Как нарастить Goodwill?»",
    meta: "21 октября 2020 · Малый бизнес, стр. 5",
    quote: "Тамбовские предприниматели поделились историями своего успеха.",
    image: "/media-press/tambovskaya-zhizn-cover.jpg",
  },
  {
    outlet: "Газета «Житьё» №43",
    headline: "«На моих глазах происходит волшебство»",
    meta: "27 октября 2020 · стр. 15, Общество",
    quote: "Екатерина Разумова делает удивительной красоты изделия из эпоксидной смолы.",
    image: "/media-press/zhizn-tambov-article.jpg",
  },
  {
    outlet: "КП.RU",
    headline: "«У меня получилась больше мазня, чем море»",
    image: "/media-press/kp-ru-portrait.jpg",
  },
  {
    outlet: "«Новый век» Тамбов",
    headline: "«Жительница Тамбова во время пандемии открыла бизнес по созданию изделий из эпоксидной смолы»",
    meta: "6 ноября 2020",
    image: "/media-press/noviy-vek-tambov.jpg",
    imagePosition: "top",
  },
  {
    outlet: "ТВ Тамбов",
    headline: "Репортаж «Область новостей»",
    meta: "художник-смолянист",
    image: "/media-press/tv-tambov.jpg",
    secondaryImage: "/media-press/tv-tambov-backstage.jpg",
  },
  {
    outlet: "РИА Top68.ru",
    headline: "«Тамбовская художница-смолянист превратила хобби в бизнес и стала…»",
    image: "/media-press/unidentified-regional.jpg",
  },
];

const itemsEn: MediaItem[] = [
  {
    outlet: "Kholod",
    headline: "\"I moved to Montenegro and I'm very happy\"",
    meta: "National Russian outlet",
    quote: "People here are kind to immigrants, and life in a small seaside town feels like a cozy sitcom.",
    image: "/media-press/holod-montenegro.jpg",
    featured: true,
  },
  {
    outlet: "\"Tambovskaya Zhizn\" No. 116",
    headline: "\"How to Build Goodwill?\"",
    meta: "October 21, 2020 · Small Business, p. 5",
    quote: "Tambov entrepreneurs shared their success stories.",
    image: "/media-press/tambovskaya-zhizn-cover.jpg",
  },
  {
    outlet: "\"Zhityo\" Gazette No. 43",
    headline: "\"Magic Happens Right Before My Eyes\"",
    meta: "October 27, 2020 · p. 15, Society",
    quote: "Ekaterina Razumova makes stunningly beautiful epoxy resin pieces.",
    image: "/media-press/zhizn-tambov-article.jpg",
  },
  {
    outlet: "KP.RU",
    headline: "\"What I got looked more like a smudge than the sea\"",
    image: "/media-press/kp-ru-portrait.jpg",
  },
  {
    outlet: "\"Noviy Vek\" Tambov",
    headline: "\"A Tambov Resident Started an Epoxy Resin Business During the Pandemic\"",
    meta: "November 6, 2020",
    image: "/media-press/noviy-vek-tambov.jpg",
    imagePosition: "top",
  },
  {
    outlet: "TV Tambov",
    headline: "\"Region News\" Segment",
    meta: "resin artist",
    image: "/media-press/tv-tambov.jpg",
    secondaryImage: "/media-press/tv-tambov-backstage.jpg",
  },
  {
    outlet: "RIA Top68.ru",
    headline: "\"A Tambov Resin Artist Turned Her Hobby into a Business and Became…\"",
    image: "/media-press/unidentified-regional.jpg",
  },
];

export function ArtMedia() {
  const { isEn } = useLanguage();
  const items = isEn ? itemsEn : itemsRu;
  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    drag.current = { isDown: true, startX: e.clientX, scrollLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
    el.classList.add("cursor-grabbing");
    el.classList.remove("cursor-grab");
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || !drag.current.isDown) return;
    el.scrollLeft = drag.current.scrollLeft - (e.clientX - drag.current.startX);
  };

  const endDrag = () => {
    drag.current.isDown = false;
    const el = scrollRef.current;
    el?.classList.remove("cursor-grabbing");
    el?.classList.add("cursor-grab");
  };

  return (
    <section id="media-publications" className="relative py-24 bg-[#111111] overflow-hidden scroll-mt-20">
      {/* Clean Dark Paper Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.webp" 
          alt="Paper texture" 
          fill 
          className="object-cover opacity-50 mix-blend-screen"
        />
      </div>

      {/* Top & bottom gradient blend fades */}
      <div className="absolute top-0 left-0 w-full h-24 lg:h-36 bg-gradient-to-b from-[#111111] via-[#111111]/60 to-transparent z-[15] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-36 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent z-[15] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20 mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat leading-tight max-w-2xl">
            {isEn ? "Press Coverage" : "Публикации в СМИ"}
          </h2>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/15 rounded-full text-[11px] font-mono font-bold tracking-wider text-[#14F1D9] uppercase shadow-md">
          <span>←</span> {isEn ? "Swipe through" : "Листайте публикации"} <span>→</span>
        </div>
      </div>

      <div
        ref={scrollRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onDragStart={(e) => e.preventDefault()}
        className="hide-scrollbar flex cursor-grab select-none overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-4 relative z-20"
      >
        {items.map((item) => (
          <article
            key={item.outlet + item.headline}
            className="group shrink-0 snap-center flex flex-col overflow-hidden rounded-none border border-white/15 bg-[#181818] hover:border-[#14F1D9]/50 transition-colors w-[280px] sm:w-[320px] shadow-xl"
          >
            <div className="relative w-full aspect-[3/4] bg-black/40">
              <Image
                src={item.image}
                alt={`${item.outlet}: ${item.headline}`}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {item.secondaryImage && (
                <div className="absolute bottom-3 right-3 h-16 w-16 overflow-hidden rounded-none border-2 border-[#111111] shadow-lg sm:h-20 sm:w-20">
                  <Image src={item.secondaryImage} alt={`${item.outlet}: ${isEn ? "behind the scenes" : "со съёмки"}`} fill className="object-cover" />
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5 bg-[#181818]">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#14F1D9]">
                {item.outlet}
              </p>
              <h3 className="font-montserrat text-sm sm:text-base font-black uppercase leading-snug text-white">
                {item.headline}
              </h3>
              {item.meta && <p className="text-xs text-white/70 font-medium font-inter">{item.meta}</p>}
              {item.quote && <p className="mt-1 text-sm leading-relaxed text-white/90 font-inter">{item.quote}</p>}
            </div>
          </article>
        ))}
        <div className="w-px shrink-0" />
      </div>
    </section>
  );
}
