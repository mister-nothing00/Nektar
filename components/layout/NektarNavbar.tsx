'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { MouseEvent } from 'react'
import NektarSymbol from '@/components/ui/NektarSymbol'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'

const NAV_LINKS = [
  { href: '/vini',       label: 'Vini'       },
  { href: '/territorio', label: 'Territorio'  },
  { href: '/cantina',    label: 'Cantina'    },
  { href: '/invito',     label: 'Invito'     },
] as const

export default function NektarNavbar() {
  const pathname  = usePathname()
  const isHome    = pathname === '/'
  const [open, setOpen] = useState(false)

  const handleMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#EAE6E0'
  }

  const handleMouseLeave = (e: MouseEvent<HTMLAnchorElement>, active: boolean) => {
    e.currentTarget.style.color = active ? '#E8A020' : '#6B6760'
  }

  return (
    <>
      <ScrollProgressBar />

      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-8"
        style={{
          background: 'linear-gradient(180deg, rgba(7,7,7,0.96) 0%, rgba(7,7,7,0.0) 100%)',
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          delay: isHome ? 10 : 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        aria-label="Navigazione principale"
      >
        {/* ── BRAND ────────────────────────────────────────── */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Nektar — torna alla homepage"
          onClick={() => setOpen(false)}
        >
          <NektarSymbol size={22} />
          <span
            className="font-cinzel text-xs uppercase tracking-[0.4em] transition-colors duration-500 group-hover:text-[#EAE6E0]"
            style={{ color: '#E8A020' }}
          >
            Nektar
          </span>
        </Link>

        {/* ── LINKS DESKTOP ────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(link => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-cinzel relative text-[11px] uppercase tracking-[0.3em] transition-colors duration-500"
                  style={{ color: active ? '#E8A020' : '#6B6760' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={e => handleMouseLeave(e, active)}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1px]"
                      style={{ background: '#E8A020' }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* ── HAMBURGER MOBILE ─────────────────────────────── */}
        <button
          className="md:hidden flex flex-col items-center justify-center gap-[5px] w-8 h-8 relative z-[60]"
          onClick={() => setOpen(prev => !prev)}
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={open}
        >
          <motion.span
            className="block h-[1px] w-6 origin-center"
            style={{ background: '#E8A020' }}
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.span
            className="block h-[1px] w-6"
            style={{ background: '#E8A020' }}
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-[1px] w-6 origin-center"
            style={{ background: '#E8A020' }}
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </button>
      </motion.nav>

      {/* ── MENU MOBILE OVERLAY ──────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
            style={{ background: 'rgba(7,7,7,0.97)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {/* Grain cinematografico — coerente con CinematicIntro */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
              }}
            />

            {/* Divisore ornamentale in cima */}
            <motion.div
              className="absolute top-24 left-1/2 -translate-x-1/2 flex items-center gap-4 w-48"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, #C8860A)' }} />
              <NektarSymbol size={20} />
              <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, #C8860A, transparent)' }} />
            </motion.div>

            {/* Links */}
            <nav aria-label="Menu mobile">
              <ul className="flex flex-col items-center gap-10">
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.15 + i * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        className="font-cinzel-deco text-3xl uppercase tracking-[0.3em]"
                        style={{ color: active ? '#E8A020' : '#D4D0C8' }}
                        onClick={() => setOpen(false)}
                        aria-current={active ? 'page' : undefined}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </nav>

            {/* Divisore ornamentale in fondo */}
            <motion.div
              className="absolute bottom-12 flex flex-col items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <span
                className="font-cinzel text-[9px] tracking-[0.5em] uppercase"
                style={{ color: '#8B5E08' }}
              >
                Dalla terra agli dei
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}