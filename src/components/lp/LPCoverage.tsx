import {
  ForkKnife, Coffee, Oven, Fire, Factory, Cheese,
  Flask, Warehouse, Tray, Sparkle,
} from '@phosphor-icons/react/dist/ssr'
import type { LPData } from '@/lib/lp-data'

type IconName = keyof typeof ICON_MAP

const ICON_MAP = {
  ForkKnife,
  Coffee,
  Oven,
  Fire,
  Factory,
  Cheese,
  Flask,
  Warehouse,
  Tray,
} as const

interface LPCoverageProps {
  coverage: NonNullable<LPData['coverage']>
}

export function LPCoverage({ coverage }: LPCoverageProps) {
  return (
    <section data-scroll-section className="py-16 sm:py-20 bg-[var(--bg)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-d)] mb-4">
          {coverage.eyebrow}
        </p>
        <h2
          className="font-display font-bold text-[var(--tx-1)] tracking-tight mb-4"
          style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
        >
          {coverage.h2}
        </h2>
        <p className="font-body text-base text-[var(--tx-2)] max-w-2xl mb-10">
          {coverage.intro}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {coverage.categories.map((cat) => {
            const Icon = ICON_MAP[cat.icon as IconName] ?? Sparkle
            return (
              <div
                key={cat.label}
                className="flex items-center gap-3 px-4 py-4 rounded-2xl border border-[var(--br)] bg-[var(--bg-2)] hover:bg-[var(--bg-card-h)] hover:border-[var(--br-h)] transition-colors"
              >
                <Icon
                  size={28}
                  weight="duotone"
                  className="text-[var(--accent-d)] shrink-0"
                  aria-hidden="true"
                />
                <span className="font-body text-sm text-[var(--tx-1)] leading-snug">
                  {cat.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
