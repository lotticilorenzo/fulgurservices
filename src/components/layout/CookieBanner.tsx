'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Cookie, X } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('fulgur-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('fulgur-cookie-consent', 'all')
    setIsVisible(false)
  }

  const acceptNecessary = () => {
    localStorage.setItem('fulgur-cookie-consent', 'necessary')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 z-[1000] mx-auto max-w-lg lg:left-8 lg:right-auto lg:mx-0"
        >
          <div className="glass-premium overflow-hidden rounded-2xl border border-[var(--br)] bg-[var(--bg-1)]/80 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                <Cookie size={24} weight="duotone" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold text-[var(--tx-1)]">
                  La tua privacy è importante
                </h3>
                <p className="mt-2 font-sans text-sm font-light leading-relaxed text-[var(--tx-2)]">
                  Utilizziamo i cookie per migliorare la tua esperienza e analizzare il traffico. 
                  Scegliendo "Accetta tutto", acconsenti al nostro utilizzo dei cookie. 
                  Leggi la nostra <Link href="/privacy" className="underline hover:text-[var(--accent)] transition-colors">Privacy Policy</Link>.
                </p>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-[var(--tx-3)] hover:text-[var(--tx-1)] transition-colors"
                aria-label="Chiudi"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
              <button
                onClick={acceptNecessary}
                className="rounded-full border border-[var(--br-solid)] px-4 py-2 font-display text-xs font-bold text-[var(--tx-2)] transition-all hover:bg-[var(--bg-2)] hover:text-[var(--tx-1)]"
              >
                Solo necessari
              </button>
              <button
                onClick={acceptAll}
                className="rounded-full bg-[var(--accent)] px-6 py-2 font-display text-xs font-bold text-white shadow-lg shadow-[var(--accent)]/20 transition-all hover:bg-[var(--accent-d)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Accetta tutto
              </button>
            </div>
            
            {/* Ambient Shine Effect */}
            <div className="shine-effect absolute inset-0 pointer-events-none opacity-20" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
