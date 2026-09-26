"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Maximize2,
  X,
  Smartphone,
  Monitor,
  Palette,
  BarChart3,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Clock,
  ShoppingBag,
  ExternalLink,
  ChevronLeft,
  Compass,
  FileText,
  SlidersHorizontal,
  CreditCard,
  Truck,
  ShieldCheck,
  Zap,
  Users,
  Eye
} from "lucide-react";
import {
  electronicsShopData,
  AppScreen,
  UXHypothesis,
  UserPersona,
  CJMStep,
  CompetitorComparison
} from "@/lib/electronics-shop-data";

import Header from "@/components/layout/Header";
import { CaseNavigation } from "@/components/cases/case-navigation";

export function ElectronicsShopCase() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; subtitle?: string } | null>(null);
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(2); // Default to Home screen
  const [selectedPersonaIndex, setSelectedPersonaIndex] = useState<number>(0);
  const [flowViewMode, setFlowViewMode] = useState<"step" | "grid">("step");

  const currentScreen: AppScreen = electronicsShopData.screens.mobileFlow[activeScreenIndex];
  const activePersona: UserPersona = electronicsShopData.personas[selectedPersonaIndex];

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
        <CaseNavigation currentSlug="09-mockup-electronics" position="top" className="mb-6" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#162e2a]/25 via-[#111111] to-[#111111]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#14F1D9]/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#14F1D9] font-montserrat font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#14F1D9]" />
            UX/UI ДИЗАЙН & E-COMMERCE АНАЛИТИКА
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-montserrat text-white tracking-tight uppercase leading-[1.1] mb-6">
            {electronicsShopData.title}
            <span className="block text-xl sm:text-2xl lg:text-3xl font-medium text-white/70 mt-3 normal-case tracking-normal">
              {electronicsShopData.subtitle}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-4xl font-sans leading-relaxed mb-12">
            {electronicsShopData.lead}
          </p>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {electronicsShopData.metrics.map((m, idx) => (
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
                  {m.sublabel} ({m.trend})
                </div>
              </div>
            ))}
          </div>

          {/* Quick Anchor Jump Links */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-8 border-t border-white/10 text-xs font-montserrat font-semibold text-white/60">
            <span className="text-white/40 uppercase tracking-wider mr-2 text-[11px]">Навигация по кейсу:</span>
            <a href="#poster" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">01. Мастер-постер</a>
            <a href="#research" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">02. UX Исследования</a>
            <a href="#cjm" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">03. CJM & Гипотезы</a>
            <a href="#flow" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">04. Мобильный флоу</a>
            <a href="#desktop" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">05. Десктоп 1440px</a>
            <a href="#system" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">06. Дизайн-система</a>
          </div>
        </div>
      </section>

      {/* Main Single-Scroll Long-Read Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-28">

        {/* 1. EDITORIAL MASTER SHOWCASE POSTER */}
        <section id="poster" className="scroll-mt-24 space-y-8">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-widest mb-1">
                01 / ШОУКЕЙС BEHANCE
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
                Editorial Retina Master Poster
              </h2>
            </div>
            <p className="text-xs text-white/60 font-sans max-w-md">
              Презентационный плакат высокого разрешения (2400 × 1500 px) для оформления кейса на Behance
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider">
                  Полноформатный презентационный плакат
                </span>
                <p className="text-xs text-white/70 font-sans mt-0.5">
                  Десктоп 1440px, мобильные экраны чекаута и метрики дизайн-системы
                </p>
              </div>
              <button
                onClick={() => setSelectedImage({
                  src: "/Кейсы/09-mockup-electronics/figma_exports/behance_master_poster.jpg",
                  title: "Editorial Showcase Poster (2400 × 1500 px)",
                  subtitle: "Полноразмерный рендер дизайн-системы, десктопа 1440px и мобильного флоу Shop 4.0"
                })}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-[#14F1D9] hover:text-black text-white text-xs font-montserrat font-semibold transition-all border border-white/10 hover:border-[#14F1D9]"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Открыть плакат на весь экран</span>
              </button>
            </div>

            <div
              onClick={() => setSelectedImage({
                src: "/Кейсы/09-mockup-electronics/figma_exports/behance_master_poster.jpg",
                title: "Editorial Showcase Poster (2400 × 1500 px)",
                subtitle: "Полноразмерный рендер дизайн-системы, десктопа 1440px и мобильного флоу Shop 4.0"
              })}
              className="relative aspect-[16/10] w-full bg-black/60 rounded-xl overflow-hidden cursor-pointer group border border-white/10 hover:border-[#14F1D9]/50 transition-all"
            >
              <Image
                src="/Кейсы/09-mockup-electronics/figma_exports/behance_master_poster.jpg"
                alt="Editorial Poster"
                fill
                className="object-contain group-hover:scale-101 transition-transform duration-500"
              />
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md text-[11px] text-white/70 border border-white/10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-3.5 h-3.5 text-[#14F1D9]" />
                <span>Кликните для зума (2.4K)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-black/40 border border-white/5 p-5 rounded-xl">
                <div className="text-sm font-bold font-montserrat uppercase tracking-wider text-white mb-1.5">
                  1-Экранный чекаут
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  Снижение времени оформления заказа со 134 секунд до 48 секунд благодаря автозаполнению и мгновенному выбору ПВЗ.
                </p>
              </div>
              <div className="bg-black/40 border border-white/5 p-5 rounded-xl">
                <div className="text-sm font-bold font-montserrat uppercase tracking-wider text-white mb-1.5">
                  Фирменный мятный акцент
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  Оттенок <code>#30B5A3</code> Mint Teal обеспечивает контрастность 4.8:1 на черном фоне и мгновенно считывается как CTA.
                </p>
              </div>
              <div className="bg-black/40 border border-white/5 p-5 rounded-xl">
                <div className="text-sm font-bold font-montserrat uppercase tracking-wider text-white mb-1.5">
                  Адаптивный 12-колоночный грид
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  Сетка выверена под десктопы 1440px и мобильные экраны 375px с сохранением единого шага отступов 8pt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. UX RESEARCH & COMPETITOR BENCHMARK */}
        <section id="research" className="scroll-mt-24 space-y-10">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-widest mb-1">
              02 / UX АНАЛИТИКА
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
              UX Исследования & Анализ конкурентов
            </h2>
            <p className="text-sm text-white/70 font-sans mt-2 max-w-3xl leading-relaxed">
              {electronicsShopData.researchOverview.problemStatement}
            </p>
          </div>

          {/* Competitor Benchmark Grid */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-white uppercase tracking-tight">
                  Бенчмарк-матрица конкурентов: DNS, М.Видео, Ситилинк vs Shop 4.0
                </h3>
                <p className="text-xs text-white/60 font-sans mt-1">
                  Сравнительный аудит по 10-балльной шкале юзабилити
                </p>
              </div>
              <div className="text-xs font-montserrat font-bold text-[#14F1D9]">
                Shop 4.0 Standard
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {electronicsShopData.competitors.map((comp, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                    comp.name.includes("Shop 4.0")
                      ? "bg-[#14F1D9]/10 border-[#14F1D9] shadow-lg shadow-[#14F1D9]/10"
                      : "bg-black/30 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-white font-montserrat">{comp.name}</h4>
                      <span
                        className={`text-xs font-black px-2.5 py-0.5 rounded-full font-montserrat ${
                          comp.score > 8 ? "bg-[#14F1D9] text-black" : "bg-white/10 text-white"
                        }`}
                      >
                        {comp.score} / 10
                      </span>
                    </div>
                    <div className="text-[11px] text-[#14F1D9] font-montserrat font-bold uppercase mb-3">
                      {comp.category}
                    </div>

                    <div className="space-y-3 mb-4 text-xs font-sans">
                      <div>
                        <span className="text-white/40 block text-[10px] uppercase font-montserrat mb-1">Сильные стороны:</span>
                        <span className="text-white/80 leading-relaxed">{comp.strengths.join(", ")}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[10px] uppercase font-montserrat mb-1">Слабые стороны:</span>
                        <span className="text-white/60 leading-relaxed">{comp.weaknesses.join(", ")}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-[11px] text-white/70 font-sans">
                    <span className="text-[#14F1D9] font-montserrat font-bold uppercase text-[10px] block mb-0.5">Точка роста:</span>
                    {comp.opportunity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Personas with Interactive Switcher */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="text-xl sm:text-2xl font-bold font-montserrat uppercase text-white tracking-tight">
                Целевые персоны покупателей (User Personas)
              </h3>
              <div className="flex gap-2">
                {electronicsShopData.personas.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPersonaIndex(idx)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-montserrat font-bold transition-all ${
                      selectedPersonaIndex === idx
                        ? "bg-[#14F1D9] text-black"
                        : "bg-[#1A1A1A] border border-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    {p.name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#1A1A1A] border border-white/10 p-6 sm:p-8 rounded-2xl">
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#14F1D9] to-[#092e27] flex items-center justify-center text-black font-black font-montserrat text-lg mb-4 shadow-lg shadow-[#14F1D9]/10">
                  {activePersona.name.slice(0, 2).toUpperCase()}
                </div>
                <h4 className="text-xl font-bold text-white font-montserrat uppercase tracking-tight mb-1">{activePersona.name}</h4>
                <p className="text-xs text-[#14F1D9] font-montserrat font-semibold mb-3">{activePersona.role}</p>
                <div className="text-xs text-white/60 space-y-1 font-sans mb-4">
                  <p>Возраст: {activePersona.age}</p>
                  <p>Техническая грамотность: {activePersona.techLiteracy}</p>
                </div>
                <div className="p-3.5 bg-black/40 border-l-2 border-[#14F1D9] text-xs italic text-white/80 font-sans rounded-r-xl">
                  &ldquo;{activePersona.quote}&rdquo;
                </div>
              </div>

              <div className="lg:col-span-8 space-y-5">
                <div>
                  <h5 className="text-xs uppercase font-montserrat font-bold text-[#14F1D9] mb-2 text-[11px] tracking-wider">
                    Покупательские цели и задачи:
                  </h5>
                  <ul className="space-y-1.5 text-xs text-white/80 font-sans">
                    {activePersona.goals.map((g, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#14F1D9] shrink-0 mt-0.5" />
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-xs uppercase font-montserrat font-bold text-rose-400 mb-2 text-[11px] tracking-wider">
                    Болевые точки и барьеры:
                  </h5>
                  <ul className="space-y-1.5 text-xs text-white/70 font-sans">
                    {activePersona.painPoints.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-rose-300/80">
                        <span className="text-rose-400 mt-0.5">✕</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-xs text-white/40 font-montserrat uppercase mr-2 text-[11px]">Используемые устройства:</span>
                  <div className="inline-flex flex-wrap gap-1.5 mt-1">
                    {activePersona.favoriteDevices.map((d, i) => (
                      <span key={i} className="px-2.5 py-0.5 bg-black/40 border border-white/10 rounded-md text-[11px] text-white/80 font-sans">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
              Картирование эмоционального состояния покупателя на каждом этапе воронки — от первого поиска гаджета до получения трек-номера отправления.
            </p>
          </div>

          {/* CJM Stepper */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-montserrat uppercase text-white tracking-tight">
              5 Этапов оформления заказа (CJM)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {electronicsShopData.cjm.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-[#14F1D9]/50 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#14F1D9]">
                        {item.stage}
                      </span>
                      <span className="text-xs font-bold font-montserrat px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#14F1D9]">
                        {item.emotionalScore} / 5
                      </span>
                    </div>
                    <div className="text-sm font-bold font-montserrat text-white mb-2 leading-snug">
                      {item.touchpoint}
                    </div>
                    <p className="text-xs text-white/70 mb-3 leading-relaxed font-sans">
                      {item.userAction}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-2 text-[11px] font-sans">
                    <div className="text-rose-300/80 leading-snug">
                      <span className="font-semibold text-rose-400">Боль:</span> {item.painPoint}
                    </div>
                    <div className="text-white/90 leading-snug">
                      <span className="font-semibold text-[#14F1D9]">Решение:</span> {item.uxSolution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hypotheses Grid */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold font-montserrat uppercase text-white tracking-tight">
              4 Продуктовые гипотезы с A/B результатами
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {electronicsShopData.hypotheses.map((h) => (
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
                      {h.status === "confirmed" ? "Подтверждена" : "Оптимизирована"}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold font-montserrat text-white">
                    {h.title}
                  </h4>

                  <div className="space-y-2 text-xs font-sans">
                    <div>
                      <span className="text-white/50 uppercase font-montserrat font-bold tracking-wider text-[10px] block mb-0.5">
                        Проблема:
                      </span>
                      <p className="text-white/80 leading-relaxed">{h.problem}</p>
                    </div>

                    <div className="pt-2 border-t border-white/5">
                      <span className="text-white/50 uppercase font-montserrat font-bold tracking-wider text-[10px] block mb-0.5">
                        UX-гипотеза:
                      </span>
                      <p className="text-white/90 leading-relaxed">{h.hypothesis}</p>
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

        {/* 4. INTERACTIVE MOBILE FLOW SIMULATOR */}
        <section id="flow" className="scroll-mt-24 space-y-10">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-widest mb-1">
                04 / МОБИЛЬНЫЙ ФЛОУ
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
                Интерактивный симулятор чекаута (9 экранов)
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFlowViewMode("step")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-montserrat font-semibold transition-all ${
                  flowViewMode === "step"
                    ? "bg-[#14F1D9] text-black"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                Симулятор телефона
              </button>
              <button
                onClick={() => setFlowViewMode("grid")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-montserrat font-semibold transition-all ${
                  flowViewMode === "grid"
                    ? "bg-[#14F1D9] text-black"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                Сетка всех 9 экранов
              </button>
            </div>
          </div>

          {flowViewMode === "step" ? (
            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 sm:p-8">
              {/* Screen Pills Bar */}
              <div className="flex overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden gap-2 pb-6 border-b border-white/10">
                {electronicsShopData.screens.mobileFlow.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-montserrat font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                      activeScreenIndex === idx
                        ? "bg-[#14F1D9] text-black shadow-lg shadow-[#14F1D9]/20"
                        : "bg-black/30 border border-white/10 text-white/70 hover:text-white hover:border-white/30"
                    }`}
                  >
                    <span className="opacity-60">{idx + 1}.</span>
                    <span>{s.title}</span>
                  </button>
                ))}
              </div>

              {/* Interactive Phone Simulator & Description */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
                {/* Smartphone Bezel Container */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-[300px] sm:w-[340px] bg-[#1a1a1a] rounded-[38px] p-3 border-2 border-white/20 shadow-2xl shadow-black/80 ring-1 ring-white/10">
                    {/* Screen Image Container with uncropped aspect ratio */}
                    <div 
                      onClick={() => setSelectedImage({
                        src: currentScreen.src,
                        title: `${currentScreen.title} (Экран ${activeScreenIndex + 1} из 9)`,
                        subtitle: currentScreen.description
                      })}
                      className="relative w-full aspect-[9/16] rounded-[28px] overflow-hidden cursor-zoom-in group bg-black/90 flex items-center justify-center border border-white/10"
                    >
                      <Image
                        src={currentScreen.src}
                        alt={currentScreen.title}
                        fill
                        className="object-contain group-hover:scale-102 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-black/80 px-3 py-1.5 rounded-lg text-xs text-[#14F1D9] border border-[#14F1D9]/30 flex items-center gap-1.5 font-montserrat font-semibold">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Увеличить</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Screen Details & Key UX Decisions */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider mb-1">
                      Экран {activeScreenIndex + 1} из 9 • {currentScreen.category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black font-montserrat text-white uppercase tracking-tight">
                      {currentScreen.title}
                    </h3>
                    <p className="text-sm text-white/80 font-sans mt-2 leading-relaxed">
                      {currentScreen.description}
                    </p>
                  </div>

                  <div className="bg-black/40 border border-white/10 p-6 rounded-2xl space-y-3">
                    <div className="text-xs font-montserrat font-bold uppercase tracking-wider text-[#14F1D9]">
                      Ключевые UX-решения экрана:
                    </div>
                    <ul className="space-y-2 text-xs font-sans text-white/80">
                      {currentScreen.uxHighlights.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#14F1D9] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Navigation Stepper Controls */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      onClick={() => setActiveScreenIndex(prev => Math.max(0, prev - 1))}
                      disabled={activeScreenIndex === 0}
                      className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-xs font-montserrat font-semibold flex items-center gap-2 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Предыдущий экран</span>
                    </button>

                    <button
                      onClick={() => setActiveScreenIndex(prev => Math.min(electronicsShopData.screens.mobileFlow.length - 1, prev + 1))}
                      disabled={activeScreenIndex === electronicsShopData.screens.mobileFlow.length - 1}
                      className="px-4 py-2 rounded-xl bg-[#14F1D9] hover:bg-white text-black text-xs font-montserrat font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
                    >
                      <span>Следующий экран</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {electronicsShopData.screens.mobileFlow.map((s, idx) => (
                <div
                  key={s.id}
                  onClick={() => setSelectedImage({
                    src: s.src,
                    title: `${s.title} (Экран ${idx + 1})`,
                    subtitle: s.description
                  })}
                  className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-3 cursor-pointer group hover:border-[#14F1D9]/60 transition-all flex flex-col"
                >
                  <div className="relative aspect-[9/16] w-full rounded-xl overflow-hidden bg-black/40 mb-2 flex items-center justify-center border border-white/5">
                    <Image
                      src={s.src}
                      alt={s.title}
                      fill
                      className="object-contain group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-[11px] font-bold font-montserrat text-white truncate">
                    {idx + 1}. {s.title}
                  </div>
                  <div className="text-[10px] text-white/50 truncate font-sans">
                    {s.category}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 5. DESKTOP STORE 1440PX & DEVICE MOCKUPS */}
        <section id="desktop" className="scroll-mt-24 space-y-10">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-widest mb-1">
              05 / ДЕСКТОПНАЯ ВЕРСИЯ
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
              Десктопный магазин 1440px & Мультиустройства
            </h2>
            <p className="text-sm text-white/70 font-sans mt-2 max-w-3xl leading-relaxed">
              Полноформатный адаптивный интернет-магазин электроники с быстрым фильтром характеристик, липкой корзиной и моментальным предпросмотром спецификаций гаджетов.
            </p>
          </div>

          {/* Desktop 1440px Showcase Window */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold font-montserrat uppercase text-white tracking-tight">
                  {electronicsShopData.screens.desktop.title}
                </h3>
                <p className="text-xs text-white/60 font-sans mt-0.5">
                  {electronicsShopData.screens.desktop.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage({
                  src: electronicsShopData.screens.desktop.src,
                  title: electronicsShopData.screens.desktop.title,
                  subtitle: electronicsShopData.screens.desktop.description
                })}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#14F1D9] text-black text-xs font-montserrat font-bold uppercase tracking-wider transition-all hover:bg-white"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Развернуть десктоп</span>
              </button>
            </div>

            <div
              onClick={() => setSelectedImage({
                src: electronicsShopData.screens.desktop.src,
                title: electronicsShopData.screens.desktop.title,
                subtitle: electronicsShopData.screens.desktop.description
              })}
              className="relative aspect-[16/10] w-full bg-black/60 rounded-xl overflow-hidden cursor-pointer group border border-white/10 hover:border-[#14F1D9]/50 transition-all"
            >
              <Image
                src={electronicsShopData.screens.desktop.src}
                alt="Shop 4.0 Desktop Store"
                fill
                className="object-contain group-hover:scale-101 transition-transform duration-500"
              />
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md text-[11px] text-white/70 border border-white/10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-3.5 h-3.5 text-[#14F1D9]" />
                <span>Нажмите для зума</span>
              </div>
            </div>
          </div>

          {/* Additional Device Mockups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {electronicsShopData.screens.mockups.map((m, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage({
                  src: m.src,
                  title: m.title,
                  subtitle: m.description
                })}
                className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 cursor-pointer group hover:border-[#14F1D9]/50 transition-all space-y-4"
              >
                <div className="relative aspect-[16/10] w-full bg-black/40 rounded-xl overflow-hidden">
                  <Image
                    src={m.src}
                    alt={m.title}
                    fill
                    className="object-contain group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider mb-1">
                    {m.type}
                  </div>
                  <div className="text-base font-bold font-montserrat text-white uppercase tracking-tight">
                    {m.title}
                  </div>
                  <p className="text-xs text-white/70 font-sans mt-1 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. DESIGN SYSTEM & TOKENS */}
        <section id="system" className="scroll-mt-24 space-y-10">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-widest mb-1">
              06 / ДИЗАЙН-СИСТЕМА
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
              Дизайн-система & UI Токены
            </h2>
            <p className="text-sm text-white/70 font-sans mt-2 max-w-3xl leading-relaxed">
              Единый визуальный язык Shop 4.0: акцентный мятный тил <code>#30B5A3</code>, глубокий черный <code>#191919</code>, строгая геометрия Montserrat и читабельный наборный Inter.
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
                  SHOP 4.0 RETINA
                </div>
                <p className="text-xs text-white/60 font-sans leading-relaxed">
                  Геометрический гротеск для заголовков категорий, баннеров распродаж и крупных ценников.
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] font-montserrat text-white/70 pt-2 border-t border-white/10">
                  <span className="px-2.5 py-1 rounded bg-white/5">Bold (700)</span>
                  <span className="px-2.5 py-1 rounded bg-white/5">SemiBold (600)</span>
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
                  Fast & Seamless Checkout Flow
                </div>
                <p className="text-xs text-white/60 font-sans leading-relaxed">
                  Оптимизирован для таблиц сравнения характеристик, корзины и экранов ввода адреса.
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] font-sans text-white/70 pt-2 border-t border-white/10">
                  <span className="px-2.5 py-1 rounded bg-white/5">Regular (400)</span>
                  <span className="px-2.5 py-1 rounded bg-white/5">Medium (500)</span>
                  <span className="px-2.5 py-1 rounded bg-white/5">SemiBold (600)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Design Tokens Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1A1A1A] border border-white/10 p-6 rounded-2xl">
              <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider mb-2">
                Акцентный тил
              </div>
              <div className="text-2xl font-bold font-montserrat text-white mb-2">
                #30B5A3
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                Фирменный мятный цвет кнопки чекаута с контрастностью 4.8:1 для максимального CTR.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 p-6 rounded-2xl">
              <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider mb-2">
                8-точечный грид
              </div>
              <div className="text-2xl font-bold font-montserrat text-white mb-2">
                8 pt Grid
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                Все отступы, высоты инпутов и радиусы скругления кратны 8px для предсказуемой верстки.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 p-6 rounded-2xl">
              <div className="text-xs font-montserrat font-bold text-[#14F1D9] uppercase tracking-wider mb-2">
                Шкала юзабилити SUS
              </div>
              <div className="text-2xl font-bold font-montserrat text-white mb-2">
                84 / 100
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                Попадание в топ 5% лучших E-Commerce решений по результатам слепого тестирования.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Full Navigation */}
        <CaseNavigation currentSlug="09-mockup-electronics" position="bottom" />
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
