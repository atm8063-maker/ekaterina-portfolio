export const siteData = {
  name: 'Ник Потапов',
  role: 'AI Solutions Architect',
  subtitle: 'AI Solutions Architect',
  description:
    'Аналитика, разработка, автоматизация бизнес-процессов, лендинги, боты, growth-стратегии, внедрение AI.',
  telegram: {
    dm: '@npc_welcome_bot',
  },
  linkedin: 'https://www.linkedin.com/in/nickpotapov/',
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

export const cases: CaseSummary[] = [
  {
    slug: 'reddit-agent',
    tag: 'AI-агенты',
    title: 'Reddit-агент · B2C SaaS',
    description:
      'Агент мониторит 15 профильных сабреддитов и приносит готовые черновики комментариев за 5 минут.',
    metrics: [
      { value: '340', label: 'упоминаний' },
      { value: '12', label: 'горячих лидов' },
      { value: '<$8', label: 'в месяц' },
    ],
  },
  {
    slug: 'b2b-landing',
    tag: 'Лендинг · GEO',
    title: 'Лендинг B2B SaaS · EdTech',
    description:
      'Лендинг без рекламного бюджета, который привёл 18 демо-заявок за 2 месяца органикой.',
    metrics: [
      { value: '198', label: 'уникальных' },
      { value: '18', label: 'B2B-заявок' },
      { value: '41→89', label: 'GEO Score' },
    ],
  },
]

export type CaseSection = {
  id: string
  heading: string
  paragraphs?: string[]
  callout?: string
  steps?: string[]
}

export type CaseDetail = {
  slug: string
  tag: string
  title: string
  lead: string
  keyMetrics: { value: string; label: string }[]
  metricsPeriod: string
  beforeAfter: { before: string; after: string }[]
  sections: CaseSection[]
  takeaways: { lead: string; text: string }[]
  ctaOffer: string
}

export const caseDetails: Record<string, CaseDetail> = {
  'reddit-agent': {
    slug: 'reddit-agent',
    tag: 'AI-агенты',
    title: 'Reddit-агент для B2C SaaS',
    lead: 'Как один агент на Claude заменил ручной мониторинг 15 сабреддитов и стал приносить готовые черновики комментариев и горячих лидов меньше чем за 8 долларов в месяц.',
    keyMetrics: [
      { value: '340', label: 'релевантных упоминаний' },
      { value: '12', label: 'горячих лидов' },
      { value: '<$8', label: 'затрат в месяц' },
      { value: '5 мин', label: 'на готовый черновик' },
    ],
    metricsPeriod: 'Период: март — май 2025 · Источник: Reddit API / внутренний лог',
    beforeAfter: [
      { before: 'Ручной обход сабреддитов раз в день', after: 'Автоматический мониторинг 15 сабреддитов 24/7' },
      { before: '1–2 часа на поиск релевантных тредов', after: '5 минут на готовый черновик ответа' },
      { before: 'Лиды терялись в шуме ленты', after: '12 квалифицированных лидов за квартал' },
      { before: 'Подписки на дорогие сервисы мониторинга', after: 'Меньше $8 в месяц на API' },
    ],
    sections: [
      {
        id: 'problem',
        heading: 'Проблема',
        paragraphs: [
          'У B2C SaaS была живая аудитория на Reddit, но дотянуться до неё вручную не получалось: релевантные обсуждения появлялись в полутора десятках сабреддитов, и без постоянного мониторинга команда узнавала о них слишком поздно.',
          'Платные сервисы социального слушания стоили несопоставимо дорого для ранней стадии, а нанимать отдельного человека под мониторинг было нерентабельно.',
        ],
        callout: 'Главная боль была не в ответах, а в скорости: горячий тред живёт несколько часов, и опоздать значило потерять лида.',
      },
      {
        id: 'solution',
        heading: 'Решение',
        paragraphs: [
          'Я собрала агента, который раз в час опрашивает Reddit API по списку сабреддитов и ключевых тем, фильтрует шум и передаёт релевантные треды в Claude для оценки и черновика ответа.',
        ],
        steps: [
          'Сбор свежих постов и комментариев через Reddit API по 15 сабреддитам.',
          'Первичная фильтрация по ключевым словам и давности треда.',
          'Оценка релевантности и тональности через Claude с заданным контекстом продукта.',
          'Генерация черновика комментария в голосе бренда — без автопостинга, с финальной проверкой человеком.',
          'Складирование горячих тредов и черновиков в очередь на ревью.',
        ],
      },
      {
        id: 'result',
        heading: 'Результат',
        paragraphs: [
          'За квартал агент нашёл 340 релевантных упоминаний и довёл 12 из них до квалифицированных лидов — при затратах меньше восьми долларов в месяц на API.',
          'Главное — изменилась скорость реакции: команда стала появляться в обсуждениях, пока они ещё живые, а не сутки спустя.',
        ],
      },
    ],
    takeaways: [
      { lead: 'Скорость важнее охвата', text: 'В живых обсуждениях выигрывает не тот, кто мониторит всё, а тот, кто отвечает первым и по делу.' },
      { lead: 'Человек на финальном шаге', text: 'Агент готовит черновик, но публикует человек — это сохраняет голос бренда и страхует от ошибок.' },
      { lead: 'Дёшево — это нормально', text: 'Тонкий агент на API закрывает задачу, для которой раньше покупали дорогие платформы.' },
    ],
    ctaOffer: 'Нужен похожий агент под ваш продукт или канал? Расскажите задачу — прикину, что реально собрать.',
  },
  'b2b-landing': {
    slug: 'b2b-landing',
    tag: 'Лендинг · GEO',
    title: 'Лендинг B2B SaaS в EdTech',
    lead: 'Как лендинг без рекламного бюджета вырос по GEO Score с 41 до 89 и привёл 18 демо-заявок за два месяца чистой органикой.',
    keyMetrics: [
      { value: '198', label: 'уникальных визитов' },
      { value: '18', label: 'B2B демо-заявок' },
      { value: '41→89', label: 'GEO Score' },
      { value: '0 ₽', label: 'рекламный бюджет' },
    ],
    metricsPeriod: 'Период: апрель — май 2025 · Источник: GA4',
    beforeAfter: [
      { before: 'Старый лендинг с GEO Score 41', after: 'Переработанная структура с GEO Score 89' },
      { before: 'Заявки только с платного трафика', after: '18 заявок чистой органикой' },
      { before: 'Контент без учёта AI-выдачи', after: 'Структура под цитирование в AI-ответах' },
      { before: 'Один язык, медленный запуск', after: 'Готовность к мультиязычности с первого дня' },
    ],
    sections: [
      {
        id: 'problem',
        heading: 'Проблема',
        paragraphs: [
          'B2B SaaS в EdTech жил на платном трафике: как только бюджет заканчивался, заявки прекращались. Органика почти не приносила лидов, а контент не попадал в AI-выдачу.',
        ],
        callout: 'Задача звучала так: получить предсказуемый поток демо-заявок без постоянных вложений в рекламу.',
      },
      {
        id: 'solution',
        heading: 'Решение',
        paragraphs: [
          'Я переработала лендинг под GEO — оптимизацию под ответы AI-систем и поисковую выдачу нового поколения. Контент структурировала так, чтобы его было удобно цитировать.',
        ],
        steps: [
          'Аудит текущего GEO Score и слабых мест структуры.',
          'Переписала ключевые блоки под чёткие вопросы-ответы целевой аудитории.',
          'Добавила структурированные данные и понятную семантику разделов.',
          'Собрала лендинг на Vercel, разметку и события повесила в GTM.',
          'Заложила архитектуру под быстрый запуск дополнительных языков.',
        ],
      },
      {
        id: 'result',
        heading: 'Результат',
        paragraphs: [
          'GEO Score вырос с 41 до 89. За два месяца лендинг привёл 198 уникальных визитов и 18 B2B демо-заявок — без единого рубля на рекламу.',
        ],
      },
    ],
    takeaways: [
      { lead: 'GEO — это новый SEO', text: 'Структура под цитирование в AI-ответах даёт трафик там, где обычная оптимизация уже не работает.' },
      { lead: 'Органика предсказуема', text: 'Хорошо собранный лендинг приносит заявки и после того, как вы перестали в него вкладываться.' },
      { lead: 'Закладывайте масштаб сразу', text: 'Архитектура под мультиязычность с первого дня экономит недели на следующем рынке.' },
    ],
    ctaOffer: 'Хотите лендинг, который приводит заявки органикой? Напишите — посмотрю ваш случай.',
  },
}

export type Project = {
  tag: string
  title: string
  description: string
  before: string
  after: string
  result: string
  stack: string[]
}

export const projects: Record<'ru' | 'en', Project[]> = {
  ru: [
    {
      tag: 'Консалтинг',
      title: 'Аудит и оптимизация бизнес-процессов',
      description: 'Поиск узких мест в воронках и рутинных операциях, которые можно автоматизировать или ускорить с помощью AI.',
      before:
        'Хаотичные ручные процессы, потеря лидов и слив времени сотрудников на рутину без понимания, где автоматизация сэкономит деньги.',
      after:
        'Интерактивная карта процессов (AS-IS / TO-BE), пошаговый план внедрения ИИ-агентов и расчет окупаемости автоматизации.',
      result: 'Четкий план оцифровки процессов с высвобождением до 40% рабочего времени команды.',
      stack: ['Process Mapping', 'ROI Analysis', 'AI Feasibility Audit'],
    },
    {
      tag: 'ИИ-интеграция',
      title: 'Внедрение AI-агентов под ключ',
      description: 'Разработка автономных агентов для обработки почты, мониторинга соцсетей, ответов клиентам и лидогенерации.',
      before:
        'Команда вручную мониторит сабреддиты, соцсети и почту, отвечая клиентам часами и упуская горячих лидов.',
      after:
        'Автономные ИИ-агенты на базе Claude/Gemini, интегрированные по API с твоими базами данных и мессенджерами.',
      result: 'Круглосуточный автоматический парсинг, квалификация лидов и генерация черновиков ответов за 5 минут.',
      stack: ['OpenAI API', 'Claude API', 'n8n', 'Python', 'REST API'],
    },
    {
      tag: 'Разработка',
      title: 'Быстрые лендинги и многостраничные каталоги',
      description: 'Проектирование баз данных, внедрение удобных систем управления контентом (CMS) и сборка быстрых фронтендов.',
      before:
        'Медленные сайты на конструкторах, сложная и перегруженная админка, падение серверов при наплыве трафика.',
      after:
        'Сверхбыстрые статические сайты на Astro/Next.js с подключением Headless CMS (Directus, Supabase) и деплоем в Docker.',
      result: 'Загрузка страниц менее 0.5 секунд, удобный ввод данных и полная независимость от тяжелых конструкторов.',
      stack: ['Astro', 'Next.js', 'Directus CMS', 'Docker', 'VPS'],
    },
    {
      tag: 'Mobile-first',
      title: 'Telegram UI и Mini Apps',
      description: 'Перенос рабочих интерфейсов и бизнес-логики в мессенджер: от CRM-панелей до полноценных магазинов.',
      before:
        'Необходимость пилить мобильные приложения под каждую задачу или мучить людей неудобными мобильными сайтами.',
      after:
        'Telegram-боты со сложной логикой и встроенные веб-приложения (Mini Apps) с корзинами, оплатой и карточками управления СУБД.',
      result: 'Вся операционка и продажи перенесены прямо в Телеграм — интерфейс управления базой всегда под рукой.',
      stack: ['Python', 'aiogram', 'Telegraf.js', 'React', 'Telegram WebApps'],
    },
    {
      tag: 'Обработка данных',
      title: 'Распознавание документов и OCR',
      description: 'Автоматизация оцифровки бумажных накладных, чеков, счетов и паспортов с ИИ-валидацией данных.',
      before:
        'Сотрудники вручную перебивают номенклатуру из сотен бумажных накладных, чеков и счетов в Excel или CRM.',
      after:
        'Интеллектуальный OCR-пайплайн: ИИ распознает таблицы по фото документов, валидирует данные через LLM и шлет в базу по API.',
      result: 'Время обработки одного документа сократилось с 10 минут до 15 секунд.',
      stack: ['Vision API', 'OCR', 'Node.js', 'Google API', 'Supabase'],
    },
    {
      tag: 'Локализация',
      title: 'AI-конвейеры генерации контента',
      description: 'Мультиязычный перевод и SEO-адаптация контента под зарубежные площадки с сохранением смысла и стиля.',
      before:
        'Космические расходы на переводчиков и недели ожидания материалов при выходе на международные рекламные площадки.',
      after:
        'Конвейеры на базе больших языковых моделей, переводящие и адаптирующие описания под сленг конкретной страны.',
      result: 'Моментальная генерация десятков версий описаний на 6 языках напрямую в CMS.',
      stack: ['Gemini API', 'Claude API', 'REST API', 'Automation'],
    }
  ],
  en: [
    {
      tag: 'Consulting',
      title: 'Business Process Audits & Optimization',
      description: 'Pinpointing bottlenecks in your funnel and routine tasks that can be automated or accelerated with AI.',
      before:
        'Messy manual workflows, dropped leads, and staff wasting hours on repetitive tasks without knowing if automation actually saves money.',
      after:
        'Interactive process maps (AS-IS / TO-BE), a step-by-step AI deployment roadmap, and ROI calculations for automation.',
      result: 'A clear process optimization plan, freeing up to 40% of your team’s working hours.',
      stack: ['Process Mapping', 'ROI Analysis', 'AI Feasibility Audit'],
    },
    {
      tag: 'AI Integration',
      title: 'Turnkey AI Agents Deployment',
      description: 'Building autonomous agents for inbox processing, social media listening, customer support, and lead generation.',
      before:
        'Staff manually scanning Reddit, socials, and emails, taking hours to reply and letting hot prospects slip away.',
      after:
        'Autonomous AI agents built on Claude/Gemini, connected via API to your databases and messaging platforms.',
      result: '24/7 automated scraping, lead qualification, and brand-voiced draft comments generated in 5 minutes.',
      stack: ['OpenAI API', 'Claude API', 'n8n', 'Python', 'REST API'],
    },
    {
      tag: 'Development',
      title: 'Lightning-Fast Landings & Multi-page Catalogs',
      description: 'Database design, Headless CMS integration, and deploying fast, static frontends.',
      before:
        'Slow site-builder templates, clunky complex admin panels, and servers crashing under traffic spikes.',
      after:
        'Ultra-fast static sites built with Astro or Next.js, hooked up to Headless CMS (Directus, Supabase), deployed via Docker.',
      result: 'Sub-0.5s page load times, friction-free content updates, and zero dependence on heavy site-builders.',
      stack: ['Astro', 'Next.js', 'Directus CMS', 'Docker', 'VPS'],
    },
    {
      tag: 'Mobile-first',
      title: 'Telegram UI & Mini Apps',
      description: 'Porting complex business logic and admin interfaces right into Telegram: from CRMs to full e-commerce stores.',
      before:
        'Having to code separate native apps or forcing users through clumsy mobile websites.',
      after:
        'Feature-rich Telegram bots and embedded WebApps (Mini Apps) complete with carts, payments, and database management panels.',
      result: 'All ops and sales relocated to Telegram — a database control interface always at your fingertips.',
      stack: ['Python', 'aiogram', 'Telegraf.js', 'React', 'Telegram WebApps'],
    },
    {
      tag: 'Data Processing',
      title: 'Document Processing & Intelligent OCR',
      description: 'Automated digitizing of paper invoices, receipts, bills, and IDs with LLM-powered data validation.',
      before:
        'Employees manually copy-pasting line items from hundreds of paper invoices, bills, and receipts into Excel or CRM.',
      after:
        'Intelligent OCR pipeline: AI extracts tables from document scans, validates records via LLM, and logs them via API.',
      result: 'Document processing time slashed from 10 minutes to 15 seconds.',
      stack: ['Vision API', 'OCR', 'Node.js', 'Google API', 'Supabase'],
    },
    {
      tag: 'Localization',
      title: 'AI-Powered Content Generation Engines',
      description: 'Multilingual translation and SEO adaptation for foreign platforms, matching local slang and brand tone.',
      before:
        'Astronomical translation agency bills and weeks of delay when launching marketing assets in new countries.',
      after:
        'Generative translation pipelines that automatically rewrite copy tailored to local slang and regional tone of voice.',
      result: 'Instant generation of dozens of localized versions across 6 languages piped directly into your CMS.',
      stack: ['Gemini API', 'Claude API', 'REST API', 'Automation'],
    }
  ]
}

export const navLinks = [
  { href: '#about', label: 'Обо мне' },
  { href: '#cases', label: 'Кейсы' },
  { href: '#projects', label: 'Скиллы' },
  { href: '#contact', label: 'Контакты' },
]
