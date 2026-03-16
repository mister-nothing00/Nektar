// ─── CantineProcesso.tsx ──────────────────────────────────────────────────────
// Sfondo: cantina-fisheye.jpg — botti simmetriche, prospettiva centrale

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/animations/RevealOnScroll'

const FASI = [
  { numero: 'I',   titolo: 'La Vendemmia',  testo: "Solo le uve che il sole ha scelto. Raccolte a mano, in silenzio, prima dell'alba." },
  { numero: 'II',  titolo: 'La Vinificazione', testo: 'Nessuna fretta. Il mosto respira nei tini di pietra per settimane.' },
  { numero: 'III', titolo: "L'Affinamento", testo: "Anni di buio e legno antico. Il tempo è l'unico ingrediente che non si misura." },
  { numero: 'IV',  titolo: 'Il Silenzio',   testo: "Prima dell'imbottigliamento, il vino riposa. Come si conviene a ciò che diventerà eterno." },
]

export default function CantineProcesso() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" aria-label="Il Processo">

      {/* ── SFONDO — cantina-fisheye.jpg ─────────────────── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/cantina-fisheye.jpg"
          alt=""
          fill
          className="object-cover object-center"
          quality={85}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(7,7,7,0.88)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg,
              #070707 0%, transparent 15%,
              transparent 85%, #070707 100%)`,
          }}
        />
      </div>

      {/* ── CONTENUTO ────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-5xl">

        <RevealOnScroll direction="fade" className="mb-20 text-center">
          <span
            className="font-cinzel text-[10px] tracking-[0.7em] uppercase"
            style={{ color: '#8B5E08' }}
          >
            Il Rito
          </span>
          <h2
            className="mt-3 font-cinzel-deco text-4xl font-bold tracking-[0.1em] uppercase md:text-5xl"
            style={{ color: '#D4D0C8' }}
          >
            Il Processo
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-4">
          {FASI.map((fase, i) => (
            <motion.div
              key={fase.numero}
              className="flex flex-col gap-6 p-8"
              style={{
                borderTop: '1px solid rgba(200,134,10,0.10)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="font-cinzel-deco text-5xl font-black"
                style={{ color: '#C8860A', opacity: 0.25 }}
                aria-hidden="true"
              >
                {fase.numero}
              </span>
              <h3
                className="font-cinzel text-sm tracking-[0.2em] uppercase"
                style={{ color: '#D4D0C8' }}
              >
                {fase.titolo}
              </h3>
              <p
                className="font-garamond text-sm italic leading-7"
                style={{ color: '#6B6760' }}
              >
                {fase.testo}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}