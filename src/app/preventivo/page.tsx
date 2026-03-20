import React from 'react'
import type { Metadata } from 'next'
import { Phone, EnvelopeSimple, Clock } from '@phosphor-icons/react/dist/ssr'
import { METADATA } from '@/lib/seo'
import { PreventiveForm } from '@/components/forms/PreventiveForm'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: METADATA.preventivo.title,
  description: METADATA.preventivo.description,
}

export default function PreventivoPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">
        
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
          <SectionLabel className="mb-4">— PREVENTIVO GRATUITO E SENZA IMPEGNO</SectionLabel>
          <h1 className="font-display text-[32px] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--tx-1)] text-balance leading-tight sm:leading-[1.1]">
            Raccontaci il tuo <span className="text-[var(--accent)]">spazio.</span>
          </h1>
          <p className="mt-4 sm:mt-6 font-sans text-base sm:text-xl font-light text-[var(--tx-2)] leading-relaxed text-balance">
            Rispondi a poche semplici domande per permetterci di studiare la soluzione perfetta per te. Il preventivo elaborato arriverà entro 24 ore.
          </p>
        </div>

        {/* Form and Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 lg:gap-8 items-start relative">
          
          {/* LATO SINISTRO: Il form multi-step */}
          <div className="w-full">
            <PreventiveForm />
          </div>

          {/* LATO DESTRO: Sidebar Contact Info Sticky */}
          <div className="lg:sticky lg:top-32 flex flex-col gap-6">
            
            {/* Box Contatti Diretti */}
            <div className="rounded-[2.5rem] border border-[var(--br)] bg-white p-6 md:p-8 shadow-sm hover:shadow-[0_15px_30px_rgba(42,140,122,0.12)] hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl font-bold text-[var(--tx-1)] mb-6">Contatti diretti</h3>
              
              <div className="flex flex-col gap-6 font-mono-fulgur text-sm text-[var(--tx-2)]">
                <a href="tel:+393383160091" className="flex min-h-[44px] items-start gap-4 hover:text-[var(--accent)] transition-colors group">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[var(--bg-card)] border border-[var(--br)] group-hover:border-[var(--accent)] transition-colors flex-shrink-0">
                    <Phone size={18} weight="fill" className="text-[var(--tx-1)] group-hover:text-[var(--accent)]" />
                  </div>
                  <div className="flex flex-col gap-1 pt-1.5">
                    <span className="font-sans text-xs uppercase tracking-widest text-[var(--tx-3)]">Telefono Rapido</span>
                    <span className="font-bold text-base">+39 338 316 0091</span>
                  </div>
                </a>

                <a href="mailto:fulgurservice@gmail.com" className="flex min-h-[44px] items-start gap-4 hover:text-[var(--accent)] transition-colors group">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[var(--bg-card)] border border-[var(--br)] group-hover:border-[var(--accent)] transition-colors flex-shrink-0">
                    <EnvelopeSimple size={18} weight="fill" className="text-[var(--tx-1)] group-hover:text-[var(--accent)]" />
                  </div>
                  <div className="flex flex-col gap-1 pt-1.5">
                    <span className="font-sans text-xs uppercase tracking-widest text-[var(--tx-3)]">Email</span>
                    <span className="font-bold text-base">fulgurservice@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Box Service Info */}
            <div className="rounded-3xl border border-[var(--accent)] bg-[var(--accent)]/5 p-8 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 text-[var(--accent)] opacity-10">
                <Clock size={120} weight="fill" />
              </div>
              <h3 className="font-display text-lg font-bold text-[var(--tx-1)] relative z-10 mb-2">Risposta in 24 Ore</h3>
              <p className="font-sans text-sm font-light text-[var(--tx-2)] relative z-10 leading-relaxed">
                Elaboriamo ogni richiesta in tempi record perché sappiamo quanto valga il tuo tempo. Un nostro responsabile commerciale valuterà i tuoi dati prima di rispondere.
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
