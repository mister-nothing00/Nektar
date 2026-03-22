'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import NektarSymbol from '@/components/ui/NektarSymbol'
import { useIntro } from '@/context/IntroContext'

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef   = useRef<HTMLVideoElement>(null)

  const { introComplete } = useIntro()

  // ── Controllo video intro ───────────────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (introComplete) {
      video.currentTime = 0
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [introComplete])

  // ── Parallax + dissolve su scroll ────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const videoY         = useTransform(scrollYProgress, [0, 1],    ['0%', '30%'])
  const videoOpacity   = useTransform(scrollYProgress, [0, 0.65], [1, 0])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4],  [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      aria-label="Hero — Nektar Masseria"
    >
      {/* ── VIDEO + PARALLAX ─────────────────────────────── */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y: videoY, opacity: videoOpacity }}
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          muted
          playsInline
          preload="none"                          
          poster="/images/cantina-archi.webp"
        >
          <source src="/videos/hero-candle.webm" type="video/webm" />
        </video>

        {/* Overlay leggibilità */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(7,7,7,0.45) 0%, rgba(7,7,7,0.1) 50%, rgba(7,7,7,0.75) 100%)',
          }}
        />
      </motion.div>

      {/* ── VIGNETTE ─────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 20%, rgba(7,7,7,0.55) 80%),
            linear-gradient(180deg, rgba(7,7,7,0.5) 0%, transparent 30%, transparent 70%, #070707 100%)
          `,
        }}
      />

      {/* ── CONTENT ──────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 px-6 text-center"
        style={{ opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introComplete ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <NektarSymbol size={56} />
        </motion.div>

        <motion.h1
          className="font-cinzel-deco text-6xl font-black uppercase md:text-8xl lg:text-9xl"
          style={{
            color: '#EAE6E0',
            letterSpacing: '0.3em',
            textShadow: '0 0 60px rgba(232,160,32,0.18), 0 0 120px rgba(232,160,32,0.07)',
          }}
          initial={{ opacity: 0, letterSpacing: '0.8em' }}
          animate={introComplete ? { opacity: 1, letterSpacing: '0.3em' } : {}}
          transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          NEKTAR
        </motion.h1>

        <motion.p
          className="font-garamond text-sm uppercase tracking-[0.5em]"
          style={{ color: '#A8A49C' }}
          initial={{ opacity: 0 }}
          animate={introComplete ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 1.2 }}
        >
          Masseria · Agriturismo
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={introComplete ? { opacity: 1 } : {}}
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