// Server Component — nessun 'use client', nessun hook
// Qui verranno aggiunti metadata + JSON-LD nel prossimo step

import CinematicIntro from '@/components/intro/CinematicIntro'
import HeroSection from '@/components/sections/HeroSection'
import EssenzaSection from '@/components/sections/EssenzaSection'
import TerritorioPreview from '@/components/sections/TerritorioPreview'
import NektarFooter from '@/components/layout/NektarFooter'


import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nektar — Masseria & Agriturismo',
  description: 'Dalla terra agli dei. Quattro territori, un'unica anima.',
  openGraph: {
    title: 'Nektar',
    description: 'Dalla terra agli dei.',
    url: 'https://nektar.it',
    siteName: 'Nektar',
    locale: 'it_IT',
    type: 'website',
  },
  alternates: {
    canonical: 'https://nektar.it',
  },
}

export default function HomePage() {
  return (
    <>
      {/*
        Overlay cinematografico — Client Component isolato.
        Posizione: fixed, z-50. Ritorna null quando l'intro è concluso.
        Il <main> sottostante è sempre nel DOM → crawlabile da subito.
      */}
      <CinematicIntro />

      <main className="relative overflow-x-hidden" style={{ background: '#080808' }}>
        <HeroSection />
        <EssenzaSection />
        <TerritorioPreview />
        <NektarFooter />
      </main>
    </>
  )
}