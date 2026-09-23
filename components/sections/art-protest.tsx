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
  fullConcept?: { heading: string; text: string }[];
  materials: string;
  year: string;
  media: MediaItem[];
};

const artworksData: Artwork[] = [
  // 1. Папка 2: Февраль 22-го (теперь объект 01)
  {
    id: 'work-feb',
    number: '01',
    title: 'Февраль 22-го',
    subtitle: 'Артивизм & Протест',
    concept: 'Работа передаёт состояние катастрофы, шока и вынужденного молчания через визуальные метафоры льда, трещин и скованности.',
    fullConcept: [
      {
        heading: 'Ловушка и паутина цензуры',
        text: 'Лёд, созданный при помощи эпоксидной смолы. Переплетающиеся белые трещины напоминают липкую паутину или разорванную сеть, сковывающую пространство. Всё это символизирует тотальный контроль, атмосферу страха и невозможность пробить стену запретов, чтобы быть услышанным.',
      },
      {
        heading: 'Безгласный протест',
        text: 'В центре композиции руки, которые пытаются пробить лёд. Это жест несогласия, внутренней силы и попытки сопротивления, сталкивающейся с непреодолимой преградой.',
      },
      {
        heading: 'Призрак свободы и угасание',
        text: 'Размытый, полупрозрачный силуэт раскрытой ладони подо льдом подчёркивает бессилие, ощущение «призрачности» собственной позиции и постепенную утрату возможности действовать открыто.',
      },
      {
        heading: 'Мрачная колористика',
        text: 'Тёмный оттенок воды в прорези между осколками льда вместе с бликами создаёт ощущение холодного тупика, где свет пробивается с трудом.',
      },
    ],
    materials: 'Масло, эпоксидная смола, глина, гипс, маркеры, хром, картон, пигменты, красители',
    year: '2022',
    media: [
      {
        type: 'image',
        src: '/art-protest/папка 2/photo_3360@04-08-2026_21-08-46_1.jpg',
        label: 'Главный вид',
        aspect: '874 / 1170',
      },
      {
        type: 'video',
        src: '/art-protest/папка 2/video_102@04-08-2026_21-08-46.mp4',
        label: 'Живой рельеф',
        aspect: '9 / 16',
      },
      {
        type: 'image',
        src: '/art-protest/папка 2/photo_3291@04-08-2026_21-08-4231.jpg',
        label: 'Деталь: Текстура и смола',
        aspect: '1024 / 1280',
      },
      {
        type: 'image',
        src: '/art-protest/папка 2/photo_3362@04-08-2026_21-08-46.jpg',
        label: 'Деталь: Хром и гипс',
        aspect: '1024 / 1280',
      },
    ],
  },

  // 2. Папка 1: Deep rest (теперь объект 02)
  {
    id: 'work-deep',
    number: '02',
    title: 'Deep rest',
    subtitle: 'Артивизм & Текстура',
    concept: 'Исследование взаимодействия, границ поддержки и эмоционального замирания: выбор между спасением и уходом на глубину.',
    fullConcept: [
      {
        heading: 'Взаимодействие',
        text: 'Очень долго эта картина в моей голове звучала как "deep rest", но когда я еë закончила, стало понятно, что это не то — и дело вообще не во мне и даже не в сюжете холста.\nДело во взаимодействии. Как в эксперименте Марины Абрамович (который, кажется, до сих пор длится).\nТы можешь позволить другому утонуть или ты можешь протянуть руку.\n"Never give up" или "Deep rest" - всё зависит от смотрящего.',
      },
      {
        heading: 'Фонетическая игра смыслов',
        text: 'Название балансирует между исцеляющим отдыхом (Deep rest) и состоянием глубокой депрессии (Depressed), когда неподвижность становится единственной психологической защитой.',
      },
      {
        heading: 'Тактильный контраст',
        text: 'Глянец смолы прерывается рисунком падающих дождевых капель, в глубине поступают очертания второй руки под водой. Контраст гипса и смолы подчёркивает ощущение дискомфорта от образа тонущего в тёмной воде человека.',
      },
    ],
    materials: 'Акрил, глина, гипс, эпоксидная смола, пигменты, силикон, арт-борд',
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

  // 3. Папка 3: Последняя капля (оригинальное фото 1280x758 из папки)
  {
    id: 'work-last',
    number: '03',
    title: 'Последняя капля',
    subtitle: 'Монохром & Тени',
    concept: 'В работе использовано минимальное количество оттенков и материалов, идея очень лаконична: последняя капля — это точка, а не диалог.',
    fullConcept: [
      {
        heading: 'Хромированное напряжение',
        text: 'Зеркальный металлический блеск отражает зрителя, делая его соучастником момента предельного психологического давления.',
      },
      {
        heading: 'Застывший импульс',
        text: 'Форма кругов на воде от последней капли - как символ прорвавшихся подавленных эмоций и невысказанных слов.',
      },
      {
        heading: 'Минимализм',
        text: 'В работе использовано минимальное количество оттенков и материалов, идея очень лаконична: последняя капля - это точка, а не диалог.',
      },
    ],
    materials: 'Арт-борд, хром, эпоксидная смола, силикон',
    year: '2020',
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

  // 4. Папка 4: Бензиновая радуга
  {
    id: 'work-rainbow',
    number: '04',
    title: 'Бензиновая радуга',
    subtitle: 'Серия «Трансформация»',
    concept: 'Красота в малом и скрытый экологический конфликт: эстетика бензиновой плёнки под ногами и окаменелая природа.',
    fullConcept: [
      {
        heading: 'Красота в повседневном',
        text: 'Радужные переливы бензиновой пленки, стянутая поверхность воды на "асфальте" показывают красоту в малом, буквально в том, что у нас под ногами.',
      },
      {
        heading: 'Осенний пейзаж',
        text: 'Скелетированные листья, вплавленные в жидкий камень и смолу, зафиксированы как ископаемые артефакты уходящей живой природы.',
      },
      {
        heading: 'Многослойный конфликт',
        text: 'Плотные текстуры жидкого камня, имитирующего растрескавшийся асфальт, сталкиваются с текучими флуоресцентными красителями, визуализируя противостояние цивилизации и биосферы.',
      },
    ],
    materials: 'Арт-борд, эпоксидная смола, красители и пигменты, жидкий камень, акрил, силикон, скелетированные листья',
    year: '2021',
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
    id: 'work-swans',
    number: '05',
    title: 'Пусть танцуют лебеди',
    subtitle: 'Глубина & Пространство',
    concept: 'Историческая аллюзия на балет по ТВ во время кризисов: терновый шип пробивает бумагу, превращая танец в болезненный укол реальности.',
    fullConcept: [
      {
        heading: 'Терновый шип вместо грации',
        text: 'Реальная колючая ветка терновника впивается в чистый бумажный лист, превращая сказочный танец в болезненный укол реальности.',
      },
      {
        heading: 'Пустота ватмана',
        text: 'Монохромный голубой фон подчёркивает оглушающую тишину и информационный вакуум официальной повестки.',
      },
      {
        heading: 'Символ смены эпох',
        text: 'Лаконичный художественный жест, где хрупкость бумаги противостоит агрессивной жесткости колючек.',
      },
    ],
    materials: 'Ватман, ветка терновника',
    year: '2024',
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
    id: 'work-and',
    number: '06',
    title: 'И?',
    subtitle: 'Текстурный рельеф',
    concept: 'Диалог с растерянностью и скепсисом: жест защиты и провокационный вопрос, сбивающий пафос.',
    fullConcept: [
      {
        heading: 'Растерянность',
        text: 'Раскинутые и сложенные руки в попытке прикрыться демонстрируют конфликт между желанием выплеснуть собственную агрессию и подавить её.',
      },
      {
        heading: 'Скепсис как защита',
        text: 'Односложный провокационный вопрос «И?» разрушает пафос и обнажает экзистенциальную растерянность современного человека, одновременно констатируя смятение, озадаченность и замешательство.',
      },
      {
        heading: 'Текстурный слом',
        text: 'Слоистые мазки создают ощущение наслоения чужих мнений, сквозь которые проступает главный вопрос.',
      },
    ],
    materials: 'Холст, акрил, маркеры',
    year: '2015',
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
    id: 'work-red',
    number: '07',
    title: 'Красная серия',
    subtitle: 'Триптих · Смешанные медиа',
    concept: 'Триптих состояний через тотальный красный цвет: от ярости и отчаяния до неукротимой витальности и телесности.',
    fullConcept: [
      {
        heading: 'Красный как сигнал тревоги и жизни',
        text: 'Доминирующий спектр активирует первобытные инстинкты — от опасности до неукротимой сексуальной энергии.',
      },
      {
        heading: 'Триптих состояний',
        text: 'Каждый из 3 объектов исследует отдельную эмоцию — от отчаяния, до ярости и похоти.',
      },
      {
        heading: 'Контраст пламени и монохрома',
        text: 'Сочетание алых пигментов с глубоким чёрным усиливает драматизм и кинематографичность композиции.',
      },
    ],
    materials: '1. «Жыве!»: арт-борд, пигменты, диоксид титана, эпоксидная смола · 2. «Застрять в текстурах»: цифровая графика (ручной рисунок, фотошоп) · 3. «Телесность»: холст, акрил, маркеры',
    year: '2020, 2011, 2014',
    media: [
      {
        type: 'image',
        src: '/art-protest/папка 7/photo_3394@04-08-2026_22-17-05.jpg',
        label: '01. Жыве! (смола на арт-борде)',
        aspect: '1080 / 810',
      },
      {
        type: 'image',
        src: '/art-protest/папка 7/photo_2026-08-27_17-30-22.jpg',
        label: '02. Застрять в текстурах (цифровая графика)',
        aspect: '604 / 402',
      },
      {
        type: 'image',
        src: '/art-protest/папка 7/photo_3225@04-08-2026_21-04-40.jpg',
        label: '03. Телесность (холст, акрил, маркеры)',
        aspect: '495 / 635',
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
      data-interactive="true"
      onPointerDown={(e) => e.stopPropagation()}
      onClick={(e) => {
        e.stopPropagation();
        onOpenLightbox(item, artwork);
      }}
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
            preload="metadata"
            className="w-full h-full object-fill block"
          />
          <div className="absolute top-1.5 right-1.5 p-1 bg-black text-[#14F1D9] border-2 border-black z-10 shadow-sm pointer-events-none">
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
  onOpenConcept,
}: {
  artwork: Artwork;
  onOpenLightbox: (item: MediaItem, artwork: Artwork) => void;
  onOpenConcept: (artwork: Artwork) => void;
  index: number;
}) {
  const m = artwork.media;

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center select-none bg-transparent">
      
      {/* Title & Metadata directly over concrete */}
      <div className="w-full max-w-[640px] flex items-center justify-between gap-2 mb-3 z-20 px-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-montserrat font-black uppercase text-black bg-[#14F1D9] px-2 py-0.5 border-2 border-black tracking-wider">
            {artwork.number}
          </span>
          <span className="text-xs sm:text-sm font-montserrat font-black uppercase tracking-wider text-black">
            {artwork.title}
          </span>
          <span className="text-xs text-black/80 font-sans font-semibold hidden md:inline-block">
            · {artwork.materials}
          </span>
        </div>
        <span className="text-xs font-montserrat font-black text-black bg-white/90 px-2 py-0.5 border-2 border-black shrink-0">
          {artwork.year}
        </span>
      </div>

      {/* Dynamic Asymmetrical Collage Body - Width 640px, Height 360px-400px */}
      <div className="relative w-full max-w-[640px] h-[360px] sm:h-[390px]">
        
        {/* ========================================================= */}
        {/* CASE 1: Февраль 22-го (2 Left, 1 Hero, 1 Full Video)      */}
        {/* ========================================================= */}
        {artwork.id === 'work-feb' && (
          <div className="relative w-full h-full">
            {/* Bold 4px Lines (top-0 so no crossing above title) */}
            <div className="absolute top-[162px] -left-8 right-[240px] h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute top-[75%] -left-6 -right-6 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[139px] top-0 -bottom-6 w-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[401px] top-0 -bottom-6 w-[4px] bg-black pointer-events-none z-10" />

            {/* Left Top: photo_3291 (aspect: 1024/1280, height 158px) */}
            <div className="absolute left-0 top-[2%] z-20">
              <ProportionalItem item={m[2]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '158px' }} />
            </div>

            {/* Left Bottom: photo_3362 (aspect: 1024/1280, height 158px) */}
            <div className="absolute left-0 top-[166px] z-20">
              <ProportionalItem item={m[3]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '158px' }} />
            </div>

            {/* Center Main Hero: photo_3360_1 (aspect: 874/1170, height 324px) */}
            <div className="absolute left-[143px] top-[2%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '324px' }} />
            </div>

            {/* Right Full Height Video: video_102 (aspect: 9/16, height 324px) */}
            <div className="absolute left-[405px] top-[2%] z-20">
              <ProportionalItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '324px' }} />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 2: Deep rest (3 items placed side-by-side cleanly)   */}
        {/* ========================================================= */}
        {artwork.id === 'work-deep' && (
          <div className="relative w-full h-full">
            {/* Bold 4px Lines (top-0 so no crossing above title) */}
            <div className="absolute top-[72%] -left-8 -right-8 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[330px] top-0 -bottom-6 w-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[475px] top-0 -bottom-6 w-[4px] bg-black pointer-events-none z-10" />

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
        {/* CASE 3: Последняя капля (оригинальное горизонтальное фото) */}
        {/* ========================================================= */}
        {artwork.id === 'work-last' && (
          <div className="relative w-full h-full">
            {/* Bold 4px Lines (top-0 so no crossing above title) */}
            <div className="absolute top-[46%] -left-8 -right-8 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[360px] top-0 -bottom-6 w-[4px] bg-black pointer-events-none z-10" />

            {/* Top Left: Concept Card (width 340px) */}
            <div className="absolute left-0 top-[6%] w-[340px] z-20 border-[4px] border-black p-4 bg-white/80">
              <span className="text-xs font-montserrat font-black uppercase text-black tracking-wider block">
                Концепция
              </span>
              <p className="text-xs text-black font-sans font-bold leading-relaxed mt-1">
                {artwork.concept}
              </p>
            </div>

            {/* Bottom Left Horizontal: photo_3332 (1280x758, width 340px) */}
            <div className="absolute left-0 bottom-[6%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ width: '340px' }} />
            </div>

            {/* Right Vertical Video: video_95 (9:16, height 360px) */}
            <div className="absolute left-[360px] top-[6%] z-20">
              <ProportionalItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '360px' }} />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CASE 4: Бензиновая радуга (7 items, zero overlap)         */}
        {/* ========================================================= */}
        {artwork.id === 'work-rainbow' && (
          <div className="relative w-full h-full">
            {/* Bold 4px Lines (top-0 so no crossing above title) */}
            <div className="absolute top-[44%] -left-8 -right-8 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute top-[76%] -left-6 -right-6 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[155px] top-0 -bottom-6 w-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[425px] top-0 -bottom-6 w-[4px] bg-black pointer-events-none z-10" />

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
        {artwork.id === 'work-swans' && (
          <div className="relative w-full h-full">
            {/* Bold 4px Lines (top-0 so no crossing above title) */}
            <div className="absolute top-[58%] -left-8 -right-8 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[360px] top-0 -bottom-6 w-[4px] bg-black pointer-events-none z-10" />

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
        {artwork.id === 'work-and' && (
          <div className="relative w-full h-full">
            {/* Bold 4px Lines (top-0 so no crossing above title) */}
            <div className="absolute top-[50%] -left-8 -right-8 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[340px] top-0 -bottom-6 w-[4px] bg-black pointer-events-none z-10" />

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
        {/* CASE 7: Красная серия (Триптих: 3 items, zero overlap)     */}
        {/* ========================================================= */}
        {artwork.id === 'work-red' && (
          <div className="relative w-full h-full">
            {/* Bold 4px Lines (top-0 so no crossing above title) */}
            <div className="absolute top-[44%] -left-8 -right-8 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute top-[76%] -left-6 -right-6 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[175px] top-0 -bottom-6 w-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[440px] top-0 -bottom-6 w-[4px] bg-black pointer-events-none z-10" />

            {/* 1. Left Bottom: «Жыве!» (смола, 1080x810, height 130px) */}
            <div className="absolute left-0 bottom-[12%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '130px' }} />
            </div>

            {/* 2. Center: «Застрять в текстурах» (листья, 604x402, width 260px) */}
            <div className="absolute left-[175px] top-[18%] z-20">
              <ProportionalItem item={m[1]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ width: '260px' }} />
            </div>

            {/* 3. Right: «Телесность» (руки на красном, 720x900, height 300px) */}
            <div className="absolute left-[440px] top-[4%] z-20">
              <ProportionalItem item={m[2]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '300px' }} />
            </div>
          </div>
        )}

      </div>

      {/* Concept Wall Plaque directly under the Artwork - Aligned Right to match Year badge */}
      <div className="mt-1 w-full max-w-[640px] z-20 flex items-center justify-end px-1">
        <button
          data-interactive="true"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            onOpenConcept(artwork);
          }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 hover:bg-[#14F1D9] text-black border-2 border-black font-montserrat font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md group/btn"
        >
          <span>КОНЦЕПЦИЯ</span>
          <ChevronRight className="w-3.5 h-3.5 transition-transform stroke-[2.5] group-hover/btn:translate-x-0.5" />
        </button>
      </div>

    </div>
  );
}

// Concluding Manifesto Panel (Balances 4th Wall Segment)
function ManifestoPanel() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center select-none bg-transparent">
      <div className="w-full max-w-[640px] h-[360px] sm:h-[390px] relative flex flex-col justify-between py-6 px-4 sm:px-8 bg-white/95 border-[4px] border-black shadow-xl backdrop-blur-sm z-20">
        {/* Extended Architectural Lines 4px behind / on perimeter */}
        <div className="absolute top-[16%] -left-8 -right-8 h-[4px] bg-black pointer-events-none -z-10" />
        <div className="absolute bottom-[16%] -left-8 -right-8 h-[4px] bg-black pointer-events-none -z-10" />
        <div className="absolute left-[8%] top-0 -bottom-6 w-[4px] bg-black pointer-events-none -z-10" />
        <div className="absolute right-[8%] top-0 -bottom-6 w-[4px] bg-black pointer-events-none -z-10" />

        {/* Inner Content Constrained to center to guarantee no line collision */}
        <div className="w-full max-w-[470px] mx-auto flex flex-col justify-between h-full py-1">
          {/* Top Header */}
          <div className="relative z-20 pb-1 border-b-2 border-black">
            <span className="text-xs font-montserrat font-black uppercase tracking-widest text-black block">
              Концепция серии
            </span>
          </div>

          {/* Center Text Body */}
          <div className="relative z-20 my-auto py-3 space-y-2.5">
            <p className="text-[11px] sm:text-[13px] font-sans leading-relaxed text-black font-bold">
              «Каждая работа — это прежде всего не красота, а концепция и идея, притом чаще всего болезненная. В этом блоке собраны работы, у которых визуальная составляющая вторична, на первый план выходят образы и метафоры.
            </p>
            <p className="text-[11px] sm:text-[13px] font-sans leading-relaxed text-black font-bold">
              Смола, гипс, глина, пигменты и красители выступают здесь не как декор, а как прямой манифест свободы и желания высказаться через цвет и свет».
            </p>
          </div>

          {/* Bottom Footer Metadata */}
          <div className="relative z-20 pt-1.5 border-t-2 border-black flex items-center justify-between text-[10px] sm:text-xs font-montserrat text-black uppercase font-bold tracking-wider">
            <span>Екатерина · Fir Tree Art</span>
            <span className="text-black/80 font-sans font-semibold">7 авторских арт-объектов</span>
          </div>
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
  const [conceptModalArtwork, setConceptModalArtwork] = useState<Artwork | null>(null);

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
    // Prevent starting drag when clicking on interactive children (buttons, plaques, art frames)
    if ((e.target as HTMLElement).closest('button, [data-interactive="true"], a')) {
      return;
    }
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
    <section id="art-protest" className="relative w-full bg-[#111111] overflow-hidden scroll-mt-20 border-b border-white/10 group/section">
      
      {/* Mobile Swipe Hint Badge */}
      <div className="sm:hidden absolute top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        <span className="px-3.5 py-1 bg-black/80 backdrop-blur-md border border-[#14F1D9]/50 text-[#14F1D9] text-[10px] font-mono font-bold tracking-widest uppercase rounded-full shadow-xl animate-pulse">
          ← Свайпайте стену →
        </span>
      </div>

      {/* Floating Scroll Controls over the Wall */}
      <button
        data-interactive="true"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={() => scrollByAmount(-700)}
        className="flex absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-11 sm:w-11 items-center justify-center border-2 border-black bg-white/90 text-black hover:bg-[#14F1D9] hover:border-black transition-all shadow-2xl rounded-none cursor-pointer"
        aria-label="Листать влево"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        data-interactive="true"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={() => scrollByAmount(700)}
        className="flex absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-11 sm:w-11 items-center justify-center border-2 border-black bg-white/90 text-black hover:bg-[#14F1D9] hover:border-black transition-all shadow-2xl rounded-none cursor-pointer"
        aria-label="Листать вправо"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* The Continuous Concrete Wall Track */}
      <div
        ref={scrollContainerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onDragStart={(e) => e.preventDefault()}
        className="relative w-full h-[680px] sm:h-[740px] lg:h-[800px] overflow-x-auto overflow-y-hidden flex flex-nowrap cursor-grab select-none snap-x snap-mandatory hide-scrollbar bg-transparent"
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
                  onOpenConcept={(art) => setConceptModalArtwork(art)}
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
                    onOpenConcept={(art) => setConceptModalArtwork(art)}
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

      {/* Concept Detail Modal (Universal Bottom Sheet on Mobile, Right Drawer on Desktop) */}
      {conceptModalArtwork && (
        <div className="fixed inset-0 z-50 flex items-end md:items-stretch justify-end">
          {/* Backdrop */}
          <div
            onClick={() => setConceptModalArtwork(null)}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity cursor-pointer"
          />

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full md:w-[480px] max-h-[85vh] md:max-h-none md:h-screen bg-[#161616] text-white border-t-[4px] md:border-t-0 md:border-l-[4px] border-black p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-y-auto rounded-t-2xl md:rounded-none animate-in slide-in-from-bottom md:slide-in-from-right duration-300"
          >
            {/* Top Close Button */}
            <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-montserrat font-black uppercase text-black bg-[#14F1D9] px-2 py-0.5 border-2 border-black tracking-wider">
                  {conceptModalArtwork.number}
                </span>
                <span className="text-xs font-montserrat font-bold text-white/60 uppercase tracking-widest">
                  {conceptModalArtwork.year} · Концепция
                </span>
              </div>
              <button
                onClick={() => setConceptModalArtwork(null)}
                className="flex h-9 w-9 items-center justify-center border-2 border-black bg-white text-black hover:bg-[#14F1D9] transition-colors shadow-sm cursor-pointer"
                aria-label="Закрыть"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Title */}
            <div>
              <h2 className="font-montserrat text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
                {conceptModalArtwork.title}
              </h2>
              <p className="text-xs font-sans text-white/60 font-medium mt-1">
                {conceptModalArtwork.subtitle}
              </p>
            </div>

            {/* Structured Concept Body */}
            <div className="py-6 space-y-4 my-auto">
              {conceptModalArtwork.fullConcept ? (
                conceptModalArtwork.fullConcept.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-[#14F1D9] pl-3.5 space-y-1">
                    <h4 className="text-xs sm:text-sm font-montserrat font-black uppercase tracking-wide text-white">
                      {item.heading}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-white/90 font-sans leading-relaxed">
                  {conceptModalArtwork.concept}
                </p>
              )}
            </div>

            {/* Footer / Materials */}
            <div className="border-t border-white/15 pt-4 flex flex-col gap-1 text-xs font-montserrat">
              <span className="text-white/50 uppercase font-bold text-[10px]">МАТЕРИАЛЫ И ТЕХНИКА</span>
              <span className="font-sans font-semibold text-[#14F1D9]">
                {conceptModalArtwork.materials}
              </span>
            </div>
          </div>
        </div>
      )}

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
              className="absolute -top-4 -right-4 z-20 flex h-10 w-10 items-center justify-center border-2 border-white/20 bg-black text-white hover:bg-[#14F1D9] hover:text-black transition-colors shadow-lg cursor-pointer"
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
                  muted
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
                <div className="flex items-center gap-2">
                  <span className="text-xs font-montserrat font-black uppercase tracking-widest text-[#14F1D9]">
                    {lightboxState.artwork.number} · {lightboxState.artwork.title}
                  </span>
                  {lightboxState.artwork.fullConcept && (
                    <button
                      onClick={() => {
                        const art = lightboxState.artwork;
                        setLightboxState(null);
                        setConceptModalArtwork(art);
                      }}
                      className="text-[10px] font-montserrat font-black uppercase text-black bg-[#14F1D9] px-2 py-0.5 border border-black hover:bg-white transition-colors cursor-pointer"
                    >
                      ЧИТАТЬ КОНЦЕПЦИЮ
                    </button>
                  )}
                </div>
                <h3 className="font-montserrat text-base sm:text-lg font-black uppercase text-white mt-1">
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
