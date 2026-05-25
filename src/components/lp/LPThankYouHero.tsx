'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Phone, WhatsappLogo } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import type { LPVariant } from '@/lib/lp-data'

interface LPThankYouHeroProps {
  variant: LPVariant
  whatsAppText: string
}

const PHONE_RAW = '+393383160091'

function HeroContent({ whatsAppText }: { whatsAppText: string }) {
  const params = useSearchParams()
  const nome = params.get('nome') ?? null
  const waUrl = `https://wa.me/393383160091?text=${encodeURIComponent(whatsAppText)}`

  return (
    <main className="min-h-[100dvh] flex flex-col items-center justify-center bg-[var(--bg)] px-5 sm:px-8 py-16 text-center">
      {/* Brand */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <span className="font-display font-bold text-2xl text-[var(--tx-1)]">
          Fulgur<span className="text-[var(--accent)]">.</span>
        </span>
      </motion.div>

      {/* Checkmark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-24 h-24 mb-8 text-[var(--accent)]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <motion.circle
            cx="50" cy="50" r="44"
            fill="none" stroke="currentColor" strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />
          <motion.path
            d="M28 50 L44 68 L72 32"
            fill="none" stroke="currentColor" strokeWidth="6"
            strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 bg-[var(--accent-glow)] blur-3xl rounded-full -z-10 scale-150" />
      </motion.div>

      {/* H1 */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-display font-extrabold text-[var(--tx-1)] tracking-tight mb-4"
        style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
      >
        {nome ? (
          <>Grazie, <span className="text-[var(--accent)]">{nome}</span>.</>
        ) : (
          'Grazie.'
        )}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="font-body text-lg text-[var(--tx-2)] max-w-[42ch] mb-10"
      >
        Abbiamo ricevuto la tua richiesta. Ti contattiamo entro{' '}
        <strong className="text-[var(--tx-1)]">4 ore lavorative</strong>.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-md"
      >
        <a
          href={`tel:${PHONE_RAW}`}
          aria-label="Chiama Fulgur Service ora"
          className={cn(
            'flex-1 flex items-center justify-center gap-2',
            'h-12 rounded-full font-body font-medium text-sm',
            'bg-[var(--accent)] text-white hover:bg-[var(--accent-d)] transition-colors',
            'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2'
          )}
        >
          <Phone size={16} weight="bold" aria-hidden="true" />
          338 316 0091
        </a>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrivi su WhatsApp"
          className={cn(
            'flex-1 flex items-center justify-center gap-2',
            'h-12 rounded-full font-body font-medium text-sm',
            'border border-[var(--br-solid)] text-[var(--accent-d)]',
            'hover:bg-[var(--bg-2)] transition-colors',
            'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2'
          )}
        >
          <WhatsappLogo size={16} weight="fill" aria-hidden="true" />
          WhatsApp
        </a>
      </motion.div>
    </main>
  )
}

function HeroFallback() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-[var(--bg)]">
      <div className="w-8 h-8 rounded-full border-2 border-[var(--accent)] border-t-transparent animate-spin" />
    </div>
  )
}

export function LPThankYouHero({ whatsAppText }: LPThankYouHeroProps) {
  return (
    <Suspense fallback={<HeroFallback />}>
      <HeroContent whatsAppText={whatsAppText} />
    </Suspense>
  )
}
