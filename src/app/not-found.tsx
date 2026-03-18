'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, House } from '@phosphor-icons/react'

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      
      {/* Background dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, var(--tx-1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />
      
      {/* Glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-2xl mx-auto">
        
        {/* Large 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-display font-black text-[clamp(100px,20vw,200px)] leading-none text-transparent select-none"
            style={{ WebkitTextStroke: '2px var(--accent)', color: 'transparent' }}
          >
            404
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-glow)] border border-[var(--accent)]/20 px-4 py-2 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Pagina Non Trovata
            </span>
          </div>
          
          <h1 className="font-display text-3xl font-bold text-[var(--tx-1)] sm:text-4xl mb-4">
            Sembra che ci siamo persi.
          </h1>
          <p className="font-sans text-[var(--tx-2)] text-lg font-light text-balance leading-relaxed max-w-md mx-auto">
            La pagina che stavi cercando non esiste o è stata spostata. Torna alla home per continuare la navigazione.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--accent)] font-display text-base font-bold text-white shadow-lg hover:bg-[var(--accent-d)] hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <House size={18} weight="duotone" />
              Torna alla Home
            </Link>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--br)] font-display text-base font-bold text-[var(--tx-1)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              Contattaci
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  )
}
