export type TranslationDict = {
  siteData: {
    name: string
    role: string
    subtitle: string
    description: string
    telegram: {
      dm: string
    }
    linkedin: string
  }
  navLinks: { href: string; label: string }[]
  hero: {
    status: string
    viewCases: string
    discuss: string
    remoteStatus: string
    tgBtn: string
  }
  about: {
    label: string
    heading: string
    paragraphs: string[]
    facts: { value: string; label: string }[]
  }
  cases: {
    label: string
    heading: string
    description: string
    readCase: string
    projectTag: string
    items: {
      filename: string
      title: string
      description: string
    }[]
  }
  projects: {
    label: string
    heading: string
    description: string
    beforeLabel: string
    afterLabel: string
    resultLabel: string
  }
  contact: {
    label: string
    heading: string
    businessTitle: string
    businessSub: string
    personalTitle: string
    personalSub: string
    tgBtn: string
    helperText: string
  }
  footer: {
    copyright: string
    madeWithoutAgency: string
  }
  casePage: {
    homeBreadcrumb: string
    casesBreadcrumb: string
    beforeAfterTitle: string
    takeawaysTitle: string
    ctaText: string
    ctaBtn: string
    backBtn: string
  }
}

export const translations: Record<'ru' | 'en', TranslationDict> = {
  ru: {
    siteData: {
      name: 'Ник Потапов',
      role: 'AI Solutions Architect',
      subtitle: 'AI Solutions Architect',
      description: 'Аналитика, разработка, автоматизация бизнес-процессов, лендинги, боты, growth-стратегии, внедрение AI.',
      telegram: {
        dm: '@npc_welcome_bot',
      },
      linkedin: 'https://www.linkedin.com/in/nickpotapov/',
    },
    navLinks: [
      { href: '#about', label: 'Обо мне' },
      { href: '#cases', label: 'Кейсы' },
      { href: '#projects', label: 'Скиллы' },
      { href: '#contact', label: 'Контакты' },
    ],
    hero: {
      status: '[ Открыт к проектам ]',
      viewCases: 'Смотреть кейсы',
      discuss: 'Обсудить задачу',
      remoteStatus: 'Удалённо · Открыт к избранным проектам',
      tgBtn: 'Написать в Telegram',
    },
    about: {
      label: '— 01 / Обо мне',
      heading: 'Рост бизнеса — системно От оффера до масштаба',
      paragraphs: [
        'Head of Growth, который не просто льёт трафик, а лезет под капот бизнеса. Работаю на стыке продукта, маркетинга и операций: нахожу, где отваливаются клиенты и деньги, чиню эти дыры и строю системы для кратного роста.',
        'Собираю офферы так, чтобы скучные дженерик-услуги превращались в продукты, которые хочется купить. В своё время запустил процессы в 8 странах за 5 месяцев и с нуля выстроил систему привлечения более 400 стратегических активов.',
        'В базе у меня — хардкорный IT Project Management и системное мышление. А благодаря опыту в High-Ticket продажах я ещё и понимаю, что в голове у клиентов. Вся эта гремучая смесь помогает компаниям масштабироваться быстро и, главное, без пожаров.',
        'Отсюда и название моего консалтинга — NPC (Nick Potapov Consulting). Ирония в том, что в играх NPC — это серые боты, выполняющие один и тот же заскриптованный алгоритм. Я строю процессы так, чтобы всю эту "NPC-рутину" (копипаст, переводы, заполнение баз) делали ИИ-агенты, а собственник и команда оставались Main Characters своей компании, решая по-настоящему творческие задачи.',
        'Всё что ниже — рабочие пайплайны из прода, не слайды.',
      ],
      facts: [
        { value: '9+ лет', label: 'в росте бизнеса и продукте' },
        { value: '€4M+', label: 'выручки сгенерировано лично' },
        { value: '8', label: 'стран запущено за 5 месяцев' },
      ],
    },
    cases: {
      label: '— 02 / Кейсы',
      heading: 'Готовые кейсы',
      description: 'Каждая плитка — реальный workflow. Названия компаний скрыты по NDA, индустрии и стек настоящие. Нажмите на кейс, чтобы прочитать детали.',
      readCase: 'Читать кейс',
      projectTag: 'Проект',
      items: [
        {
          filename: "01-astro-directus.html",
          title: "Astro + Directus: сайт недвижимости с мгновенной фильтрацией и управлением через Telegram.",
          description: "Заказчик пришёл с базой объектов в Google Таблицах и фотками на Google Drive. Мы выкупили сервер, развернули Docker + Traefik, подняли Headless CMS (Directus) и собрали сверхбыстрый фронт на Astro. Главная фишка: собственник не заходит в админку сайта вообще — вся загрузка объектов идёт через Telegram-бота."
        },
        {
          filename: "02-tg-uploader.html",
          title: "Бот-загрузчик: слушает голосовые риелтора и сам раскидывает данные по полям CRM.",
          description: "Агенты по недвижимости тратят часы на ручное заполнение карточек объектов. Мы собрали Telegram-бота (Collector), которому риелтор прямо с объекта скидывает фотки и наговаривает голосовуху. AI под капотом сам парсит параметры, пишет продающее описание и создаёт черновик в базе. Бонус: агентам не нужен доступ к CRM, они не могут «увести» базу."
        },
        {
          filename: "03-autoposter.html",
          title: "Бот-Автопостер: сам пишет, адаптирует и рассылает объекты по всем агрегаторам и соцсетям.",
          description: "Заменили работу контент-менеджера на умную автоматизацию. Бот получает ID объекта (или ссылку на сайт), сам адаптирует текст под строгие правила чужих чатов и ставит посты в очередь публикации. Instagram, Facebook, агрегаторы и Telegram-каналы закрываются в пару кликов прямо с телефона."
        },
        {
          filename: "04-tg-admin.html",
          title: "Telegram-Админка: полноценное управление базой недвижимости прямо со смартфона.",
          description: "Зачем учить агентов сложным интерфейсам веб-CRM? Мы перенесли всё управление объектами в Telegram. В пару кликов можно поменять цену, обновить фотки, выбрать заглавное изображение или повесить плашку «Продано». Сайт и база обновляются мгновенно, а риелтор даже не открывает ноутбук."
        },
        {
          filename: "05-translator.html",
          title: "Бот-Конвейер: генерация 13 версий описания на 6 языках из одного «сырого» текста.",
          description: "Зачем платить переводчикам и SMM-щикам за адаптацию контента? Мы собрали бота на базе Gemini, который берёт сырой текст от агента и автоматически разворачивает его в 13 уникальных, стилистически выверенных форматов: 6 языков для мультиязычного сайта, отдельные посты для Telegram, Instagram, Facebook и переводы для агрегаторов."
        },
        {
          filename: "06-mafia.html",
          title: "Цифровой помощник для оффлайн-Мафии: арбитр, статистика и защита от ошибок ведущего.",
          description: "Заменили блокнот и ручку на умную Telegram-систему. Бот помогает ведущему вести оффлайн-игру на 16+ человек со сложными кастомными ролями. Он контролирует логику отстрелов, не даёт сделать нелегальный ход, ведёт историю каждой ночи и автоматически формирует рейтинг клуба в Google Таблицах."
        },
        {
          filename: "07-serverless-menu.html",
          title: "Serverless-меню: цифровой ресторан с корзиной и управлением через Telegram.",
          description: "Заменили статичные PDF и печатные меню на интерактивное Serverless-приложение (Netlify + Supabase), упакованное в Telegram Mini App. Гости оформляют заказы с телефона, а владелец управляет меню через бота-админа: вешает скидки, убирает закончившиеся блюда и настраивает скрытие «Завтраков» после 13:00."
        },
        {
          filename: "08-accountant.html",
          title: "Бот-Бухгалтер: распознавание бумажных накладных и умная маршрутизация данных.",
          description: "Заменили ручной ввод первичной документации на AI-распознавание. Менеджер просто скидывает в Telegram фотографию мятой накладной — Gemini парсит таблицу, бот нормализует единицы измерения (например, миллилитры в литры) и сам раскладывает сканы и данные по нужным папкам на Google Drive и Google Таблицам."
        }
      ]
    },
    projects: {
      label: '— 03 / Скиллы',
      heading: 'Могу, умею, практикую',
      description: 'Ключевые направления моей работы, компетенции и технический стек.',
      beforeLabel: 'Было',
      afterLabel: 'Стало',
      resultLabel: 'Результат',
    },
    contact: {
      label: '— 04 / Контакты',
      heading: 'Давайте работать',
      businessTitle: 'Сделаю под задачу',
      businessSub: 'Бизнесу и командам',
      personalTitle: 'Освобожу от рутины',
      personalSub: 'Частным лицам',
      tgBtn: 'Написать в Telegram',
      helperText: 'Напиши коротко, что нужно — отвечу, какой формат подходит.',
    },
    footer: {
      copyright: '© 2026 Ник Потапов',
      madeWithoutAgency: 'Сделано без агентства',
    },
    casePage: {
      homeBreadcrumb: 'Главная',
      casesBreadcrumb: 'Кейсы',
      beforeAfterTitle: 'Было / Стало',
      takeawaysTitle: 'Что унести себе',
      ctaText: 'Нужна автоматизация процессов? Расскажите задачу — прикину, что реально собрать.',
      ctaBtn: 'Написать в Telegram',
      backBtn: 'К кейсам',
    },
  },
  en: {
    siteData: {
      name: 'Nick Potapov',
      role: 'AI Solutions Architect',
      subtitle: 'AI Solutions Architect',
      description: 'Analytics, software development, workflow automation, landing pages, custom bots, growth strategies, and AI implementation.',
      telegram: {
        dm: '@npc_welcome_bot',
      },
      linkedin: 'https://www.linkedin.com/in/nickpotapov/',
    },
    navLinks: [
      { href: '#about', label: 'About' },
      { href: '#cases', label: 'Cases' },
      { href: '#projects', label: 'Skills' },
      { href: '#contact', label: 'Contact' },
    ],
    hero: {
      status: '[ Open to projects ]',
      viewCases: 'See Cases',
      discuss: 'Let’s Talk Shop',
      remoteStatus: 'Remote · Open to select projects',
      tgBtn: 'Message on Telegram',
    },
    about: {
      label: '— 01 / About Me',
      heading: 'Systematic business growth. From offer to scale.',
      paragraphs: [
        'A Head of Growth who doesn’t just burn ad budget but gets under the hood of your business operations. Working at the intersection of product, marketing, and ops, I find where you leak leads and revenue, patch those holes, and build frameworks for compound growth.',
        'I package offers so that boring generic services transform into high-converting products people actually want. In the past, I set up ops across 8 countries in 5 months and built a system to capture 400+ strategic assets from scratch.',
        'My background is rooted in hardcore IT Project Management and systems design. Plus, my high-ticket sales experience helps me read clients’ minds. This mix helps companies scale fast and, most importantly, fire-free.',
        'This is where the name of my consulting practice comes from — NPC (Nick Potapov Consulting). The irony is that in gaming, NPCs are just script-bound bots running repetitive loops. I design workflows so that all this "NPC routine" (copy-pasting, translations, data entry) is handled by AI agents, leaving the founder and the team to act as the Main Characters of their company.',
        'Everything below is live production pipelines, not agency slides.',
      ],
      facts: [
        { value: '9+ years', label: 'in growth and product' },
        { value: '€4M+', label: 'revenue generated directly' },
        { value: '8', label: 'countries launched in 5 months' },
      ],
    },
    cases: {
      label: '— 02 / Cases',
      heading: 'Live Workflows',
      description: 'Each card represents a real workflow. Company names are redacted under NDA, but industries and tech stack are 100% authentic. Click a case to read the details.',
      readCase: 'Read case study',
      projectTag: 'Project',
      items: [
        {
          filename: "01-astro-directus.html",
          title: "Astro + Directus: Real estate site with instant filtering and Telegram admin.",
          description: "Client came with a messy database in Google Sheets and images scattered across Google Drive. We set up a dedicated server, spun up Docker + Traefik, added a Headless CMS (Directus), and coded a lightning-fast Astro frontend. The killer feature: the owner doesn’t touch the CMS admin dashboard at all — all listings are uploaded right from their Telegram bot."
        },
        {
          filename: "02-tg-uploader.html",
          title: "Voice-powered Bot: listens to realtor voice notes and fills CRM cards automatically.",
          description: "Real estate agents waste hours copy-pasting listing details. We built a Telegram bot (Collector) where realtors drop photos and record brief voice notes right from the property. AI under the hood parses details, writes a high-converting description, and creates a draft record. Bonus: agents don't need CRM access, protecting your database."
        },
        {
          filename: "03-autoposter.html",
          title: "Autoposter Bot: writes, adapts, and broadcasts listings to all aggregates & social media.",
          description: "Replaced a content manager with smart automation. The bot takes a property ID (or website URL), automatically reformats the copy to match strict rules of local groups and aggregates, and queues it up. Instagram, Facebook, channels, and aggregates are fully covered in two clicks from a smartphone."
        },
        {
          filename: "04-tg-admin.html",
          title: "Telegram Admin Panel: manage your entire real estate database on the fly.",
          description: "Why train realtors on complex desktop CRMs? We migrated the database control panel right into Telegram. Adjust prices, update photos, set featured images, or flag properties as 'Sold' in a couple of clicks. The site updates instantly, and the realtor doesn't even need to open a laptop."
        },
        {
          filename: "05-translator.html",
          title: "Copy Pipeline Bot: outputting 13 format versions in 6 languages from one raw text.",
          description: "Why pay translators and copywriters for simple localization? We built a bot powered by Gemini that takes a raw text note and expands it into 13 unique, tone-perfect formats: 6 languages for the multilingual site, dedicated posts for socials, and targeted copy for aggregates."
        },
        {
          filename: "06-mafia.html",
          title: "Digital Mafia Assistant: offline game master tools, ratings, and stats tracker.",
          description: "Replaced pen and paper with a smart Telegram assistant. The bot helps the host manage offline Mafia games with 16+ players and complex custom roles. It controls phase logic, prevents illegal moves, logs night histories, and automatically updates the club leaderboards in Google Sheets."
        },
        {
          filename: "07-serverless-menu.html",
          title: "Serverless Menu: digital restaurant cart powered by Telegram admin.",
          description: "Ditched boring PDF menus for an interactive Serverless App (Netlify + Supabase) wrapped inside a Telegram Mini App. Guests place orders from their phones, while the owner manages the menu via an admin bot: scheduling discounts, disabling sold-out items, and automatically hiding the 'Breakfasts' category after 1:00 PM."
        },
        {
          filename: "08-accountant.html",
          title: "Accountant Bot: paper invoice parsing and intelligent data routing.",
          description: "Replaced manual invoice logging with an intelligent AI pipeline. The manager simply drops a photo of a crumpled invoice in Telegram — Gemini parses the table data, normalizes measurement units (e.g., milliliters to liters), and automatically routes the records and scans into Google Drive and Google Sheets."
        }
      ]
    },
    projects: {
      label: '— 03 / Skills',
      heading: 'What I actually do',
      description: 'Core competencies, fields of expertise, and my technical stack.',
      beforeLabel: 'Before',
      afterLabel: 'After',
      resultLabel: 'Outcome',
    },
    contact: {
      label: '— 04 / Contact',
      heading: 'Let’s work together',
      businessTitle: 'Built to Spec',
      businessSub: 'For Businesses & Teams',
      personalTitle: 'Routine Killer',
      personalSub: 'For Individuals',
      tgBtn: 'Message on Telegram',
      helperText: 'Drop me a brief message about your project — I’ll let you know what works best.',
    },
    footer: {
      copyright: '© 2026 Nick Potapov',
      madeWithoutAgency: 'Built without an agency',
    },
    casePage: {
      homeBreadcrumb: 'Home',
      casesBreadcrumb: 'Cases',
      beforeAfterTitle: 'Before / After',
      takeawaysTitle: 'Key Takeaways',
      ctaText: 'Need similar workflow automation? Tell me about your task — I’ll draft what is feasible.',
      ctaBtn: 'Message on Telegram',
      backBtn: 'Back to cases',
    },
  },
}
