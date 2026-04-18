'use client'

import React, { useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { ArrowDown, ShieldCheck, Leaf, Clock } from '@phosphor-icons/react'
import { GlowBadge } from '@/components/ui/GlowBadge'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ParticleField } from '@/components/ui/ParticleField'

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const [showScroll, setShowScroll] = useState(true)

  /* scroll indicator hide */
  React.useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY < 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* GSAP reveal stagger | left column */
  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !containerRef.current || !leftRef.current) return

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<Element>('.hero-reveal', leftRef.current!)

      gsap.fromTo(
        els,
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.85,
          ease: 'power3.out',
          delay: 0.15,
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  /* GSAP reveal | right column */
  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !rightRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 40, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: 'power3.out', delay: 0.5 }
      )
    }, rightRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative flex sm:min-h-[100dvh] w-full items-center overflow-hidden bg-[var(--bg)] pt-[120px] pb-24 md:pt-28 md:pb-16 lg:pt-36 lg:pb-20 xl:pt-[140px]"
    >
      {/* Video sfondo */}
      <video
        suppressHydrationWarning
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        poster="/images/team-operatori-pulizie-professionali-parma.webp"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        disablePictureInPicture
      >
        <source src="/videos/sfondo-mobile-hero.mp4" media="(max-width: 767px)" type="video/mp4" />
        <source src="/videos/impresa-pulizie-parma-videopresentazione.mp4" type="video/mp4" />
      </video>

      {/* Overlay scuro | mantiene brand leggibile col contrasto del video */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none hidden sm:block"
        style={{ background: 'rgba(13,17,23,0.6)' }}
      />
      {/* Overlay dedicato esplosivo per Mobile (Vignetta) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none block sm:hidden"
        style={{ background: 'linear-gradient(to bottom, rgba(13,17,23,0.7) 0%, rgba(13,17,23,0.95) 100%)' }}
      />

      {/* Particle field | nascondiamo su mobile per non affaticare la CPU e ripulire il design */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        <ParticleField />
      </div>

      {/* Radial gradient accent low-opacity */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none hidden md:block"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 70% 80%, rgba(78,203,160,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 md:gap-12 px-6 lg:grid-cols-[55%_45%] xl:gap-20 xl:px-8">

        {/* | SINISTRA | */}
        <div ref={leftRef} className="flex flex-col items-start">

          {/* GlowBadge */}
          <div className="hero-reveal">
            <GlowBadge>Impresa di Pulizie Parma</GlowBadge>
          </div>

          {/* H1 | tre righe. leading-[1.0] su mobile evita il salto CLS verso sm:leading-[0.93] */}
          <h1 className="hero-reveal mt-5 font-display font-black leading-[1.0] sm:leading-[0.93] tracking-tight sm:tracking-tighter text-[clamp(42px,10vw,84px)] drop-shadow-2xl">
            <span className="sr-only">Fulgur Service | Impresa di Pulizie Parma</span>
            <span className="block text-white">Puliamo il Futuro</span>
            <span className="block text-outline-accent">con l&apos;Energia</span>
            <span className="block text-[var(--accent)]">della Natura</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-reveal mt-5 sm:mt-7 max-w-[50ch] font-body text-[0.95rem] sm:text-[1.05rem] font-light leading-relaxed text-white/80">
            Impresa di pulizie professionali con sede a{' '}
            <strong className="font-medium text-white">Parma</strong>, operativa in tutta Italia.
            35 anni di esperienza, tecnologie all&apos;avanguardia,
            soluzioni sostenibili per ogni ambiente.
          </p>

          {/* Stats inline */}
          <div className="hero-reveal mt-6 sm:mt-7 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-y-4 gap-x-2 sm:gap-x-5 font-mono-fulgur text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.08em] sm:tracking-[0.15em] text-white/80">
            <span className="flex items-center gap-2">
              <span className="text-[var(--accent)] text-[16px] sm:text-base font-black">35+</span> anni
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="flex items-center gap-2">
              <span className="text-[var(--accent)] text-[16px] sm:text-base font-black">12</span> aree di intervento
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="col-span-2 text-[var(--accent)] tracking-widest mt-1 sm:mt-0 opacity-90">Sopralluogo sempre gratuito</span>
          </div>

          {/* CTAs | gap-4 (16px) per separazione pollice sicura */}
          <div className="hero-reveal mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/preventivo" tabIndex={-1} className="w-full sm:w-auto">
              <MagneticButton
                as="div"
                intensity={0.15}
                aria-label="Richiedi sopralluogo gratuito"
                className="group relative flex h-[54px] sm:h-[58px] w-full items-center justify-center overflow-hidden rounded-full bg-[var(--accent)] px-8 font-display text-[15px] font-bold text-white shadow-[0_12px_32px_rgba(78,203,160,0.3)] transition-all hover:bg-[var(--accent-d)] hover:shadow-[0_16px_40px_rgba(78,203,160,0.4)] sm:w-auto shine-effect"
              >
                <span className="relative z-10 tracking-wide">Richiedi Sopralluogo</span>
              </MagneticButton>
            </Link>
            <Link href="/servizi" tabIndex={-1} className="w-full sm:w-auto mt-2 sm:mt-0">
              <MagneticButton
                as="div"
                intensity={0.1}
                aria-label="Scopri i servizi di Fulgur Service"
                className="group flex h-[54px] sm:h-[58px] w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 font-display text-[15px] font-bold text-white transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-white/10 sm:w-auto"
              >
                <span>Scopri i Servizi</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </MagneticButton>
            </Link>
          </div>

          {/* Trust micro-badge | mt-4 su mobile (più vicino ai CTA), mt-6 su sm+ */}
          <div className="hero-reveal mt-4 sm:mt-6 flex flex-col sm:flex-row flex-wrap gap-x-5 gap-y-3 font-mono-fulgur text-[9.5px] font-medium uppercase tracking-widest text-white/70">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[var(--accent)]" aria-hidden="true" />
              <span>Polizza assicurativa RCT/RCO</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf size={14} className="text-[var(--accent)]" aria-hidden="true" />
              <span>Prodotti Eco Certificati</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[var(--accent)]" aria-hidden="true" />
              <span>Risposta 24h</span>
            </div>
          </div>
        </div>

        {/* | DESTRA | (Hidden su mobile per risparmiare spazio e velocizzare lettura) */}
        <div
          ref={rightRef}
          className="relative hidden lg:flex items-center justify-center opacity-0"
        >
          {/* Grande cerchio immagine */}
          <div className="relative flex h-[260px] w-[260px] mt-10 sm:mt-0 items-center justify-center sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px] lg:h-[440px] lg:w-[440px] xl:h-[460px] xl:w-[460px]">

            {/* Glow aura */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(78,203,160,0.14) 40%, transparent 70%)',
              }}
            />

            {/* Anello esterno pulsante */}
            <div
              aria-hidden="true"
              className="absolute inset-[-16px] rounded-full border border-[var(--accent)] opacity-20 animate-ping-slow"
            />

            {/* Anello bordo accent */}
            <div className="absolute inset-0 rounded-full border border-[var(--accent)] opacity-25" />

            {/* Immagine circolare */}
            <div className="relative h-full w-full overflow-hidden rounded-full border border-[var(--br-h)] bg-[var(--bg-2)] p-1.5 shadow-[0_20px_60px_rgba(42,140,122,0.12)]">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/images/team-operatori-pulizie-professionali-parma.webp"
                  alt="Il team operativo di Fulgur Service schierato a Parma con i mezzi aziendali attrezzati"
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 460px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Card float: 35+ anni (Restored & Shifted) */}
            <motion.div
              initial={{ y: -6 }}
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }}
              className="absolute -right-8 top-20 z-20 sm:-right-10 sm:top-20 lg:-right-16 lg:top-24 glass-white rounded-2xl px-5 py-4 min-w-[120px] sm:min-w-[130px] shadow-xl"
            >
              <div className="flex flex-col items-start leading-tight">
                <div className="font-display text-3xl font-extrabold text-[var(--accent)] tracking-tighter sm:text-3xl md:text-4xl">30+</div>
                <div className="mt-1 font-mono-fulgur text-[9px] font-bold uppercase tracking-widest text-[var(--tx-2)]">
                  Anni<br />di know-how
                </div>
              </div>
            </motion.div>

            {/* Card float: 12 aree (Shifted) */}
            <motion.div
              initial={{ y: 8 }}
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 5.2, ease: 'easeInOut', delay: 1.2 }}
              className="absolute -left-10 bottom-20 z-20 glass-white rounded-2xl px-5 py-4 min-w-[120px] shadow-xl"
            >
              <div className="flex flex-col items-start leading-tight">
                <div className="font-display text-3xl font-extrabold text-[var(--accent)] tracking-tighter sm:text-3xl md:text-4xl">16</div>
                <div className="mt-1 font-mono-fulgur text-[9px] font-bold uppercase tracking-widest text-[var(--tx-2)]">
                  Aree di<br />intervento
                </div>
              </div>
            </motion.div>

            {/* Card float: TECNOLOGIE (New - Top Left dot) */}
            <motion.div
              initial={{ y: 0, x: 0 }}
              animate={{ y: [-4, 4, -4], x: [2, -2, 2] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute left-[-5%] top-[-5%] z-20 glass-white rounded-2xl px-5 py-3 min-w-[150px] shadow-xl hidden md:flex"
            >
              <div className="flex flex-col items-start leading-tight text-center w-full">
                <div className="font-display text-lg font-extrabold text-[var(--accent)] tracking-tight uppercase leading-[0.9]">TECNOLOGIE<br />& METODO</div>
                <div className="mt-1 font-mono-fulgur text-[8px] font-bold uppercase tracking-widest text-[var(--tx-2)]">Attrezzature PRO</div>
              </div>
            </motion.div>

            {/* Card float: ECO (New - Top Right dot) */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1.5 }}
              className="absolute right-[10%] top-[-10%] z-20 glass-white rounded-2xl px-5 py-3 min-w-[110px] shadow-xl"
            >
              <div className="font-display text-2xl font-extrabold text-[var(--accent)] tracking-tighter">ECO</div>
              <div className="mt-0.5 font-mono-fulgur text-[8px] font-bold uppercase tracking-widest text-[var(--tx-2)]">Certificati</div>
            </motion.div>

            {/* Card float: GREEN (New - Mid Left dot) */}
            <motion.div
              animate={{ x: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
              className="absolute -left-20 top-[40%] z-20 glass-white rounded-2xl px-5 py-3 min-w-[120px] shadow-xl hidden lg:flex flex-col items-start"
            >
              <div className="font-display text-2xl font-extrabold text-[var(--accent)] tracking-tighter leading-none">GREEN</div>
              <div className="mt-1.5 font-mono-fulgur text-[8px] font-bold uppercase tracking-widest text-[var(--tx-2)]">Impatto Zero</div>
            </motion.div>

            {/* Card float: SUN (New - Bottom Right dot) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 2.2 }}
              className="absolute -right-12 bottom-0 z-20 glass-white rounded-2xl px-5 py-3 min-w-[120px] shadow-xl"
            >
              <div className="font-display text-2xl font-extrabold text-[var(--accent)] tracking-tighter">SUN</div>
              <div className="mt-0.5 font-mono-fulgur text-[8px] font-bold uppercase tracking-widest text-[var(--tx-2)]">Fotovoltaico</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gradient di uscita verso il basso (si fonde col nero della ScrollVideoSection seguente) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #000000)' }}
      />

      {/* Scroll indicator */}
      <motion.div
        animate={{ opacity: showScroll ? 1 : 0, y: showScroll ? 0 : 16 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono-fulgur text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
          Scorri
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-[var(--accent)]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
