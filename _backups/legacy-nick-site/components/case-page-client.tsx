'use client'

import Link from 'next/link'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { useLanguage } from '@/components/language-provider'
import { translations } from '@/lib/translations'
import { ArrowLeftIcon, TelegramIcon } from '@/components/icons'
import { CaseReader } from '@/components/case-reader'

type Metric = {
  value: string
  label: string
}

type CaseSection = {
  id: string
  heading: string
  paragraphs?: string[]
  callout?: string
  steps?: string[]
}

type CaseDetail = {
  slug: string
  tag: string
  title: string
  lead: string
  keyMetrics: Metric[]
  metricsPeriod: string
  beforeAfter: { before: string; after: string }[]
  sections: CaseSection[]
  takeaways: { lead: string; text: string }[]
  ctaOffer: string
}

type Props = {
  slug: string
  ruHtml: string
  enHtml: string
  ruJsonData: CaseDetail | null
  enJsonData: CaseDetail | null
}

export function CasePageClient({ slug, ruHtml, enHtml, ruJsonData, enJsonData }: Props) {
  const { lang } = useLanguage()
  const t = translations[lang]

  const activeHtml = lang === 'ru' ? ruHtml : enHtml
  const activeJsonData = lang === 'ru' ? ruJsonData : enJsonData

  if (activeJsonData) {
    const tocSections = activeJsonData.sections.map((s) => ({
      id: s.id,
      heading: s.heading,
    }))

    return (
      <>
        <SiteNav anchorsActive={false} />
        <CaseReader sections={tocSections} />

        <main className="mx-auto max-w-[760px] px-6 pb-24 pt-[120px]">
          {/* breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="text-sm text-[color:var(--text-muted)]">
            <Link href="/" className="transition-colors hover:text-[color:var(--accent)]">
              {t.casePage.homeBreadcrumb}
            </Link>
            {' / '}
            <Link href="/#cases" className="transition-colors hover:text-[color:var(--accent)]">
              {t.casePage.casesBreadcrumb}
            </Link>
            {' / '}
            <span style={{ color: 'var(--text-secondary)' }}>{activeJsonData.title}</span>
          </nav>

          {/* hero */}
          <header className="mt-8">
            <span
              className="inline-block rounded-full px-3 py-1 font-mono text-xs"
              style={{ backgroundColor: 'var(--accent-dim)', color: 'var(--accent)' }}
            >
              {activeJsonData.tag}
            </span>
            <h1
              className="mt-5 text-balance font-serif text-[color:var(--text-primary)]"
              style={{ fontSize: 'clamp(36px, 6vw, 56px)', lineHeight: 1.1 }}
            >
              {activeJsonData.title}
            </h1>
            <p
              className="mt-5 text-pretty text-[color:var(--text-secondary)]"
              style={{ fontSize: '18px' }}
            >
              {activeJsonData.lead}
            </p>
          </header>

          {/* key metrics */}
          <section
            className="mt-10 rounded-2xl border p-7"
            style={{
              borderColor: 'var(--border)',
              backgroundColor: 'var(--bg-card)',
              borderLeft: '3px solid var(--accent)',
            }}
          >
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {activeJsonData.keyMetrics.map((m) => (
                <div key={m.label}>
                  <p className="font-serif text-3xl leading-none" style={{ color: 'var(--accent)' }}>
                    {m.value}
                  </p>
                  <p className="mt-2 text-[13px] text-[color:var(--text-muted)]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t pt-4 font-mono text-xs text-[color:var(--text-muted)]" style={{ borderColor: 'var(--border)' }}>
              {activeJsonData.metricsPeriod}
            </p>
          </section>

          {/* before / after */}
          <section className="mt-12">
            <h2 className="font-serif text-[28px] text-[color:var(--text-primary)]">
              {t.casePage.beforeAfterTitle}
            </h2>
            <div className="mt-5 overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--border)' }}>
              {activeJsonData.beforeAfter.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-2"
                  style={{
                    borderTop: i === 0 ? 'none' : '1px solid var(--border)',
                  }}
                >
                  <p className="p-4 text-sm text-[color:var(--text-muted)]">
                    {row.before}
                  </p>
                  <p
                    className="flex items-start gap-2 p-4 text-sm text-[color:var(--text-secondary)]"
                    style={{ borderLeft: '1px solid var(--border)' }}
                  >
                    <span style={{ color: 'var(--accent)' }}>•</span>
                    {row.after}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* content sections */}
          {activeJsonData.sections.map((section, idx) => (
            <section key={section.id} id={section.id} className="mt-14 scroll-mt-28">
              <h2 className="font-serif text-[28px] text-[color:var(--text-primary)]">
                <span className="mr-2 font-mono text-base" style={{ color: 'var(--accent)' }}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                {section.heading}
              </h2>

              {section.paragraphs?.map((p) => (
                <p key={p} className="mt-4 text-pretty text-[color:var(--text-secondary)]">
                  {p}
                </p>
              ))}

              {section.callout && (
                <blockquote
                  className="mt-6 rounded-r-lg py-3 pl-5 pr-4 text-[color:var(--text-primary)]"
                  style={{
                    borderLeft: '3px solid var(--accent)',
                    backgroundColor: 'var(--accent-dim)',
                  }}
                >
                  {section.callout}
                </blockquote>
              )}

              {section.steps && (
                <ol className="mt-5 flex flex-col gap-3">
                  {section.steps.map((step, i) => (
                    <li key={step} className="flex gap-3 text-[color:var(--text-secondary)]">
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-xs"
                        style={{ backgroundColor: 'var(--accent-dim)', color: 'var(--accent)' }}
                      >
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          ))}

          {/* takeaways */}
          <section className="mt-16">
            <h2 className="font-serif text-[28px] text-[color:var(--text-primary)]">
              {t.casePage.takeawaysTitle}
            </h2>
            <ol
              className="mt-5 flex flex-col gap-4 rounded-2xl p-7"
              style={{ backgroundColor: 'var(--accent-dim)' }}
            >
              {activeJsonData.takeaways.map((t, i) => (
                <li key={t.lead} className="flex gap-3">
                  <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[color:var(--text-secondary)]">
                    <span className="font-semibold text-[color:var(--text-primary)]">
                      {t.lead}.
                    </span>{' '}
                    {t.text}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* cta */}
          <section
            className="mt-16 rounded-2xl border p-10 text-center"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
          >
            <p className="mx-auto max-w-[440px] text-pretty text-[color:var(--text-primary)]">
              {t.casePage.ctaText}
            </p>
            <a
              href={`https://t.me/${t.siteData.telegram.dm.replace('@', '')}`}
              target="_blank"
              rel="noreferrer"
              className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--bg-primary)' }}
            >
              <TelegramIcon className="h-4 w-4" />
              {t.casePage.ctaBtn}
            </a>
          </section>

          {/* back nav */}
          <Link
            href="/#cases"
            className="mt-12 flex w-fit items-center gap-1.5 text-sm font-medium"
            style={{ color: 'var(--accent)' }}
          >
            <ArrowLeftIcon className="h-4 w-4" />
            {t.casePage.backBtn}
          </Link>
        </main>
        
        <SiteFooter />
      </>
    )
  }

  // Markdown HTML Case Render
  return (
    <>
      <SiteNav anchorsActive={false} />
      
      <main className="mx-auto max-w-[760px] px-6 pb-24 pt-[120px]">
        {/* breadcrumbs */}
        <nav aria-label="Breadcrumbs" className="text-sm text-[color:var(--text-muted)]">
          <Link href="/" className="transition-colors hover:text-[color:var(--accent)]">
            {t.casePage.homeBreadcrumb}
          </Link>
          {' / '}
          <Link href="/#cases" className="transition-colors hover:text-[color:var(--accent)]">
            {t.casePage.casesBreadcrumb}
          </Link>
        </nav>

        {/* Hero Graphic Iframe */}
        <div className="mt-8 relative w-full aspect-square md:aspect-video rounded-2xl overflow-hidden border mb-12" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}>
          <iframe
            src={`/cases_graphics/cases/${slug}.html`}
            className="w-full h-full border-0 pointer-events-none"
            title="Case Graphic"
            loading="lazy"
            scrolling="no"
          />
        </div>

        {/* Markdown HTML */}
        <article 
          className="case-html-content"
          dangerouslySetInnerHTML={{ __html: activeHtml }} 
        />

        {/* CTA (Universal) */}
        <section
          className="mt-16 rounded-2xl border p-10 text-center"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
        >
          <p className="mx-auto max-w-[440px] text-pretty text-[color:var(--text-primary)]">
            {t.casePage.ctaText}
          </p>
          <a
            href={`https://t.me/${t.siteData.telegram.dm.replace('@', '')}`}
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--bg-primary)' }}
          >
            <TelegramIcon className="h-4 w-4" />
            {t.casePage.ctaBtn}
          </a>
        </section>

        {/* back nav */}
        <Link
          href="/#cases"
          className="mt-12 flex w-fit items-center gap-1.5 text-sm font-medium"
          style={{ color: 'var(--accent)' }}
        >
          <ArrowLeftIcon className="h-4 w-4" />
          {t.casePage.backBtn}
        </Link>
      </main>

      <SiteFooter />
    </>
  )
}
