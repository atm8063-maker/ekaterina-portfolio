'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/components/language-provider'

type Section = { id: string; heading: string }

export function CaseReader({ sections }: { sections: Section[] }) {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(sections[0]?.id ?? '')
  const [showToc, setShowToc] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  
  const { lang } = useLanguage()
  const tocLabel = lang === 'ru' ? 'Содержание' : 'Table of Contents'

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0)
      setShowToc(scrollTop > window.innerHeight * 0.4)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  return (
    <>
      {/* progress bar */}
      <div
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
        style={{
          backgroundColor: 'var(--accent)',
          transform: `scaleX(${progress})`,
        }}
        aria-hidden="true"
      />

      {/* desktop sticky ToC */}
      <nav
        aria-label={tocLabel}
        className="pointer-events-none fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 transition-opacity duration-300 xl:block"
        style={{ opacity: showToc ? 1 : 0 }}
      >
        <ol className="pointer-events-auto flex flex-col gap-3">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="flex items-center gap-2 text-sm transition-colors duration-200"
                style={{
                  color: active === s.id ? 'var(--accent)' : 'var(--text-muted)',
                }}
              >
                <span className="font-mono text-xs">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {s.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* mobile dropdown ToC */}
      <div
        className="sticky top-[72px] z-30 -mx-6 mb-8 border-y px-6 py-3 backdrop-blur-[16px] xl:hidden"
        style={{
          borderColor: 'var(--border)',
          backgroundColor:
            'color-mix(in srgb, var(--bg-primary) 85%, transparent)',
        }}
      >
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          className="flex w-full items-center justify-between text-sm text-[color:var(--text-secondary)]"
        >
          <span>{tocLabel}</span>
          <span
            className="transition-transform duration-200"
            style={{ transform: mobileOpen ? 'rotate(180deg)' : 'none' }}
            aria-hidden="true"
          >
            ▾
          </span>
        </button>
        {mobileOpen && (
          <ol className="mt-3 flex flex-col gap-2">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-sm"
                  style={{
                    color:
                      active === s.id ? 'var(--accent)' : 'var(--text-secondary)',
                  }}
                >
                  <span className="font-mono text-xs">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
        )}
      </div>
    </>
  )
}
