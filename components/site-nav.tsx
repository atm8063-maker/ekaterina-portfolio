'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { useLanguage } from '@/components/language-provider'
import { translations } from '@/lib/translations'

export function SiteNav({ anchorsActive = true }: { anchorsActive?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')
  
  const { lang, setLang } = useLanguage()
  const t = translations[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!anchorsActive) return
    const ids = t.navLinks.map((l) => l.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [anchorsActive, lang])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-[16px] transition-colors duration-300"
        style={{
          borderColor: scrolled ? 'var(--border)' : 'transparent',
          backgroundColor: scrolled
            ? 'color-mix(in srgb, var(--bg-primary) 88%, transparent)'
            : 'color-mix(in srgb, var(--bg-primary) 65%, transparent)',
        }}
      >
        <nav className="mx-auto flex h-[72px] max-w-[1100px] items-center justify-between px-6">
          <Link href="/" className="flex flex-col leading-tight">
            <div className="font-mono font-bold text-xl text-[color:var(--text-primary)] flex items-center gap-1">
              [ NPC ] <span className="animate-blink text-[color:var(--accent)]">▮</span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {t.navLinks.map((link) => {
              const href = anchorsActive ? link.href : `/${link.href}`
              const isActive = anchorsActive && active === link.href
              return (
                <Link
                  key={link.href}
                  href={href}
                  className="rounded-md px-3 py-2 text-sm transition-colors duration-200"
                  style={{
                    color: isActive
                      ? 'var(--accent)'
                      : 'var(--text-secondary)',
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
            
            <button
              onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
              className="ml-3 mr-1 rounded-md border px-2 py-1 font-mono text-xs text-[color:var(--text-secondary)] transition-colors duration-200 hover:border-[color:var(--border-accent)] hover:text-[color:var(--accent)]"
              style={{ borderColor: 'var(--border)' }}
            >
              {lang === 'ru' ? 'EN' : 'RU'}
            </button>

            <div className="ml-1">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
              className="rounded-md border px-2 py-1 font-mono text-xs text-[color:var(--text-secondary)] transition-colors duration-200 hover:border-[color:var(--border-accent)] hover:text-[color:var(--accent)]"
              style={{ borderColor: 'var(--border)' }}
            >
              {lang === 'ru' ? 'EN' : 'RU'}
            </button>
            <ThemeToggle />
            <button
              type="button"
              aria-label="Открыть меню"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border text-[color:var(--text-primary)]"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="flex flex-col gap-[5px]">
                <span
                  className="block h-[1.5px] w-5 origin-center bg-current transition-transform duration-200"
                  style={{ transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none' }}
                />
                <span
                  className="block h-[1.5px] w-5 bg-current transition-opacity duration-200"
                  style={{ opacity: open ? 0 : 1 }}
                />
                <span
                  className="block h-[1.5px] w-5 origin-center bg-current transition-transform duration-200"
                  style={{ transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div
          className="fixed inset-0 top-[72px] z-40 flex flex-col gap-2 px-6 py-8 md:hidden"
          style={{ backgroundColor: 'var(--bg-primary)' }}
        >
          {t.navLinks.map((link) => (
            <Link
              key={link.href}
              href={anchorsActive ? link.href : `/${link.href}`}
              onClick={() => setOpen(false)}
              className="border-b py-4 font-serif text-2xl text-[color:var(--text-primary)]"
              style={{ borderColor: 'var(--border)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
