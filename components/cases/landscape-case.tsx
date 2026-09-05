"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import { landscapeProjectData } from "@/lib/landscape-data";
import {
  LayoutDashboard,
  Trees,
  Compass,
  Footprints,
  Lightbulb,
  Box,
  Maximize2,
  X,
  Search,
  Target,
  ListOrdered,
  PieChart,
  Grid3x3,
  Layers,
  ShieldCheck,
  Flower2,
  Apple,
  Leaf,
  Sparkles,
  Home,
  Moon,
  Sprout
} from "lucide-react";

export function LandscapeCase() {
  const [activeTab, setActiveTab] = useState<"board" | "dendro" | "wind" | "paths" | "lighting" | "gallery">("board");
  const [plantCategory, setPlantCategory] = useState<string>("all");
  const [plantSearch, setPlantSearch] = useState<string>("");
  const [activeRenderCategory, setActiveRenderCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedZone, setSelectedZone] = useState<number | null>(null);

  const renderCategoryIcon = (iconKey?: string, className = "w-3.5 h-3.5 text-[#14F1D9]") => {
    switch (iconKey) {
      case "apple": return <Apple className={className} />;
      case "pine": return <Trees className={className} />;
      case "flower": return <Flower2 className={className} />;
      case "leaf": return <Leaf className={className} />;
      default: return <Sprout className={className} />;
    }
  };

  // Filter plants
  const allPlants = landscapeProjectData.plantCategories.flatMap(cat => 
    cat.items.map(item => ({ ...item, categoryId: cat.id, categoryTitle: cat.title, categoryIcon: cat.icon }))
  );

  const filteredPlants = allPlants.filter(p => {
    const matchesCat = plantCategory === "all" || p.categoryId === plantCategory;
    const matchesSearch = p.name.toLowerCase().includes(plantSearch.toLowerCase()) || String(p.num).includes(plantSearch);
    return matchesCat && matchesSearch;
  });

  // Filter renders
  const filteredRenders = landscapeProjectData.renders.filter(r => 
    activeRenderCategory === "all" || r.category === activeRenderCategory
  );

  return (
    <div className="min-h-screen bg-[#0E1111] text-[#F3F4F6] relative selection:bg-[#14F1D9] selection:text-black">
      {/* Background paper texture matching Ekaterina's portfolio */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/paper-clean-dark.png"
          alt="Paper texture"
          fill
          className="object-cover opacity-50 mix-blend-screen"
          priority
        />
      </div>

      {/* Atmospheric radial background glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[500px] bg-gradient-to-b from-[#14F1D9]/10 via-[#2E8B57]/5 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed top-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-b from-[#E07A5F]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-24 max-w-[1440px]">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="text-xs sm:text-sm text-white/50 mb-8 flex flex-wrap items-center gap-2 font-sans">
            <Link href="/" className="transition-colors hover:text-[#14F1D9]">Главная</Link>
            <span>/</span>
            <Link href="/#cases" className="transition-colors hover:text-[#14F1D9]">Кейсы</Link>
            <span>/</span>
            <span className="text-[#14F1D9] font-medium">Ландшафтный дизайн (6.5 соток)</span>
          </nav>

          {/* =========================================================================
              HERO SECTION
             ========================================================================= */}
          <section className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#14F1D9]/10 border border-[#14F1D9]/30 text-[#14F1D9] text-xs font-semibold tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[#14F1D9] animate-pulse" />
              Ландшафтная архитектура · Личный проект
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-montserrat">
              Пейзажный сад <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14F1D9] via-[#8EE4AF] to-[#E07A5F]">
                с восточными акцентами
              </span>
            </h1>

            <p className="text-base sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
              Проектирование и комплексное благоустройство собственного загородного участка в Тамбовской области. 
              Синтез японского сада созерцания, плодово-ягодного сада на карликовом подвое, открытого газона и 49 сценариев ночной иллюминации.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {landscapeProjectData.metrics.map((m, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#161A1B]/80 border border-white/10 hover:border-[#14F1D9]/40 transition-all">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white font-montserrat">{m.value}</span>
                    <span className="text-sm font-semibold text-[#14F1D9]">{m.unit}</span>
                  </div>
                  <div className="text-xs text-white/60 font-medium">{m.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* =========================================================================
              NAVIGATION TABS
             ========================================================================= */}
          <div className="sticky top-20 z-30 mb-10 py-3 bg-[#0E1111]/90 backdrop-blur-md border-y border-white/10 flex items-center justify-between gap-4 overflow-x-auto hide-scrollbar">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("board")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeTab === "board"
                    ? "bg-[#14F1D9] text-[#0E1111] shadow-lg shadow-[#14F1D9]/20"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Планшет проекта</span>
              </button>

              <button
                onClick={() => setActiveTab("dendro")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeTab === "dendro"
                    ? "bg-[#14F1D9] text-[#0E1111] shadow-lg shadow-[#14F1D9]/20"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Trees className="w-4 h-4" />
                <span>Дендроплан (70 видов)</span>
              </button>

              <button
                onClick={() => setActiveTab("wind")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeTab === "wind"
                    ? "bg-[#14F1D9] text-[#0E1111] shadow-lg shadow-[#14F1D9]/20"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>Роза ветров и инсоляция</span>
              </button>

              <button
                onClick={() => setActiveTab("paths")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeTab === "paths"
                    ? "bg-[#14F1D9] text-[#0E1111] shadow-lg shadow-[#14F1D9]/20"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Footprints className="w-4 h-4" />
                <span>Дорожки и покрытия</span>
              </button>

              <button
                onClick={() => setActiveTab("lighting")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeTab === "lighting"
                    ? "bg-[#14F1D9] text-[#0E1111] shadow-lg shadow-[#14F1D9]/20"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Lightbulb className="w-4 h-4" />
                <span>Освещение (49 точек)</span>
              </button>

              <button
                onClick={() => setActiveTab("gallery")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeTab === "gallery"
                    ? "bg-[#14F1D9] text-[#0E1111] shadow-lg shadow-[#14F1D9]/20"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Box className="w-4 h-4" />
                <span>3D-рендеры SketchUp</span>
              </button>
            </div>
          </div>

          {/* =========================================================================
              TAB 1: АРХИТЕКТУРНЫЙ ПЛАНШЕТ (КАК В РЕФЕРЕНСЕ)
             ========================================================================= */}
          {activeTab === "board" && (
            <div className="space-y-12 animate-fadeIn">
              
              {/* Главный презентационный планшет */}
              <div className="rounded-3xl bg-[#141819] border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                
                {/* Верхняя плашка планшета */}
                <div className="border-b border-white/10 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#14F1D9] font-semibold mb-1">
                      ПРОЕКТ БЛАГОУСТРОЙСТВА ЧАСТНОГО УСАДЕБНОГО ДОМА
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-montserrat">
                      ГЕНЕРАЛЬНЫЙ ПЛАН · УЧАСТОК 6.5 СОТОК
                    </h2>
                    <div className="text-xs sm:text-sm text-white/60 mt-1">
                      Тамбовская область · Дом 9×9 м (100 м² фундамент, 2.5 этажа) · Ориентация строго по сторонам света
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-white/70">
                    <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      Ширина: <strong className="text-white">19.2 м</strong>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      Длина: <strong className="text-white">35.2 м</strong>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      Уклон: <strong className="text-white">ровный (насыпной)</strong>
                    </div>
                  </div>
                </div>

                {/* 3-Колончатая структура архитектурного планшета */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Левая колонка: Экспликация зон и Концепция */}
                  <div className="lg:col-span-3 space-y-6">
                    
                    {/* Концепция */}
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <h3 className="text-xs uppercase tracking-wider text-[#14F1D9] font-bold mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-[#14F1D9]" /> КОНЦЕПЦИЯ САДА
                      </h3>
                      <ul className="text-xs text-white/80 space-y-2 leading-relaxed">
                        <li className="flex items-start gap-1.5">
                          <span className="text-[#14F1D9]">•</span>
                          <span><strong>Пейзажный стиль:</strong> мягкие природные линии, извилистые гравийные тропы со шпалами.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-[#14F1D9]">•</span>
                          <span><strong>Восточный акцент:</strong> шатровая беседка для айкидо, тсукубаи, валуны, 2 каскадных пруда.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-[#14F1D9]">•</span>
                          <span><strong>Приватность:</strong> плотная стена туй и сиреней для защиты от семиэтажного комплекса на юге.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-[#14F1D9]">•</span>
                          <span><strong>Семейный круг:</strong> открытый газон для игр, детская зона и новогодняя ель для хороводов.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Экспликация 15 зон */}
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <h3 className="text-xs uppercase tracking-wider text-[#14F1D9] font-bold mb-3 flex items-center justify-between">
                        <span className="flex items-center gap-1.5"><ListOrdered className="w-4 h-4 text-[#14F1D9]" /> ЭКСПЛИКАЦИЯ ЗОН</span>
                        <span className="text-[10px] text-white/50 font-normal">клик для подсветки</span>
                      </h3>
                      
                      <div className="space-y-1.5 text-xs">
                        {landscapeProjectData.zones.map(z => (
                          <div
                            key={z.id}
                            onClick={() => setSelectedZone(selectedZone === z.id ? null : z.id)}
                            className={`p-2 rounded-lg cursor-pointer transition-all flex items-start gap-2.5 ${
                              selectedZone === z.id
                                ? "bg-[#14F1D9]/20 border border-[#14F1D9]/50 text-white"
                                : "hover:bg-white/5 text-white/70"
                            }`}
                          >
                            <span className="w-5 h-5 rounded-full bg-[#14F1D9]/20 text-[#14F1D9] font-bold flex items-center justify-center shrink-0 text-[10px] border border-[#14F1D9]/40">
                              {z.id}
                            </span>
                            <div>
                              <div className="font-semibold text-white/90 leading-tight">{z.name}</div>
                              <div className="text-[11px] text-white/50 mt-0.5">{z.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Центральная колонка: Интерактивный 3D Генеральный план */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl group">
                      
                      {/* Картинка генплана */}
                      <div className="relative aspect-[1024/546] w-full bg-white">
                        <Image
                          src="/Кейсы/11-landscape-project/master_plan_main.jpg"
                          alt="Генеральный план усадьбы с дендропланом"
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                          priority
                        />
                      </div>

                      {/* Компас сторон света в правом верхнем углу */}
                      <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 flex flex-col items-center">
                        <div className="text-[10px] font-bold tracking-widest text-[#14F1D9]">NORTH</div>
                        <div className="text-xl">▲</div>
                      </div>

                      {/* Бейдж выбранной зоны */}
                      {selectedZone && (
                        <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-[#14F1D9]/60 text-xs animate-fadeIn">
                          <span className="text-[#14F1D9] font-bold">Зона #{selectedZone}: </span>
                          <span className="text-white font-semibold">
                            {landscapeProjectData.zones.find(z => z.id === selectedZone)?.name}
                          </span>
                          <span className="text-white/70 block mt-0.5">
                            {landscapeProjectData.zones.find(z => z.id === selectedZone)?.desc}
                          </span>
                        </div>
                      )}

                      {/* Кнопка фулскрина */}
                      <button
                        onClick={() => setSelectedImage("/Кейсы/11-landscape-project/master_plan_main.jpg")}
                        className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/60 hover:bg-black/90 text-white text-xs border border-white/20 transition-all flex items-center gap-1.5"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Увеличить план</span>
                      </button>
                    </div>

                    {/* Подпись под генпланом */}
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-white/50 px-2">
                      <div>3D-визуализация генплана сверху (SketchUp)</div>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#E07A5F]" /> Клинкер/бетон
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#2E8B57]" /> Газон
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" /> Пруды
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#B45309]" /> Дерево/ДПК
                        </span>
                      </div>
                    </div>

                    {/* Видовые точки сада из SketchUp — крупный коллаж 2x2 под генпланом */}
                    <div className="pt-2 space-y-3">
                      <div className="text-xs uppercase tracking-wider text-[#14F1D9] font-bold flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#14F1D9]" />
                          <span>КЛЮЧЕВЫЕ ВИДОВЫЕ ТОЧКИ УЧАСТКА (SKETCHUP)</span>
                        </span>
                        <span className="text-xs text-white/50 font-normal">клик для увеличения ↗</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div 
                          onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-09 (5).jpg")}
                          className="group cursor-pointer rounded-2xl overflow-hidden bg-[#161A1B] border border-white/10 hover:border-[#14F1D9]/60 transition-all flex flex-col shadow-lg hover:shadow-[#14F1D9]/10"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden bg-black">
                            <Image
                              src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-09 (5).jpg"
                              alt="Японский садик и каскад прудов с мостиком"
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-semibold border border-white/20 flex items-center gap-1.5">
                                <Maximize2 className="w-3.5 h-3.5 text-[#14F1D9]" />
                                <span>Открыть</span>
                              </span>
                            </div>
                          </div>
                          <div className="p-3.5 bg-[#141819] flex-1 flex flex-col justify-between border-t border-white/5">
                            <div className="font-semibold text-white text-sm group-hover:text-[#14F1D9] transition-colors">
                              Японский сад и каскад прудов
                            </div>
                            <div className="text-xs text-white/60 mt-1 leading-relaxed">
                              Деревянный мостик, гранитный фонарь, кувшинки и японский клен Ред Сансет
                            </div>
                          </div>
                        </div>

                        <div 
                          onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-10 (4).jpg")}
                          className="group cursor-pointer rounded-2xl overflow-hidden bg-[#161A1B] border border-white/10 hover:border-[#14F1D9]/60 transition-all flex flex-col shadow-lg hover:shadow-[#14F1D9]/10"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden bg-black">
                            <Image
                              src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-10 (4).jpg"
                              alt="Шатровая чайная беседка для айкидо и BBQ"
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-semibold border border-white/20 flex items-center gap-1.5">
                                <Maximize2 className="w-3.5 h-3.5 text-[#14F1D9]" />
                                <span>Открыть</span>
                              </span>
                            </div>
                          </div>
                          <div className="p-3.5 bg-[#141819] flex-1 flex flex-col justify-between border-t border-white/5">
                            <div className="font-semibold text-white text-sm group-hover:text-[#14F1D9] transition-colors">
                              Чайная беседка айкидо и BBQ
                            </div>
                            <div className="text-xs text-white/60 mt-1 leading-relaxed">
                              Помост из ДПК, восточные карнизы, мягкая подсветка и зона отдыха
                            </div>
                          </div>
                        </div>

                        <div 
                          onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-08 (4).jpg")}
                          className="group cursor-pointer rounded-2xl overflow-hidden bg-[#161A1B] border border-white/10 hover:border-[#14F1D9]/60 transition-all flex flex-col shadow-lg hover:shadow-[#14F1D9]/10"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden bg-black">
                            <Image
                              src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-08 (4).jpg"
                              alt="Защитный зеленый буфер и фасад дома"
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-semibold border border-white/20 flex items-center gap-1.5">
                                <Maximize2 className="w-3.5 h-3.5 text-[#14F1D9]" />
                                <span>Открыть</span>
                              </span>
                            </div>
                          </div>
                          <div className="p-3.5 bg-[#141819] flex-1 flex flex-col justify-between border-t border-white/5">
                            <div className="font-semibold text-white text-sm group-hover:text-[#14F1D9] transition-colors">
                              Защитная стена и терраса
                            </div>
                            <div className="text-xs text-white/60 mt-1 leading-relaxed">
                              Плотная посадка туй и сиреней для изоляции двора от соседней многоэтажки
                            </div>
                          </div>
                        </div>

                        <div 
                          onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-09 (4).jpg")}
                          className="group cursor-pointer rounded-2xl overflow-hidden bg-[#161A1B] border border-white/10 hover:border-[#14F1D9]/60 transition-all flex flex-col shadow-lg hover:shadow-[#14F1D9]/10"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden bg-black">
                            <Image
                              src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-09 (4).jpg"
                              alt="Вечерняя иллюминация пруда"
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-semibold border border-white/20 flex items-center gap-1.5">
                                <Maximize2 className="w-3.5 h-3.5 text-[#14F1D9]" />
                                <span>Открыть</span>
                              </span>
                            </div>
                          </div>
                          <div className="p-3.5 bg-[#141819] flex-1 flex flex-col justify-between border-t border-white/5">
                            <div className="font-semibold text-white text-sm group-hover:text-[#14F1D9] transition-colors">
                              Вечерний сценарий подсветки
                            </div>
                            <div className="text-xs text-white/60 mt-1 leading-relaxed">
                              Светящиеся шары-сферы на воде, скрытая подсветка ступеней и фонарь в пагоде
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Правая колонка: Рекомендуемые растения и Баланс территорий */}
                  <div className="lg:col-span-3 space-y-6">
                    
                    {/* Топ растений проекта */}
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <h3 className="text-xs uppercase tracking-wider text-[#14F1D9] font-bold mb-3 flex items-center justify-between">
                        <span className="flex items-center gap-1.5"><Trees className="w-4 h-4 text-[#14F1D9]" /> КЛЮЧЕВЫЕ ПОСАДКИ</span>
                        <button onClick={() => setActiveTab("dendro")} className="text-[#14F1D9] hover:underline text-[10px]">
                          все 70 ↗
                        </button>
                      </h3>

                      <div className="space-y-3 text-xs">
                        <div>
                          <div className="font-semibold text-white/90 mb-1 flex items-center gap-1.5">
                            <Trees className="w-3.5 h-3.5 text-[#14F1D9]" /> Хвойный скелет:
                          </div>
                          <div className="text-white/60 text-[11px] leading-snug">
                            Туя Смарагд (живая изгородь), Сосна горная Мугус, Сосна кедровая Glauca, Пихта корейская.
                          </div>
                        </div>

                        <div>
                          <div className="font-semibold text-white/90 mb-1 flex items-center gap-1.5">
                            <Flower2 className="w-3.5 h-3.5 text-[#14F1D9]" /> Восточные акценты:
                          </div>
                          <div className="text-white/60 text-[11px] leading-snug">
                            Клен Ред Сансет, Ива Матсудана у пруда, бамбук Саза курильская, Гортензия Dharuma.
                          </div>
                        </div>

                        <div>
                          <div className="font-semibold text-white/90 mb-1 flex items-center gap-1.5">
                            <Apple className="w-3.5 h-3.5 text-[#14F1D9]" /> Карликовый плодовый сад:
                          </div>
                          <div className="text-white/60 text-[11px] leading-snug">
                            Яблони Арбат и Мельба, вишня Русинка, черешня Овстуженка, сливы и ягодники.
                          </div>
                        </div>

                        <div>
                          <div className="font-semibold text-white/90 mb-1 flex items-center gap-1.5">
                            <Leaf className="w-3.5 h-3.5 text-[#14F1D9]" /> Цветочная лента:
                          </div>
                          <div className="text-white/60 text-[11px] leading-snug">
                            12 сортов травянистых пионов (Сара Бернар, Канзас), мискантус, хосты и ирисы в воде.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Баланс территорий */}
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <h3 className="text-xs uppercase tracking-wider text-[#14F1D9] font-bold mb-3 flex items-center gap-2">
                        <PieChart className="w-4 h-4 text-[#14F1D9]" /> БАЛАНС ТЕРРИТОРИИ
                      </h3>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">Общая площадь:</span>
                          <strong className="text-white">650 м² (100%)</strong>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">Пятно застройки:</span>
                          <span className="text-white">151.5 м² (23.3%)</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">Твердые покрытия:</span>
                          <span className="text-white">135.0 м² (20.8%)</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">Озеленение и газон:</span>
                          <span className="text-[#14F1D9] font-semibold">310.0 м² (47.7%)</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">Тропы (галька/ДПК):</span>
                          <span className="text-white">38.5 м² (5.9%)</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-white/60">Водная гладь (2 пруда):</span>
                          <span className="text-white">15.0 м² (2.3%)</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 2: ИНТЕРАКТИВНЫЙ ДЕНДРОПЛАН (70 ВИДОВ РАСТЕНИЙ)
             ========================================================================= */}
          {activeTab === "dendro" && (
            <div className="space-y-10 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-[#161A1B] border border-white/10">
                <div>
                  <h2 className="text-2xl font-bold text-white font-montserrat">
                    Ассортиментная ведомость и дендроплан
                  </h2>
                  <p className="text-sm text-white/60 mt-1">
                    Полный перечень из 70 видов растений, высаженных с учетом влажного грунта, микроклимата и смены сезонов.
                  </p>
                </div>

                {/* Поиск */}
                <div className="w-full md:w-72 relative">
                  <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-3 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Поиск по названию или №..."
                    value={plantSearch}
                    onChange={(e) => setPlantSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#14F1D9]"
                  />
                </div>
              </div>

              {/* Категории фильтров */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setPlantCategory("all")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    plantCategory === "all"
                      ? "bg-[#14F1D9] text-[#0E1111]"
                      : "bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  Все растения ({allPlants.length})
                </button>
                {landscapeProjectData.plantCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setPlantCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      plantCategory === cat.id
                        ? "bg-[#14F1D9] text-[#0E1111]"
                        : "bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {renderCategoryIcon(cat.icon, plantCategory === cat.id ? "w-3.5 h-3.5 text-[#0E1111]" : "w-3.5 h-3.5 text-[#14F1D9]")}
                    <span>{cat.title} ({cat.items.length})</span>
                  </button>
                ))}
              </div>

              {/* Сетка растений */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredPlants.map(p => (
                  <div
                    key={p.num}
                    className="p-3.5 rounded-xl bg-[#141819] border border-white/10 hover:border-[#14F1D9]/40 transition-all flex items-start gap-3"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#14F1D9]/15 text-[#14F1D9] font-bold flex items-center justify-center shrink-0 text-xs border border-[#14F1D9]/30">
                      {p.num}
                    </span>
                    <div className="overflow-hidden">
                      <div className="text-xs font-semibold text-white truncate" title={p.name}>
                        {p.name}
                      </div>
                      <div className="text-[10px] text-white/40 mt-0.5 flex items-center gap-1.5">
                        {renderCategoryIcon(p.categoryIcon, "w-3 h-3 text-[#14F1D9]")}
                        <span className="truncate">{p.categoryTitle}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Оригинальные чертежи дендроплана */}
              <div className="mt-12 p-6 rounded-2xl bg-[#161A1B] border border-white/10 space-y-6">
                <h3 className="text-lg font-bold text-white font-montserrat">
                  Архитектурные листы дендроплана из проекта
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div 
                    onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-05.jpg")}
                    className="cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-white group"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-05.jpg"
                        alt="Северная часть дендроплана"
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-3 bg-[#121516] text-xs text-white/80 border-t border-white/10">
                      Лист 01: Северная зона (беседка, пруд, дорожка из пионов)
                    </div>
                  </div>

                  <div 
                    onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-06.jpg")}
                    className="cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-white group"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-06.jpg"
                        alt="Южная часть дендроплана"
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-3 bg-[#121516] text-xs text-white/80 border-t border-white/10">
                      Лист 02: Южная зона (плодовый сад, лесополоса сиреней)
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* =========================================================================
              TAB 3: РОЗА ВЕТРОВ И КЛИМАТИЧЕСКИЙ АНАЛИЗ
             ========================================================================= */}
          {activeTab === "wind" && (
            <div className="space-y-10 animate-fadeIn">
              <div className="p-6 sm:p-10 rounded-3xl bg-[#141819] border border-white/15 shadow-2xl">
                <div className="max-w-2xl mb-8">
                  <div className="text-xs uppercase tracking-widest text-[#14F1D9] font-bold mb-2">
                    КЛИМАТИЧЕСКИЙ АНАЛИЗ УЧАСТКА
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-montserrat">
                    Роза ветров в Тамбове и инсоляция
                  </h2>
                  <p className="text-sm text-white/70 mt-2 leading-relaxed">
                    Анализ преобладающих воздушных потоков показал ключевую розу ветров: доминируют Южные (19.1%) и Северные (18.4%) ветра. 
                    На основе этих данных спланированы защитные живые изгороди и размещение теплолюбивых культур.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* SVG Векторная Роза ветров в стиле сайта */}
                  <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0E1111] border border-white/10">
                    <svg viewBox="-150 -150 300 300" className="w-full max-w-[340px] aspect-square">
                      {/* Окружности сетки */}
                      <circle cx="0" cy="0" r="30" fill="none" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 2" />
                      <circle cx="0" cy="0" r="60" fill="none" stroke="rgba(255,255,255,0.12)" strokeDasharray="2 2" />
                      <circle cx="0" cy="0" r="90" fill="none" stroke="rgba(255,255,255,0.15)" />
                      <circle cx="0" cy="0" r="120" fill="none" stroke="rgba(255,255,255,0.2)" />

                      {/* Оси */}
                      <line x1="-130" y1="0" x2="130" y2="0" stroke="rgba(255,255,255,0.15)" />
                      <line x1="0" y1="-130" x2="0" y2="130" stroke="rgba(255,255,255,0.15)" />
                      <line x1="-90" y1="-90" x2="90" y2="90" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                      <line x1="-90" y1="90" x2="90" y2="-90" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />

                      {/* Лепестки розы ветров */}
                      {landscapeProjectData.windRose.map((w, idx) => {
                        // Angle 0 is North (top), angle 90 is East (right)
                        const rad = ((w.angle - 90) * Math.PI) / 180;
                        const len = (w.percent / 20) * 115;
                        const x = len * Math.cos(rad);
                        const y = len * Math.sin(rad);

                        // Width of petal
                        const radLeft = ((w.angle - 90 - 15) * Math.PI) / 180;
                        const radRight = ((w.angle - 90 + 15) * Math.PI) / 180;
                        const lx = (len * 0.4) * Math.cos(radLeft);
                        const ly = (len * 0.4) * Math.sin(radLeft);
                        const rx = (len * 0.4) * Math.cos(radRight);
                        const ry = (len * 0.4) * Math.sin(radRight);

                        const isDominant = w.percent > 15;

                        return (
                          <g key={idx} className="transition-all hover:opacity-80 cursor-pointer">
                            <polygon
                              points={`0,0 ${lx},${ly} ${x},${y} ${rx},${ry}`}
                              fill={isDominant ? "#14F1D9" : "rgba(20, 241, 217, 0.45)"}
                              stroke={isDominant ? "#14F1D9" : "rgba(255,255,255,0.3)"}
                              strokeWidth="1"
                            />
                            {/* Подпись процента */}
                            <text
                              x={x * 1.15}
                              y={y * 1.15 + 4}
                              textAnchor="middle"
                              fill={isDominant ? "#FFFFFF" : "rgba(255,255,255,0.6)"}
                              fontSize="10"
                              fontWeight={isDominant ? "bold" : "normal"}
                            >
                              {w.percent}%
                            </text>
                          </g>
                        );
                      })}

                      {/* Метки сторон света */}
                      <text x="0" y="-135" textAnchor="middle" fill="#14F1D9" fontSize="12" fontWeight="bold">С (N)</text>
                      <text x="0" y="145" textAnchor="middle" fill="#14F1D9" fontSize="12" fontWeight="bold">Ю (S)</text>
                      <text x="140" y="4" textAnchor="start" fill="#14F1D9" fontSize="12" fontWeight="bold">В (E)</text>
                      <text x="-140" y="4" textAnchor="end" fill="#14F1D9" fontSize="12" fontWeight="bold">З (W)</text>
                    </svg>
                  </div>

                  {/* Таблица и аналитические выводы */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      {landscapeProjectData.windRose.map((w, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                          <div className="font-bold text-[#14F1D9]">{w.dir}</div>
                          <div className="text-[11px] text-white/50">{w.label}</div>
                          <div className="text-sm font-extrabold text-white mt-1">{w.percent}%</div>
                        </div>
                      ))}
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 text-xs leading-relaxed text-white/80">
                      <div className="font-bold text-white text-sm">
                        Архитектурные решения на основе климата:
                      </div>
                      <p>
                        <strong>1. Защита от южного ветра и многоэтажки:</strong> Южная граница участка находится в 3 метрах от дома. 
                        Здесь сформирована плотная полоса быстрорастущих сортов сирени и туй Смарагд, поглощающих порывы южного ветра и скрывающих двор от окон семиэтажного комплекса.
                      </p>
                      <p>
                        <strong>2. Защита от северных холодных ветров:</strong> Вдоль северного забора высажена хвойная группа (сосна кедровая Glauca, сосна Мугус), создающая комфортный микроклимат для чайной беседки.
                      </p>
                      <p>
                        <strong>3. Близость грунтовых вод:</strong> Вода в 0.5 м от поверхности. Все плодовые деревья посажены строго на карликовом и полукарликовом подвое с поверхностной корневой системой.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 4: ДОРОЖНО-ТРОПИНОЧНАЯ СЕТЬ И ПОКРЫТИЯ
             ========================================================================= */}
          {activeTab === "paths" && (
            <div className="space-y-10 animate-fadeIn">
              <div className="p-6 sm:p-10 rounded-3xl bg-[#141819] border border-white/15 shadow-2xl">
                <div className="max-w-2xl mb-8">
                  <div className="text-xs uppercase tracking-widest text-[#14F1D9] font-bold mb-2">
                    ИНФРАСТРУКТУРА И МОЩЕНИЕ
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-montserrat">
                    Дорожно-тропиночная сеть и материалы
                  </h2>
                  <p className="text-sm text-white/70 mt-2 leading-relaxed">
                    Материалы подобраны в гармонии с теплым терракотово-рыжим кирпичом дома: декоративный штампованный бетон, 
                    террасная доска ДПК, бурая галька с деревянными шпалами и безопасная каучуковая плитка.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 hover:border-[#14F1D9]/40 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#14F1D9]/10 text-[#14F1D9] border border-[#14F1D9]/25 flex items-center justify-center">
                      <Grid3x3 className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base">Декоративный бетон</h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Парадная въездная дорога для автомобиля от ворот до навеса и отмостка вокруг дома. 
                      Текстура кирпичной кладки рыжего оттенка, стойкая к шипам и реагентам.
                    </p>
                    <div className="text-[11px] text-[#14F1D9] font-semibold">Площадь: ~135 м²</div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 hover:border-[#14F1D9]/40 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#14F1D9]/10 text-[#14F1D9] border border-[#14F1D9]/25 flex items-center justify-center">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base">Настилы из ДПК</h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Северная терраса дома (5.13×2.44 м), помост чайной беседки для занятий айкидо и площадка вокруг зоны барбекю. 
                      Приятно ходить босиком, не скользит в дождь.
                    </p>
                    <div className="text-[11px] text-[#14F1D9] font-semibold">Площадь: ~28.5 м²</div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 hover:border-[#14F1D9]/40 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#14F1D9]/10 text-[#14F1D9] border border-[#14F1D9]/25 flex items-center justify-center">
                      <Footprints className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base">Галька со шпалами</h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Извилистая тропа через японский садик к прудам, а также дорожка в плодово-ягодном саду. 
                      Бурая окатанная галька с шаговыми досками-шпалами, создающая эффект медитативного пути.
                    </p>
                    <div className="text-[11px] text-[#14F1D9] font-semibold">Длина: ~38 пог. м</div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 hover:border-[#14F1D9]/40 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#14F1D9]/10 text-[#14F1D9] border border-[#14F1D9]/25 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base">Резиновая плитка</h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Травмобезопасное покрытие детской игровой зоны с горкой и качелями. 
                      Теплый оранжевый цвет плитки гармонирует с цветовой гаммой кирпичных фасадов.
                    </p>
                    <div className="text-[11px] text-[#14F1D9] font-semibold">Площадь: ~18 м²</div>
                  </div>

                </div>

                {/* Иллюстрация дорожек из проекта */}
                <div className="mt-10 p-6 rounded-2xl bg-[#0E1111] border border-white/10">
                  <div 
                    onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-06 (4).jpg")}
                    className="cursor-pointer rounded-xl overflow-hidden bg-white group"
                  >
                    <div className="relative aspect-[16/7]">
                      <Image
                        src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-06 (4).jpg"
                        alt="Схема дорожно-тропиночной сети"
                        fill
                        className="object-contain p-2 group-hover:scale-102 transition-transform"
                      />
                    </div>
                    <div className="p-3 bg-[#121516] text-xs text-white/80 border-t border-white/10 flex justify-between">
                      <span>Схема дорожно-тропиночной сети и функциональных связей</span>
                      <span className="text-[#14F1D9]">клик для увеличения ↗</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 5: ПЛАН ОСВЕЩЕНИЯ (49 ТОЧЕК)
             ========================================================================= */}
          {activeTab === "lighting" && (
            <div className="space-y-10 animate-fadeIn">
              <div className="p-6 sm:p-10 rounded-3xl bg-[#141819] border border-white/15 shadow-2xl">
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-widest text-[#14F1D9] font-bold mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#14F1D9]" />
                    <span>СВЕТОВОЙ ДИЗАЙН И СЦЕНАРИИ</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-montserrat">
                    План наружного освещения (49 световых приборов)
                  </h2>
                  <p className="text-sm text-white/70 mt-1 max-w-3xl leading-relaxed">
                    Многоуровневая система освещения: безопасность движения, архитектурный свет дома и сказочная атмосфера японского сада.
                  </p>
                </div>

                {/* Группы освещения */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {landscapeProjectData.lighting.map((lg, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#14F1D9] uppercase tracking-wider">{lg.group}</span>
                        <span className="px-2.5 py-1 rounded-full bg-[#14F1D9]/15 text-[#14F1D9] text-xs font-extrabold">
                          {lg.count} шт.
                        </span>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed">{lg.desc}</p>
                    </div>
                  ))}
                </div>

                {/* 2 Сравнительных ракурса: День и Ночь */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div 
                    onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-10 (4).jpg")}
                    className="cursor-pointer rounded-2xl overflow-hidden border border-white/10 group bg-black"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-10 (4).jpg"
                        alt="Чайная беседка и водоем"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4 bg-[#121516] flex justify-between items-center text-xs">
                      <span className="text-white font-semibold">Чайная беседка и водоем</span>
                      <span className="text-white/50">Архитектурная композиция</span>
                    </div>
                  </div>

                  <div 
                    onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-09 (4).jpg")}
                    className="cursor-pointer rounded-2xl overflow-hidden border border-[#14F1D9]/30 group bg-black shadow-xl"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-09 (4).jpg"
                        alt="Подсветка беседки и пруда"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4 bg-[#121516] flex justify-between items-center text-xs">
                      <span className="text-[#14F1D9] font-semibold">Вечерняя подсветка беседки</span>
                      <span className="text-white/50">Светящиеся шары, пагода, бра</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 6: ГАЛЕРЕЯ 3D-РЕНДЕРОВ SKETCHUP
             ========================================================================= */}
          {activeTab === "gallery" && (
            <div className="space-y-10 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-[#161A1B] border border-white/10">
                <div>
                  <h2 className="text-2xl font-bold text-white font-montserrat">
                    Галерея 3D-визуализаций SketchUp
                  </h2>
                  <p className="text-sm text-white/60 mt-1">
                    Детальная проработка каждого уголка сада: видовые оси, малые архитектурные формы, террасы и водоемы.
                  </p>
                </div>

                {/* Категории рендеров */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveRenderCategory("all")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      activeRenderCategory === "all" ? "bg-[#14F1D9] text-[#0E1111]" : "bg-white/5 text-white/70"
                    }`}
                  >
                    Все кадры
                  </button>
                  <button
                    onClick={() => setActiveRenderCategory("japanese")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      activeRenderCategory === "japanese" ? "bg-[#14F1D9] text-[#0E1111]" : "bg-white/5 text-white/70"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" /> <span>Японский садик</span>
                  </button>
                  <button
                    onClick={() => setActiveRenderCategory("gazebo")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      activeRenderCategory === "gazebo" ? "bg-[#14F1D9] text-[#0E1111]" : "bg-white/5 text-white/70"
                    }`}
                  >
                    <Home className="w-3.5 h-3.5" /> <span>Беседка и BBQ</span>
                  </button>
                  <button
                    onClick={() => setActiveRenderCategory("night")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      activeRenderCategory === "night" ? "bg-[#14F1D9] text-[#0E1111]" : "bg-white/5 text-white/70"
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5" /> <span>Вечерний свет</span>
                  </button>
                  <button
                    onClick={() => setActiveRenderCategory("family")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      activeRenderCategory === "family" ? "bg-[#14F1D9] text-[#0E1111]" : "bg-white/5 text-white/70"
                    }`}
                  >
                    <Trees className="w-3.5 h-3.5" /> <span>Сад и дети</span>
                  </button>
                  <button
                    onClick={() => setActiveRenderCategory("plan")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      activeRenderCategory === "plan" ? "bg-[#14F1D9] text-[#0E1111]" : "bg-white/5 text-white/70"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" /> <span>3D-планы</span>
                  </button>
                </div>
              </div>

              {/* Сетка рендеров */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRenders.map((r, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(r.src)}
                    className="group cursor-pointer rounded-2xl overflow-hidden bg-[#141819] border border-white/10 hover:border-[#14F1D9]/50 transition-all flex flex-col shadow-lg"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <Image
                        src={r.src}
                        alt={r.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-semibold border border-white/30">
                          <Maximize2 className="w-3.5 h-3.5 mr-1" /> <span>Открыть во весь экран</span>
                        </span>
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <h3 className="text-sm font-bold text-white group-hover:text-[#14F1D9] transition-colors">
                        {r.title}
                      </h3>
                      <p className="text-xs text-white/60 mt-1 line-clamp-2">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* =========================================================================
              MODAL LIGHTBOX
             ========================================================================= */}
          {selectedImage && (
            <div 
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
            >
              <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={selectedImage}
                    alt="Полноэкранный просмотр"
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center text-lg hover:bg-white/20 transition-all"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
