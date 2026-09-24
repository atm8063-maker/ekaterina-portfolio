'use client';

import { useState } from "react";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

type MediaItem = {
  src: string;
  type: "image" | "video";
  title: string;
  tag: string;
};

const items: MediaItem[] = [
  {
    src: "/art-techniques/Free Macbook Pro Space Gray mockup on the wooden table (Mockuuups Studio).jpg",
    type: "image",
    title: "UI-дизайн на MacBook Pro",
    tag: "Figma",
  },
  {
    src: "/art-techniques/photo_3217@04-08-2026_21-04-08.jpg",
    type: "image",
    title: "Градиент морских глубин",
    tag: "Смола / Макро",
  },
  {
    src: "/art-techniques/video_105@04-08-2026_22-23-33.mp4",
    type: "video",
    title: "Заливка морской волны",
    tag: "Видео процесса",
  },
  {
    src: "/art-techniques/Free Clean desk with Dell display mockup (Mockuuups Studio)1.jpg",
    type: "image",
    title: "Вёрстка и графика на Dell Display",
    tag: "Photoshop",
  },
  {
    src: "/art-techniques/photo_3219@04-08-2026_21-04-08.jpg",
    type: "image",
    title: "Инкрустация кристаллами и жеоды",
    tag: "Текстура",
  },
  {
    src: "/art-techniques/photo_2026-08-27_17-30-19 (6).jpg",
    type: "image",
    title: "3D-моделирование пространства",
    tag: "SketchUp 3D",
  },
  {
    src: "/art-techniques/video_146@04-08-2026_22-24-35.mp4",
    type: "video",
    title: "Термический обжиг смолы горелкой",
    tag: "Видео процесса",
  },
  {
    src: "/art-techniques/photo_2942@31-07-2026_17-46-16.jpg",
    type: "image",
    title: "Спил дуба с морской заливкой",
    tag: "Дерево & Смола",
  },
  {
    src: "/art-techniques/Free iPad Air mockup held by user against a bright silver background  (Mockuuups Studio).jpg",
    type: "image",
    title: "Планшетные прототипы на iPad Air",
    tag: "Figma / Tablet",
  },
  {
    src: "/art-techniques/photo_3218@04-08-2026_21-04-08.jpg",
    type: "image",
    title: "Замешивание ультрамаринового пигмента",
    tag: "Колористика",
  },
  {
    src: "/art-techniques/video_144@04-08-2026_22-24-35.mp4",
    type: "video",
    title: "Мерцание золота и перламутра",
    tag: "Видео процесса",
  },
  {
    src: "/art-techniques/photo_2026-08-30_02-47-41.jpg",
    type: "image",
    title: "3D-визуализация помещения",
    tag: "Planoplan",
  },
  {
    src: "/art-techniques/photo_2999@31-07-2026_18-44-13.jpg",
    type: "image",
    title: "Интерьерный поднос ручной работы",
    tag: "Предметный крафт",
  },
  {
    src: "/art-techniques/iPhone 12 Pro.jpg",
    type: "image",
    title: "Мобильный интерфейс и галерея",
    tag: "Mobile UX",
  },
  {
    src: "/art-techniques/photo_3220@04-08-2026_21-04-08.jpg",
    type: "image",
    title: "Золотая пудра и всплывающие пигменты",
    tag: "Пигменты",
  },
  {
    src: "/art-techniques/video_151@04-08-2026_22-26-50.mp4",
    type: "video",
    title: "Формирование ячеек морской пены",
    tag: "Видео процесса",
  },
  {
    src: "/art-techniques/Poster mockup leaning against a textured wall (Mockuuups Studio).jpg",
    type: "image",
    title: "Интерьерный постер и типографика",
    tag: "Illustrator / Print",
  },
  {
    src: "/art-techniques/photo_3221@04-08-2026_21-04-08.jpg",
    type: "image",
    title: "Глянцевое зеркальное покрытие",
    tag: "Финишный глянец",
  },
  {
    src: "/art-techniques/photo_2026-08-27_17-30-18.jpg",
    type: "image",
    title: "Архитектурная планировка и схема",
    tag: "2D Plan",
  },
  {
    src: "/art-techniques/photo_3231@04-08-2026_21-04-401.jpg",
    type: "image",
    title: "Кристаллический срез с золотыми прожилками",
    tag: "Жеода",
  },
  {
    src: "/art-techniques/video_114@04-08-2026_22-24-13.mp4",
    type: "video",
    title: "Динамика растекания смолы",
    tag: "Видео процесса",
  },
  {
    src: "/art-techniques/photo_2026-09-08_19-29-46 (3).jpg",
    type: "image",
    title: "Пространственное 3D-зонирование",
    tag: "3D Project",
  },
  {
    src: "/art-techniques/photo_2987@31-07-2026_18-19-52.jpg",
    type: "image",
    title: "Сервировочный сет подстаканников",
    tag: "Сет изделий",
  },
  {
    src: "/art-techniques/Gemini_Generated_Image_eirj0reirj0reirj.jpg",
    type: "image",
    title: "Концепт-арт и цифровая графика",
    tag: "Digital Art",
  },
  {
    src: "/art-techniques/photo_3227@04-08-2026_21-04-401.jpg",
    type: "image",
    title: "Изумрудные и бирюзовые переливы",
    tag: "Fluid Art",
  },
  {
    src: "/art-techniques/video_45@31-07-2026_19-44-02.mp4",
    type: "video",
    title: "Студийный процесс создания арт-объекта",
    tag: "Студия",
  },
  {
    src: "/art-techniques/photo_2026-09-08_19-29-45 (6).jpg",
    type: "image",
    title: "Эскизирование и концептуальный скетчинг",
    tag: "Скетч",
  },
  {
    src: "/art-techniques/photo_3222@04-08-2026_21-04-08.jpg",
    type: "image",
    title: "Макро-волна из эпоксидной смолы",
    tag: "Макро",
  },
  {
    src: "/art-techniques/photo_2026-09-05_13-57-09 (2).jpg",
    type: "image",
    title: "Технический чертёж и зонирование",
    tag: "Planoplan",
  },
  {
    src: "/art-techniques/photo_3224@04-08-2026_21-04-08.jpg",
    type: "image",
    title: "Смешивание авторской палитры",
    tag: "Колористика",
  },
  {
    src: "/art-techniques/photo_3174@04-08-2026_20-56-52.jpg",
    type: "image",
    title: "Многоуровневая заливка и текстура",
    tag: "Крафт",
  },
  {
    src: "/art-techniques/photo_3138@31-07-2026_19-44-20.jpg",
    type: "image",
    title: "Подготовка формы и нанесение слоёв",
    tag: "Процесс",
  },
  {
    src: "/art-techniques/photo_3180@04-08-2026_20-56-52.jpg",
    type: "image",
    title: "Детализация крафтового изделия",
    tag: "Детали",
  },
  {
    src: "/art-techniques/photo_3390@04-08-2026_22-16-46.jpg",
    type: "image",
    title: "Готовая интерьерная работа",
    tag: "Готовая работа",
  },
];

export function ArtTechniques() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const offlineTags = ["Эпоксидная смола", "Акрил", "Алкогольные чернила", "Текстурная паста", "Смешанные техники"];
  const offlineExtra = ["Гипс", "Глина", "Масло", "Скетчи"];
  const digitalTools = ["Figma", "Photoshop", "Illustrator", "SketchUp", "Planoplan"];

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
  };

  const nextLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % items.length);
  };

  const prevLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + items.length) % items.length);
  };

  const activeLightboxItem = lightboxIndex !== null ? items[lightboxIndex] : null;

  return (
    <section id="techniques" className="border-b border-white/10 bg-[#111111] py-16 sm:py-20 relative overflow-hidden scroll-mt-20">
      <div className="w-full max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat mt-2">
            Техники <span className="text-[#14F1D9]">&</span> Инструменты
          </h2>
          <p className="text-white/60 mt-2 font-inter text-sm sm:text-base">
            Работаю на стыке материального крафта и цифровых технологий — от изящных предметов ручной работы до сложных UI-интерфейсов и 3D-моделей.
          </p>
        </div>

        {/* Top Cards: Offline vs Digital */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          <div className="p-6 sm:p-8 rounded-none bg-[#1A1A1A] border border-white/10 relative overflow-hidden group hover:border-white/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#14F1D9]/5 -z-10 group-hover:bg-[#14F1D9]/10 transition-colors"></div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#14F1D9] font-montserrat">
                Офлайн · Материалы & Крафт
              </h3>
              <span className="text-[10px] font-inter text-white/40 uppercase tracking-wider">Физические объекты</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {offlineTags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-none border border-white/20 text-white text-xs uppercase tracking-wider font-semibold font-inter hover:border-[#14F1D9] hover:text-[#14F1D9] transition-colors cursor-default bg-black/20"
                >
                  {t}
                </span>
              ))}
              {offlineExtra.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-none border border-white/10 text-white/50 text-xs uppercase tracking-wider font-semibold font-inter hover:border-[#14F1D9] hover:text-[#14F1D9] transition-colors cursor-default bg-black/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-none bg-[#1A1A1A] border border-white/10 relative overflow-hidden group hover:border-white/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#14F1D9]/5 -z-10 group-hover:bg-[#14F1D9]/10 transition-colors"></div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#14F1D9] font-montserrat">
                Цифра · Design <span className="text-[#14F1D9]">&</span> Tech
              </h3>
              <span className="text-[10px] font-inter text-white/40 uppercase tracking-wider">Интерфейсы & 3D</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {digitalTools.map((i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-none bg-[#14F1D9]/10 border border-[#14F1D9]/30 text-[#14F1D9] text-xs uppercase tracking-wider font-semibold font-inter hover:bg-[#14F1D9]/20 transition-colors cursor-default"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Zero-Crop Stream: Uniform Height (140px), Natural Width */}
      <div className="w-full relative overflow-hidden marquee-pause py-2">
        <div className="flex animate-marquee-left gap-3">
          {[...items, ...items].map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx % items.length)}
              className="group relative shrink-0 h-[140px] w-auto bg-[#16161A] border border-white/15 hover:border-[#14F1D9] transition-all cursor-pointer overflow-hidden rounded-none shadow-md flex items-center justify-center"
            >
              {item.type === "video" ? (
                <div className="relative h-[140px] w-auto bg-black flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-[140px] w-auto max-w-none block object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-1.5 right-1.5 p-1 bg-black/80 border border-[#14F1D9]/60 text-[#14F1D9] pointer-events-none">
                    <Play className="w-2.5 h-2.5 fill-[#14F1D9]" />
                  </div>
                </div>
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-[140px] w-auto max-w-none block object-contain group-hover:scale-105 transition-transform duration-300"
                />
              )}

              {/* Hover Tag & Title Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5 pointer-events-none">
                <span className="text-[9px] font-inter font-bold uppercase tracking-wider text-[#14F1D9]">
                  {item.tag}
                </span>
                <p className="text-[11px] font-montserrat font-bold text-white uppercase line-clamp-1 leading-tight mt-0.5">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center mt-3">
        <p className="text-[11px] font-inter text-white/50 tracking-wider">
          💡 Наведи курсор, чтобы приостановить · Кликни для полного размера
        </p>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] max-w-5xl w-full border border-white/20 bg-[#1A1A1A] p-4 sm:p-6 shadow-2xl rounded-none flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-4 -right-4 z-20 flex h-10 w-10 items-center justify-center border border-white/20 bg-black text-white hover:bg-[#14F1D9] hover:text-black transition-colors shadow-lg"
              aria-label="Закрыть"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev/Next arrows */}
            <button
              onClick={prevLightbox}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/80 text-white hover:bg-[#14F1D9] hover:text-black transition-colors"
              aria-label="Предыдущий"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextLightbox}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/80 text-white hover:bg-[#14F1D9] hover:text-black transition-colors"
              aria-label="Следующий"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Media Area */}
            <div className="relative max-h-[72vh] w-full flex items-center justify-center overflow-hidden bg-black/80">
              {activeLightboxItem.type === "video" ? (
                <video
                  src={activeLightboxItem.src}
                  controls
                  autoPlay
                  muted
                  playsInline
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={activeLightboxItem.src}
                  alt={activeLightboxItem.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              )}
            </div>

            {/* Bottom Bar */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10 pt-4">
              <div>
                <span className="text-[11px] font-inter font-bold uppercase tracking-widest text-[#14F1D9]">
                  {activeLightboxItem.tag}
                </span>
                <h3 className="font-montserrat text-base font-bold uppercase text-white sm:text-lg">
                  {activeLightboxItem.title}
                </h3>
              </div>
              <span className="text-xs font-inter text-white/40 uppercase tracking-wider">
                {lightboxIndex !== null ? `${lightboxIndex + 1} / ${items.length}` : ""}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
