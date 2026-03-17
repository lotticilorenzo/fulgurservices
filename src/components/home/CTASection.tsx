'use client'

import React from 'react'
import Link from 'next/link'
import { Phone, EnvelopeSimple } from '@phosphor-icons/react'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function CTASection() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--accent)] to-[var(--accent-d)] py-12 lg:py-20 px-6">
      
      {/* Background Radial Glow */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255, 255, 255, 0.25), transparent)',
        }}
      />
      
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Pronto a trasformare<br className="hidden sm:block" /> i tuoi spazi?
          </h2>
          <p className="mt-6 font-sans text-lg font-light text-white/90 sm:text-xl">
            Sopralluogo gratuito <span className="text-white mx-2">·</span> Preventivo in 24h <span className="text-white mx-2">·</span> Nessun impegno
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-12 flex flex-col items-center justify-center">
          <div className="relative">
            {/* 3 Orbiting dots */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[120%] w-[120%] animate-spin-slow pointer-events-none rounded-full border border-dashed border-white/20">
              <div className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-white opacity-40 shadow-[0_0_10px_white]" />
              <div className="absolute bottom-4 -right-1 h-1.5 w-1.5 rounded-full bg-white opacity-60 shadow-[0_0_10px_white]" />
              <div className="absolute bottom-4 -left-1 h-1 w-1 rounded-full bg-white opacity-30 shadow-[0_0_10px_white]" />
            </div>

            {/* Main Button */}
            <Link href="/preventivo" tabIndex={-1} className="relative z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full block">
              <MagneticButton intensity={0.2} className="flex h-16 w-full items-center justify-center rounded-full bg-white px-10 font-display text-lg font-bold text-[var(--accent-d)] shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-transform hover:scale-105 sm:w-auto">
                <span>Richiedi Sopralluogo Gratuito</span>
              </MagneticButton>
            </Link>
          </div>

          {/* Quick Contacts */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 font-mono-fulgur text-sm text-white/80 transition-colors">
            <a href="tel:+393383160091" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={18} weight="duotone" />
              +39 338 316 0091
            </a>
            <span className="hidden sm:block text-white/20">|</span>
            <a href="mailto:fulgurservice@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <EnvelopeSimple size={18} weight="duotone" />
              fulgurservice@gmail.com
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
