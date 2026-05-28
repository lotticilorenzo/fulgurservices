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
    <section ref={ref} data-scroll-section className="py-20 sm:py-28 bg-[var(--bg-2)]">
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
            {process.eyebrow}
          </motion.p>
          <motion.h2
            variants={lpItem}
            className="font-display font-extrabold text-[var(--tx-1)] tracking-tight mb-12 sm:mb-16"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            {process.h2}
          </motion.h2>

          <motion.div variants={lpContainer} className="relative grid md:grid-cols-4 gap-8">
            {/* Connecting line — desktop only, behind numbers */}
            <div
              className="hidden md:block absolute top-[2rem] left-[10%] right-[10%] h-px bg-[var(--br-solid)] opacity-20"
              aria-hidden="true"
            />
            {process.steps.map((step) => (
              <motion.div key={step.num} variants={lpItem}>
                <div
                  className="font-display font-black text-[var(--accent)] leading-none mb-5 select-none relative z-10 inline-block bg-[var(--bg-2)] pr-2"
                  style={{ fontSize: '4rem' }}
                  aria-hidden="true"
                >
                  <CounterUp
                    value={step.num}
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
