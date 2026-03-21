'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { CTASection } from '@/components/home/CTASection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { MachineryModal } from '@/components/ui/MachineryModal'
import { MACHINERY_DATA, MachineBrand } from '@/lib/machinery-data'

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

export function MacchinariClient() {
  const [selectedBrand, setSelectedBrand] = useState<MachineBrand | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleBrandClick = (brandName: string) => {
    const data = MACHINERY_DATA.find(b => b.name.toLowerCase().includes(brandName.toLowerCase()))
    if (data) {
      setSelectedBrand(data)
      setIsModalOpen(true)
    }
  }

  return (
    <main className="bg-[var(--bg)] min-h-[100dvh]">

      {/* ── HERO VIDEO ── */}
      <section className="relative flex h-[100dvh] items-center justify-center overflow-hidden">
        {/* Video sfondo */}
        <video
          suppressHydrationWarning
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          poster="/images/team-operatori-pulizie-professionali-parma.webp"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        >
          <source src="/videos/pulizie-industriali-macchinari-parma.mp4" type="video/mp4" />
        </video>

        {/* Overlay scuro + gradiente in basso per fade verso contenuto bianco */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(5,10,15,0.7) 0%, rgba(5,10,15,0.65) 60%, rgba(5,10,15,0.95) 100%)',
          }}
        />

        {/* Accent glow verde dal basso */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 40% at 50% 110%, rgba(78,203,160,0.18), transparent)',
          }}
        />

        {/* Contenuto centrato */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-20 pb-16 text-center">
          <ScrollReveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                Le nostre attrezzature
              </span>
            </div>

            <h1
              className="font-display font-extrabold tracking-tight text-white text-balance"
              style={{ fontSize: 'clamp(40px, 6vw, 84px)', lineHeight: 1.05 }}
            >
              Potenza industriale,{' '}
              <span className="text-[var(--accent)]">risultati chirurgici.</span>
            </h1>

            <p className="mt-6 font-body text-lg font-light text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              L&apos;esperienza umana fa la differenza, ma senza i macchinari giusti
              è impossibile raggiungere l&apos;eccellenza. Investiamo continuamente
              nei migliori marchi mondiali di cleaning industriale.
            </p>
          </ScrollReveal>
        </div>

        {/* Freccia scroll giù */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="font-mono-fulgur text-[9px] uppercase tracking-[0.2em]">Scopri</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
            <path d="M8 0v20M1 13l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ARSENALE MACCHINARI */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 pt-20 mb-32">

        {/* ── Gruppo "Lavaggio Principale" ── */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">— Lavaggio Principale</span>
            <div className="flex-1 h-px bg-[var(--br)]" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ScrollReveal delay={0.1}>
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-[var(--br)] bg-[var(--bg-2)] shadow-lg hover:shadow-[0_30px_60px_rgba(78,203,160,0.15)] hover:-translate-y-1 transition-all duration-700">
              <Image
                src="/images/macchinari-pulizie-professionali.jpg"
                alt="Lavasciuga pavimenti professionale per grandi superfici"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-1 block">Lavaggio superfici</span>
                <h3 className="font-display text-xl font-bold text-white mb-1">Lavasciuga</h3>
                <p className="font-sans text-sm text-white/70">Uomo a bordo e guidata a piedi per grandi superfici commerciali e industriali. Massima efficienza su ogni pavimento.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-[var(--br)] bg-[var(--bg-2)] shadow-lg hover:shadow-[0_30px_60px_rgba(78,203,160,0.15)] hover:-translate-y-1 transition-all duration-700">
              <Image
                src="/images/macchinari/monospazzola-lucidatrice-parma-klindex.png"
                alt="Levigatrice Klindex per cristallizzazione marmo e superfici dure"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-1 block">Trattamento superfici</span>
                <h3 className="font-display text-xl font-bold text-white mb-1">Levigatrici</h3>
                <p className="font-sans text-sm text-white/70">Punte di diamante Klindex per cristallizzazione marmo, ripristino gres e oliatura parquet. Risultati irraggiungibili.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Tre card singole ── */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6 mt-10">
            <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">— Igiene & Aspirazione</span>
            <div className="flex-1 h-px bg-[var(--br)]" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sistemi di aspirazione — ha immagine */}
          <ScrollReveal delay={0.1}>
            <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--br)] bg-[var(--bg-2)] shadow-lg hover:shadow-[0_30px_60px_rgba(78,203,160,0.15)] hover:-translate-y-1 transition-all duration-700">
              <Image
                src="/images/macchinari/aspiratore-industriale-polveri-cfm-parma.png"
                alt="Aspiratore industriale CFM per polveri sottili in ambienti logistici"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-1 block">Potenza industriale</span>
                <h3 className="font-display text-xl font-bold text-white mb-1">Sistemi di Aspirazione</h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed">Filtri HEPA H14 e aspiratori CFM ad alta portata per polveri sottili in capannoni e cantieri.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Macchine a vapore — card con design */}
          <ScrollReveal delay={0.2}>
            <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--br)] bg-gradient-to-br from-[var(--bg-2)] to-[var(--bg-3)] shadow-lg hover:shadow-[0_30px_60px_rgba(78,203,160,0.15)] hover:-translate-y-1 transition-all duration-700">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="h-20 w-20 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center mb-6 group-hover:bg-[var(--accent)]/20 transition-colors">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                    <path d="M20 8 C20 8, 14 14, 14 20 C14 26, 17 29, 20 32 C23 29, 26 26, 26 20 C26 14, 20 8, 20 8Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-[var(--accent)]"/>
                    <path d="M12 16 C12 16, 8 20, 8 24 C8 28, 10 30, 12 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-[var(--accent)]/60"/>
                    <path d="M28 16 C28 16, 32 20, 32 24 C32 28, 30 30, 28 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-[var(--accent)]/60"/>
                    <text x="13" y="22" fontSize="8" fontWeight="bold" fill="currentColor" className="text-[var(--accent)]" fontFamily="monospace">180°</text>
                  </svg>
                </div>
                <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-2 block text-center">Igiene naturale</span>
                <h3 className="font-display text-xl font-bold text-[var(--tx-1)] mb-3 text-center">Vapore 180°C</h3>
                <p className="font-sans text-sm text-[var(--tx-2)] leading-relaxed text-center">Sanificazione ecologica senza chimica aggressiva. Elimina il 99.9% di virus e batteri ad alta temperatura.</p>
              </div>
              <div className="absolute inset-0 border-2 border-[var(--accent)]/0 group-hover:border-[var(--accent)]/20 rounded-3xl transition-all duration-500" />
            </div>
          </ScrollReveal>

          {/* Macchine a osmosi — card con design */}
          <ScrollReveal delay={0.3}>
            <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--br)] bg-gradient-to-br from-[var(--bg-2)] to-[var(--bg-3)] shadow-lg hover:shadow-[0_30px_60px_rgba(78,203,160,0.15)] hover:-translate-y-1 transition-all duration-700">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="h-20 w-20 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center mb-6 group-hover:bg-[var(--accent)]/20 transition-colors">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                    <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--accent)]"/>
                    <path d="M20 8 L20 4M20 36 L20 32M8 20 L4 20M36 20 L32 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-[var(--accent)]/60"/>
                    <path d="M15 20 C15 20, 17 17, 20 17 C23 17, 25 20, 25 20 C25 20, 23 23, 20 23 C17 23, 15 20, 15 20Z" fill="currentColor" className="text-[var(--accent)]/30"/>
                    <circle cx="20" cy="20" r="3" fill="currentColor" className="text-[var(--accent)]"/>
                  </svg>
                </div>
                <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-2 block text-center">Pulizia a osmosi</span>
                <h3 className="font-display text-xl font-bold text-[var(--tx-1)] mb-3 text-center">Osmosi Inversa</h3>
                <p className="font-sans text-sm text-[var(--tx-2)] leading-relaxed text-center">Acqua purissima a zero residui calcarei. Ideale per vetrate, pannelli fotovoltaici e superfici di pregio.</p>
              </div>
              <div className="absolute inset-0 border-2 border-[var(--accent)]/0 group-hover:border-[var(--accent)]/20 rounded-3xl transition-all duration-500" />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* GRID BRANDS */}
      <div className="w-full bg-[var(--bg-3)] py-24 border-y border-[var(--br)]">
        <div className="mx-auto w-full max-w-6xl px-6 xl:px-8">
          <SectionLabel className="mb-12 text-center">— I NOSTRI BRAND PARTNER</SectionLabel>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {BRANDS.map((brand, i) => {
              const hasData = MACHINERY_DATA.some(b => b.name.toLowerCase().includes(brand.name.toLowerCase()))
              
              return (
                <ScrollReveal key={i} delay={i * 0.05} className="h-full">
                  <button 
                    onClick={() => handleBrandClick(brand.name)}
                    disabled={!hasData}
                    className={`flex h-full w-full items-center justify-center p-8 rounded-2xl bg-[var(--bg)] border border-[var(--br)] transition-all duration-500 group min-h-[140px] relative overflow-hidden ${
                      hasData ? 'cursor-pointer hover:border-[var(--accent)]/50 hover:shadow-[0_15px_30px_rgba(78,203,160,0.15)] hover:-translate-y-1' : 'cursor-default opacity-60'
                    }`}
                  >
                    {/* Subtle Background Glow on Hover */}
                    {hasData && <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />}
                    
                    <div className="relative w-full h-12 z-10 flex flex-col items-center justify-center">
                      <Image
                        src={brand.logo}
                        alt={`Logo ${brand.name} — partner macchinari Fulgur Service`}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 brightness-[0.9] group-hover:brightness-100 transition-all duration-500 scale-[0.85] group-hover:scale-[1.05]"
                        sizes="180px"
                      />
                    </div>

                    {hasData && (
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="text-[8px] font-mono-fulgur font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded border border-[var(--accent)]/20">
                            TECH INFO
                         </div>
                      </div>
                    )}
                  </button>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>

      {/* RATIONALE DESC */}
      <div className="mx-auto w-full max-w-4xl px-6 xl:px-8 py-24 text-center">
        <ScrollReveal>
          <h3 className="font-display text-3xl font-bold text-[var(--tx-1)] mb-6">Perché scegliamo questi Partner?</h3>
          <p className="font-sans text-lg font-light text-[var(--tx-2)] leading-relaxed mb-6">
            Siamo partner dei top player del settore perché non accettiamo compromessi sulla qualità dell&apos;aria (filtri HEPA H14, sistemi di captazione polveri), sulla potenza di aspirazione e sulla meccanica dei ponti lavanti.
          </p>
          <p className="font-sans text-lg font-light text-[var(--tx-2)] leading-relaxed">
            Le nostre monospazzole per la cristallizzazione (es. <em>Klindex</em> o <em>Künzle & Tasin</em>) e i sistemi di sanificazione al vapore continuo a 180° garantiscono trattamenti irraggiungibili con macchinari commerciali, preservando le superfici pregiate senza usare agenti chimici inutili.
          </p>
        </ScrollReveal>
      </div>

      {/* CTA SECTION A PIE' PAGINA */}
      <CTASection />

      <MachineryModal 
        brand={selectedBrand} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  )
}
