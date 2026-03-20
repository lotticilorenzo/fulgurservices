'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MagnifyingGlass, Receipt, Sparkle, ShieldCheck } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const STEPS = [
  {
    id: '01',
    title: 'Sopralluogo gratuito',
    desc: 'Veniamo da te senza impegno. Valutiamo l\'ambiente, ascoltiamo ogni esigenza e raccogliamo tutti i dettagli necessari.',
    icon: MagnifyingGlass,
    detail: 'Nessun costo, nessun vincolo. Solo ascolto.',
  },
  {
    id: '02',
    title: 'Preventivo in 24 ore',
    desc: 'Entro 24 ore ricevi un preventivo dettagliato e trasparente. Prezzi chiari, zero sorprese, zero costi nascosti.',
    icon: Receipt,
    detail: 'Trasparenza totale dal primo contatto.',
  },
  {
    id: '03',
    title: 'Intervento professionale',
    desc: 'Il nostro team qualificato interviene con macchinari professionali e prodotti certificati. Puntualità e cura garantite.',
    icon: Sparkle,
    detail: 'Team assicurato, formazione continua.',
  },
  {
    id: '04',
    title: 'Controllo e garanzia',
    desc: 'Verifichiamo ogni risultato prima di chiudere l\'intervento. La tua soddisfazione è la nostra unica misura del successo.',
    icon: ShieldCheck,
    detail: 'Soddisfatti o ritorniamo, gratuitamente.',
  },
]

export function ProcessStepper() {
  return (
    <section
      id="processo"
      className="relative w-full bg-[var(--bg-2)] border-y border-[var(--br)]"
    >
      <div className="mx-auto w-full max-w-4xl px-6 py-16 xl:px-8 lg:py-32">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-24">
            <SectionLabel className="mb-5 mx-auto">— IL NOSTRO PROCESSO</SectionLabel>
            <h2
              className="font-display font-extrabold tracking-tight text-[var(--tx-1)] text-balance"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              Dall&apos;idea all&apos;ambiente{' '}
              <span className="text-[var(--accent)]">perfetto.</span>
            </h2>
            <p className="mt-5 font-body text-base font-light text-[var(--tx-2)] max-w-md mx-auto leading-relaxed">
              4 fasi trasparenti per garantirti il massimo risultato, senza complicazioni.
            </p>
          </div>
        </ScrollReveal>

        {/* CSS Sticky 3D Stacking Container */}
        <div className="relative mx-auto flex flex-col pb-32">
          {STEPS.map((step, i) => (
            <StepCard key={step.id} step={step} index={i} total={STEPS.length} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index, total }: { step: { id: string; title: string; desc: string; icon: React.ElementType; detail: string }; index: number; total: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll inside the space taken by the margin below this card
  // When top of container is at 15vh (the sticky top), progress starts
  // When top of container is at -60vh (meaning it has scrolled up 75vh), progress is 1
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 15vh', 'start -60vh'],
  })

  // We only scale down if it's NOT the last card
  const isLast = index === total - 1
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.92])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.25])
  const filter = useTransform(scrollYProgress, [0, 1], ['blur(0px)', isLast ? 'blur(0px)' : 'blur(8px)'])

  const Icon = step.icon

  return (
    <div
      ref={containerRef}
      className="sticky w-full flex items-start justify-center"
      style={{
        // Each card stacks slightly lower than the one behind it
        top: `calc(15vh + ${index * 16}px)`,
        zIndex: index + 1,
        // The distance between this card's sticky point and the next card
        marginBottom: isLast ? '0' : '65vh',
      }}
    >
      <motion.div
        className="flex w-full flex-col justify-between rounded-3xl md:rounded-[40px] border border-[var(--br)] bg-white p-6 sm:p-10 lg:p-14 shadow-[0_30px_80px_rgba(42,140,122,0.12)] overflow-hidden"
        style={{
          minHeight: 'clamp(340px, 60vh, 500px)',
          scale,
          opacity,
          filter,
          transformOrigin: 'top center',
        }}
      >
        {/* Subtle gradient background on the card */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--bg-2)]/50 to-transparent pointer-events-none" />

        {/* Top row */}
        <div className="relative flex items-start justify-between z-10 w-full shrink-0">
          <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-[20px] bg-[var(--accent-glow)] border border-[var(--accent)]/15 shadow-inner">
            <Icon size={28} weight="duotone" className="text-[var(--accent)] sm:w-8 sm:h-8" />
          </div>
          <span
            className="font-display font-black text-[var(--tx-1)] opacity-[0.04] leading-none select-none tracking-tighter"
            style={{ fontSize: 'clamp(80px, 12vw, 160px)' }}
            aria-hidden="true"
          >
            {step.id}
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 my-auto py-6 md:py-8 w-full flex-1 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent-glow)] px-3.5 py-1.5 mb-5 sm:mb-6 shadow-sm w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="font-mono-fulgur text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--accent)]">
              {step.id} / {total}
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--tx-1)] leading-tight mb-4 tracking-tight">
            {step.title}
          </h3>
          <p className="font-body text-[15px] sm:text-base lg:text-lg font-light text-[var(--tx-2)] leading-relaxed w-full sm:max-w-[48ch] break-words">
            {step.desc}
          </p>
        </div>

        {/* Bottom row */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:items-center justify-between border-t border-[var(--br)] pt-5 sm:pt-6 mt-auto w-full shrink-0">
          <span className="font-mono-fulgur text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[var(--tx-3)] pr-4 sm:pr-0">
            {step.detail}
          </span>
          {/* Progress dots */}
          <div className="flex gap-1.5 shrink-0">
            {Array.from({ length: total }).map((_, j) => (
              <div
                key={j}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  j <= index
                    ? 'bg-[var(--accent)] shadow-[0_0_10px_rgba(78,203,160,0.5)] w-5 sm:w-6'
                    : 'bg-[var(--br-h)] w-1.5 sm:w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
