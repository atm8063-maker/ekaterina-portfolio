'use client';

import Image from "next/image";
import { useState } from "react";
import { X, Play, ChevronLeft, ChevronRight, Layers } from "lucide-react";

type Category = "all" | "craft" | "digital" | "video";

type MediaItem = {
  src: string;
  type: "image" | "video";
  category: "craft" | "digital" | "video";
  title: string;
  tag: string;
};

const allMedia: MediaItem[] = [
  // Digital / Mockups / 3D
  {
    src: "/art-techniques/Free Macbook Pro Space Gray mockup on the wooden table (Mockuuups Studio).jpg",
    type: "image",
    category: "digital",
    title: "Презентация UI-концепта на MacBook Pro",
    tag: "Figma & UI",
  },
  {
    src: "/art-techniques/Free Clean desk with Dell display mockup (Mockuuups Studio)1.jpg",
    type: "image",
    category: "digital",
    title: "Рабочее пространство: верстка и веб-дизайн",
    tag: "Photoshop / Web",
  },
  {
    src: "/art-techniques/Free iPad Air mockup held by user against a bright silver background  (Mockuuups Studio).jpg",
    type: "image",
    category: "digital",
    title: "Адаптивные прототипы на iPad Air",
    tag: "Figma / Tablet",
  },
  {
    src: "/art-techniques/iPhone 12 Pro.jpg",
    type: "image",
    category: "digital",
    title: "Мобильный интерфейс и арт-галерея",
    tag: "Mobile UX",
  },
  {
    src: "/art-techniques/Poster mockup leaning against a textured wall (Mockuuups Studio).jpg",
    type: "image",
    category: "digital",
    title: "Интерьерный арт-постер и типографика",
    tag: "Illustrator / Print",
  },
  {
    src: "/art-techniques/Gemini_Generated_Image_eirj0reirj0reirj.jpg",
    type: "image",
    category: "digital",
    title: "Концепт-арт и цифровая иллюстрация",
    tag: "Digital Art",
  },
  {
    src: "/art-techniques/photo_2026-08-27_17-30-18.jpg",
    type: "image",
    category: "digital",
    title: "Архитектурная схема и план пространства",
    tag: "Planoplan",
  },
  {
    src: "/art-techniques/photo_2026-08-27_17-30-19 (6).jpg",
    type: "image",
    category: "digital",
    title: "3D-моделирование геометрии помещения",
    tag: "SketchUp 3D",
  },
  {
    src: "/art-techniques/photo_2026-08-30_02-47-41.jpg",
    type: "image",
    category: "digital",
    title: "3D-визуализация интерьерного решения",
    tag: "3D Render",
  },
  {
    src: "/art-techniques/photo_2026-09-05_13-57-09 (2).jpg",
    type: "image",
    category: "digital",
    title: "Технический чертеж и планировка",
    tag: "2D Plan",
  },
  {
    src: "/art-techniques/photo_2026-09-08_19-29-45 (6).jpg",
    type: "image",
    category: "digital",
    title: "Эскизирование и концептуальный скетчинг",
    tag: "Sketch",
  },
  {
    src: "/art-techniques/photo_2026-09-08_19-29-46 (3).jpg",
    type: "image",
    category: "digital",
    title: "Пространственное 3D-зонирование",
    tag: "3D Project",
  },

  // Videos (Processes)
  {
    src: "/art-techniques/video_105@04-08-2026_22-23-33.mp4",
    type: "video",
    category: "video",
    title: "Заливка морской волны эпоксидной смолой",
    tag: "Видео процесса",
  },
  {
    src: "/art-techniques/video_114@04-08-2026_22-24-13.mp4",
    type: "video",
    category: "video",
    title: "Динамика растекания и слияние пигментов",
    tag: "Видео процесса",
  },
  {
    src: "/art-techniques/video_144@04-08-2026_22-24-35.mp4",
    type: "video",
    category: "video",
    title: "Макро-сияние золота и перламутра",
    tag: "Видео процесса",
  },
  {
    src: "/art-techniques/video_146@04-08-2026_22-24-35.mp4",
    type: "video",
    category: "video",
    title: "Термическая обработка: удаление пузырьков воздуха",
    tag: "Видео процесса",
  },
  {
    src: "/art-techniques/video_151@04-08-2026_22-26-50.mp4",
    type: "video",
    category: "video",
    title: "Формирование ажурных ячеек морской пены",
    tag: "Видео процесса",
  },
  {
    src: "/art-techniques/video_45@31-07-2026_19-44-02.mp4",
    type: "video",
    category: "video",
    title: "Студийный процесс создания арт-объекта",
    tag: "Студия & Бэкстейдж",
  },

  // Craft & Resin Photos
  {
    src: "/art-techniques/photo_3217@04-08-2026_21-04-08.jpg",
    type: "image",
    category: "craft",
    title: "Морская глубина: многослойный градиент",
    tag: "Эпоксидная смола",
  },
  {
    src: "/art-techniques/photo_3218@04-08-2026_21-04-08.jpg",
    type: "image",
    category: "craft",
    title: "Замешивание ультрамаринового пигмента",
    tag: "Колористика",
  },
  {
    src: "/art-techniques/photo_3219@04-08-2026_21-04-08.jpg",
    type: "image",
    category: "craft",
    title: "Кристаллическая жеода и каменная крошка",
    tag: "Жеода / Текстура",
  },
  {
    src: "/art-techniques/photo_3220@04-08-2026_21-04-08.jpg",
    type: "image",
    category: "craft",
    title: "Всплывающий золотой металлик",
    tag: "Пигменты",
  },
  {
    src: "/art-techniques/photo_3221@04-08-2026_21-04-08.jpg",
    type: "image",
    category: "craft",
    title: "Идеально гладкое финишное покрытие",
    tag: "Глянец",
  },
  {
    src: "/art-techniques/photo_3222@04-08-2026_21-04-08.jpg",
    type: "image",
    category: "craft",
    title: "Макросъёмка океанической волны",
    tag: "Макро",
  },
  {
    src: "/art-techniques/photo_3224@04-08-2026_21-04-08.jpg",
    type: "image",
    category: "craft",
    title: "Смешивание авторской цветовой палитры",
    tag: "Краски & Смола",
  },
  {
    src: "/art-techniques/photo_3227@04-08-2026_21-04-401.jpg",
    type: "image",
    category: "craft",
    title: "Изумрудные и бирюзовые переливы",
    tag: "Fluid Art",
  },
  {
    src: "/art-techniques/photo_3231@04-08-2026_21-04-401.jpg",
    type: "image",
    category: "craft",
    title: "Кристаллический срез и золотые прожилки",
    tag: "Жеода",
  },
  {
    src: "/art-techniques/photo_2942@31-07-2026_17-46-16.jpg",
    type: "image",
    category: "craft",
    title: "Спил дуба с морем из смолы",
    tag: "Дерево & Смола",
  },
  {
    src: "/art-techniques/photo_2987@31-07-2026_18-19-52.jpg",
    type: "image",
    category: "craft",
    title: "Арт-подстаканники в форме минералов",
    tag: "Аксессуары",
  },
  {
    src: "/art-techniques/photo_2999@31-07-2026_18-44-13.jpg",
    type: "image",
    category: "craft",
    title: "Интерьерный поднос ручной работы",
    tag: "Интерьерный арт",
  },
  {
    src: "/art-techniques/photo_3138@31-07-2026_19-44-20.jpg",
    type: "image",
    category: "craft",
    title: "Подготовка формы и нанесение слоёв",
    tag: "Процесс",
  },
  {
    src: "/art-techniques/photo_3174@04-08-2026_20-56-52.jpg",
    type: "image",
    category: "craft",
    title: "Работа над сложной многоуровневой заливкой",
    tag: "Смола / Крафт",
  },
  {
    src: "/art-techniques/photo_3180@04-08-2026_20-56-52.jpg",
    type: "image",
    category: "craft",
    title: "Детализация и закрепление элементов",
    tag: "Крафт",
  },
  {
    src: "/art-techniques/photo_3390@04-08-2026_22-16-46.jpg",
    type: "image",
    category: "craft",
    title: "Готовое изделие в интерьере",
    tag: "Готовая работа",
  },
];

export function ArtTechniques() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const offlineTags = ["Эпоксидная смола", "Акрил", "Алкогольные чернила", "Текстурная паста", "Смешанные техники"];
  const offlineExtra = ["Гипс", "Глина", "Масло", "Скетчи"];
  const digitalTools = ["Figma", "Photoshop", "Illustrator", "SketchUp", "Planoplan"];

  const filteredMedia = allMedia.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "craft") return item.category === "craft";
    if (activeTab === "digital") return item.category === "digital";
    if (activeTab === "video") return item.category === "video";
    return true;
  });

  const openLightbox = (item: MediaItem) => {
    const idx = filteredMedia.findIndex((m) => m.src === item.src);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  const nextLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredMedia.length);
  };

  const prevLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredMedia.length) % filteredMedia.length);
  };

  const activeLightboxItem = lightboxIndex !== null ? filteredMedia[lightboxIndex] : null;

  return (
    <section id="techniques" className="border-b border-white/10 bg-[#111111] py-24 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#14F1D9] mb-4">
            Вариант 2 · Bento-стена процессов без обрезки
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat mt-2">
            Техники <span className="text-[#14F1D9]">&</span> Инструменты
          </h2>
          <p className="text-white/60 mt-3 font-inter text-base sm:text-lg">
            Работаю на стыке материального крафта и цифровых технологий — от изящных предметов ручной работы до сложных UI-интерфейсов и 3D-моделей.
          </p>
        </div>

        {/* Top Cards: Offline vs Digital */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          
          <div className="p-8 sm:p-10 rounded-none bg-[#1A1A1A] border border-white/10 relative overflow-hidden group hover:border-white/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#14F1D9]/5 -z-10 group-hover:bg-[#14F1D9]/10 transition-colors"></div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#14F1D9] font-montserrat">
                Офлайн · Материалы & Крафт
              </h3>
              <span className="text-[10px] font-mono text-white/40 uppercase">Физические объекты</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {offlineTags.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-2 rounded-none border border-white/20 text-white text-xs uppercase tracking-wider font-semibold hover:border-[#14F1D9] hover:text-[#14F1D9] transition-colors cursor-default bg-black/20"
                >
                  {t}
                </span>
              ))}
              {offlineExtra.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-2 rounded-none border border-white/10 text-white/50 text-xs uppercase tracking-wider font-semibold hover:border-[#14F1D9] hover:text-[#14F1D9] transition-colors cursor-default bg-black/10"
                >
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
              {digitalTools.map((i) => (
                <span
                  key={i}
                  className="px-3.5 py-2 rounded-none bg-[#14F1D9]/10 border border-[#14F1D9]/30 text-[#14F1D9] text-xs uppercase tracking-wider font-semibold hover:bg-[#14F1D9]/20 transition-colors cursor-default"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#14F1D9]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Медиа-архив ({filteredMedia.length})
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold transition-all ${
                activeTab === "all"
                  ? "bg-[#14F1D9] text-black border border-[#14F1D9]"
                  : "bg-[#1A1A1A] text-white/70 border border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              Все ({allMedia.length})
            </button>
            <button
              onClick={() => setActiveTab("craft")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold transition-all ${
                activeTab === "craft"
                  ? "bg-[#14F1D9] text-black border border-[#14F1D9]"
                  : "bg-[#1A1A1A] text-white/70 border border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              Крафт & Смола ({allMedia.filter((m) => m.category === "craft").length})
            </button>
            <button
              onClick={() => setActiveTab("digital")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold transition-all ${
                activeTab === "digital"
                  ? "bg-[#14F1D9] text-black border border-[#14F1D9]"
                  : "bg-[#1A1A1A] text-white/70 border border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              Цифра & Мокапы ({allMedia.filter((m) => m.category === "digital").length})
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold transition-all ${
                activeTab === "video"
                  ? "bg-[#14F1D9] text-black border border-[#14F1D9]"
                  : "bg-[#1A1A1A] text-white/70 border border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              Видео процессов ({allMedia.filter((m) => m.category === "video").length})
            </button>
          </div>
        </div>

        {/* Masonry Grid with Natural Aspect Ratios (NO CROP!) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredMedia.map((item, idx) => (
            <div
              key={item.src + idx}
              onClick={() => openLightbox(item)}
              className="group relative break-inside-avoid overflow-hidden border border-white/10 bg-[#1A1A1A] hover:border-[#14F1D9] transition-all cursor-pointer"
            >
              {item.type === "video" ? (
                <div className="relative w-full bg-black/40">
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black/80 border border-[#14F1D9] text-[#14F1D9] text-[9px] font-mono uppercase font-bold tracking-widest flex items-center gap-1.5 shadow-lg">
                    <Play className="w-2.5 h-2.5 fill-[#14F1D9]" />
                    Видео
                  </div>
                </div>
              ) : (
                <div className="relative w-full bg-black/30">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              )}

              {/* Information Footbar on Card */}
              <div className="p-3.5 bg-[#161616] border-t border-white/5 flex flex-col gap-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#14F1D9]">
                  {item.tag}
                </span>
                <h4 className="font-montserrat text-xs font-bold text-white uppercase line-clamp-1 group-hover:text-[#14F1D9] transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal with Next/Prev and Full View */}
      {activeLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[95vh] max-w-5xl w-full border border-white/20 bg-[#1A1A1A] p-4 sm:p-6 shadow-2xl rounded-none flex flex-col"
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
                  playsInline
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              ) : (
                <Image
                  src={activeLightboxItem.src}
                  alt={activeLightboxItem.title}
                  width={1400}
                  height={900}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              )}
            </div>

            {/* Bottom Bar */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10 pt-4">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#14F1D9]">
                  {activeLightboxItem.tag}
                </span>
                <h3 className="font-montserrat text-base font-bold uppercase text-white sm:text-lg">
                  {activeLightboxItem.title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-white/40 uppercase">
                  {lightboxIndex !== null ? `${lightboxIndex + 1} / ${filteredMedia.length}` : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
