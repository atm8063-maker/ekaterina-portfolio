import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import { siteData, cases, caseDetails } from '@/lib/data'
import { CasePageClient } from '@/components/case-page-client'

const NickPotapovCase = dynamic(
  () => import('@/components/cases/nick-potapov-case').then((m) => ({ default: m.NickPotapovCase }))
)
const VertexHomesCase = dynamic(
  () => import('@/components/cases/vertex-homes-case').then((m) => ({ default: m.VertexHomesCase }))
)
const LandscapeCase = dynamic(
  () => import('@/components/cases/landscape-case').then((m) => ({ default: m.LandscapeCase }))
)
const HouseCase = dynamic(
  () => import('@/components/cases/house-case').then((m) => ({ default: m.HouseCase }))
)
const ElectronicsShopCase = dynamic(
  () => import('@/components/cases/electronics-shop-case').then((m) => ({ default: m.ElectronicsShopCase }))
)
const DoorsRealEstateCase = dynamic(
  () => import('@/components/cases/doors-real-estate-case').then((m) => ({ default: m.DoorsRealEstateCase }))
)

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

  if (slug === '05-nick-potapov-site') {
    return <NickPotapovCase />
  }

  if (slug === '14-vertex-homes') {
    return <VertexHomesCase />
  }

  if (slug === '11-landscape-project') {
    return <LandscapeCase />
  }

  if (slug === '10-house-project') {
    return <HouseCase />
  }

  if (slug === '08-mockup-real-estate') {
    return <DoorsRealEstateCase />
  }

  if (slug === '09-mockup-electronics') {
    return <ElectronicsShopCase />
  }

  const caseDetail = caseDetails[slug]

  if (!caseDetail) notFound()

  let images: string[] = []
  try {
    const publicCaseDir = path.join(process.cwd(), 'public', 'Кейсы', slug)
    if (fs.existsSync(publicCaseDir)) {
      const files = fs.readdirSync(publicCaseDir)
      const imageFiles = files.filter(
        (f) => f.match(/\.(jpg|jpeg|png|webp|gif)$/i) && !f.toLowerCase().includes('mockup.')
      )
      const webpStems = new Set(
        imageFiles
          .filter((f) => f.toLowerCase().endsWith('.webp'))
          .map((f) => f.slice(0, -'.webp'.length).toLowerCase())
      )
      images = imageFiles
        .filter((f) => {
          const ext = path.extname(f).toLowerCase()
          if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') return true
          return !webpStems.has(f.slice(0, -ext.length).toLowerCase())
        })
        .map((f) => `/Кейсы/${slug}/${f}`)
    }
  } catch {
    /* ignore */
  }

  return (
    <CasePageClient
      slug={slug}
      caseData={caseDetail}
      images={images}
    />
  )
}
