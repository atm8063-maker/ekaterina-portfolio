"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import { houseProjectData, ZoneDetail, MaterialSwatch, FurnitureItem } from "@/lib/house-data";
import {
  Palette,
  Layers,
  Zap,
  Armchair,
  Camera,
  FileText,
  Maximize2,
  X,
  ChevronRight,
  Building2,
  Lightbulb,
  Sparkles,
  Flame,
  Home
} from "lucide-react";

interface SketchCallout {
  id: number;
  title: string;
  tag: string;
  desc: string;
  x: number;
  y: number;
}

const FLOOR_SKETCHES: Record<1 | 2, {
  floor: 1 | 2;
  title: string;
  subtitle: string;
  imageSrc: string;
  callouts: SketchCallout[];
}> = {
  1: {
    floor: 1,
    title: "1 Этаж: Общественное ядро дома",
    subtitle: "Гостиная с дровяным камином, кухня с бирюзовым кабанчиком, прихожая и бойлерная",
    imageSrc: "/Кейсы/10-house-project/sketch_floor_1.jpg",
    callouts: [
      {
        id: 1,
        title: "Дровяной камин & ТВ-зона",
        tag: "Очаг & Уют",
        desc: "Камин с лаконичной отделкой под бетон и дерево, глубокий диван для семьи и бирюзовый ковер цвета морской волны.",
        x: 41,
        y: 54,
      },
      {
        id: 2,
        title: "Бирюзовый кабанчик на фартуке",
        tag: "Кухня-столовая",
        desc: "Глянцевая бирюзовая плитка «кабанчик», П-образная эргономичная рабочая зона, встроенная индукция и духовой шкаф.",
        x: 77,
        y: 38,
      },
      {
        id: 3,
        title: "Круглый обеденный стол",
        tag: "Столовая зона",
        desc: "Столовая группа у окна с видом на участок: белый круглый стол и комфортные скандинавские стулья.",
        x: 71,
        y: 51,
      },
      {
        id: 4,
        title: "Котельная / Бойлерная",
        tag: "Инженерия",
        desc: "Автономная котельная за лестницей: бойлер косвенного нагрева, котёл отопления, коллекторы водяного тёплого пола и хозблок.",
        x: 62,
        y: 20,
      },
      {
        id: 5,
        title: "Прихожая & Гардероб",
        tag: "Входная группа",
        desc: "Встроенный вместительный шкаф-купе с белыми жалюзийными фасадами и скошенная ниша с зеркалом в полный рост.",
        x: 23,
        y: 34,
      },
      {
        id: 6,
        title: "Гостевой санузел",
        tag: "Санузел 1F",
        desc: "Компактный санузел первого этажа с инсталляцией, подвесной раковиной и лаконичной светлой плиткой.",
        x: 44,
        y: 18,
      },
      {
        id: 7,
        title: "Лестничный марш",
        tag: "Связь этажей",
        desc: "Деревянная лестница с подсветкой ступеней и безопасным ограждением, соединяющая первый этаж со вторым.",
        x: 52,
        y: 36,
      },
    ],
  },
  2: {
    floor: 2,
    title: "2 Этаж: Приватная зона & Творчество",
    subtitle: "Мастер-спальня с деревом, мастерская со сплошным столом и гитарами, детская с домиком и санузел",
    imageSrc: "/Кейсы/10-house-project/sketch_floor_2.jpg",
    callouts: [
      {
        id: 1,
        title: "Мастер-спальня",
        tag: "Приватная зона",
        desc: "Стена с отделкой из тёмного дерева, кровать с бирюзовым текстилем, прикроватные тумбы и нейтральная серая скошенная перегородка в коридор.",
        x: 72,
        y: 26,
      },
      {
        id: 2,
        title: "Стол-подоконник у серой стены",
        tag: "Мастерская",
        desc: "Сплошной белый подоконник-стол вдоль серой стены с окном, доходящий вплотную до бирюзовой стены, и мольберт для живописи.",
        x: 22,
        y: 67,
      },
      {
        id: 3,
        title: "Стойка с гитарами у стены",
        tag: "Музыка",
        desc: "Музыкальный уголок: гитары стоят у бирюзовой стены рядом с дверным проёмом вместо прежнего стола.",
        x: 34,
        y: 53,
      },
      {
        id: 4,
        title: "Детская комната",
        tag: "Детская",
        desc: "Игровая кровать-домик со шведской стенкой, кровать-машинка, ковёр с городскими дорогами и стеллажи под игрушки.",
        x: 76,
        y: 67,
      },
      {
        id: 5,
        title: "Бирюзовая стена & Серые стены с окнами",
        tag: "Цветовой баланс",
        desc: "Стена с дверями целиком выкрашена в насыщенную бирюзу, а внешние стены с окнами в обеих комнатах выполнены в спокойном светло-сером цвете.",
        x: 50,
        y: 46,
      },
      {
        id: 6,
        title: "Санузел 2-го этажа",
        tag: "Санузел 2F",
        desc: "Ванная комната с белой плиткой кабанчик: раковина и унитаз выстроены вдоль одной левой стены, деревянный пол.",
        x: 24,
        y: 24,
      },
      {
        id: 7,
        title: "Холл & Окно лестничного пролёта",
        tag: "Коридор",
        desc: "Широкое окно в пролёте с бирюзовыми портьерами, деревянные перила и открытый доступ во все комнаты этажа.",
        x: 44,
        y: 27,
      },
    ],
  },
};

export function HouseCase() {
  const [sketchFloor, setSketchFloor] = useState<1 | 2>(1);
  const [activeCallout, setActiveCallout] = useState<number | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<1 | 2>(1);
  const [selectedZone, setSelectedZone] = useState<ZoneDetail | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; room?: string } | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<"all" | "finished" | "construction">("all");

  const currentSketch = FLOOR_SKETCHES[sketchFloor];
  const currentFloorData = houseProjectData.floorsData.find(f => f.floorNumber === selectedFloor)!;

  const filteredGallery = (): Array<{ src: string; title: string; room?: string; type: string }> => {
    if (galleryFilter === "finished") return houseProjectData.gallery.finished.map(i => ({ ...i, type: "finished" }));
    if (galleryFilter === "construction") return houseProjectData.gallery.construction.map(i => ({ ...i, type: "construction" }));
    return [
      ...houseProjectData.gallery.finished.map(i => ({ ...i, type: "finished" })),
      ...houseProjectData.gallery.construction.map(i => ({ ...i, type: "construction" }))
    ];
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#14F1D9] selection:text-[#111111]">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#161616] to-[#111111]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#14F1D9]/5 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-white/50 mb-6 font-sans">
            <Link href="/" className="hover:text-[#14F1D9] transition-colors">Главная</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/#cases" className="hover:text-[#14F1D9] transition-colors">Кейсы</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#14F1D9]">Интерьер загородного дома</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#14F1D9]/10 border border-[#14F1D9]/30 text-[#14F1D9] text-xs font-semibold uppercase tracking-widest mb-4">
              <Building2 className="w-3.5 h-3.5" />
              Архитектура &amp; Дизайн интерьера
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-montserrat leading-[1.08] mb-4">
              {houseProjectData.title}
            </h1>
            <p className="text-base sm:text-xl text-white/80 font-normal leading-relaxed mb-8 max-w-3xl font-sans">
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
                <div className="text-xs sm:text-sm text-white/70 font-medium font-sans">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. STICKY NAVIGATION (Clean, unnumbered) */}
      <nav className="sticky top-20 z-40 bg-[#111111]/95 backdrop-blur-md border-b border-white/10 py-3">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-start md:justify-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <a
            href="#sketches"
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap bg-[#1A1A1A] text-[#14F1D9] hover:bg-white/10 transition-colors font-montserrat rounded-none border border-[#14F1D9]/40 shadow-[0_0_15px_rgba(20,241,217,0.15)]"
          >
            <Building2 className="w-3.5 h-3.5 text-[#14F1D9]" />
            Аксонометрия &amp; Скетчи
          </a>
          <a
            href="#concept"
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap bg-[#1A1A1A] text-white/80 hover:text-[#14F1D9] hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <Palette className="w-3.5 h-3.5 text-[#14F1D9]" />
            Концепция &amp; Стили
          </a>
          <a
            href="#planoplan"
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap bg-[#1A1A1A] text-white/80 hover:text-[#14F1D9] hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <Layers className="w-3.5 h-3.5 text-[#14F1D9]" />
            3D-модель Planoplan
          </a>
          <a
            href="#lighting"
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap bg-[#1A1A1A] text-white/80 hover:text-[#14F1D9] hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <Zap className="w-3.5 h-3.5 text-[#14F1D9]" />
            Электрика &amp; Свет
          </a>
          <a
            href="#furniture"
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap bg-[#1A1A1A] text-white/80 hover:text-[#14F1D9] hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <Armchair className="w-3.5 h-3.5 text-[#14F1D9]" />
            Комплектация &amp; Материалы
          </a>
          <a
            href="#gallery"
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap bg-[#1A1A1A] text-white/80 hover:text-[#14F1D9] hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <Camera className="w-3.5 h-3.5 text-[#14F1D9]" />
            Стройка &amp; Реализация
          </a>
          <a
            href="#blueprints"
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap bg-[#1A1A1A] text-white/80 hover:text-[#14F1D9] hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <FileText className="w-3.5 h-3.5 text-[#14F1D9]" />
            Чертежи проектировщика
          </a>
        </div>
      </nav>

      {/* 3. MAIN STORY FLOW */}
      <main className="container mx-auto px-4 md:px-8 py-10 space-y-20">

        {/* SECTION 0: AXONOMETRIC SKETCHES & FEATURE CALLOUTS */}
        <section id="sketches" className="scroll-mt-28 space-y-8">
          <div className="bg-[#181818] border border-white/15 p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#14F1D9]/5 blur-[100px] pointer-events-none rounded-full" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#14F1D9]/10 border border-[#14F1D9]/30 text-[#14F1D9] text-[10px] font-bold uppercase tracking-widest mb-2">
                  <Sparkles className="w-3 h-3" />
                  3D-Скетчинг &amp; Планировка
                </div>
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white font-montserrat">
                  Архитектурные Аксонометрические Скетчи
                </h2>
                <p className="text-xs text-white/60 mt-1 font-sans">
                  Объёмно-пространственные разрезы этажей в маркерной акварели с разметкой ключевых проектных решений и интерьерных фишек
                </p>
              </div>

              {/* Floor Switcher */}
              <div className="flex items-center gap-2 bg-[#121212] border border-white/10 p-1 self-stretch sm:self-auto shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setSketchFloor(1);
                    setActiveCallout(null);
                  }}
                  className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold uppercase tracking-wider font-montserrat transition-all ${
                    sketchFloor === 1
                      ? "bg-[#14F1D9] text-[#111111] shadow-[0_0_15px_rgba(20,241,217,0.3)]"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  1 Этаж (Общее ядро)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSketchFloor(2);
                    setActiveCallout(null);
                  }}
                  className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold uppercase tracking-wider font-montserrat transition-all ${
                    sketchFloor === 2
                      ? "bg-[#14F1D9] text-[#111111] shadow-[0_0_15px_rgba(20,241,217,0.3)]"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  2 Этаж (Приватная зона)
                </button>
              </div>
            </div>

            {/* Stage Grid: Sketch with Pins + Feature List */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              {/* Left Column: Interactive Image with Pins */}
              <div className="lg:col-span-7 flex flex-col items-center">
                <div className="w-full flex items-center justify-between px-3 py-2 mb-2 border border-white/10 bg-[#141414]">
                  <span className="text-xs font-bold text-white font-montserrat uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#14F1D9] animate-pulse" />
                    {currentSketch.title}
                  </span>
                  <button
                    onClick={() => setSelectedImage({
                      src: currentSketch.imageSrc,
                      title: currentSketch.title
                    })}
                    className="text-[10px] text-white/50 font-sans flex items-center gap-1 hover:text-[#14F1D9] transition-colors"
                  >
                    <Maximize2 className="w-3 h-3" /> Увеличить скетч
                  </button>
                </div>

                <div className="relative w-full max-w-xl mx-auto bg-[#121212] border border-white/20 p-2 shadow-2xl group">
                  <div className="relative aspect-square sm:aspect-[4/5] w-full overflow-hidden bg-black/40">
                    <Image
                      src={currentSketch.imageSrc}
                      alt={currentSketch.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 650px"
                      priority
                    />

                    {/* Overlay Pins */}
                    {currentSketch.callouts.map((c) => {
                      const isActive = activeCallout === c.id;
                      return (
                        <div
                          key={c.id}
                          style={{ left: `${c.x}%`, top: `${c.y}%` }}
                          className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                        >
                          <button
                            type="button"
                            onClick={() => setActiveCallout(isActive ? null : c.id)}
                            onMouseEnter={() => setActiveCallout(c.id)}
                            className={`relative flex items-center justify-center w-7 h-7 rounded-full font-montserrat font-black text-xs transition-all duration-300 ${
                              isActive
                                ? "bg-[#14F1D9] text-[#111111] scale-125 shadow-[0_0_20px_#14F1D9] ring-4 ring-[#14F1D9]/40"
                                : "bg-[#1A1A1A]/90 text-white border border-[#14F1D9] hover:bg-[#14F1D9] hover:text-[#111111] hover:scale-110 shadow-lg backdrop-blur-sm"
                            }`}
                            aria-label={c.title}
                          >
                            {c.id}
                            <span className="absolute -inset-1 rounded-full bg-[#14F1D9]/20 animate-ping pointer-events-none" />
                          </button>

                          {/* Pin Tooltip on hover/active */}
                          {isActive && (
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-52 bg-[#111111] border border-[#14F1D9] p-2.5 text-center shadow-2xl z-30 pointer-events-none">
                              <div className="text-[9px] uppercase font-bold text-[#14F1D9] font-montserrat tracking-wider">
                                {c.tag}
                              </div>
                              <div className="text-xs font-bold text-white font-montserrat mt-0.5">
                                {c.title}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="text-[11px] text-white/50 text-center mt-3 font-sans flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#14F1D9]" />
                  Наведите на метку или нажмите карточку справа для подсветки решения
                </div>
              </div>

              {/* Right Column: Feature Cards */}
              <div className="lg:col-span-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-white font-montserrat mb-2 flex items-center gap-2">
                  <Flame className="w-3.5 h-3.5 text-[#14F1D9]" />
                  Фишки и функциональные узлы этажа ({currentSketch.callouts.length})
                </div>

                <div className="space-y-2.5 max-h-[580px] overflow-y-auto pr-1 [scrollbar-width:thin] [scrollbar-color:#14F1D9/30_transparent]">
                  {currentSketch.callouts.map((c) => {
                    const isActive = activeCallout === c.id;
                    return (
                      <div
                        key={c.id}
                        onClick={() => setActiveCallout(isActive ? null : c.id)}
                        onMouseEnter={() => setActiveCallout(c.id)}
                        className={`p-3.5 border transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#14F1D9]/10 border-[#14F1D9] shadow-[0_0_15px_rgba(20,241,217,0.15)] translate-x-1"
                            : "bg-[#141414] border-white/10 hover:border-white/30 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-black shrink-0 font-montserrat ${
                              isActive
                                ? "bg-[#14F1D9] text-[#111111]"
                                : "bg-white/10 text-white/80"
                            }`}
                          >
                            {c.id}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="text-xs font-bold uppercase font-montserrat text-white truncate">
                                {c.title}
                              </h4>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#14F1D9] font-montserrat shrink-0">
                                {c.tag}
                              </span>
                            </div>
                            <p className="text-[11px] text-white/70 font-sans mt-1 leading-relaxed">
                              {c.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: CONCEPT & REFS (from 'Коллажи и референсы') */}
        <section id="concept" className="scroll-mt-28 space-y-8">
          <div className="bg-[#181818] border border-white/15 p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white font-montserrat">
                  Концепция, Стили и Цветовая Палитра
                </h2>
                <p className="text-xs text-white/60 mt-1 font-sans">
                  Поисковые мудборды, природные фактуры и цветовые предпочтения (из папки «Коллажи и референсы»)
                </p>
              </div>
              <div className="text-xs text-white/50 font-sans">
                Кликните по планшету для полноэкранного зума
              </div>
            </div>

            {/* Concept Hero Board */}
            <div
              onClick={() => setSelectedImage({
                src: "/Кейсы/10-house-project/collage_concept_references.jpg",
                title: "Концепция, стили & цветовые предпочтения"
              })}
              className="bg-[#141414] border border-white/20 hover:border-[#14F1D9] p-2 sm:p-4 cursor-pointer group transition-all mb-8 shadow-2xl"
            >
              <div className="flex items-center justify-between px-2 py-1.5 mb-2 border-b border-white/10">
                <span className="text-xs font-bold text-white font-montserrat uppercase tracking-wider">
                  Планшет концепции и цветовых референсов
                </span>
                <span className="text-[10px] text-white/50 font-sans flex items-center gap-1 group-hover:text-[#14F1D9]">
                  <Maximize2 className="w-3 h-3" /> Увеличить планшет
                </span>
              </div>
              <div className="relative aspect-[2/3] max-w-xl mx-auto w-full bg-black/60 overflow-hidden">
                <Image
                  src="/Кейсы/10-house-project/collage_concept_references.jpg"
                  alt="Концепция, стили и цвет"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Design Evolution Story */}
            <div className="bg-[#141414] border border-white/10 p-6 md:p-8 mt-8">
              <h3 className="text-lg font-black uppercase text-white font-montserrat mb-4">
                {houseProjectData.evolutionStory.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans text-white/80 leading-relaxed">
                <div className="p-4 bg-white/5 border-l-2 border-white/30">
                  <strong className="text-white font-montserrat font-bold text-xs uppercase block mb-1">
                    Поиск и гипотезы
                  </strong>
                  {houseProjectData.evolutionStory.initialConcept}
                </div>
                <div className="p-4 bg-white/5 border-l-2 border-white/40">
                  <strong className="text-white/70 font-montserrat font-bold text-xs uppercase block mb-1">
                    Точка перелома на стройке
                  </strong>
                  {houseProjectData.evolutionStory.turningPoint}
                </div>
                <div className="p-4 bg-[#14F1D9]/5 border-l-2 border-[#14F1D9]">
                  <strong className="text-[#14F1D9] font-montserrat font-bold text-xs uppercase block mb-1">
                    Финальный сканди-минимализм
                  </strong>
                  {houseProjectData.evolutionStory.realizedResult}
                </div>
              </div>
            </div>

            {/* Material Swatches */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-montserrat mb-4">
                Базовая палитра материалов и фактур
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {houseProjectData.materials.map((mat, i) => (
                  <div key={i} className="bg-[#141414] border border-white/10 p-3 flex flex-col items-center text-center">
                    <div
                      className="w-12 h-12 rounded-full mb-2 border border-white/20 flex items-center justify-center"
                      style={{ backgroundColor: mat.colorHex }}
                    >
                      {mat.colorHex === "#14F1D9" && (
                        <Sparkles className="w-4 h-4 text-[#111111]" />
                      )}
                    </div>
                    <div className="text-xs font-bold text-white mb-0.5">{mat.name}</div>
                    <div className="text-[10px] text-[#14F1D9] font-montserrat font-bold uppercase mb-1">{mat.role}</div>
                    <p className="text-[10px] text-white/60 font-sans line-clamp-2">{mat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: 3D PLANOPLAN (from 'Рендеры в планоплане') */}
        <section id="planoplan" className="scroll-mt-28 space-y-8">
          <div className="bg-[#181818] border border-white/15 p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white font-montserrat">
                  3D-Моделирование в Planoplan
                </h2>
                <p className="text-xs text-white/60 mt-1 font-sans">
                  Виртуальное моделирование дома, видовые оси, естественный свет и планировка (из папки «Рендеры в планоплане»)
                </p>
              </div>
              <div className="text-xs text-white/50 font-sans">
                Кликните по планшету для полноэкранного зума
              </div>
            </div>

            {/* Planoplan Hero Board */}
            <div
              onClick={() => setSelectedImage({
                src: "/Кейсы/10-house-project/collage_planoplan_renders.jpg",
                title: "3D-моделирование и визуализация в Planoplan"
              })}
              className="bg-[#141414] border border-white/20 hover:border-[#14F1D9] p-2 sm:p-4 cursor-pointer group transition-all mb-8 shadow-2xl"
            >
              <div className="flex items-center justify-between px-2 py-1.5 mb-2 border-b border-white/10">
                <span className="text-xs font-bold text-white font-montserrat uppercase tracking-wider">
                  Планшет 3D-моделей Planoplan
                </span>
                <span className="text-[10px] text-white/50 font-sans flex items-center gap-1 group-hover:text-[#14F1D9]">
                  <Maximize2 className="w-3 h-3" /> Увеличить планшет
                </span>
              </div>
              <div className="relative aspect-[2/3] max-w-xl mx-auto w-full bg-black/60 overflow-hidden">
                <Image
                  src="/Кейсы/10-house-project/collage_planoplan_renders.jpg"
                  alt="3D-моделирование в Planoplan"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floor Zones List */}
            <div className="bg-[#141414] border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-6">
                <button
                  onClick={() => setSelectedFloor(1)}
                  className={`px-4 py-2 text-xs font-bold uppercase font-montserrat ${
                    selectedFloor === 1 ? "bg-[#14F1D9] text-[#111111]" : "bg-white/5 text-white/70 hover:text-white"
                  }`}
                >
                  Зоны 1-го этажа
                </button>
                <button
                  onClick={() => setSelectedFloor(2)}
                  className={`px-4 py-2 text-xs font-bold uppercase font-montserrat ${
                    selectedFloor === 2 ? "bg-[#14F1D9] text-[#111111]" : "bg-white/5 text-white/70 hover:text-white"
                  }`}
                >
                  Зоны 2-го этажа
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentFloorData.zones.map((zone) => (
                  <div
                    key={zone.id}
                    onClick={() => setSelectedZone(selectedZone?.id === zone.id ? null : zone)}
                    className={`p-4 border transition-all cursor-pointer ${
                      selectedZone?.id === zone.id
                        ? "bg-[#1A1A1A] border-[#14F1D9]"
                        : "bg-black/30 border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-xs font-bold text-white font-montserrat">{zone.name}</h4>
                      {zone.area && (
                        <span className="text-xs font-montserrat font-bold text-[#14F1D9]">{zone.area}</span>
                      )}
                    </div>
                    <p className="text-[11px] text-white/60 font-sans line-clamp-2 mb-2">{zone.features}</p>
                    <div className="text-[10px] text-white/40 font-sans">
                      {zone.functions.slice(0, 2).join(" • ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: LIGHTING & ENGINEERING (from 'электрика и освещение') */}
        <section id="lighting" className="scroll-mt-28 space-y-8">
          <div className="bg-[#181818] border border-white/15 p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white font-montserrat">
                  Электрика и Световые Сценарии
                </h2>
                <p className="text-xs text-white/60 mt-1 font-sans">
                  Планы розеток, выключателей, высотных отметок и схемы групп света (из папки «Электрика и освещение»)
                </p>
              </div>
              <div className="text-xs text-white/50 font-sans">
                Кликните по планшету для полноэкранного зума
              </div>
            </div>

            {/* Lighting Hero Board */}
            <div
              onClick={() => setSelectedImage({
                src: "/Кейсы/10-house-project/collage_lighting_engineering.jpg",
                title: "Электрика & световые сценарии: схемы и трассировка"
              })}
              className="bg-[#141414] border border-white/20 hover:border-[#14F1D9] p-2 sm:p-4 cursor-pointer group transition-all mb-8 shadow-2xl"
            >
              <div className="flex items-center justify-between px-2 py-1.5 mb-2 border-b border-white/10">
                <span className="text-xs font-bold text-white font-montserrat uppercase tracking-wider">
                  Планшет схем электрики и освещения
                </span>
                <span className="text-[10px] text-white/50 font-sans flex items-center gap-1 group-hover:text-[#14F1D9]">
                  <Maximize2 className="w-3 h-3" /> Увеличить планшет
                </span>
              </div>
              <div className="relative aspect-[2/3] max-w-xl mx-auto w-full bg-black/60 overflow-hidden">
                <Image
                  src="/Кейсы/10-house-project/collage_lighting_engineering.jpg"
                  alt="Электрика и освещение"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Lighting Scenarios Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {houseProjectData.lightingGroups.map((lg, i) => (
                <div key={i} className="bg-[#141414] border border-white/10 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Lightbulb className="w-4 h-4 text-[#14F1D9]" />
                      <span className="text-[10px] font-sans text-white/50">{lg.kelvin}</span>
                    </div>
                    <h5 className="text-xs font-bold text-white mb-1 font-montserrat">{lg.name}</h5>
                    <div className="text-[11px] text-[#14F1D9] font-sans font-medium mb-2">{lg.type}</div>
                    <p className="text-xs text-white/60 leading-relaxed font-sans mb-3">{lg.desc}</p>
                  </div>
                  <div className="text-[10px] text-white/40 border-t border-white/5 pt-2 font-sans">
                    {lg.placement}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: FURNITURE & MATERIALS */}
        <section id="furniture" className="scroll-mt-28 space-y-8">
          <div className="bg-[#181818] border border-white/15 p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white font-montserrat">
                  Комплектация и Материалы
                </h2>
                <p className="text-xs text-white/60 mt-1 font-sans">
                  Реализованная мебель, индивидуальные столярные изделия, слэбы и текстильные акценты
                </p>
              </div>
              <div className="text-xs text-white/50 font-sans">
                Кликните по планшету для полноэкранного зума
              </div>
            </div>

            {/* Furniture Spec Board */}
            <div
              onClick={() => setSelectedImage({
                src: "/Кейсы/10-house-project/collage_furniture_spec.jpg",
                title: "Комплектация & Материалы: Спецификация мебели и текстиля"
              })}
              className="bg-[#141414] border border-white/20 hover:border-[#14F1D9] p-2 sm:p-4 cursor-pointer group transition-all mb-8 shadow-2xl"
            >
              <div className="flex items-center justify-between px-2 py-1.5 mb-2 border-b border-white/10">
                <span className="text-xs font-bold text-white font-montserrat uppercase tracking-wider">
                  Планшет комплектации и индивидуальных решений
                </span>
                <span className="text-[10px] text-white/50 font-sans flex items-center gap-1 group-hover:text-[#14F1D9]">
                  <Maximize2 className="w-3 h-3" /> Увеличить планшет
                </span>
              </div>
              <div className="relative aspect-[2/3] max-w-xl mx-auto w-full bg-black/60 overflow-hidden">
                <Image
                  src="/Кейсы/10-house-project/collage_furniture_spec.jpg"
                  alt="Планшет комплектации и материалов"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Detailed Furniture Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {houseProjectData.furniture.map((item, i) => (
                <div key={i} className="bg-[#141414] border border-white/10 p-5 flex flex-col justify-between hover:border-white/30 transition-colors">
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-sans text-[#14F1D9] mb-1">
                      <span>{item.category}</span>
                      <Armchair className="w-3 h-3 text-white/40" />
                    </div>
                    <h4 className="text-sm font-bold text-white font-montserrat mb-2">
                      {item.name}
                    </h4>
                    <div className="text-xs text-white/80 font-medium mb-2 bg-white/5 px-2 py-1 inline-block border border-white/5">
                      {item.material}
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: CONSTRUCTION & REALIZATION (The Diptych) */}
        <section id="gallery" className="scroll-mt-28 space-y-12">
          <div className="bg-[#181818] border border-white/15 p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white font-montserrat">
                  Стройка и Реализация: Два мира одного дома
                </h2>
                <p className="text-xs text-white/60 mt-1 font-sans">
                  Сравнение архитектурного процесса возведения коробки и готового живого интерьера
                </p>
              </div>
              <div className="text-xs text-white/50 font-sans">
                Кликните по любому планшету для полноэкранного зума
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Left: Construction Collage */}
              <div
                onClick={() => setSelectedImage({
                  src: "/Кейсы/10-house-project/collage_construction_vertical.jpg",
                  title: "Хроника стройки"
                })}
                className="bg-[#141414] border border-white/20 hover:border-white/50 p-2 sm:p-3 cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between px-2 py-1.5 mb-2">
                  <span className="text-xs font-bold text-white font-montserrat uppercase tracking-wider">
                    Хроника стройки
                  </span>
                  <span className="text-[10px] text-white/50 font-sans flex items-center gap-1 group-hover:text-white">
                    <Maximize2 className="w-3 h-3" /> Увеличить планшет
                  </span>
                </div>
                <div className="relative aspect-[2/3] w-full bg-black/60 overflow-hidden">
                  <Image
                    src="/Кейсы/10-house-project/collage_construction_vertical.jpg"
                    alt="Коллаж стройки"
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right: Finished House Collage */}
              <div
                onClick={() => setSelectedImage({
                  src: "/Кейсы/10-house-project/collage_finished_vertical.jpg",
                  title: "Готовый дом в жизни"
                })}
                className="bg-[#141414] border border-[#14F1D9]/30 hover:border-[#14F1D9] p-2 sm:p-3 cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between px-2 py-1.5 mb-2">
                  <span className="text-xs font-bold text-[#14F1D9] font-montserrat uppercase tracking-wider">
                    Готовый дом в жизни
                  </span>
                  <span className="text-[10px] text-white/50 font-sans flex items-center gap-1 group-hover:text-[#14F1D9]">
                    <Maximize2 className="w-3 h-3" /> Увеличить планшет
                  </span>
                </div>
                <div className="relative aspect-[2/3] w-full bg-black/60 overflow-hidden">
                  <Image
                    src="/Кейсы/10-house-project/collage_finished_vertical.jpg"
                    alt="Коллаж готового дома"
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Individual Photo Gallery */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <h3 className="text-lg font-black uppercase text-white font-montserrat">
                  Фотогалерея: Готовый интерьер и хроника стройки
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setGalleryFilter("all")}
                    className={`px-3 py-1.5 text-xs font-montserrat font-bold uppercase transition-colors ${
                      galleryFilter === "all" ? "bg-[#14F1D9] text-[#111111]" : "bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    Все кадры ({houseProjectData.gallery.finished.length + houseProjectData.gallery.construction.length})
                  </button>
                  <button
                    onClick={() => setGalleryFilter("finished")}
                    className={`px-3 py-1.5 text-xs font-montserrat font-bold uppercase transition-colors ${
                      galleryFilter === "finished" ? "bg-[#14F1D9] text-[#111111]" : "bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    Готовый дом ({houseProjectData.gallery.finished.length})
                  </button>
                  <button
                    onClick={() => setGalleryFilter("construction")}
                    className={`px-3 py-1.5 text-xs font-montserrat font-bold uppercase transition-colors ${
                      galleryFilter === "construction" ? "bg-[#14F1D9] text-[#111111]" : "bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    Стройка ({houseProjectData.gallery.construction.length})
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredGallery().map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className="bg-[#141414] border border-white/10 overflow-hidden cursor-pointer group hover:border-[#14F1D9] transition-all"
                  >
                    <div className="relative aspect-square w-full bg-black/50 overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-5 h-5 text-[#14F1D9]" />
                      </div>
                    </div>
                    <div className="p-2.5">
                      <p className="text-[11px] text-white/80 font-sans line-clamp-2">{img.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: BLUEPRINTS (from 'чертежи') */}
        <section id="blueprints" className="scroll-mt-28 space-y-8">
          <div className="bg-[#181818] border border-white/15 p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white font-montserrat">
                  Архитектурная Основа (Чертежи Проектировщика)
                </h2>
                <p className="text-xs text-white/60 mt-1 font-sans">
                  Исходные строительные чертежи от проектировщика (из папки «Чертежи»), послужившие базой для дизайн-проекта
                </p>
              </div>
              <div className="text-xs text-white/50 font-sans">
                Кликните для полноэкранного просмотра
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Blueprint 1 */}
              <div
                onClick={() => setSelectedImage({
                  src: "/Кейсы/10-house-project/чертежи/Снимок экрана 2026-09-08 221420.png",
                  title: "Исходный архитектурный план 1-го этажа (от проектировщика)"
                })}
                className="bg-[#141414] border border-white/10 hover:border-white/40 p-3 cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between px-1 py-1 mb-2 border-b border-white/10">
                  <span className="text-xs font-bold text-white font-montserrat uppercase">
                    План 1-го этажа
                  </span>
                  <Maximize2 className="w-3.5 h-3.5 text-white/50 group-hover:text-[#14F1D9]" />
                </div>
                <div className="relative aspect-square w-full bg-white/5 overflow-hidden">
                  <Image
                    src="/Кейсы/10-house-project/чертежи/Снимок экрана 2026-09-08 221420.png"
                    alt="План 1-го этажа"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Blueprint 2 */}
              <div
                onClick={() => setSelectedImage({
                  src: "/Кейсы/10-house-project/чертежи/Снимок экрана 2026-09-08 221455.png",
                  title: "Исходный архитектурный план 2-го этажа (от проектировщика)"
                })}
                className="bg-[#141414] border border-white/10 hover:border-white/40 p-3 cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between px-1 py-1 mb-2 border-b border-white/10">
                  <span className="text-xs font-bold text-white font-montserrat uppercase">
                    План 2-го этажа
                  </span>
                  <Maximize2 className="w-3.5 h-3.5 text-white/50 group-hover:text-[#14F1D9]" />
                </div>
                <div className="relative aspect-square w-full bg-white/5 overflow-hidden">
                  <Image
                    src="/Кейсы/10-house-project/чертежи/Снимок экрана 2026-09-08 221455.png"
                    alt="План 2-го этажа"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Blueprint 3 */}
              <div
                onClick={() => setSelectedImage({
                  src: "/Кейсы/10-house-project/чертежи/Снимок экрана 2026-09-08 221539.png",
                  title: "Архитектурный разрез 1-1 (от проектировщика)"
                })}
                className="bg-[#141414] border border-white/10 hover:border-white/40 p-3 cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between px-1 py-1 mb-2 border-b border-white/10">
                  <span className="text-xs font-bold text-white font-montserrat uppercase">
                    Разрез дома 1-1
                  </span>
                  <Maximize2 className="w-3.5 h-3.5 text-white/50 group-hover:text-[#14F1D9]" />
                </div>
                <div className="relative aspect-square w-full bg-white/5 overflow-hidden">
                  <Image
                    src="/Кейсы/10-house-project/чертежи/Снимок экрана 2026-09-08 221539.png"
                    alt="Разрез дома"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 4. LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl max-h-[92vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 text-white border-b border-white/10 mb-3">
              <div className="text-sm font-bold font-montserrat text-white/90">
                {selectedImage.title}
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full h-[78vh] flex items-center justify-center bg-black/40">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
