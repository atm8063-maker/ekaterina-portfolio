import type { Metadata, Viewport } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SITE_URL } from '@/lib/site-config'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  viewportFit: 'cover',
  themeColor: '#111111',
}

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Екатерина Разумова — Creative Generalist',
  description:
    'Специалист полного цикла. Texts & Design • PR & Media • Mixed Art • UX/UI + AI. От идеи до реализации.',
  alternates: {
    canonical: SITE_URL,
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  appleWebApp: {
    capable: true,
    title: 'Разумова',
    statusBarStyle: 'black-translucent',
  },
}

import { LanguageProvider } from '@/components/language-provider'
import { HashScrollProvider } from '@/components/shared/use-hash-scroll'
import { MediaPrefetch } from '@/components/shared/media-prefetch'
import { ScrollToTopOnNavigate } from '@/components/shared/scroll-to-top-on-navigate'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${inter.variable} ${montserrat.variable}`}
    >
      <head>
        <link rel="preload" href="/logo.webp" as="image" fetchPriority="high" />
      </head>
      <body className="font-sans antialiased text-foreground bg-background">
        <LanguageProvider>
          <ScrollToTopOnNavigate />
          <HashScrollProvider />
          <MediaPrefetch />
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
