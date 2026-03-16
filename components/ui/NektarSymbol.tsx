// Server Component — nessun hook, SVG puro, importabile ovunque

interface NektarSymbolProps {
  size?: number
  className?: string
}

export default function NektarSymbol({ size = 80, className = '' }: NektarSymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="40" cy="42" r="36" stroke="#d4af37" strokeWidth="0.6" strokeDasharray="6 3" opacity="0.5" />
      <circle cx="40" cy="42" r="26" stroke="#d4af37" strokeWidth="0.4" opacity="0.3" />
      <path
        d="M28 24 C24 24 20 28 20 34 C20 44 28 52 40 58 C52 52 60 44 60 34 C60 28 56 24 52 24"
        stroke="#d4af37" strokeWidth="0.8" fill="none"
      />
      <line x1="28" y1="24" x2="32" y2="16" stroke="#d4af37" strokeWidth="0.7" />
      <line x1="52" y1="24" x2="48" y2="16" stroke="#d4af37" strokeWidth="0.7" />
      <line x1="32" y1="16" x2="48" y2="16" stroke="#d4af37" strokeWidth="0.7" />
      <path
        d="M36 58 C36 64 38 68 40 72 C42 68 44 64 44 58"
        stroke="#d4af37" strokeWidth="0.6" fill="none"
      />
      <circle cx="40" cy="42" r="2" fill="#d4af37" opacity="0.8" />
    </svg>
  )
}