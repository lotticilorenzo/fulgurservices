import { Star, ArrowSquareOut } from '@phosphor-icons/react/dist/ssr'
import type { LPData } from '@/lib/lp-data'

interface LPSocialProofProps {
  socialProof: LPData['socialProof']
}

export function LPSocialProof({ socialProof }: LPSocialProofProps) {
  return (
    <section data-scroll-section className="py-20 sm:py-28 bg-[var(--bg-2)]">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <div className="bg-white border border-[var(--br)] rounded-3xl p-8 sm:p-12 text-center shadow-[0_4px_6px_-1px_rgba(42,140,122,0.06),0_20px_40px_-8px_rgba(42,140,122,0.10)]">

          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-d)] mb-8">
            {socialProof.eyebrow}
          </p>

          <div className="flex flex-col items-center gap-4 mb-6">
            <span
              className="font-display font-extrabold text-[var(--tx-1)] leading-none"
              style={{ fontSize: 'clamp(4rem, 10vw, 5.5rem)' }}
              aria-label={`Valutazione ${socialProof.rating} su 5`}
            >
              {socialProof.rating}
            </span>

            <div
              className="flex items-center gap-1"
              aria-hidden="true"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={28} weight="fill" className="text-yellow-400" />
              ))}
            </div>
          </div>

          <p className="font-body text-base text-[var(--tx-2)] mb-8">
            Valutazione media su{' '}
            <span className="font-medium text-[var(--tx-1)]">
              {socialProof.reviewCount} recensioni verificate
            </span>{' '}
            Google
          </p>

          <a
            href={socialProof.googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--br-solid)] text-[var(--accent-d)] font-body font-medium text-sm hover:bg-[var(--bg-2)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 mb-8"
          >
            Leggi le recensioni su Google
            <ArrowSquareOut size={14} weight="bold" aria-hidden="true" />
          </a>

          {socialProof.keywords.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2" aria-label="Parole chiave ricorrenti nelle recensioni">
              {socialProof.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 rounded-full bg-[var(--bg-3)] border border-[var(--br)] font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--tx-2)]"
                >
                  {kw}
                </span>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
