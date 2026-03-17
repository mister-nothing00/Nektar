

import { Metadata } from 'next'
import NektarNavbar       from '@/components/layout/NektarNavbar'
import NektarFooter       from '@/components/layout/NektarFooter'
import CantineHero        from '@/components/sections/cantina/CantineHero'
import CantineStoria      from '@/components/sections/cantina/CantineStoria'
import CantineProcesso    from '@/components/sections/cantina/CantineProcesso'
import CantineProfondita  from '@/components/sections/cantina/CantineProfondita'


export const metadata: Metadata = {
  title: 'La Cantina',
  description: 'Dove la pietra custodisce il silenzio del tempo. Scopri la cantina di Nektar — archi medievali, botti antiche, il rito della vinificazione.',
  openGraph: {
    title: 'La Cantina — Nektar',
    description: 'Dove la pietra custodisce il silenzio del tempo.',
    url: 'https://nektar-nu.vercel.app/cantina',
    images: [{ url: 'https://nektar-nu.vercel.app/images/cantina-archi.webp', width: 1200, height: 630, alt: 'Cantina Nektar' }],
  },
  alternates: { canonical: 'https://nektar-nu.vercel.app/cantina' },
}

export default function CantinaPage() {
  return (
    <>
      <NektarNavbar />
      <main className="relative overflow-x-hidden" style={{ background: '#070707' }}>
        <CantineHero />
        <CantineStoria />
        <CantineProcesso />
        <CantineProfondita />
      </main>
      <NektarFooter />
    </>
  )
}