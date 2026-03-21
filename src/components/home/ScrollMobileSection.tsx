'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ScrollMobileSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef   = useRef<HTMLVideoElement>(null)
  const mountedRef = useRef(true)                // previene setState dopo unmount

  const [scrollProgress, setScrollProgress] = useState(0)
  const [videoReady,     setVideoReady]     = useState(false)
  const [videoError,     setVideoError]     = useState(false)
  const [isMobile,       setIsMobile]       = useState(false)

  // Previene setState dopo unmount
  useEffect(() => {
    mountedRef.current = true
    return () => { mountedRef.current = false }
  }, [])

  // ── Rilevamento mobile ────────────────────────────────────────────────────
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const t  = setTimeout(() => {
      if (mountedRef.current) setIsMobile(mq.matches)
    }, 0)
    const handler = (e: MediaQueryListEvent) => {
      if (mountedRef.current) setIsMobile(e.matches)
    }
    mq.addEventListener('change', handler)
    return () => {
      clearTimeout(t)
      mq.removeEventListener('change', handler)
    }
  }, [])

  // ── GSAP ScrollTrigger + video scrub — SOLO mobile ───────────────────────
  useEffect(() => {
    if (!isMobile || !sectionRef.current || !videoRef.current) return

    const section = sectionRef.current
    const video   = videoRef.current

    let st: ReturnType<typeof ScrollTrigger.create> | null = null
    let rafId        = 0
    let targetProgress = 0
    let currentLerp    = 0

    // LERP loop — fluido senza jank, si ferma fuori viewport
    const lerpLoop = () => {
      currentLerp += (targetProgress - currentLerp) * 0.08
      if (video.duration && Math.abs(currentLerp - video.currentTime) > 0.005) {
        video.currentTime = currentLerp * video.duration
      }
      rafId = requestAnimationFrame(lerpLoop)
    }

    const startRAF = () => { if (!rafId) rafId = requestAnimationFrame(lerpLoop) }
    const stopRAF  = () => { cancelAnimationFrame(rafId); rafId = 0 }

    // IntersectionObserver — avvia/ferma RAF solo quando visibile
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startRAF()
        } else {
          video.pause()
          stopRAF()
        }
      },
      { threshold: 0 }
    )
    observer.observe(section)

    const initST = () => {
      st = ScrollTrigger.create({
        trigger:             section,
        start:               'top top',
        end:                 '+=250%',
        scrub:               1.5,
        pin:                 true,
        anticipatePin:       1,
        invalidateOnRefresh: true,
        refreshPriority:     1,
        onUpdate: (self) => {
          targetProgress = self.progress
          if (mountedRef.current) setScrollProgress(self.progress)
        },
      })
    }

    if (video.readyState >= 4) {
      initST()
    } else {
      video.addEventListener('canplaythrough', initST, { once: true })
    }

    return () => {
      st?.kill()
      stopRAF()
      observer.disconnect()
      // NON svuotare video.src — evita onError sul dismount
    }
  }, [isMobile])

  // ── Visibilità testi ──────────────────────────────────────────────────────
  const showText1 = scrollProgress >= 0.0  && scrollProgress <= 0.3
  const showText2 = scrollProgress >= 0.35 && scrollProgress <= 0.65

  // ── Fallback errore video ─────────────────────────────────────────────────
  if (videoError) {
    return (
      <div
        className="block md:hidden relative w-full overflow-hidden"
        style={{ height: '100dvh' }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: 'linear-gradient(160deg, #0d2b22 0%, #1a4535 100%)' }}
        >
          <div className="flex flex-col items-center gap-6 px-8 text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(78,203,160,0.15)', border: '1px solid rgba(78,203,160,0.3)' }}
            >
              <svg width="28" height="28" viewBox="0 0 14 24" fill="#4ECBA0" aria-hidden="true">
                <path d="M10 1L3 13h5L6 23 14 10H9z" />
              </svg>
            </div>
            <p className="font-display font-semibold text-white text-xl leading-snug">
              Scegliamo ogni strumento<br />con cura, nel rispetto<br />della natura.
            </p>
            <p className="font-mono-fulgur text-[10px] uppercase tracking-widest text-white/40">
              Fulgur Service · Parma
            </p>
          </div>
        </div>
      </div>
    )
  }

  // ── Render principale ─────────────────────────────────────────────────────
  return (
    <section
      ref={sectionRef}
      className="block md:hidden relative"
      aria-label="Il nostro metodo sostenibile"
    >
      <div className="h-[100dvh] w-full overflow-hidden">

        {/* ── Skeleton loader ── */}
        <AnimatePresence>
          {!videoReady && (
            <motion.div
              key="skeleton"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute inset-0 z-30 flex flex-col items-center justify-center"
              style={{ background: '#0d2b22' }}
            >
              <div
                className="w-7 h-7 rounded-full animate-spin mb-4"
                style={{ border: '1.5px solid rgba(78,203,160,0.3)', borderTopColor: '#4ECBA0' }}
              />
              <span className="font-mono-fulgur text-[10px] uppercase tracking-[0.2em] text-white/30">
                Caricamento...
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Video — src solo su mobile, nessun download su desktop ── */}
        <video
          ref={videoRef}
          src={isMobile ? '/videos/scroll-mobile.mp4' : ''}
          preload={isMobile ? 'auto' : 'none'}
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ willChange: 'transform' }}
          onCanPlayThrough={() => { if (mountedRef.current) setVideoReady(true) }}
          onError={() => { if (mountedRef.current) setVideoError(true) }}
        />

        {/* ── Gradient bottom permanente per leggibilità ── */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-10 h-[120px] pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent)' }}
        />

        {/* ── Overlay testi ── */}
        <AnimatePresence mode="wait">

          {/* Testo 1 — 0.0 → 0.3 */}
          {showText1 && (
            <motion.div
              key="t1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="absolute inset-x-0 z-20 flex justify-center px-6"
              style={{ bottom: '15%' }}
            >
              <p
                className="font-display font-semibold text-white text-center drop-shadow-lg"
                style={{ fontSize: 'clamp(20px, 5vw, 28px)' }}
              >
                Strumenti che rispettano la natura
              </p>
            </motion.div>
          )}

          {/* Testo 2 — 0.35 → 0.65 */}
          {showText2 && (
            <motion.div
              key="t2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center"
              style={{ background: 'rgba(0,0,0,0.12)' }}
            >
              <div className="flex flex-col items-center gap-3">
                <p
                  className="font-display font-semibold text-white drop-shadow-lg"
                  style={{ fontSize: 'clamp(20px, 5vw, 28px)' }}
                >
                  Prodotti certificati eco
                </p>
                <p
                  className="font-body font-normal text-white/85 drop-shadow"
                  style={{ fontSize: 'clamp(14px, 3.5vw, 18px)' }}
                >
                  Scegliamo ogni strumento con cura
                </p>
              </div>
            </motion.div>
          )}

          {/* Testo 3 — 0.70 → 1.0: nessun testo, il video respira */}

        </AnimatePresence>
      </div>
    </section>
  )
}
