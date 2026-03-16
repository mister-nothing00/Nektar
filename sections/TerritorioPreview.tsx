'use client'

import { motion } from 'framer-motion'

interface Territory {
  name: string
  latin: string
  desc: string
}

const TERRITORIES: Territory[] = [
  { name: 'Umbria',  latin: 'Umbria Felix',        desc: 'Colline silenziose, vigne che respirano lentamente.' },
  { name: 'Friuli',  latin: 'Fines Foroiulii',     desc: 'Dove la terra incontra il freddo e il vino diventa cristallo.' },
  { name: 'Torino',  latin: 'Augusta Taurinorum',  desc: 'Radici profonde sotto la pietra delle Langhe.' },
  { name: 'Sicilia', latin: 'Trinacria',            desc: 'Terra di fuoco e sale. Il sole impresso nel calice.' },
]

export default function TerritorioPreview() {
  return (
    <section className="relative py-20 px-6 pb-48" aria-label="Le Origini">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="font-cinzel text-[10px] tracking-[0.7em] uppercase" style={{ color: '#8b6914' }}>
            Le Origini
          </span>
          <h2
            className="mt-3 font-cinzel text-3xl font-semibold tracking-[0.15em] uppercase md:text-4xl"
            style={{ color: '#c0c0c0' }}
          >
            Quattro Terre. Un'Anima.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4">
          {TERRITORIES.map((t, i) => (
            <motion.div
              key={t.name}
              className="group relative flex flex-col justify-between p-8 min-h-64 cursor-pointer overflow-hidden"
              style={{
                background: 'rgba(17,17,17,0.6)',
                borderTop: '1px solid rgba(212,175,55,0.08)',
                borderBottom: '1px solid rgba(212,175,55,0.08)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ background: 'rgba(26,26,26,0.9)' }}
            >
              {/* Numero decorativo */}
              <span
                className="font-cinzel-deco text-6xl font-black opacity-[0.04] absolute bottom-4 right-4 select-none"
                style={{ color: '#d4af37' }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div>
                <span
                  className="font-cinzel text-[9px] tracking-[0.5em] uppercase"
                  style={{ color: '#8b6914' }}
                >
                  {t.latin}
                </span>
                <h3
                  className="font-cinzel mt-2 text-2xl font-semibold tracking-[0.1em] uppercase"
                  style={{ color: '#c0c0c0' }}
                >
                  {t.name}
                </h3>
              </div>

              <p className="font-garamond text-base italic leading-7 mt-6" style={{ color: '#6b6b6b' }}>
                {t.desc}
              </p>

              {/* Hover line — CSS transition su width non supportata direttamente, usiamo scaleX */}
              <motion.div
                className="absolute bottom-0 left-0 h-[1px] origin-left"
                style={{
                  background: 'linear-gradient(90deg, #d4af37, transparent)',
                  width: '100%',
                }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}