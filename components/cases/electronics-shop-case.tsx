"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
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
  Users
} from "lucide-react";
import {
  electronicsShopData,
  AppScreen,
  UXHypothesis,
  UserPersona,
  CJMStep,
  CompetitorComparison
} from "@/lib/electronics-shop-data";

export function ElectronicsShopCase() {
  const [activeTab, setActiveTab] = useState<"overview" | "research" | "flow" | "desktop" | "system">("overview");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; subtitle?: string } | null>(null);
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(2); // Default to Home screen (index 2)
  const [selectedPersona, setSelectedPersona] = useState<number>(0);
  const [flowViewMode, setFlowViewMode] = useState<"step" | "grid">("step");

  const currentScreen: AppScreen = electronicsShopData.screens.mobileFlow[activeScreenIndex];

  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#30B5A3] selection:text-black">
      {/* 1. TOP HEADER / HERO */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 border-b border-white/10 overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#30B5A3]/10 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-white/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-white/50 mb-6 font-sans">
            <Link href="/" className="hover:text-[#30B5A3] transition-colors">Главная</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/#cases" className="hover:text-[#30B5A3] transition-colors">Кейсы</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#30B5A3] font-medium">Shop 4.0: Магазин электроники</span>
          </div>

          <div className="max-w-4xl">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#30B5A3]/10 border border-[#30B5A3]/30 text-[#30B5A3] text-xs font-bold uppercase tracking-wider mb-4 font-montserrat">
              <Sparkles className="w-3.5 h-3.5" />
              UX/UI ДИЗАЙН & E-COMMERCE АНАЛИТИКА
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 uppercase font-montserrat leading-[1.08]">
              {electronicsShopData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-white/80 font-normal leading-relaxed mb-6 max-w-3xl font-sans">
              {electronicsShopData.subtitle}
            </p>

            <p className="text-sm sm:text-base text-white/60 font-sans leading-relaxed max-w-3xl mb-8">
              {electronicsShopData.lead}
            </p>

            {/* Meta Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-white/70 pt-2 border-t border-white/10">
              <span className="px-3 py-1.5 bg-white/5 border border-white/10">
                <strong className="text-white">Роль:</strong> {electronicsShopData.meta.role}
              </span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/10">
                <strong className="text-white">Сроки:</strong> {electronicsShopData.meta.timeline}
              </span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/10">
                <strong className="text-white">Стек:</strong> {electronicsShopData.meta.tools}
              </span>
              <a
                href="https://www.figma.com/design/a9vzUuROmr46SHsm7nwum6/Shop-4.0-Copy?t=d3na0gdRxQ8Baeuj-0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#30B5A3]/10 text-[#30B5A3] border border-[#30B5A3]/30 hover:bg-[#30B5A3] hover:text-[#111111] transition-all font-montserrat font-bold text-xs uppercase tracking-wider"
              >
                <ExternalLink className="w-3 h-3" />
                Figma Исходник
              </a>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-10">
            {electronicsShopData.metrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#181818] border border-white/10 p-4 md:p-6 relative group hover:border-[#30B5A3]/50 transition-colors"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#30B5A3] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-baseline justify-between mb-1">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#30B5A3] font-montserrat">
                    {m.value}
                  </div>
                  <TrendingUp className="w-4 h-4 text-[#30B5A3]/60" />
                </div>
                <div className="text-xs sm:text-sm text-white font-bold font-montserrat uppercase tracking-wider mb-1">
                  {m.label}
                </div>
                <div className="text-[11px] text-white/50 font-sans leading-tight">
                  {m.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. TAB NAVIGATION */}
      <nav className="sticky top-20 z-40 bg-[#111111]/95 backdrop-blur-md border-b border-white/10 py-3">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-start md:justify-center gap-2 overflow-x-auto hide-scrollbar">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all font-montserrat ${
              activeTab === "overview"
                ? "bg-[#30B5A3] text-[#111111] shadow-[0_0_20px_rgba(48,181,163,0.3)]"
                : "bg-[#181818] text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            <Compass className="w-4 h-4" />
            Презентация Behance
          </button>

          <button
            onClick={() => setActiveTab("research")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all font-montserrat ${
              activeTab === "research"
                ? "bg-[#30B5A3] text-[#111111] shadow-[0_0_20px_rgba(48,181,163,0.3)]"
                : "bg-[#181818] text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            UX-исследования & Аналитика
          </button>

          <button
            onClick={() => setActiveTab("flow")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all font-montserrat ${
              activeTab === "flow"
                ? "bg-[#30B5A3] text-[#111111] shadow-[0_0_20px_rgba(48,181,163,0.3)]"
                : "bg-[#181818] text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            <Smartphone className="w-4 h-4" />
            Мобильный флоу (9 экранов)
          </button>

          <button
            onClick={() => setActiveTab("desktop")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all font-montserrat ${
              activeTab === "desktop"
                ? "bg-[#30B5A3] text-[#111111] shadow-[0_0_20px_rgba(48,181,163,0.3)]"
                : "bg-[#181818] text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            <Monitor className="w-4 h-4" />
            Десктоп 1440px
          </button>

          <button
            onClick={() => setActiveTab("system")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all font-montserrat ${
              activeTab === "system"
                ? "bg-[#30B5A3] text-[#111111] shadow-[0_0_20px_rgba(48,181,163,0.3)]"
                : "bg-[#181818] text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            <Palette className="w-4 h-4" />
            Дизайн-система & UI Kit
          </button>
        </div>
      </nav>

      {/* 3. TAB CONTENT */}
      <main className="container mx-auto px-4 md:px-8 py-10">

        {/* TAB 1: OVERVIEW (BEHANCE MASTER SHOWCASE) */}
        {activeTab === "overview" && (
          <div className="space-y-12">
            {/* Master Hero Mockup Card */}
            <div className="bg-[#181818] border border-white/15 p-6 md:p-10 relative overflow-hidden shadow-2xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-white/10 pb-6 mb-8">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#30B5A3] font-montserrat font-bold mb-1">
                    BEHANCE CASE STUDY • PRODUCT DESIGN
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-montserrat">
                    МАКБУК & СМАРТФОН: ЕДИНАЯ ЭКОСИСТЕМА ШОППИНГА
                  </h2>
                </div>
                <div className="text-xs text-white/50 font-sans">
                  Кликните по любому мокапу для полноэкранного зума
                </div>
              </div>

              {/* Side-by-Side High-Res Mockups */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-10">
                {/* Left: MacBook Showcase */}
                <div
                  onClick={() => setSelectedImage({
                    src: "/Кейсы/09-mockup-electronics/figma_exports/14_macbook_air_mockup.png",
                    title: "MacBook Air 13: Десктопная витрина интернет-магазина",
                    subtitle: "Полноформатный интерфейс 1440px с удобной навигацией по категориям и фильтрами"
                  })}
                  className="bg-[#141414] border border-white/15 hover:border-[#30B5A3] p-4 cursor-pointer group transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between px-2 py-1.5 mb-3 border-b border-white/10 pb-2">
                    <span className="text-xs font-bold text-white font-montserrat uppercase tracking-wider">
                      ● 01. Desktop Experience (MacBook)
                    </span>
                    <span className="text-[10px] text-white/50 font-sans flex items-center gap-1 group-hover:text-[#30B5A3]">
                      <Maximize2 className="w-3 h-3" /> Увеличить
                    </span>
                  </div>
                  <div className="relative aspect-[16/11] w-full bg-black/40 overflow-hidden">
                    <Image
                      src="/Кейсы/09-mockup-electronics/figma_exports/14_macbook_air_mockup.png"
                      alt="MacBook Mockup"
                      fill
                      className="object-contain group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/70 font-sans">
                    Широкая 12-колоночная сетка для вдумчивого подбора техники и сравнения параметров.
                  </div>
                </div>

                {/* Right: Realme Mobile Mockup */}
                <div
                  onClick={() => setSelectedImage({
                    src: "/Кейсы/09-mockup-electronics/figma_exports/13_realme_mockup.png",
                    title: "Realme 10: Мобильный опыт в руках покупателя",
                    subtitle: "Быстрое оформление в 2 касания без регистрации и лишних кликов"
                  })}
                  className="bg-[#141414] border border-white/15 hover:border-[#30B5A3] p-4 cursor-pointer group transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between px-2 py-1.5 mb-3 border-b border-white/10 pb-2">
                    <span className="text-xs font-bold text-[#30B5A3] font-montserrat uppercase tracking-wider">
                      ● 02. Mobile Ergonomics (Realme 10)
                    </span>
                    <span className="text-[10px] text-white/50 font-sans flex items-center gap-1 group-hover:text-[#30B5A3]">
                      <Maximize2 className="w-3 h-3" /> Увеличить
                    </span>
                  </div>
                  <div className="relative aspect-[16/11] w-full bg-black/40 overflow-hidden">
                    <Image
                      src="/Кейсы/09-mockup-electronics/figma_exports/13_realme_mockup.png"
                      alt="Realme Mockup"
                      fill
                      className="object-contain group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/70 font-sans">
                    Большая зона досягаемости для большого пальца: быстрый чекаут и моментальная оплата через СБП.
                  </div>
                </div>
              </div>

              {/* 4 Architectural Pillars of the Redesign */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-white/10">
                <div className="p-4 bg-[#141414] border border-white/10">
                  <div className="w-8 h-8 rounded bg-[#30B5A3]/10 border border-[#30B5A3]/30 flex items-center justify-center text-[#30B5A3] mb-3">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-montserrat uppercase mb-1">
                    Чекаут за 48 секунд
                  </h4>
                  <p className="text-xs text-white/60 font-sans leading-relaxed">
                    Упразднили 5 шагов старого чекаута: адрес, контакты и способ оплаты теперь на одном экране.
                  </p>
                </div>

                <div className="p-4 bg-[#141414] border border-white/10">
                  <div className="w-8 h-8 rounded bg-[#30B5A3]/10 border border-[#30B5A3]/30 flex items-center justify-center text-[#30B5A3] mb-3">
                    <SlidersHorizontal className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-montserrat uppercase mb-1">
                    Микро-фильтры ТТХ
                  </h4>
                  <p className="text-xs text-white/60 font-sans leading-relaxed">
                    Ключевые параметры (память, цвет, чипсет) выбираются в один клик без перехода на сторонние сайты.
                  </p>
                </div>

                <div className="p-4 bg-[#141414] border border-white/10">
                  <div className="w-8 h-8 rounded bg-[#30B5A3]/10 border border-[#30B5A3]/30 flex items-center justify-center text-[#30B5A3] mb-3">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-montserrat uppercase mb-1">
                    Сплит и СБП из коробки
                  </h4>
                  <p className="text-xs text-white/60 font-sans leading-relaxed">
                    Прозрачный расчёт долей снижает ценовой барьер для флагманских моделей на 24%.
                  </p>
                </div>

                <div className="p-4 bg-[#141414] border border-white/10">
                  <div className="w-8 h-8 rounded bg-[#30B5A3]/10 border border-[#30B5A3]/30 flex items-center justify-center text-[#30B5A3] mb-3">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-montserrat uppercase mb-1">
                    Сценарий Recovery
                  </h4>
                  <p className="text-xs text-white/60 font-sans leading-relaxed">
                    При сбое оплаты заказ не исчезает: экран ошибки предлагает альтернативные способы оплаты.
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Poster Full-Width Section */}
            <div className="bg-[#181818] border border-white/10 p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider text-[#30B5A3] font-montserrat">
                    EDITORIAL POSTER • HIGH-RESOLUTION RETINA SHOWCASE
                  </h3>
                  <p className="text-xs text-white/60 font-sans">
                    Презентационный плакат высокого разрешения (2400 × 1500 px) для оформления кейса на Behance
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImage({
                    src: "/Кейсы/09-mockup-electronics/figma_exports/behance_master_poster.jpg",
                    title: "Editorial Showcase Poster (2400 × 1500 px)",
                    subtitle: "Полноразмерный рендер дизайн-системы, десктопа 1440px и мобильного флоу Shop 4.0"
                  })}
                  className="text-xs text-[#30B5A3] hover:underline flex items-center gap-1 font-montserrat font-bold uppercase tracking-wider"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> Развернуть постер
                </button>
              </div>

              <div
                onClick={() => setSelectedImage({
                  src: "/Кейсы/09-mockup-electronics/figma_exports/behance_master_poster.jpg",
                  title: "Editorial Showcase Poster (2400 × 1500 px)",
                  subtitle: "Полноразмерный рендер дизайн-системы, десктопа 1440px и мобильного флоу Shop 4.0"
                })}
                className="relative aspect-[16/10] w-full bg-black/60 overflow-hidden cursor-pointer group border border-white/10 hover:border-[#30B5A3]/60 transition-all"
              >
                <Image
                  src="/Кейсы/09-mockup-electronics/figma_exports/behance_master_poster.jpg"
                  alt="Editorial Poster"
                  fill
                  className="object-contain group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: UX RESEARCH & ANALYTICS */}
        {activeTab === "research" && (
          <div className="space-y-12">
            {/* Problem & Goal Section */}
            <div className="bg-[#181818] border border-white/10 p-6 md:p-8">
              <div className="max-w-3xl">
                <div className="text-xs uppercase tracking-wider text-[#30B5A3] font-montserrat font-bold mb-2">
                  PROBLEM STATEMENT & CONTEXT
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-montserrat mb-4">
                  Почему старый e-commerce электроники терял 68% корзин
                </h3>
                <p className="text-white/80 leading-relaxed font-sans text-sm sm:text-base mb-6">
                  {electronicsShopData.researchOverview.problemStatement}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 border-l-2 border-[#30B5A3]">
                    <h5 className="text-xs uppercase text-[#30B5A3] font-montserrat font-bold mb-2">
                      Бизнес-цели проекта
                    </h5>
                    <ul className="space-y-2 text-xs text-white/70 font-sans">
                      {electronicsShopData.researchOverview.businessGoals.map((g, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#30B5A3] shrink-0 mt-0.5" />
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-white/5 border-l-2 border-white/40">
                    <h5 className="text-xs uppercase text-white/80 font-montserrat font-bold mb-2">
                      Потребности пользователей
                    </h5>
                    <ul className="space-y-2 text-xs text-white/70 font-sans">
                      {electronicsShopData.researchOverview.userNeeds.map((n, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white/50 shrink-0 mt-0.5" />
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Competitor Benchmark Matrix */}
            <div className="bg-[#181818] border border-white/10 p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#30B5A3] font-montserrat font-bold mb-1">
                    COMPETITIVE BENCHMARKING
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-montserrat">
                    Бенчмарк-матрица конкурентов: DNS, М.Видео, Ситилинк
                  </h3>
                </div>
                <div className="text-xs text-white/50 font-sans">
                  Сравнительный аудит по 10-балльной шкале юзабилити
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {electronicsShopData.competitors.map((comp, idx) => (
                  <div
                    key={idx}
                    className={`p-5 border transition-all flex flex-col justify-between ${
                      comp.name.includes("Shop 4.0")
                        ? "bg-[#30B5A3]/10 border-[#30B5A3] shadow-[0_0_20px_rgba(48,181,163,0.15)]"
                        : "bg-[#141414] border-white/10"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-base font-bold text-white font-montserrat">{comp.name}</h4>
                        <span
                          className={`text-xs font-black px-2 py-0.5 font-montserrat ${
                            comp.score > 8 ? "bg-[#30B5A3] text-black" : "bg-white/10 text-white"
                          }`}
                        >
                          {comp.score} / 10
                        </span>
                      </div>
                      <div className="text-[11px] text-[#30B5A3] font-montserrat font-bold uppercase mb-3">
                        {comp.category}
                      </div>

                      <div className="space-y-2 mb-4 text-xs font-sans">
                        <div>
                          <span className="text-white/40 block text-[10px] uppercase font-montserrat">Плюсы:</span>
                          <span className="text-white/80">{comp.strengths.join(", ")}</span>
                        </div>
                        <div>
                          <span className="text-white/40 block text-[10px] uppercase font-montserrat">Минусы:</span>
                          <span className="text-white/60">{comp.weaknesses.join(", ")}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/10 text-[11px] text-white/70 font-sans">
                      <strong className="text-[#30B5A3] block mb-0.5">Точка роста:</strong>
                      {comp.opportunity}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Personas */}
            <div className="bg-[#181818] border border-white/10 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#30B5A3] font-montserrat font-bold mb-1">
                    TARGET AUDIENCE & ARCHETYPES
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-montserrat">
                    Ключевые персоны: Гик vs Покупатель подарка
                  </h3>
                </div>
                <div className="flex gap-2">
                  {electronicsShopData.personas.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedPersona(i)}
                      className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all font-montserrat ${
                        selectedPersona === i ? "bg-[#30B5A3] text-[#111111]" : "bg-[#141414] text-white/60 hover:text-white"
                      }`}
                    >
                      {p.name.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Persona Detail Card */}
              {(() => {
                const persona = electronicsShopData.personas[selectedPersona];
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#141414] border border-white/10 p-6">
                    <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">
                      <div className="w-14 h-14 rounded-full bg-[#30B5A3]/20 border border-[#30B5A3] flex items-center justify-center text-[#30B5A3] mb-4">
                        <Users className="w-7 h-7" />
                      </div>
                      <h4 className="text-xl font-bold text-white font-montserrat mb-1">{persona.name}</h4>
                      <p className="text-xs text-[#30B5A3] font-montserrat font-semibold mb-3">{persona.role}</p>
                      <div className="text-xs text-white/60 space-y-1 font-sans mb-4">
                        <p>Возраст: {persona.age}</p>
                        <p>Техническая грамотность: {persona.techLiteracy}</p>
                      </div>
                      <div className="p-3 bg-white/5 border border-white/10 text-xs italic text-white/80 font-sans">
                        &ldquo;{persona.quote}&rdquo;
                      </div>
                    </div>

                    <div className="lg:col-span-8 space-y-4">
                      <div>
                        <h5 className="text-xs uppercase font-montserrat font-bold text-[#30B5A3] mb-2">
                          Цели и задачи
                        </h5>
                        <ul className="space-y-1.5 text-xs text-white/80 font-sans">
                          {persona.goals.map((g, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#30B5A3] shrink-0 mt-0.5" />
                              <span>{g}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-xs uppercase font-montserrat font-bold text-red-400 mb-2">
                          Болевые точки и барьеры
                        </h5>
                        <ul className="space-y-1.5 text-xs text-white/70 font-sans">
                          {persona.painPoints.map((p, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-white/10">
                        <span className="text-xs text-white/40 font-montserrat uppercase mr-2">Используемые устройства:</span>
                        <div className="inline-flex flex-wrap gap-1.5 mt-1">
                          {persona.favoriteDevices.map((d, i) => (
                            <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/10 text-[11px] text-white/80 font-sans">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* CJM (Customer Journey Map) */}
            <div className="bg-[#181818] border border-white/10 p-6 md:p-8">
              <div className="mb-6">
                <div className="text-xs uppercase tracking-wider text-[#30B5A3] font-montserrat font-bold mb-1">
                  CUSTOMER JOURNEY MAP (CJM)
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-montserrat">
                  Эмоциональная карта пути: от первого клика до чекаута
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {electronicsShopData.cjm.map((step, idx) => (
                  <div key={idx} className="bg-[#141414] border border-white/10 p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-[#30B5A3] font-montserrat uppercase">
                          {step.stage}
                        </span>
                        <span className="text-xs font-black text-white">
                          {"★".repeat(step.emotionalScore)}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-white font-montserrat mb-2">
                        {step.touchpoint}
                      </div>
                      <p className="text-[11px] text-white/60 font-sans mb-3">
                        {step.userAction}
                      </p>
                      <div className="p-2 bg-red-500/10 border border-red-500/20 text-[10px] text-red-300 font-sans mb-3">
                        <strong>Боль:</strong> {step.painPoint}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10 text-[11px] text-[#30B5A3] font-sans">
                      <strong>UX-решение:</strong> {step.uxSolution}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hypotheses & Validation Cards */}
            <div className="bg-[#181818] border border-white/10 p-6 md:p-8">
              <div className="mb-6">
                <div className="text-xs uppercase tracking-wider text-[#30B5A3] font-montserrat font-bold mb-1">
                  HYPOTHESIS-DRIVEN DESIGN & METRICS
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-montserrat">
                  4 продуктовые гипотезы: Что тестировали и что получили
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {electronicsShopData.hypotheses.map((hyp) => (
                  <div key={hyp.id} className="bg-[#141414] border border-white/10 p-5 flex flex-col justify-between hover:border-[#30B5A3]/40 transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold font-montserrat text-[#30B5A3]">{hyp.id}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#30B5A3]/20 text-[#30B5A3] border border-[#30B5A3]/30 font-montserrat">
                          Подтверждена
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white font-montserrat mb-3">{hyp.title}</h4>
                      <p className="text-xs text-white/60 font-sans mb-3 leading-relaxed">
                        <strong className="text-white/80">Проблема:</strong> {hyp.problem}
                      </p>
                      <p className="text-xs text-white/70 font-sans mb-4 leading-relaxed bg-white/5 p-2.5 border border-white/5">
                        <strong className="text-[#30B5A3]">Гипотеза:</strong> {hyp.hypothesis}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-white/50 font-sans">Метрика: {hyp.metric}</span>
                      <strong className="text-[#30B5A3] font-montserrat">{hyp.result}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: MOBILE FLOW (9 INTERACTIVE SCREENS) */}
        {activeTab === "flow" && (
          <div className="space-y-8">
            {/* View Mode Toggle & Step Navigator */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-[#181818] border border-white/10 p-4">
              <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar max-w-full">
                {electronicsShopData.screens.mobileFlow.map((scr, idx) => (
                  <button
                    key={scr.id}
                    onClick={() => {
                      setActiveScreenIndex(idx);
                      setFlowViewMode("step");
                    }}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all font-montserrat ${
                      activeScreenIndex === idx && flowViewMode === "step"
                        ? "bg-[#30B5A3] text-[#111111]"
                        : "bg-[#141414] text-white/60 hover:text-white"
                    }`}
                  >
                    {scr.step}. {scr.title.split(" ")[0]}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFlowViewMode("step")}
                  className={`px-3 py-1.5 text-xs font-montserrat font-bold uppercase transition-colors ${
                    flowViewMode === "step" ? "bg-white/20 text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  Интерактивный шаг
                </button>
                <button
                  onClick={() => setFlowViewMode("grid")}
                  className={`px-3 py-1.5 text-xs font-montserrat font-bold uppercase transition-colors ${
                    flowViewMode === "grid" ? "bg-white/20 text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  Сетка (Все 9 экранов)
                </button>
              </div>
            </div>

            {/* STEP VIEW (Interactive Phone Simulator) */}
            {flowViewMode === "step" && (
              <div className="bg-[#181818] border border-white/15 p-6 md:p-10 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Phone Simulator Frame */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative w-[280px] sm:w-[320px] aspect-[9/16] bg-[#000000] rounded-[40px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-4 border-[#2A2A2A] relative group">
                      {/* Speaker / Notch */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#111111] rounded-full z-20" />

                      {/* Screen Content */}
                      <div
                        onClick={() => setSelectedImage({
                          src: currentScreen.src,
                          title: currentScreen.title,
                          subtitle: currentScreen.description
                        })}
                        className="relative w-full h-full rounded-[28px] overflow-hidden cursor-pointer group bg-black"
                      >
                        <Image
                          src={currentScreen.src}
                          alt={currentScreen.title}
                          fill
                          className="object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3 py-1.5 bg-[#30B5A3] text-[#111111] text-xs font-bold uppercase font-montserrat flex items-center gap-1">
                            <Maximize2 className="w-3.5 h-3.5" /> Увеличить
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: UX Breakdown & Navigation */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <div className="inline-block text-xs uppercase tracking-wider text-[#30B5A3] font-montserrat font-bold mb-1">
                        ШАГ {currentScreen.step} ИЗ 09 • {currentScreen.category}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-montserrat mb-3">
                        {currentScreen.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed font-sans text-sm sm:text-base">
                        {currentScreen.description}
                      </p>
                    </div>

                    <div className="bg-[#141414] border border-white/10 p-5 space-y-3">
                      <h4 className="text-xs uppercase font-montserrat font-bold text-white tracking-wider">
                        Ключевые UX-решения экрана:
                      </h4>
                      <ul className="space-y-2 text-xs font-sans text-white/70">
                        {currentScreen.uxHighlights.map((hl, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#30B5A3] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Step Navigation Controls */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <button
                        disabled={activeScreenIndex === 0}
                        onClick={() => setActiveScreenIndex(prev => Math.max(0, prev - 1))}
                        className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase font-montserrat transition-all ${
                          activeScreenIndex === 0
                            ? "opacity-30 cursor-not-allowed bg-white/5 text-white/40"
                            : "bg-[#141414] text-white hover:bg-[#30B5A3] hover:text-[#111111]"
                        }`}
                      >
                        <ChevronLeft className="w-4 h-4" /> Назад
                      </button>

                      <span className="text-xs text-white/50 font-sans">
                        Экран {activeScreenIndex + 1} из {electronicsShopData.screens.mobileFlow.length}
                      </span>

                      <button
                        disabled={activeScreenIndex === electronicsShopData.screens.mobileFlow.length - 1}
                        onClick={() => setActiveScreenIndex(prev => Math.min(electronicsShopData.screens.mobileFlow.length - 1, prev + 1))}
                        className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase font-montserrat transition-all ${
                          activeScreenIndex === electronicsShopData.screens.mobileFlow.length - 1
                            ? "opacity-30 cursor-not-allowed bg-white/5 text-white/40"
                            : "bg-[#30B5A3] text-[#111111] hover:bg-white"
                        }`}
                      >
                        Вперёд <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* GRID VIEW (All 9 Screens in a row) */}
            {flowViewMode === "grid" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {electronicsShopData.screens.mobileFlow.map((scr, idx) => (
                  <div
                    key={scr.id}
                    onClick={() => setSelectedImage({
                      src: scr.src,
                      title: scr.title,
                      subtitle: scr.description
                    })}
                    className="bg-[#181818] border border-white/10 hover:border-[#30B5A3] p-3 cursor-pointer group transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-[#30B5A3] font-montserrat uppercase">
                          {scr.step}. {scr.category}
                        </span>
                        <Maximize2 className="w-3 h-3 text-white/40 group-hover:text-[#30B5A3]" />
                      </div>
                      <div className="relative aspect-[9/16] w-full bg-black/60 overflow-hidden mb-3">
                        <Image
                          src={scr.src}
                          alt={scr.title}
                          fill
                          className="object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white font-montserrat mb-1">{scr.title}</h4>
                      <p className="text-[10px] text-white/50 font-sans line-clamp-2">{scr.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 4: DESKTOP 1440PX */}
        {activeTab === "desktop" && (
          <div className="space-y-8">
            <div className="bg-[#181818] border border-white/15 p-6 md:p-10 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#30B5A3] font-montserrat font-bold mb-1">
                    RESPONSIVE E-COMMERCE • 1440PX DESKTOP
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-montserrat">
                    {electronicsShopData.screens.desktop.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedImage({
                    src: electronicsShopData.screens.desktop.src,
                    title: electronicsShopData.screens.desktop.title,
                    subtitle: electronicsShopData.screens.desktop.description
                  })}
                  className="px-3 py-1.5 bg-[#30B5A3] text-[#111111] hover:bg-white text-xs font-bold uppercase font-montserrat flex items-center gap-1.5 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> Открыть в 100% зуме
                </button>
              </div>

              <p className="text-sm text-white/70 font-sans max-w-3xl mb-8 leading-relaxed">
                {electronicsShopData.screens.desktop.description}
              </p>

              {/* Desktop Window Frame */}
              <div className="bg-[#141414] border border-white/20 rounded-t-xl overflow-hidden shadow-2xl">
                {/* Browser Toolbar */}
                <div className="bg-[#222222] px-4 py-3 border-b border-white/10 flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="bg-[#141414] px-4 py-1 rounded-md text-[11px] text-white/50 font-sans flex-1 max-w-md">
                    https://shop4.retail-tech.io/catalog/electronics
                  </div>
                </div>

                {/* Desktop Screenshot Preview */}
                <div
                  onClick={() => setSelectedImage({
                    src: electronicsShopData.screens.desktop.src,
                    title: electronicsShopData.screens.desktop.title,
                    subtitle: electronicsShopData.screens.desktop.description
                  })}
                  className="relative aspect-[16/10] w-full bg-black/50 overflow-hidden cursor-pointer group"
                >
                  <Image
                    src={electronicsShopData.screens.desktop.src}
                    alt="Desktop Version"
                    fill
                    className="object-contain group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-[#30B5A3] text-[#111111] text-xs font-bold uppercase font-montserrat flex items-center gap-2">
                      <Maximize2 className="w-4 h-4" /> Нажмите для полного экрана
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Layout Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {electronicsShopData.screens.desktop.highlights.map((h, i) => (
                  <div key={i} className="p-4 bg-[#141414] border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#30B5A3] mb-2" />
                    <p className="text-xs text-white/80 font-sans leading-relaxed">{h}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: DESIGN SYSTEM & UI KIT */}
        {activeTab === "system" && (
          <div className="space-y-12">
            {/* Color Palette Tokens */}
            <div className="bg-[#181818] border border-white/10 p-6 md:p-8">
              <div className="mb-6">
                <div className="text-xs uppercase tracking-wider text-[#30B5A3] font-montserrat font-bold mb-1">
                  DESIGN SYSTEM • COLOR TOKENS
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-montserrat">
                  Фирменная палитра и роли цветов
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {electronicsShopData.designTokens.colors.map((c, i) => (
                  <div key={i} className="bg-[#141414] border border-white/10 p-4 flex flex-col items-center text-center group hover:border-[#30B5A3]/40 transition-colors">
                    <div
                      className="w-16 h-16 rounded-full mb-3 border border-white/20 shadow-inner group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div className="text-xs font-bold text-white font-montserrat mb-0.5">{c.name}</div>
                    <div className="text-[11px] font-montserrat font-bold text-[#30B5A3] mb-2">{c.hex}</div>
                    <div className="text-[10px] text-white/60 font-sans leading-tight line-clamp-2">
                      {c.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Hierarchy */}
            <div className="bg-[#181818] border border-white/10 p-6 md:p-8">
              <div className="mb-6">
                <div className="text-xs uppercase tracking-wider text-[#30B5A3] font-montserrat font-bold mb-1">
                  TYPOGRAPHY HIERARCHY (ROBOTO & MONTSERRAT)
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-montserrat">
                  Шрифтовая сетка и микрокопирайтинг
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {electronicsShopData.designTokens.typography.map((t, i) => (
                  <div key={i} className="bg-[#141414] border border-white/10 p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-[#30B5A3] font-montserrat">{t.name}</h4>
                      <span className="text-[10px] text-white/40 font-sans">{t.styles}</span>
                    </div>
                    <p className="text-xs text-white/60 font-sans">{t.description}</p>
                    <div className="p-3 bg-white/5 border border-white/10 text-sm text-white font-sans mt-2">
                      {t.preview}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 8-Point Grid & Components */}
            <div className="bg-[#181818] border border-white/10 p-6 md:p-8">
              <div className="mb-6">
                <div className="text-xs uppercase tracking-wider text-[#30B5A3] font-montserrat font-bold mb-1">
                  GRID & COMPONENT SYSTEM
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-montserrat">
                  8-Point Grid System & Спецификации
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {electronicsShopData.designTokens.gridSystem.map((g, i) => (
                  <div key={i} className="bg-[#141414] border border-white/10 p-5">
                    <div className="text-xs font-bold text-[#30B5A3] font-montserrat uppercase mb-1">
                      {g.columns}
                    </div>
                    <h4 className="text-base font-bold text-white font-montserrat mb-2">{g.title}</h4>
                    <p className="text-xs text-white/60 font-sans mb-3 leading-relaxed">{g.description}</p>
                    <div className="text-[11px] text-white/40 font-sans pt-2 border-t border-white/10">
                      {g.margins}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* 4. LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-[#30B5A3] hover:text-[#111111] text-white transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-6xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center max-w-2xl">
              <p className="text-base md:text-lg font-bold text-white font-montserrat">
                {selectedImage.title}
              </p>
              {selectedImage.subtitle && (
                <p className="text-xs text-white/60 font-sans mt-1">
                  {selectedImage.subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 5. FOOTER CTA */}
      <footer className="border-t border-white/10 bg-[#141414] py-16 mt-20">
        <div className="container mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white font-montserrat uppercase mb-1">
              Следующий кейс
            </h3>
            <p className="text-xs text-white/60 font-sans">
              Архитектура и интерьер загородного дома (140 м²)
            </p>
          </div>
          <Link
            href="/cases/10-house-project"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#30B5A3] text-[#111111] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all font-montserrat"
          >
            Смотреть кейс «Интерьер дома»
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
