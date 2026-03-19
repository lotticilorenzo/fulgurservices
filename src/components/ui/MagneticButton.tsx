'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: React.ReactNode
  intensity?: number
  className?: string
  springConfig?: { stiffness: number; damping: number; mass: number }
  as?: 'button' | 'div'
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
  disabled?: boolean
  tabIndex?: number
  id?: string
  role?: string
}

export function MagneticButton({
  children,
  intensity = 0.2,
  className = '',
  springConfig = { stiffness: 150, damping: 15, mass: 0.1 },
  as = 'button',
  onClick,
  type,
  disabled,
  tabIndex,
  id,
  role,
  'aria-label': ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const x = useTransform(springX, (val) => Math.max(-12, Math.min(12, val * intensity)))
  const y = useTransform(springY, (val) => Math.max(-12, Math.min(12, val * intensity)))

  const contentX = useTransform(springX, (val) => Math.max(-8, Math.min(8, val * intensity * 0.7)))
  const contentY = useTransform(springY, (val) => Math.max(-8, Math.min(8, val * intensity * 0.7)))

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    mouseX.set(clientX - (left + width / 2))
    mouseY.set(clientY - (top + height / 2))
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const sharedProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { x, y },
    className: cn('relative inline-flex items-center justify-center', className),
    onClick,
    disabled,
    tabIndex,
    id,
    role,
    'aria-label': ariaLabel,
  }

  const inner = (
    <motion.span
      style={{ x: contentX, y: contentY }}
      className="relative z-10 flex h-full w-full items-center justify-center pointer-events-none"
    >
      {children}
    </motion.span>
  )

  if (as === 'div') {
    return (
      <motion.div {...sharedProps}>
        {inner}
      </motion.div>
    )
  }

  return (
    <motion.button {...sharedProps} type={type ?? 'button'}>
      {inner}
    </motion.button>
  )
}
