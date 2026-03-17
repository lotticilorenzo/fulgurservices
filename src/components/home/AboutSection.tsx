'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ParallaxText } from '@/components/ui/ParallaxText'

const VALORI = [
  'Prodotti a basso impatto ambientale quando possibile',
  'Referente unico per tutti i servizi integrati',
  'Team qualificato, assicurato e formato continuamente',
  'Sopralluogo sempre gratuito, preventivo in 24 ore',
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  
  // Parallax dell'immagine in base allo scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <section id="chi-siamo" ref={sectionRef} className="relative overflow-hidden bg-[var(--bg-3)] py-24 lg:py-32">
      {/* Background Architectural Text */}
      <div className="absolute bottom-20 left-0 w-full opacity-10 pointer-events-none">
        <ParallaxText text="FULGUR" direction="right" distance={150} />
      </div>

      {/* Decorative Green Glow */}
      <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px]" />
      
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[80px] items-center">
            
            {/* LATO SINISTRO: Testi */}
            <div className="flex flex-col items-start">
              <SectionLabel className="mb-6">— CHI SIAMO</SectionLabel>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl lg:text-6xl mb-8 leading-[1.1]">
                Tradizione e innovazione, <br />
                <span className="text-[var(--accent)]">insieme.</span>
              </h2>
              
              <div className="space-y-6 font-body text-lg font-light text-[var(--tx-2)] leading-relaxed">
                <p>
                  Fulgur Service è un’impresa giovane, nata da idee chiare e innovative, 
                  con alle spalle 30 anni di esperienza: siamo il punto d’incontro tra 
                  la visione fresca di una nuova generazione e la solidità del lavoro 
                  costruito da mio padre.
                </p>
                <p>
                  Per noi la pulizia non è un’attività meccanica: non siamo semplici 
                  fornitori, ma partner che si prendono cura dell’ambiente del cliente a 360°.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {VALORI.map((valore, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 h-5 w-5 rounded-full bg-[var(--accent-glow)] flex items-center justify-center border border-[var(--accent)]/20 shadow-[0_0_15px_rgba(78,203,160,0.1)]">
                      <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    </div>
                    <span className="font-sans text-sm font-medium text-[var(--tx-1)] leading-tight">{valore}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* LATO DESTRO: Visual Parallax */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] lg:max-w-none">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-[var(--br)] shadow-2xl z-10">
                  <motion.div style={{ y: imageY, height: 'calc(100% + 40px)' }} className="relative w-full h-[120%] -top-[10px]">
                    <Image
                      src="/images/chi-siamo-fulgur-service-parma.jpg"
                      alt="Il team Fulgur Service — impresa di pulizie professionali a Parma"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </div>
                
                {/* Badge Sovrapposto */}
                <div className="absolute -bottom-6 -right-6 z-20 rounded-2xl bg-[var(--accent)] px-8 py-6 text-white shadow-2xl lg:-bottom-10 lg:-right-10 flex flex-col items-center">
                  <span className="font-display text-5xl font-black block leading-none mb-1">30</span>
                  <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 text-center leading-tight">Anni di <br /> eccellenza</span>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
