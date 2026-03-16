'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

/* =============================================
   CINEMATIC INTRO SEQUENCE
   Fasi: black → logo → tagline → hero → content
   ============================================= */

type Phase =
  | 'black'       // schermo nero puro
  | 'symbol'      // simbolo che appare
  | 'title'       // NEKTAR si rivela
  | 'tagline'     // citazione greca
  | 'dissolve'    // dissolvenza verso hero
  | 'hero'        // hero fullscreen
  | 'content'     // pagina completa

const PHASE_DURATIONS: Record<Phase, number> = {
  black:    1200,
  symbol:   1800,
  title:    2200,
  tagline:  2800,
  dissolve: 1600,
  hero:     0,
  content:  0,
}

/* =============================================
   SYMBOL SVG — anfora greca stilizzata
   ============================================= */
function NektarSymbol({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 100" fill="none">
      {/* Cerchio esterno */}
      <circle cx="40" cy="42" r="36" stroke="#d4af37" strokeWidth="0.6" strokeDasharray="6 3" opacity="0.5" />
      {/* Cerchio interno */}
      <circle cx="40" cy="42" r="26" stroke="#d4af37" strokeWidth="0.4" opacity="0.3" />
      {/* Anfora stilizzata */}
      <path
        d="M28 24 C24 24 20 28 20 34 C20 44 28 52 40 58 C52 52 60 44 60 34 C60 28 56 24 52 24"
        stroke="#d4af37" strokeWidth="0.8" fill="none"
      />
      <line x1="28" y1="24" x2="32" y2="16" stroke="#d4af37" strokeWidth="0.7" />
      <line x1="52" y1="24" x2="48" y2="16" stroke="#d4af37" strokeWidth="0.7" />
      <line x1="32" y1="16" x2="48" y2="16" stroke="#d4af37" strokeWidth="0.7" />
      {/* Vite */}
      <path
        d="M36 58 C36 64 38 68 40 72 C42 68 44 64 44 58"
        stroke="#d4af37" strokeWidth="0.6" fill="none"
      />
      {/* Punto */}
      <circle cx="40" cy="42" r="2" fill="#d4af37" opacity="0.8" />
    </svg>
  )
}

/* =============================================
   LETTER REVEAL — ogni lettera appare
   ============================================= */
function LetterReveal({
  text,
  delay = 0,
  stagger = 0.08,
  className = '',
}: {
  text: string
  delay?: number
  stagger?: number
  className?: string
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 1.2,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ marginRight: char === ' ' ? '0.3em' : '0.02em' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

/* =============================================
   HERO PARALLAX IMAGE
   ============================================= */
function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
        {/* Placeholder: sostituire con next/image reale */}
        <div
          className="h-full w-full"
          style={{
            background: `
              radial-gradient(ellipse at 30% 60%, rgba(139,69,19,0.25) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 30%, rgba(212,175,55,0.08) 0%, transparent 50%),
              linear-gradient(180deg, #080808 0%, #1a0f00 40%, #0d0800 100%)
            `,
          }}
        />
      </motion.div>

      {/* Vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 20%, rgba(8,8,8,0.7) 80%),
            linear-gradient(180deg, rgba(8,8,8,0.6) 0%, transparent 30%, transparent 70%, #080808 100%)
          `,
        }}
      />

      {/* Contenuto hero */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <NektarSymbol size={60} />
        </motion.div>

        <motion.h1
          className="font-cinzel-deco text-6xl font-black tracking-[0.3em] uppercase md:text-8xl lg:text-9xl"
          style={{
            color: '#d4af37',
            textShadow: '0 0 60px rgba(212,175,55,0.2), 0 0 120px rgba(212,175,55,0.08)',
          }}
          initial={{ opacity: 0, letterSpacing: '0.8em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        >
          NEKTAR
        </motion.h1>

        <motion.p
          className="font-garamond text-sm tracking-[0.5em] uppercase"
          style={{ color: '#6b6b6b' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          Masseria · Agriturismo
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          <span className="font-cinzel text-[9px] tracking-[0.6em] uppercase" style={{ color: '#2a2a2a' }}>
            Scorri
          </span>
          <motion.div
            className="h-12 w-[1px]"
            style={{ background: 'linear-gradient(180deg, #d4af37, transparent)' }}
            animate={{ scaleY: [0.2, 1, 0.2], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </div>
  )
}

/* =============================================
   HOMEPAGE — sequenza cinematografica completa
   ============================================= */
export default function HomePage() {
  const [phase, setPhase] = useState<Phase>('black')

  useEffect(() => {
    const phases: Phase[] = ['black', 'symbol', 'title', 'tagline', 'dissolve', 'hero']
    let elapsed = 0

    const timers = phases.slice(0, -1).map((p, i) => {
      elapsed += PHASE_DURATIONS[p]
      return setTimeout(() => setPhase(phases[i + 1]), elapsed)
    })

    // Dopo dissolve → content
    elapsed += PHASE_DURATIONS['dissolve']
    timers.push(setTimeout(() => setPhase('content'), elapsed))

    return () => timers.forEach(clearTimeout)
  }, [])

  /* ---------- INTRO CINEMATOGRAFICA ---------- */
  if (phase !== 'content') {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        style={{ background: '#080808' }}
      >
        {/* Grano cinematografico */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        <AnimatePresence mode="wait">

          {/* FASE: simbolo */}
          {(phase === 'symbol' || phase === 'title' || phase === 'tagline') && (
            <motion.div
              key="symbol"
              className="flex flex-col items-center gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                className="flicker"
              >
                <NektarSymbol size={100} />
              </motion.div>

              {/* FASE: titolo */}
              {(phase === 'title' || phase === 'tagline') && (
                <motion.div className="flex flex-col items-center gap-6">
                  <h1
                    className="font-cinzel-deco text-7xl font-black tracking-[0.5em] uppercase md:text-8xl"
                    style={{
                      color: '#d4af37',
                      textShadow: '0 0 40px rgba(212,175,55,0.3)',
                    }}
                  >
                    <LetterReveal text="NEKTAR" delay={0} stagger={0.15} />
                  </h1>

                  <motion.div
                    className="h-[1px] w-48"
                    style={{ background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* FASE: tagline greca */}
                  {phase === 'tagline' && (
                    <motion.div
                      className="flex flex-col items-center gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    >
                      <p
                        className="font-garamond text-xl italic"
                        style={{ color: '#a8a9ad' }}
                      >
                        "Il nettare che gli dei custodivano per sé."
                      </p>
                      <span
                        className="font-cinzel text-[10px] tracking-[0.5em] uppercase"
                        style={{ color: '#8b6914' }}
                      >
                        — Ὅμηρος
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}

          {/* FASE: dissolve */}
          {phase === 'dissolve' && (
            <motion.div
              key="dissolve"
              className="absolute inset-0"
              style={{ background: '#080808' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
          )}

          {/* FASE: hero (transizione) */}
          {phase === 'hero' && (
            <motion.div
              key="hero-transition"
              className="absolute inset-0"
              style={{ background: '#080808' }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          )}

        </AnimatePresence>
      </div>
    )
  }

  /* ---------- CONTENUTO PRINCIPALE ---------- */
  return (
    <motion.main
      className="relative overflow-x-hidden"
      style={{ background: '#080808' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* HERO */}
      <HeroParallax />

      {/* SEZIONE — Il Nettare */}
      <section className="relative py-48 px-6">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, rgba(139,69,19,0.07) 0%, transparent 65%)',
          }}
        />

        <div className="relative mx-auto max-w-xl flex flex-col items-center gap-10 text-center">
          {/* Ornamento */}
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

      {/* SEZIONE — Quattro Terre */}
      <section className="relative py-20 px-6 pb-48">
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
            {[
              { name: 'Umbria',   latin: 'Umbria Felix',     desc: 'Colline silenziose, vigne che respirano lentamente.' },
              { name: 'Friuli',   latin: 'Fines Foroiulii',  desc: 'Dove la terra incontra il freddo e il vino diventa cristallo.' },
              { name: 'Torino',   latin: 'Augusta Taurinorum', desc: 'Radici profonde sotto la pietra delle Langhe.' },
              { name: 'Sicilia',  latin: 'Trinacria',         desc: 'Terra di fuoco e sale. Il sole impresso nel calice.' },
            ].map((t, i) => (
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
                {/* Numero */}
                <span
                  className="font-cinzel-deco text-6xl font-black opacity-[0.04] absolute bottom-4 right-4 select-none"
                  style={{ color: '#d4af37' }}
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
                    className="font-cinzel mt-2 text-2xl font-semibold tracking-[0.1em] uppercase transition-colors duration-500"
                    style={{ color: '#c0c0c0' }}
                  >
                    {t.name}
                  </h3>
                </div>

                <p
                  className="font-garamond text-base italic leading-7 mt-6"
                  style={{ color: '#6b6b6b' }}
                >
                  {t.desc}
                </p>

                {/* Hover line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full"
                  style={{ background: 'linear-gradient(90deg, #d4af37, transparent)' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="relative py-12 text-center"
        style={{ borderTop: '1px solid rgba(212,175,55,0.06)' }}
      >
        <div className="flex flex-col items-center gap-4">
          <NektarSymbol size={28} />
          <p
            className="font-cinzel text-[10px] tracking-[0.6em] uppercase"
            style={{ color: '#2a2a2a' }}
          >
            Nektar — Masseria & Agriturismo
          </p>
          <p
            className="font-garamond text-sm italic"
            style={{ color: '#1a1a1a' }}
          >
            Umbria · Friuli · Torino · Sicilia
          </p>
        </div>
      </footer>
    </motion.main>
  )
}