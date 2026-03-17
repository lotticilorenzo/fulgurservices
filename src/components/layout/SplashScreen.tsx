'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Session-based check: force v5 for Crystal version
    const hasVisited = sessionStorage.getItem('fulgur-crystal-v5')
    
    if (!hasVisited) {
      setIsVisible(true)
      setIsAnimating(true)
      sessionStorage.setItem('fulgur-crystal-v5', 'true')
      
      // Prevent scrolling
      document.body.style.overflow = 'hidden'

      const timer = setTimeout(() => {
        setIsVisible(false)
        document.body.style.overflow = ''
      }, 4200)

      return () => {
        clearTimeout(timer)
        document.body.style.overflow = ''
      }
    }
  }, [])

  if (!isMounted || !isAnimating) return null

  // Sharp Cinematic Curve
  const sharpEase = [0.23, 1, 0.32, 1] as const

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden pointer-events-none bg-white">
          {/* Sharp Sipario Split */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ 
              x: '-100%',
              transition: { duration: 1.4, ease: sharpEase } 
            }}
            className="absolute left-0 top-0 w-1/2 h-full bg-white z-20"
          />
          <motion.div
            initial={{ x: 0 }}
            exit={{ 
              x: '100%',
              transition: { duration: 1.4, ease: sharpEase } 
            }}
            className="absolute right-0 top-0 w-1/2 h-full bg-white z-20"
          />

          {/* Liquid Wind Trails (No Blur) */}
          <div className="absolute inset-0 z-10 overflow-hidden opacity-30">
            {[...Array(8)].map((_, i) => (
              <motion.svg
                key={i}
                viewBox="0 0 400 20"
                initial={{ 
                  x: '-100%', 
                  y: `${(i * 12.5) % 100}%`,
                  opacity: 0,
                }}
                animate={{ 
                  x: '150%', 
                  opacity: [0, 0.6, 0],
                }}
                transition={{ 
                  duration: 2 + ((i * 0.8) % 2),
                  delay: 0.2 + (i * 0.1),
                  ease: sharpEase,
                  repeat: 2,
                }}
                className="absolute w-full h-8"
              >
                <path 
                  d="M 0 10 Q 100 0 200 10 T 400 10" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.8"
                  className="text-[var(--accent)]"
                />
              </motion.svg>
            ))}
          </div>

          {/* Central Experience - Sharp & Professional */}
          <div className="relative z-30 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.02, 1],
                opacity: 1, 
              }}
              exit={{ 
                scale: 1.2,
                opacity: 0,
                transition: { duration: 0.8, ease: sharpEase }
              }}
              transition={{ 
                duration: 2, 
                ease: sharpEase,
              }}
              className="relative"
            >
              {/* Continuous Breathing ( लिविंग ब्रांड ) */}
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-48 h-48 lg:w-72 lg:h-72 flex items-center justify-center rounded-full bg-white shadow-[0_40px_100px_rgba(78,203,160,0.1),0_10px_40px_rgba(0,0,0,0.02)]"
              >
                <img 
                  src="/images/logo-official.webp" 
                  alt="Fulgur Service" 
                  className="w-[82%] h-[82%] object-contain"
                />
              </motion.div>

              {/* Energy Aura Pulse (No Blur) */}
              <motion.div
                animate={{ scale: [1, 1.4], opacity: [0.15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 bg-[var(--accent)]/10 rounded-full -z-10"
              />
            </motion.div>

            {/* Sharp Cinematic Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.6 } }}
              transition={{ delay: 1.2, duration: 1.4, ease: sharpEase }}
              className="mt-16 flex flex-col items-center"
            >
              <motion.h1 
                initial={{ letterSpacing: '2.5em' }}
                animate={{ letterSpacing: '1.4em' }}
                transition={{ delay: 1.2, duration: 2, ease: sharpEase }}
                className="font-display text-2xl lg:text-3xl font-black uppercase text-[var(--bg-p)] translate-x-[0.7em]"
              >
                FULGUR
              </motion.h1>
              
              <div className="mt-8 flex items-center gap-6 w-full max-w-xs">
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.8, duration: 1.2 }}
                  className="h-px flex-1 bg-[var(--accent)]/30 origin-right" 
                />
                <span className="font-mono-fulgur text-[10px] uppercase tracking-[0.6em] text-[var(--accent)] font-black">
                  Premium Clean
                </span>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.8, duration: 1.2 }}
                  className="h-px flex-1 bg-[var(--accent)]/30 origin-left" 
                />
              </div>
            </motion.div>
          </div>

          {/* Clean Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.02)_100%)] z-25 pointer-events-none" />
        </div>
      )}
    </AnimatePresence>
  )
}
