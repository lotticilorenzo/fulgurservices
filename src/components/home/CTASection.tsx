'use client'

import React from 'react'
import Link from 'next/link'
import { Phone, EnvelopeSimple, MapPin, ArrowUpRight } from '@phosphor-icons/react'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function CTASection() {
  return (
    <section
      id="contatti"
      className="relative flex w-full items-center justify-center overflow-hidden py-16 sm:py-24 lg:py-32 xl:py-36 px-5 sm:px-6 border-t border-[var(--br)]"
    >
      {/* Video di sfondo — goccia d'acqua in loop */}
      <video
        suppressHydrationWarning
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="/videos/goccia-acqua.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay bianco semitrasparente — mantiene leggibilità e brand chiaro */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(247,251,250,0.78)' }}
      />

      {/* Radial glow accent al centro */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(78,203,160,0.15), transparent)',
        }}
      />


<div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <ScrollReveal>
          {/* Badge status */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--br-h)] bg-white px-5 py-2 mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--tx-2)]">
              Sopralluogo sempre gratuito
            </span>
          </div>

          <h2
            className="font-display font-extrabold tracking-tight text-[var(--tx-1)] text-balance"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
          >
            Pronto a trasformare<br className="hidden sm:block" />
            {' '}i tuoi spazi?
          </h2>
          <p className="mt-5 sm:mt-6 font-body text-base sm:text-lg lg:text-xl font-light text-[var(--tx-2)] max-w-xl mx-auto">
            Sopralluogo gratuito{' '}
            <span className="text-[var(--tx-3)] mx-1.5">·</span>{' '}
            Preventivo in 24h{' '}
            <span className="text-[var(--tx-3)] mx-1.5">·</span>{' '}
            Nessun impegno
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* CTA primaria */}
          <Link href="/preventivo" tabIndex={-1} className="w-full sm:w-auto">
            <MagneticButton
              intensity={0.15}
              className="group relative flex min-h-[56px] h-16 w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 sm:px-10 font-display text-[15px] sm:text-[16px] font-bold text-white shadow-[0_12px_36px_rgba(78,203,160,0.35)] transition-all hover:bg-[var(--accent-d)] hover:shadow-[0_16px_48px_rgba(78,203,160,0.45)] sm:w-auto shine-effect"
            >
              <span className="relative z-10 w-full sm:w-auto text-center">Richiedi Sopralluogo Gratuito</span>
              <ArrowUpRight
                size={20}
                className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </MagneticButton>
          </Link>

          {/* CTA secondaria WhatsApp */}
          <a
            href="https://wa.me/393383160091?text=Ciao%2C%20vorrei%20richiedere%20un%20sopralluogo%20gratuito"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[56px] h-16 items-center gap-2.5 rounded-full border border-[var(--br-h)] bg-white px-8 font-display text-[15px] font-bold text-[var(--tx-1)] shadow-sm transition-all hover:border-[var(--accent)] hover:shadow-md w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884Zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            WhatsApp
          </a>
        </ScrollReveal>

        {/* Contatti rapidi */}
        <ScrollReveal delay={0.25}>
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8 font-mono-fulgur text-[11px] sm:text-[12px] text-[var(--tx-3)]">
            <a href="tel:+393383160091" className="flex min-h-[44px] items-center gap-2 hover:text-[var(--accent)] transition-colors">
              <Phone size={14} weight="duotone" />
              +39 338 316 0091
            </a>
            <span className="hidden sm:block opacity-30">|</span>
            <a href="mailto:fulgurservice@gmail.com" className="flex min-h-[44px] items-center gap-2 hover:text-[var(--accent)] transition-colors">
              <EnvelopeSimple size={14} weight="duotone" />
              fulgurservice@gmail.com
            </a>
            <span className="hidden sm:block opacity-30">|</span>
            <span className="flex items-center gap-2">
              <MapPin size={14} weight="duotone" className="text-[var(--accent)]" />
              Parma, Emilia-Romagna
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
