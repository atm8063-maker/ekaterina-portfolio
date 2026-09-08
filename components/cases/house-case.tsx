"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import { houseProjectData, ZoneDetail, MaterialSwatch, FurnitureItem } from "@/lib/house-data";
import {
  LayoutDashboard,
  Home,
  Layers,
  Palette,
  Zap,
  Camera,
  Maximize2,
  X,
  Compass,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Flame,
  Lightbulb,
  Armchair,
  Ruler,
  Building2,
  SlidersHorizontal,
  Info
} from "lucide-react";

export function HouseCase() {
  const [activeTab, setActiveTab] = useState<"board" | "plans" | "concept" | "engineering" | "gallery">("board");
  const [selectedFloor, setSelectedFloor] = useState<1 | 2>(1);
  const [planMode, setPlanMode] = useState<"2D" | "3D">("3D");
  const [selectedZone, setSelectedZone] = useState<ZoneDetail | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; room?: string } | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<"all" | "finished" | "construction" | "concept">("all");

  const currentFloorData = houseProjectData.floorsData.find(f => f.floorNumber === selectedFloor)!;

  const filteredGallery = () => {
    if (galleryFilter === "finished") return houseProjectData.gallery.finished.map(i => ({ ...i, type: "finished" }));
    if (galleryFilter === "construction") return houseProjectData.gallery.construction.map(i => ({ ...i, type: "construction" }));
    if (galleryFilter === "concept") return houseProjectData.gallery.conceptBoards.map(i => ({ ...i, type: "concept" }));
    return [
      ...houseProjectData.gallery.finished.map(i => ({ ...i, type: "finished" })),
      ...houseProjectData.gallery.construction.map(i => ({ ...i, type: "construction" })),
      ...houseProjectData.gallery.conceptBoards.map(i => ({ ...i, type: "concept" }))
    ];
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#14F1D9] selection:text-[#111111]">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#161616] to-[#111111]">
        {/* Background ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#14F1D9]/5 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-white/50 mb-6 font-mono">
            <Link href="/" className="hover:text-[#14F1D9] transition-colors">Главная</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/#cases" className="hover:text-[#14F1D9] transition-colors">Кейсы</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#14F1D9]">Интерьер загородного дома</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#14F1D9]/10 border border-[#14F1D9]/30 text-[#14F1D9] text-xs font-semibold uppercase tracking-widest mb-4">
              <Building2 className="w-3.5 h-3.5" />
              Архитектура & Дизайн интерьера
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-montserrat leading-[1.08] mb-4">
              {houseProjectData.title}
            </h1>
            <p className="text-base sm:text-xl text-white/80 font-normal leading-relaxed mb-8 max-w-3xl">
              {houseProjectData.subtitle}
            </p>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-8">
            {houseProjectData.metrics.map((m, idx) => (
              <div key={idx} className="bg-[#1A1A1A] border border-white/10 p-4 md:p-6 relative group hover:border-[#14F1D9]/50 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#14F1D9] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#14F1D9] font-montserrat mb-1">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm text-white/70 font-medium">
                  {m.label}
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
            onClick={() => setActiveTab("board")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeTab === "board"
                ? "bg-[#14F1D9] text-[#111111] shadow-[0_0_20px_rgba(20,241,217,0.3)]"
                : "bg-[#1A1A1A] text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            Главный планшет (Board)
          </button>

          <button
            onClick={() => setActiveTab("plans")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeTab === "plans"
                ? "bg-[#14F1D9] text-[#111111] shadow-[0_0_20px_rgba(20,241,217,0.3)]"
                : "bg-[#1A1A1A] text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            <Layers className="w-4 h-4" />
            Планировка & Зоны
          </button>

          <button
            onClick={() => setActiveTab("concept")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeTab === "concept"
                ? "bg-[#14F1D9] text-[#111111] shadow-[0_0_20px_rgba(20,241,217,0.3)]"
                : "bg-[#1A1A1A] text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            <Palette className="w-4 h-4" />
            Эволюция стиля & Цвета
          </button>

          <button
            onClick={() => setActiveTab("engineering")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeTab === "engineering"
                ? "bg-[#14F1D9] text-[#111111] shadow-[0_0_20px_rgba(20,241,217,0.3)]"
                : "bg-[#1A1A1A] text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            <Zap className="w-4 h-4" />
            Электрика & Свет
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeTab === "gallery"
                ? "bg-[#14F1D9] text-[#111111] shadow-[0_0_20px_rgba(20,241,217,0.3)]"
                : "bg-[#1A1A1A] text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            <Camera className="w-4 h-4" />
            Стройка ➔ Готовый дом
          </button>
        </div>
      </nav>

      {/* 3. TAB CONTENT */}
      <main className="container mx-auto px-4 md:px-8 py-10">

        {/* TAB 1: ARCHITECTURAL BOARD (REFERENCE 2 STYLE) */}
        {activeTab === "board" && (
          <div className="space-y-12">
            {/* Top Sheet Header */}
            <div className="bg-[#181818] border border-white/15 p-6 md:p-8 rounded-none shadow-2xl relative overflow-hidden">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-white/10 pb-6 mb-8">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#14F1D9] font-mono mb-1">
                    PROJECT PRESENTATION SHEET • INTERIOR ARCHITECTURE
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-montserrat">
                    RESIDENCE HOUSE: SCANDINAVIAN ECO-MINIMALISM
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/70">
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10">Локация: Загород</span>
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10">Площадь: 140 м²</span>
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10">Стиль: Сканди / Эко</span>
                  <span className="px-3 py-1.5 bg-[#14F1D9]/10 text-[#14F1D9] border border-[#14F1D9]/30">Реализовано</span>
                </div>
              </div>

              {/* Main Board Grid: Left Plan, Center Axonometric, Right Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left: 2D Floor Plan mini */}
                <div className="lg:col-span-4 bg-[#141414] border border-white/10 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-white/80 font-mono">
                        Floor Plan (1st Floor)
                      </span>
                      <button
                        onClick={() => setSelectedImage({ src: "/Кейсы/10-house-project/extracted/распределение зон и мебели_img_12.JPEG", title: "План 1-го этажа с размерами и зонированием" })}
                        className="text-[10px] text-[#14F1D9] hover:underline flex items-center gap-1 font-mono"
                      >
                        <Maximize2 className="w-3 h-3" /> Увеличить
                      </button>
                    </div>
                    <div className="relative aspect-square w-full bg-black/40 overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedImage({ src: "/Кейсы/10-house-project/extracted/распределение зон и мебели_img_12.JPEG", title: "План 1-го этажа с расстановкой мебели" })}
                    >
                      <Image
                        src="/Кейсы/10-house-project/extracted/распределение зон и мебели_img_12.JPEG"
                        alt="План 1 этажа"
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/60 space-y-1 font-mono">
                    <p>1. Прихожая и холл — 11.1 м²</p>
                    <p>2. Котельная/кладовая — 4.5 м²</p>
                    <p>3. Санузел с ванной — 9.3 м²</p>
                    <p>4. Кухня-столовая-гостиная — 42.5 м²</p>
                  </div>
                </div>

                {/* Center: Hero 3D Axonometric Cutaway */}
                <div className="lg:col-span-8 bg-[#141414] border border-white/10 p-4 relative group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#14F1D9] font-mono">
                        Axonometric 3D Cutaway
                      </span>
                      <span className="text-[10px] text-white/40 uppercase font-mono">Общественное ядро</span>
                    </div>
                    <button
                      onClick={() => setSelectedImage({ src: "/Кейсы/10-house-project/extracted/распределение зон и мебели_img_11.JPEG", title: "Аксонометрическая 3D модель первого этажа" })}
                      className="text-[10px] text-[#14F1D9] hover:underline flex items-center gap-1 font-mono"
                    >
                      <Maximize2 className="w-3 h-3" /> Развернуть 3D модель
                    </button>
                  </div>

                  <div
                    className="relative aspect-[16/10] w-full bg-black/60 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage({ src: "/Кейсы/10-house-project/extracted/распределение зон и мебели_img_11.JPEG", title: "Аксонометрическая 3D модель первого этажа с камином и кухней" })}
                  >
                    <Image
                      src="/Кейсы/10-house-project/extracted/распределение зон и мебели_img_11.JPEG"
                      alt="Аксонометрический разрез дома"
                      fill
                      className="object-contain group-hover:scale-102 transition-transform duration-500"
                    />

                    {/* Interactive Callout Badges on the Cutaway */}
                    <div className="absolute top-[25%] left-[28%] bg-[#111111]/90 border border-[#14F1D9]/60 px-2 py-0.5 text-[9px] font-mono text-[#14F1D9] shadow-lg pointer-events-none">
                      Прихожая & Холл
                    </div>
                    <div className="absolute top-[32%] right-[22%] bg-[#111111]/90 border border-[#14F1D9]/60 px-2 py-0.5 text-[9px] font-mono text-[#14F1D9] shadow-lg pointer-events-none">
                      U-образный кухонный фронт
                    </div>
                    <div className="absolute bottom-[28%] right-[32%] bg-[#111111]/90 border border-[#14F1D9]/60 px-2 py-0.5 text-[9px] font-mono text-[#14F1D9] shadow-lg pointer-events-none">
                      Круглый обеденный стол
                    </div>
                    <div className="absolute bottom-[20%] left-[38%] bg-[#111111]/90 border border-[#14F1D9]/60 px-2 py-0.5 text-[9px] font-mono text-[#14F1D9] shadow-lg pointer-events-none">
                      Бетонный камин & Бирюзовые кресла
                    </div>
                  </div>

                  {/* Highlights under 3D model */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-4 border-t border-white/10 text-[11px] text-white/70 font-mono">
                    <div>• Панорамные окна в пол</div>
                    <div>• Монолитный камин</div>
                    <div>• Единый контур кухни</div>
                    <div>• 2 сценария отдыха</div>
                  </div>
                </div>
              </div>

              {/* Material Palette Section (Reference 2 style: Circular swatches) */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[#14F1D9] font-mono">
                      MATERIAL PALETTE & FINISHES
                    </h3>
                    <p className="text-xs text-white/60">
                      Реализованная палитра: нейтральный серый, чистый белый, благородный дуб и фирменный бирюзовый акцент
                    </p>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-mono text-white/40">
                    6 базовых текстурных слоёв
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {houseProjectData.materials.map((mat, i) => (
                    <div key={i} className="bg-[#141414] border border-white/10 p-4 flex flex-col items-center text-center group hover:border-[#14F1D9]/40 transition-colors">
                      {/* Swatch circle */}
                      <div
                        className="w-16 h-16 rounded-full mb-3 shadow-inner border border-white/20 transition-transform group-hover:scale-110 flex items-center justify-center relative overflow-hidden"
                        style={{ backgroundColor: mat.colorHex }}
                      >
                        {mat.colorHex === "#14F1D9" && (
                          <Sparkles className="w-5 h-5 text-[#111111] animate-pulse" />
                        )}
                      </div>
                      <div className="text-xs font-bold text-white mb-0.5">{mat.name}</div>
                      <div className="text-[10px] text-[#14F1D9] font-mono uppercase mb-2">{mat.role}</div>
                      <p className="text-[10px] text-white/60 leading-relaxed font-sans line-clamp-3">
                        {mat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Furniture Schedule Section (Reference 2 style: Furniture Cards) */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[#14F1D9] font-mono">
                      FURNITURE & CUSTOM BUILT-INS SCHEDULE
                    </h3>
                    <p className="text-xs text-white/60">
                      Спецификация ключевой мебели и индивидуальных решений
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {houseProjectData.furniture.map((item, i) => (
                    <div key={i} className="bg-[#141414] border border-white/10 p-5 flex flex-col justify-between hover:border-white/30 transition-colors">
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#14F1D9] mb-1">
                          <span>{item.category}</span>
                          <Armchair className="w-3 h-3 text-white/40" />
                        </div>
                        <h4 className="text-base font-bold text-white font-montserrat mb-2">
                          {item.name}
                        </h4>
                        <div className="text-xs text-white/80 font-medium mb-2 bg-white/5 px-2 py-1 inline-block border border-white/5">
                          {item.material}
                        </div>
                        <p className="text-xs text-white/60 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lighting Plan Highlights */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[#14F1D9] font-mono">
                      LIGHTING SCENARIOS & AMBIENCE
                    </h3>
                    <p className="text-xs text-white/60">
                      Сценарии искусственного света: от яркого рабочего до уютного каминного
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {houseProjectData.lightingGroups.map((lg, i) => (
                    <div key={i} className="bg-[#141414] border border-white/10 p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Lightbulb className="w-4 h-4 text-[#14F1D9]" />
                          <span className="text-[10px] font-mono text-white/50">{lg.kelvin}</span>
                        </div>
                        <h5 className="text-sm font-bold text-white mb-1">{lg.name}</h5>
                        <div className="text-[11px] text-[#14F1D9] font-mono mb-2">{lg.type}</div>
                        <p className="text-xs text-white/60 leading-relaxed mb-3">{lg.desc}</p>
                      </div>
                      <div className="text-[10px] text-white/40 border-t border-white/5 pt-2 font-mono">
                        {lg.placement}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: PLANS & ZONING */}
        {activeTab === "plans" && (
          <div className="space-y-8">
            {/* Floor Switcher & View Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-[#181818] border border-white/10 p-4">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase text-white/60 font-mono mr-2">Этаж:</span>
                <button
                  onClick={() => { setSelectedFloor(1); setSelectedZone(null); }}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                    selectedFloor === 1 ? "bg-[#14F1D9] text-[#111111]" : "bg-[#141414] text-white/70 hover:text-white"
                  }`}
                >
                  1 Этаж (Общественный)
                </button>
                <button
                  onClick={() => { setSelectedFloor(2); setSelectedZone(null); }}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                    selectedFloor === 2 ? "bg-[#14F1D9] text-[#111111]" : "bg-[#141414] text-white/70 hover:text-white"
                  }`}
                >
                  2 Этаж (Приватный)
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs uppercase text-white/60 font-mono mr-2">Вид:</span>
                <button
                  onClick={() => setPlanMode("3D")}
                  className={`px-3 py-1.5 text-xs font-mono transition-colors ${
                    planMode === "3D" ? "bg-white/20 text-white font-bold" : "bg-transparent text-white/50 hover:text-white"
                  }`}
                >
                  3D Аксонометрия
                </button>
                <button
                  onClick={() => setPlanMode("2D")}
                  className={`px-3 py-1.5 text-xs font-mono transition-colors ${
                    planMode === "2D" ? "bg-white/20 text-white font-bold" : "bg-transparent text-white/50 hover:text-white"
                  }`}
                >
                  2D Архитектурный план
                </button>
              </div>
            </div>

            {/* Plan Image Display with Zoom */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 bg-[#181818] border border-white/10 p-4 relative group">
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-white/70">
                  <span>{currentFloorData.title}</span>
                  <button
                    onClick={() => setSelectedImage({
                      src: planMode === "3D" ? currentFloorData.axonometric3D : currentFloorData.plan2D,
                      title: `${currentFloorData.title} (${planMode})`
                    })}
                    className="text-[#14F1D9] hover:underline flex items-center gap-1"
                  >
                    <Maximize2 className="w-3.5 h-3.5" /> Полный экран
                  </button>
                </div>

                <div
                  className="relative aspect-[16/11] w-full bg-black/60 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage({
                    src: planMode === "3D" ? currentFloorData.axonometric3D : currentFloorData.plan2D,
                    title: `${currentFloorData.title} (${planMode})`
                  })}
                >
                  <Image
                    src={planMode === "3D" ? currentFloorData.axonometric3D : currentFloorData.plan2D}
                    alt={currentFloorData.title}
                    fill
                    className="object-contain group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Zones Interactive List */}
              <div className="lg:col-span-4 space-y-3">
                <h3 className="text-xs uppercase tracking-widest text-[#14F1D9] font-mono mb-2">
                  ФУНКЦИОНАЛЬНЫЕ ЗОНЫ ЭТАЖА
                </h3>
                {currentFloorData.zones.map((zone) => (
                  <div
                    key={zone.id}
                    onClick={() => setSelectedZone(selectedZone?.id === zone.id ? null : zone)}
                    className={`p-4 border transition-all cursor-pointer ${
                      selectedZone?.id === zone.id
                        ? "bg-[#14F1D9]/10 border-[#14F1D9]"
                        : "bg-[#181818] border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-white font-montserrat">{zone.name}</h4>
                      {zone.area && (
                        <span className="text-xs font-mono text-[#14F1D9]">{zone.area}</span>
                      )}
                    </div>
                    <div className="text-xs text-white/60 line-clamp-2 mb-2">
                      {zone.features}
                    </div>

                    {selectedZone?.id === zone.id && (
                      <div className="pt-3 mt-3 border-t border-white/10 space-y-2 text-xs">
                        <div>
                          <span className="text-[#14F1D9] font-mono">Занятия / Функции: </span>
                          <span className="text-white/80">{zone.functions.join(", ")}</span>
                        </div>
                        <div>
                          <span className="text-[#14F1D9] font-mono">Мебель и техника: </span>
                          <span className="text-white/80">{zone.furniture.join(", ")}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CONCEPT & COLOR EVOLUTION */}
        {activeTab === "concept" && (
          <div className="space-y-12">
            {/* Story Card: Why Palette Shifted */}
            <div className="bg-[#181818] border border-white/10 p-6 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#14F1D9]/5 blur-[100px] pointer-events-none rounded-full" />
              <div className="max-w-3xl">
                <div className="text-xs font-mono uppercase tracking-widest text-[#14F1D9] mb-3">
                  ДИЗАЙН-МАНИФЕСТ И ЭВОЛЮЦИЯ
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-montserrat mb-6">
                  {houseProjectData.evolutionStory.title}
                </h3>
                <div className="space-y-4 text-white/80 leading-relaxed text-sm sm:text-base">
                  <div className="p-4 bg-white/5 border-l-2 border-amber-400">
                    <strong className="text-amber-400 font-mono text-xs uppercase block mb-1">Фаза 1: Смелый поиск и гипотезы</strong>
                    {houseProjectData.evolutionStory.initialConcept}
                  </div>
                  <div className="p-4 bg-white/5 border-l-2 border-white/40">
                    <strong className="text-white/60 font-mono text-xs uppercase block mb-1">Фаза 2: Точка перелома на стройке</strong>
                    {houseProjectData.evolutionStory.turningPoint}
                  </div>
                  <div className="p-4 bg-[#14F1D9]/5 border-l-2 border-[#14F1D9]">
                    <strong className="text-[#14F1D9] font-mono text-xs uppercase block mb-1">Фаза 3: Финальная сканди-гармония</strong>
                    {houseProjectData.evolutionStory.realizedResult}
                  </div>
                </div>
              </div>
            </div>

            {/* Concept Moodboards (Reference 1 style) */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-widest text-[#14F1D9] font-mono">
                    ПОИСКОВЫЕ МУДБОРДЫ & КОЛЛАЖИ
                  </h3>
                  <p className="text-xs text-white/60">
                    Материалы, текстиль, фактуры и колористические пробы
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {houseProjectData.gallery.conceptBoards.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImage(item)}
                    className="bg-[#181818] border border-white/10 overflow-hidden cursor-pointer group hover:border-[#14F1D9]/50 transition-colors"
                  >
                    <div className="relative aspect-[4/3] w-full bg-black/40 overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-6 h-6 text-[#14F1D9]" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-xs font-bold text-white font-montserrat">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ENGINEERING & ELECTRICAL */}
        {activeTab === "engineering" && (
          <div className="space-y-8">
            <div className="bg-[#181818] border border-white/10 p-6 md:p-8">
              <h3 className="text-xl font-bold uppercase text-white font-montserrat mb-2">
                Инженерные планы: Электрика, Розетки, Сценарии освещения
              </h3>
              <p className="text-xs text-white/60 mb-6 max-w-3xl leading-relaxed">
                Точные чертежи высотных отметок розеток, трассировки слаботочных сетей (интернет, ТВ, кондиционеры) и разделения светильников на независимые группы включения.
              </p>

              {/* Floor Switcher */}
              <div className="flex items-center gap-3 mb-8">
                <button
                  onClick={() => setSelectedFloor(1)}
                  className={`px-4 py-2 text-xs font-bold uppercase font-mono ${
                    selectedFloor === 1 ? "bg-[#14F1D9] text-[#111111]" : "bg-[#141414] text-white/70"
                  }`}
                >
                  Схемы 1-го этажа
                </button>
                <button
                  onClick={() => setSelectedFloor(2)}
                  className={`px-4 py-2 text-xs font-bold uppercase font-mono ${
                    selectedFloor === 2 ? "bg-[#14F1D9] text-[#111111]" : "bg-[#141414] text-white/70"
                  }`}
                >
                  Схемы 2-го этажа
                </button>
              </div>

              {/* Two Column Layout: Sockets vs Lighting */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Plan 1: Sockets */}
                <div className="bg-[#141414] border border-white/10 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold font-mono text-[#14F1D9] uppercase">
                      1. План розеток и высотных отметок
                    </span>
                    <button
                      onClick={() => setSelectedImage({ src: currentFloorData.socketsPlan, title: `План розеток (${selectedFloor} этаж)` })}
                      className="text-[10px] text-white/60 hover:text-white flex items-center gap-1 font-mono"
                    >
                      <Maximize2 className="w-3 h-3" /> Увеличить
                    </button>
                  </div>
                  <div
                    className="relative aspect-square w-full bg-black/40 overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage({ src: currentFloorData.socketsPlan, title: `План розеток (${selectedFloor} этаж)` })}
                  >
                    <Image
                      src={currentFloorData.socketsPlan}
                      alt="План розеток"
                      fill
                      className="object-contain group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-white/60 font-mono space-y-1">
                    <p>• Высота над кухонным фартуком: 1100 мм</p>
                    <p>• Вывод под ТВ-панель: 1300 мм (скрытая проводка)</p>
                    <p>• Санузел: фен (1050 мм), полотенцесушитель (1000 мм)</p>
                    <p>• Вывод под кондиционер над входной дверью: 2300 мм</p>
                  </div>
                </div>

                {/* Plan 2: Lighting */}
                <div className="bg-[#141414] border border-white/10 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold font-mono text-[#14F1D9] uppercase">
                      2. План групп освещения и выключателей
                    </span>
                    <button
                      onClick={() => setSelectedImage({ src: currentFloorData.lightingPlan, title: `План освещения (${selectedFloor} этаж)` })}
                      className="text-[10px] text-white/60 hover:text-white flex items-center gap-1 font-mono"
                    >
                      <Maximize2 className="w-3 h-3" /> Увеличить
                    </button>
                  </div>
                  <div
                    className="relative aspect-square w-full bg-black/40 overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage({ src: currentFloorData.lightingPlan, title: `План освещения (${selectedFloor} этаж)` })}
                  >
                    <Image
                      src={currentFloorData.lightingPlan}
                      alt="План освещения"
                      fill
                      className="object-contain group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-white/60 font-mono space-y-1">
                    <p>• Группа 1: Точечные споты кухни и холла (синий контур)</p>
                    <p>• Группа 2: Подвесной светильник над столом (жёлтый контур)</p>
                    <p>• Группа 3: Локальная подсветка каминной зоны</p>
                    <p>• Проходные выключатели на лестничном марше</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: GALLERY (CONSTRUCTION ➔ FINISHED HOUSE) */}
        {activeTab === "gallery" && (
          <div className="space-y-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-[#181818] border border-white/10 p-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setGalleryFilter("all")}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    galleryFilter === "all" ? "bg-[#14F1D9] text-[#111111]" : "bg-[#141414] text-white/70 hover:text-white"
                  }`}
                >
                  Все кадры ({houseProjectData.gallery.finished.length + houseProjectData.gallery.construction.length + houseProjectData.gallery.conceptBoards.length})
                </button>
                <button
                  onClick={() => setGalleryFilter("finished")}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    galleryFilter === "finished" ? "bg-[#14F1D9] text-[#111111]" : "bg-[#141414] text-white/70 hover:text-white"
                  }`}
                >
                  Готовый интерьер ({houseProjectData.gallery.finished.length})
                </button>
                <button
                  onClick={() => setGalleryFilter("construction")}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    galleryFilter === "construction" ? "bg-[#14F1D9] text-[#111111]" : "bg-[#141414] text-white/70 hover:text-white"
                  }`}
                >
                  Процесс стройки ({houseProjectData.gallery.construction.length})
                </button>
              </div>

              <div className="text-xs text-white/50 font-mono">
                Кликните по фото для полноэкранного просмотра
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredGallery().map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(item)}
                  className="bg-[#181818] border border-white/10 overflow-hidden cursor-pointer group hover:border-[#14F1D9]/50 transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] w-full bg-black/40 overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-6 h-6 text-[#14F1D9]" />
                    </div>
                    {item.type === "finished" && (
                      <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#14F1D9] text-[#111111] text-[9px] font-bold uppercase font-mono">
                        Готовый дом
                      </span>
                    )}
                    {item.type === "construction" && (
                      <span className="absolute top-2 left-2 px-2 py-0.5 bg-amber-500 text-black text-[9px] font-bold uppercase font-mono">
                        Стройка
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-white/90 font-medium line-clamp-2">{item.title}</p>
                    {item.room && (
                      <span className="text-[10px] text-[#14F1D9] font-mono mt-1 block uppercase">
                        {item.room}
                      </span>
                    )}
                  </div>
                </div>
              ))}
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
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-[#14F1D9] hover:text-[#111111] text-white transition-colors z-50"
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
            <div className="mt-4 text-center">
              <p className="text-sm md:text-base font-bold text-white font-montserrat">
                {selectedImage.title}
              </p>
              {selectedImage.room && (
                <p className="text-xs text-[#14F1D9] font-mono mt-1 uppercase">
                  {selectedImage.room}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 5. FOOTER CTA */}
      <footer className="border-t border-white/10 bg-[#141414] py-16 mt-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-montserrat mb-4">
            Хотите обсудить проект своего дома или интерьера?
          </h3>
          <p className="text-sm text-white/70 mb-8 leading-relaxed">
            От архитектурной концепции и электрических чертежей до авторского надзора и комплектации мебелью.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3.5 bg-[#14F1D9] hover:bg-white text-[#111111] font-bold text-xs uppercase tracking-widest transition-colors font-montserrat"
            >
              Связаться с Екатериной
            </Link>
            <Link
              href="/cases/11-landscape-project"
              className="px-8 py-3.5 bg-[#1A1A1A] hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest border border-white/15 transition-colors font-montserrat"
            >
              Смотреть кейс ландшафта ➔
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
