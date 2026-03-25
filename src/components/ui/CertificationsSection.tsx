'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Leaf, Medal, Handshake } from '@phosphor-icons/react'
import { ScrollReveal } from './ScrollReveal'

const CERTS = [
  {
    icon: ShieldCheck,
    title: "Assicurazione RCT",
    desc: "Copertura totale per danni a terzi durante ogni intervento di pulizia.",
    color: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-blue-500"
  },
  {
    icon: Leaf,
    title: "Ecolabel Partner",
    desc: "Prediligiamo l'uso di detergenti a basso impatto ambientale e certificati.",
    color: "from-[var(--accent)]/10 to-[var(--accent-d)]/5",
    iconColor: "text-[var(--accent)]"
  },
  {
    icon: Medal,
    title: "Protocolli HACCP",
    desc: "Gestione certificata per la sanificazione di ambienti alimentari e sanitari.",
    color: "from-amber-500/10 to-amber-600/5",
    iconColor: "text-amber-500"
  },
  {
    icon: Handshake,
    title: "Partner di Fiducia",
    desc: "Oltre 35 anni di referenze dimostrabili in tutta Italia.",
    color: "from-teal-500/10 to-teal-600/5",
    iconColor: "text-teal-500"
  }
]

export function CertificationsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <ScrollReveal>
            <div className="px-5 py-2 rounded-xl bg-[var(--bg-3)] border border-[var(--br)] mb-6">
               <span className="font-mono-fulgur text-[10px] font-bold text-[var(--tx-3)] uppercase tracking-[0.2em]">Garanzie & Standard</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-[var(--tx-1)] sm:text-4xl max-w-2xl">
              La certezza di un lavoro <br className="hidden sm:block" /> eseguito a regola d&apos;arte.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTS.map((cert, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative group h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative h-full p-8 rounded-3xl border border-[var(--br)] bg-white group-hover:bg-transparent transition-colors duration-500 flex flex-col items-center text-center">
                  <div className={`h-16 w-16 rounded-2xl bg-[var(--bg-2)] flex items-center justify-center ${cert.iconColor} mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <cert.icon size={32} weight="duotone" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[var(--tx-1)] mb-3">{cert.title}</h3>
                  <p className="font-sans text-sm text-[var(--tx-2)] leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
