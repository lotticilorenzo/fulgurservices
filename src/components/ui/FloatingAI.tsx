'use client'

import React, { useState } from 'react'
import { motion as m, AnimatePresence as AP } from 'framer-motion'
import { Robot, X, ChatCircleDots, PaperPlaneRight } from '@phosphor-icons/react'
import { AIChatInterface } from '@/components/ai/AIChatInterface'

export function FloatingAI() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-[60] flex flex-col items-start gap-4">
      
      {/* Mini Chat Window */}
      <AP>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: 'bottom left' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[calc(100vw-3rem)] sm:w-[400px] h-[500px] shadow-2xl rounded-[2rem] overflow-hidden border border-white/10 bg-black/60 backdrop-blur-2xl"
          >
            <div className="relative h-full">
              {/* Close Button Inside Window */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-[70] p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                aria-label="Chiudi assistente"
              >
                <X size={20} />
              </button>
              
              {/* Reuse internal Chat UI logic but scaled for mini-window */}
              <div className="h-full scale-[0.9] origin-top">
                <AIChatInterface />
              </div>
            </div>
          </m.div>
        )}
      </AP>

      {/* Floating Toggle Button */}
      <m.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-[0_0_30px_rgba(78,203,160,0.3)] group overflow-hidden"
        aria-label="Apri Fulgur AI Agent"
      >
        <m.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 bg-white"
        />
        
        <AP mode="wait">
          {isOpen ? (
            <m.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={28} weight="bold" />
            </m.div>
          ) : (
            <m.div key="icon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Robot size={28} weight="fill" />
            </m.div>
          )}
        </AP>
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute left-full ml-4 hidden lg:block pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity">
            <div className="bg-[var(--tx-1)] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl whitespace-nowrap border border-white/10">
              Chiedi a Fulgur AI
            </div>
          </div>
        )}
      </m.button>
    </div>
  )
}
