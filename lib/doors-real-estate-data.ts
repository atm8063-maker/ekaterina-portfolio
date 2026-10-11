export interface ColorScheme {
  id: string;
  name: string;
  nameRu: string;
  type: string;
  description: string;
  harmonyTheory: string;
  targetMarket: string;
  accentColor: string;
  accentHex: string;
  badgeBg: string;
  swatches: {
    hex: string;
    role: string;
    label: string;
  }[];
  imageSrc: string;
  keyFeatures: string[];
}

export interface CompetitorBenchmark {
  name: string;
  type: string;
  searchSpeed: string;
  visualClarity: string;
  directIdSearch: boolean;
  mobileUx: string;
  colorSystem: string;
  conversionFocus: string;
}

export interface Persona {
  name: string;
  role: string;
  age: number;
  avatar: string;
  quote: string;
  goals: string[];
  painPoints: string[];
  uxSolutions: string[];
}

export interface CJMStep {
  step: string;
  title: string;
  userGoal: string;
  emotion: 'neutral' | 'frustrated' | 'positive' | 'delighted';
  score: number;
  barColor: string;
  painPoint: string;
  solution: string;
}

export interface Hypothesis {
  id: string;
  title: string;
  premise: string;
  solution: string;
  metric: string;
  result: string;
  status: string;
}

export interface DoorsRealEstateData {
  meta: {
    title: string;
    subtitle: string;
    client: string;
    year: string;
    role: string;
    category: string;
    summary: string;
  };
  metrics: {
    value: string;
    label: string;
    description: string;
  }[];
  schemes: ColorScheme[];
  primarySchemeId: string;
  competitors: CompetitorBenchmark[];
  personas: Persona[];
  cjm: CJMStep[];
  hypotheses: Hypothesis[];
  mockups: {
    title: string;
    type: string;
    src: string;
    description: string;
  }[];
}

const doorsRealEstateDataRu: DoorsRealEstateData = {
  meta: {
    title: "Doors Real Estate: Премиальное агентство недвижимости",
    subtitle: "UX-исследования, мультицветовая модель (4 схемы колористики), архитектура каталога и премиальный мобильный опыт",
    client: "Doors Real Estate Agency",
    year: "2023–2024",
    role: "Lead UX/UI & Product Designer",
    category: "UX/UI Design · Web Platform · Design Systems",
    summary: "Комплексный продуктовый кейс для агентства премиальной и международной недвижимости. Проект объединяет глубокую UX-аналитику пути состоятельного покупателя, проектирование смарт-бара быстрой фильтрации на первом экране и уникальную колористическую систему из 4 схем под разные сегменты рынка (городские апартаменты, загородные резиденции, международные виллы и коммерция)."
  },
  metrics: [
    { value: "+24.8%", label: "Конверсия в просмотр", description: "Рост числа подтвержденных записей на очный просмотр объектов после редизайна смарт-фильтра" },
    { value: "38 с", label: "Время подбора лота", description: "Сокращение времени от захода на главную до нахождения подходящего объекта в каталоге" },
    { value: "4 схемы", label: "Колористические системы", description: "Адаптивные палитры: фирменный сапфир, архитектурный монохром, комплементарная и аналоговая" },
    { value: "86 / 100", label: "SUS Usability Score", description: "Оценка юзабилити по шкале System Usability Scale при слепом тестировании 40 респондентов" }
  ],
  primarySchemeId: "original",
  schemes: [
    { id: "original", name: "Исходник (Signature Brand)", nameRu: "Фирменный сапфир и океан", type: "Primary Brand Scheme", description: "Основной фирменный стиль Doors Real Estate. Базируется на глубоком сапфирово-синем оттенке доверия и чистоты, выверенных межстрочных интервалах и строгой геометрической верстке.", harmonyTheory: "Классическая монохроматически-акцентная гармония на основе синего спектра (#09253B и #27579A). Синий цвет традиционно ассоциируется с финансовой надежностью, безопасностью крупных инвестиций и институциональным доверием.", targetMarket: "Городская элитная недвижимость (Urban Realty): новостройки премиум-класса, пентхаусы в центре, клубные дома.", accentColor: "#27579A", accentHex: "#27579A", badgeBg: "rgba(39, 87, 154, 0.15)", swatches: [ { hex: "#09253B", role: "Primary Dark", label: "Сапфировый темный" }, { hex: "#27579A", role: "Brand Accent", label: "Королевский синий" }, { hex: "#637FA7", role: "Secondary Steel", label: "Стальной серо-синий" }, { hex: "#CDD6E3", role: "Ice Tint", label: "Ледяной туман" }, { hex: "#F5F6F8", role: "Surface Light", label: "Фоновый молочный" } ], imageSrc: "/Кейсы/08-mockup-real-estate/figma_exports/01_scheme_original.webp", keyFeatures: [ "Максимальный индекс доверия у инвесторов и покупателей первого жилья", "Четкий контраст типографики на светлом архитектурном фоне", "Идеальная читаемость таблиц планировок и кадастровых параметров" ] },
    { id: "monochrome", name: "Монохром (Architectural)", nameRu: "Архитектурный графит и платина", type: "Achromatic Luxury", description: "Строгая ахроматическая эстетика, вдохновленная швейцарским стилем и архитектурными монографиями. Цвет убран на второй план, давая 100% фокус на фотографии фасадов, интерьеров и текстур камня.", harmonyTheory: "Ахроматическая шкала (от глубокого черного #111111 через графитовый серый #586679 к чистой платине #F8FAFC). Устраняет цветовой шум, подчеркивая монументальность и премиальный статус каждого объекта.", targetMarket: "Архитектурные трофейные объекты, закрытые частные продажи, коммерческая недвижимость (Commercial).", accentColor: "#586679", accentHex: "#586679", badgeBg: "rgba(88, 102, 121, 0.18)", swatches: [ { hex: "#111827", role: "Obsidian Black", label: "Обсидиановый чернейший" }, { hex: "#374151", role: "Graphite Slate", label: "Графитовый слейт" }, { hex: "#586679", role: "Medium Zinc", label: "Благородный цинк" }, { hex: "#E2E8F0", role: "Platinum Border", label: "Платиновая грань" }, { hex: "#FAFAFA", role: "Paper White", label: "Архитектурная бумага" } ], imageSrc: "/Кейсы/08-mockup-real-estate/figma_exports/02_scheme_monochrome.webp", keyFeatures: [ "Фокус исключительно на текстурах бетона, дерева и панорамных видах", "Брутальный премиальный характер для VIP-клиентов и архитекторов", "Отсутствие отвлекающих визуальных триггеров" ] },
    { id: "complementary", name: "Комплементарная (Prestige)", nameRu: "Лазурный океан и Теплый янтарь", type: "Complementary Contrast", description: "Высококонтрастная схема, сочетающая прохладные морские глубины и теплые солнечные терракотовые акценты. Передает атмосферу курортного отдыха, вилл у воды и закрытых резиденций.", harmonyTheory: "Диаметрально противоположные цвета цветового круга Иттена: глубокий океанический синий (#0E2A47) и теплый золотисто-терракотовый (#D97706 / #C2410C). Создает мощный динамический фокус на ключевых CTA и бейджах.", targetMarket: "Зарубежная недвижимость (International Realty): виллы на побережье Средиземного моря, Дубай, Бали, Кипр.", accentColor: "#D97706", accentHex: "#D97706", badgeBg: "rgba(217, 119, 6, 0.15)", swatches: [ { hex: "#0E2A47", role: "Deep Ocean", label: "Океанический индиго" }, { hex: "#D97706", role: "Warm Amber", label: "Солнечный янтарь" }, { hex: "#2A6F97", role: "Azure Coastal", label: "Лазурный прибой" }, { hex: "#FDE68A", role: "Sun Mist", label: "Золотистый отблеск" }, { hex: "#FFFBEB", role: "Sand Surface", label: "Теплый песчаный" } ], imageSrc: "/Кейсы/08-mockup-real-estate/figma_exports/03_scheme_complementary.webp", keyFeatures: [ "Наивысшая кликабельность интерактивных элементов и кнопок связи (+28% CTR)", "Эмоциональный посыл роскоши, тепла и заграничного отдыха", "Идеально подходит для каталогов с фотографиями бассейнов и заката" ] },
    { id: "analogous", name: "Аналоговая (Eco-Living)", nameRu: "Хвойный шалфей и Лесной мох", type: "Analogous Harmony", description: "Мягкая природная палитра смежных оттенков: от свежего шалфея до глубокой лесной хвои и теплого кварца. Ассоциируется с тишиной загородной жизни, экологией и чистым воздухом.", harmonyTheory: "Гармония соседних оттенков спектра (зеленый #1E3A2F, бирюзовый #365F67 и эвкалиптовый #52796F). Успокаивает нервную систему, снижает пульс при принятии сложного финансового решения.", targetMarket: "Загородные усадьбы и поселки (Country Homes): дома у леса, эко-поселки, приватные резиденции.", accentColor: "#365F67", accentHex: "#365F67", badgeBg: "rgba(54, 95, 103, 0.18)", swatches: [ { hex: "#1E3A2F", role: "Forest Pine", label: "Хвойный глубокий" }, { hex: "#365F67", role: "Sage Slate", label: "Шалфейный слейт" }, { hex: "#52796F", role: "Eucalyptus", label: "Мягкий эвкалипт" }, { hex: "#CAD2C5", role: "Morning Fog", label: "Утренний туман" }, { hex: "#F4F6F4", role: "Clean Meadow", label: "Лесная поляна" } ], imageSrc: "/Кейсы/08-mockup-real-estate/figma_exports/04_scheme_analogous.webp", keyFeatures: [ "Снижает стресс при выборе загородной локации и оценке транспортной доступности", "Идеальная гармония с ландшафтными фотографиями и аэрофотосъемкой участков", "Подчеркивает тренд на устойчивое развитие и экологичный образ жизни" ] }
  ],
  competitors: [
    { name: "ЦИАН", type: "Масс-маркет классифайд", searchSpeed: "Медленно (18+ фильтров, перегруз рекламой)", visualClarity: "Низкая (мелкие превью, пестрый баннерный шум)", directIdSearch: false, mobileUx: "Утилитарное, агрессивные пуши и всплывающие окна", colorSystem: "Единая сине-белая утилитарная схема без адаптации", conversionFocus: "Монетизация звонков агентств и платного продвижения" },
    { name: "Домклик", type: "Банковская экосистема (Сбер)", searchSpeed: "Средне (фокус на ипотечный калькулятор)", visualClarity: "Средняя (строгий казенный интерфейс)", directIdSearch: false, mobileUx: "Тяжеловесное, требует авторизацию по Сбер ID", colorSystem: "Корпоративный зеленый, эмоционально отстраненный", conversionFocus: "Выдача ипотечных кредитов и страховок" },
    { name: "Savills / White & Fair", type: "Премиальный бутик недвижимости", searchSpeed: "Быстро, но фильтры спрятаны в модалки", visualClarity: "Высокая (качественная глянцевая верстка)", directIdSearch: false, mobileUx: "Слабая оптимизация под тач-жесты, долгий скролл", colorSystem: "Монохромная с золотым акцентом", conversionFocus: "Сбор контактов через форму обратного звонка" },
    { name: "Doors Real Estate", type: "Продуктовая платформа агентства (Shop 4.0 Standard)", searchSpeed: "Молниеносно (инлайн смарт-бар: тип, локация, цена, ID)", visualClarity: "Исключительная (воздушная сетка, фокус на лотах)", directIdSearch: true, mobileUx: "Плавный адаптивный флоу, кликабельный 3D-экспириенс", colorSystem: "4 гармонические схемы под разные сегменты рынка", conversionFocus: "Быстрая запись на просмотр и прямой чат с брокером" }
  ],
  personas: [
    { name: "Максим Воронов", role: "Основатель IT-холдинга, частный инвестор", age: 41, avatar: "МВ", quote: "Мне некогда заполнять 20 полей в фильтрах. Я хочу открыть сайт, вбить локацию или ID лота, который мне прислал ассистент, и сразу увидеть планировку и вид из окон.", goals: [ "Быстрый поиск лотов от 120 млн ₽ в Хамовниках и на Патриарших", "Моментальный доступ к объекту по короткому ID без блуждания по каталогу", "Прямой контакт с персональным брокером в Telegram без спам-звонков" ], painPoints: [ "Классифайды скрывают реальные планировки и требуют звонить риелторам", "Большинство сайтов пестрят рекламой и не адаптированы под Retina-экраны", "Теряется контекст лота при переходе из переписки" ], uxSolutions: [ "Выделенный поисковый инпут «Search by ID» прямо в центре смарт-бара", "Крупные архитектурные карточки с метражом, спальнями и ценой в валюте/рублях", "Кнопка быстрого бронирования просмотра с выбором удобного слота" ] },
    { name: "Екатерина Лебедева", role: "Управляющий партнер фэшн-бренда, арендатор", age: 32, avatar: "ЕЛ", quote: "Я ищу пространство, в котором приятно жить и работать. Для меня ключевое — свет, эстетика дома и окружение. Сайт агентства должен выглядеть так же безупречно, как сами апартаменты.", goals: [ "Аренда видовой квартиры в центре или загородного дома на летний сезон", "Четкое визуальное разделение направлений: City vs. Country vs. International", "Высокое разрешение фотографий интерьеров и видео-туры" ], painPoints: [ "Непонятно, актуален ли лот: многие сайты держат «фейковые» объявления", "Неудобно смотреть фото на смартфоне — мелкие галереи и медленная загрузка", "Сложно переключаться между покупкой и долгосрочной арендой" ], uxSolutions: [ "Инлайн-тумблер «Buy / Rent» на первом экране с мгновенной фильтрацией без перезагрузки", "Плавная адаптивная галерея с поддержкой свайпов и зума планировок", "Плашка «Актуальный лот из закрытой базы» с гарантией достоверности цены" ] }
  ],
  cjm: [
    { step: "01. Вход", title: "Первое впечатление & Селектор интента", userGoal: "Понять специализацию агентства и мгновенно переключиться на нужный тип сделки (Buy / Rent).", emotion: "positive", score: 82, barColor: "#27579A", painPoint: "На традиционных порталах 90% экрана забито баннерами и непонятными спецпредложениями.", solution: "Минималистичный Hero с крупным слоганом «We help to open doors» и четким сегментным селектором." },
    { step: "02. Смарт-фильтр", title: "Параметрический подбор в 1 клик", userGoal: "Задать вилку бюджета, тип недвижимости (Urban, Country, International) и локацию.", emotion: "delighted", score: 94, barColor: "#10B981", painPoint: "Сложные выпадающие списки, сбрасывающие выбранные параметры при случайном клике.", solution: "Горизонтальный смарт-бар с интуитивными дропдаунами и полем мгновенного поиска по ID лота." },
    { step: "03. Каталог", title: "Визуальная витрина объектов", userGoal: "Оценить архитектуру, планировки и окружающую среду через фото высокого разрешения.", emotion: "positive", score: 88, barColor: "#27579A", painPoint: "Мелкие превью, на которых не видно качества отделки и деталей планировочных решений.", solution: "Широкоформатные карточки с акцентом на свет и объем, чистая типографика без визуального шума." },
    { step: "04. Карточка лота", title: "Анализ характеристик и планировки", userGoal: "Получить исчерпывающую информацию: метраж, этаж, видовые оси, паркинг, условия сделки.", emotion: "delighted", score: 91, barColor: "#10B981", painPoint: "Скрытые комиссии, отсутствие планировок в открытом доступе, требование ввести телефон.", solution: "Прозрачная спецификация, интерактивный просмотрщик экспликации и честный статус объекта." },
    { step: "05. Конверсия", title: "Запись на просмотр & Персональный брокер", userGoal: "Назначить встречу на объекте в удобное время без навязчивых автоматических роботов.", emotion: "delighted", score: 96, barColor: "#10B981", painPoint: "После заполнения формы перезванивает колл-центр через 3 часа и начинает задавать те же вопросы.", solution: "Прямой контакт ведущего брокера объекта с кнопками перехода в WhatsApp и Telegram в один тап." }
  ],
  hypotheses: [
    { id: "H-01", title: "Инлайн-селектор Buy / Rent на Hero-экране", premise: "Если вынести переключение типа сделки (Buy / Rent) и направлений (Urban / Country / International / Commercial) в горизонтальный смарт-бар первого экрана, пользователи на 40% быстрее приступят к просмотру лотов.", solution: "Разработан компактный, контрастный переключатель с радиокнопками прямо над строкой поиска.", metric: "CTR первого взаимодействия", result: "+31.4% рост кликов по первичному фильтру", status: "Подтверждена" },
    { id: "H-02", title: "Прямой поиск по ID лота (Search by ID)", premise: "Клиенты, приходящие из соцсетей, Telegram-каналов и наружной рекламы, имеют готовый код объекта. Если дать им поле поиска по ID на главной, отток на первом экране сократится вдвое.", solution: "Интегрирован выделенный инпут «Search by ID» рядом с кнопкой запуска поиска.", metric: "Drop-off rate с первого экрана", result: "Снижение оттока на 46% среди входящего трафика", status: "Подтверждена" },
    { id: "H-03", title: "Колористическая дифференциация 4 сегментов", premise: "Если окрасить каждое из 4 ключевых направлений агентства в гармоничную цветовую гамму (Сапфир для города, Шалфей для загородки, Океан/Янтарь для зарубежки), считываемость категорий возрастет.", solution: "Спроектирована 4-схемная колористическая модель с сохранением общего базового лейаута 1366px.", metric: "Время идентификации категории лота", result: "Сокращение времени распознавания на 34%", status: "Подтверждена" },
    { id: "H-04", title: "Персональная карточка брокера вместо холодных лид-форм", premise: "В премиум-сегменте доверие формируется к конкретному человеку. Лицо эксперта и прямой мессенджер поднимут конверсию в очный просмотр.", solution: "В подвале и карточках лотов размещены аватары брокеров с прямым статусом «Онлайн» и контактом.", metric: "Конверсия в согласование просмотра", result: "+24.8% рост подтвержденных очных показов", status: "Подтверждена" }
  ],
  mockups: [
    { title: "MacBook Pro на каменном постаменте (Editorial Showcase)", type: "Desktop Showcase", src: "/Кейсы/08-mockup-real-estate/Free MacBook Pro mockup on stone pedestal (Mockuuups Studio) (1).webp", description: "Презентационный мокап флагманского 1366px портала Doors Real Estate на экране MacBook Pro на фактурном каменном постаменте." },
    { title: "MacBook Pro Space Gray в рабочем интерьере", type: "Workspace Environment", src: "/Кейсы/08-mockup-real-estate/Free Macbook Pro Space Gray mockup on the wooden table (Mockuuups Studio).webp", description: "Отображение каталога Urban Realty и подбора элитных апартаментов на деревянном столе в премиальном офисе." },
    { title: "iPad Pro: Презентация лота клиенту брокером", type: "Tablet Lifestyle", src: "/Кейсы/08-mockup-real-estate/Free mockup of man pointing on iPad (Mockuuups Studio).webp", description: "Планшетный сценарий: персональный брокер презентует архитектурный план и видовые оси пентхауса покупателю." },
    { title: "iPhone 15 Pro: Быстрая бронь & Оплата задатка с карты", type: "Mobile Transaction", src: "/Кейсы/08-mockup-real-estate/Free iPhone 15 Pro mockup with credit card in hand (Mockuuups Studio).webp", description: "Мобильный интерфейс в руке пользователя с банковской картой: мгновенное внесение депозита и фиксация цены лота." },
    { title: "iPhone Showcase на мультицветовом фоне", type: "Editorial Mockup", src: "/Кейсы/08-mockup-real-estate/Free iPhone mockup on multicolored background (Mockuuups Studio).webp", description: "Презентация мобильной адаптации каталога на ярком геометрическом фоне, подчеркивающем 4-цветную цветовую палитру проекта." },
    { title: "iPhone 12 Pro 3D Showcase (2716 × 2037 px)", type: "Photorealistic 3D Render", src: "/Кейсы/08-mockup-real-estate/figma_exports/05_iphone_mockup.webp", description: "Фотореалистичный 3D-рендер двух смартфонов Apple iPhone 12 Pro под углом, демонстрирующий безупречную адаптивность смарт-фильтра, каталога Urban Realty и презентационных карточек." },
    { title: "Полный десктопный портал 1366 × 5909 px (Исходник)", type: "Master Desktop Canvas", src: "/Кейсы/08-mockup-real-estate/figma_exports/01_scheme_original.webp", description: "Полноразмерный непрерывный холст десктопного сайта агентства со всеми ключевыми секциями: Hero, смарт-фильтр, Urban Realty, Country Homes, International, база данных 1700+ лотов и футер конверсий." }
  ]
};

const doorsRealEstateDataEn: DoorsRealEstateData = {
  meta: {
    title: "Doors Real Estate: Premium Real Estate Agency",
    subtitle: "UX research, a multi-color model (4 color schemes), catalog architecture, and a premium mobile experience",
    client: "Doors Real Estate Agency",
    year: "2023–2024",
    role: "Lead UX/UI & Product Designer",
    category: "UX/UI Design · Web Platform · Design Systems",
    summary: "A full product case for a premium and international real estate agency. The project combines deep UX research into the affluent buyer's journey, a first-screen smart-bar for fast filtering, and a unique 4-scheme color system tuned to different market segments (urban apartments, country residences, international villas, and commercial)."
  },
  metrics: [
    { value: "+24.8%", label: "Viewing Conversion", description: "Growth in confirmed in-person viewing bookings after the smart-filter redesign" },
    { value: "38 s", label: "Time to Find a Listing", description: "Cut from landing on the homepage to finding a matching listing in the catalog" },
    { value: "4 schemes", label: "Color Systems", description: "Adaptive palettes: signature sapphire, architectural monochrome, complementary, and analogous" },
    { value: "86 / 100", label: "SUS Usability Score", description: "System Usability Scale rating from blind testing with 40 respondents" }
  ],
  primarySchemeId: "original",
  schemes: [
    { id: "original", name: "Original (Signature Brand)", nameRu: "Signature Sapphire and Ocean", type: "Primary Brand Scheme", description: "Doors Real Estate's core brand identity. Built on a deep sapphire blue that reads as trust and clarity, precise line spacing, and strict geometric layout.", harmonyTheory: "Classic monochromatic-accent harmony in the blue spectrum (#09253B and #27579A). Blue traditionally signals financial reliability, the security of a major investment, and institutional trust.", targetMarket: "Urban luxury real estate: premium new developments, downtown penthouses, gated communities.", accentColor: "#27579A", accentHex: "#27579A", badgeBg: "rgba(39, 87, 154, 0.15)", swatches: [ { hex: "#09253B", role: "Primary Dark", label: "Deep Sapphire" }, { hex: "#27579A", role: "Brand Accent", label: "Royal Blue" }, { hex: "#637FA7", role: "Secondary Steel", label: "Steel Blue-Gray" }, { hex: "#CDD6E3", role: "Ice Tint", label: "Icy Mist" }, { hex: "#F5F6F8", role: "Surface Light", label: "Milk Background" } ], imageSrc: "/Кейсы/08-mockup-real-estate/figma_exports/01_scheme_original.webp", keyFeatures: [ "Maximum trust index with investors and first-time buyers", "Sharp typographic contrast on a light architectural background", "Excellent readability for floor plan tables and cadastral data" ] },
    { id: "monochrome", name: "Monochrome (Architectural)", nameRu: "Architectural Graphite and Platinum", type: "Achromatic Luxury", description: "A strict achromatic aesthetic inspired by Swiss style and architecture monographs. Color steps back, giving 100% focus to photos of facades, interiors, and stone textures.", harmonyTheory: "An achromatic scale from deep black (#111111) through graphite gray (#586679) to pure platinum (#F8FAFC). Removes color noise to foreground the monumentality and premium status of each property.", targetMarket: "Architectural trophy properties, private off-market sales, commercial real estate.", accentColor: "#586679", accentHex: "#586679", badgeBg: "rgba(88, 102, 121, 0.18)", swatches: [ { hex: "#111827", role: "Obsidian Black", label: "Deepest Obsidian" }, { hex: "#374151", role: "Graphite Slate", label: "Graphite Slate" }, { hex: "#586679", role: "Medium Zinc", label: "Noble Zinc" }, { hex: "#E2E8F0", role: "Platinum Border", label: "Platinum Edge" }, { hex: "#FAFAFA", role: "Paper White", label: "Architectural Paper" } ], imageSrc: "/Кейсы/08-mockup-real-estate/figma_exports/02_scheme_monochrome.webp", keyFeatures: [ "Focus solely on concrete, wood textures, and panoramic views", "A brutalist premium character for VIP clients and architects", "No distracting visual triggers" ] },
    { id: "complementary", name: "Complementary (Prestige)", nameRu: "Azure Ocean and Warm Amber", type: "Complementary Contrast", description: "A high-contrast scheme pairing cool sea depths with warm, sunny terracotta accents. Evokes resort living, waterfront villas, and gated residences.", harmonyTheory: "Diametrically opposite colors on Itten's color wheel: deep oceanic blue (#0E2A47) and warm gold-terracotta (#D97706 / #C2410C). Creates a strong dynamic focus on key CTAs and badges.", targetMarket: "International real estate: Mediterranean coastal villas, Dubai, Bali, Cyprus.", accentColor: "#D97706", accentHex: "#D97706", badgeBg: "rgba(217, 119, 6, 0.15)", swatches: [ { hex: "#0E2A47", role: "Deep Ocean", label: "Oceanic Indigo" }, { hex: "#D97706", role: "Warm Amber", label: "Sunny Amber" }, { hex: "#2A6F97", role: "Azure Coastal", label: "Azure Surf" }, { hex: "#FDE68A", role: "Sun Mist", label: "Golden Glow" }, { hex: "#FFFBEB", role: "Sand Surface", label: "Warm Sand" } ], imageSrc: "/Кейсы/08-mockup-real-estate/figma_exports/03_scheme_complementary.webp", keyFeatures: [ "Highest click-through on interactive elements and contact buttons (+28% CTR)", "An emotional message of luxury, warmth, and travel", "A perfect fit for catalogs with pool and sunset photography" ] },
    { id: "analogous", name: "Analogous (Eco-Living)", nameRu: "Pine Sage and Forest Moss", type: "Analogous Harmony", description: "A soft, natural palette of neighboring hues — from fresh sage through deep forest pine to warm quartz. Evokes the quiet of country life, nature, and clean air.", harmonyTheory: "A harmony of adjacent spectrum hues (green #1E3A2F, teal #365F67, and eucalyptus #52796F). Calms the nervous system and lowers heart rate during a high-stakes financial decision.", targetMarket: "Country estates and villages: forest homes, eco-villages, private residences.", accentColor: "#365F67", accentHex: "#365F67", badgeBg: "rgba(54, 95, 103, 0.18)", swatches: [ { hex: "#1E3A2F", role: "Forest Pine", label: "Deep Pine" }, { hex: "#365F67", role: "Sage Slate", label: "Sage Slate" }, { hex: "#52796F", role: "Eucalyptus", label: "Soft Eucalyptus" }, { hex: "#CAD2C5", role: "Morning Fog", label: "Morning Fog" }, { hex: "#F4F6F4", role: "Clean Meadow", label: "Forest Meadow" } ], imageSrc: "/Кейсы/08-mockup-real-estate/figma_exports/04_scheme_analogous.webp", keyFeatures: [ "Lowers stress when evaluating a country location and its commute", "A natural harmony with landscape photography and aerial site shots", "Underscores a sustainability and eco-conscious lifestyle trend" ] }
  ],
  competitors: [
    { name: "Cian", type: "Mass-market classifieds", searchSpeed: "Slow (18+ filters, ad-cluttered)", visualClarity: "Low (tiny previews, noisy banner clutter)", directIdSearch: false, mobileUx: "Utilitarian, aggressive push notifications and pop-ups", colorSystem: "A single blue-and-white utilitarian scheme, no adaptation", conversionFocus: "Monetizing agency calls and paid promotion" },
    { name: "Domclick", type: "Banking ecosystem (Sber)", searchSpeed: "Average (focused on the mortgage calculator)", visualClarity: "Average (a strict, bureaucratic interface)", directIdSearch: false, mobileUx: "Heavy, requires Sber ID login", colorSystem: "Corporate green, emotionally distant", conversionFocus: "Issuing mortgages and insurance" },
    { name: "Savills / White & Fair", type: "Premium real estate boutique", searchSpeed: "Fast, but filters are hidden in modals", visualClarity: "High (polished, glossy layout)", directIdSearch: false, mobileUx: "Weak touch-gesture optimization, long scroll", colorSystem: "Monochrome with a gold accent", conversionFocus: "Collecting contacts via a callback form" },
    { name: "Doors Real Estate", type: "Agency product platform (Shop 4.0 Standard)", searchSpeed: "Instant (inline smart bar: type, location, price, ID)", visualClarity: "Exceptional (airy grid, focus on listings)", directIdSearch: true, mobileUx: "Smooth responsive flow, a tappable 3D experience", colorSystem: "4 harmonious schemes for different market segments", conversionFocus: "Fast viewing bookings and direct broker chat" }
  ],
  personas: [
    { name: "Maxim Voronov", role: "IT holding founder, private investor", age: 41, avatar: "MV", quote: "I don't have time to fill in 20 filter fields. I want to open the site, type in a location or the lot ID my assistant sent me, and see the floor plan and view right away.", goals: [ "Fast search for listings from ₽120M+ in prime central districts", "Instant access to a property via a short ID, no browsing the catalog", "Direct contact with a personal broker on Telegram, no spam calls" ], painPoints: [ "Classifieds hide the real floor plans and make you call an agent", "Most sites are cluttered with ads and not built for Retina screens", "Lot context gets lost when moving out of a chat thread" ], uxSolutions: [ "A dedicated 'Search by ID' input right in the center of the smart bar", "Large architectural cards with square footage, bedrooms, and price in currency/rubles", "A quick 'book a viewing' button with a convenient time-slot picker" ] },
    { name: "Ekaterina Lebedeva", role: "Managing partner at a fashion brand, tenant", age: 32, avatar: "EL", quote: "I'm looking for a space that's pleasant to live and work in. For me, the key things are light, the aesthetic of the home, and the surroundings. The agency's site should look as flawless as the apartments themselves.", goals: [ "Rent a view apartment downtown or a country house for the summer", "A clear visual split between City vs. Country vs. International", "High-resolution interior photos and video tours" ], painPoints: [ "Unclear whether a listing is still active — many sites keep 'ghost' listings", "Awkward to view photos on a phone — tiny galleries, slow loading", "Hard to switch between buying and long-term renting" ], uxSolutions: [ "An inline 'Buy / Rent' toggle on the first screen with instant filtering, no reload", "A smooth responsive gallery with swipe and floor-plan zoom support", "A 'Verified listing from our private database' badge guaranteeing accurate pricing" ] }
  ],
  cjm: [
    { step: "01. Entry", title: "First Impression & Intent Selector", userGoal: "Understand the agency's specialty and instantly switch to the right deal type (Buy / Rent).", emotion: "positive", score: 82, barColor: "#27579A", painPoint: "On traditional portals, 90% of the screen is banners and confusing special offers.", solution: "A minimal Hero with a bold 'We help to open doors' tagline and a clear segment selector." },
    { step: "02. Smart Filter", title: "One-Click Parametric Search", userGoal: "Set a budget range, property type (Urban, Country, International), and location.", emotion: "delighted", score: 94, barColor: "#10B981", painPoint: "Complex dropdowns that reset selected parameters on an accidental click.", solution: "A horizontal smart bar with intuitive dropdowns and an instant search-by-ID field." },
    { step: "03. Catalog", title: "A Visual Showcase of Listings", userGoal: "Assess the architecture, floor plans, and surroundings through high-resolution photos.", emotion: "positive", score: 88, barColor: "#27579A", painPoint: "Tiny previews that hide finish quality and floor-plan detail.", solution: "Wide-format cards focused on light and volume, clean typography with no visual noise." },
    { step: "04. Listing Card", title: "Analyzing Specs and Floor Plan", userGoal: "Get complete information: square footage, floor, view axes, parking, and deal terms.", emotion: "delighted", score: 91, barColor: "#10B981", painPoint: "Hidden fees, no publicly available floor plans, a forced phone-number gate.", solution: "A transparent spec sheet, an interactive floor-plan viewer, and an honest availability status." },
    { step: "05. Conversion", title: "Book a Viewing & Personal Broker", userGoal: "Schedule an on-site visit at a convenient time, without pushy automated bots.", emotion: "delighted", score: 96, barColor: "#10B981", painPoint: "After filling out the form, a call center calls back 3 hours later and asks the same questions again.", solution: "Direct contact with the listing's lead broker, with one-tap WhatsApp and Telegram buttons." }
  ],
  hypotheses: [
    { id: "H-01", title: "Inline Buy / Rent Selector on the Hero Screen", premise: "Moving the deal-type toggle (Buy / Rent) and segment selector (Urban / Country / International / Commercial) into a horizontal smart bar on the first screen will get users browsing listings 40% faster.", solution: "Built a compact, high-contrast radio-button switcher right above the search bar.", metric: "First-interaction CTR", result: "+31.4% growth in clicks on the primary filter", status: "Confirmed" },
    { id: "H-02", title: "Direct Search by Listing ID (Search by ID)", premise: "Clients arriving from social media, Telegram channels, and outdoor ads already have a listing code in hand. Giving them an ID search field on the homepage will cut first-screen drop-off in half.", solution: "Integrated a dedicated 'Search by ID' input next to the search button.", metric: "First-screen drop-off rate", result: "46% lower drop-off among inbound traffic", status: "Confirmed" },
    { id: "H-03", title: "Color Differentiation for 4 Segments", premise: "Coloring each of the agency's 4 core segments in a harmonious palette (Sapphire for city, Sage for country, Ocean/Amber for international) will make categories easier to recognize.", solution: "Designed a 4-scheme color model on top of a shared 1366px base layout.", metric: "Time to identify a listing's category", result: "34% faster category recognition", status: "Confirmed" },
    { id: "H-04", title: "A Personal Broker Card Instead of Cold Lead Forms", premise: "In the premium segment, trust forms around a specific person. A real expert's face and a direct messenger link will lift conversion to in-person viewings.", solution: "Placed broker avatars with a live 'Online' status and direct contact in the footer and listing cards.", metric: "Conversion to booked viewings", result: "+24.8% growth in confirmed in-person viewings", status: "Confirmed" }
  ],
  mockups: [
    { title: "MacBook Pro on a Stone Pedestal (Editorial Showcase)", type: "Desktop Showcase", src: "/Кейсы/08-mockup-real-estate/Free MacBook Pro mockup on stone pedestal (Mockuuups Studio) (1).webp", description: "A presentation mockup of the flagship 1366px Doors Real Estate portal on a MacBook Pro screen, set on a textured stone pedestal." },
    { title: "MacBook Pro Space Gray in a Workspace", type: "Workspace Environment", src: "/Кейсы/08-mockup-real-estate/Free Macbook Pro Space Gray mockup on the wooden table (Mockuuups Studio).webp", description: "The Urban Realty catalog and luxury apartment search shown on a wooden desk in a premium office." },
    { title: "iPad Pro: A Broker Presenting a Listing to a Client", type: "Tablet Lifestyle", src: "/Кейсы/08-mockup-real-estate/Free mockup of man pointing on iPad (Mockuuups Studio).webp", description: "A tablet scenario: a personal broker walks a buyer through a penthouse's floor plan and view axes." },
    { title: "iPhone 15 Pro: Fast Booking & Deposit Payment by Card", type: "Mobile Transaction", src: "/Кейсы/08-mockup-real-estate/Free iPhone 15 Pro mockup with credit card in hand (Mockuuups Studio).webp", description: "A mobile interface in hand, with a bank card: instant deposit and locking in the listing price." },
    { title: "iPhone Showcase on a Multicolor Background", type: "Editorial Mockup", src: "/Кейсы/08-mockup-real-estate/Free iPhone mockup on multicolored background (Mockuuups Studio).webp", description: "The mobile catalog shown against a bold geometric background, spotlighting the project's 4-color palette." },
    { title: "iPhone 12 Pro 3D Showcase (2716 × 2037 px)", type: "Photorealistic 3D Render", src: "/Кейсы/08-mockup-real-estate/figma_exports/05_iphone_mockup.webp", description: "A photorealistic 3D render of two angled iPhone 12 Pro devices, showing off the smart filter, the Urban Realty catalog, and presentation cards." },
    { title: "Full Desktop Portal, 1366 × 5909 px (Original)", type: "Master Desktop Canvas", src: "/Кейсы/08-mockup-real-estate/figma_exports/01_scheme_original.webp", description: "The full continuous canvas of the agency's desktop site with every key section: Hero, smart filter, Urban Realty, Country Homes, International, a database of 1,700+ listings, and the conversion footer." }
  ]
};

export const doorsRealEstateDataByLang: Record<"RU" | "EN", DoorsRealEstateData> = {
  RU: doorsRealEstateDataRu,
  EN: doorsRealEstateDataEn,
};
export const doorsRealEstateData = doorsRealEstateDataRu;
