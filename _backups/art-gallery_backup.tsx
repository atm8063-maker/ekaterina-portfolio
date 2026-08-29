"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import galleryData from "@/public/gallery-data.json";

type MediaItem = { src: string; type: "image" | "video" };

import heroGalleryRaw from "@/public/gallery-hero-data.json";

const heroGalleryData = heroGalleryRaw as MediaItem[];

/**
 * A single gallery cell with crossfade rotation.
 */
function GalleryCell({
  items,
  style,
  className = "",
}: {
  items: MediaItem[];
  style?: React.CSSProperties;
  className?: string;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const ms = 4000 + Math.random() * 6000;
    const t = setInterval(() => setIdx((p) => (p + 1) % items.length), ms);
    return () => clearInterval(t);
  }, [items.length]);

  if (!items?.length) return null;
  const cur = items[idx];

  return (
    <div 
      className={`bg-[#0a0a0a] shadow-[10px_20px_30px_rgba(0,0,0,0.8)] border-[6px] border-[#111] overflow-hidden ${className}`} 
      style={style}
    >
      <div className="relative w-full h-full">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={cur.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {cur.type === "video" ? (
              <video
                src={cur.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 filter contrast-125 brightness-90"
              />
            ) : (
              <Image
                src={cur.src}
                alt="Gallery"
                fill
                quality={50}
                sizes="(max-width: 768px) 45vw, 15vw"
                className="object-cover transition-transform duration-700 hover:scale-105 filter contrast-110"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/*
 * ═══════════════════════════════════════════════════════════
 * FIGMA DESKTOP LAYOUT — node 219-73 "раскладка фото"
 * Full layout: 1691 × 851
 * ═══════════════════════════════════════════════════════════
 */
const DW = 2099;
const DH = 851;
function dpct(x: number, y: number, w: number, h: number) {
  return {
    left: `${(x / DW) * 100}%`,
    top: `${(y / DH) * 100}%`,
    width: `${(w / DW) * 100}%`,
    height: `${(h / DH) * 100}%`,
  };
}

// isHero marks the biggest cell (392×483) for special content
const DESKTOP_CELLS: { style: ReturnType<typeof dpct>; isHero?: boolean }[] = [
  { style: dpct(0, 394, 180, 400) }, // [0] NEW FAR LEFT
  { style: dpct(422, 180, 280, 180) }, // [1] Modified to fit title
  { style: dpct(635, 84, 100, 146) }, // [2]
  { style: dpct(635, 239, 100, 146) }, // [3]
  { style: dpct(204, 394, 214, 146) }, // [4]
  { style: dpct(527, 394, 100, 146) }, // [5]
  { style: dpct(635, 394, 100, 146) }, // [6]
  { style: dpct(743, 394, 100, 146) }, // [7]
  { style: dpct(422, 550, 100, 146) }, // [8]
  { style: dpct(530, 550, 205, 301) }, // [9]
  { style: dpct(743, 550, 100, 146) }, // [10]
  { style: dpct(308, 705, 214, 146) }, // [11]
  { style: dpct(901, 0, 146, 146) }, // [12]
  { style: dpct(1056, 0, 146, 146) }, // [13]
  { style: dpct(746, 46, 146, 100) }, // [14]
  { style: dpct(746, 154, 301, 205) }, // [15]
  { style: dpct(1056, 154, 146, 100) }, // [16]
  { style: dpct(1212, 259, 146, 100) }, // [17]
  { style: dpct(854, 368, 392, 483), isText: true }, // [18] TEXT CONTAINER (Rectangle 41)
  { style: dpct(1473, 58, 205, 301) }, // [19]
  { style: dpct(1686, 58, 100, 146) }, // [20]
  { style: dpct(1365, 213, 100, 146) }, // [21]
  { style: dpct(1686, 213, 100, 146) }, // [22]
  { style: dpct(1255, 368, 210, 210) }, // [23]
  { style: dpct(1578, 368, 100, 146) }, // [24]
  { style: dpct(1686, 368, 209, 146) }, // [25]
  { style: dpct(1473, 524, 100, 146) }, // [26]
  { style: dpct(1581, 524, 205, 327) }, // [27]
  { style: dpct(1794, 524, 100, 146) }, // [28]
  { style: dpct(1359, 679, 214, 172) }, // [29]
  { style: dpct(745, 0, 146, 146) }, // [30] NEW TOP MIDDLE
  { style: dpct(1910, 84, 190, 550) }, // [31] NEW FAR RIGHT
];

/*
 * ═══════════════════════════════════════════════════════════
 * FIGMA MOBILE LAYOUT — node 222-74
 * Full layout: 818 × 1906
 * Filter out cells with x > 818 (off-screen in Figma)
 * ═══════════════════════════════════════════════════════════
 */
const MW = 818;
const MH = 1906;
function mpct(x: number, y: number, w: number, h: number) {
  return {
    left: `${(x / MW) * 100}%`,
    top: `${(y / MH) * 100}%`,
    width: `${(w / MW) * 100}%`,
    height: `${(h / MH) * 100}%`,
  };
}

// Only cells visible within the 818px mobile viewport
const MOBILE_CELLS: { style: ReturnType<typeof mpct>; isHero?: boolean }[] = [
  // ─── Top cluster (same as Group 39) ───
  { style: mpct(310,  57,  205, 301) },   // [0]  large portrait
  { style: mpct(523,  57,  100, 146) },   // [1]  small
  { style: mpct( 92, 145,  100, 146) },   // [2]  small
  { style: mpct(202, 212,  100, 146) },   // [3]  small
  { style: mpct(523, 212,  100, 146) },   // [4]  small
  { style: mpct( 92, 367,  214, 146) },   // [5]  wide
  { style: mpct(415, 367,  100, 146) },   // [6]  small
  { style: mpct(523, 367,  100, 146) },   // [7]  small
  { style: mpct(631, 367,  100, 146) },   // [8]  small
  { style: mpct(310, 523,  100, 146) },   // [9]  small
  { style: mpct(418, 523,  205, 301) },   // [10] large portrait
  { style: mpct(631, 523,  100, 146) },   // [11] small
  { style: mpct(196, 678,  214, 146) },   // [12] wide

  // ─── Center big piece + surrounding ───
  { style: mpct( 73, 840,  392, 483), isText: true }, // [13] TEXT CONTAINER
  { style: mpct(475, 869,  100, 146) },   // [14] small
  { style: mpct(580, 869,  100, 146) },   // [15] small
  { style: mpct(475,1024,  205, 301) },   // [16] large portrait

  // ─── Bottom cluster ───
  { style: mpct( 73,1335,  210, 210) },   // [17] square medium
  { style: mpct(396,1335,  100, 146) },   // [18] small
  { style: mpct(504,1335,  209, 146) },   // [19] wide
  { style: mpct(291,1491,  100, 146) },   // [20] small
  { style: mpct(399,1491,  205, 327) },   // [21] large portrait
  { style: mpct(612,1491,  100, 146) },   // [22] small
  { style: mpct(177,1646,  214, 172) },   // [23] wide
];

// Hero cell index in each layout
const DESKTOP_HERO_IDX = 18;
const MOBILE_HERO_IDX = 13;

export default function ArtGallery() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-screen bg-[#111111]" />;

  // ─── Distribute media across slots ───
  const allItems = galleryData as MediaItem[];
  const dSlots: MediaItem[][] = Array.from({ length: DESKTOP_CELLS.length }, () => []);
  const mSlots: MediaItem[][] = Array.from({ length: MOBILE_CELLS.length }, () => []);

  // Non-hero slots get regular gallery items
  const dNonHero = DESKTOP_CELLS.map((_, i) => i).filter(i => i !== DESKTOP_HERO_IDX);
  const mNonHero = MOBILE_CELLS.map((_, i) => i).filter(i => i !== MOBILE_HERO_IDX);

  allItems.forEach((item, i) => {
    const dIdx = dNonHero[i % dNonHero.length];
    dSlots[dIdx].push(item);
    const mIdx = mNonHero[i % mNonHero.length];
    mSlots[mIdx].push(item);
  });

  // Hero slot gets special items, or falls back to a subset of regular items
  const heroItems = heroGalleryData.length > 0
    ? heroGalleryData
    : allItems.slice(0, Math.min(5, allItems.length));
  dSlots[DESKTOP_HERO_IDX] = heroItems;
  mSlots[MOBILE_HERO_IDX] = heroItems;

  return (
    <section
      id="art-gallery"
      className="relative w-full overflow-hidden border-b border-white/10"
    >
      {/* Concrete wall background */}
      <div className="absolute inset-0 z-0 bg-[#111]">
        <Image
          src="/concrete-wall.png"
          alt="Concrete Wall"
          fill
          className="object-cover opacity-60 mix-blend-overlay"
          priority
        />
        {/* Vignette effect for dramatic gallery lighting */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0a0a0a]/90 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, transparent 20%, #050505 100%)' }} />
      </div>

      {/* ═══════════ DESKTOP ═══════════ */}
      <div className="hidden lg:block relative z-10 h-[calc(100vh-5rem)] w-full">
        {/* Title — top left */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute top-6 left-8 z-20 text-left"
        >
          <h2 className="text-3xl xl:text-5xl font-black uppercase text-white font-montserrat leading-none tracking-tight">
            ГАЛЕРЕЯ<br />
            <span className="text-[#14F1D9]">ПРОЕКТОВ</span>
          </h2>
        </motion.div>

        {/* Grid container — scaled to fit viewport */}
        <div className="w-full h-full flex items-center justify-center py-4">
          <div
            className="relative w-full"
            style={{
              aspectRatio: `${DW} / ${DH}`,
              maxHeight: "calc(100vh - 6rem)",
              maxWidth: `calc((100vh - 6rem) * ${DW / DH})`,
            }}
          >
            {DESKTOP_CELLS.map((cell, i) => {
              if (cell.isText) {
                return (
                  <div
                    key={`d-text`}
                    className="absolute flex flex-col justify-center items-start text-left p-6 sm:p-10 z-20 backdrop-blur-sm bg-black/40 border border-white/5 shadow-2xl"
                    style={cell.style}
                  >
                    <div className="w-12 h-1 bg-[#14F1D9] mb-6"></div>
                    <h3 className="text-2xl xl:text-3xl font-black uppercase text-white font-montserrat leading-tight mb-4 tracking-wide">
                      Искусство <br />в деталях
                    </h3>
                    <p className="text-white/70 text-sm xl:text-base leading-relaxed font-inter">
                      Здесь будет располагаться текст. Каждая работа уникальна и несет в себе глубокий смысл, отражая философию автора и красоту момента.
                    </p>
                  </div>
                );
              }
              return (
                <GalleryCell
                  key={`d-${i}`}
                  items={dSlots[i]}
                  className="absolute"
                  style={cell.style}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════════ MOBILE ═══════════ */}
      <div className="lg:hidden relative z-10 w-full">
        {/* Title — top, inside the section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-6 px-4 pb-2 text-left z-20 relative"
        >
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-montserrat leading-none tracking-tight">
            ГАЛЕРЕЯ <span className="text-[#14F1D9]">ПРОЕКТОВ</span>
          </h2>
        </motion.div>

        {/* Asymmetric layout — absolute positioning like Figma */}
        <div
          className="relative w-full"
          style={{ aspectRatio: `${MW} / ${MH}` }}
        >
          {MOBILE_CELLS.map((cell, i) => {
            if (cell.isText) {
              return (
                <div
                  key={`m-text`}
                  className="absolute flex flex-col justify-center items-start text-left p-4 sm:p-8 z-20 backdrop-blur-sm bg-black/40 border border-white/5 shadow-2xl"
                  style={cell.style}
                >
                  <div className="w-8 h-1 bg-[#14F1D9] mb-4"></div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-montserrat leading-tight mb-3 tracking-wide">
                    Искусство <br />в деталях
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-inter">
                    Здесь будет располагаться текст. Каждая работа уникальна и несет в себе глубокий смысл, отражая философию автора.
                  </p>
                </div>
              );
            }
            return (
              <GalleryCell
                key={`m-${i}`}
                items={mSlots[i]}
                className="absolute"
                style={cell.style}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
