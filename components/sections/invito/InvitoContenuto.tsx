'use client'

import { motion } from 'framer-motion'
import NektarSymbol from '@/components/ui/NektarSymbol'
import RevealOnScroll from '@/components/animations/RevealOnScroll'

export default function InvitoContenuto() {
  return (
    <>
      {/* ── SEZIONE ESCLUSIVITÀ ──────────────────────────── */}
      <section className="relative py-48 px-6" aria-label="Solo su Invito">

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 40%, rgba(200,134,10,0.04) 0%, transparent 60%)',
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
            Accesso Riservato
          </motion.span>

          <motion.h2
            className="font-cinzel-deco text-4xl font-bold tracking-[0.08em] uppercase md:text-5xl"
            style={{ color: '#D4D0C8' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Solo per chi<br />è stato scelto.
          </motion.h2>

          <motion.p
            className="font-garamond text-xl italic leading-10"
            style={{ color: '#A8A49C' }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Le degustazioni Nektar non si prenotano.
            Non si acquistano. Si ricevono — attraverso
            un invito personale, esteso a chi condivide
            la nostra visione del piacere silenzioso.
          </motion.p>

          <motion.p
            className="font-garamond text-base leading-8"
            style={{ color: '#6B6760' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            Ogni incontro è unico. Ogni tavola è diversa.
            Ogni bottiglia aperta è un rito che non si ripete mai uguale.
            Il numero di ospiti è sempre limitato — perché
            il lusso vero è lo spazio, il silenzio, l'attenzione.
          </motion.p>

        </div>
      </section>

      {/* ── SEZIONE CONTATTO ─────────────────────────────── */}
      <section
        className="relative py-32 px-6"
        style={{ borderTop: '1px solid rgba(200,134,10,0.06)' }}
        aria-label="Contatto"
      >
        <RevealOnScroll direction="fade" className="mx-auto max-w-xl flex flex-col items-center gap-10 text-center">

          <span
            className="font-cinzel text-[10px] tracking-[0.7em] uppercase"
            style={{ color: '#8B5E08' }}
          >
            Contatto
          </span>

          <p
            className="font-garamond text-lg italic leading-9"
            style={{ color: '#6B6760' }}
          >
            Se hai ricevuto un invito e desideri confermare
            la tua presenza, scrivi direttamente a:
          </p>

          {/* Email — elemento centrale, sobrio */}
          <motion.a
            href="mailto:invito@nektar.it"
            className="font-cinzel text-sm tracking-[0.3em] uppercase transition-colors duration-500"
            style={{ color: '#C8860A' }}
            whileHover={{ color: '#EAE6E0' }}
          >
            invito@nektar.it
          </motion.a>

          {/* Divisore finale */}
          <div className="flex items-center gap-4 w-full">
            <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,134,10,0.2))' }} />
            <NektarSymbol size={20} />
            <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, rgba(200,134,10,0.2), transparent)' }} />
          </div>

          <p
            className="font-garamond text-sm italic"
            style={{ color: '#4A4742' }}
          >
            Nektar risponde personalmente a ogni messaggio.
            I tempi di risposta riflettono il nostro ritmo — lento, intenzionale.
          </p>

        </RevealOnScroll>
      </section>
    </>
  )
}