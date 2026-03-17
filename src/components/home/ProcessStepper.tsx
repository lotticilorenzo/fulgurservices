'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const STEPS = [
  {
    id: "01",
    title: "Sopralluogo gratuito",
    desc: "Veniamo da te senza impegno. Valutiamo l'ambiente e ascoltiamo ogni dettaglio."
  },
  {
    id: "02",
    title: "Preventivo in 24 ore",
    desc: "Ricevi una proposta dettagliata e trasparente. Nessuna sorpresa o costo nascosto."
  },
  {
    id: "03",
    title: "Intervento professionale",
    desc: "Il nostro team interviene con macchinari professionali e prodotti certificati."
  },
  {
    id: "04",
    title: "Controllo e garanzia",
    desc: "Verifichiamo ogni risultato. La tua soddisfazione è la nostra misura del successo."
  }
]

export function ProcessStepper() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
        
        <div className="text-center mb-16 lg:mb-24">
          <ScrollReveal>
            <SectionLabel className="mb-4 mx-auto">— IL NOSTRO PROCESSO</SectionLabel>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl">
              Dall'idea all'ambiente perfetto.
            </h2>
            <p className="mt-6 font-sans text-lg font-light text-[var(--tx-2)] max-w-2xl mx-auto">
              4 passi semplici e trasparenti per iniziare a collaborare con Fulgur Service.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          {/* SVG Dotted Line (Desktop only) */}
          <div className="absolute top-[26px] left-[10%] right-[10%] hidden md:block z-0">
            <svg width="100%" height="2" fill="none" className="overflow-visible">
              <motion.path
                d="M 0 1 H 1000"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {STEPS.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative flex flex-col items-center md:items-start text-center md:text-left group">
                {/* Step Circle */}
                <div className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white border-2 border-[var(--accent)] text-[var(--accent)] font-mono-fulgur text-base font-bold transition-all duration-500 group-hover:bg-[var(--accent)] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(78,203,160,0.3)]">
                  {step.id}
                </div>

                <div className="mt-8">
                  <h3 className="font-display text-xl font-bold text-[var(--tx-1)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm font-light text-[var(--tx-2)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
