'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const NAV_LINKS = [
  { href: '/sanctum',   label: 'Scrolls'   },
  { href: '/reliquiae', label: 'Reliquiae'  },
  { href: '/visions',   label: 'Visions'   },
  { href: '/chamber/obsidian', label: 'Chambers' },
]

export default function DarkNavbar() {
  const pathname = usePathname()

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{
        background: 'linear-gradient(180deg, rgba(8,8,8,0.98) 0%, rgba(8,8,8,0.0) 100%)',
      }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Brand */}
      <Link href="/home" className="group flex items-center gap-3">
        <svg width="22" height="22" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="38" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="4 3" />
          <circle cx="40" cy="40" r="2" fill="#d4af37" />
          <polygon
            points="40,14 45,28 60,28 48,37 53,52 40,43 27,52 32,37 20,28 35,28"
            stroke="#d4af37" strokeWidth="0.8" fill="none"
          />
        </svg>
        <span
          className="font-cinzel-deco text-xs tracking-[0.35em] uppercase transition-all duration-500 group-hover:text-[#f5d76e]"
          style={{ color: '#d4af37' }}
        >
          Dark Sanctum
        </span>
      </Link>

      {/* Links */}
      <ul className="flex items-center gap-8">
        {NAV_LINKS.map(link => {
          const active = pathname.startsWith(link.href.split('/').slice(0, 2).join('/'))
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-cinzel relative text-[11px] tracking-[0.3em] uppercase transition-colors duration-500"
                style={{ color: active ? '#d4af37' : '#6b6b6b' }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = '#c0c0c0' }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = active ? '#d4af37' : '#6b6b6b' }}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1px]"
                    style={{ background: '#d4af37' }}
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