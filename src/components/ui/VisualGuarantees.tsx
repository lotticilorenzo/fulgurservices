'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollReveal } from './ScrollReveal'

const GUARANTEES = [
  {
    id: 1,
    title: "30 anni di esperienza",
    data: "1994-2024",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    size: "large"
  },
  {
    id: 2,
    title: "Assicurazione RCT",
    data: "€2.000.000",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    size: "medium"
  },
  {
    id: 3,
    title: "Prodotti HACCP",
    data: "100%",
    img: "https://images.unsplash.com/photo-1542601906897-630a98e33db0?w=600&q=80",
    size: "medium"
  },
  {
    id: 4,
    title: "Team Qualificato",
    data: "Certificato",
    img: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=600&q=80",
    size: "large"
  }
]

export function VisualGuarantees() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
        
        <div className="text-center mb-16 px-4">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-[var(--tx-1)] sm:text-4xl mb-4">
              Perché oltre 500 aziende <br className="hidden sm:block" /> ci hanno scelto.
            </h2>
            <p className="font-sans text-[var(--tx-2)] font-light max-w-2xl mx-auto">
              Non solo promesse, ma garanzie scritte e standard certificati per proteggere il tuo ambiente di lavoro.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GUARANTEES.map((g, i) => (
            <ScrollReveal key={g.id} delay={i * 0.1} className={g.size === 'large' ? 'md:col-span-2' : 'col-span-1'}>
              <div className={`relative w-full rounded-2xl overflow-hidden border border-[var(--br)] bg-[var(--bg-2)] group ${g.size === 'large' ? 'aspect-[21/9] min-h-[280px]' : 'aspect-square md:aspect-[4/3] min-h-[220px]'}`}>
                <Image 
                  src={g.img}
                  alt={g.title}
                  fill
                  className="object-cover transition-transform duration-[800ms] group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div 
                  className="absolute inset-0" 
                  style={{ background: 'linear-gradient(to top, rgba(15,31,26,0.95) 0%, rgba(15,31,26,0.2) 60%, transparent 100%)' }}
                />

                {/* Content */}
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--accent)] mb-2 block tracking-tight">
                    {g.data}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                    {g.title}
                  </h3>
                  
                  <div className="mt-4 h-1 w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
