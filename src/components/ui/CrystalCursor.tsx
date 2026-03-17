'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export function CrystalCursor() {
  const [isMounted, setIsMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  
  // Use faster springs for responsiveness
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  useEffect(() => {
    setIsMounted(true)
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
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

    window.addEventListener('mousemove', moveCursor, { passive: true })
    window.addEventListener('mouseover', handleMouseOver)
    
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden" aria-hidden="true">
      {/* Main Cursor Dot */}
      <motion.div
        style={{
          left: springX,
          top: springY,
        }}
        className="absolute w-1.5 h-1.5 bg-[var(--accent)] rounded-full -translate-x-1/2 -translate-y-1/2"
      />

      {/* Cursor Ring */}
      <motion.div
        style={{
          left: springX,
          top: springY,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.4,
          borderWidth: isHovering ? '1.5px' : '2px',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="absolute w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2 border-2 border-[var(--accent)]"
      />
      
      {/* "Cleaning" Glare Effect */}
      <motion.div
        style={{
          left: springX,
          top: springY,
        }}
        animate={{
          opacity: isHovering ? 0.4 : 0,
          scale: isHovering ? 1.8 : 1,
        }}
        className="absolute w-12 h-12 bg-[radial-gradient(circle,rgba(78,203,160,0.4)_0%,transparent_70%)] rounded-full -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}
