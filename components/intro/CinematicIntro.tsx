'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntro } from '@/context/IntroContext'

// ─── Tipi e costanti ───────────────────────────────────────────────────────────

type Phase = 'black' | 'symbol' | 'title' | 'tagline' | 'dissolve' | 'done'

const PHASE_SEQUENCE: Phase[] = ['black', 'symbol', 'title', 'tagline', 'dissolve', 'done']

const PHASE_DURATIONS: Record<Exclude<Phase, 'done'>, number> = {
  black:    600,   // era 1200 — il nero puro non serve così lungo
  symbol:   1200,  // era 1800
  title:    1600,  // era 2200
  tagline:  2000,  // era 2800
  dissolve: 1000,  // era 1600
}

const SESSION_KEY = 'nektar_intro_seen'

// ─── SVG locale ───────────────────────────────────────────────────────────────

function IntroSymbol({ size = 100 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 100" fill="none">
      <circle cx="40" cy="42" r="36" stroke="#d4af37" strokeWidth="0.6" strokeDasharray="6 3" opacity="0.5" />
      <circle cx="40" cy="42" r="26" stroke="#d4af37" strokeWidth="0.4" opacity="0.3" />
      <path
        d="M28 24 C24 24 20 28 20 34 C20 44 28 52 40 58 C52 52 60 44 60 34 C60 28 56 24 52 24"
        stroke="#d4af37" strokeWidth="0.8" fill="none"
      />
      <line x1="28" y1="24" x2="32" y2="16" stroke="#d4af37" strokeWidth="0.7" />
      <line x1="52" y1="24" x2="48" y2="16" stroke="#d4af37" strokeWidth="0.7" />
      <line x1="32" y1="16" x2="48" y2="16" stroke="#d4af37" strokeWidth="0.7" />
      <path d="M36 58 C36 64 38 68 40 72 C42 68 44 64 44 58" stroke="#d4af37" strokeWidth="0.6" fill="none" />
      <circle cx="40" cy="42" r="2" fill="#d4af37" opacity="0.8" />
    </svg>
  )
}

// ─── Reveal lettera per lettera ───────────────────────────────────────────────

interface LetterRevealProps {
  text: string
  delay?: number
  stagger?: number
  className?: string
}

function LetterReveal({ text, delay = 0, stagger = 0.08, className = '' }: LetterRevealProps) {
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

// ─── CinematicIntro ───────────────────────────────────────────────────────────

export default function CinematicIntro() {
  const [phase, setPhase] = useState<Phase>('black')
  const { setIntroComplete } = useIntro()

  useEffect(() => {
    // 1. prefers-reduced-motion → salta a done
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setPhase('done')
      setIntroComplete(true)
      return
    }

    // 2. Già vista in questa sessione → salta a done
    if (sessionStorage.getItem(SESSION_KEY)) {
      setPhase('done')
      setIntroComplete(true)
      return
    }

    // 3. Prima visita — esegui l'intro e segna come vista
    sessionStorage.setItem(SESSION_KEY, '1')

    let elapsed = 0
    const timers: ReturnType<typeof setTimeout>[] = []

    PHASE_SEQUENCE.slice(0, -1).forEach((p, i) => {
      elapsed += PHASE_DURATIONS[p as Exclude<Phase, 'done'>]
      timers.push(
        setTimeout(() => {
          const next = PHASE_SEQUENCE[i + 1]
          setPhase(next)
          if (next === 'done') setIntroComplete(true)
        }, elapsed)
      )
    })

    return () => timers.forEach(clearTimeout)
  }, [setIntroComplete])

  if (phase === 'done') return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: '#080808' }}
      aria-hidden="true"
    >
      {/* Grain cinematografico */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <AnimatePresence mode="wait">

        {(phase === 'symbol' || phase === 'title' || phase === 'tagline') && (
          <motion.div
            key="symbol-group"
            className="flex flex-col items-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <motion.div
              className="flicker"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <IntroSymbol size={100} />
            </motion.div>

            {(phase === 'title' || phase === 'tagline') && (
              <motion.div className="flex flex-col items-center gap-6">
                <h2
                  className="font-cinzel-deco text-5xl font-black tracking-[0.5em] uppercase md:text-8xl"
                  style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212,175,55,0.3)' }}
                >
                  <LetterReveal text="NEKTAR" stagger={0.15} />
                </h2>

                <motion.div
                  className="h-[1px] w-48"
                  style={{ background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />

                {phase === 'tagline' && (
                  <motion.div
                    className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  >
                    <p className="font-garamond text-xl italic" style={{ color: '#a8a9ad' }}>
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

        {phase === 'dissolve' && (
          <motion.div
            key="dissolve"
            className="absolute inset-0"
            style={{ background: '#080808' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        )}

      </AnimatePresence>
    </div>
  )
}