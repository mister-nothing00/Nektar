
import { Metadata } from 'next'
import NektarNavbar         from '@/components/layout/NektarNavbar'
import NektarFooter         from '@/components/layout/NektarFooter'
import TerritorioHero       from '@/components/sections/territorio/TerritorioHero'
import TerritorioRegioni    from '@/components/sections/territorio/TerritorioRegioni'
import TerritorioChiusura   from '@/components/sections/territorio/TerritorioChiusura'


export const metadata: Metadata = {
  title: 'Il Territorio',
  description: 'Quattro radici. Una sola anima. Umbria, Friuli, Torino, Sicilia — i territori che danno vita ai vini Nektar.',
  openGraph: {
    title: 'Il Territorio — Nektar',
    description: 'Quattro radici. Una sola anima.',
    url: 'https://nektar-nu.vercel.app/territorio',
    images: [{ url: 'https://nektar-nu.vercel.app/images/vigna-tramonto.webp', width: 1200, height: 630, alt: 'Territorio Nektar' }],
  },
  alternates: { canonical: 'https://nektar-nu.vercel.app/territorio' },
}

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