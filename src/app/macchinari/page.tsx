import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { METADATA } from '@/lib/seo'
import { CTASection } from '@/components/home/CTASection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'I Nostri Macchinari Partner | Fulgur Service Parma',
  description: 'Scopri i brand industriali professionali con cui operiamo: CFM, Lindhaus, Nilfisk, Klindex e molti altri. Strumentazione certificata per altissime prestazioni.',
}

const BRANDS = [
  { name: 'Klindex', logo: '/images/macchinari/klindex.png' },
  { name: 'Kiter', logo: '/images/macchinari/kiter.png' },
  { name: 'CFM Lombardia', logo: '/images/macchinari/cfm-lombardia.png' },
  { name: 'Lindhaus', logo: '/images/macchinari/lindhaus.jpg' },
  { name: 'Pulitalia', logo: '/images/macchinari/pulitalia.png' },
  { name: 'Viking', logo: '/images/macchinari/viking.jpg' },
  { name: 'Pulivax', logo: '/images/macchinari/pulivax.png' },
  { name: 'Nilfisk', logo: '/images/macchinari/nilfisk.png' },
  { name: 'Künzle & Tasin', logo: '/images/macchinari/kunzle-tasin.jpg' },
  { name: 'Gioel', logo: '/images/macchinari/gioel.svg' },
]

const GALLERY_MACHINERY = [
  {
    src: '/images/macchinari-pulizie-professionali.jpg',
    alt: 'Macchinari per pulizie industriali professionali — Fulgur Service',
    title: 'Potenza Industriale',
    desc: 'Lavasciuga e motospazzole ad alto rendimento.'
  },
  {
    src: '/images/trattamento-superfici-parma.jpg',
    alt: 'Trattamento professionale superfici — Fulgur Service',
    title: 'Precisione Marmi',
    desc: 'Cristallizzatrici Klindex per risultati specchiati.'
  },
  {
    src: '/images/fulgur-service-pulizie-sostenibili.jpg',
    alt: 'Macchinari eco-sostenibili — Fulgur Service',
    title: 'Eco-Cleaning',
    desc: 'Sistemi a basso consumo d\'acqua e detergente.'
  }
]

export default function MacchinariPage() {
  return (
    <main className="bg-[var(--bg)] min-h-screen pt-32 sm:pt-40">
      
      {/* HEADER */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 mb-20 text-center flex flex-col items-center">
        <ScrollReveal>
          <SectionLabel className="mb-4">— LE NOSTRE ATTREZZATURE</SectionLabel>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl lg:text-6xl max-w-4xl">
            Potenza industriale,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--br-h)] to-[var(--accent)]">
              risultati chirurgici.
            </span>
          </h1>
          <p className="mt-8 font-sans text-lg lg:text-xl font-light text-[var(--tx-2)] max-w-2xl leading-relaxed text-balance">
            L'esperienza umana fa la differenza, ma senza i macchinari giusti è impossibile raggiungere l'eccellenza.
            Investiamo continuamente nei migliori marchi mondiali di cleaning industriale.
          </p>
        </ScrollReveal>
      </div>

      {/* SECTION: GALLERY MACHINERY */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 mb-32">
        <ScrollReveal>
          <SectionLabel className="mb-10 text-center justify-center">— MACCHINARI IN AZIONE</SectionLabel>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GALLERY_MACHINERY.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--br)] bg-[var(--bg-2)] shadow-sm">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-2)]/80 via-[var(--bg-2)]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-xl font-bold text-[var(--tx-1)] mb-1 uppercase tracking-tight">{item.title}</h3>
                  <p className="font-sans text-sm text-[var(--tx-2)] font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* GRID BRANDS */}
      <div className="w-full bg-[var(--bg-3)] py-24 border-y border-[var(--br)]">
        <div className="mx-auto w-full max-w-6xl px-6 xl:px-8">
          <SectionLabel className="mb-12 text-center">— I NOSTRI BRAND PARTNER</SectionLabel>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {BRANDS.map((brand, i) => (
              <ScrollReveal key={i} delay={i * 0.05} className="h-full">
                <div className="flex h-full items-center justify-center p-8 rounded-2xl bg-[var(--bg)] border border-[var(--br)] hover:border-[var(--accent)]/50 hover:shadow-[0_0_20px_rgba(78,203,160,0.1)] transition-all group min-h-[140px]">
                  <div className="relative w-full h-12">
                    <Image
                      src={brand.logo}
                      alt={`Logo ${brand.name} — partner macchinari Fulgur Service`}
                      fill
                      className="object-contain filter brightness-[0.9] contrast-[1.1] group-hover:brightness-110 transition-all"
                      sizes="180px"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* RATIONALE DESC */}
      <div className="mx-auto w-full max-w-4xl px-6 xl:px-8 py-24 text-center">
        <ScrollReveal>
          <h3 className="font-display text-3xl font-bold text-[var(--tx-1)] mb-6">Perché scegliamo questi Partner?</h3>
          <p className="font-sans text-lg font-light text-[var(--tx-2)] leading-relaxed mb-6">
            Siamo partner dei top player del settore perché non accettiamo compromessi sulla qualità dell'aria (filtri HEPA H14, sistemi di captazione polveri), sulla potenza di aspirazione e sulla meccanica dei ponti lavanti.
          </p>
          <p className="font-sans text-lg font-light text-[var(--tx-2)] leading-relaxed">
            Le nostre monospazzole per la cristallizzazione (es. <em>Klindex</em> o <em>Künzle & Tasin</em>) e i sistemi di sanificazione al vapore continuo a 180° garantiscono trattamenti irraggiungibili con macchinari commerciali, preservando le superfici pregiate senza usare agenti chimici inutili.
          </p>
        </ScrollReveal>
      </div>

      {/* CTA SECTION A PIE' PAGINA */}
      <CTASection />

    </main>
  )
}
