// Server Component — nessun 'use client'

import NektarNavbar       from '@/components/layout/NektarNavbar'
import NektarFooter       from '@/components/layout/NektarFooter'
import InvitoHero         from '@/components/sections/invito/InvitoHero'
import InvitoContenuto    from '@/components/sections/invito/InvitoContenuto'

export default function InvitoPage() {
  return (
    <>
      <NektarNavbar />
      <main className="relative overflow-x-hidden" style={{ background: '#070707' }}>
        <InvitoHero />
        <InvitoContenuto />
      </main>
      <NektarFooter />
    </>
  )
}