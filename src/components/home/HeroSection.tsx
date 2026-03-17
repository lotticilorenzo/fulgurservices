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

  useLayoutEffect(() => {
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
          stagger: 0.1, 
          duration: 1, 
          ease: 'power3.out',
          delay: 0.2 // Piccolo ritardo iniziale
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[var(--bg-2)] to-[var(--bg-3)] pt-[100px] pb-16"
    >
      {/* Background Layer */}
      <ParticleField />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--accent-glow),transparent_70%)] opacity-40 pointer-events-none" />
      
      {/* Decorative Blob */}
      <div className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-[var(--accent)] opacity-5 blur-[120px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[55%_45%] lg:items-center xl:gap-24 xl:px-8">
        
        {/* LATO SINISTRO: Testo */}
        <div ref={leftContentRef} className="flex flex-col items-start pt-12 lg:pt-0">
          <div className="gs-reveal">
            <GlowBadge className="mb-6">Parma · Dal 1994</GlowBadge>
          </div>

          <h1 className="gs-reveal font-display text-[clamp(42px,6.5vw,88px)] font-extrabold leading-[0.95] tracking-tight">
            <span className="block text-[var(--tx-1)]">Puliamo il Futuro</span>
            <span className="block font-light text-[var(--accent-d)]">con l'Energia</span>
            <span className="block text-[var(--accent)]">della Natura</span>
          </h1>

          <div className="gs-reveal mt-6 flex items-center gap-2 font-mono-fulgur text-xs text-[var(--tx-2)]">
            <div className="flex text-[var(--accent)]">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} weight="fill" />)}
            </div>
            <span>4.9 su Google · 47 recensioni verificate</span>
          </div>

          <p className="gs-reveal mt-8 max-w-xl font-sans text-base font-light text-[var(--tx-2)] lg:text-lg">
            Impresa di pulizie professionali a Parma e provincia. <br className="hidden sm:block" />
            30 anni di esperienza, tecnologie all'avanguardia, <br className="hidden sm:block" />
            soluzioni sostenibili per ogni ambiente.
          </p>

          <div className="gs-reveal mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono-fulgur text-xs font-medium uppercase tracking-widest text-[var(--tx-2)]">
            <span>30+ anni</span>
            <span className="text-[var(--accent)]">·</span>
            <span>500+ clienti</span>
            <span className="text-[var(--accent)]">·</span>
            <span>12 settori</span>
          </div>

          <div className="gs-reveal mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/preventivo" tabIndex={-1}>
              <MagneticButton intensity={0.15} className="group flex h-[54px] w-full items-center justify-center rounded-full bg-[var(--accent)] px-8 font-display text-[15px] font-bold text-white transition-all hover:bg-[var(--accent-d)] sm:w-auto">
                <span>Richiedi Sopralluogo Gratuito</span>
              </MagneticButton>
            </Link>
            <Link href="/servizi" tabIndex={-1}>
              <MagneticButton intensity={0.1} className="group flex h-[54px] w-full items-center justify-center rounded-full border border-[var(--br-solid)] px-8 font-display text-[15px] font-bold text-[var(--tx-1)] transition-colors hover:bg-[var(--accent)] hover:text-white sm:w-auto">
                <span>Scopri i Servizi →</span>
              </MagneticButton>
            </Link>
          </div>

          <div className="gs-reveal mt-8 flex flex-wrap gap-6 font-mono-fulgur text-[11px] font-medium tracking-widest text-[var(--tx-3)] uppercase">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[var(--accent)]" />
              <span>Assicurati RCT €2M</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf size={16} className="text-[var(--accent)]" />
              <span>Prodotti Eco Certificati</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[var(--accent)]" />
              <span>Risposta in 24h</span>
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
            {/* Circular Image Container */}
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[var(--br)] bg-white p-1 shadow-[0_10px_40px_rgba(42,140,122,0.1)] transition-colors duration-500 hover:border-[var(--accent)] hover:shadow-[0_15px_50px_rgba(42,140,122,0.2)]">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/images/fulgur-service-team-lavoro.jpg"
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
              className="absolute -right-6 top-6 lg:-right-14 lg:top-12 z-20 min-w-[140px] rounded-2xl border border-white/40 bg-white/70 backdrop-blur-md px-6 py-5 shadow-2xl shadow-green-900/20"
            >
              <div className="flex flex-col items-start leading-tight">
                <div className="font-display text-4xl font-extrabold text-[var(--accent)] tracking-tighter">30+</div>
                <div className="mt-1 font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--tx-2)]">Anni esperienza</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 8 }}
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 5.2, ease: 'easeInOut', delay: 1 }}
              className="absolute -left-8 bottom-12 lg:-left-16 lg:bottom-20 z-20 min-w-[140px] rounded-2xl border border-white/40 bg-white/70 backdrop-blur-md px-6 py-5 shadow-2xl shadow-green-900/20"
            >
              <div className="flex flex-col items-start leading-tight">
                <div className="font-display text-4xl font-extrabold text-[var(--accent)] tracking-tighter">500+</div>
                <div className="mt-1 font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--tx-2)]">Clienti soddisfattI</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -6 }}
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 2 }}
              className="absolute -left-4 top-20 lg:-left-10 lg:top-32 z-20 min-w-[140px] rounded-2xl border border-white/40 bg-white/70 backdrop-blur-md px-6 py-5 shadow-2xl shadow-green-900/20"
            >
              <div className="flex flex-col items-start leading-tight">
                <div className="font-display text-4xl font-extrabold text-[var(--accent)] tracking-tighter">HACCP</div>
                <div className="mt-1 font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--tx-2)]">Certificato</div>
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
