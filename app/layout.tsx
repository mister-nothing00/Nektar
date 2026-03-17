import type { Metadata } from 'next'
import { Cormorant_Garamond, Cormorant_SC, EB_Garamond } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const cormorantSC = Cormorant_SC({
  variable: '--font-cormorant-sc',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const ebGaramond = EB_Garamond({
  variable: '--font-garamond',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

/* =============================================
   METADATA BASE — ereditata da tutte le pagine
   ============================================= */
export const metadata: Metadata = {
  metadataBase: new URL(''),
  title: {
    default: 'Nektar — Masseria & Agriturismo',
    template: '%s — Nektar',
  },
  description: 'Dalla terra agli dei. Masseria e agriturismo vinicolo con radici in Umbria, Friuli, Torino e Sicilia. Lusso silenzioso, piacere ancestrale.',
  keywords: ['nektar', 'masseria', 'agriturismo', 'vino', 'cantina', 'degustazione', 'Umbria', 'Friuli', 'Sicilia', 'Torino'],
  authors: [{ name: 'Francesco Davide di Vita' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: '',
    siteName: 'Nektar',
    title: 'Nektar — Masseria & Agriturismo',
    description: "Dalla terra agli dei. Quattro territori, un'unica anima.",
    images: [{ url: '/images/cantina-archi.jpg', width: 1200, height: 630, alt: 'Nektar — Cantina medievale' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nektar — Masseria & Agriturismo',
    description: "Dalla terra agli dei. Quattro territori, un'unica anima.",
    images: ['/images/cantina-archi.jpg'],
  },
  alternates: { canonical: '' },
}

/* =============================================
   JSON-LD — LocalBusiness + Winery
   ============================================= */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'Winery'],
      '@id': 'https://nektar.it/#winery',
      name: 'Nektar — Masseria & Agriturismo',
      description: 'Masseria e agriturismo vinicolo con radici in Umbria, Friuli Venezia Giulia, Torino e Sicilia.',
      url: '',
      email: 'invito@nektar.it',
      foundingDate: '2025',
      areaServed: [
        { '@type': 'State', name: 'Umbria' },
        { '@type': 'State', name: 'Friuli Venezia Giulia' },
        { '@type': 'State', name: 'Piemonte' },
        { '@type': 'State', name: 'Sicilia' },
      ],
      image: '/images/cantina-archi.jpg',
      priceRange: '€€€€',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://nektar.it/#website',
      url: 'https://nektar.it',
      name: 'Nektar',
      inLanguage: 'it-IT',
      publisher: { '@id': 'https://nektar.it/#winery' },
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${cormorant.variable} ${cormorantSC.variable} ${ebGaramond.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}