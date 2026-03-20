'use client'

import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    num: '01',
    title: 'Sopralluogo gratuito',
    desc: "Veniamo da te senza impegno. Valutiamo l'ambiente, capiamo le tue esigenze, ascoltiamo ogni dettaglio.",
    accent: '#4ECBA0', // Teal
  },
  {
    num: '02',
    title: 'Preventivo in 24 ore',
    desc: 'Entro 24 ore ricevi un preventivo dettagliato e trasparente. Nessuna sorpresa, nessun costo nascosto.',
    accent: '#6DD9B2', // Light Teal
  },
  {
    num: '03',
    title: 'Intervento professionale',
    desc: 'Il nostro team qualificato interviene con macchinari professionali e prodotti certificati. Puntualità garantita.',
    accent: '#2A8C7A', // Deep Teal
  },
  {
    num: '04',
    title: 'Controllo e garanzia',
    desc: 'Verifichiamo ogni risultato prima di chiudere l\'intervento. La tua soddisfazione è la nostra misura del successo.',
    accent: '#1B5E6E', // Dark Teal
  },
]

export function ProcessSteps() {
  const containerRef = useRef<HTMLElement>(null)
  
  useLayoutEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.process-card') as HTMLElement[]
      
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return // L'ultima carta non si scala
        
        const nextCard = cards[i + 1]
        
        gsap.to(card, {
          scale: 0.93,
          opacity: 0.45,
          filter: 'blur(2px)',
          scrollTrigger: {
            trigger: nextCard,
            start: 'top bottom', // Quando la successiva entra dal bottom
            end: 'top top+=10%', // Fino a quando non tocca quasi la precedente (sticky padding)
            scrub: true,
          }
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Render SVG Animato dinamico in base allo step
  const renderSVGAnimation = (index: number) => {
    switch(index) {
      case 0:
        return (
          <svg width="120" height="120" viewBox="0 0 100 100" className="text-current">
            <motion.circle 
              cx="50" cy="50" r="40" 
              fill="none" stroke="currentColor" strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <circle cx="50" cy="50" r="10" fill="currentColor" />
          </svg>
        )
      case 1:
        return (
          <svg width="120" height="120" viewBox="0 0 100 100" className="text-current">
            <motion.path 
              d="M 20 60 Q 40 20, 60 40 T 80 30" 
              fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.path 
              d="M 30 80 L 90 80" 
              fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />
          </svg>
        )
      case 2:
        return (
          <svg width="120" height="120" viewBox="0 0 100 100" className="text-current">
            <motion.path 
              d="M 25 50 L 45 70 L 80 30" 
              fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0, scale: 0.5, opacity: 0 }}
              animate={{ pathLength: 1, scale: 1, opacity: 1 }}
              transition={{ repeat: Infinity, repeatDelay: 1, type: 'spring', stiffness: 200, damping: 10 }}
            />
          </svg>
        )
      case 3:
        return (
          <svg width="120" height="120" viewBox="0 0 100 100" className="text-current">
            <motion.g 
              animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }} 
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <polygon points="50,10 61,35 88,35 66,51 74,78 50,61 26,78 34,51 12,35 39,35" fill="currentColor" />
            </motion.g>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section ref={containerRef} className="relative w-full bg-[var(--bg)] pb-[120px] pt-16">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-6 xl:px-8">
        
        {/* Container for Stacking Cards */}
        <div className="flex flex-col gap-8 lg:gap-12 relative w-full pt-8 pb-32">
          {STEPS.map((step, index) => (
            <div 
              key={index}
              className="process-card sticky w-full h-[75vh] max-h-[500px] overflow-hidden rounded-3xl border border-[var(--br)] bg-white shadow-[0_20px_60px_rgba(42,140,122,0.1)]"
              style={{ top: `calc(10vh + ${index * 30}px)` }} 
            >
              <div className="flex w-full h-full flex-col lg:flex-row">
                
                {/* LATO SINISTROTesto */}
                  <div className="flex h-1/2 w-full flex-col justify-center p-6 sm:p-8 lg:h-full lg:w-1/2 lg:p-16">
                    <div 
                      className="font-mono-fulgur text-xl font-bold uppercase tracking-widest"
                      style={{ color: step.accent }}
                    >
                      {step.num}
                    </div>
                    <h3 className="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl font-bold text-[var(--tx-1)] lg:text-4xl text-balance leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 sm:mt-4 font-sans text-sm sm:text-base font-light leading-relaxed text-[var(--tx-2)] lg:text-lg">
                      {step.desc}
                    </p>
                  </div>

                {/* LATO DESTRO: Visual SVG */}
                <div 
                  className="flex h-1/2 w-full items-center justify-center bg-[var(--bg-3)] border-t border-[var(--br)] lg:h-full lg:w-1/2 lg:border-l lg:border-t-0"
                  style={{ color: step.accent }}
                >
                  <div className="relative flex items-center justify-center p-8 bg-white rounded-full shadow-sm border border-[var(--br)]">
                    {renderSVGAnimation(index)}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
