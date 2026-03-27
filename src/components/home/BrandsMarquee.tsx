'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'

const BRANDS = [
  { name: 'Klindex',        logo: '/images/macchinari/klindex.png' },
  { name: 'Kiter',          logo: '/images/macchinari/kiter.png' },
  { name: 'CFM Lombardia',  logo: '/images/macchinari/cfm-lombardia.png' },
  { name: 'Lindhaus',       logo: '/images/macchinari/lindhaus.jpg' },
  { name: 'Pulitalia',      logo: '/images/macchinari/pulitalia.png' },
  { name: 'Viking',         logo: '/images/macchinari/viking.jpg' },
  { name: 'Pulivax',        logo: '/images/macchinari/pulivax.png' },
  { name: 'Nilfisk',        logo: '/images/macchinari/nilfisk.png' },
  { name: 'Künzle & Tasin', logo: '/images/macchinari/kunzle-tasin.jpg' },
  { name: 'Gioel',          logo: '/images/macchinari/gioel.svg' },
  { name: 'EU Ecolabel',    logo: '/images/macchinari/ecolabel.png' },
]

const EASE = [0.16, 1, 0.3, 1] as const

export function BrandsMarquee() {
  return (
    <section className="relative w-full border-y border-[var(--br)] bg-[var(--bg-2)] py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <SectionLabel className="mb-4">— I NOSTRI PARTNER</SectionLabel>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--tx-1)] text-balance">
              Operiamo con i migliori<br className="hidden sm:block" />
              {' '}<span className="text-[var(--accent)]">macchinari al mondo.</span>
            </h2>
          </div>
          <Link
            href="/macchinari"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--br-h)] bg-white px-5 py-2.5 font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--tx-2)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors shrink-0 self-start sm:self-auto"
          >
            Scopri tutti
            <ArrowUpRight size={12} weight="bold" />
          </Link>
        </div>

        {/* Brands grid — stagger reveal */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: EASE }}
            >
              <Link
                href="/macchinari"
                className="group flex min-h-[56px] sm:h-24 items-center justify-center rounded-2xl border border-[var(--br)] bg-white px-4 py-3 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_8px_24px_rgba(78,203,160,0.12)] hover:-translate-y-0.5"
              >
                <div className="relative h-10 w-full">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} — partner Fulgur Service`}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-400"
                    sizes="(max-width: 640px) 140px, (max-width: 1024px) 160px, 180px"
                    unoptimized={brand.logo.endsWith('.svg')}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center font-mono-fulgur text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--tx-3)]"
        >
          Strumentazione professionale certificata per ogni tipologia di intervento
        </motion.p>
      </div>
    </section>
  )
}
