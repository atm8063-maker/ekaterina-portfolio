export interface UXMetric {
  value: string;
  label: string;
  sublabel: string;
  trend: string;
}

export interface CompetitorComparison {
  name: string;
  category: string;
  strengths: string[];
  weaknesses: string[];
  opportunity: string;
  score: number; // 1 - 10
}

export interface UserPersona {
  name: string;
  role: string;
  age: string;
  quote: string;
  goals: string[];
  painPoints: string[];
  techLiteracy: string;
  favoriteDevices: string[];
}

export interface CJMStep {
  stage: string;
  userAction: string;
  touchpoint: string;
  emotionalScore: number; // 1 - 5
  painPoint: string;
  uxSolution: string;
}

export interface UXHypothesis {
  id: string;
  title: string;
  problem: string;
  hypothesis: string;
  metric: string;
  result: string;
  status: "confirmed" | "optimized";
}

export interface DesignTokenColor {
  name: string;
  hex: string;
  role: string;
  usage: string;
}

export interface AppScreen {
  id: string;
  step: string;
  title: string;
  category: string;
  src: string;
  uxHighlights: string[];
  description: string;
}

export interface ElectronicsShopData {
  title: string;
  subtitle: string;
  lead: string;
  meta: {
    client: string;
    role: string;
    timeline: string;
    deliverables: string;
    tools: string;
  };
  metrics: UXMetric[];
  researchOverview: {
    problemStatement: string;
    businessGoals: string[];
    userNeeds: string[];
  };
  competitors: CompetitorComparison[];
  personas: UserPersona[];
  cjm: CJMStep[];
  hypotheses: UXHypothesis[];
  designTokens: {
    colors: DesignTokenColor[];
    typography: {
      name: string;
      styles: string;
      description: string;
      preview: string;
    }[];
    gridSystem: {
      title: string;
      description: string;
      columns: string;
      margins: string;
    }[];
  };
  screens: {
    mobileFlow: AppScreen[];
    desktop: {
      title: string;
      src: string;
      description: string;
      highlights: string[];
    };
    mockups: {
      title: string;
      src: string;
      type: string;
      description: string;
    }[];
  };
}

export const electronicsShopData: ElectronicsShopData = {
  title: "Shop 4.0: E-Commerce Нового Поколения",
  subtitle: "UX-исследования, сквозная аналитика и адаптивный UI интернет-магазина электроники",
  lead: "Комплексный продуктовый кейс: от глубинного аудита конкурентов и гипотез до оптимизации конверсии мобильного чекаута с 9 экранами и дизайн-системой.",
  meta: {
    client: "Retail Tech / Онлайн-ритейл электроники",
    role: "Lead UX/UI Designer & Product Researcher",
    timeline: "3 месяца (Q2–Q3 2023)",
    deliverables: "UX Research, CJM, Прототипы, Mobile Flow, 1440px Web, UI Kit",
    tools: "Figma, UserZoom, FigJam, Miro, Hotjar, Google Analytics"
  },
  metrics: [
    {
      value: "+18.4%",
      label: "Конверсия в покупку",
      sublabel: "Рост Mobile CR после редизайна чекаута",
      trend: "up"
    },
    {
      value: "-26%",
      label: "Брошенные корзины",
      sublabel: "Снижение Cart Abandonment с 68% до 42%",
      trend: "down"
    },
    {
      value: "48 сек",
      label: "Время оформления",
      sublabel: "Сокращение времени чекаута с 135 до 48 сек",
      trend: "up"
    },
    {
      value: "84 / 100",
      label: "Индекс SUS",
      sublabel: "System Usability Scale (тест на 40 пользователях)",
      trend: "up"
    }
  ],
  researchOverview: {
    problemStatement: "Традиционные интернет-магазины электроники страдают от перегруза техническими спецификациями, агрессивными баннерами и многостраничным чекаутом. На мобильных устройствах 68% пользователей бросали корзину из-за скрытых комиссий, необходимости обязательной регистрации и запутанного выбора способа доставки.",
    businessGoals: [
      "Увеличить мобильную конверсию (Mobile-first подход) за счёт сокращения шагов оформления до 2 касаний",
      "Снизить когнитивную нагрузку в каталоге через визуальные микро-фильтры ключевых характеристик",
      "Внедрить прозрачные сценарии оплаты (СБП, рассрочка 'Долями') прямо на этапе корзины",
      "Создать гибкую дизайн-систему на базе 8pt Grid для быстрого масштабирования платформы"
    ],
    userNeeds: [
      "Быстрое сравнение устройств по решающим ТТХ без перехода на сторонние сайты",
      "Прозрачная стоимость с учётом доставки до ввода паспортных данных",
      "Сохранение корзины и истории просмотров между устройствами без навязчивой авторизации"
    ]
  },
  competitors: [
    {
      name: "DNS",
      category: "Крупный федеральный ритейлер",
      strengths: ["Огромная база характеристик", "Высокая детализация фильтров"],
      weaknesses: ["Устаревший перегруженный UI", "Мобильная корзина требует до 5 экранов"],
      opportunity: "Сделать чистый фокус на товаре и чекаут в один экран",
      score: 6.8
    },
    {
      name: "М.Видео / Эльдорадо",
      category: "Омниканальный гипермаркет",
      strengths: ["Сильная программа лояльности", "Качественные промо-баннеры"],
      weaknesses: ["Агрессивные всплывающие окна", "Тяжёлая загрузка страниц на смартфоне"],
      opportunity: "Мгновенная загрузка (PWA / быстрый рендер) и отсутствие визуального мусора",
      score: 7.2
    },
    {
      name: "Ситилинк",
      category: "Дискаунтер электроники",
      strengths: ["Быстрый выбор для профессионалов", "Чёткая информация по складам"],
      weaknesses: ["Сложный интерфейс для не-технарей", "Сухой язык без визуального контекста"],
      opportunity: "Интуитивный язык параметров для массового покупателя",
      score: 7.0
    },
    {
      name: "Shop 4.0 (Наше решение)",
      category: "Новое поколение E-Commerce",
      strengths: ["Чекаут за 2 шага", "Визуальные теги ТТХ", "Мятная айдентика", "Zero-friction мобилка"],
      weaknesses: ["Требуется поэтапная интеграция со складской ERP"],
      opportunity: "Стать эталоном чистого и быстрого шоппинга гаджетов",
      score: 9.4
    }
  ],
  personas: [
    {
      name: "Алексей Смирнов",
      role: "Frontend-разработчик / Технический гик",
      age: "29 лет, Москва",
      quote: "Мне не нужны маркетологические лозунги. Дайте мне точные герцы экрана, тип памяти и честную цену без скрытых страховок.",
      goals: [
        "Купить флагманский смартфон или ноутбук с конкретной конфигурацией памяти",
        "Сравнить две смежные модели за 30 секунд прямо с телефона"
      ],
      painPoints: [
        "Необходимость открывать 10 вкладок с тестами на YouTube",
        "В чекауте внезапно появляются платные подписки и навязанные чехлы"
      ],
      techLiteracy: "Экспертный уровень",
      favoriteDevices: ["MacBook Pro 16", "iPhone 15 Pro", "Механическая клавиатура"]
    },
    {
      name: "Елена Воронова",
      role: "Маркетолог / Покупает подарок мужу",
      age: "34 года, Санкт-Петербург",
      quote: "Я теряюсь во всех этих ядрах и мегапикселях. Мне нужно понять, какой гаджет лучший в бюджете до 40 тысяч, и чтобы доставили завтра до двери.",
      goals: [
        "Быстро найти надёжный гаджет по готовой подборке и отзывам",
        "Оформить заказ в обеденный перерыв за 2 минуты без регистрации по паспорту"
      ],
      painPoints: [
        "Слишком много непонятных терминов в фильтрах",
        "Если платёж не прошёл, сайт сбрасывает всю введённую корзину"
      ],
      techLiteracy: "Средний пользователь",
      favoriteDevices: ["iPad Air", "Смартфон на Android", "Smart TV"]
    }
  ],
  cjm: [
    {
      stage: "1. Первый вход (Discovery)",
      userAction: "Открывает приложение по рекламе или прямой ссылке",
      touchpoint: "Заставка (Splash) & Экран загрузки",
      emotionalScore: 4,
      painPoint: "Долгая загрузка бесит, принудительный запрос геолокации и пушей отпугивает",
      uxSolution: "Минималистичный сплэш с фирменным мятным логотипом и фоновая подгрузка каталога без барьеров"
    },
    {
      stage: "2. Поиск и Каталог",
      userAction: "Ищет ноутбук или наушники, скроллит категории",
      touchpoint: "Каталог, карточки товаров, быстрые фильтры",
      emotionalScore: 4,
      painPoint: "Глаза разбегаются от 50 чекбоксов, на маленьком экране трудно попасть пальцем",
      uxSolution: "Горизонтальные свайп-теги популярных брендов, бейджи скидок и плашка 'Быстро в корзину'"
    },
    {
      stage: "3. Принятие решения (Корзина)",
      userAction: "Добавляет товар, проверяет итоговую сумму",
      touchpoint: "Экран Корзины с промокодом и сплит-расчётом",
      emotionalScore: 5,
      painPoint: "Непонятно, входит ли доставка, и есть ли возможность разбить платёж",
      uxSolution: "Чёткий блок с разбивкой цены, бейдж бесплатной доставки и кнопка 'Перейти к оформлению'"
    },
    {
      stage: "4. Оформление & Оплата",
      userAction: "Вводит контакты, выбирает ПВЗ или курьера и способ оплаты",
      touchpoint: "Оформление заказа + Выбор метода оплаты (Карта, СБП, Наличные)",
      emotionalScore: 4,
      painPoint: "5 экранов ввода данных, слетает выбранный адрес при смене способа оплаты",
      uxSolution: "Одностраничный прогрессивный чекаут: контакты ➔ доставка ➔ моментальная оплата СБП"
    },
    {
      stage: "5. Результат (Success / Recovery)",
      userAction: "Получает подтверждение заказа или видит причину сбоя оплаты",
      touchpoint: "Экран Успеха / Экран Неудачи",
      emotionalScore: 5,
      painPoint: "При сбое оплаты заказ аннулируется, нужно собирать всё заново",
      uxSolution: "Экран успеха с трекинг-номером и таймлайном; экран ошибки с сохранением корзины и кнопкой 'Попробовать другой банк'"
    }
  ],
  hypotheses: [
    {
      id: "H-01",
      title: "Одноэкранный чекаут без обязательной регистрации",
      problem: "Обязательный логин с подтверждением по SMS на этапе корзины увеличивал отток на 28%.",
      hypothesis: "Если разрешить гостевой заказ с вводом только телефона и имени, конверсия шага чекаута вырастет на 15%+.",
      metric: "Checkout Step Completion Rate",
      result: "Конверсия выросла на +21.2%, среднее время оформления сократилось до 48 секунд.",
      status: "confirmed"
    },
    {
      id: "H-02",
      title: "Плавающая нижняя плашка покупки в каталоге",
      problem: "Пользователи теряли много времени, проваливаясь в каждую карточку ради кнопки добавления в корзину.",
      hypothesis: "Добавление мгновенной кнопки 'В корзину' с виброоткликом прямо на карточке каталога ускорит сбор корзины.",
      metric: "Add to Cart Rate per Session",
      result: "Количество добавлений в корзину за сессию увеличилось на +34%.",
      status: "confirmed"
    },
    {
      id: "H-03",
      title: "Сценарий мягкого восстановления при сбое оплаты (Failure State)",
      problem: "При техническом сбое банка пользователь видел сухую 400-ю ошибку и закрывал приложение навсегда.",
      hypothesis: "Если на экране ошибки объяснить причину человеческим языком и дать кнопку 'Выбрать другой способ (СБП/Наличные)', мы вернем 30%+ оплат.",
      metric: "Payment Recovery Rate",
      result: "41% пользователей успешно завершили заказ со второй попытки без обращения в саппорт.",
      status: "confirmed"
    },
    {
      id: "H-04",
      title: "Мятно-бирюзовый цветовой контраст вместо агрессивного красного",
      problem: "Классические красные ценники создавали ощущение стресса и дешевизны дискаунтера.",
      hypothesis: "Использование свежего мятного (#30B5A3) как премиального технологичного акцента повысит лояльность и средний чек.",
      metric: "Average Order Value (AOV) & Brand Trust",
      result: "Рост среднего чека на +9.5%, положительный NPS при оценке премиальности интерфейса.",
      status: "confirmed"
    }
  ],
  designTokens: {
    colors: [
      {
        name: "Primary Mint Teal",
        hex: "#30B5A3",
        role: "Фирменный акцент бренда",
        usage: "Главные CTA кнопки, активные табы, бейджи скидок и прогресс-бары"
      },
      {
        name: "Dark Charcoal",
        hex: "#191919",
        role: "Глубокий тёмный графит",
        usage: "Заголовки, первичный текст, статус-бары и контрастные плашки"
      },
      {
        name: "Pure Surface White",
        hex: "#FFFFFF",
        role: "Чистый белый фон карточек",
        usage: "Карточки товаров, модальные окна, поля ввода"
      },
      {
        name: "Canvas Off-White",
        hex: "#F5F5F5",
        role: "Фоновая нейтральная подложка",
        usage: "Фон экранов приложения, нейтральные разделители"
      },
      {
        name: "Sage Accent Gray",
        hex: "#B3C1BE",
        role: "Вторичный приглушённый акцент",
        usage: "Неактивные иконки, вспомогательные теги категорий, окантовки"
      },
      {
        name: "Border Divider",
        hex: "#D9D9D9",
        role: "Линии разграничения",
        usage: "Тонкие границы инпутов, сепараторы списков в чекауте"
      }
    ],
    typography: [
      {
        name: "Roboto Bold / SemiBold (20-28px)",
        styles: "font-weight: 700 / 600",
        description: "Главные заголовки разделов, цены товаров и ключевые цифры",
        preview: "124 990 ₽ • Каталог техники"
      },
      {
        name: "Roboto Medium (14-16px)",
        styles: "font-weight: 500",
        description: "Названия товаров, текст на кнопках действий, заголовки полей",
        preview: "Смартфон Apple iPhone 15 Pro Max 256GB"
      },
      {
        name: "Roboto Regular (12-14px)",
        styles: "font-weight: 400",
        description: "Вспомогательный текст, описание условий доставки и подсказки",
        preview: "Доставка курьером завтра с 10:00 до 18:00"
      },
      {
        name: "Knewave / Display Accent (16-24px)",
        styles: "font-weight: 400",
        description: "Акцентные промо-слоганы, брендовые плакаты и заставки",
        preview: "NEXT-GEN TECH STORE"
      }
    ],
    gridSystem: [
      {
        title: "Mobile Grid (320px - 390px)",
        description: "4-колоночная сетка с 16px боковыми полями и 8px межколонником",
        columns: "4 колонки",
        margins: "16px margin / 8px gutter"
      },
      {
        title: "Desktop Grid (1440px)",
        description: "12-колоночная адаптивная сетка с центрированным контейнером 1200px",
        columns: "12 колонок",
        margins: "120px margin / 24px gutter"
      },
      {
        title: "8-Point Spacing Scale",
        description: "Все отступы, паддинги и радиусы скругления кратны 4px / 8px (4, 8, 12, 16, 24, 32, 48px)",
        columns: "8pt Base",
        margins: "Border-radius: 8px / 16px"
      }
    ]
  },
  screens: {
    mobileFlow: [
      {
        id: "splash",
        step: "01",
        title: "Заставка (Splash Screen)",
        category: "Onboarding & Brand",
        src: "/Кейсы/09-mockup-electronics/figma_exports/02_splash_mobile.png",
        uxHighlights: [
          "Минималистичный логотип бренда по центру экрана",
          "Фирменный фон с высокой узнаваемостью",
          "Отсутствие отвлекающих элементов при старте"
        ],
        description: "Экран первого впечатления. Задаёт визуальный тон платформы и инициализирует кэш сессии пользователя."
      },
      {
        id: "loading",
        step: "02",
        title: "Экран загрузки (Loading State)",
        category: "System Feedback",
        src: "/Кейсы/09-mockup-electronics/figma_exports/03_loading_mobile.png",
        uxHighlights: [
          "Плавный индикатор прогресса",
          "Предотвращает ощущение зависания интерфейса",
          "Фоновая предзагрузка категорий каталога"
        ],
        description: "Визуальный отклик системы во время синхронизации данных каталога и цен с бэкендом."
      },
      {
        id: "home",
        step: "03",
        title: "Главный экран (Home Screen)",
        category: "Core Discovery",
        src: "/Кейсы/09-mockup-electronics/figma_exports/01_home_mobile.png",
        uxHighlights: [
          "Карусель горячих акций с высоким контрастом",
          "Сетка популярных категорий (Смартфоны, Ноутбуки, Аудио)",
          "Быстрый доступ к поиску и корзине в нижней панели"
        ],
        description: "Центральный хаб приложения. Баланс между маркетинговыми спецпредложениями и быстрым поиском нужного товара."
      },
      {
        id: "catalog",
        step: "04",
        title: "Каталог товаров (Catalog & Filters)",
        category: "Search & Browse",
        src: "/Кейсы/09-mockup-electronics/figma_exports/04_catalog_mobile.png",
        uxHighlights: [
          "Двухколоночная информативная сетка товаров",
          "Бейджи скидок и наличие на складе",
          "Горизонтальные теги быстрой фильтрации брендов"
        ],
        description: "Оптимизирован для быстрого скролла одним пальцем. Карточка содержит фото, название, цену и кнопку мгновенного добавления."
      },
      {
        id: "cart",
        step: "05",
        title: "Корзина (Smart Shopping Cart)",
        category: "Decision Making",
        src: "/Кейсы/09-mockup-electronics/figma_exports/05_cart_mobile.png",
        uxHighlights: [
          "Прозрачный подсчёт стоимости без скрытых платежей",
          "Интуитивные кнопки изменения количества (+/-)",
          "Поле применения промокода с мгновенным пересчётом"
        ],
        description: "Снимает страх неожиданных доплат. Чётко показывает итоговую экономию и бесплатность доставки."
      },
      {
        id: "checkout",
        step: "06",
        title: "Оформление заказа (Fast Checkout)",
        category: "Conversion Core",
        src: "/Кейсы/09-mockup-electronics/figma_exports/06_checkout_mobile.png",
        uxHighlights: [
          "Минимум обязательных полей для заполнения",
          "Выбор между курьерской доставкой и самовывозом",
          "Автодополнение адреса и маска ввода телефона"
        ],
        description: "Революция против 5-шаговых монстров. Все ключевые параметры доставки умещаются на одном экране."
      },
      {
        id: "payment",
        step: "07",
        title: "Выбор оплаты (Payment Gateway)",
        category: "Transaction",
        src: "/Кейсы/09-mockup-electronics/figma_exports/07_payment_mobile.png",
        uxHighlights: [
          "Быстрая оплата СБП по QR-коду / приложению банка",
          "Интеграция сплит-сервисов (Долями / 4 платежа)",
          "Безопасный ввод карты с автоопределением платежной системы"
        ],
        description: "Гибкий выбор платежных сценариев. Поддержка альтернативных способов оплаты снижает отток на 18%."
      },
      {
        id: "success",
        step: "08",
        title: "Экран успеха (Order Confirmation)",
        category: "Post-Purchase Delight",
        src: "/Кейсы/09-mockup-electronics/figma_exports/08_success_mobile.png",
        uxHighlights: [
          "Чёткий номер заказа и таймлайн доставки",
          "Кнопка быстрого сохранения чека в PDF",
          "Ссылка на чат поддержки для спокойствия клиента"
        ],
        description: "Формирует позитивное завершение пользовательского опыта и уверенность в получении покупки в срок."
      },
      {
        id: "failure",
        step: "09",
        title: "Экран ошибки (Error Recovery)",
        category: "Exception Handling",
        src: "/Кейсы/09-mockup-electronics/figma_exports/09_failure_mobile.png",
        uxHighlights: [
          "Понятное человеческое объяснение причины сбоя",
          "Корзина остаётся сохранённой в неизменном виде",
          "Альтернативные действия: сменить карту или оплатить при получении"
        ],
        description: "Паттерн мягкого восстановления. Предотвращает потерю клиента при банковских отказах или лимитах."
      }
    ],
    desktop: {
      title: "Адаптивная десктоп-версия (Desktop 1440px)",
      src: "/Кейсы/09-mockup-electronics/figma_exports/10_desktop_home.png",
      description: "Широкоформатный интерфейс для пользователей, выбирающих дорогую технику за рабочим столом. 12-колоночная сетка, расширенное мега-меню каталога и боковые фильтры.",
      highlights: [
        "12-колоночная модульная сетка с контейнером 1200px",
        "Интерактивное мега-меню категорий с визуальными иконками",
        "Блоки 'Хиты продаж' и 'Специальные скидки недели'",
        "Сквозной поиск по артикулу, бренду и модели с подсказками"
      ]
    },
    mockups: [
      {
        title: "Рабочее место с монитором Dell (Clean Desk Showcase)",
        src: "/Кейсы/09-mockup-electronics/Free Clean desk with Dell display mockup (Mockuuups Studio)1.jpg",
        type: "Desktop Workplace",
        description: "Широкоформатный сценарий покупки и сравнения характеристик техники на профессиональном 4K мониторе Dell."
      },
      {
        title: "MacBook Pro 13: Десктопный сценарий выбора",
        src: "/Кейсы/09-mockup-electronics/figma_exports/12_macbook_mockup.png",
        type: "Laptop Mockup",
        description: "Отображение десктопного каталога на Retina-дисплее MacBook в реальном рабочем окружении."
      },
      {
        title: "Realme 10: Мобильный опыт в руках покупателя",
        src: "/Кейсы/09-mockup-electronics/figma_exports/13_realme_mockup.png",
        type: "Smartphone Mockup",
        description: "Демонстрация мобильного чекаута на современном смартфоне: эргономика досягаемости больших пальцев."
      },
      {
        title: "MacBook Air 13: Презентационный рендер витрины",
        src: "/Кейсы/09-mockup-electronics/figma_exports/14_macbook_air_mockup.png",
        type: "Hero Showcase Mockup",
        description: "Презентационный мокап для обложки кейса на Behance с акцентом на чистоту верстки и воздухе в интерфейсе."
      },
      {
        title: "Behance Editorial Poster (2400 × 1500 px)",
        src: "/Кейсы/09-mockup-electronics/figma_exports/behance_master_poster.jpg",
        type: "Editorial Poster",
        description: "Полноформатный презентационный плакат со всеми визуальными слоями и экранами проекта."
      }
    ]
  }
};
