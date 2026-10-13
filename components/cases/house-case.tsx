"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import { CaseNavigation } from "@/components/cases/case-navigation";
import { houseProjectDataByLang, ZoneDetail } from "@/lib/house-data";
import { useLanguage, PageTitle } from "@/components/language-provider";
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
  Flame
} from "lucide-react";

interface SketchCallout {
  id: number;
  title: string;
  tag: string;
  desc: string;
  x: number;
  y: number;
}

type FloorSketchMap = Record<1 | 2, {
  floor: 1 | 2;
  title: string;
  subtitle: string;
  imageSrc: string;
  callouts: SketchCallout[];
}>;

const FLOOR_SKETCHES_RU: FloorSketchMap = {
  1: {
    floor: 1,
    title: "1 Этаж: Зоны первого этажа",
    subtitle: "Кухня-гостиная, прихожая и коридор, бойлерная, санузел с ванной, камин в простенке и лестничный пролёт",
    imageSrc: "/Кейсы/10-house-project/sketch_floor_1.webp",
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
    imageSrc: "/Кейсы/10-house-project/sketch_floor_2.webp",
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

const FLOOR_SKETCHES_EN: FloorSketchMap = {
  1: {
    floor: 1,
    title: "Floor 1: Ground-Floor Zones",
    subtitle: "Kitchen-living room, entryway and hallway, boiler room, bathroom with tub, fireplace in the pier wall, and the stairwell",
    imageSrc: "/Кейсы/10-house-project/sketch_floor_1.webp",
    callouts: [
      {
        id: 1,
        title: "Wood-Burning Fireplace",
        tag: "Flue between the windows",
        desc: "A fireplace finished to look like monolithic concrete. The flue is routed through a brick pier wall, precisely between two floor-to-ceiling French windows.",
        x: 75,
        y: 66,
      },
      {
        id: 2,
        title: "Kitchen-Living Room",
        tag: "The social core",
        desc: "One bright unified space: an L-shaped kitchen with a teal subway backsplash, a dining table by the window, and a sofa lounge with a TV.",
        x: 44,
        y: 64,
      },
      {
        id: 3,
        title: "Entryway and Hallway",
        tag: "Entrance group",
        desc: "A roomy sliding wardrobe with white louvered fronts, a full-length mirror in an angled niche, and easy flow into the living areas.",
        x: 18,
        y: 44,
      },
      {
        id: 4,
        title: "Boiler Room (Mechanical Room)",
        tag: "MEP",
        desc: "A utility room to the left of the bathroom: the heating boiler, water heater, plumbing manifold, and storage.",
        x: 30,
        y: 20,
      },
      {
        id: 5,
        title: "Bathroom with Tub",
        tag: "1F bathroom",
        desc: "A full-size bathtub, a vanity with sink, a wall-hung toilet system, a washing machine, and light tile paired with wood-look tile.",
        x: 44,
        y: 17,
      },
      {
        id: 6,
        title: "Stairwell",
        tag: "Connecting the floors",
        desc: "A two-flight metal staircase with wooden treads and a rope railing.",
        x: 55,
        y: 22,
      },
    ],
  },
  2: {
    floor: 2,
    title: "Floor 2: Upper-Floor Zones",
    subtitle: "A bedroom with a trapezoidal entry, a kids' room with a playhouse, a study with a continuous desk, and a bathroom with a shower",
    imageSrc: "/Кейсы/10-house-project/sketch_floor_2.webp",
    callouts: [
      {
        id: 1,
        title: "Bedroom (Master Suite)",
        tag: "The private wing",
        desc: "A dark-wood accent wall, a double bed, a built-in wardrobe, and a symmetrical trapezoidal entry wall with a chamfer.",
        x: 74,
        y: 24,
      },
      {
        id: 2,
        title: "Kids' Room",
        tag: "Kids' room",
        desc: "A playhouse loft bed with a Swedish ladder, a car-shaped bed, a road-print rug, and toy shelving against a teal wall.",
        x: 73,
        y: 72,
      },
      {
        id: 3,
        title: "Study (Workshop / Studio)",
        tag: "Workshop & Music",
        desc: "A continuous white windowsill desk running along the full-wall window to the teal wall, a painting easel, a guitar stand, and a sofa.",
        x: 27,
        y: 72,
      },
      {
        id: 4,
        title: "Bathroom with Shower",
        tag: "2F bathroom",
        desc: "A bathroom with white brick-look tile: a glass-enclosed shower stall, a wall-hung toilet, and a sink along one wall.",
        x: 25,
        y: 21,
      },
      {
        id: 5,
        title: "2nd-Floor Corridor",
        tag: "2F hall",
        desc: "A central corridor connecting every room's exit, the bathroom, and the stair landing.",
        x: 48,
        y: 35,
      },
      {
        id: 6,
        title: "Stairwell",
        tag: "Light & window",
        desc: "A wide picture window on the landing with floor-length teal curtains, two-way light control, and vintage lamps.",
        x: 44,
        y: 24,
      },
    ],
  },
};

const t = {
  RU: {
    heroBadge: "Архитектура & Дизайн интерьера",
    navSketches: "Скетчи 1 & 2 этаж",
    navConcept: "Стили & Цвета",
    navPlanoplan: "3D Planoplan",
    navFurniture: "Мебель & Комплектация",
    navLighting: "Электрика & Свет",
    navBlueprints: "Чертежи",
    navGallery: "Стройка & Готовый дом",

    sketchEyebrow: "3D-Скетчинг & Планировка",
    sketchTitle: "Архитектурные Аксонометрические Скетчи",
    sketchLead: "Объёмно-пространственные разрезы дома в маркерной акварели: 1-й и 2-й этажи наглядно рядом",
    sketchClickHint: "Кликните по скетчу для полноэкранного зума",
    f1Eyebrow: "Общественное ядро дома",
    f1Title: "1 Этаж: Гостиная, кухня & холл",
    f1LightboxTitle: "1 Этаж: Гостиная с камином, кухня с бирюзовым кабанчиком, прихожая и бойлерная",
    enlarge: "Увеличить",
    f1SketchAlt: "Аксонометрический скетч 1 этажа",
    f1ZonesCount: "Зоны и элементы 1-го этажа",
    terraceLabel: "Терраса (12.8 м²):",
    terraceDesc: "примыкает к кухне-гостиной с выходом в сад.",
    f2Eyebrow: "Приватная зона & Творчество",
    f2Title: "2 Этаж: Спальня, детская & студия",
    f2LightboxTitle: "2 Этаж: Мастер-спальня с деревом, мастерская со столом-подоконником и гитарами, детская с домиком",
    f2SketchAlt: "Аксонометрический скетч 2 этажа",
    f2ZonesCount: "Зоны 2-го этажа",

    conceptTitle: "Концепция: Стили и Цветовые Предпочтения",
    conceptLead: "Поисковые мудборды, природные фактуры и цветовой код дома",
    conceptClickHint: "Кликните по планшету для полноэкранного зума",
    stylesLightboxTitle: "Стили и интерьерные ориентиры: сканди-минимализм, натуральный дуб, открытое пространство",
    stylesCardTitle: "Стили и фактуры интерьера",
    stylesCardSub: "Скандинавский минимализм, дерево и уют",
    stylesAlt: "Стили интерьера",
    colorsLightboxTitle: "Цветовые предпочтения: бирюза, морская волна, теплый дуб, серый бетон и белый",
    colorsCardTitle: "Цветовая палитра и референсы",
    colorsCardSub: "Акцентная бирюза, дуб, серый и белый",
    colorsAlt: "Цветовые предпочтения",
    evoSearch: "Поиск и гипотезы",
    evoTurning: "Точка перелома на стройке",
    evoFinal: "Финальный сканди-минимализм",
    materialsTitle: "Базовая палитра материалов и фактур",

    planoplanTitle: "3D-Моделирование в Planoplan & Зонирование",
    planoplanLead: "Виртуальная трёхмерная модель дома, видовые оси, инсоляция и пространственное зонирование",
    fullscreenHint: "Кликните для полноэкранного просмотра",
    zonesSectionTitle: "Функциональные зоны дома: 1 и 2 этажи",
    f1ZonesTitle: "1 Этаж: Общественные зоны",
    f1NodesCount: "узла",
    f2ZonesTitle: "2 Этаж: Приватные зоны",
    f2NodesCount: "узлов",

    furnitureTitle: "Расстановка Мебели & Комплектация",
    furnitureLead: "Реализованная мебель, индивидуальные столярные изделия, массив дуба и текстильные решения",
    furnitureClickHint: "Кликните по фото для увеличения",

    lightingTitle: "Электрика и Световые Сценарии",
    lightingLead: "Планы групп освещения, выключателей, розеток и высотных отметок для 1-го и 2-го этажей",
    lightingClickHint: "Кликните по любому плану для увеличения",
    f1EngEyebrow: "Инженерные схемы 1-го этажа",
    f1EngTitle: "1 Этаж: Освещение & Розетки",
    lightingPlanLabel: "План групп освещения и выключателей",
    f1LightingLightboxTitle: "1 Этаж: План групп освещения и выключателей",
    fullscreenBtn: "Во весь экран",
    f1LightingAlt: "1 Этаж: План освещения",
    socketsPlanLabel: "План розеток и высотных отметок",
    f1SocketsLightboxTitle: "1 Этаж: План розеток и высотных отметок",
    f1SocketsAlt: "1 Этаж: План розеток",
    f2EngEyebrow: "Инженерные схемы 2-го этажа",
    f2EngTitle: "2 Этаж: Освещение & Розетки",
    f2LightingLightboxTitle: "2 Этаж: План групп освещения и выключателей",
    f2LightingAlt: "2 Этаж: План освещения",
    f2SocketsLightboxTitle: "2 Этаж: План розеток и высотных отметок",
    f2SocketsAlt: "2 Этаж: План розеток",

    blueprintsTitle: "Архитектурная Основа (Чертежи Проектировщика)",
    blueprintsLead: "Исходные строительные чертежи от проектировщика, послужившие базой для дизайн-проекта",
    bp1LightboxTitle: "Исходный архитектурный план 1-го этажа (от проектировщика)",
    bp1Label: "План 1-го этажа",
    bp2LightboxTitle: "Исходный архитектурный план 2-го этажа (от проектировщика)",
    bp2Label: "План 2-го этажа",
    bp3LightboxTitle: "Архитектурный разрез 1-1 (от проектировщика)",
    bp3Label: "Разрез дома 1-1",
    bp3Alt: "Разрез дома",

    constructionTitle: "Стройка и Реализация: Два мира одного дома",
    constructionLead: "Сравнение архитектурного процесса возведения коробки и готового живого интерьера",
    constructionClickHint: "Кликните по любому планшету для полноэкранного зума",
    constructionCollageTitle: "Хроника стройки",
    enlargeBoard: "Увеличить планшет",
    constructionAlt: "Коллаж стройки",
    finishedCollageTitle: "Готовый дом в жизни",
    finishedAlt: "Коллаж готового дома",
    photoGalleryTitle: "Фотогалерея: Готовый интерьер и хроника стройки",
    allFrames: "Все кадры",
    finishedHouse: "Готовый дом",
    construction: "Стройка",

    planoplanRenders: [
      { src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-08_19-29-46.webp", title: "Гостиная зона с дровяным камином", desc: "Каминный портал в бетоне, ТВ-зона и семейный диван" },
      { src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-08_19-29-46 (4).webp", title: "Кухня-столовая и панорамные окна", desc: "Обеденная группа у окон и Г-образный гарнитур с фартуком" },
      { src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-08_19-29-46 (3).webp", title: "Прихожая и холл 1-го этажа", desc: "Входная группа, вид на лестничный марш и зеркальный портал" },
      { src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-13_00-14-00 (6).webp", title: "Объёмный 3D-разрез: 1 этаж", desc: "Пространственная модель расстановки мебели и перегородок 1 этажа" },
      { src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-13_00-14-01 (5).webp", title: "Объёмный 3D-разрез: 2 этаж", desc: "Пространственная модель спальни, детской и мастерской 2 этажа" },
      { src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-13_00-14-01.webp", title: "Вечерний световой сценарий", desc: "Камерное акцентное освещение над обеденным столом и у камина" }
    ],
  },
  EN: {
    heroBadge: "Architecture & Interior Design",
    navSketches: "Floor 1 & 2 Sketches",
    navConcept: "Styles & Colors",
    navPlanoplan: "3D Planoplan",
    navFurniture: "Furniture & Fit-Out",
    navLighting: "Electrical & Lighting",
    navBlueprints: "Blueprints",
    navGallery: "Construction & Finished House",

    sketchEyebrow: "3D Sketching & Layout",
    sketchTitle: "Architectural Axonometric Sketches",
    sketchLead: "Volumetric marker-watercolor cutaways of the house: floors 1 and 2 shown clearly side by side",
    sketchClickHint: "Click a sketch for a fullscreen zoom",
    f1Eyebrow: "The House's Social Core",
    f1Title: "Floor 1: Living Room, Kitchen & Hall",
    f1LightboxTitle: "Floor 1: Living room with fireplace, kitchen with teal subway tile, entryway, and boiler room",
    enlarge: "Enlarge",
    f1SketchAlt: "Axonometric sketch of floor 1",
    f1ZonesCount: "Floor 1 zones and elements",
    terraceLabel: "Terrace (12.8 m²):",
    terraceDesc: "adjoins the kitchen-living room with access to the garden.",
    f2Eyebrow: "Private Zone & Creative Space",
    f2Title: "Floor 2: Bedroom, Kids' Room & Studio",
    f2LightboxTitle: "Floor 2: Master bedroom with wood detailing, a workshop with a windowsill desk and guitars, and a kids' playhouse room",
    f2SketchAlt: "Axonometric sketch of floor 2",
    f2ZonesCount: "Floor 2 zones",

    conceptTitle: "Concept: Styles and Color Preferences",
    conceptLead: "Research moodboards, natural textures, and the house's color code",
    conceptClickHint: "Click a board for a fullscreen zoom",
    stylesLightboxTitle: "Style and interior references: Scandi minimalism, natural oak, open-plan living",
    stylesCardTitle: "Interior Styles and Textures",
    stylesCardSub: "Scandinavian minimalism, wood, and coziness",
    stylesAlt: "Interior styles",
    colorsLightboxTitle: "Color preferences: teal, sea-wave blue, warm oak, grey concrete, and white",
    colorsCardTitle: "Color Palette and References",
    colorsCardSub: "Accent teal, oak, grey, and white",
    colorsAlt: "Color preferences",
    evoSearch: "Search and Hypotheses",
    evoTurning: "The Turning Point on Site",
    evoFinal: "The Final Scandi Minimalism",
    materialsTitle: "Base Material and Texture Palette",

    planoplanTitle: "3D Modeling in Planoplan & Zoning",
    planoplanLead: "A virtual three-dimensional model of the house, sight lines, sunlight, and spatial zoning",
    fullscreenHint: "Click for a fullscreen view",
    zonesSectionTitle: "The House's Functional Zones: Floors 1 and 2",
    f1ZonesTitle: "Floor 1: Social Zones",
    f1NodesCount: "zones",
    f2ZonesTitle: "Floor 2: Private Zones",
    f2NodesCount: "zones",

    furnitureTitle: "Furniture Layout & Fit-Out",
    furnitureLead: "The furniture actually installed, custom joinery pieces, solid oak, and textile choices",
    furnitureClickHint: "Click a photo to enlarge",

    lightingTitle: "Electrical and Lighting Scenarios",
    lightingLead: "Lighting group, switch, outlet, and mounting-height plans for floors 1 and 2",
    lightingClickHint: "Click any plan to enlarge",
    f1EngEyebrow: "Floor 1 MEP Drawings",
    f1EngTitle: "Floor 1: Lighting & Outlets",
    lightingPlanLabel: "Lighting group and switch plan",
    f1LightingLightboxTitle: "Floor 1: Lighting group and switch plan",
    fullscreenBtn: "Fullscreen",
    f1LightingAlt: "Floor 1: Lighting plan",
    socketsPlanLabel: "Outlet and mounting-height plan",
    f1SocketsLightboxTitle: "Floor 1: Outlet and mounting-height plan",
    f1SocketsAlt: "Floor 1: Outlet plan",
    f2EngEyebrow: "Floor 2 MEP Drawings",
    f2EngTitle: "Floor 2: Lighting & Outlets",
    f2LightingLightboxTitle: "Floor 2: Lighting group and switch plan",
    f2LightingAlt: "Floor 2: Lighting plan",
    f2SocketsLightboxTitle: "Floor 2: Outlet and mounting-height plan",
    f2SocketsAlt: "Floor 2: Outlet plan",

    blueprintsTitle: "Architectural Foundation (Engineer's Blueprints)",
    blueprintsLead: "The original structural blueprints from the engineer that served as the basis for the design project",
    bp1LightboxTitle: "Original floor 1 architectural plan (from the engineer)",
    bp1Label: "Floor 1 Plan",
    bp2LightboxTitle: "Original floor 2 architectural plan (from the engineer)",
    bp2Label: "Floor 2 Plan",
    bp3LightboxTitle: "Architectural section 1-1 (from the engineer)",
    bp3Label: "House Section 1-1",
    bp3Alt: "House section",

    constructionTitle: "Construction and Build-Out: Two Worlds, One House",
    constructionLead: "A comparison of the shell-construction process with the finished, lived-in interior",
    constructionClickHint: "Click any board for a fullscreen zoom",
    constructionCollageTitle: "Construction Timeline",
    enlargeBoard: "Enlarge board",
    constructionAlt: "Construction collage",
    finishedCollageTitle: "The Finished House, Lived In",
    finishedAlt: "Finished house collage",
    photoGalleryTitle: "Photo Gallery: The Finished Interior and the Construction Timeline",
    allFrames: "All photos",
    finishedHouse: "Finished house",
    construction: "Construction",

    planoplanRenders: [
      { src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-08_19-29-46.webp", title: "Living Room with Wood-Burning Fireplace", desc: "A concrete fireplace surround, the TV zone, and the family sofa" },
      { src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-08_19-29-46 (4).webp", title: "Kitchen-Dining and Panoramic Windows", desc: "A dining set by the windows and an L-shaped kitchen with a backsplash" },
      { src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-08_19-29-46 (3).webp", title: "Floor 1 Entryway and Hall", desc: "The entrance group, a view of the stair flight, and the mirror niche" },
      { src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-13_00-14-00 (6).webp", title: "Volumetric 3D Cutaway: Floor 1", desc: "A spatial model of the floor 1 furniture layout and partitions" },
      { src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-13_00-14-01 (5).webp", title: "Volumetric 3D Cutaway: Floor 2", desc: "A spatial model of the floor 2 bedroom, kids' room, and workshop" },
      { src: "/Кейсы/10-house-project/Рендеры в планоплане/photo_2026-09-13_00-14-01.webp", title: "Evening Lighting Scenario", desc: "Intimate accent lighting over the dining table and by the fireplace" }
    ],
  },
};

export function HouseCase() {
  const { lang } = useLanguage();
  const tr = t[lang];
  const houseProjectData = houseProjectDataByLang[lang];
  const FLOOR_SKETCHES = lang === "RU" ? FLOOR_SKETCHES_RU : FLOOR_SKETCHES_EN;
  const planoplanRenders = tr.planoplanRenders;
  const [selectedZone, setSelectedZone] = useState<ZoneDetail | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; room?: string } | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<"all" | "finished" | "construction">("all");

  // Navigating here via a case's prev/next link doesn't always land at the top.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-[#111111] relative">
      <PageTitle titleRu="Кейс: Интерьер загородного дома — Екатерина Разумова" titleEn="Case Study: Country House Interior — Ekaterina Razumova" />
      {/* Clean Dark Paper Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image 
          src="/paper-clean-dark.webp" 
          alt="Paper texture" 
          fill 
          className="object-cover opacity-70 mix-blend-screen"
        />
      </div>

      <div className="relative z-10">
        <Header />

      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#161616] to-background">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/5 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Top Navigation */}
          <CaseNavigation currentSlug="10-house-project" position="top" className="mb-8" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              <Building2 className="w-3.5 h-3.5" />
              {tr.heroBadge}
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
              <div key={idx} className="bg-surface border border-white/10 p-5 md:p-6 relative group hover:border-primary/50 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-primary font-montserrat mb-1">
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
      <nav className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-white/10 py-3">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-start md:justify-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <a
            href="#sketches"
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap bg-surface text-primary hover:bg-white/10 transition-colors font-montserrat rounded-none border border-primary/40 shadow-[0_0_15px_rgba(20,241,217,0.15)]"
          >
            <Building2 className="w-4 h-4 text-primary" />
            {tr.navSketches}
          </a>
          <a
            href="#concept"
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap bg-surface text-white/80 hover:text-primary hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <Palette className="w-4 h-4 text-primary" />
            {tr.navConcept}
          </a>
          <a
            href="#planoplan"
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap bg-surface text-white/80 hover:text-primary hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <Layers className="w-4 h-4 text-primary" />
            3D Planoplan
          </a>
          <a
            href="#furniture"
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap bg-surface text-white/80 hover:text-primary hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <Armchair className="w-4 h-4 text-primary" />
            {tr.navFurniture}
          </a>
          <a
            href="#lighting"
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap bg-surface text-white/80 hover:text-primary hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <Zap className="w-4 h-4 text-primary" />
            {tr.navLighting}
          </a>
          <a
            href="#blueprints"
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap bg-surface text-white/80 hover:text-primary hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <FileText className="w-4 h-4 text-primary" />
            {tr.navBlueprints}
          </a>
          <a
            href="#gallery"
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap bg-surface text-white/80 hover:text-primary hover:bg-white/10 transition-colors font-montserrat rounded-none border border-white/10"
          >
            <Camera className="w-4 h-4 text-primary" />
            {tr.navGallery}
          </a>
        </div>
      </nav>

      {/* 3. MAIN STORY FLOW */}
      <main className="container mx-auto px-4 md:px-8 py-10 space-y-24">

        {/* SECTION 1: AXONOMETRIC SKETCHES (Floors 1 & 2 side-by-side on desktop, stacked on mobile) */}
        <section id="sketches" className="scroll-mt-28 space-y-8">
          <div className="bg-[#181818] border border-white/15 p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] pointer-events-none rounded-full" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-4 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  {tr.sketchEyebrow}
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-montserrat">
                  {tr.sketchTitle}
                </h2>
                <p className="text-sm sm:text-base text-white/70 mt-1.5 font-sans">
                  {tr.sketchLead}
                </p>
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-sans hidden sm:block">
                {tr.sketchClickHint}
              </div>
            </div>

            {/* Side-by-side layout for 1st and 2nd floor */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10">
              
              {/* FLOOR 1 COLUMN */}
              <div className="bg-[#141414] border border-white/15 p-4 sm:p-6 shadow-xl flex flex-col">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs font-bold uppercase text-primary font-montserrat tracking-widest block mb-1">
                      {tr.f1Eyebrow}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black uppercase text-white font-montserrat">
                      {tr.f1Title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedImage({
                      src: FLOOR_SKETCHES[1].imageSrc,
                      title: tr.f1LightboxTitle
                    })}
                    className="text-xs text-white/60 hover:text-primary font-sans flex items-center gap-1.5 transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" /> {tr.enlarge}
                  </button>
                </div>

                {/* Floor 1 Image Container with Interactive Pins */}
                <div className="relative aspect-square w-full bg-black/40 border border-white/10 overflow-hidden mb-6 group">
                  <Image
                    src={FLOOR_SKETCHES[1].imageSrc}
                    alt={tr.f1SketchAlt}
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
                        className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full font-montserrat font-black text-xs sm:text-sm bg-background/90 text-white border-2 border-primary shadow-lg backdrop-blur-sm"
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
                    <Flame className="w-4 h-4 text-primary" />
                    {tr.f1ZonesCount}
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
                            <span className="text-xs font-bold uppercase tracking-wider text-primary font-montserrat shrink-0">
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
                    <span className="text-primary font-bold font-montserrat uppercase">{tr.terraceLabel}</span>
                    {tr.terraceDesc}
                  </div>
                </div>
              </div>

              {/* FLOOR 2 COLUMN */}
              <div className="bg-[#141414] border border-white/15 p-4 sm:p-6 shadow-xl flex flex-col">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs font-bold uppercase text-primary font-montserrat tracking-widest block mb-1">
                      {tr.f2Eyebrow}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black uppercase text-white font-montserrat">
                      {tr.f2Title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedImage({
                      src: FLOOR_SKETCHES[2].imageSrc,
                      title: tr.f2LightboxTitle
                    })}
                    className="text-xs text-white/60 hover:text-primary font-sans flex items-center gap-1.5 transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" /> {tr.enlarge}
                  </button>
                </div>

                {/* Floor 2 Image Container with Interactive Pins */}
                <div className="relative aspect-square w-full bg-black/40 border border-white/10 overflow-hidden mb-6 group">
                  <Image
                    src={FLOOR_SKETCHES[2].imageSrc}
                    alt={tr.f2SketchAlt}
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
                        className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full font-montserrat font-black text-xs sm:text-sm bg-background/90 text-white border-2 border-primary shadow-lg backdrop-blur-sm"
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
                    <Flame className="w-4 h-4 text-primary" />
                    {tr.f2ZonesCount}
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
                            <span className="text-xs font-bold uppercase tracking-wider text-primary font-montserrat shrink-0">
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
                  {tr.conceptTitle}
                </h2>
                <p className="text-sm sm:text-base text-white/70 mt-1.5 font-sans">
                  {tr.conceptLead}
                </p>
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-sans hidden sm:block">
                {tr.conceptClickHint}
              </div>
            </div>

            {/* Horizontal Diptych: Styles (Left) & Colors (Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">
              
              {/* STYLES COLLAGE */}
              <div
                onClick={() => setSelectedImage({
                  src: "/Кейсы/10-house-project/collage_styles.webp",
                  title: "Стили и интерьерные ориентиры: сканди-минимализм, натуральный дуб, открытое пространство"
                })}
                className="bg-[#141414] border border-white/20 hover:border-primary p-4 sm:p-5 cursor-pointer group transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="flex items-center justify-between px-1 py-1 mb-3 border-b border-white/10">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-montserrat uppercase tracking-wider block">
                      {tr.stylesCardTitle}
                    </h3>
                    <span className="text-xs sm:text-sm text-white/60 font-sans">{tr.stylesCardSub}</span>
                  </div>
                  <span className="text-xs text-white/50 font-sans flex items-center gap-1 group-hover:text-primary shrink-0">
                    <Maximize2 className="w-4 h-4" />{tr.enlarge}
                  </span>
                </div>
                <div className="relative aspect-[3/4] w-full bg-black/60 overflow-hidden">
                  <Image
                    src="/Кейсы/10-house-project/collage_styles.webp"
                                        alt={tr.stylesAlt}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* COLORS COLLAGE */}
              <div
                onClick={() => setSelectedImage({
                  src: "/Кейсы/10-house-project/collage_colors.webp",
                  title: "Цветовые предпочтения: бирюза, морская волна, теплый дуб, серый бетон и белый"
                })}
                className="bg-[#141414] border border-primary/30 hover:border-primary p-4 sm:p-5 cursor-pointer group transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="flex items-center justify-between px-1 py-1 mb-3 border-b border-white/10">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-primary font-montserrat uppercase tracking-wider block">
                      {tr.colorsCardTitle}
                    </h3>
                    <span className="text-xs sm:text-sm text-white/60 font-sans">{tr.colorsCardSub}</span>
                  </div>
                  <span className="text-xs text-white/50 font-sans flex items-center gap-1 group-hover:text-primary shrink-0">
                    <Maximize2 className="w-4 h-4" />{tr.enlarge}
                  </span>
                </div>
                <div className="relative aspect-[3/4] w-full bg-black/60 overflow-hidden">
                  <Image
                    src="/Кейсы/10-house-project/collage_colors.webp"
                                        alt={tr.colorsAlt}
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
                    {tr.evoSearch}
                  </strong>
                  {houseProjectData.evolutionStory.initialConcept}
                </div>
                <div className="p-5 bg-white/5 border-l-2 border-white/40">
                  <strong className="text-white/80 font-montserrat font-bold text-sm uppercase block mb-1.5">
                    {tr.evoTurning}
                  </strong>
                  {houseProjectData.evolutionStory.turningPoint}
                </div>
                <div className="p-5 bg-primary/5 border-l-2 border-primary">
                  <strong className="text-primary font-montserrat font-bold text-sm uppercase block mb-1.5">
                    {tr.evoFinal}
                  </strong>
                  {houseProjectData.evolutionStory.realizedResult}
                </div>
              </div>
            </div>

            {/* Material Swatches */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-montserrat mb-4">
                {tr.materialsTitle}
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
                    <div className="text-xs text-primary font-montserrat font-bold uppercase mb-1.5">{mat.role}</div>
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
                  {tr.planoplanTitle}
                </h2>
                <p className="text-sm sm:text-base text-white/70 mt-1.5 font-sans">
                  {tr.planoplanLead}
                </p>
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-sans hidden sm:block">
                {tr.fullscreenHint}
              </div>
            </div>

            {/* Large 3D Renders Grid (Clear, large cards without tiny burned-in text) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {planoplanRenders.map((render, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage({ src: render.src, title: render.title })}
                  className="bg-[#141414] border border-white/10 hover:border-primary p-4 cursor-pointer group transition-all flex flex-col justify-between shadow-lg"
                >
                  <div className="relative aspect-[16/10] w-full bg-black/50 overflow-hidden mb-3 border border-white/5">
                    <Image
                      src={render.src}
                      alt={render.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-6 h-6 text-primary" />
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
                <Layers className="w-5 h-5 text-primary" />
                {tr.zonesSectionTitle}
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                
                {/* Floor 1 Zones */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-sm font-black uppercase text-primary font-montserrat tracking-wider">
                      {tr.f1ZonesTitle}
                    </span>
                    <span className="text-xs text-white/50 font-sans">
                      {floor1Data.zones.length} {tr.f1NodesCount}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {floor1Data.zones.map((zone) => (
                      <div
                        key={zone.id}
                        onClick={() => setSelectedZone(selectedZone?.id === zone.id ? null : zone)}
                        className={`p-4 border transition-all cursor-pointer ${
                          selectedZone?.id === zone.id
                            ? "bg-surface border-primary shadow-lg"
                            : "bg-black/30 border-white/10 hover:border-white/30 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="text-sm font-bold text-white font-montserrat truncate">{zone.name}</h4>
                          {zone.area && (
                            <span className="text-xs font-montserrat font-bold text-primary shrink-0 ml-1.5">{zone.area}</span>
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
                    <span className="text-sm font-black uppercase text-primary font-montserrat tracking-wider">
                      {tr.f2ZonesTitle}
                    </span>
                    <span className="text-xs text-white/50 font-sans">
                      {floor2Data.zones.length} {tr.f2NodesCount}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {floor2Data.zones.map((zone) => (
                      <div
                        key={zone.id}
                        onClick={() => setSelectedZone(selectedZone?.id === zone.id ? null : zone)}
                        className={`p-4 border transition-all cursor-pointer ${
                          selectedZone?.id === zone.id
                            ? "bg-surface border-primary shadow-lg"
                            : "bg-black/30 border-white/10 hover:border-white/30 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="text-sm font-bold text-white font-montserrat truncate">{zone.name}</h4>
                          {zone.area && (
                            <span className="text-xs font-montserrat font-bold text-primary shrink-0 ml-1.5">{zone.area}</span>
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
                  {tr.furnitureTitle}
                </h2>
                <p className="text-sm sm:text-base text-white/70 mt-1.5 font-sans">
                  {tr.furnitureLead}
                </p>
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-sans hidden sm:block">
                {tr.furnitureClickHint}
              </div>
            </div>

            {/* Furniture Grid with Real Photos and Large Readable Typography */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {houseProjectData.furniture.map((item, i) => (
                <div
                  key={i}
                  onClick={() => item.image && setSelectedImage({ src: item.image, title: item.name })}
                  className="bg-[#141414] border border-white/10 hover:border-primary p-4 flex flex-col justify-between cursor-pointer group transition-all shadow-lg"
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
                          <Maximize2 className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    )}
                    <div className="flex items-center justify-between text-xs font-sans text-primary mb-2">
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
                  {tr.lightingTitle}
                </h2>
                <p className="text-sm sm:text-base text-white/70 mt-1.5 font-sans">
                  {tr.lightingLead}
                </p>
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-sans hidden sm:block">
                {tr.lightingClickHint}
              </div>
            </div>

            {/* 1st & 2nd Floor Side-by-Side Large Engineering Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              
              {/* FLOOR 1 ENGINEERING */}
              <div className="bg-[#141414] border border-white/15 p-4 sm:p-6 flex flex-col space-y-6">
                <div className="border-b border-white/10 pb-3">
                  <span className="text-xs font-bold uppercase text-primary font-montserrat tracking-widest block mb-1">
                    {tr.f1EngEyebrow}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black uppercase text-white font-montserrat">
                    {tr.f1EngTitle}
                  </h3>
                </div>

                {/* Lighting Plan 1F */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base font-bold text-white font-montserrat">
                      {tr.lightingPlanLabel}
                    </h4>
                    <button
                      onClick={() => setSelectedImage({
                        src: "/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_6.webp",
                        title: "1 Этаж: План групп освещения и выключателей"
                      })}
                      className="text-xs text-white/60 hover:text-primary flex items-center gap-1 font-sans transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" /> {tr.fullscreenBtn}
                    </button>
                  </div>
                  <div
                    onClick={() => setSelectedImage({
                      src: "/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_6.webp",
                      title: "1 Этаж: План групп освещения и выключателей"
                    })}
                    className="relative aspect-[4/3] w-full bg-white border border-white/10 overflow-hidden cursor-pointer group hover:border-primary transition-all"
                  >
                    <Image
                      src="/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_6.webp"
                                            alt={tr.f1LightingAlt}
                      fill
                      className="object-contain group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Sockets Plan 1F */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base font-bold text-white font-montserrat">
                      {tr.socketsPlanLabel}
                    </h4>
                    <button
                      onClick={() => setSelectedImage({
                        src: "/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_7.webp",
                        title: "1 Этаж: План розеток и высотных отметок"
                      })}
                      className="text-xs text-white/60 hover:text-primary flex items-center gap-1 font-sans transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" /> {tr.fullscreenBtn}
                    </button>
                  </div>
                  <div
                    onClick={() => setSelectedImage({
                      src: "/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_7.webp",
                      title: "1 Этаж: План розеток и высотных отметок"
                    })}
                    className="relative aspect-[4/3] w-full bg-white border border-white/10 overflow-hidden cursor-pointer group hover:border-primary transition-all"
                  >
                    <Image
                      src="/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_7.webp"
                                            alt={tr.f1SocketsAlt}
                      fill
                      className="object-contain group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* FLOOR 2 ENGINEERING */}
              <div className="bg-[#141414] border border-white/15 p-4 sm:p-6 flex flex-col space-y-6">
                <div className="border-b border-white/10 pb-3">
                  <span className="text-xs font-bold uppercase text-primary font-montserrat tracking-widest block mb-1">
                    {tr.f2EngEyebrow}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black uppercase text-white font-montserrat">
                    {tr.f2EngTitle}
                  </h3>
                </div>

                {/* Lighting Plan 2F */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base font-bold text-white font-montserrat">
                      {tr.lightingPlanLabel}
                    </h4>
                    <button
                      onClick={() => setSelectedImage({
                        src: "/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_14.webp",
                        title: "2 Этаж: План групп освещения и выключателей"
                      })}
                      className="text-xs text-white/60 hover:text-primary flex items-center gap-1 font-sans transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" /> {tr.fullscreenBtn}
                    </button>
                  </div>
                  <div
                    onClick={() => setSelectedImage({
                      src: "/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_14.webp",
                      title: "2 Этаж: План групп освещения и выключателей"
                    })}
                    className="relative aspect-[4/3] w-full bg-white border border-white/10 overflow-hidden cursor-pointer group hover:border-primary transition-all"
                  >
                    <Image
                      src="/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_14.webp"
                                            alt={tr.f2LightingAlt}
                      fill
                      className="object-contain group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Sockets Plan 2F */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base font-bold text-white font-montserrat">
                      {tr.socketsPlanLabel}
                    </h4>
                    <button
                      onClick={() => setSelectedImage({
                        src: "/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_1.webp",
                        title: "2 Этаж: План розеток и высотных отметок"
                      })}
                      className="text-xs text-white/60 hover:text-primary flex items-center gap-1 font-sans transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" /> {tr.fullscreenBtn}
                    </button>
                  </div>
                  <div
                    onClick={() => setSelectedImage({
                      src: "/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_1.webp",
                      title: "2 Этаж: План розеток и высотных отметок"
                    })}
                    className="relative aspect-[4/3] w-full bg-white border border-white/10 overflow-hidden cursor-pointer group hover:border-primary transition-all"
                  >
                    <Image
                      src="/Кейсы/10-house-project/электрика и освещение/Электрика и освещение_img_1.webp"
                                            alt={tr.f2SocketsAlt}
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
                      <Lightbulb className="w-5 h-5 text-primary" />
                      <span className="text-xs font-sans text-white/60 bg-white/5 px-2 py-0.5">{lg.kelvin}</span>
                    </div>
                    <h5 className="text-sm sm:text-base font-bold text-white mb-1 font-montserrat">{lg.name}</h5>
                    <div className="text-xs text-primary font-sans font-medium mb-2">{lg.type}</div>
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
                  {tr.blueprintsTitle}
                </h2>
                <p className="text-sm sm:text-base text-white/70 mt-1.5 font-sans">
                  {tr.blueprintsLead}
                </p>
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-sans hidden sm:block">
                {tr.fullscreenHint}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Blueprint 1 */}
              <div
                onClick={() => setSelectedImage({
                  src: "/Кейсы/10-house-project/чертежи/Снимок экрана 2026-09-08 221420.webp",
                  title: "Исходный архитектурный план 1-го этажа (от проектировщика)"
                })}
                className="bg-[#141414] border border-white/10 hover:border-white/40 p-4 cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between px-1 py-1 mb-3 border-b border-white/10">
                  <span className="text-sm sm:text-base font-bold text-white font-montserrat uppercase">
                    {tr.bp1Label}
                  </span>
                  <Maximize2 className="w-4 h-4 text-white/50 group-hover:text-primary" />
                </div>
                <div className="relative aspect-[4/3] w-full bg-white/5 overflow-hidden">
                  <Image
                    src="/Кейсы/10-house-project/чертежи/Снимок экрана 2026-09-08 221420.webp"
                                        alt={tr.bp1Label}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Blueprint 2 */}
              <div
                onClick={() => setSelectedImage({
                  src: "/Кейсы/10-house-project/чертежи/Снимок экрана 2026-09-08 221455.webp",
                  title: "Исходный архитектурный план 2-го этажа (от проектировщика)"
                })}
                className="bg-[#141414] border border-white/10 hover:border-white/40 p-4 cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between px-1 py-1 mb-3 border-b border-white/10">
                  <span className="text-sm sm:text-base font-bold text-white font-montserrat uppercase">
                    {tr.bp2Label}
                  </span>
                  <Maximize2 className="w-4 h-4 text-white/50 group-hover:text-primary" />
                </div>
                <div className="relative aspect-[4/3] w-full bg-white/5 overflow-hidden">
                  <Image
                    src="/Кейсы/10-house-project/чертежи/Снимок экрана 2026-09-08 221455.webp"
                                        alt={tr.bp2Label}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Blueprint 3 */}
              <div
                onClick={() => setSelectedImage({
                  src: "/Кейсы/10-house-project/чертежи/Снимок экрана 2026-09-08 221539.webp",
                  title: "Архитектурный разрез 1-1 (от проектировщика)"
                })}
                className="bg-[#141414] border border-white/10 hover:border-white/40 p-4 cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between px-1 py-1 mb-3 border-b border-white/10">
                  <span className="text-sm sm:text-base font-bold text-white font-montserrat uppercase">
                    {tr.bp3Label}
                  </span>
                  <Maximize2 className="w-4 h-4 text-white/50 group-hover:text-primary" />
                </div>
                <div className="relative aspect-[4/3] w-full bg-white/5 overflow-hidden">
                  <Image
                    src="/Кейсы/10-house-project/чертежи/Снимок экрана 2026-09-08 221539.webp"
                                        alt={tr.bp3Alt}
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
                  {tr.constructionTitle}
                </h2>
                <p className="text-sm sm:text-base text-white/70 mt-1.5 font-sans">
                  {tr.constructionLead}
                </p>
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-sans hidden sm:block">
                {tr.constructionClickHint}
              </div>
            </div>

            {/* Horizontal diptych on desktop, vertical on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Left: Construction Collage */}
              <div
                onClick={() => setSelectedImage({
                  src: "/Кейсы/10-house-project/collage_construction_vertical.webp",
                  title: "Хроника стройки"
                })}
                className="bg-[#141414] border border-white/20 hover:border-white/50 p-4 sm:p-5 cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between px-1 py-1 mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-white font-montserrat uppercase tracking-wider">
                    {tr.constructionCollageTitle}
                  </h3>
                  <span className="text-xs text-white/50 font-sans flex items-center gap-1 group-hover:text-white">
                    <Maximize2 className="w-4 h-4" /> {tr.enlargeBoard}
                  </span>
                </div>
                <div className="relative aspect-[2/3] w-full bg-black/60 overflow-hidden">
                  <Image
                    src="/Кейсы/10-house-project/collage_construction_vertical.webp"
                                        alt={tr.constructionAlt}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right: Finished House Collage */}
              <div
                onClick={() => setSelectedImage({
                  src: "/Кейсы/10-house-project/collage_finished_vertical.webp",
                  title: "Готовый дом в жизни"
                })}
                className="bg-[#141414] border border-primary/30 hover:border-primary p-4 sm:p-5 cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between px-1 py-1 mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-primary font-montserrat uppercase tracking-wider">
                    {tr.finishedCollageTitle}
                  </h3>
                  <span className="text-xs text-white/50 font-sans flex items-center gap-1 group-hover:text-primary">
                    <Maximize2 className="w-4 h-4" />{tr.enlargeBoard}
                  </span>
                </div>
                <div className="relative aspect-[2/3] w-full bg-black/60 overflow-hidden">
                  <Image
                    src="/Кейсы/10-house-project/collage_finished_vertical.webp"
                                        alt={tr.finishedAlt}
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
                  {tr.photoGalleryTitle}
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setGalleryFilter("all")}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-montserrat font-bold uppercase transition-colors ${
                      galleryFilter === "all" ? "bg-primary text-[#111111]" : "bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    {tr.allFrames} ({houseProjectData.gallery.finished.length + houseProjectData.gallery.construction.length})
                  </button>
                  <button
                    onClick={() => setGalleryFilter("finished")}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-montserrat font-bold uppercase transition-colors ${
                      galleryFilter === "finished" ? "bg-primary text-[#111111]" : "bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    {tr.finishedHouse} ({houseProjectData.gallery.finished.length})
                  </button>
                  <button
                    onClick={() => setGalleryFilter("construction")}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-montserrat font-bold uppercase transition-colors ${
                      galleryFilter === "construction" ? "bg-primary text-[#111111]" : "bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    {tr.construction} ({houseProjectData.gallery.construction.length})
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredGallery().map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className="bg-[#141414] border border-white/10 overflow-hidden cursor-pointer group hover:border-primary transition-all"
                  >
                    <div className="relative aspect-square w-full bg-black/50 overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-5 h-5 text-primary" />
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
        
        {/* Bottom Full Navigation */}
        <div className="container mx-auto px-4 md:px-8 pb-16">
          <CaseNavigation currentSlug="10-house-project" position="bottom" />
        </div>

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
    </div>
  );
}
