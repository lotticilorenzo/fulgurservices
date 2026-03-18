'use client'

import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ParallaxText } from '@/components/ui/ParallaxText'

gsap.registerPlugin(ScrollTrigger)

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textContainerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!sectionRef.current || !textContainerRef.current) return

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray('.anim-word', textContainerRef.current)

      gsap.fromTo(
        words,
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.05,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

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
      className="relative w-full bg-[var(--bg-3)] py-[140px] lg:py-[180px] overflow-hidden border-y border-[var(--br)]"
    >
      {/* Background Architectural Text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-20 pointer-events-none z-0">
        <ParallaxText text="CURA" direction="right" distance={300} outline={true} className="scale-[1.5]" />
      </div>

      {/* CSS Noise Texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 xl:px-8 text-center flex flex-col items-center">
        <SectionLabel className="mb-12">— MANIFESTO DELLA CURA</SectionLabel>
        
        {/* Testo Intro */}
        <div className="mb-12 font-sans text-base lg:text-lg font-light text-[var(--tx-3)] max-w-2xl">
          <p>La maggior parte delle imprese di pulizie si concentra su:</p>
          <p className="italic mt-2 text-[var(--tx-2)]">&ldquo;Pulire veloce, al prezzo più basso.&rdquo;</p>
        </div>

        {/* Testo Grande Manifesto */}
        <div 
          ref={textContainerRef}
          className="font-display font-black leading-[1.05] tracking-tighter text-[clamp(40px,7vw,92px)] flex flex-wrap justify-center text-center"
        >
          <div className="w-full text-center text-[var(--tx-2)] text-[0.5em] font-bold tracking-widest uppercase mb-6 opacity-70">
            {renderTextWordByWord('Noi ci concentriamo su:', '')}
          </div>
          
          <div className="flex flex-wrap justify-center text-center">
            {renderTextWordByWord('prendersi', 'text-[var(--tx-1)]')}
            {renderTextWordByWord('CURA', 'text-[var(--accent)]')}
          </div>
          <div className="flex flex-wrap justify-center w-full mt-2 lg:mt-4 text-center">
            {renderTextWordByWord("dell'ambiente del cliente come se fosse nostro.", 'text-[var(--tx-1)]')}
          </div>
        </div>

      </div>
    </section>
  )
}
