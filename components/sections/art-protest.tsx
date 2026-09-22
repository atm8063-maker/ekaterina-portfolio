'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Play, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export type MediaItem = {
  type: 'image' | 'video';
  src: string;
  label?: string;
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
  // 1. Папка 1 (1 фото + 1 видео)
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
      },
      {
        type: 'video',
        src: '/art-protest/папка 1/video_137@04-08-2026_22-24-33.mp4',
        label: 'Видеодеталь',
      },
    ],
  },

  // 2. Папка 2 (4 фото + 1 видео = 5 элементов)
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
      },
      {
        type: 'video',
        src: '/art-protest/папка 2/video_102@04-08-2026_21-08-46.mp4',
        label: 'Живой рельеф',
      },
      {
        type: 'image',
        src: '/art-protest/папка 2/photo_3359@04-08-2026_21-08-46.jpg',
        label: 'Фрагмент',
      },
      {
        type: 'image',
        src: '/art-protest/папка 2/photo_3360@04-08-2026_21-08-46_1.jpg',
        label: 'Макро',
      },
      {
        type: 'image',
        src: '/art-protest/папка 2/photo_3362@04-08-2026_21-08-46.jpg',
        label: 'Деталь',
      },
    ],
  },

  // 3. Папка 3 (1 фото + 1 видео)
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
      },
      {
        type: 'video',
        src: '/art-protest/папка 3/video_95@04-08-2026_21-08-44.mp4',
        label: 'Видеодеталь',
      },
    ],
  },

  // 4. Папка 4 (11 фото -> 7 кадров в ступенчатом коллаже)
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
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-39.jpg',
        label: 'Ракурс A',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40.jpg',
        label: 'Ракурс B',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40 (2).jpg',
        label: 'Рельеф',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40 (3).jpg',
        label: 'Срез',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40 (5).jpg',
        label: 'Фактура',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40 (7).jpg',
        label: 'Макро',
      },
    ],
  },

  // 5. Папка 5 (2 фото: photo_2933 + photo_3317)
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
      },
      {
        type: 'image',
        src: '/art-protest/photo_3317@04-08-2026_21-08-44.jpg',
        label: 'Контекст',
      },
    ],
  },

  // 6. Папка 6 (4 фото)
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
      },
      {
        type: 'image',
        src: '/art-protest/папка 6/photo_2026-08-27_17-30-23.jpg',
        label: 'Рельеф',
      },
      {
        type: 'image',
        src: '/art-protest/папка 6/photo_2026-08-27_17-30-23 (2).jpg',
        label: 'Текстура',
      },
      {
        type: 'image',
        src: '/art-protest/папка 6/photo_2026-08-27_17-30-22 (8).jpg',
        label: 'Деталь',
      },
    ],
  },

  // 7. Папка 7 (6 фото)
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
      },
      {
        type: 'image',
        src: '/art-protest/папка 7/photo_3394@04-08-2026_22-17-05.jpg',
        label: 'Контраст & Свет',
      },
      {
        type: 'image',
        src: '/art-protest/папка 7/photo_3225@04-08-2026_21-04-40.jpg',
        label: 'Ракурс',
      },
      {
        type: 'image',
        src: '/art-protest/папка 7/photo_2026-08-27_17-30-22.jpg',
        label: 'Деталь A',
      },
      {
        type: 'image',
        src: '/art-protest/папка 7/photo_2026-08-27_17-30-22 (2).jpg',
        label: 'Деталь B',
      },
      {
        type: 'image',
        src: '/art-protest/папка 7/photo_2026-08-27_17-30-22 (3).jpg',
        label: 'Деталь C',
      },
    ],
  },
];

// Single Photo / Video Box: Clean black frame, no background color, perfectly fitted image
function CollageItem({
  item,
  artwork,
  onOpenLightbox,
  className = '',
  tag,
  aspect = 'aspect-auto',
}: {
  item: MediaItem;
  artwork: Artwork;
  onOpenLightbox: (item: MediaItem, artwork: Artwork) => void;
  className?: string;
  tag?: string;
  aspect?: string;
}) {
  return (
    <div
      onClick={() => onOpenLightbox(item, artwork)}
      className={`relative overflow-hidden border-[1.5px] border-black group cursor-pointer transition-transform hover:scale-[1.02] shadow-sm bg-transparent ${aspect} ${className}`}
    >
      {item.type === 'video' ? (
        <div className="relative w-full h-full">
          <video
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover block"
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
            className="object-cover block"
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

// Architectural De Stijl / Editorial Stepped Collage on Pure Concrete
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
      <div className="w-full max-w-[520px] flex items-center justify-between gap-2 mb-2 z-20">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-montserrat font-black uppercase text-black bg-[#14F1D9] px-1.5 py-0.5 border border-black tracking-wider">
            {artwork.number}
          </span>
          <span className="text-[11px] font-montserrat font-bold uppercase tracking-widest text-black">
            {artwork.title}
          </span>
          <span className="text-[10px] text-black/70 font-inter font-medium">
            · {artwork.materials}
          </span>
        </div>
        <span className="text-[10px] font-inter font-bold text-black bg-white/70 px-1.5 py-0.2 border border-black/20">
          {artwork.year}
        </span>
      </div>

      {/* Dynamic Asymmetrical Collage Body */}
      <div className="relative w-full max-w-[520px] h-[360px] sm:h-[400px]">
        
        {/* ========================================================= */}
        {/* CASE 1: 5 Items (Folder 2) - Asymmetrical 4-column cluster */}
        {/* ========================================================= */}
        {count === 5 && (
          <div className="relative w-full h-full">
            {/* Extended Horizontal Cross-Lines */}
            <div className="absolute top-[28%] -left-8 -right-8 h-[1.5px] bg-black pointer-events-none z-10" />
            <div className="absolute top-[68%] -left-6 -right-6 h-[1.5px] bg-black pointer-events-none z-10" />

            {/* Extended Vertical Cross-Lines */}
            <div className="absolute left-[24%] -top-6 -bottom-6 w-[1.5px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[64%] -top-6 -bottom-6 w-[1.5px] bg-black pointer-events-none z-10" />

            {/* Text Annotations on Concrete along lines */}
            <span className="absolute top-[28%] -left-7 -translate-y-full text-[8px] font-inter font-bold uppercase tracking-wider text-black">
              Фрагмент
            </span>
            <span className="absolute left-[24%] -top-5 -translate-x-1/2 text-[8px] font-inter font-bold uppercase tracking-wider text-black">
              Главный вид
            </span>
            <span className="absolute top-[68%] right-2 -translate-y-full text-[8px] font-inter font-bold uppercase tracking-wider text-black">
              Рельеф & Детали
            </span>

            {/* Col 1 (Bottom Left): Fragment */}
            <div className="absolute left-0 bottom-[10%] w-[24%] h-[46%] z-20">
              <CollageItem item={m[2]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Col 2 (Center Left): Tall Main Artwork */}
            <div className="absolute left-[24%] top-[10%] w-[40%] h-[78%] z-20">
              <CollageItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Col 3 (Top Right): Looping Video */}
            <div className="absolute left-[64%] top-0 w-[36%] h-[44%] z-20">
              <CollageItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Col 3 (Bottom Right 1): Macro */}
            <div className="absolute left-[64%] top-[44%] w-[18%] h-[36%] z-20">
              <CollageItem item={m[3]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Col 3 (Bottom Right 2): Detail */}
            <div className="absolute left-[82%] top-[44%] w-[18%] h-[36%] z-20">
              <CollageItem item={m[4]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 2: 7 Items (Folder 4) - Stepped multi-cell mosaic    */}
        {/* ========================================================= */}
        {count >= 7 && (
          <div className="relative w-full h-full">
            {/* Extended Architectural Lines */}
            <div className="absolute top-[42%] -left-8 -right-8 h-[1.5px] bg-black pointer-events-none z-10" />
            <div className="absolute top-[72%] -left-6 -right-6 h-[1.5px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[28%] -top-6 -bottom-6 w-[1.5px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[62%] -top-6 -bottom-6 w-[1.5px] bg-black pointer-events-none z-10" />

            {/* Line Labels */}
            <span className="absolute top-[42%] -left-7 -translate-y-full text-[8px] font-inter font-bold uppercase text-black">
              Ракурс
            </span>
            <span className="absolute left-[28%] -top-5 -translate-x-1/2 text-[8px] font-inter font-bold uppercase text-black">
              Главный вид
            </span>
            <span className="absolute top-[72%] right-0 -translate-y-full text-[8px] font-inter font-bold uppercase text-black">
              Срез & Фактура
            </span>

            {/* Photo 1: Bottom Left */}
            <div className="absolute left-0 bottom-[14%] w-[28%] h-[44%] z-20">
              <CollageItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Photo 0: Tall Main Artwork Center */}
            <div className="absolute left-[28%] top-[8%] w-[34%] h-[76%] z-20">
              <CollageItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Photo 2: Top Right */}
            <div className="absolute left-[62%] top-0 w-[24%] h-[42%] z-20">
              <CollageItem item={m[2]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Photo 3: Top Right Edge */}
            <div className="absolute left-[86%] top-[12%] w-[14%] h-[30%] z-20">
              <CollageItem item={m[3]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Photo 4: Mid Right */}
            <div className="absolute left-[62%] top-[42%] w-[19%] h-[30%] z-20">
              <CollageItem item={m[4]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Photo 5: Mid Right 2 */}
            <div className="absolute left-[81%] top-[42%] w-[19%] h-[30%] z-20">
              <CollageItem item={m[5]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Photo 6: Bottom Right */}
            <div className="absolute left-[62%] top-[72%] w-[38%] h-[20%] z-20">
              <CollageItem item={m[6]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 3: 6 Items (Folder 7) - Stepped 4-column composition */}
        {/* ========================================================= */}
        {count === 6 && (
          <div className="relative w-full h-full">
            {/* Extended Lines */}
            <div className="absolute top-[34%] -left-8 -right-8 h-[1.5px] bg-black pointer-events-none z-10" />
            <div className="absolute top-[68%] -left-6 -right-6 h-[1.5px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[26%] -top-6 -bottom-6 w-[1.5px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[60%] -top-6 -bottom-6 w-[1.5px] bg-black pointer-events-none z-10" />

            {/* Line Labels */}
            <span className="absolute top-[34%] -left-7 -translate-y-full text-[8px] font-inter font-bold uppercase text-black">
              Свет & Блик
            </span>
            <span className="absolute left-[26%] -top-5 -translate-x-1/2 text-[8px] font-inter font-bold uppercase text-black">
              Экспозиция
            </span>

            {/* Photo 1: Bottom Left */}
            <div className="absolute left-0 bottom-[16%] w-[26%] h-[48%] z-20">
              <CollageItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Photo 0: Tall Main Artwork */}
            <div className="absolute left-[26%] top-[6%] w-[34%] h-[80%] z-20">
              <CollageItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Photo 2: Top Right */}
            <div className="absolute left-[60%] top-0 w-[40%] h-[34%] z-20">
              <CollageItem item={m[2]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Photo 3: Mid Right 1 */}
            <div className="absolute left-[60%] top-[34%] w-[20%] h-[34%] z-20">
              <CollageItem item={m[3]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Photo 4: Mid Right 2 */}
            <div className="absolute left-[80%] top-[34%] w-[20%] h-[34%] z-20">
              <CollageItem item={m[4]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Photo 5: Bottom Right */}
            <div className="absolute left-[60%] top-[68%] w-[40%] h-[24%] z-20">
              <CollageItem item={m[5]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 4: 4 Items (Folder 6) - 4-cell interlocking layout   */}
        {/* ========================================================= */}
        {count === 4 && (
          <div className="relative w-full h-full">
            {/* Extended Lines */}
            <div className="absolute top-[45%] -left-8 -right-8 h-[1.5px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[48%] -top-6 -bottom-6 w-[1.5px] bg-black pointer-events-none z-10" />

            {/* Labels */}
            <span className="absolute top-[45%] -left-7 -translate-y-full text-[8px] font-inter font-bold uppercase text-black">
              Общий вид
            </span>
            <span className="absolute left-[48%] -top-5 -translate-x-1/2 text-[8px] font-inter font-bold uppercase text-black">
              Рельеф & Фактура
            </span>

            {/* Photo 0: Large Square/Vertical Hero (Left) */}
            <div className="absolute left-0 top-[8%] w-[48%] h-[84%] z-20">
              <CollageItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Photo 1: Top Right */}
            <div className="absolute left-[48%] top-0 w-[52%] h-[45%] z-20">
              <CollageItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Photo 2: Bottom Right 1 */}
            <div className="absolute left-[48%] top-[45%] w-[26%] h-[45%] z-20">
              <CollageItem item={m[2]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Photo 3: Bottom Right 2 */}
            <div className="absolute left-[74%] top-[45%] w-[26%] h-[45%] z-20">
              <CollageItem item={m[3]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 5: 2 Items (Folders 1, 3, 5) - Stepped Hero + Video  */}
        {/* ========================================================= */}
        {count <= 3 && (
          <div className="relative w-full h-full">
            {/* Extended Lines */}
            <div className="absolute top-[60%] -left-8 -right-8 h-[1.5px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[54%] -top-6 -bottom-6 w-[1.5px] bg-black pointer-events-none z-10" />

            {/* Line Labels */}
            <span className="absolute top-[60%] -left-7 -translate-y-full text-[8px] font-inter font-bold uppercase text-black">
              Финальная работа
            </span>
            <span className="absolute left-[54%] -top-5 -translate-x-1/2 text-[8px] font-inter font-bold uppercase text-black">
              {m[1]?.type === 'video' ? 'Видеодеталь' : 'Контекст'}
            </span>

            {/* Photo 0: Primary Artwork (Left) */}
            <div className="absolute left-0 top-[6%] w-[54%] h-[82%] z-20">
              <CollageItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Item 1: Tall Video / Context Photo (Right Top) */}
            <div className="absolute left-[54%] top-0 w-[42%] h-[60%] z-20">
              <CollageItem item={m[1] || m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} className="w-full h-full" />
            </div>

            {/* Bottom Right: Clean Concept Annotation directly over concrete */}
            <div className="absolute left-[54%] top-[60%] w-[42%] h-[32%] pl-3 pt-2 flex flex-col justify-center z-20">
              <span className="text-[8px] font-inter font-bold uppercase text-[#14F1D9] drop-shadow-sm">
                Концепция
              </span>
              <p className="text-[9px] text-black font-inter font-bold leading-tight mt-0.5 line-clamp-3 drop-shadow-sm">
                {artwork.concept}
              </p>
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
      <div className="w-full max-w-[520px] h-[360px] sm:h-[400px] relative flex flex-col justify-between p-4">
        {/* Extended Architectural Lines */}
        <div className="absolute top-[20%] -left-8 -right-8 h-[1.5px] bg-black pointer-events-none z-10" />
        <div className="absolute bottom-[20%] -left-8 -right-8 h-[1.5px] bg-black pointer-events-none z-10" />
        <div className="absolute left-[10%] -top-6 -bottom-6 w-[1.5px] bg-black pointer-events-none z-10" />
        <div className="absolute right-[10%] -top-6 -bottom-6 w-[1.5px] bg-black pointer-events-none z-10" />

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
            Асимметричные коллажи деталей каждой работы на бетонной стене. Листай вправо свайпом или стрелками.
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
