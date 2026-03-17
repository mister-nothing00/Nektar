'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import NektarSymbol from '@/components/ui/NektarSymbol'

export default function TerritorioHero() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imgY        = useTransform(scrollYProgress, [0, 1],   ['0%', '25%'])
  const imgOpacity  = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
      aria-label="Territorio — Hero"
    >
      {/* ── IMMAGINE + PARALLAX ───────────────────────────── */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y: imgY, opacity: imgOpacity }}
        aria-hidden="true"
      >
        <Image
          src="/images/vigna-tramonto.jpg"
          alt="Vigna al tramonto con calice di vino bianco su tavolo in legno"
          fill
          className="object-cover object-center"
          quality={90}
          sizes="100vw"
          priority
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(7,7,7,0.65)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(7,7,7,0.4) 0%, transparent 40%, transparent 60%, rgba(7,7,7,0.9) 100%)',
          }}
        />
      </motion.div>

      {/* ── VIGNETTE ─────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 25%, rgba(7,7,7,0.55) 85%)',
        }}
      />

      {/* ── CONTENUTO ────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 px-6 text-center"
        style={{ opacity: textOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <NektarSymbol size={48} />
        </motion.div>

        <motion.span
          className="font-cinzel text-[10px] tracking-[0.7em] uppercase"
          style={{ color: '#8B5E08' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Nektar
        </motion.span>

        <motion.h1
          className="font-cinzel-deco text-5xl font-black uppercase tracking-[0.25em] md:text-7xl"
          style={{
            color: '#EAE6E0',
            textShadow: '0 0 80px rgba(200,134,10,0.2)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        >
          Il Territorio
        </motion.h1>

        <motion.p
          className="font-garamond text-lg italic"
          style={{ color: '#A8A49C' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        >
          Quattro radici. Una sola anima.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          aria-hidden="true"
        >
          <span
            className="font-cinzel text-[9px] uppercase tracking-[0.6em]"
            style={{ color: '#6B6760' }}
          >
            Scorri
          </span>
          <motion.div
            className="h-12 w-[1px]"
            style={{ background: 'linear-gradient(180deg, #E8A020, transparent)' }}
            animate={{ scaleY: [0.2, 1, 0.2], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}