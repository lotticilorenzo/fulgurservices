'use client'

import React, { useEffect, useState } from 'react'
import { Phone } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface LPStickyCallProps {
  ctaPhoneRaw: string
}

export function LPStickyCall({ ctaPhoneRaw }: LPStickyCallProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed bottom-5 left-1/2 -translate-x-1/2 z-[200]',
        'sm:hidden', // visible only on mobile
        'transition-all duration-300',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
      aria-hidden={!visible}
    >
      <a
        href={`tel:${ctaPhoneRaw}`}
        aria-label="Chiama Fulgur Service"
        className={cn(
          'flex items-center gap-2',
          'h-14 px-7 rounded-full',
          'bg-[var(--accent)] text-white font-body font-semibold text-sm',
          'shadow-[0_8px_32px_rgba(78,203,160,0.40)]',
          'hover:bg-[var(--accent-d)] active:scale-95 transition-all',
          'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2'
        )}
      >
        <Phone size={18} weight="bold" aria-hidden="true" />
        Chiama ora
      </a>
    </div>
  )
}
