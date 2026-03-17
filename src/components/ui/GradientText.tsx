import React from 'react'
import { cn } from '@/lib/utils'

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export function GradientText({ children, className, ...props }: GradientTextProps) {
  return (
    <span className={cn('text-gradient-accent', className)} {...props}>
      {children}
    </span>
  )
}
