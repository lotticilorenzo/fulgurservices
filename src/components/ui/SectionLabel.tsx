import React from 'react'
import { cn } from '@/lib/utils'

interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function SectionLabel({ children, className, ...props }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-4 font-mono-fulgur text-xs font-medium uppercase tracking-widest text-[var(--accent)]',
        className
      )}
      {...props}
    >
      <div className="h-[1px] w-8 bg-[var(--accent)]" />
      <span>{children}</span>
    </div>
  )
}
