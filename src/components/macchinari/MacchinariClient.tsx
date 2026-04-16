'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FilePdf } from '@phosphor-icons/react'
import { CTASection } from '@/components/home/CTASection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { MachineryModal } from '@/components/ui/MachineryModal'
import { MACHINERY_DATA, MachineBrand } from '@/lib/machinery-data'

const BRANDS = [
  { name: 'Klindex', logo: '/images/macchinari/klindex.webp' },
  { name: 'Kiter', logo: '/images/macchinari/kiter.webp' },
  { name: 'CFM Lombardia', logo: '/images/macchinari/cfm-lombardia.webp' },
  { name: 'Lindhaus', logo: '/images/macchinari/scopa-elettrica-lindhaus.webp' },
  { name: 'Pulitalia', logo: '/images/macchinari/pulitalia.webp' },
  { name: 'Viking', logo: '/images/macchinari/lavasciuga-viking-pulizia-industriale.webp' },
  { name: 'Pulivax', logo: '/images/macchinari/pulivax-lucidatrice.webp' },
  { name: 'Nilfisk', logo: '/images/macchinari/nilfisk.webp' },
  { name: 'Künzle & Tasin', logo: '/images/macchinari/kunzle-tasin.webp' },
  { name: 'Gioel', logo: '/images/macchinari/sistema-gioel-vapore.svg' },
  { name: 'EU Ecolabel', logo: '/images/macchinari/ecolabel.webp' },
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

        {/* Overlay scuro + gradiente in basso per fade verso contenuto bianco (più coprente su mobile) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none hidden sm:block"
          style={{
            background:
              'linear-gradient(to bottom, rgba(5,10,15,0.7) 0%, rgba(5,10,15,0.65) 60%, rgba(5,10,15,0.95) 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none block sm:hidden"
          style={{
            background:
              'linear-gradient(to bottom, rgba(5,10,15,0.85) 0%, rgba(5,10,15,0.8) 60%, rgba(5,10,15,0.98) 100%)',
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

      {/* GALLERY MACCHINARI */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 pt-20 mb-32">
        {/* GRUPPO 1: LAVAGGIO PRINCIPALE */}
        <div className="mb-12">
          <SectionLabel className="mb-6">— LAVAGGIO PRINCIPALE</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <ScrollReveal delay={0.1}>
              <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--br)] bg-[var(--bg-2)] shadow-lg hover:shadow-[0_30px_60px_rgba(78,203,160,0.15)] hover:-translate-y-1 transition-all duration-700">
                <Image
                  src="/images/macchinari/lavasciuga.webp"
                  alt="Lavasciuga professionale Uomo a Bordo"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A140F]/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Lavasciuga Uomo a Bordo</h3>
                  <p className="font-sans text-base text-white/80 max-w-md">Efficienza massima e produttività elevata per la pulizia di grandi superfici commerciali e capannoni industriali.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--br)] bg-[var(--bg-2)] shadow-lg hover:shadow-[0_30px_60px_rgba(78,203,160,0.15)] hover:-translate-y-1 transition-all duration-700">
                <Image
                  src="/images/macchinari/monospazzola-lucidatrice-parma-klindex.webp"
                  alt="Monospazzola professionale Klindex usata per la lucidatura e la cristallizzazione dei pavimenti"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A140F]/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Levigatrici Klindex</h3>
                  <p className="font-sans text-base text-white/80 max-w-md">Punte di diamante per la cristallizzazione del marmo, la levigatura e il ripristino chirurgico di superfici dure.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* GRUPPO 2: TECNOLOGIE SPECIALISTICHE */}
        <div>
          <SectionLabel className="mb-6">— TECNOLOGIE SPECIALISTICHE</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--br)] bg-[var(--bg-2)] shadow-lg hover:shadow-[0_30px_60px_rgba(78,203,160,0.15)] hover:-translate-y-1 transition-all duration-700">
                <Image
                  src="/images/macchinari/aspiratore-industriale-polveri-cfm-parma.webp"
                  alt="Aspiratore industriale professionale CFM utilizzato per l'aspirazione di polveri e macerie nei capannoni"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A140F]/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-xl font-bold text-white mb-2">Sistemi di Aspirazione</h3>
                  <p className="font-sans text-sm text-white/70">Potenza industriale per la rimozione di polveri sottili in ambienti logistici e produttivi.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--br)] bg-[var(--bg-2)] shadow-lg hover:shadow-[0_30px_60px_rgba(78,203,160,0.15)] hover:-translate-y-1 transition-all duration-700">
                <Image
                  src="/images/macchinari/macchina-vapore-professionale.webp"
                  alt="Macchina professionale per sanificazione a vapore 180°C Fulgur Service"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A140F]/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-xl font-bold text-white mb-2">Macchine a Vapore 180°C</h3>
                  <p className="font-sans text-sm text-white/70">Sanificazione naturale e profonda. Ideale per ambienti sanitari e superfici sensibili.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a 
                      href="/docs/macchinavapore1.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] font-mono-fulgur font-bold uppercase tracking-widest text-[var(--accent)] hover:text-white transition-colors bg-[var(--accent)]/10 px-3 py-2 rounded-xl border border-[var(--accent)]/30 backdrop-blur-sm group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-transparent transition-all duration-300"
                    >
                      <FilePdf size={18} weight="duotone" />
                      Technical PDF 1
                    </a>
                    <a 
                      href="/docs/macchinavapore2.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] font-mono-fulgur font-bold uppercase tracking-widest text-[var(--accent)] hover:text-white transition-colors bg-[var(--accent)]/10 px-3 py-2 rounded-xl border border-[var(--accent)]/30 backdrop-blur-sm group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-transparent transition-all duration-300"
                    >
                      <FilePdf size={18} weight="duotone" />
                      Technical PDF 2
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--br)] bg-[var(--bg-2)] shadow-lg hover:shadow-[0_30px_60px_rgba(78,203,160,0.15)] hover:-translate-y-1 transition-all duration-700">
                <Image
                  src="/images/macchinari/sistema-osmosi-inversa-vetrate.webp"
                  alt="Sistema ad osmosi inversa per vetrate"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A140F]/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-xl font-bold text-white mb-2">Macchine a Osmosi</h3>
                  <p className="font-sans text-sm text-white/70">Lavaggio ecologico di facciate e vetrate continue in altezza utilizzando acqua pura demineralizzata.</p>
                  <a 
                    href="/docs/Brochure_Fulgur_Service_Whistle_clean_16.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-[10px] font-mono-fulgur font-bold uppercase tracking-widest text-[var(--accent)] hover:text-white transition-colors bg-[var(--accent)]/10 px-3 py-2 rounded-xl border border-[var(--accent)]/30 backdrop-blur-sm group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-transparent transition-all duration-300"
                  >
                    <FilePdf size={18} weight="duotone" />
                    Sfoglia Brochure Technical
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--br)] bg-[var(--bg-2)] shadow-lg hover:shadow-[0_30px_60px_rgba(78,203,160,0.15)] hover:-translate-y-1 transition-all duration-700">
                <Image
                  src="/images/macchinari/monospazzola.webp"
                  alt="Monospazzola professionale multiuso per il trattamento di superfici rigide"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A140F]/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-xl font-bold text-white mb-2">Monospazzola</h3>
                  <p className="font-sans text-sm text-white/70">Versatilità estrema per il ripristino, la levigatura e la lucidatura di ogni tipo di pavimento rigido o resiliente.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--br)] bg-[var(--bg-2)] shadow-lg hover:shadow-[0_30px_60px_rgba(78,203,160,0.15)] hover:-translate-y-1 transition-all duration-700">
                <Image
                  src="/images/macchinari/lavamoquette-fulgur.webp"
                  alt="Macchina professionale lava moquette a estrazione Fulgur Service"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A140F]/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-xl font-bold text-white mb-2">Lava Moquette</h3>
                  <p className="font-sans text-sm text-white/70">Sistemi a estrazione e iniezione per la pulizia profonda e la sanificazione di moquette, tappeti e superfici tessili.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--br)] bg-[var(--bg-2)] shadow-lg hover:shadow-[0_30px_60px_rgba(78,203,160,0.15)] hover:-translate-y-1 transition-all duration-700">
                <Image
                  src="/images/macchinari/idropulitrice-pulivapor-alta-pressione.webp"
                  alt="Idropulitrice professionale Pulivapor ad alta pressione per pulizie industriali"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A140F]/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-xl font-bold text-white mb-2">Idropulitrice</h3>
                  <p className="font-sans text-sm text-white/70">Pulizia ad alta pressione per la rimozione di sporco ostinato, oli e grassi su superfici industriali e pavimentazioni esterne.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.7}>
            <div className="mt-16 text-center">
              <p className="font-mono-fulgur text-[10px] uppercase tracking-[0.3em] text-[var(--tx-3)] opacity-60">
                ... E MOLTI ALTRI: SELEZIONIAMO SOLO IL MEGLIO PER I TUOI SPAZI
              </p>
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
