import React from 'react'
import type { Metadata } from 'next'
import { METADATA } from '@/lib/seo'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TrustBar } from '@/components/ui/TrustBar'
import { VisualGuarantees } from '@/components/ui/VisualGuarantees'
import { ReviewsSection } from '@/components/ui/ReviewsSection'
import { CTASection } from '@/components/home/CTASection'
import Image from 'next/image'
import * as Icons from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: METADATA.chiSiamo.title,
  description: METADATA.chiSiamo.description,
  openGraph: METADATA.chiSiamo.openGraph,
}

const VALORI = [
  {
    icon: 'Leaf',
    title: 'Sostenibilità reale',
    desc: 'Utilizziamo prodotti a basso impatto ambientale e certificati Ecolabel ovunque sia possibile.'
  },
  {
    icon: 'ShieldStar',
    title: 'Referente unico',
    desc: 'Gestiamo servizi integrati per offrirti la comodità di un solo interlocutore di fiducia per ogni esigenza.'
  },
  {
    icon: 'Users',
    title: 'Team qualificato',
    desc: 'Personale regolarmente assunto, assicurato e formato continuamente sulle ultime tecniche del settore.'
  },
  {
    icon: 'Handshake',
    title: 'Trasparenza totale',
    desc: 'Sopralluogo sempre gratuito, preventivo dettagliato entro 24 ore e nessuna spesa nascosta.'
  }
]

export default function ChiSiamoPage() {
  return (
    <main className="bg-[var(--bg)] min-h-screen pt-32 sm:pt-40">
      
      {/* HERO STORIA */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 mb-20 text-center flex flex-col items-center">
        <SectionLabel className="mb-4">— LA NOSTRA STORIA</SectionLabel>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl lg:text-6xl max-w-4xl">
          Tradizione e innovazione, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--br-h)]">insieme.</span>
        </h1>
        <p className="mt-8 font-sans text-lg lg:text-xl font-light text-[var(--tx-2)] max-w-3xl leading-relaxed text-balance">
          Fulgur Service è un'impresa giovane, nata da idee chiare e innovative, con alle spalle 30 anni di esperienza: 
          siamo il punto d'incontro tra la visione fresca di una nuova generazione e la solidità del lavoro costruito da mio padre.
        </p>
      </div>

      {/* MULTI MEDIA SEZIONE */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 mb-32">
        <ScrollReveal>
          <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden relative border border-[var(--br)] bg-[var(--bg-2)] shadow-xl">
            <Image
              src="/images/fulgur-service-team-lavoro.jpg"
              alt="Team Fulgur Service al lavoro — operatori di pulizia professionali a Parma"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row justify-between items-end">
              <div className="text-left max-w-lg">
                <h3 className="font-display text-2xl font-bold text-white mb-2">Una promessa di valore</h3>
                <p className="font-sans text-sm text-white/90">Per noi la pulizia non è un'attività meccanica: non siamo semplici fornitori, ma partner che si prendono cura dell'ambiente del cliente a 360°.</p>
              </div>
              <div className="mt-4 sm:mt-0 px-6 py-3 rounded-xl bg-[var(--accent)] text-[var(--bg)] font-mono-fulgur text-sm font-bold tracking-widest hidden sm:block">
                DAL 1994
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* TIMELINE / STORIA */}
      <div className="w-full bg-[var(--bg-2)] border-t border-[var(--br)] py-24">
        <div className="mx-auto w-full max-w-4xl px-6 xl:px-8">
          <SectionLabel className="mb-12 text-center">— 30 ANNI DI ESPERIENZA</SectionLabel>
          <div className="relative border-l border-[var(--br)] ml-4 sm:ml-8 flex flex-col gap-16">
            
            <ScrollReveal>
              <div className="relative pl-8 sm:pl-12">
                <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
                <h3 className="font-mono-fulgur text-[var(--accent)] font-bold mb-2">1994</h3>
                <h4 className="font-display text-2xl font-bold text-[var(--tx-1)] mb-4">Le fondamenta</h4>
                <p className="font-sans font-light text-[var(--tx-2)] leading-relaxed">
                  L'inizio dell'avventura nel cleaning professionale. Anni dedicati a sviluppare la conoscenza perfetta dei materiali, delle superfici e delle reazioni chimiche dei detergenti per garantire l'eccellenza.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative pl-8 sm:pl-12">
                <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
                <h3 className="font-mono-fulgur text-[var(--accent)] font-bold mb-2">L'Evoluzione</h3>
                <h4 className="font-display text-2xl font-bold text-[var(--tx-1)] mb-4">Metodologia e Tecnologie</h4>
                <p className="font-sans font-light text-[var(--tx-2)] leading-relaxed">
                  L'ingresso di macchinari industriali e protocolli rigidi come l'HACCP porta l'azienda ad ampliare il suo raggio d'azione nel settore alberghiero, sanitario e dei grandi insediamenti logistici.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative pl-8 sm:pl-12">
                <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full outline outline-2 outline-[var(--bg-2)] outline-offset-2 bg-gradient-to-r from-[var(--br-h)] to-[var(--accent)] shadow-[0_0_15px_var(--accent)]" />
                <h3 className="font-mono-fulgur text-[var(--tx-1)] font-bold mb-2">Oggi</h3>
                <h4 className="font-display text-2xl font-bold text-[var(--tx-1)] mb-4">Fulgur Service SRL</h4>
                <p className="font-sans font-light text-[var(--tx-2)] leading-relaxed">
                  Il passaggio generazionale fonda Fulgur Service: un brand giovane che eredita 30 anni di know-how paterno unendolo a gestioni digitali smart, sostenibilità ambientale certificata ed engineering dei processi integrati.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>

      <TrustBar />

      {/* TIMELINE / STORIA */}
      <div className="w-full bg-[var(--bg-2)] border-t border-[var(--br)] py-24">
        <div className="mx-auto w-full max-w-4xl px-6 xl:px-8">
          <SectionLabel className="mb-12 text-center">— 30 ANNI DI ESPERIENZA</SectionLabel>
          <div className="relative border-l border-[var(--br)] ml-4 sm:ml-8 flex flex-col gap-16">
            
            <ScrollReveal>
              <div className="relative pl-8 sm:pl-12">
                <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
                <h3 className="font-mono-fulgur text-[var(--accent)] font-bold mb-2">1994</h3>
                <h4 className="font-display text-2xl font-bold text-[var(--tx-1)] mb-4">Le fondamenta</h4>
                <p className="font-sans font-light text-[var(--tx-2)] leading-relaxed">
                  L'inizio dell'avventura nel cleaning professionale. Anni dedicati a sviluppare la conoscenza perfetta dei materiali, delle superfici e delle reazioni chimiche dei detergenti per garantire l'eccellenza.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative pl-8 sm:pl-12">
                <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
                <h3 className="font-mono-fulgur text-[var(--accent)] font-bold mb-2">L'Evoluzione</h3>
                <h4 className="font-display text-2xl font-bold text-[var(--tx-1)] mb-4">Metodologia e Tecnologie</h4>
                <p className="font-sans font-light text-[var(--tx-2)] leading-relaxed">
                  L'ingresso di macchinari industriali e protocolli rigidi come l'HACCP porta l'azienda ad ampliare il suo raggio d'azione nel settore alberghiero, sanitario e dei grandi insediamenti logistici.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative pl-8 sm:pl-12">
                <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full outline outline-2 outline-[var(--bg-2)] outline-offset-2 bg-gradient-to-r from-[var(--br-h)] to-[var(--accent)] shadow-[0_0_15px_var(--accent)]" />
                <h3 className="font-mono-fulgur text-[var(--tx-1)] font-bold mb-2">Oggi</h3>
                <h4 className="font-display text-2xl font-bold text-[var(--tx-1)] mb-4">Fulgur Service SRL</h4>
                <p className="font-sans font-light text-[var(--tx-2)] leading-relaxed">
                  Il passaggio generazionale fonda Fulgur Service: un brand giovane che eredita 30 anni di know-how paterno unendolo a gestioni digitali smart, sostenibilità ambientale certificata ed engineering dei processi integrati.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>

      <VisualGuarantees />

      {/* TEAM PLACEHOLDER */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 py-24 border-t border-[var(--br)] text-center">
         <SectionLabel className="mb-8">— IL TEAM FULGUR</SectionLabel>
         <div className="max-w-4xl mx-auto rounded-3xl border border-dashed border-[var(--br)] bg-[var(--bg-2)] aspect-[16/6] flex flex-col items-center justify-center p-8">
           <Icons.Users size={48} className="text-[var(--tx-3)] mb-4" />
           <p className="font-sans text-[var(--tx-3)]">[Placeholder Foto Team Ufficiale]</p>
         </div>
      </div>

      <ReviewsSection />

      <CTASection />

    </main>
  )
}
