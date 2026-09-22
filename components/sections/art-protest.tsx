'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Play, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export type MediaItem = {
  type: 'image' | 'video';
  src: string;
  label?: string;
  width?: number;
  height?: number;
  aspect?: string; // CSS aspect-ratio string, e.g. "1280 / 1271"
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
  // 1. Папка 1 (1280x1271 квадрат + 576x1280 деталь + 9:16 видео)
  {
    id: 'work-1',
    number: '01',
    title: 'Арт-объект I',
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
        label: 'Фрагмент',
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

  // 2. Папка 2 (4 фото 4:5/3:4 + 1 видео 9:16 = 5 элементов)
  {
    id: 'work-2',
    number: '02',
    title: 'Арт-объект II',
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

  // 3. Папка 3 (горизонтальное 1280x758 + вертикальное видео 9:16)
  {
    id: 'work-3',
    number: '03',
    title: 'Арт-объект III',
    subtitle: 'Монохром & Тени',
    concept: 'Визуальный ритм и взаимодействие фактуры с направленным источником света.',
    materials: 'Эпоксидный глянец, пигменты, арт-борд',
    year: '2024',
    media: [
      {
        type: 'image',
        src: '/art-protest/папка 3/photo_3332@04-08-2026_21-08-45.jpg',
        label: 'Экспозиция',
        aspect: '1280 / 758',
      },
      {
        type: 'video',
        src: '/art-protest/папка 3/video_95@04-08-2026_21-08-44.mp4',
        label: 'Видеодеталь',
        aspect: '9 / 16',
      },
    ],
  },

  // 4. Папка 4 (11 фото -> 7 кадров со своими честными пропорциями 3:4 и 4:5)
  {
    id: 'work-4',
    number: '04',
    title: 'Арт-объект IV',
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

  // 5. Папка 5 (1212x1280 квадрат + 1280x960 4:3)
  {
    id: 'work-5',
    number: '05',
    title: 'Арт-объект V',
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
      {
        type: 'image',
        src: '/art-protest/photo_3317@04-08-2026_21-08-44.jpg',
        label: 'Контекст',
        aspect: '1280 / 960',
      },
    ],
  },

  // 6. Папка 6 (1105x1105 1:1 + 1280x1022 5:4 + 2 квадрата 1:1)
  {
    id: 'work-6',
    number: '06',
    title: 'Арт-объект VI',
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

  // 7. Папка 7 (1024x1280 4:5 + 1080x810 4:3 + 720x900 4:5 + 3x 3:2 горизонтали)
  {
    id: 'work-7',
    number: '07',
    title: 'Арт-объект VII',
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

// Single Item Frame: Form-fitted to EXACT pixel aspect ratio of the artwork, 0% crop
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
      className={`relative overflow-hidden border-[2.5px] border-black group cursor-pointer transition-transform hover:scale-[1.02] shadow-sm bg-transparent shrink-0 ${className}`}
    >
      {item.type === 'video' ? (
        <div className="relative w-full h-full">
          <video
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-fill block"
          />
          <div className="absolute top-1 right-1 p-1 bg-black/80 text-[#14F1D9] border border-black z-10">
            <Play className="w-2.5 h-2.5 fill-[#14F1D9]" />
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={item.src}
            alt={item.label || 'Деталь работы'}
            fill
            sizes="350px"
            className="object-fill block"
          />
        </div>
      )}

      {/* Tiny Hover Indicator */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
        <div className="p-1 bg-black text-white text-[9px] flex items-center gap-1">
          <Maximize2 className="w-3 h-3 text-[#14F1D9]" />
        </div>
      </div>
    </div>
  );
}

// Architectural De Stijl / Editorial Stepped Collage on Pure Concrete with Exact Photo Ratios
function SteppedCollage({
  artwork,
  onOpenLightbox,
}: {
  artwork: Artwork;
  onOpenLightbox: (item: MediaItem, artwork: Artwork) => void;
  index: number;
}) {
  const m = artwork.media;
  const count = m.length;

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center select-none bg-transparent">
      
      {/* Title & Metadata directly over concrete */}
      <div className="w-full max-w-[540px] flex items-center justify-between gap-2 mb-2 z-20">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-montserrat font-black uppercase text-black bg-[#14F1D9] px-1.5 py-0.5 border border-black tracking-wider">
            {artwork.number}
          </span>
          <span className="text-[11px] font-montserrat font-bold uppercase tracking-widest text-black">
            {artwork.title}
          </span>
          <span className="text-[10px] text-black/70 font-inter font-medium truncate max-w-[200px]">
            · {artwork.materials}
          </span>
        </div>
        <span className="text-[10px] font-inter font-bold text-black bg-white/70 px-1.5 py-0.2 border border-black/20">
          {artwork.year}
        </span>
      </div>

      {/* Dynamic Asymmetrical Collage Body */}
      <div className="relative w-full max-w-[540px] h-[370px] sm:h-[410px]">
        
        {/* ========================================================= */}
        {/* CASE 1: Папка 1 (1:1 квадрат + 9:20 вертикаль + 9:16 видео) */}
        {/* ========================================================= */}
        {artwork.id === 'work-1' && (
          <div className="relative w-full h-full">
            {/* Extended Lines */}
            <div className="absolute top-[68%] -left-8 -right-8 h-[2.5px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[52%] -top-6 -bottom-6 w-[2.5px] bg-black pointer-events-none z-10" />

            {/* Labels */}
            <span className="absolute top-[68%] -left-7 -translate-y-full text-[8px] font-inter font-bold uppercase text-black">
              Финальная работа
            </span>
            <span className="absolute left-[52%] -top-5 -translate-x-1/2 text-[8px] font-inter font-bold uppercase text-black">
              Видео & Фрагмент
            </span>

            {/* Main Square Photo: Left (height 280px, aspect 1:1) */}
            <div className="absolute left-0 top-[10%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '280px' }} />
            </div>

            {/* Middle Vertical Detail: photo_3018 (height 240px, aspect 9:20) */}
            <div className="absolute left-[52%] top-[4%] z-20">
              <ProportionalItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '240px' }} />
            </div>

            {/* Right Vertical Video: video_137 (height 220px, aspect 9:16) */}
            <div className="absolute right-[4%] top-[18%] z-20">
              <ProportionalItem item={m[2]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '220px' }} />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 2: Папка 2 (5 items: 4:5 + 9:16 + 4:5 + 3:4 + 4:5)   */}
        {/* ========================================================= */}
        {artwork.id === 'work-2' && (
          <div className="relative w-full h-full">
            {/* Extended Horizontal Cross-Lines */}
            <div className="absolute top-[32%] -left-8 -right-8 h-[2.5px] bg-black pointer-events-none z-10" />
            <div className="absolute top-[68%] -left-6 -right-6 h-[2.5px] bg-black pointer-events-none z-10" />

            {/* Extended Vertical Cross-Lines */}
            <div className="absolute left-[26%] -top-6 -bottom-6 w-[2.5px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[66%] -top-6 -bottom-6 w-[2.5px] bg-black pointer-events-none z-10" />

            {/* Line Annotations */}
            <span className="absolute top-[32%] -left-7 -translate-y-full text-[8px] font-inter font-bold uppercase tracking-wider text-black">
              Фрагмент
            </span>
            <span className="absolute left-[26%] -top-5 -translate-x-1/2 text-[8px] font-inter font-bold uppercase tracking-wider text-black">
              Главный вид
            </span>
            <span className="absolute top-[68%] right-2 -translate-y-full text-[8px] font-inter font-bold uppercase tracking-wider text-black">
              Рельеф & Детали
            </span>

            {/* Item 2 (Bottom Left): photo_3359 (4:5, height 170px) */}
            <div className="absolute left-0 bottom-[8%] z-20">
              <ProportionalItem item={m[2]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '170px' }} />
            </div>

            {/* Item 0 (Center Left Tall): photo_3291 (4:5, height 290px) */}
            <div className="absolute left-[26%] top-[8%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '290px' }} />
            </div>

            {/* Item 1 (Top Right): video_102 (9:16, height 175px) */}
            <div className="absolute left-[66%] top-0 z-20">
              <ProportionalItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '175px' }} />
            </div>

            {/* Item 3 (Bottom Right 1): photo_3360_1 (3:4, height 125px) */}
            <div className="absolute left-[66%] top-[175px] z-20">
              <ProportionalItem item={m[3]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '125px' }} />
            </div>

            {/* Item 4 (Bottom Right 2): photo_3362 (4:5, height 125px) */}
            <div className="absolute left-[760px] sm:left-[430px] top-[175px] z-20">
              <ProportionalItem item={m[4]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '125px' }} />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 3: Папка 3 (1280x758 горизонталь + 9:16 вертикаль)   */}
        {/* ========================================================= */}
        {artwork.id === 'work-3' && (
          <div className="relative w-full h-full">
            {/* Extended Lines */}
            <div className="absolute top-[52%] -left-8 -right-8 h-[2.5px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[56%] -top-6 -bottom-6 w-[2.5px] bg-black pointer-events-none z-10" />

            {/* Line Labels */}
            <span className="absolute top-[52%] -left-7 -translate-y-full text-[8px] font-inter font-bold uppercase text-black">
              Экспозиция
            </span>
            <span className="absolute left-[56%] -top-5 -translate-x-1/2 text-[8px] font-inter font-bold uppercase text-black">
              Видеодеталь
            </span>

            {/* Left Horizontal: photo_3332 (1280x758, width 300px) */}
            <div className="absolute left-0 bottom-[12%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ width: '300px' }} />
            </div>

            {/* Right Vertical Video: video_95 (9:16, height 300px) */}
            <div className="absolute left-[56%] top-[6%] z-20">
              <ProportionalItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '300px' }} />
            </div>

            {/* Top Left: Concept Annotation directly on concrete */}
            <div className="absolute left-0 top-[6%] max-w-[270px] z-20">
              <span className="text-[8px] font-inter font-bold uppercase text-[#14F1D9] drop-shadow-sm">
                Концепция
              </span>
              <p className="text-[9px] text-black font-inter font-bold leading-tight mt-0.5 line-clamp-3">
                {artwork.concept}
              </p>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 4: Папка 4 (7 items: 4:5 + 6x 3:4 ракурсов)          */}
        {/* ========================================================= */}
        {artwork.id === 'work-4' && (
          <div className="relative w-full h-full">
            {/* Extended Architectural Lines */}
            <div className="absolute top-[44%] -left-8 -right-8 h-[2.5px] bg-black pointer-events-none z-10" />
            <div className="absolute top-[74%] -left-6 -right-6 h-[2.5px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[26%] -top-6 -bottom-6 w-[2.5px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[64%] -top-6 -bottom-6 w-[2.5px] bg-black pointer-events-none z-10" />

            {/* Line Labels */}
            <span className="absolute top-[44%] -left-7 -translate-y-full text-[8px] font-inter font-bold uppercase text-black">
              Ракурс
            </span>
            <span className="absolute left-[26%] -top-5 -translate-x-1/2 text-[8px] font-inter font-bold uppercase text-black">
              Главный вид
            </span>
            <span className="absolute top-[74%] right-0 -translate-y-full text-[8px] font-inter font-bold uppercase text-black">
              Срез & Фактура
            </span>

            {/* Item 1: photo_2026-08-30_02-47-39 (3:4, height 170px) */}
            <div className="absolute left-0 bottom-[10%] z-20">
              <ProportionalItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '170px' }} />
            </div>

            {/* Item 0: photo_3309 Tall Center (4:5, height 285px) */}
            <div className="absolute left-[26%] top-[6%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '285px' }} />
            </div>

            {/* Item 2: photo_2026-08-30_02-47-40 (3:4, height 140px) */}
            <div className="absolute left-[64%] top-0 z-20">
              <ProportionalItem item={m[2]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '140px' }} />
            </div>

            {/* Item 3: photo_2026-08-30_02-47-40 (2) (3:4, height 120px) */}
            <div className="absolute left-[78%] top-[20px] z-20">
              <ProportionalItem item={m[3]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '120px' }} />
            </div>

            {/* Item 4: photo_2026-08-30_02-47-40 (3) (3:4, height 120px) */}
            <div className="absolute left-[64%] top-[145px] z-20">
              <ProportionalItem item={m[4]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '120px' }} />
            </div>

            {/* Item 5: photo_2026-08-30_02-47-40 (5) (3:4, height 120px) */}
            <div className="absolute left-[78%] top-[145px] z-20">
              <ProportionalItem item={m[5]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '120px' }} />
            </div>

            {/* Item 6: photo_2026-08-30_02-47-40 (7) (3:4, height 85px) */}
            <div className="absolute left-[64%] bottom-[4px] z-20">
              <ProportionalItem item={m[6]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '85px' }} />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 5: Папка 5 (1212x1280 1:1 + 1280x960 4:3)            */}
        {/* ========================================================= */}
        {artwork.id === 'work-5' && (
          <div className="relative w-full h-full">
            {/* Extended Lines */}
            <div className="absolute top-[56%] -left-8 -right-8 h-[2.5px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[54%] -top-6 -bottom-6 w-[2.5px] bg-black pointer-events-none z-10" />

            {/* Labels */}
            <span className="absolute top-[56%] -left-7 -translate-y-full text-[8px] font-inter font-bold uppercase text-black">
              Композиция
            </span>
            <span className="absolute left-[54%] -top-5 -translate-x-1/2 text-[8px] font-inter font-bold uppercase text-black">
              Контекст
            </span>

            {/* Photo 0: photo_2933 (1212x1280, height 280px) */}
            <div className="absolute left-0 top-[6%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '280px' }} />
            </div>

            {/* Photo 1: photo_3317 (1280x960 4:3, width 220px) */}
            <div className="absolute left-[54%] top-[8%] z-20">
              <ProportionalItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ width: '220px' }} />
            </div>

            {/* Bottom Right: Concept Text */}
            <div className="absolute left-[54%] bottom-[10%] max-w-[220px] z-20">
              <span className="text-[8px] font-inter font-bold uppercase text-[#14F1D9] drop-shadow-sm">
                Концепция
              </span>
              <p className="text-[9px] text-black font-inter font-bold leading-tight mt-0.5 line-clamp-3">
                {artwork.concept}
              </p>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 6: Папка 6 (4 items: 1:1 + 5:4 + 2x 1:1)             */}
        {/* ========================================================= */}
        {artwork.id === 'work-6' && (
          <div className="relative w-full h-full">
            {/* Extended Lines */}
            <div className="absolute top-[48%] -left-8 -right-8 h-[2.5px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[48%] -top-6 -bottom-6 w-[2.5px] bg-black pointer-events-none z-10" />

            {/* Labels */}
            <span className="absolute top-[48%] -left-7 -translate-y-full text-[8px] font-inter font-bold uppercase text-black">
              Общий вид
            </span>
            <span className="absolute left-[48%] -top-5 -translate-x-1/2 text-[8px] font-inter font-bold uppercase text-black">
              Рельеф & Фактура
            </span>

            {/* Photo 0: photo_3168 (1:1 square main, height 260px) */}
            <div className="absolute left-0 top-[10%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '260px' }} />
            </div>

            {/* Photo 1: photo_2026-08-27_17-30-22 (8) (5:4 horizontal, height 140px) */}
            <div className="absolute left-[48%] top-[10px] z-20">
              <ProportionalItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '140px' }} />
            </div>

            {/* Photo 2: photo_2026-08-27_17-30-23 (1:1, height 120px) */}
            <div className="absolute left-[48%] top-[155px] z-20">
              <ProportionalItem item={m[2]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '120px' }} />
            </div>

            {/* Photo 3: photo_2026-08-27_17-30-23 (2) (1:1, height 120px) */}
            <div className="absolute left-[390px] top-[155px] z-20">
              <ProportionalItem item={m[3]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '120px' }} />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 7: Папка 7 (6 items: 4:5 + 4:3 + 4:5 + 3x 3:2)       */}
        {/* ========================================================= */}
        {artwork.id === 'work-7' && (
          <div className="relative w-full h-full">
            {/* Extended Lines */}
            <div className="absolute top-[36%] -left-8 -right-8 h-[2.5px] bg-black pointer-events-none z-10" />
            <div className="absolute top-[68%] -left-6 -right-6 h-[2.5px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[26%] -top-6 -bottom-6 w-[2.5px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[62%] -top-6 -bottom-6 w-[2.5px] bg-black pointer-events-none z-10" />

            {/* Line Labels */}
            <span className="absolute top-[36%] -left-7 -translate-y-full text-[8px] font-inter font-bold uppercase text-black">
              Свет & Блик
            </span>
            <span className="absolute left-[26%] -top-5 -translate-x-1/2 text-[8px] font-inter font-bold uppercase text-black">
              Экспозиция
            </span>

            {/* Photo 1: photo_3394 (4:3 horizontal, width 140px) */}
            <div className="absolute left-0 bottom-[14%] z-20">
              <ProportionalItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ width: '140px' }} />
            </div>

            {/* Photo 0: photo_3227 Tall Main (4:5, height 285px) */}
            <div className="absolute left-[26%] top-[6%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '285px' }} />
            </div>

            {/* Photo 2: photo_3225 (4:5, height 140px) */}
            <div className="absolute left-[62%] top-0 z-20">
              <ProportionalItem item={m[2]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '140px' }} />
            </div>

            {/* Photo 3: photo_2026-08-27_17-30-22 (3:2, width 100px) */}
            <div className="absolute left-[62%] top-[145px] z-20">
              <ProportionalItem item={m[3]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ width: '100px' }} />
            </div>

            {/* Photo 4: photo_2026-08-27_17-30-22 (2) (3:2, width 100px) */}
            <div className="absolute left-[445px] top-[145px] z-20">
              <ProportionalItem item={m[4]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ width: '100px' }} />
            </div>

            {/* Photo 5: photo_2026-08-27_17-30-22 (3) (3:2, width 150px) */}
            <div className="absolute left-[62%] bottom-[10px] z-20">
              <ProportionalItem item={m[5]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ width: '150px' }} />
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
      <div className="w-full max-w-[540px] h-[370px] sm:h-[410px] relative flex flex-col justify-between p-4">
        {/* Extended Architectural Lines */}
        <div className="absolute top-[20%] -left-8 -right-8 h-[2.5px] bg-black pointer-events-none z-10" />
        <div className="absolute bottom-[20%] -left-8 -right-8 h-[2.5px] bg-black pointer-events-none z-10" />
        <div className="absolute left-[10%] -top-6 -bottom-6 w-[2.5px] bg-black pointer-events-none z-10" />
        <div className="absolute right-[10%] -top-6 -bottom-6 w-[2.5px] bg-black pointer-events-none z-10" />

        <div className="relative z-20 pt-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-montserrat font-black uppercase text-black bg-[#14F1D9] px-2 py-0.5 border border-black tracking-wider">
              VIII
            </span>
            <span className="text-[11px] font-montserrat font-bold uppercase tracking-widest text-black">
              Концепция серии
            </span>
          </div>
          <h3 className="font-montserrat text-xl sm:text-2xl font-black uppercase text-black mt-2 leading-tight">
            Артивизм <span className="text-[#14F1D9] drop-shadow-sm">&</span> Честность
          </h3>
        </div>

        <div className="relative z-20 my-auto py-2">
          <p className="text-xs sm:text-sm font-inter leading-relaxed text-black font-bold max-w-[420px]">
            «Каждая работа — это отказ от компромиссов. Эпоксидная смола и минеральные рельефы здесь выступают не как декор, а как прямой визуальный манифест свободы, формы и чистой эмоции».
          </p>
          <div className="mt-3 flex items-center justify-between text-[10px] font-inter text-black uppercase font-bold tracking-wider">
            <span>Екатерина · Fir Tree Art</span>
            <span className="text-black/70">7 авторских арт-объектов</span>
          </div>
        </div>

        <div className="relative z-20 flex items-center justify-between text-[10px] font-inter font-bold text-black border-t border-black pt-2">
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
          <span className="text-xs font-inter font-bold uppercase tracking-widest text-[#14F1D9]">
            Виртуальная галерея вдоль стены
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-montserrat mt-1">
            Артивизм <span className="text-[#14F1D9]">&</span> Честность
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-inter mt-1">
            Асимметричные коллажи в реальных пропорциях каждой работы на бетонной стене. Листай вправо.
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollByAmount(-600)}
            className="flex h-9 w-9 items-center justify-center border border-white/15 bg-[#1A1A1A] text-white hover:border-[#14F1D9] hover:text-[#14F1D9] transition-all rounded-none shadow-md"
            aria-label="Листать влево"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollByAmount(600)}
            className="flex h-9 w-9 items-center justify-center border border-white/15 bg-[#1A1A1A] text-white hover:border-[#14F1D9] hover:text-[#14F1D9] transition-all rounded-none shadow-md"
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
        className="relative w-full h-[600px] sm:h-[660px] lg:h-[700px] overflow-x-auto overflow-y-hidden flex flex-nowrap cursor-grab select-none snap-x snap-mandatory hide-scrollbar bg-transparent"
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

            {/* Exactly positioned over the 2 spotlight wall frames */}
            <div className="absolute inset-0 flex items-center bg-transparent">
              {/* Left padding offset */}
              <div className="w-[5%] md:w-[4.8%] h-full shrink-0" />

              {/* Spot 1: Left Collage */}
              <div className="relative w-[43%] md:w-[40.2%] h-[72%] sm:h-[76%] shrink-0 flex items-center justify-center overflow-visible bg-transparent">
                <SteppedCollage
                  artwork={chunk.left}
                  index={index * 2}
                  onOpenLightbox={(item, art) => setLightboxState({ item, artwork: art })}
                />
              </div>

              {/* Central Wall Gap between the 2 spotlights */}
              <div className="w-[9%] md:w-[10%] h-full shrink-0" />

              {/* Spot 2: Right Collage */}
              <div className="relative w-[43%] md:w-[40.2%] h-[72%] sm:h-[76%] shrink-0 flex items-center justify-center overflow-visible bg-transparent">
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

              {/* Right padding offset */}
              <div className="w-[5%] md:w-[4.8%] h-full shrink-0" />
            </div>
          </div>
        ))}

        {/* Trailing spacer */}
        <div className="w-12 shrink-0" />
      </div>

      {/* Lightbox Modal */}
      {lightboxState && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxState(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] max-w-5xl w-full border border-white/20 bg-[#1A1A1A] p-4 sm:p-6 shadow-2xl rounded-none flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxState(null)}
              className="absolute -top-4 -right-4 z-20 flex h-10 w-10 items-center justify-center border border-white/20 bg-black text-white hover:bg-[#14F1D9] hover:text-black transition-colors shadow-lg"
              aria-label="Закрыть"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Media Display Area */}
            <div className="relative max-h-[72vh] w-full flex items-center justify-center overflow-hidden bg-black/80">
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
                <span className="text-[11px] font-inter font-bold uppercase tracking-widest text-[#14F1D9]">
                  {lightboxState.artwork.number} · {lightboxState.artwork.title}
                </span>
                <h3 className="font-montserrat text-base sm:text-lg font-bold uppercase text-white">
                  {lightboxState.item.label || lightboxState.artwork.subtitle}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-inter mt-0.5">
                  {lightboxState.artwork.concept}
                </p>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="text-[10px] font-inter font-bold uppercase text-white/50 block">
                  МАТЕРИАЛЫ
                </span>
                <span className="text-xs font-inter text-white/80 font-medium">
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
