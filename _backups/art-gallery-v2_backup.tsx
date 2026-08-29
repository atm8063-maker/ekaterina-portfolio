"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import galleryData from "@/public/gallery-data.json";
import heroGalleryRaw from "@/public/gallery-hero-data.json";

type MediaItem = { src: string; type: "image" | "video" };
const heroGalleryData = heroGalleryRaw as MediaItem[];

// ─── Canvas dimensions from Figma node 227-115 ───
const CW = 1920;
const CH = 850;

function pct(x: number, y: number, w: number, h: number) {
  return {
    left: `${(x / CW) * 100}%`,
    top: `${(y / CH) * 100}%`,
    width: `${(w / CW) * 100}%`,
    height: `${(h / CH) * 100}%`,
  };
}

// ─── Figma layout 227-115 cells ───
// Largest cell = Rectangle 36 (330×459) → hero
const CELLS: { style: ReturnType<typeof pct>; isHero?: boolean; isText?: boolean }[] = [
  { style: pct(716,  61, 330, 459), isHero: true }, // Rectangle 36 – main portrait (HERO)
  { style: pct(553, 120, 145, 206) },               // Rectangle 37
  { style: pct(368, 344, 330, 400) },               // Rectangle 38
  { style: pct(309, 181, 226, 145) },               // Rectangle 39
  { style: pct( 55, 344, 295, 295) },               // Rectangle 41
  { style: pct(1064, 120, 388, 400) },              // Rectangle 42
  { style: pct( 759, 148, 100, 100) },              // Rectangle 43
  { style: pct(1470,  96, 145, 206) },              // Rectangle 45
  { style: pct(1633, 157, 226, 145) },              // Rectangle 46
  { style: pct(1031, 538, 421, 233) },              // Rectangle 47
  { style: pct( 716, 538, 145, 206) },              // Rectangle 48
  { style: pct( 879, 538, 134, 134) },              // Rectangle 49
  { style: pct(1470, 320, 334, 334) },              // Rectangle 44
];

const HERO_IDX = 0;

// ─── Single cell with crossfade ───
function GalleryCell({
  items,
  style,
  isHero = false,
}: {
  items: MediaItem[];
  style: React.CSSProperties;
  isHero?: boolean;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const ms = (isHero ? 6000 : 4000) + Math.random() * 4000;
    const t = setInterval(() => setIdx((p) => (p + 1) % items.length), ms);
    return () => clearInterval(t);
  }, [items.length, isHero]);

  if (!items?.length) return null;
  const cur = items[idx];

  return (
    <div
      className="absolute flex items-center justify-center bg-transparent z-10 mix-blend-multiply"
      style={style}
    >
      <div className="relative w-[100%] h-[100%] overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={cur.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {cur.type === "video" ? (
              <video
                src={cur.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={cur.src}
                alt=""
                fill
                quality={isHero ? 80 : 55}
                sizes="(max-width: 768px) 90vw, 30vw"
                className="object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Mobile: simple responsive grid (2 cols) ───
function MobileGallery({ items, heroItems }: { items: MediaItem[]; heroItems: MediaItem[] }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (heroItems.length <= 1) return;
    const t = setInterval(() => setIdx((p) => (p + 1) % heroItems.length), 6000);
    return () => clearInterval(t);
  }, [heroItems.length]);

  const cur = heroItems[idx];

  return (
    <div className="flex flex-col gap-3 p-4">
      {/* Hero image on top */}
      {cur && (
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-none"
          style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.05)" }}>
          <AnimatePresence mode="popLayout">
            <motion.div key={cur.src} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }} className="absolute inset-0">
              {cur.type === "video"
                ? <video src={cur.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                : <Image src={cur.src} alt="" fill quality={75} className="object-cover" />}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
      {/* Grid of smaller cells */}
      <div className="grid grid-cols-2 gap-3">
        {items.slice(0, 12).map((item, i) => (
          <div key={i} className="relative overflow-hidden"
            style={{ aspectRatio: i % 3 === 0 ? "4/3" : "1/1", boxShadow: "0 6px 20px rgba(0,0,0,0.6)" }}>
            {item.type === "video"
              ? <video src={item.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              : <Image src={item.src} alt="" fill quality={50} className="object-cover" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GalleryV2() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-screen bg-[#1a1a1a]" />;

  const allItems = (galleryData as MediaItem[]).filter(item => item.type === "image");
  const heroItemsRaw = heroGalleryData.filter(item => item.type === "image");
  const heroItems = heroItemsRaw.length > 0 ? heroItemsRaw : allItems.slice(0, 5);

  // distribute non-hero items across non-hero cells
  const nonHeroIndices = CELLS.map((_, i) => i).filter(i => i !== HERO_IDX);
  const slots: MediaItem[][] = Array.from({ length: CELLS.length }, () => []);
  slots[HERO_IDX] = heroItems;
  allItems.forEach((item, i) => {
    const idx = nonHeroIndices[i % nonHeroIndices.length];
    slots[idx].push(item);
  });

  return (
    <section
      id="concrete-gallery-v2"
      className="relative w-full overflow-hidden"
      style={{ background: "#0f0f0f" }}
    >
      {/* ── Solid dark background ── */}
      <div className="absolute inset-0 z-0 bg-[#0f0f0f]" />

      {/* ── DESKTOP ── */}
      <div className="hidden lg:block relative z-10 w-full h-full flex-1">
        <div className="w-full h-full flex items-center justify-center p-8">
          <div
            className="relative w-full shadow-2xl overflow-hidden"
            style={{
              aspectRatio: `${CW} / ${CH}`,
              maxHeight: "100%",
              maxWidth: `calc((100vh - 8rem) * ${CW / CH})`,
            }}
          >
            {/* Background image containing frames and wall */}
            <Image src="/group44.png" alt="Gallery Layout" fill className="object-cover z-0" priority />
            
            {CELLS.map((cell, i) => (
              <GalleryCell
                key={i}
                items={slots[i]}
                style={cell.style}
                isHero={cell.isHero}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="lg:hidden relative z-10">
        <MobileGallery items={allItems} heroItems={heroItems} />
      </div>
    </section>
  );
}
