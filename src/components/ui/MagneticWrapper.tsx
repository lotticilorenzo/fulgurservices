'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

interface MagneticWrapperProps {
  children: React.ReactElement
  strength?: number
  isEnabled?: boolean
}

export function MagneticWrapper({ 
  children, 
  strength = 35,
  isEnabled = true 
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth springs for high-end feel
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || !isEnabled) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    
    // Calculate center relative to mouse
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY
    
    x.set(distanceX * (strength / 100))
    y.set(distanceY * (strength / 100))
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
