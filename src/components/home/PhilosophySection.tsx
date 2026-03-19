'use client'

import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ParallaxText } from '@/components/ui/ParallaxText'

gsap.registerPlugin(ScrollTrigger)

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const bigTextRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !sectionRef.current || !bigTextRef.current) return

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<Element>('.anim-word', bigTextRef.current!)

      gsap.fromTo(
        words,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          duration: 0.75,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const renderWords = (text: string, cls: string) =>
    text.split(' ').map((word, i) => (
      <span key={i} className={`anim-word inline-block ${cls}`}>
        {word}&nbsp;
      </span>
    ))

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[var(--bg-2)] py-16 sm:py-24 lg:py-28 xl:py-32 overflow-hidden border-y border-[var(--br)]"
    >
      {/* Background parallax text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[0.06] pointer-events-none z-0 select-none">
        <ParallaxText text="CURA" direction="right" distance={250} outline={true} className="scale-[1.6]" />
      </div>

      {/* Noise texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.018]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
        }}
      />

      {/* Radial accent glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[600px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(78,203,160,0.08), transparent)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 xl:px-8 text-center flex flex-col items-center">
        <SectionLabel className="mb-12 mx-auto">— MANIFESTO DELLA CURA</SectionLabel>

        {/* "Wrong" approach — crossed out */}
        <div className="mb-10 sm:mb-14 w-full max-w-lg mx-auto">
          <p className="font-mono-fulgur text-[10px] uppercase tracking-[0.2em] text-[var(--tx-3)] mb-5 text-center">
            La maggior parte delle imprese di pulizie si concentra su:
          </p>
          <div className="rounded-2xl border border-[var(--br-h)] bg-white/70 px-6 sm:px-8 py-5 text-center relative overflow-hidden">
            <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-px bg-[var(--tx-2)] opacity-30 pointer-events-none" />
            <p className="font-display text-xl sm:text-2xl font-bold text-[var(--tx-2)] opacity-50 italic">
              &ldquo;Pulire veloce, al prezzo più basso.&rdquo;
            </p>
          </div>
          {/* Arrow down */}
          <div className="flex flex-col items-center mt-6 gap-1">
            <div className="h-8 w-px bg-gradient-to-b from-[var(--br-h)] to-[var(--accent)] opacity-60" />
            <div className="font-mono-fulgur text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
              Noi invece
            </div>
          </div>
        </div>

        {/* Manifesto — grande */}
        <div
          ref={bigTextRef}
          className="font-display font-black leading-[1.02] tracking-tighter text-center"
          style={{ fontSize: 'clamp(34px, 5vw, 68px)' }}
        >
          <div className="w-full text-center mb-4">
            <span
              className="font-mono-fulgur uppercase tracking-[0.12em] text-[var(--tx-3)] opacity-70"
              style={{ fontSize: 'clamp(13px, 1.5vw, 18px)' }}
            >
              Noi ci concentriamo su:
            </span>
          </div>

          <div className="flex flex-wrap justify-center">
            {renderWords('prendersi', 'text-[var(--tx-1)]')}
            <span
              className="anim-word inline-block text-[var(--accent)]"
              style={{ fontStyle: 'italic' }}
            >
              CURA&nbsp;
            </span>
          </div>
          <div className="flex flex-wrap justify-center w-full mt-1 lg:mt-2">
            {renderWords("dell'ambiente del cliente", 'text-[var(--tx-1)]')}
          </div>
          <div className="flex flex-wrap justify-center w-full mt-1 lg:mt-2">
            {renderWords('come se fosse nostro.', 'text-[var(--tx-1)]')}
          </div>
        </div>
      </div>
    </section>
  )
}
