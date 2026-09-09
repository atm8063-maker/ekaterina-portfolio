'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  doorsRealEstateData, 
  ColorScheme, 
  CompetitorBenchmark, 
  Persona, 
  CJMStep, 
  Hypothesis 
} from '@/lib/doors-real-estate-data';
import { 
  ArrowLeft, 
  ExternalLink, 
  Palette, 
  Search, 
  Users, 
  Compass, 
  Maximize2, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Smartphone, 
  Monitor, 
  ChevronRight,
  Eye,
  X
} from 'lucide-react';

export function DoorsRealEstateCase() {
  const { meta, metrics, schemes, competitors, personas, cjm, hypotheses, mockups } = doorsRealEstateData;

  const [activeTab, setActiveTab] = useState<'overview' | 'schemes' | 'research' | 'cjm' | 'portal' | 'system'>('overview');
  const [selectedSchemeId, setSelectedSchemeId] = useState<string>('original');
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; subtitle?: string } | null>(null);

  const selectedScheme = schemes.find(s => s.id === selectedSchemeId) || schemes[0];

  return (
    <div className="min-h-screen bg-[#111111] text-[#E0E0E0] selection:bg-[#27579A] selection:text-white">
      {/* Top Breadcrumb & Quick Bar */}
      <header className="sticky top-0 z-40 bg-[#111111]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link 
            href="/#cases" 
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Назад ко всем кейсам</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex text-xs px-2.5 py-1 rounded-full bg-[#27579A]/20 text-[#637FA7] border border-[#27579A]/40 font-montserrat font-semibold uppercase tracking-wider">
              {meta.client}
            </span>
            <span className="text-xs text-white/50">{meta.year}</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#16253b]/30 via-[#111111] to-[#111111]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#27579A]/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#637FA7] font-montserrat font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#27579A]" />
            {meta.category}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-montserrat text-white tracking-tight leading-[1.15] mb-6">
            DOORS REAL ESTATE
            <span className="block text-xl sm:text-2xl lg:text-3xl font-normal text-white/70 mt-2">
              Мультиколористическая дизайн-платформа агентства премиальной недвижимости
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-4xl font-sans leading-relaxed mb-10">
            {meta.summary}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m, idx) => (
              <div 
                key={idx} 
                className="bg-[#181818] border border-white/10 p-5 rounded-xl hover:border-[#27579A]/50 transition-all group"
              >
                <div className="text-2xl sm:text-3xl font-bold font-montserrat text-white group-hover:text-[#637FA7] transition-colors">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-white/90 uppercase tracking-wider font-montserrat mt-1">
                  {m.label}
                </div>
                <div className="text-[11px] text-white/50 mt-1 leading-snug">
                  {m.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 z-30 bg-[#111111]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar gap-1 py-3 text-xs sm:text-sm font-montserrat font-semibold">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === 'overview'
                  ? 'bg-[#27579A] text-white shadow-lg shadow-[#27579A]/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Обзор & 3D Мокап</span>
            </button>

            <button
              onClick={() => setActiveTab('schemes')}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === 'schemes'
                  ? 'bg-[#27579A] text-white shadow-lg shadow-[#27579A]/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>4 Цветовые схемы</span>
            </button>

            <button
              onClick={() => setActiveTab('portal')}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === 'portal'
                  ? 'bg-[#27579A] text-white shadow-lg shadow-[#27579A]/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Разбор Исходника (5909 px)</span>
            </button>

            <button
              onClick={() => setActiveTab('research')}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === 'research'
                  ? 'bg-[#27579A] text-white shadow-lg shadow-[#27579A]/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>UX Исследования</span>
            </button>

            <button
              onClick={() => setActiveTab('cjm')}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === 'cjm'
                  ? 'bg-[#27579A] text-white shadow-lg shadow-[#27579A]/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>CJM & Гипотезы</span>
            </button>

            <button
              onClick={() => setActiveTab('system')}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === 'system'
                  ? 'bg-[#27579A] text-white shadow-lg shadow-[#27579A]/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Дизайн-система</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* TAB 1: OVERVIEW & 3D IPHONE SHOWCASE */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            {/* 3D Photorealistic iPhone Showcase */}
            <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-montserrat font-bold text-[#637FA7] uppercase tracking-wider mb-2">
                    <Smartphone className="w-4 h-4" />
                    Apple iPhone 12 Pro • Retina 3D Showcase (2716 × 2037 px)
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-montserrat text-white">
                    Мобильный опыт агентства недвижимости премиум-класса
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedImage({
                    src: "/Кейсы/08-mockup-real-estate/figma_exports/05_iphone_mockup.png",
                    title: "iPhone 12 Pro 3D Showcase (2716 × 2037 px)",
                    subtitle: "Полноразмерный фотореалистичный 3D-рендер мобильного приложения и адаптивной витрины"
                  })}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-[#27579A] text-white text-xs font-montserrat font-semibold transition-all border border-white/10 hover:border-[#27579A]"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Открыть в высоком разрешении</span>
                </button>
              </div>

              {/* Mockup Interactive Frame */}
              <div 
                onClick={() => setSelectedImage({
                  src: "/Кейсы/08-mockup-real-estate/figma_exports/05_iphone_mockup.png",
                  title: "iPhone 12 Pro 3D Showcase (2716 × 2037 px)",
                  subtitle: "Полноразмерный фотореалистичный 3D-рендер мобильного приложения и адаптивной витрины"
                })}
                className="relative w-full aspect-[4/3] max-h-[680px] bg-gradient-to-b from-[#1f2d42]/30 via-black/60 to-black/90 rounded-xl overflow-hidden cursor-pointer group border border-white/10 hover:border-[#27579A]/60 transition-all flex items-center justify-center p-4"
              >
                <Image
                  src="/Кейсы/08-mockup-real-estate/figma_exports/05_iphone_mockup.png"
                  alt="Doors Real Estate iPhone 12 Pro 3D Showcase"
                  fill
                  className="object-contain p-2 sm:p-6 group-hover:scale-102 transition-transform duration-700"
                  priority
                />
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md text-[11px] text-white/70 border border-white/10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5 text-[#637FA7]" />
                  <span>Нажмите для зума (Retina 2.7K)</span>
                </div>
              </div>

              {/* Key UX highlights of mobile version */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-black/30 border border-white/5 p-4 rounded-xl">
                  <div className="text-sm font-bold font-montserrat text-white mb-1">
                    Инлайн смарт-фильтр
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Селектор Buy / Rent и быстрый выбор категории (Urban, Country, International) оптимизированы под управление одним пальцем.
                  </p>
                </div>
                <div className="bg-black/30 border border-white/5 p-4 rounded-xl">
                  <div className="text-sm font-bold font-montserrat text-white mb-1">
                    Поиск по ID в один тап
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Клиенты, получившие ссылку на конкретный лот в мессенджере, мгновенно открывают карточку без лишней навигации.
                  </p>
                </div>
                <div className="bg-black/30 border border-white/5 p-4 rounded-xl">
                  <div className="text-sm font-bold font-montserrat text-white mb-1">
                    Retina-галерея архитектуры
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Полноэкранные фото интерьеров и экспликации планировок с поддержкой pinch-to-zoom жестов.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick 4-Schemes Teaser */}
            <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-white">
                    4 Колористические схемы интерфейса
                  </h3>
                  <p className="text-xs text-white/60 font-sans mt-1">
                    Адаптивная цветовая теория для каждого направления бизнеса агентства Doors Real Estate
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('schemes')}
                  className="text-xs text-[#637FA7] hover:underline flex items-center gap-1 font-montserrat font-bold uppercase tracking-wider"
                >
                  <span>Подробный разбор схем</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {schemes.map((s) => (
                  <div 
                    key={s.id}
                    onClick={() => {
                      setSelectedSchemeId(s.id);
                      setActiveTab('schemes');
                    }}
                    className={`bg-black/40 border p-4 rounded-xl cursor-pointer transition-all hover:-translate-y-1 ${
                      s.id === 'original' 
                        ? 'border-[#27579A] ring-1 ring-[#27579A]/40' 
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-white/50">
                        {s.id === 'original' ? 'Вариант 1 (Основной)' : s.type}
                      </span>
                      <div 
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: s.accentColor }}
                      />
                    </div>
                    <div className="text-sm font-bold font-montserrat text-white mb-1">
                      {s.name}
                    </div>
                    <div className="text-xs text-white/60 mb-3">
                      {s.nameRu}
                    </div>
                    <div className="flex gap-1.5 mb-3">
                      {s.swatches.map((sw, sIdx) => (
                        <div 
                          key={sIdx}
                          className="h-4 flex-1 rounded-sm border border-white/10"
                          style={{ backgroundColor: sw.hex }}
                          title={`${sw.label} (${sw.hex})`}
                        />
                      ))}
                    </div>
                    <div className="text-[11px] text-white/50 line-clamp-2">
                      {s.targetMarket}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 4 COLOR SCHEMES & HARMONY THEORY */}
        {activeTab === 'schemes' && (
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-montserrat text-white mb-3">
                4 Цветовые дизайн-схемы & Колористическая теория
              </h2>
              <p className="text-sm text-white/70 max-w-3xl font-sans leading-relaxed">
                В проекте Doors Real Estate реализовано четыре адаптивных варианта колористики. Каждый вариант решает конкретную бизнес-задачу и адаптирован под психологию восприятия определенной аудитории покупателей. Для детального разбора основного интерфейса используется <strong>Вариант 1 («Исходник»)</strong>.
              </p>
            </div>

            {/* Scheme Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {schemes.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSchemeId(s.id)}
                  className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                    selectedSchemeId === s.id
                      ? 'bg-[#181818] border-white/40 shadow-xl'
                      : 'bg-black/30 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div 
                      className="w-3.5 h-3.5 rounded-full" 
                      style={{ backgroundColor: s.accentColor }} 
                    />
                    <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-white/60">
                      Схема {idx + 1} {s.id === 'original' && '★'}
                    </span>
                  </div>
                  <div className="text-sm font-bold font-montserrat text-white">
                    {s.name}
                  </div>
                  <div className="text-xs text-white/60 mt-0.5">
                    {s.nameRu}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Scheme Detail Panel */}
            <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-montserrat font-bold uppercase tracking-wider mb-3" style={{ backgroundColor: selectedScheme.badgeBg, color: selectedScheme.accentColor }}>
                    <Palette className="w-3.5 h-3.5" />
                    {selectedScheme.type}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-montserrat text-white">
                    {selectedScheme.name}
                  </h3>
                  <p className="text-sm text-white/70 max-w-2xl font-sans mt-2">
                    {selectedScheme.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedImage({
                    src: selectedScheme.imageSrc,
                    title: `${selectedScheme.name} — Полный макет 1366 × 5909 px`,
                    subtitle: selectedScheme.nameRu
                  })}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-[#27579A] text-white text-xs font-montserrat font-semibold transition-all border border-white/20 self-start"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Открыть весь макет (5909 px)</span>
                </button>
              </div>

              {/* Color Swatches Grid */}
              <div>
                <h4 className="text-xs font-montserrat font-bold uppercase tracking-widest text-white/50 mb-4">
                  Колористическая палитра & Роли в интерфейсе
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {selectedScheme.swatches.map((sw, idx) => (
                    <div key={idx} className="bg-black/40 border border-white/10 rounded-xl p-3">
                      <div 
                        className="h-14 rounded-lg border border-white/10 mb-2 shadow-inner"
                        style={{ backgroundColor: sw.hex }}
                      />
                      <div className="text-xs font-bold font-montserrat text-white">
                        {sw.hex}
                      </div>
                      <div className="text-[11px] text-white/80 font-medium">
                        {sw.label}
                      </div>
                      <div className="text-[10px] text-white/50 mt-0.5">
                        {sw.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Theory & Market Application */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/30 border border-white/5 p-5 rounded-xl">
                  <div className="text-xs font-montserrat font-bold text-[#637FA7] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Compass className="w-4 h-4" />
                    Теория цветовой гармонии
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                    {selectedScheme.harmonyTheory}
                  </p>
                </div>

                <div className="bg-black/30 border border-white/5 p-5 rounded-xl">
                  <div className="text-xs font-montserrat font-bold text-[#637FA7] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    Целевой сегмент рынка
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                    {selectedScheme.targetMarket}
                  </p>
                </div>
              </div>

              {/* Key Features List */}
              <div className="bg-black/20 border border-white/5 p-5 rounded-xl">
                <div className="text-xs font-montserrat font-bold uppercase tracking-wider text-white/70 mb-3">
                  Преимущества данной цветовой схемы:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedScheme.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-[#27579A] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Preview Window with scroll */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span className="font-montserrat font-medium">
                    Интерактивное превью макета (высота 5909 px, скроллируйте внутри окна):
                  </span>
                  <span className="text-[11px] text-white/40">1366 × 5909 px</span>
                </div>

                <div className="relative w-full h-[540px] bg-black/80 rounded-xl overflow-hidden border border-white/20 shadow-2xl">
                  {/* Fake Browser Top Bar */}
                  <div className="h-8 bg-[#1f1f1f] border-b border-white/10 px-4 flex items-center justify-between text-xs text-white/50">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="text-[11px] font-mono text-white/40">
                      doors-realestate.com/{selectedScheme.id}
                    </div>
                    <button
                      onClick={() => setSelectedImage({
                        src: selectedScheme.imageSrc,
                        title: `${selectedScheme.name} — 1366 × 5909 px`,
                        subtitle: selectedScheme.nameRu
                      })}
                      className="text-[11px] text-[#637FA7] hover:underline flex items-center gap-1"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>На весь экран</span>
                    </button>
                  </div>

                  {/* Scrollable Layout */}
                  <div className="overflow-y-auto h-[calc(540px-32px)] custom-scrollbar bg-[#0f0f0f]">
                    <div 
                      onClick={() => setSelectedImage({
                        src: selectedScheme.imageSrc,
                        title: `${selectedScheme.name} — 1366 × 5909 px`,
                        subtitle: selectedScheme.nameRu
                      })}
                      className="relative w-full cursor-zoom-in"
                      style={{ height: '3500px' }}
                    >
                      <Image
                        src={selectedScheme.imageSrc}
                        alt={selectedScheme.name}
                        fill
                        className="object-contain object-top"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PRIMARY SCHEME (ИСХОДНИК) DEEP DIVE */}
        {activeTab === 'portal' && (
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27579A]/20 text-[#637FA7] border border-[#27579A]/30 text-xs font-montserrat font-bold uppercase tracking-wider mb-3">
                <Monitor className="w-3.5 h-3.5" />
                Основной вариант для детального разбора
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-montserrat text-white mb-3">
                Анатомия портала Doors Real Estate («Исходник»)
              </h2>
              <p className="text-sm text-white/70 max-w-3xl font-sans leading-relaxed">
                Полноразмерный 1366-пиксельный десктопный портал, спроектированный для мгновенного снятия когнитивного напряжения состоятельного покупателя и конвертации интереса в согласование очного просмотра.
              </p>
            </div>

            {/* Step-by-Step Structural Breakdown of the 1st Scheme */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Section 1: Hero & Brand Motto */}
              <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 hover:border-[#27579A]/50 transition-all">
                <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-[#637FA7] uppercase tracking-wider mb-3">
                  <span className="w-5 h-5 rounded-full bg-[#27579A]/30 flex items-center justify-center text-white text-[10px]">1</span>
                  Hero Banner & Слоган бренда
                </div>
                <h3 className="text-lg font-bold font-montserrat text-white mb-2">
                  «We help to open doors»
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                  Главный экран встречает посетителя чистым слоганом и монументальной архитектурной фотографией на фоне. Название бренда <em>Doors</em> обыгрывается визуально: мы открываем двери в лучшие объекты города и мира.
                </p>
                <div className="bg-black/30 p-3 rounded-lg border border-white/5 text-[11px] text-white/60">
                  <strong>UX-решение:</strong> Никаких всплывающих окон, чат-ботов на пол-экрана и агрессивных плашек. Только воздух, свет и чистый статус агентства.
                </div>
              </div>

              {/* Section 2: Smart Filter Bar */}
              <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 hover:border-[#27579A]/50 transition-all">
                <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-[#637FA7] uppercase tracking-wider mb-3">
                  <span className="w-5 h-5 rounded-full bg-[#27579A]/30 flex items-center justify-center text-white text-[10px]">2</span>
                  Инлайн смарт-фильтр & Селектор Buy / Rent
                </div>
                <h3 className="text-lg font-bold font-montserrat text-white mb-2">
                  Мультипараметрический инлайн-бар
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                  Строка фильтрации вынесена на первый экран: быстрый выбор режима <code>Buy</code> / <code>Rent</code>, категории (<code>Urban Realty</code>, <code>country homes</code>, <code>international</code>, <code>commercial</code>), параметров площади и выделенного инпута <code>Search by ID</code>.
                </p>
                <div className="bg-black/30 p-3 rounded-lg border border-white/5 text-[11px] text-white/60">
                  <strong>Метрика:</strong> Время первичной фильтрации сократилось до <strong>38 секунд</strong> против 114 секунд у классифайдов.
                </div>
              </div>

              {/* Section 3: Urban Realty */}
              <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 hover:border-[#27579A]/50 transition-all">
                <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-[#637FA7] uppercase tracking-wider mb-3">
                  <span className="w-5 h-5 rounded-full bg-[#27579A]/30 flex items-center justify-center text-white text-[10px]">3</span>
                  Витрина Urban Realty
                </div>
                <h3 className="text-lg font-bold font-montserrat text-white mb-2">
                  Городская недвижимость премиум-класса
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                  Асимметричная журнальная сетка лотов с крупными фотографиями фасадов, видовыми террасами и продуманным описанием инфраструктуры (паркинг, консьерж, приватный сад).
                </p>
                <div className="bg-black/30 p-3 rounded-lg border border-white/5 text-[11px] text-white/60">
                  <strong>UX-решение:</strong> Карточка объекта показывает не только цену, но и ключевую ценность лота (высота потолков, отделка, вид).
                </div>
              </div>

              {/* Section 4: Country Homes & International */}
              <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 hover:border-[#27579A]/50 transition-all">
                <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-[#637FA7] uppercase tracking-wider mb-3">
                  <span className="w-5 h-5 rounded-full bg-[#27579A]/30 flex items-center justify-center text-white text-[10px]">4</span>
                  Загородные резиденции & Зарубежные лоты
                </div>
                <h3 className="text-lg font-bold font-montserrat text-white mb-2">
                  Country Homes & International Realty
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                  Специализированные разделы для покупателей загородных домов и курортных вилл с информацией об участках, водоемах, юридической чистоте и инвестиционной доходности в валюте.
                </p>
                <div className="bg-black/30 p-3 rounded-lg border border-white/5 text-[11px] text-white/60">
                  <strong>Результат:</strong> +28% рост кликов по зарубежным направлениям благодаря визуальному разделению блоков.
                </div>
              </div>

              {/* Section 5: Database Stats */}
              <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 hover:border-[#27579A]/50 transition-all">
                <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-[#637FA7] uppercase tracking-wider mb-3">
                  <span className="w-5 h-5 rounded-full bg-[#27579A]/30 flex items-center justify-center text-white text-[10px]">5</span>
                  Индикаторы масштаба & Экспертиза
                </div>
                <h3 className="text-lg font-bold font-montserrat text-white mb-2">
                  1700+ лотов в активной базе агентства
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                  Блок социальных доказательств и охвата: 1700+ городских лотов, 150+ загородных усадеб, международная сеть партнерских офисов и подтвержденный опыт закрытия сделок от 1 млн $.
                </p>
                <div className="bg-black/30 p-3 rounded-lg border border-white/5 text-[11px] text-white/60">
                  <strong>Доверие:</strong> Числа подтверждают статус агентства как ключевого игрока рынка без самовосхваления.
                </div>
              </div>

              {/* Section 6: Conversion Footer */}
              <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 hover:border-[#27579A]/50 transition-all">
                <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-[#637FA7] uppercase tracking-wider mb-3">
                  <span className="w-5 h-5 rounded-full bg-[#27579A]/30 flex items-center justify-center text-white text-[10px]">6</span>
                  Конверсионный футер & Прямой контакт
                </div>
                <h3 className="text-lg font-bold font-montserrat text-white mb-2">
                  «Our doors are always open for you»
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                  Завершающий эмоциональный акцент с кнопками прямого звонка и мессенджеров (WhatsApp, Telegram). Персональный брокер готов ответить на вопросы в течение 5 минут.
                </p>
                <div className="bg-black/30 p-3 rounded-lg border border-white/5 text-[11px] text-white/60">
                  <strong>Конверсия:</strong> +24.8% подтвержденных бронирований просмотров по сравнению со старой формой.
                </div>
              </div>
            </div>

            {/* Full Canvas Interactive Frame */}
            <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold font-montserrat text-white">
                    Полный холст Исходника (1366 × 5909 px)
                  </h3>
                  <p className="text-xs text-white/60 font-sans mt-0.5">
                    Кликните по макету, чтобы открыть полноразмерный файл в модальном просмотрщике
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImage({
                    src: "/Кейсы/08-mockup-real-estate/figma_exports/01_scheme_original.png",
                    title: "Doors Real Estate — Исходник (1366 × 5909 px)",
                    subtitle: "Полноразмерный презентационный холст десктопного портала"
                  })}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#27579A] text-white text-xs font-montserrat font-semibold transition-all hover:bg-[#1f4a86]"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Развернуть на весь экран</span>
                </button>
              </div>

              <div 
                onClick={() => setSelectedImage({
                  src: "/Кейсы/08-mockup-real-estate/figma_exports/01_scheme_original.png",
                  title: "Doors Real Estate — Исходник (1366 × 5909 px)",
                  subtitle: "Полноразмерный презентационный холст десктопного портала"
                })}
                className="relative w-full h-[600px] bg-black/60 rounded-xl overflow-hidden cursor-pointer group border border-white/10 hover:border-[#27579A]/60 transition-all"
              >
                <div className="overflow-y-auto h-full custom-scrollbar">
                  <div className="relative w-full" style={{ height: '4000px' }}>
                    <Image
                      src="/Кейсы/08-mockup-real-estate/figma_exports/01_scheme_original.png"
                      alt="Doors Real Estate Original Canvas"
                      fill
                      className="object-contain object-top group-hover:scale-101 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md text-[11px] text-white/70 border border-white/10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <Eye className="w-3.5 h-3.5 text-[#637FA7]" />
                  <span>Нажмите для полноэкранного просмотра</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: UX RESEARCH, BENCHMARKS & PERSONAS */}
        {activeTab === 'research' && (
          <div className="space-y-16">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-montserrat text-white mb-3">
                UX Исследования & Анализ рынка
              </h2>
              <p className="text-sm text-white/70 max-w-3xl font-sans leading-relaxed">
                Рынок премиальной недвижимости в диджитале долгое время страдал от двух крайностей: либо это перегруженные рекламой утилитарные классифайды, либо неповоротливые глянцевые сайты-каталоги без удобного поиска. Мы провели аудит клиентского опыта и выявили точки потери конверсии.
              </p>
            </div>

            {/* Competitor Benchmark Table */}
            <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-white">
                    Матрица бенчмаркинга конкурентов
                  </h3>
                  <p className="text-xs text-white/60 font-sans mt-1">
                    Сравнение ключевых параметров UX/UI порталов недвижимости
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs text-[#637FA7]">
                  <CheckCircle2 className="w-4 h-4 text-[#27579A]" />
                  <span>Shop 4.0 Standard</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-white/50 uppercase font-montserrat tracking-wider">
                      <th className="pb-3 pr-4 font-semibold">Платформа</th>
                      <th className="pb-3 px-4 font-semibold">Тип продукта</th>
                      <th className="pb-3 px-4 font-semibold">Скорость поиска</th>
                      <th className="pb-3 px-4 font-semibold">Поиск по ID</th>
                      <th className="pb-3 px-4 font-semibold">Мобильный UX</th>
                      <th className="pb-3 pl-4 font-semibold">Фокус конверсии</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {competitors.map((c, idx) => (
                      <tr 
                        key={idx} 
                        className={`transition-colors ${
                          c.name === 'Doors Real Estate' 
                            ? 'bg-[#27579A]/10 text-white font-medium' 
                            : 'hover:bg-white/5 text-white/80'
                        }`}
                      >
                        <td className="py-4 pr-4 font-bold font-montserrat text-white flex items-center gap-2">
                          {c.name === 'Doors Real Estate' && (
                            <span className="w-2 h-2 rounded-full bg-[#27579A]" />
                          )}
                          {c.name}
                        </td>
                        <td className="py-4 px-4 text-white/70">{c.type}</td>
                        <td className="py-4 px-4">{c.searchSpeed}</td>
                        <td className="py-4 px-4">
                          {c.directIdSearch ? (
                            <span className="inline-flex items-center gap-1 text-[#27C93F] font-bold">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Да
                            </span>
                          ) : (
                            <span className="text-white/40">Нет</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-white/70">{c.mobileUx}</td>
                        <td className="py-4 pl-4 text-white/90">{c.conversionFocus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Target Personas */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-white mb-6">
                Целевые персоны пользователей (User Personas)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {personas.map((p, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-[#27579A]/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#27579A] to-[#09253B] flex items-center justify-center text-white font-bold font-montserrat text-lg border border-white/20 shadow-lg">
                        {p.avatar}
                      </div>
                      <div>
                        <div className="text-lg font-bold font-montserrat text-white">
                          {p.name}, {p.age} года
                        </div>
                        <div className="text-xs text-[#637FA7] font-medium mt-0.5">
                          {p.role}
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/30 border-l-2 border-[#27579A] p-4 rounded-r-lg text-xs italic text-white/80 leading-relaxed font-sans">
                      "{p.quote}"
                    </div>

                    <div className="space-y-4 text-xs">
                      <div>
                        <div className="font-montserrat font-bold uppercase tracking-wider text-white/60 mb-2">
                          Цели и ожидания:
                        </div>
                        <ul className="space-y-1.5 text-white/80">
                          {p.goals.map((g, gIdx) => (
                            <li key={gIdx} className="flex items-start gap-2">
                              <span className="text-[#27579A] mt-0.5">•</span>
                              <span>{g}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="font-montserrat font-bold uppercase tracking-wider text-white/60 mb-2">
                          Боли на существующих сайтах:
                        </div>
                        <ul className="space-y-1.5 text-white/70">
                          {p.painPoints.map((pain, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2 text-rose-300/80">
                              <span className="text-rose-400 mt-0.5">✕</span>
                              <span>{pain}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-white/10">
                        <div className="font-montserrat font-bold uppercase tracking-wider text-[#637FA7] mb-2">
                          UX-решения в Doors Real Estate:
                        </div>
                        <ul className="space-y-1.5 text-white/90">
                          {p.uxSolutions.map((sol, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#27579A] shrink-0 mt-0.5" />
                              <span>{sol}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: CJM & HYPOTHESES */}
        {activeTab === 'cjm' && (
          <div className="space-y-16">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-montserrat text-white mb-3">
                Customer Journey Map & Продуктовые гипотезы
              </h2>
              <p className="text-sm text-white/70 max-w-3xl font-sans leading-relaxed">
                Путь клиента агентства премиальной недвижимости от первого перехода по рекламе до согласования времени очного просмотра на объекте.
              </p>
            </div>

            {/* CJM Stepper Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-montserrat text-white mb-4">
                Ключевые этапы взаимодействия (CJM)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {cjm.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#181818] border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-[#27579A]/50 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#637FA7]">
                          {item.step}
                        </span>
                        <span className="text-xs font-bold font-montserrat px-2 py-0.5 rounded bg-white/5 border border-white/10" style={{ color: item.barColor }}>
                          {item.score}%
                        </span>
                      </div>
                      <div className="text-sm font-bold font-montserrat text-white mb-2 leading-snug">
                        {item.title}
                      </div>
                      <p className="text-xs text-white/70 mb-3 leading-relaxed">
                        {item.userGoal}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 space-y-2 text-[11px]">
                      <div className="text-rose-300/80 leading-snug">
                        <span className="font-semibold text-rose-400">Боль:</span> {item.painPoint}
                      </div>
                      <div className="text-white/90 leading-snug">
                        <span className="font-semibold text-[#637FA7]">Решение:</span> {item.solution}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Hypotheses Cards */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-white mb-6">
                4 Продуктовые гипотезы с измеримыми метриками
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hypotheses.map((h) => (
                  <div 
                    key={h.id}
                    className="bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-[#27579A]/50 transition-all relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-montserrat font-bold px-2.5 py-1 rounded bg-[#27579A]/20 text-[#637FA7] border border-[#27579A]/30">
                        {h.id}
                      </span>
                      <span className="text-xs font-montserrat font-semibold text-[#27C93F] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {h.status}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-montserrat text-white">
                      {h.title}
                    </h4>

                    <div className="space-y-2 text-xs font-sans">
                      <div>
                        <span className="text-white/50 uppercase font-montserrat font-bold tracking-wider text-[10px] block mb-0.5">
                          Предпосылка гипотезы:
                        </span>
                        <p className="text-white/80 leading-relaxed">{h.premise}</p>
                      </div>

                      <div className="pt-2 border-t border-white/5">
                        <span className="text-white/50 uppercase font-montserrat font-bold tracking-wider text-[10px] block mb-0.5">
                          Внедренное UX-решение:
                        </span>
                        <p className="text-white/90 leading-relaxed">{h.solution}</p>
                      </div>
                    </div>

                    <div className="bg-black/40 border border-white/10 p-3.5 rounded-xl flex items-center justify-between text-xs">
                      <div>
                        <div className="text-[10px] text-white/50 uppercase font-montserrat font-semibold">
                          Метрика проверки
                        </div>
                        <div className="text-white font-medium mt-0.5">{h.metric}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-[#637FA7] uppercase font-montserrat font-semibold">
                          Результат A/B теста
                        </div>
                        <div className="text-white font-bold font-montserrat mt-0.5">{h.result}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: DESIGN SYSTEM & TYPOGRAPHY */}
        {activeTab === 'system' && (
          <div className="space-y-16">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-montserrat text-white mb-3">
                Дизайн-система & Типографика
              </h2>
              <p className="text-sm text-white/70 max-w-3xl font-sans leading-relaxed">
                Интерфейс построен на строгой сетке 1366px, швейцарских интервалах и шрифтовой иерархии Montserrat + Inter.
              </p>
            </div>

            {/* Typography Spec */}
            <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8">
              <h3 className="text-xl font-bold font-montserrat text-white">
                Шрифтовая система (Typography Tokens)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Heading Font */}
                <div className="bg-black/30 p-6 rounded-xl border border-white/5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-montserrat font-bold uppercase tracking-wider text-[#637FA7]">
                      Заголовки & Акценты
                    </span>
                    <span className="text-xs font-mono text-white/50">Montserrat</span>
                  </div>
                  <div className="text-4xl font-bold font-montserrat text-white tracking-tight">
                    DOORS REAL ESTATE
                  </div>
                  <p className="text-xs text-white/60 font-sans leading-relaxed">
                    Геометрический гротеск без засечек с сильным характером и устойчивыми пропорциями. Используется для слоганов, названий направлений (Urban Realty, Country Homes) и ключевых метрик.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-montserrat text-white/70 pt-2 border-t border-white/10">
                    <span className="px-2 py-1 rounded bg-white/5">Bold (700)</span>
                    <span className="px-2 py-1 rounded bg-white/5">SemiBold (600)</span>
                    <span className="px-2 py-1 rounded bg-white/5">Medium (500)</span>
                  </div>
                </div>

                {/* Body Font */}
                <div className="bg-black/30 p-6 rounded-xl border border-white/5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-montserrat font-bold uppercase tracking-wider text-[#637FA7]">
                      Интерфейс & Наборный текст
                    </span>
                    <span className="text-xs font-mono text-white/50">Inter</span>
                  </div>
                  <div className="text-2xl font-normal font-sans text-white">
                    We help to open doors
                  </div>
                  <p className="text-xs text-white/60 font-sans leading-relaxed">
                    Универсальный экранный шрифт с оптимизированной апертурой и высотой строчных знаков. Обеспечивает исключительную читаемость цен, параметров лотов и фильтров на любых экранах.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-sans text-white/70 pt-2 border-t border-white/10">
                    <span className="px-2 py-1 rounded bg-white/5">Regular (400)</span>
                    <span className="px-2 py-1 rounded bg-white/5">Medium (500)</span>
                    <span className="px-2 py-1 rounded bg-white/5">SemiBold (600)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid & Layout Standards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#181818] border border-white/10 p-6 rounded-2xl">
                <div className="text-xs font-montserrat font-bold text-[#637FA7] uppercase tracking-wider mb-2">
                  Ширина холста
                </div>
                <div className="text-2xl font-bold font-montserrat text-white mb-2">
                  1366 px
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  Базовая десктопная ширина страницы с адаптивным ресайзом до 1920px и мобильным брейкпоинтом на 390px (iPhone).
                </p>
              </div>

              <div className="bg-[#181818] border border-white/10 p-6 rounded-2xl">
                <div className="text-xs font-montserrat font-bold text-[#637FA7] uppercase tracking-wider mb-2">
                  8-точечный базовый грид
                </div>
                <div className="text-2xl font-bold font-montserrat text-white mb-2">
                  8 pt Grid
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  Все отступы, высоты инпутов и радиусы скругления кратны 8px (8, 16, 24, 32, 48, 64px) для строгой архитектурной симметрии.
                </p>
              </div>

              <div className="bg-[#181818] border border-white/10 p-6 rounded-2xl">
                <div className="text-xs font-montserrat font-bold text-[#637FA7] uppercase tracking-wider mb-2">
                  Контрастность WCAG
                </div>
                <div className="text-2xl font-bold font-montserrat text-white mb-2">
                  AAA Rating
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  Коэффициент контрастности основного текста и кнопок превышает 7.2:1, гарантируя комфортное чтение даже на ярком солнце.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Fullscreen Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <div className="text-base font-bold font-montserrat text-white">
                {selectedImage.title}
              </div>
              {selectedImage.subtitle && (
                <div className="text-xs text-white/60 font-sans mt-0.5">
                  {selectedImage.subtitle}
                </div>
              )}
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-1 w-full overflow-auto custom-scrollbar flex items-center justify-center p-2 sm:p-4">
            <div 
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
