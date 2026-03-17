'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  width?: 'fit-content' | '100%'
  delay?: number
  staggerChildren?: boolean
}

export function ScrollReveal({
  children,
  className,
  width = '100%',
  delay = 0,
  staggerChildren = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = React.useState(false)
  
  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  
  // Se non montato o non in vista (e non siamo sul server), 
  // resta in stato 'hidden' per matchare il server render
  const activeAnimation = (isMounted && isInView) ? 'visible' : 'hidden'

  if (staggerChildren) {
    return (
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={activeAnimation}
        className={cn(className)}
      >
        {children}
      </motion.div>
    )
  }

  const customFadeUp: any = {
    hidden: fadeUp.hidden,
    visible: {
      ...(fadeUp.visible as any),
      transition: { ...(fadeUp.visible as any)?.transition, delay },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={customFadeUp}
      initial="hidden"
      animate={activeAnimation}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
