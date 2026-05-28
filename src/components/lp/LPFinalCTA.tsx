import { Phone, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import type { LPData } from '@/lib/lp-data'
import { cn } from '@/lib/utils'

interface LPFinalCTAProps {
  finalCta: LPData['finalCta']
  ctaPhoneRaw: string
  whatsappUrl: string
  formId: string
}

export function LPFinalCTA({ finalCta, ctaPhoneRaw, whatsappUrl, formId }: LPFinalCTAProps) {
  return (
    <section data-scroll-section className="py-20 sm:py-28 bg-[var(--tx-1)]">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <h2
          className="font-display font-extrabold text-white tracking-tight mb-3"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
        >
          {finalCta.h2}
        </h2>
        <p className="font-body text-white/70 text-base mb-4">{finalCta.desc}</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45 mb-10">
          {finalCta.trustLine}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`#${formId}`}
            aria-label="Richiedi sopralluogo gratuito"
            className={cn(
              'inline-flex items-center justify-center gap-2',
              'h-14 px-8 rounded-full w-full sm:w-auto',
              'bg-[var(--accent)] text-white font-body font-medium text-base',
              'hover:bg-[var(--accent-l)] transition-colors',
              'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--tx-1)]',
              'shine-effect'
            )}
          >
            {finalCta.cta}
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </a>
          <a
            href={`tel:${ctaPhoneRaw}`}
            aria-label="Chiama Fulgur Service ora"
            className={cn(
              'inline-flex items-center justify-center gap-2',
              'h-14 px-8 rounded-full w-full sm:w-auto',
              'border border-white/30 text-white font-body font-medium text-base',
              'hover:border-white transition-colors',
              'focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--tx-1)]'
            )}
          >
            <Phone size={20} weight="bold" aria-hidden="true" />
            338 316 0091
          </a>
        </div>

        <p className="font-body text-xs text-white/40 mt-6">
          Puoi anche scriverci su{' '}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-l)] underline underline-offset-2 hover:text-white transition-colors"
          >
            WhatsApp
          </a>
          . Risposta garantita entro 24 ore lavorative.
        </p>
      </div>
    </section>
  )
}
