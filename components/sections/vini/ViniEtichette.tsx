'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/animations/RevealOnScroll'

interface Vino {
  nome: string
  territorio: string
  annata: string
  note: string
  latino: string
  immagine: string
  imgAlt: string
  imgPosition?: string
}

const VINI: Vino[] = [
  {
    nome: 'Silentium',
    territorio: 'Umbria',
    annata: 'MMXX',
    latino: 'Umbria Felix',
    note: "Il silenzio delle colline fermato nel bicchiere. Pietra, erba bagnata, un'ombra di viola selvatico al tramonto.",
    immagine: '/images/calice-bokeh.jpg',
    imgAlt: 'Calice con riflessi dorati e bokeh luminoso su sfondo scuro',
    imgPosition: 'object-center',
  },
  {
    nome: 'Glacies',
    territorio: 'Friuli',
    annata: 'MMXXI',
    latino: 'Fines Foroiulii',
    note: "Freddo minerale come l'alba sulle Alpi. Cristallino, tagliente, eterno — come il ghiaccio che non si scioglie mai del tutto.",
    immagine: '/images/calice-candela.jpg',
    imgAlt: 'Calice di vino rosso accanto a una candela, sfondo notturno con vite',
    imgPosition: 'object-center',
  },
  {
    nome: 'Radix',
    territorio: 'Torino',
    annata: 'MMXIX',
    latino: 'Augusta Taurinorum',
    note: "Profondo come la pietra delle Langhe. Radici, terra rossa, legno antico. Un vino che non chiede — afferma.",
    immagine: '/images/silentum.jpg',
    imgAlt: 'Calice di vino con luce calda di candela su tavolo in legno',
    imgPosition: 'object-left',
  },
  {
    nome: 'Ignis',
    territorio: 'Sicilia',
    annata: 'MMXXII',
    latino: 'Trinacria',
    note: "Il sole vulcanico impresso nell'uva. Fuoco trattenuto, sale marino, fico maturo. La Sicilia in ogni goccia.",
    immagine: '/images/ignis.jpg',
    imgAlt: 'Calice di vino in controluce su sfondo nero, riflessi di fuoco arancio',
    imgPosition: 'object-center',
  },
]

export default function ViniEtichette() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" aria-label="Le Etichette">

      {/* Intestazione */}
      <RevealOnScroll direction="fade" className="mb-24 text-center mx-auto max-w-xl">
        <span
          className="font-cinzel text-[10px] tracking-[0.7em] uppercase"
          style={{ color: '#8B5E08' }}
        >
          La Selezione
        </span>
        <h2
          className="mt-3 font-cinzel-deco text-4xl font-bold tracking-[0.1em] uppercase md:text-5xl"
          style={{ color: '#D4D0C8' }}
        >
          Le Etichette
        </h2>
        <p
          className="mt-6 font-garamond text-base italic leading-8"
          style={{ color: '#6B6760' }}
        >
          Quattro vini. Quattro territori. Un'unica anima.
        </p>
      </RevealOnScroll>

      {/* Griglia vini */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-24">
        {VINI.map((vino, i) => {
          const isEven = i % 2 === 0
          return (
            <motion.div
              key={vino.nome}
              className={`grid grid-cols-1 gap-12 items-center lg:grid-cols-2 lg:gap-24 ${
                isEven ? '' : 'lg:grid-flow-dense'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* ── IMMAGINE ─────────────────────────────────── */}
              <div
                className={`relative flex items-center justify-center ${
                  isEven ? '' : 'lg:col-start-2'
                }`}
              >
                <div className="relative w-56 h-72 md:w-64 md:h-80">

                  {/* Numero romano decorativo */}
                  <span
                    className="font-cinzel-deco absolute -top-8 -left-8 text-[8rem] font-black leading-none select-none pointer-events-none"
                    style={{ color: '#C8860A', opacity: 0.04 }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Foto vino */}
                  <div
                    className="relative w-full h-full overflow-hidden"
                    style={{ border: '1px solid rgba(200,134,10,0.12)' }}
                  >
                    <Image
                      src={vino.immagine}
                      alt={vino.imgAlt}
                      fill
                      className={`object-cover ${vino.imgPosition ?? 'object-center'}`}
                      quality={85}
                      sizes="(max-width: 768px) 224px, 256px"
                    />

                    {/* Overlay leggero — lascia respirare la foto */}
                    <div
                      className="absolute inset-0"
                      style={{ background: 'rgba(7,7,7,0.22)' }}
                    />

                    {/* Bordo interno ember */}
                    <div
                      className="absolute inset-0"
                      style={{ boxShadow: 'inset 0 0 60px rgba(7,7,7,0.65)' }}
                    />

                    {/* Nome sovrapposto in basso */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <span
                        className="font-cinzel text-[8px] tracking-[0.5em] uppercase block"
                        style={{ color: '#8B5E08' }}
                      >
                        {vino.latino}
                      </span>
                      <span
                        className="font-cinzel-deco text-2xl block mt-1"
                        style={{ color: '#EAE6E0' }}
                      >
                        {vino.nome}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── TESTO ─────────────────────────────────────── */}
              <div
                className={`flex flex-col gap-6 ${
                  isEven ? '' : 'lg:col-start-1 lg:row-start-1'
                }`}
              >
                <div className="flex flex-col gap-2">
                  <span
                    className="font-cinzel text-[9px] tracking-[0.5em] uppercase"
                    style={{ color: '#8B5E08' }}
                  >
                    {vino.territorio} · {vino.annata}
                  </span>
                  <h3
                    className="font-cinzel-deco text-4xl font-bold tracking-[0.1em] uppercase md:text-5xl"
                    style={{ color: '#D4D0C8' }}
                  >
                    {vino.nome}
                  </h3>
                </div>

                <div
                  className="h-[1px] w-12"
                  style={{ background: 'linear-gradient(90deg, #C8860A, transparent)' }}
                />

                <p
                  className="font-garamond text-lg italic leading-9"
                  style={{ color: '#A8A49C' }}
                >
                  {vino.note}
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="h-[1px] w-6"
                    style={{ background: 'rgba(200,134,10,0.4)' }}
                  />
                  <span
                    className="font-cinzel text-[9px] tracking-[0.4em] uppercase"
                    style={{ color: '#6B6760' }}
                  >
                    {vino.latino}
                  </span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}