import React from 'react'
import Link from 'next/link'
import { SERVICES } from '@/lib/services-data'
import { ServiceCard } from '@/components/servizi/ServiceCard'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function ServicesGrid() {
  // Row 1 & 2 specific targets
  const aziendali = SERVICES.find((s) => s.slug === 'pulizie-aziendali')!
  const sanitario = SERVICES.find((s) => s.slug === 'settore-sanitario')!
  const superfici = SERVICES.find((s) => s.slug === 'trattamento-superfici')!
  const industriali = SERVICES.find((s) => s.slug === 'pulizie-industriali')!

  // Row 3: 3 specific cards
  const row3Slugs = ['pulizie-condomini', 'settore-alberghiero', 'pulizie-fine-cantiere']
  const row3Cards = SERVICES.filter((s) => row3Slugs.includes(s.slug))

  // Row 4: all others
  const usedSlugs = ['pulizie-aziendali', 'settore-sanitario', 'trattamento-superfici', 'pulizie-industriali', ...row3Slugs]
  const remainingServices = SERVICES.filter((s) => !usedSlugs.includes(s.slug))

  return (
    <section className="relative w-full bg-white py-16 lg:py-24 border-y border-[var(--br)]" id="servizi">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
        
        {/* Header Section */}
        <div className="mb-16 max-w-2xl sm:mb-20">
          <SectionLabel className="mb-4">— I NOSTRI SERVIZI</SectionLabel>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl">
            Ogni ambiente, <br /> un'unica soluzione.
          </h2>
          <p className="mt-6 font-sans text-lg font-light text-[var(--tx-2)]">
            12 settori di intervento con team specializzato e macchinari professionali.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="flex flex-col gap-6">
          {/* Row 1: Large + Medium (2-1) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ServiceCard service={aziendali} size="large" index={0} />
            <ServiceCard service={sanitario} size="medium" index={1} />
          </div>

          {/* Row 2: Medium + Large (1-2) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ServiceCard service={superfici} size="medium" index={2} />
            <ServiceCard service={industriali} size="large" index={3} />
          </div>

          {/* Row 3: 3 Mediums (1-1-1) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {row3Cards.map((service, idx) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                size="medium" 
                index={4 + idx} 
              />
            ))}
          </div>

          {/* Row 4: Remaining (Auto-fit) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {remainingServices.map((service, idx) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                size="small" 
                index={7 + idx} 
              />
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-12 flex justify-center">
          <Link 
            href="/servizi" 
            className="group flex items-center gap-2 font-display text-sm font-bold text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors"
          >
            <span>Vedi tutti i 12 servizi</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
