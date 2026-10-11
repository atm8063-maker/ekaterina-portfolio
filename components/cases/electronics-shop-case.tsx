"use client";

import React, { useState, useEffect } from "react";
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
  electronicsShopDataByLang,
  AppScreen,
  UXHypothesis,
  UserPersona,
  CJMStep,
  CompetitorComparison
} from "@/lib/electronics-shop-data";

import Header from "@/components/layout/Header";
import { CaseNavigation } from "@/components/cases/case-navigation";
import { useLanguage, PageTitle } from "@/components/language-provider";

const t = {
  RU: {
    heroTag: "UX/UI ДИЗАЙН & E-COMMERCE АНАЛИТИКА",
    navLabel: "Навигация по кейсу:", nav1: "01. Мастер-постер", nav2: "02. UX Исследования", nav3: "03. CJM & Гипотезы", nav4: "04. Мобильный флоу", nav5: "05. Десктоп 1440px", nav6: "06. Дизайн-система",
    s1eyebrow: "01 / ШОУКЕЙС BEHANCE", s1title: "Editorial Retina Master Poster", s1lead: "Презентационный плакат высокого разрешения (2400 × 1500 px) для оформления кейса на Behance",
    s1label: "Полноформатный презентационный плакат", s1sub: "Десктоп 1440px, мобильные экраны чекаута и метрики дизайн-системы",
    s1btn: "Открыть плакат на весь экран", s1zoomHint: "Кликните для зума (2.4K)",
    s1posterTitle: "Editorial Showcase Poster (2400 × 1500 px)", s1posterSub: "Полноразмерный рендер дизайн-системы, десктопа 1440px и мобильного флоу Shop 4.0",
    s1card1t: "1-Экранный чекаут", s1card1d: "Снижение времени оформления заказа со 134 секунд до 48 секунд благодаря автозаполнению и мгновенному выбору ПВЗ.",
    s1card2t: "Фирменный мятный акцент", s1card2d: "Оттенок Mint Teal обеспечивает контрастность 4.8:1 на черном фоне и мгновенно считывается как CTA.",
    s1card3t: "Адаптивный 12-колоночный грид", s1card3d: "Сетка выверена под десктопы 1440px и мобильные экраны 375px с сохранением единого шага отступов 8pt.",
    s2eyebrow: "02 / UX АНАЛИТИКА", s2title: "UX Исследования & Анализ конкурентов",
    s2benchTitle: "Бенчмарк-матрица конкурентов: DNS, М.Видео, Ситилинк vs Shop 4.0", s2benchSub: "Сравнительный аудит по 10-балльной шкале юзабилити", s2standard: "Shop 4.0 Standard",
    strengths: "Сильные стороны:", weaknesses: "Слабые стороны:", opportunity: "Точка роста:",
    personasTitle: "Целевые персоны покупателей (User Personas)", age: "Возраст:", techLit: "Техническая грамотность:",
    goalsTitle: "Покупательские цели и задачи:", painsTitle: "Болевые точки и барьеры:", devicesTitle: "Используемые устройства:",
    s3eyebrow: "03 / ПУТЬ ПОЛЬЗОВАТЕЛЯ", s3title: "Customer Journey Map & Продуктовые гипотезы",
    s3lead: "Картирование эмоционального состояния покупателя на каждом этапе воронки — от первого поиска гаджета до получения трек-номера отправления.",
    cjmTitle: "5 Этапов оформления заказа (CJM)", pain: "Боль:", solution: "Решение:",
    hypTitle: "4 Продуктовые гипотезы с A/B результатами", confirmed: "Подтверждена", optimized: "Оптимизирована",
    problem: "Проблема:", hypothesis: "UX-гипотеза:", metric: "Метрика проверки", result: "Результат теста",
    s4eyebrow: "04 / МОБИЛЬНЫЙ ФЛОУ", s4title: "Интерактивный симулятор чекаута (9 экранов)",
    phoneSimBtn: "Симулятор телефона", gridBtn: "Сетка всех 9 экранов", screenLabel: "Экран", of9: "из 9", zoomBtn: "Увеличить",
    keyDecisions: "Ключевые UX-решения экрана:", prevScreen: "Предыдущий экран", nextScreen: "Следующий экран",
    s5eyebrow: "05 / ДЕСКТОПНАЯ ВЕРСИЯ", s5title: "Десктопный магазин 1440px & Мультиустройства",
    s5lead: "Полноформатный адаптивный интернет-магазин электроники с быстрым фильтром характеристик, липкой корзиной и моментальным предпросмотром спецификаций гаджетов.",
    expandDesktop: "Развернуть десктоп", zoomHint: "Нажмите для зума",
    s6eyebrow: "06 / ДИЗАЙН-СИСТЕМА", s6title: "Дизайн-система & UI Токены",
    s6lead: "Единый визуальный язык Shop 4.0: акцентный мятный тил #30B5A3, глубокий черный #191919, строгая геометрия Montserrat и читабельный наборный Inter.",
    fontHierTitle: "Шрифтовая иерархия проекта (Typography Tokens)",
    headingsLabel: "Заголовки & Акценты", headingsDemo: "SHOP 4.0 RETINA", headingsDesc: "Геометрический гротеск для заголовков категорий, баннеров распродаж и крупных ценников.",
    interfaceLabel: "Интерфейс & Наборный текст", interfaceDemo: "Fast & Seamless Checkout Flow", interfaceDesc: "Оптимизирован для таблиц сравнения характеристик, корзины и экранов ввода адреса.",
    accentTeal: "Акцентный тил", accentTealDesc: "Фирменный мятный цвет кнопки чекаута с контрастностью 4.8:1 для максимального CTR.",
    grid8: "8-точечный грид", grid8Desc: "Все отступы, высоты инпутов и радиусы скругления кратны 8px для предсказуемой верстки.",
    susScale: "Шкала юзабилити SUS", susDesc: "Попадание в топ 5% лучших E-Commerce решений по результатам слепого тестирования.",
  },
  EN: {
    heroTag: "UX/UI DESIGN & E-COMMERCE ANALYTICS",
    navLabel: "Case navigation:", nav1: "01. Master Poster", nav2: "02. UX Research", nav3: "03. CJM & Hypotheses", nav4: "04. Mobile Flow", nav5: "05. Desktop 1440px", nav6: "06. Design System",
    s1eyebrow: "01 / BEHANCE SHOWCASE", s1title: "Editorial Retina Master Poster", s1lead: "A high-resolution presentation poster (2400 × 1500 px) for the Behance case cover",
    s1label: "Full-format presentation poster", s1sub: "1440px desktop, mobile checkout screens, and design system tokens",
    s1btn: "Open poster full-screen", s1zoomHint: "Click to zoom (2.4K)",
    s1posterTitle: "Editorial Showcase Poster (2400 × 1500 px)", s1posterSub: "A full-size render of the design system, the 1440px desktop, and the Shop 4.0 mobile flow",
    s1card1t: "Single-Screen Checkout", s1card1d: "Cut checkout time from 134 seconds to 48 seconds via autofill and instant pickup-point selection.",
    s1card2t: "Signature Mint Accent", s1card2d: "The Mint Teal shade gives a 4.8:1 contrast ratio on black and reads instantly as a CTA.",
    s1card3t: "Responsive 12-Column Grid", s1card3d: "Tuned for 1440px desktops and 375px mobile screens with a consistent 8pt spacing step.",
    s2eyebrow: "02 / UX ANALYTICS", s2title: "UX Research & Competitor Analysis",
    s2benchTitle: "Competitor Benchmark Matrix: DNS, M.Video, Citilink vs Shop 4.0", s2benchSub: "A comparative usability audit on a 10-point scale", s2standard: "Shop 4.0 Standard",
    strengths: "Strengths:", weaknesses: "Weaknesses:", opportunity: "Opportunity:",
    personasTitle: "Target Buyer Personas", age: "Age:", techLit: "Tech literacy:",
    goalsTitle: "Shopping goals and tasks:", painsTitle: "Pain points and barriers:", devicesTitle: "Devices used:",
    s3eyebrow: "03 / USER JOURNEY", s3title: "Customer Journey Map & Product Hypotheses",
    s3lead: "Mapping the buyer's emotional state at every step of the funnel — from the first gadget search to receiving the tracking number.",
    cjmTitle: "5 Checkout Stages (CJM)", pain: "Pain:", solution: "Solution:",
    hypTitle: "4 Product Hypotheses with A/B Results", confirmed: "Confirmed", optimized: "Optimized",
    problem: "Problem:", hypothesis: "UX hypothesis:", metric: "Verification metric", result: "Test result",
    s4eyebrow: "04 / MOBILE FLOW", s4title: "Interactive Checkout Simulator (9 Screens)",
    phoneSimBtn: "Phone simulator", gridBtn: "Grid of all 9 screens", screenLabel: "Screen", of9: "of 9", zoomBtn: "Zoom in",
    keyDecisions: "Key UX decisions for this screen:", prevScreen: "Previous screen", nextScreen: "Next screen",
    s5eyebrow: "05 / DESKTOP VERSION", s5title: "1440px Desktop Store & Multi-Device",
    s5lead: "A full-format responsive electronics store with fast spec filtering, a sticky cart, and instant gadget spec previews.",
    expandDesktop: "Expand desktop view", zoomHint: "Click to zoom",
    s6eyebrow: "06 / DESIGN SYSTEM", s6title: "Design System & UI Tokens",
    s6lead: "The unified Shop 4.0 visual language: the mint teal #30B5A3 accent, deep black #191919, strict Montserrat geometry, and readable Inter body text.",
    fontHierTitle: "Project Typography Hierarchy (Typography Tokens)",
    headingsLabel: "Headings & Accents", headingsDemo: "SHOP 4.0 RETINA", headingsDesc: "A geometric sans for category headings, sale banners, and large price tags.",
    interfaceLabel: "Interface & Body Text", interfaceDemo: "Fast & Seamless Checkout Flow", interfaceDesc: "Tuned for spec comparison tables, the cart, and address-entry screens.",
    accentTeal: "Accent Teal", accentTealDesc: "The signature mint checkout-button color, at a 4.8:1 contrast ratio for maximum CTR.",
    grid8: "8-Point Grid", grid8Desc: "All spacing, input heights, and corner radii are multiples of 8px for predictable layout.",
    susScale: "SUS Usability Scale", susDesc: "Placed in the top 5% of e-commerce solutions in blind usability testing.",
  },
};

export function ElectronicsShopCase() {
  const { lang } = useLanguage();
  const tr = t[lang];
  const electronicsShopData = electronicsShopDataByLang[lang];
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; subtitle?: string } | null>(null);
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(2); // Default to Home screen
  const [selectedPersonaIndex, setSelectedPersonaIndex] = useState<number>(0);
  const [flowViewMode, setFlowViewMode] = useState<"step" | "grid">("step");

  const currentScreen: AppScreen = electronicsShopData.screens.mobileFlow[activeScreenIndex];
  const activePersona: UserPersona = electronicsShopData.personas[selectedPersonaIndex];

  // Navigating here via a case's prev/next link doesn't always land at the top.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background text-[#E0E0E0] selection:bg-primary selection:text-black font-inter relative">
      <PageTitle titleRu="Кейс: Магазин электроники — Екатерина Разумова" titleEn="Case Study: Electronics Store — Ekaterina Razumova" />
      {/* Background paper texture matching Ekaterina's site */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/paper-clean-dark.webp"
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
      <section className="relative pt-16 pb-20 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#162e2a]/25 via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-primary font-montserrat font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            {tr.heroTag}
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
                className="bg-surface border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all group"
              >
                <div className="text-2xl sm:text-3xl font-bold font-montserrat text-white group-hover:text-primary transition-colors">
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
            <span className="text-white/40 uppercase tracking-wider mr-2 text-[11px]">{tr.navLabel}</span>
            <a href="#poster" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">{tr.nav1}</a>
            <a href="#research" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">{tr.nav2}</a>
            <a href="#cjm" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">{tr.nav3}</a>
            <a href="#flow" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">{tr.nav4}</a>
            <a href="#desktop" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">{tr.nav5}</a>
            <a href="#system" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">{tr.nav6}</a>
          </div>
        </div>
      </section>

      {/* Main Single-Scroll Long-Read Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-28">

        {/* 1. EDITORIAL MASTER SHOWCASE POSTER */}
        <section id="poster" className="scroll-mt-24 space-y-8">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-montserrat font-bold text-primary uppercase tracking-widest mb-1">
                {tr.s1eyebrow}
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
                {tr.s1title}
              </h2>
            </div>
            <p className="text-xs text-white/60 font-sans max-w-md">
              {tr.s1lead}
            </p>
          </div>

          <div className="bg-surface border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-montserrat font-bold text-primary uppercase tracking-wider">
                  {tr.s1label}
                </span>
                <p className="text-xs text-white/70 font-sans mt-0.5">
                  {tr.s1sub}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage({
                  src: "/Кейсы/09-mockup-electronics/figma_exports/behance_master_poster.webp",
                  title: "Editorial Showcase Poster (2400 × 1500 px)",
                  subtitle: "Полноразмерный рендер дизайн-системы, десктопа 1440px и мобильного флоу Shop 4.0"
                })}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-primary hover:text-black text-white text-xs font-montserrat font-semibold transition-all border border-white/10 hover:border-primary"
              >
                <Maximize2 className="w-4 h-4" />
                <span>{tr.s1btn}</span>
              </button>
            </div>

            <div
              onClick={() => setSelectedImage({
                src: "/Кейсы/09-mockup-electronics/figma_exports/behance_master_poster.webp",
                title: "Editorial Showcase Poster (2400 × 1500 px)",
                subtitle: "Полноразмерный рендер дизайн-системы, десктопа 1440px и мобильного флоу Shop 4.0"
              })}
              className="relative aspect-[16/10] w-full bg-black/60 rounded-xl overflow-hidden cursor-pointer group border border-white/10 hover:border-primary/50 transition-all"
            >
              <Image
                src="/Кейсы/09-mockup-electronics/figma_exports/behance_master_poster.webp"
                alt="Editorial Poster"
                fill
                className="object-contain group-hover:scale-101 transition-transform duration-500"
              />
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md text-[11px] text-white/70 border border-white/10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-3.5 h-3.5 text-primary" />
                <span>{tr.s1zoomHint}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-black/40 border border-white/5 p-5 rounded-xl">
                <div className="text-sm font-bold font-montserrat uppercase tracking-wider text-white mb-1.5">
                  {tr.s1card1t}
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  {tr.s1card1d}
                </p>
              </div>
              <div className="bg-black/40 border border-white/5 p-5 rounded-xl">
                <div className="text-sm font-bold font-montserrat uppercase tracking-wider text-white mb-1.5">
                  {tr.s1card2t}
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  {tr.s1card2d}
                </p>
              </div>
              <div className="bg-black/40 border border-white/5 p-5 rounded-xl">
                <div className="text-sm font-bold font-montserrat uppercase tracking-wider text-white mb-1.5">
                  {tr.s1card3t}
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  {tr.s1card3d}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. UX RESEARCH & COMPETITOR BENCHMARK */}
        <section id="research" className="scroll-mt-24 space-y-10">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-montserrat font-bold text-primary uppercase tracking-widest mb-1">
              {tr.s2eyebrow}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
              {tr.s2title}
            </h2>
            <p className="text-sm text-white/70 font-sans mt-2 max-w-3xl leading-relaxed">
              {electronicsShopData.researchOverview.problemStatement}
            </p>
          </div>

          {/* Competitor Benchmark Grid */}
          <div className="bg-surface border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-white uppercase tracking-tight">
                  {tr.s2benchTitle}
                </h3>
                <p className="text-xs text-white/60 font-sans mt-1">
                  {tr.s2benchSub}
                </p>
              </div>
              <div className="text-xs font-montserrat font-bold text-primary">
                {tr.s2standard}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {electronicsShopData.competitors.map((comp, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                    comp.name.includes("Shop 4.0")
                      ? "bg-primary/10 border-primary shadow-lg shadow-[#14F1D9]/10"
                      : "bg-black/30 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-white font-montserrat">{comp.name}</h4>
                      <span
                        className={`text-xs font-black px-2.5 py-0.5 rounded-full font-montserrat ${
                          comp.score > 8 ? "bg-primary text-black" : "bg-white/10 text-white"
                        }`}
                      >
                        {comp.score} / 10
                      </span>
                    </div>
                    <div className="text-[11px] text-primary font-montserrat font-bold uppercase mb-3">
                      {comp.category}
                    </div>

                    <div className="space-y-3 mb-4 text-xs font-sans">
                      <div>
                        <span className="text-white/40 block text-[10px] uppercase font-montserrat mb-1">{tr.strengths}</span>
                        <span className="text-white/80 leading-relaxed">{comp.strengths.join(", ")}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[10px] uppercase font-montserrat mb-1">{tr.weaknesses}</span>
                        <span className="text-white/60 leading-relaxed">{comp.weaknesses.join(", ")}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-[11px] text-white/70 font-sans">
                    <span className="text-primary font-montserrat font-bold uppercase text-[10px] block mb-0.5">{tr.opportunity}</span>
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
                {tr.personasTitle}
              </h3>
              <div className="flex gap-2">
                {electronicsShopData.personas.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPersonaIndex(idx)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-montserrat font-bold transition-all ${
                      selectedPersonaIndex === idx
                        ? "bg-primary text-black"
                        : "bg-surface border border-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    {p.name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-surface border border-white/10 p-6 sm:p-8 rounded-2xl">
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-[#092e27] flex items-center justify-center text-black font-black font-montserrat text-lg mb-4 shadow-lg shadow-[#14F1D9]/10">
                  {activePersona.name.slice(0, 2).toUpperCase()}
                </div>
                <h4 className="text-xl font-bold text-white font-montserrat uppercase tracking-tight mb-1">{activePersona.name}</h4>
                <p className="text-xs text-primary font-montserrat font-semibold mb-3">{activePersona.role}</p>
                <div className="text-xs text-white/60 space-y-1 font-sans mb-4">
                  <p>{tr.age} {activePersona.age}</p>
                  <p>{tr.techLit} {activePersona.techLiteracy}</p>
                </div>
                <div className="p-3.5 bg-black/40 border-l-2 border-primary text-xs italic text-white/80 font-sans rounded-r-xl">
                  &ldquo;{activePersona.quote}&rdquo;
                </div>
              </div>

              <div className="lg:col-span-8 space-y-5">
                <div>
                  <h5 className="text-xs uppercase font-montserrat font-bold text-primary mb-2 text-[11px] tracking-wider">
                    {tr.goalsTitle}
                  </h5>
                  <ul className="space-y-1.5 text-xs text-white/80 font-sans">
                    {activePersona.goals.map((g, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-xs uppercase font-montserrat font-bold text-rose-400 mb-2 text-[11px] tracking-wider">
                    {tr.painsTitle}
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
                  <span className="text-xs text-white/40 font-montserrat uppercase mr-2 text-[11px]">{tr.devicesTitle}</span>
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
            <div className="text-xs font-montserrat font-bold text-primary uppercase tracking-widest mb-1">
              {tr.s3eyebrow}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
              {tr.s3title}
            </h2>
            <p className="text-sm text-white/70 font-sans mt-2 max-w-3xl leading-relaxed">
              {tr.s3lead}
            </p>
          </div>

          {/* CJM Stepper */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-montserrat uppercase text-white tracking-tight">
              {tr.cjmTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {electronicsShopData.cjm.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-surface border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-primary/50 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-primary">
                        {item.stage}
                      </span>
                      <span className="text-xs font-bold font-montserrat px-2 py-0.5 rounded bg-white/5 border border-white/10 text-primary">
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
                      <span className="font-semibold text-rose-400">{tr.pain}</span> {item.painPoint}
                    </div>
                    <div className="text-white/90 leading-snug">
                      <span className="font-semibold text-primary">{tr.solution}</span> {item.uxSolution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hypotheses Grid */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold font-montserrat uppercase text-white tracking-tight">
              {tr.hypTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {electronicsShopData.hypotheses.map((h) => (
                <div 
                  key={h.id}
                  className="bg-surface border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-montserrat font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                      {h.id}
                    </span>
                    <span className="text-xs font-montserrat font-semibold text-[#27C93F] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {h.status === "confirmed" ? tr.confirmed : tr.optimized}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold font-montserrat text-white">
                    {h.title}
                  </h4>

                  <div className="space-y-2 text-xs font-sans">
                    <div>
                      <span className="text-white/50 uppercase font-montserrat font-bold tracking-wider text-[10px] block mb-0.5">
                        {tr.problem}
                      </span>
                      <p className="text-white/80 leading-relaxed">{h.problem}</p>
                    </div>

                    <div className="pt-2 border-t border-white/5">
                      <span className="text-white/50 uppercase font-montserrat font-bold tracking-wider text-[10px] block mb-0.5">
                        {tr.hypothesis}
                      </span>
                      <p className="text-white/90 leading-relaxed">{h.hypothesis}</p>
                    </div>
                  </div>

                  <div className="bg-black/40 border border-white/10 p-4 rounded-xl flex items-center justify-between text-xs">
                    <div>
                      <div className="text-[10px] text-white/50 uppercase font-montserrat font-semibold">
                        {tr.metric}
                      </div>
                      <div className="text-white font-medium mt-0.5 font-sans">{h.metric}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-primary uppercase font-montserrat font-semibold">
                        {tr.result}
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
              <div className="text-xs font-montserrat font-bold text-primary uppercase tracking-widest mb-1">
                {tr.s4eyebrow}
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
                {tr.s4title}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFlowViewMode("step")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-montserrat font-semibold transition-all ${
                  flowViewMode === "step"
                    ? "bg-primary text-black"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {tr.phoneSimBtn}
              </button>
              <button
                onClick={() => setFlowViewMode("grid")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-montserrat font-semibold transition-all ${
                  flowViewMode === "grid"
                    ? "bg-primary text-black"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {tr.gridBtn}
              </button>
            </div>
          </div>

          {flowViewMode === "step" ? (
            <div className="bg-surface border border-white/10 rounded-2xl p-6 sm:p-8">
              {/* Screen Pills Bar */}
              <div className="flex overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden gap-2 pb-6 border-b border-white/10">
                {electronicsShopData.screens.mobileFlow.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-montserrat font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                      activeScreenIndex === idx
                        ? "bg-primary text-black shadow-lg shadow-[#14F1D9]/20"
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
                  <div className="relative w-[300px] sm:w-[340px] bg-surface rounded-[38px] p-3 border-2 border-white/20 shadow-2xl shadow-black/80 ring-1 ring-white/10">
                    {/* Screen Image Container with uncropped aspect ratio */}
                    <div 
                      onClick={() => setSelectedImage({
                        src: currentScreen.src,
                        title: `${currentScreen.title} (${tr.screenLabel} ${activeScreenIndex + 1} ${tr.of9})`,
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
                        <div className="bg-black/80 px-3 py-1.5 rounded-lg text-xs text-primary border border-primary/30 flex items-center gap-1.5 font-montserrat font-semibold">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>{tr.zoomBtn}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Screen Details & Key UX Decisions */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="text-xs font-montserrat font-bold text-primary uppercase tracking-wider mb-1">
                      {tr.screenLabel}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black font-montserrat text-white uppercase tracking-tight">
                      {currentScreen.title}
                    </h3>
                    <p className="text-sm text-white/80 font-sans mt-2 leading-relaxed">
                      {currentScreen.description}
                    </p>
                  </div>

                  <div className="bg-black/40 border border-white/10 p-6 rounded-2xl space-y-3">
                    <div className="text-xs font-montserrat font-bold uppercase tracking-wider text-primary">
                      {tr.keyDecisions}
                    </div>
                    <ul className="space-y-2 text-xs font-sans text-white/80">
                      {currentScreen.uxHighlights.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
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
                      <span>{tr.prevScreen}</span>
                    </button>

                    <button
                      onClick={() => setActiveScreenIndex(prev => Math.min(electronicsShopData.screens.mobileFlow.length - 1, prev + 1))}
                      disabled={activeScreenIndex === electronicsShopData.screens.mobileFlow.length - 1}
                      className="px-4 py-2 rounded-xl bg-primary hover:bg-white text-black text-xs font-montserrat font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
                    >
                      <span>{tr.nextScreen}</span>
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
                    title: `${s.title} (${tr.screenLabel} ${idx + 1})`,
                    subtitle: s.description
                  })}
                  className="bg-surface border border-white/10 rounded-2xl p-3 cursor-pointer group hover:border-primary/60 transition-all flex flex-col"
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
            <div className="text-xs font-montserrat font-bold text-primary uppercase tracking-widest mb-1">
              {tr.s5eyebrow}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
              {tr.s5title}
            </h2>
            <p className="text-sm text-white/70 font-sans mt-2 max-w-3xl leading-relaxed">
              {tr.s5lead}
            </p>
          </div>

          {/* Desktop 1440px Showcase Window */}
          <div className="bg-surface border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-black text-xs font-montserrat font-bold uppercase tracking-wider transition-all hover:bg-white"
              >
                <Maximize2 className="w-4 h-4" />
                <span>{tr.expandDesktop}</span>
              </button>
            </div>

            <div
              onClick={() => setSelectedImage({
                src: electronicsShopData.screens.desktop.src,
                title: electronicsShopData.screens.desktop.title,
                subtitle: electronicsShopData.screens.desktop.description
              })}
              className="relative aspect-[16/10] w-full bg-black/60 rounded-xl overflow-hidden cursor-pointer group border border-white/10 hover:border-primary/50 transition-all"
            >
              <Image
                src={electronicsShopData.screens.desktop.src}
                alt="Shop 4.0 Desktop Store"
                fill
                className="object-contain group-hover:scale-101 transition-transform duration-500"
              />
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md text-[11px] text-white/70 border border-white/10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-3.5 h-3.5 text-primary" />
                <span>{tr.zoomHint}</span>
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
                className="bg-surface border border-white/10 rounded-2xl p-6 cursor-pointer group hover:border-primary/50 transition-all space-y-4"
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
                  <div className="text-xs font-montserrat font-bold text-primary uppercase tracking-wider mb-1">
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
            <div className="text-xs font-montserrat font-bold text-primary uppercase tracking-widest mb-1">
              {tr.s6eyebrow}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
              {tr.s6title}
            </h2>
            <p className="text-sm text-white/70 font-sans mt-2 max-w-3xl leading-relaxed">
              {tr.s6lead}
            </p>
          </div>

          <div className="bg-surface border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8">
            <h3 className="text-xl font-bold font-montserrat text-white uppercase tracking-tight">
              {tr.fontHierTitle}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/30 p-6 rounded-2xl border border-white/5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-montserrat font-bold uppercase tracking-wider text-primary">
                    {tr.headingsLabel}
                  </span>
                  <span className="text-xs font-mono text-white/50">Montserrat</span>
                </div>
                <div className="text-4xl font-black font-montserrat text-white tracking-tight uppercase">
                  {tr.headingsDemo}
                </div>
                <p className="text-xs text-white/60 font-sans leading-relaxed">
                  {tr.headingsDesc}
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] font-montserrat text-white/70 pt-2 border-t border-white/10">
                  <span className="px-2.5 py-1 rounded bg-white/5">Bold (700)</span>
                  <span className="px-2.5 py-1 rounded bg-white/5">SemiBold (600)</span>
                </div>
              </div>

              <div className="bg-black/30 p-6 rounded-2xl border border-white/5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-montserrat font-bold uppercase tracking-wider text-primary">
                    {tr.interfaceLabel}
                  </span>
                  <span className="text-xs font-mono text-white/50">Inter</span>
                </div>
                <div className="text-2xl font-normal font-sans text-white">
                  {tr.interfaceDemo}
                </div>
                <p className="text-xs text-white/60 font-sans leading-relaxed">
                  {tr.interfaceDesc}
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
            <div className="bg-surface border border-white/10 p-6 rounded-2xl">
              <div className="text-xs font-montserrat font-bold text-primary uppercase tracking-wider mb-2">
                {tr.accentTeal}
              </div>
              <div className="text-2xl font-bold font-montserrat text-white mb-2">
                #30B5A3
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                {tr.accentTealDesc}
              </p>
            </div>

            <div className="bg-surface border border-white/10 p-6 rounded-2xl">
              <div className="text-xs font-montserrat font-bold text-primary uppercase tracking-wider mb-2">
                {tr.grid8}
              </div>
              <div className="text-2xl font-bold font-montserrat text-white mb-2">
                8 pt Grid
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                {tr.grid8Desc}
              </p>
            </div>

            <div className="bg-surface border border-white/10 p-6 rounded-2xl">
              <div className="text-xs font-montserrat font-bold text-primary uppercase tracking-wider mb-2">
                {tr.susScale}
              </div>
              <div className="text-2xl font-bold font-montserrat text-white mb-2">
                84 / 100
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                {tr.susDesc}
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
