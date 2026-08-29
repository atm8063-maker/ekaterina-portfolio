'use client'

import Link from 'next/link'
import { TelegramIcon } from '@/components/icons'
import { useLanguage } from '@/components/language-provider'
import { translations } from '@/lib/translations'

export function SiteFooter() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <footer
      className="border-t px-6 py-12"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div className="flex flex-col leading-tight">
            <span className="font-medium text-[color:var(--text-primary)]">
              {t.siteData.name}
            </span>
            <span className="text-xs text-[color:var(--text-muted)]">
              {t.siteData.subtitle}
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {t.navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={`/${link.href}`}
                className="text-sm text-[color:var(--text-secondary)] transition-colors duration-200 hover:text-[color:var(--accent)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 md:items-end">
            {t.siteData.telegram.dm && (
              <a
                href={`https://t.me/${t.siteData.telegram.dm.replace('@', '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-[color:var(--text-secondary)] transition-colors duration-200 hover:text-[color:var(--accent)]"
              >
                <TelegramIcon className="h-4 w-4" />
                {t.siteData.telegram.dm}
              </a>
            )}
          </div>
        </div>

        <div
          className="mt-10 flex flex-col gap-2 border-t pt-6 text-[13px] text-[color:var(--text-muted)] sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: 'var(--border)' }}
        >
          <span>{t.footer.copyright}</span>
          <span>{t.footer.madeWithoutAgency}</span>
        </div>
      </div>
    </footer>
  )
}
