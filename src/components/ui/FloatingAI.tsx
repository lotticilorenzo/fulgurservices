'use client'

import React, { useState, useEffect } from 'react'
import { motion as m, AnimatePresence as AP } from 'framer-motion'
import { Robot, X, ChatCircleDots, PaperPlaneRight, Sparkle } from '@phosphor-icons/react'
import { AIChatInterface } from '@/components/ai/AIChatInterface'

export function FloatingAI() {
  const [isOpen, setIsOpen] = useState(false)
  const [showBubble, setShowBubble] = useState(false)

  useEffect(() => {
    // Show inviting bubble after 3 seconds if not open
    const timer = setTimeout(() => {
      if (!isOpen) setShowBubble(true)
    }, 4000)
    return () => clearTimeout(timer)
  }, [isOpen])

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

      {/* Speech Bubble / Invite */}
      <AP>
        {showBubble && !isOpen && (
          <m.div
            initial={{ opacity: 0, x: -20, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            className="absolute bottom-16 left-0 mb-4 pointer-events-none"
          >
            <div className="relative bg-[var(--tx-1)] text-white px-5 py-3 rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  <div className="h-4 w-4 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <span className="text-[11px] font-display font-medium leading-tight">
                  Hai bisogno di un <br />
                  <span className="text-[var(--accent)] font-bold">preventivo veloce?</span>
                </span>
              </div>
              {/* Triangle Tail */}
              <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[var(--tx-1)]" />
            </div>
          </m.div>
        )}
      </AP>

      {/* Floating Toggle Button */}
      <m.button
        onClick={() => {
          setIsOpen(!isOpen)
          setShowBubble(false)
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-[0_10px_40px_rgba(78,203,160,0.4)] group overflow-hidden border-2 border-white/20"
        aria-label="Apri Fulgur AI Agent"
      >
        {/* Animated Rings for Pulse Effect */}
        {!isOpen && (
          <>
            <m.div 
              animate={{ scale: [1, 2], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full bg-[var(--accent)]"
            />
            <m.div 
              animate={{ scale: [1, 1.6], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              className="absolute inset-0 rounded-full bg-[var(--accent)]"
            />
          </>
        )}

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
              <Robot size={32} weight="fill" />
              {/* Notification Indicator */}
              <div className="absolute top-1 right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-[var(--accent)]" />
            </m.div>
          )}
        </AP>
      </m.button>
    </div>
  )
}
