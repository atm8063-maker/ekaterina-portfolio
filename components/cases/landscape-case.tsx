"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import { CaseNavigation } from "@/components/cases/case-navigation";
import { landscapeProjectDataByLang } from "@/lib/landscape-data";
import { useLanguage, PageTitle } from "@/components/language-provider";
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
  Sprout
} from "lucide-react";

const t = {
  RU: {
    badge: "Ландшафтная архитектура · Личный проект",
    heroTitleLine1: "Пейзажный сад",
    heroTitleLine2: "с восточными акцентами",
    heroLead: "Проектирование и комплексное благоустройство собственного загородного участка в Тамбовской области. Синтез японского сада созерцания, плодово-ягодного сада на карликовом подвое, открытого газона и 49 сценариев ночной иллюминации.",
    nav01: "01. Генплан",
    nav02: "02. Дендроплан (70 видов)",
    nav03: "03. Роза ветров",
    nav04: "04. Дорожки и покрытия",
    nav05: "05. Освещение (49 точек)",
    nav06: "06. 3D-рендеры SketchUp",
    boardEyebrow: "ПРОЕКТ БЛАГОУСТРОЙСТВА ЧАСТНОГО УСАДЕБНОГО ДОМА",
    boardTitle: "ГЕНЕРАЛЬНЫЙ ПЛАН · УЧАСТОК 6.5 СОТОК",
    boardSub: "Тамбовская область · Дом 9×9 м (100 м² фундамент, 2.5 этажа) · Ориентация строго по сторонам света",
    widthLabel: "Ширина:", widthVal: "19.2 м",
    lengthLabel: "Длина:", lengthVal: "35.2 м",
    slopeLabel: "Уклон:", slopeVal: "ровный (насыпной)",
    conceptTitle: "КОНЦЕПЦИЯ САДА",
    concept1t: "Пейзажный стиль:", concept1: "мягкие природные линии, извилистые гравийные тропы со шпалами.",
    concept2t: "Восточный акцент:", concept2: "шатровая беседка для айкидо, тсукубаи, валуны, 2 каскадных пруда.",
    concept3t: "Приватность:", concept3: "плотная стена туй и сиреней для защиты от семиэтажного комплекса на юге.",
    concept4t: "Семейный круг:", concept4: "открытый газон для игр, детская зона и новогодняя ель для хороводов.",
    zonesTitle: "ЭКСПЛИКАЦИЯ ЗОН",
    zonesHint: "клик для подсветки",
    compassLabel: "NORTH",
    zoneBadge: "Зона #",
    expandPlan: "Увеличить план",
    planCaption: "3D-визуализация генплана сверху (SketchUp)",
    legendClinker: "Клинкер/бетон", legendLawn: "Газон", legendPonds: "Пруды", legendWood: "Дерево/ДПК",
    viewpointsTitle: "КЛЮЧЕВЫЕ ВИДОВЫЕ ТОЧКИ УЧАСТКА (SKETCHUP)",
    viewpointsHint: "клик для увеличения ↗",
    open: "Открыть",
    vp1t: "Японский садик и пруд с мостиком", vp1d: "Деревянный мостик, гранитный фонарь-пагода, кувшинки и цветущая сакура",
    vp2t: "Чайная беседка и костровой очаг", vp2d: "Шатровая беседка с настилом из ДПК, пуфы-мешки, полукруглая скамья с очагом",
    vp3t: "Панорама двора и центрального газона", vp3d: "Открытый партерный газон, детский комплекс, терраса дома и восточный сад",
    vp4t: "Детский городок и зона отдыха", vp4d: "Игровой комплекс с горкой и качелями на резиновой плитке, подвесное кресло-кокон",
    plantingsTitle: "КЛЮЧЕВЫЕ ПОСАДКИ",
    plantingsAll: "все 70 ↓",
    conifersT: "Хвойный скелет:", coniferz: "Туя Смарагд (живая изгородь), Сосна горная Мугус, Сосна кедровая Glauca, Пихта корейская.",
    eastT: "Восточные акценты:", eastD: "Клен Ред Сансет, Ива Матсудана у пруда, бамбук Саза курильская, Гортензия Dharuma.",
    fruitT: "Карликовый плодовый сад:", fruitD: "Яблони Арбат и Мельба, вишня Русинка, черешня Овстуженка, сливы и ягодники.",
    flowerT: "Цветочная лента:", flowerD: "12 сортов травянистых пионов (Сара Бернар, Канзас), мискантус, хосты и ирисы в воде.",
    balanceTitle: "БАЛАНС ТЕРРИТОРИИ",
    balanceTotal: "Общая площадь:", balanceTotalV: "650 м² (100%)",
    balanceFootprint: "Пятно застройки:", balanceFootprintV: "151.5 м² (23.3%)",
    balanceHard: "Твердые покрытия:", balanceHardV: "135.0 м² (20.8%)",
    balanceGreen: "Озеленение и газон:", balanceGreenV: "310.0 м² (47.7%)",
    balancePaths: "Тропы (галька/ДПК):", balancePathsV: "38.5 м² (5.9%)",
    balanceWater: "Водная гладь (2 пруда):", balanceWaterV: "15.0 м² (2.3%)",
    dendroTitle: "Ассортиментная ведомость и дендроплан",
    dendroLead: "Полный перечень из 70 видов растений, высаженных с учетом влажного грунта, микроклимата и смены сезонов.",
    searchPh: "Поиск по названию или №...",
    allPlants: "Все растения",
    dendroSheetsTitle: "Архитектурные листы дендроплана из проекта",
    sheet1alt: "Северная часть дендроплана",
    sheet1cap: "Лист 01: Северная зона (беседка, пруд, дорожка из пионов)",
    sheet2alt: "Южная часть дендроплана",
    sheet2cap: "Лист 02: Южная зона (плодовый сад, лесополоса сиреней)",
    windEyebrow: "КЛИМАТИЧЕСКИЙ АНАЛИЗ УЧАСТКА",
    windTitle: "Роза ветров в Тамбове и инсоляция",
    windLead: "Анализ преобладающих воздушных потоков показал ключевую розу ветров: доминируют Южные (19.1%) и Северные (18.4%) ветра. На основе этих данных спланированы защитные живые изгороди и размещение теплолюбивых культур.",
    climateDecisions: "Архитектурные решения на основе климата:",
    climate1t: "1. Защита от южного ветра и многоэтажки:", climate1: "Южная граница участка находится в 3 метрах от дома. Здесь сформирована плотная полоса быстрорастущих сортов сирени и туй Смарагд, поглощающих порывы южного ветра и скрывающих двор от окон семиэтажного комплекса.",
    climate2t: "2. Защита от северных холодных ветров:", climate2: "Вдоль северного забора высажена хвойная группа (сосна кедровая Glauca, сосна Мугус), создающая комфортный микроклимат для чайной беседки.",
    climate3t: "3. Близость грунтовых вод:", climate3: "Вода в 0.5 м от поверхности. Все плодовые деревья посажены строго на карликовом и полукарликовом подвое с поверхностной корневой системой.",
    pathsEyebrow: "ИНФРАСТРУКТУРА И МОЩЕНИЕ",
    pathsTitle: "Дорожно-тропиночная сеть и материалы",
    pathsLead: "Материалы подобраны в гармонии с теплым терракотово-рыжим кирпичом дома: декоративный штампованный бетон, террасная доска ДПК, бурая галька с деревянными шпалами и безопасная каучуковая плитка.",
    concreteT: "Декоративный бетон", concreteD: "Парадная въездная дорога для автомобиля от ворот до навеса и отмостка вокруг дома. Текстура кирпичной кладки рыжего оттенка, стойкая к шипам и реагентам.", concreteArea: "Площадь: ~135 м²",
    dpkT: "Настилы из ДПК", dpkD: "Северная терраса дома (5.13×2.44 м), помост чайной беседки для занятий айкидо и площадка вокруг зоны барбекю. Приятно ходить босиком, не скользит в дождь.", dpkArea: "Площадь: ~28.5 м²",
    gravelT: "Галька со шпалами", gravelD: "Извилистая тропа через японский садик к прудам, а также дорожка в плодово-ягодном саду. Бурая окатанная галька с шаговыми досками-шпалами, создающая эффект медитативного пути.", gravelLen: "Длина: ~38 пог. м",
    rubberT: "Резиновая плитка", rubberD: "Травмобезопасное покрытие детской игровой зоны с горкой и качелями. Теплый оранжевый цвет плитки гармонирует с цветовой гаммой кирпичных фасадов.", rubberArea: "Площадь: ~18 м²",
    pathSchemeAlt: "Схема дорожно-тропиночной сети",
    pathSchemeCap: "Схема дорожно-тропиночной сети и функциональных связей",
    clickToZoom: "клик для увеличения ↗",
    lightingEyebrow: "СВЕТОВОЙ ДИЗАЙН И СЦЕНАРИИ",
    lightingTitle: "План наружного освещения (49 световых приборов)",
    lightingLead: "Многоуровневая система освещения: безопасность движения, архитектурный свет дома и сказочная атмосфера японского сада.",
    pcs: "шт.",
    lightPlanAlt: "Сводный план наружного освещения (49 точек)",
    lightPlanCap: "Сводный план наружного освещения (49 точек)",
    lightPlan2Alt: "План подсветки зоны отдыха и японского сада",
    lightPlan2Cap: "План подсветки зоны отдыха и пруда",
    galleryTitle: "Галерея 3D-визуализаций SketchUp",
    galleryLead: "Детальная проработка каждого уголка сада: видовые оси, малые архитектурные формы, террасы и водоемы.",
    allFrames: "Все кадры",
    catJapanese: "Японский садик",
    catGazebo: "Беседка и BBQ",
    catFamily: "Газон и детская зона",
    catHouse: "Дом и терраса",
    catPlan: "3D-аксонометрии",
    openFullscreen: "Открыть во весь экран",
    lightboxAlt: "Полноэкранный просмотр",
  },
  EN: {
    badge: "Landscape Architecture · Personal Project",
    heroTitleLine1: "A Landscape Garden",
    heroTitleLine2: "with Japanese Accents",
    heroLead: "Design and full-scope landscaping of my own family estate in the Tambov region. A synthesis of a contemplative Japanese garden, a dwarf-rootstock orchard and berry patch, an open lawn, and 49 nighttime lighting scenarios.",
    nav01: "01. Master Plan",
    nav02: "02. Planting Plan (70 species)",
    nav03: "03. Wind Rose",
    nav04: "04. Paths & Paving",
    nav05: "05. Lighting (49 points)",
    nav06: "06. SketchUp 3D Renders",
    boardEyebrow: "PRIVATE ESTATE LANDSCAPING PROJECT",
    boardTitle: "MASTER PLAN · 6.5-ACRE SITE",
    boardSub: "Tambov Region · 9×9 m house (100 m² footprint, 2.5 stories) · Oriented strictly to the cardinal points",
    widthLabel: "Width:", widthVal: "19.2 m",
    lengthLabel: "Length:", lengthVal: "35.2 m",
    slopeLabel: "Slope:", slopeVal: "level (engineered fill)",
    conceptTitle: "GARDEN CONCEPT",
    concept1t: "Landscape style:", concept1: "soft natural lines, winding gravel paths with sleepers.",
    concept2t: "Japanese accent:", concept2: "a pyramid-roofed gazebo for aikido, a tsukubai, boulders, 2 cascading ponds.",
    concept3t: "Privacy:", concept3: "a dense wall of thujas and lilacs shielding the yard from the seven-story building to the south.",
    concept4t: "Family circle:", concept4: "an open lawn for play, a kids' area, and a living Christmas tree for round dances.",
    zonesTitle: "ZONE LEGEND",
    zonesHint: "click to highlight",
    compassLabel: "NORTH",
    zoneBadge: "Zone #",
    expandPlan: "Enlarge plan",
    planCaption: "3D top-down visualization of the master plan (SketchUp)",
    legendClinker: "Clinker/concrete", legendLawn: "Lawn", legendPonds: "Ponds", legendWood: "Wood/composite decking",
    viewpointsTitle: "KEY VIEWPOINTS OF THE SITE (SKETCHUP)",
    viewpointsHint: "click to enlarge ↗",
    open: "Open",
    vp1t: "Japanese Garden and Pond with Footbridge", vp1d: "A wooden footbridge, a granite pagoda lantern, water lilies, and flowering sakura",
    vp2t: "Tea Gazebo and Fire Pit", vp2d: "A pyramid-roofed gazebo with composite decking, bean bags, a curved bench with a fire pit",
    vp3t: "Panorama of the Yard and Central Lawn", vp3d: "An open parterre lawn, the play structure, the house terrace, and the Japanese garden",
    vp4t: "Play Structure and Lounge Area", vp4d: "A play structure with a slide and swings on rubber surfacing, a hanging cocoon chair",
    plantingsTitle: "KEY PLANTINGS",
    plantingsAll: "all 70 ↓",
    conifersT: "Conifer backbone:", coniferz: "'Emerald' thuja (hedge), 'Mughus' mountain pine, 'Glauca' Swiss stone pine, Korean fir.",
    eastT: "Japanese accents:", eastD: "'Red Sunset' maple, a Matsudana willow by the pond, Kuril bamboo, 'Dharuma' hydrangea.",
    fruitT: "Dwarf orchard:", fruitD: "'Arbat' and 'Melba' apples, 'Rusinka' sour cherry, 'Ovstuzhenka' sweet cherry, plums and berries.",
    flowerT: "Flowering border:", flowerD: "12 herbaceous peony varieties ('Sarah Bernhardt', 'Kansas'), miscanthus, hostas, and irises in the water.",
    balanceTitle: "SITE AREA BALANCE",
    balanceTotal: "Total area:", balanceTotalV: "650 m² (100%)",
    balanceFootprint: "Building footprint:", balanceFootprintV: "151.5 m² (23.3%)",
    balanceHard: "Hard paving:", balanceHardV: "135.0 m² (20.8%)",
    balanceGreen: "Planting and lawn:", balanceGreenV: "310.0 m² (47.7%)",
    balancePaths: "Paths (gravel/decking):", balancePathsV: "38.5 m² (5.9%)",
    balanceWater: "Water surface (2 ponds):", balanceWaterV: "15.0 m² (2.3%)",
    dendroTitle: "Planting Schedule and Layout",
    dendroLead: "A full list of 70 plant species, selected for the site's damp soil, microclimate, and seasonal change.",
    searchPh: "Search by name or #...",
    allPlants: "All plants",
    dendroSheetsTitle: "Original Planting Plan Sheets from the Project",
    sheet1alt: "North section of the planting plan",
    sheet1cap: "Sheet 01: North zone (gazebo, pond, peony walk)",
    sheet2alt: "South section of the planting plan",
    sheet2cap: "Sheet 02: South zone (orchard, lilac screening belt)",
    windEyebrow: "SITE CLIMATE ANALYSIS",
    windTitle: "Tambov Wind Rose and Insolation",
    windLead: "Analysis of prevailing air flows revealed the site's dominant wind rose: South (19.1%) and North (18.4%) winds prevail. Protective hedges and the placement of heat-loving plants were planned around this data.",
    climateDecisions: "Design decisions driven by climate:",
    climate1t: "1. Shielding from the south wind and the high-rise:", climate1: "The site's southern boundary sits 3 meters from the house. A dense belt of fast-growing lilac cultivars and 'Emerald' thujas was planted here, absorbing southerly gusts and screening the yard from the seven-story building's windows.",
    climate2t: "2. Shielding from cold north winds:", climate2: "A conifer group ('Glauca' Swiss stone pine, 'Mughus' pine) runs along the north fence, creating a comfortable microclimate for the tea gazebo.",
    climate3t: "3. High water table:", climate3: "Groundwater sits 0.5 m below the surface. Every fruit tree is planted strictly on dwarf or semi-dwarf rootstock with a shallow root system.",
    pathsEyebrow: "INFRASTRUCTURE AND PAVING",
    pathsTitle: "Path Network and Materials",
    pathsLead: "Materials were chosen in harmony with the house's warm terracotta brick: decorative stamped concrete, composite decking, brown gravel with wooden sleepers, and safety rubber tile.",
    concreteT: "Decorative Concrete", concreteD: "The formal drive-in road from the gate to the carport and the blind area around the house. A terracotta brick-pattern texture, resistant to studded tires and de-icing chemicals.", concreteArea: "Area: ~135 m²",
    dpkT: "Composite Decking", dpkD: "The house's north terrace (5.13×2.44 m), the tea gazebo's deck for aikido practice, and the area around the BBQ zone. Comfortable to walk on barefoot, non-slip in the rain.", dpkArea: "Area: ~28.5 m²",
    gravelT: "Gravel with Sleepers", gravelD: "A winding path through the Japanese garden to the ponds, plus a path through the orchard and berry patch. Rounded brown gravel with stepping-stone sleepers, creating a meditative walking effect.", gravelLen: "Length: ~38 linear m",
    rubberT: "Rubber Tile", rubberD: "Impact-safety surfacing for the kids' play area with a slide and swings. The warm orange tile color complements the brick facades' color palette.", rubberArea: "Area: ~18 m²",
    pathSchemeAlt: "Path network diagram",
    pathSchemeCap: "Path network and functional connections diagram",
    clickToZoom: "click to enlarge ↗",
    lightingEyebrow: "LIGHTING DESIGN AND SCENARIOS",
    lightingTitle: "Outdoor Lighting Plan (49 fixtures)",
    lightingLead: "A multi-layer lighting system: pathway safety, architectural lighting for the house, and a fairy-tale atmosphere in the Japanese garden.",
    pcs: "pcs.",
    lightPlanAlt: "Master outdoor lighting plan (49 points)",
    lightPlanCap: "Master outdoor lighting plan (49 points)",
    lightPlan2Alt: "Lounge area and Japanese garden lighting plan",
    lightPlan2Cap: "Lounge area and pond lighting plan",
    galleryTitle: "SketchUp 3D Visualization Gallery",
    galleryLead: "Detailed work on every corner of the garden: sight lines, small architectural forms, terraces, and ponds.",
    allFrames: "All frames",
    catJapanese: "Japanese Garden",
    catGazebo: "Gazebo & BBQ",
    catFamily: "Lawn & Kids' Area",
    catHouse: "House & Terrace",
    catPlan: "3D Axonometrics",
    openFullscreen: "Open fullscreen",
    lightboxAlt: "Fullscreen view",
  },
};

export function LandscapeCase() {
  const { lang } = useLanguage();
  const tr = t[lang];
  const landscapeProjectData = landscapeProjectDataByLang[lang];
  const [plantCategory, setPlantCategory] = useState<string>("all");
  const [plantSearch, setPlantSearch] = useState<string>("");
  const [activeRenderCategory, setActiveRenderCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedZone, setSelectedZone] = useState<number | null>(null);

  // Scroll-to-top on navigation is handled globally by ScrollToTopOnNavigate
  // (components/shared/scroll-to-top-on-navigate.tsx), no local effect needed.
  const renderCategoryIcon = (iconKey?: string, className = "w-3.5 h-3.5 text-primary") => {
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
    <div className="min-h-screen bg-[#0E1111] text-[#F3F4F6] relative selection:bg-primary selection:text-black">
      <PageTitle titleRu="Кейс: Ландшафтный дизайн — Екатерина Разумова" titleEn="Case Study: Landscape Design — Ekaterina Razumova" />
      {/* Background paper texture matching Ekaterina's portfolio */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/paper-clean-dark.webp"
          alt="Paper texture"
          fill
          className="object-cover opacity-50 mix-blend-screen"
          priority
        />
      </div>

      {/* Atmospheric radial background glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[500px] bg-gradient-to-b from-primary/10 via-[#2E8B57]/5 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed top-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-b from-[#E07A5F]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-24 max-w-[1440px]">
          
          {/* Top Navigation */}
          <CaseNavigation currentSlug="11-landscape-project" position="top" className="mb-8" />

          {/* =========================================================================
              HERO SECTION
             ========================================================================= */}
          <section className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {tr.badge}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-montserrat">
              {tr.heroTitleLine1}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#8EE4AF] to-[#E07A5F]">
                {tr.heroTitleLine2}
              </span>
            </h1>

            <p className="text-base sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
              {tr.heroLead}
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {landscapeProjectData.metrics.map((m, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#161A1B]/80 border border-white/10 hover:border-primary/40 transition-all">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white font-montserrat">{m.value}</span>
                    <span className="text-sm font-semibold text-primary">{m.unit}</span>
                  </div>
                  <div className="text-xs text-white/60 font-medium">{m.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* =========================================================================
              ANCHOR NAVIGATION
             ========================================================================= */}
          <nav className="sticky top-20 z-30 mb-12 py-3 bg-[#0E1111]/90 backdrop-blur-md border-y border-white/10 flex items-center justify-start md:justify-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <a
              href="#board"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 bg-white/5 text-white/80 hover:bg-white/10 hover:text-primary"
            >
              <LayoutDashboard className="w-4 h-4 text-primary" />
              <span>{tr.nav01}</span>
            </a>
            <a
              href="#dendro"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 bg-white/5 text-white/80 hover:bg-white/10 hover:text-primary"
            >
              <Trees className="w-4 h-4 text-primary" />
              <span>{tr.nav02}</span>
            </a>
            <a
              href="#wind"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 bg-white/5 text-white/80 hover:bg-white/10 hover:text-primary"
            >
              <Compass className="w-4 h-4 text-primary" />
              <span>{tr.nav03}</span>
            </a>
            <a
              href="#paths"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 bg-white/5 text-white/80 hover:bg-white/10 hover:text-primary"
            >
              <Footprints className="w-4 h-4 text-primary" />
              <span>{tr.nav04}</span>
            </a>
            <a
              href="#lighting"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 bg-white/5 text-white/80 hover:bg-white/10 hover:text-primary"
            >
              <Lightbulb className="w-4 h-4 text-primary" />
              <span>{tr.nav05}</span>
            </a>
            <a
              href="#gallery"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 bg-white/5 text-white/80 hover:bg-white/10 hover:text-primary"
            >
              <Box className="w-4 h-4 text-primary" />
              <span>{tr.nav06}</span>
            </a>
          </nav>

          {/* =========================================================================
              TAB 1: АРХИТЕКТУРНЫЙ ПЛАНШЕТ (КАК В РЕФЕРЕНСЕ)
             ========================================================================= */}
          <section id="board" className="scroll-mt-28 space-y-12 mb-20">
            <div className="space-y-12">
              
              {/* Главный презентационный планшет */}
              <div className="rounded-3xl bg-[#141819] border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                
                {/* Верхняя плашка планшета */}
                <div className="border-b border-white/10 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">
                      {tr.boardEyebrow}
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-montserrat">
                      {tr.boardTitle}
                    </h2>
                    <div className="text-xs sm:text-sm text-white/60 mt-1">
                      {tr.boardSub}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-white/70">
                    <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      {tr.widthLabel} <strong className="text-white">{tr.widthVal}</strong>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      {tr.lengthLabel} <strong className="text-white">{tr.lengthVal}</strong>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      {tr.slopeLabel} <strong className="text-white">{tr.slopeVal}</strong>
                    </div>
                  </div>
                </div>

                {/* 3-Колончатая структура архитектурного планшета */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Левая колонка: Экспликация зон и Концепция */}
                  <div className="lg:col-span-3 space-y-6">
                    
                    {/* Концепция */}
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <h3 className="text-xs uppercase tracking-wider text-primary font-bold mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />{tr.conceptTitle}
                      </h3>
                      <ul className="text-xs text-white/80 space-y-2 leading-relaxed">
                        <li className="flex items-start gap-1.5">
                          <span className="text-primary">•</span>
                          <span><strong>{tr.concept1t}</strong> {tr.concept1}</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-primary">•</span>
                          <span><strong>{tr.concept2t}</strong> {tr.concept2}</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-primary">•</span>
                          <span><strong>{tr.concept3t}</strong> {tr.concept3}</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-primary">•</span>
                          <span><strong>{tr.concept4t}</strong> {tr.concept4}</span>
                        </li>
                      </ul>
                    </div>

                    {/* Экспликация 15 зон */}
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <h3 className="text-xs uppercase tracking-wider text-primary font-bold mb-3 flex items-center justify-between">
                        <span className="flex items-center gap-1.5"><ListOrdered className="w-4 h-4 text-primary" />{tr.zonesTitle}</span>
                        <span className="text-[10px] text-white/50 font-normal">{tr.zonesHint}</span>
                      </h3>
                      
                      <div className="space-y-1.5 text-xs">
                        {landscapeProjectData.zones.map(z => (
                          <div
                            key={z.id}
                            onClick={() => setSelectedZone(selectedZone === z.id ? null : z.id)}
                            className={`p-2 rounded-lg cursor-pointer transition-all flex items-start gap-2.5 ${
                              selectedZone === z.id
                                ? "bg-primary/20 border border-primary/50 text-white"
                                : "hover:bg-white/5 text-white/70"
                            }`}
                          >
                            <span className="w-5 h-5 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 text-[10px] border border-primary/40">
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
                          src="/Кейсы/11-landscape-project/master_plan_main.webp"
                          alt={lang === "RU" ? "Генеральный план усадьбы с дендропланом" : "Master plan of the estate with dendrological plan"}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                        />
                      </div>

                      {/* Бейдж выбранной зоны */}
                      {selectedZone && (
                        <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-primary/60 text-xs animate-fadeIn">
                          <span className="text-primary font-bold">{tr.zoneBadge}{selectedZone}: </span>
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
                        onClick={() => setSelectedImage("/Кейсы/11-landscape-project/master_plan_main.webp")}
                        className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/60 hover:bg-black/90 text-white text-xs border border-white/20 transition-all flex items-center gap-1.5"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{tr.expandPlan}</span>
                      </button>
                    </div>

                    {/* Подпись под генпланом */}
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-white/50 px-2">
                      <div>{tr.planCaption}</div>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#E07A5F]" /> {tr.legendClinker}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#2E8B57]" /> {tr.legendLawn}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" /> {tr.legendPonds}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#B45309]" /> {tr.legendWood}
                        </span>
                      </div>
                    </div>

                    {/* Видовые точки сада из SketchUp — крупный коллаж 2x2 под генпланом */}
                    <div className="pt-2 space-y-3">
                      <div className="text-xs uppercase tracking-wider text-primary font-bold flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-primary" />
                          <span>{tr.viewpointsTitle}</span>
                        </span>
                        <span className="text-xs text-white/50 font-normal">{tr.viewpointsHint}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div 
                          onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-09 (5).webp")}
                          className="group cursor-pointer rounded-2xl overflow-hidden bg-[#161A1B] border border-white/10 hover:border-primary/60 transition-all flex flex-col shadow-lg hover:shadow-[#14F1D9]/10"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden bg-black">
                            <Image
                              src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-09 (5).webp"
                                                            alt={tr.vp1t}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-semibold border border-white/20 flex items-center gap-1.5">
                                <Maximize2 className="w-3.5 h-3.5 text-primary" />
                                <span>{tr.open}</span>
                              </span>
                            </div>
                          </div>
                          <div className="p-3.5 bg-[#141819] flex-1 flex flex-col justify-between border-t border-white/5">
                            <div className="font-semibold text-white text-sm group-hover:text-primary transition-colors">
                              {tr.vp1t}
                            </div>
                            <div className="text-xs text-white/60 mt-1 leading-relaxed">
                              {tr.vp1d}
                            </div>
                          </div>
                        </div>

                        <div 
                          onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-10 (4).webp")}
                          className="group cursor-pointer rounded-2xl overflow-hidden bg-[#161A1B] border border-white/10 hover:border-primary/60 transition-all flex flex-col shadow-lg hover:shadow-[#14F1D9]/10"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden bg-black">
                            <Image
                              src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-10 (4).webp"
                                                            alt={tr.vp2t}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-semibold border border-white/20 flex items-center gap-1.5">
                                <Maximize2 className="w-3.5 h-3.5 text-primary" />
                                <span>{tr.open}</span>
                              </span>
                            </div>
                          </div>
                          <div className="p-3.5 bg-[#141819] flex-1 flex flex-col justify-between border-t border-white/5">
                            <div className="font-semibold text-white text-sm group-hover:text-primary transition-colors">
                              {tr.vp2t}
                            </div>
                            <div className="text-xs text-white/60 mt-1 leading-relaxed">
                              {tr.vp2d}
                            </div>
                          </div>
                        </div>

                        <div 
                          onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-09 (2).webp")}
                          className="group cursor-pointer rounded-2xl overflow-hidden bg-[#161A1B] border border-white/10 hover:border-primary/60 transition-all flex flex-col shadow-lg hover:shadow-[#14F1D9]/10"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden bg-black">
                            <Image
                              src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-09 (2).webp"
                                                            alt={tr.vp3t}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-semibold border border-white/20 flex items-center gap-1.5">
                                <Maximize2 className="w-3.5 h-3.5 text-primary" />
                                <span>{tr.open}</span>
                              </span>
                            </div>
                          </div>
                          <div className="p-3.5 bg-[#141819] flex-1 flex flex-col justify-between border-t border-white/5">
                            <div className="font-semibold text-white text-sm group-hover:text-primary transition-colors">
                              {tr.vp3t}
                            </div>
                            <div className="text-xs text-white/60 mt-1 leading-relaxed">
                              {tr.vp3d}
                            </div>
                          </div>
                        </div>

                        <div 
                          onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-10 (5).webp")}
                          className="group cursor-pointer rounded-2xl overflow-hidden bg-[#161A1B] border border-white/10 hover:border-primary/60 transition-all flex flex-col shadow-lg hover:shadow-[#14F1D9]/10"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden bg-black">
                            <Image
                              src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-10 (5).webp"
                                                            alt={tr.vp4t}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-semibold border border-white/20 flex items-center gap-1.5">
                                <Maximize2 className="w-3.5 h-3.5 text-primary" />
                                <span>{tr.open}</span>
                              </span>
                            </div>
                          </div>
                          <div className="p-3.5 bg-[#141819] flex-1 flex flex-col justify-between border-t border-white/5">
                            <div className="font-semibold text-white text-sm group-hover:text-primary transition-colors">
                              {tr.vp4t}
                            </div>
                            <div className="text-xs text-white/60 mt-1 leading-relaxed">
                              {tr.vp4d}
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
                      <h3 className="text-xs uppercase tracking-wider text-primary font-bold mb-3 flex items-center justify-between">
                        <span className="flex items-center gap-1.5"><Trees className="w-4 h-4 text-primary" />{tr.plantingsTitle}</span>
                        <a href="#dendro" className="text-primary hover:underline text-[10px]">
                          {tr.plantingsAll}
                        </a>
                      </h3>

                      <div className="space-y-3 text-xs">
                        <div>
                          <div className="font-semibold text-white/90 mb-1 flex items-center gap-1.5">
                            <Trees className="w-3.5 h-3.5 text-primary" />{tr.conifersT}
                          </div>
                          <div className="text-white/60 text-[11px] leading-snug">
                            {tr.coniferz}
                          </div>
                        </div>

                        <div>
                          <div className="font-semibold text-white/90 mb-1 flex items-center gap-1.5">
                            <Flower2 className="w-3.5 h-3.5 text-primary" />{tr.eastT}
                          </div>
                          <div className="text-white/60 text-[11px] leading-snug">
                            {tr.eastD}
                          </div>
                        </div>

                        <div>
                          <div className="font-semibold text-white/90 mb-1 flex items-center gap-1.5">
                            <Apple className="w-3.5 h-3.5 text-primary" />{tr.fruitT}
                          </div>
                          <div className="text-white/60 text-[11px] leading-snug">
                            {tr.fruitD}
                          </div>
                        </div>

                        <div>
                          <div className="font-semibold text-white/90 mb-1 flex items-center gap-1.5">
                            <Leaf className="w-3.5 h-3.5 text-primary" />{tr.flowerT}
                          </div>
                          <div className="text-white/60 text-[11px] leading-snug">
                            {tr.flowerD}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Баланс территорий */}
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <h3 className="text-xs uppercase tracking-wider text-primary font-bold mb-3 flex items-center gap-2">
                        <PieChart className="w-4 h-4 text-primary" />{tr.balanceTitle}
                      </h3>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">{tr.balanceTotal}</span>
                          <strong className="text-white">{tr.balanceTotalV}</strong>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">{tr.balanceFootprint}</span>
                          <span className="text-white">{tr.balanceFootprintV}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">{tr.balanceHard}</span>
                          <span className="text-white">{tr.balanceHardV}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">{tr.balanceGreen}</span>
                          <span className="text-primary font-semibold">{tr.balanceGreenV}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-white/60">{tr.balancePaths}</span>
                          <span className="text-white">{tr.balancePathsV}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-white/60">{tr.balanceWater}</span>
                          <span className="text-white">{tr.balanceWaterV}</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              SECTION 2: ИНТЕРАКТИВНЫЙ ДЕНДРОПЛАН (70 ВИДОВ РАСТЕНИЙ)
             ========================================================================= */}
          <section id="dendro" className="scroll-mt-28 space-y-10 pt-16 border-t border-white/10 mb-20">
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-[#161A1B] border border-white/10">
                <div>
                  <h2 className="text-2xl font-bold text-white font-montserrat">
                    {tr.dendroTitle}
                  </h2>
                  <p className="text-sm text-white/60 mt-1">
                    {tr.dendroLead}
                  </p>
                </div>

                {/* Поиск */}
                <div className="w-full md:w-72 relative">
                  <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-3 pointer-events-none" />
                  <input
                    type="text"
                    placeholder={tr.searchPh}
                    value={plantSearch}
                    onChange={(e) => setPlantSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Категории фильтров */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setPlantCategory("all")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    plantCategory === "all"
                      ? "bg-primary text-[#0E1111]"
                      : "bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  {tr.allPlants} ({allPlants.length})
                </button>
                {landscapeProjectData.plantCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setPlantCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      plantCategory === cat.id
                        ? "bg-primary text-[#0E1111]"
                        : "bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {renderCategoryIcon(cat.icon, plantCategory === cat.id ? "w-3.5 h-3.5 text-[#0E1111]" : "w-3.5 h-3.5 text-primary")}
                    <span>{cat.title} ({cat.items.length})</span>
                  </button>
                ))}
              </div>

              {/* Сетка растений */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredPlants.map(p => (
                  <div
                    key={p.num}
                    className="p-3.5 rounded-xl bg-[#141819] border border-white/10 hover:border-primary/40 transition-all flex items-start gap-3"
                  >
                    <span className="w-7 h-7 rounded-lg bg-primary/15 text-primary font-bold flex items-center justify-center shrink-0 text-xs border border-primary/30">
                      {p.num}
                    </span>
                    <div className="overflow-hidden">
                      <div className="text-xs font-semibold text-white truncate" title={p.name}>
                        {p.name}
                      </div>
                      <div className="text-[10px] text-white/40 mt-0.5 flex items-center gap-1.5">
                        {renderCategoryIcon(p.categoryIcon, "w-3 h-3 text-primary")}
                        <span className="truncate">{p.categoryTitle}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Оригинальные чертежи дендроплана */}
              <div className="mt-12 p-6 rounded-2xl bg-[#161A1B] border border-white/10 space-y-6">
                <h3 className="text-lg font-bold text-white font-montserrat">
                  {tr.dendroSheetsTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div 
                    onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-05.webp")}
                    className="cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-white group"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-05.webp"
                                                alt={tr.sheet1alt}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-3 bg-[#121516] text-xs text-white/80 border-t border-white/10">
                      {tr.sheet1cap}
                    </div>
                  </div>

                  <div 
                    onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-06.webp")}
                    className="cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-white group"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-06.webp"
                                                alt={tr.sheet2alt}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-3 bg-[#121516] text-xs text-white/80 border-t border-white/10">
                      {tr.sheet2cap}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* =========================================================================
              SECTION 3: РОЗА ВЕТРОВ И КЛИМАТИЧЕСКИЙ АНАЛИЗ
             ========================================================================= */}
          <section id="wind" className="scroll-mt-28 space-y-10 pt-16 border-t border-white/10 mb-20">
            <div className="space-y-10">
              <div className="p-6 sm:p-10 rounded-3xl bg-[#141819] border border-white/15 shadow-2xl">
                <div className="max-w-2xl mb-8">
                  <div className="text-xs uppercase tracking-widest text-primary font-bold mb-2">
                    {tr.windEyebrow}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-montserrat">
                    {tr.windTitle}
                  </h2>
                  <p className="text-sm text-white/70 mt-2 leading-relaxed">
                    {tr.windLead}
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
                      <text x="0" y="-135" textAnchor="middle" fill="#14F1D9" fontSize="12" fontWeight="bold">{lang === "RU" ? "С (N)" : "N"}</text>
                      <text x="0" y="145" textAnchor="middle" fill="#14F1D9" fontSize="12" fontWeight="bold">{lang === "RU" ? "Ю (S)" : "S"}</text>
                      <text x="140" y="4" textAnchor="start" fill="#14F1D9" fontSize="12" fontWeight="bold">{lang === "RU" ? "В (E)" : "E"}</text>
                      <text x="-140" y="4" textAnchor="end" fill="#14F1D9" fontSize="12" fontWeight="bold">{lang === "RU" ? "З (W)" : "W"}</text>
                    </svg>
                  </div>

                  {/* Таблица и аналитические выводы */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      {landscapeProjectData.windRose.map((w, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                          <div className="font-bold text-primary">{w.dir}</div>
                          <div className="text-[11px] text-white/50">{w.label}</div>
                          <div className="text-sm font-extrabold text-white mt-1">{w.percent}%</div>
                        </div>
                      ))}
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 text-xs leading-relaxed text-white/80">
                      <div className="font-bold text-white text-sm">
                        {tr.climateDecisions}
                      </div>
                      <p>
                        <strong>{tr.climate1t}</strong> {tr.climate1}
                      </p>
                      <p>
                        <strong>{tr.climate2t}</strong> {tr.climate2}
                      </p>
                      <p>
                        <strong>{tr.climate3t}</strong> {tr.climate3}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              SECTION 4: ДОРОЖНО-ТРОПИНОЧНАЯ СЕТЬ И ПОКРЫТИЯ
             ========================================================================= */}
          <section id="paths" className="scroll-mt-28 space-y-10 pt-16 border-t border-white/10 mb-20">
            <div className="space-y-10">
              <div className="p-6 sm:p-10 rounded-3xl bg-[#141819] border border-white/15 shadow-2xl">
                <div className="max-w-2xl mb-8">
                  <div className="text-xs uppercase tracking-widest text-primary font-bold mb-2">
                    {tr.pathsEyebrow}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-montserrat">
                    {tr.pathsTitle}
                  </h2>
                  <p className="text-sm text-white/70 mt-2 leading-relaxed">
                    {tr.pathsLead}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 hover:border-primary/40 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary border border-primary/25 flex items-center justify-center">
                      <Grid3x3 className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base">{tr.concreteT}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {tr.concreteD}
                    </p>
                    <div className="text-[11px] text-primary font-semibold">{tr.concreteArea}</div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 hover:border-primary/40 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary border border-primary/25 flex items-center justify-center">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base">{tr.dpkT}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {tr.dpkD}
                    </p>
                    <div className="text-[11px] text-primary font-semibold">{tr.dpkArea}</div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 hover:border-primary/40 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary border border-primary/25 flex items-center justify-center">
                      <Footprints className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base">{tr.gravelT}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {tr.gravelD}
                    </p>
                    <div className="text-[11px] text-primary font-semibold">{tr.gravelLen}</div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 hover:border-primary/40 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary border border-primary/25 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base">{tr.rubberT}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {tr.rubberD}
                    </p>
                    <div className="text-[11px] text-primary font-semibold">{tr.rubberArea}</div>
                  </div>

                </div>

                {/* Иллюстрация дорожек из проекта */}
                <div className="mt-10 p-6 rounded-2xl bg-[#0E1111] border border-white/10">
                  <div 
                    onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-06 (4).webp")}
                    className="cursor-pointer rounded-xl overflow-hidden bg-white group"
                  >
                    <div className="relative aspect-[16/7]">
                      <Image
                        src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-06 (4).webp"
                                                alt={tr.pathSchemeAlt}
                        fill
                        className="object-contain p-2 group-hover:scale-102 transition-transform"
                      />
                    </div>
                    <div className="p-3 bg-[#121516] text-xs text-white/80 border-t border-white/10 flex justify-between">
                      <span>{tr.pathSchemeCap}</span>
                      <span className="text-primary">{tr.clickToZoom}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* =========================================================================
              SECTION 5: ПЛАН ОСВЕЩЕНИЯ (49 ТОЧЕК)
             ========================================================================= */}
          <section id="lighting" className="scroll-mt-28 space-y-10 pt-16 border-t border-white/10 mb-20">
            <div className="space-y-10">
              <div className="p-6 sm:p-10 rounded-3xl bg-[#141819] border border-white/15 shadow-2xl">
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-widest text-primary font-bold mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-primary" />
                    <span>{tr.lightingEyebrow}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-montserrat">
                    {tr.lightingTitle}
                  </h2>
                  <p className="text-sm text-white/70 mt-1 max-w-3xl leading-relaxed">
                    {tr.lightingLead}
                  </p>
                </div>

                {/* Группы освещения */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {landscapeProjectData.lighting.map((lg, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">{lg.group}</span>
                        <span className="px-2.5 py-1 rounded-full bg-primary/15 text-primary text-xs font-extrabold">
                          {tr.pcs}
                        </span>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed">{lg.desc}</p>
                    </div>
                  ))}
                </div>

                {/* 2 Схемы освещения из проекта */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div 
                    onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-07 (5).webp")}
                    className="cursor-pointer rounded-2xl overflow-hidden border border-white/10 group bg-[#0E1111]"
                  >
                    <div className="relative aspect-video bg-white">
                      <Image
                        src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-07 (5).webp"
                                                alt={tr.lightPlanAlt}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4 bg-[#121516] flex justify-between items-center text-xs">
                      <span className="text-white font-semibold">{tr.lightPlanCap}</span>
                      <span className="text-primary">{tr.clickToZoom}</span>
                    </div>
                  </div>

                  <div 
                    onClick={() => setSelectedImage("/Кейсы/11-landscape-project/photo_2026-09-05_13-57-07 (6).webp")}
                    className="cursor-pointer rounded-2xl overflow-hidden border border-white/10 group bg-[#0E1111]"
                  >
                    <div className="relative aspect-video bg-white">
                      <Image
                        src="/Кейсы/11-landscape-project/photo_2026-09-05_13-57-07 (6).webp"
                                                alt={tr.lightPlan2Alt}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4 bg-[#121516] flex justify-between items-center text-xs">
                      <span className="text-white font-semibold">{tr.lightPlan2Cap}</span>
                      <span className="text-primary">{tr.clickToZoom}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* =========================================================================
              SECTION 6: ГАЛЕРЕЯ 3D-РЕНДЕРОВ SKETCHUP
             ========================================================================= */}
          <section id="gallery" className="scroll-mt-28 space-y-10 pt-16 border-t border-white/10 mb-20">
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-[#161A1B] border border-white/10">
                <div>
                  <h2 className="text-2xl font-bold text-white font-montserrat">
                    {tr.galleryTitle}
                  </h2>
                  <p className="text-sm text-white/60 mt-1">
                    {tr.galleryLead}
                  </p>
                </div>

                {/* Категории рендеров */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveRenderCategory("all")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      activeRenderCategory === "all" ? "bg-primary text-[#0E1111]" : "bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    {tr.allFrames} ({landscapeProjectData.renders.length})
                  </button>
                  <button
                    onClick={() => setActiveRenderCategory("japanese")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      activeRenderCategory === "japanese" ? "bg-primary text-[#0E1111]" : "bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" /> <span>{tr.catJapanese}</span>
                  </button>
                  <button
                    onClick={() => setActiveRenderCategory("gazebo")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      activeRenderCategory === "gazebo" ? "bg-primary text-[#0E1111]" : "bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    <Home className="w-3.5 h-3.5" /> <span>{tr.catGazebo}</span>
                  </button>
                  <button
                    onClick={() => setActiveRenderCategory("family")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      activeRenderCategory === "family" ? "bg-primary text-[#0E1111]" : "bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    <Trees className="w-3.5 h-3.5" /> <span>{tr.catFamily}</span>
                  </button>
                  <button
                    onClick={() => setActiveRenderCategory("house")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      activeRenderCategory === "house" ? "bg-primary text-[#0E1111]" : "bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    <Home className="w-3.5 h-3.5" /> <span>{tr.catHouse}</span>
                  </button>
                  <button
                    onClick={() => setActiveRenderCategory("plan")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      activeRenderCategory === "plan" ? "bg-primary text-[#0E1111]" : "bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" /> <span>{tr.catPlan}</span>
                  </button>
                </div>
              </div>

              {/* Сетка рендеров */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRenders.map((r, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(r.src)}
                    className="group cursor-pointer rounded-2xl overflow-hidden bg-[#141819] border border-white/10 hover:border-primary/50 transition-all flex flex-col shadow-lg"
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
                          <Maximize2 className="w-3.5 h-3.5 mr-1" /> <span>{tr.openFullscreen}</span>
                        </span>
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <h3 className="text-sm font-bold text-white group-hover:text-primary transition-colors">
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
          </section>

          {/* Bottom Full Navigation */}
          <CaseNavigation currentSlug="11-landscape-project" position="bottom" />


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
                    alt={tr.lightboxAlt}
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
