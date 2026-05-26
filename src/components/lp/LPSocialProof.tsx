import { Star } from '@phosphor-icons/react/dist/ssr'
import type { LPData } from '@/lib/lp-data'

interface LPSocialProofProps {
  socialProof: LPData['socialProof']
}

export function LPSocialProof({ socialProof }: LPSocialProofProps) {
  return (
    <section data-scroll-section className="py-12 sm:py-16 bg-[var(--bg)]">
      <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
        <div
          className="flex items-center justify-center gap-1 mb-5"
          aria-label="Valutazione: 5 stelle su 5"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={20} weight="fill" className="text-[#FBBF24]" aria-hidden="true" />
          ))}
        </div>

        <blockquote className="not-italic">
          <p className="font-body text-base sm:text-lg text-[var(--tx-1)] leading-relaxed mb-5">
            &ldquo;{socialProof.text}&rdquo;
          </p>
          <footer className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--tx-3)]">
            {socialProof.author}
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
