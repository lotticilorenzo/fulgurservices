'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, EnvelopeSimple, MapPin, ArrowUpRight } from '@phosphor-icons/react'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function CTASection() {
  return (
    <section
      id="contatti"
      className="relative flex w-full items-center justify-center overflow-hidden py-24 lg:py-36 px-6"
      style={{
        background: 'linear-gradient(135deg, #0a1a14 0%, #1a3d2e 40%, #2A8C7A 100%)',
      }}
    >
      {/* Layered background effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Radial glow center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(78,203,160,0.25) 0%, transparent 70%)' }}
        />
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        {/* Top left blob */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[var(--accent)] opacity-10 blur-[100px]" />
        {/* Bottom right blob */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[var(--accent-l)] opacity-10 blur-[80px]" />
      </div>
      
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <ScrollReveal>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4ECBA0] animate-pulse" />
            <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
              Sopralluogo sempre gratuito
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white text-balance">
            Pronto a trasformare<br className="hidden sm:block" />
            {' '}i tuoi spazi?
          </h2>
          <p className="mt-6 font-sans text-lg font-light text-white/75 sm:text-xl max-w-xl mx-auto">
            Sopralluogo gratuito{' '}<span className="text-white/30 mx-2">·</span>{' '}
            Preventivo in 24h{' '}<span className="text-white/30 mx-2">·</span>{' '}
            Nessun impegno
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primary CTA */}
          <Link href="/preventivo" tabIndex={-1} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full w-full sm:w-auto">
            <MagneticButton
              intensity={0.2}
              className="relative flex h-16 w-full items-center justify-center gap-2 rounded-full bg-white px-10 font-display text-lg font-bold text-[var(--accent-d)] shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:w-auto overflow-hidden group shine-effect"
            >
              <span className="relative z-10">Richiedi Sopralluogo Gratuito</span>
              <ArrowUpRight size={20} className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
          </Link>

          {/* Secondary CTA — WhatsApp */}
          <a
            href="https://wa.me/393383160091?text=Ciao%2C%20vorrei%20richiedere%20un%20sopralluogo%20gratuito"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-8 font-display text-base font-bold text-white transition-all hover:bg-white/20 hover:border-white/40"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884Zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
            WhatsApp
          </a>
        </ScrollReveal>

        {/* Quick Contacts */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8 font-mono-fulgur text-sm text-white/60">
            <a href="tel:+393383160091" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} weight="duotone" />
              +39 338 316 0091
            </a>
            <span className="hidden sm:block text-white/15">|</span>
            <a href="mailto:fulgurservice@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <EnvelopeSimple size={16} weight="duotone" />
              fulgurservice@gmail.com
            </a>
            <span className="hidden sm:block text-white/15">|</span>
            <span className="flex items-center gap-2">
              <MapPin size={16} weight="duotone" className="text-[var(--accent-l)]" />
              Parma, Emilia-Romagna
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
