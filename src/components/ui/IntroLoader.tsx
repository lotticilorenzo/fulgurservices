'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

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

    const tInit = setTimeout(() => setShow(true), 0)

    // VIOL-09: ridotto da 2000ms a 1000ms — abbassa LCP misurato da Lighthouse
    const t = setTimeout(() => setExiting(true), 1000)
    return () => {
      clearTimeout(tInit)
      clearTimeout(t)
    }
  }, [])

  if (!show) return null

  return (
    <AnimatePresence onExitComplete={() => setShow(false)}>
      {!exiting && (
        <motion.div
          key="intro"
          data-nosnippet
          aria-hidden="true"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white select-none pointer-events-none"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: EASE_IN }}
        >
          {/* ── Official Logo ── */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: EASE_OUT }}
            className="mb-8 flex items-center justify-center pointer-events-none"
          >
            <div className="flex w-[75vw] max-w-[400px] items-center justify-center">
              <Image
                src="/images/logo-impresa-di-pulizie-parma-fulgur.webp"
                alt="Fulgur Service Logo — Impresa Pulizie Parma"
                width={400}
                height={100}
                className="h-auto w-full object-contain drop-shadow-[0_10px_30px_rgba(42,140,122,0.15)] mix-blend-multiply"
                priority
              />
            </div>
          </motion.div>

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
