
import { Metadata } from 'next'
import NektarNavbar     from '@/components/layout/NektarNavbar'
import NektarFooter     from '@/components/layout/NektarFooter'
import ViniHero         from '@/components/sections/vini/ViniHero'
import ViniEtichette    from '@/components/sections/vini/ViniEtichette'
import ViniFilosofia    from '@/components/sections/vini/ViniFilosofia'


export const metadata: Metadata = {
  title: 'I Vini',
  description: 'Non etichette. Memorie di terra. Silentium, Glacies, Radix, Ignis — quattro vini, quattro territori, un\'unica anima.',
  openGraph: {
    title: 'I Vini — Nektar',
    description: "Non etichette. Memorie di terra.",
    url: 'https://nektar-nu.vercel.app/vini',
    images: [{ url: 'https://nektar-nu.vercel.app/images/enoteca-arco.webp', width: 1200, height: 630, alt: 'I Vini Nektar' }],
  },
  alternates: { canonical: 'https://nektar-nu.vercel.app/vini' },
}


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