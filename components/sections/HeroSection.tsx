'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import NektarSymbol from '@/components/ui/NektarSymbol'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden" aria-label="Hero">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
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
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 20%, rgba(8,8,8,0.7) 80%),
            linear-gradient(180deg, rgba(8,8,8,0.6) 0%, transparent 30%, transparent 70%, #080808 100%)
          `,
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 px-6 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
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

        <motion.div
          className="absolute bottom-12 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          aria-hidden="true"
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
    </section>
  )
}