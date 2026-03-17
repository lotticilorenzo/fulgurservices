'use client'

import React from 'react'
import { Star } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SpotlightCard } from '@/components/ui/SpotlightCard'

const REVIEWS = [
  {
    name: "Marco Rossi",
    company: "Studio Legale Associato",
    text: "Efficienza e discrezione. Fulgur Service gestisce la pulizia dei nostri uffici con una cura maniacale per il dettaglio. I prodotti eco-sostenibili non lasciano odori chimici fastidiosi.",
    initials: "MR"
  },
  {
    name: "Elena Bianchi",
    company: "Condominio Il Parco",
    text: "Da quando abbiamo affidato le pulizie condominiali a loro, scale e androni splendono. Apprezziamo molto la rendicontazione digitale e la puntualità del team.",
    initials: "EB"
  },
  {
    name: "Giuseppe Verdi",
    company: "Officina Meccanica G.V.",
    text: "Pulizia industriale di alto livello. Hanno rimosso residui d'olio difficilissimi dai pavimenti in cemento. Professionali, attrezzati e trasparenti nei costi.",
    initials: "GV"
  }
]

export function ReviewsStrip() {
  return (
    <section className="relative w-full bg-[var(--bg-2)] py-16 lg:py-24 border-y border-[var(--br)]">
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
        
        <div className="mb-16 lg:mb-24">
          <ScrollReveal>
            <SectionLabel className="mb-4">— COSA DICONO I CLIENTI</SectionLabel>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl">
              Oltre 500 clienti soddisfatti.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <SpotlightCard className="h-full flex flex-col p-8 bg-white border border-[var(--br)] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex gap-1 text-[var(--accent)] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} weight="fill" />)}
                </div>
                
                <p className="font-sans text-base font-light text-[var(--tx-2)] leading-relaxed italic mb-10 flex-grow">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-display text-lg font-bold">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-display text-[15px] font-bold text-[var(--tx-1)]">{review.name}</h4>
                    <p className="font-mono-fulgur text-[10px] uppercase tracking-wider text-[var(--tx-3)]">{review.company}</p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Google Badge */}
        <div className="mt-16 flex justify-center">
          <ScrollReveal delay={0.4}>
            <a 
              href="https://www.google.it/maps/place/Fulgur+Service+Parma" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-3 rounded-full border border-[var(--br)] bg-white hover:border-[var(--accent)] transition-all group"
            >
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} weight="fill" />)}
              </div>
              <span className="font-mono-fulgur text-[11px] font-bold text-[var(--tx-1)]">
                4.9 su Google · 47 recensioni verificate
              </span>
              <span className="text-[var(--tx-3)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all">→</span>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
