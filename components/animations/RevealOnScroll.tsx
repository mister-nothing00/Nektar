'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
}

export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    up:    { hidden: { y: 40, opacity: 0 },  visible: { y: 0, opacity: 1 } },
    down:  { hidden: { y: -40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left:  { hidden: { x: -40, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: 40, opacity: 0 },  visible: { x: 0, opacity: 1 } },
    fade:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[direction]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}