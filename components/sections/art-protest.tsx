'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

export type MediaItem = {
  type: 'image' | 'video';
  src: string;
  label?: string;
  aspect?: string; // CSS aspect-ratio string
};

export type Artwork = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  concept: string;
  materials: string;
  year: string;
  media: MediaItem[];
};

const artworksData: Artwork[] = [
  // 1. Папка 1: Deep rest
  {
    id: 'work-1',
    number: '01',
    title: 'Deep rest',
    subtitle: 'Артивизм & Текстура',
    concept: 'Исследование многослойности, преломления света и оптической глубины через синтез смолы и пигментов.',
    materials: 'Эпоксидная смола, пигменты, арт-борд',
    year: '2023',
    media: [
      {
        type: 'image',
        src: '/art-protest/папка 1/photo_2957@31-07-2026_18-19-07.jpg',
        label: 'Финальная работа',
        aspect: '1280 / 1271',
      },
      {
        type: 'image',
        src: '/art-protest/папка 1/photo_3018@31-07-2026_18-44-23.jpg',
        label: 'Скульптурный элемент',
        aspect: '576 / 1280',
      },
      {
        type: 'video',
        src: '/art-protest/папка 1/video_137@04-08-2026_22-24-33.mp4',
        label: 'Видеодеталь',
        aspect: '9 / 16',
      },
    ],
  },

  // 2. Папка 2: Февраль 22-го
  {
    id: 'work-2',
    number: '02',
    title: 'Февраль 22-го',
    subtitle: 'Контрасты & Графика',
    concept: 'Архитектоника формы и акцентная геометрия на стыке природного хаоса и строгого минимализма.',
    materials: 'Эпоксидная смола, смешанная техника, текстура',
    year: '2023–2024',
    media: [
      {
        type: 'image',
        src: '/art-protest/папка 2/photo_3291@04-08-2026_21-08-4231.jpg',
        label: 'Главный вид',
        aspect: '1024 / 1280',
      },
      {
        type: 'video',
        src: '/art-protest/папка 2/video_102@04-08-2026_21-08-46.mp4',
        label: 'Живой рельеф',
        aspect: '9 / 16',
      },
      {
        type: 'image',
        src: '/art-protest/папка 2/photo_3359@04-08-2026_21-08-46.jpg',
        label: 'Фрагмент',
        aspect: '1024 / 1280',
      },
      {
        type: 'image',
        src: '/art-protest/папка 2/photo_3360@04-08-2026_21-08-46_1.jpg',
        label: 'Макро',
        aspect: '874 / 1170',
      },
      {
        type: 'image',
        src: '/art-protest/папка 2/photo_3362@04-08-2026_21-08-46.jpg',
        label: 'Деталь',
        aspect: '1024 / 1280',
      },
    ],
  },

  // 3. Папка 3: Последняя капля (фото повернуто на 90 градусов вертикально)
  {
    id: 'work-3',
    number: '03',
    title: 'Последняя капля',
    subtitle: 'Монохром & Тени',
    concept: 'Визуальный ритм и взаимодействие фактуры с направленным источником света.',
    materials: 'Эпоксидный глянец, пигменты, арт-борд',
    year: '2024',
    media: [
      {
        type: 'image',
        src: '/art-protest/папка 3/photo_3332@04-08-2026_21-08-45.jpg',
        label: 'Экспозиция',
        aspect: '758 / 1280',
      },
      {
        type: 'video',
        src: '/art-protest/папка 3/video_95@04-08-2026_21-08-44.mp4',
        label: 'Видеодеталь',
        aspect: '9 / 16',
      },
    ],
  },

  // 4. Папка 4: Бензиновая радуга
  {
    id: 'work-4',
    number: '04',
    title: 'Бензиновая радуга',
    subtitle: 'Серия «Трансформация»',
    concept: 'Масштабное художественное исследование структуры и тактильного восприятия поверхности.',
    materials: 'Многослойная заливка, кварц, пигменты',
    year: '2024',
    media: [
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_3309@04-08-2026_21-08-42.jpg',
        label: 'Главный вид',
        aspect: '1024 / 1280',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-39.jpg',
        label: 'Ракурс A',
        aspect: '718 / 960',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40.jpg',
        label: 'Ракурс B',
        aspect: '718 / 960',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40 (2).jpg',
        label: 'Рельеф',
        aspect: '718 / 960',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40 (3).jpg',
        label: 'Срез',
        aspect: '718 / 960',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40 (5).jpg',
        label: 'Фактура',
        aspect: '720 / 960',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40 (7).jpg',
        label: 'Макро',
        aspect: '706 / 960',
      },
    ],
  },

  // 5. Папка 5: Пусть танцуют лебеди (только 1 фото, без руки)
  {
    id: 'work-5',
    number: '05',
    title: 'Пусть танцуют лебеди',
    subtitle: 'Глубина & Пространство',
    concept: 'Лаконичная форма с акцентом на монолитность и оптические свойства смоляной линзы.',
    materials: 'Смола, акриловая подложка',
    year: '2023',
    media: [
      {
        type: 'image',
        src: '/art-protest/папка 5/photo_2933@31-07-2026_17-46-11.jpg',
        label: 'Композиция',
        aspect: '1212 / 1280',
      },
    ],
  },

  // 6. Папка 6: И?
  {
    id: 'work-6',
    number: '06',
    title: 'И?',
    subtitle: 'Текстурный рельеф',
    concept: 'Скульптурная пластика и послойное наращивание объёма на границе живописи и барельефа.',
    materials: 'Текстурная паста, эпоксидная смола, графит',
    year: '2024',
    media: [
      {
        type: 'image',
        src: '/art-protest/папка 6/photo_3168@04-08-2026_20-56-52.jpg',
        label: 'Общий вид',
        aspect: '1105 / 1105',
      },
      {
        type: 'image',
        src: '/art-protest/папка 6/photo_2026-08-27_17-30-22 (8).jpg',
        label: 'Деталь',
        aspect: '1280 / 1022',
      },
      {
        type: 'image',
        src: '/art-protest/папка 6/photo_2026-08-27_17-30-23.jpg',
        label: 'Рельеф',
        aspect: '626 / 626',
      },
      {
        type: 'image',
        src: '/art-protest/папка 6/photo_2026-08-27_17-30-23 (2).jpg',
        label: 'Текстура',
        aspect: '1078 / 1078',
      },
    ],
  },

  // 7. Папка 7: Красная серия
  {
    id: 'work-7',
    number: '07',
    title: 'Красная серия',
    subtitle: 'Свет & Метафизика',
    concept: 'Эмоциональный манифест свободы самовыражения через смелые цветовые переходы и плотность фактур.',
    materials: 'Смола, интерьерный арт-борд, пигменты',
    year: '2024',
    media: [
      {
        type: 'image',
        src: '/art-protest/папка 7/photo_3227@04-08-2026_21-04-40.jpg',
        label: 'Главный вид',
        aspect: '1024 / 1280',
      },
      {
        type: 'image',
        src: '/art-protest/папка 7/photo_3394@04-08-2026_22-17-05.jpg',
        label: 'Контраст & Свет',
        aspect: '1080 / 810',
      },
      {
        type: 'image',
        src: '/art-protest/папка 7/photo_3225@04-08-2026_21-04-40.jpg',
        label: 'Ракурс',
        aspect: '720 / 900',
      },
      {
        type: 'image',
        src: '/art-protest/папка 7/photo_2026-08-27_17-30-22.jpg',
        label: 'Деталь A',
        aspect: '604 / 402',
      },
      {
        type: 'image',
        src: '/art-protest/папка 7/photo_2026-08-27_17-30-22 (2).jpg',
        label: 'Деталь B',
        aspect: '908 / 604',
      },
      {
        type: 'image',
        src: '/art-protest/папка 7/photo_2026-08-27_17-30-22 (3).jpg',
        label: 'Деталь C',
        aspect: '908 / 604',
      },
    ],
  },
];

// Single Item Frame: Solid 4px black borders, no overlapping icons, opens lightbox on click
function ProportionalItem({
  item,
  artwork,
  onOpenLightbox,
  style,
  className = '',
}: {
  item: MediaItem;
  artwork: Artwork;
  onOpenLightbox: (item: MediaItem, artwork: Artwork) => void;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      onClick={() => onOpenLightbox(item, artwork)}
      style={{
        aspectRatio: item.aspect || '1 / 1',
        ...style,
      }}
      className={`relative overflow-hidden border-[4px] border-black group cursor-pointer transition-transform hover:scale-[1.015] shadow-md bg-transparent shrink-0 ${className}`}
    >
      {item.type === 'video' ? (
        <div className="relative w-full h-full bg-black/40">
          <video
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-fill block"
          />
          <div className="absolute top-1.5 right-1.5 p-1 bg-black text-[#14F1D9] border-2 border-black z-10 shadow-sm">
            <Play className="w-3.5 h-3.5 fill-[#14F1D9]" />
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={item.src}
            alt={item.label || artwork.title}
            fill
            sizes="450px"
            className="object-fill block"
          />
        </div>
      )}
    </div>
  );
}

// Architectural De Stijl / Editorial Stepped Collage on Pure Concrete with Bold 4px Borders & Zero Overlap
function SteppedCollage({
  artwork,
  onOpenLightbox,
}: {
  artwork: Artwork;
  onOpenLightbox: (item: MediaItem, artwork: Artwork) => void;
  index: number;
}) {
  const m = artwork.media;

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center select-none bg-transparent">
      
      {/* Title & Metadata directly over concrete */}
      <div className="w-full max-w-[640px] flex items-center justify-between gap-3 mb-3 z-20 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-montserrat font-black uppercase text-black bg-[#14F1D9] px-2 py-0.5 border-2 border-black tracking-wider">
            {artwork.number}
          </span>
          <span className="text-xs sm:text-sm font-montserrat font-black uppercase tracking-wider text-black">
            {artwork.title}
          </span>
          <span className="text-xs text-black/80 font-sans font-semibold hidden sm:inline-block">
            · {artwork.materials}
          </span>
        </div>
        <span className="text-xs font-montserrat font-black text-black bg-white/90 px-2 py-0.5 border-2 border-black">
          {artwork.year}
        </span>
      </div>

      {/* Dynamic Asymmetrical Collage Body - Width 640px, Height 460px */}
      <div className="relative w-full max-w-[640px] h-[430px] sm:h-[470px]">
        
        {/* ========================================================= */}
        {/* CASE 1: Deep rest (3 items placed side-by-side cleanly)   */}
        {/* ========================================================= */}
        {artwork.id === 'work-1' && (
          <div className="relative w-full h-full">
            {/* Bold 4px Lines with Overshoots */}
            <div className="absolute top-[72%] -left-10 -right-10 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[330px] -top-8 -bottom-8 w-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[475px] -top-8 -bottom-8 w-[4px] bg-black pointer-events-none z-10" />

            {/* Main Square Photo: Left (width 320px, height 320px) */}
            <div className="absolute left-0 top-[8%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '320px' }} />
            </div>

            {/* Middle Vertical Detail: photo_3018 (width 135px, height 300px) */}
            <div className="absolute left-[330px] top-[4%] z-20">
              <ProportionalItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '300px' }} />
            </div>

            {/* Right Vertical Video: video_137 (width 155px, height 275px) */}
            <div className="absolute left-[475px] top-[14%] z-20">
              <ProportionalItem item={m[2]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '275px' }} />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 2: Февраль 22-го (5 items, zero overlap)             */}
        {/* ========================================================= */}
        {artwork.id === 'work-2' && (
          <div className="relative w-full h-full">
            {/* Bold 4px Lines */}
            <div className="absolute top-[36%] -left-10 -right-10 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute top-[72%] -left-8 -right-8 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[165px] -top-8 -bottom-8 w-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[435px] -top-8 -bottom-8 w-[4px] bg-black pointer-events-none z-10" />

            {/* Item 2 (Bottom Left): photo_3359 (width 150px, height 187px) */}
            <div className="absolute left-0 bottom-[8%] z-20">
              <ProportionalItem item={m[2]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '187px' }} />
            </div>

            {/* Item 0 (Center Left Tall): photo_3291 (width 260px, height 325px) */}
            <div className="absolute left-[165px] top-[6%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '325px' }} />
            </div>

            {/* Item 1 (Top Right): video_102 (width 110px, height 195px) */}
            <div className="absolute left-[435px] top-0 z-20">
              <ProportionalItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '195px' }} />
            </div>

            {/* Item 3 (Bottom Right 1): photo_3360_1 (width 95px, height 127px) */}
            <div className="absolute left-[435px] top-[195px] z-20">
              <ProportionalItem item={m[3]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '127px' }} />
            </div>

            {/* Item 4 (Bottom Right 2): photo_3362 (width 100px, height 125px) */}
            <div className="absolute left-[535px] top-[195px] z-20">
              <ProportionalItem item={m[4]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '125px' }} />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 3: Последняя капля (вертикальное фото 758x1280 + видео 9:16) */}
        {/* ========================================================= */}
        {artwork.id === 'work-3' && (
          <div className="relative w-full h-full">
            {/* Bold 4px Lines */}
            <div className="absolute top-[52%] -left-10 -right-10 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[225px] -top-8 -bottom-8 w-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[435px] -top-8 -bottom-8 w-[4px] bg-black pointer-events-none z-10" />

            {/* Left Vertical: photo_3332 (width 210px, height 355px) */}
            <div className="absolute left-0 top-[6%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '355px' }} />
            </div>

            {/* Center Vertical Video: video_95 (width 200px, height 355px) */}
            <div className="absolute left-[225px] top-[6%] z-20">
              <ProportionalItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '355px' }} />
            </div>

            {/* Right: Concept Annotation Card */}
            <div className="absolute left-[435px] top-[12%] right-0 z-20 border-[4px] border-black p-4 bg-white/80">
              <span className="text-xs font-montserrat font-black uppercase text-black tracking-wider block">
                Концепция
              </span>
              <p className="text-xs text-black font-sans font-bold leading-relaxed mt-2">
                {artwork.concept}
              </p>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 4: Бензиновая радуга (7 items, zero overlap)         */}
        {/* ========================================================= */}
        {artwork.id === 'work-4' && (
          <div className="relative w-full h-full">
            {/* Bold 4px Lines */}
            <div className="absolute top-[44%] -left-10 -right-10 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute top-[76%] -left-8 -right-8 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[155px] -top-8 -bottom-8 w-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[425px] -top-8 -bottom-8 w-[4px] bg-black pointer-events-none z-10" />

            {/* Item 1: photo_2026-08-30_02-47-39 (width 140px, height 187px) */}
            <div className="absolute left-0 bottom-[8%] z-20">
              <ProportionalItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '187px' }} />
            </div>

            {/* Item 0: photo_3309 Tall Center (width 260px, height 325px) */}
            <div className="absolute left-[155px] top-[6%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '325px' }} />
            </div>

            {/* Item 2: photo_2026-08-30_02-47-40 (width 100px, height 133px) */}
            <div className="absolute left-[425px] top-0 z-20">
              <ProportionalItem item={m[2]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '133px' }} />
            </div>

            {/* Item 3: photo_2026-08-30_02-47-40 (2) (width 100px, height 133px) */}
            <div className="absolute left-[530px] top-[20px] z-20">
              <ProportionalItem item={m[3]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '133px' }} />
            </div>

            {/* Item 4: photo_2026-08-30_02-47-40 (3) (width 80px, height 107px) */}
            <div className="absolute left-[425px] top-[140px] z-20">
              <ProportionalItem item={m[4]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '107px' }} />
            </div>

            {/* Item 5: photo_2026-08-30_02-47-40 (5) (width 80px, height 107px) */}
            <div className="absolute left-[510px] top-[155px] z-20">
              <ProportionalItem item={m[5]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '107px' }} />
            </div>

            {/* Item 6: photo_2026-08-30_02-47-40 (7) (width 80px, height 107px) */}
            <div className="absolute left-[425px] top-[255px] z-20">
              <ProportionalItem item={m[6]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '107px' }} />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 5: Пусть танцуют лебеди (ТОЛЬКО 1 ФОТО, без руки)   */}
        {/* ========================================================= */}
        {artwork.id === 'work-5' && (
          <div className="relative w-full h-full">
            {/* Bold 4px Lines */}
            <div className="absolute top-[58%] -left-10 -right-10 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[360px] -top-8 -bottom-8 w-[4px] bg-black pointer-events-none z-10" />

            {/* Photo 0: photo_2933 (width 340px, height 360px) */}
            <div className="absolute left-0 top-[6%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '360px' }} />
            </div>

            {/* Right: Architectural Concept Card */}
            <div className="absolute left-[360px] top-[14%] right-0 z-20 border-[4px] border-black p-5 bg-white/80">
              <span className="text-xs font-montserrat font-black uppercase text-black tracking-wider block">
                Концепция работы
              </span>
              <p className="text-xs sm:text-sm text-black font-sans font-bold leading-relaxed mt-2">
                {artwork.concept}
              </p>
              <div className="mt-4 pt-3 border-t-2 border-black flex items-center justify-between text-xs font-montserrat font-black uppercase text-black">
                <span>Материалы</span>
                <span className="font-sans font-semibold text-black/80">{artwork.materials}</span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 6: И? (4 items, zero overlap)                       */}
        {/* ========================================================= */}
        {artwork.id === 'work-6' && (
          <div className="relative w-full h-full">
            {/* Bold 4px Lines */}
            <div className="absolute top-[50%] -left-10 -right-10 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[340px] -top-8 -bottom-8 w-[4px] bg-black pointer-events-none z-10" />

            {/* Photo 0: photo_3168 (width 330px, height 330px) */}
            <div className="absolute left-0 top-[8%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '330px' }} />
            </div>

            {/* Photo 1: photo_2026-08-27_17-30-22 (8) (width 240px, height 192px) */}
            <div className="absolute left-[340px] top-[6px] z-20">
              <ProportionalItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '192px' }} />
            </div>

            {/* Photo 2: photo_2026-08-27_17-30-23 (width 140px, height 140px) */}
            <div className="absolute left-[340px] top-[204px] z-20">
              <ProportionalItem item={m[2]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '140px' }} />
            </div>

            {/* Photo 3: photo_2026-08-27_17-30-23 (2) (width 140px, height 140px) */}
            <div className="absolute left-[485px] top-[204px] z-20">
              <ProportionalItem item={m[3]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '140px' }} />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 7: Красная серия (6 items, zero overlap)             */}
        {/* ========================================================= */}
        {artwork.id === 'work-7' && (
          <div className="relative w-full h-full">
            {/* Bold 4px Lines */}
            <div className="absolute top-[38%] -left-10 -right-10 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute top-[72%] -left-8 -right-8 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[165px] -top-8 -bottom-8 w-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[435px] -top-8 -bottom-8 w-[4px] bg-black pointer-events-none z-10" />

            {/* Photo 1: photo_3394 (width 150px, height 112px) */}
            <div className="absolute left-0 bottom-[10%] z-20">
              <ProportionalItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '112px' }} />
            </div>

            {/* Photo 0: photo_3227 Tall Main (width 260px, height 325px) */}
            <div className="absolute left-[165px] top-[4%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '325px' }} />
            </div>

            {/* Photo 2: photo_3225 (width 140px, height 175px) */}
            <div className="absolute left-[435px] top-0 z-20">
              <ProportionalItem item={m[2]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '175px' }} />
            </div>

            {/* Photo 3: photo_2026-08-27_17-30-22 (width 85px, height 57px) */}
            <div className="absolute left-[435px] top-[180px] z-20">
              <ProportionalItem item={m[3]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '57px' }} />
            </div>

            {/* Photo 4: photo_2026-08-27_17-30-22 (2) (width 85px, height 57px) */}
            <div className="absolute left-[525px] top-[180px] z-20">
              <ProportionalItem item={m[4]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '57px' }} />
            </div>

            {/* Photo 5: photo_2026-08-27_17-30-22 (3) (width 175px, height 116px) */}
            <div className="absolute left-[435px] top-[242px] z-20">
              <ProportionalItem item={m[5]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '116px' }} />
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

// Concluding Manifesto Panel (Balances 4th Wall Segment)
function ManifestoPanel() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center select-none bg-transparent">
      <div className="w-full max-w-[640px] h-[430px] sm:h-[470px] relative flex flex-col justify-between p-6">
        {/* Extended Architectural Lines 4px */}
        <div className="absolute top-[18%] -left-10 -right-10 h-[4px] bg-black pointer-events-none z-10" />
        <div className="absolute bottom-[18%] -left-10 -right-8 h-[4px] bg-black pointer-events-none z-10" />
        <div className="absolute left-[10%] -top-8 -bottom-8 w-[4px] bg-black pointer-events-none z-10" />
        <div className="absolute right-[10%] -top-8 -bottom-8 w-[4px] bg-black pointer-events-none z-10" />

        <div className="relative z-20 pt-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-montserrat font-black uppercase text-black bg-[#14F1D9] px-2 py-0.5 border-2 border-black tracking-wider">
              VIII
            </span>
            <span className="text-xs font-montserrat font-black uppercase tracking-widest text-black">
              Концепция серии
            </span>
          </div>
          <h3 className="font-montserrat text-2xl sm:text-3xl font-black uppercase text-black mt-2 leading-tight">
            Артивизм <span className="text-[#14F1D9] drop-shadow-sm">&</span> Честность
          </h3>
        </div>

        <div className="relative z-20 my-auto py-3">
          <p className="text-sm sm:text-base font-sans leading-relaxed text-black font-bold max-w-[480px]">
            «Каждая работа — это отказ от компромиссов. Эпоксидная смола и минеральные рельефы здесь выступают не как декор, а как прямой визуальный манифест свободы, формы и чистой эмоции».
          </p>
          <div className="mt-4 flex items-center justify-between text-xs font-montserrat text-black uppercase font-bold tracking-wider">
            <span>Екатерина · Fir Tree Art</span>
            <span className="text-black/80 font-sans font-semibold">7 авторских арт-объектов</span>
          </div>
        </div>

        <div className="relative z-20 flex items-center justify-between text-xs font-montserrat font-bold text-black border-t-2 border-black pt-2">
          <span>Виртуальная галерея</span>
          <span>Детали & видеоматериалы</span>
        </div>
      </div>
    </div>
  );
}

export function ArtProtest() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [lightboxState, setLightboxState] = useState<{
    item: MediaItem;
    artwork: Artwork;
  } | null>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Group 7 artworks + 1 manifesto into 4 wall chunks (2 artworks per wall segment)
  const chunks: Array<{ left: Artwork; right?: Artwork | 'manifesto' }> = [
    { left: artworksData[0], right: artworksData[1] },
    { left: artworksData[2], right: artworksData[3] },
    { left: artworksData[4], right: artworksData[5] },
    { left: artworksData[6], right: 'manifesto' },
  ];

  const scrollByAmount = (offset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeft.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.classList.add('cursor-grabbing');
    el.classList.remove('cursor-grab');
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollContainerRef.current;
    if (!el || !isDragging.current) return;
    el.scrollLeft = scrollLeft.current - (e.clientX - startX.current);
  };

  const endDrag = () => {
    isDragging.current = false;
    const el = scrollContainerRef.current;
    el?.classList.remove('cursor-grabbing');
    el?.classList.add('cursor-grab');
  };

  return (
    <section id="art-protest" className="relative w-full bg-[#111111] overflow-hidden scroll-mt-20 border-b border-white/10">
      
      {/* Top Section Header & Controls */}
      <div className="container mx-auto px-6 pt-10 pb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-montserrat font-bold uppercase tracking-widest text-[#14F1D9]">
            Виртуальная галерея вдоль стены
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-montserrat mt-1">
            Артивизм <span className="text-[#14F1D9]">&</span> Честность
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-sans mt-1">
            Асимметричные коллажи в реальных пропорциях каждой работы на бетонной стене. Листай вправо.
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollByAmount(-600)}
            className="flex h-9 w-9 items-center justify-center border-2 border-white/20 bg-[#1A1A1A] text-white hover:border-[#14F1D9] hover:text-[#14F1D9] transition-all rounded-none shadow-md"
            aria-label="Листать влево"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollByAmount(600)}
            className="flex h-9 w-9 items-center justify-center border-2 border-white/20 bg-[#1A1A1A] text-white hover:border-[#14F1D9] hover:text-[#14F1D9] transition-all rounded-none shadow-md"
            aria-label="Листать вправо"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* The Continuous Concrete Wall Track */}
      <div
        ref={scrollContainerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onDragStart={(e) => e.preventDefault()}
        className="relative w-full h-[660px] sm:h-[720px] lg:h-[780px] overflow-x-auto overflow-y-hidden flex flex-nowrap cursor-grab select-none snap-x snap-mandatory hide-scrollbar bg-transparent"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>

        {chunks.map((chunk, index) => (
          <div
            key={index}
            className="relative h-full shrink-0 flex items-center justify-center snap-center bg-transparent"
          >
            {/* Seamless Concrete Wall Texture Segment */}
            <img
              src="/seamless_ceiling_v3_11_final1.jpg"
              alt={`wall segment ${index + 1}`}
              className="h-full w-auto max-w-none block pointer-events-none object-cover"
            />

            {/* Exactly positioned over the 2 spotlight wall frames with closer gap */}
            <div className="absolute inset-0 flex items-center bg-transparent">
              {/* Left padding */}
              <div className="w-[6%] md:w-[5.5%] h-full shrink-0" />

              {/* Spot 1: Left Collage */}
              <div className="relative w-[43%] md:w-[42%] h-[76%] sm:h-[80%] shrink-0 flex items-center justify-center overflow-visible bg-transparent">
                <SteppedCollage
                  artwork={chunk.left}
                  index={index * 2}
                  onOpenLightbox={(item, art) => setLightboxState({ item, artwork: art })}
                />
              </div>

              {/* Reduced Central Wall Gap */}
              <div className="w-[5%] md:w-[5%] h-full shrink-0" />

              {/* Spot 2: Right Collage */}
              <div className="relative w-[43%] md:w-[42%] h-[76%] sm:h-[80%] shrink-0 flex items-center justify-center overflow-visible bg-transparent">
                {chunk.right === 'manifesto' ? (
                  <ManifestoPanel />
                ) : chunk.right ? (
                  <SteppedCollage
                    artwork={chunk.right}
                    index={index * 2 + 1}
                    onOpenLightbox={(item, art) => setLightboxState({ item, artwork: art })}
                  />
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>

              {/* Right padding */}
              <div className="w-[6%] md:w-[5.5%] h-full shrink-0" />
            </div>
          </div>
        ))}

        {/* Trailing spacer */}
        <div className="w-12 shrink-0" />
      </div>

      {/* Lightbox Modal: High-Res View on Click */}
      {lightboxState && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxState(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] max-w-5xl w-full border-2 border-white/20 bg-[#1A1A1A] p-4 sm:p-6 shadow-2xl rounded-none flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxState(null)}
              className="absolute -top-4 -right-4 z-20 flex h-10 w-10 items-center justify-center border-2 border-white/20 bg-black text-white hover:bg-[#14F1D9] hover:text-black transition-colors shadow-lg"
              aria-label="Закрыть"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Media Display Area */}
            <div className="relative max-h-[72vh] w-full flex items-center justify-center overflow-hidden bg-black/90">
              {lightboxState.item.type === 'video' ? (
                <video
                  src={lightboxState.item.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              ) : (
                <Image
                  src={lightboxState.item.src}
                  alt={lightboxState.artwork.title}
                  width={1400}
                  height={900}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              )}
            </div>

            {/* Bottom Metadata */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10 pt-4">
              <div>
                <span className="text-xs font-montserrat font-black uppercase tracking-widest text-[#14F1D9]">
                  {lightboxState.artwork.number} · {lightboxState.artwork.title}
                </span>
                <h3 className="font-montserrat text-base sm:text-lg font-black uppercase text-white">
                  {lightboxState.item.label || lightboxState.artwork.subtitle}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans mt-0.5">
                  {lightboxState.artwork.concept}
                </p>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="text-[10px] font-montserrat font-bold uppercase text-white/50 block">
                  МАТЕРИАЛЫ
                </span>
                <span className="text-xs font-sans text-white/80 font-medium">
                  {lightboxState.artwork.materials}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
