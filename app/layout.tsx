import type { Metadata } from 'next'
import { Cormorant_Garamond, Cormorant_SC, EB_Garamond } from 'next/font/google'
import './globals.css'

/* =============================================
   FONT SETUP
   ============================================= */
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
   METADATA
   ============================================= */
export const metadata: Metadata = {
  title: 'Nektar — Masseria & Agriturismo',
  description: 'Dalla terra agli dei.',
  robots: { index: false, follow: false },
}

/* =============================================
   ROOT LAYOUT
   ============================================= */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="it"
      className={`${cormorant.variable} ${cormorantSC.variable} ${ebGaramond.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}