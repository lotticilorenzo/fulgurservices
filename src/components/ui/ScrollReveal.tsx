'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  staggerChildren?: boolean
}

/**
 * ScrollReveal — due implementazioni:
 *
 * staggerChildren=false (default):
 *   CSS animation + IntersectionObserver nativo.
 *   Zero JS animation engine durante lo scroll → 60fps garantiti.
 *   Il browser gestisce l'animazione sul compositor thread.
 *
 * staggerChildren=true:
 *   Framer Motion per stagger automatico tra children.
 *   Usato raramente (grids, liste).
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  staggerChildren = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || staggerChildren) return

    // prefers-reduced-motion: mostra subito
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.remove('sr-hidden')
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.style.animationDelay = delay > 0 ? `${delay}s` : ''
        el.classList.remove('sr-hidden')
        el.classList.add('sr-visible')
        io.disconnect()
      },
      { rootMargin: '-5% 0px', threshold: 0.04 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [delay, staggerChildren])

  /* ── stagger: Framer Motion gestisce i figli ── */
  if (staggerChildren) {
    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-5% 0px' }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    )
  }

  /* ── standard: CSS reveal ── */
  return (
    <div
      ref={ref}
      className={cn('sr-hidden', className)}
    >
      {children}
    </div>
  )
}
