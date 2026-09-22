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

export const doorsRealEstateData: DoorsRealEstateData = {
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
    {
      value: "+24.8%",
      label: "Конверсия в просмотр",
      description: "Рост числа подтвержденных записей на очный просмотр объектов после редизайна смарт-фильтра"
    },
    {
      value: "38 с",
      label: "Время подбора лота",
      description: "Сокращение времени от захода на главную до нахождения подходящего объекта в каталоге"
    },
    {
      value: "4 схемы",
      label: "Колористические системы",
      description: "Адаптивные палитры: фирменный сапфир, архитектурный монохром, комплементарная и аналоговая"
    },
    {
      value: "86 / 100",
      label: "SUS Usability Score",
      description: "Оценка юзабилити по шкале System Usability Scale при слепом тестировании 40 респондентов"
    }
  ],
  primarySchemeId: "original",
  schemes: [
    {
      id: "original",
      name: "Исходник (Signature Brand)",
      nameRu: "Фирменный сапфир и океан",
      type: "Primary Brand Scheme",
      description: "Основной фирменный стиль Doors Real Estate. Базируется на глубоком сапфирово-синем оттенке доверия и чистоты, выверенных межстрочных интервалах и строгой геометрической верстке.",
      harmonyTheory: "Классическая монохроматически-акцентная гармония на основе синего спектра (#09253B и #27579A). Синий цвет традиционно ассоциируется с финансовой надежностью, безопасностью крупных инвестиций и институциональным доверием.",
      targetMarket: "Городская элитная недвижимость (Urban Realty): новостройки премиум-класса, пентхаусы в центре, клубные дома.",
      accentColor: "#27579A",
      accentHex: "#27579A",
      badgeBg: "rgba(39, 87, 154, 0.15)",
      swatches: [
        { hex: "#09253B", role: "Primary Dark", label: "Сапфировый темный" },
        { hex: "#27579A", role: "Brand Accent", label: "Королевский синий" },
        { hex: "#637FA7", role: "Secondary Steel", label: "Стальной серо-синий" },
        { hex: "#CDD6E3", role: "Ice Tint", label: "Ледяной туман" },
        { hex: "#F5F6F8", role: "Surface Light", label: "Фоновый молочный" }
      ],
      imageSrc: "/Кейсы/08-mockup-real-estate/figma_exports/01_scheme_original.png",
      keyFeatures: [
        "Максимальный индекс доверия у инвесторов и покупателей первого жилья",
        "Четкий контраст типографики на светлом архитектурном фоне",
        "Идеальная читаемость таблиц планировок и кадастровых параметров"
      ]
    },
    {
      id: "monochrome",
      name: "Монохром (Architectural)",
      nameRu: "Архитектурный графит и платина",
      type: "Achromatic Luxury",
      description: "Строгая ахроматическая эстетика, вдохновленная швейцарским стилем и архитектурными монографиями. Цвет убран на второй план, давая 100% фокус на фотографии фасадов, интерьеров и текстур камня.",
      harmonyTheory: "Ахроматическая шкала (от глубокого черного #111111 через графитовый серый #586679 к чистой платине #F8FAFC). Устраняет цветовой шум, подчеркивая монументальность и премиальный статус каждого объекта.",
      targetMarket: "Архитектурные трофейные объекты, закрытые частные продажи, коммерческая недвижимость (Commercial).",
      accentColor: "#586679",
      accentHex: "#586679",
      badgeBg: "rgba(88, 102, 121, 0.18)",
      swatches: [
        { hex: "#111827", role: "Obsidian Black", label: "Обсидиановый чернейший" },
        { hex: "#374151", role: "Graphite Slate", label: "Графитовый слейт" },
        { hex: "#586679", role: "Medium Zinc", label: "Благородный цинк" },
        { hex: "#E2E8F0", role: "Platinum Border", label: "Платиновая грань" },
        { hex: "#FAFAFA", role: "Paper White", label: "Архитектурная бумага" }
      ],
      imageSrc: "/Кейсы/08-mockup-real-estate/figma_exports/02_scheme_monochrome.png",
      keyFeatures: [
        "Фокус исключительно на текстурах бетона, дерева и панорамных видах",
        "Брутальный премиальный характер для VIP-клиентов и архитекторов",
        "Отсутствие отвлекающих визуальных триггеров"
      ]
    },
    {
      id: "complementary",
      name: "Комплементарная (Prestige)",
      nameRu: "Лазурный океан и Теплый янтарь",
      type: "Complementary Contrast",
      description: "Высококонтрастная схема, сочетающая прохладные морские глубины и теплые солнечные терракотовые акценты. Передает атмосферу курортного отдыха, вилл у воды и закрытых резиденций.",
      harmonyTheory: "Диаметрально противоположные цвета цветового круга Иттена: глубокий океанический синий (#0E2A47) и теплый золотисто-терракотовый (#D97706 / #C2410C). Создает мощный динамический фокус на ключевых CTA и бейджах.",
      targetMarket: "Зарубежная недвижимость (International Realty): виллы на побережье Средиземного моря, Дубай, Бали, Кипр.",
      accentColor: "#D97706",
      accentHex: "#D97706",
      badgeBg: "rgba(217, 119, 6, 0.15)",
      swatches: [
        { hex: "#0E2A47", role: "Deep Ocean", label: "Океанический индиго" },
        { hex: "#D97706", role: "Warm Amber", label: "Солнечный янтарь" },
        { hex: "#2A6F97", role: "Azure Coastal", label: "Лазурный прибой" },
        { hex: "#FDE68A", role: "Sun Mist", label: "Золотистый отблеск" },
        { hex: "#FFFBEB", role: "Sand Surface", label: "Теплый песчаный" }
      ],
      imageSrc: "/Кейсы/08-mockup-real-estate/figma_exports/03_scheme_complementary.png",
      keyFeatures: [
        "Наивысшая кликабельность интерактивных элементов и кнопок связи (+28% CTR)",
        "Эмоциональный посыл роскоши, тепла и заграничного отдыха",
        "Идеально подходит для каталогов с фотографиями бассейнов и заката"
      ]
    },
    {
      id: "analogous",
      name: "Аналоговая (Eco-Living)",
      nameRu: "Хвойный шалфей и Лесной мох",
      type: "Analogous Harmony",
      description: "Мягкая природная палитра смежных оттенков: от свежего шалфея до глубокой лесной хвои и теплого кварца. Ассоциируется с тишиной загородной жизни, экологией и чистым воздухом.",
      harmonyTheory: "Гармония соседних оттенков спектра (зеленый #1E3A2F, бирюзовый #365F67 и эвкалиптовый #52796F). Успокаивает нервную систему, снижает пульс при принятии сложного финансового решения.",
      targetMarket: "Загородные усадьбы и поселки (Country Homes): дома у леса, эко-поселки, приватные резиденции.",
      accentColor: "#365F67",
      accentHex: "#365F67",
      badgeBg: "rgba(54, 95, 103, 0.18)",
      swatches: [
        { hex: "#1E3A2F", role: "Forest Pine", label: "Хвойный глубокий" },
        { hex: "#365F67", role: "Sage Slate", label: "Шалфейный слейт" },
        { hex: "#52796F", role: "Eucalyptus", label: "Мягкий эвкалипт" },
        { hex: "#CAD2C5", role: "Morning Fog", label: "Утренний туман" },
        { hex: "#F4F6F4", role: "Clean Meadow", label: "Лесная поляна" }
      ],
      imageSrc: "/Кейсы/08-mockup-real-estate/figma_exports/04_scheme_analogous.png",
      keyFeatures: [
        "Снижает стресс при выборе загородной локации и оценке транспортной доступности",
        "Идеальная гармония с ландшафтными фотографиями и аэрофотосъемкой участков",
        "Подчеркивает тренд на устойчивое развитие и экологичный образ жизни"
      ]
    }
  ],
  competitors: [
    {
      name: "ЦИАН",
      type: "Масс-маркет классифайд",
      searchSpeed: "Медленно (18+ фильтров, перегруз рекламой)",
      visualClarity: "Низкая (мелкие превью, пестрый баннерный шум)",
      directIdSearch: false,
      mobileUx: "Утилитарное, агрессивные пуши и всплывающие окна",
      colorSystem: "Единая сине-белая утилитарная схема без адаптации",
      conversionFocus: "Монетизация звонков агентств и платного продвижения"
    },
    {
      name: "Домклик",
      type: "Банковская экосистема (Сбер)",
      searchSpeed: "Средне (фокус на ипотечный калькулятор)",
      visualClarity: "Средняя (строгий казенный интерфейс)",
      directIdSearch: false,
      mobileUx: "Тяжеловесное, требует авторизацию по Сбер ID",
      colorSystem: "Корпоративный зеленый, эмоционально отстраненный",
      conversionFocus: "Выдача ипотечных кредитов и страховок"
    },
    {
      name: "Savills / White & Fair",
      type: "Премиальный бутик недвижимости",
      searchSpeed: "Быстро, но фильтры спрятаны в модалки",
      visualClarity: "Высокая (качественная глянцевая верстка)",
      directIdSearch: false,
      mobileUx: "Слабая оптимизация под тач-жесты, долгий скролл",
      colorSystem: "Монохромная с золотым акцентом",
      conversionFocus: "Сбор контактов через форму обратного звонка"
    },
    {
      name: "Doors Real Estate",
      type: "Продуктовая платформа агентства (Shop 4.0 Standard)",
      searchSpeed: "Молниеносно (инлайн смарт-бар: тип, локация, цена, ID)",
      visualClarity: "Исключительная (воздушная сетка, фокус на лотах)",
      directIdSearch: true,
      mobileUx: "Плавный адаптивный флоу, кликабельный 3D-экспириенс",
      colorSystem: "4 гармонические схемы под разные сегменты рынка",
      conversionFocus: "Быстрая запись на просмотр и прямой чат с брокером"
    }
  ],
  personas: [
    {
      name: "Максим Воронов",
      role: "Основатель IT-холдинга, частный инвестор",
      age: 41,
      avatar: "МВ",
      quote: "Мне некогда заполнять 20 полей в фильтрах. Я хочу открыть сайт, вбить локацию или ID лота, который мне прислал ассистент, и сразу увидеть планировку и вид из окон.",
      goals: [
        "Быстрый поиск лотов от 120 млн ₽ в Хамовниках и на Патриарших",
        "Моментальный доступ к объекту по короткому ID без блуждания по каталогу",
        "Прямой контакт с персональным брокером в Telegram без спам-звонков"
      ],
      painPoints: [
        "Классифайды скрывают реальные планировки и требуют звонить риелторам",
        "Большинство сайтов пестрят рекламой и не адаптированы под Retina-экраны",
        "Теряется контекст лота при переходе из переписки"
      ],
      uxSolutions: [
        "Выделенный поисковый инпут «Search by ID» прямо в центре смарт-бара",
        "Крупные архитектурные карточки с метражом, спальнями и ценой в валюте/рублях",
        "Кнопка быстрого бронирования просмотра с выбором удобного слота"
      ]
    },
    {
      name: "Екатерина Лебедева",
      role: "Управляющий партнер фэшн-бренда, арендатор",
      age: 32,
      avatar: "ЕЛ",
      quote: "Я ищу пространство, в котором приятно жить и работать. Для меня ключевое — свет, эстетика дома и окружение. Сайт агентства должен выглядеть так же безупречно, как сами апартаменты.",
      goals: [
        "Аренда видовой квартиры в центре или загородного дома на летний сезон",
        "Четкое визуальное разделение направлений: City vs. Country vs. International",
        "Высокое разрешение фотографий интерьеров и видео-туры"
      ],
      painPoints: [
        "Непонятно, актуален ли лот: многие сайты держат «фейковые» объявления",
        "Неудобно смотреть фото на смартфоне — мелкие галереи и медленная загрузка",
        "Сложно переключаться между покупкой и долгосрочной арендой"
      ],
      uxSolutions: [
        "Инлайн-тумблер «Buy / Rent» на первом экране с мгновенной фильтрацией без перезагрузки",
        "Плавная адаптивная галерея с поддержкой свайпов и зума планировок",
        "Плашка «Актуальный лот из закрытой базы» с гарантией достоверности цены"
      ]
    }
  ],
  cjm: [
    {
      step: "01. Вход",
      title: "Первое впечатление & Селектор интента",
      userGoal: "Понять специализацию агентства и мгновенно переключиться на нужный тип сделки (Buy / Rent).",
      emotion: "positive",
      score: 82,
      barColor: "#27579A",
      painPoint: "На традиционных порталах 90% экрана забито баннерами и непонятными спецпредложениями.",
      solution: "Минималистичный Hero с крупным слоганом «We help to open doors» и четким сегментным селектором."
    },
    {
      step: "02. Смарт-фильтр",
      title: "Параметрический подбор в 1 клик",
      userGoal: "Задать вилку бюджета, тип недвижимости (Urban, Country, International) и локацию.",
      emotion: "delighted",
      score: 94,
      barColor: "#10B981",
      painPoint: "Сложные выпадающие списки, сбрасывающие выбранные параметры при случайном клике.",
      solution: "Горизонтальный смарт-бар с интуитивными дропдаунами и полем мгновенного поиска по ID лота."
    },
    {
      step: "03. Каталог",
      title: "Визуальная витрина объектов",
      userGoal: "Оценить архитектуру, планировки и окружающую среду через фото высокого разрешения.",
      emotion: "positive",
      score: 88,
      barColor: "#27579A",
      painPoint: "Мелкие превью, на которых не видно качества отделки и деталей планировочных решений.",
      solution: "Широкоформатные карточки с акцентом на свет и объем, чистая типографика без визуального шума."
    },
    {
      step: "04. Карточка лота",
      title: "Анализ характеристик и планировки",
      userGoal: "Получить исчерпывающую информацию: метраж, этаж, видовые оси, паркинг, условия сделки.",
      emotion: "delighted",
      score: 91,
      barColor: "#10B981",
      painPoint: "Скрытые комиссии, отсутствие планировок в открытом доступе, требование ввести телефон.",
      solution: "Прозрачная спецификация, интерактивный просмотрщик экспликации и честный статус объекта."
    },
    {
      step: "05. Конверсия",
      title: "Запись на просмотр & Персональный брокер",
      userGoal: "Назначить встречу на объекте в удобное время без навязчивых автоматических роботов.",
      emotion: "delighted",
      score: 96,
      barColor: "#10B981",
      painPoint: "После заполнения формы перезванивает колл-центр через 3 часа и начинает задавать те же вопросы.",
      solution: "Прямой контакт ведущего брокера объекта с кнопками перехода в WhatsApp и Telegram в один тап."
    }
  ],
  hypotheses: [
    {
      id: "H-01",
      title: "Инлайн-селектор Buy / Rent на Hero-экране",
      premise: "Если вынести переключение типа сделки (Buy / Rent) и направлений (Urban / Country / International / Commercial) в горизонтальный смарт-бар первого экрана, пользователи на 40% быстрее приступят к просмотру лотов.",
      solution: "Разработан компактный, контрастный переключатель с радиокнопками прямо над строкой поиска.",
      metric: "CTR первого взаимодействия",
      result: "+31.4% рост кликов по первичному фильтру",
      status: "Подтверждена"
    },
    {
      id: "H-02",
      title: "Прямой поиск по ID лота (Search by ID)",
      premise: "Клиенты, приходящие из соцсетей, Telegram-каналов и наружной рекламы, имеют готовый код объекта. Если дать им поле поиска по ID на главной, отток на первом экране сократится вдвое.",
      solution: "Интегрирован выделенный инпут «Search by ID» рядом с кнопкой запуска поиска.",
      metric: "Drop-off rate с первого экрана",
      result: "Снижение оттока на 46% среди входящего трафика",
      status: "Подтверждена"
    },
    {
      id: "H-03",
      title: "Колористическая дифференциация 4 сегментов",
      premise: "Если окрасить каждое из 4 ключевых направлений агентства в гармоничную цветовую гамму (Сапфир для города, Шалфей для загородки, Океан/Янтарь для зарубежки), считываемость категорий возрастет.",
      solution: "Спроектирована 4-схемная колористическая модель с сохранением общего базового лейаута 1366px.",
      metric: "Время идентификации категории лота",
      result: "Сокращение времени распознавания на 34%",
      status: "Подтверждена"
    },
    {
      id: "H-04",
      title: "Персональная карточка брокера вместо холодных лид-форм",
      premise: "В премиум-сегменте доверие формируется к конкретному человеку. Лицо эксперта и прямой мессенджер поднимут конверсию в очный просмотр.",
      solution: "В подвале и карточках лотов размещены аватары брокеров с прямым статусом «Онлайн» и контактом.",
      metric: "Конверсия в согласование просмотра",
      result: "+24.8% рост подтвержденных очных показов",
      status: "Подтверждена"
    }
  ],
  mockups: [
    {
      title: "MacBook Pro на каменном постаменте (Editorial Showcase)",
      type: "Desktop Showcase",
      src: "/Кейсы/08-mockup-real-estate/Free MacBook Pro mockup on stone pedestal (Mockuuups Studio) (1).jpg",
      description: "Презентационный мокап флагманского 1366px портала Doors Real Estate на экране MacBook Pro на фактурном каменном постаменте."
    },
    {
      title: "MacBook Pro Space Gray в рабочем интерьере",
      type: "Workspace Environment",
      src: "/Кейсы/08-mockup-real-estate/Free Macbook Pro Space Gray mockup on the wooden table (Mockuuups Studio).jpg",
      description: "Отображение каталога Urban Realty и подбора элитных апартаментов на деревянном столе в премиальном офисе."
    },
    {
      title: "iPad Pro: Презентация лота клиенту брокером",
      type: "Tablet Lifestyle",
      src: "/Кейсы/08-mockup-real-estate/Free mockup of man pointing on iPad (Mockuuups Studio).jpg",
      description: "Планшетный сценарий: персональный брокер презентует архитектурный план и видовые оси пентхауса покупателю."
    },
    {
      title: "iPhone 15 Pro: Быстрая бронь & Оплата задатка с карты",
      type: "Mobile Transaction",
      src: "/Кейсы/08-mockup-real-estate/Free iPhone 15 Pro mockup with credit card in hand (Mockuuups Studio).jpg",
      description: "Мобильный интерфейс в руке пользователя с банковской картой: мгновенное внесение депозита и фиксация цены лота."
    },
    {
      title: "iPhone 12 Pro 3D Showcase (2716 × 2037 px)",
      type: "Photorealistic 3D Render",
      src: "/Кейсы/08-mockup-real-estate/figma_exports/05_iphone_mockup.png",
      description: "Фотореалистичный 3D-рендер двух смартфонов Apple iPhone 12 Pro под углом, демонстрирующий безупречную адаптивность смарт-фильтра, каталога Urban Realty и презентационных карточек."
    },
    {
      title: "Полный десктопный портал 1366 × 5909 px (Исходник)",
      type: "Master Desktop Canvas",
      src: "/Кейсы/08-mockup-real-estate/figma_exports/01_scheme_original.png",
      description: "Полноразмерный непрерывный холст десктопного сайта агентства со всеми ключевыми секциями: Hero, смарт-фильтр, Urban Realty, Country Homes, International, база данных 1700+ лотов и футер конверсий."
    }
  ]
};
