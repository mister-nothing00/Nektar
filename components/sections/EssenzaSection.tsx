'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import NektarSymbol from '@/components/ui/NektarSymbol'

export default function EssenzaSection() {
  return (
    <section className="relative py-48 px-6 overflow-hidden" aria-label="L'Essenza">

      {/* ── SFONDO — calice-botti.jpg ─────────────────────────────────────── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/calice-botti.jpg"
          alt=""
          fill
          className="object-cover object-center"
          quality={85}
          sizes="100vw"
        />
        {/* Overlay principale — testo deve emergere */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(7,7,7,0.82)' }}
        />
        {/* Sfumatura verticale — fusione con Hero sopra e Territorio sotto */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg,
              #070707 0%,
              transparent 18%,
              transparent 82%,
              #070707 100%
            )`,
          }}
        />
      </div>

      {/* ── CONTENUTO ────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-xl flex flex-col items-center gap-10 text-center">

        {/* Divisore ornamentale */}
        <motion.div
          className="flex items-center gap-4 w-full"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="flex-1 h-[1px]"
            style={{ background: 'linear-gradient(90deg, transparent, #C8860A)' }}
          />
          <NektarSymbol size={28} />
          <div
            className="flex-1 h-[1px]"
            style={{ background: 'linear-gradient(90deg, #C8860A, transparent)' }}
          />
        </motion.div>

        <motion.span
          className="font-cinzel text-[10px] tracking-[0.7em] uppercase"
          style={{ color: '#8B5E08' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          L'Essenza
        </motion.span>

        <motion.h2
          className="font-cinzel-deco text-4xl font-bold tracking-[0.1em] uppercase md:text-5xl"
          style={{ color: '#D4D0C8' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Dalla Terra agli Dei
        </motion.h2>

        <motion.p
          className="font-garamond text-xl italic leading-9"
          style={{ color: '#A8A49C' }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Non produciamo vino. Custodimo il tempo.<br />
          Quattro terre, un'unica radice — profonda come la pietra,<br />
          silenziosa come la cantina al tramonto.
        </motion.p>

        <motion.div
          className="flex items-center gap-4 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.7 }}
        >
          <div
            className="flex-1 h-[1px]"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(200,134,10,0.3))' }}
          />
          <span
            className="font-cinzel text-[10px] tracking-[0.5em] uppercase"
            style={{ color: '#6B6760' }}
          >
            Est. MMXXV
          </span>
          <div
            className="flex-1 h-[1px]"
            style={{ background: 'linear-gradient(90deg, rgba(200,134,10,0.3), transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}