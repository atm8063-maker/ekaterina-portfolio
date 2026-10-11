'use client';

import { useEffect, useState } from "react";
import { prefetchMedia } from "@/components/shared/media-prefetch";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ArtTechniquesGallery } from "@/components/sections/art-techniques-gallery";

type MediaItem = {
  src: string;
  type: "image" | "video";
  title: string;
  tag: string;
};

const items: MediaItem[] = [
  {
    src: "/art-techniques/photo_3390@04-08-2026_22-16-46.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_3180@04-08-2026_20-56-52.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_3138@31-07-2026_19-44-20.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_3174@04-08-2026_20-56-52.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_3224@04-08-2026_21-04-08.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_2026-09-05_13-57-09 (2).webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_3222@04-08-2026_21-04-08.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_2026-09-08_19-29-45 (6).webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/video_45@31-07-2026_19-44-02.mp4",
    type: "video",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_3227@04-08-2026_21-04-401.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_2987@31-07-2026_18-19-52.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_2026-09-08_19-29-46 (3).webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/video_114@04-08-2026_22-24-13.mp4",
    type: "video",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_3231@04-08-2026_21-04-401.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_2026-08-27_17-30-18.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_3221@04-08-2026_21-04-08.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/Poster mockup leaning against a textured wall (Mockuuups Studio).webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/video_151@04-08-2026_22-26-50.mp4",
    type: "video",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_3220@04-08-2026_21-04-08.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/iPhone 12 Pro.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_2999@31-07-2026_18-44-13.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_2026-08-30_02-47-41.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/video_144@04-08-2026_22-24-35.mp4",
    type: "video",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_3218@04-08-2026_21-04-08.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/Free iPad Air mockup held by user against a bright silver background  (Mockuuups Studio).webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_2942@31-07-2026_17-46-16.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/video_146@04-08-2026_22-24-35.mp4",
    type: "video",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_2026-08-27_17-30-19 (6).webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_3219@04-08-2026_21-04-08.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/Free Clean desk with Dell display mockup (Mockuuups Studio)1.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/video_105@04-08-2026_22-23-33.mp4",
    type: "video",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/photo_3217@04-08-2026_21-04-08.webp",
    type: "image",
    title: "",
    tag: "",
  },
  {
    src: "/art-techniques/Free Macbook Pro Space Gray mockup on the wooden table (Mockuuups Studio).webp",
    type: "image",
    title: "",
    tag: "",
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

  useEffect(() => {
    if (lightboxIndex === null) return;
    const count = items.length;
    for (const offset of [-1, 0, 1]) {
      prefetchMedia(items[(lightboxIndex + offset + count) % count]?.src);
    }
  }, [lightboxIndex]);

  return (
    <section id="techniques" className="bg-background py-16 sm:py-20 relative overflow-hidden scroll-mt-20">
      {/* Clean Dark Paper Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.webp" 
          alt="Paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
        />
      </div>

      {/* Top & bottom gradient blend fades */}
      <div className="absolute top-0 left-0 w-full h-24 lg:h-36 bg-gradient-to-b from-background via-background/60 to-transparent z-[15] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-36 bg-gradient-to-t from-background via-background/60 to-transparent z-[15] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat mt-2">
            Техники <span className="text-primary">&</span> Инструменты
          </h2>
          <p className="text-white/60 mt-2 font-inter text-sm sm:text-base">
            Работаю на стыке материального крафта и цифровых технологий — от изящных предметов ручной работы до сложных UI-интерфейсов и 3D-моделей.
          </p>
        </div>

        {/* Top Cards: Offline vs Digital */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          <div className="p-6 sm:p-8 rounded-none bg-surface border border-white/10 relative overflow-hidden group hover:border-white/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -z-10 group-hover:bg-primary/10 transition-colors"></div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs uppercase tracking-widest font-bold text-primary font-montserrat">
                Офлайн · Материалы & Крафт
              </h3>
              <span className="text-[10px] font-inter text-white/40 uppercase tracking-wider">Физические объекты</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {offlineTags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-none border border-white/20 text-white text-xs uppercase tracking-wider font-semibold font-inter hover:border-primary hover:text-primary transition-colors cursor-default bg-black/20"
                >
                  {t}
                </span>
              ))}
              {offlineExtra.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-none border border-white/10 text-white/50 text-xs uppercase tracking-wider font-semibold font-inter hover:border-primary hover:text-primary transition-colors cursor-default bg-black/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-none bg-surface border border-white/10 relative overflow-hidden group hover:border-white/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -z-10 group-hover:bg-primary/10 transition-colors"></div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs uppercase tracking-widest font-bold text-primary font-montserrat">
                Цифра · Design <span className="text-primary">&</span> Tech
              </h3>
              <span className="text-[10px] font-inter text-white/40 uppercase tracking-wider">Интерфейсы & 3D</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {digitalTools.map((i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-none bg-primary/10 border border-primary/30 text-primary text-xs uppercase tracking-wider font-semibold font-inter hover:bg-primary/20 transition-colors cursor-default"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Swipe Badge for Desktop & Mobile */}
      <div className="container mx-auto px-6 text-center mb-4 relative z-20">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/15 rounded-full text-[11px] font-mono font-bold tracking-wider text-primary uppercase shadow-md">
          <span>←</span> Листайте галерею <span>→</span>
        </div>
      </div>

      <ArtTechniquesGallery items={items} onOpenLightbox={openLightbox} />

      <div className="container mx-auto px-6 text-center mt-3 relative z-20">
        <p className="text-[11px] font-inter text-white/50 tracking-wider">
          💡 Свайпайте или перетаскивайте мышкой · Кликните для полного размера
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
            className="relative max-h-[92vh] max-w-5xl w-full border border-white/20 bg-surface p-4 sm:p-6 shadow-2xl rounded-none flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-4 -right-4 z-20 flex h-10 w-10 items-center justify-center border border-white/20 bg-black text-white hover:bg-primary hover:text-black transition-colors shadow-lg"
              aria-label="Закрыть"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev/Next arrows */}
            <button
              onClick={prevLightbox}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/80 text-white hover:bg-primary hover:text-black transition-colors"
              aria-label="Предыдущий"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextLightbox}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/80 text-white hover:bg-primary hover:text-black transition-colors"
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
                  preload="auto"
                  autoPlay
                  muted
                  playsInline
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={activeLightboxItem.src}
                  alt="Gallery item"
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              )}
            </div>

            {/* Counter Only */}
            <div className="mt-3 flex items-center justify-end border-t border-white/10 pt-3">
              <span className="text-xs font-mono text-white/50 tracking-wider">
                {lightboxIndex !== null ? `${lightboxIndex + 1} / ${items.length}` : ""}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
