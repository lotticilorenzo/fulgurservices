'use client'

import React from 'react'
import { CounterUp } from '@/components/ui/CounterUp'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const STATS = [
  {
    value: 30,
    suffix: '+',
    label: 'Anni di esperienza',
    sub: 'Nel settore pulizie professionali',
  },
  {
    value: 500,
    suffix: '+',
    label: 'Clienti soddisfatti',
    sub: 'In Emilia-Romagna',
  },
  {
    value: 12,
    suffix: '',
    label: 'Settori di intervento',
    sub: "Dal civile all'industriale",
  },
  {
    value: 24,
    suffix: 'h',
    label: 'Preventivo garantito',
    sub: 'Sopralluogo sempre gratuito',
  },
]

export function StatsSection() {
  return (
    <section className="relative py-12 lg:py-20 bg-[var(--bg-3)] border-y border-[var(--br)] overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/20">
          {STATS.map((stat, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.15}
              className={`flex flex-col items-center justify-center text-center ${
                index === 0 ? 'lg:pr-8' : index === 3 ? 'lg:pl-8' : 'lg:px-8'
              }`}
            >
              <div className="font-display font-extrabold leading-none tracking-tight text-[clamp(48px,6vw,72px)]">
                <CounterUp value={stat.value} suffix={stat.suffix} duration={2500} />
              </div>
              <div className="mt-4 font-display text-base font-semibold leading-snug">
                {stat.label}
              </div>
              <div className="mt-2 max-w-[200px] font-sans text-[13px] font-light opacity-75">
                {stat.sub}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
