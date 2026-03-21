'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SpotlightCard } from './SpotlightCard'
import { ScrollReveal } from './ScrollReveal'
import { SectionLabel } from './SectionLabel'

const PARTNERS = [
  { name: 'Klindex', logo: '/images/brands/klindex.png' },
  { name: 'Kiter', logo: '/images/brands/kiter.png' },
  { name: 'Nilfisk', logo: '/images/brands/nilfisk.png' },
  { name: 'TMB', logo: '/images/brands/tmb.png' },
  { name: 'Fimap', logo: '/images/brands/fimap.png' },
  { name: 'Comac', logo: '/images/brands/comac.png' }
]

export function PartnershipSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-[var(--bg-2)] overflow-hidden border-t border-[var(--br)]">
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
        
        <div className="text-center mb-16">
          <ScrollReveal>
            <SectionLabel className="mb-4 mx-auto">— I NOSTRI MACCHINARI</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-[var(--tx-1)] sm:text-4xl mb-4">
              Operiamo solo con il meglio.
            </h2>
            <p className="font-sans text-[var(--tx-2)] font-light max-w-xl mx-auto">
              I nostri macchinari e prodotti sono gli stessi usati dalle imprese leader europee.
              Garanzia di efficienza, sicurezza e rispetto delle superfici.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {PARTNERS.map((partner, i) => (
            <ScrollReveal key={partner.name} delay={i * 0.05}>
              <SpotlightCard className="h-full">
                <div className="aspect-[3/2] flex flex-col items-center justify-center p-8 rounded-2xl bg-white border border-[var(--br)] hover:border-[var(--accent)]/40 transition-all duration-500 group card-lift">
                  <div className="relative w-full h-12 mb-4">
                    <Image
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      fill
                      sizes="(max-width: 640px) 140px, 160px"
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-100"
                    />
                  </div>
                  <span className="font-mono-fulgur text-[10px] font-bold text-[var(--tx-3)] group-hover:text-[var(--accent)] uppercase tracking-widest transition-colors">
                    {partner.name}
                  </span>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <ScrollReveal delay={0.4}>
            <Link 
              href="/macchinari" 
              className="group inline-flex items-center gap-2 font-display text-sm font-bold text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors mb-4"
            >
              <span>Scopri tutti i macchinari →</span>
              <span className="h-px w-0 bg-[var(--accent)] transition-all group-hover:w-full" />
            </Link>
            <p className="font-sans text-[10px] text-[var(--tx-3)] italic opacity-60">
              * Tutti i macchinari sono certificati e in perfetto stato di manutenzione periodica.
            </p>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
