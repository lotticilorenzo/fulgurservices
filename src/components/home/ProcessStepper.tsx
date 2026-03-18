'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MagnifyingGlass, Receipt, Sparkle, ShieldCheck } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import Link from 'next/link'

const STEPS = [
  {
    id: '01',
    title: 'Sopralluogo gratuito',
    desc: 'Veniamo da te senza impegno. Valutiamo l\'ambiente, capiamo le tue esigenze, ascoltiamo ogni dettaglio.',
    icon: MagnifyingGlass,
    color: '#4ECBA0',
  },
  {
    id: '02',
    title: 'Preventivo in 24 ore',
    desc: 'Entro 24 ore ricevi un preventivo dettagliato e trasparente. Nessuna sorpresa, nessun costo nascosto.',
    icon: Receipt,
    color: '#3AB88D',
  },
  {
    id: '03',
    title: 'Intervento professionale',
    desc: 'Il nostro team qualificato interviene con macchinari professionali e prodotti certificati. Puntualità garantita.',
    icon: Sparkle,
    color: '#2AA07B',
  },
  {
    id: '04',
    title: 'Controllo e garanzia',
    desc: 'Verifichiamo ogni risultato prima di chiudere l\'intervento. La tua soddisfazione è la nostra misura del successo.',
    icon: ShieldCheck,
    color: '#1A8869',
  },
]

export function ProcessStepper() {
  return (
    <section id="processo" className="relative w-full bg-[var(--bg-2)] py-20 lg:py-32 overflow-hidden border-y border-[var(--br)]">
      {/* Decorative elements */}
      <div className="absolute -left-32 bottom-1/4 w-96 h-96 bg-[var(--accent)] opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-32 top-1/4 w-96 h-96 bg-[var(--accent)] opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <ScrollReveal>
            <SectionLabel className="mb-5 mx-auto">— IL NOSTRO PROCESSO</SectionLabel>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl lg:text-6xl text-balance">
              Dall'idea all'ambiente{' '}
              <span className="text-[var(--accent)]">perfetto.</span>
            </h2>
            <p className="mt-6 font-sans text-lg font-light text-[var(--tx-2)] max-w-xl mx-auto leading-relaxed">
              4 fasi fluide e trasparenti per garantirti il massimo risultato, senza complicazioni.
            </p>
          </ScrollReveal>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Connector line (desktop only) */}
          <div className="absolute top-[52px] left-[12.5%] right-[12.5%] hidden xl:block h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-20 pointer-events-none z-0" />

          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={step.id} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative flex flex-col gap-6 rounded-3xl bg-white border border-[var(--br)] p-8 shadow-sm hover:shadow-2xl hover:border-[var(--accent)]/30 transition-shadow duration-500 group h-full"
                >
                  {/* Step number (decorative bg) */}
                  <div className="absolute -top-4 -right-1 font-display text-[100px] font-black text-[var(--tx-1)] opacity-[0.025] leading-none select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                    {step.id}
                  </div>

                  {/* Icon circle */}
                  <div className="relative z-10 flex h-[60px] w-[60px] items-center justify-center rounded-2xl border border-[var(--br)] bg-[var(--bg-2)] group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-all duration-400">
                    <Icon size={28} weight="duotone" className="text-[var(--accent)] group-hover:text-white transition-colors" />
                    {/* Outer ring on hover */}
                    <div className="absolute -inset-2 rounded-2xl border border-[var(--accent)] opacity-0 group-hover:opacity-20 scale-90 group-hover:scale-100 transition-all duration-400" />
                  </div>

                  {/* Connector arrow for desktop */}
                  {i < STEPS.length - 1 && (
                    <div className="absolute top-[52px] -right-4 z-10 hidden xl:flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[var(--br)] shadow-sm">
                      <svg className="text-[var(--accent)]" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative z-10 flex flex-col gap-2">
                    <div className="font-mono-fulgur text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)] opacity-60">
                      Step {step.id}
                    </div>
                    <h3 className="font-display text-xl font-bold text-[var(--tx-1)] group-hover:text-[var(--accent)] transition-colors duration-300 leading-snug">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm font-light text-[var(--tx-2)] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* CTA below */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 flex justify-center">
            <Link
              href="/preventivo"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-10 py-4 font-display text-base font-bold text-white shadow-xl transition-all hover:bg-[var(--accent-d)] hover:shadow-2xl hover:-translate-y-0.5"
            >
              Inizia dal sopralluogo gratuito →
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
