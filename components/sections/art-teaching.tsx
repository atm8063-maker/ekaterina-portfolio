'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export function ArtTeaching() {
  const [activeMedia, setActiveMedia] = useState<number>(0);

  const mediaItems = [
    {
      type: 'video',
      src: '/art-muza/video_107@04-08-2026_22-24-05.mp4',
      title: 'Мастер-класс в АртМузе',
      subtitle: 'Живой процесс и демонстрация',
      badge: 'LIVE MOTION'
    },
    {
      type: 'image',
      src: '/art-muza/photo_3254@04-08-2026_21-08-10.jpg',
      title: '1-й Форум смолянистов',
      subtitle: 'Выступление с авторской лекцией в музее АртМуза',
      badge: 'СПИКЕР'
    },
    {
      type: 'image',
      src: '/art-muza/photo_3259@04-08-2026_21-08-10.jpg',
      title: 'Практика со смолой',
      subtitle: 'Секреты заливки и пигментов',
      badge: 'ПРАКТИКА'
    },
    {
      type: 'image',
      src: '/art-muza/photo_3257@04-08-2026_21-08-10.jpg',
      title: 'Аудитория и участники',
      subtitle: 'Творческое комьюнити',
      badge: 'ФОРУМ'
    },
    {
      type: 'image',
      src: '/art-muza/photo_3262@04-08-2026_21-08-10.jpg',
      title: 'Черногория & Турция',
      subtitle: 'Оффлайн мастер-классы за рубежом',
      badge: 'OFFLINE MK'
    }
  ];

  return (
    <section id="art-teaching" className="container mx-auto px-6 py-24 sm:py-28 border-b border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#14F1D9]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-[#14F1D9] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#14F1D9] font-bold">
                Обучение & Спикерство
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-montserrat leading-tight">
              Музей АртМуза, <br />
              <span className="text-[#14F1D9]">Лекции</span> & МК
            </h2>
          </div>

          <div className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed font-inter">
            <p>
              Выступала с лекцией и проводила авторский мастер-класс на 1-м форуме смолянистов в музее современного искусства <strong className="text-white font-semibold">АртМуза</strong> (Санкт-Петербург).
            </p>
            <p>
              Проводила масштабные прямые эфиры по тонкостям работы со смолой с охватом в <strong className="text-[#14F1D9] font-semibold">несколько тысяч человек</strong>, а также организовывала оффлайн творческие мастер-классы в Турции и Черногории. Кураторство в онлайн-школе.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {[
              '1-й Форум смолянистов',
              'Музей АртМуза (СПб)',
              'Турция & Черногория',
              'Куратор онлайн-школы'
            ].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs text-white/80 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#14F1D9] text-[#14F1D9] hover:bg-[#14F1D9] hover:text-black transition-all rounded-full font-bold text-sm uppercase tracking-wider group"
            >
              <span>Смотреть уроки</span>
              <span className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Dynamic Bento Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto sm:h-[480px]">
            
            {/* Left Big Card: Featured Video */}
            <div className="relative h-[260px] sm:h-full rounded-2xl overflow-hidden bg-surface border border-white/10 group hover:border-[#14F1D9]/50 transition-all">
              <video
                src="/art-muza/video_107@04-08-2026_22-24-05.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#14F1D9]/40 text-[#14F1D9] text-[10px] font-mono font-bold uppercase tracking-wider">
                  ▶ МК В АРТМУЗЕ
                </span>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <p className="text-xs uppercase tracking-widest font-bold text-[#14F1D9]">Мастер-класс • АртМуза</p>
                <p className="text-white text-sm font-medium mt-0.5">Демонстрация авторской техники</p>
              </div>
            </div>

            {/* Right Stack: 2 Photo Cards */}
            <div className="flex flex-col gap-4 h-full">
              
              {/* Top Photo */}
              <div className="relative h-[200px] sm:h-[232px] rounded-2xl overflow-hidden bg-surface border border-white/10 group hover:border-[#14F1D9]/50 transition-all cursor-pointer">
                <Image
                  src="/art-muza/photo_3254@04-08-2026_21-08-10.jpg"
                  alt="Лекция в музее АртМуза"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/90 text-[9px] font-mono uppercase tracking-wider">
                    СПИКЕР
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <p className="text-xs uppercase tracking-widest font-bold text-[#14F1D9]">Лекция на форуме</p>
                  <p className="text-white/80 text-xs mt-0.5">Музей современного искусства</p>
                </div>
              </div>

              {/* Bottom Photo */}
              <div className="relative h-[200px] sm:h-[232px] rounded-2xl overflow-hidden bg-surface border border-white/10 group hover:border-[#14F1D9]/50 transition-all cursor-pointer">
                <Image
                  src="/art-muza/photo_3259@04-08-2026_21-08-10.jpg"
                  alt="Практика со смолой"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/90 text-[9px] font-mono uppercase tracking-wider">
                    ПРАКТИКА
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <p className="text-xs uppercase tracking-widest font-bold text-[#14F1D9]">Тонкости работы со смолой</p>
                  <p className="text-white/80 text-xs mt-0.5">Практический воркшоп</p>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Thumbnails Strip (Additional photos from archive) */}
          <div className="grid grid-cols-4 gap-3 pt-1">
            {[
              { src: '/art-muza/photo_3257@04-08-2026_21-08-10.jpg', label: 'Аудитория' },
              { src: '/art-muza/photo_3261@04-08-2026_21-08-10.jpg', label: 'Детали' },
              { src: '/art-muza/photo_3262@04-08-2026_21-08-10.jpg', label: 'Офлайн МК' },
              { src: '/art-muza/photo_3263@04-08-2026_21-08-40.jpg', label: 'Материалы' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative h-20 sm:h-24 rounded-xl overflow-hidden border border-white/10 bg-surface group hover:border-[#14F1D9]/50 transition-all cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:filter-none"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-1.5 left-2 z-10">
                  <span className="text-[10px] font-mono text-white/90 font-bold drop-shadow">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default ArtTeaching;
