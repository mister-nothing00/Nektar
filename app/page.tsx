// Server Component — nessun 'use client', nessun hook

import { IntroProvider }    from '@/context/IntroContext'
import CinematicIntro       from '@/components/intro/CinematicIntro'
import NektarNavbar         from '@/components/layout/NektarNavbar'
import HeroSection          from '@/components/sections/HeroSection'
import EssenzaSection       from '@/components/sections/EssenzaSection'
import TerritorioPreview    from '@/components/sections/TerritorioPreview'
import NektarFooter         from '@/components/layout/NektarFooter'

export default function HomePage() {
  return (
    <IntroProvider>
      {/* Overlay cinematografico — fixed z-50, ritorna null quando concluso */}
      <CinematicIntro />

      {/* Navbar — fixed z-50, appare dopo l'intro */}
      <NektarNavbar />

      <main
        className="relative overflow-x-hidden"
        style={{ background: '#070707' }}
      >
        <HeroSection />
        <EssenzaSection />
        <TerritorioPreview />
        <NektarFooter />
      </main>
    </IntroProvider>
  )
}