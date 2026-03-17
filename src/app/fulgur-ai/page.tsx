import React from 'react'
import type { Metadata } from 'next'
import { METADATA } from '@/lib/seo'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AIChatInterface } from '@/components/ai/AIChatInterface'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Cpu, Lightning, ShieldCheck, Database } from '@phosphor-icons/react/dist/ssr'
import { CTASection } from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: METADATA.fulgurAI.title,
  description: METADATA.fulgurAI.description,
  openGraph: METADATA.fulgurAI.openGraph,
}

const CAPABILITIES = [
  {
    icon: Lightning,
    title: 'Consulto Istantaneo',
    desc: 'Risposte tecniche immediate senza dover attendere un operatore umano.'
  },
  {
    icon: ShieldCheck,
    title: 'Precisione Normativa',
    desc: 'Conoscenza profonda di protocolli HACCP, sanificazione e sicurezza sul lavoro.'
  },
  {
    icon: Database,
    title: 'Base Conoscenza Reale',
    desc: 'Tutti i dati provengono dai nostri 30 anni di esperienza e schede tecniche macchinari.'
  },
  {
    icon: Cpu,
    title: 'Neural RAG Ready',
    desc: 'Analizza la tua richiesta nel contesto specifico dell\'ambiente parmense.'
  }
]

export default function FulgurAIPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-0 sm:pt-40 overflow-hidden">
      
      {/* Background Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--br-h)]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Hero AI Section */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 mb-20 text-center flex flex-col items-center">
        <ScrollReveal>
          <SectionLabel className="mb-4">— FULGUR AI LABS</SectionLabel>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl lg:text-7xl max-w-4xl text-balance leading-[1.05]">
            L'Intelligenza al servizio <br /> del <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--br-h)]">tuo ambiente.</span>
          </h1>
          <p className="mt-8 font-sans text-lg lg:text-xl font-light text-[var(--tx-2)] max-w-2xl leading-relaxed text-balance">
            Abbiamo addestrato un agente specializzato su 30 anni di esperienza nel cleaning professionale. 
            Provalo ora: chiedigli dettagli tecnici o consigli su come trattare le tue superfici.
          </p>
        </ScrollReveal>
      </div>

      {/* Interaction Area */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">
          
          {/* Left: Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {CAPABILITIES.map((cap, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                 <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-[var(--accent)]/30 transition-all hover:shadow-xl">
                    <cap.icon size={32} weight="fill" className="text-[var(--accent)] mb-6" />
                    <h3 className="font-display text-lg font-bold text-white mb-2">{cap.title}</h3>
                    <p className="font-sans text-sm font-light text-[var(--tx-3)] leading-relaxed">{cap.desc}</p>
                 </div>
              </ScrollReveal>
            ))}
            
            <ScrollReveal delay={0.4} className="sm:col-span-2">
              <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[var(--bg-2)] to-black border border-[var(--accent)]/20 shadow-[0_0_30px_rgba(78,203,160,0.05)]">
                <h4 className="font-display text-xl font-bold text-white mb-4">Integrazione RAG via Assitant API</h4>
                <p className="font-sans text-sm font-light text-[var(--tx-2)] leading-relaxed">
                  Utilizziamo un sistema di <strong>Retrieval-Augmented Generation</strong> che indicizza il nostro archivio tecnico (Knowledge Base) 
                  per fornirti dati reali e non allucina risposte casuali. È il supporto perfetto per Facility Manager e Amministratori.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Actual Chat UI */}
          <ScrollReveal>
            <AIChatInterface />
          </ScrollReveal>

        </div>
      </div>

      <CTASection />
    </main>
  )
}
