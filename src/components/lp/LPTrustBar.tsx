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
    <div className="w-full bg-[var(--bg-3)] border-y border-[var(--br)] py-4">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <ul className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-3 sm:gap-8">
          {items.map((item) => {
            const Icon = ICON_MAP[item.icon]
            return (
              <li
                key={item.label}
                className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--tx-2)]"
              >
                <Icon
                  size={14}
                  weight="fill"
                  className="text-[var(--accent)] flex-shrink-0"
                  aria-hidden="true"
                />
                {item.label}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
