'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, X, ChevronLeft, ChevronRight, Users, GraduationCap, Video, Award } from 'lucide-react';

type TeachingCategory = 'all' | 'forum' | 'workshops' | 'online';

type TeachingMedia = {
  type: 'image' | 'video';
  src: string;
  category: 'forum' | 'workshops' | 'online';
  title: string;
  subtitle: string;
  badge: string;
  location?: string;
};

const mediaList: TeachingMedia[] = [
  // Top Featured Videos (0 & 1)
  {
    type: 'video',
    src: '/art-muza/video_107@04-08-2026_22-24-05.mp4',
    category: 'forum',
    title: '1-й Всероссийский форум смолянистов',
    subtitle: 'Лекция и мастер-класс в музее АртМуза (СПб)',
    badge: 'ВИДЕО • АРТМУЗА',
    location: 'Музей АртМуза · СПб',
  },
  {
    type: 'video',
    src: '/lessons/video_49@03-08-2026_23-50-53.mp4',
    category: 'workshops',
    title: 'Мастер-классы по эпоксидной смоле',
    subtitle: 'Офлайн воркшопы и обучение в Черногории',
    badge: 'ВИДЕО • ЧЕРНОГОРИЯ',
    location: 'Черногория',
  },

  // Музей АртМуза & Мастер-классы форума
  {
    type: 'video',
    src: '/art-muza/video_108@04-08-2026_22-24-09.mp4',
    category: 'forum',
    title: 'Видео мастер-класса в АртМузе',
    subtitle: 'Практическая демонстрация авторской техники со сцены',
    badge: 'ВИДЕО • АРТМУЗА',
    location: 'Музей АртМуза · СПб',
  },
  {
    type: 'image',
    src: '/art-muza/photo_3254@04-08-2026_21-08-10.jpg',
    category: 'forum',
    title: '1-й Всероссийский форум смолянистов',
    subtitle: 'Выступление с авторской лекцией перед сообществом',
    badge: 'СПИКЕР',
    location: 'Музей АртМуза · СПб',
  },
  {
    type: 'image',
    src: '/art-muza/photo_3255@04-08-2026_21-08-10.jpg',
    category: 'forum',
    title: 'Мастер-класс: тонкости работы со смолой',
    subtitle: 'Демонстрация послойной заливки и пигментов',
    badge: 'МАСТЕР-КЛАСС',
    location: 'Музей АртМуза',
  },
  {
    type: 'image',
    src: '/art-muza/photo_3256@04-08-2026_21-08-10.jpg',
    category: 'forum',
    title: 'Сценический процесс и постановка техники',
    subtitle: 'Живая работа на глазах у сотен участников',
    badge: 'ДЕМОНСТРАЦИЯ',
    location: 'АртМуза',
  },
  {
    type: 'image',
    src: '/art-muza/photo_3257@04-08-2026_21-08-10.jpg',
    category: 'forum',
    title: 'Аудитория и участники форума',
    subtitle: 'Профессиональное комьюнити художников-смолянистов',
    badge: 'КОМЬЮНИТИ',
    location: 'Санкт-Петербург',
  },
  {
    type: 'image',
    src: '/art-muza/photo_3259@04-08-2026_21-08-10.jpg',
    category: 'forum',
    title: 'Практика и секреты многослойности',
    subtitle: 'Разбор ошибок и нюансов полимеризации',
    badge: 'ПРАКТИКА',
    location: 'Музей АртМуза',
  },
  {
    type: 'image',
    src: '/art-muza/photo_3260@04-08-2026_21-08-10.jpg',
    category: 'forum',
    title: 'Воркшоп в музее современного искусства',
    subtitle: 'Общение с участниками и ответы на вопросы',
    badge: 'ВОРКШОП',
    location: 'Музей АртМуза',
  },
  {
    type: 'image',
    src: '/art-muza/photo_3261@04-08-2026_21-08-10.jpg',
    category: 'forum',
    title: 'Арт-материалы и подготовка',
    subtitle: 'Колористическая палитра и красители',
    badge: 'МАТЕРИАЛЫ',
    location: 'Форум смолянистов',
  },
  {
    type: 'image',
    src: '/art-muza/photo_3263@04-08-2026_21-08-40.jpg',
    category: 'forum',
    title: 'Инструменты и оснащение рабочего места',
    subtitle: 'Профессиональная экипировка и средства защиты',
    badge: 'ЭКИПИРОВКА',
    location: 'АртМуза',
  },
  {
    type: 'image',
    src: '/art-muza/photo_1_2026-08-04_22-38-17.jpg',
    category: 'forum',
    title: 'Практический мастер-класс на форуме',
    subtitle: 'Пошаговое создание арт-объекта',
    badge: 'МАСТЕР-КЛАСС',
    location: 'Форум смолянистов',
  },
  {
    type: 'image',
    src: '/art-muza/photo_10_2026-08-04_22-38-17.jpg',
    category: 'forum',
    title: 'Работа с пигментами и эффектами',
    subtitle: 'Формирование морских волн в реальном времени',
    badge: 'ПРАКТИКА',
    location: 'АртМуза',
  },
  {
    type: 'image',
    src: '/art-muza/photo_2026-02-19_01-56-13.jpg',
    category: 'forum',
    title: 'Мастер-класс: взаимодействие с залом',
    subtitle: 'Разбор нюансов и авторских фишек',
    badge: 'ВОРКШОП',
    location: 'Музей АртМуза',
  },
  {
    type: 'image',
    src: '/art-muza/photo_2026-02-19_11-20-02 (2).jpg',
    category: 'forum',
    title: 'Участники воркшопа на форуме',
    subtitle: 'Художники из десятков городов России',
    badge: 'УЧАСТНИКИ',
    location: 'АртМуза',
  },
  {
    type: 'image',
    src: '/art-muza/photo_2026-02-19_11-20-02 (3).jpg',
    category: 'forum',
    title: 'Результаты практической сессии',
    subtitle: 'Готовые демонстрационные планшеты',
    badge: 'РЕЗУЛЬТАТ',
    location: 'Музей АртМуза',
  },

  // Студийные и Офлайн Мастер-классы (РФ, Черногория, Турция)
  {
    type: 'image',
    src: '/art-muza/photo_3262@04-08-2026_21-08-10.jpg',
    category: 'workshops',
    title: 'Выездные воркшопы за рубежом',
    subtitle: 'Офлайн мастер-классы в Турции и Черногории',
    badge: 'МЕЖДУНАРОДНЫЙ МК',
    location: 'Турция & Черногория',
  },
  {
    type: 'image',
    src: '/lessons/студия/photo_3052@31-07-2026_19-04-11.jpg',
    category: 'workshops',
    title: 'Студийный воркшоп с учениками',
    subtitle: 'Создание интерьерных картин и подносов',
    badge: 'СТУДИЯ',
    location: 'Творческая мастерская',
  },
  {
    type: 'image',
    src: '/lessons/студия/photo_3053@31-07-2026_19-04-11.jpg',
    category: 'workshops',
    title: 'Индивидуальный подход и постановка руки',
    subtitle: 'Обучение технике формирования морской пены',
    badge: 'ПРАКТИКА',
    location: 'Студия',
  },
  {
    type: 'image',
    src: '/lessons/студия/photo_3160@04-08-2026_20-56-52.jpg',
    category: 'workshops',
    title: 'Интерьерные арт-объекты студентов',
    subtitle: 'Часы, подстаканники и картины из смолы',
    badge: 'РЕЗУЛЬТАТ',
    location: 'Воркшоп',
  },
  {
    type: 'image',
    src: '/lessons/photo_2921@31-07-2026_17-46-03.jpg',
    category: 'workshops',
    title: 'Тонкости заливки и текстурной пасты',
    subtitle: 'Пошаговый разбор авторских приёмов',
    badge: 'МАСТЕР-КЛАСС',
    location: 'Офлайн обучение',
  },
  {
    type: 'image',
    src: '/lessons/photo_3035@31-07-2026_18-44-54.jpg',
    category: 'workshops',
    title: 'Финишные работы участников воркшопа',
    subtitle: '100% готовность изделий с первого занятия',
    badge: 'РАБОТЫ УЧЕНИКОВ',
    location: 'Студия',
  },

  // Онлайн-школа & Видеоуроки
  {
    type: 'image',
    src: '/lessons/photo_3011@31-07-2026_18-44-16.jpg',
    category: 'online',
    title: 'Прямые эфиры и вебинары',
    subtitle: 'Охваты в тысячи зрителей и прямая обратная связь',
    badge: 'ПРЯМЫЕ ЭФИРЫ',
    location: 'Тысячи участников',
  },
  {
    type: 'image',
    src: '/lessons/photo_3067@31-07-2026_19-44-02.jpg',
    category: 'online',
    title: 'Кураторство и проверка домашних заданий',
    subtitle: 'Поддержка студентов в процессе обучения',
    badge: 'КУРАТОРСТВО',
    location: 'Онлайн-платформа',
  },
];

export function ArtTeaching() {
  const [activeTab, setActiveTab] = useState<TeachingCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredMedia = mediaList.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const openLightbox = (item: TeachingMedia) => {
    const idx = filteredMedia.findIndex((m) => m.src === item.src);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  const nextLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredMedia.length);
  };

  const prevLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredMedia.length) % filteredMedia.length);
  };

  const activeLightboxItem = lightboxIndex !== null ? filteredMedia[lightboxIndex] : null;

  return (
    <section id="art-teaching" className="container mx-auto px-6 py-20 sm:py-24 border-b border-white/10 relative overflow-hidden scroll-mt-20">
      {/* Background cyan glow */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#14F1D9]/5 rounded-none blur-3xl pointer-events-none -z-10" />

      {/* Main Grid: Info + Key Metrics */}
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-14">
        
        {/* Left Column: Heading & Description */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat leading-tight">
              Обучение, Лекции <br />
              <span className="text-[#14F1D9]">&</span> Мастер-классы
            </h2>
          </div>

          <div className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed font-inter">
            <p>
              Выступала с авторской лекцией и проводила живой мастер-класс на 1-м форуме смолянистов в музее современного искусства <strong className="text-white font-semibold">АртМуза</strong> (Санкт-Петербург).
            </p>
            <p>
              Проводила масштабные прямые эфиры по колористике и физике смолы с охватом в <strong className="text-[#14F1D9] font-semibold">несколько тысяч человек</strong>, организовывала студийные и выездные воркшопы в России, Турции и Черногории, а также курировала студентов в онлайн-школе.
            </p>
          </div>

          {/* Feature Badges */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-4 bg-[#1A1A1A] border border-white/10">
              <div className="flex items-center gap-2 text-[#14F1D9] mb-1">
                <Award className="w-4 h-4" />
                <span className="text-xs font-montserrat font-bold uppercase">Музей АртМуза (СПб)</span>
              </div>
              <p className="text-xs text-white/60 font-inter">Спикер и ведущая МК на 1-м Всероссийском форуме</p>
            </div>

            <div className="p-4 bg-[#1A1A1A] border border-white/10">
              <div className="flex items-center gap-2 text-[#14F1D9] mb-1">
                <Users className="w-4 h-4" />
                <span className="text-xs font-montserrat font-bold uppercase">Офлайн Воркшопы</span>
              </div>
              <p className="text-xs text-white/60 font-inter">Студии в РФ, выездные классы в Турции и Черногории</p>
            </div>

            <div className="p-4 bg-[#1A1A1A] border border-white/10">
              <div className="flex items-center gap-2 text-[#14F1D9] mb-1">
                <Video className="w-4 h-4" />
                <span className="text-xs font-montserrat font-bold uppercase">Тысячи зрителей</span>
              </div>
              <p className="text-xs text-white/60 font-inter">Прямые трансляции, обучающие вебинары и туториалы</p>
            </div>

            <div className="p-4 bg-[#1A1A1A] border border-white/10">
              <div className="flex items-center gap-2 text-[#14F1D9] mb-1">
                <GraduationCap className="w-4 h-4" />
                <span className="text-xs font-montserrat font-bold uppercase">Онлайн-школа</span>
              </div>
              <p className="text-xs text-white/60 font-inter">Кураторство студентов и авторская методология</p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Featured Dual Videos (ArtMuza video + Tutorial video in vertical 9:16) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Main Video 1: ArtMuza (Vertical) */}
          <div
            onClick={() => openLightbox(mediaList[0])}
            className="relative aspect-[9/16] w-full max-h-[520px] rounded-none overflow-hidden bg-[#1A1A1A] border border-white/15 hover:border-[#14F1D9] transition-all group cursor-pointer"
          >
            <video
              src="/art-muza/video_107@04-08-2026_22-24-05.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />
            
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-black/80 border border-[#14F1D9] text-[#14F1D9] text-[10px] font-inter font-bold uppercase tracking-wider">
              <Play className="w-2.5 h-2.5 fill-[#14F1D9]" />
              Видео • АртМуза
            </div>

            <div className="absolute bottom-3 left-3 right-3 z-10">
              <span className="text-[10px] font-inter font-bold uppercase tracking-wider text-[#14F1D9]">
                Музей АртМуза · СПб
              </span>
              <h3 className="font-montserrat text-sm sm:text-base font-bold text-white uppercase mt-0.5 leading-snug">
                1-й Всероссийский форум смолянистов
              </h3>
              <p className="text-xs text-white/70 font-inter mt-0.5">
                Лекция и мастер-класс
              </p>
            </div>
          </div>

          {/* Main Video 2: Montenegro Workshop (Vertical) */}
          <div
            onClick={() => openLightbox(mediaList[1])}
            className="relative aspect-[9/16] w-full max-h-[520px] rounded-none overflow-hidden bg-[#1A1A1A] border border-white/15 hover:border-[#14F1D9] transition-all group cursor-pointer"
          >
            <video
              src="/lessons/video_49@03-08-2026_23-50-53.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />
            
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-black/80 border border-[#14F1D9] text-[#14F1D9] text-[10px] font-inter font-bold uppercase tracking-wider">
              <Play className="w-2.5 h-2.5 fill-[#14F1D9]" />
              Видео • Черногория
            </div>

            <div className="absolute bottom-3 left-3 right-3 z-10">
              <span className="text-[10px] font-inter font-bold uppercase tracking-wider text-[#14F1D9]">
                Офлайн воркшоп
              </span>
              <h3 className="font-montserrat text-sm sm:text-base font-bold text-white uppercase mt-0.5 leading-snug">
                Мастер-классы по эпоксидной смоле
              </h3>
              <p className="text-xs text-white/70 font-inter mt-0.5">
                Обучение в Черногории
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Filter Tabs for Media Gallery */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <h3 className="text-sm font-montserrat font-bold uppercase tracking-wider text-white">
          Медиа-галерея: процессы <span className="text-[#14F1D9]">&</span> воркшопы
        </h3>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 text-xs font-inter uppercase tracking-wider font-bold transition-all rounded-none ${
              activeTab === 'all'
                ? 'bg-[#14F1D9] text-black border border-[#14F1D9]'
                : 'bg-[#1A1A1A] text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            Все ({mediaList.length})
          </button>
          <button
            onClick={() => setActiveTab('forum')}
            className={`px-3.5 py-1.5 text-xs font-inter uppercase tracking-wider font-bold transition-all rounded-none ${
              activeTab === 'forum'
                ? 'bg-[#14F1D9] text-black border border-[#14F1D9]'
                : 'bg-[#1A1A1A] text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            Форум & МК АртМуза ({mediaList.filter((m) => m.category === 'forum').length})
          </button>
          <button
            onClick={() => setActiveTab('workshops')}
            className={`px-3.5 py-1.5 text-xs font-inter uppercase tracking-wider font-bold transition-all rounded-none ${
              activeTab === 'workshops'
                ? 'bg-[#14F1D9] text-black border border-[#14F1D9]'
                : 'bg-[#1A1A1A] text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            Студия & Офлайн МК ({mediaList.filter((m) => m.category === 'workshops').length})
          </button>
          <button
            onClick={() => setActiveTab('online')}
            className={`px-3.5 py-1.5 text-xs font-inter uppercase tracking-wider font-bold transition-all rounded-none ${
              activeTab === 'online'
                ? 'bg-[#14F1D9] text-black border border-[#14F1D9]'
                : 'bg-[#1A1A1A] text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            Онлайн-школа & Уроки ({mediaList.filter((m) => m.category === 'online').length})
          </button>
        </div>
      </div>

      {/* Gallery Grid (Responsive, Sharp Corners, Zero-Distortion) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {filteredMedia.map((item, idx) => (
          <div
            key={item.src + idx}
            onClick={() => openLightbox(item)}
            className="group relative h-[180px] sm:h-[200px] overflow-hidden rounded-none border border-white/10 bg-[#1A1A1A] hover:border-[#14F1D9] transition-all cursor-pointer"
          >
            {item.type === 'video' ? (
              <div className="relative w-full h-full bg-black">
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 p-1 bg-black/80 border border-[#14F1D9] text-[#14F1D9]">
                  <Play className="w-2.5 h-2.5 fill-[#14F1D9]" />
                </div>
              </div>
            ) : (
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )}

            {/* Gradient & Meta Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
              <span className="text-[9px] font-inter font-bold uppercase tracking-wider text-[#14F1D9]">
                {item.badge}
              </span>
              <h4 className="font-montserrat text-xs font-bold text-white uppercase line-clamp-1 mt-0.5">
                {item.title}
              </h4>
              {item.location && (
                <p className="text-[10px] text-white/50 font-inter line-clamp-1">
                  {item.location}
                </p>
              )}
            </div>
          </div>
        ))}
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
            className="relative max-h-[92vh] max-w-5xl w-full border border-white/20 bg-[#1A1A1A] p-4 sm:p-6 shadow-2xl rounded-none flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-4 -right-4 z-20 flex h-10 w-10 items-center justify-center border border-white/20 bg-black text-white hover:bg-[#14F1D9] hover:text-black transition-colors shadow-lg"
              aria-label="Закрыть"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev/Next arrows */}
            <button
              onClick={prevLightbox}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/80 text-white hover:bg-[#14F1D9] hover:text-black transition-colors"
              aria-label="Предыдущий"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextLightbox}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/80 text-white hover:bg-[#14F1D9] hover:text-black transition-colors"
              aria-label="Следующий"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Media Area */}
            <div className="relative max-h-[72vh] w-full flex items-center justify-center overflow-hidden bg-black/80">
              {activeLightboxItem.type === 'video' ? (
                <video
                  src={activeLightboxItem.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              ) : (
                <Image
                  src={activeLightboxItem.src}
                  alt={activeLightboxItem.title}
                  width={1400}
                  height={900}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              )}
            </div>

            {/* Bottom Bar */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10 pt-4">
              <div>
                <span className="text-[11px] font-inter font-bold uppercase tracking-widest text-[#14F1D9]">
                  {activeLightboxItem.badge} {activeLightboxItem.location ? `· ${activeLightboxItem.location}` : ''}
                </span>
                <h3 className="font-montserrat text-base font-bold uppercase text-white sm:text-lg">
                  {activeLightboxItem.title}
                </h3>
                <p className="text-sm text-white/70 font-inter mt-0.5">
                  {activeLightboxItem.subtitle}
                </p>
              </div>
              <span className="text-xs font-inter text-white/40 uppercase tracking-wider">
                {lightboxIndex !== null ? `${lightboxIndex + 1} / ${filteredMedia.length}` : ''}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
