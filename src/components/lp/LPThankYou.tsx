import { CheckCircle, Phone, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import type { LPData } from '@/lib/lp-data'
import { cn } from '@/lib/utils'

interface LPThankYouProps {
  thankYou: LPData['thankYou']
  ctaPhoneRaw: string
  whatsappUrl: string
}

export function LPThankYou({
  thankYou,
  ctaPhoneRaw,
  whatsappUrl,
}: LPThankYouProps) {
  return (
    <main className="min-h-[100dvh] flex flex-col items-center justify-center bg-[var(--bg)] px-5 sm:px-8 py-16">
      {/* Brand */}
      <div className="mb-12 text-center">
        <span className="font-display font-bold text-2xl text-[var(--tx-1)]">
          Fulgur<span className="text-[var(--accent)]">.</span>
        </span>
      </div>

      {/* Checkmark */}
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[var(--accent-glow)] mb-6">
        <CheckCircle size={44} weight="fill" className="text-[var(--accent)]" aria-hidden="true" />
      </div>

      {/* Headline */}
      <h1
        className="font-display font-extrabold text-[var(--tx-1)] tracking-tight text-center mb-10"
        style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
      >
        {thankYou.h1}
      </h1>

      {/* Next steps */}
      <div className="w-full max-w-md bg-[var(--bg-2)] border border-[var(--br)] rounded-2xl p-6 mb-8">
        <h2 className="font-display font-bold text-[var(--tx-1)] text-base mb-4">
          Cosa succede adesso
        </h2>
        <ol className="space-y-3">
          {thankYou.steps.map((step, i) => (
            <li key={step} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)] text-white font-mono-fulgur text-[11px] flex items-center justify-center">
                {i + 1}
              </span>
              <span className="font-body text-sm text-[var(--tx-2)] leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* CTAs backup */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <a
          href={`tel:${ctaPhoneRaw}`}
          aria-label="Chiama Fulgur Service ora"
          className={cn(
            'flex-1 flex items-center justify-center gap-2',
            'h-12 rounded-full font-body font-medium text-sm',
            'bg-[var(--accent)] text-white',
            'hover:bg-[var(--accent-d)] transition-colors',
            'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2'
          )}
        >
          <Phone size={16} weight="bold" aria-hidden="true" />
          338 316 0091
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrivi su WhatsApp"
          className={cn(
            'flex-1 flex items-center justify-center gap-2',
            'h-12 rounded-full font-body font-medium text-sm',
            'border border-[var(--br-solid)] text-[var(--accent-d)]',
            'hover:bg-[var(--bg-2)] transition-colors',
            'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2'
          )}
        >
          <WhatsappLogo size={16} weight="fill" aria-hidden="true" />
          WhatsApp
        </a>
      </div>

      <p className="font-body text-xs text-[var(--tx-3)] mt-8 text-center">
        Fulgur Service SRL · Parma · P.IVA 03063010346
      </p>
    </main>
  )
}
