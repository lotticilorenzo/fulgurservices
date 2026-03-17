'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ParallaxText } from '@/components/ui/ParallaxText'

const VALUES = [
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
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[42%_58%] lg:gap-[80px]">
          
          {/* LATO SINISTRO: Immagine Parallax */}
          <ScrollReveal className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--accent)] shadow-2xl z-10">
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
          </ScrollReveal>

          {/* LATO DESTRO: Testo e Contenuti */}
          <div className="order-1 lg:order-2 flex flex-col items-start">
            <ScrollReveal>
              <SectionLabel className="mb-4">— CHI SIAMO</SectionLabel>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
                L&apos;<strong>impresa di pulizie a Parma</strong> che unisce tradizione e innovazione.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-8 flex flex-col gap-6 font-sans text-base lg:text-lg font-light leading-relaxed text-[var(--tx-2)]">
                <p>
                  Fulgur Service non è solo un nome, ma una storia di eccellenza nel cleaning professionale. 
                  Siamo il punto d'incontro tra la visione fresca di una nuova generazione e la solidità di 30 anni di esperienza sul territorio di <strong>Parma e provincia</strong>.
                </p>
                <p>
                  Non siamo semplici fornitori: ci proponiamo come partner strategici che si prendono cura del tuo ambiente di lavoro o privato come se fosse il nostro.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-10 flex flex-col gap-4">
              {VALUES.map((value, idx) => (
                <ScrollReveal key={idx} delay={0.2 + idx * 0.1} className="flex items-start gap-4">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_10px_rgba(78,203,160,0.5)]" />
                  <span className="font-sans text-[15px] font-medium text-[var(--tx-1)]">
                    {value}
                  </span>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.7} className="mt-12 flex flex-wrap gap-8 items-center">
              <Link 
                href="/chi-siamo" 
                className="group relative inline-flex items-center font-display text-lg font-bold text-[var(--tx-1)] transition-colors hover:text-[var(--accent)]"
              >
                Scopri la nostra storia →
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--accent)] transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
              
              <Link 
                href="/gallery" 
                className="group relative inline-flex items-center font-mono-fulgur text-xs font-bold text-[var(--tx-3)] uppercase tracking-widest transition-colors hover:text-[var(--accent)]"
              >
                Guarda la gallery <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
