'use client'

import { useRef, useContext } from 'react'
import { motion, useInView } from 'framer-motion'
import { IntroContext } from '@/context/IntroContext'

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'
  distance?: number
  once?: boolean
}

const EASE = [0.22, 1, 0.36, 1] as const

export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  duration = 1.2,
  direction = 'up',
  distance = 40,
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Se siamo sulla homepage, aspettiamo introComplete prima di
  // abilitare useInView — altrimenti tutti gli elementi risultano
  // già visibili quando l'intro si dissolve
  const { introComplete } = useContext(IntroContext)
  const inView = useInView(ref, {
    once,
    margin: '-60px',
    // Disabilita il rilevamento finché l'intro non è conclusa
    ...(introComplete === false ? { amount: 2 } : {}),
  })

  const variants = {
    up:    { hidden: { y: distance, opacity: 0 },   visible: { y: 0, opacity: 1 } },
    down:  { hidden: { y: -distance, opacity: 0 },  visible: { y: 0, opacity: 1 } },
    left:  { hidden: { x: -distance, opacity: 0 },  visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: distance, opacity: 0 },   visible: { x: 0, opacity: 1 } },
    fade:  { hidden: { opacity: 0 },                 visible: { opacity: 1 } },
    scale: { hidden: { scale: 0.92, opacity: 0 },   visible: { scale: 1, opacity: 1 } },
  }

  // Durante l'intro restiamo nascosti
  const isVisible = introComplete && inView

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[direction]}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}