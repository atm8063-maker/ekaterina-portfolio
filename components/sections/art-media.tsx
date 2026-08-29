'use client';

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type MediaItem = {
  outlet: string;
  headline: string;
  meta?: string;
  quote?: string;
  image: string;
  secondaryImage?: string;
  featured?: boolean;
};

const items: MediaItem[] = [
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
    outlet: "Газета «Жизнь» №43",
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
  },
  {
    outlet: "ТВ Тамбов",
    headline: "Репортаж «Область новостей»",
    meta: "художник-смолянист",
    image: "/media-press/tv-tambov.jpg",
    secondaryImage: "/media-press/tv-tambov-backstage.jpg",
  },
  {
    outlet: "Название уточняется",
    headline: "«Тамбовская художница-смолянист превратила хобби в бизнес и стала…»",
    image: "/media-press/unidentified-regional.jpg",
  },
];

export function ArtMedia() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="media-publications" className="relative py-24 border-b border-white/10 bg-[#111111] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat leading-tight max-w-2xl">
            Публикации в СМИ
          </h2>

          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll("left")}
              aria-label="Предыдущие публикации"
              className="p-3 rounded-full border border-white/20 text-white/50 hover:text-[#14F1D9] hover:border-[#14F1D9] transition-all"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Следующие публикации"
              className="p-3 rounded-full border border-white/20 text-white/50 hover:text-[#14F1D9] hover:border-[#14F1D9] transition-all"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="hide-scrollbar flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <article
            key={item.outlet + item.headline}
            className={`group shrink-0 snap-center flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A] ${
              item.featured ? "w-[300px] sm:w-[420px]" : "w-[260px] sm:w-[300px]"
            }`}
          >
            <div className={`relative w-full ${item.featured ? "aspect-[4/5]" : "aspect-[3/4]"} bg-black/40`}>
              <Image
                src={item.image}
                alt={`${item.outlet}: ${item.headline}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {item.secondaryImage && (
                <div className="absolute bottom-3 right-3 h-16 w-16 overflow-hidden rounded-lg border-2 border-[#111111] shadow-lg sm:h-20 sm:w-20">
                  <Image src={item.secondaryImage} alt={`${item.outlet}: со съёмки`} fill className="object-cover" />
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#14F1D9]">
                {item.outlet}
              </p>
              <h3 className="font-montserrat text-sm font-black uppercase leading-snug text-white sm:text-base">
                {item.headline}
              </h3>
              {item.meta && <p className="text-xs text-white/40">{item.meta}</p>}
              {item.quote && <p className="mt-1 text-sm leading-relaxed text-white/60">{item.quote}</p>}
            </div>
          </article>
        ))}
        <div className="w-px shrink-0" />
      </div>
    </section>
  );
}
