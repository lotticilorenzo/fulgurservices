'use client'

import { useRef, useMemo } from 'react'
import { type Variants, motion, AnimatePresence } from 'framer-motion'
import { useScrollVideoScrub } from '@/lib/useScrollVideoScrub'

/* ─── Easing curves ─── */
const EASE_OUT = [0.16, 1, 0.3, 1] as const
const EASE_IN  = [0.4, 0, 0.6, 1] as const

/* ─── Dati testuali per ogni capitolo ─── */
const CHAPTERS = [
  {
    id: 1,
    eyebrow: '01 / 04',
    title: 'Dal disordine…',
    subtitle: 'Ogni ambiente ha una storia da raccontare.',
    cta: null,
  },
  {
    id: 2,
    eyebrow: '02 / 04',
    title: '…alla perfezione.',
    subtitle: 'Il nostro team interviene con precisione chirurgica.',
    cta: null,
  },
  {
    id: 3,
    eyebrow: '03 / 04',
    title: "Energia della natura.",
    subtitle: 'Prodotti eco-certificati. Impatto zero sull\'ambiente.',
    cta: null,
  },
  {
    id: 4,
    eyebrow: '04 / 04',
    title: 'Il futuro è pulito.',
    subtitle: '30+ anni di esperienza · 500+ clienti soddisfatti.',
    cta: 'Richiedi Sopralluogo Gratuito',
  },
]

/* ─── Immagini fallback mobile — immagini progetto esistenti ─── */
const MOBILE_IMAGES = [
  '/images/pulizie-professionali-parma-hero.jpg',
  '/images/fulgur-service-team-lavoro.jpg',
  '/images/fulgur-service-pulizie-sostenibili.jpg',
  '/images/macchinari-pulizie-professionali.jpg',
]

/* ─── Motion variants ─── */
const textVariants: Variants = {
  hidden:  { opacity: 0, y: 32, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: 'blur(4px)',
    transition: { duration: 0.35, ease: EASE_IN },
  },
}

const eyebrowVariants: Variants = {
  hidden:  { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_OUT, delay: 0.05 } },
  exit:    { opacity: 0, x: 16, transition: { duration: 0.25 } },
}

const subtitleVariants: Variants = {
  hidden:  { opacity: 0, y: 32, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.65, ease: EASE_OUT, delay: 0.12 } },
  exit:    { opacity: 0, y: -20, filter: 'blur(4px)', transition: { duration: 0.35, ease: EASE_IN } },
}

const ctaVariants: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.22, duration: 0.55, ease: EASE_OUT } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
}

/* ─── Componente principale ─── */
export function ScrollVideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef   = useRef<HTMLVideoElement>(null)

  const { progress, isMobile } = useScrollVideoScrub(sectionRef, videoRef, { totalVh: 500 })

  // Calcola il capitolo attivo (0–3) in base al progresso
  const activeChapter = useMemo(() => {
    if (progress < 0.25) return 0
    if (progress < 0.50) return 1
    if (progress < 0.75) return 2
    return 3
  }, [progress])

  /* ─── MOBILE: layout statico pulito a card chiare ─── */
  if (isMobile) {
    return (
      <section ref={sectionRef} className="relative bg-[var(--bg)] py-16 px-6 sm:px-8 border-t border-b border-[var(--br)] overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="mb-10 text-left sm:text-center">
            <span className="font-mono-fulgur text-xs font-bold text-[var(--accent)] tracking-widest uppercase block mb-3">
              Processo Operativo
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--tx-1)]">
              Il nostro metodo
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            {CHAPTERS.map((ch, i) => (
              <div 
                key={ch.id} 
                className="relative p-6 sm:p-8 rounded-3xl bg-[var(--bg-2)] border border-[var(--br)] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 flex-col sm:flex-row">
                  <div className="flex shrink-0 items-center justify-center w-12 h-12 rounded-xl bg-white border border-[var(--br)] shadow-sm">
                    <span className="font-mono-fulgur text-sm font-bold text-[var(--accent)]">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--tx-1)] mb-2 mt-1 sm:mt-0">
                      {ch.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-[var(--tx-2)] leading-relaxed mb-1">
                      {ch.subtitle}
                    </p>
                    {ch.cta && (
                      <a
                        href="https://wa.me/393383160091?text=Ciao%2C%20vorrei%20richiedere%20un%20sopralluogo%20gratuito"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-d)] text-white font-display font-bold text-[15px] px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_16px_rgba(78,203,160,0.3)] w-full"
                      >
                        {ch.cta}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  /* ─── DESKTOP: video scrub + testi animati ─── */
  return (
    <section
      ref={sectionRef}
      style={{ height: '800vh' }}
      className="relative"
      aria-label="Scroll per scoprire il nostro processo"
    >
      {/* ── Sticky container ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">

        {/* Video fullscreen scrubbed */}
        <video
          ref={videoRef}
          src="/videos/scroll-section.mp4"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />

        {/* Dark overlay gradient — assicura leggibilità testi */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to right, rgba(13,17,23,0.82) 0%, rgba(13,17,23,0.45) 60%, rgba(13,17,23,0.10) 100%)',
          }}
        />

        {/* Progress bar sottile in cima */}
        <div className="absolute top-0 left-0 right-0 h-[2px] z-30 bg-white/5">
          <div
            className="h-full bg-[#4ECBA0] transition-none"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* ── Testi animati ── */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-8 lg:px-16">
            <div className="max-w-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChapter}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {/* Eyebrow */}
                  <motion.span
                    variants={eyebrowVariants}
                    className="block font-mono text-xs tracking-[0.25em] uppercase text-[#4ECBA0]/80 mb-4"
                  >
                    {CHAPTERS[activeChapter].eyebrow}
                  </motion.span>

                  {/* Titolo */}
                  <motion.h2
                    variants={textVariants}
                    className="font-display text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-4"
                  >
                    {CHAPTERS[activeChapter].title}
                  </motion.h2>

                  {/* Sottotitolo */}
                  <motion.p
                    variants={subtitleVariants}
                    className="text-[#8A9BAE] text-lg lg:text-xl leading-relaxed mb-8"
                  >
                    {CHAPTERS[activeChapter].subtitle}
                  </motion.p>

                  {/* CTA opzionale nell'ultimo capitolo */}
                  {CHAPTERS[activeChapter].cta && (
                    <motion.div variants={ctaVariants}>
                      <a
                        href="https://wa.me/393383160091?text=Ciao%2C%20vorrei%20richiedere%20un%20sopralluogo%20gratuito"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#4ECBA0] hover:bg-[#6DD9B2] text-[#0D1117] font-bold text-base px-7 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(78,203,160,0.4)]"
                      >
                        {CHAPTERS[activeChapter].cta}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── Indicatore capitoli (dots destra) ── */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
          {CHAPTERS.map((_, i) => (
            <div
              key={i}
              className="transition-all duration-500"
              style={{
                width:  i === activeChapter ? 3 : 2,
                height: i === activeChapter ? 32 : 16,
                borderRadius: 4,
                background: i === activeChapter ? '#4ECBA0' : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>

        {/* ── Scroll hint (scompare dopo il primo capitolo) ── */}
        {progress < 0.08 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
          >
            <span className="text-white/30 text-xs font-mono tracking-widest uppercase">Scorri</span>
            <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
          </motion.div>
        )}
      </div>
    </section>
  )
}
