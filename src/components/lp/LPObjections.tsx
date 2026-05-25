'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { LPData } from '@/lib/lp-data'
import { lpContainer, lpItem } from '@/lib/motion'

interface LPObjectionsProps {
  objections: LPData['objections']
}

export function LPObjections({ objections }: LPObjectionsProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} data-scroll-section className="py-24 sm:py-32 bg-[var(--bg)]">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          variants={lpContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={lpItem}
            className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-d)] mb-6"
          >
            04 — RISPOSTE CONCRETE
          </motion.p>
          <motion.h2
            variants={lpItem}
            className="font-display font-extrabold text-[var(--tx-1)] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Quello che ti chiedi prima di chiamarci.
          </motion.h2>

          <motion.div variants={lpContainer} className="mt-16">
            {objections.items.map((item, i) => (
              <motion.div
                key={item.q}
                variants={lpItem}
                className={`py-10 border-t border-[var(--br)]${i === objections.items.length - 1 ? ' border-b' : ''}`}
              >
                <div className="grid md:grid-cols-12 gap-6 md:gap-8">
                  <div className="md:col-span-5">
                    <p className="font-mono text-sm text-[var(--accent-d)] mb-3">
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-2xl font-bold leading-snug text-[var(--tx-1)]">
                      {item.q}
                    </h3>
                  </div>
                  <div className="md:col-span-7 flex items-center">
                    <p className="font-body text-lg text-[var(--tx-2)] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
