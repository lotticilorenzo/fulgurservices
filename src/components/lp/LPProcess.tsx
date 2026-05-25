import type { LPData } from '@/lib/lp-data'

interface LPProcessProps {
  process: LPData['process']
}

export function LPProcess({ process }: LPProcessProps) {
  return (
    <section className="py-16 sm:py-20 bg-[var(--bg)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="font-mono-fulgur text-[10px] uppercase tracking-[0.18em] text-[var(--accent)] mb-3">
          — PROCESSO
        </p>
        <h2
          className="font-display font-bold text-[var(--tx-1)] tracking-tight mb-12"
          style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
        >
          {process.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop) */}
              {i < process.steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-5 left-[calc(100%_-_12px)] w-6 h-px bg-[var(--br-h)] z-0"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent-glow)] border border-[var(--br)] flex items-center justify-center font-mono-fulgur text-xs font-medium text-[var(--accent-d)]">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display font-bold text-[var(--tx-1)] text-lg mb-1">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-[var(--tx-2)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
