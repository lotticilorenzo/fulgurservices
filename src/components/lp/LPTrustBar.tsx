import { Star, ShieldCheck, Clock, Certificate, TestTube } from '@phosphor-icons/react/dist/ssr'
import type { LPData } from '@/lib/lp-data'

const ICON_MAP = {
  Star,
  ShieldCheck,
  Clock,
  Certificate,
  TestTube,
} as const

interface LPTrustBarProps {
  items: LPData['trustBar']
}

export function LPTrustBar({ items }: LPTrustBarProps) {
  return (
    <section data-scroll-section className="py-20 border-t border-b border-[var(--br)] bg-[var(--bg)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {items.map((item) => {
            const Icon = ICON_MAP[item.icon]
            return (
              <div key={item.label} className="flex flex-col gap-4">
                <Icon
                  size={32}
                  weight="duotone"
                  className="text-[var(--accent-d)]"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-mono uppercase tracking-wider text-sm text-[var(--tx-1)] mb-2">
                    {item.label}
                  </h3>
                  <p className="font-body text-base text-[var(--tx-2)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
