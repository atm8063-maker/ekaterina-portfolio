'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import type { CaseDetail } from '@/lib/data'
import { CaseNavigation } from '@/components/cases/case-navigation'
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

type Props = {
  slug: string
  caseData: CaseDetail
  images: string[]
}

export function CasePageClient({ slug, caseData, images }: Props) {
  const allImages = images;
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const handlePrev = useCallback(() => {
    if (activeImageIndex === null) return
    setActiveImageIndex((prev) => (prev !== null ? (prev - 1 + allImages.length) % allImages.length : null))
  }, [activeImageIndex, allImages.length])

  const handleNext = useCallback(() => {
    if (activeImageIndex === null) return
    setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % allImages.length : null))
  }, [activeImageIndex, allImages.length])

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeImageIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImageIndex(null)
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [activeImageIndex, handleNext, handlePrev])

  return (
    <>
      <div className="min-h-screen bg-[#111111] text-white overflow-hidden relative font-inter">
        {/* Paper texture overlay */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Image 
            src="/paper-clean-dark.png" 
            alt="Paper texture" 
            fill 
            className="object-cover opacity-70 mix-blend-screen"
          />
        </div>

        {/* Ambient gradients */}
        <div className="fixed top-0 left-0 w-full h-[440px] bg-gradient-to-b from-[#111111] to-transparent z-[1] pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#111111] to-transparent z-[1] pointer-events-none" />

        <div className="relative z-10">
          <Header />
          
          <main className="container mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-24 max-w-[880px]">
            {/* Top Navigation */}
            <CaseNavigation currentSlug={slug} position="top" className="mb-8" />

            {/* Case Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-montserrat font-black uppercase text-white mb-6 leading-tight tracking-tight">
              {caseData.title}
            </h1>

            {/* Lead Text */}
            <p className="text-base sm:text-xl text-white/80 leading-relaxed max-w-3xl mb-12 font-inter font-normal">
              {caseData.lead}
            </p>

            {/* Meta Grid */}
            <div className={`grid grid-cols-1 ${caseData.meta.link ? 'sm:grid-cols-4' : 'sm:grid-cols-3'} gap-6 sm:gap-8 py-6 border-y border-white/10 mb-12`}>
              <div>
                <h3 className="text-xs uppercase font-bold tracking-wider text-white/50 font-montserrat mb-1.5">Направление</h3>
                <p className="text-sm sm:text-base font-semibold text-white font-inter">{caseData.tag}</p>
              </div>
              <div>
                <h3 className="text-xs uppercase font-bold tracking-wider text-white/50 font-montserrat mb-1.5">Роль</h3>
                <p className="text-sm sm:text-base font-semibold text-white font-inter">{caseData.meta.role}</p>
              </div>
              <div>
                <h3 className="text-xs uppercase font-bold tracking-wider text-white/50 font-montserrat mb-1.5">Период</h3>
                <p className="text-sm sm:text-base font-semibold text-white font-inter">{caseData.meta.year}</p>
              </div>
              {caseData.meta.link && (
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-wider text-white/50 font-montserrat mb-1.5">Сайт</h3>
                  <a href={caseData.meta.link} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-semibold text-[#14F1D9] hover:underline font-inter">
                    {caseData.meta.link.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              )}
            </div>

            {/* Key Metrics */}
            {caseData.keyMetrics && caseData.keyMetrics.length > 0 && (
              <section 
                className="rounded-none border-l-4 border-l-[#14F1D9] border border-[#14F1D9]/35 bg-gradient-to-r from-[#14F1D9]/20 via-[#14F1D9]/10 to-[#14F1D9]/5 backdrop-blur-md p-6 sm:p-8 mb-16 shadow-[0_0_30px_rgba(20,241,217,0.15)]"
              >
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                  {caseData.keyMetrics.map((m, idx) => (
                    <div key={idx} className="relative">
                      <p className="font-montserrat text-2xl sm:text-4xl font-black leading-none text-[#14F1D9] drop-shadow-[0_0_16px_rgba(20,241,217,0.35)]">
                        {m.value}
                      </p>
                      <p className="mt-2.5 text-xs sm:text-sm font-medium text-white/90 leading-snug font-inter">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Content Sections */}
            {caseData.sections && caseData.sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-14">
                <h2 className="font-montserrat font-black uppercase text-2xl sm:text-3xl text-white mb-6 tracking-tight">
                  {section.heading}
                </h2>

                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="mb-5 text-base sm:text-lg text-white/80 leading-relaxed font-inter font-normal">
                    {p}
                  </p>
                ))}

                {section.callout && (
                  <blockquote 
                    className="my-8 py-5 pl-6 pr-6 text-base sm:text-lg text-white font-normal bg-gradient-to-r from-[#14F1D9]/20 via-[#14F1D9]/10 to-transparent border-l-4 border-l-[#14F1D9] border border-[#14F1D9]/30 rounded-none shadow-[0_0_25px_rgba(20,241,217,0.12)] font-inter"
                  >
                    {section.callout}
                  </blockquote>
                )}

                {section.steps && (
                  <ol className="mt-6 flex flex-col gap-4">
                    {section.steps.map((step, i) => (
                      <li key={i} className="flex gap-4 text-base sm:text-lg text-white/90 font-light">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-none border-2 border-[#14F1D9] bg-[#14F1D9]/20 text-sm font-bold text-[#14F1D9]">
                          {i + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                )}

                {section.colorPalette && (
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4 my-8">
                    {section.colorPalette.map((color, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <div 
                          className="h-24 w-full rounded-none border border-white/20 shadow-lg" 
                          style={{ backgroundColor: color.hex }} 
                        />
                        <div className="text-[13px]">
                          <span className="text-white block font-medium">{color.hex}</span>
                          {color.name && <span className="text-white/50">{color.name}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.paragraphs2?.map((p, i) => (
                  <p key={i} className="mb-5 text-base sm:text-lg text-white/80 leading-relaxed font-light">
                    {p}
                  </p>
                ))}

                {section.typography && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                    {section.typography.map((font, i) => (
                      <div key={i} className="p-6 rounded-none border-l-4 border-l-[#14F1D9] border border-[#14F1D9]/30 bg-gradient-to-r from-[#14F1D9]/15 via-[#14F1D9]/5 to-transparent flex flex-col justify-between shadow-[0_0_20px_rgba(20,241,217,0.1)]">
                        <div>
                          <div className="text-5xl mb-6 text-white" style={{ fontFamily: font.name }}>
                            {font.example}
                          </div>
                          <h4 className="text-xl text-[#14F1D9] font-bold mb-2">{font.name}</h4>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {font.weights.map((w, j) => (
                              <span key={j} className="text-xs px-2.5 py-1 rounded-none border border-[#14F1D9]/50 bg-[#14F1D9]/10 text-[#14F1D9] font-medium">
                                {w}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.image && (
                  <div className="my-10 rounded-xl overflow-hidden border border-white/10 relative w-full h-[400px] md:h-[600px]">
                    <Image 
                      src={section.image} 
                      alt={section.heading} 
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {section.fullPageMockup && (
                  <div className="my-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative w-full" style={{ maxHeight: '800px', overflowY: 'auto' }}>
                    <Image 
                      src={section.fullPageMockup} 
                      alt="Full Page Mockup" 
                      width={1200}
                      height={4000}
                      className="w-full h-auto object-cover"
                      unoptimized
                    />
                  </div>
                )}
              </section>
            ))}

            {/* Documentary Gallery / Archival Exhibition */}
            {allImages.length > 0 && (
              <section className="mb-16 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#14F1D9] animate-pulse" />
                      <span className="text-xs font-mono font-bold tracking-widest text-[#14F1D9] uppercase">
                        Архив материалов
                      </span>
                    </div>
                    <h2 className="font-montserrat font-black uppercase text-2xl sm:text-3xl text-white tracking-tight">
                      Медиа & Фотохроника
                    </h2>
                  </div>
                  <p className="text-xs text-white/50 font-inter">
                    Нажмите на кадр для полноэкранного просмотра
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {allImages.map((imgSrc, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setActiveImageIndex(idx)}
                      className="group relative bg-[#181818] rounded-xl p-3 sm:p-4 border border-white/15 hover:border-[#14F1D9]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,241,217,0.18)] cursor-pointer flex flex-col justify-between"
                    >
                      {/* Top bar inside documentary card */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs text-white/60 font-mono">
                        <span className="flex items-center gap-1.5 text-[#14F1D9]">
                          <Sparkles className="w-3.5 h-3.5" />
                          Кадр #{idx + 1}
                        </span>
                        <span className="opacity-70 group-hover:text-white transition-colors">
                          {caseData.meta.year}
                        </span>
                      </div>

                      {/* Image container with subtle dark vignette border */}
                      <div className="relative rounded-lg overflow-hidden bg-black/60 aspect-[4/3] w-full flex items-center justify-center">
                        <Image
                          src={imgSrc}
                          alt={`${caseData.title} фото #${idx + 1}`}
                          fill
                          className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                          unoptimized
                        />
                        
                        {/* Hover overlay hint */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-sm font-semibold">
                          <ZoomIn className="w-5 h-5 text-[#14F1D9]" />
                          <span className="font-montserrat uppercase tracking-wider text-xs">Увеличить</span>
                        </div>
                      </div>

                      {/* Bottom label */}
                      <div className="pt-3 mt-1 flex items-center justify-between text-xs text-white/50 group-hover:text-white/80 transition-colors">
                        <span className="font-inter line-clamp-1">{caseData.title}</span>
                        <span className="font-mono text-[#14F1D9] text-[11px] shrink-0 ml-2">🔍 Lightbox</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom Full Navigation */}
            <CaseNavigation currentSlug={slug} position="bottom" />
          </main>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-8 animate-fadeIn"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Top Bar of Modal */}
          <div 
            className="w-full max-w-6xl flex items-center justify-between text-white/80 py-2 border-b border-white/10 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-[#14F1D9]/20 border border-[#14F1D9]/50 text-[#14F1D9] text-xs font-mono font-bold">
                {activeImageIndex + 1} / {allImages.length}
              </span>
              <span className="font-montserrat font-bold text-sm sm:text-base text-white line-clamp-1">
                {caseData.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveImageIndex(null)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white hover:text-[#14F1D9] transition-all flex items-center gap-1.5 text-xs font-mono"
                title="Закрыть (Esc)"
              >
                <X className="w-5 h-5" />
                <span className="hidden sm:inline">Esc</span>
              </button>
            </div>
          </div>

          {/* Main Modal Image Stage */}
          <div 
            className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {allImages.length > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#14F1D9] hover:border-[#14F1D9] transition-all"
                title="Предыдущее фото (←)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
              <Image
                src={allImages[activeImageIndex]}
                alt={`${caseData.title} fullscreen preview`}
                fill
                className="object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                unoptimized
              />
            </div>

            {allImages.length > 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#14F1D9] hover:border-[#14F1D9] transition-all"
                title="Следующее фото (→)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Bottom Bar Info */}
          <div 
            className="w-full max-w-6xl flex items-center justify-center text-xs text-white/50 font-mono py-2"
            onClick={(e) => e.stopPropagation()}
          >
            Используйте стрелки ← / → на клавиатуре или кнопки по бокам для перелистывания
          </div>
        </div>
      )}
    </>
  )
}
