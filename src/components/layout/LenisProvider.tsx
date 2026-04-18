'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * LenisProvider | smooth scroll globale, connesso a GSAP ScrollTrigger.
 * Nessun markup: puro effetto collaterale.
 */
export function LenisProvider() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.15,
      // Easing esponenziale | accelerazione immediata, deceleration naturale
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
      infinite: false,
    })

    // Sync Lenis → GSAP ScrollTrigger (cruciale per evitare desync)
    lenis.on('scroll', ScrollTrigger.update)

    // Usa il ticker di GSAP come RAF | impedisce il doppio requestAnimationFrame
    const onTick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0) // elimina lag compensation che causa micro-stuttering

    return () => {
      gsap.ticker.remove(onTick)
      lenis.destroy()
    }
  }, [])

  return null
}
