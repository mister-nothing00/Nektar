'use client'

import { motion } from 'framer-motion'
import NektarSymbol from '@/components/ui/NektarSymbol'

export default function EssenzaSection() {
  return (
    <section className="relative py-48 px-6" aria-label="L'Essenza">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(139,69,19,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-xl flex flex-col items-center gap-10 text-center">
        {/* Divisore ornamentale */}
        <motion.div
          className="flex items-center gap-4 w-full"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, #d4af37)' }} />
          <NektarSymbol size={28} />
          <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, #d4af37, transparent)' }} />
        </motion.div>

        <motion.span
          className="font-cinzel text-[10px] tracking-[0.7em] uppercase"
          style={{ color: '#8b6914' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          L'Essenza
        </motion.span>

        <motion.h2
          className="font-cinzel-deco text-4xl font-bold tracking-[0.1em] uppercase md:text-5xl"
          style={{ color: '#c0c0c0' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Dalla Terra agli Dei
        </motion.h2>

        <motion.p
          className="font-garamond text-xl italic leading-9"
          style={{ color: '#a8a9ad' }}
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
          <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3))' }} />
          <span className="font-cinzel text-[10px] tracking-[0.5em] uppercase" style={{ color: '#2a2a2a' }}>
            Est. MMXXV
          </span>
          <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.3), transparent)' }} />
        </motion.div>
      </div>
    </section>
  )
}