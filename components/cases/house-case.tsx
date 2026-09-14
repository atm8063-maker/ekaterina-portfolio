"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import { houseProjectData, ZoneDetail } from "@/lib/house-data";
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
    title: "1 Этаж: Зоны первого этажа",
    subtitle: "Кухня-гостиная, прихожая и коридор, бойлерная, санузел с ванной, камин в простенке и лестничный пролёт",
    imageSrc: "/Кейсы/10-house-project/sketch_floor_1.jpg",
    callouts: [
      {
        id: 1,
        title: "Дровяной камин",
        tag: "Дымоход между окнами",
        desc: "Камин с отделкой под монолитный бетон. Дымоход спроектирован в кирпичном простенке точно между двумя французскими окнами в пол.",
        x: 75,
        y: 66,
      },
      {
        id: 2,
        title: "Кухня-гостиная",
        tag: "Общественное ядро",
        desc: "Единое светлое пространство: Г-образная кухня с бирюзовым фартуком-кабанчиком, обеденный стол у окна и диванная лаунж-зона с ТВ.",
        x: 44,
        y: 64,
      },
      {
        id: 3,
        title: "Прихожая и коридор",
        tag: "Входная группа",
        desc: "Вместительный шкаф-купе с белыми жалюзийными фасадами, зеркало в пол в скошенной нише и удобный проход в жилые зоны.",
        x: 18,
        y: 44,
      },
      {
        id: 4,
        title: "Бойлерная (Котельная)",
        tag: "Инженерия",
        desc: "Техническое помещение слева от санузла: отопительный котёл, бойлер, гидроузел и хозблок.",
        x: 30,
        y: 20,
      },
      {
        id: 5,
        title: "Санузел с ванной",
        tag: "Санузел 1F",
        desc: "Полноразмерная ванна, тумба с раковиной, инсталляция унитаза, стиральная машина и светлая плитка в сочетании с плиткой с имитацией древесной текстуры.",
        x: 44,
        y: 17,
      },
      {
        id: 6,
        title: "Лестничный пролёт",
        tag: "Связь этажей",
        desc: "Двухмаршевая металлическая лестница с деревянными ступенями и ограждением из канатов.",
        x: 55,
        y: 22,
      },
    ],
  },
  2: {
    floor: 2,
    title: "2 Этаж: Зоны второго этажа",
    subtitle: "Спальня с трапециевидным входом, детская с домиком, кабинет со сплошным столом и санузел с душем",
    imageSrc: "/Кейсы/10-house-project/sketch_floor_2.jpg",
    callouts: [
      {
        id: 1,
        title: "Спальня (Мастер-спальня)",
        tag: "Приватный блок",
        desc: "Стена с отделкой из тёмного дерева, двуспальная кровать, встроенный гардероб и симметричная трапециевидная стена входа со скосом.",
        x: 74,
        y: 24,
      },
      {
        id: 2,
        title: "Детская комната",
        tag: "Детская",
        desc: "Игровая кровать-домик со шведской стенкой, кровать-машинка, ковёр с дорогами и стеллажи под игрушки на фоне бирюзовой стены.",
        x: 73,
        y: 72,
      },
      {
        id: 3,
        title: "Кабинет (Мастерская / Студия)",
        tag: "Мастерская & Музыка",
        desc: "Сплошной белый подоконник-стол вдоль стены с окном до бирюзовой стены, мольберт для живописи, стойка с гитарами и диван.",
        x: 27,
        y: 72,
      },
      {
        id: 4,
        title: "Санузел с душем",
        tag: "Санузел 2F",
        desc: "Ванная комната с белой плиткой под кирпич: душевой отсек со стеклом, подвесной унитаз и раковина вдоль одной стены.",
        x: 25,
        y: 21,
      },
      {
        id: 5,
        title: "Коридор 2-го этажа",
        tag: "Холл 2F",
        desc: "Центральный коридор за стенами: объединяет выходы из всех комнат, санузел и лестничную площадку.",
        x: 48,
        y: 35,
      },
      {
        id: 6,
        title: "Лестничный пролёт",
        tag: "Свет & Окно",
        desc: "Широкое видовое окно пролёта с бирюзовыми шторами в пол, проходное управление светом, винтажные лампы.",
        x: 44,
        y: 24,
      },
    ],
  },
};

export function HouseCase() {
  const [selectedZone, setSelectedZone] = useState<ZoneDetail | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; room?: string } | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<"all" | "finished" | "construction">("all");

  const floor1Data = houseProjectData.floorsData.find(f => f.floorNumber === 1)!;
  const floor2Data = houseProjectData.floorsData.find(f => f.floorNumber === 2)!;

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
          <div className="flex items-center gap-2 text-sm text-white/50 mb-6 font-sans">
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
            <p className="text-lg sm:text-xl text-white/80 font-normal leading-relaxed mb-8 max-w-3xl font-sans">
              {houseProjectData.subtitle}
            </p>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
            {houseProjectData.metrics.map((m, idx) => (
              <div key={idx} className="bg-[#1A1A1A] border border-white/10 p-5 md:p-6 relative group hover:border-[#14F1D9]/50 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#14F1D9] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#14F1D9] font-montserrat mb-1">
                  {m.value}
                </div>
                <div className="text-sm text-white/80 font-medium font-sans">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. STICKY NAVIGATION (Direct anchors) */}
      <nav className="sticky top-20 z-40 bg-[#111111]/95 backdrop-blur-md border-b border-white/10 py-3">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-start md:justify-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <a
            href="#sketches"
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap bg-[#1A1A1A] text-[#14F1D9] hover:bg-white/10 transition-colors font-montserrat rounded-none border border-[#14F1D9]/40 shadow-[0_0_15px_rgba(20,241,217,0.15)]"
          >
            <Building2 className="w-4 h-4 text-[#14F1D9]" />
            Скетчи 1 &amp; 2 этаж
          </a>
          <a
            href="#concept"
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap bg-[#1A1A1A] text-white/80 hover:text-[#14F1D9] hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <Palette className="w-4 h-4 text-[#14F1D9]" />
            Стили &amp; Цвета
          </a>
          <a
            href="#planoplan"
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap bg-[#1A1A1A] text-white/80 hover:text-[#14F1D9] hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <Layers className="w-4 h-4 text-[#14F1D9]" />
            3D Planoplan
          </a>
          <a
            href="#furniture"
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap bg-[#1A1A1A] text-white/80 hover:text-[#14F1D9] hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <Armchair className="w-4 h-4 text-[#14F1D9]" />
            Мебель &amp; Комплектация
          </a>
          <a
            href="#lighting"
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap bg-[#1A1A1A] text-white/80 hover:text-[#14F1D9] hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <Zap className="w-4 h-4 text-[#14F1D9]" />
            Электрика &amp; Свет
          </a>
          <a
            href="#blueprints"
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap bg-[#1A1A1A] text-white/80 hover:text-[#14F1D9] hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <FileText className="w-4 h-4 text-[#14F1D9]" />
            Чертежи
          </a>
          <a
            href="#gallery"
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap bg-[#1A1A1A] text-white/80 hover:text-[#14F1D9] hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <Camera className="w-4 h-4 text-[#14F1D9]" />
            Стройка &amp; Готовый дом
          </a>
        </div>
      </nav>

      {/* 3. MAIN STORY FLOW */}
      <main className="container mx-auto px-4 md:px-8 py-10 space-y-24">

        {/* SECTION 1: AXONOMETRIC SKETCHES (Floors 1 & 2 side-by-side on desktop, stacked on mobile) */}
        <section id="sketches" className="scroll-mt-28 space-y-8">
          <div className="bg-[#181818] border border-white/15 p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#14F1D9]/5 blur-[100px] pointer-events-none rounded-full" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-4 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#14F1D9]/10 border border-[#14F1D9]/30 text-[#14F1D9] text-xs font-bold uppercase tracking-widest mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  3D-Скетчинг &amp; Планировка
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-montserrat">
                  Архитектурные Аксонометрические Скетчи
                </h2>
                <p className="text-sm sm:text-base text-white/70 mt-1.5 font-sans">
                  Объёмно-пространственные разрезы дома в маркерной акварели: 1-й и 2-й этажи наглядно рядом
                </p>
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-sans hidden sm:block">
                Кликните по скетчу для полноэкранного зума
              </div>
            </div>

            {/* Side-by-side layout for 1st and 2nd floor */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10">
              
              {/* FLOOR 1 COLUMN */}
              <div className="bg-[#141414] border border-white/15 p-4 sm:p-6 shadow-xl flex flex-col">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs font-bold uppercase text-[#14F1D9] font-montserrat tracking-widest block mb-1">
                      Общественное ядро дома
                    </span>
                    <h3 className="text-lg sm:text-xl font-black uppercase text-white font-montserrat">
                      1 Этаж: Гостиная, кухня &amp; холл
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedImage({
                      src: FLOOR_SKETCHES[1].imageSrc,
                      title: "1 Этаж: Гостиная с камином, кухня с бирюзовым кабанчиком, прихожая и бойлерная"
                    })}
                    className="text-xs text-white/60 hover:text-[#14F1D9] font-sans flex items-center gap-1.5 transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" /> Увеличить
                  </button>
                </div>

                {/* Floor 1 Image Container with Interactive Pins */}
                <div className="relative aspect-square w-full bg-black/40 border border-white/10 overflow-hidden mb-6 group">
                  <Image
                    src={FLOOR_SKETCHES[1].imageSrc}
                    alt="Аксонометрический скетч 1 этажа"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 650px"
                  />

                  {FLOOR_SKETCHES[1].callouts.map((c) => (
                    <div
                      key={c.id}
                      style={{ left: `${c.x}%`, top: `${c.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none select-none"
                    >
                      <div
                        className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full font-montserrat font-black text-xs sm:text-sm bg-[#111111]/90 text-white border-2 border-[#14F1D9] shadow-lg backdrop-blur-sm"
                        title={c.title}
                      >
                        {c.id}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floor 1 Zones & Elements List */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-white/80 font-montserrat mb-2 flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-[#14F1D9]" />
                    Зоны и элементы 1-го этажа ({FLOOR_SKETCHES[1].callouts.length})
                  </div>
                  {FLOOR_SKETCHES[1].callouts.map((c) => (
                    <div
                      key={c.id}
                      className="p-3.5 border bg-black/30 border-white/10 hover:border-white/25 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-black shrink-0 font-montserrat bg-white/10 text-white/80">
                          {c.id}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 className="text-sm sm:text-base font-bold uppercase font-montserrat text-white truncate">
                              {c.title}
                            </h4>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#14F1D9] font-montserrat shrink-0">
                              {c.tag}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                            {c.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="p-3 bg-white/5 border border-dashed border-white/15 text-xs text-white/70 font-sans flex items-center gap-2">
                    <span className="text-[#14F1D9] font-bold font-montserrat uppercase">Терраса (12.8 м²):</span>
                    примыкает к кухне-гостиной с выходом в сад.
                  </div>
                </div>
              </div>

              {/* FLOOR 2 COLUMN */}
              <div className="bg-[#141414] border border-white/15 p-4 sm:p-6 shadow-xl flex flex-col">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs font-bold uppercase text-[#14F1D9] font-montserrat tracking-widest block mb-1">
                      Приватная зона &amp; Творчество
                    </span>
                    <h3 className="text-lg sm:text-xl font-black uppercase text-white font-montserrat">
                      2 Этаж: Спальня, детская &amp; студия
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedImage({
                      src: FLOOR_SKETCHES[2].imageSrc,
                      title: "2 Этаж: Мастер-спальня с деревом, мастерская со столом-подоконником и гитарами, детская с домиком"
                    })}
                    className="text-xs text-white/60 hover:text-[#14F1D9] font-sans flex items-center gap-1.5 transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" /> Увеличить
                  </button>
                </div>

                {/* Floor 2 Image Container with Interactive Pins */}
                <div className="relative aspect-square w-full bg-black/40 border border-white/10 overflow-hidden mb-6 group">
                  <Image
                    src={FLOOR_SKETCHES[2].imageSrc}
                    alt="Аксонометрический скетч 2 этажа"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 650px"
                  />

                  {FLOOR_SKETCHES[2].callouts.map((c) => (
                    <div
                      key={c.id}
                      style={{ left: `${c.x}%`, top: `${c.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none select-none"
                    >
                      <div
                        className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full font-montserrat font-black text-xs sm:text-sm bg-[#111111]/90 text-white border-2 border-[#14F1D9] shadow-lg backdrop-blur-sm"
                        title={c.title}
                      >
                        {c.id}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floor 2 Zones List */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-white/80 font-montserrat mb-2 flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-[#14F1D9]" />
                    Зоны 2-го этажа ({FLOOR_SKETCHES[2].callouts.length})
                  </div>
                  {FLOOR_SKETCHES[2].callouts.map((c) => (
                    <div
                      key={c.id}
                      className="p-3.5 border bg-black/30 border-white/10 hover:border-white/25 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-black shrink-0 font-montserrat bg-white/10 text-white/80">
                          {c.id}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 className="text-sm sm:text-base font-bold uppercase font-montserrat text-white truncate">
                              {c.title}
                            </h4>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#14F1D9] font-montserrat shrink-0">
                              {c.tag}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                            {c.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: CONCEPT & STYLES / COLORS (Horizontal diptych on desktop, vertical on mobile) */}
        <section id="concept" className="scroll-mt-28 space-y-8">
          <div className="bg-[#181818] border border-white/15 p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-montserrat">
                  Концепция: Стили и Цветовые Предпочтения
                </h2>
                <p className="text-sm sm:text-base text-white/70 mt-1.5 font-sans">
                  Поисковые мудборды, природные фактуры и цветовой код дома
                </p>
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-sans hidden sm:block">
                Кликните по планшету для полноэкранного зума
              </div>
            </div>

            {/* Horizontal Diptych: Styles (Left) & Colors (Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">
              
              {/* STYLES COLLAGE */}
              <div
                onClick={() => setSelectedImage({
                  src: "/Кейсы/10-house-project/collage_styles.jpg",
                  title: "Стили и интерьерные ориентиры: сканди-минимализм, натуральный дуб, открытое пространство"
                })}
                className="bg-[#141414] border border-white/20 hover:border-[#14F1D9] p-4 sm:p-5 cursor-pointer group transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="flex items-center justify-between px-1 py-1 mb-3 border-b border-white/10">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-montserrat uppercase tracking-wider block">
                      Стили и фактуры интерьера
                    </h3>
                    <span className="text-xs sm:text-sm text-white/60 font-sans">Скандинавский минимализм, дерево и уют</span>
                  </div>
                  <span className="text-xs text-white/50 font-sans flex items-center gap-1 group-hover:text-[#14F1D9] shrink-0">
                    <Maximize2 className="w-4 h-4" /> Увеличить
                  </span>
                </div>
                <div className="relative aspect-[3/4] w-full bg-black/60 overflow-hidden">
                  <Image
                    src="/Кейсы/10-house-project/collage_styles.jpg"
                    alt="Стили интерьера"
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* COLORS COLLAGE */}
              <div
                onClick={() => setSelectedImage({
                  src: "/Кейсы/10-house-project/collage_colors.jpg",
                  title: "Цветовые предпочтения: бирюза, морская волна, теплый дуб, серый бетон и белый"
                })}
                className="bg-[#141414] border border-[#14F1D9]/30 hover:border-[#14F1D9] p-4 sm:p-5 cursor-pointer group transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="flex items-center justify-between px-1 py-1 mb-3 border-b border-white/10">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#14F1D9] font-montserrat uppercase tracking-wider block">
                      Цветовая палитра и референсы
                    </h3>
                    <span className="text-xs sm:text-sm text-white/60 font-sans">Акцентная бирюза, дуб, серый и белый</span>
                  </div>
                  <span className="text-xs text-white/50 font-sans flex items-center gap-1 group-hover:text-[#14F1D9] shrink-0">
                    <Maximize2 className="w-4 h-4" /> Увеличить
                  </span>
                </div>
                <div className="relative aspect-[3/4] w-full bg-black/60 overflow-hidden">
                  <Image
                    src="/Кейсы/10-house-project/collage_colors.jpg"
                    alt="Цветовые предпочтения"
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>

            {/* Design Evolution Story */}
            <div className="bg-[#141414] border border-white/10 p-6 md:p-8 mb-8">
              <h3 className="text-lg sm:text-xl font-black uppercase text-white font-montserrat mb-4">
                {houseProjectData.evolutionStory.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-sans text-white/80 leading-relaxed">
                <div className="p-5 bg-white/5 border-l-2 border-white/30">
                  <strong className="text-white font-montserrat font-bold text-sm uppercase block mb-1.5">
                    Поиск и гипотезы
                  </strong>
                  {houseProjectData.evolutionStory.initialConcept}
                </div>
                <div className="p-5 bg-white/5 border-l-2 border-white/40">
                  <strong className="text-white/80 font-montserrat font-bold text-sm uppercase block mb-1.5">
                    Точка перелома на стройке
                  </strong>
                  {houseProjectData.evolutionStory.turningPoint}
                </div>
                <div className="p-5 bg-[#14F1D9]/5 border-l-2 border-[#14F1D9]">
                  <strong className="text-[#14F1D9] font-montserrat font-bold text-sm uppercase block mb-1.5">
                    Финальный сканди-минимализм
                  </strong>
                  {houseProjectData.evolutionStory.realizedResult}
                </div>
              </div>
            </div>

            {/* Material Swatches */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-montserrat mb-4">
                Базовая палитра материалов и фактур
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {houseProjectData.materials.map((mat, i) => (
                  <div key={i} className="bg-[#141414] border border-white/10 p-4 flex flex-col items-center text-center">
                    <div
                      className="w-14 h-14 rounded-full mb-3 border border-white/20 flex items-center justify-center shadow-md"
                      style={{ backgroundColor: mat.colorHex }}
                    >
                      {mat.colorHex === "#14F1D9" && (
                        <Sparkles className="w-5 h-5 text-[#111111]" />
                      )}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mb-0.5">{mat.name}</div>
                    <div className="text-xs text-[#14F1D9] font-montserrat font-bold uppercase mb-1.5">{mat.role}</div>
                    <p className="text-xs text-white/70 font-sans leading-relaxed">{mat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: 3D PLANOPLAN & FUNCTIONAL ZONING */}
        <section id="planoplan" className="scroll-mt-28 space-y-8">
          <div className="bg-[#181818] border border-white/15 p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-montserrat">
                  3D-Моделирование в Planoplan &amp; Зонирование
                </h2>
                <p className="text-sm sm:text-base text-white/70 mt-1.5 font-sans">
                  Виртуальная трёхмерная модель дома, видовые оси, инсоляция и пространственное зонирование
                </p>
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-sans hidden sm:block">
                Кликните для полноэкранного просмотра
              </div>
            </div>

            {/* Large 3D Renders Grid (Clear, large cards without tiny burned-in text) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[
                {
                  src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-08_19-29-46.jpg",
                  title: "Гостиная зона с дровяным камином",
                  desc: "Каминный портал в бетоне, ТВ-зона и семейный диван"
                },
                {
                  src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-08_19-29-46 (4).jpg",
                  title: "Кухня-столовая и панорамные окна",
                  desc: "Обеденная группа у окон и U-образный гарнитур с фартуком"
                },
                {
                  src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-08_19-29-46 (3).jpg",
                  title: "Прихожая и холл 1-го этажа",
                  desc: "Входная группа, вид на лестничный марш и зеркальный портал"
                },
                {
                  src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-13_00-14-00 (6).jpg",
                  title: "Объёмный 3D-разрез: 1 этаж",
                  desc: "Пространственная модель расстановки мебели и перегородок 1 этажа"
                },
                {
                  src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-13_00-14-01 (5).jpg",
                  title: "Объёмный 3D-разрез: 2 этаж",
                  desc: "Пространственная модель спальни, детской и мастерской 2 этажа"
                },
                {
                  src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-13_00-14-01.jpg",
                  title: "Вечерний световой сценарий",
                  desc: "Камерное акцентное освещение над обеденным столом и у камина"
                }
              ].map((render, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage({ src: render.src, title: render.title })}
                  className="bg-[#141414] border border-white/10 hover:border-[#14F1D9] p-4 cursor-pointer group transition-all flex flex-col justify-between shadow-lg"
                >
                  <div className="relative aspect-[16/10] w-full bg-black/50 overflow-hidden mb-3 border border-white/5">
                    <Image
                      src={render.src}
                      alt={render.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-6 h-6 text-[#14F1D9]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-montserrat mb-1">
                      {render.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/60 font-sans">
                      {render.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dual Column Zones (Floor 1 & Floor 2 side-by-side) */}
            <div className="bg-[#141414] border border-white/10 p-6 sm:p-8">
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white font-montserrat mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#14F1D9]" />
                Функциональные зоны дома: 1 и 2 этажи
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                
                {/* Floor 1 Zones */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-sm font-black uppercase text-[#14F1D9] font-montserrat tracking-wider">
                      1 Этаж: Общественные зоны
                    </span>
                    <span className="text-xs text-white/50 font-sans">
                      {floor1Data.zones.length} узла
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {floor1Data.zones.map((zone) => (
                      <div
                        key={zone.id}
                        onClick={() => setSelectedZone(selectedZone?.id === zone.id ? null : zone)}
                        className={`p-4 border transition-all cursor-pointer ${
                          selectedZone?.id === zone.id
                            ? "bg-[#1A1A1A] border-[#14F1D9] shadow-lg"
                            : "bg-black/30 border-white/10 hover:border-white/30 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="text-sm font-bold text-white font-montserrat truncate">{zone.name}</h4>
                          {zone.area && (
                            <span className="text-xs font-montserrat font-bold text-[#14F1D9] shrink-0 ml-1.5">{zone.area}</span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-2">{zone.features}</p>
                        <div className="text-xs text-white/50 font-sans">
                          {zone.functions.slice(0, 2).join(" • ")}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floor 2 Zones */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-sm font-black uppercase text-[#14F1D9] font-montserrat tracking-wider">
                      2 Этаж: Приватные зоны
                    </span>
                    <span className="text-xs text-white/50 font-sans">
                      {floor2Data.zones.length} узлов
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {floor2Data.zones.map((zone) => (
                      <div
                        key={zone.id}
                        onClick={() => setSelectedZone(selectedZone?.id === zone.id ? null : zone)}
                        className={`p-4 border transition-all cursor-pointer ${
                          selectedZone?.id === zone.id
                            ? "bg-[#1A1A1A] border-[#14F1D9] shadow-lg"
                            : "bg-black/30 border-white/10 hover:border-white/30 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="text-sm font-bold text-white font-montserrat truncate">{zone.name}</h4>
                          {zone.area && (
                            <span className="text-xs font-montserrat font-bold text-[#14F1D9] shrink-0 ml-1.5">{zone.area}</span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-2">{zone.features}</p>
                        <div className="text-xs text-white/50 font-sans">
                          {zone.functions.slice(0, 2).join(" • ")}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: FURNITURE & MATERIALS (With real photos of each piece) */}
        <section id="furniture" className="scroll-mt-28 space-y-8">
          <div className="bg-[#181818] border border-white/15 p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-montserrat">
                  Расстановка Мебели &amp; Комплектация
                </h2>
                <p className="text-sm sm:text-base text-white/70 mt-1.5 font-sans">
                  Реализованная мебель, индивидуальные столярные изделия, массив дуба и текстильные решения
                </p>
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-sans hidden sm:block">
                Кликните по фото для увеличения
              </div>
            </div>

            {/* Furniture Grid with Real Photos and Large Readable Typography */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {houseProjectData.furniture.map((item, i) => (
                <div
                  key={i}
                  onClick={() => item.image && setSelectedImage({ src: item.image, title: item.name })}
                  className="bg-[#141414] border border-white/10 hover:border-[#14F1D9] p-4 flex flex-col justify-between cursor-pointer group transition-all shadow-lg"
                >
                  <div>
                    {item.image && (
                      <div className="relative aspect-[4/3] w-full bg-black/40 overflow-hidden mb-4 border border-white/10">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Maximize2 className="w-6 h-6 text-[#14F1D9]" />
                        </div>
                      </div>
                    )}
                    <div className="flex items-center justify-between text-xs font-sans text-[#14F1D9] mb-2">
                      <span className="font-semibold uppercase tracking-wider">{item.category}</span>
                      <Armchair className="w-4 h-4 text-white/40" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white font-montserrat mb-2 leading-snug">
                      {item.name}
                    </h4>
                    <div className="text-xs text-white/80 font-medium mb-3 bg-white/5 px-2.5 py-1 inline-block border border-white/10">
                      {item.material}
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: LIGHTING & ENGINEERING (Large clear drawings, no squashed tiny collage) */}
        <section id="lighting" className="scroll-mt-28 space-y-8">
          <div className="bg-[#181818] border border-white/15 p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-montserrat">
                  Электрика и Световые Сценарии
                </h2>
                <p className="text-sm sm:text-base text-white/70 mt-1.5 font-sans">
                  Планы групп освещения, выключателей, розеток и высотных отметок для 1-го и 2-го этажей
                </p>
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-sans hidden sm:block">
                Кликните по любому плану для увеличения
              </div>
            </div>

            {/* 1st & 2nd Floor Side-by-Side Large Engineering Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              
              {/* FLOOR 1 ENGINEERING */}
              <div className="bg-[#141414] border border-white/15 p-4 sm:p-6 flex flex-col space-y-6">
                <div className="border-b border-white/10 pb-3">
                  <span className="text-xs font-bold uppercase text-[#14F1D9] font-montserrat tracking-widest block mb-1">
                    Инженерные схемы 1-го этажа
                  </span>
                  <h3 className="text-lg sm:text-xl font-black uppercase text-white font-montserrat">
                    1 Этаж: Освещение &amp; Розетки
                  </h3>
                </div>

                {/* Lighting Plan 1F */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base font-bold text-white font-montserrat">
                      План групп освещения и выключателей
                    </h4>
                    <button
                      onClick={() => setSelectedImage({
                        src: "/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_6.jpg",
                        title: "1 Этаж: План групп освещения и выключателей"
                      })}
                      className="text-xs text-white/60 hover:text-[#14F1D9] flex items-center gap-1 font-sans transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" /> Во весь экран
                    </button>
                  </div>
                  <div
                    onClick={() => setSelectedImage({
                      src: "/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_6.jpg",
                      title: "1 Этаж: План групп освещения и выключателей"
                    })}
                    className="relative aspect-[4/3] w-full bg-white border border-white/10 overflow-hidden cursor-pointer group hover:border-[#14F1D9] transition-all"
                  >
                    <Image
                      src="/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_6.jpg"
                      alt="1 Этаж: План освещения"
                      fill
                      className="object-contain group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Sockets Plan 1F */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base font-bold text-white font-montserrat">
                      План розеток и высотных отметок
                    </h4>
                    <button
                      onClick={() => setSelectedImage({
                        src: "/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_7.jpg",
                        title: "1 Этаж: План розеток и высотных отметок"
                      })}
                      className="text-xs text-white/60 hover:text-[#14F1D9] flex items-center gap-1 font-sans transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" /> Во весь экран
                    </button>
                  </div>
                  <div
                    onClick={() => setSelectedImage({
                      src: "/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_7.jpg",
                      title: "1 Этаж: План розеток и высотных отметок"
                    })}
                    className="relative aspect-[4/3] w-full bg-white border border-white/10 overflow-hidden cursor-pointer group hover:border-[#14F1D9] transition-all"
                  >
                    <Image
                      src="/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_7.jpg"
                      alt="1 Этаж: План розеток"
                      fill
                      className="object-contain group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* FLOOR 2 ENGINEERING */}
              <div className="bg-[#141414] border border-white/15 p-4 sm:p-6 flex flex-col space-y-6">
                <div className="border-b border-white/10 pb-3">
                  <span className="text-xs font-bold uppercase text-[#14F1D9] font-montserrat tracking-widest block mb-1">
                    Инженерные схемы 2-го этажа
                  </span>
                  <h3 className="text-lg sm:text-xl font-black uppercase text-white font-montserrat">
                    2 Этаж: Освещение &amp; Розетки
                  </h3>
                </div>

                {/* Lighting Plan 2F */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base font-bold text-white font-montserrat">
                      План групп освещения и выключателей
                    </h4>
                    <button
                      onClick={() => setSelectedImage({
                        src: "/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_14.jpg",
                        title: "2 Этаж: План групп освещения и выключателей"
                      })}
                      className="text-xs text-white/60 hover:text-[#14F1D9] flex items-center gap-1 font-sans transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" /> Во весь экран
                    </button>
                  </div>
                  <div
                    onClick={() => setSelectedImage({
                      src: "/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_14.jpg",
                      title: "2 Этаж: План групп освещения и выключателей"
                    })}
                    className="relative aspect-[4/3] w-full bg-white border border-white/10 overflow-hidden cursor-pointer group hover:border-[#14F1D9] transition-all"
                  >
                    <Image
                      src="/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_14.jpg"
                      alt="2 Этаж: План освещения"
                      fill
                      className="object-contain group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Sockets Plan 2F */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base font-bold text-white font-montserrat">
                      План розеток и высотных отметок
                    </h4>
                    <button
                      onClick={() => setSelectedImage({
                        src: "/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_1.jpg",
                        title: "2 Этаж: План розеток и высотных отметок"
                      })}
                      className="text-xs text-white/60 hover:text-[#14F1D9] flex items-center gap-1 font-sans transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" /> Во весь экран
                    </button>
                  </div>
                  <div
                    onClick={() => setSelectedImage({
                      src: "/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_1.jpg",
                      title: "2 Этаж: План розеток и высотных отметок"
                    })}
                    className="relative aspect-[4/3] w-full bg-white border border-white/10 overflow-hidden cursor-pointer group hover:border-[#14F1D9] transition-all"
                  >
                    <Image
                      src="/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_1.jpg"
                      alt="2 Этаж: План розеток"
                      fill
                      className="object-contain group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Lighting Scenarios Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {houseProjectData.lightingGroups.map((lg, i) => (
                <div key={i} className="bg-[#141414] border border-white/10 p-5 flex flex-col justify-between hover:border-white/30 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Lightbulb className="w-5 h-5 text-[#14F1D9]" />
                      <span className="text-xs font-sans text-white/60 bg-white/5 px-2 py-0.5">{lg.kelvin}</span>
                    </div>
                    <h5 className="text-sm sm:text-base font-bold text-white mb-1 font-montserrat">{lg.name}</h5>
                    <div className="text-xs text-[#14F1D9] font-sans font-medium mb-2">{lg.type}</div>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans mb-3">{lg.desc}</p>
                  </div>
                  <div className="text-xs text-white/50 border-t border-white/10 pt-2 font-sans">
                    {lg.placement}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: BLUEPRINTS (from 'чертежи') */}
        <section id="blueprints" className="scroll-mt-28 space-y-8">
          <div className="bg-[#181818] border border-white/15 p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-montserrat">
                  Архитектурная Основа (Чертежи Проектировщика)
                </h2>
                <p className="text-sm sm:text-base text-white/70 mt-1.5 font-sans">
                  Исходные строительные чертежи от проектировщика, послужившие базой для дизайн-проекта
                </p>
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-sans hidden sm:block">
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
                className="bg-[#141414] border border-white/10 hover:border-white/40 p-4 cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between px-1 py-1 mb-3 border-b border-white/10">
                  <span className="text-sm sm:text-base font-bold text-white font-montserrat uppercase">
                    План 1-го этажа
                  </span>
                  <Maximize2 className="w-4 h-4 text-white/50 group-hover:text-[#14F1D9]" />
                </div>
                <div className="relative aspect-[4/3] w-full bg-white/5 overflow-hidden">
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
                className="bg-[#141414] border border-white/10 hover:border-white/40 p-4 cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between px-1 py-1 mb-3 border-b border-white/10">
                  <span className="text-sm sm:text-base font-bold text-white font-montserrat uppercase">
                    План 2-го этажа
                  </span>
                  <Maximize2 className="w-4 h-4 text-white/50 group-hover:text-[#14F1D9]" />
                </div>
                <div className="relative aspect-[4/3] w-full bg-white/5 overflow-hidden">
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
                className="bg-[#141414] border border-white/10 hover:border-white/40 p-4 cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between px-1 py-1 mb-3 border-b border-white/10">
                  <span className="text-sm sm:text-base font-bold text-white font-montserrat uppercase">
                    Разрез дома 1-1
                  </span>
                  <Maximize2 className="w-4 h-4 text-white/50 group-hover:text-[#14F1D9]" />
                </div>
                <div className="relative aspect-[4/3] w-full bg-white/5 overflow-hidden">
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

        {/* SECTION 7: CONSTRUCTION & REALIZATION (The Diptych at the very end) */}
        <section id="gallery" className="scroll-mt-28 space-y-12">
          <div className="bg-[#181818] border border-white/15 p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-montserrat">
                  Стройка и Реализация: Два мира одного дома
                </h2>
                <p className="text-sm sm:text-base text-white/70 mt-1.5 font-sans">
                  Сравнение архитектурного процесса возведения коробки и готового живого интерьера
                </p>
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-sans hidden sm:block">
                Кликните по любому планшету для полноэкранного зума
              </div>
            </div>

            {/* Horizontal diptych on desktop, vertical on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Left: Construction Collage */}
              <div
                onClick={() => setSelectedImage({
                  src: "/Кейсы/10-house-project/collage_construction_vertical.jpg",
                  title: "Хроника стройки"
                })}
                className="bg-[#141414] border border-white/20 hover:border-white/50 p-4 sm:p-5 cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between px-1 py-1 mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-white font-montserrat uppercase tracking-wider">
                    Хроника стройки
                  </h3>
                  <span className="text-xs text-white/50 font-sans flex items-center gap-1 group-hover:text-white">
                    <Maximize2 className="w-4 h-4" /> Увеличить планшет
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
                className="bg-[#141414] border border-[#14F1D9]/30 hover:border-[#14F1D9] p-4 sm:p-5 cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between px-1 py-1 mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-[#14F1D9] font-montserrat uppercase tracking-wider">
                    Готовый дом в жизни
                  </h3>
                  <span className="text-xs text-white/50 font-sans flex items-center gap-1 group-hover:text-[#14F1D9]">
                    <Maximize2 className="w-4 h-4" /> Увеличить планшет
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
            <div className="mt-14 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <h3 className="text-lg sm:text-xl font-black uppercase text-white font-montserrat">
                  Фотогалерея: Готовый интерьер и хроника стройки
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setGalleryFilter("all")}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-montserrat font-bold uppercase transition-colors ${
                      galleryFilter === "all" ? "bg-[#14F1D9] text-[#111111]" : "bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    Все кадры ({houseProjectData.gallery.finished.length + houseProjectData.gallery.construction.length})
                  </button>
                  <button
                    onClick={() => setGalleryFilter("finished")}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-montserrat font-bold uppercase transition-colors ${
                      galleryFilter === "finished" ? "bg-[#14F1D9] text-[#111111]" : "bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    Готовый дом ({houseProjectData.gallery.finished.length})
                  </button>
                  <button
                    onClick={() => setGalleryFilter("construction")}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-montserrat font-bold uppercase transition-colors ${
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
                    <div className="p-3">
                      <p className="text-xs sm:text-sm text-white/80 font-sans line-clamp-2">{img.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 4. LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl max-h-[92vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 text-white border-b border-white/10 mb-3">
              <div className="text-base sm:text-lg font-bold font-montserrat text-white">
                {selectedImage.title}
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-6 h-6" />
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
