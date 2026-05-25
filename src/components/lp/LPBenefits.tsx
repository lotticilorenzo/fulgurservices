import { CheckCircle } from '@phosphor-icons/react/dist/ssr'
import type { LPData } from '@/lib/lp-data'

interface LPBenefitsProps {
  benefits: LPData['benefits']
}

export function LPBenefits({ benefits }: LPBenefitsProps) {
  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-2)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="font-mono-fulgur text-[10px] uppercase tracking-[0.18em] text-[var(--accent)] mb-3">
          — INTERVENTO
        </p>
        <h2 className="font-display font-bold text-[var(--tx-1)] tracking-tight mb-10"
          style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
        >
          {benefits.title}
        </h2>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {benefits.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--br)] rounded-xl px-4 py-3"
            >
              <CheckCircle
                size={18}
                weight="fill"
                className="text-[var(--accent)] flex-shrink-0"
                aria-hidden="true"
              />
              <span className="font-body text-sm text-[var(--tx-1)] font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
