'use client'

import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/animations/RevealOnScroll'

interface Regione {
  nome: string
  latino: string
  claim: string
  corpo: string
  dettagli: string[]
  gradiente: string
}

const REGIONI: Regione[] = [
  {
    nome: 'Umbria',
    latino: 'Umbria Felix',
    claim: 'Il silenzio fertile.',
    corpo: "Le colline umbre respirano lentamente. Qui il tempo non scorre — si deposita, strato su strato, come il sedimento nelle anfore. Le viti crescono senza fretta su terreni argillosi che trattengono l'acqua dei temporali estivi come una promessa.",
    dettagli: ['Suolo argilloso-calcareo', 'Escursione termica marcata', 'Vendemmia tardiva'],
    gradiente: 'radial-gradient(ellipse at 30% 50%, rgba(101,85,43,0.12) 0%, transparent 65%)',
  },
  {
    nome: 'Friuli',
    latino: 'Fines Foroiulii',
    claim: 'Dove la terra incontra il ghiaccio.',
    corpo: "Al confine tra Italia e Slovenia, il Friuli è una terra di contrasti assoluti. Il vento caldo dell'Adriatico si scontra con le correnti fredde delle Alpi Giulie, creando microclimi impossibili altrove. È da questa tensione che nasce la mineralità unica dei nostri bianchi.",
    dettagli: ['Vento Bora', 'Suolo di flysch', 'Escursione 18°C giorno/notte'],
    gradiente: 'radial-gradient(ellipse at 70% 50%, rgba(43,68,101,0.10) 0%, transparent 65%)',
  },
  {
    nome: 'Torino',
    latino: 'Augusta Taurinorum',
    claim: 'Le radici più profonde.',
    corpo: "Le Langhe e il Monferrato sono la pietra angolare dell'enologia italiana. Qui la nebbia autunnale non è un ostacolo — è un ingrediente. Avvolge i grappoli di notte, rallenta la maturazione, concentra gli zuccheri. Il risultato è un vino che porta il peso della storia in ogni sorso.",
    dettagli: ['Nebbia autunnale', 'Suolo marnoso-calcareo', 'Vigneti fino a 600m s.l.m.'],
    gradiente: 'radial-gradient(ellipse at 30% 50%, rgba(80,50,30,0.12) 0%, transparent 65%)',
  },
  {
    nome: 'Sicilia',
    latino: 'Trinacria',
    claim: 'Il fuoco antico.',
    corpo: "L'Etna non è solo uno sfondo. È un protagonista silenzioso che ha costruito, secolo dopo secolo, suoli vulcanici unici al mondo. La pietra nera trattiene il calore del giorno e lo restituisce di notte alle viti. Il vino che nasce qui porta dentro di sé il fuoco della terra.",
    dettagli: ['Suolo vulcanico basaltico', 'Viti alberello centenarie', 'Altitudine 600-900m s.l.m.'],
    gradiente: 'radial-gradient(ellipse at 70% 50%, rgba(101,43,30,0.12) 0%, transparent 65%)',
  },
]

export default function TerritorioRegioni() {
  return (
    <section className="relative py-12 px-6" aria-label="Le Regioni">
      <div className="mx-auto max-w-6xl flex flex-col gap-0">
        {REGIONI.map((regione, i) => {
          const isEven = i % 2 === 0
          return (
            <div
              key={regione.nome}
              className="relative py-24 overflow-hidden"
              style={{
                borderTop: '1px solid rgba(200,134,10,0.06)',
              }}
            >
              {/* Glow di sfondo specifico per territorio */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: regione.gradiente }}
              />

              <div
                className={`relative grid grid-cols-1 gap-12 items-start lg:grid-cols-2 lg:gap-24 ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Numero + nome — colonna visiva */}
                <RevealOnScroll
                  direction={isEven ? 'left' : 'right'}
                  className={isEven ? '' : 'lg:col-start-2'}
                >
                  <div className="flex flex-col gap-6">
                    {/* Numero grande decorativo */}
                    <span
                      className="font-cinzel-deco font-black leading-none select-none"
                      style={{
                        fontSize: 'clamp(5rem, 15vw, 10rem)',
                        color: '#C8860A',
                        opacity: 0.06,
                        lineHeight: 1,
                      }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="flex flex-col gap-2 -mt-4 md:-mt-8">
                      <span
                        className="font-cinzel text-[9px] tracking-[0.6em] uppercase"
                        style={{ color: '#8B5E08' }}
                      >
                        {regione.latino}
                      </span>
                      <h2
                        className="font-cinzel-deco text-5xl font-black tracking-[0.1em] uppercase md:text-6xl"
                        style={{ color: '#D4D0C8' }}
                      >
                        {regione.nome}
                      </h2>
                      <p
                        className="font-garamond text-xl italic mt-2"
                        style={{ color: '#C8860A' }}
                      >
                        {regione.claim}
                      </p>
                    </div>

                    {/* Dettagli tecnici */}
                    <div className="flex flex-col gap-2 mt-4">
                      {regione.dettagli.map((d) => (
                        <div key={d} className="flex items-center gap-3">
                          <div
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: '#C8860A' }}
                          />
                          <span
                            className="font-cinzel text-[9px] tracking-[0.3em] uppercase"
                            style={{ color: '#6B6760' }}
                          >
                            {d}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Corpo testo */}
                <RevealOnScroll
                  direction={isEven ? 'right' : 'left'}
                  delay={0.2}
                  className={isEven ? 'lg:pt-16' : 'lg:col-start-1 lg:row-start-1 lg:pt-16'}
                >
                  <div className="flex flex-col gap-6">
                    <div
                      className="h-[1px] w-12"
                      style={{ background: 'linear-gradient(90deg, #C8860A, transparent)' }}
                    />
                    <p
                      className="font-garamond text-lg italic leading-9"
                      style={{ color: '#A8A49C' }}
                    >
                      {regione.corpo}
                    </p>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}