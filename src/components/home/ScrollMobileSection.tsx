'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ScrollMobileSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef   = useRef<HTMLVideoElement>(null)
  const mountedRef = useRef(true)

  // Tracciamo solo i booleani di visibilità, non il float raw — evita re-render ad ogni tick
  const [showText1, setShowText1] = useState(true)
  const [showText2, setShowText2] = useState(false)
  const [videoReady,     setVideoReady]     = useState(false)
  const [videoError,     setVideoError]     = useState(false)
  const [isMobile,       setIsMobile]       = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches)

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

    const initST = () => {
      if (!mountedRef.current) return
      st = ScrollTrigger.create({
        trigger:             section,
        start:               'top top',
        end:                 '+=250%',
        // scrub: 0.3 — GSAP gestisce il suo smoothing interno via ticker RAF.
        // NON usare scrub > 0.5 + LERP esterno: doppio smoothing = video disconnesso dal dito.
        scrub:               0.3,
        pin:                 true,
        anticipatePin:       1,
        invalidateOnRefresh: true,
        refreshPriority:     1,
        onUpdate: (self) => {
          // Assign diretto: nessun RAF esterno, nessun LERP manuale.
          // GSAP chiama onUpdate già a 60fps durante il suo tween interno.
          if (video.duration) {
            video.currentTime = self.progress * video.duration
          }
          if (mountedRef.current) {
            setShowText1(self.progress >= 0.0 && self.progress <= 0.3)
            setShowText2(self.progress >= 0.35 && self.progress <= 0.65)
          }
        },
      })
    }

    // readyState >= 2 = HAVE_CURRENT_DATA: primo frame decodificato, duration nota.
    // Con preload="auto" ci arriviamo rapidamente — non serve aspettare canplaythrough.
    if (video.readyState >= 2) {
      initST()
    } else {
      video.addEventListener('loadeddata', initST, { once: true })
    }

    return () => { st?.kill() }
  }, [isMobile])

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

        {/* ── Video con <source> statici — preload="auto" necessario per scrubbing GSAP fluido. ── */}
        {/*    Il browser pre-bufferizza i frame prima che ScrollTrigger inizi a fare seek.       */}
        <video
          ref={videoRef}
          poster="/images/fulgur-service-pulizie-sostenibili.jpg"
          preload="auto"
          muted
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => { if (mountedRef.current) setVideoReady(true) }}
          onError={() => { if (mountedRef.current) setVideoError(true) }}
        >
          <source src="/videos/scroll-mobile.webm" type="video/webm" />
          <source src="/videos/scroll-mobile-opt.mp4" type="video/mp4" />
        </video>

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
