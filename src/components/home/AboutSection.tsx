'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ShieldCheck, Leaf, UsersThree, Hourglass } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const VALORI = [
  { icon: Leaf,         text: 'Prodotti a basso impatto ambientale quando possibile' },
  { icon: UsersThree,   text: 'Referente unico per tutti i servizi integrati' },
  { icon: ShieldCheck,  text: 'Team qualificato, assicurato e formato continuamente' },
  { icon: Hourglass,    text: 'Sopralluogo sempre gratuito, preventivo in 24 ore' },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section id="chi-siamo" ref={sectionRef} className="relative overflow-hidden bg-[var(--bg-3)] py-16 sm:py-24 lg:py-32">
      
      {/* Decorative Green Glow */}
      <div className="absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-[var(--accent)] opacity-[0.06] blur-[120px] pointer-events-none" />
      
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-10 md:gap-14 lg:gap-20 items-center">
          
          {/* LATO SINISTRO: Immagine — 42% */}
          <ScrollReveal className="order-2 lg:order-1">
            <div className="relative w-full max-w-[480px] mx-auto lg:mx-0">
              
              {/* Image card */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-[var(--br)] shadow-2xl">
                <motion.div style={{ y: imageY }} className="relative w-full h-[110%] -top-[5%]">
                  <Image
                    src="/images/chi-siamo.webp"
                    alt="Lorenzo davanti al furgone Fulgur Service — impresa di pulizie professionali a Parma"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </motion.div>
              </div>
              
              {/* Badge sovrapposto — in basso a sinistra */}
              <div className="absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-5 z-20 rounded-2xl bg-[var(--accent)] px-5 py-3 sm:px-7 sm:py-5 text-white shadow-2xl flex flex-col items-center">
                <span className="font-display text-4xl sm:text-5xl font-black leading-none">30</span>
                <span className="font-mono-fulgur text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] opacity-85 text-center leading-tight mt-1">
                  anni di<br />know-how
                </span>
              </div>

              {/* Second small badge: reviews */}
              <div className="absolute -top-5 -right-4 z-20 rounded-2xl bg-white border border-[var(--br)] px-5 py-3.5 shadow-xl flex items-center gap-3">
                <div className="flex flex-col">
                  <span className="font-display text-sm font-bold text-[var(--tx-1)] leading-none">500+</span>
                  <span className="font-mono-fulgur text-[9px] uppercase tracking-widest text-[var(--tx-3)] mt-0.5">Clienti</span>
                </div>
                <div className="h-8 w-px bg-[var(--br)]" />
                <div className="flex flex-col">
                  <span className="font-display text-sm font-bold text-[var(--accent)] leading-none">4.9★</span>
                  <span className="font-mono-fulgur text-[9px] uppercase tracking-widest text-[var(--tx-3)] mt-0.5">Google</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* LATO DESTRO: Testi — 58% */}
          <div className="order-1 lg:order-2 flex flex-col items-start">
            <ScrollReveal>
              <SectionLabel className="mb-6">— CHI SIAMO</SectionLabel>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl lg:text-[3.2rem] leading-[1.1]">
                Tradizione e innovazione,{' '}<br />
                <span className="text-[var(--accent)]">insieme.</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <div className="mt-5 sm:mt-7 space-y-4 sm:space-y-5 font-body text-[0.95rem] sm:text-[1.05rem] font-light text-[var(--tx-2)] leading-relaxed">
                <p>
                  Fulgur Service è un'impresa giovane, nata da idee chiare e innovative,
                  con alle spalle 30 anni di esperienza: siamo il punto d'incontro tra
                  la visione fresca di una nuova generazione e la solidità del lavoro
                  costruito da mio padre.
                </p>
                <p>
                  Per noi la pulizia non è un'attività meccanica: non siamo semplici
                  fornitori, ma partner che si prendono cura dell'ambiente del cliente a 360°.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="w-full">
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pr-20 sm:pr-0">
                {VALORI.map((valore, i) => {
                  const Icon = valore.icon
                  return (
                    <div key={i} className="flex items-start gap-3.5 rounded-xl border border-[var(--br)] bg-white p-4 hover:border-[var(--accent)] hover:shadow-md transition-all duration-300">
                      <div className="mt-0.5 h-8 w-8 rounded-lg bg-[var(--accent-glow)] flex items-center justify-center shrink-0 border border-[var(--accent)]/15">
                        <Icon size={16} weight="duotone" className="text-[var(--accent)]" />
                      </div>
                      <span className="font-sans text-sm font-medium text-[var(--tx-1)] leading-snug">{valore.text}</span>
                    </div>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
