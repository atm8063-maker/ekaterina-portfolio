export type Lang = 'RU' | 'EN'

export const siteDataByLang = {
  RU: {
    name: 'Екатерина Разумова',
    role: 'PR-директор',
    subtitle: 'PR & Communications',
    description:
      'PR-сопровождение брендов, медиа-стратегии, вывод новых продуктов на рынок, работа с федеральными СМИ и личный бренд.',
    telegram: {
      dm: '@ekaterina_razumova',
    },
    linkedin: 'https://www.linkedin.com/',
  },
  EN: {
    name: 'Ekaterina Razumova',
    role: 'PR Director',
    subtitle: 'PR & Communications',
    description:
      'PR support for brands, media strategy, new product launches, work with national media, and personal branding.',
    telegram: {
      dm: '@ekaterina_razumova',
    },
    linkedin: 'https://www.linkedin.com/',
  },
} as const

export const siteData = siteDataByLang.RU
export function getSiteData(lang: Lang) {
  return siteDataByLang[lang]
}

export type Metric = {
  value: string
  label: string
}

export type CaseSummary = {
  slug: string
  tag: string
  title: string
  description: string
  metrics: Metric[]
  customHref?: string
  hidden?: boolean
}

export type CaseSection = {
  id: string
  heading: string
  paragraphs?: string[]
  paragraphs2?: string[]
  callout?: string
  steps?: string[]
  image?: string
  fullPageMockup?: string
  colorPalette?: { hex: string; name?: string }[]
  typography?: { name: string; weights: string[]; example: string }[]
}

export type CaseDetail = {
  slug: string
  tag: string
  title: string
  lead: string
  meta: {
    client: string
    role: string
    year: string
    link?: string
  }
  keyMetrics: Metric[]
  customHref?: string
  sections?: CaseSection[]
}

const casesRu: CaseSummary[] = [
  { slug: '05-nick-potapov-site', tag: 'UX/UI · Контент', title: 'Сайт Nick Potapov', description: 'Информационная архитектура и 8 кейсов на двух языках', metrics: [], customHref: '/case' },
  { slug: '01-insigma', tag: 'Девелопмент · PR', title: 'ГК Insigma', description: 'PR-сопровождение трёх девелоперских проектов премиум-класса', metrics: [] },
  { slug: '02-contact-real-estate', tag: 'PR & SMM', title: 'Contact Real Estate', description: 'Несколько сотен публикаций за 2,5 года — системная PR-работа', metrics: [] },
  { slug: '03-pobeda-dizayna', tag: 'PR & Маркетинг', title: 'Победа Дизайна', description: 'PR-стратегия с нуля — публикации в профильном глянце и деловых СМИ', metrics: [] },
  { slug: '04-kart-motors-honda-civic-cup', tag: 'Спорт PR', title: 'Honda Карт Моторс & Honda Civic Cup', description: 'Рекламные кампании дилера Honda и пресс-служба Кубка Honda Civic Cup', metrics: [] },
  { slug: '06-mafia-assistant', tag: 'Product · UX', title: 'Mafia Digital Assistant', description: 'Игровой Telegram-движок для ведения офлайн-игр в Мафию (Python, UX)', metrics: [] },
  { slug: '07-resin-art-school', tag: 'Образование · SMM', title: 'Resin Art School', description: 'Кураторство учеников, прямые эфиры и ведение SMM онлайн-школы', metrics: [], hidden: true },
  { slug: '08-mockup-real-estate', tag: 'UX/UI & Real Estate', title: 'Doors Real Estate: Премиум-агентство', description: 'UX-исследования, 4 колористические схемы под сегменты рынка и смарт-фильтр 1366px', metrics: [{ value: '+24.8%', label: 'Заявки' }, { value: '4 схемы', label: 'Колористика' }] },
  { slug: '09-mockup-electronics', tag: 'UX/UI & E-Commerce', title: 'Shop 4.0: Магазин электроники', description: 'UX-исследования, аналитика конверсий, мобильный флоу чекаута и дизайн-система', metrics: [{ value: '+18.4%', label: 'CR' }, { value: '48 с', label: 'Чекаут' }] },
  { slug: '10-house-project', tag: 'Interior · Architecture', title: 'Интерьер загородного дома', description: 'Полный цикл: планировка, 3D-аксонометрия, электрика и 100% реализация в жизни', metrics: [{ value: '140 м²', label: 'Площадь' }, { value: '100%', label: 'Реализация' }] },
  { slug: '11-landscape-project', tag: 'Design', title: 'Ландшафтный дизайн', description: 'Проект по ландшафту для своего участка', metrics: [] },
  { slug: '12-resin-masterclass', tag: 'Art & PR', title: 'Resin Art', description: 'Мастер-класс на форуме смолянистов, 2021', metrics: [], customHref: '/fir_tree_art' },
  { slug: '13-local-tv-report', tag: 'PR & Media', title: 'Интервью', description: 'Репортаж на местном ТВ, 2020', metrics: [], customHref: '/fir_tree_art#interviews' },
  { slug: '14-vertex-homes', tag: 'UX/UI & Web', title: 'Vertex Homes', description: 'UX/UI дизайн для проектов из ЛСТК', metrics: [] }
]

const casesEn: CaseSummary[] = [
  { slug: '05-nick-potapov-site', tag: 'UX/UI · Content', title: 'Nick Potapov Website', description: 'Information architecture and 8 case studies in two languages', metrics: [], customHref: '/case' },
  { slug: '01-insigma', tag: 'Development · PR', title: 'Insigma Group', description: 'PR support for three premium development projects', metrics: [] },
  { slug: '02-contact-real-estate', tag: 'PR & SMM', title: 'Contact Real Estate', description: 'Several hundred publications in 2.5 years — systematic PR work', metrics: [] },
  { slug: '03-pobeda-dizayna', tag: 'PR & Marketing', title: 'Pobeda Dizayna', description: 'PR strategy built from scratch — features in trade glossies and business media', metrics: [] },
  { slug: '04-kart-motors-honda-civic-cup', tag: 'Sports PR', title: 'Honda KART Motors & Honda Civic Cup', description: 'Ad campaigns for a Honda dealership and press office for the Honda Civic Cup', metrics: [] },
  { slug: '06-mafia-assistant', tag: 'Product · UX', title: 'Mafia Digital Assistant', description: 'A Telegram game engine for running offline Mafia games (Python, UX)', metrics: [] },
  { slug: '07-resin-art-school', tag: 'Education · SMM', title: 'Resin Art School', description: 'Student mentoring, live streams, and social media management for an online school', metrics: [], hidden: true },
  { slug: '08-mockup-real-estate', tag: 'UX/UI & Real Estate', title: 'Doors Real Estate: Premium Agency', description: 'UX research, 4 color schemes by market segment, and a smart filter for 1366px screens', metrics: [{ value: '+24.8%', label: 'Inquiries' }, { value: '4 schemes', label: 'Color systems' }] },
  { slug: '09-mockup-electronics', tag: 'UX/UI & E-Commerce', title: 'Shop 4.0: Electronics Store', description: 'UX research, conversion analytics, mobile checkout flow, and a design system', metrics: [{ value: '+18.4%', label: 'CR' }, { value: '48 s', label: 'Checkout' }] },
  { slug: '10-house-project', tag: 'Interior · Architecture', title: 'Country House Interior', description: 'Full cycle: floor plans, 3D axonometry, electrical layout, and 100% real-life execution', metrics: [{ value: '140 m²', label: 'Area' }, { value: '100%', label: 'Built' }] },
  { slug: '11-landscape-project', tag: 'Design', title: 'Landscape Design', description: 'A landscape design project for my own property', metrics: [] },
  { slug: '12-resin-masterclass', tag: 'Art & PR', title: 'Resin Art', description: 'A masterclass at a resin artists’ forum, 2021', metrics: [], customHref: '/fir_tree_art' },
  { slug: '13-local-tv-report', tag: 'PR & Media', title: 'Interview', description: 'A feature on local TV, 2020', metrics: [], customHref: '/fir_tree_art#interviews' },
  { slug: '14-vertex-homes', tag: 'UX/UI & Web', title: 'Vertex Homes', description: 'UX/UI design for a light-gauge steel frame construction company', metrics: [] }
]

export const casesByLang: Record<Lang, CaseSummary[]> = { RU: casesRu, EN: casesEn }
export function getCases(lang: Lang) {
  return casesByLang[lang]
}
export const cases = casesRu

const caseDetailsRu: Record<string, CaseDetail> = {
  '01-insigma': {
    slug: '01-insigma',
    tag: 'Девелопмент · PR',
    title: 'ГК Insigma',
    lead: 'В роли PR-директора в ГК Insigma отвечала за PR-сопровождение девелоперских проектов премиум-класса. Главные направления работы: вывод на рынок собрания клубных домов Ordynka, организация масштабного пресс-тура в готовый квартал RedSide и участие в разработке концепции для ЖК NV\'9.',
    meta: {
      client: 'ГК Insigma',
      role: 'PR-директор',
      year: '2016–2019'
    },
    keyMetrics: [
      { value: 'Ordynka', label: 'вывод на рынок' },
      { value: 'RedSide', label: 'масштабный пресс-тур' },
      { value: 'NV\'9', label: 'разработка концепции' }
    ],
    sections: [
      {
        id: 'ordynka',
        heading: 'Вывод на рынок: собрание клубных домов Ordynka',
        paragraphs: [
          'Клубный комплекс в самом сердце Замоскворечья — на месте бывшей купеческой усадьбы. Уникальная концепция: реконструированные дореволюционные фасады в сочетании с современными корпусами.',
          'Осуществлён успешный вывод проекта на рынок и запуск PR-кампании, организована масштабная пресс-конференция, инициировано свыше сотни публикаций.'
        ]
      },
      {
        id: 'redside',
        heading: 'Пресс-тур: Квартал RedSide',
        paragraphs: [
          'Квартал из 8 монолитно-кирпичных корпусов в Пресненском районе. Строительство было успешно завершено, и комплекс был сдан в 2017 году. В рамках продвижения готового объекта был организован масштабный пресс-тур для журналистов ведущих изданий.'
        ]
      },
      {
        id: 'nv9',
        heading: 'Разработка концепции: ЖК NV\'9',
        paragraphs: [
          'Участие в разработке первоначальной маркетинговой стратегии и концепции для нового жилого комплекса премиум-класса, закладывание основ для его успешного позиционирования.'
        ]
      },
      {
        id: 'actions',
        heading: 'Что было сделано в компании',
        steps: [
          'Разработка PR-стратегий и их реализация.',
          'Вывод на рынок нового проекта, PR-сопровождение.',
          'Участие в разработке маркетинговой стратегии, POSM-материалов, буклетов, презентаций.',
          'Организация пресс-туров, PR-сопровождение мероприятий (составление пресс-релизов, инициирование публикаций).',
          'Организация участия спикеров в конференциях и мероприятиях, касающихся рынка недвижимости.',
          'Регулярная работа с сайтами проектов, создание контента.',
          'Участие в разработке SMM-стратегии.'
        ]
      },
      {
        id: 'media',
        heading: 'Медиа-присутствие',
        paragraphs: [
          'За время работы вышли публикации в ведущих СМИ рынка недвижимости и федеральных СМИ РФ (РБК-Недвижимость, Ведомости, Forbes, КоммерсантЪ, РИА Недвижимость и др.), а также на зарубежных тематических порталах по архитектуре и строительству.'
        ]
      }
    ]
  },
  '02-contact-real-estate': {
    slug: '02-contact-real-estate',
    tag: 'PR & SMM',
    title: 'Contact Real Estate',
    lead: 'Разработка и реализация PR-стратегии для элитного агентства недвижимости. Выстраивание долгосрочных отношений с журналистами, регулярное инициирование публикаций и полное ведение SMM-каналов агентства.',
    meta: {
      client: 'Contact Real Estate',
      role: 'PR-директор',
      year: '2014–2016'
    },
    keyMetrics: [
      { value: '300+', label: 'публикаций в СМИ за 2,5 года' },
      { value: '0 ₽', label: 'бюджет на публикации' },
      { value: 'ТОП-5', label: 'агентств элитной недвижимости' }
    ],
    sections: [
      {
        id: 'strategy',
        heading: 'Стратегия и задачи',
        paragraphs: [
          'Главная цель заключалась в укреплении позиций Contact Real Estate на высококонкурентном рынке элитной недвижимости Москвы. Требовалось выстроить системную работу с ведущими деловыми и отраслевыми СМИ для подтверждения экспертности агентства.'
        ]
      },
      {
        id: 'actions',
        heading: 'Что было сделано',
        steps: [
          'Разработка PR-стратегии и последующая реализация.',
          'За время работы по итогам рассылки пресс-релизов, экспертных мнений, статей и комментариев вышло несколько сотен публикаций в ведущих СМИ рынка недвижимости и федеральных СМИ, включая такие издания как РБК, Ведомости, Коммерсант, Лента, РИА Новости, B-fm, Ъ-fm, Интерфакс, телеканалы Москва24, РБК-ТВ и многие другие.',
          'SMM. Ежемесячное наполнение контентом группы в Facebook (Contact Real Estate), а также создание общей группы Top Brokers Alliance. Регулярная таргетированная реклама объектов.',
          'Ежемесячная подготовка клиентских рассылок, осуществлено не меньше сотни рассылок.',
          'Организация мероприятий по итогам отчётных периодов, PR-сопровождение мероприятий (составление пресс-релизов, инициирование публикаций).',
          'Организация участия спикеров в конференциях и мероприятиях, касающихся рынка недвижимости.',
          'Регулярная работа с сайтом и лендингами, исправлено и дополнено несколько сотен текстов (в рамках СЕО-кампании).'
        ]
      },
      {
        id: 'results',
        heading: 'Результат',
        paragraphs: [
          'Узнаваемость бренда в профессиональной среде значительно возросла, что помогло агентству стабильно удерживать позиции в ТОП-5.'
        ],
        callout: 'Системный PR позволил сделать бренд узнаваемым и авторитетным без раздутого маркетингового бюджета на прямую рекламу в прессе.'
      }
    ]
  },
  '03-pobeda-dizayna': {
    slug: '03-pobeda-dizayna',
    tag: 'PR & Маркетинг',
    title: 'Победа Дизайна',
    lead: 'Разработка коммуникационной стратегии, позиционирования и запуск медиа-кампании для архитектурного бюро с нуля. SMM-продвижение и работа с ведущими деловыми и профильными СМИ.',
    meta: {
      client: 'Победа Дизайна',
      role: 'PR-директор',
      year: '2013'
    },
    keyMetrics: [
      { value: 'С нуля', label: 'PR-стратегия' },
      { value: 'AD, Interni', label: 'публикации в глянце' },
      { value: 'Контент', label: 'создание текстов для сайта' }
    ],
    sections: [
      {
        id: 'strategy',
        heading: 'Стратегия и SMM',
        paragraphs: [
          'За время работы с нуля разработала PR-стратегию и внедрила конкретные предложения, которые оказали благотворное влияние на работу компании, а также поспособствовала активному продвижению рекламной кампании в СМИ и интернете.',
          'Обеспечила регулярное упоминание об архитектурном бюро в интернете, параллельно занимаясь SMM-продвижением «Победы дизайна» в социальных сетях и блогосфере.'
        ]
      },
      {
        id: 'actions',
        heading: 'Что было сделано',
        steps: [
          'Разработка и реализация рекламной кампании в СМИ и интернете.',
          'Регулярный мониторинг внутрикорпоративной информации (объекты, события) с целью создания информационных поводов и подготовки материалов для СМИ и интернета.',
          'Подготовка новостей и материалов для публикации их в СМИ и интернете.',
          'Инициирование публикаций на страницах ведущих изданий в сфере архитектуры и дизайна.',
          'Привлечение сотрудников компании в качестве экспертов в обзорных, аналитических и тематических статьях в СМИ.',
          'Обеспечение участия представителей компании в работе специализированных выставок, конкурсов, конференций и семинаров.',
          'Контроль мониторинга СМИ и медиа-планирование.',
          'Составление медиа-карты и пула лояльных журналистов.',
          'Составление графика тематических мероприятий.',
          'Маркетинговые исследования.',
          'SMM, ведение корпоративной группы в социальных сетях (Facebook, ЖЖ).',
          'Участие в разработке креативных концепций.',
          'Контроль над размещением информации на сайте, взаимодействие с подрядными организациями (SEO, контекст, оптимизация и т.д.).'
        ]
      },
      {
        id: 'media',
        heading: 'Медиа-присутствие',
        paragraphs: [
          'Материалы о компании были подготовлены к выходу на страницах ведущих изданий об архитектуре и дизайне (AD, Interni, Идеи Вашего Дома, Красивые Квартиры, РБК.Недвижимость и др.).'
        ]
      }
    ]
  },
  '04-kart-motors-honda-civic-cup': {
    slug: '04-kart-motors-honda-civic-cup',
    tag: 'Спорт PR & Реклама',
    title: 'КАРТ Моторс & Honda Civic Cup',
    lead: 'В рамках работы в КАРТ Моторс совмещала два направления: рекламные кампании официального дилерского центра Honda и PR-сопровождение монокубковой гоночной серии Honda Civic Cup. Выезжала на этапы по всей России — организовывала пресс-зоны, приглашала телевидение, писала статьи в автомобильные журналы, инициировала публикации в профильных медиа.',
    meta: {
      client: 'КАРТ Моторс (Honda)',
      role: 'Реклама + Пресс-атташе',
      year: '2008–2009'
    },
    keyMetrics: [
      { value: '6–8', label: 'этапов в сезон (РФ и Финляндия)' },
      { value: '7ТВ, М1', label: 'ТВ-съёмочные группы и сюжеты' },
      { value: '«Мотор»', label: 'и ведущие автожурналы' }
    ],
    sections: [
      {
        id: 'dealer-campaigns',
        heading: 'Рекламные кампании дилерского центра Honda',
        steps: [
          'Планирование и размещение комплексных рекламных кампаний Honda: наружная реклама, digital, радио, ATL-форматы;',
          'Запуск сезонных спецпредложений и стимулирующих акций по всему модельному ряду Honda;',
          'Координация полного цикла производства рекламных и POSM-материалов с полиграфическими и дизайн-студиями;',
          'Прямое взаимодействие с официальным представительством Honda Motor RUS.'
        ]
      },
      {
        id: 'civic-cup-press',
        heading: 'Пресс-служба Honda Civic Cup (RTCC)',
        paragraphs: [
          'Honda Civic Cup — официальная монокубковая гоночная серия Honda в России, проводившаяся в рамках Чемпионата России по кольцевым гонкам (RTCC). Организатор серии — автоспортивное подразделение Racing Art / КАРТ Моторс.'
        ],
        callout: 'Монокубок Honda Civic Cup стал одной из самых зрелищных и плотных серий в российском туринге RTCC, собирая полные трибуны и широкое освещение на ТВ.',
        steps: [
          'Организация работы пресс-зоны на автодромах, координация и аккредитация журналистов;',
          'Приглашение, встреча и полное сопровождение ТВ-съёмочных групп (7ТВ, М1, Рамблер);',
          'Написание авторских статей и обзоров гонок для профильных автомобильных журналов;',
          'Инициирование регулярных публикаций в профильных медиа (включая журнал «Мотор»);',
          'Оперативная подготовка пресс-релизов, экспресс-комментариев и цитат пилотов после каждого заезда.'
        ]
      }
    ]
  },
  '05-nick-potapov-site': {
    slug: '05-nick-potapov-site',
    tag: 'UX/UI · Контент',
    title: 'Сайт Nick Potapov',
    lead: 'Разработка информационной архитектуры (IA), UX-проектирование и создание двуязычного контента для личного сайта-портфолио AI-архитектора. Подготовка текстов для 8 кейсов.',
    meta: {
      client: 'Nick Potapov',
      role: 'Контент / UX',
      year: '2023',
      link: 'https://nickpotapov.com/'
    },
    keyMetrics: [
      { value: '8', label: 'упакованных ИТ-кейсов' },
      { value: '2', label: 'языка: RU и EN' },
      { value: 'UX/UI', label: 'продуманная структура' }
    ],
    sections: [
      {
        id: 'theme-terminal',
        heading: 'Дизайн-концепт и стилистика',
        paragraphs: [
          'Главной задачей было отразить профессиональную специфику AI-архитектора, сохранив при этом удобство чтения. Основой визуального стиля стала терминальная (хакерская) эстетика — моноширинные элементы, консольные команды, акцентный зеленый цвет на черном фоне.',
          'Были разработаны полноценные Светлая и Тёмная темы. Тёмная тема отсылает к IDE и коду, создавая нужную атмосферу для разработчиков, а светлая делает акцент на чистоту и удобочитаемость текста для HR и бизнеса.'
        ]
      },
      {
        id: 'typography-layout',
        heading: 'Типографика и вёрстка',
        steps: [
          'Шрифты: Использование рубленых гротесков в сочетании с моноширинными шрифтами (Monospace) для заголовков, блоков кода и мета-тегов, чтобы поддержать IT-стилистику.',
          'Вёрстка: Строгая модульная сетка, адаптивный дизайн (Mobile First) и карточная система для отображения кейсов, обеспечивающая быстрый сканнинг информации.',
          'Тексты: Написание лаконичного, структурированного IT-контента. Вся сложная техническая информация упакована в понятные тезисы с акцентом на бизнес-метрики и результат. Полная адаптация на два языка (RU/EN).'
        ]
      },
      {
        id: 'visual-fx',
        heading: 'Визуальные эффекты и иллюстрации',
        paragraphs: [
          'Для вовлечения пользователя добавлены микроанимации: эффект печатной машинки, плавные появления элементов при скролле (fade-in), hover-эффекты на карточках.',
          'Вместо скучных стоковых фото были подобраны и стилизованы абстрактные 3D-иллюстрации и мокапы, которые подчеркивают инновационность и технологичность проектов, не перегружая при этом интерфейс.'
        ]
      }
    ]
  },
  '06-mafia-assistant': {
    slug: '06-mafia-assistant',
    tag: 'Product · UX',
    title: 'Mafia Digital Assistant',
    lead: 'Замена блокнота и ручки на умного Telegram-ассистента. Разработка полноценного игрового движка, который помогает ведущему вести офлайн-игры на 16+ человек со сложными кастомными ролями, контролирует логику фаз и автоматически обновляет рейтинг клуба в Google Sheets.',
    meta: {
      client: 'Pet-проект',
      role: 'Fullstack (Python) / UX',
      year: '2026'
    },
    keyMetrics: [
      { value: '3000+', label: 'строк кода на Python' },
      { value: '10+', label: 'ролей со сложной логикой' },
      { value: '0', label: 'ошибок логики за столом' }
    ],
    sections: [
      {
        id: 'context',
        heading: 'Контекст и проблематика',
        paragraphs: [
          'Когда в Мафию играют 10-16 человек, а в игре помимо мафиози есть Дон, Путана, Шериф, Доктор и Маньяк — роль ведущего превращается в стресс. Нужно запоминать все ночные ходы, не запутаться в порядке просыпания и в том, чьё действие было заблокировано.',
          'Раньше мы использовали Google Apps Script для автоматизации, но он не тянул сложную логику и тормозил. В итоге был написан с нуля полноценный игровой движок на 3000+ строк кода, работающий через Telegram.'
        ]
      },
      {
        id: 'logic-ux',
        heading: 'UX и Логика',
        steps: [
          'Валидатор (Защита от ошибок): Если ведущий пытается сделать нелегальный ход (например, походить за мёртвого игрока), бот выдаст алерт и не пропустит действие.',
          'Протокол (UX ведения): Ведущий просто нажимает inline-кнопки в Telegram, а бот сам разрешает конфликты действий (отстрел/блок/лечение) и ведёт подробный лог.',
          'Big Data (Интеграции): Вся статистика выгружается напрямую в красивые дашборды Google Sheets. Клуб видит винрейты игроков, частоту выживаемости ролей и прозрачный лидерборд.'
        ]
      }
    ]
  },
  '07-resin-art-school': {
    slug: '07-resin-art-school',
    tag: 'Образование · SMM',
    title: 'Resin Art School',
    lead: 'Полное сопровождение онлайн-школы творчества: от ведения социальных сетей (SMM) до кураторства студентов. Проведение обучающих прямых эфиров и коммуникация с учениками.',
    meta: {
      client: 'Онлайн-школа',
      role: 'Куратор / SMM',
      year: '2020–2021'
    },
    keyMetrics: [
      { value: 'SMM', label: 'рост охватов' },
      { value: 'Live', label: 'регулярные эфиры' },
      { value: '500+', label: 'поддержка учеников' }
    ]
  },
  '08-mockup-real-estate': {
    slug: '08-mockup-real-estate',
    tag: 'UX/UI & Real Estate',
    title: 'Doors Real Estate: Премиум-агентство недвижимости',
    lead: 'UX-исследования, 4 колористические схемы под сегменты рынка, смарт-фильтр первого экрана и адаптивный мобильный опыт.',
    meta: {
      client: 'Doors Real Estate Agency',
      role: 'Lead UX/UI & Product Designer',
      year: '2023–2024'
    },
    keyMetrics: [
      { value: '+24.8%', label: 'Заявки на просмотр' },
      { value: '38 с', label: 'Время подбора лота' },
      { value: '4 схемы', label: 'Колористика' },
      { value: '86/100', label: 'SUS Score' }
    ]
  },
  '09-mockup-electronics': {
    slug: '09-mockup-electronics',
    tag: 'UI/UX & Web',
    title: 'Магазин электроники',
    lead: 'Разработка визуальной концепции и UX-флоу для интернет-магазина электроники.',
    meta: {
      client: 'Pet-проект',
      role: 'UI/UX Дизайнер',
      year: '2023'
    },
    keyMetrics: [
      { value: 'eCommerce', label: 'Пользовательский путь' },
      { value: 'Mobile First', label: 'Адаптивный дизайн' }
    ]
  },
  '10-house-project': {
    slug: '10-house-project',
    tag: 'Interior & Architecture',
    title: 'Интерьер загородного дома',
    lead: 'Скандинавский эко-минимализм: планировочные решения, 3D-аксонометрия, электрические схемы и 100% реализация в жизни.',
    meta: {
      client: 'Личный загородный дом',
      role: 'Автор проекта, архитектор-дизайнер',
      year: '2021 — 2023'
    },
    keyMetrics: [
      { value: '140 м²', label: 'Площадь 2 этажей' },
      { value: '100%', label: 'Реализация и надзор' },
      { value: '5 зон', label: 'Функциональных ядер' }
    ]
  },
  '11-landscape-project': {
    slug: '11-landscape-project',
    tag: 'Design',
    title: 'Ландшафтный дизайн',
    lead: 'Создание проекта ландшафтного дизайна для загородного участка: зонирование, подбор растений, реализация.',
    meta: {
      client: 'Личный проект',
      role: 'Автор проекта',
      year: '2022'
    },
    keyMetrics: [
      { value: 'Зонирование', label: 'Пространственные решения' },
      { value: 'Дендроплан', label: 'Подбор растений' }
    ]
  },
  '12-resin-masterclass': {
    slug: '12-resin-masterclass',
    tag: 'Art & PR',
    title: 'Resin Art',
    customHref: '/fir_tree_art#resin-range',
    lead: 'Организация и проведение мастер-класса по работе со смолой (Resin Art) на профильном форуме.',
    meta: {
      client: 'Форум смолянистов',
      role: 'Спикер / Мастер',
      year: '2021'
    },
    keyMetrics: [
      { value: 'Public Speaking', label: 'Выступление перед аудиторией' },
      { value: 'Resin Art', label: 'Демонстрация техники' }
    ]
  },
  '13-local-tv-report': {
    slug: '13-local-tv-report',
    tag: 'PR & Media',
    title: 'Интервью',
    customHref: '/fir_tree_art#interviews',
    lead: 'Участие в съёмке репортажа на местном телевидении. Организация процесса, подготовка к интервью.',
    meta: {
      client: 'Местное ТВ',
      role: 'Организатор / Герой',
      year: '2020'
    },
    keyMetrics: [
      { value: 'ТВ', label: 'Публичное освещение' },
      { value: 'Media Relations', label: 'Работа со съемочной группой' }
    ]
  },
  '14-vertex-homes': {
    slug: '14-vertex-homes',
    tag: 'UX/UI & Web',
    title: 'Vertex Homes',
    lead: 'Разработка UX/UI дизайна для лендинга строительной компании, специализирующейся на технологии ЛСТК (Легкие стальные тонкостенные конструкции). Упор на инвестиционную привлекательность.',
    meta: {
      client: 'Vertex Homes',
      role: 'UX/UI Дизайнер',
      year: '2023',
      link: 'https://www.figma.com/design/5K61aDGctS46qE2ZajQweN/Vertex-Homes?node-id=0-1&p=f&t=ajOQPNrEWiQVIzsV-0'
    },
    keyMetrics: [
      { value: '3-4', label: 'мес. цикл строительства' },
      { value: '90+', label: 'лет долговечность' },
      { value: '50-70%', label: 'энергоэффективность' }
    ],
    sections: [
      {
        id: 'colors-fonts',
        heading: 'Стиль и Концепция',
        paragraphs: [
          'Основой визуальной концепции стала комбинация строгости, надежности и технологичности. Мы отошли от классических «деревянных» и пестрых строительных сайтов в сторону темной, сдержанной цветовой гаммы (Deep Emerald), которая ассоциируется с премиальным девелопментом и надежными инвестициями.'
        ],
        colorPalette: [
          { hex: '#796D41', name: 'Gold Accent' },
          { hex: '#545743', name: 'Olive Green' },
          { hex: '#222F33', name: 'Deep Emerald' },
          { hex: '#26353A', name: 'Dark Slate' },
          { hex: '#F4F4F4', name: 'Light Grey' },
          { hex: '#FFFFFF', name: 'White' }
        ],
        paragraphs2: [
          'В типографике используется контрастная пара: массивный и уверенный шрифт с засечками Merriweather для заголовков (символизирует надежность) и чистый читабельный Rubik для интерфейсных элементов (отвечает за технологичность).'
        ],
        typography: [
          { name: 'Merriweather', weights: ['Black (900)'], example: 'Aa' },
          { name: 'Rubik', weights: ['Regular (400)', 'Medium (500)', 'Bold (700)'], example: 'Aa' }
        ]
      },
      {
        id: 'layout-grid',
        heading: 'Сетка и Ритм',
        steps: [
          'Модульная структура: Строгая сетка с крупными, «дышащими» отступами, позволяющая легко усваивать большие объемы текста.',
          'Карточная система: Блоки с инфографикой (цифры и факты об ЛСТК) упакованы в карточки для быстрого сканирования инвесторами.',
          'Сравнение (VS): Наглядный сплит-экран, где традиционное строительство противопоставляется технологии ЛСТК (быстрый цикл 3-4 месяца, экономия до 30% на фундаменте).'
        ]
      },
      {
        id: 'landing-page',
        heading: 'Дизайн лендинга',
        paragraphs: [
          'Полный макет главной страницы. Дизайн проработан с учетом восприятия инвесторов: блоки плавно перетекают друг в друга, удерживая внимание на преимуществах технологии и экономической выгоде.'
        ],
        fullPageMockup: '/Кейсы/14-vertex-homes/mockup.webp'
      }
    ]
  }
}

const caseDetailsEn: Record<string, CaseDetail> = {
  '01-insigma': {
    slug: '01-insigma',
    tag: 'Development · PR',
    title: 'Insigma Group',
    lead: 'As PR Director at Insigma Group, I handled PR support for premium development projects. Key work: launching the Ordynka club-house collection, running a large-scale press tour of the completed RedSide quarter, and contributing to the concept for the NV\'9 residential complex.',
    meta: {
      client: 'Insigma Group',
      role: 'PR Director',
      year: '2016–2019'
    },
    keyMetrics: [
      { value: 'Ordynka', label: 'market launch' },
      { value: 'RedSide', label: 'large-scale press tour' },
      { value: 'NV\'9', label: 'concept development' }
    ],
    sections: [
      {
        id: 'ordynka',
        heading: 'Market launch: the Ordynka club-house collection',
        paragraphs: [
          'A club complex at the heart of Zamoskvorechye, built on the site of a former merchant estate. A unique concept: restored pre-revolutionary facades combined with contemporary buildings.',
          'Successfully launched the project on the market and kicked off the PR campaign, organized a large-scale press conference, and initiated over a hundred publications.'
        ]
      },
      {
        id: 'redside',
        heading: 'Press tour: the RedSide quarter',
        paragraphs: [
          'A quarter of 8 monolithic-brick buildings in the Presnensky district. Construction was completed successfully and the complex was handed over in 2017. To promote the finished property, a large-scale press tour was organized for journalists from leading outlets.'
        ]
      },
      {
        id: 'nv9',
        heading: 'Concept development: the NV\'9 residential complex',
        paragraphs: [
          'Contributed to the initial marketing strategy and concept for a new premium residential complex, laying the groundwork for its successful positioning.'
        ]
      },
      {
        id: 'actions',
        heading: 'What I did at the company',
        steps: [
          'Developed PR strategies and carried them through.',
          'Launched a new project on the market with full PR support.',
          'Contributed to marketing strategy, POSM materials, brochures, and presentations.',
          'Organized press tours and PR support for events (press releases, initiating publications).',
          'Arranged for speakers to take part in real-estate industry conferences and events.',
          'Regularly worked on project websites and content.',
          'Contributed to SMM strategy.'
        ]
      },
      {
        id: 'media',
        heading: 'Media presence',
        paragraphs: [
          'Coverage appeared in leading real-estate outlets and national Russian media (RBC-Real Estate, Vedomosti, Forbes, Kommersant, RIA Real Estate, and others), as well as on foreign architecture and construction portals.'
        ]
      }
    ]
  },
  '02-contact-real-estate': {
    slug: '02-contact-real-estate',
    tag: 'PR & SMM',
    title: 'Contact Real Estate',
    lead: 'Developed and executed a PR strategy for a luxury real-estate agency. Built long-term relationships with journalists, regularly initiated publications, and ran the agency’s social media channels end to end.',
    meta: {
      client: 'Contact Real Estate',
      role: 'PR Director',
      year: '2014–2016'
    },
    keyMetrics: [
      { value: '300+', label: 'media placements in 2.5 years' },
      { value: '₽0', label: 'paid-placement budget' },
      { value: 'Top 5', label: 'luxury real-estate agencies' }
    ],
    sections: [
      {
        id: 'strategy',
        heading: 'Strategy and goals',
        paragraphs: [
          'The main goal was to strengthen Contact Real Estate’s position in Moscow’s highly competitive luxury real-estate market. This required building systematic relationships with leading business and trade media to establish the agency’s expertise.'
        ]
      },
      {
        id: 'actions',
        heading: 'What I did',
        steps: [
          'Developed a PR strategy and carried it through.',
          'Press releases, expert commentary, articles, and quotes generated several hundred placements in leading real-estate and national media, including RBC, Vedomosti, Kommersant, Lenta, RIA Novosti, B-fm, Kommersant FM, Interfax, Moscow24 and RBC-TV, among many others.',
          'SMM: monthly content for the Contact Real Estate Facebook group, plus building the shared Top Brokers Alliance group. Regular targeted advertising for listings.',
          'Monthly client newsletters — at least a hundred sent over the engagement.',
          'Organized events around reporting periods, with full PR support (press releases, initiating coverage).',
          'Arranged for speakers to take part in real-estate industry conferences and events.',
          'Regularly worked on the website and landing pages — fixed and expanded several hundred pieces of copy as part of an SEO campaign.'
        ]
      },
      {
        id: 'results',
        heading: 'Result',
        paragraphs: [
          'Brand recognition within the professional community grew significantly, helping the agency consistently hold a Top 5 position.'
        ],
        callout: 'Systematic PR made the brand recognizable and credible without a bloated marketing budget for paid press placements.'
      }
    ]
  },
  '03-pobeda-dizayna': {
    slug: '03-pobeda-dizayna',
    tag: 'PR & Marketing',
    title: 'Pobeda Dizayna',
    lead: 'Built a communications strategy, positioning, and media campaign for an architecture studio from scratch. Social media promotion and work with leading business and trade media.',
    meta: {
      client: 'Pobeda Dizayna',
      role: 'PR Director',
      year: '2013'
    },
    keyMetrics: [
      { value: 'From zero', label: 'PR strategy' },
      { value: 'AD, Interni', label: 'glossy placements' },
      { value: 'Content', label: 'website copywriting' }
    ],
    sections: [
      {
        id: 'strategy',
        heading: 'Strategy and SMM',
        paragraphs: [
          'Built a PR strategy from scratch and rolled out concrete initiatives that meaningfully improved the company’s standing, while also driving an active ad campaign across media and online.',
          'Secured regular online mentions of the studio while running SMM for Pobeda Dizayna across social media and the blogosphere.'
        ]
      },
      {
        id: 'actions',
        heading: 'What I did',
        steps: [
          'Developed and ran an ad campaign across media and online.',
          'Regularly monitored internal company information (projects, events) to spot news hooks and prepare materials for media and online.',
          'Prepared news and materials for media and online publication.',
          'Initiated placements in leading architecture and design outlets.',
          'Positioned company staff as experts in industry review, analysis, and feature articles.',
          'Arranged for company representatives to take part in trade shows, competitions, conferences, and seminars.',
          'Oversaw media monitoring and media planning.',
          'Built a media map and a pool of loyal journalists.',
          'Scheduled a calendar of trade events.',
          'Conducted marketing research.',
          'Ran SMM and managed the corporate social media presence (Facebook, LiveJournal).',
          'Contributed to creative concept development.',
          'Oversaw website content and coordinated with vendors (SEO, paid search, optimization, etc.).'
        ]
      },
      {
        id: 'media',
        heading: 'Media presence',
        paragraphs: [
          'Coverage was prepared for leading architecture and design outlets (AD, Interni, Idei Vashego Doma, Krasivye Kvartiry, RBC.Real Estate, and others).'
        ]
      }
    ]
  },
  '04-kart-motors-honda-civic-cup': {
    slug: '04-kart-motors-honda-civic-cup',
    tag: 'Sports PR & Advertising',
    title: 'KART Motors & Honda Civic Cup',
    lead: 'At KART Motors, I combined two roles: ad campaigns for the official Honda dealership and PR support for the Honda Civic Cup one-make racing series. I traveled to race rounds across Russia — setting up press areas, hosting TV crews, writing articles for car magazines, and initiating coverage in trade media.',
    meta: {
      client: 'KART Motors (Honda)',
      role: 'Advertising + Press Officer',
      year: '2008–2009'
    },
    keyMetrics: [
      { value: '6–8', label: 'rounds per season (Russia and Finland)' },
      { value: '7TV, M1', label: 'TV crews and segments' },
      { value: '"Motor"', label: 'and leading car magazines' }
    ],
    sections: [
      {
        id: 'dealer-campaigns',
        heading: 'Honda dealership ad campaigns',
        steps: [
          'Planned and placed full-funnel Honda ad campaigns: out-of-home, digital, radio, ATL formats;',
          'Launched seasonal promotions and incentive offers across the full Honda lineup;',
          'Coordinated the full production cycle of ad and POSM materials with print and design studios;',
          'Worked directly with the official Honda Motor RUS representative office.'
        ]
      },
      {
        id: 'civic-cup-press',
        heading: 'Honda Civic Cup press office (RTCC)',
        paragraphs: [
          'Honda Civic Cup was Honda’s official one-make racing series in Russia, run as part of the Russian Touring Car Championship (RTCC). The series was organized by Racing Art / KART Motors, the group’s motorsport division.'
        ],
        callout: 'The Honda Civic Cup became one of the most spectacular, tightly-contested series in Russian RTCC touring car racing, drawing full stands and broad TV coverage.',
        steps: [
          'Ran the press area at race tracks, coordinating and accrediting journalists;',
          'Invited, hosted, and fully supported TV crews (7TV, M1, Rambler);',
          'Wrote original articles and race reviews for trade car magazines;',
          'Initiated regular coverage in trade media (including "Motor" magazine);',
          'Turned around press releases, quick comments, and driver quotes after every race.'
        ]
      }
    ]
  },
  '05-nick-potapov-site': {
    slug: '05-nick-potapov-site',
    tag: 'UX/UI · Content',
    title: 'Nick Potapov Website',
    lead: 'Information architecture (IA), UX design, and bilingual content for the personal portfolio site of an AI architect. Wrote copy for 8 case studies.',
    meta: {
      client: 'Nick Potapov',
      role: 'Content / UX',
      year: '2023',
      link: 'https://nickpotapov.com/'
    },
    keyMetrics: [
      { value: '8', label: 'IT case studies packaged' },
      { value: '2', label: 'languages: RU and EN' },
      { value: 'UX/UI', label: 'thought-through structure' }
    ],
    sections: [
      {
        id: 'theme-terminal',
        heading: 'Design concept and style',
        paragraphs: [
          'The main goal was to reflect the AI architect’s professional niche while keeping the site easy to read. The visual style is built around a terminal (hacker) aesthetic — monospace elements, console commands, an accent green on black.',
          'Built full Light and Dark themes. Dark evokes an IDE and code, setting the right mood for developers; Light emphasizes clarity and readability for HR and business readers.'
        ]
      },
      {
        id: 'typography-layout',
        heading: 'Typography and layout',
        steps: [
          'Fonts: sans-serif grotesques paired with monospace type for headings, code blocks, and meta tags to reinforce the IT feel.',
          'Layout: a strict modular grid, mobile-first responsive design, and a card system for case studies that makes information easy to scan.',
          'Copy: concise, structured IT content. Complex technical detail is packaged into clear talking points that foreground business metrics and outcomes. Fully localized into two languages (RU/EN).'
        ]
      },
      {
        id: 'visual-fx',
        heading: 'Visual effects and illustration',
        paragraphs: [
          'Added micro-animations for engagement: a typewriter effect, smooth fade-ins on scroll, and hover effects on cards.',
          'Instead of generic stock photos, chose and styled abstract 3D illustrations and mockups that emphasize innovation and technical polish without cluttering the interface.'
        ]
      }
    ]
  },
  '06-mafia-assistant': {
    slug: '06-mafia-assistant',
    tag: 'Product · UX',
    title: 'Mafia Digital Assistant',
    lead: 'Replacing a notepad and pen with a smart Telegram assistant. Built a full game engine that helps a host run offline Mafia games for 16+ players with complex custom roles, tracks phase logic, and automatically updates the club’s rankings in Google Sheets.',
    meta: {
      client: 'Personal project',
      role: 'Fullstack (Python) / UX',
      year: '2026'
    },
    keyMetrics: [
      { value: '3,000+', label: 'lines of Python' },
      { value: '10+', label: 'roles with complex logic' },
      { value: '0', label: 'logic errors at the table' }
    ],
    sections: [
      {
        id: 'context',
        heading: 'Context and the problem',
        paragraphs: [
          'When 10–16 people play Mafia, with roles beyond the mafiosi like the Don, Seductress, Sheriff, Doctor, and Maniac, hosting turns into a stress test. You have to remember every night action, keep the wake-up order straight, and track whose action got blocked.',
          'We used to automate this with Google Apps Script, but it couldn’t handle the complex logic and ran slowly. So I built a full game engine from scratch — 3,000+ lines of code, running through Telegram.'
        ]
      },
      {
        id: 'logic-ux',
        heading: 'UX and logic',
        steps: [
          'Validator (error-proofing): if the host tries an illegal move — say, acting for a dead player — the bot raises an alert and blocks the action.',
          'Protocol (hosting UX): the host just taps inline buttons in Telegram, and the bot resolves action conflicts (kill/block/heal) itself while keeping a detailed log.',
          'Big data (integrations): all stats flow straight into clean Google Sheets dashboards. The club sees player win rates, role survival frequency, and a transparent leaderboard.'
        ]
      }
    ]
  },
  '07-resin-art-school': {
    slug: '07-resin-art-school',
    tag: 'Education · SMM',
    title: 'Resin Art School',
    lead: 'Full support for an online creative school: from social media management to student mentoring. Ran live teaching sessions and handled student communication.',
    meta: {
      client: 'Online school',
      role: 'Mentor / SMM',
      year: '2020–2021'
    },
    keyMetrics: [
      { value: 'SMM', label: 'reach growth' },
      { value: 'Live', label: 'regular streams' },
      { value: '500+', label: 'students supported' }
    ]
  },
  '08-mockup-real-estate': {
    slug: '08-mockup-real-estate',
    tag: 'UX/UI & Real Estate',
    title: 'Doors Real Estate: Premium Agency',
    lead: 'UX research, 4 color schemes by market segment, a smart above-the-fold filter, and a responsive mobile experience.',
    meta: {
      client: 'Doors Real Estate Agency',
      role: 'Lead UX/UI & Product Designer',
      year: '2023–2024'
    },
    keyMetrics: [
      { value: '+24.8%', label: 'Viewing requests' },
      { value: '38 s', label: 'Time to find a listing' },
      { value: '4 schemes', label: 'Color systems' },
      { value: '86/100', label: 'SUS Score' }
    ]
  },
  '09-mockup-electronics': {
    slug: '09-mockup-electronics',
    tag: 'UI/UX & Web',
    title: 'Electronics Store',
    lead: 'Built the visual concept and UX flow for an electronics e-commerce store.',
    meta: {
      client: 'Personal project',
      role: 'UI/UX Designer',
      year: '2023'
    },
    keyMetrics: [
      { value: 'eCommerce', label: 'User journey' },
      { value: 'Mobile First', label: 'Responsive design' }
    ]
  },
  '10-house-project': {
    slug: '10-house-project',
    tag: 'Interior & Architecture',
    title: 'Country House Interior',
    lead: 'Scandinavian eco-minimalism: floor plans, 3D axonometry, electrical layouts, and 100% real-life execution.',
    meta: {
      client: 'Personal country house',
      role: 'Project author, architect-designer',
      year: '2021 — 2023'
    },
    keyMetrics: [
      { value: '140 m²', label: 'Across 2 floors' },
      { value: '100%', label: 'Built and supervised' },
      { value: '5 zones', label: 'Functional cores' }
    ]
  },
  '11-landscape-project': {
    slug: '11-landscape-project',
    tag: 'Design',
    title: 'Landscape Design',
    lead: 'Designed a landscape project for a country property: zoning, plant selection, and execution.',
    meta: {
      client: 'Personal project',
      role: 'Project author',
      year: '2022'
    },
    keyMetrics: [
      { value: 'Zoning', label: 'Spatial planning' },
      { value: 'Planting plan', label: 'Plant selection' }
    ]
  },
  '12-resin-masterclass': {
    slug: '12-resin-masterclass',
    tag: 'Art & PR',
    title: 'Resin Art',
    customHref: '/fir_tree_art#resin-range',
    lead: 'Organized and led a resin art masterclass at a trade forum.',
    meta: {
      client: 'Resin artists’ forum',
      role: 'Speaker / Instructor',
      year: '2021'
    },
    keyMetrics: [
      { value: 'Public Speaking', label: 'Speaking to an audience' },
      { value: 'Resin Art', label: 'Technique demonstration' }
    ]
  },
  '13-local-tv-report': {
    slug: '13-local-tv-report',
    tag: 'PR & Media',
    title: 'Interview',
    customHref: '/fir_tree_art#interviews',
    lead: 'Took part in a local TV news feature. Organized the process and prepared for the interview.',
    meta: {
      client: 'Local TV',
      role: 'Organizer / Featured guest',
      year: '2020'
    },
    keyMetrics: [
      { value: 'TV', label: 'Public coverage' },
      { value: 'Media Relations', label: 'Worked with the film crew' }
    ]
  },
  '14-vertex-homes': {
    slug: '14-vertex-homes',
    tag: 'UX/UI & Web',
    title: 'Vertex Homes',
    lead: 'UX/UI design for the landing page of a construction company specializing in light-gauge steel frame (LGSF) building. Focused on investment appeal.',
    meta: {
      client: 'Vertex Homes',
      role: 'UX/UI Designer',
      year: '2023',
      link: 'https://www.figma.com/design/5K61aDGctS46qE2ZajQweN/Vertex-Homes?node-id=0-1&p=f&t=ajOQPNrEWiQVIzsV-0'
    },
    keyMetrics: [
      { value: '3–4', label: 'month build cycle' },
      { value: '90+', label: 'years of durability' },
      { value: '50–70%', label: 'energy efficiency' }
    ],
    sections: [
      {
        id: 'colors-fonts',
        heading: 'Style and concept',
        paragraphs: [
          'The visual concept combines rigor, reliability, and technical polish. We moved away from the classic "wooden" and busy construction-site look toward a dark, restrained palette (Deep Emerald) that reads as premium development and dependable investment.'
        ],
        colorPalette: [
          { hex: '#796D41', name: 'Gold Accent' },
          { hex: '#545743', name: 'Olive Green' },
          { hex: '#222F33', name: 'Deep Emerald' },
          { hex: '#26353A', name: 'Dark Slate' },
          { hex: '#F4F4F4', name: 'Light Grey' },
          { hex: '#FFFFFF', name: 'White' }
        ],
        paragraphs2: [
          'The type pairing is deliberately contrasting: a bold, confident serif, Merriweather, for headings (signaling reliability) and a clean, readable Rubik for interface elements (signaling technical polish).'
        ],
        typography: [
          { name: 'Merriweather', weights: ['Black (900)'], example: 'Aa' },
          { name: 'Rubik', weights: ['Regular (400)', 'Medium (500)', 'Bold (700)'], example: 'Aa' }
        ]
      },
      {
        id: 'layout-grid',
        heading: 'Grid and rhythm',
        steps: [
          'Modular structure: a strict grid with generous, "breathing" spacing that makes large amounts of text easy to absorb.',
          'Card system: infographic blocks (LGSF facts and figures) packaged into cards for quick scanning by investors.',
          'Comparison (VS): a clear split-screen contrasting traditional construction with LGSF technology (a fast 3–4 month cycle, up to 30% savings on the foundation).'
        ]
      },
      {
        id: 'landing-page',
        heading: 'Landing page design',
        paragraphs: [
          'The full homepage layout. Designed with investor perception in mind: sections flow smoothly into one another, keeping attention on the technology’s advantages and the economics.'
        ],
        fullPageMockup: '/Кейсы/14-vertex-homes/mockup.webp'
      }
    ]
  }
}

export const caseDetailsByLang: Record<Lang, Record<string, CaseDetail>> = { RU: caseDetailsRu, EN: caseDetailsEn }
export function getCaseDetails(lang: Lang) {
  return caseDetailsByLang[lang]
}
export const caseDetails = caseDetailsRu

export const navLinksByLang: Record<Lang, { href: string; label: string }[]> = {
  RU: [
    { href: '#about', label: 'Обо мне' },
    { href: '#cases', label: 'Кейсы' },
    { href: '#contact', label: 'Контакты' },
  ],
  EN: [
    { href: '#about', label: 'About' },
    { href: '#cases', label: 'Case Studies' },
    { href: '#contact', label: 'Contact' },
  ],
}
export const navLinks = navLinksByLang.RU

export type Project = CaseSummary;
export const projects = cases;
