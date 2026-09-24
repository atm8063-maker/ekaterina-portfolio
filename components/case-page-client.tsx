'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import type { CaseDetail } from '@/lib/data'
import { CaseNavigation } from '@/components/cases/case-navigation'

type Props = {
  slug: string
  caseData: CaseDetail
  images: string[]
}

export function CasePageClient({ slug, caseData, images }: Props) {
  // Gallery images from case folder
  const allImages = images;

  return (
    <>
      <div className="min-h-screen bg-[#111111] text-white overflow-hidden relative font-inter">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Image 
            src="/paper-clean-dark.png" 
            alt="Paper texture" 
            fill 
            className="object-cover opacity-70 mix-blend-screen"
          />
        </div>

        <div className="fixed top-0 left-0 w-full h-[440px] bg-gradient-to-b from-[#111111] to-transparent z-[1] pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#111111] to-transparent z-[1] pointer-events-none" />

        <div className="relative z-10">
          <Header />
          
          <main className="container mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-24 max-w-[880px]">
            {/* Top Navigation */}
            <CaseNavigation currentSlug={slug} position="top" className="mb-8" />

            <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              {caseData.title}
            </h1>

            {/* Lead Text */}
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl mb-12">
              {caseData.lead}
            </p>

            {/* Meta Grid (like Nick's) */}
            <div className={`grid grid-cols-1 ${caseData.meta.link ? 'sm:grid-cols-4' : 'sm:grid-cols-3'} gap-8 py-8 border-y border-white/10 mb-12`}>
              <div>
                <h3 className="text-[13px] text-white/50 mb-2">Направление</h3>
                <p className="text-[15px] font-medium text-white">{caseData.tag}</p>
              </div>
              <div>
                <h3 className="text-[13px] text-white/50 mb-2">Роль</h3>
                <p className="text-[15px] font-medium text-white">{caseData.meta.role}</p>
              </div>
              <div>
                <h3 className="text-[13px] text-white/50 mb-2">Период</h3>
                <p className="text-[15px] font-medium text-white">{caseData.meta.year}</p>
              </div>
              {caseData.meta.link && (
                <div>
                  <h3 className="text-[13px] text-white/50 mb-2">Сайт</h3>
                  <a href={caseData.meta.link} target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-[#14F1D9] hover:underline">
                    {caseData.meta.link.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              )}
            </div>

            {/* Key Metrics */}
            {caseData.keyMetrics && caseData.keyMetrics.length > 0 && (
              <section 
                className="rounded-none border-l-4 border-l-[#14F1D9] border border-[#14F1D9]/35 bg-gradient-to-r from-[#14F1D9]/20 via-[#14F1D9]/10 to-[#14F1D9]/5 backdrop-blur-md p-7 sm:p-8 mb-16 shadow-[0_0_30px_rgba(20,241,217,0.15)]"
              >
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                  {caseData.keyMetrics.map((m, idx) => (
                    <div key={idx} className="relative">
                      <p className="font-serif text-3xl sm:text-4xl font-bold leading-none text-[#14F1D9] drop-shadow-[0_0_16px_rgba(20,241,217,0.35)]">
                        {m.value}
                      </p>
                      <p className="mt-3 text-sm font-medium text-white/90 leading-snug">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Content Sections */}
            {caseData.sections && caseData.sections.map((section, idx) => (
              <section key={section.id} id={section.id} className="mb-14">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                  {section.heading}
                </h2>

                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="mb-5 text-lg text-white/80 leading-relaxed font-light">
                    {p}
                  </p>
                ))}

                {section.callout && (
                  <blockquote 
                    className="my-8 py-5 pl-6 pr-6 text-lg text-white font-normal bg-gradient-to-r from-[#14F1D9]/20 via-[#14F1D9]/10 to-transparent border-l-4 border-l-[#14F1D9] border border-[#14F1D9]/30 rounded-none shadow-[0_0_25px_rgba(20,241,217,0.12)]"
                  >
                    {section.callout}
                  </blockquote>
                )}

                {section.steps && (
                  <ol className="mt-6 flex flex-col gap-4">
                    {section.steps.map((step, i) => (
                      <li key={i} className="flex gap-4 text-lg text-white/90 font-light">
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
                  <p key={i} className="mb-5 text-lg text-white/80 leading-relaxed font-light">
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

            {/* Photo Gallery (Collage at the bottom) */}
            {allImages.length > 0 && (
              <section className="mb-16">
                <div className="columns-1 sm:columns-2 gap-6 space-y-6">
                  {allImages.map((imgSrc, idx) => (
                    <div 
                      key={idx} 
                      className="relative rounded-xl overflow-hidden border border-white/10 break-inside-avoid"
                    >
                      <Image
                        src={imgSrc}
                        alt={`Case image ${idx + 1}`}
                        width={800}
                        height={800}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        unoptimized // Adding unoptimized in case it's a local/static image that doesn't need Next.js image optimization
                      />
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
    </>
  )
}
