import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import { siteData, cases, caseDetails } from '@/lib/data'
import { CasePageClient } from '@/components/case-page-client'

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const caseDetail = caseDetails[slug]
  
  if (caseDetail) {
    return { title: `Кейс: ${caseDetail.title} — ${siteData.name}` }
  }

  return { title: 'Кейс не найден' }
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const caseDetail = caseDetails[slug]

  if (!caseDetail) notFound()
  
  // Find gallery images from public/Кейсы/[slug]
  let images: string[] = []
  try {
    const publicCaseDir = path.join(process.cwd(), 'public', 'Кейсы', slug)
    if (fs.existsSync(publicCaseDir)) {
      const files = fs.readdirSync(publicCaseDir)
      images = files
        .filter(f => f.match(/\.(jpg|jpeg|png|webp|gif)$/i))
        .map(f => `/Кейсы/${slug}/${f}`)
    }
  } catch(e) {}

  return (
    <CasePageClient
      slug={slug}
      caseData={caseDetail}
      images={images}
    />
  )
}
