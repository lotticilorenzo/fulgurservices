'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldCheck, Gauge, Lightning, ArrowRight } from '@phosphor-icons/react'
import { MachineBrand } from '@/lib/machinery-data'
import { SpotlightCard } from './SpotlightCard'

interface MachineryModalProps {
  brand: MachineBrand | null
  isOpen: boolean
  onClose: () => void
}

export function MachineryModal({ brand, isOpen, onClose }: MachineryModalProps) {
  if (!brand) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-[var(--bg-2)] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
            >
              <X size={20} weight="bold" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px]">
              {/* Left Side: Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-8">
                   <div className="h-2 w-12 bg-[var(--accent)] rounded-full" />
                   <span className="font-mono-fulgur text-xs font-bold uppercase tracking-widest text-[var(--tx-3)]">Specifiche Tecniche</span>
                </div>

                <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                  {brand.name}
                </h2>

                <p className="font-sans text-xl font-light text-[var(--tx-2)] leading-relaxed mb-10 border-l-2 border-[var(--accent)] pl-6">
                  {brand.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {brand.specs.map((spec, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl flex flex-col gap-2">
                       <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[var(--accent)]">{spec.label}</span>
                       <div className="font-mono-fulgur text-xl font-bold text-white flex items-baseline gap-1">
                          {spec.value}
                          {spec.unit && <span className="text-[10px] text-[var(--tx-3)]">{spec.unit}</span>}
                       </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-[var(--accent)]/5 border border-[var(--accent)]/10 font-sans text-sm font-light text-[var(--tx-2)] leading-relaxed">
                   <strong className="text-[var(--accent)]">Campo di applicazione:</strong><br />
                   {brand.usage}
                </div>
              </div>

              {/* Right Side: Visual/Branding */}
              <div className="relative bg-black p-12 flex flex-col items-center justify-center border-l border-white/5 lg:block hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 to-transparent opacity-50" />
                 
                 <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex flex-col gap-8 opacity-20">
                       <ShieldCheck size={48} weight="fill" />
                       <Gauge size={48} weight="fill" />
                       <Lightning size={48} weight="fill" />
                    </div>
                    
                    <div>
                       <div className="mb-4 text-[10px] font-mono-fulgur font-bold uppercase tracking-[0.3em] text-[var(--accent)]">Professional Hardware</div>
                       <p className="text-white/40 text-xs font-sans leading-relaxed">
                          La tecnologia che utilizziamo è il fondamento della nostra qualità. Ogni macchina è revisionata e scelta per le massime prestazioni.
                       </p>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
