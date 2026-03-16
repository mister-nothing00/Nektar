// Server Component — nessun 'use client'

import NektarNavbar     from '@/components/layout/NektarNavbar'
import NektarFooter     from '@/components/layout/NektarFooter'
import ViniHero         from '@/components/sections/vini/ViniHero'
import ViniEtichette    from '@/components/sections/vini/ViniEtichette'
import ViniFilosofia    from '@/components/sections/vini/ViniFilosofia'

export default function ViniPage() {
  return (
    <>
      <NektarNavbar />
      <main className="relative overflow-x-hidden" style={{ background: '#070707' }}>
        <ViniHero />
        <ViniEtichette />
        <ViniFilosofia />
      </main>
      <NektarFooter />
    </>
  )
}