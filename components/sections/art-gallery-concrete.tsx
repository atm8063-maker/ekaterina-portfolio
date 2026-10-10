"use client";

import Image from "next/image";
import { MotionReveal } from "@/components/shared/motion-reveal";

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

// 14 ИДЕАЛЬНЫХ РАМОК ИЗ ФИГМЫ
const frames = [
  { id: 1, src: "/art-gallery/photo_2932@31-07-2026_17-46-11.jpg", style: pct(807, 84, 274, 411) },
  { id: 2, src: "/art-gallery/photo_2931@31-07-2026_17-46-11.jpg", style: pct(641, 142, 96, 162) },
  { id: 3, src: "/art-gallery/photo_2930@31-07-2026_17-46-03.jpg", style: pct(461, 373, 272, 349) },
  { id: 4, src: "/art-gallery/photo_2922@31-07-2026_17-46-03.jpg", style: pct(302, 203, 272, 102) },
  { id: 5, src: "/art-gallery/photo_2026-08-05_00-55-21 (2).jpg", style: pct(163, 373, 225, 246) },
  { id: 6, src: "/art-gallery/photo_2937@31-07-2026_17-46-11.jpg", style: pct(1153, 145, 273, 351) },
  { id: 7, src: "/art-gallery/photo_2941@31-07-2026_17-46-16.jpg", style: pct(1120, 568, 306, 181) },
  { id: 8, src: "/art-gallery/photo_2935@31-07-2026_17-46-11.jpg", style: pct(805, 567, 95, 159) },
  { id: 9, src: "/art-gallery/photo_2936@31-07-2026_17-46-11.jpg", style: pct(965, 564, 87, 91) },
  { id: 10, src: "/art-gallery/photo_2943@31-07-2026_17-46-16.jpg", style: pct(1499, 203, 159, 102) },
  { id: 11, src: "/art-gallery/photo_2967@31-07-2026_18-19-15.jpg", style: pct(1499, 566, 178, 96) },
  { id: 12, src: "/art-gallery/photo_3048@31-07-2026_19-03-18.jpg", style: pct(1662, 374, 160, 123) },
  { id: 13, src: "/art-gallery/photo_2944@31-07-2026_17-46-16.jpg", style: pct(1500, 374, 93, 123) },
  { id: 14, src: "/art-gallery/photo_2982@31-07-2026_18-19-24.jpg", style: pct(1724, 225, 70, 80) },
];

export default function ArtGalleryConcrete() {
  return (
    <section id="art-gallery" className="relative w-full bg-background overflow-hidden">
      <div className="relative w-full max-w-[1920px] mx-auto shadow-2xl">
        <Image 
          src="/gallery-wall-mockup.png" 
          alt="Gallery Wall" 
          width={1920}
          height={850}
          className="w-full h-auto block"
          priority
        />
        
        {frames.map((frame, index) => (
          <MotionReveal
            key={frame.id}
            variant="scale-in"
            duration={0.6}
            delay={index * 0.05}
            rootMargin="-10% 0px"
            className="absolute relative overflow-hidden group cursor-pointer bg-[#e5e5e5]"
            style={{
              ...frame.style,
              boxShadow: "inset 0 0 15px rgba(0,0,0,0.6)",
            }}
          >
            <Image 
              src={frame.src}
              alt={`Gallery Artwork ${frame.id}`}
              fill
              className="object-cover transition-transform duration-700 group-hov:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hov:opacity-100 transition-opacity duration-500" />
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
