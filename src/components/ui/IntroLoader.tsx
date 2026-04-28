'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const EASE_OUT = [0.16, 1, 0.3, 1] as [number, number, number, number]
const EASE_IN = [0.76, 0, 0.24, 1] as [number, number, number, number]

/**
 * IntroLoader | animazione di benvenuto al primo accesso della sessione.
 * Si mostra una volta sola (sessionStorage), poi esce con una wipe verso l'alto.
 * Mostra il logo del brand con transizione breve al primo accesso della sessione.
 */
export function IntroLoader() {
  const [show, setShow] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // Mostra solo alla prima visita della sessione
    if (typeof sessionStorage === 'undefined') return
    if (sessionStorage.getItem('fs-intro-v4')) return
    sessionStorage.setItem('fs-intro-v4', '1')

    const tInit = setTimeout(() => setShow(true), 0)

    // Ridotto per contenere l'impatto sul caricamento percepito
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
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: EASE_OUT }}
            className="mb-8 flex items-center justify-center"
          >
            <div className="flex w-[56vw] max-w-[220px] items-center justify-center sm:max-w-[250px]">
              <Image
                src="/images/logo-fulgur-service-pulizie-parma.webp"
                alt="Fulgur Service Logo | Impresa Pulizie Parma"
                width={512}
                height={512}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </motion.div>

          <div className="mb-10 overflow-hidden">
            <motion.div
              className="flex flex-col items-center text-center font-display text-[clamp(1.55rem,5.6vw,2.5rem)] font-black leading-[0.95] tracking-tight text-[var(--tx-1)]"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ delay: 0.52, duration: 0.6, ease: EASE_OUT }}
            >
              <span>Puliamo il Futuro</span>
              <span className="text-[var(--tx-2)]">con l&apos;Energia</span>
              <span className="text-[var(--accent)]">della Natura</span>
            </motion.div>
          </div>

          <div className="h-[1.5px] w-44 overflow-hidden rounded-full bg-[var(--br)]">
            <motion.div
              className="h-full rounded-full bg-[var(--accent)]"
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
