'use client'

import type { CSSProperties } from 'react'   // ← fix: import esplicito del tipo
import { motion } from 'framer-motion'

interface InkRevealProps {
  text: string
  className?: string
  style?: CSSProperties                    
  delay?: number
  stagger?: number
  byLetter?: boolean
}

export default function InkReveal({
  text,
  className = '',
  style,
  delay = 0,
  stagger = 0.06,
  byLetter = false,
}: InkRevealProps) {
  const items = byLetter ? text.split('') : text.split(' ')

  return (
    <span className={className} style={style} aria-label={text}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          className="inline-block overflow-hidden"
          style={{ marginRight: byLetter ? '0' : '0.28em' }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 1,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {item === ' ' ? '\u00A0' : item}
          </motion.span>
        </motion.span>
      ))}
    </span>
  )
}