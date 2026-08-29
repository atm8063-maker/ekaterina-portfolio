'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'ru' | 'en'

type LanguageContextType = {
  lang: Language
  setLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang') as Language
    if (saved === 'ru' || saved === 'en') {
      setLangState(saved)
    } else if (typeof navigator !== 'undefined') {
      if (navigator.language.toLowerCase().startsWith('ru')) {
        setLangState('ru')
      } else {
        setLangState('en')
      }
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem('portfolio-lang', newLang)
  }

  useEffect(() => {
    const titles = {
      ru: 'Ник Потапов — AI Solutions Architect',
      en: 'Nick Potapov — AI Solutions Architect',
    }
    document.title = titles[lang]
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
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
