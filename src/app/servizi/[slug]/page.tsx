import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SERVICES } from '@/lib/services-data'
import { makeServiceJsonLd } from '@/lib/seo'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import * as Icons from '@phosphor-icons/react/dist/ssr'
import { CaretRight, CheckCircle, ArrowRight } from '@phosphor-icons/react/dist/ssr'

const BASE_URL = 'https://www.fulgurservice.it'
const OG_DEFAULT = `${BASE_URL}/og/default.jpg`

// STATIC GENERATION
export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${BASE_URL}/servizi/${service.slug}`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: `${service.title} — Fulgur Service Parma` }],
      locale: 'it_IT',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [OG_DEFAULT],
    },
  }
}

export default async function ServiceSlugPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const service = SERVICES.find((s) => s.slug === params.slug)

  if (!service) notFound()

  const IconComponent = (Icons as any)[service.icon] || Icons.Briefcase
  const jsonLd = makeServiceJsonLd(service)

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[var(--bg)] min-h-screen pt-32 sm:pt-40">

        {/* BREADCRUMBS */}
        <div className="mx-auto w-full max-w-4xl px-6 xl:px-8 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono-fulgur text-xs font-bold tracking-widest uppercase text-[var(--tx-3)]">
            <Link href="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
            <CaretRight size={12} aria-hidden="true" />
            <Link href="/servizi" className="hover:text-[var(--accent)] transition-colors">Servizi</Link>
            <CaretRight size={12} aria-hidden="true" />
            <span className="text-[var(--accent)]" aria-current="page">{service.title}</span>
          </nav>
        </div>

        {/* HERO DEL SERVIZIO */}
        <div className="mx-auto w-full max-w-4xl px-6 xl:px-8 mb-20">
          <ScrollReveal>
            <div
              className="h-20 w-20 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-8 border border-[var(--accent)]/20 shadow-[0_0_30px_rgba(78,203,160,0.15)]"
              aria-hidden="true"
            >
              <IconComponent size={40} weight="duotone" />
            </div>
            <h1 className="font-display text-4xl font-extrabold text-[var(--tx-1)] sm:text-6xl mb-6">
              {service.title}
            </h1>
            <p className="font-sans text-xl font-light text-[var(--tx-2)] sm:text-2xl leading-relaxed max-w-2xl border-l-2 border-[var(--accent)] pl-6 py-2">
              {service.shortDesc}
            </p>
          </ScrollReveal>
        </div>

        <div className="w-full bg-[var(--bg-2)] border-t border-[var(--br)] py-20">
          <div className="mx-auto w-full max-w-4xl px-6 xl:px-8">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16">

              {/* LATO SINISTRO (Contenuto Principale) */}
              <div className="flex flex-col gap-16">

                {/* DESCRIZIONE LUNGA */}
                <ScrollReveal>
                  <p className="font-sans font-light text-[var(--tx-2)] leading-relaxed text-lg">
                    {service.longDesc}
                  </p>
                </ScrollReveal>

                {/* BENEFITS */}
                <ScrollReveal>
                  <h2 className="font-display text-2xl font-bold text-[var(--tx-1)] mb-6">
                    Cosa include questo servizio
                  </h2>
                  <ul className="flex flex-col gap-4" role="list">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[var(--br)] shadow-sm">
                        <CheckCircle size={24} weight="fill" className="text-[var(--accent)] shrink-0" aria-hidden="true" />
                        <span className="font-sans text-[var(--tx-1)] font-medium pt-0.5">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>

              </div>

              {/* LATO DESTRO (Sidebar Info) */}
              <div className="flex flex-col gap-8">

                {/* A CHI E' RIVOLTO */}
                <div className="rounded-2xl border border-[var(--br)] bg-white p-6 shadow-sm">
                  <SectionLabel className="mb-5">— A CHI È RIVOLTO</SectionLabel>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {service.sectors.map((sector, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-[var(--bg-2)] border border-[var(--br)] font-sans text-sm text-[var(--tx-2)]">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TEASER IMPRESA 360 */}
                <div className="rounded-2xl border border-[var(--accent)] bg-[var(--accent)]/5 p-6 text-center">
                  <div className="inline-block p-3 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] mb-4" aria-hidden="true">
                    <Icons.Wrench size={24} weight="duotone" />
                  </div>
                  <h3 className="font-display text-[var(--tx-1)] font-bold text-lg mb-2">Servizi Integrati</h3>
                  <p className="font-sans text-[var(--tx-2)] text-sm mb-5 leading-relaxed">
                    Offriamo manutenzione idraulica, edile ed elettrica ordinaria direttamente coi nostri addetti.
                  </p>
                  <Link
                    href="/servizi"
                    className="font-mono-fulgur text-xs font-bold tracking-widest text-[var(--accent)] hover:brightness-110 uppercase flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
                  >
                    Scopri di più <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION DEDICATA AL SERVIZIO */}
        <div className="w-full bg-[var(--bg)] py-24 border-t border-[var(--br)]">
          <div className="mx-auto w-full max-w-3xl px-6 xl:px-8 text-center text-balance flex flex-col items-center">
            <SectionLabel className="mb-4">— INIZIAMO</SectionLabel>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[var(--tx-1)] mb-6">
              Richiedi un preventivo per {service.title}
            </h2>
            <p className="font-sans text-lg font-light text-[var(--tx-2)] mb-10">
              Sopralluogo gratuito e preventivo su misura garantito entro 24 ore.
            </p>
            <Link
              href="/preventivo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--accent)] shadow-[0_0_20px_rgba(78,203,160,0.3)] font-display text-base font-bold text-[var(--bg)] hover:scale-105 active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            >
              Richiedi Sopralluogo Gratuito
            </Link>
          </div>
        </div>

      </main>
    </>
  )
}
