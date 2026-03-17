import { Metadata } from 'next'
import NektarNavbar       from '@/components/layout/NektarNavbar'
import NektarFooter       from '@/components/layout/NektarFooter'
import InvitoHero         from '@/components/sections/invito/InvitoHero'
import InvitoContenuto    from '@/components/sections/invito/InvitoContenuto'


export const metadata: Metadata = {
  title: 'L\'Invito',
  description: 'Se sei qui, sai già come trovarci. Le degustazioni Nektar non si prenotano — si ricevono.',
  openGraph: {
    title: "L'Invito — Nektar",
    description: 'Se sei qui, sai già come trovarci.',
    url: 'https://nektar-nu.vercel.app/invito',
    images: [{ url: 'https://nektar-nu.vercel.app/images/candela-legno.webp', width: 1200, height: 630, alt: "L'Invito Nektar" }],
  },
  alternates: { canonical: 'https://nektar-nu.vercel.app/invito' },
}

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