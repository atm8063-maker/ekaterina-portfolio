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

  useEffect(() => {
    const titles = {
      RU: 'Екатерина Разумова — Creative Generalist',
      EN: 'Ekaterina Razumova — Creative Generalist',
    }
    if (typeof document !== 'undefined') {
      document.title = titles[lang]
    }
  }, [lang])

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

