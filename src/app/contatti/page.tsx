import React from 'react'
import type { Metadata } from 'next'
import { METADATA } from '@/lib/seo'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ContactForm } from '@/components/forms/ContactForm'
import { Phone, EnvelopeSimple, MapPin, InstagramLogo, Clock } from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: METADATA.contatti.title,
  description: METADATA.contatti.description,
  openGraph: METADATA.contatti.openGraph,
}

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">
        
        {/* HEADER */}
        <div className="mb-12 md:mb-20 text-center flex flex-col items-center">
          <SectionLabel className="mb-4">— SIAMO QUI PER TE</SectionLabel>
          <h1 className="font-display text-[32px] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--tx-1)] max-w-3xl text-balance leading-tight sm:leading-[1.1]">
            Entriamo in <span className="text-[var(--accent)]">contatto.</span>
          </h1>
          <p className="mt-4 sm:mt-6 font-sans text-base sm:text-lg font-light text-[var(--tx-2)] max-w-2xl text-balance">
            Hai domande su un servizio o necessiti di assistenza? Il nostro team a Parma è sempre disponibile.
          </p>
        </div>

        {/* LAYOUT CONTATTI: INFO (Left) e FORM (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-10 md:gap-12 lg:gap-16 items-start">
          
          {/* LATO SINISTRO (Info Store / Map) */}
          <div className="flex flex-col gap-10 md:gap-12">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              
              <div className="flex flex-col gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--br)] flex items-center justify-center text-[var(--accent)]" aria-hidden="true">
                  <Phone size={24} weight="fill" />
                </div>
                <div>
                  <h3 className="font-mono-fulgur text-xs font-bold tracking-widest uppercase text-[var(--tx-3)] mb-1">Telefono / WhatsApp</h3>
                  <a href="tel:+393383160091" className="font-display text-2xl font-bold text-[var(--tx-1)] hover:text-[var(--accent)] transition-colors">
                    +39 338 316 0091
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--br)] flex items-center justify-center text-[var(--accent)]" aria-hidden="true">
                  <EnvelopeSimple size={24} weight="fill" />
                </div>
                <div>
                  <h3 className="font-mono-fulgur text-xs font-bold tracking-widest uppercase text-[var(--tx-3)] mb-1">Email Diretta</h3>
                  <a href="mailto:fulgurservice@gmail.com" className="font-sans text-lg font-medium text-[var(--tx-1)] hover:text-[var(--accent)] transition-colors">
                    fulgurservice@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--br)] flex items-center justify-center text-[var(--accent)]" aria-hidden="true">
                  <MapPin size={24} weight="fill" />
                </div>
                <div>
                  <h3 className="font-mono-fulgur text-xs font-bold tracking-widest uppercase text-[var(--tx-3)] mb-1">Sede Operativa</h3>
                  <p className="font-sans text-lg font-medium text-[var(--tx-1)]">
                    Parma, Emilia-Romagna<br/>
                    <span className="text-[var(--tx-3)] text-sm">Operiamo in tutta la provincia</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--br)] flex items-center justify-center text-[var(--accent)]" aria-hidden="true">
                  <Clock size={24} weight="fill" />
                </div>
                <div>
                  <h3 className="font-mono-fulgur text-xs font-bold tracking-widest uppercase text-[var(--tx-3)] mb-1">Orari Ufficio</h3>
                  <p className="font-sans text-lg font-medium text-[var(--tx-1)]">
                    Lun - Ven: 08:00 - 18:00<br/>
                    <span className="text-[var(--accent)] text-sm">Interventi operativi H24 su accordo</span>
                  </p>
                </div>
              </div>
            </div>

            {/* MAPPA PLACEHOLDER E SOCIAL */}
            <div className="flex flex-col gap-6 w-full">
              <div className="w-full aspect-[4/3] sm:aspect-[21/9] rounded-3xl overflow-hidden relative border border-[var(--br)] bg-[var(--bg-2)] shadow-xl flex flex-col items-center justify-center">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(circle at center, var(--accent) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                <MapPin size={48} className="text-[var(--accent)] mb-4" />
                <p className="font-sans text-[var(--tx-3)] uppercase tracking-widest text-xs font-bold">Parma, IT</p>
              </div>
              
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/fulgurservice/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[var(--br)] bg-[var(--bg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono-fulgur text-sm font-bold uppercase tracking-widest text-[var(--tx-2)]"
                >
                  <InstagramLogo size={20} /> Instagram
                </a>
              </div>

              {/* ZONE SERVITE */}
              <div className="mt-4 p-5 sm:p-8 rounded-[2rem] sm:rounded-3xl bg-[var(--bg-card)] border border-[var(--br)] hover:shadow-[0_15px_30px_rgba(42,140,122,0.12)] hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-display font-bold text-[var(--tx-1)] text-lg mb-4">Dove operiamo</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6">
                  {['Parma (Città)', 'Collecchio', 'Fidenza', 'Salsomaggiore', 'Langhirano', 'Traversetolo', 'Montechiarugolo', 'Felino', 'Sorbolo Mezzani', 'Noceto'].map((city) => (
                    <div key={city} className="flex items-center gap-2 font-sans text-sm text-[var(--tx-2)]">
                      <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      {city}
                    </div>
                  ))}
                </div>
                <p className="mt-6 font-sans text-xs text-[var(--tx-3)] italic">
                  * Operiamo in tutta la provincia di Parma ed Emilia-Romagna per grandi insediamenti industriali e logistici.
                </p>
              </div>
            </div>

          </div>

          {/* LATO DESTRO (Form) */}
          <div className="w-full sticky top-32">
            <ContactForm />
          </div>

        </div>
      </div>
    </main>
  )
}
