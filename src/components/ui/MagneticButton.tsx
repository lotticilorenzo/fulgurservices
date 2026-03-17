'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from 'framer-motion'

interface MagneticButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode
  intensity?: number
  className?: string
  springConfig?: { stiffness: number; damping: number; mass: number }
}

export function MagneticButton({
  children,
  intensity = 0.2, // Quanto il bottone sporge verso il mouse (0-1)
  className = '',
  springConfig = { stiffness: 150, damping: 15, mass: 0.1 },
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)

  // Valori raw
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Valori con molla per movimento morbido
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Restrizione al range [-12, 12] tramite transform
  // Moltiplichiamo il raw centerX/Y per evitare che sfugga, lo limitiamo a ±12
  const x = useTransform(springX, (val) => Math.max(-12, Math.min(12, val * intensity)))
  const y = useTransform(springY, (val) => Math.max(-12, Math.min(12, val * intensity)))

  // Movimento contenuto interno 
  const contentX = useTransform(springX, (val) => Math.max(-8, Math.min(8, val * intensity * 0.7)))
  const contentY = useTransform(springY, (val) => Math.max(-8, Math.min(8, val * intensity * 0.7)))

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    
    // Calcola la distanza dal centro del bottone
    const centerX = clientX - (left + width / 2)
    const centerY = clientY - (top + height / 2)
    
    mouseX.set(centerX)
    mouseY.set(centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`relative inline-flex items-center justify-center ${className}`}
      {...props}
    >
      <motion.span
        style={{ x: contentX, y: contentY }}
        className="relative z-10 flex h-full w-full items-center justify-center pointer-events-none"
      >
        {children}
      </motion.span>
    </motion.button>
  )
}

