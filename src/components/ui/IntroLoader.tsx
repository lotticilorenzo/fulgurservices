'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1] as [number, number, number, number]
const EASE_IN  = [0.76, 0, 0.24, 1] as [number, number, number, number]

/**
 * IntroLoader — animazione di benvenuto al primo accesso della sessione.
 * Si mostra una volta sola (sessionStorage), poi esce con una wipe verso l'alto.
 * Non usa immagini: solo CSS + Framer Motion.
 */
export function IntroLoader() {
  const [show,    setShow]    = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // Mostra solo alla prima visita della sessione
    if (typeof sessionStorage === 'undefined') return
    if (sessionStorage.getItem('fs-intro-v3')) return
    sessionStorage.setItem('fs-intro-v3', '1')

    setShow(true)

    // Dopo 2s avvia l'uscita
    const t = setTimeout(() => setExiting(true), 2000)
    return () => clearTimeout(t)
  }, [])

  if (!show) return null

  return (
    <AnimatePresence onExitComplete={() => setShow(false)}>
      {!exiting && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white select-none pointer-events-none"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: EASE_IN }}
        >
          {/* ── Bolt icon ── */}
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.65, ease: EASE_OUT }}
            className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-[20px] bg-[var(--accent)] shadow-[0_20px_60px_rgba(78,203,160,0.4)]"
          >
            {/* Fulmine SVG — simbolo del brand */}
            <svg viewBox="0 0 24 24" fill="white" className="h-9 w-9" aria-hidden="true">
              <path d="M13 2 4.09 12.96A1 1 0 0 0 5 14.5h6.5L10 22l10.5-12A1 1 0 0 0 19.5 8.5H13V2z" />
            </svg>
          </motion.div>

          {/* ── Brand name ── */}
          <div className="overflow-hidden">
            <motion.p
              className="font-display text-[28px] font-black tracking-tight text-[var(--tx-1)]"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ delay: 0.38, duration: 0.65, ease: EASE_OUT }}
            >
              Fulgur Service
            </motion.p>
          </div>

          {/* ── Tagline ── */}
          <div className="overflow-hidden mb-10">
            <motion.p
              className="font-mono-fulgur text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--tx-3)]"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ delay: 0.52, duration: 0.6, ease: EASE_OUT }}
            >
              Puliamo il futuro · Parma
            </motion.p>
          </div>

          {/* ── Progress bar ── */}
          <div className="w-44 h-[1.5px] overflow-hidden rounded-full bg-[var(--br)]">
            <motion.div
              className="h-full bg-[var(--accent)] rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{ originX: 0 }}
              transition={{ delay: 0.6, duration: 1.35, ease: EASE_OUT }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
