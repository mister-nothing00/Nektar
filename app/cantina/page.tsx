// Server Component — nessun 'use client'

import NektarNavbar       from '@/components/layout/NektarNavbar'
import NektarFooter       from '@/components/layout/NektarFooter'
import CantineHero        from '@/components/sections/cantina/CantineHero'
import CantineStoria      from '@/components/sections/cantina/CantineStoria'
import CantineProcesso    from '@/components/sections/cantina/CantineProcesso'
import CantineProfondita  from '@/components/sections/cantina/CantineProfondita'

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