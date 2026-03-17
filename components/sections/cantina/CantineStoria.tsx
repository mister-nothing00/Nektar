'use client'

import Image from 'next/image'
import RevealOnScroll from '@/components/animations/RevealOnScroll'

export default function CantineStoria() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" aria-label="La Storia">

      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">

        {/* ── IMMAGINE ────────────────── */}
        <RevealOnScroll direction="left">
          <div
            className="relative h-[500px] w-full overflow-hidden"
            style={{ border: '1px solid rgba(200,134,10,0.08)' }}
          >
            <Image
              src="/images/anfore-cantina.webp"
              alt="Anfore allineate in una cantina ad arco illuminata da luce calda"
              fill
              className="object-cover object-center"
              quality={85}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay  */}
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(7,7,7,0.25)' }}
            />
            {/* Bordo interno ember */}
            <div
              className="absolute inset-0"
              style={{
                boxShadow: 'inset 0 0 60px rgba(7,7,7,0.6)',
              }}
            />
          </div>
        </RevealOnScroll>

        {/* ── TESTO ─────────────────────────────────────────── */}
        <RevealOnScroll direction="right" delay={0.2}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span
                className="font-cinzel text-[10px] tracking-[0.7em] uppercase"
                style={{ color: '#8B5E08' }}
              >
                Le Radici
              </span>
              <h2
                className="font-cinzel-deco text-4xl font-bold tracking-[0.08em] uppercase md:text-5xl"
                style={{ color: '#D4D0C8' }}
              >
                Una Storia<br />Senza Data
              </h2>
            </div>

            <div
              className="h-[1px] w-16"
              style={{ background: 'linear-gradient(90deg, #C8860A, transparent)' }}
            />

            <p
              className="font-garamond text-lg italic leading-9"
              style={{ color: '#A8A49C' }}
            >
              Non esistono archivi che ne attestino l'inizio.
              La cantina era già lì quando i primi vignaioli portarono
              le anfore dalla Sicilia verso nord — un viaggio che
              il vino ricorda ancora oggi.
            </p>

            <p
              className="font-garamond text-base leading-8"
              style={{ color: '#6B6760' }}
            >
              Pietra su pietra, arco su arco. Generazioni di mani
              che hanno imparato a stare in silenzio davanti alla botte,
              ad ascoltare il tempo che fermenta lentamente nell'oscurità.
            </p>

            <p
              className="font-cinzel text-[10px] tracking-[0.5em] uppercase"
              style={{ color: '#8B5E08' }}
            >
              — Dalla terra agli dei
            </p>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  )
}