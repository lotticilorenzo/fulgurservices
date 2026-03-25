'use client'

import React from 'react'
import Image from 'next/image'
import { CheckCircle, Star } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'

const BENEFITS = [
  {
    num: '01',
    title: '35 Anni di Esperienza',
    desc: 'Trentacinque anni di storia fondono know-how profondo con la visione innovativa di una nuova generazione.',
  },
  {
    num: '02',
    title: 'Eco Innovazione',
    desc: 'Prodotti certificati Ecolabel e HACCP per un\'igiene al top, senza compromettere l\'ambiente.',
  },
  {
    num: '03',
    title: 'Partner 360°',
    desc: 'Pulizie + manutenzione idraulica, elettrica ed edile: un unico referente per la cura completa dei tuoi spazi.',
  },
  {
    num: '04',
    title: 'Controllo Qualità',
    desc: 'Ogni intervento è monitorato internamente secondo rigidi standard. La tua soddisfazione è garantita.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative w-full bg-[var(--bg-2)] py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -right-24 top-20 w-64 h-64 rounded-full bg-[var(--accent)] opacity-[0.06] blur-[80px] pointer-events-none" />
      
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 lg:gap-24 items-center">
          
          {/* Left: Image Visual */}
          <ScrollReveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-[var(--br)] shadow-2xl">
              <Image
                src="/images/operatori-pulizie-professionali-parma.jpg"
                alt="Operatore Fulgur Service professionale al lavoro a Parma"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Color overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--tx-1)]/60 via-transparent to-transparent" />
              
              {/* Floating experience badge */}
              <div className="absolute top-8 right-8 bg-[var(--accent)] text-white p-6 rounded-2xl shadow-xl z-10">
                <div className="font-display text-5xl font-black leading-none">35</div>
                <div className="font-mono-fulgur text-[9px] font-bold uppercase tracking-widest opacity-85 mt-1 leading-tight">
                  anni di<br />know-how
                </div>
              </div>

              {/* Glassy stats bar at bottom */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/15 border border-white/25 px-6 py-5 rounded-2xl z-10">
                <div className="flex items-center gap-6 text-white justify-center w-full">
                  <div className="flex flex-col items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} weight="fill" />)}
                    </div>
                    <span className="font-mono-fulgur text-[9px] uppercase tracking-widest opacity-70 mt-1">4.9 Google</span>
                  </div>
                  <div className="h-8 w-px bg-white/20" />
                  <div className="flex flex-col">
                    <span className="font-display text-2xl font-bold leading-none">100%</span>
                    <span className="font-mono-fulgur text-[9px] uppercase tracking-widest opacity-70 mt-1">Gratuito</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <SectionLabel className="mb-5">— PERCHÉ FULGUR</SectionLabel>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl text-balance leading-[1.1]">
                L&apos;impresa di pulizie <br />
                <span className="text-[var(--accent)]">scelta a Parma.</span>
              </h2>
              <p className="mt-6 font-sans text-lg font-light text-[var(--tx-2)] leading-relaxed max-w-lg">
                Affidarsi a Fulgur Service significa scegliere un partner locale con 35 anni di esperienza, 
                tecnologie industriali e un impegno per la qualità su tutto il territorio.
              </p>
            </ScrollReveal>

            <div className="mt-12 grid grid-cols-1 gap-5">
              {BENEFITS.map((benefit, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="group flex gap-5 p-5 rounded-2xl bg-white border border-[var(--br)] hover:border-[var(--accent)]/40 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="shrink-0 font-mono-fulgur text-base font-bold text-[var(--accent)] opacity-35 group-hover:opacity-100 transition-opacity mt-0.5">
                      {benefit.num}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[var(--tx-1)] group-hover:text-[var(--accent)] transition-colors mb-1.5">
                        {benefit.title}
                      </h3>
                      <p className="font-sans text-sm font-light text-[var(--tx-2)] leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                    <div className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent)]">
                      <CheckCircle size={20} weight="duotone" />
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
