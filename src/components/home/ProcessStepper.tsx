'use client'

import React, { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MagnifyingGlass, Receipt, Sparkle, ShieldCheck } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'

gsap.registerPlugin(ScrollTrigger)

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
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !sectionRef.current || !containerRef.current) return

    const cards = cardsRef.current
    if (cards.length === 0) return

    const ctx = gsap.context(() => {
      // Create a timeline linked to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 15%', // Pin just slightly below navbar
          end: `+=${(cards.length - 1) * 100}%`,
          scrub: 1.2, // Smooth, cinematic scrub delay
          pin: true,
          pinSpacing: true,
        },
      })

      // Setup cards initial state
      cards.forEach((card, i) => {
        if (i === 0) {
          gsap.set(card, { y: '0%', opacity: 1, scale: 1 })
          return
        }
        // Start pushed far down
        gsap.set(card, { y: '100%', opacity: 0, scale: 1 })
      })

      // Animate cards sequentially along the timeline
      cards.forEach((card, i) => {
        if (i === 0) return

        // 1. Enter animation for the new card
        tl.to(
          card,
          {
            y: '0%',
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
          },
          i // Position absolutely in the timeline
        )

        // 2. Hide animation for the previous card
        if (cards[i - 1]) {
          tl.to(
            cards[i - 1],
            {
              scale: 0.94,
              opacity: 0, // Fully hide so they don't bleed through
              duration: 0.8,
              ease: 'power2.out',
            },
            i // Animate concurrently
          )
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="processo"
      className="relative w-full bg-[var(--bg-2)] border-y border-[var(--br)]"
    >
      {/* Section header (above the pinned area) */}
      <div className="mx-auto w-full max-w-7xl px-6 py-20 xl:px-8 lg:py-28">
        <div className="text-center mb-16">
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

        {/* Pinned stack container */}
        <div
          ref={containerRef}
          className="relative mx-auto max-w-2xl"
          style={{ height: 'clamp(340px, 50vw, 420px)' }}
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.id}
                ref={(el) => { if (el) cardsRef.current[i] = el }}
                className="absolute inset-0 flex flex-col justify-between rounded-3xl border border-[var(--br)] bg-white p-5 sm:p-7 lg:p-10 shadow-[0_8px_40px_rgba(42,140,122,0.08)]"
                style={{ willChange: 'transform, opacity, filter' }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-glow)] border border-[var(--accent)]/20">
                    <Icon size={26} weight="duotone" className="text-[var(--accent)]" />
                  </div>
                  <span
                    className="font-display font-black text-[var(--tx-1)] opacity-[0.06] leading-none select-none"
                    style={{ fontSize: 'clamp(72px, 10vw, 120px)' }}
                    aria-hidden="true"
                  >
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/25 bg-[var(--accent-glow)] px-3 py-1 mb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent)]">
                      {step.id} / {STEPS.length}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--tx-1)] leading-snug mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm sm:text-[15px] font-light text-[var(--tx-2)] leading-relaxed max-w-[52ch]">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom row */}
                <div className="flex items-center justify-between border-t border-[var(--br)] pt-5 mt-2">
                  <span className="font-mono-fulgur text-[10px] uppercase tracking-widest text-[var(--tx-3)]">
                    {step.detail}
                  </span>
                  {/* Progress dots */}
                  <div className="flex gap-1.5">
                    {STEPS.map((_, j) => (
                      <div
                        key={j}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          j <= i
                            ? 'bg-[var(--accent)] w-4'
                            : 'bg-[var(--br-h)] w-1.5'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
