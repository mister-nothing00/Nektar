// Server Component — markup statico, nessun hook

import NektarSymbol from '@/components/ui/NektarSymbol'

export default function NektarFooter() {
  return (
    <footer
      className="relative py-12 text-center"
      style={{ borderTop: '1px solid rgba(212,175,55,0.06)' }}
    >
      <div className="flex flex-col items-center gap-4">
        <NektarSymbol size={28} />
        <p
          className="font-cinzel text-[10px] tracking-[0.6em] uppercase"
          style={{ color: '#2a2a2a' }}
        >
          Nektar — Masseria & Agriturismo
        </p>
        <p className="font-garamond text-sm italic" style={{ color: '#1a1a1a' }}>
          Umbria · Friuli · Torino · Sicilia
        </p>
      </div>
    </footer>
  )
}