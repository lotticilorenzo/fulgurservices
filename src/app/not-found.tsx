'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CaretLeft } from '@phosphor-icons/react'
import { ParticleField } from '@/components/ui/ParticleField'

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[var(--bg)] flex items-center justify-center overflow-hidden">
      
      {/* Background Particles as required */}
      <ParticleField />
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent)]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        
        {/* Animated 404 Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          <h1 className="font-display text-[150px] sm:text-[200px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-b from-[var(--tx-1)] to-[#12151E] select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center mix-blend-overlay">
            <span className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--accent)]">
              Errore
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md"
        >
          <h2 className="font-display text-2xl font-bold text-[var(--tx-1)] mb-4">
            Pagina non trovata
          </h2>
          <p className="font-sans text-[var(--tx-2)] mb-10 text-balance leading-relaxed">
            Sembra che ci siamo persi. La pagina che stavi cercando non esiste o è stata spostata.
          </p>

          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--accent)] shadow-[0_0_20px_rgba(78,203,160,0.3)] font-display text-base font-bold text-[var(--bg)] hover:scale-105 active:scale-95 transition-transform">
            <CaretLeft weight="bold" /> Torna alla Home
          </Link>
        </motion.div>

      </div>
    </main>
  )
}
