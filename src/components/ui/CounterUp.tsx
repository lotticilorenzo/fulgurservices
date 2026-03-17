'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CounterUpProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number
  prefix?: string
  suffix?: string
  duration?: number // In ms
}

export function CounterUp({
  value,
  prefix = '',
  suffix = '',
  duration = 2000,
  className,
  ...props
}: CounterUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  const [mounted, setMounted] = useState(false)
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !isInView) return

    let startTime: number | null = null
    let animationFrame: number

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      // easeOut function
      const easeOutQuart = 1 - Math.pow(1 - Math.min(progress / duration, 1), 4)
      const currentCount = Math.floor(easeOutQuart * value)

      setCount(currentCount)

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animateCount)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(animateCount)

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [value, duration, isInView, mounted])

  const formattedCount = new Intl.NumberFormat('it-IT').format(count)

  // Hydration safety: render matching structure even when not mounted
  return (
    <span 
      ref={ref} 
      className={cn('inline-block tabular-nums', className)} 
      {...props}
    >
      {prefix}
      {mounted ? formattedCount : '0'}
      {suffix}
    </span>
  )
}
