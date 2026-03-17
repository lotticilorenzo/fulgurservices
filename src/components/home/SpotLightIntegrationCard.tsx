'use client'

import React from 'react'
import { Drop, Wrench, Recycle, Lightning } from '@phosphor-icons/react'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

// Map icons based on string name
const IntIconMap: Record<string, React.ElementType> = {
  Drop, Wrench, Recycle, Lightning
}

interface SpotLightIntegrationCardProps {
  index: number
  integratedServices: {
    title: string
    desc: string
    icon: string
  }[]
}

export function SpotLightIntegrationCard({ index, integratedServices }: SpotLightIntegrationCardProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <SpotlightCard
        className="relative overflow-hidden rounded-[20px] border-2 border-[var(--accent)] bg-white p-8 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(42,140,122,0.15)] lg:p-12 shadow-md"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
          
          {/* Left Text */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 font-mono-fulgur text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
              Impresa 360°
            </div>
            <h3 className="font-display text-3xl font-bold text-[var(--tx-1)] lg:text-4xl">
              Un partner unico per tutto.
            </h3>
            <p className="mt-4 max-w-lg font-sans text-base font-light leading-relaxed text-[var(--tx-2)]">
              Per i clienti Fulgur, oltre alle pulizie gestiamo anche manutenzione idraulica, edile ed elettrica ordinaria. Un solo referente per tutto ciò che riguarda i tuoi spazi.
            </p>
          </div>

          {/* Right Grid Services */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {integratedServices.map((service, i) => {
              const Icon = IntIconMap[service.icon] || Lightning
              return (
                <div key={i} className="flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-3)] text-[var(--accent)] shadow-sm border border-[var(--br)]">
                    <Icon size={20} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[var(--tx-1)]">
                      {service.title}
                    </h4>
                    <p className="mt-1 font-sans text-xs font-light text-[var(--tx-2)] lg:text-[13px]">
                      {service.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </SpotlightCard>
    </ScrollReveal>
  )
}
