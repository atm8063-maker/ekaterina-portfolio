'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { LazyVideo } from '@/components/shared/lazy-video';
import { Play, X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';

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

const artworksDataRu: Artwork[] = [
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
        src: '/art-protest/папка 2/photo_3360@04-08-2026_21-08-46_1.webp',
        label: 'Главный вид',
        aspect: '874 / 1170',
      },
      {
        type: 'video',
        src: '/art-protest/папка_2/video_102_04-08-2026_21-08-46.mp4',
        label: 'Живой рельеф',
        aspect: '9 / 16',
      },
      {
        type: 'image',
        src: '/art-protest/папка 2/photo_3291@04-08-2026_21-08-4231.webp',
        label: 'Деталь: Текстура и смола',
        aspect: '1024 / 1280',
      },
      {
        type: 'image',
        src: '/art-protest/папка 2/photo_3362@04-08-2026_21-08-46.webp',
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
        src: '/art-protest/папка 1/photo_2957@31-07-2026_18-19-07.webp',
        label: 'Финальная работа',
        aspect: '1280 / 1271',
      },
      {
        type: 'image',
        src: '/art-protest/папка 1/photo_3018@31-07-2026_18-44-23.webp',
        label: 'Скульптурный элемент',
        aspect: '576 / 1280',
      },
      {
        type: 'video',
        src: '/art-protest/папка_1/video_137_04-08-2026_22-24-33.mp4',
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
        src: '/art-protest/папка 3/photo_3332@04-08-2026_21-08-45.webp',
        label: 'Экспозиция',
        aspect: '1280 / 758',
      },
      {
        type: 'video',
        src: '/art-protest/папка_3/video_95_04-08-2026_21-08-44.mp4',
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
        src: '/art-protest/папка 4/photo_3309@04-08-2026_21-08-42.webp',
        label: 'Главный вид',
        aspect: '1024 / 1280',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-39.webp',
        label: 'Ракурс A',
        aspect: '718 / 960',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40.webp',
        label: 'Ракурс B',
        aspect: '718 / 960',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40 (2).webp',
        label: 'Рельеф',
        aspect: '718 / 960',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40 (3).webp',
        label: 'Срез',
        aspect: '718 / 960',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40 (5).webp',
        label: 'Фактура',
        aspect: '720 / 960',
      },
      {
        type: 'image',
        src: '/art-protest/папка 4/photo_2026-08-30_02-47-40 (7).webp',
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
        src: '/art-protest/папка 5/photo_2933@31-07-2026_17-46-11.webp',
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
        src: '/art-protest/папка 6/photo_3168@04-08-2026_20-56-52.webp',
        label: 'Общий вид',
        aspect: '1105 / 1105',
      },
      {
        type: 'image',
        src: '/art-protest/папка 6/photo_2026-08-27_17-30-22 (8).webp',
        label: 'Деталь',
        aspect: '1280 / 1022',
      },
      {
        type: 'image',
        src: '/art-protest/папка 6/photo_2026-08-27_17-30-23.webp',
        label: 'Рельеф',
        aspect: '626 / 626',
      },
      {
        type: 'image',
        src: '/art-protest/папка 6/photo_2026-08-27_17-30-23 (2).webp',
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
        src: '/art-protest/папка 7/photo_3394@04-08-2026_22-17-05.webp',
        label: '01. Жыве! (смола на арт-борде)',
        aspect: '1080 / 810',
      },
      {
        type: 'image',
        src: '/art-protest/папка 7/photo_2026-08-27_17-30-22.webp',
        label: '02. Застрять в текстурах (цифровая графика)',
        aspect: '604 / 402',
      },
      {
        type: 'image',
        src: '/art-protest/папка 7/photo_3225@04-08-2026_21-04-40.webp',
        label: '03. Телесность (холст, акрил, маркеры)',
        aspect: '495 / 635',
      },
    ],
  },
];

const artworksDataEn: Artwork[] = [
  // 1. February '22
  {
    id: 'work-feb',
    number: '01',
    title: "February '22",
    subtitle: 'Artivism & Protest',
    concept: 'The piece conveys a state of catastrophe, shock, and forced silence through the visual metaphors of ice, cracks, and constraint.',
    fullConcept: [
      {
        heading: 'The Trap and the Web of Censorship',
        text: 'Ice, made with epoxy resin. Interlacing white cracks resemble a sticky web or a torn net, binding the space. All of it symbolizes total control, an atmosphere of fear, and the impossibility of breaking through the wall of prohibition to be heard.',
      },
      {
        heading: 'A Voiceless Protest',
        text: 'At the center of the composition are hands trying to break through the ice. It is a gesture of dissent, inner strength, and an attempt at resistance meeting an insurmountable barrier.',
      },
      {
        heading: 'The Ghost of Freedom, and Its Fading',
        text: "A blurred, semi-transparent silhouette of an open palm beneath the ice underscores powerlessness, the feeling of one's own position becoming a 'ghost,' and the gradual loss of the ability to act openly.",
      },
      {
        heading: 'A Somber Palette',
        text: 'The dark shade of water in the crevice between the ice shards, together with the highlights, creates a sense of a cold dead end, where light struggles to break through.',
      },
    ],
    materials: 'Oil, epoxy resin, clay, plaster, markers, chrome, cardboard, pigments, dyes',
    year: '2022',
    media: [
      {
        type: 'image',
        src: '/art-protest/папка_2/photo_3360_04-08-2026_21-08-46_1.jpg',
        label: 'Main View',
        aspect: '874 / 1170',
      },
      {
        type: 'video',
        src: '/art-protest/папка_2/video_102_04-08-2026_21-08-46.mp4',
        label: 'Living Relief',
        aspect: '9 / 16',
      },
      {
        type: 'image',
        src: '/art-protest/папка_2/photo_3291_04-08-2026_21-08-4231.jpg',
        label: 'Detail: Texture and Resin',
        aspect: '1024 / 1280',
      },
      {
        type: 'image',
        src: '/art-protest/папка_2/photo_3362_04-08-2026_21-08-46.jpg',
        label: 'Detail: Chrome and Plaster',
        aspect: '1024 / 1280',
      },
    ],
  },

  // 2. Deep Rest
  {
    id: 'work-deep',
    number: '02',
    title: 'Deep Rest',
    subtitle: 'Artivism & Texture',
    concept: 'An exploration of interaction, the boundaries of support, and emotional freezing: the choice between rescue and sinking into the depths.',
    fullConcept: [
      {
        heading: 'Interaction',
        text: 'For a very long time this painting sounded in my head as "deep rest," but when I finished it, it became clear that wasn\'t it — and it\'s not really about me, or even about the canvas\'s subject.\nIt\'s about interaction. Like in Marina Abramović\'s experiment (which, it seems, is still ongoing).\nYou can let the other person drown, or you can reach out a hand.\n"Never give up" or "Deep rest" — it all depends on who\'s watching.',
      },
      {
        heading: 'A Phonetic Play on Meaning',
        text: 'The title balances between healing rest (Deep rest) and a state of deep depression (Depressed), when stillness becomes the only psychological defense.',
      },
      {
        heading: 'Tactile Contrast',
        text: "The resin's gloss is interrupted by a pattern of falling raindrops, with the outline of a second hand emerging underwater in the depths. The contrast of plaster and resin heightens the discomfort of an image of a person drowning in dark water.",
      },
    ],
    materials: 'Acrylic, clay, plaster, epoxy resin, pigments, silicone, art board',
    year: '2023',
    media: [
      {
        type: 'image',
        src: '/art-protest/папка_1/photo_2957_31-07-2026_18-19-07.jpg',
        label: 'Final Piece',
        aspect: '1280 / 1271',
      },
      {
        type: 'image',
        src: '/art-protest/папка_1/photo_3018_31-07-2026_18-44-23.jpg',
        label: 'Sculptural Element',
        aspect: '576 / 1280',
      },
      {
        type: 'video',
        src: '/art-protest/папка_1/video_137_04-08-2026_22-24-33.mp4',
        label: 'Video Detail',
        aspect: '9 / 16',
      },
    ],
  },

  // 3. The Last Drop
  {
    id: 'work-last',
    number: '03',
    title: 'The Last Drop',
    subtitle: 'Monochrome & Shadows',
    concept: 'The piece uses a minimal number of shades and materials; the idea is very concise: the last drop is a full stop, not a dialogue.',
    fullConcept: [
      {
        heading: 'Chromed Tension',
        text: 'The mirrored metallic sheen reflects the viewer, making them a participant in a moment of extreme psychological pressure.',
      },
      {
        heading: 'A Frozen Impulse',
        text: 'The ripples on the water from the last drop stand as a symbol of suppressed emotions and unspoken words finally breaking through.',
      },
      {
        heading: 'Minimalism',
        text: 'The piece uses a minimal number of shades and materials; the idea is very concise: the last drop is a full stop, not a dialogue.',
      },
    ],
    materials: 'Art board, chrome, epoxy resin, silicone',
    year: '2020',
    media: [
      {
        type: 'image',
        src: '/art-protest/папка_3/photo_3332_04-08-2026_21-08-45.jpg',
        label: 'Display',
        aspect: '1280 / 758',
      },
      {
        type: 'video',
        src: '/art-protest/папка_3/video_95_04-08-2026_21-08-44.mp4',
        label: 'Video Detail',
        aspect: '9 / 16',
      },
    ],
  },

  // 4. Gasoline Rainbow
  {
    id: 'work-rainbow',
    number: '04',
    title: 'Gasoline Rainbow',
    subtitle: '"Transformation" Series',
    concept: 'Beauty in the small and a hidden ecological conflict: the aesthetics of a gasoline film underfoot, and fossilized nature.',
    fullConcept: [
      {
        heading: 'Beauty in the Everyday',
        text: 'The rainbow sheen of a gasoline film and the taut surface of water on "asphalt" reveal beauty in the small — literally in what\'s underfoot.',
      },
      {
        heading: 'An Autumn Landscape',
        text: 'Skeletonized leaves, fused into liquid stone and resin, are captured like fossilized artifacts of a fading living nature.',
      },
      {
        heading: 'A Layered Conflict',
        text: 'The dense textures of liquid stone imitating cracked asphalt collide with flowing fluorescent dyes, visualizing the standoff between civilization and the biosphere.',
      },
    ],
    materials: 'Art board, epoxy resin, dyes and pigments, liquid stone, acrylic, silicone, skeletonized leaves',
    year: '2021',
    media: [
      {
        type: 'image',
        src: '/art-protest/папка_4/photo_3309_04-08-2026_21-08-42.jpg',
        label: 'Main View',
        aspect: '1024 / 1280',
      },
      {
        type: 'image',
        src: '/art-protest/папка_4/photo_2026-08-30_02-47-39.jpg',
        label: 'Angle A',
        aspect: '718 / 960',
      },
      {
        type: 'image',
        src: '/art-protest/папка_4/photo_2026-08-30_02-47-40.jpg',
        label: 'Angle B',
        aspect: '718 / 960',
      },
      {
        type: 'image',
        src: '/art-protest/папка_4/photo_2026-08-30_02-47-40 (2).jpg',
        label: 'Relief',
        aspect: '718 / 960',
      },
      {
        type: 'image',
        src: '/art-protest/папка_4/photo_2026-08-30_02-47-40 (3).jpg',
        label: 'Cross-Section',
        aspect: '718 / 960',
      },
      {
        type: 'image',
        src: '/art-protest/папка_4/photo_2026-08-30_02-47-40 (5).jpg',
        label: 'Texture',
        aspect: '720 / 960',
      },
      {
        type: 'image',
        src: '/art-protest/папка_4/photo_2026-08-30_02-47-40 (7).jpg',
        label: 'Macro',
        aspect: '706 / 960',
      },
    ],
  },

  // 5. Let the Swans Dance
  {
    id: 'work-swans',
    number: '05',
    title: 'Let the Swans Dance',
    subtitle: 'Depth & Space',
    concept: 'A historical allusion to ballet broadcasts on TV during crises: a blackthorn spike pierces paper, turning dance into a painful jab of reality.',
    fullConcept: [
      {
        heading: 'A Thorn Instead of Grace',
        text: 'A real, thorny blackthorn branch digs into a clean sheet of paper, turning a fairy-tale dance into a painful jab of reality.',
      },
      {
        heading: 'The Emptiness of the Drafting Paper',
        text: "The monochrome blue background underscores the deafening silence and informational vacuum of an official agenda.",
      },
      {
        heading: 'A Symbol of Changing Eras',
        text: "A concise artistic gesture, where the fragility of paper stands against the aggressive harshness of thorns.",
      },
    ],
    materials: 'Drafting paper, blackthorn branch',
    year: '2024',
    media: [
      {
        type: 'image',
        src: '/art-protest/папка_5/photo_2933_31-07-2026_17-46-11.jpg',
        label: 'Composition',
        aspect: '1212 / 1280',
      },
    ],
  },

  // 6. And?
  {
    id: 'work-and',
    number: '06',
    title: 'And?',
    subtitle: 'Textured Relief',
    concept: 'A dialogue with confusion and skepticism: a defensive gesture and a provocative question that deflates the pathos.',
    fullConcept: [
      {
        heading: 'Confusion',
        text: 'Hands spread wide and hands folded in an attempt to shield oneself show the conflict between the urge to vent one\'s own aggression and the urge to suppress it.',
      },
      {
        heading: 'Skepticism as a Defense',
        text: 'The blunt, provocative question "And?" cuts through the pathos and exposes the existential confusion of the modern person, while stating bewilderment, puzzlement, and disorientation all at once.',
      },
      {
        heading: 'A Textured Break',
        text: 'Layered brushstrokes create the sense of other people\'s opinions piling up, through which the central question breaks through.',
      },
    ],
    materials: 'Canvas, acrylic, markers',
    year: '2015',
    media: [
      {
        type: 'image',
        src: '/art-protest/папка_6/photo_3168_04-08-2026_20-56-52.jpg',
        label: 'Overall View',
        aspect: '1105 / 1105',
      },
      {
        type: 'image',
        src: '/art-protest/папка_6/photo_2026-08-27_17-30-22 (8).jpg',
        label: 'Detail',
        aspect: '1280 / 1022',
      },
      {
        type: 'image',
        src: '/art-protest/папка_6/photo_2026-08-27_17-30-23.jpg',
        label: 'Relief',
        aspect: '626 / 626',
      },
      {
        type: 'image',
        src: '/art-protest/папка_6/photo_2026-08-27_17-30-23 (2).jpg',
        label: 'Texture',
        aspect: '1078 / 1078',
      },
    ],
  },

  // 7. Red Series
  {
    id: 'work-red',
    number: '07',
    title: 'Red Series',
    subtitle: 'Triptych · Mixed Media',
    concept: 'A triptych of states through a totalizing red: from fury and despair to untamed vitality and physicality.',
    fullConcept: [
      {
        heading: 'Red as a Signal of Danger and Life',
        text: 'The dominant spectrum triggers primal instincts — from danger to untamed sexual energy.',
      },
      {
        heading: 'A Triptych of States',
        text: 'Each of the 3 pieces explores a distinct emotion — from despair to fury to lust.',
      },
      {
        heading: 'The Contrast of Flame and Monochrome',
        text: 'The combination of scarlet pigments with deep black heightens the drama and cinematic quality of the composition.',
      },
    ],
    materials: '1. "Alive!": art board, pigments, titanium dioxide, epoxy resin · 2. "Stuck in the Textures": digital art (hand-drawn, Photoshop) · 3. "Physicality": canvas, acrylic, markers',
    year: '2020, 2011, 2014',
    media: [
      {
        type: 'image',
        src: '/art-protest/папка_7/photo_3394_04-08-2026_22-17-05.jpg',
        label: '01. Alive! (resin on art board)',
        aspect: '1080 / 810',
      },
      {
        type: 'image',
        src: '/art-protest/папка_7/photo_2026-08-27_17-30-22.jpg',
        label: '02. Stuck in the Textures (digital art)',
        aspect: '604 / 402',
      },
      {
        type: 'image',
        src: '/art-protest/папка_7/photo_3225_04-08-2026_21-04-40.jpg',
        label: '03. Physicality (canvas, acrylic, markers)',
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
          <LazyVideo
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-fill block"
          />
          <div className="absolute top-1.5 right-1.5 p-1 bg-black text-primary border-2 border-black z-10 shadow-sm pointer-events-none">
            <Play className="w-3.5 h-3.5 fill-primary" />
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
  const { isEn } = useLanguage();
  const m = artwork.media;
  const [isInlineOpen, setIsInlineOpen] = useState(false);

  const handleConceptClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsInlineOpen(!isInlineOpen);
    } else {
      onOpenConcept(artwork);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center select-none bg-transparent">
      
      {/* Scaled Unified Artwork Block on Mobile so title, collage & button stay tightly together */}
      <div className="relative flex flex-col items-center justify-center scale-[0.52] xs:scale-[0.62] sm:scale-100 origin-center w-[640px] max-w-none">
        
        {/* Title & Metadata directly over concrete */}
        <div className="w-[640px] flex items-center justify-between gap-2 mb-2 z-20 px-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-montserrat font-black uppercase text-black bg-primary px-2 py-0.5 border-2 border-black tracking-wider">
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

        {/* Dynamic Asymmetrical Collage Body */}
        <div className="relative w-[640px] h-[360px] sm:h-[390px]">
        
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
        {/* ========================================================= */}
        {/* CASE 3: Последняя капля (оригинальное горизонтальное фото) */}
        {/* ========================================================= */}
        {artwork.id === 'work-last' && (
          <div className="relative w-full h-full">
            {/* Bold 4px Lines (top-0 so no crossing above title) */}
            <div className="absolute top-[50%] -left-8 -right-8 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[360px] top-0 -bottom-6 w-[4px] bg-black pointer-events-none z-10" />

            {/* Left Horizontal Photo: photo_3332 (1280x758, width 340px) */}
            <div className="absolute left-0 top-[18%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ width: '340px' }} />
            </div>

            {/* Right Vertical Video: video_95 (9:16, height 360px) */}
            <div className="absolute left-[360px] top-[4%] z-20">
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
            <div className="absolute top-[50%] -left-8 -right-8 h-[4px] bg-black pointer-events-none z-10" />
            <div className="absolute left-[360px] top-0 -bottom-6 w-[4px] bg-black pointer-events-none z-10" />

            {/* Photo 0: photo_2933 (width 340px, height 350px) */}
            <div className="absolute left-0 top-[6%] z-20">
              <ProportionalItem item={m[0]} artwork={artwork} onOpenLightbox={onOpenLightbox} style={{ height: '350px' }} />
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
            handleConceptClick();
          }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 hover:bg-primary text-black border-2 border-black font-montserrat font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md group/btn"
        >
          <span>{isEn ? "CONCEPT" : "КОНЦЕПЦИЯ"}</span>
          <ChevronRight className={`w-3.5 h-3.5 transition-transform stroke-[2.5] ${isInlineOpen ? 'rotate-90' : 'group-hover/btn:translate-x-0.5'}`} />
        </button>
      </div>

        {/* Mobile Inline Concept: strictly below the collage with zero overlap */}
        {isInlineOpen && (
          <div 
            data-interactive="true"
            onPointerDown={(e) => e.stopPropagation()}
            className="md:hidden mt-3 w-full max-w-[640px] z-30 bg-surface text-white border-[3px] border-black p-4 shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-white/15 pb-2 mb-3">
              <button
                onClick={() => setIsInlineOpen(false)}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-primary text-black border border-black font-montserrat font-black text-[11px] uppercase tracking-wider cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>{isEn ? "Back to the Wall" : "Назад к стене"}</span>
              </button>
              <button
                onClick={() => setIsInlineOpen(false)}
                className="text-[10px] font-montserrat font-bold uppercase bg-white text-black px-2 py-0.5 border border-black cursor-pointer"
              >
                {isEn ? "Close ✕" : "Закрыть ✕"}
              </button>
            </div>
            <div className="space-y-2.5 text-left">
              {artwork.fullConcept ? (
                artwork.fullConcept.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-primary pl-2.5 space-y-0.5">
                    <h4 className="text-[11px] font-montserrat font-black uppercase tracking-wide text-white">
                      {item.heading}
                    </h4>
                    <p className="text-[11px] text-white/80 font-sans leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-white/90 font-sans leading-relaxed">
                  {artwork.concept}
                </p>
              )}
            </div>
            <div className="mt-3 pt-2 border-t border-white/10 text-[10px] font-sans text-white/60">
              <strong className="text-white">{isEn ? "Materials:" : "Материалы:"}</strong> {artwork.materials}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// Concluding Manifesto Panel (Balances 4th Wall Segment)
function ManifestoPanel() {
  const { isEn } = useLanguage();
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center select-none bg-transparent">
      <div className="w-[640px] max-w-none h-[360px] sm:h-[390px] scale-[0.52] xs:scale-[0.62] sm:scale-100 origin-center relative flex flex-col justify-between py-6 px-4 sm:px-8 bg-white/95 border-[4px] border-black shadow-xl backdrop-blur-sm z-20">
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
              {isEn ? "Series Concept" : "Концепция серии"}
            </span>
          </div>

          {/* Center Text Body */}
          <div className="relative z-20 my-auto py-3 space-y-2.5">
            {isEn ? (
              <>
                <p className="text-[11px] sm:text-[13px] font-sans leading-relaxed text-black font-bold">
                  &quot;Each piece is, first and foremost, not about beauty but about concept and idea — and more often than not, a painful one. This block brings together works where the visual component is secondary; imagery and metaphor take center stage.
                </p>
                <p className="text-[11px] sm:text-[13px] font-sans leading-relaxed text-black font-bold">
                  Resin, plaster, clay, pigments, and dyes appear here not as decoration, but as a direct manifesto of freedom and the desire to speak out through color and light.&quot;
                </p>
              </>
            ) : (
              <>
                <p className="text-[11px] sm:text-[13px] font-sans leading-relaxed text-black font-bold">
                  «Каждая работа — это прежде всего не красота, а концепция и идея, притом чаще всего болезненная. В этом блоке собраны работы, у которых визуальная составляющая вторична, на первый план выходят образы и метафоры.
                </p>
                <p className="text-[11px] sm:text-[13px] font-sans leading-relaxed text-black font-bold">
                  Смола, гипс, глина, пигменты и красители выступают здесь не как декор, а как прямой манифест свободы и желания высказаться через цвет и свет».
                </p>
              </>
            )}
          </div>

          {/* Bottom Footer Metadata */}
          <div className="relative z-20 pt-1.5 border-t-2 border-black flex items-center justify-between text-[10px] sm:text-xs font-montserrat text-black uppercase font-bold tracking-wider">
            <span>{isEn ? "Ekaterina" : "Екатерина"} · Fir Tree Art</span>
            <span className="text-black/80 font-sans font-semibold">{isEn ? "7 Original Art Pieces" : "7 авторских арт-объектов"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ArtProtest() {
  const { isEn } = useLanguage();
  const artworksData = isEn ? artworksDataEn : artworksDataRu;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [lightboxState, setLightboxState] = useState<{
    item: MediaItem;
    artwork: Artwork;
  } | null>(null);
  const [conceptModalArtwork, setConceptModalArtwork] = useState<Artwork | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  type ProtestSlide =
    | { kind: 'artwork'; artwork: Artwork; index: number }
    | { kind: 'manifesto' };

  const slides: ProtestSlide[] = [
    ...artworksData.map((artwork, index) => ({ kind: 'artwork' as const, artwork, index })),
    { kind: 'manifesto' },
  ];

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const updateScrollEdges = React.useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const edge = 4;
    const left = el.scrollLeft;
    setCanScrollLeft(left > edge);
    setCanScrollRight(left < maxScroll - edge);
  }, []);

  // Auto-center first artwork on mobile so Artwork 01 is immediately fully visible
  React.useEffect(() => {
    const centerFirstSpot = () => {
      if (!scrollContainerRef.current) return;
      const el = scrollContainerRef.current;
      const firstSpot = el.querySelector<HTMLElement>('.art-spot-first');
      if (firstSpot) {
        const spotRect = firstSpot.getBoundingClientRect();
        const containerRect = el.getBoundingClientRect();
        const spotCenterRelative = spotRect.left - containerRect.left + el.scrollLeft + spotRect.width / 2;
        el.scrollLeft = Math.max(0, spotCenterRelative - el.clientWidth / 2);
      }
      updateScrollEdges();
    };

    const t1 = setTimeout(centerFirstSpot, 50);
    const t2 = setTimeout(centerFirstSpot, 300);
    window.addEventListener('resize', centerFirstSpot);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', centerFirstSpot);
    };
  }, [updateScrollEdges]);

  React.useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollEdges();
    el.addEventListener('scroll', updateScrollEdges, { passive: true });

    const ro = new ResizeObserver(() => updateScrollEdges());
    ro.observe(el);

    return () => {
      el.removeEventListener('scroll', updateScrollEdges);
      ro.disconnect();
    };
  }, [updateScrollEdges, slides.length]);

  const scrollByPage = (direction: -1 | 1) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>('[data-art-protest-slide]');
    if (!slide) return;
    const styles = getComputedStyle(el);
    const gap =
      parseFloat(styles.columnGap || '0') ||
      parseFloat(styles.gap || '0') ||
      0;
    el.scrollBy({ left: direction * (slide.offsetWidth + gap), behavior: 'smooth' });
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
    updateScrollEdges();
  };

  return (
    <section id="art-protest" className="relative w-full bg-background overflow-hidden scroll-mt-20 border-b border-white/10 group/section">
      {/* Fixed wall: height-fit tile (repeat-x), gallery scrolls above */}
      <div className="art-protest-wall-bg absolute inset-0 z-0 pointer-events-none" aria-hidden />

      {/* Floating Scroll Controls over the Wall */}
      <button
        type="button"
        data-interactive="true"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={() => scrollByPage(-1)}
        disabled={!canScrollLeft}
        aria-hidden={!canScrollLeft}
        tabIndex={canScrollLeft ? 0 : -1}
        className={`hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 h-11 w-11 items-center justify-center border-2 border-black bg-white/90 text-black hov:bg-primary hov:border-black shadow-2xl rounded-none transition-opacity duration-300 ease-out ${
          canScrollLeft ? 'opacity-100 pointer-events-auto cursor-pointer' : 'opacity-0 pointer-events-none cursor-default'
        }`}
        aria-label={isEn ? "Scroll left" : "Листать влево"}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        type="button"
        data-interactive="true"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={() => scrollByPage(1)}
        disabled={!canScrollRight}
        aria-hidden={!canScrollRight}
        tabIndex={canScrollRight ? 0 : -1}
        className={`hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 h-11 w-11 items-center justify-center border-2 border-black bg-white/90 text-black hov:bg-primary hov:border-black shadow-2xl rounded-none transition-opacity duration-300 ease-out ${
          canScrollRight ? 'opacity-100 pointer-events-auto cursor-pointer' : 'opacity-0 pointer-events-none cursor-default'
        }`}
        aria-label={isEn ? "Scroll right" : "Листать вправо"}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* The Continuous Concrete Wall Track */}
      <div
        ref={scrollContainerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onScroll={updateScrollEdges}
        onDragStart={(e) => e.preventDefault()}
        className="art-protest-scroll relative z-10 w-full h-[680px] sm:h-[740px] lg:h-[800px] overflow-x-auto overflow-y-hidden flex flex-nowrap items-center cursor-grab select-none snap-x snap-mandatory hide-scrollbar bg-transparent scroll-smooth px-0"
      >
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.kind === 'artwork' ? slide.artwork.id : 'manifesto'}
            data-art-protest-slide
            className={`art-protest-slide relative h-[76%] sm:h-[80%] flex items-center justify-center overflow-visible bg-transparent ${slideIndex === 0 ? 'art-spot-first' : ''}`}
          >
            {slide.kind === 'manifesto' ? (
              <ManifestoPanel />
            ) : (
              <SteppedCollage
                artwork={slide.artwork}
                index={slide.index}
                onOpenLightbox={(item, art) => setLightboxState({ item, artwork: art })}
                onOpenConcept={(art) => setConceptModalArtwork(art)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Mobile Swipe Hint */}
      <div className="sm:hidden absolute top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/80 backdrop-blur-md border border-primary/40 text-primary text-[11px] font-mono font-bold uppercase tracking-wider shadow-lg">
          <span>{isEn ? "Swipe the wall" : "Свайпайте стену"}</span>
        </div>
      </div>

      {/* Concept Slide-Over Panel (Universal: Desktop Right Drawer + Mobile Bottom Sheet) */}
      {conceptModalArtwork && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end md:block">
          {/* Backdrop */}
          <div
            onClick={() => setConceptModalArtwork(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity cursor-pointer"
          />

          {/* Drawer / Sheet */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full md:w-[460px] md:max-w-[90vw] md:absolute md:top-0 md:right-0 md:bottom-0 md:h-screen max-h-[85vh] md:max-h-none bg-surface text-white border-t-4 md:border-t-0 md:border-l-[4px] border-black p-5 sm:p-8 shadow-2xl flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Close Button */}
            <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-4">
              <button
                onClick={() => setConceptModalArtwork(null)}
                className="flex items-center gap-2 px-3 py-1.5 bg-primary text-black hover:bg-white border-2 border-black font-montserrat font-black text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
              >
                <ArrowLeft className="w-4 h-4 stroke-[3]" />
                <span>{isEn ? "Back to the Wall" : "Назад к стене"}</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="text-xs font-montserrat font-black uppercase text-black bg-primary px-2 py-0.5 border-2 border-black tracking-wider">
                  {conceptModalArtwork.number}
                </span>
                <span className="text-xs font-montserrat font-bold text-white/60 uppercase tracking-widest hidden sm:inline-block">
                  {conceptModalArtwork.year}
                </span>
                <button
                  onClick={() => setConceptModalArtwork(null)}
                  className="flex h-8 w-8 items-center justify-center border-2 border-black bg-white text-black hover:bg-primary transition-colors shadow-sm cursor-pointer ml-1"
                  aria-label={isEn ? "Close" : "Закрыть"}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Title */}
            <div>
              <h2 className="font-montserrat text-xl sm:text-3xl font-black uppercase text-white leading-tight">
                {conceptModalArtwork.title}
              </h2>
              <p className="text-xs font-sans text-white/60 font-medium mt-1">
                {conceptModalArtwork.subtitle}
              </p>
            </div>

            {/* Structured Concept Body */}
            <div className="py-4 sm:py-6 space-y-4 my-auto">
              {conceptModalArtwork.fullConcept ? (
                conceptModalArtwork.fullConcept.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-primary pl-3.5 space-y-1">
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
              <span className="text-white/50 uppercase font-bold text-[10px]">{isEn ? "MATERIALS & TECHNIQUE" : "МАТЕРИАЛЫ И ТЕХНИКА"}</span>
              <span className="font-sans font-semibold text-primary">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 sm:p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[95vh] max-w-5xl w-full border-2 border-white/20 bg-surface p-3 sm:p-6 shadow-2xl rounded-none flex flex-col"
          >
            {/* Top Navigation Bar with Back to Wall Button */}
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10">
              <button
                onClick={() => setLightboxState(null)}
                className="flex items-center gap-2 px-3 py-1.5 bg-primary text-black hover:bg-white border-2 border-black font-montserrat font-black text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
              >
                <ArrowLeft className="w-4 h-4 stroke-[3]" />
                <span>{isEn ? "Back to the Wall" : "Назад к стене"}</span>
              </button>

              <button
                onClick={() => setLightboxState(null)}
                className="flex h-8 w-8 items-center justify-center border-2 border-white/20 bg-black text-white hover:bg-primary hover:text-black transition-colors cursor-pointer"
                aria-label={isEn ? "Close" : "Закрыть"}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Media Display Area */}
            <div className="relative max-h-[72vh] w-full flex items-center justify-center overflow-hidden bg-black/90">
              {lightboxState.item.type === 'video' ? (
                <video
                  src={lightboxState.item.src}
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
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
                  <span className="text-xs font-montserrat font-black uppercase tracking-widest text-primary">
                    {lightboxState.artwork.number} · {lightboxState.artwork.title}
                  </span>
                  {lightboxState.artwork.fullConcept && (
                    <button
                      onClick={() => {
                        const artwork = lightboxState.artwork;
                        setLightboxState(null);
                        setConceptModalArtwork(artwork);
                      }}
                      className="text-[10px] font-montserrat font-black uppercase text-black bg-primary px-2 py-0.5 border border-black hover:bg-white transition-colors cursor-pointer"
                    >
                      {isEn ? "READ CONCEPT" : "ЧИТАТЬ КОНЦЕПЦИЮ"}
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
              <div className="text-left sm:text-right min-w-0 sm:max-w-[320px]">
                <span className="text-[10px] font-montserrat font-bold uppercase text-white/50 block">
                  {isEn ? "MATERIALS" : "МАТЕРИАЛЫ"}
                </span>
                <span className="text-xs font-sans text-white/80 font-medium break-words">
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
