import { Phone } from '@phosphor-icons/react/dist/ssr'
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
    <section data-scroll-section className="py-20 sm:py-28 bg-[var(--bg-3)]">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <h2
          className="font-display font-extrabold text-[var(--tx-1)] tracking-tight mb-3"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
        >
          {finalCta.h2}
        </h2>
        <p className="font-body text-[var(--tx-2)] text-base mb-10">{finalCta.desc}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${ctaPhoneRaw}`}
            aria-label="Chiama Fulgur Service ora"
            className={cn(
              'inline-flex items-center justify-center gap-2',
              'h-14 px-8 rounded-full w-full sm:w-auto',
              'bg-[var(--accent)] text-white font-body font-medium text-base',
              'hover:bg-[var(--accent-d)] transition-colors',
              'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2',
              'shine-effect'
            )}
          >
            <Phone size={20} weight="bold" aria-hidden="true" />
            338 316 0091
          </a>
          <a
            href={`#${formId}`}
            className={cn(
              'inline-flex items-center justify-center gap-2',
              'h-14 px-8 rounded-full w-full sm:w-auto',
              'border border-[var(--br-solid)] text-[var(--accent-d)] font-body font-medium text-base',
              'hover:bg-[var(--bg-2)] transition-colors',
              'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2'
            )}
          >
            {finalCta.cta}
          </a>
        </div>

        <p className="font-body text-xs text-[var(--tx-3)] mt-6">
          Puoi anche scriverci su{' '}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-d)] underline underline-offset-2"
          >
            WhatsApp
          </a>
          . Risposta garantita entro 24 ore lavorative.
        </p>
      </div>
    </section>
  )
}
