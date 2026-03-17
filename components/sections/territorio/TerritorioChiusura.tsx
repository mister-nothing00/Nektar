'use client'

import { motion } from 'framer-motion'
import NektarSymbol from '@/components/ui/NektarSymbol'

// Componente di chiusura per la sezione Territorio — citazione evocativa, con animazioni di rivelazione e un design coerente con il resto del sito
export default function TerritorioChiusura() {
  return (
    <section className="relative py-48 px-6" aria-label="Chiusura Territorio">

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(200,134,10,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-xl flex flex-col items-center gap-10 text-center">

        <motion.div
          className="flex items-center gap-4 w-full"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, #C8860A)' }} />
          <NektarSymbol size={28} />
          <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, #C8860A, transparent)' }} />
        </motion.div>

        <motion.p
          className="font-garamond text-2xl italic leading-10"
          style={{ color: '#A8A49C' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          "La terra non appartiene a chi la possiede.<br />
          Appartiene a chi sa ascoltarla."
        </motion.p>

        <motion.span
          className="font-cinzel text-[10px] tracking-[0.5em] uppercase"
          style={{ color: '#8B5E08' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          — Nektar, dalle origini
        </motion.span>

        <motion.div
          className="flex items-center gap-4 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,134,10,0.2))' }} />
          <span className="font-cinzel text-[9px] tracking-[0.5em] uppercase" style={{ color: '#6B6760' }}>
            Umbria · Friuli · Torino · Sicilia
          </span>
          <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, rgba(200,134,10,0.2), transparent)' }} />
        </motion.div>

      </div>
    </section>
  )
}