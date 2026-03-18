'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SERVICES, INTEGRATED_SERVICES } from '@/lib/services-data'
import { ServiceCard } from '@/components/servizi/ServiceCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ParallaxText } from '@/components/ui/ParallaxText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import {
  Drop, Wrench, Recycle, Lightning,
  Buildings, Factory, FirstAidKit, BuildingApartment,
  Bed, Sparkle, HardHat, ArrowsOutSimple, Sun,
  Anchor, Wind, House
} from '@phosphor-icons/react'

const IntegratedIconMap: Record<string, React.ElementType> = {
  Drop, Wrench, Recycle, Lightning,
}
const ServiceIconMap: Record<string, React.ElementType> = {
  Buildings, Factory, FirstAidKit, BuildingApartment,
  Bed, Sparkle, HardHat, ArrowsOutSimple, Sun,
  Anchor, Wind, House
}

export function ServicesGrid() {
  // Row 1: Aziendali (large) + Sanitario (medium)
  const aziendali  = SERVICES.find((s) => s.slug === 'pulizie-aziendali')!
  const sanitario  = SERVICES.find((s) => s.slug === 'settore-sanitario')!

  // Row 2: Superfici (medium) + Industriali (large)
  const superfici  = SERVICES.find((s) => s.slug === 'trattamento-superfici')!
  const industriali = SERVICES.find((s) => s.slug === 'pulizie-industriali')!

  // Row 3: 3 medium cards
  const row3Slugs = ['pulizie-condomini', 'settore-alberghiero', 'pulizie-fine-cantiere']
  const row3Cards = SERVICES.filter((s) => row3Slugs.includes(s.slug))

  // Row 4: remaining — shown as a horizontal scrollable pill strip
  const usedSlugs = ['pulizie-aziendali', 'settore-sanitario', 'trattamento-superfici', 'pulizie-industriali', ...row3Slugs]
  const remainingServices = SERVICES.filter((s) => !usedSlugs.includes(s.slug))

  return (
    <section className="relative w-full bg-white py-16 lg:py-24 border-y border-[var(--br)] overflow-hidden" id="servizi">
      {/* Background Architectural Text */}
      <div className="absolute top-10 left-0 w-full opacity-[0.035] pointer-events-none select-none">
        <ParallaxText text="SERVIZI" direction="left" distance={150} />
      </div>

      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 max-w-2xl sm:mb-20">
          <SectionLabel className="mb-4">— I NOSTRI SERVIZI</SectionLabel>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl">
            Ogni ambiente, <br /> un'unica soluzione.
          </h2>
          <p className="mt-6 font-sans text-lg font-light text-[var(--tx-2)]">
            12 settori di intervento, team specializzato, preventivo in 24 ore.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="flex flex-col gap-6">
          {/* Row 1: Large(2) + Medium(1) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ServiceCard service={aziendali} size="large" index={0} />
            <ServiceCard service={sanitario} size="medium" index={1} />
          </div>

          {/* Row 2: Medium(1) + Large(2) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ServiceCard service={superfici} size="medium" index={2} />
            <ServiceCard service={industriali} size="large" index={3} />
          </div>

          {/* Row 3: 3 medium (1-1-1) */}
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

          {/* Row 4: Horizontal scrollable pill-strip of remaining */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              {/* Fade edges */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-l from-white to-transparent" />

              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
                {remainingServices.map((service, idx) => {
                  const Icon = ServiceIconMap[service.icon] || ServiceIconMap.Buildings
                  return (
                    <Link
                      key={service.id}
                      href={`/servizi/${service.slug}`}
                      className="flex-shrink-0 snap-start group"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.07, duration: 0.5 }}
                        className="flex flex-col items-start gap-3 rounded-2xl border border-[var(--br)] bg-[var(--bg-2)] p-5 w-[200px] sm:w-[230px] hover:border-[var(--accent)] hover:bg-[var(--accent-glow)] hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[var(--br)] group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-all duration-300">
                          <Icon
                            size={20}
                            weight="duotone"
                            className="text-[var(--accent)] group-hover:text-white transition-colors"
                          />
                        </div>
                        <div>
                          <div className="font-display text-sm font-bold text-[var(--tx-1)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                            {service.title}
                          </div>
                          <div className="mt-1 font-sans text-xs font-light text-[var(--tx-3)] line-clamp-2 leading-relaxed">
                            {service.shortDesc}
                          </div>
                        </div>
                        <div className="mt-auto font-mono-fulgur text-[9px] uppercase tracking-widest text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                          Scopri →
                        </div>
                      </motion.div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ────────────────────────────────────────── */}
        {/* IMPRESA 360° — Servizi Integrati */}
        {/* ────────────────────────────────────────── */}
        <div className="mt-20 relative overflow-hidden rounded-3xl border border-[var(--br)] bg-gradient-to-br from-[var(--bg-2)] to-[var(--bg-3)] p-10 lg:p-14">
          
          {/* Decorative glow */}
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--accent)] opacity-[0.06] blur-[80px] pointer-events-none" />
          
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
              
              {/* Left: Intro text */}
              <div>
                <SectionLabel className="mb-5">— IMPRESA 360°</SectionLabel>
                <h2 className="font-display text-3xl font-extrabold tracking-tight text-[var(--tx-1)] lg:text-4xl">
                  Un partner unico <br className="hidden sm:block" />
                  <span className="text-[var(--accent)]">per tutto.</span>
                </h2>
                <p className="mt-5 max-w-lg font-sans text-base font-light leading-relaxed text-[var(--tx-2)]">
                  Per i clienti Fulgur, oltre alle pulizie gestiamo anche manutenzione
                  idraulica, edile ed elettrica ordinaria. Un solo referente per tutto
                  ciò che riguarda i tuoi spazi.
                </p>
              </div>

              {/* Right: CTA */}
              <div className="flex flex-col items-start lg:items-end gap-4 self-center">
                <Link
                  href="/preventivo"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-3.5 font-display text-sm font-bold text-white shadow-lg transition-all hover:bg-[var(--accent-d)] hover:shadow-xl"
                >
                  Richiedi un sopralluogo
                </Link>
                <span className="font-mono-fulgur text-[10px] uppercase tracking-widest text-[var(--tx-3)]">
                  Sopralluogo gratuito · 24h
                </span>
              </div>
            </div>

            {/* Integrated service cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {INTEGRATED_SERVICES.map((service, idx) => {
                const Icon = IntegratedIconMap[service.icon] || Drop
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col gap-4 rounded-2xl border border-[var(--br)] bg-white p-6 shadow-sm hover:shadow-md hover:border-[var(--accent)] transition-all duration-300 group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-[var(--accent-glow)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors duration-300">
                      <Icon size={20} weight="duotone" className="text-[var(--accent)] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold text-[var(--tx-1)]">{service.title}</div>
                      <div className="mt-1.5 font-sans text-xs font-light text-[var(--tx-2)] leading-relaxed">{service.desc}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* View All Services CTA */}
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
