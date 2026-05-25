import { Question } from '@phosphor-icons/react/dist/ssr'
import type { LPData } from '@/lib/lp-data'

interface LPObjectionsProps {
  objections: LPData['objections']
}

export function LPObjections({ objections }: LPObjectionsProps) {
  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-3)]">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="font-mono-fulgur text-[10px] uppercase tracking-[0.18em] text-[var(--accent)] mb-3">
          — DOMANDE FREQUENTI
        </p>
        <h2
          className="font-display font-bold text-[var(--tx-1)] tracking-tight mb-10"
          style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
        >
          {objections.title}
        </h2>

        <div className="space-y-4">
          {objections.items.map((item) => (
            <div
              key={item.q}
              className="bg-[var(--bg-card)] border border-[var(--br)] rounded-2xl p-6"
            >
              <div className="flex items-start gap-3 mb-3">
                <Question
                  size={20}
                  weight="fill"
                  className="text-[var(--accent)] flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <h3 className="font-display font-bold text-[var(--tx-1)] text-base">
                  {item.q}
                </h3>
              </div>
              <p className="font-body text-sm text-[var(--tx-2)] leading-relaxed pl-8">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
