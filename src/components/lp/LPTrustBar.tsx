'use client'

import { Star, ShieldCheck, Clock, Certificate, TestTube } from '@phosphor-icons/react'
import type { LPData } from '@/lib/lp-data'
import { SpotlightCard } from '@/components/ui/SpotlightCard'

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
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item) => {
            const Icon = ICON_MAP[item.icon]
            return (
              <SpotlightCard key={item.label} className="p-8">
                <Icon
                  size={32}
                  weight="duotone"
                  className="text-[var(--accent-d)] mb-4"
                  aria-hidden="true"
                />
                <h3 className="font-mono uppercase tracking-wider text-sm text-[var(--tx-1)] mb-2">
                  {item.label}
                </h3>
                <p className="font-body text-base text-[var(--tx-2)] leading-relaxed">
                  {item.desc}
                </p>
              </SpotlightCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
