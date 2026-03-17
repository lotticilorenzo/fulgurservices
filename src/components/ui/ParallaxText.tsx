'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ParallaxTextProps {
  text: string
  direction?: 'left' | 'right' | 'up' | 'down'
  distance?: number
  className?: string
  outline?: boolean
}

export function ParallaxText({ 
  text, 
  direction = 'left', 
  distance = 200, 
  className,
  outline = true 
}: ParallaxTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Horizontal transforms
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -distance])
  const xRight = useTransform(scrollYProgress, [0, 1], [-distance, 0])
  
  // Vertical transforms
  const yUp = useTransform(scrollYProgress, [0, 1], [distance, -distance])
  const yDown = useTransform(scrollYProgress, [0, 1], [-distance, distance])

  const getTransform = () => {
    switch (direction) {
      case 'left': return { x: xLeft }
      case 'right': return { x: xRight }
      case 'up': return { y: yUp }
      case 'down': return { y: yDown }
      default: return { x: xLeft }
    }
  }

  return (
    <div 
      ref={containerRef} 
      className={cn(
        "pointer-events-none select-none overflow-hidden whitespace-nowrap",
        className
      )}
    >
      <motion.span
        style={getTransform()}
        className={cn(
          "inline-block font-display text-[15vw] font-black uppercase leading-none",
          outline ? "text-outline-accent opacity-[0.03]" : "text-[var(--accent)] opacity-[0.02]"
        )}
      >
        {text} {text} {text}
      </motion.span>
    </div>
  )
}
