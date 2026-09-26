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
  ArrowRight,
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

import Header from '@/components/layout/Header';
import { CaseNavigation } from '@/components/cases/case-navigation';

export function DoorsRealEstateCase() {
  const { meta, metrics, schemes, competitors, personas, cjm, hypotheses, mockups } = doorsRealEstateData;

  const [selectedSchemeId, setSelectedSchemeId] = useState<string>('original');
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; subtitle?: string } | null>(null);

  const selectedScheme = schemes.find(s => s.id === selectedSchemeId) || schemes[0];

  return (
    <div className="min-h-screen bg-[#111111] text-[#E0E0E0] selection:bg-[#14F1D9] selection:text-black font-inter relative">
      {/* Background paper texture matching Ekaterina's site */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/paper-clean-dark.png"
          alt="Paper texture"
          fill
          className="object-cover opacity-70 mix-blend-screen"
          priority
        />
      </div>

      <div className="relative z-10">
        {/* Ekaterina's Header */}
        <Header />

      {/* Top Bar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28">
        {/* Top Navigation */}
        <CaseNavigation currentSlug="08-mockup-real-estate" position="top" className="mb-6" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#16253b]/25 via-[#111111] to-[#111111]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#14F1D9]/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#14F1D9] font-montserrat font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#14F1D9]" />
            {meta.category}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-montserrat text-white tracking-tight uppercase leading-[1.1] mb-6">
            DOORS REAL ESTATE
            <span className="block text-xl sm:text-2xl lg:text-3xl font-medium text-white/70 mt-3 normal-case tracking-normal">
              Мультиколористическая дизайн-платформа агентства премиальной недвижимости
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-4xl font-sans leading-relaxed mb-12">
            {meta.summary}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m, idx) => (
              <div 
                key={idx} 
                className="bg-[#1A1A1A] border border-white/10 p-6 rounded-2xl hover:border-[#14F1D9]/50 transition-all group"
              >
                <div className="text-2xl sm:text-3xl font-bold font-montserrat text-white group-hover:text-[#14F1D9] transition-colors">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-white/90 uppercase tracking-wider font-montserrat mt-1.5">
                  {m.label}
                </div>
                <div className="text-[11px] text-white/50 mt-1 leading-snug font-sans">
                  {m.description}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Anchor Jump Links */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-8 border-t border-white/10 text-xs font-montserrat font-semibold text-white/60">
            <span className="text-white/40 uppercase tracking-wider mr-2 text-[11px]">Навигация по кейсу:</span>
            <a href="#showcase" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">01. 3D Шоукейс</a>
            <a href="#research" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">02. UX Исследования</a>
            <a href="#cjm" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">03. CJM & Гипотезы</a>
            <a href="#schemes" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">04. 4 Цветовые схемы</a>
            <a href="#portal" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">05. Разбор Исходника</a>
            <a href="#mockups" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">06. Мокапы устройств</a>
            <a href="#system" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">07. Дизайн-система</a>
          </div>
        </div>
      </section>

      {/* Main Single-Scroll Long-Read Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-28">

        {/* 1. 3D RETINA SHOWCASE */}
        <section id="showcase" className="scroll-mt-24 space-y-8">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-widest mb-1">
                01 / ШОУКЕЙС
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
                Apple iPhone 12 Pro • 3D Retina Мокап
              </h2>
            </div>
            <p className="text-xs text-white/60 font-sans max-w-md">
              Фотореалистичный 3D-рендер мобильной версии (2716 × 2037 px) с адаптацией фильтров и каталога
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider">
                  Мобильный опыт состоятельного покупателя
                </span>
                <p className="text-xs text-white/70 font-sans mt-0.5">
                  Быстрый подбор лота с экрана смартфона без информационного перегруза
                </p>
              </div>
              <button
                onClick={() => setSelectedImage({
                  src: "/Кейсы/08-mockup-real-estate/figma_exports/05_iphone_mockup.png",
                  title: "Apple iPhone 12 Pro 3D Showcase (2716 × 2037 px)",
                  subtitle: "Фотореалистичный 3D-рендер мобильного интерфейса Doors Real Estate"
                })}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-[#14F1D9] hover:text-black text-white text-xs font-montserrat font-semibold transition-all border border-white/10 hover:border-[#14F1D9]"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Открыть рендер в 2.7K</span>
              </button>
            </div>

            {/* Interactive Mockup Container */}
            <div 
              onClick={() => setSelectedImage({
                src: "/Кейсы/08-mockup-real-estate/figma_exports/05_iphone_mockup.png",
                title: "Apple iPhone 12 Pro 3D Showcase (2716 × 2037 px)",
                subtitle: "Фотореалистичный 3D-рендер мобильного интерфейса Doors Real Estate"
              })}
              className="relative w-full aspect-[4/3] max-h-[640px] bg-gradient-to-b from-[#1c293d]/30 via-black/60 to-black/90 rounded-xl overflow-hidden cursor-pointer group border border-white/10 hover:border-[#14F1D9]/50 transition-all flex items-center justify-center p-4"
            >
              <Image
                src="/Кейсы/08-mockup-real-estate/figma_exports/05_iphone_mockup.png"
                alt="Doors Real Estate iPhone 12 Pro 3D Showcase"
                fill
                className="object-contain p-2 sm:p-6 group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md text-[11px] text-white/70 border border-white/10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-3.5 h-3.5 text-[#14F1D9]" />
                <span>Кликните для зума</span>
              </div>
            </div>

            {/* 3 Key UX features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-black/40 border border-white/5 p-5 rounded-xl">
                <div className="text-sm font-bold font-montserrat uppercase tracking-wider text-white mb-1.5">
                  Инлайн смарт-фильтр
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  Селектор Buy / Rent и мгновенный срез категорий (Urban, Country, International) оптимизированы под управление одним пальцем.
                </p>
              </div>
              <div className="bg-black/40 border border-white/5 p-5 rounded-xl">
                <div className="text-sm font-bold font-montserrat uppercase tracking-wider text-white mb-1.5">
                  Поиск по ID в один тап
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  Клиенты, получившие артикул лота в Telegram или наружной рекламе, мгновенно открывают карточку без лишней навигации.
                </p>
              </div>
              <div className="bg-black/40 border border-white/5 p-5 rounded-xl">
                <div className="text-sm font-bold font-montserrat uppercase tracking-wider text-white mb-1.5">
                  Retina-архитектура
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  Полноэкранные фото интерьеров и планировок с поддержкой pinch-to-zoom жестов для быстрой оценки планировочных решений.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. UX RESEARCH & BENCHMARKING */}
        <section id="research" className="scroll-mt-24 space-y-10">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-widest mb-1">
              02 / UX АНАЛИТИКА
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
              UX Исследования & Анализ рынка
            </h2>
            <p className="text-sm text-white/70 font-sans mt-2 max-w-3xl leading-relaxed">
              Покупка и аренда недвижимости премиум-класса — эмоционально нагруженный процесс с чеком от десятков миллионов рублей и циклом сделки до 9 месяцев. Мы изучили узкие места классифайдов и агентств, чтобы устранить трение на пути клиента.
            </p>
          </div>

          {/* Competitor Benchmark Matrix */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-white uppercase tracking-tight">
                  Матрица бенчмаркинга платформ недвижимости
                </h3>
                <p className="text-xs text-white/60 font-sans mt-1">
                  Сравнение ключевых параметров UX/UI классифайдов и премиум-бутиков
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-montserrat font-semibold text-[#14F1D9]">
                <CheckCircle2 className="w-4 h-4 text-[#14F1D9]" />
                <span>Стандарт Shop 4.0</span>
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
                <tbody className="divide-y divide-white/5 font-sans">
                  {competitors.map((c, idx) => (
                    <tr 
                      key={idx} 
                      className={`transition-colors ${
                        c.name === 'Doors Real Estate' 
                          ? 'bg-[#14F1D9]/10 text-white font-medium' 
                          : 'hover:bg-white/5 text-white/80'
                      }`}
                    >
                      <td className="py-4 pr-4 font-bold font-montserrat text-white flex items-center gap-2">
                        {c.name === 'Doors Real Estate' && (
                          <span className="w-2 h-2 rounded-full bg-[#14F1D9]" />
                        )}
                        {c.name}
                      </td>
                      <td className="py-4 px-4 text-white/70">{c.type}</td>
                      <td className="py-4 px-4">{c.searchSpeed}</td>
                      <td className="py-4 px-4">
                        {c.directIdSearch ? (
                          <span className="inline-flex items-center gap-1 text-[#14F1D9] font-bold font-montserrat">
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

          {/* User Personas */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold font-montserrat uppercase text-white tracking-tight">
              Целевые персоны покупателей (User Personas)
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {personas.map((p, idx) => (
                <div 
                  key={idx}
                  className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-[#14F1D9]/50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#14F1D9] to-[#09253B] flex items-center justify-center text-black font-black font-montserrat text-lg border border-white/20 shadow-lg">
                      {p.avatar}
                    </div>
                    <div>
                      <div className="text-lg font-bold font-montserrat text-white uppercase tracking-tight">
                        {p.name}, {p.age} года
                      </div>
                      <div className="text-xs text-[#14F1D9] font-medium mt-0.5 font-montserrat">
                        {p.role}
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/40 border-l-2 border-[#14F1D9] p-4 rounded-r-lg text-xs italic text-white/80 leading-relaxed font-sans">
                    "{p.quote}"
                  </div>

                  <div className="space-y-4 text-xs font-sans">
                    <div>
                      <div className="font-montserrat font-bold uppercase tracking-wider text-white/60 mb-2 text-[11px]">
                        Цели и задачи:
                      </div>
                      <ul className="space-y-1.5 text-white/80">
                        {p.goals.map((g, gIdx) => (
                          <li key={gIdx} className="flex items-start gap-2">
                            <span className="text-[#14F1D9] mt-0.5">•</span>
                            <span>{g}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="font-montserrat font-bold uppercase tracking-wider text-white/60 mb-2 text-[11px]">
                        Боли на типовых сайтах:
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
                      <div className="font-montserrat font-bold uppercase tracking-wider text-[#14F1D9] mb-2 text-[11px]">
                        UX-решения в Doors Real Estate:
                      </div>
                      <ul className="space-y-1.5 text-white/90">
                        {p.uxSolutions.map((sol, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#14F1D9] shrink-0 mt-0.5" />
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
        </section>

        {/* 3. CJM & HYPOTHESES */}
        <section id="cjm" className="scroll-mt-24 space-y-10">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-widest mb-1">
              03 / ПУТЬ ПОЛЬЗОВАТЕЛЯ
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
              Customer Journey Map & Продуктовые гипотезы
            </h2>
            <p className="text-sm text-white/70 font-sans mt-2 max-w-3xl leading-relaxed">
              Путь состоятельного клиента агентства от первого клика по рекламе до согласования времени очного визита на объект с персональным брокером.
            </p>
          </div>

          {/* CJM Horizontal Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-montserrat uppercase text-white tracking-tight">
              5 Ключевых этапов клиентского пути (CJM)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {cjm.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-[#14F1D9]/50 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#14F1D9]">
                        {item.step}
                      </span>
                      <span className="text-xs font-bold font-montserrat px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#14F1D9]">
                        {item.score}%
                      </span>
                    </div>
                    <div className="text-sm font-bold font-montserrat text-white mb-2 leading-snug">
                      {item.title}
                    </div>
                    <p className="text-xs text-white/70 mb-3 leading-relaxed font-sans">
                      {item.userGoal}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-2 text-[11px] font-sans">
                    <div className="text-rose-300/80 leading-snug">
                      <span className="font-semibold text-rose-400">Боль:</span> {item.painPoint}
                    </div>
                    <div className="text-white/90 leading-snug">
                      <span className="font-semibold text-[#14F1D9]">Решение:</span> {item.solution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Hypotheses Grid */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold font-montserrat uppercase text-white tracking-tight">
              4 Продуктовые гипотезы с измеримыми метриками
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hypotheses.map((h) => (
                <div 
                  key={h.id}
                  className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-[#14F1D9]/50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-montserrat font-bold px-3 py-1 rounded-full bg-[#14F1D9]/10 text-[#14F1D9] border border-[#14F1D9]/30">
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
                        Предпосылка:
                      </span>
                      <p className="text-white/80 leading-relaxed">{h.premise}</p>
                    </div>

                    <div className="pt-2 border-t border-white/5">
                      <span className="text-white/50 uppercase font-montserrat font-bold tracking-wider text-[10px] block mb-0.5">
                        UX-решение:
                      </span>
                      <p className="text-white/90 leading-relaxed">{h.solution}</p>
                    </div>
                  </div>

                  <div className="bg-black/40 border border-white/10 p-4 rounded-xl flex items-center justify-between text-xs">
                    <div>
                      <div className="text-[10px] text-white/50 uppercase font-montserrat font-semibold">
                        Метрика проверки
                      </div>
                      <div className="text-white font-medium mt-0.5 font-sans">{h.metric}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-[#14F1D9] uppercase font-montserrat font-semibold">
                        Результат теста
                      </div>
                      <div className="text-white font-bold font-montserrat mt-0.5">{h.result}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. INTERACTIVE 4-SCHEMES COLOR THEORY */}
        <section id="schemes" className="scroll-mt-24 space-y-10">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-widest mb-1">
              04 / ТЕОРИЯ ЦВЕТА
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
              4 Колористические схемы & Теория цвета
            </h2>
            <p className="text-sm text-white/70 font-sans mt-2 max-w-3xl leading-relaxed">
              В проекте создано 4 адаптивные цветовые схемы под разные сегменты рынка. Переключайте схему прямо здесь, чтобы изучить палитру, гармонию по кругу Иттена и скроллируемый макет каждого варианта.
            </p>
          </div>

          {/* Scheme Switcher Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {schemes.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setSelectedSchemeId(s.id)}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden ${
                  selectedSchemeId === s.id
                    ? 'bg-[#1A1A1A] border-[#14F1D9] shadow-lg shadow-[#14F1D9]/10'
                    : 'bg-black/30 border-white/10 hover:border-white/25'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div 
                    className="w-3.5 h-3.5 rounded-full border border-white/20" 
                    style={{ backgroundColor: s.accentColor }} 
                  />
                  <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-white/60">
                    Схема {idx + 1} {s.id === 'original' && '★'}
                  </span>
                </div>
                <div className="text-sm font-bold font-montserrat text-white uppercase tracking-tight">
                  {s.name}
                </div>
                <div className="text-xs text-white/60 mt-0.5 font-sans">
                  {s.nameRu}
                </div>
              </button>
            ))}
          </div>

          {/* Active Scheme Details Panel */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-montserrat font-bold uppercase tracking-wider mb-3 bg-[#14F1D9]/10 text-[#14F1D9] border border-[#14F1D9]/30">
                  <Palette className="w-3.5 h-3.5" />
                  {selectedScheme.type}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-montserrat text-white uppercase tracking-tight">
                  {selectedScheme.name}
                </h3>
                <p className="text-sm text-white/70 max-w-2xl font-sans mt-2 leading-relaxed">
                  {selectedScheme.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedImage({
                  src: selectedScheme.imageSrc,
                  title: `${selectedScheme.name} — 1366 × 5909 px`,
                  subtitle: selectedScheme.nameRu
                })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#14F1D9] hover:text-black text-white text-xs font-montserrat font-semibold transition-all border border-white/20 self-start"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Открыть весь макет (5909 px)</span>
              </button>
            </div>

            {/* Color Swatches */}
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
                    <div className="text-[11px] text-white/80 font-medium font-sans">
                      {sw.label}
                    </div>
                    <div className="text-[10px] text-white/50 mt-0.5 font-sans">
                      {sw.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Theory & Market Application */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/30 border border-white/5 p-5 rounded-xl">
                <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Compass className="w-4 h-4" />
                  Теория цветовой гармонии
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                  {selectedScheme.harmonyTheory}
                </p>
              </div>

              <div className="bg-black/30 border border-white/5 p-5 rounded-xl">
                <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Целевой сегмент рынка
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                  {selectedScheme.targetMarket}
                </p>
              </div>
            </div>

            {/* Scrollable Layout Window */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span className="font-montserrat font-medium">
                  Интерактивное превью макета (высота 5909 px, скроллируйте внутри окна):
                </span>
                <span className="text-[11px] text-white/40 font-mono">1366 × 5909 px</span>
              </div>

              <div className="relative w-full h-[540px] bg-black/80 rounded-xl overflow-hidden border border-white/20 shadow-2xl">
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
                    className="text-[11px] text-[#14F1D9] hover:underline flex items-center gap-1 font-montserrat"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>На весь экран</span>
                  </button>
                </div>

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
        </section>

        {/* 5. DEEP DIVE INTO 1ST SCHEME (ИСХОДНИК) */}
        <section id="portal" className="scroll-mt-24 space-y-10">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-widest mb-1">
              05 / РАЗБОР ИСХОДНИКА (5909 PX)
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
              Анатомия основного интерфейса («Исходник»)
            </h2>
            <p className="text-sm text-white/70 font-sans mt-2 max-w-3xl leading-relaxed">
              Полноразмерный 1366-пиксельный десктопный портал, спроектированный для мгновенного снятия когнитивного напряжения состоятельного покупателя и конвертации интереса в согласование очного просмотра.
            </p>
          </div>

          {/* 6 Structural Breakdown Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 hover:border-[#14F1D9]/50 transition-all">
              <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider mb-3">
                <span className="w-5 h-5 rounded-full bg-[#14F1D9]/20 flex items-center justify-center text-[#14F1D9] text-[10px]">1</span>
                Hero Banner & Слоган бренда
              </div>
              <h3 className="text-lg font-bold font-montserrat text-white mb-2 uppercase tracking-tight">
                «We help to open doors»
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Главный экран встречает посетителя чистым слоганом и монументальной архитектурной фотографией на фоне. Название бренда <em>Doors</em> обыгрывается визуально: мы открываем двери в лучшие объекты города и мира.
              </p>
              <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 text-[11px] text-white/60 font-sans">
                <strong>UX-решение:</strong> Никаких всплывающих окон, чат-ботов на пол-экрана и агрессивных плашек. Только воздух, свет и чистый статус агентства.
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 hover:border-[#14F1D9]/50 transition-all">
              <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider mb-3">
                <span className="w-5 h-5 rounded-full bg-[#14F1D9]/20 flex items-center justify-center text-[#14F1D9] text-[10px]">2</span>
                Инлайн смарт-фильтр & Селектор Buy / Rent
              </div>
              <h3 className="text-lg font-bold font-montserrat text-white mb-2 uppercase tracking-tight">
                Мультипараметрический смарт-бар
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Строка фильтрации вынесена на первый экран: быстрый выбор режима <code>Buy</code> / <code>Rent</code>, категории (<code>Urban Realty</code>, <code>country homes</code>, <code>international</code>, <code>commercial</code>), параметров площади и выделенного инпута <code>Search by ID</code>.
              </p>
              <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 text-[11px] text-white/60 font-sans">
                <strong>Метрика:</strong> Время первичной фильтрации сократилось до <strong>38 секунд</strong> против 114 секунд у классифайдов.
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 hover:border-[#14F1D9]/50 transition-all">
              <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider mb-3">
                <span className="w-5 h-5 rounded-full bg-[#14F1D9]/20 flex items-center justify-center text-[#14F1D9] text-[10px]">3</span>
                Витрина Urban Realty
              </div>
              <h3 className="text-lg font-bold font-montserrat text-white mb-2 uppercase tracking-tight">
                Городская недвижимость премиум-класса
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Асимметричная журнальная сетка лотов с крупными фотографиями фасадов, видовыми террасами и продуманным описанием инфраструктуры (паркинг, консьерж, приватный сад).
              </p>
              <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 text-[11px] text-white/60 font-sans">
                <strong>UX-решение:</strong> Карточка объекта показывает не только цену, но и ключевую ценность лота (высота потолков, отделка, вид).
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 hover:border-[#14F1D9]/50 transition-all">
              <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider mb-3">
                <span className="w-5 h-5 rounded-full bg-[#14F1D9]/20 flex items-center justify-center text-[#14F1D9] text-[10px]">4</span>
                Загородные резиденции & Зарубежные лоты
              </div>
              <h3 className="text-lg font-bold font-montserrat text-white mb-2 uppercase tracking-tight">
                Country Homes & International Realty
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Специализированные разделы для покупателей загородных домов и курортных вилл с информацией об участках, водоемах, юридической чистоте и инвестиционной доходности в валюте.
              </p>
              <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 text-[11px] text-white/60 font-sans">
                <strong>Результат:</strong> +28% рост кликов по зарубежным направлениям благодаря визуальному разделению блоков.
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 hover:border-[#14F1D9]/50 transition-all">
              <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider mb-3">
                <span className="w-5 h-5 rounded-full bg-[#14F1D9]/20 flex items-center justify-center text-[#14F1D9] text-[10px]">5</span>
                Индикаторы масштаба & Экспертиза
              </div>
              <h3 className="text-lg font-bold font-montserrat text-white mb-2 uppercase tracking-tight">
                1700+ лотов в активной базе агентства
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Блок социальных доказательств и охвата: 1700+ городских лотов, 150+ загородных усадеб, международная сеть партнерских офисов и подтвержденный опыт закрытия сделок от 1 млн $.
              </p>
              <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 text-[11px] text-white/60 font-sans">
                <strong>Доверие:</strong> Числа подтверждают статус агентства как ключевого игрока рынка без самовосхваления.
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 hover:border-[#14F1D9]/50 transition-all">
              <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider mb-3">
                <span className="w-5 h-5 rounded-full bg-[#14F1D9]/20 flex items-center justify-center text-[#14F1D9] text-[10px]">6</span>
                Конверсионный футер & Прямой контакт
              </div>
              <h3 className="text-lg font-bold font-montserrat text-white mb-2 uppercase tracking-tight">
                «Our doors are always open for you»
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                Завершающий эмоциональный акцент с кнопками прямого звонка и мессенджеров (WhatsApp, Telegram). Персональный брокер готов ответить на вопросы в течение 5 минут.
              </p>
              <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 text-[11px] text-white/60 font-sans">
                <strong>Конверсия:</strong> +24.8% подтвержденных бронирований просмотров по сравнению со старой формой.
              </div>
            </div>
          </div>

          {/* Full-Height Canvas Window */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold font-montserrat uppercase text-white tracking-tight">
                  Холст десктопного портала (1366 × 5909 px)
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#14F1D9] text-black text-xs font-montserrat font-bold uppercase tracking-wider transition-all hover:bg-white"
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
              className="relative w-full h-[600px] bg-black/60 rounded-xl overflow-hidden cursor-pointer group border border-white/10 hover:border-[#14F1D9]/50 transition-all"
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
                <Eye className="w-3.5 h-3.5 text-[#14F1D9]" />
                <span>Нажмите для полноэкранного просмотра</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PRESENTATION MOCKUPS & DEVICES */}
        <section id="mockups" className="scroll-mt-24 space-y-10">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-widest mb-1">
              06 / ПРЕЗЕНТАЦИОННЫЕ МОКАПЫ & УСТРОЙСТВА
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
              Интерфейс в реальной среде и на девайсах
            </h2>
            <p className="text-sm text-white/70 font-sans mt-2 max-w-3xl leading-relaxed">
              Демонстрация адаптивности веб-платформы Doors Real Estate: от широкоформатных мониторов и ноутбуков до планшетов брокеров и смартфонов клиентов.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockups.map((mockup, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage({
                  src: mockup.src,
                  title: mockup.title,
                  subtitle: mockup.type
                })}
                className="bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#14F1D9]/50 transition-all flex flex-col cursor-pointer"
              >
                <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
                  <Image
                    src={mockup.src}
                    alt={mockup.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-montserrat font-semibold text-[#14F1D9] border border-white/10 uppercase tracking-wider">
                    {mockup.type}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md p-2 rounded-lg text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-[#14F1D9]" />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold font-montserrat text-white group-hover:text-[#14F1D9] transition-colors leading-snug">
                      {mockup.title}
                    </h3>
                    <p className="text-xs text-white/60 font-sans leading-relaxed mt-2">
                      {mockup.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40 font-montserrat">
                    <span>Mockuuups Studio Render</span>
                    <span className="text-[#14F1D9] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Открыть <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. DESIGN SYSTEM & TOKENS */}
        <section id="system" className="scroll-mt-24 space-y-10">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-widest mb-1">
              07 / ДИЗАЙН-СИСТЕМА
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
              Дизайн-система & Типографика
            </h2>
            <p className="text-sm text-white/70 font-sans mt-2 max-w-3xl leading-relaxed">
              Интерфейс построен на строгой сетке 1366px, швейцарских интервалах и шрифтовой иерархии Montserrat + Inter.
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8">
            <h3 className="text-xl font-bold font-montserrat text-white uppercase tracking-tight">
              Шрифтовая иерархия проекта (Typography Tokens)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/30 p-6 rounded-2xl border border-white/5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-montserrat font-bold uppercase tracking-wider text-[#14F1D9]">
                    Заголовки & Акценты
                  </span>
                  <span className="text-xs font-mono text-white/50">Montserrat</span>
                </div>
                <div className="text-4xl font-black font-montserrat text-white tracking-tight uppercase">
                  DOORS REAL ESTATE
                </div>
                <p className="text-xs text-white/60 font-sans leading-relaxed">
                  Геометрический гротеск без засечек с сильным характером и устойчивыми пропорциями. Используется для слоганов, названий направлений (Urban Realty, Country Homes) и ключевых метрик.
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] font-montserrat text-white/70 pt-2 border-t border-white/10">
                  <span className="px-2.5 py-1 rounded bg-white/5">Bold (700)</span>
                  <span className="px-2.5 py-1 rounded bg-white/5">SemiBold (600)</span>
                  <span className="px-2.5 py-1 rounded bg-white/5">Medium (500)</span>
                </div>
              </div>

              <div className="bg-black/30 p-6 rounded-2xl border border-white/5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-montserrat font-bold uppercase tracking-wider text-[#14F1D9]">
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
                  <span className="px-2.5 py-1 rounded bg-white/5">Regular (400)</span>
                  <span className="px-2.5 py-1 rounded bg-white/5">Medium (500)</span>
                  <span className="px-2.5 py-1 rounded bg-white/5">SemiBold (600)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid standards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1A1A1A] border border-white/10 p-6 rounded-2xl">
              <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider mb-2">
                Ширина холста
              </div>
              <div className="text-2xl font-bold font-montserrat text-white mb-2">
                1366 px
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                Базовая десктопная ширина страницы с адаптивным ресайзом до 1920px и мобильным брейкпоинтом на 390px (iPhone).
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 p-6 rounded-2xl">
              <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider mb-2">
                8-точечный базовый грид
              </div>
              <div className="text-2xl font-bold font-montserrat text-white mb-2">
                8 pt Grid
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                Все отступы, высоты инпутов и радиусы скругления кратны 8px (8, 16, 24, 32, 48, 64px) для строгой архитектурной симметрии.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 p-6 rounded-2xl">
              <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider mb-2">
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
        </section>

        {/* Bottom Full Navigation */}
        <CaseNavigation currentSlug="08-mockup-real-estate" position="bottom" />
      </main>

      {/* Fullscreen Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <div className="text-base font-bold font-montserrat text-white uppercase tracking-tight">
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
    </div>
  );
}
