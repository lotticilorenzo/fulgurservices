'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight, Star } from '@phosphor-icons/react'
import type { LPData } from '@/lib/lp-data'
import { lpContainer, lpItem } from '@/lib/motion'

const EASE = [0.16, 1, 0.3, 1] as const

interface LPHeroProps {
  data: LPData
  formId: string
}

export function LPHero({ data, formId }: LPHeroProps) {
  const { hero } = data
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  const wordContainerVariants: Variants = prefersReducedMotion
    ? lpItem
    : { hidden: {}, visible: { transition: { staggerChildren: 0.055, delayChildren: 0.35 } } }

  const wordItemVariants: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: EASE } } }

  return (
    <section
      ref={ref}
      data-scroll-section
      className="relative min-h-[90dvh] flex items-center pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background image — LCP element: always visible, no motion wrapper */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.heroImage}
          alt={hero.heroImageAlt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark left → transparent right so image is the visual protagonist */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(15,31,26,0.92) 0%, rgba(15,31,26,0.70) 55%, rgba(15,31,26,0.20) 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full">
        <motion.div
          variants={lpContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-2xl"
        >
          <motion.p
            variants={lpItem}
            className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-l)]"
          >
            {hero.eyebrow}
          </motion.p>

          {/* Google stars */}
          <motion.div
            variants={lpItem}
            className="flex items-center gap-2 mt-5 mb-6"
            aria-label="Valutazione media 4.9 su 5 stelle su Google"
          >
            <div className="flex" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} weight="fill" size={16} className="text-yellow-400" />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">4.9 su Google</span>
            <span className="text-white/40 text-sm" aria-hidden="true">·</span>
            <span className="text-white/70 text-sm">21 recensioni</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={wordContainerVariants}
            className="font-display font-extrabold leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)' }}
          >
            <span className="block text-white">
              {hero.headlinePrimary.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordItemVariants}
                  className="inline-block mr-[0.22em] last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block text-[var(--accent)]">
              {hero.headlineAccent.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordItemVariants}
                  className="inline-block mr-[0.22em] last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            variants={lpItem}
            className="font-body text-base md:text-lg text-white/80 leading-relaxed max-w-xl mt-8"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTA — visible on all screen sizes */}
          <motion.div
            variants={lpItem}
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href={`#${formId}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[var(--tx-1)] font-body font-medium text-base hover:bg-[var(--accent)] hover:text-white transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent group"
            >
              {hero.ctaPrimary}
              <ArrowRight
                size={18}
                weight="bold"
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href={`tel:${hero.ctaPhoneRaw}`}
              className="font-body text-base text-white/70 underline underline-offset-4 decoration-[var(--accent)] decoration-2 hover:text-white transition-colors pt-1 sm:pt-4"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            variants={lpItem}
            className="border-t border-white/20 pt-6 mt-10"
          >
            <p className="font-mono text-[11px] uppercase tracking-wider text-white/50">
              {hero.trustInline}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
