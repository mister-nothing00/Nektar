'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import type { MouseEvent } from 'react'
import NektarSymbol from '@/components/ui/NektarSymbol'

const NAV_LINKS = [
  { href: '/vini',       label: 'Vini'       },
  { href: '/territorio', label: 'Territorio'  },
  { href: '/cantina',    label: 'Cantina'    },
  { href: '/invito',     label: 'Invito'     },
] as const

export default function NektarNavbar() {
  const pathname = usePathname()

  const handleMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#EAE6E0'
  }

  const handleMouseLeave = (e: MouseEvent<HTMLAnchorElement>, active: boolean) => {
    e.currentTarget.style.color = active ? '#E8A020' : '#6B6760'
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{
        background:
          'linear-gradient(180deg, rgba(7,7,7,0.96) 0%, rgba(7,7,7,0.0) 100%)',
      }}
      // La navbar appare dopo la fine dell'intro cinematografico (~9.6s)
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 10, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Navigazione principale"
    >
      {/* ── BRAND ────────────────────────────────────────── */}
      <Link
        href="/"
        className="group flex items-center gap-3"
        aria-label="Nektar — torna alla homepage"
      >
        <NektarSymbol size={22} />
        <span
          className="font-cinzel text-xs uppercase tracking-[0.4em] transition-colors duration-500 group-hover:text-[#EAE6E0]"
          style={{ color: '#E8A020' }}
        >
          Nektar
        </span>
      </Link>

      {/* ── LINKS ────────────────────────────────────────── */}
      <ul className="flex items-center gap-8" role="list">
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
    </motion.nav>
  )
}