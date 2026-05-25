'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle } from '@phosphor-icons/react'
import type { LPData } from '@/lib/lp-data'
import { lpContainer, lpItem } from '@/lib/motion'

interface LPBenefitsProps {
  benefits: LPData['benefits']
}

export function LPBenefits({ benefits }: LPBenefitsProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} data-scroll-section className="py-16 sm:py-20 bg-[var(--bg-2)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          variants={lpContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={lpItem}
            className="font-mono-fulgur text-[10px] uppercase tracking-[0.18em] text-[var(--accent)] mb-3"
          >
            — INTERVENTO
          </motion.p>
          <motion.h2
            variants={lpItem}
            className="font-display font-bold text-[var(--tx-1)] tracking-tight mb-10"
            style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
          >
            {benefits.title}
          </motion.h2>

          <motion.ul
            variants={lpContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {benefits.items.map((item) => (
              <motion.li
                key={item}
                variants={lpItem}
                className="flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--br)] rounded-xl px-4 py-3"
              >
                <CheckCircle
                  size={18}
                  weight="fill"
                  className="text-[var(--accent)] flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="font-body text-sm text-[var(--tx-1)] font-medium">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}
