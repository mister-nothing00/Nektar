'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/animations/RevealOnScroll'
import NektarSymbol from '@/components/ui/NektarSymbol'

export default function CantineProfondita() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" aria-label="Le Profondità">

      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">

        {/* ── TESTO — a sinistra ────────────────────────────── */}
        <RevealOnScroll direction="left">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span
                className="font-cinzel text-[10px] tracking-[0.7em] uppercase"
                style={{ color: '#8B5E08' }}
              >
                Il Cuore
              </span>
              <h2
                className="font-cinzel-deco text-4xl font-bold tracking-[0.08em] uppercase md:text-5xl"
                style={{ color: '#D4D0C8' }}
              >
                Nelle<br />Profondità
              </h2>
            </div>

            <div
              className="h-[1px] w-16"
              style={{ background: 'linear-gradient(90deg, #C8860A, transparent)' }}
            />

            <p
              className="font-garamond text-lg italic leading-9"
              style={{ color: '#A8A49C' }}
            >
              Scendere in cantina non è un gesto ordinario.
              È un attraversamento — dalla luce del giorno
              all'oscurità che custodisce il futuro.
            </p>

            <p
              className="font-garamond text-base leading-8"
              style={{ color: '#6B6760' }}
            >
              Qui, a dodici metri sotto la vigna, la temperatura
              non cambia mai. Le stagioni non esistono. Esiste solo
              il lento trasformarsi del vino in qualcosa di più grande
              di sé stesso.
            </p>

            {/* Divisore ornamentale */}
            <div className="flex items-center gap-4">
              <div
                className="h-[1px] w-8"
                style={{ background: 'rgba(200,134,10,0.3)' }}
              />
              <NektarSymbol size={20} />
              <div
                className="h-[1px] flex-1"
                style={{ background: 'linear-gradient(90deg, rgba(200,134,10,0.3), transparent)' }}
              />
            </div>

            <p
              className="font-cinzel text-[10px] tracking-[0.5em] uppercase"
              style={{ color: '#8B5E08' }}
            >
              "Il tempo è l'unico maestro che non parla."
            </p>
          </div>
        </RevealOnScroll>

        {/* ── IMMAGINE — tunnel-bottiglie.jpg ──────────────── */}
        <RevealOnScroll direction="right" delay={0.2}>
          <div className="relative h-[600px] w-full overflow-hidden"
            style={{ border: '1px solid rgba(200,134,10,0.08)' }}
          >
            <Image
              src="/images/tunnel-bottiglie.jpg"
              alt="Tunnel di bottiglie in cantina con luce arancio intensa"
              fill
              className="object-cover object-center"
              quality={85}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(7,7,7,0.20)' }}
            />
            <div
              className="absolute inset-0"
              style={{ boxShadow: 'inset 0 0 80px rgba(7,7,7,0.7)' }}
            />

            {/* Badge sovrapposto */}
            <motion.div
              className="absolute bottom-8 left-8 flex flex-col gap-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <span
                className="font-cinzel text-[9px] tracking-[0.5em] uppercase"
                style={{ color: '#8B5E08' }}
              >
                Riserva
              </span>
              <span
                className="font-cinzel-deco text-2xl"
                style={{ color: '#C8860A' }}
              >
                Nektar
              </span>
            </motion.div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  )
}