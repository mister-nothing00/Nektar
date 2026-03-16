'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import StaggerReveal from '@/components/animations/StaggerReveal'

interface Territory {
  name: string
  latin: string
  desc: string
}

const TERRITORIES: Territory[] = [
  { name: 'Umbria',  latin: 'Umbria Felix',       desc: 'Colline silenziose, vigne che respirano lentamente.' },
  { name: 'Friuli',  latin: 'Fines Foroiulii',    desc: 'Dove la terra incontra il freddo e il vino diventa cristallo.' },
  { name: 'Torino',  latin: 'Augusta Taurinorum', desc: 'Radici profonde sotto la pietra delle Langhe.' },
  { name: 'Sicilia', latin: 'Trinacria',           desc: 'Terra di fuoco e sale. Il sole impresso nel calice.' },
]

export default function TerritorioPreview() {
  return (
    <section className="relative py-20 px-6 pb-48 overflow-hidden" aria-label="Le Origini">

      {/* ── SFONDO ───────────────────────────────────────── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/vigna-tramonto.jpg"
          alt=""
          fill
          className="object-cover object-center"
          quality={80}
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(7,7,7,0.78)' }} />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #070707 0%, transparent 12%, transparent 88%, #070707 100%)',
          }}
        />
      </div>

      {/* ── CONTENUTO ────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Intestazione */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="font-cinzel text-[10px] tracking-[0.7em] uppercase" style={{ color: '#8B5E08' }}>
            Le Origini
          </span>
          <h2
            className="mt-3 font-cinzel text-3xl font-semibold tracking-[0.15em] uppercase md:text-4xl"
            style={{ color: '#D4D0C8' }}
          >
            Quattro Terre. Un'Anima.
          </h2>
        </motion.div>

        {/* Card — StaggerReveal è il grid, i figli sono div semplici */}
        <StaggerReveal
          className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4"
          stagger={0.14}
          direction="up"
        >
          {TERRITORIES.map((t, i) => (
            <motion.div
              key={t.name}
              className="group relative flex flex-col justify-between p-8 min-h-64 cursor-pointer overflow-hidden"
              style={{
                background: 'rgba(7,7,7,0.65)',
                borderTop: '1px solid rgba(200,134,10,0.10)',
                borderBottom: '1px solid rgba(200,134,10,0.10)',
                backdropFilter: 'blur(2px)',
              }}
              whileHover={{ background: 'rgba(14,14,14,0.88)' }}
            >
              <span
                className="font-cinzel-deco text-6xl font-black absolute bottom-4 right-4 select-none"
                style={{ color: '#C8860A', opacity: 0.06 }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div>
                <span className="font-cinzel text-[9px] tracking-[0.5em] uppercase" style={{ color: '#8B5E08' }}>
                  {t.latin}
                </span>
                <h3 className="font-cinzel mt-2 text-2xl font-semibold tracking-[0.1em] uppercase" style={{ color: '#D4D0C8' }}>
                  {t.name}
                </h3>
              </div>

              <p className="font-garamond text-base italic leading-7 mt-6" style={{ color: '#6B6760' }}>
                {t.desc}
              </p>

              <motion.div
                className="absolute bottom-0 left-0 h-[1px] w-full origin-left"
                style={{ background: 'linear-gradient(90deg, #C8860A, transparent)' }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </StaggerReveal>

      </div>
    </section>
  )
}