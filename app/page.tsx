// Server Component — nessun 'use client', nessun hook
// Qui verranno aggiunti metadata + JSON-LD nel prossimo step
import type { Metadata } from 'next'

import CinematicIntro from '@/components/intro/CinematicIntro'
import HeroSection from '@/components/sections/HeroSection'
import EssenzaSection from '@/components/sections/EssenzaSection'
import TerritorioPreview from '@/components/sections/TerritorioPreview'
import NektarFooter from '@/components/layout/NektarFooter'
import NektarNavbar from '@/components/layout/NektarNavbar'


export default function HomePage() {
  return (
    <>
      {/*
        Overlay cinematografico — Client Component isolato.
        Posizione: fixed, z-50. Ritorna null quando l'intro è concluso.
        Il <main> sottostante è sempre nel DOM → crawlabile da subito.
      */}
      <CinematicIntro />
      
      {/* Navbar — fixed z-50, appare dopo l'intro */}
      <NektarNavbar />

      <main className="relative overflow-x-hidden" style={{ background: '#080808' }}>
        <HeroSection />
        <EssenzaSection />
        <TerritorioPreview />
        <NektarFooter />
      </main>
    </>
  )
}