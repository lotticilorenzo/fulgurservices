'use client'

import React from 'react'
import Image from 'next/image'
import { CheckCircle } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const BENEFITS = [
  {
    num: "01",
    title: "Esperienza Trentennale",
    desc: "Trent'anni di storia che si fondono con la visione di una nuova generazione. Sappiamo esattamente come trattare ogni superficie."
  },
  {
    num: "02",
    title: "Eco Innovazione",
    desc: "Utilizziamo esclusivamente prodotti certificati Ecolabel e HACCP, riducendo l'impatto ambientale senza compromettere la pulizia."
  },
  {
    num: "03",
    title: "Partner 360°",
    desc: "Oltre alle pulizie, gestiamo manutenzione idraulica, elettrica ed edile. Un unico referente per la cura completa dei tuoi spazi."
  },
  {
    num: "04",
    title: "Controllo Qualità",
    desc: "Ogni intervento è monitorato e verificato secondo rigidi standard interni. La tua soddisfazione è la nostra garanzia di successo."
  }
]

export function WhyChooseUs() {
  return (
    <section className="relative w-full bg-[var(--bg-2)] py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Content */}
          <div>
            <ScrollReveal>
              <SectionLabel className="mb-4">— PERCHÉ FULGUR</SectionLabel>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl mb-12">
                La certezza di un lavoro <br className="hidden md:block" /> fatto bene.
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-8">
              {BENEFITS.map((benefit, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group flex gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-[var(--br)]">
                    <div className="flex-shrink-0 font-mono-fulgur text-xl font-bold text-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity">
                      {benefit.num}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[var(--tx-1)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="font-sans text-sm font-light text-[var(--tx-2)] leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <ScrollReveal>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--br)] shadow-2xl">
                <Image
                  src="/images/operatori-pulizie-professionali-parma.jpg"
                  alt="Operatori Fulgur Service al lavoro a Parma"
                  fill
                  className="object-cover"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-8 right-8 bg-[var(--accent)] text-white p-6 rounded-2xl shadow-xl z-10 hidden sm:block">
                  <div className="font-display text-4xl font-black mb-1">30</div>
                  <div className="font-mono-fulgur text-[10px] font-bold uppercase tracking-widest opacity-80">
                    Anni di <br /> Garanzia
                  </div>
                </div>

                {/* Glassy Stats row */}
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl z-10">
                  <div className="flex justify-between items-center text-white">
                    <div className="flex flex-col">
                      <span className="font-display text-2xl font-bold">500+</span>
                      <span className="font-mono-fulgur text-[9px] uppercase tracking-widest opacity-70">Clienti soddisfatti</span>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="flex flex-col">
                      <span className="font-display text-2xl font-bold">100%</span>
                      <span className="font-mono-fulgur text-[9px] uppercase tracking-widest opacity-70">Sopralluoghi free</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
