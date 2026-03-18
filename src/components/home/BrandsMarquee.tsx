'use client'

import React from 'react'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface BrandItem {
  name: string
  logo: string | null
  ext: 'png' | 'jpg' | 'svg'
}

const BRANDS: BrandItem[] = [
  { name: 'Klindex',        logo: '/images/macchinari/klindex',      ext: 'png' },
  { name: 'Kiter',          logo: '/images/macchinari/kiter',        ext: 'png' },
  { name: 'CFM Lombardia',  logo: '/images/macchinari/cfm-lombardia', ext: 'png' },
  { name: 'Lindhaus',       logo: '/images/macchinari/lindhaus',     ext: 'jpg' },
  { name: 'Pulitalia',      logo: '/images/macchinari/pulitalia',    ext: 'png' },
  { name: 'Viking',         logo: '/images/macchinari/viking',       ext: 'jpg' },
  { name: 'Pulivax',        logo: '/images/macchinari/pulivax',      ext: 'png' },
  { name: 'Nilfisk',        logo: '/images/macchinari/nilfisk',      ext: 'png' },
  { name: 'Künzle & Tasin', logo: '/images/macchinari/kunzle-tasin', ext: 'jpg' },
  { name: 'Gioel',          logo: '/images/macchinari/gioel',        ext: 'svg' },
]

// Triple the array for seamless infinite loop
const MARQUEE_ITEMS = [...BRANDS, ...BRANDS, ...BRANDS]

function BrandPill({ brand }: { brand: BrandItem }) {
  const src = `${brand.logo}.${brand.ext}`
  return (
    <div className="flex shrink-0 items-center justify-center rounded-xl border border-[var(--br)] bg-[var(--bg-card)] px-6 py-3 shadow-sm transition-all hover:border-[var(--accent)] hover:shadow-[0_10px_30px_rgba(42,140,122,0.1)] min-w-[140px] h-[68px]">
      {brand.logo ? (
        <div className="relative h-10 w-28 flex items-center justify-center">
          <Image
            src={src}
            alt={`Logo ${brand.name} — macchinario partner Fulgur Service`}
            fill
            className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            sizes="120px"
            unoptimized={brand.ext === 'svg'}
          />
        </div>
      ) : (
        <span className="font-mono-fulgur text-sm tracking-wide text-[var(--tx-2)]">{brand.name}</span>
      )}
    </div>
  )
}

export function BrandsMarquee() {
  return (
    <section className="relative w-full overflow-hidden border-y border-[var(--br)] bg-[var(--bg)] py-16 lg:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 xl:px-8">
        <SectionLabel className="mb-12">— OPERIAMO CON I MIGLIORI MACCHINARI</SectionLabel>
      </div>

      <div className="relative flex w-full flex-col gap-6 overflow-hidden group">
        
        {/* Row 1: Scorre verso destra (reverse) */}
        <div className="flex w-max animate-marquee-reverse gap-6 group-hover:[animation-play-state:paused]">
          {MARQUEE_ITEMS.map((brand, i) => (
            <BrandPill key={`row1-${i}`} brand={brand} />
          ))}
        </div>

        {/* Row 2: Scorre verso sinistra */}
        <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
          {MARQUEE_ITEMS.map((brand, i) => (
            <BrandPill key={`row2-${i}`} brand={brand} />
          ))}
        </div>

        {/* Gradienti sfumati ai lati */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent sm:w-32" />
      </div>
    </section>
  )
}
