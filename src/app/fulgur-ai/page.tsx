'use client'

import React, { useState } from 'react'
import type { Metadata } from 'next'
import { METADATA } from '@/lib/seo'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AIChatInterface } from '@/components/ai/AIChatInterface'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Sparkle, ChatCircleText, ShieldCheck, Clock } from '@phosphor-icons/react/dist/ssr'
import { CTASection } from '@/components/home/CTASection'
import { AIGuidedExperience } from '@/components/ai/AIGuidedExperience'

const BENEFITS = [
  {
    icon: ChatCircleText,
    title: 'Guida Esperta',
    desc: 'L\'AI ti accompagna nella scelta del servizio ideale per il tuo spazio.'
  },
  {
    icon: ShieldCheck,
    title: 'Precisione Fulgur',
    desc: 'Risposte basate su 40 anni di esperienza reale nel settore cleaning.'
  },
  {
    icon: Sparkle,
    title: 'Qualità Garantita',
    desc: 'Consigli tecnici su come proteggere e valorizzare le tue superfici.'
  },
  {
    icon: Clock,
    title: 'Risposta Immediata',
    desc: 'Nessuna attesa: ottieni informazioni e bozze di preventivo in secondi.'
  }
]

export default function FulgurAIPage() {
  const [activePrompt, setActivePrompt] = useState<string | null>(null)

  const handleSelectPrompt = (prompt: string) => {
    setActivePrompt(prompt)
    // Smooth scroll to chat if on mobile
    const chatElement = document.getElementById('chat-interface')
    if (chatElement && window.innerWidth < 1024) {
      chatElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="min-h-[100dvh] bg-[var(--bg)] pt-32 pb-0 sm:pt-40 overflow-hidden">
      
      {/* Background Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--br-h)]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Hero AI Section */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 mb-20 text-center flex flex-col items-center">
        <ScrollReveal>
          <SectionLabel className="mb-4">— FULGUR AI</SectionLabel>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl lg:text-7xl max-w-4xl text-balance leading-[1.05]">
            Il tuo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--br-h)]">consulente digitale</span> <br /> sempre al tuo fianco.
          </h1>
          <p className="mt-8 font-sans text-lg lg:text-xl font-light text-[var(--tx-2)] max-w-2xl leading-relaxed text-balance">
            Abbiamo creato un assistente guidato per aiutarti a trovare la soluzione di pulizia perfetta. 
            Scegli una categoria qui sotto e lasciati guidare dalla nostra esperienza.
          </p>
        </ScrollReveal>
      </div>

      {/* Interaction Area */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-start">
          
          {/* Left: Guided Experience */}
          <div className="space-y-16">
            <ScrollReveal>
               <h2 className="font-display text-3xl font-bold text-white mb-8">Da dove vuoi <span className="text-[var(--accent)]">iniziare?</span></h2>
               <AIGuidedExperience onSelectPrompt={handleSelectPrompt} />
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {BENEFITS.map((ben, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                   <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                      <ben.icon size={24} className="text-[var(--accent)] mb-4" />
                      <h4 className="font-display text-sm font-bold text-white mb-2">{ben.title}</h4>
                      <p className="font-sans text-xs font-light text-[var(--tx-3)] leading-relaxed">{ben.desc}</p>
                   </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Actual Chat UI */}
          <ScrollReveal>
            <div id="chat-interface" className="sticky top-32">
               <AIChatInterface initialContext={activePrompt || undefined} />
            </div>
          </ScrollReveal>

        </div>
      </div>

      <CTASection />
    </main>
  )
}
