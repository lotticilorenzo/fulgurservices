'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function SpotlightCard({ children, className, ...props }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = React.useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { left, top } = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  // Creiamo il template string per il background così framer-motion lo interpola
  // Usiamo un template statico fino al montaggio per evitare hydration mismatch
  const background = useMotionTemplate`radial-gradient(400px at ${mouseX}px ${mouseY}px, var(--accent-glow), transparent 80%)`
  const stableBackground = mounted ? background : 'none'

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--br)] bg-card transition-colors duration-300 hover:border-[var(--br-h)]',
        className
      )}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: stableBackground }}
      />
      <div className="relative z-20 flex-1 w-full flex flex-col">
        {children}
      </div>
    </div>
  )
}
