'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Play, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export type MediaItem = {
  type: 'image' | 'video';
  src: string;
  label: string;
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
        label: 'Видеодеталь & Блик',
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
        label: 'Макросъемка',
      },
      {
        type: 'image',
        src: '/art-protest/папка 2/photo_3362@04-08-2026_21-08-46.jpg',
        label: 'Деталь слоя',
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

  // 4. Папка 4 (11 фото -> показываем 7 ключевых ракурсов и макро)
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
        label: 'Деталь A',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40.jpg',
        label: 'Деталь B',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40 (2).jpg',
        label: 'Рельеф C',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40 (3).jpg',
        label: 'Срез D',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40 (5).jpg',
        label: 'Фактура E',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40 (7).jpg',
        label: 'Макро F',
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

// Single Media Box with Black Borders & Zero-Crop Object Contain
function MediaSlot({
  item,
  artwork,
  onOpenLightbox,
  className = '',
  tag,
}: {
  item: MediaItem;
  artwork: Artwork;
  onOpenLightbox: (item: MediaItem, artwork: Artwork) => void;
  className?: string;
  tag?: string;
}) {
  return (
    <div
      onClick={() => onOpenLightbox(item, artwork)}
      className={`relative overflow-hidden bg-black/70 border-2 border-black group cursor-pointer transition-all hover:border-[#14F1D9] shadow-md ${className}`}
    >
      {item.type === 'video' ? (
        <div className="relative w-full h-full flex items-center justify-center bg-black">
          <video
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-1.5 right-1.5 p-1 bg-black/85 border border-[#14F1D9] text-[#14F1D9] z-10">
            <Play className="w-2.5 h-2.5 fill-[#14F1D9]" />
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full flex items-center justify-center bg-black/80">
          <Image
            src={item.src}
            alt={item.label}
            fill
            sizes="400px"
            className="object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Label tag along line */}
      <div className="absolute bottom-1 left-1 bg-black/90 px-1.5 py-0.5 text-[8px] sm:text-[9px] font-inter uppercase text-white font-semibold flex items-center gap-1 z-10 border border-white/10">
        <Maximize2 className="w-2 h-2 text-[#14F1D9]" />
        {tag || item.label}
      </div>
    </div>
  );
}

// Collage Layout Component: Adapts specifically to the media items in each folder
function ArtworkCollage({
  artwork,
  onOpenLightbox,
}: {
  artwork: Artwork;
  onOpenLightbox: (item: MediaItem, artwork: Artwork) => void;
}) {
  const media = artwork.media;
  const count = media.length;

  return (
    <div className="relative w-full h-full p-2 sm:p-3 select-none flex flex-col justify-between">
      
      {/* Structural Black Architectural Grid Lines with Overshooting Ends */}
      <div className="absolute -top-3 -left-5 -right-5 h-[2px] bg-black pointer-events-none z-10 opacity-90 shadow-sm" />
      <div className="absolute -bottom-3 -left-5 -right-5 h-[2px] bg-black pointer-events-none z-10 opacity-90 shadow-sm" />
      <div className="absolute -left-3 -top-5 -bottom-5 w-[2px] bg-black pointer-events-none z-10 opacity-90 shadow-sm" />
      <div className="absolute -right-3 -top-5 -bottom-5 w-[2px] bg-black pointer-events-none z-10 opacity-90 shadow-sm" />

      {/* Top Header Bar */}
      <div className="relative z-20 flex items-start justify-between gap-2 pb-1.5">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] sm:text-xs font-montserrat font-black uppercase text-black bg-[#14F1D9] px-2 py-0.5 tracking-wider border border-black">
              {artwork.number}
            </span>
            <span className="text-[9px] sm:text-[11px] font-montserrat font-bold uppercase tracking-widest text-black bg-white/80 px-2 py-0.5 border border-black/30">
              {artwork.title}
            </span>
          </div>
          <p className="text-[10px] text-black font-inter font-bold mt-0.5 tracking-tight">
            {artwork.subtitle}
          </p>
        </div>
        <div className="text-right">
          <span className="text-[9px] font-inter font-bold text-black/80 bg-white/60 px-1.5 py-0.5 border border-black/20 block">
            {artwork.year}
          </span>
          <span className="text-[8px] font-inter font-semibold text-black/70 mt-0.5 block">
            {count} {count === 1 ? 'кадр' : count < 5 ? 'кадра' : 'кадров'}
          </span>
        </div>
      </div>

      {/* Dynamic Stepped Editorial Grid (No Cropping, Full Files Shown) */}
      <div className="relative z-20 flex-1 min-h-0 my-1">
        
        {/* CASE A: 5 Media Items (e.g. Папка 2) */}
        {count === 5 && (
          <div className="grid grid-cols-12 grid-rows-12 gap-1.5 w-full h-full">
            {/* Main Vertical Artwork (Left 6 cols, Full height 12 rows) */}
            <MediaSlot
              item={media[0]}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
              className="col-span-6 row-span-12"
              tag="Главный вид"
            />
            {/* Top Video Slot (Right 6 cols, Top 6 rows) */}
            <MediaSlot
              item={media[1]}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
              className="col-span-6 row-span-6"
              tag="Видеодеталь"
            />
            {/* 3 Detail Shots (Right 6 cols, Bottom 6 rows -> 3 cols each) */}
            <MediaSlot
              item={media[2]}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
              className="col-span-2 row-span-6"
              tag="Фрагмент"
            />
            <MediaSlot
              item={media[3]}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
              className="col-span-2 row-span-6"
              tag="Макро"
            />
            <MediaSlot
              item={media[4]}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
              className="col-span-2 row-span-6"
              tag="Деталь"
            />
          </div>
        )}

        {/* CASE B: 6-7 Media Items (e.g. Папка 4, Папка 7) */}
        {count >= 6 && (
          <div className="grid grid-cols-12 grid-rows-12 gap-1.5 w-full h-full">
            {/* Main Central/Hero Image (Left 5 cols, 12 rows) */}
            <MediaSlot
              item={media[0]}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
              className="col-span-5 row-span-12"
              tag="Главный ракурс"
            />
            
            {/* Secondary Hero (Cols 6-8, Rows 1-7) */}
            <MediaSlot
              item={media[1]}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
              className="col-span-4 row-span-7"
              tag="Фрагмент"
            />

            {/* Third Slot (Cols 9-12, Rows 1-7) */}
            <MediaSlot
              item={media[2]}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
              className="col-span-3 row-span-7"
              tag="Свет & Блик"
            />

            {/* Bottom Row Details (Cols 6-12, Rows 8-12 -> 3 micro slots) */}
            <MediaSlot
              item={media[3]}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
              className="col-span-2 row-span-5"
              tag="Макро A"
            />
            <MediaSlot
              item={media[4]}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
              className="col-span-2 row-span-5"
              tag="Макро B"
            />
            <MediaSlot
              item={media[5]}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
              className="col-span-3 row-span-5"
              tag="Текстура"
            />
          </div>
        )}

        {/* CASE C: 4 Media Items (e.g. Папка 6) */}
        {count === 4 && (
          <div className="grid grid-cols-12 grid-rows-12 gap-1.5 w-full h-full">
            {/* Top Large Artwork (12 cols, 7 rows) */}
            <MediaSlot
              item={media[0]}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
              className="col-span-6 row-span-12"
              tag="Общий вид"
            />
            {/* Right 3 Detail Blocks */}
            <MediaSlot
              item={media[1]}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
              className="col-span-6 row-span-4"
              tag="Рельеф"
            />
            <MediaSlot
              item={media[2]}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
              className="col-span-3 row-span-8"
              tag="Текстура"
            />
            <MediaSlot
              item={media[3]}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
              className="col-span-3 row-span-8"
              tag="Деталь"
            />
          </div>
        )}

        {/* CASE D: 2 Media Items (e.g. Папка 1, Папка 3, Папка 5) */}
        {count <= 3 && (
          <div className="grid grid-cols-12 grid-rows-12 gap-1.5 w-full h-full">
            {/* Primary Artwork Image (Left 7 cols, 12 rows) */}
            <MediaSlot
              item={media[0]}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
              className="col-span-7 row-span-12"
              tag="Финальная работа"
            />
            {/* Secondary Media / Video (Right 5 cols, Top 7 rows) */}
            <MediaSlot
              item={media[1] || media[0]}
              artwork={artwork}
              onOpenLightbox={onOpenLightbox}
              className="col-span-5 row-span-7"
              tag={media[1]?.type === 'video' ? 'Видеодеталь' : 'Контекст'}
            />
            {/* Concept / Materials Architectural Callout Panel (Right 5 cols, Bottom 5 rows) */}
            <div className="col-span-5 row-span-5 p-2 bg-black/85 border-2 border-black flex flex-col justify-center text-white">
              <span className="text-[8px] font-inter font-bold uppercase text-[#14F1D9] tracking-wider">
                КОНЦЕПЦИЯ
              </span>
              <p className="text-[9px] text-white/90 font-inter line-clamp-3 mt-0.5 leading-snug">
                {artwork.concept}
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Materials & Concept Line */}
      <div className="relative z-20 pt-1.5 flex items-center justify-between gap-2 border-t border-black/40">
        <div className="flex items-center gap-1.5 overflow-hidden">
          <span className="text-[8px] sm:text-[9px] font-inter font-bold uppercase tracking-wider text-black bg-white/70 px-1.5 py-0.2 shrink-0 border border-black/20">
            МАТЕРИАЛЫ
          </span>
          <p className="text-[9px] sm:text-[10px] text-black font-inter font-semibold truncate">
            {artwork.materials}
          </p>
        </div>
        <span className="text-[8px] sm:text-[9px] font-inter font-bold text-black/80 uppercase shrink-0">
          Смола · Текстура
        </span>
      </div>

    </div>
  );
}

// Concluding Manifesto Panel (Balances 4th Wall Segment)
function ManifestoPanel() {
  return (
    <div className="relative w-full h-full p-4 sm:p-6 select-none flex flex-col justify-between">
      {/* Extended Black Blueprint Lines */}
      <div className="absolute -top-3 -left-5 -right-5 h-[2px] bg-black pointer-events-none z-10 opacity-90 shadow-sm" />
      <div className="absolute -bottom-3 -left-5 -right-5 h-[2px] bg-black pointer-events-none z-10 opacity-90 shadow-sm" />
      <div className="absolute -left-3 -top-5 -bottom-5 w-[2px] bg-black pointer-events-none z-10 opacity-90 shadow-sm" />
      <div className="absolute -right-3 -top-5 -bottom-5 w-[2px] bg-black pointer-events-none z-10 opacity-90 shadow-sm" />

      <div className="relative z-20">
        <div className="flex items-center gap-2">
          <span className="text-xs font-montserrat font-black uppercase text-black bg-[#14F1D9] px-2 py-0.5 tracking-wider border border-black">
            VIII
          </span>
          <span className="text-xs font-montserrat font-bold uppercase tracking-widest text-black bg-white/80 px-2 py-0.5 border border-black/30">
            Концепция серии
          </span>
        </div>
        <h3 className="font-montserrat text-lg sm:text-2xl font-black uppercase text-black mt-2 leading-tight">
          Артивизм <span className="text-[#14F1D9] drop-shadow-sm">&</span> Честность
        </h3>
      </div>

      <div className="relative z-20 space-y-3 bg-black/90 p-4 sm:p-5 border-2 border-black my-2 text-white shadow-xl">
        <p className="text-xs sm:text-sm font-inter leading-relaxed text-white/90">
          «Каждая работа — это отказ от компромиссов. Эпоксидная смола и минеральные рельефы здесь выступают не как декор, а как прямой визуальный манифест свободы, формы и чистой эмоции».
        </p>
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-inter text-[#14F1D9] uppercase font-bold tracking-wider">
          <span>Екатерина · Fir Tree Art</span>
          <span>Авторская коллекция</span>
        </div>
      </div>

      <div className="relative z-20 flex items-center justify-between text-[10px] font-inter font-bold text-black border-t border-black/40 pt-2">
        <span className="bg-white/70 px-2 py-0.5 uppercase border border-black/20">Виртуальная галерея</span>
        <span>7 арт-объектов · детали & видео</span>
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
            Архитектурные коллажи деталей каждой работы без обрезки. Листай вправо свайпом или стрелками.
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
        className="relative w-full h-[620px] sm:h-[680px] lg:h-[730px] overflow-x-auto overflow-y-hidden flex flex-nowrap cursor-grab select-none snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>

        {chunks.map((chunk, index) => (
          <div
            key={index}
            className="relative h-full shrink-0 flex items-center justify-center snap-center"
          >
            {/* Seamless Concrete Wall Texture Segment */}
            <img
              src="/seamless_ceiling_v3_11_final1.jpg"
              alt={`wall segment ${index + 1}`}
              className="h-full w-auto max-w-none block pointer-events-none object-cover"
            />

            {/* Exactly positioned over the 2 spotlight wall frames */}
            <div className="absolute inset-0 flex items-center">
              {/* Left padding offset to align with spot 1 */}
              <div className="w-[5%] md:w-[4.8%] h-full shrink-0" />

              {/* Spot 1: Left Collage */}
              <div className="relative w-[43%] md:w-[40.2%] h-[72%] sm:h-[76%] shrink-0 flex items-center justify-center overflow-visible">
                <ArtworkCollage
                  artwork={chunk.left}
                  onOpenLightbox={(item, art) => setLightboxState({ item, artwork: art })}
                />
              </div>

              {/* Central Wall Gap between the 2 spotlights */}
              <div className="w-[9%] md:w-[10%] h-full shrink-0" />

              {/* Spot 2: Right Collage */}
              <div className="relative w-[43%] md:w-[40.2%] h-[72%] sm:h-[76%] shrink-0 flex items-center justify-center overflow-visible">
                {chunk.right === 'manifesto' ? (
                  <ManifestoPanel />
                ) : chunk.right ? (
                  <ArtworkCollage
                    artwork={chunk.right}
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
