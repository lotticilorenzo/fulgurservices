'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Particle {
  id: number
  x: number
  y: number
}

export function CrystalCursor() {
  const [isMounted, setIsMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Spring for smooth follow
  const springConfig = { damping: 25, stiffness: 250 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)
  
  const [particles, setParticles] = useState<Particle[]>([])
  const particleIdRef = useRef(0)

  useEffect(() => {
    setIsMounted(true)
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      
      // Add particles while moving
      if (Math.random() > 0.6) { // Throttled particles
        const id = particleIdRef.current++
        setParticles((prev) => [...prev, { id, x: e.clientX, y: e.clientY }].slice(-15))
        
        // Remove individual particle after 1s
        setTimeout(() => {
          setParticles((prev) => prev.filter(p => p.id !== id))
        }, 800)
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.getAttribute('role') === 'button'
        
      setIsHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden" aria-hidden="true">
      {/* Sparkle Trail */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 0, opacity: 0, rotate: 45 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              left: particle.x,
              top: particle.y,
              width: '4px',
              height: '4px',
              background: 'var(--accent)',
              borderRadius: '1px',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main Cursor Dot */}
      <motion.div
        style={{
          left: springX,
          top: springY,
        }}
        className="absolute w-2 h-2 bg-[var(--accent)] rounded-full -translate-x-1/2 -translate-y-1/2"
      />

      {/* Cursor Ring */}
      <motion.div
        style={{
          left: springX,
          top: springY,
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          borderWidth: isHovering ? '1px' : '2px',
          borderColor: isHovering ? 'rgba(78, 203, 160, 0.4)' : 'rgba(78, 203, 160, 0.2)',
        }}
        className="absolute w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2 border-2"
      />
      
      {/* "Cleaning" Glare Effect */}
      <motion.div
        style={{
          left: springX,
          top: springY,
        }}
        animate={{
          opacity: isHovering ? 0.3 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        className="absolute w-12 h-12 bg-[radial-gradient(circle,rgba(78,203,160,0.4)_0%,transparent_70%)] rounded-full -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}
