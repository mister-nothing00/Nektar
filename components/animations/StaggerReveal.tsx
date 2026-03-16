'use client'

import { useRef, useContext, Children } from 'react'
import { motion, useInView } from 'framer-motion'
import { IntroContext } from '@/context/IntroContext'

interface StaggerRevealProps {
  children: React.ReactNode
  className?: string
  stagger?: number
  delay?: number
  direction?: 'up' | 'fade' | 'left' | 'right'
  distance?: number
  once?: boolean
}

const EASE = [0.22, 1, 0.36, 1] as const

const containerVariants = (stagger: number, delay: number) => ({
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren:   delay,
    },
  },
})

const itemVariants = (direction: string, distance: number) => {
  const base    = { opacity: 0 }
  const visible = { opacity: 1 }
  switch (direction) {
    case 'up':    return { hidden: { ...base, y:  distance }, visible: { ...visible, y:  0 } }
    case 'left':  return { hidden: { ...base, x: -distance }, visible: { ...visible, x:  0 } }
    case 'right': return { hidden: { ...base, x:  distance }, visible: { ...visible, x:  0 } }
    default:      return { hidden: base, visible }
  }
}

export default function StaggerReveal({
  children,
  className = '',
  stagger = 0.12,
  delay = 0,
  direction = 'up',
  distance = 30,
  once = true,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { introComplete } = useContext(IntroContext)

  const inView = useInView(ref, {
    once,
    margin: '-60px',
    ...(introComplete === false ? { amount: 2 } : {}),
  })

  const isVisible     = introComplete && inView
  const childVariants = itemVariants(direction, distance)

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants(stagger, delay)}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      {Children.map(children, (child, i) => (
        <motion.div
          key={i}
          variants={childVariants}
          transition={{ duration: 1.1, ease: EASE }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}