'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  MagnifyingGlass, 
  Receipt, 
  Sparkle, 
  ShieldCheck 
} from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const STEPS = [
  {
    id: "01",
    title: "Sopralluogo gratuito",
    desc: "Veniamo da te senza impegno. Valutiamo l'ambiente e ascoltiamo ogni dettaglio.",
    icon: MagnifyingGlass
  },
  {
    id: "02",
    title: "Preventivo in 24 ore",
    desc: "Ricevi una proposta dettagliata e trasparente. Nessuna sorpresa o costo nascosto.",
    icon: Receipt
  },
  {
    id: "03",
    title: "Intervento professionale",
    desc: "Il nostro team interviene con macchinari professionali e prodotti certificati.",
    icon: Sparkle
  },
  {
    id: "04",
    title: "Controllo e garanzia",
    desc: "Verifichiamo ogni risultato. La tua soddisfazione è la nostra misura del successo.",
    icon: ShieldCheck
  }
]

export function ProcessStepper() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--bg-2)] to-transparent opacity-50 pointer-events-none" />
      <div className="absolute -left-24 bottom-1/4 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
        
        <div className="text-center mb-20 lg:mb-28 relative z-10">
          <ScrollReveal>
            <SectionLabel className="mb-4 mx-auto">— IL NOSTRO PROCESSO</SectionLabel>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl lg:text-6xl">
              Dall'idea all'ambiente <span className="text-[var(--accent)]">perfetto</span>.
            </h2>
            <p className="mt-6 font-sans text-lg font-light text-[var(--tx-2)] max-w-2xl mx-auto">
              Un percorso fluido e organizzato in 4 fasi per garantirti il massimo risultato senza complicazioni.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          {/* SVG Connector Line (Desktop only) */}
          <div className="absolute top-[32px] left-[10%] right-[10%] hidden md:block z-0">
            <svg width="100%" height="2" fill="none" className="overflow-visible opacity-20">
              <motion.path
                d="M 0 1 H 1000"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="12 12"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="100%" y2="0">
                  <stop offset="0%" stopColor="var(--accent)" />
                  <stop offset="100%" stopColor="var(--accent-d)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {STEPS.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative flex flex-col items-center md:items-start text-center md:text-left group">
                
                {/* Background Number (Decorative) */}
                <div className="absolute -top-6 md:-top-10 left-1/2 md:-left-4 -translate-x-1/2 md:translate-x-0 font-display text-8xl font-black text-[var(--tx-1)] opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-500">
                  {step.id}
                </div>

                {/* Step Indicator Wrapper */}
                <div className="relative z-10 mb-10">
                  <div className="relative flex h-[64px] w-[64px] items-center justify-center rounded-2xl bg-white border border-[var(--br)] text-[var(--tx-1)] shadow-sm transition-all duration-500 group-hover:border-[var(--accent)] group-hover:shadow-[0_10px_30px_rgba(78,203,160,0.2)] group-hover:-translate-y-1">
                    
                    {/* Number Overlay (Default) */}
                    <span className="font-mono-fulgur text-lg font-bold group-hover:opacity-0 transition-opacity duration-300">
                      {step.id}
                    </span>
                    
                    {/* Icon Overlay (Hover) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[var(--accent)]">
                      <step.icon size={32} weight="duotone" />
                    </div>

                    {/* Outer Pulse Ring (Hover) */}
                    <div className="absolute -inset-1 rounded-2xl border-2 border-[var(--accent)] opacity-0 scale-90 transition-all duration-500 group-hover:opacity-20 group-hover:scale-105" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-[var(--tx-1)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm lg:text-base font-light text-[var(--tx-2)] leading-relaxed max-w-[260px] md:max-w-none">
                    {step.desc}
                  </p>
                </div>

                {/* Vertical Line for Mobile */}
                {i < STEPS.length - 1 && (
                  <div className="md:hidden w-px h-12 bg-gradient-to-b from-[var(--accent)]/30 to-transparent mt-6" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
