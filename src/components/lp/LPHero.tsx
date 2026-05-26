'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
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
      className="relative lp-bg-cream pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={lpContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left — text content (7/12) */}
          <div className="lg:col-span-7">
            <motion.p
              variants={lpItem}
              className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-d)]"
            >
              {hero.eyebrow}
            </motion.p>

            <div className="my-8" />

            <motion.h1
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={wordContainerVariants}
              className="font-display font-extrabold leading-[0.92] tracking-tight text-[var(--tx-1)]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)' }}
            >
              <span className="block">
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

            <div className="my-10" />

            <motion.p
              variants={lpItem}
              className="font-body text-lg md:text-xl text-[var(--tx-2)] leading-relaxed max-w-xl"
            >
              {hero.subheadline}
            </motion.p>

            <div className="my-12" />

            <motion.div variants={lpItem} className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href={`#${formId}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--tx-1)] text-white font-body font-medium text-base hover:bg-[var(--accent-d)] transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[var(--tx-1)] focus-visible:ring-offset-2 group"
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
                className="font-body text-base text-[var(--tx-2)] underline underline-offset-4 decoration-[var(--accent)] decoration-2 hover:text-[var(--tx-1)] transition-colors pt-1 sm:pt-4"
              >
                {hero.ctaSecondary}
              </a>
            </motion.div>

            <div className="my-16" />

            <motion.div variants={lpItem} className="border-t border-[var(--br)] pt-8">
              <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--tx-3)]">
                {hero.trustInline}
              </p>
            </motion.div>
          </div>

          {/* Right — image (5/12) — plain div so LCP element is never opacity:0 */}
          <div className="lg:col-span-5 relative lg:translate-y-8">
            <span
              className="absolute -bottom-6 -right-4 lg:-bottom-12 lg:-right-8 font-display font-black text-[var(--accent)] select-none pointer-events-none z-0 leading-none"
              style={{ fontSize: 'clamp(6rem, 18vw, 18rem)', opacity: 0.08 }}
              aria-hidden="true"
            >
              {hero.decorativeText}
            </span>

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-[var(--accent-d)]/10 z-10">
              <Image
                src={hero.heroImage}
                alt={hero.heroImageAlt}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
