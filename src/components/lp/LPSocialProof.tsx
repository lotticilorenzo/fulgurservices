'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from '@phosphor-icons/react'
import type { LPData } from '@/lib/lp-data'
import { lpContainer, lpItem } from '@/lib/motion'

interface LPSocialProofProps {
  testimonial: LPData['testimonial']
}

export function LPSocialProof({ testimonial }: LPSocialProofProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} data-scroll-section className="py-12 sm:py-16 bg-[var(--bg)]">
      <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
        <motion.div
          variants={lpContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={lpItem}
            className="flex items-center justify-center gap-1 mb-5"
            aria-label="Valutazione: 5 stelle su 5"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} weight="fill" className="text-[#FBBF24]" aria-hidden="true" />
            ))}
          </motion.div>

          <motion.blockquote variants={lpContainer} className="not-italic">
            <motion.p
              variants={lpItem}
              className="font-body text-base sm:text-lg text-[var(--tx-1)] leading-relaxed mb-5"
            >
              &ldquo;{testimonial.text}&rdquo;
            </motion.p>
            <motion.footer
              variants={lpItem}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--tx-3)]"
            >
              {testimonial.author}
            </motion.footer>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  )
}
