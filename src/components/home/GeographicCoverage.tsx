'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const CITIES = [
  { name: 'Parma', isMain: true },
  { name: 'Fidenza', isMain: false },
  { name: 'Salsomaggiore Terme', isMain: false },
  { name: 'Collecchio', isMain: false },
  { name: 'Noceto', isMain: false },
  { name: 'Montechiarugolo', isMain: false },
  { name: 'Langhirano', isMain: false },
  { name: 'Sorbolo Mezzani', isMain: false },
  { name: 'Traversetolo', isMain: false },
]

export function GeographicCoverage() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, var(--tx-1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} 
      />
      
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <div>
            <ScrollReveal>
              <SectionLabel className="mb-5">— DOVE OPERIAMO</SectionLabel>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl text-balance leading-[1.1]">
                Parma e tutta<br />
                <span className="text-[var(--accent)]">la provincia.</span>
              </h2>
              <p className="mt-6 font-sans text-lg font-light text-[var(--tx-2)] leading-relaxed max-w-lg">
                Come impresa di pulizie a Parma, copriamo ogni comune della provincia 
                e le aree limitrofe dell'Emilia-Romagna. Puntualità garantita, 
                interventi in 24h su tutto il territorio.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-10 grid grid-cols-3 gap-2">
                {CITIES.map((city, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className={`flex min-h-[36px] items-center gap-2 rounded-xl px-3 py-2 text-left transition-all ${
                      city.isMain 
                        ? 'bg-[var(--accent)] shadow-lg' 
                        : 'bg-[var(--bg-2)] hover:bg-[var(--accent-glow)] border border-[var(--br)] hover:border-[var(--accent)]'
                    }`}
                  >
                    <MapPin 
                      size={12} 
                      weight="fill" 
                      className={city.isMain ? 'text-white' : 'text-[var(--accent)]'} 
                    />
                    <span className={`font-sans text-xs font-medium leading-tight ${
                      city.isMain ? 'text-white' : 'text-[var(--tx-1)]'
                    }`}>
                      {city.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-10 flex items-center gap-4">
                <Link
                  href="/preventivo"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3 font-display text-sm font-bold text-white shadow-md transition-all hover:bg-[var(--accent-d)] hover:shadow-xl"
                >
                  Richiedi preventivo
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contatti"
                  className="inline-flex min-h-[44px] items-center gap-2 font-display text-sm font-bold text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors"
                >
                  Contatti →
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: AI Aerial Photo */}
          <ScrollReveal delay={0.1}>
            <div className="relative">
              <div className="relative aspect-square rounded-[36px] overflow-hidden border border-[var(--br)] shadow-2xl">
                <Image
                  src="/images/zone-copertura-servizi-pulizie-parma-provincia.jpg"
                  alt="Mappa aerea di Parma e provincia, l'area coperta dai nostri servizi di pulizia professionali"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 p-5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-display text-2xl font-black text-[var(--tx-1)]">
                        Parma
                      </div>
                      <div className="font-mono-fulgur text-[10px] uppercase tracking-widest text-[var(--tx-3)] mt-0.5">
                        e tutta la provincia
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-display text-2xl font-black text-[var(--accent)]">24h</div>
                      <div className="font-mono-fulgur text-[10px] uppercase tracking-widest text-[var(--tx-3)] mt-0.5">
                        risposta garantita
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-[var(--accent)] opacity-[0.08] blur-[80px] pointer-events-none" />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
