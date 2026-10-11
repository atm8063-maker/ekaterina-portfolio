'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'RU' | 'EN'

type LanguageContextType = {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
  isEn: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('RU')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio-language') as Language
      if (saved === 'RU' || saved === 'EN') {
        // Hydration-safe: read persisted language after mount (not during render)
        // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional post-mount sync from localStorage
        setLangState(saved)
      }
    } catch {
      // ignore SSR/localStorage errors
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    try {
      localStorage.setItem('portfolio-language', newLang)
    } catch {
      // ignore
    }
  }

  const toggleLang = () => {
    setLang(lang === 'RU' ? 'EN' : 'RU')
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isEn: lang === 'EN' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

/**
 * Renders the language-appropriate <title> for the page that uses it, so each
 * page owns its own title instead of a single global effect stomping every
 * page's title back to a hardcoded string.
 *
 * Two layers, because either one alone is unreliable in this Next.js App
 * Router setup:
 *  1. A declarative <title> (React 19 hoists it to <head>) — correct for
 *     client-side language toggles during the session.
 *  2. An imperative document.title write, delayed by a double
 *     requestAnimationFrame — needed because on first load, when the saved
 *     language differs from the SSR default, Next re-asserts its own
 *     server-rendered <title> (from generateMetadata) a tick after our
 *     effect would otherwise fire, silently reverting a same-tick write.
 *     Waiting two animation frames reliably lands after that reassertion.
 */
export function PageTitle({ titleRu, titleEn }: { titleRu: string; titleEn: string }) {
  const { lang } = useLanguage()
  const title = lang === 'EN' ? titleEn : titleRu

  useEffect(() => {
    let raf2 = 0
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        document.title = title
      })
    })
    return () => {
      cancelAnimationFrame(raf1)
      if (raf2) cancelAnimationFrame(raf2)
    }
  }, [title])

  return <title>{title}</title>
}

