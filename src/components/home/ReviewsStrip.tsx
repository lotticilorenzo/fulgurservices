'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quotes, CheckCircle } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SpotlightCard } from '@/components/ui/SpotlightCard'

const REVIEWS = [
  {
    name: "Marco Rossi",
    company: "Studio Legale Associato",
    role: "Proprietario",
    text: "Efficienza e discrezione. Fulgur Service gestisce la pulizia dei nostri uffici con una cura maniacale per il dettaglio. I prodotti eco-sostenibili non lasciano odori chimici fastidiosi.",
    image: "/images/avatars/marco-rossi.png"
  },
  {
    name: "Elena Bianchi",
    company: "Condominio Il Parco",
    role: "Amministratrice",
    text: "Da quando abbiamo affidato le pulizie condominiali a loro, scale e androni splendono. Apprezziamo molto la rendicontazione digitale e la puntualità del team.",
    image: "/images/avatars/elena-bianchi.png"
  },
  {
    name: "Giuseppe Verdi",
    company: "Officina Meccanica G.V.",
    role: "Titolare",
    text: "Pulizia industriale di alto livello. Hanno rimosso residui d'olio difficilissimi dai pavimenti in cemento. Professionali, attrezzati e trasparenti nei costi.",
    image: "/images/avatars/giuseppe-verdi.png"
  }
]

export function ReviewsStrip() {
  return (
    <section className="relative w-full bg-[var(--bg-2)] py-20 lg:py-32 border-y border-[var(--br)] overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <Quotes size={600} weight="fill" className="text-[var(--tx-1)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">
        
        <div className="mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <ScrollReveal className="max-w-2xl text-center md:text-left">
            <SectionLabel className="mb-4">— COSA DICONO I CLIENTI</SectionLabel>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl lg:text-6xl text-balance">
              Oltre <span className="text-[var(--accent)]">500</span> clienti <br className="hidden lg:block" /> soddisfatti.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="hidden lg:block">
            <div className="flex -space-x-3 mb-4">
              {REVIEWS.map((review, i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image src={review.image} alt={review.name} width={40} height={40} className="object-cover" />
                </div>
              ))}
              <div className="h-10 w-10 rounded-full border-2 border-white bg-[var(--accent)] flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                +497
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <SpotlightCard className="h-full flex flex-col p-6 sm:p-8 lg:p-10 bg-white border border-[var(--br)] rounded-[32px] shadow-sm hover:shadow-[0_20px_50px_rgba(42,140,122,0.1)] transition-all duration-500 group">
                
                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-1 text-[var(--accent)]">
                    {[...Array(5)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (i * 0.1) + (idx * 0.05), duration: 0.3 }}
                      >
                        <Star size={18} weight="fill" />
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent)]/[0.08] text-[var(--accent)]">
                    <CheckCircle size={14} weight="fill" />
                    <span className="font-mono-fulgur text-[9px] font-bold uppercase tracking-wider">Verificato</span>
                  </div>
                </div>
                
                <div className="relative mb-8">
                  <Quotes size={32} weight="fill" className="absolute -top-4 -left-4 text-[var(--accent)] opacity-10 group-hover:opacity-20 transition-opacity" />
                  <p className="relative font-sans text-base lg:text-lg font-light text-[var(--tx-2)] leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-8 border-t border-[var(--br)]/50">
                  <div className="relative h-14 w-14 rounded-2xl overflow-hidden shadow-md group-hover:shadow-[var(--accent-glow)] transition-all duration-500">
                    <Image 
                      src={review.image} 
                      alt={review.name} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-[var(--tx-1)] group-hover:text-[var(--accent)] transition-colors">
                      {review.name}
                    </h4>
                    <div className="flex flex-col">
                      <span className="font-mono-fulgur text-[10px] uppercase tracking-wider text-[var(--tx-3)]">
                        {review.role}
                      </span>
                      <span className="font-sans text-[11px] font-medium text-[var(--tx-2)]">
                        {review.company}
                      </span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Google Badge Enhanced */}
        <div className="mt-20 flex justify-center">
          <ScrollReveal delay={0.4}>
            <a 
              href="https://www.google.it/maps/place/Fulgur+Service+Parma" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center gap-4 sm:gap-5 px-5 sm:px-8 py-3 sm:py-4 rounded-2xl border border-[var(--br)] bg-white hover:border-[var(--accent)] hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" width="20" height="20" className="h-5 w-5">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
                <div className="flex gap-0.5 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} weight="fill" />)}
                </div>
              </div>
              <div className="h-6 w-px bg-slate-200" />
              <span className="font-mono-fulgur text-[12px] font-bold text-[var(--tx-1)]">
                4.9 su Google · <span className="text-[var(--tx-3)]">47 recensioni verificate</span>
              </span>
              <span className="text-[var(--tx-3)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all">→</span>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
