'use client'

import { motion } from 'framer-motion'
import NektarSymbol from '@/components/ui/NektarSymbol'

export default function ViniFilosofia() {
  return (
    <section className="relative py-48 px-6" aria-label="La Filosofia">

      {/* Radial glow di sfondo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(200,134,10,0.05) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-2xl flex flex-col items-center gap-12 text-center">

        {/* Divisore */}
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

        <motion.span
          className="font-cinzel text-[10px] tracking-[0.7em] uppercase"
          style={{ color: '#8B5E08' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          La Filosofia
        </motion.span>

        <motion.h2
          className="font-cinzel-deco text-4xl font-bold tracking-[0.08em] uppercase md:text-5xl"
          style={{ color: '#D4D0C8' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Il Vino Non Si Spiega.
          <br />Si Vive.
        </motion.h2>

        <motion.p
          className="font-garamond text-xl italic leading-10"
          style={{ color: '#A8A49C' }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Non esistono note di degustazione che possano restituire
          il momento in cui un vino parla direttamente all'anima.
          Nessuna scheda tecnica sa descrivere il silenzio
          che scende dopo il primo sorso.
        </motion.p>

        <motion.p
          className="font-garamond text-base leading-8"
          style={{ color: '#6B6760' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          Per questo i nostri vini non hanno prezzo esposto,
          non hanno punteggi, non partecipano a concorsi.
          Esistono per chi sa riconoscere il valore
          di ciò che non si quantifica.
        </motion.p>

        {/* Divisore finale */}
        <motion.div
          className="flex items-center gap-4 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.9 }}
        >
          <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,134,10,0.25))' }} />
          <span
            className="font-cinzel text-[9px] tracking-[0.5em] uppercase"
            style={{ color: '#6B6760' }}
          >
            Solo su invito
          </span>
          <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, rgba(200,134,10,0.25), transparent)' }} />
        </motion.div>

      </div>
    </section>
  )
}