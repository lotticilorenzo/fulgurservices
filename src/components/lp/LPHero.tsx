'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import type { LPData } from '@/lib/lp-data'
import { lpContainer, lpItem } from '@/lib/motion'

interface LPHeroProps {
  data: LPData
  formId: string
}

export function LPHero({ data, formId }: LPHeroProps) {
  const { hero } = data
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      data-scroll-section
      className="relative bg-[var(--bg-2)] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
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
              variants={lpItem}
              className="font-display font-extrabold leading-[0.92] tracking-tight text-[var(--tx-1)]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)' }}
            >
              <span className="block">{hero.headline1}</span>
              <span className="block text-[var(--accent)]">{hero.headline2}</span>
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
                oppure chiama {hero.ctaPhone.replace('Chiama: ', '')}
              </a>
            </motion.div>

            <div className="my-16" />

            <motion.div variants={lpItem} className="border-t border-[var(--br)] pt-8">
              <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--tx-3)]">
                ★ 4.9 Google · 21 recensioni{' · '}Polizza RC/RCO{' · '}35+ anni di esperienza{' · '}Partner KilometroVerde
              </p>
            </motion.div>
          </div>

          {/* Right — image (5/12) */}
          <motion.div
            variants={lpItem}
            className="lg:col-span-5 relative lg:translate-y-8"
          >
            {/* Decorative text behind image */}
            <span
              className="absolute -bottom-6 -right-4 lg:-bottom-12 lg:-right-8 font-display font-black text-[var(--accent)] select-none pointer-events-none z-0 leading-none"
              style={{ fontSize: 'clamp(6rem, 18vw, 18rem)', opacity: 0.08 }}
              aria-hidden="true"
            >
              {hero.decorativeText}
            </span>

            {/* Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-[var(--accent-d)]/10 z-10">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
