import type { NextConfig } from 'next'

const nextConfig: NextConfig = {

  // ── Compressione risorse ───────────────────────────────────────────────
  compress: true,

  // ── Ottimizzazione immagini ─────────────────────────────────────────────
  images: {
    // Formati supportati per l'ottimizzazione (avif e webp)
    formats: ['image/avif', 'image/webp'],

    // Qualità predefinita per le immagini ottimizzate (può essere sovrascritta a livello di immagine)
    qualities: [75, 80, 85, 90],

    // Dimensioni target per il responsive loading (puoi personalizzare in base alle tue esigenze)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    
    // Dimensioni per immagini generate con width fissa (ad esempio, per le icone o immagini decorative)
    imageSizes:  [16, 32, 64, 128, 256],
  },

  // ── Headers di cache per asset statici ──────────────────────────────────
  async headers() {
    return [
      {
        // Immagini, font, video — immutabili per 1 anno
        source: '/(:path*\\.(?:webp|avif|jpg|jpeg|png|svg|woff2|woff|webm|mp4))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Chunk JS/CSS generati da Next.js — già hashati nel nome, 1 anno
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig