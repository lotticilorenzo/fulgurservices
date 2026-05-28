import {
  FileText, TestTube, ShieldCheck, Clock, Sparkle,
} from '@phosphor-icons/react/dist/ssr'
import type { LPData } from '@/lib/lp-data'

type IconName = keyof typeof ICON_MAP

const ICON_MAP = {
  FileText,
  TestTube,
  ShieldCheck,
  Clock,
} as const

interface LPGuaranteesProps {
  guarantees: NonNullable<LPData['guarantees']>
}

export function LPGuarantees({ guarantees }: LPGuaranteesProps) {
  return (
    <section data-scroll-section className="py-16 sm:py-20 bg-[var(--bg-2)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-d)] mb-4 text-center">
          {guarantees.eyebrow}
        </p>
        <h2
          className="font-display font-bold text-[var(--tx-1)] tracking-tight mb-10 text-center"
          style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
        >
          {guarantees.h2}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {guarantees.items.map((item) => {
            const Icon = ICON_MAP[item.icon as IconName] ?? Sparkle
            return (
              <div
                key={item.title}
                className="flex flex-col gap-3 p-7 rounded-2xl border border-[var(--br)] bg-white hover:border-[var(--br-h)] transition-colors"
              >
                <Icon
                  size={32}
                  weight="duotone"
                  className="text-[var(--accent-d)]"
                  aria-hidden="true"
                />
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--tx-1)]">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-[var(--tx-2)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
