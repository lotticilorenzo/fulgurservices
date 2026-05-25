'use client'

import { useEffect, useState } from 'react'
import { Phone } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface LPStickyCTABarProps {
  ctaPhoneRaw: string
  whatsappUrl: string
}

export function LPStickyCTABar({ ctaPhoneRaw }: LPStickyCTABarProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed z-[200] transition-all duration-300',
        'bottom-0 left-0 right-0 sm:bottom-8 sm:left-auto sm:right-8 sm:w-auto',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      )}
      aria-hidden={!visible}
    >
      {/* Mobile: dark split bar */}
      <div className="flex sm:hidden bg-[var(--tx-1)] border-t border-white/10 shadow-[0_-4px_20px_rgba(15,31,26,0.2)]">
        <a
          href={`tel:${ctaPhoneRaw}`}
          aria-label="Chiama Fulgur Service"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white/90 font-body font-medium text-sm active:opacity-80 transition-opacity"
        >
          <Phone size={16} weight="bold" aria-hidden="true" />
          338 316 0091
        </a>
        <div className="w-px my-3 bg-white/20" aria-hidden="true" />
        <a
          href="#lp-form"
          className="flex-1 flex items-center justify-center py-4 bg-[var(--accent)] text-[var(--tx-1)] font-body font-medium text-sm active:opacity-80 transition-opacity"
        >
          Sopralluogo →
        </a>
      </div>

      {/* Desktop: floating pill */}
      <div className="hidden sm:flex items-center gap-1 bg-white border border-[var(--br)] rounded-full shadow-2xl px-2 py-2">
        <a
          href={`tel:${ctaPhoneRaw}`}
          aria-label="Chiama Fulgur Service"
          className="flex items-center gap-2 h-9 px-4 rounded-full font-body text-sm font-medium text-[var(--tx-1)] hover:bg-[var(--bg-2)] transition-colors"
        >
          <Phone size={15} weight="bold" aria-hidden="true" />
          338 316 0091
        </a>
        <div className="w-px h-5 bg-[var(--br)]" aria-hidden="true" />
        <a
          href="#lp-form"
          className="flex items-center h-9 px-5 rounded-full bg-[var(--accent)] text-[var(--tx-1)] font-body text-sm font-medium hover:bg-[var(--accent-d)] hover:text-white transition-colors"
        >
          Sopralluogo
        </a>
      </div>
    </div>
  )
}
