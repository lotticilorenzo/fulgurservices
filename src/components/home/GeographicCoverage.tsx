'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const CITIES = [
  "Parma", "Fidenza", "Salsomaggiore Terme", "Collecchio", 
  "Noceto", "Medesano", "Montechiarugolo", "Langhirano",
  "Traversetolo", "Felino", "Colorno", "Torrile",
  "Fontanellato", "Busseto", "Fornovo di Taro", "Borgotaro"
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
                Come <strong>impresa di pulizie a Parma</strong>, copriamo capillarmente ogni comune della provincia e le aree limitrofe dell'Emilia-Romagna, 
                garantendo puntualità e tempestività di intervento in ogni zona industriale, commerciale e residenziale.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8">
              {[
                { name: 'Parma', slug: null },
                { name: 'Fidenza', slug: 'fidenza' },
                { name: 'Salsomaggiore', slug: 'salsomaggiore-terme' },
                { name: 'Collecchio', slug: 'collecchio' },
                { name: 'Noceto', slug: null },
                { name: 'Montechiarugolo', slug: null },
                { name: 'Langhirano', slug: null },
                { name: 'Sorbolo Mezzani', slug: null },
                { name: 'Traversetolo', slug: null },
              ].map((city, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  {city.slug ? (
                    <Link 
                      href={`/zone/${city.slug}`}
                      className="font-sans text-sm font-medium text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors underline decoration-[var(--accent)]/10 underline-offset-4"
                    >
                      {city.name}
                    </Link>
                  ) : (
                    <span className="font-sans text-sm font-medium text-[var(--tx-2)]">
                      {city.name}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <ScrollReveal delay={0.6}>
              <div className="mt-12 flex items-center gap-4 text-[var(--tx-3)] font-sans text-sm italic">
                <MapPin size={20} className="text-[var(--accent)]" />
                <span>Interventi garantiti in 24h su tutto il territorio provinciale.</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Map Visual with Illustration V2 */}
          <div className="relative">
            <ScrollReveal>
              <div className="relative aspect-square w-full rounded-[48px] overflow-hidden flex items-center justify-center group">
                {/* Decorative background glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/5 to-transparent pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[var(--accent)] rounded-full blur-[120px] opacity-10" />

                {/* Custom Likeness Illustration V3 */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative z-10 w-[95%] h-[95%]"
                >
                  <img 
                    src="/images/parma-coverage-v3.png" 
                    alt="Copertura Parma e Provincia - Fulgur Service (Founder Likeness)"
                    className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(78,203,160,0.2)]"
                  />
                </motion.div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
