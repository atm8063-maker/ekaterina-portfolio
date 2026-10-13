'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { doorsRealEstateDataByLang } from '@/lib/doors-real-estate-data';
import { useLanguage, PageTitle } from '@/components/language-provider';
import {
  Palette,
  Search,
  Compass,
  Maximize2,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Eye,
  X
} from 'lucide-react';

import Header from '@/components/layout/Header';
import { CaseNavigation } from '@/components/cases/case-navigation';

const t = {
  RU: {
    heroSub: "Мультиколористическая дизайн-платформа агентства премиальной недвижимости",
    navLabel: "Навигация по кейсу:", nav1: "01. 3D Шоукейс", nav2: "02. UX Исследования", nav3: "03. CJM & Гипотезы", nav4: "04. 4 Цветовые схемы", nav5: "05. Разбор Исходника", nav6: "06. Мокапы устройств", nav7: "07. Дизайн-система",
    s1eyebrow: "01 / ШОУКЕЙС", s1title: "Apple iPhone 12 Pro • 3D Retina Мокап", s1lead: "Фотореалистичный 3D-рендер мобильной версии (2716 × 2037 px) с адаптацией фильтров и каталога",
    s1label: "Мобильный опыт состоятельного покупателя", s1sub: "Быстрый подбор лота с экрана смартфона без информационного перегруза",
    s1btn: "Открыть рендер в 2.7K", s1posterTitle: "Apple iPhone 12 Pro 3D Showcase (2716 × 2037 px)", s1posterSub: "Фотореалистичный 3D-рендер мобильного интерфейса Doors Real Estate", s1zoomHint: "Кликните для зума",
    f1t: "Инлайн смарт-фильтр", f1d: "Селектор Buy / Rent и мгновенный срез категорий (Urban, Country, International) оптимизированы под управление одним пальцем.",
    f2t: "Поиск по ID в один тап", f2d: "Клиенты, получившие артикул лота в Telegram или наружной рекламе, мгновенно открывают карточку без лишней навигации.",
    f3t: "Retina-архитектура", f3d: "Полноэкранные фото интерьеров и планировок с поддержкой pinch-to-zoom жестов для быстрой оценки планировочных решений.",
    s2eyebrow: "02 / UX АНАЛИТИКА", s2title: "UX Исследования & Анализ рынка",
    s2lead: "Покупка и аренда недвижимости премиум-класса — эмоционально нагруженный процесс с чеком от десятков миллионов рублей и циклом сделки до 9 месяцев. Мы изучили узкие места классифайдов и агентств, чтобы устранить трение на пути клиента.",
    benchTitle: "Матрица бенчмаркинга платформ недвижимости", benchSub: "Сравнение ключевых параметров UX/UI классифайдов и премиум-бутиков", standard: "Стандарт Shop 4.0",
    thPlatform: "Платформа", thType: "Тип продукта", thSpeed: "Скорость поиска", thId: "Поиск по ID", thMobile: "Мобильный UX", thFocus: "Фокус конверсии", yes: "Да", no: "Нет",
    personasTitle: "Целевые персоны покупателей (User Personas)", yearsOld: "года",
    goalsTitle: "Цели и задачи:", painsTitle: "Боли на типовых сайтах:", solutionsTitle: "UX-решения в Doors Real Estate:",
    s3eyebrow: "03 / ПУТЬ ПОЛЬЗОВАТЕЛЯ", s3title: "Customer Journey Map & Продуктовые гипотезы",
    s3lead: "Путь состоятельного клиента агентства от первого клика по рекламе до согласования времени очного визита на объект с персональным брокером.",
    cjmTitle: "5 Ключевых этапов клиентского пути (CJM)", pain: "Боль:", solution: "Решение:",
    hypTitle: "4 Продуктовые гипотезы с измеримыми метриками", premise: "Предпосылка:", uxSolution: "UX-решение:", metric: "Метрика проверки", result: "Результат теста",
    s4eyebrow: "04 / ТЕОРИЯ ЦВЕТА", s4title: "4 Колористические схемы & Теория цвета",
    s4lead: "В проекте создано 4 адаптивные цветовые схемы под разные сегменты рынка. Переключайте схему прямо здесь, чтобы изучить палитру, гармонию по кругу Иттена и скроллируемый макет каждого варианта.",
    scheme: "Схема", openFull: "Открыть весь макет (5909 px)", paletteTitle: "Колористическая палитра & Роли в интерфейсе",
    harmonyTitle: "Теория цветовой гармонии", marketTitle: "Целевой сегмент рынка",
    previewLabel: "Интерактивное превью макета (высота 5909 px, скроллируйте внутри окна):", fullscreen: "На весь экран",
    s5eyebrow: "05 / РАЗБОР ИСХОДНИКА (5909 PX)", s5title: "Анатомия основного интерфейса («Исходник»)",
    s5lead: "Полноразмерный 1366-пиксельный десктопный портал, спроектированный для мгновенного снятия когнитивного напряжения состоятельного покупателя и конвертации интереса в согласование очного просмотра.",
    b1eyebrow: "Hero Banner & Слоган бренда", b1title: "«We help to open doors»", b1desc: "Главный экран встречает посетителя чистым слоганом и монументальной архитектурной фотографией на фоне. Название бренда Doors обыгрывается визуально: мы открываем двери в лучшие объекты города и мира.", b1note: "UX-решение:", b1noteText: "Никаких всплывающих окон, чат-ботов на пол-экрана и агрессивных плашек. Только воздух, свет и чистый статус агентства.",
    b2eyebrow: "Инлайн смарт-фильтр & Селектор Buy / Rent", b2title: "Мультипараметрический смарт-бар", b2desc: "Строка фильтрации вынесена на первый экран: быстрый выбор режима Buy / Rent, категории (Urban Realty, country homes, international, commercial), параметров площади и выделенного инпута Search by ID.", b2note: "Метрика:", b2noteText: "Время первичной фильтрации сократилось до 38 секунд против 114 секунд у классифайдов.",
    b3eyebrow: "Витрина Urban Realty", b3title: "Городская недвижимость премиум-класса", b3desc: "Асимметричная журнальная сетка лотов с крупными фотографиями фасадов, видовыми террасами и продуманным описанием инфраструктуры (паркинг, консьерж, приватный сад).", b3note: "UX-решение:", b3noteText: "Карточка объекта показывает не только цену, но и ключевую ценность лота (высота потолков, отделка, вид).",
    b4eyebrow: "Загородные резиденции & Зарубежные лоты", b4title: "Country Homes & International Realty", b4desc: "Специализированные разделы для покупателей загородных домов и курортных вилл с информацией об участках, водоемах, юридической чистоте и инвестиционной доходности в валюте.", b4note: "Результат:", b4noteText: "+28% рост кликов по зарубежным направлениям благодаря визуальному разделению блоков.",
    b5eyebrow: "Индикаторы масштаба & Экспертиза", b5title: "1700+ лотов в активной базе агентства", b5desc: "Блок социальных доказательств и охвата: 1700+ городских лотов, 150+ загородных усадеб, международная сеть партнерских офисов и подтвержденный опыт закрытия сделок от 1 млн $.", b5note: "Доверие:", b5noteText: "Числа подтверждают статус агентства как ключевого игрока рынка без самовосхваления.",
    b6eyebrow: "Конверсионный футер & Прямой контакт", b6title: "«Our doors are always open for you»", b6desc: "Завершающий эмоциональный акцент с кнопками прямого звонка и мессенджеров (WhatsApp, Telegram). Персональный брокер готов ответить на вопросы в течение 5 минут.", b6note: "Конверсия:", b6noteText: "+24.8% подтвержденных бронирований просмотров по сравнению со старой формой.",
    s6eyebrow: "06 / ПРЕЗЕНТАЦИОННЫЕ МОКАПЫ & УСТРОЙСТВА", s6title: "Интерфейс в реальной среде и на девайсах",
    s6lead: "Демонстрация адаптивности веб-платформы Doors Real Estate: от широкоформатных мониторов и ноутбуков до планшетов брокеров и смартфонов клиентов.",
    renderLabel: "Mockuuups Studio Render", openBtn: "Открыть",
    s7eyebrow: "07 / ДИЗАЙН-СИСТЕМА", s7title: "Дизайн-система & Типографика",
    s7lead: "Интерфейс построен на строгой сетке 1366px, швейцарских интервалах и шрифтовой иерархии Montserrat + Inter.",
    fontHierTitle: "Шрифтовая иерархия проекта (Typography Tokens)",
    headingsLabel: "Заголовки & Акценты", headingsDesc: "Геометрический гротеск без засечек с сильным характером и устойчивыми пропорциями. Используется для слоганов, названий направлений (Urban Realty, Country Homes) и ключевых метрик.",
    interfaceLabel: "Интерфейс & Наборный текст", interfaceDemo: "We help to open doors", interfaceDesc: "Универсальный экранный шрифт с оптимизированной апертурой и высотой строчных знаков. Обеспечивает исключительную читаемость цен, параметров лотов и фильтров на любых экранах.",
    canvasWidth: "Ширина холста", canvasDesc: "Базовая десктопная ширина страницы с адаптивным ресайзом до 1920px и мобильным брейкпоинтом на 390px (iPhone).",
    grid8: "8-точечный базовый грид", grid8Desc: "Все отступы, высоты инпутов и радиусы скругления кратны 8px (8, 16, 24, 32, 48, 64px) для строгой архитектурной симметрии.",
    wcag: "Контрастность WCAG", wcagDesc: "Коэффициент контрастности основного текста и кнопок превышает 7.2:1, гарантируя комфортное чтение даже на ярком солнце.",
  },
  EN: {
    heroSub: "A multi-color design platform for a premium real estate agency",
    navLabel: "Case navigation:", nav1: "01. 3D Showcase", nav2: "02. UX Research", nav3: "03. CJM & Hypotheses", nav4: "04. 4 Color Schemes", nav5: "05. Original Breakdown", nav6: "06. Device Mockups", nav7: "07. Design System",
    s1eyebrow: "01 / SHOWCASE", s1title: "Apple iPhone 12 Pro • 3D Retina Mockup", s1lead: "A photorealistic 3D render of the mobile version (2716 × 2037 px) with responsive filters and catalog",
    s1label: "The affluent buyer's mobile experience", s1sub: "Fast listing search from a phone screen with no information overload",
    s1btn: "Open the 2.7K render", s1posterTitle: "Apple iPhone 12 Pro 3D Showcase (2716 × 2037 px)", s1posterSub: "A photorealistic 3D render of the Doors Real Estate mobile interface", s1zoomHint: "Click to zoom",
    f1t: "Inline Smart Filter", f1d: "The Buy / Rent selector and instant category slice (Urban, Country, International) are tuned for one-thumb use.",
    f2t: "One-Tap ID Search", f2d: "Clients who got a listing code via Telegram or outdoor ads open the listing card instantly, no extra navigation.",
    f3t: "Retina Architecture", f3d: "Full-screen interior and floor-plan photos with pinch-to-zoom support for fast layout assessment.",
    s2eyebrow: "02 / UX ANALYTICS", s2title: "UX Research & Market Analysis",
    s2lead: "Buying or renting premium real estate is an emotionally charged process, with price tags in the tens of millions and a deal cycle up to 9 months. We studied the friction points in classifieds and agencies to remove that friction from the client journey.",
    benchTitle: "Real Estate Platform Benchmark Matrix", benchSub: "Comparing key UX/UI parameters of classifieds and premium boutiques", standard: "Shop 4.0 Standard",
    thPlatform: "Platform", thType: "Product Type", thSpeed: "Search Speed", thId: "Search by ID", thMobile: "Mobile UX", thFocus: "Conversion Focus", yes: "Yes", no: "No",
    personasTitle: "Target Buyer Personas", yearsOld: "",
    goalsTitle: "Goals and tasks:", painsTitle: "Pain points on typical sites:", solutionsTitle: "UX solutions in Doors Real Estate:",
    s3eyebrow: "03 / USER JOURNEY", s3title: "Customer Journey Map & Product Hypotheses",
    s3lead: "The affluent client's journey from the first ad click to scheduling an in-person viewing with a personal broker.",
    cjmTitle: "5 Key Customer Journey Stages (CJM)", pain: "Pain:", solution: "Solution:",
    hypTitle: "4 Product Hypotheses with Measurable Metrics", premise: "Premise:", uxSolution: "UX solution:", metric: "Verification metric", result: "Test result",
    s4eyebrow: "04 / COLOR THEORY", s4title: "4 Color Schemes & Color Theory",
    s4lead: "The project features 4 adaptive color schemes for different market segments. Switch schemes right here to explore the palette, its Itten-wheel harmony, and a scrollable layout for each variant.",
    scheme: "Scheme", openFull: "Open the full layout (5909 px)", paletteTitle: "Color Palette & Interface Roles",
    harmonyTitle: "Color Harmony Theory", marketTitle: "Target Market Segment",
    previewLabel: "Interactive layout preview (5909 px tall, scroll inside the window):", fullscreen: "Fullscreen",
    s5eyebrow: "05 / ORIGINAL BREAKDOWN (5909 PX)", s5title: "Anatomy of the Core Interface (“Original”)",
    s5lead: "The full 1366px desktop portal, designed to instantly ease the affluent buyer's cognitive load and convert interest into a scheduled in-person viewing.",
    b1eyebrow: "Hero Banner & Brand Tagline", b1title: "“We help to open doors”", b1desc: "The homepage greets visitors with a clean tagline over a monumental architectural photo. The brand name Doors is played out visually — we open doors to the best properties in the city and around the world.", b1note: "UX solution:", b1noteText: "No pop-ups, no half-screen chatbots, no aggressive banners. Just air, light, and the agency's clean standing.",
    b2eyebrow: "Inline Smart Filter & Buy / Rent Selector", b2title: "A Multi-Parameter Smart Bar", b2desc: "The filter bar sits on the first screen: a quick Buy / Rent toggle, category selection (Urban Realty, country homes, international, commercial), size parameters, and a dedicated Search by ID input.", b2note: "Metric:", b2noteText: "Initial filtering time dropped to 38 seconds, versus 114 seconds on classifieds.",
    b3eyebrow: "Urban Realty Showcase", b3title: "Premium Urban Real Estate", b3desc: "An asymmetric magazine-style listing grid with large facade photos, view terraces, and thoughtful infrastructure notes (parking, concierge, private garden).", b3note: "UX solution:", b3noteText: "Each listing card shows not just the price, but the property's key value (ceiling height, finish, view).",
    b4eyebrow: "Country Residences & International Listings", b4title: "Country Homes & International Realty", b4desc: "Dedicated sections for buyers of country houses and resort villas, with details on land, water access, legal clarity, and investment returns in hard currency.", b4note: "Result:", b4noteText: "+28% more clicks on international listings thanks to clear visual separation of the blocks.",
    b5eyebrow: "Scale Indicators & Expertise", b5title: "1,700+ Listings in the Agency's Active Database", b5desc: "A social-proof and reach block: 1,700+ urban listings, 150+ country estates, an international network of partner offices, and a track record of closing deals from $1M.", b5note: "Trust:", b5noteText: "The numbers confirm the agency's standing as a market leader without any self-promotion.",
    b6eyebrow: "Conversion Footer & Direct Contact", b6title: "“Our doors are always open for you”", b6desc: "A closing emotional beat with direct call and messenger buttons (WhatsApp, Telegram). A personal broker is ready to answer within 5 minutes.", b6note: "Conversion:", b6noteText: "+24.8% more confirmed viewing bookings compared to the old form.",
    s6eyebrow: "06 / PRESENTATION MOCKUPS & DEVICES", s6title: "The Interface in the Real World and on Devices",
    s6lead: "Showing off the Doors Real Estate platform's responsiveness: from wide-format monitors and laptops to broker tablets and client smartphones.",
    renderLabel: "Mockuuups Studio Render", openBtn: "Open",
    s7eyebrow: "07 / DESIGN SYSTEM", s7title: "Design System & Typography",
    s7lead: "The interface is built on a strict 1366px grid, Swiss-style spacing, and a Montserrat + Inter type hierarchy.",
    fontHierTitle: "Project Typography Hierarchy (Typography Tokens)",
    headingsLabel: "Headings & Accents", headingsDesc: "A geometric sans-serif with strong character and stable proportions. Used for taglines, segment names (Urban Realty, Country Homes), and key metrics.",
    interfaceLabel: "Interface & Body Text", interfaceDemo: "We help to open doors", interfaceDesc: "A versatile screen typeface with a tuned aperture and x-height. Delivers excellent readability for prices, listing specs, and filters on any screen.",
    canvasWidth: "Canvas Width", canvasDesc: "The base desktop page width, responsive up to 1920px with a mobile breakpoint at 390px (iPhone).",
    grid8: "8-Point Base Grid", grid8Desc: "All spacing, input heights, and corner radii are multiples of 8px (8, 16, 24, 32, 48, 64px) for strict architectural symmetry.",
    wcag: "WCAG Contrast", wcagDesc: "The contrast ratio of primary text and buttons exceeds 7.2:1, guaranteeing comfortable reading even in bright sunlight.",
  },
};

export function DoorsRealEstateCase() {
  const { lang } = useLanguage();
  const tr = t[lang];
  const { meta, metrics, schemes, competitors, personas, cjm, hypotheses, mockups } = doorsRealEstateDataByLang[lang];

  const [selectedSchemeId, setSelectedSchemeId] = useState<string>('original');
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; subtitle?: string } | null>(null);

  const selectedScheme = schemes.find(s => s.id === selectedSchemeId) || schemes[0];

  // Navigating here via a case's prev/next link doesn't always land at the top.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background text-[#E0E0E0] selection:bg-primary selection:text-black font-inter relative">
      <PageTitle titleRu="Кейс: Doors Real Estate: Премиум-агентство недвижимости — Екатерина Разумова" titleEn="Case Study: Doors Real Estate: Premium Agency — Ekaterina Razumova" />
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
        <CaseNavigation currentSlug="08-mockup-real-estate" position="top" className="mb-6" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-primary font-montserrat font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            {meta.category}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-montserrat text-white tracking-tight uppercase leading-[1.1] mb-6">
            DOORS REAL ESTATE
            <span className="block text-xl sm:text-2xl lg:text-3xl font-medium text-white/70 mt-3 normal-case tracking-normal">
              {tr.heroSub}
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
                className="bg-surface border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all group"
              >
                <div className="text-2xl sm:text-3xl font-bold font-montserrat text-white group-hover:text-primary transition-colors">
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
            <span className="text-white/40 uppercase tracking-wider mr-2 text-[11px]">{tr.navLabel}</span>
            <a href="#showcase" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">{tr.nav1}</a>
            <a href="#research" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">{tr.nav2}</a>
            <a href="#cjm" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">{tr.nav3}</a>
            <a href="#schemes" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">{tr.nav4}</a>
            <a href="#portal" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">{tr.nav5}</a>
            <a href="#mockups" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">{tr.nav6}</a>
            <a href="#system" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">{tr.nav7}</a>
          </div>
        </div>
      </section>

      {/* Main Single-Scroll Long-Read Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-28">

        {/* 1. 3D RETINA SHOWCASE */}
        <section id="showcase" className="scroll-mt-24 space-y-8">
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

          <div className="bg-surface border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
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
                  src: "/Кейсы/08-mockup-real-estate/figma_exports/05_iphone_mockup.webp",
                  title: "Apple iPhone 12 Pro 3D Showcase (2716 × 2037 px)",
                  subtitle: "Фотореалистичный 3D-рендер мобильного интерфейса Doors Real Estate"
                })}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-primary hover:text-black text-white text-xs font-montserrat font-semibold transition-all border border-white/10 hover:border-primary"
              >
                <Maximize2 className="w-4 h-4" />
                <span>{tr.s1btn}</span>
              </button>
            </div>

            {/* Interactive Mockup Container */}
            <div 
              onClick={() => setSelectedImage({
                src: "/Кейсы/08-mockup-real-estate/figma_exports/05_iphone_mockup.webp",
                title: "Apple iPhone 12 Pro 3D Showcase (2716 × 2037 px)",
                subtitle: "Фотореалистичный 3D-рендер мобильного интерфейса Doors Real Estate"
              })}
              className="relative w-full aspect-[4/3] max-h-[640px] bg-black/50 rounded-xl overflow-hidden cursor-pointer group border border-white/10 hover:border-primary/50 transition-all flex items-center justify-center p-4"
            >
              <Image
                src="/Кейсы/08-mockup-real-estate/figma_exports/05_iphone_mockup.webp"
                alt="Doors Real Estate iPhone 12 Pro 3D Showcase"
                fill
                className="object-contain p-2 sm:p-6 group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md text-[11px] text-white/70 border border-white/10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-3.5 h-3.5 text-primary" />
                <span>{tr.s1zoomHint}</span>
              </div>
            </div>

            {/* 3 Key UX features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-black/40 border border-white/5 p-5 rounded-xl">
                <div className="text-sm font-bold font-montserrat uppercase tracking-wider text-white mb-1.5">
                  {tr.f1t}
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  {tr.f1d}
                </p>
              </div>
              <div className="bg-black/40 border border-white/5 p-5 rounded-xl">
                <div className="text-sm font-bold font-montserrat uppercase tracking-wider text-white mb-1.5">
                  {tr.f2t}
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  {tr.f2d}
                </p>
              </div>
              <div className="bg-black/40 border border-white/5 p-5 rounded-xl">
                <div className="text-sm font-bold font-montserrat uppercase tracking-wider text-white mb-1.5">
                  {tr.f3t}
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  {tr.f3d}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. UX RESEARCH & BENCHMARKING */}
        <section id="research" className="scroll-mt-24 space-y-10">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-montserrat font-bold text-primary uppercase tracking-widest mb-1">
              {tr.s2eyebrow}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
              {tr.s2title}
            </h2>
            <p className="text-sm text-white/70 font-sans mt-2 max-w-3xl leading-relaxed">
              {tr.s2lead}
            </p>
          </div>

          {/* Competitor Benchmark Matrix */}
          <div className="bg-surface border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-white uppercase tracking-tight">
                  {tr.benchTitle}
                </h3>
                <p className="text-xs text-white/60 font-sans mt-1">
                  {tr.benchSub}
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-montserrat font-semibold text-primary">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>{tr.standard}</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-white/50 uppercase font-montserrat tracking-wider">
                    <th className="pb-3 pr-4 font-semibold">{tr.thPlatform}</th>
                    <th className="pb-3 px-4 font-semibold">{tr.thType}</th>
                    <th className="pb-3 px-4 font-semibold">{tr.thSpeed}</th>
                    <th className="pb-3 px-4 font-semibold">{tr.thId}</th>
                    <th className="pb-3 px-4 font-semibold">{tr.thMobile}</th>
                    <th className="pb-3 pl-4 font-semibold">{tr.thFocus}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-sans">
                  {competitors.map((c, idx) => (
                    <tr 
                      key={idx} 
                      className={`transition-colors ${
                        c.name === 'Doors Real Estate' 
                          ? 'bg-primary/10 text-white font-medium' 
                          : 'hover:bg-white/5 text-white/80'
                      }`}
                    >
                      <td className="py-4 pr-4 font-bold font-montserrat text-white flex items-center gap-2">
                        {c.name === 'Doors Real Estate' && (
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        )}
                        {c.name}
                      </td>
                      <td className="py-4 px-4 text-white/70">{c.type}</td>
                      <td className="py-4 px-4">{c.searchSpeed}</td>
                      <td className="py-4 px-4">
                        {c.directIdSearch ? (
                          <span className="inline-flex items-center gap-1 text-primary font-bold font-montserrat">
                            <CheckCircle2 className="w-3.5 h-3.5" />{tr.yes}
                          </span>
                        ) : (
                          <span className="text-white/40">{tr.no}</span>
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
              {tr.personasTitle}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {personas.map((p, idx) => (
                <div 
                  key={idx}
                  className="bg-surface border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-[#09253B] flex items-center justify-center text-black font-black font-montserrat text-lg border border-white/20 shadow-lg">
                      {p.avatar}
                    </div>
                    <div>
                      <div className="text-lg font-bold font-montserrat text-white uppercase tracking-tight">
                        {p.name}, {p.age} {tr.yearsOld}
                      </div>
                      <div className="text-xs text-primary font-medium mt-0.5 font-montserrat">
                        {p.role}
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/40 border-l-2 border-primary p-4 rounded-r-lg text-xs italic text-white/80 leading-relaxed font-sans">
                    &ldquo;{p.quote}&rdquo;
                  </div>

                  <div className="space-y-4 text-xs font-sans">
                    <div>
                      <div className="font-montserrat font-bold uppercase tracking-wider text-white/60 mb-2 text-[11px]">
                        {tr.goalsTitle}
                      </div>
                      <ul className="space-y-1.5 text-white/80">
                        {p.goals.map((g, gIdx) => (
                          <li key={gIdx} className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{g}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="font-montserrat font-bold uppercase tracking-wider text-white/60 mb-2 text-[11px]">
                        {tr.painsTitle}
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
                      <div className="font-montserrat font-bold uppercase tracking-wider text-primary mb-2 text-[11px]">
                        {tr.solutionsTitle}
                      </div>
                      <ul className="space-y-1.5 text-white/90">
                        {p.uxSolutions.map((sol, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
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

          {/* CJM Horizontal Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-montserrat uppercase text-white tracking-tight">
              {tr.cjmTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {cjm.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-surface border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-primary/50 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-primary">
                        {item.step}
                      </span>
                      <span className="text-xs font-bold font-montserrat px-2 py-0.5 rounded bg-white/5 border border-white/10 text-primary">
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
                      <span className="font-semibold text-rose-400">{tr.pain}</span> {item.painPoint}
                    </div>
                    <div className="text-white/90 leading-snug">
                      <span className="font-semibold text-primary">{tr.solution}</span> {item.solution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Hypotheses Grid */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold font-montserrat uppercase text-white tracking-tight">
              {tr.hypTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hypotheses.map((h) => (
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
                      {h.status}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold font-montserrat text-white">
                    {h.title}
                  </h4>

                  <div className="space-y-2 text-xs font-sans">
                    <div>
                      <span className="text-white/50 uppercase font-montserrat font-bold tracking-wider text-[10px] block mb-0.5">
                        {tr.premise}
                      </span>
                      <p className="text-white/80 leading-relaxed">{h.premise}</p>
                    </div>

                    <div className="pt-2 border-t border-white/5">
                      <span className="text-white/50 uppercase font-montserrat font-bold tracking-wider text-[10px] block mb-0.5">
                        {tr.uxSolution}
                      </span>
                      <p className="text-white/90 leading-relaxed">{h.solution}</p>
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

        {/* 4. INTERACTIVE 4-SCHEMES COLOR THEORY */}
        <section id="schemes" className="scroll-mt-24 space-y-10">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-montserrat font-bold text-primary uppercase tracking-widest mb-1">
              {tr.s4eyebrow}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
              {tr.s4title}
            </h2>
            <p className="text-sm text-white/70 font-sans mt-2 max-w-3xl leading-relaxed">
              {tr.s4lead}
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
                    ? 'bg-surface border-primary shadow-lg shadow-[#14F1D9]/10'
                    : 'bg-black/30 border-white/10 hover:border-white/25'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div 
                    className="w-3.5 h-3.5 rounded-full border border-white/20" 
                    style={{ backgroundColor: s.accentColor }} 
                  />
                  <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-white/60">
                    {tr.scheme} {idx + 1} {s.id === 'original' && '★'}
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
          <div className="bg-surface border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-montserrat font-bold uppercase tracking-wider mb-3 bg-primary/10 text-primary border border-primary/30">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-primary hover:text-black text-white text-xs font-montserrat font-semibold transition-all border border-white/20 self-start"
              >
                <Maximize2 className="w-4 h-4" />
                <span>{tr.openFull}</span>
              </button>
            </div>

            {/* Color Swatches */}
            <div>
              <h4 className="text-xs font-montserrat font-bold uppercase tracking-widest text-white/50 mb-4">
                {tr.paletteTitle}
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
                <div className="text-xs font-montserrat font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Compass className="w-4 h-4" />
                  {tr.harmonyTitle}
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                  {selectedScheme.harmonyTheory}
                </p>
              </div>

              <div className="bg-black/30 border border-white/5 p-5 rounded-xl">
                <div className="text-xs font-montserrat font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  {tr.marketTitle}
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
                  {tr.previewLabel}
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
                    className="text-[11px] text-primary hover:underline flex items-center gap-1 font-montserrat"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>{tr.fullscreen}</span>
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
                    style={{ aspectRatio: '444 / 1920' }}
                  >
                    <Image
                      src={selectedScheme.imageSrc}
                      alt={selectedScheme.name}
                      fill
                      className="object-cover object-top"
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

          {/* 6 Structural Breakdown Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-primary uppercase tracking-wider mb-3">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px]">1</span>
                {tr.b1eyebrow}
              </div>
              <h3 className="text-lg font-bold font-montserrat text-white mb-2 uppercase tracking-tight">
                {tr.b1title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                {tr.b1desc}
              </p>
              <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 text-[11px] text-white/60 font-sans">
                <strong>{tr.b1note}</strong> {tr.b1noteText}
              </div>
            </div>

            <div className="bg-surface border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-primary uppercase tracking-wider mb-3">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px]">2</span>
                {tr.b2eyebrow}
              </div>
              <h3 className="text-lg font-bold font-montserrat text-white mb-2 uppercase tracking-tight">
                {tr.b2title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                {tr.b2desc}
              </p>
              <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 text-[11px] text-white/60 font-sans">
                <strong>{tr.b2note}</strong> {tr.b2noteText}
              </div>
            </div>

            <div className="bg-surface border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-primary uppercase tracking-wider mb-3">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px]">3</span>
                {tr.b3eyebrow}
              </div>
              <h3 className="text-lg font-bold font-montserrat text-white mb-2 uppercase tracking-tight">
                {tr.b3title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                {tr.b3desc}
              </p>
              <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 text-[11px] text-white/60 font-sans">
                <strong>{tr.b3note}</strong> {tr.b3noteText}
              </div>
            </div>

            <div className="bg-surface border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-primary uppercase tracking-wider mb-3">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px]">4</span>
                {tr.b4eyebrow}
              </div>
              <h3 className="text-lg font-bold font-montserrat text-white mb-2 uppercase tracking-tight">
                {tr.b4title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                {tr.b4desc}
              </p>
              <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 text-[11px] text-white/60 font-sans">
                <strong>{tr.b4note}</strong> {tr.b4noteText}
              </div>
            </div>

            <div className="bg-surface border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-primary uppercase tracking-wider mb-3">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px]">5</span>
                {tr.b5eyebrow}
              </div>
              <h3 className="text-lg font-bold font-montserrat text-white mb-2 uppercase tracking-tight">
                {tr.b5title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                {tr.b5desc}
              </p>
              <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 text-[11px] text-white/60 font-sans">
                <strong>{tr.b5note}</strong> {tr.b5noteText}
              </div>
            </div>

            <div className="bg-surface border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-primary uppercase tracking-wider mb-3">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px]">6</span>
                {tr.b6eyebrow}
              </div>
              <h3 className="text-lg font-bold font-montserrat text-white mb-2 uppercase tracking-tight">
                {tr.b6title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                {tr.b6desc}
              </p>
              <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 text-[11px] text-white/60 font-sans">
                <strong>{tr.b6note}</strong> {tr.b6noteText}
              </div>
            </div>
          </div>
        </section>

        {/* 6. PRESENTATION MOCKUPS & DEVICES */}
        <section id="mockups" className="scroll-mt-24 space-y-10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockups.map((mockup, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage({
                  src: mockup.src,
                  title: mockup.title,
                  subtitle: mockup.type
                })}
                className="bg-surface border border-white/10 rounded-2xl overflow-hidden group hover:border-primary/50 transition-all flex flex-col cursor-pointer"
              >
                <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
                  <Image
                    src={mockup.src}
                    alt={mockup.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-montserrat font-semibold text-primary border border-white/10 uppercase tracking-wider">
                    {mockup.type}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md p-2 rounded-lg text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold font-montserrat text-white group-hover:text-primary transition-colors leading-snug">
                      {mockup.title}
                    </h3>
                    <p className="text-xs text-white/60 font-sans leading-relaxed mt-2">
                      {mockup.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40 font-montserrat">
                    <span>{tr.renderLabel}</span>
                    <span className="text-primary font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      {tr.openBtn}
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
            <div className="text-xs font-montserrat font-bold text-primary uppercase tracking-widest mb-1">
              {tr.s7eyebrow}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-montserrat uppercase text-white tracking-tight">
              {tr.s7title}
            </h2>
            <p className="text-sm text-white/70 font-sans mt-2 max-w-3xl leading-relaxed">
              {tr.s7lead}
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
                  DOORS REAL ESTATE
                </div>
                <p className="text-xs text-white/60 font-sans leading-relaxed">
                  {tr.headingsDesc}
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] font-montserrat text-white/70 pt-2 border-t border-white/10">
                  <span className="px-2.5 py-1 rounded bg-white/5">Bold (700)</span>
                  <span className="px-2.5 py-1 rounded bg-white/5">SemiBold (600)</span>
                  <span className="px-2.5 py-1 rounded bg-white/5">Medium (500)</span>
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
                  We help to open doors
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

          {/* Grid standards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface border border-white/10 p-6 rounded-2xl">
              <div className="text-xs font-montserrat font-bold text-primary uppercase tracking-wider mb-2">
                {tr.canvasWidth}
              </div>
              <div className="text-2xl font-bold font-montserrat text-white mb-2">
                1366 px
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                {tr.canvasDesc}
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
                {tr.wcag}
              </div>
              <div className="text-2xl font-bold font-montserrat text-white mb-2">
                AAA Rating
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                {tr.wcagDesc}
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
