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

const electronicsShopDataRu: ElectronicsShopData = {
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
    { value: "+18.4%", label: "Конверсия в покупку", sublabel: "Рост Mobile CR после редизайна чекаута", trend: "up" },
    { value: "-26%", label: "Брошенные корзины", sublabel: "Снижение Cart Abandonment с 68% до 42%", trend: "down" },
    { value: "48 сек", label: "Время оформления", sublabel: "Сокращение времени чекаута с 135 до 48 сек", trend: "up" },
    { value: "84 / 100", label: "Индекс SUS", sublabel: "System Usability Scale (тест на 40 пользователях)", trend: "up" }
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
    { name: "DNS", category: "Крупный федеральный ритейлер", strengths: ["Огромная база характеристик", "Высокая детализация фильтров"], weaknesses: ["Устаревший перегруженный UI", "Мобильная корзина требует до 5 экранов"], opportunity: "Сделать чистый фокус на товаре и чекаут в один экран", score: 6.8 },
    { name: "М.Видео / Эльдорадо", category: "Омниканальный гипермаркет", strengths: ["Сильная программа лояльности", "Качественные промо-баннеры"], weaknesses: ["Агрессивные всплывающие окна", "Тяжёлая загрузка страниц на смартфоне"], opportunity: "Мгновенная загрузка (PWA / быстрый рендер) и отсутствие визуального мусора", score: 7.2 },
    { name: "Ситилинк", category: "Дискаунтер электроники", strengths: ["Быстрый выбор для профессионалов", "Чёткая информация по складам"], weaknesses: ["Сложный интерфейс для не-технарей", "Сухой язык без визуального контекста"], opportunity: "Интуитивный язык параметров для массового покупателя", score: 7.0 },
    { name: "Shop 4.0 (Наше решение)", category: "Новое поколение E-Commerce", strengths: ["Чекаут за 2 шага", "Визуальные теги ТТХ", "Мятная айдентика", "Zero-friction мобилка"], weaknesses: ["Требуется поэтапная интеграция со складской ERP"], opportunity: "Стать эталоном чистого и быстрого шоппинга гаджетов", score: 9.4 }
  ],
  personas: [
    { name: "Алексей Смирнов", role: "Frontend-разработчик / Технический гик", age: "29 лет, Москва", quote: "Мне не нужны маркетологические лозунги. Дайте мне точные герцы экрана, тип памяти и честную цену без скрытых страховок.", goals: ["Купить флагманский смартфон или ноутбук с конкретной конфигурацией памяти", "Сравнить две смежные модели за 30 секунд прямо с телефона"], painPoints: ["Необходимость открывать 10 вкладок с тестами на YouTube", "В чекауте внезапно появляются платные подписки и навязанные чехлы"], techLiteracy: "Экспертный уровень", favoriteDevices: ["MacBook Pro 16", "iPhone 15 Pro", "Механическая клавиатура"] },
    { name: "Елена Воронова", role: "Маркетолог / Покупает подарок мужу", age: "34 года, Санкт-Петербург", quote: "Я теряюсь во всех этих ядрах и мегапикселях. Мне нужно понять, какой гаджет лучший в бюджете до 40 тысяч, и чтобы доставили завтра до двери.", goals: ["Быстро найти надёжный гаджет по готовой подборке и отзывам", "Оформить заказ в обеденный перерыв за 2 минуты без регистрации по паспорту"], painPoints: ["Слишком много непонятных терминов в фильтрах", "Если платёж не прошёл, сайт сбрасывает всю введённую корзину"], techLiteracy: "Средний пользователь", favoriteDevices: ["iPad Air", "Смартфон на Android", "Smart TV"] }
  ],
  cjm: [
    { stage: "1. Первый вход (Discovery)", userAction: "Открывает приложение по рекламе или прямой ссылке", touchpoint: "Заставка (Splash) & Экран загрузки", emotionalScore: 4, painPoint: "Долгая загрузка бесит, принудительный запрос геолокации и пушей отпугивает", uxSolution: "Минималистичный сплэш с фирменным мятным логотипом и фоновая подгрузка каталога без барьеров" },
    { stage: "2. Поиск и Каталог", userAction: "Ищет ноутбук или наушники, скроллит категории", touchpoint: "Каталог, карточки товаров, быстрые фильтры", emotionalScore: 4, painPoint: "Глаза разбегаются от 50 чекбоксов, на маленьком экране трудно попасть пальцем", uxSolution: "Горизонтальные свайп-теги популярных брендов, бейджи скидок и плашка 'Быстро в корзину'" },
    { stage: "3. Принятие решения (Корзина)", userAction: "Добавляет товар, проверяет итоговую сумму", touchpoint: "Экран Корзины с промокодом и сплит-расчётом", emotionalScore: 5, painPoint: "Непонятно, входит ли доставка, и есть ли возможность разбить платёж", uxSolution: "Чёткий блок с разбивкой цены, бейдж бесплатной доставки и кнопка 'Перейти к оформлению'" },
    { stage: "4. Оформление & Оплата", userAction: "Вводит контакты, выбирает ПВЗ или курьера и способ оплаты", touchpoint: "Оформление заказа + Выбор метода оплаты (Карта, СБП, Наличные)", emotionalScore: 4, painPoint: "5 экранов ввода данных, слетает выбранный адрес при смене способа оплаты", uxSolution: "Одностраничный прогрессивный чекаут: контакты ➔ доставка ➔ моментальная оплата СБП" },
    { stage: "5. Результат (Success / Recovery)", userAction: "Получает подтверждение заказа или видит причину сбоя оплаты", touchpoint: "Экран Успеха / Экран Неудачи", emotionalScore: 5, painPoint: "При сбое оплаты заказ аннулируется, нужно собирать всё заново", uxSolution: "Экран успеха с трекинг-номером и таймлайном; экран ошибки с сохранением корзины и кнопкой 'Попробовать другой банк'" }
  ],
  hypotheses: [
    { id: "H-01", title: "Одноэкранный чекаут без обязательной регистрации", problem: "Обязательный логин с подтверждением по SMS на этапе корзины увеличивал отток на 28%.", hypothesis: "Если разрешить гостевой заказ с вводом только телефона и имени, конверсия шага чекаута вырастет на 15%+.", metric: "Checkout Step Completion Rate", result: "Конверсия выросла на +21.2%, среднее время оформления сократилось до 48 секунд.", status: "confirmed" },
    { id: "H-02", title: "Плавающая нижняя плашка покупки в каталоге", problem: "Пользователи теряли много времени, проваливаясь в каждую карточку ради кнопки добавления в корзину.", hypothesis: "Добавление мгновенной кнопки 'В корзину' с виброоткликом прямо на карточке каталога ускорит сбор корзины.", metric: "Add to Cart Rate per Session", result: "Количество добавлений в корзину за сессию увеличилось на +34%.", status: "confirmed" },
    { id: "H-03", title: "Сценарий мягкого восстановления при сбое оплаты (Failure State)", problem: "При техническом сбое банка пользователь видел сухую 400-ю ошибку и закрывал приложение навсегда.", hypothesis: "Если на экране ошибки объяснить причину человеческим языком и дать кнопку 'Выбрать другой способ (СБП/Наличные)', мы вернем 30%+ оплат.", metric: "Payment Recovery Rate", result: "41% пользователей успешно завершили заказ со второй попытки без обращения в саппорт.", status: "confirmed" },
    { id: "H-04", title: "Мятно-бирюзовый цветовой контраст вместо агрессивного красного", problem: "Классические красные ценники создавали ощущение стресса и дешевизны дискаунтера.", hypothesis: "Использование свежего мятного (#30B5A3) как премиального технологичного акцента повысит лояльность и средний чек.", metric: "Average Order Value (AOV) & Brand Trust", result: "Рост среднего чека на +9.5%, положительный NPS при оценке премиальности интерфейса.", status: "confirmed" }
  ],
  designTokens: {
    colors: [
      { name: "Primary Mint Teal", hex: "#30B5A3", role: "Фирменный акцент бренда", usage: "Главные CTA кнопки, активные табы, бейджи скидок и прогресс-бары" },
      { name: "Dark Charcoal", hex: "#191919", role: "Глубокий тёмный графит", usage: "Заголовки, первичный текст, статус-бары и контрастные плашки" },
      { name: "Pure Surface White", hex: "#FFFFFF", role: "Чистый белый фон карточек", usage: "Карточки товаров, модальные окна, поля ввода" },
      { name: "Canvas Off-White", hex: "#F5F5F5", role: "Фоновая нейтральная подложка", usage: "Фон экранов приложения, нейтральные разделители" },
      { name: "Sage Accent Gray", hex: "#B3C1BE", role: "Вторичный приглушённый акцент", usage: "Неактивные иконки, вспомогательные теги категорий, окантовки" },
      { name: "Border Divider", hex: "#D9D9D9", role: "Линии разграничения", usage: "Тонкие границы инпутов, сепараторы списков в чекауте" }
    ],
    typography: [
      { name: "Roboto Bold / SemiBold (20-28px)", styles: "font-weight: 700 / 600", description: "Главные заголовки разделов, цены товаров и ключевые цифры", preview: "124 990 ₽ • Каталог техники" },
      { name: "Roboto Medium (14-16px)", styles: "font-weight: 500", description: "Названия товаров, текст на кнопках действий, заголовки полей", preview: "Смартфон Apple iPhone 15 Pro Max 256GB" },
      { name: "Roboto Regular (12-14px)", styles: "font-weight: 400", description: "Вспомогательный текст, описание условий доставки и подсказки", preview: "Доставка курьером завтра с 10:00 до 18:00" },
      { name: "Knewave / Display Accent (16-24px)", styles: "font-weight: 400", description: "Акцентные промо-слоганы, брендовые плакаты и заставки", preview: "NEXT-GEN TECH STORE" }
    ],
    gridSystem: [
      { title: "Mobile Grid (320px - 390px)", description: "4-колоночная сетка с 16px боковыми полями и 8px межколонником", columns: "4 колонки", margins: "16px margin / 8px gutter" },
      { title: "Desktop Grid (1440px)", description: "12-колоночная адаптивная сетка с центрированным контейнером 1200px", columns: "12 колонок", margins: "120px margin / 24px gutter" },
      { title: "8-Point Spacing Scale", description: "Все отступы, паддинги и радиусы скругления кратны 4px / 8px (4, 8, 12, 16, 24, 32, 48px)", columns: "8pt Base", margins: "Border-radius: 8px / 16px" }
    ]
  },
  screens: {
    mobileFlow: [
      { id: "splash", step: "01", title: "Заставка (Splash Screen)", category: "Onboarding & Brand", src: "/Кейсы/09-mockup-electronics/figma_exports/02_splash_mobile.webp", uxHighlights: ["Минималистичный логотип бренда по центру экрана", "Фирменный фон с высокой узнаваемостью", "Отсутствие отвлекающих элементов при старте"], description: "Экран первого впечатления. Задаёт визуальный тон платформы и инициализирует кэш сессии пользователя." },
      { id: "loading", step: "02", title: "Экран загрузки (Loading State)", category: "System Feedback", src: "/Кейсы/09-mockup-electronics/figma_exports/03_loading_mobile.webp", uxHighlights: ["Плавный индикатор прогресса", "Предотвращает ощущение зависания интерфейса", "Фоновая предзагрузка категорий каталога"], description: "Визуальный отклик системы во время синхронизации данных каталога и цен с бэкендом." },
      { id: "home", step: "03", title: "Главный экран (Home Screen)", category: "Core Discovery", src: "/Кейсы/09-mockup-electronics/figma_exports/01_home_mobile.webp", uxHighlights: ["Карусель горячих акций с высоким контрастом", "Сетка популярных категорий (Смартфоны, Ноутбуки, Аудио)", "Быстрый доступ к поиску и корзине в нижней панели"], description: "Центральный хаб приложения. Баланс между маркетинговыми спецпредложениями и быстрым поиском нужного товара." },
      { id: "catalog", step: "04", title: "Каталог товаров (Catalog & Filters)", category: "Search & Browse", src: "/Кейсы/09-mockup-electronics/figma_exports/04_catalog_mobile.webp", uxHighlights: ["Двухколоночная информативная сетка товаров", "Бейджи скидок и наличие на складе", "Горизонтальные теги быстрой фильтрации брендов"], description: "Оптимизирован для быстрого скролла одним пальцем. Карточка содержит фото, название, цену и кнопку мгновенного добавления." },
      { id: "cart", step: "05", title: "Корзина (Smart Shopping Cart)", category: "Decision Making", src: "/Кейсы/09-mockup-electronics/figma_exports/05_cart_mobile.webp", uxHighlights: ["Прозрачный подсчёт стоимости без скрытых платежей", "Интуитивные кнопки изменения количества (+/-)", "Поле применения промокода с мгновенным пересчётом"], description: "Снимает страх неожиданных доплат. Чётко показывает итоговую экономию и бесплатность доставки." },
      { id: "checkout", step: "06", title: "Оформление заказа (Fast Checkout)", category: "Conversion Core", src: "/Кейсы/09-mockup-electronics/figma_exports/06_checkout_mobile.webp", uxHighlights: ["Минимум обязательных полей для заполнения", "Выбор между курьерской доставкой и самовывозом", "Автодополнение адреса и маска ввода телефона"], description: "Революция против 5-шаговых монстров. Все ключевые параметры доставки умещаются на одном экране." },
      { id: "payment", step: "07", title: "Выбор оплаты (Payment Gateway)", category: "Transaction", src: "/Кейсы/09-mockup-electronics/figma_exports/07_payment_mobile.webp", uxHighlights: ["Быстрая оплата СБП по QR-коду / приложению банка", "Интеграция сплит-сервисов (Долями / 4 платежа)", "Безопасный ввод карты с автоопределением платежной системы"], description: "Гибкий выбор платежных сценариев. Поддержка альтернативных способов оплаты снижает отток на 18%." },
      { id: "success", step: "08", title: "Экран успеха (Order Confirmation)", category: "Post-Purchase Delight", src: "/Кейсы/09-mockup-electronics/figma_exports/08_success_mobile.webp", uxHighlights: ["Чёткий номер заказа и таймлайн доставки", "Кнопка быстрого сохранения чека в PDF", "Ссылка на чат поддержки для спокойствия клиента"], description: "Формирует позитивное завершение пользовательского опыта и уверенность в получении покупки в срок." },
      { id: "failure", step: "09", title: "Экран ошибки (Error Recovery)", category: "Exception Handling", src: "/Кейсы/09-mockup-electronics/figma_exports/09_failure_mobile.webp", uxHighlights: ["Понятное человеческое объяснение причины сбоя", "Корзина остаётся сохранённой в неизменном виде", "Альтернативные действия: сменить карту или оплатить при получении"], description: "Паттерн мягкого восстановления. Предотвращает потерю клиента при банковских отказах или лимитах." }
    ],
    desktop: {
      title: "Адаптивная десктоп-версия (Desktop 1440px)",
      src: "/Кейсы/09-mockup-electronics/figma_exports/10_desktop_home.webp",
      description: "Широкоформатный интерфейс для пользователей, выбирающих дорогую технику за рабочим столом. 12-колоночная сетка, расширенное мега-меню каталога и боковые фильтры.",
      highlights: ["12-колоночная модульная сетка с контейнером 1200px", "Интерактивное мега-меню категорий с визуальными иконками", "Блоки 'Хиты продаж' и 'Специальные скидки недели'", "Сквозной поиск по артикулу, бренду и модели с подсказками"]
    },
    mockups: [
      { title: "Рабочее место с монитором Dell (Clean Desk Showcase)", src: "/Кейсы/09-mockup-electronics/Free Clean desk with Dell display mockup (Mockuuups Studio)1.webp", type: "Desktop Workplace", description: "Широкоформатный сценарий покупки и сравнения характеристик техники на профессиональном 4K мониторе Dell." },
      { title: "MacBook Pro 13: Десктопный сценарий выбора", src: "/Кейсы/09-mockup-electronics/figma_exports/12_macbook_mockup.webp", type: "Laptop Mockup", description: "Отображение десктопного каталога на Retina-дисплее MacBook в реальном рабочем окружении." },
      { title: "Realme 10: Мобильный опыт в руках покупателя", src: "/Кейсы/09-mockup-electronics/figma_exports/13_realme_mockup.webp", type: "Smartphone Mockup", description: "Демонстрация мобильного чекаута на современном смартфоне: эргономика досягаемости больших пальцев." },
      { title: "MacBook Air 13: Презентационный рендер витрины", src: "/Кейсы/09-mockup-electronics/figma_exports/14_macbook_air_mockup.webp", type: "Hero Showcase Mockup", description: "Презентационный мокап для обложки кейса на Behance с акцентом на чистоту верстки и воздухе в интерфейсе." },
      { title: "Behance Editorial Poster (2400 × 1500 px)", src: "/Кейсы/09-mockup-electronics/figma_exports/behance_master_poster.webp", type: "Editorial Poster", description: "Полноформатный презентационный плакат со всеми визуальными слоями и экранами проекта." }
    ]
  }
};

const electronicsShopDataEn: ElectronicsShopData = {
  title: "Shop 4.0: Next-Gen E-Commerce",
  subtitle: "UX research, end-to-end analytics, and a responsive UI for an electronics store",
  lead: "A full product case: from a deep competitor audit and hypotheses to optimizing conversion for a 9-screen mobile checkout, backed by a design system.",
  meta: {
    client: "Retail Tech / Online Electronics Retail",
    role: "Lead UX/UI Designer & Product Researcher",
    timeline: "3 months (Q2–Q3 2023)",
    deliverables: "UX Research, CJM, Prototypes, Mobile Flow, 1440px Web, UI Kit",
    tools: "Figma, UserZoom, FigJam, Miro, Hotjar, Google Analytics"
  },
  metrics: [
    { value: "+18.4%", label: "Purchase Conversion", sublabel: "Mobile CR growth after the checkout redesign", trend: "up" },
    { value: "-26%", label: "Cart Abandonment", sublabel: "Down from 68% to 42%", trend: "down" },
    { value: "48 sec", label: "Checkout Time", sublabel: "Down from 135 to 48 seconds", trend: "up" },
    { value: "84 / 100", label: "SUS Score", sublabel: "System Usability Scale (tested with 40 users)", trend: "up" }
  ],
  researchOverview: {
    problemStatement: "Traditional electronics stores are overloaded with technical specs, aggressive banners, and multi-page checkouts. On mobile, 68% of users abandoned their cart over hidden fees, forced registration, and a confusing shipping method picker.",
    businessGoals: [
      "Increase mobile conversion (mobile-first) by cutting checkout to 2 taps",
      "Reduce cognitive load in the catalog with visual micro-filters for key specs",
      "Introduce transparent payment options (instant transfer, installments) right at the cart step",
      "Build a flexible 8pt-grid design system for fast platform scaling"
    ],
    userNeeds: [
      "Fast device comparison on the specs that matter, without leaving the site",
      "Transparent pricing including shipping, before entering any personal details",
      "Cart and browsing history synced across devices without forced login"
    ]
  },
  competitors: [
    { name: "DNS", category: "Large national retailer", strengths: ["Huge spec database", "Highly detailed filters"], weaknesses: ["Dated, cluttered UI", "Mobile cart takes up to 5 screens"], opportunity: "A clean product focus with a single-screen checkout", score: 6.8 },
    { name: "M.Video / Eldorado", category: "Omnichannel hypermarket", strengths: ["Strong loyalty program", "Polished promo banners"], weaknesses: ["Aggressive pop-ups", "Heavy page loads on mobile"], opportunity: "Instant loading (PWA / fast render) and zero visual clutter", score: 7.2 },
    { name: "Citilink", category: "Electronics discounter", strengths: ["Fast picks for power users", "Clear stock information"], weaknesses: ["Complex UI for non-technical buyers", "Dry, jargon-heavy copy"], opportunity: "Plain-language specs for mainstream shoppers", score: 7.0 },
    { name: "Shop 4.0 (Our solution)", category: "Next-gen e-commerce", strengths: ["2-step checkout", "Visual spec tags", "Mint identity", "Zero-friction mobile"], weaknesses: ["Requires phased integration with warehouse ERP"], opportunity: "Become the benchmark for clean, fast gadget shopping", score: 9.4 }
  ],
  personas: [
    { name: "Alexey Smirnov", role: "Frontend Developer / Tech Enthusiast", age: "29, Moscow", quote: "I don't need marketing slogans. Give me the exact refresh rate, memory type, and an honest price with no hidden insurance add-ons.", goals: ["Buy a flagship phone or laptop with a specific memory config", "Compare two similar models in 30 seconds, right from his phone"], painPoints: ["Has to open 10 YouTube review tabs to decide", "Paid subscriptions and unwanted cases suddenly appear at checkout"], techLiteracy: "Expert", favoriteDevices: ["MacBook Pro 16", "iPhone 15 Pro", "Mechanical keyboard"] },
    { name: "Elena Voronova", role: "Marketer / Buying a gift for her husband", age: "34, St. Petersburg", quote: "I get lost in all the cores and megapixels. I just need to know the best gadget under a set budget, delivered to my door tomorrow.", goals: ["Quickly find a reliable gadget via a curated pick and reviews", "Check out on a lunch break in 2 minutes, no ID-based registration"], painPoints: ["Too many confusing terms in the filters", "If a payment fails, the site wipes the whole cart"], techLiteracy: "Average user", favoriteDevices: ["iPad Air", "Android phone", "Smart TV"] }
  ],
  cjm: [
    { stage: "1. First visit (Discovery)", userAction: "Opens the app from an ad or a direct link", touchpoint: "Splash screen & loading state", emotionalScore: 4, painPoint: "Slow loading is annoying; a forced location/push-notification prompt is off-putting", uxSolution: "A minimal splash with the mint brand mark and background catalog preload, no barriers" },
    { stage: "2. Search and browse", userAction: "Looks for a laptop or headphones, scrolls categories", touchpoint: "Catalog, product cards, quick filters", emotionalScore: 4, painPoint: "50 checkboxes overwhelm the eye; hard to tap precisely on a small screen", uxSolution: "Horizontal swipeable brand tags, discount badges, and a 'quick add to cart' strip" },
    { stage: "3. Decision making (Cart)", userAction: "Adds an item, checks the total", touchpoint: "Cart screen with promo code and split payment", emotionalScore: 5, painPoint: "Unclear whether shipping is included, or whether payment can be split", uxSolution: "A clear price breakdown, a free-shipping badge, and a 'Proceed to checkout' button" },
    { stage: "4. Checkout & payment", userAction: "Enters contact details, picks a pickup point or courier and a payment method", touchpoint: "Checkout + payment method selection (card, instant transfer, cash)", emotionalScore: 4, painPoint: "5 data-entry screens; the chosen address resets when the payment method changes", uxSolution: "A single-page progressive checkout: contacts ➔ shipping ➔ instant payment" },
    { stage: "5. Outcome (Success / Recovery)", userAction: "Gets order confirmation or sees why a payment failed", touchpoint: "Success screen / failure screen", emotionalScore: 5, painPoint: "A failed payment cancels the order; the customer has to start over", uxSolution: "A success screen with tracking and a timeline; an error screen that keeps the cart and offers a 'Try another bank' button" }
  ],
  hypotheses: [
    { id: "H-01", title: "Single-screen checkout, no forced registration", problem: "A mandatory SMS-verified login at the cart step was driving a 28% drop-off.", hypothesis: "Allowing guest checkout with just a phone number and name will lift checkout-step conversion by 15%+.", metric: "Checkout Step Completion Rate", result: "Conversion rose +21.2%, average checkout time dropped to 48 seconds.", status: "confirmed" },
    { id: "H-02", title: "Floating 'add to cart' bar in the catalog", problem: "Users lost a lot of time opening every product card just to find the add-to-cart button.", hypothesis: "An instant 'Add to Cart' button with haptic feedback right on the catalog card will speed up cart building.", metric: "Add to Cart Rate per Session", result: "Cart adds per session increased by +34%.", status: "confirmed" },
    { id: "H-03", title: "Soft recovery flow for failed payments (Failure State)", problem: "On a bank-side technical failure, users saw a bare 400 error and closed the app for good.", hypothesis: "Explaining the failure in plain language on the error screen, with a 'Try another method' button, will recover 30%+ of payments.", metric: "Payment Recovery Rate", result: "41% of users completed their order on the second attempt without contacting support.", status: "confirmed" },
    { id: "H-04", title: "Mint-teal color contrast instead of aggressive red", problem: "Classic red price tags read as stressful and discount-store cheap.", hypothesis: "Using a fresh mint (#30B5A3) as a premium, tech-forward accent will boost loyalty and average order value.", metric: "Average Order Value (AOV) & Brand Trust", result: "Average order value rose +9.5%, with positive NPS on perceived interface quality.", status: "confirmed" }
  ],
  designTokens: {
    colors: [
      { name: "Primary Mint Teal", hex: "#30B5A3", role: "Brand accent", usage: "Primary CTA buttons, active tabs, discount badges, progress bars" },
      { name: "Dark Charcoal", hex: "#191919", role: "Deep dark graphite", usage: "Headings, primary text, status bars, and high-contrast strips" },
      { name: "Pure Surface White", hex: "#FFFFFF", role: "Clean card background", usage: "Product cards, modals, input fields" },
      { name: "Canvas Off-White", hex: "#F5F5F5", role: "Neutral background surface", usage: "App screen backgrounds, neutral dividers" },
      { name: "Sage Accent Gray", hex: "#B3C1BE", role: "Secondary muted accent", usage: "Inactive icons, secondary category tags, outlines" },
      { name: "Border Divider", hex: "#D9D9D9", role: "Divider lines", usage: "Thin input borders, list separators at checkout" }
    ],
    typography: [
      { name: "Roboto Bold / SemiBold (20-28px)", styles: "font-weight: 700 / 600", description: "Section headings, product prices, and key figures", preview: "$1,349 • Electronics Catalog" },
      { name: "Roboto Medium (14-16px)", styles: "font-weight: 500", description: "Product names, button labels, field headings", preview: "Apple iPhone 15 Pro Max 256GB" },
      { name: "Roboto Regular (12-14px)", styles: "font-weight: 400", description: "Supporting copy, shipping terms and hints", preview: "Courier delivery tomorrow, 10:00–18:00" },
      { name: "Knewave / Display Accent (16-24px)", styles: "font-weight: 400", description: "Accent promo taglines, brand posters and splash screens", preview: "NEXT-GEN TECH STORE" }
    ],
    gridSystem: [
      { title: "Mobile Grid (320px - 390px)", description: "A 4-column grid with 16px side margins and an 8px gutter", columns: "4 columns", margins: "16px margin / 8px gutter" },
      { title: "Desktop Grid (1440px)", description: "A 12-column responsive grid in a centered 1200px container", columns: "12 columns", margins: "120px margin / 24px gutter" },
      { title: "8-Point Spacing Scale", description: "All spacing, padding, and corner radii are multiples of 4px / 8px (4, 8, 12, 16, 24, 32, 48px)", columns: "8pt Base", margins: "Border-radius: 8px / 16px" }
    ]
  },
  screens: {
    mobileFlow: [
      { id: "splash", step: "01", title: "Splash Screen", category: "Onboarding & Brand", src: "/Кейсы/09-mockup-electronics/figma_exports/02_splash_mobile.webp", uxHighlights: ["A minimal, centered brand mark", "A high-recognition brand background", "No distracting elements on launch"], description: "The first-impression screen. Sets the platform's visual tone and initializes the user's session cache." },
      { id: "loading", step: "02", title: "Loading State", category: "System Feedback", src: "/Кейсы/09-mockup-electronics/figma_exports/03_loading_mobile.webp", uxHighlights: ["A smooth progress indicator", "Prevents the interface from feeling frozen", "Background preload of catalog categories"], description: "The system's visual feedback while syncing catalog data and pricing with the backend." },
      { id: "home", step: "03", title: "Home Screen", category: "Core Discovery", src: "/Кейсы/09-mockup-electronics/figma_exports/01_home_mobile.webp", uxHighlights: ["A high-contrast carousel of hot deals", "A grid of popular categories (Phones, Laptops, Audio)", "Quick access to search and cart from the bottom bar"], description: "The app's central hub. Balances marketing promos with fast access to the product a user is looking for." },
      { id: "catalog", step: "04", title: "Catalog & Filters", category: "Search & Browse", src: "/Кейсы/09-mockup-electronics/figma_exports/04_catalog_mobile.webp", uxHighlights: ["An information-dense two-column product grid", "Discount and in-stock badges", "Horizontal quick-filter tags for brands"], description: "Optimized for fast one-thumb scrolling. Each card shows a photo, name, price, and an instant add button." },
      { id: "cart", step: "05", title: "Smart Shopping Cart", category: "Decision Making", src: "/Кейсы/09-mockup-electronics/figma_exports/05_cart_mobile.webp", uxHighlights: ["A transparent price breakdown with no hidden fees", "Intuitive +/- quantity controls", "A promo code field with instant recalculation"], description: "Removes the fear of surprise charges. Clearly shows total savings and free-shipping status." },
      { id: "checkout", step: "06", title: "Fast Checkout", category: "Conversion Core", src: "/Кейсы/09-mockup-electronics/figma_exports/06_checkout_mobile.webp", uxHighlights: ["A minimum of required fields", "A choice between courier delivery and pickup", "Address autocomplete and a phone-number input mask"], description: "A revolt against 5-step checkout monsters. Every key shipping parameter fits on one screen." },
      { id: "payment", step: "07", title: "Payment Gateway", category: "Transaction", src: "/Кейсы/09-mockup-electronics/figma_exports/07_payment_mobile.webp", uxHighlights: ["Fast instant-transfer payment via QR / banking app", "Integrated installment services (split into 4 payments)", "Secure card entry with automatic card-network detection"], description: "Flexible payment paths. Support for alternative payment methods cuts drop-off by 18%." },
      { id: "success", step: "08", title: "Order Confirmation", category: "Post-Purchase Delight", src: "/Кейсы/09-mockup-electronics/figma_exports/08_success_mobile.webp", uxHighlights: ["A clear order number and delivery timeline", "A one-tap 'save receipt as PDF' button", "A link to support chat for peace of mind"], description: "Ends the experience on a positive note and gives confidence the order will arrive on time." },
      { id: "failure", step: "09", title: "Error Recovery", category: "Exception Handling", src: "/Кейсы/09-mockup-electronics/figma_exports/09_failure_mobile.webp", uxHighlights: ["A plain-language explanation of what went wrong", "The cart stays intact and unchanged", "Alternate actions: switch card or pay on delivery"], description: "A soft-recovery pattern that prevents losing a customer to a bank decline or limit." }
    ],
    desktop: {
      title: "Responsive Desktop Version (1440px)",
      src: "/Кейсы/09-mockup-electronics/figma_exports/10_desktop_home.webp",
      description: "A wide-format interface for shoppers choosing higher-ticket gear at their desk. A 12-column grid, an expanded catalog mega-menu, and side filters.",
      highlights: ["A 12-column modular grid in a 1200px container", "An interactive category mega-menu with visual icons", "'Best sellers' and 'Deal of the week' blocks", "Universal search by SKU, brand, and model with suggestions"]
    },
    mockups: [
      { title: "Dell Monitor Workspace (Clean Desk Showcase)", src: "/Кейсы/09-mockup-electronics/Free Clean desk with Dell display mockup (Mockuuups Studio)1.webp", type: "Desktop Workplace", description: "A wide-format scenario for browsing and comparing specs on a professional 4K Dell display." },
      { title: "MacBook Pro 13: Desktop Selection Scenario", src: "/Кейсы/09-mockup-electronics/figma_exports/12_macbook_mockup.webp", type: "Laptop Mockup", description: "The desktop catalog shown on a MacBook Retina display in a real working environment." },
      { title: "Realme 10: Mobile Experience in Hand", src: "/Кейсы/09-mockup-electronics/figma_exports/13_realme_mockup.webp", type: "Smartphone Mockup", description: "The mobile checkout on a modern smartphone, showing thumb-reach ergonomics." },
      { title: "MacBook Air 13: Hero Showcase Render", src: "/Кейсы/09-mockup-electronics/figma_exports/14_macbook_air_mockup.webp", type: "Hero Showcase Mockup", description: "A presentation mockup for the Behance cover, focused on clean layout and interface breathing room." },
      { title: "Behance Editorial Poster (2400 × 1500 px)", src: "/Кейсы/09-mockup-electronics/figma_exports/behance_master_poster.webp", type: "Editorial Poster", description: "A full-format presentation poster with every visual layer and screen of the project." }
    ]
  }
};

export const electronicsShopDataByLang: Record<"RU" | "EN", ElectronicsShopData> = {
  RU: electronicsShopDataRu,
  EN: electronicsShopDataEn,
};
export const electronicsShopData = electronicsShopDataRu;
