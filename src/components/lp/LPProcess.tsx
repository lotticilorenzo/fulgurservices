'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import type { LPData } from '@/lib/lp-data'
import { lpContainer, lpItem } from '@/lib/motion'
import { CounterUp } from '@/components/ui/CounterUp'

interface LPProcessProps {
  process: LPData['process']
}

export function LPProcess({ process }: LPProcessProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section ref={ref} data-scroll-section className="py-24 sm:py-32 bg-[var(--bg-2)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          variants={lpContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={lpItem}
            className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-d)] mb-6"
          >
            03 — COME LAVORIAMO
          </motion.p>
          <motion.h2
            variants={lpItem}
            className="font-display font-extrabold text-[var(--tx-1)] tracking-tight mb-20"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Dal sopralluogo alla consegna, in 4 passi.
          </motion.h2>

          <motion.div variants={lpContainer} className="grid md:grid-cols-4 gap-8">
            {process.steps.map((step) => (
              <motion.div key={step.number} variants={lpItem}>
                <div
                  className="font-display font-black text-[var(--accent)] leading-none mb-6 select-none"
                  style={{ fontSize: '5rem', opacity: 0.3 }}
                  aria-hidden="true"
                >
                  <CounterUp
                    value={parseInt(step.number, 10)}
                    prefix="0"
                    duration={prefersReducedMotion ? 0 : 1200}
                    className="font-display font-black"
                  />
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--tx-1)] mb-3">
                  {step.title}
                </h3>
                <div className="w-12 h-px bg-[var(--accent)] mb-4" aria-hidden="true" />
                <p className="font-body text-base text-[var(--tx-2)] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
