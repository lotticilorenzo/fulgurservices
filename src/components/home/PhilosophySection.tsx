'use client'

import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionLabel } from '@/components/ui/SectionLabel'

gsap.registerPlugin(ScrollTrigger)

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textContainerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!sectionRef.current || !textContainerRef.current) return

    const ctx = gsap.context(() => {
      // Troviamo tutte le parole (span generati)
      const words = gsap.utils.toArray('.anim-word', textContainerRef.current)

      gsap.fromTo(
        words,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%', // Inizia l'animazione quando il top della sezione scende al 70% della viewport
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Helper per split testo mantenendo validità HTML — usiamo .split(' ') e mappiamo a <span>
  const renderTextWordByWord = (text: string, baseClass: string) => {
    return text.split(' ').map((word, i) => (
      <span key={i} className={`anim-word inline-block ${baseClass}`}>
        {word}&nbsp;
      </span>
    ))
  }

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-[var(--bg-2)] py-[120px] overflow-hidden border-y border-[var(--br)]"
    >
      {/* CSS Noise Texture — no external image needed */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 xl:px-8 text-center flex flex-col items-center">
        <SectionLabel className="mb-8">— LA NOSTRA FILOSOFIA</SectionLabel>
        
        {/* Testo Piccolo */}
        <div className="mb-8 font-sans text-base font-light text-[var(--tx-3)]">
          <p>La maggior parte delle imprese di pulizie si concentra su:</p>
          <p className="italic mt-1">"Pulire veloce. Costo basso. Nessun pensiero."</p>
        </div>

        {/* Testo Grande Splittato */}
        <div 
          ref={textContainerRef}
          className="font-display font-extrabold leading-tight tracking-tight text-[clamp(36px,5vw,64px)] flex flex-wrap justify-center gap-y-2"
        >
          <div className="w-full text-center text-[var(--tx-2)] text-[0.65em] opacity-90 mb-2">
            {renderTextWordByWord('Noi ci concentriamo su:', '')}
          </div>
          
          <div className="flex flex-wrap justify-center">
            {renderTextWordByWord('prendersi', 'text-[var(--tx-1)]')}
            {renderTextWordByWord('CURA', 'text-[var(--accent)]')}
            {renderTextWordByWord("dell'ambiente del cliente come se fosse nostro.", 'text-[var(--tx-1)]')}
          </div>
        </div>

      </div>
    </section>
  )
}
