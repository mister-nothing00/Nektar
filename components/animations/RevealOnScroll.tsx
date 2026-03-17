'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'
  distance?: number  // px di spostamento (default 40)
  once?: boolean
}

const EASE_CINEMATIC = [0.22, 1, 0.36, 1] as const

// Componente per animare la rivelazione di un elemento quando entra in viewport — utilizza framer-motion e useInView
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
  const inView = useInView(ref, { once, margin: '-60px' })

  const variants = {
    up:    { hidden: { y: distance, opacity: 0 },   visible: { y: 0, opacity: 1 } },
    down:  { hidden: { y: -distance, opacity: 0 },  visible: { y: 0, opacity: 1 } },
    left:  { hidden: { x: -distance, opacity: 0 },  visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: distance, opacity: 0 },   visible: { x: 0, opacity: 1 } },
    fade:  { hidden: { opacity: 0 },                 visible: { opacity: 1 } },
    scale: { hidden: { scale: 0.92, opacity: 0 },   visible: { scale: 1, opacity: 1 } },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[direction]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        duration,
        delay,
        ease: EASE_CINEMATIC,
      }}
    >
      {children}
    </motion.div>
  )
}