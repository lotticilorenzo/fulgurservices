'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface WipeRevealProps {
  children: React.ReactNode
  className?: string
  direction?: 'left' | 'right' | 'top' | 'bottom'
  duration?: number
  delay?: number
}

export function WipeReveal({ 
  children, 
  className, 
  direction = 'left',
  duration = 0.8,
  delay = 0 
}: WipeRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  const variants = {
    hidden: {
      clipPath: direction === 'left' ? 'inset(0 100% 0 0)' : 
                direction === 'right' ? 'inset(0 0 0 100%)' :
                direction === 'top' ? 'inset(0 0 100% 0)' :
                'inset(100% 0 0 0)',
    },
    visible: {
      clipPath: 'inset(0 0 0 0)',
      transition: {
        duration: typeof window !== 'undefined' && window.innerWidth < 768 ? duration * 0.8 : duration,
        delay,
        ease: [0.23, 1, 0.32, 1] as const,
      }
    }
  }

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
      
      {/* Wipe Blade Line Effect - hidden on mobile for performance */}
      <motion.div
        initial={{ 
          opacity: 0,
          left: direction === 'left' ? '0%' : '100%',
          right: direction === 'right' ? '0%' : '100%',
          top: direction === 'top' ? '0%' : '100%',
          bottom: direction === 'bottom' ? '0%' : '100%',
        }}
        animate={isInView ? {
          opacity: [0, 0.4, 0],
          left: direction === 'left' ? ['0%', '100%'] : undefined,
          right: direction === 'right' ? ['0%', '100%'] : undefined,
          top: direction === 'top' ? ['0%', '100%'] : undefined,
          bottom: direction === 'bottom' ? ['0%', '100%'] : undefined,
        } : {}}
        transition={{
          duration: duration * 1.1,
          delay,
          ease: "easeInOut",
        }}
        className={cn(
          "absolute bg-[var(--accent)] z-10 hidden md:block",
          (direction === 'left' || direction === 'right') ? "w-px h-full" : "h-px w-full"
        )}
      />
    </div>
  )
}
