import React from 'react'
import { cn } from '@/lib/utils'

interface GlowBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function GlowBadge({ children, className, ...props }: GlowBadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-[var(--br-solid)] bg-transparent px-3 py-1 font-mono-fulgur text-xs font-medium uppercase tracking-widest text-[var(--accent)] backdrop-blur-sm',
        className
      )}
      {...props}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]"></span>
      </span>
      {children}
    </div>
  )
}
