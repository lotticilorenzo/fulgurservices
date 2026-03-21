'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Phase = 'idle' | 'in' | 'hold' | 'out'

const EASE_CURTAIN = [0.76, 0, 0.24, 1] as [number, number, number, number]

/**
 * PageTransitionProvider — curtain verde che copre e rivela il cambio di pagina.
 *
 * Flusso:
 *  1. Click su un link interno → previeni navigazione → phase='in' (curtain entra da sinistra)
 *  2. Curtain copre lo schermo → phase='hold' → router.push() eseguito
 *  3. Pathname cambia (nuova pagina renderizzata sotto) → phase='out' (curtain esce a destra)
 *  4. phase='idle' → curtain smontato
 *
 * Il fallback (back/forward, link non intercettati) usa il fade standard di template.tsx.
 */
export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router   = useRouter()
  const pathname = usePathname()

  const [phase, setPhase] = useState<Phase>('idle')
  const pendingHref = useRef<string | null>(null)
  const inited      = useRef(false)

  /* ── 1. Intercetta click su link interni ── */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest<HTMLAnchorElement>('a[href]')
      if (!anchor) return

      let href: string
      try {
        const url = new URL(anchor.href, window.location.href)

        // Salta link esterni, stessa pagina, hash-only, speciali
        if (
          url.origin !== window.location.origin ||
          anchor.target === '_blank'             ||
          e.metaKey || e.ctrlKey || e.shiftKey
        ) return

        href = url.pathname + url.search
        if (href === pathname || href === pathname + '/') return
      } catch {
        return
      }

      e.preventDefault()
      e.stopPropagation()

      pendingHref.current = href
      setPhase('in')
    }

    // Capture phase: intercettiamo prima che Next.js gestisca il click
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [pathname])

  /* ── 2. onInComplete: curtain copre → esegui navigazione ── */
  const onCoverComplete = useCallback(() => {
    if (phase !== 'in') return
    setPhase('hold')
    if (pendingHref.current) {
      router.push(pendingHref.current)
    }
  }, [phase, router])

  /* ── 3. Pathname cambia → inizia la rivelazione ── */
  useEffect(() => {
    if (!inited.current) { inited.current = true; return }
    if (phase === 'hold') {
      // Piccola pausa per permettere al DOM della nuova pagina di renderizzare
      const t = setTimeout(() => setPhase('out'), 60)
      return () => clearTimeout(t)
    }
  }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  /* ── 4. Fallback timeout: se la navigazione fallisce, torna idle ── */
  useEffect(() => {
    if (phase !== 'hold') return
    const t = setTimeout(() => setPhase('idle'), 3000)
    return () => clearTimeout(t)
  }, [phase])

  /* ── 5. onOutComplete → idle → smonta curtain ── */
  const onRevealComplete = useCallback(() => {
    if (phase === 'out') {
      pendingHref.current = null
      setPhase('idle')
    }
  }, [phase])

  const showCurtain = phase !== 'idle'

  const transformOrigin = phase === 'out' ? '100% 50%' : '0% 50%'

  return (
    <>
      {children}

      {showCurtain && (
        <motion.div
          className="fixed inset-0 z-[700] flex items-center justify-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: phase === 'out' ? 0 : 1 }}
          transition={{ duration: 0.44, ease: EASE_CURTAIN }}
          style={{ backgroundColor: 'var(--accent)', transformOrigin }}
          onAnimationComplete={
            phase === 'in'  ? onCoverComplete  :
            phase === 'out' ? onRevealComplete : undefined
          }
        >
          {/* Logo reale visibile mentre il curtain è a schermo intero */}
          <motion.div
            className="flex items-center justify-center pointer-events-none"
            animate={{ opacity: phase === 'hold' ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-center">
              <Image
                src="/images/logo-fulgur-service-impresa-pulizie-parma.webp"
                alt="Fulgur Service"
                width={120}
                height={120}
                priority
                className="mix-blend-multiply"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
