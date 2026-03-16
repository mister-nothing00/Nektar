'use client'

import { useScroll, useSpring, motion } from 'framer-motion'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()

  // Spring morbida — segue lo scroll con inerzia
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[1px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #8B5E08, #C8860A, #E8A020)',
      }}
    />
  )
}