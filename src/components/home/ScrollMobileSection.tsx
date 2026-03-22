'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * ScrollMobileSection — solo mobile (block md:hidden)
 *
 * Approccio: CSS sticky + video auto-play normale.
 * NON si usa video.currentTime scrubbing perché su mobile l'hardware
 * decoder non è ottimizzato per seek continui → jank inevitabile.
 *
 * Il video gira fluidamente (hardware-accelerated), i testi appaiono
 * in base alla posizione scroll (calcolo scroll leggero, zero seeking).
 */
export function ScrollMobileSection() {
  const outerRef   = useRef<HTMLDivElement>(null)
  const stickyRef  = useRef<HTMLElement>(null)
  const videoRef   = useRef<HTMLVideoElement>(null)
  const mountedRef = useRef(true)

  // Ref per evitare setState ad ogni tick scroll — solo sui cambi di soglia
  const showText1Ref = useRef(true)
  const showText2Ref = useRef(false)

  const [showText1,  setShowText1]  = useState(true)
  const [showText2,  setShowText2]  = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [isMobile,   setIsMobile]   = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  )

  useEffect(() => {
    mountedRef.current = true
    return () => { mountedRef.current = false }
  }, [])

  // ── Rilevamento mobile ────────────────────────────────────────────────────
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const t  = setTimeout(() => { if (mountedRef.current) setIsMobile(mq.matches) }, 0)
    const handler = (e: MediaQueryListEvent) => { if (mountedRef.current) setIsMobile(e.matches) }
    mq.addEventListener('change', handler)
    return () => { clearTimeout(t); mq.removeEventListener('change', handler) }
  }, [])

  // ── Testi basati su scroll progress — ZERO video seeking ─────────────────
  useEffect(() => {
    if (!isMobile || !outerRef.current) return

    const outer = outerRef.current

    const onScroll = () => {
      const rect         = outer.getBoundingClientRect()
      const scrollable   = outer.offsetHeight - window.innerHeight
      const progress     = Math.max(0, Math.min(1, -rect.top / scrollable))

      const t1 = progress <= 0.3
      const t2 = progress >= 0.35 && progress <= 0.68

      if (t1 !== showText1Ref.current) {
        showText1Ref.current = t1
        if (mountedRef.current) setShowText1(t1)
      }
      if (t2 !== showText2Ref.current) {
        showText2Ref.current = t2
        if (mountedRef.current) setShowText2(t2)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMobile])

  // ── Video: forza load + play/pause via IntersectionObserver ──────────────
  useEffect(() => {
    if (!isMobile || !stickyRef.current || !videoRef.current) return

    const video = videoRef.current

    // Forza il browser a iniziare il buffering (Safari/Chrome mobile ignorano preload="auto")
    video.load()

    // Fallback: se loadeddata non scatta entro 3s mostriamo comunque la sezione
    const fallbackTimer = setTimeout(() => {
      if (mountedRef.current) setVideoReady(true)
    }, 3000)

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!mountedRef.current) return
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
          video.currentTime = 0
        }
      },
      { threshold: 0.1 }
    )

    io.observe(stickyRef.current)

    return () => {
      clearTimeout(fallbackTimer)
      io.disconnect()
      video.pause()
    }
  }, [isMobile])

  // ── Fallback errore video ─────────────────────────────────────────────────
  if (videoError) {
    return (
      <div className="block md:hidden relative w-full" style={{ height: '100dvh' }}>
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
  // outerRef crea lo spazio di scroll (300dvh).
  // stickyRef è sticky top-0 — si comporta come un'area "pinned" ma via CSS puro, zero GSAP.
  return (
    <div ref={outerRef} className="block md:hidden" style={{ height: '300dvh' }}>
      <section
        ref={stickyRef}
        className="sticky top-0 w-full overflow-hidden"
        style={{ height: '100dvh' }}
        aria-label="Il nostro metodo sostenibile"
      >

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

        {/* ── Video: auto-play hardware-accelerated, niente seeking ── */}
        <video
          ref={videoRef}
          poster="/images/fulgur-service-pulizie-sostenibili.jpg"
          preload="auto"
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={() => { if (mountedRef.current) setVideoReady(true) }}
          onError={() => { if (mountedRef.current) setVideoError(true) }}
        >
          <source src="/videos/scroll-mobile.webm" type="video/webm" />
          <source src="/videos/scroll-mobile-opt.mp4" type="video/mp4" />
        </video>

        {/* ── Gradient bottom per leggibilità testi ── */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-10 h-[150px] pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}
        />

        {/* ── Overlay testi basati su scroll progress ── */}
        <AnimatePresence mode="wait">

          {showText1 && (
            <motion.div
              key="t1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
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

          {showText2 && (
            <motion.div
              key="t2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
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

        </AnimatePresence>

        {/* Indicatore scroll — sparisce dopo 30% di progresso */}
        <AnimatePresence>
          {showText1 && (
            <motion.div
              key="scroll-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
            >
              <div className="w-[1px] h-8 animate-pulse" style={{ background: 'rgba(255,255,255,0.4)' }} />
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </div>
  )
}
