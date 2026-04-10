import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { TOWNS } from '@/lib/towns-data'
import { makeServiceJsonLd, makeBreadcrumbsJsonLd } from '@/lib/seo'
import { SectionLabel } from '@/components/ui/SectionLabel'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TrustBar } from '@/components/ui/TrustBar'
import { IntegratedBento } from '@/components/servizi/IntegratedBento'
import { CTASection } from '@/components/home/CTASection'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { MapPin, ShieldCheck, Clock } from '@phosphor-icons/react/dist/ssr'

interface TownPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: TownPageProps): Promise<Metadata> {
  const town = TOWNS.find(t => t.slug === params.slug)
  if (!town) return {}

  return {
    title: town.metaTitle,
    description: town.metaDescription,
    alternates: {
      canonical: `https://www.fulgurservice.it/zone/${town.slug}`
    }
  }
}

export async function generateStaticParams() {
  return TOWNS.map((town) => ({
    slug: town.slug,
  }))
}

export default function TownPage({ params }: TownPageProps) {
  const town = TOWNS.find(t => t.slug === params.slug)
  if (!town) notFound()

  // SEO: Create Service JSON-LD with AreaServed and Breadcrumbs
  const serviceJsonLd = makeServiceJsonLd({
    title: `Impresa di Pulizie Professionali a ${town.name}`,
    shortDesc: town.heroSub,
    slug: `zone/${town.slug}`, // Non usato direttamente dal helper ma passato per coerenza
    metaDescription: town.metaDescription,
  })
  
  // Override areaServed specifically for the town
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(serviceJsonLd as any).areaServed = {
    '@type': 'City',
    name: town.name,
    addressCountry: 'IT',
  }

  const breadcrumbsJsonLd = makeBreadcrumbsJsonLd([
    { name: 'Home', item: '/' },
    { name: 'Zone', item: '/zone' },
    { name: town.name, item: `/zone/${town.slug}` },
  ])

  return (
    <main className="bg-[var(--bg)] min-h-[100dvh]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      {/* LOCAL HERO */}
      <section className="relative pt-32 pb-24 sm:pt-48 sm:pb-32 overflow-hidden border-b border-[var(--br)]">

        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 relative z-10 text-center flex flex-col items-center">
            <ScrollReveal>
              <div className="mb-8">
                 <StatusBadge icon={MapPin} text={`Operativi a ${town.name}`} color="accent" />
              </div>
              
              <h1 className="font-display text-5xl font-extrabold text-[var(--tx-1)] sm:text-7xl lg:text-8xl mb-8 tracking-tighter max-w-5xl leading-[0.95] text-balance">
                {town.heroTitle.split(' ').map((word, i) => (
                  <span key={i} className={i === town.heroTitle.split(' ').length - 1 ? "text-[var(--accent)]" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h1>

              <p className="font-sans text-xl sm:text-2xl font-light text-[var(--tx-2)] leading-relaxed max-w-2xl mb-12 text-balance italic">
                {town.heroSub}
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                 {[
                   { label: town.keySector, icon: ShieldCheck },
                   { label: town.keyBenefit, icon: Clock },
                 ].map((badge, i) => (
                   <div key={i} className="flex items-center gap-2 font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--tx-3)] bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                      <badge.icon size={16} className="text-[var(--accent)]" />
                      {badge.label}
                   </div>
                 ))}
              </div>
            </ScrollReveal>
        </div>
      </section>

      {/* LOCAL CONTENT */}
      <div className="w-full bg-[var(--bg-2)] py-24 border-b border-[var(--br)]">
        <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <ScrollReveal>
                <SectionLabel className="mb-6">— TERRITORIO E QUALITÀ</SectionLabel>
                <h2 className="font-display text-4xl font-bold text-white mb-8">
                  Perché scegliere Fulgur Service a <span className="text-[var(--accent)] text-stroke-thin">{town.name}</span>
                </h2>
                <div className="font-sans text-lg font-light text-[var(--tx-2)] leading-relaxed space-y-6">
                   <p>{town.description}</p>
                   <p>
                      Conosciamo bene le esigenze delle aziende e dei privati di <strong>{town.name}</strong>. 
                      La nostra struttura logistica ci permette di garantire puntualità svizzera e una 
                      presenza costante sul territorio parmense.
                   </p>
                </div>
             </ScrollReveal>

             <ScrollReveal delay={0.2}>
                <div className="glass-premium p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
                   <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--accent)]/10 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-1000" />
                   <h3 className="font-display text-2xl font-bold text-white mb-6">Pronto Intervento Local</h3>
                   <ul className="space-y-4">
                     {[
                       'Sopralluogo gratuito in 24h a ' + town.name,
                       'Referente unico dedicato per la zona',
                       'Squadre locali per abbattere i tempi',
                       'Prodotti eco-sostenibili certificati',
                     ].map((li, i) => (
                       <li key={i} className="flex items-center gap-3 font-sans text-[var(--tx-2)]">
                          <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                          {li}
                       </li>
                     ))}
                   </ul>
                </div>
             </ScrollReveal>
          </div>
        </div>
      </div>

      <TrustBar />
      
      <div className="py-24">
         <SectionLabel className="mb-12 text-center">— I NOSTRI SERVIZI A {town.name.toUpperCase()}</SectionLabel>
         <ServicesGrid />
      </div>

      <IntegratedBento />
      <CTASection />
      
    </main>
  )
}
