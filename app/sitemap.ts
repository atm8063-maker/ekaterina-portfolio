import type { MetadataRoute } from 'next'

const cases = [
  '01-astro-directus',
  '02-tg-uploader',
  '03-autoposter',
  '04-tg-admin',
  '05-translator',
  '06-mafia',
  '07-serverless-menu',
  '08-accountant',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nickpotapov.com'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    ...cases.map((slug) => ({
      url: `${base}/cases/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ]
}
