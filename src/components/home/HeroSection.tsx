'use client'

import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { ShieldCheck, Leaf, Clock, ArrowDown, Star } from '@phosphor-icons/react'
import { GlowBadge } from '@/components/ui/GlowBadge'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ParticleField } from '@/components/ui/ParticleField'

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const [showScroll, setShowScroll] = React.useState(true)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setShowScroll(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    if (!containerRef.current || !leftContentRef.current) return

    const ctx = gsap.context(() => {
      // Seleziona i figli diretti (elementi marcati con gs-reveal)
      const elements = gsap.utils.toArray('.gs-reveal', leftContentRef.current)
      
      gsap.fromTo(
        elements,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.08, 
          duration: 0.8, 
          ease: 'power3.out',
          delay: 0.1 // Ritardo ridotto per reattività
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden pt-[140px] pb-16"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster="/images/hero-fallback.jpg"
        >
          <source src="/videos/robot-pulizie.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Background Layer (Aggiuntivo se necessario) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--accent-glow),transparent_70%)] opacity-20 pointer-events-none z-20" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[55%_45%] lg:items-center xl:gap-24 xl:px-8">
        
        {/* LATO SINISTRO: Testo */}
        <div ref={leftContentRef} className="flex flex-col items-start pt-12 lg:pt-0">

          <h1 className="gs-reveal font-display text-[11vw] font-black leading-[0.95] tracking-tight text-white sm:text-[8vw] lg:text-7xl xl:text-8xl">
            Puliamo il Futuro<br />
            <span className="text-outline-accent">con l&apos;Energia</span><br />
            <span className="text-[var(--accent)]">della Natura</span>
          </h1>

          <div className="gs-reveal mt-6 flex items-center gap-2 font-mono-fulgur text-xs text-white/70">
            <div className="flex text-[var(--accent)]">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} weight="fill" />)}
            </div>
            <span>4.9 su Google · 47 recensioni verificate</span>
          </div>

          <p className="gs-reveal mt-8 max-w-xl font-body text-lg font-light leading-relaxed text-white/90 lg:text-xl">
            Siamo l&apos;<strong>impresa di pulizie di riferimento a Parma e provincia</strong>. 
            Oltre 30 anni di esperienza, tecnologie all&apos;avanguardia e soluzioni 
            sostenibili per ogni tipo di ambiente e superficie.
          </p>

          <div className="gs-reveal mt-10 flex flex-wrap items-center gap-x-2 gap-y-2.5 font-mono-fulgur text-[9px] font-bold uppercase tracking-[0.15em] text-white/60 sm:gap-x-4 sm:text-xs sm:tracking-[0.2em]">
            <span className="bg-white/10 px-2.5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm whitespace-nowrap">30+ anni</span>
            <span className="hidden sm:inline text-[var(--accent)] opacity-50">·</span>
            <span className="bg-white/10 px-2.5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm whitespace-nowrap">500+ clienti</span>
            <span className="hidden sm:inline text-[var(--accent)] opacity-50">·</span>
            <span className="bg-white/10 px-2.5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm whitespace-nowrap">12 settori</span>
          </div>

          <div className="gs-reveal mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Link href="/preventivo" tabIndex={-1} className="w-full sm:w-auto">
              <MagneticButton as="div" intensity={0.15} className="group flex h-[60px] w-full items-center justify-center rounded-full bg-[var(--accent)] px-10 font-display text-[16px] font-bold text-white transition-all hover:bg-[var(--accent-d)] shadow-[0_10px_30px_rgba(78,203,160,0.25)]">
                <span>Richiedi Sopralluogo Gratuito</span>
              </MagneticButton>
            </Link>
            <Link href="/servizi" tabIndex={-1} className="w-full sm:w-auto">
              <MagneticButton as="div" intensity={0.1} className="group flex h-[60px] w-full items-center justify-center rounded-full border border-white/30 px-10 font-display text-[16px] font-bold text-white transition-colors hover:bg-[var(--accent)] hover:border-[var(--accent)]">
                <span>Scopri i Servizi →</span>
              </MagneticButton>
            </Link>
          </div>

          <div className="gs-reveal mt-8 mb-4 sm:mb-0 flex flex-wrap gap-x-6 gap-y-3 font-mono-fulgur text-[10px] font-medium tracking-widest text-white/50 uppercase">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[var(--accent)]" aria-hidden="true" />
              <span className="whitespace-nowrap text-white/80">Assicurati RCT €2M</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf size={16} className="text-[var(--accent)]" aria-hidden="true" />
              <span className="whitespace-nowrap text-white/80">Prodotti Eco Certificati</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[var(--accent)]" aria-hidden="true" />
              <span className="whitespace-nowrap text-white/80">Risposta in 24h</span>
            </div>
          </div>
        </div>

        {/* LATO DESTRO: Visual */}
        <div className="relative flex items-center justify-center pb-12 lg:pb-0">
          {/* Main Circle Component */}
          <div className="relative flex h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[420px] lg:w-[420px] items-center justify-center">
            {/* Pulsing glow background */}
            <div className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-20 blur-[60px]" />
            
            {/* Circular Image Container */}
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[var(--br)] bg-white p-1 shadow-[0_10px_40px_rgba(42,140,122,0.1)] transition-colors duration-500 hover:border-[var(--accent)] hover:shadow-[0_15px_50px_rgba(42,140,122,0.2)]">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/images/fulgur-service-team-ai.png"
                  alt="Il team Fulgur Service a Parma — pulizie professionali"
                  fill
                  sizes="(max-width: 768px) 300px, 420px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Floating Mini Cards */}
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }}
              className="absolute -right-4 top-6 lg:-right-14 lg:top-12 z-20 min-w-[120px] rounded-2xl border border-white/40 bg-white/70 backdrop-blur-md px-5 py-4 shadow-2xl shadow-green-900/20 sm:min-w-[140px]"
            >
              <div className="flex flex-col items-start leading-tight">
                <div className="font-display text-3xl font-extrabold text-[var(--accent)] tracking-tighter sm:text-4xl">30+</div>
                <div className="mt-1 font-mono-fulgur text-[9px] font-bold uppercase tracking-widest text-[var(--tx-2)] sm:text-[10px]">Anni esperienza</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 8 }}
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 5.2, ease: 'easeInOut', delay: 1 }}
              className="absolute -left-6 bottom-12 lg:-left-16 lg:bottom-20 z-20 min-w-[120px] rounded-2xl border border-white/40 bg-white/70 backdrop-blur-md px-5 py-4 shadow-2xl shadow-green-900/20 sm:min-w-[140px]"
            >
              <div className="flex flex-col items-start leading-tight">
                  <div className="font-display text-3xl font-extrabold text-[var(--accent)] tracking-tighter sm:text-4xl">500+</div>
                  <div className="mt-1 font-mono-fulgur text-[9px] font-bold uppercase tracking-widest text-[var(--tx-2)] sm:text-[10px]">Clienti soddisfatti</div>
                </div>
            </motion.div>

            <motion.div
              initial={{ y: -6 }}
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 2 }}
              className="absolute -left-2 top-20 lg:-left-10 lg:top-32 z-20 min-w-[120px] rounded-2xl border border-white/40 bg-white/70 backdrop-blur-md px-5 py-4 shadow-2xl shadow-green-900/20 sm:min-w-[140px]"
            >
              <div className="flex flex-col items-start leading-tight">
                  <div className="font-display text-3xl font-extrabold text-[var(--accent)] tracking-tighter sm:text-4xl">12</div>
                  <div className="mt-1 font-mono-fulgur text-[9px] font-bold uppercase tracking-widest text-[var(--tx-2)] sm:text-[10px]">Settori serviti</div>
                </div>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ opacity: showScroll ? 1 : 0, y: showScroll ? 0 : 20 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--tx-3)]">Scorri</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-[var(--accent)]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
