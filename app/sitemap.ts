import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-config'
import { cases } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const caseRoutes: MetadataRoute.Sitemap = cases
    .filter((c) => !c.hidden && !c.customHref)
    .map((c) => ({
      url: `${SITE_URL}/cases/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }))

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    {
      url: `${SITE_URL}/fir_tree_art`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/case`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    ...caseRoutes,
  ]
}
