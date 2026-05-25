'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone } from '@phosphor-icons/react'
import type { LPData } from '@/lib/lp-data'
import { lpContainer, lpItem } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface LPFinalCTAProps {
  finalCta: LPData['finalCta']
  ctaPhoneRaw: string
  ctaPhone: string
  whatsappUrl: string
  formId: string
}

export function LPFinalCTA({
  finalCta,
  ctaPhoneRaw,
  ctaPhone,
  whatsappUrl,
  formId,
}: LPFinalCTAProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} data-scroll-section className="py-20 sm:py-28 bg-[var(--bg-3)]">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <motion.div
          variants={lpContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={lpItem}
            className="font-display font-extrabold text-[var(--tx-1)] tracking-tight mb-3"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            {finalCta.headline}
          </motion.h2>
          <motion.p
            variants={lpItem}
            className="font-body text-[var(--tx-2)] text-base mb-10"
          >
            {finalCta.sub}
          </motion.p>

          <motion.div
            variants={lpItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href={`tel:${ctaPhoneRaw}`}
              aria-label="Chiama Fulgur Service ora"
              className={cn(
                'inline-flex items-center justify-center gap-2',
                'h-14 px-8 rounded-full w-full sm:w-auto',
                'bg-[var(--accent)] text-white font-body font-medium text-base',
                'hover:bg-[var(--accent-d)] transition-colors',
                'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2',
                'shine-effect'
              )}
            >
              <Phone size={20} weight="bold" aria-hidden="true" />
              {ctaPhone}
            </a>
            <a
              href={`#${formId}`}
              className={cn(
                'inline-flex items-center justify-center gap-2',
                'h-14 px-8 rounded-full w-full sm:w-auto',
                'border border-[var(--br-solid)] text-[var(--accent-d)] font-body font-medium text-base',
                'hover:bg-[var(--bg-2)] transition-colors',
                'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2'
              )}
            >
              Richiedi Sopralluogo Gratuito
            </a>
          </motion.div>

          <motion.p
            variants={lpItem}
            className="font-body text-xs text-[var(--tx-3)] mt-6"
          >
            Puoi anche scriverci su{' '}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-d)] underline underline-offset-2"
            >
              WhatsApp
            </a>
            . Risposta garantita entro 24 ore lavorative.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
