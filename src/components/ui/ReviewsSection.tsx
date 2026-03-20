'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Checks, GoogleLogo } from '@phosphor-icons/react'
import { ScrollReveal } from './ScrollReveal'

const REVIEWS = [
  {
    id: 1,
    author: "Marco R.",
    role: "Responsabile Facility",
    company: "Parma",
    text: "La pulizia del nostro ufficio è impeccabile da quando lavoriamo con Fulgur. Puntuali, professionali, discreti. Un partner su cui si può contare veramente.",
    stars: 5,
  },
  {
    id: 2,
    author: "Studio Legale Ferretti",
    role: "Professionisti",
    company: "Parma",
    text: "Finalmente un'impresa di pulizie seria che sa gestire superfici delicate. Il sopralluogo gratuito ci ha convinti subito, il servizio ha superato le aspettative.",
    stars: 5,
  },
  {
    id: 3,
    author: "Direzione Hotel Palace",
    role: "Settore Alberghiero",
    company: "Parma",
    text: "Per il nostro hotel è fondamentale avere standard elevati e costanti. Fulgur non ha mai deluso in 3 anni di collaborazione. Eccellenti in tutto.",
    stars: 5,
  }
]

  export function ReviewsSection() {
    return (
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[var(--bg-2)] overflow-hidden border-y border-[var(--br)]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <ScrollReveal>
              <h2 className="font-display text-[32px] sm:text-4xl font-bold text-[var(--tx-1)] mb-4 text-balance leading-tight">
                Cosa dicono i nostri clienti.
              </h2>
              <p className="font-sans text-[var(--tx-2)] font-light max-w-2xl mx-auto text-balance">
              Oltre 500 clienti soddisfatti in Emilia-Romagna hanno scelto <br className="hidden md:block" /> 
              di affidare i loro spazi alla nostra cura professionale.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {REVIEWS.map((rev, i) => (
            <ScrollReveal key={rev.id} delay={i * 0.1}>
              <div className="flex flex-col h-full p-8 rounded-3xl bg-white border border-[var(--br)] hover:border-[var(--accent)]/30 transition-all group shadow-sm hover:shadow-xl hover:shadow-[var(--accent-glow)]">
                <div className="flex items-center gap-0.5 text-[var(--accent)] mb-6">
                  {[...Array(rev.stars)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="flex-1 font-sans text-[var(--tx-2)] text-[15px] leading-relaxed italic mb-8">
                  "{rev.text}"
                </blockquote>

                <div className="flex items-center gap-4 pt-6 border-t border-[var(--br)]">
                  <div className="h-12 w-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center font-display font-bold text-[var(--accent)] text-lg">
                    {rev.author[0]}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[var(--tx-1)] text-sm">{rev.author}</h4>
                    <p className="font-mono-fulgur text-[10px] text-[var(--tx-3)] font-bold uppercase mt-0.5">
                      {rev.role} · {rev.company}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="flex justify-center">
          <ScrollReveal delay={0.4}>
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white border border-[var(--accent)]/20 shadow-sm">
              <div className="flex items-center gap-1 text-[var(--accent)]">
                 {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
              </div>
              <p className="font-sans text-xs font-bold text-[var(--tx-1)]">
                4.9 <span className="text-[var(--tx-3)] font-normal">★ su Google · 47 recensioni verificate</span>
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
