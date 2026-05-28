import { Star, SealCheck } from '@phosphor-icons/react/dist/ssr'
import type { LPData } from '@/lib/lp-data'

interface LPSocialProofProps {
  socialProof: LPData['socialProof']
}

export function LPSocialProof({ socialProof }: LPSocialProofProps) {
  return (
    <section data-scroll-section className="py-20 sm:py-28 bg-[var(--bg-2)]">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <div className="bg-white border border-[var(--br)] rounded-3xl p-8 sm:p-12 text-center shadow-[0_4px_6px_-1px_rgba(42,140,122,0.06),0_20px_40px_-8px_rgba(42,140,122,0.10)]">

          <div
            className="flex items-center justify-center gap-1 mb-8"
            aria-label="5 stelle su 5"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} weight="fill" className="text-[#FBBF24]" aria-hidden="true" />
            ))}
          </div>

          <blockquote className="not-italic">
            <p
              className="font-display font-bold text-[var(--tx-1)] leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(1.35rem, 3vw, 2rem)' }}
            >
              &ldquo;{socialProof.text}&rdquo;
            </p>
            <footer>
              <p className="font-body font-medium text-[var(--tx-1)] text-base">
                {socialProof.author}
              </p>
              {socialProof.location && (
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--tx-3)] mt-1">
                  {socialProof.location}
                </p>
              )}
              {socialProof.verified && (
                <div className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-full bg-[var(--bg-3)] border border-[var(--br)]">
                  <SealCheck size={14} weight="fill" className="text-[var(--accent-d)]" aria-hidden="true" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--tx-2)]">
                    Recensione verificata Google
                  </span>
                </div>
              )}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
