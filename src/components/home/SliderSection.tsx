'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'

const SLIDES = [
  {
    type: 'video',
    title: 'Puliamo',
    subtitle: 'Ogni ambiente una sola missione: la perfezione. Cura ed energia per i tuoi spazi.',
    srcDesktop: '/videos/impresa-pulizie-parma-videopresentazione.mp4',
    poster: '/images/team-operatori-pulizie-professionali-parma.webp',
    titleClass: 'text-white'
  },
  {
    type: 'image',
    title: 'Il futuro',
    subtitle: 'Tecnologie all\'avanguardia e 30 anni di esperienza per spazi sempre all\'altezza.',
    srcDesktop: '/images/macchinari-pulizie-professionali.jpg',
    titleClass: 'text-white'
  },
  {
    type: 'image',
    title: 'L\'energia',
    subtitle: 'Interventi mirati con personale qualificato e protocolli certificati.',
    srcDesktop: '/images/servizi/pulizie-industriali-parma.jpg',
    titleClass: 'text-outline-accent'
  },
  {
    type: 'image',
    title: 'Natura',
    subtitle: 'Soluzioni sostenibili, prodotti eco-compatibili e rispetto totale per ogni ambiente.',
    srcDesktop: '/images/fulgur-service-pulizie-sostenibili.jpg',
    titleClass: 'text-[var(--accent)]'
  }
]

export function SliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[80dvh] w-full overflow-hidden bg-black py-24">
      {/* Background Media */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 h-full w-full pointer-events-none"
        >
          {SLIDES[currentSlide].type === 'video' ? (
            <video
              suppressHydrationWarning
              aria-hidden="true"
              className="h-full w-full object-cover"
              poster={SLIDES[currentSlide].poster}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              disablePictureInPicture
            >
              <source src={SLIDES[currentSlide].srcDesktop} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={SLIDES[currentSlide].srcDesktop!}
              alt={SLIDES[currentSlide].title}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      <div className="mx-auto max-w-7xl px-6 relative z-10 h-full flex flex-col justify-center">
        <SectionLabel className="mb-8">— TECNOLOGIA & METODO</SectionLabel>
        
        <div className="relative h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <h2 className="font-display font-black text-[clamp(40px,8vw,80px)] leading-none tracking-tighter mb-6 uppercase">
                <span className={SLIDES[currentSlide].titleClass}>
                  {SLIDES[currentSlide].title}
                </span>
              </h2>
              <p className="max-w-xl font-body text-xl font-light text-white/70 leading-relaxed">
                {SLIDES[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="mt-12 flex gap-3">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 rounded-full transition-all duration-500 ${
                currentSlide === idx ? 'w-12 bg-[var(--accent)]' : 'w-4 bg-white/20'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
