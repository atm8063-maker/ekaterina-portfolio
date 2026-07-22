'use client'

import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { ArrowRightIcon } from '@/components/icons'
import { SectionHeading, SectionLabel } from '@/components/sections/section-heading'
import { useLanguage } from '@/components/language-provider'
import { translations } from '@/lib/translations'

export function Cases() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section
      id="cases"
      className="px-6 py-[72px] md:py-[120px] overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <SectionLabel>{t.cases.label}</SectionLabel>
          <SectionHeading>{t.cases.heading}</SectionHeading>
          <p className="mt-4 max-w-[640px] text-[color:var(--text-secondary)]">
            {t.cases.description}
          </p>
        </Reveal>

        {/* Carousel Container */}
        <div className="mt-12 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8">
          <div className="flex gap-6 w-max">
            {t.cases.items.map((item, i) => (
              <Reveal key={item.filename} delay={i * 50} as="div" className="w-[85vw] md:w-[calc(550px-12px)] shrink-0 snap-start">
                <Link
                  href={`/cases/${item.filename.replace('.html', '')}`}
                  className="group flex flex-col md:flex-row h-full rounded-2xl border overflow-hidden transition-all duration-200 hover:-translate-y-1"
                  style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
                >
                  {/* Left: Text & Meta */}
                  <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <span className="w-fit rounded-full px-3 py-1 font-mono text-xs" style={{ backgroundColor: 'var(--accent-dim)', color: 'var(--accent)' }}>
                        [ {t.cases.projectTag} {String(i + 1).padStart(2, '0')} ]
                      </span>
                      <h3 className="mt-6 font-serif text-[18px] lg:text-[20px] leading-snug text-[color:var(--text-primary)]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm text-[color:var(--text-secondary)] line-clamp-4">
                        {item.description}
                      </p>
                    </div>

                    <span className="mt-8 flex items-center gap-1.5 text-sm font-medium shrink-0" style={{ color: 'var(--accent)' }}>
                      {t.cases.readCase}
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>

                  {/* Right: Graphic Iframe */}
                  <div className="w-full md:w-1/2 shrink-0 aspect-square border-t md:border-t-0 md:border-l" style={{ borderColor: 'var(--border)' }}>
                    <iframe
                      src={`/cases_graphics/cases/${item.filename}`}
                      className="w-full h-full border-0 pointer-events-none"
                      title={`Case Graphic ${i + 1}`}
                      loading="lazy"
                      scrolling="no"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
