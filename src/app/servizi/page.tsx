import React from 'react'
import type { Metadata } from 'next'
import { METADATA, makeBreadcrumbsJsonLd } from '@/lib/seo'
import { SERVICES, INTEGRATED_SERVICES } from '@/lib/services-data'
import { ServiceCard } from '@/components/servizi/ServiceCard'
import { CTASection } from '@/components/home/CTASection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import * as Icons from '@phosphor-icons/react/dist/ssr'
import { FAQSection } from '@/components/ui/FAQSection'
import { IntegratedBento } from '@/components/servizi/IntegratedBento'
import { TrustBar } from '@/components/ui/TrustBar'

export const metadata: Metadata = {
  title: METADATA.servizi.title,
  description: METADATA.servizi.description,
  openGraph: METADATA.servizi.openGraph,
}

export default function ServiziPage() {
  const breadcrumbsJsonLd = makeBreadcrumbsJsonLd([
    { name: 'Home', item: '/' },
    { name: 'Servizi', item: '/servizi' },
  ])

  return (
    <main className="min-h-[100dvh] bg-[var(--bg)] pt-32 pb-0 sm:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      
      {/* HEADER SERVIZI */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8 mb-8 text-center flex flex-col items-center">
        <Breadcrumbs 
          items={[{ label: 'Servizi', href: '/servizi', active: true }]} 
          className="mb-8"
        />
        <SectionLabel className="mb-4">I NOSTRI SERVIZI</SectionLabel>
        <h1 className="font-display text-[32px] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--tx-1)] max-w-4xl text-balance leading-[1.1] pb-1">
          Ogni ambiente ha bisogno di una <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--br-h)]">cura specifica.</span>
        </h1>
        <p className="mt-4 sm:mt-6 font-sans text-base sm:text-lg font-light text-[var(--tx-2)] max-w-2xl leading-relaxed mb-6 sm:mb-8 text-balance">
          Scegliamo attrezzature, prodotti e protocolli in base alle tue esatte esigenze. Scopri le 16 aree in cui possiamo fare la differenza.
        </p>
        
        {/* INFO PILLS */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {["16 Aree", "Parma e Provincia", "Sopralluogo Gratuito"].map((pill) => (
            <span key={pill} className="bg-[var(--bg-2)] border border-[var(--br)] font-mono-fulgur text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[var(--tx-3)] rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
              {pill}
            </span>
          ))}
        </div>
      </div>

      <TrustBar />

      {/* GRID COMPLETA 12 SERVIZI */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8 mt-10 sm:mt-12 mb-16 sm:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Riga 1: Grande (Pulizie Aziendali) + Media (Settore Sanitario) */}
          <ServiceCard service={SERVICES.find(s => s.slug === 'pulizie-aziendali')!} index={0} size="large" />
          <ServiceCard service={SERVICES.find(s => s.slug === 'settore-sanitario')!} index={1} size="medium" />

          {/* Riga 2: Media (Trattamento Superfici) + Grande (Pulizie Industriali) */}
          <ServiceCard service={SERVICES.find(s => s.slug === 'trattamento-superfici')!} index={2} size="medium" />
          <ServiceCard service={SERVICES.find(s => s.slug === 'pulizie-industriali')!} index={3} size="large" />

          {/* Restanti card */}
          {SERVICES.filter(s => !['pulizie-aziendali', 'settore-sanitario', 'trattamento-superfici', 'pulizie-industriali'].includes(s.slug)).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index + 4} size="medium" />
          ))}
        </div>
      </div>

      {/* SEZIONE IMPRESA 360 (BENTO) */}
      <IntegratedBento />

      <FAQSection />

      {/* CTA SECTION A PIE' PAGINA */}
      <CTASection />

    </main>
  )
}
