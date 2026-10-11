export interface MaterialSwatch {
  name: string;
  role: string;
  colorHex: string;
  texture?: string;
  description: string;
}

export interface FurnitureItem {
  name: string;
  category: string;
  material: string;
  description: string;
  image?: string;
}

export interface ZoneDetail {
  id: string;
  name: string;
  floor: 1 | 2;
  area?: string;
  functions: string[];
  furniture: string[];
  features: string;
}

export interface LightingGroup {
  name: string;
  type: string;
  kelvin: string;
  placement: string;
  desc: string;
}

export interface GalleryImage {
  src: string;
  title: string;
  category: "finished" | "construction" | "concept";
  room?: string;
}

const houseProjectDataRu = {
  title: "Проект дома: Интерьер, Визуализация, Реализация",
  subtitle: "Скандинавский эко-минимализм: от первых эскизов и строительных блоков до живого уюта",
  client: "Личный загородный дом",
  role: "Автор проекта, архитектор-дизайнер, авторский надзор",
  year: "2021 — 2023",
  area: "140 м²",
  floors: "2 этажа + терраса",
  status: "Реализован на 100%",

  metrics: [
    { value: "140 м²", label: "Общая площадь двух этажей" },
    { value: "2 этажа", label: "Чёткое функциональное зонирование" },
    { value: "100%", label: "Полный цикл: от чертежа до жизни" },
    { value: "12 зон", label: "1-й и 2-й этажи, терраса и лестничный пролёт" }
  ],

  designHighlights: [
    {
      title: "Эко-минимализм & Сканди",
      desc: "Лаконичные формы, отсутствие визуального шума, обилие естественного света через панорамные окна в пол."
    },
    {
      title: "Осознанная колористика",
      desc: "Нейтральные серые стены и белый монохром как база, тёплый массив дуба для уюта и фирменный бирюзовый акцент."
    },
    {
      title: "Открытое общественное ядро",
      desc: "Единое пространство кухни, столовой и гостиной с дровяным камином в бетонном портале."
    },
    {
      title: "Многосценарное освещение",
      desc: "Разделение на яркий функциональный свет, приглушённый вечерний свет над столом и уютные споты у камина."
    }
  ],

  materials: [
    {
      name: "Cool Grey Wall Finish",
      role: "Базовые стены",
      colorHex: "#8F9499",
      description: "Матовая моющаяся краска благородного светло-серого оттенка. Создаёт мягкий воздушный фон, собирая свет из окон."
    },
    {
      name: "Natural Oak / Timber",
      role: "Дерево и тепло",
      colorHex: "#B88E5D",
      description: "Натуральный дуб: столешница кухни, элементы обеденного стола, ножки мебели и акцентная деревянная текстура."
    },
    {
      name: "Crisp Pure White",
      role: "Двери и корпусная мебель",
      colorHex: "#F6F7F9",
      description: "Белоснежные гладкие межкомнатные двери со скрытыми петлями и матовые лаконичные кухонные фасады."
    },
    {
      name: "Signature Teal / Turquoise",
      role: "Главный акцентный цвет",
      colorHex: "#14F1D9",
      description: "Бирюза и морская волна: глянцевый кабанчик на кухонном фартуке, глубокие кресла у камина, портьеры и текстиль."
    },
    {
      name: "Raw Architectural Concrete",
      role: "Портал камина",
      colorHex: "#6B6E72",
      description: "Фактурная отделка камина под монолитный бетон — центр притяжения гостиной зоны."
    },
    {
      name: "Dark Graphite Metal",
      role: "Контуры и фурнитура",
      colorHex: "#222427",
      description: "Чугунная топка камина, лаконичные мебельные ручки, радиаторы и металлическая фурнитура."
    }
  ] as MaterialSwatch[],

  furniture: [
    {
      name: "Серый модульный угловой диван",
      category: "Гостиная / Зона отдыха",
      material: "Фактурная рогожка, подушки охра + бирюза",
      description: "Глубокий скандинавский диван L-формы с шезлонгом — центр семейного отдыха и вечерних просмотров кино.",
      image: "/Кейсы/10-house-project/мебель_кропы/sofa_corner.jpg"
    },
    {
      name: "Каминные лаунж-кресла в бирюзе",
      category: "Гостиная / Камин",
      material: "Мягкий велюр цвета морской волны, конические ножки из дуба",
      description: "Пара комфортных вольтеровских кресел у камина. Главный цветовой акцент общественной зоны.",
      image: "/Кейсы/10-house-project/мебель_кропы/armchair.jpg"
    },
    {
      name: "Журнальный слэб-стол с эпоксидной смолой",
      category: "Гостиная / Декор",
      material: "Массив карагача, бирюзовая смола «река», металлические ножки",
      description: "Авторский столик ручной работы, объединяющий текстуру натурального спила дерева и цвет интерьера.",
      image: "/Кейсы/10-house-project/мебель_кропы/table_slab.jpg"
    },
    {
      name: "Обеденная группа: стол & Eames DSW",
      category: "Столовая зона",
      material: "Белая столешница, дубовые ножки, формованные стулья",
      description: "Светлый обеденный стол для всей семьи в сочетании с культовыми стульями в стиле Charles & Ray Eames.",
      image: "/Кейсы/10-house-project/мебель_кропы/dining_group.jpg"
    },
    {
      name: "Кухонный гарнитур & бирюзовый фартук",
      category: "Кухня",
      material: "Белый матовый МДФ, массив дуба, плитка «кабанчик»",
      description: "Эргономичная кухня с рабочей зоной у окна, теплой столешницей и глянцевым фартуком морской волны.",
      image: "/Кейсы/10-house-project/мебель_кропы/kitchen_apron.jpg"
    },
    {
      name: "Круглый подвес из гнутого шпона",
      category: "Освещение / Столовая",
      material: "Натуральное дерево, рассеянный тёплый свет",
      description: "Акцентный потолочный светильник-барабан над обеденным столом, создающий камерную атмосферу за ужином.",
      image: "/Кейсы/10-house-project/мебель_кропы/chandelier.jpg"
    },
    {
      name: "Мастер-кровать с отделкой деревом",
      category: "Спальня (2 этаж)",
      material: "Белый каркас, акцентная стена из тёмного дерева, бирюзовый текстиль",
      description: "Минималистичная спальня с настенными бра для чтения и мягким фактурным покрывалом.",
      image: "/Кейсы/10-house-project/мебель_кропы/bedroom_bed.jpg"
    },
    {
      name: "Детский игровой комплекс-домик",
      category: "Детская комната",
      material: "Массив дерева, белая эмаль, спортивные элементы",
      description: "Двухуровневая кровать-домик со шведской стенкой и игровой зоной на фоне бирюзовой стены.",
      image: "/Кейсы/10-house-project/мебель_кропы/kids_playhouse.jpg"
    },
    {
      name: "Интегрированный стол-подоконник",
      category: "Кабинет / Спальня",
      material: "Широкая белая плита, опора из стали, шторы день-ночь",
      description: "Эргономичное рабочее место во всю ширину окна с естественным дневным светом.",
      image: "/Кейсы/10-house-project/мебель_кропы/desk_window.jpg"
    }
  ] as FurnitureItem[],

  floorsData: [
    {
      floorNumber: 1,
      title: "Первый этаж — Общественное ядро и гостеприимство",
      plan2D: "/Кейсы/10-house-project/extracted/распределение_зон_и_мебели_img_12.JPEG",
      axonometric3D: "/Кейсы/10-house-project/extracted/распределение_зон_и_мебели_img_11.JPEG",
      socketsPlan: "/Кейсы/10-house-project/extracted/Электрика_и_освещение_img_7.jpg",
      lightingPlan: "/Кейсы/10-house-project/extracted/Электрика_и_освещение_img_6.jpg",
      zones: [
        {
          id: "f1-living",
          name: "Кухня-гостиная",
          floor: 1,
          area: "42.5 м²",
          functions: ["Кулинария", "Семейные трапезы", "Отдых у камина", "Просмотр ТВ"],
          furniture: ["Г-образная кухня", "Обеденный стол + 4 стула", "Дровяной камин в простенке", "Диван", "ТВ-тумба", "2 бирюзовых кресла"],
          features: "Панорамные французские окна в пол, дымоход камина в простенке, бирюзовый фартук, разноуровневый свет."
        },
        {
          id: "f1-hall",
          name: "Прихожая и коридор",
          floor: 1,
          area: "11.1 м²",
          functions: ["Входная группа", "Хранение верхней одежды", "Зона ростового зеркала"],
          furniture: ["Встроенный шкаф-купе", "Ростовое зеркало в нише", "Пуф", "Обувница"],
          features: "Отдельный вывод под климатическую завесу/кондиционер, настенные бра, удобная логистика в гостиную."
        },
        {
          id: "f1-boiler",
          name: "Бойлерная (Котельная)",
          floor: 1,
          area: "4.5 м²",
          functions: ["Инженерное сердце дома", "Отопление и водоснабжение", "Хозблок"],
          furniture: ["Газовый котёл", "Бойлер", "Коллекторная группа тёплого пола", "Стеллажи"],
          features: "Влагозащищенные силовые розетки, вывод аварийного трапа, размещение за лестничным блоком."
        },
        {
          id: "f1-bath",
          name: "Санузел с ванной",
          floor: 1,
          area: "9.3 м²",
          functions: ["Полноразмерная ванна", "Ежедневная гигиена", "Постирочный блок"],
          furniture: ["Полноразмерная ванна", "Тумба с раковиной", "Инсталляция унитаза", "Стиральная машина"],
          features: "Светлая плитка в сочетании с плиткой с имитацией древесной текстуры, выводы под полотенцесушитель и фен."
        },
        {
          id: "f1-terrace",
          name: "Терраса на 1 этаже",
          floor: 1,
          area: "12.8 м²",
          functions: ["Отдых на свежем воздухе", "Летняя столовая", "Выход в сад"],
          furniture: ["Садовая мебель", "Лаунж-кресла", "Уличные светильники"],
          features: "Выход через французские двери гостиной, палубная доска из лиственницы, защитный навес."
        },
        {
          id: "f1-stairs",
          name: "Лестничный пролёт",
          floor: 1,
          area: "8.9 м²",
          functions: ["Межэтажное вертикальное сообщение", "Световой колодец"],
          furniture: ["Двухмаршевая металлическая лестница", "Деревянные ступени", "Ограждение из канатов"],
          features: "Проходные переключатели света 1-го и 2-го этажей, встроенная подсветка ступеней."
        }
      ] as ZoneDetail[]
    },
    {
      floorNumber: 2,
      title: "Второй этаж — Приватная зона отдыха и творчества",
      plan2D: "/Кейсы/10-house-project/extracted/распределение_зон_и_мебели_img_1.JPEG",
      axonometric3D: "/Кейсы/10-house-project/extracted/распределение_зон_и_мебели_img_10.JPEG",
      socketsPlan: "/Кейсы/10-house-project/extracted/Электрика_и_освещение_img_1.jpg",
      lightingPlan: "/Кейсы/10-house-project/extracted/Электрика_и_освещение_img_14.jpg",
      zones: [
        {
          id: "f2-master",
          name: "Спальня (Мастер-спальня)",
          floor: 2,
          area: "16.8 м²",
          functions: ["Полноценный сон", "Хранение гардероба", "Приватный отдых"],
          furniture: ["Двуспальная кровать", "Встроенный гардероб", "Прикроватные тумбы", "Бра для чтения"],
          features: "Стена с отделкой из тёмного дерева, симметричная трапециевидная стена входа со скосом, приглушённый свет."
        },
        {
          id: "f2-child",
          name: "Детская комната",
          floor: 2,
          area: "17.3 м²",
          functions: ["Сон и игры", "Развивающий комплекс", "Зона творчества"],
          furniture: ["Игровая кровать-домик со шведской стенкой", "Кровать-машинка", "Игровой ковёр", "Стеллажи"],
          features: "Бирюзовая акцентная стена, серые наружные стены, безопасные розетки со шторками."
        },
        {
          id: "f2-cabinet",
          name: "Кабинет (Мастерская / Студия)",
          floor: 2,
          area: "17.3 м²",
          functions: ["Работа за компьютером", "Музыкальное творчество", "Живопись за мольбертом"],
          furniture: ["Сплошной белый стол-подоконник до бирюзовой стены", "Мольберт", "Стойка для гитар", "Диван"],
          features: "Естественный фронтальный свет от окна во всю стену, акустический комфорт, рабочие розетки."
        },
        {
          id: "f2-bath",
          name: "Санузел с душем",
          floor: 2,
          area: "8.9 м²",
          functions: ["Утренний бодрящий душ", "Гигиенический узел 2-го этажа"],
          furniture: ["Душевой отсек со стеклянной перегородкой", "Подвесной унитаз", "Раковина с зеркалом"],
          features: "Белая плитка «кабанчик», линейное расположение сантехники по левой стене, трап в полу."
        },
        {
          id: "f2-corridor",
          name: "Коридор 2-го этажа",
          floor: 2,
          area: "4.4 м²",
          functions: ["Распределение потоков", "Доступ ко всем приватным комнатам"],
          furniture: ["Двери в едином белом стиле", "Галерея постеров"],
          features: "Центральный коридор за стенами: объединяет выходы из всех комнат, санузел и лестничную площадку."
        },
        {
          id: "f2-stairs-view",
          name: "Лестничный пролёт",
          floor: 2,
          area: "8.9 м²",
          functions: ["Верхняя лестничная площадка", "Видовое окно в сад"],
          furniture: ["Канатное ограждение балюстрады", "Бирюзовые портьеры в пол"],
          features: "Широкое видовое окно пролёта с бирюзовыми шторами в пол, проходное управление светом, винтажные лампы."
        }
      ] as ZoneDetail[]
    }
  ],

  lightingGroups: [
    {
      name: "Основной рабочий свет",
      type: "Встроенные споты",
      kelvin: "4000K (Нейтральный белый)",
      placement: "Потолок кухни, прихожей, коридоров",
      desc: "Обеспечивает равномерную заливку помещения без слепых зон для комфортной готовки и уборки."
    },
    {
      name: "Атмосферный вечерний свет",
      type: "Подвесы и люстры",
      kelvin: "2700K — 3000K (Теплый ламповый)",
      placement: "Над обеденным столом, в спальне",
      desc: "Локальный уютный свет, создающий камерную атмосферу во время семейных ужинов."
    },
    {
      name: "Релакс-подсветка у камина",
      type: "Настенные бра и скрытая лента",
      kelvin: "2400K (Золотистый отблеск)",
      placement: "Ниша камина, зоны отдыха",
      desc: "Идеально дополняет живое пламя дровяного камина, не перебивая игру огня."
    },
    {
      name: "Рабочая подсветка столешницы",
      type: "Светодиодный профиль",
      kelvin: "4000K",
      placement: "Под навесными шкафами кухни",
      desc: "Яркое бестеневое освещение разделочной поверхности и мойки."
    }
  ] as LightingGroup[],

  evolutionStory: {
    title: "Эволюция идеи: от смелого колористического поиска к чистому скандинавскому спокойствию",
    initialConcept: "На этапе проектирования и поиска я тестировала множество ярких цветовых гипотез: горчичные, оранжевые, салатовые акценты, насыщенный текстиль и плотные цветовые пятна. Было исследовано свыше 80 вариантов мебели и материалов в коллажах.",
    turningPoint: "Когда стены дома были возведены из блоков, и в помещения ворвался естественный свет через панорамные окна в пол, стало очевидно: пространство само диктует правила. Лишний визуальный шум захотелось убрать.",
    realizedResult: "В финале родилась чистая скандинавская эстетика: стены обрели благородный светло-серый тон, двери стали безупречно белыми, мебель объединила белый глянец и фактурный тёплый дуб, а роль единственного, но мощного акцента заняла любимая бирюза — цвет морской волны, присутствующий на фартуке, креслах и текстиле."
  },

  gallery: {
    finished: [
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-12_21-27-13.jpg", title: "Кухня-гостиная: собака на ковре, праздничная ёлка и бирюзовое кресло", room: "Кухня-гостиная" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-41 (7).jpg", title: "Бетонный камин, столик из слэба со смолой и два бирюзовых кресла", room: "Каминная зона" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-42.jpg", title: "Столовая: раздвижные стеклянные двери на террасу и дубовая люстра", room: "Столовая" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-40 (2).jpg", title: "Чайная композиция: столик со смолой, бирюзовые свечи и декор", room: "Гостиная" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-42 (9).jpg", title: "Мансардная спальня: деревянное изголовье и бирюзовый плед", room: "Спальня" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-47 (7).jpg", title: "Детская: игровой деревянный комплекс-домик и ковер с дорогами", room: "Детская" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-42 (3).jpg", title: "Рабочее место: подоконник-столешница во всю ширину окна", room: "Кабинет" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-42 (7).jpg", title: "Лестничный холл: канатная балюстрада, подвесы и шторы", room: "Холл" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-40 (3).jpg", title: "Обеденный стол, бирюзовый кабанчик на фартуке и подушка Тоторо", room: "Кухня-столовая" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-48 (2).jpg", title: "Входной холл: белые двери, серая отделка и зеркало в пол", room: "Прихожая" },
      { src: "/Кейсы/10-house-project/готовый дом/photo_2026-09-08_19-29-40 (4).jpg", title: "Дровяная топка камина в работе: вечерний уют", room: "Камин" },
      { src: "/Кейсы/10-house-project/готовый дом/photo_2026-09-08_19-29-41 (2).jpg", title: "Санузел: светлая плитка, контрастная сантехника", room: "Санузел" }
    ],
    construction: [
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-44 (2).jpg", title: "Маленький строитель: уборка стяжки у монолитного камина и окон в пол", room: "Гостиная" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-451.jpg", title: "Кладка камина из красного кирпича и газоблочные перегородки", room: "Каминная зона" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-44 (3).jpg", title: "Вид сквозь архитектурный портал холла на каминный зал", room: "Холл-гостиная" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-45.jpg", title: "Монтаж внутрипольного конвектора отопления перед панорамным окном VEKA", room: "Инженерия" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-44 (4).jpg", title: "Устройство полусухой чистовой стяжки пола по всему этажу", room: "Пол" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-44 (6).jpg", title: "Штукатурные работы, строительные леса и грунтовка стен", room: "Стены" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-47 (2).jpg", title: "Сборка металлокаркаса лестницы на второй этаж", room: "Лестница" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-43 (6).jpg", title: "Облицовка санузла: ванна и комбинированная плитка под дерево", room: "Санузел" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-47 (4).jpg", title: "Монтаж кухонного гарнитура, техники и бирюзового фартука", room: "Кухня" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-47 (6).jpg", title: "Финишная отделка: установка белых дверей и покраска стен в серый тон", room: "Коридор" },
      { src: "/Кейсы/10-house-project/стройка/photo_2026-09-08_19-29-45 (2).jpg", title: "Архитектурный чертеж лестницы прямо на бетонной колонне", room: "Холл" }
    ],
    conceptBoards: [
      { src: "/Кейсы/10-house-project/extracted/Стили_img_6.jpg", title: "Концепт-борд: скандинавский минимализм и экостиль" },
      { src: "/Кейсы/10-house-project/extracted/Цвет_в_интерьере_img_14.jpeg", title: "Поисковый мудборд: бирюзовые и морские акценты" },
      { src: "/Кейсы/10-house-project/extracted/Материалы_мебель_текстиль_img_49.JPEG", title: "Подборка текстиля и натуральных деревянных фактур" },
      { src: "/Кейсы/10-house-project/extracted/Коллаж_img_16.jpg", title: "Коллаж гостиной зоны с камином и лаунж-мебелью" }
    ]
  }
};

const houseProjectDataEn = {
  title: "House Project: Interior, Visualization, Build-Out",
  subtitle: "Scandinavian eco-minimalism: from the first sketches and concrete blocks to a home that lives and breathes",
  client: "Private family house",
  role: "Project author, interior architect-designer, site supervision",
  year: "2021 — 2023",
  area: "140 m²",
  floors: "2 floors + terrace",
  status: "100% built and occupied",

  metrics: [
    { value: "140 m²", label: "Total area across two floors" },
    { value: "2 floors", label: "Clear functional zoning" },
    { value: "100%", label: "Full cycle: from drawing to daily life" },
    { value: "12 zones", label: "Floors 1 & 2, terrace, and the stairwell" }
  ],

  designHighlights: [
    {
      title: "Eco-Minimalism & Scandi",
      desc: "Clean forms, no visual noise, an abundance of natural light through floor-to-ceiling panoramic windows."
    },
    {
      title: "Deliberate Color Story",
      desc: "Neutral grey walls and a white monochrome base, warm solid oak for coziness, and a signature teal accent."
    },
    {
      title: "An Open Social Core",
      desc: "A unified kitchen, dining, and living space around a wood-burning fireplace in a concrete surround."
    },
    {
      title: "Multi-Scenario Lighting",
      desc: "A split between bright functional light, dimmed evening light over the table, and cozy spots by the fireplace."
    }
  ],

  materials: [
    {
      name: "Cool Grey Wall Finish",
      role: "Base walls",
      colorHex: "#8F9499",
      description: "A matte, washable paint in a refined light grey. Creates a soft, airy backdrop that gathers light from the windows."
    },
    {
      name: "Natural Oak / Timber",
      role: "Wood and warmth",
      colorHex: "#B88E5D",
      description: "Solid oak: the kitchen countertop, dining table elements, furniture legs, and an accent wood texture."
    },
    {
      name: "Crisp Pure White",
      role: "Doors and case furniture",
      colorHex: "#F6F7F9",
      description: "Snow-white smooth interior doors with concealed hinges, and clean matte kitchen fronts."
    },
    {
      name: "Signature Teal / Turquoise",
      role: "The main accent color",
      colorHex: "#14F1D9",
      description: "Teal and sea-wave blue: glossy subway tile on the kitchen backsplash, deep fireside armchairs, drapes, and textiles."
    },
    {
      name: "Raw Architectural Concrete",
      role: "Fireplace surround",
      colorHex: "#6B6E72",
      description: "A textured monolithic-concrete finish on the fireplace — the focal point of the living room."
    },
    {
      name: "Dark Graphite Metal",
      role: "Trim and hardware",
      colorHex: "#222427",
      description: "The cast-iron firebox, clean furniture handles, radiators, and metal hardware."
    }
  ] as MaterialSwatch[],

  furniture: [
    {
      name: "Grey Modular Corner Sofa",
      category: "Living Room / Lounge",
      material: "Textured bouclé, ochre + teal cushions",
      description: "A deep Scandinavian L-shaped sofa with a chaise — the heart of family downtime and evening movie nights.",
      image: "/Кейсы/10-house-project/мебель_кропы/sofa_corner.jpg"
    },
    {
      name: "Teal Fireside Lounge Chairs",
      category: "Living Room / Fireplace",
      material: "Soft sea-wave velvet, tapered oak legs",
      description: "A pair of comfortable wingback-style chairs by the fireplace. The main color accent of the social zone.",
      image: "/Кейсы/10-house-project/мебель_кропы/armchair.jpg"
    },
    {
      name: "Live-Edge Slab Coffee Table with Epoxy Resin",
      category: "Living Room / Decor",
      material: "Solid elm slab, a teal 'river' resin inlay, metal legs",
      description: "A handcrafted one-off table combining the natural texture of a live-edge cut with the interior's color story.",
      image: "/Кейсы/10-house-project/мебель_кропы/table_slab.jpg"
    },
    {
      name: "Dining Set: Table & Eames DSW Chairs",
      category: "Dining Area",
      material: "White tabletop, oak legs, molded chairs",
      description: "A light dining table for the whole family paired with iconic Charles & Ray Eames-style chairs.",
      image: "/Кейсы/10-house-project/мебель_кропы/dining_group.jpg"
    },
    {
      name: "Kitchen Set & Teal Backsplash",
      category: "Kitchen",
      material: "White matte MDF, solid oak, subway tile",
      description: "An ergonomic kitchen with a workstation by the window, a warm countertop, and a glossy sea-wave backsplash.",
      image: "/Кейсы/10-house-project/мебель_кропы/kitchen_apron.jpg"
    },
    {
      name: "Round Bent-Veneer Pendant Light",
      category: "Lighting / Dining",
      material: "Natural wood, diffused warm light",
      description: "An accent drum pendant over the dining table, setting an intimate mood for dinner.",
      image: "/Кейсы/10-house-project/мебель_кропы/chandelier.jpg"
    },
    {
      name: "Master Bed with Wood Detailing",
      category: "Bedroom (2nd Floor)",
      material: "White frame, dark-wood accent wall, teal textiles",
      description: "A minimalist bedroom with wall sconces for reading and a soft, textured throw.",
      image: "/Кейсы/10-house-project/мебель_кропы/bedroom_bed.jpg"
    },
    {
      name: "Kids' Playhouse Loft Bed",
      category: "Kids' Room",
      material: "Solid wood, white enamel, sport elements",
      description: "A two-level playhouse bed with a Swedish wall ladder and a play zone against a teal accent wall.",
      image: "/Кейсы/10-house-project/мебель_кропы/kids_playhouse.jpg"
    },
    {
      name: "Integrated Windowsill Desk",
      category: "Study / Bedroom",
      material: "A wide white slab, a steel support, day-night blinds",
      description: "An ergonomic workspace spanning the full width of the window, lit by natural daylight.",
      image: "/Кейсы/10-house-project/мебель_кропы/desk_window.jpg"
    }
  ] as FurnitureItem[],

  floorsData: [
    {
      floorNumber: 1,
      title: "First Floor — The Social Core and Hospitality",
      plan2D: "/Кейсы/10-house-project/extracted/распределение_зон_и_мебели_img_12.JPEG",
      axonometric3D: "/Кейсы/10-house-project/extracted/распределение_зон_и_мебели_img_11.JPEG",
      socketsPlan: "/Кейсы/10-house-project/extracted/Электрика_и_освещение_img_7.jpg",
      lightingPlan: "/Кейсы/10-house-project/extracted/Электрика_и_освещение_img_6.jpg",
      zones: [
        {
          id: "f1-living",
          name: "Kitchen-Living Room",
          floor: 1,
          area: "42.5 m²",
          functions: ["Cooking", "Family meals", "Relaxing by the fire", "Watching TV"],
          furniture: ["L-shaped kitchen", "Dining table + 4 chairs", "Wood-burning fireplace in the pier wall", "Sofa", "TV console", "2 teal armchairs"],
          features: "Floor-to-ceiling French windows, a fireplace flue built into the pier wall, a teal backsplash, layered lighting."
        },
        {
          id: "f1-hall",
          name: "Entryway and Hallway",
          floor: 1,
          area: "11.1 m²",
          functions: ["Entrance group", "Outerwear storage", "Full-length mirror zone"],
          furniture: ["Built-in sliding wardrobe", "Full-length mirror in a niche", "Pouf", "Shoe cabinet"],
          features: "A dedicated outlet for a climate curtain/AC unit, wall sconces, convenient flow into the living room."
        },
        {
          id: "f1-boiler",
          name: "Boiler Room (Mechanical Room)",
          floor: 1,
          area: "4.5 m²",
          functions: ["The house's mechanical heart", "Heating and water supply", "Utility storage"],
          furniture: ["Gas boiler", "Water heater", "Underfloor heating manifold", "Shelving"],
          features: "Moisture-protected power outlets, a floor drain for emergencies, tucked behind the stair block."
        },
        {
          id: "f1-bath",
          name: "Bathroom with Tub",
          floor: 1,
          area: "9.3 m²",
          functions: ["Full-size bathtub", "Daily hygiene", "Laundry unit"],
          furniture: ["Full-size bathtub", "Vanity with sink", "Wall-hung toilet system", "Washing machine"],
          features: "Light tile paired with wood-look tile, outlets for a towel warmer and hair dryer."
        },
        {
          id: "f1-terrace",
          name: "Ground-Floor Terrace",
          floor: 1,
          area: "12.8 m²",
          functions: ["Outdoor relaxing", "Summer dining", "Garden access"],
          furniture: ["Garden furniture", "Lounge chairs", "Outdoor lighting"],
          features: "Access via the living room's French doors, larch decking, a protective canopy."
        },
        {
          id: "f1-stairs",
          name: "Stairwell",
          floor: 1,
          area: "8.9 m²",
          functions: ["Vertical circulation between floors", "A light well"],
          furniture: ["A two-flight metal staircase", "Wooden treads", "A rope railing"],
          features: "Two-way light switches for floors 1 and 2, built-in step lighting."
        }
      ] as ZoneDetail[]
    },
    {
      floorNumber: 2,
      title: "Second Floor — Private Rest and Creative Space",
      plan2D: "/Кейсы/10-house-project/extracted/распределение_зон_и_мебели_img_1.JPEG",
      axonometric3D: "/Кейсы/10-house-project/extracted/распределение_зон_и_мебели_img_10.JPEG",
      socketsPlan: "/Кейсы/10-house-project/extracted/Электрика_и_освещение_img_1.jpg",
      lightingPlan: "/Кейсы/10-house-project/extracted/Электрика_и_освещение_img_14.jpg",
      zones: [
        {
          id: "f2-master",
          name: "Bedroom (Master Suite)",
          floor: 2,
          area: "16.8 m²",
          functions: ["A full night's sleep", "Wardrobe storage", "Private relaxation"],
          furniture: ["Double bed", "Built-in wardrobe", "Nightstands", "Reading sconces"],
          features: "A dark-wood accent wall, a symmetrical trapezoidal entry wall with a chamfer, dimmed lighting."
        },
        {
          id: "f2-child",
          name: "Kids' Room",
          floor: 2,
          area: "17.3 m²",
          functions: ["Sleep and play", "A developmental play structure", "A creative corner"],
          furniture: ["A playhouse loft bed with a Swedish ladder", "A car-shaped bed", "A play rug", "Shelving"],
          features: "A teal accent wall, grey exterior walls, child-safe outlets with covers."
        },
        {
          id: "f2-cabinet",
          name: "Study (Workshop / Studio)",
          floor: 2,
          area: "17.3 m²",
          functions: ["Computer work", "Music-making", "Painting at an easel"],
          furniture: ["A continuous white windowsill desk running to the teal wall", "An easel", "A guitar stand", "A sofa"],
          features: "Natural frontal light from a full-wall window, acoustic comfort, dedicated work outlets."
        },
        {
          id: "f2-bath",
          name: "Bathroom with Shower",
          floor: 2,
          area: "8.9 m²",
          functions: ["An invigorating morning shower", "The 2nd-floor hygiene unit"],
          furniture: ["A shower stall with a glass partition", "A wall-hung toilet", "A sink with mirror"],
          features: "White subway tile, fixtures lined up along the left wall, a floor drain."
        },
        {
          id: "f2-corridor",
          name: "2nd-Floor Corridor",
          floor: 2,
          area: "4.4 m²",
          functions: ["Distributing traffic flow", "Access to every private room"],
          furniture: ["Doors in a unified white finish", "A poster gallery wall"],
          features: "A central corridor connecting every room's exit, the bathroom, and the stair landing."
        },
        {
          id: "f2-stairs-view",
          name: "Stairwell",
          floor: 2,
          area: "8.9 m²",
          functions: ["The upper stair landing", "A picture window onto the garden"],
          furniture: ["A rope balustrade railing", "Floor-length teal drapes"],
          features: "A wide picture window on the landing with floor-length teal curtains, two-way light control, vintage lamps."
        }
      ] as ZoneDetail[]
    }
  ],

  lightingGroups: [
    {
      name: "Primary Task Light",
      type: "Recessed spotlights",
      kelvin: "4000K (Neutral white)",
      placement: "Kitchen, entryway, and hallway ceilings",
      desc: "Provides even, shadow-free coverage of the room for comfortable cooking and cleaning."
    },
    {
      name: "Ambient Evening Light",
      type: "Pendants and chandeliers",
      kelvin: "2700K — 3000K (Warm incandescent-like)",
      placement: "Over the dining table, in the bedroom",
      desc: "Local, cozy light that sets an intimate mood during family dinners."
    },
    {
      name: "Relaxed Fireside Lighting",
      type: "Wall sconces and hidden LED strip",
      kelvin: "2400K (Golden glow)",
      placement: "The fireplace niche, lounge areas",
      desc: "Complements the live flame of the wood-burning fireplace perfectly, without competing with the fire."
    },
    {
      name: "Countertop Task Lighting",
      type: "LED strip profile",
      kelvin: "4000K",
      placement: "Under the kitchen's wall cabinets",
      desc: "Bright, shadow-free lighting for the prep surface and sink."
    }
  ] as LightingGroup[],

  evolutionStory: {
    title: "The Evolution of an Idea: From a Bold Color Search to Pure Scandinavian Calm",
    initialConcept: "During the design and research phase, I tested a wide range of bold color hypotheses: mustard, orange, and lime-green accents, rich textiles, and dense color blocks. Over 80 furniture and material combinations were explored in collages.",
    turningPoint: "Once the house's block walls went up and natural light poured in through the floor-to-ceiling panoramic windows, it became obvious: the space dictates its own rules. The urge to strip away the excess visual noise took over.",
    realizedResult: "In the end, a pure Scandinavian aesthetic emerged: the walls took on a refined light-grey tone, the doors became impeccably white, the furniture united white gloss with textured warm oak, and the role of the single, powerful accent went to a beloved teal — a sea-wave color present in the backsplash, the armchairs, and the textiles."
  },

  gallery: {
    finished: [
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-12_21-27-13.jpg", title: "Kitchen-living room: the dog on the rug, a holiday tree, and a teal armchair", room: "Kitchen-Living Room" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-41 (7).jpg", title: "The concrete fireplace, a resin slab coffee table, and two teal armchairs", room: "Fireplace Area" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-42.jpg", title: "Dining room: sliding glass doors to the terrace and an oak pendant light", room: "Dining Room" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-40 (2).jpg", title: "A tea setup: the resin coffee table, teal candles, and decor", room: "Living Room" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-42 (9).jpg", title: "The attic bedroom: a wood headboard and a teal throw", room: "Bedroom" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-47 (7).jpg", title: "Kids' room: the wooden playhouse structure and a road-print rug", room: "Kids' Room" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-42 (3).jpg", title: "The workspace: a windowsill desk spanning the full width of the window", room: "Study" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-42 (7).jpg", title: "The stair hall: a rope balustrade, pendants, and drapes", room: "Hall" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-40 (3).jpg", title: "The dining table, a teal subway backsplash, and a Totoro cushion", room: "Kitchen-Dining" },
      { src: "/Кейсы/10-house-project/готовый дом/отобрано/photo_2026-09-08_19-29-48 (2).jpg", title: "The entrance hall: white doors, grey finish, and a full-length mirror", room: "Entryway" },
      { src: "/Кейсы/10-house-project/готовый дом/photo_2026-09-08_19-29-40 (4).jpg", title: "The wood-burning fireplace at work: evening coziness", room: "Fireplace" },
      { src: "/Кейсы/10-house-project/готовый дом/photo_2026-09-08_19-29-41 (2).jpg", title: "Bathroom: light tile with contrasting fixtures", room: "Bathroom" }
    ],
    construction: [
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-44 (2).jpg", title: "The little builder: sweeping the screed by the monolithic fireplace and floor-to-ceiling windows", room: "Living Room" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-451.jpg", title: "Laying the red-brick fireplace and aerated-block partitions", room: "Fireplace Area" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-44 (3).jpg", title: "A view through the hall's architectural opening toward the fireplace room", room: "Hall-Living Room" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-45.jpg", title: "Installing the in-floor heating convector in front of the panoramic VEKA window", room: "MEP" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-44 (4).jpg", title: "Laying the semi-dry finish floor screed across the whole floor", room: "Flooring" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-44 (6).jpg", title: "Plastering work, scaffolding, and wall priming", room: "Walls" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-47 (2).jpg", title: "Assembling the metal frame for the second-floor staircase", room: "Staircase" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-43 (6).jpg", title: "Bathroom tiling: the tub and combined wood-look tile", room: "Bathroom" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-47 (4).jpg", title: "Installing the kitchen set, appliances, and the teal backsplash", room: "Kitchen" },
      { src: "/Кейсы/10-house-project/стройка/отобрано/photo_2026-09-08_19-29-47 (6).jpg", title: "Finishing touches: installing white doors and painting the walls grey", room: "Corridor" },
      { src: "/Кейсы/10-house-project/стройка/photo_2026-09-08_19-29-45 (2).jpg", title: "An architectural staircase sketch drawn right on the concrete column", room: "Hall" }
    ],
    conceptBoards: [
      { src: "/Кейсы/10-house-project/extracted/Стили_img_6.jpg", title: "Concept board: Scandinavian minimalism and eco-style" },
      { src: "/Кейсы/10-house-project/extracted/Цвет_в_интерьере_img_14.jpeg", title: "Search moodboard: teal and sea-blue accents" },
      { src: "/Кейсы/10-house-project/extracted/Материалы_мебель_текстиль_img_49.JPEG", title: "A selection of textiles and natural wood textures" },
      { src: "/Кейсы/10-house-project/extracted/Коллаж_img_16.jpg", title: "A collage of the living room area with the fireplace and lounge furniture" }
    ]
  }
};

export const houseProjectDataByLang = {
  RU: houseProjectDataRu,
  EN: houseProjectDataEn,
};
export const houseProjectData = houseProjectDataRu;
