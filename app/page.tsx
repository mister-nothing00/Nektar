'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* =============================================
   GATE PAGE — visibile solo a chi NON ha token
   ============================================= */
export default function GatePage() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#080808]">

      {/* Vignette overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, #080808 100%)',
        }}
      />

      {/* Linea orizzontale gold top */}
      <motion.div
        className="absolute top-0 left-0 h-[1px] w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Linea orizzontale gold bottom */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Contenuto centrale */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="relative z-20 flex flex-col items-center gap-10 px-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          >

            {/* Simbolo sigillo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flicker"
              >
                {/* Cerchio esterno */}
                <circle cx="40" cy="40" r="38" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="4 3" />
                {/* Cerchio interno */}
                <circle cx="40" cy="40" r="28" stroke="#d4af37" strokeWidth="0.5" />
                {/* Stella a 6 punte stilizzata */}
                <polygon
                  points="40,14 45,28 60,28 48,37 53,52 40,43 27,52 32,37 20,28 35,28"
                  stroke="#d4af37"
                  strokeWidth="0.8"
                  fill="none"
                />
                {/* Punto centrale */}
                <circle cx="40" cy="40" r="2" fill="#d4af37" />
              </svg>
            </motion.div>

            {/* Titolo */}
            <motion.h1
              className="font-cinzel-deco text-4xl font-black tracking-[0.3em] text-[#d4af37] glow-gold uppercase md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              Dark Sanctum
            </motion.h1>

            {/* Divisore */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
            >
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <span className="font-cinzel text-xs tracking-[0.4em] text-[#a8a9ad] uppercase">
                Accesso Negato
              </span>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </motion.div>

            {/* Testo enigmatico */}
            <motion.p
              className="font-garamond max-w-sm text-lg italic text-[#6b6b6b]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.9 }}
            >
              "Non vi è luce per chi non porta la chiave.
              <br />
              Torna nell'oscurità da cui sei venuto."
            </motion.p>

          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}