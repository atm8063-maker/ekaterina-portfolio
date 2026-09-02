export const siteData = {
  name: 'Екатерина Разумова',
  role: 'PR-директор',
  subtitle: 'PR & Communications',
  description:
    'PR-сопровождение брендов, медиа-стратегии, вывод новых продуктов на рынок, работа с федеральными СМИ и личный бренд.',
  telegram: {
    dm: '@ekaterina_razumova', // TODO: update with actual handle
  },
  linkedin: 'https://www.linkedin.com/', // TODO: update with actual handle
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
}

export type CaseSection = {
  id: string
  heading: string
  paragraphs?: string[]
  steps?: string[]
  callout?: string
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
  }
  keyMetrics: Metric[]
  sections?: CaseSection[]
}

export const cases: CaseSummary[] = [
  { slug: '01-insigma', tag: 'Девелопмент · PR', title: 'ГК Insigma', description: 'PR-сопровождение трёх девелоперских проектов премиум-класса', metrics: [] },
  { slug: '02-contact-real-estate', tag: 'PR & SMM', title: 'Contact Real Estate', description: 'Несколько сотен публикаций за 2,5 года — системная PR-работа', metrics: [] },
  { slug: '03-pobeda-dizayna', tag: 'PR & Маркетинг', title: 'Победа Дизайна', description: 'PR-стратегия с нуля — публикации на РБК и первый в Москве дизайн-бранч', metrics: [] },
  { slug: '04-kart-motors-honda-civic-cup', tag: 'Спорт PR', title: 'КАРТ Моторс & Honda', description: 'Рекламные кампании дилера Honda и пресс-служба Кубка Honda Civic Cup', metrics: [] },
  { slug: '05-nick-potapov-site', tag: 'UX/UI · Контент', title: 'Сайт Nick Potapov', description: 'Информационная архитектура и 8 кейсов на двух языках', metrics: [] },
  { slug: '06-mafia-assistant', tag: 'Product · UX', title: 'Mafia Digital Assistant', description: 'Концепция и UX Telegram-бота для офлайн-игр в Мафию', metrics: [] },
  { slug: '07-resin-art-school', tag: 'Образование · SMM', title: 'Resin Art School', description: 'Кураторство учеников, прямые эфиры и ведение SMM онлайн-школы', metrics: [] },
  { slug: '08-mockup-real-estate', tag: 'UI/UX & Web', title: 'Агентство недвижимости', description: 'Мокап агентства недвижимости, 2023', metrics: [] },
  { slug: '09-mockup-electronics', tag: 'UI/UX & Web', title: 'Магазин электроники', description: 'Мокап магазина с электроникой, 2023', metrics: [] },
  { slug: '10-house-project', tag: 'Design', title: 'Проект дома', description: 'Проект своего дома, визуализация, реализация', metrics: [] },
  { slug: '11-landscape-project', tag: 'Design', title: 'Ландшафтный дизайн', description: 'Проект по ландшафту для своего участка', metrics: [] },
  { slug: '12-resin-masterclass', tag: 'Art & PR', title: 'Мастер-класс', description: 'Мастер-класс на форуме смолянистов, 2021', metrics: [] },
  { slug: '13-local-tv-report', tag: 'PR & Media', title: 'ТВ Репортаж', description: 'Репортаж на местном ТВ, 2020', metrics: [] }
]

export const caseDetails: Record<string, CaseDetail> = {
  '01-insigma': {
    slug: '01-insigma',
    tag: 'Девелопмент · PR',
    title: 'ГК Insigma',
    lead: 'Три года в роли PR-директора в ГК Insigma: полная PR-стратегия и её реализация для трёх флагманских проектов — собрания клубных домов ORDYNKA, квартала премиум-класса RedSide и ЖК NV\'9. Организация пресс-конференций, пресс-туры на объекты, публикации в профильных и деловых СМИ на всех стадиях — от концепции до ввода.',
    meta: {
      client: 'ГК Insigma',
      role: 'PR-директор',
      year: '2016–2019'
    },
    keyMetrics: [
      { value: '3', label: 'флагманских проекта' },
      { value: '10+', label: 'ведущих федеральных СМИ' },
      { value: '100%', label: 'сопровождение от концепции до сдачи' }
    ],
    sections: [
      {
        id: 'ordynka',
        heading: 'ORDYNKA by BOSCO Casa (Замоскворечье)',
        paragraphs: [
          'Клубный комплекс в самом сердце Замоскворечья — на месте исторической кондитерской фабрики «Рот Фронт» и купеческой усадьбы. Уникальная концепция: реконструированные дореволюционные фасады в сочетании с современными корпусами.',
          'Одной из главных фишек проекта стала эксклюзивная коллаборация с брендом BOSCO Casa. Объект не раз получал престижные архитектурные премии.'
        ]
      },
      {
        id: 'redside',
        heading: 'RedSide (Пресня)',
        paragraphs: [
          'Квартал из 8 монолитно-кирпичных корпусов в Пресненском районе. Проект позиционировался как «тихий город в городе». Строительство было успешно завершено, и комплекс был сдан в 2017 году под моим информационным сопровождением.'
        ]
      },
      {
        id: 'actions',
        heading: 'Что было сделано',
        steps: [
          'Разработала и реализовывала PR-стратегию по всем трём проектам с нуля.',
          'Организовывала масштабные пресс-конференции с участием руководства компании.',
          'Проводила регулярные пресс-туры на объекты на разных стадиях строительства.',
          'Готовила спикеров к интервью, писала пресс-релизы и аналитические комментарии для деловой прессы.',
          'Выстраивала плотное взаимодействие с брокерским сообществом.'
        ]
      },
      {
        id: 'media',
        heading: 'Медиа-присутствие',
        paragraphs: [
          'СМИ, которые активно освещали проекты Insigma в этот период благодаря выстроенным отношениям: Urbanus.ru, Novostroy-M, РБК-Недвижимость, Ведомости, Moskvadeluxe.ru, Avaho.ru, Frommillion.ru, ЕРЗ, mskguru.ru.'
        ],
        callout: 'Системная PR-работа обеспечила постоянное присутствие проектов Insigma в информационном поле ведущих деловых и профильных изданий на протяжении всех трёх лет.'
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
          'Регулярное инициирование публикаций: пресс-релизы, экспертные колонки, аналитические обзоры рынка.',
          'Организация пресс-завтраков и бизнес-встреч с журналистами пула «Недвижимость».',
          'Спикерская поддержка первых лиц компании: подготовка тезисов, организация интервью на радио и ТВ.',
          'Полное ведение официальных сообществ агентства в социальных сетях (Facebook, Instagram).'
        ]
      },
      {
        id: 'results',
        heading: 'Результат',
        paragraphs: [
          'За 2,5 года было инициировано несколько сотен бесплатных публикаций в таких изданиях как Ведомости, Коммерсантъ, РБК, Forbes, Интерфакс, РИА Новости. Узнаваемость бренда в профессиональной среде значительно возросла, что помогло агентству стабильно удерживать позиции в ТОП-5.'
        ],
        callout: 'Системный PR позволил сделать бренд узнаваемым и авторитетным без раздутого маркетингового бюджета на прямую рекламу в прессе.'
      }
    ]
  },
  '03-pobeda-dizayna': {
    slug: '03-pobeda-dizayna',
    tag: 'PR & Маркетинг',
    title: 'Победа Дизайна',
    lead: 'Вывод студии архитектуры и дизайна интерьеров на рынок с нуля. Разработка коммуникационной стратегии, позиционирования и запуск медиа-кампании, включая публикации на РБК и организацию первого в Москве дизайн-бранча.',
    meta: {
      client: 'Победа Дизайна',
      role: 'PR-директор',
      year: '2013'
    },
    keyMetrics: [
      { value: 'С нуля', label: 'вывод на рынок' },
      { value: '#1', label: 'дизайн-бранч в Москве' },
      { value: 'РБК', label: 'публикации в деловой прессе' }
    ]
  },
  '04-kart-motors-honda-civic-cup': {
    slug: '04-kart-motors-honda-civic-cup',
    tag: 'Спорт PR',
    title: 'КАРТ Моторс & Honda',
    lead: 'Комплексная работа: рекламные кампании дилерского центра Honda и позиция пресс-секретаря гоночной команды Racing Art в рамках чемпионата Honda Civic Cup. Приглашение ТВ, написание статей в журналы, освещение соревнований.',
    meta: {
      client: 'КАРТ Моторс',
      role: 'Пресс-секретарь',
      year: '2008–2009'
    },
    keyMetrics: [
      { value: 'ТВ', label: 'охваты соревнований' },
      { value: 'Racing Art', label: 'сопровождение команды' },
      { value: 'Honda', label: 'федеральные рекламные кампании' }
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
      year: '2023'
    },
    keyMetrics: [
      { value: '8', label: 'упакованных ИТ-кейсов' },
      { value: '2', label: 'языка: RU и EN' },
      { value: 'IA', label: 'разработка структуры' }
    ]
  },
  '06-mafia-assistant': {
    slug: '06-mafia-assistant',
    tag: 'Product · UX',
    title: 'Mafia Digital Assistant',
    lead: 'Разработка концепции и UX/UI для игрового Telegram-бота, который оцифровывает процесс ведения офлайн-игр в классическую Мафию.',
    meta: {
      client: 'Pet-проект',
      role: 'Продакт / UX',
      year: '2023'
    },
    keyMetrics: [
      { value: 'UX/UI', label: 'Telegram Mini App' },
      { value: '100%', label: 'оцифровка игрового процесса' },
      { value: 'MVP', label: 'запуск прототипа' }
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
    tag: 'UI/UX & Web',
    title: 'Агентство недвижимости',
    lead: 'Учебный проект по дизайну и созданию мокапа сайта для агентства недвижимости.',
    meta: {
      client: 'Pet-проект',
      role: 'UI/UX Дизайнер',
      year: '2023'
    },
    keyMetrics: [
      { value: 'UI/UX', label: 'Прототипирование' },
      { value: 'Figma', label: 'Разработка макетов' }
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
    tag: 'Design',
    title: 'Проект дома',
    lead: 'Разработка концепции, визуализация и реализация проекта собственного загородного дома.',
    meta: {
      client: 'Личный проект',
      role: 'Автор проекта',
      year: '2021-2023'
    },
    keyMetrics: [
      { value: 'От и до', label: 'Полная реализация' },
      { value: '100%', label: 'Авторский надзор' }
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
    title: 'Мастер-класс',
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
    title: 'ТВ Репортаж',
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
  }
}

export const navLinks = [
  { href: '#about', label: 'Обо мне' },
  { href: '#cases', label: 'Кейсы' },
  { href: '#contact', label: 'Контакты' },
]
