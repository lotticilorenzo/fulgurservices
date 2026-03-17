'use client'

import React from 'react'
import { Icon as PhosphorIcon } from '@phosphor-icons/react'

interface StatusBadgeProps {
  icon: PhosphorIcon
  text: string
  color?: 'accent' | 'blue' | 'gray'
}

export function StatusBadge({ icon: Icon, text, color = 'accent' }: StatusBadgeProps) {
  const colorClasses = {
    accent: 'text-[var(--accent)] bg-[var(--accent)]/10 border-[var(--accent)]/20 shadow-[0_0_15px_rgba(78,203,160,0.1)]',
    blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20 shadow-[0_0_15px_rgba(96,165,250,0.1)]',
    gray: 'text-[var(--tx-3)] bg-white/5 border-white/10 shadow-none',
  }

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-md font-mono-fulgur text-[10px] font-bold uppercase tracking-[0.2em] ${colorClasses[color]}`}>
      <Icon size={14} weight="bold" />
      <span>{text}</span>
    </div>
  )
}
