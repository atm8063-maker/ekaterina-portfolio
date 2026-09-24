'use client';

import React, { useState, useRef } from 'react';
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

// 2 Top Hero Videos (featured at the top of the section)
const heroVideos: TeachingMedia[] = [
  {
    type: 'video',
    src: '/art-muza/video_107@04-08-2026_22-24-05.mp4',
    category: 'forum',
    title: '1-й Всероссийский форум смолянистов',
    subtitle: 'Лекция и мастер-класс в музее Артмуза (СПб)',
    badge: 'ВИДЕО • АРТМУЗА',
    location: 'Музей Артмуза · СПб',
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
];

// Single-row Carousel Media (No duplicate top videos, exact titles per user instructions)
const carouselMedia: TeachingMedia[] = [
  // 1-10: Exact ordered sequence from user
  {
    type: 'image',
    src: '/art-muza/photo_3263@04-08-2026_21-08-40.jpg',
    category: 'forum',
    title: 'Лекция в Артмузе',
    subtitle: 'Выступление перед сообществом смолянистов',
    badge: 'ЛЕКЦИЯ',
    location: 'Музей Артмуза · СПб',
  },
  {
    type: 'image',
    src: '/art-muza/photo_1_2026-08-04_22-38-17.jpg',
    category: 'workshops',
    title: 'МК по акрилу в Черногории',
    subtitle: 'Интерьерная живопись и смешанные техники',
    badge: 'МК ПО АКРИЛУ',
    location: 'Черногория',
  },
  {
    type: 'image',
    src: '/lessons/студия/photo_3053@31-07-2026_19-04-11.jpg',
    category: 'workshops',
    title: 'Творческая мастерская',
    subtitle: 'Пространство для практики и творчества',
    badge: 'МАСТЕРСКАЯ',
    location: 'Студия',
  },
  {
    type: 'image',
    src: '/art-muza/photo_2026-02-19_01-56-13.jpg',
    category: 'workshops',
    title: 'МК по созданию моря из эпоксидной смолы в Турции',
    subtitle: 'Формирование морских волн и глубин',
    badge: 'МОРЕ ИЗ СМОЛЫ',
    location: 'Турция',
  },
  {
    type: 'image',
    src: '/art-muza/photo_2026-02-19_11-20-02 (2).jpg',
    category: 'workshops',
    title: 'МК в Турции',
    subtitle: 'Практический воркшоп по эпоксидной смоле',
    badge: 'МК В ТУРЦИИ',
    location: 'Турция',
  },
  {
    type: 'image',
    src: '/art-muza/photo_2026-02-19_11-20-02 (3).jpg',
    category: 'workshops',
    title: 'Выездные воркшопы за рубежом',
    subtitle: 'Готовые картины и результаты участников',
    badge: 'ВЫЕЗДНОЙ МК',
    location: 'Офлайн воркшоп',
  },
  {
    type: 'image',
    src: '/art-muza/photo_3262@04-08-2026_21-08-10.jpg',
    category: 'forum',
    title: 'Участники форума смолянистов в Артмузе',
    subtitle: 'Профессиональное сообщество и спикеры',
    badge: 'УЧАСТНИКИ',
    location: 'Музей Артмуза · СПб',
  },
  {
    type: 'image',
    src: '/lessons/студия/photo_3052@31-07-2026_19-04-11.jpg',
    category: 'workshops',
    title: 'Творческая мастерская',
    subtitle: 'Оснащение и материалы для мастер-классов',
    badge: 'МАСТЕРСКАЯ',
    location: 'Студия',
  },
  {
    type: 'image',
    src: '/art-muza/photo_10_2026-08-04_22-38-17.jpg',
    category: 'workshops',
    title: 'Воркшоп в Черногории',
    subtitle: 'Творческая практика и работа с учениками',
    badge: 'ВОРКШОП',
    location: 'Черногория',
  },
  {
    type: 'image',
    src: '/lessons/студия/photo_3160@04-08-2026_20-56-52.jpg',
    category: 'workshops',
    title: 'Студия в Тамбове',
    subtitle: 'Интерьер арт-пространства и студии',
    badge: 'СТУДИЯ',
    location: 'Тамбов',
  },
  {
    type: 'image',
    src: '/lessons/photo_3035@31-07-2026_18-44-54.jpg',
    category: 'workshops',
    title: 'Художественный МК в Черногории',
    subtitle: 'Создание интерьерных арт-работ',
    badge: 'ХУДОЖЕСТВЕННЫЙ МК',
    location: 'Черногория',
  },

  // Additional Artmuza & Online items
  {
    type: 'image',
    src: '/art-muza/photo_3254@04-08-2026_21-08-10.jpg',
    category: 'forum',
    title: '1-й Всероссийский форум смолянистов',
    subtitle: 'Выступление с авторской лекцией перед сообществом',
    badge: 'СПИКЕР',
    location: 'Музей Артмуза · СПб',
  },
  {
    type: 'image',
    src: '/art-muza/photo_3255@04-08-2026_21-08-10.jpg',
    category: 'forum',
    title: 'Мастер-класс: тонкости работы со смолой',
    subtitle: 'Демонстрация послойной заливки и пигментов',
    badge: 'МАСТЕР-КЛАСС',
    location: 'Музей Артмуза',
  },
  {
    type: 'image',
    src: '/art-muza/photo_3256@04-08-2026_21-08-10.jpg',
    category: 'forum',
    title: 'Демонстрация техники на сцене',
    subtitle: 'Живая работа на глазах у сотен участников',
    badge: 'ДЕМОНСТРАЦИЯ',
    location: 'Артмуза',
  },
  {
    type: 'image',
    src: '/art-muza/photo_3257@04-08-2026_21-08-10.jpg',
    category: 'forum',
    title: 'Процесс создания среза камня',
    subtitle: 'Послойная заливка смолы и пигментов',
    badge: 'ПРОЦЕСС',
    location: 'Артмуза · СПб',
  },
  {
    type: 'image',
    src: '/art-muza/photo_3259@04-08-2026_21-08-10.jpg',
    category: 'forum',
    title: 'Практика и секреты многослойности',
    subtitle: 'Разбор ошибок и нюансов полимеризации',
    badge: 'ПРАКТИКА',
    location: 'Музей Артмуза',
  },
  {
    type: 'image',
    src: '/art-muza/photo_3260@04-08-2026_21-08-10.jpg',
    category: 'forum',
    title: 'Воркшоп в музее современного искусства',
    subtitle: 'Общение с участниками и ответы на вопросы',
    badge: 'ВОРКШОП',
    location: 'Музей Артмуза',
  },
  {
    type: 'image',
    src: '/art-muza/photo_3261@04-08-2026_21-08-10.jpg',
    category: 'forum',
    title: 'Спикеры в Артмузе',
    subtitle: 'Участники и спикеры 1-го Всероссийского форума',
    badge: 'СПИКЕРЫ',
    location: 'Музей Артмуза',
  },
  {
    type: 'video',
    src: '/art-muza/video_108@04-08-2026_22-24-09.mp4',
    category: 'forum',
    title: 'Видео мастер-класса в Артмузе',
    subtitle: 'Практическая демонстрация авторской техники со сцены',
    badge: 'ВИДЕО • АРТМУЗА',
    location: 'Музей Артмуза · СПб',
  },
  {
    type: 'image',
    src: '/lessons/photo_3011@31-07-2026_18-44-16.jpg',
    category: 'online',
    title: 'Прямые эфиры и вебинары',
    subtitle: 'Охваты в тысячи зрителей и прямая обратная связь',
    badge: 'ЭФИРЫ',
    location: 'Тысячи участников',
  },
  {
    type: 'image',
    src: '/lessons/photo_3067@31-07-2026_19-44-02.jpg',
    category: 'online',
    title: 'Кураторство в международной онлайн-школе',
    subtitle: 'Поддержка студентов и разбор домашних заданий',
    badge: 'КУРАТОРСТВО',
    location: 'Онлайн-платформа',
  },
];

export function ArtTeaching() {
  const [activeTab, setActiveTab] = useState<TeachingCategory>('all');
  const [lightboxItem, setLightboxItem] = useState<TeachingMedia | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const filteredCarousel = carouselMedia.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const scrollByAmount = (offset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = carouselRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeft.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.classList.add('cursor-grabbing');
    el.classList.remove('cursor-grab');
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = carouselRef.current;
    if (!el || !isDragging.current) return;
    el.scrollLeft = scrollLeft.current - (e.clientX - startX.current);
  };

  const endDrag = () => {
    isDragging.current = false;
    const el = carouselRef.current;
    el?.classList.remove('cursor-grabbing');
    el?.classList.add('cursor-grab');
  };

  return (
    <section id="art-teaching" className="relative bg-[#111111] py-20 sm:py-24 overflow-hidden scroll-mt-20">
      {/* Clean Dark Paper Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.png" 
          alt="Paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
        />
      </div>

      {/* Top & bottom gradient blend fades */}
      <div className="absolute top-0 left-0 w-full h-24 lg:h-36 bg-gradient-to-b from-[#111111] via-[#111111]/60 to-transparent z-[15] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-36 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent z-[15] pointer-events-none" />

      {/* Background cyan glow */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#14F1D9]/5 rounded-none blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-20">
        {/* Main Grid: Info + Key Metrics + 2 Top Hero Videos */}
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
              Выступала с авторской лекцией и проводила живой мастер-класс на 1-м форуме смолянистов в музее современного искусства <strong className="text-white font-semibold">Артмуза</strong> (Санкт-Петербург).
            </p>
            <p>
              Проводила масштабные прямые эфиры по колористике и физике смолы с охватом в <strong className="text-[#14F1D9] font-semibold">несколько тысяч человек</strong>, организовывала студийные и выездные воркшопы в России, Турции и Черногории, а также курировала студентов в международной онлайн-школе.
            </p>
          </div>

          {/* Feature Badges */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-4 bg-[#1A1A1A] border border-white/10">
              <div className="flex items-center gap-2 text-[#14F1D9] mb-1">
                <Award className="w-4 h-4" />
                <span className="text-xs font-montserrat font-bold uppercase">Музей Артмуза (СПб)</span>
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
              <p className="text-xs text-white/60 font-inter">Кураторство студентов в международной онлайн-школе</p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Featured Dual Videos (Artmuza video + Montenegro video in vertical 9:16) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Main Video 1: Artmuza (Vertical) */}
          <div
            onClick={() => setLightboxItem(heroVideos[0])}
            className="relative aspect-[9/16] w-full max-h-[520px] rounded-none overflow-hidden bg-[#1A1A1A] border border-white/15 hover:border-[#14F1D9] transition-all group cursor-pointer"
          >
            <video
              src={heroVideos[0].src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />
            
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-black/80 border border-[#14F1D9] text-[#14F1D9] text-[10px] font-inter font-bold uppercase tracking-wider">
              <Play className="w-2.5 h-2.5 fill-[#14F1D9]" />
              Видео • Артмуза
            </div>

            <div className="absolute bottom-3 left-3 right-3 z-10">
              <span className="text-[10px] font-inter font-bold uppercase tracking-wider text-[#14F1D9]">
                {heroVideos[0].location}
              </span>
              <h3 className="font-montserrat text-sm sm:text-base font-bold text-white uppercase mt-0.5 leading-snug">
                {heroVideos[0].title}
              </h3>
              <p className="text-xs text-white/70 font-inter mt-0.5">
                {heroVideos[0].subtitle}
              </p>
            </div>
          </div>

          {/* Main Video 2: Montenegro Workshop (Vertical) */}
          <div
            onClick={() => setLightboxItem(heroVideos[1])}
            className="relative aspect-[9/16] w-full max-h-[520px] rounded-none overflow-hidden bg-[#1A1A1A] border border-white/15 hover:border-[#14F1D9] transition-all group cursor-pointer"
          >
            <video
              src={heroVideos[1].src}
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
                {heroVideos[1].location}
              </span>
              <h3 className="font-montserrat text-sm sm:text-base font-bold text-white uppercase mt-0.5 leading-snug">
                {heroVideos[1].title}
              </h3>
              <p className="text-xs text-white/70 font-inter mt-0.5">
                {heroVideos[1].subtitle}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Single-Row Photo Carousel Header & Controls */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div>
            <h3 className="text-sm sm:text-base font-montserrat font-bold uppercase tracking-wider text-white">
              Фотоархив: воркшопы <span className="text-[#14F1D9]">&</span> мастер-классы
            </h3>
            <p className="text-xs text-white/50 font-inter mt-0.5">
              Листай карусель свайпом или стрелками
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/15 rounded-full text-[11px] font-mono font-bold tracking-wider text-[#14F1D9] uppercase shadow-md">
            <span>←</span> Листайте <span>→</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1 text-xs font-inter uppercase tracking-wider font-bold transition-all rounded-none ${
                activeTab === 'all'
                  ? 'bg-[#14F1D9] text-black border border-[#14F1D9]'
                  : 'bg-[#1A1A1A] text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              Все ({carouselMedia.length})
            </button>
            <button
              onClick={() => setActiveTab('forum')}
              className={`px-3 py-1 text-xs font-inter uppercase tracking-wider font-bold transition-all rounded-none ${
                activeTab === 'forum'
                  ? 'bg-[#14F1D9] text-black border border-[#14F1D9]'
                  : 'bg-[#1A1A1A] text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              Артмуза ({carouselMedia.filter((m) => m.category === 'forum').length})
            </button>
            <button
              onClick={() => setActiveTab('workshops')}
              className={`px-3 py-1 text-xs font-inter uppercase tracking-wider font-bold transition-all rounded-none ${
                activeTab === 'workshops'
                  ? 'bg-[#14F1D9] text-black border border-[#14F1D9]'
                  : 'bg-[#1A1A1A] text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              Офлайн МК ({carouselMedia.filter((m) => m.category === 'workshops').length})
            </button>
            <button
              onClick={() => setActiveTab('online')}
              className={`px-3 py-1 text-xs font-inter uppercase tracking-wider font-bold transition-all rounded-none ${
                activeTab === 'online'
                  ? 'bg-[#14F1D9] text-black border border-[#14F1D9]'
                  : 'bg-[#1A1A1A] text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              Онлайн ({carouselMedia.filter((m) => m.category === 'online').length})
            </button>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-1.5 border-l border-white/10 pl-3">
            <button
              onClick={() => scrollByAmount(-340)}
              className="flex h-8 w-8 items-center justify-center border border-white/15 bg-[#1A1A1A] text-white hover:border-[#14F1D9] hover:text-[#14F1D9] transition-all rounded-none"
              aria-label="Назад"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollByAmount(340)}
              className="flex h-8 w-8 items-center justify-center border border-white/15 bg-[#1A1A1A] text-white hover:border-[#14F1D9] hover:text-[#14F1D9] transition-all rounded-none"
              aria-label="Вперёд"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Single-Row Carousel (No duplicated top videos, compact height, drag & scroll) */}
      <div
        ref={carouselRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onDragStart={(e) => e.preventDefault()}
        className="hide-scrollbar flex cursor-grab select-none overflow-x-auto snap-x snap-mandatory gap-4 pb-2"
      >
        {filteredCarousel.map((item, idx) => (
          <article
            key={item.src + idx}
            onClick={() => setLightboxItem(item)}
            className="group shrink-0 snap-start relative h-[210px] w-[280px] sm:w-[320px] overflow-hidden rounded-none border border-white/10 bg-[#1A1A1A] hover:border-[#14F1D9] transition-all cursor-pointer shadow-lg"
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
                <div className="absolute top-2.5 right-2.5 p-1 bg-black/80 border border-[#14F1D9] text-[#14F1D9]">
                  <Play className="w-2.5 h-2.5 fill-[#14F1D9]" />
                </div>
              </div>
            ) : (
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="320px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )}

            {/* Gradient & Meta Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3.5">
              <span className="text-[9px] font-inter font-bold uppercase tracking-wider text-[#14F1D9]">
                {item.badge}
              </span>
              <h4 className="font-montserrat text-xs sm:text-sm font-bold text-white uppercase line-clamp-1 mt-0.5 group-hover:text-[#14F1D9] transition-colors">
                {item.title}
              </h4>
              {item.location && (
                <p className="text-[10px] text-white/50 font-inter line-clamp-1 mt-0.5">
                  {item.location}
                </p>
              )}
            </div>
          </article>
        ))}
        <div className="w-2 shrink-0" />
      </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] max-w-5xl w-full border border-white/20 bg-[#1A1A1A] p-4 sm:p-6 shadow-2xl rounded-none flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute -top-4 -right-4 z-20 flex h-10 w-10 items-center justify-center border border-white/20 bg-black text-white hover:bg-[#14F1D9] hover:text-black transition-colors shadow-lg"
              aria-label="Закрыть"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Media Area */}
            <div className="relative max-h-[72vh] w-full flex items-center justify-center overflow-hidden bg-black/80">
              {lightboxItem.type === 'video' ? (
                <video
                  src={lightboxItem.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              ) : (
                <Image
                  src={lightboxItem.src}
                  alt={lightboxItem.title}
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
                  {lightboxItem.badge} {lightboxItem.location ? `· ${lightboxItem.location}` : ''}
                </span>
                <h3 className="font-montserrat text-base font-bold uppercase text-white sm:text-lg">
                  {lightboxItem.title}
                </h3>
                <p className="text-sm text-white/70 font-inter mt-0.5">
                  {lightboxItem.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
