'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/ui/Logo'
import { cn } from '@/lib/utils'

export function PageTransitionLoader() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  // Hydration guard
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Detect changes in pathname or searchParams to trigger the animation
  useEffect(() => {
    if (!isMounted) return
    
    // When the path changes, we show the loader
    setIsLoading(true)
    
    // Minimum duration for the "Brand Reveal"
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1800) // Slightly faster for internal transitions
    
    return () => clearTimeout(timer)
  }, [pathname, searchParams, isMounted])

  if (!isMounted) return null

  // Crystal Sharp Curve
  const crystalEase = [0.23, 1, 0.32, 1] as const

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: crystalEase }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white pointer-events-none"
        >
          {/* Sharp Wind Trails */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: '-10%', 
                  y: `${(i * 137) % 100}%`, 
                  opacity: 0 
                }}
                animate={{ 
                  x: '110%', 
                  opacity: [0, 0.6, 0],
                }}
                transition={{ 
                  duration: 0.7 + ((i * 0.5) % 1.2),
                  delay: (i * 0.1) % 0.5,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className={cn(
                  "absolute rounded-full",
                  i % 2 === 0 ? "h-px w-48 bg-[var(--accent)]" : "w-1 h-1 bg-[var(--accent)]"
                )}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center">
            {/* Logo Crystal Reveal with Waves */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ 
                scale: [0.85, 1.05, 1],
                opacity: 1,
              }}
              transition={{ 
                duration: 1.2, 
                ease: crystalEase 
              }}
              className="relative"
            >
              {/* Animated Liquid Waves (Ripples) */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 2.5],
                    opacity: [0.3, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.8,
                    ease: "easeOut" 
                  }}
                  className="absolute inset-0 border border-[var(--accent)]/30 rounded-full -z-10"
                />
              ))}

              <div className="relative w-44 h-44 lg:w-56 lg:h-56 flex items-center justify-center rounded-full bg-white shadow-[0_30px_80px_rgba(78,203,160,0.08),0_10px_30px_rgba(0,0,0,0.01)]">
                <img 
                  src="/images/logo-official.webp" 
                  alt="Fulgur Service" 
                  className="w-[82%] h-[82%] object-contain mix-blend-multiply"
                />
              </div>
            </motion.div>

            {/* Typography Crystal Alignment with Slogan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: crystalEase }}
              className="mt-14 flex flex-col items-center"
            >
              <h1 className="font-display text-xl lg:text-2xl font-black uppercase tracking-[1.2em] text-[var(--bg-p)] translate-x-[0.6em]">
                FULGUR SERVICE
              </h1>
              
              <div className="mt-8 flex items-center gap-6 w-full max-w-[280px]">
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="h-px flex-1 bg-[var(--accent)]/30 origin-right" 
                />
                <span className="font-mono-fulgur text-[10px] uppercase tracking-[0.4em] text-[var(--accent)] font-black whitespace-nowrap">
                  L&apos;energia della natura
                </span>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="h-px flex-1 bg-[var(--accent)]/30 origin-left" 
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
