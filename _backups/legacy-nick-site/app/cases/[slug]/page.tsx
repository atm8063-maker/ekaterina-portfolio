import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import { caseDetails, siteData } from '@/lib/data'
import { CasePageClient } from '@/components/case-page-client'

export function generateStaticParams() {
  const jsonSlugs = Object.keys(caseDetails)
  let mdSlugs: string[] = []
  try {
    const casesDir = path.join(process.cwd(), 'content', 'cases')
    const files = fs.readdirSync(casesDir)
    mdSlugs = files
      .filter((f) => f.endsWith('.md') && !f.endsWith('-en.md'))
      .map((f) => f.replace('.md', ''))
  } catch (e) {}

  return [...jsonSlugs, ...mdSlugs].map((slug) => ({ slug }))
}

const caseMeta: Record<string, { title: string; description: string }> = {
  '01-astro-directus': {
    title: 'Astro + Directus: сайт недвижимости с мгновенной фильтрацией — Nick Potapov',
    description: 'Real estate site with instant filtering and Telegram admin. Headless CMS + Astro frontend, владелец управляет листингами через Telegram-бота.',
  },
  '02-tg-uploader': {
    title: 'Voice-powered Bot: голосовые заметки риелтора → карточка в CRM — Nick Potapov',
    description: 'Telegram-бот слушает голосовые заметки с фото объекта и автоматически заполняет карточку в CRM через AI.',
  },
  '03-autoposter': {
    title: 'Autoposter Bot: автопостинг объявлений на все площадки — Nick Potapov',
    description: 'Бот переформатирует и рассылает объявления по агрегаторам и соцсетям в два клика со смартфона.',
  },
  '04-tg-admin': {
    title: 'Telegram Admin Panel: управление базой недвижимости из Telegram — Nick Potapov',
    description: 'Полная админка базы объектов перенесена в Telegram — без десктоп-CRM и без обучения риелторов.',
  },
  '05-translator': {
    title: 'Copy Pipeline Bot: 13 форматов на 6 языках из одного текста — Nick Potapov',
    description: 'Бот на Gemini разворачивает один черновик в 13 уникальных форматов и 6 языков для сайта, соцсетей и агрегаторов.',
  },
  '06-mafia': {
    title: 'Digital Mafia Assistant: цифровой ассистент для офлайн-игр в мафию — Nick Potapov',
    description: 'Telegram-бот ведёт фазы игры, логирует историю ночей и обновляет рейтинг клуба в Google Sheets.',
  },
  '07-serverless-menu': {
    title: 'Serverless Menu: цифровое меню ресторана в Telegram Mini App — Nick Potapov',
    description: 'Serverless-приложение (Netlify + Supabase) внутри Telegram Mini App: гости заказывают, владелец управляет меню через бота.',
  },
  '08-accountant': {
    title: 'Accountant Bot: распознавание бумажных накладных и роутинг данных — Nick Potapov',
    description: 'AI-конвейер на Gemini парсит фото накладной, нормализует единицы измерения и раскладывает данные по Google Drive/Sheets.',
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  
  const customMeta = caseMeta[slug]
  if (customMeta) {
    return {
      title: customMeta.title,
      description: customMeta.description,
      alternates: {
        canonical: `https://nickpotapov.com/cases/${slug}`,
      },
      openGraph: {
        title: customMeta.title,
        description: customMeta.description,
        url: `https://nickpotapov.com/cases/${slug}`,
        siteName: 'Nick Potapov',
        images: [{ url: 'https://nickpotapov.com/nick.jpg', width: 1200, height: 1200 }],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: customMeta.title,
        description: customMeta.description,
        images: ['https://nickpotapov.com/nick.jpg'],
      },
    }
  }

  const data = caseDetails[slug]
  if (data) return { title: `${data.title} — ${siteData.name}`, description: data.lead }

  const mdPath = path.join(process.cwd(), 'content', 'cases', `${slug}.md`)
  if (fs.existsSync(mdPath)) {
    return { title: `Кейс: ${slug} — ${siteData.name}` }
  }

  return { title: 'Кейс не найден' }
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const ruJsonData = caseDetails[slug] || null
  const enJsonData = caseDetails[slug] || null

  const mdPathRu = path.join(process.cwd(), 'content', 'cases', `${slug}.md`)
  const mdPathEn = path.join(process.cwd(), 'content', 'cases', `${slug}-en.md`)

  if (!fs.existsSync(mdPathRu) && !ruJsonData) notFound()

  let htmlContentRu = ''
  let htmlContentEn = ''

  if (fs.existsSync(mdPathRu)) {
    htmlContentRu = fs.readFileSync(mdPathRu, 'utf8')
  }

  if (fs.existsSync(mdPathEn)) {
    htmlContentEn = fs.readFileSync(mdPathEn, 'utf8')
  } else {
    htmlContentEn = htmlContentRu
  }

  const htmlStyles = `
  .case-html-content {
    color: var(--text-secondary);
    line-height: 1.7;
  }
  .case-html-content .case-eyebrow {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    background-color: var(--accent-dim);
    color: var(--accent);
    margin-bottom: 1rem;
  }
  .case-html-content .case-h1 {
    font-family: var(--font-serif);
    font-size: clamp(32px, 5vw, 48px);
    line-height: 1.1;
    color: var(--text-primary);
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    text-wrap: balance;
  }
  .case-html-content .case-h1 em {
    font-style: normal;
    color: var(--accent);
  }
  .case-html-content .case-hero-sub {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
    text-wrap: pretty;
  }
  .case-html-content .case-meta-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 1.5rem 0;
  }
  .case-html-content .case-meta-row span {
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    color: var(--text-muted);
  }
  .case-html-content .case-meta-row strong {
    color: var(--text-primary);
    font-weight: 500;
    margin-top: 0.5rem;
    font-size: 1rem;
  }
  .case-html-content .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1.5rem;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: var(--bg-card);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent);
    margin-bottom: 4rem;
  }
  .case-html-content .result-stat {
    display: flex;
    flex-direction: column;
  }
  .case-html-content .result-stat .num {
    font-family: var(--font-serif);
    font-size: 2.25rem;
    line-height: 1;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }
  .case-html-content .result-stat .num.accent {
    color: var(--accent);
  }
  .case-html-content .result-stat .label {
    font-size: 0.875rem;
    color: var(--text-muted);
    line-height: 1.4;
  }
  .case-html-content .section {
    margin-top: 4rem;
    scroll-margin-top: 7rem;
  }
  .case-html-content .section-number {
    font-family: var(--font-mono);
    font-size: 1rem;
    color: var(--accent);
    display: block;
    margin-bottom: 0.5rem;
  }
  .case-html-content .section-h2 {
    font-family: var(--font-serif);
    font-size: 2rem;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }
  .case-html-content .section-h2 em {
    font-style: normal;
    color: var(--accent);
  }
  .case-html-content p {
    margin-bottom: 1.25rem;
  }
  .case-html-content p.lead {
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--text-primary);
  }
  .case-html-content strong {
    color: var(--text-primary);
    font-weight: 600;
  }
  .case-html-content .pull {
    margin: 2rem 0;
    padding: 1.25rem 1.5rem;
    border-left: 3px solid var(--accent);
    background-color: var(--accent-dim);
    color: var(--text-primary);
    border-radius: 0 0.5rem 0.5rem 0;
    font-size: 1.125rem;
  }
  .case-html-content .pull em {
    color: var(--accent);
    font-style: normal;
  }
  .case-html-content .section-h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-top: 2.5rem;
    margin-bottom: 1.25rem;
  }
  .case-html-content .compare-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 640px) {
    .case-html-content .compare-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  .case-html-content .compare-col {
    padding: 1.5rem;
    border-radius: 1rem;
    border: 1px solid var(--border);
  }
  .case-html-content .col-without {
    background-color: var(--bg-card);
  }
  .case-html-content .col-with {
    background-color: var(--accent-dim);
    border-color: var(--border-accent);
  }
  .case-html-content .col-label {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.875rem;
    margin-bottom: 1.25rem;
    color: var(--text-muted);
  }
  .case-html-content .col-with .col-label {
    color: var(--accent);
  }
  .case-html-content ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }
  .case-html-content ul li {
    position: relative;
    padding-left: 1.5rem;
    font-size: 0.9375rem;
  }
  .case-html-content ul li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--text-muted);
  }
  .case-html-content .col-with ul li {
    color: var(--text-primary);
  }
  .case-html-content .col-with ul li::before {
    color: var(--accent);
  }
  `

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: htmlStyles }} />
      <CasePageClient
        slug={slug}
        ruHtml={htmlContentRu}
        enHtml={htmlContentEn}
        ruJsonData={ruJsonData}
        enJsonData={enJsonData}
      />
    </>
  )
}
