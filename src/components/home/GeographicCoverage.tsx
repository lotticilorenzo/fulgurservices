'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const CITIES = [
  "Parma", "Fidenza", "Salsomaggiore Terme", "Collecchio", 
  "Noceto", "Medesano", "Montechiarugolo", "Langhirano",
  "Traversetolo", "Felino", "Colorno", "Torrile"
]

export function GeographicCoverage() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Content */}
          <div>
            <ScrollReveal>
              <SectionLabel className="mb-4">— DOVE OPERIAMO</SectionLabel>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl mb-8">
                Parma e tutta <br /> la provincia.
              </h2>
              <p className="font-sans text-lg font-light text-[var(--tx-2)] mb-12">
                Copriamo capillarmente tutto il territorio dell'Emilia-Romagna, 
                garantendo puntualità e tempestività di intervento in ogni comune.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {CITIES.map((city, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <Link 
                    href={`/servizi?zona=${city.toLowerCase().replace(/ /g, '-')}`}
                    className="flex items-center gap-2 font-mono-fulgur text-[11px] font-bold text-[var(--tx-2)] uppercase tracking-wider hover:text-[var(--accent)] transition-all group"
                  >
                    <div className="h-1 w-1 rounded-full bg-[var(--accent)] group-hover:scale-150 transition-transform" />
                    {city}
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.6}>
              <div className="mt-12 flex items-center gap-4 text-[var(--tx-3)] font-sans text-sm italic">
                <MapPin size={20} className="text-[var(--accent)]" />
                <span>Interventi garantiti in 24h su tutto il territorio provinciale.</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Map Visual Placeholder */}
          <div className="relative">
            <ScrollReveal>
              <div className="relative aspect-square w-full rounded-full border border-[var(--br)] bg-[var(--bg-2)] flex items-center justify-center p-12 overflow-hidden group">
                {/* Decorative pulses */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[var(--accent)] rounded-full blur-3xl opacity-10 animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[var(--accent)] rounded-full z-10 shadow-[0_0_20px_var(--accent)] shadow-accent" />
                  
                  {/* Radars */}
                  <motion.div 
                    animate={{ scale: [1, 3], opacity: [0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[var(--accent)]/30 rounded-full"
                  />
                  <motion.div 
                    animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 0.6 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[var(--accent)]/20 rounded-full"
                  />
                </div>

                {/* City Labels floating around */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                   <div className="absolute top-[20%] right-[30%] font-display text-sm font-bold text-[var(--tx-1)] opacity-40">Fidenza</div>
                   <div className="absolute bottom-[25%] left-[20%] font-display text-sm font-bold text-[var(--tx-1)] opacity-40">Collecchio</div>
                   <div className="absolute top-[40%] left-[10%] font-display text-sm font-bold text-[var(--tx-1)] opacity-40">Salsomaggiore</div>
                   <div className="absolute bottom-[35%] right-[15%] font-display text-sm font-bold text-[var(--tx-1)] opacity-40">Langhirano</div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 font-display text-xl font-bold text-[var(--accent)]">PARMA</div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
