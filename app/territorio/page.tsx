// Server Component — nessun 'use client'

import NektarNavbar         from '@/components/layout/NektarNavbar'
import NektarFooter         from '@/components/layout/NektarFooter'
import TerritorioHero       from '@/components/sections/territorio/TerritorioHero'
import TerritorioRegioni    from '@/components/sections/territorio/TerritorioRegioni'
import TerritorioChiusura   from '@/components/sections/territorio/TerritorioChiusura'

export default function TerritorioPage() {
  return (
    <>
      <NektarNavbar />
      <main className="relative overflow-x-hidden" style={{ background: '#070707' }}>
        <TerritorioHero />
        <TerritorioRegioni />
        <TerritorioChiusura />
      </main>
      <NektarFooter />
    </>
  )
}