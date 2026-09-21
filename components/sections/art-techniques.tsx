'use client';

import Image from "next/image";
import { useState } from "react";
import { X, Play } from "lucide-react";

type MediaItem = {
  src: string;
  type: "image" | "video";
  title: string;
  tag: string;
  badgeColor?: string;
};

const offlineTrack: MediaItem[] = [
  {
    src: "/art-techniques/video_105@04-08-2026_22-23-33.mp4",
    type: "video",
    title: "Растекание волн и смешивание пигментов",
    tag: "Видео процесса",
  },
  {
    src: "/art-techniques/photo_3217@04-08-2026_21-04-08.jpg",
    type: "image",
    title: "Макро-градиент морской стихии",
    tag: "Смола / Макро",
  },
  {
    src: "/art-techniques/photo_3218@04-08-2026_21-04-08.jpg",
    type: "image",
    title: "Замешивание ультрамарина и золотого пигмента",
    tag: "Колористика",
  },
  {
    src: "/art-techniques/video_146@04-08-2026_22-24-35.mp4",
    type: "video",
    title: "Обжиг смолы горелкой: удаление микропузырей",
    tag: "Видео процесса",
  },
  {
    src: "/art-techniques/photo_3219@04-08-2026_21-04-08.jpg",
    type: "image",
    title: "Инкрустация кристаллами и жеоды",
    tag: "Текстура",
  },
  {
    src: "/art-techniques/video_144@04-08-2026_22-24-35.mp4",
    type: "video",
    title: "Мерцание перламутра в глубине слоя",
    tag: "Видео процесса",
  },
  {
    src: "/art-techniques/photo_3220@04-08-2026_21-04-08.jpg",
    type: "image",
    title: "Золотая пудра и всплывающие пигменты",
    tag: "Пигменты",
  },
  {
    src: "/art-techniques/photo_3221@04-08-2026_21-04-08.jpg",
    type: "image",
    title: "Глянцевое зеркальное финишное покрытие",
    tag: "Финишный глянец",
  },
  {
    src: "/art-techniques/video_151@04-08-2026_22-26-50.mp4",
    type: "video",
    title: "Формирование морской пены и ячеек",
    tag: "Видео процесса",
  },
  {
    src: "/art-techniques/photo_2999@31-07-2026_18-44-13.jpg",
    type: "image",
    title: "Интерьерный поднос с латунной фурнитурой",
    tag: "Предметный крафт",
  },
  {
    src: "/art-techniques/photo_2942@31-07-2026_17-46-16.jpg",
    type: "image",
    title: "Спил дуба с заливкой морской лагуны",
    tag: "Дерево & Смола",
  },
  {
    src: "/art-techniques/photo_2987@31-07-2026_18-19-52.jpg",
    type: "image",
    title: "Сервировочный арт-сет подстаканников",
    tag: "Сет изделий",
  },
];

const digitalTrack: MediaItem[] = [
  {
    src: "/art-techniques/Free Macbook Pro Space Gray mockup on the wooden table (Mockuuups Studio).jpg",
    type: "image",
    title: "Презентация интерфейсов на MacBook Pro Space Gray",
    tag: "Figma / UI Design",
  },
  {
    src: "/art-techniques/Free Clean desk with Dell display mockup (Mockuuups Studio)1.jpg",
    type: "image",
    title: "Рабочая станция: вёрстка и графический дизайн",
    tag: "Photoshop & UI",
  },
  {
    src: "/art-techniques/Free iPad Air mockup held by user against a bright silver background  (Mockuuups Studio).jpg",
    type: "image",
    title: "Планшетная версия и интерактивные скетчи",
    tag: "Figma / Mobile",
  },
  {
    src: "/art-techniques/iPhone 12 Pro.jpg",
    type: "image",
    title: "Мобильный интерфейс и арт-контент",
    tag: "Mobile UX",
  },
  {
    src: "/art-techniques/Poster mockup leaning against a textured wall (Mockuuups Studio).jpg",
    type: "image",
    title: "Интерьерный арт-постер и типографика",
    tag: "Illustrator / Print",
  },
  {
    src: "/art-techniques/photo_2026-08-27_17-30-18.jpg",
    type: "image",
    title: "Архитектурная планировка и схемы",
    tag: "Planoplan",
  },
  {
    src: "/art-techniques/photo_2026-08-27_17-30-19 (6).jpg",
    type: "image",
    title: "3D-визуализация пространства и геометрии",
    tag: "SketchUp 3D",
  },
  {
    src: "/art-techniques/photo_2026-08-30_02-47-41.jpg",
    type: "image",
    title: "Объёмный рендер жилого пространства",
    tag: "3D Modeling",
  },
  {
    src: "/art-techniques/photo_2026-09-05_13-57-09 (2).jpg",
    type: "image",
    title: "Технический чертёж и зонирование",
    tag: "Plan / Схема",
  },
  {
    src: "/art-techniques/photo_2026-09-08_19-29-45 (6).jpg",
    type: "image",
    title: "Скетчинг и концептуальная разработка",
    tag: "Sketch",
  },
];

export function ArtTechniques() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const techniques = ["Эпоксидная смола", "Акрил", "Алкогольные чернила", "Текстурная паста", "Смешанные техники"];
  const digitalTools = ["Figma", "Photoshop", "Illustrator", "SketchUp", "Planoplan"];

  return (
    <section id="techniques" className="border-b border-white/10 bg-[#111111] py-24 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#14F1D9] mb-4">
            Вариант 1 · Кинематографичная двойная лента
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat mt-2">
            Техники <span className="text-[#14F1D9]">&</span> Инструменты
          </h2>
          <p className="text-white/60 mt-3 font-inter text-base sm:text-lg">
            Работаю на стыке материального крафта и цифровых технологий — от сложной многослойной заливки смолы до UI-дизайна и 3D-моделирования.
          </p>
        </div>

        {/* Top Cards: Offline vs Digital */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="p-8 sm:p-10 rounded-none bg-[#1A1A1A] border border-white/10 relative overflow-hidden group hover:border-white/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#14F1D9]/5 -z-10 group-hover:bg-[#14F1D9]/10 transition-colors"></div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#14F1D9] font-montserrat">
                Офлайн · Материалы & Крафт
              </h3>
              <span className="text-[10px] font-mono text-white/40 uppercase">Физические объекты</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {techniques.map(t => (
                <span key={t} className="px-3.5 py-2 rounded-none border border-white/20 text-white text-xs uppercase tracking-wider font-semibold hover:border-[#14F1D9] hover:text-[#14F1D9] transition-colors cursor-default bg-black/20">
                  {t}
                </span>
              ))}
              {["Гипс", "Глина", "Масло", "Скетчи"].map(t => (
                <span key={t} className="px-3.5 py-2 rounded-none border border-white/10 text-white/50 text-xs uppercase tracking-wider font-semibold hover:border-[#14F1D9] hover:text-[#14F1D9] transition-colors cursor-default bg-black/10">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-none bg-[#1A1A1A] border border-white/10 relative overflow-hidden group hover:border-white/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#14F1D9]/5 -z-10 group-hover:bg-[#14F1D9]/10 transition-colors"></div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#14F1D9] font-montserrat">
                Цифра · Design <span className="text-[#14F1D9]">&</span> Tech
              </h3>
              <span className="text-[10px] font-mono text-white/40 uppercase">Интерфейсы & 3D</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {digitalTools.map(i => (
                <span key={i} className="px-3.5 py-2 rounded-none bg-[#14F1D9]/10 border border-[#14F1D9]/30 text-[#14F1D9] text-xs uppercase tracking-wider font-semibold hover:bg-[#14F1D9]/20 transition-colors cursor-default">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Full-width Infinite Marquee Showcase (Option 1) */}
      <div className="w-full space-y-6 marquee-pause">
        
        {/* Track 1: Offline & Live Videos (Moves Left) */}
        <div className="relative overflow-hidden py-2">
          <div className="flex items-center gap-3 px-6 mb-3 container mx-auto">
            <span className="w-2 h-2 bg-[#14F1D9] inline-block" />
            <span className="text-xs font-mono uppercase tracking-widest text-white/70">
              Лента 1 · Крафт, видео процессов & макро-съёмка
            </span>
          </div>
          
          <div className="flex animate-marquee-left gap-5">
            {[...offlineTrack, ...offlineTrack].map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedMedia(item)}
                className="group relative shrink-0 w-[260px] sm:w-[320px] aspect-[4/3] bg-[#1A1A1A] border border-white/10 hover:border-[#14F1D9] transition-all cursor-pointer overflow-hidden"
              >
                {item.type === "video" ? (
                  <div className="relative w-full h-full">
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2 py-1 bg-black/80 border border-[#14F1D9] text-[#14F1D9] text-[9px] font-mono uppercase font-bold tracking-widest flex items-center gap-1.5 shadow-lg">
                      <Play className="w-2.5 h-2.5 fill-[#14F1D9]" />
                      Видео
                    </div>
                  </div>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="320px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#14F1D9]">
                    {item.tag}
                  </span>
                  <p className="text-xs font-montserrat font-bold text-white uppercase line-clamp-1 mt-0.5">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Digital & Mockups & 3D (Moves Right) */}
        <div className="relative overflow-hidden py-2">
          <div className="flex items-center gap-3 px-6 mb-3 container mx-auto">
            <span className="w-2 h-2 bg-white/40 inline-block" />
            <span className="text-xs font-mono uppercase tracking-widest text-white/70">
              Лента 2 · Мокапы интерфейсов, Figma & 3D-рендеры
            </span>
          </div>

          <div className="flex animate-marquee-right gap-5">
            {[...digitalTrack, ...digitalTrack].map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedMedia(item)}
                className="group relative shrink-0 w-[260px] sm:w-[320px] aspect-[4/3] bg-[#1A1A1A] border border-white/10 hover:border-[#14F1D9] transition-all cursor-pointer overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#14F1D9]">
                    {item.tag}
                  </span>
                  <p className="text-xs font-montserrat font-bold text-white uppercase line-clamp-1 mt-0.5">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 text-center">
          <p className="text-[11px] font-mono text-white/40 uppercase tracking-widest mt-2">
            💡 Наведи курсор, чтобы остановить движение · Кликни на любую карточку для полноэкранного просмотра
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedMedia(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-4xl w-full border border-white/20 bg-[#1A1A1A] p-4 sm:p-6 shadow-2xl rounded-none"
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-4 -right-4 z-10 flex h-10 w-10 items-center justify-center border border-white/20 bg-black text-white hover:bg-[#14F1D9] hover:text-black transition-colors"
              aria-label="Закрыть"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-video w-full overflow-hidden bg-black/60">
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain"
                />
              ) : (
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  fill
                  className="object-contain"
                />
              )}
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10 pt-4">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#14F1D9]">
                  {selectedMedia.tag}
                </span>
                <h3 className="font-montserrat text-base font-bold uppercase text-white sm:text-lg">
                  {selectedMedia.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-white/40 uppercase">
                {selectedMedia.type === "video" ? "Видео процесса" : "Оригинальное разрешение"}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
