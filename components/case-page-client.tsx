'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import type { CaseDetail } from '@/lib/data'

type Props = {
  slug: string
  caseData: CaseDetail
  images: string[]
}

export function CasePageClient({ slug, caseData, images }: Props) {
  // Define infographic based on slug
  let infographic = null;
  if (slug.includes('insigma')) infographic = "/case_insigma_infographic_1788377959655.jpg";
  else if (slug.includes('contact-real')) infographic = "/case_contact_re_infographic_1788377969142.jpg";
  else if (slug.includes('pobeda')) infographic = "/case_pobeda_infographic_1788378003533.jpg";
  else if (slug.includes('honda')) infographic = "/case_honda_civic_cup_infographic_1788377978538.jpg";
  else if (slug.includes('resin-art-school')) infographic = "/case_resin_art_infographic_1788378015716.jpg";

  // Combine infographic with user uploaded images for the top collage
  const allImages = infographic ? [infographic, ...images] : images;

  return (
    <>
      <div className="min-h-screen bg-[#111111] text-white overflow-hidden relative">
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
          
          <main className="container mx-auto px-6 py-32 max-w-[760px]">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumbs" className="text-sm text-white/50 mb-12 flex flex-wrap items-center gap-2">
              <Link href="/" className="transition-colors hover:text-[#14F1D9]">Главная</Link>
              <span>/</span>
              <Link href="/#cases" className="transition-colors hover:text-[#14F1D9]">Кейсы</Link>
              <span>/</span>
              <span className="text-white/30">{caseData.title}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              {caseData.title}
            </h1>

            {/* Lead Text */}
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl mb-12">
              {caseData.lead}
            </p>

            {/* Meta Grid (like Nick's) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-y border-white/10 mb-12">
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
            </div>

            {/* Key Metrics */}
            {caseData.keyMetrics && caseData.keyMetrics.length > 0 && (
              <section className="rounded-2xl border border-white/10 bg-[#1A1A1A]/40 p-7 mb-16" style={{ borderLeft: '3px solid #14F1D9' }}>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                  {caseData.keyMetrics.map((m, idx) => (
                    <div key={idx}>
                      <p className="font-serif text-4xl leading-none text-[#14F1D9]">
                        {m.value}
                      </p>
                      <p className="mt-3 text-[13px] text-white/50 leading-snug">
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
                  <span className="mr-3 font-mono text-xl text-[#14F1D9]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  {section.heading}
                </h2>

                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="mb-5 text-lg text-white/80 leading-relaxed font-light">
                    {p}
                  </p>
                ))}

                {section.callout && (
                  <blockquote className="my-8 rounded-r-xl py-4 pl-6 pr-5 text-lg text-white/90 bg-[#14F1D9]/10" style={{ borderLeft: '3px solid #14F1D9' }}>
                    {section.callout}
                  </blockquote>
                )}

                {section.steps && (
                  <ol className="mt-6 flex flex-col gap-4">
                    {section.steps.map((step, i) => (
                      <li key={i} className="flex gap-4 text-lg text-white/80 font-light">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-sm bg-[#14F1D9]/20 text-[#14F1D9]">
                          {i + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
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

            {/* Back Nav */}
            <Link
              href="/#cases"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#14F1D9] hover:opacity-80 transition-opacity"
            >
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Назад к портфолио
            </Link>
          </main>
        </div>
      </div>
    </>
  )
}
