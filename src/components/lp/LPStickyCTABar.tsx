'use client'

import { useEffect, useState } from 'react'
import { Phone } from '@phosphor-icons/react'
import { WhatsappLogo } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface LPStickyCTABarProps {
  ctaPhoneRaw: string
  whatsappUrl: string
}

export function LPStickyCTABar({ ctaPhoneRaw, whatsappUrl }: LPStickyCTABarProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-[200]',
        'transition-all duration-300',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      )}
      aria-hidden={!visible}
    >
      {/* Mobile: full-width split bar */}
      <div className="sm:hidden flex bg-white border-t border-[var(--br)] shadow-[0_-4px_20px_rgba(15,31,26,0.08)]">
        <a
          href={`tel:${ctaPhoneRaw}`}
          aria-label="Chiama Fulgur Service"
          className="flex-1 flex items-center justify-center gap-2 h-14 bg-[var(--accent)] text-white font-body font-semibold text-sm active:opacity-80 transition-opacity"
        >
          <Phone size={18} weight="bold" aria-hidden="true" />
          Chiama
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contatta su WhatsApp"
          className="flex-1 flex items-center justify-center gap-2 h-14 bg-[#25D366] text-white font-body font-semibold text-sm active:opacity-80 transition-opacity"
        >
          <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
          WhatsApp
        </a>
      </div>

      {/* Desktop: centered pill */}
      <div className="hidden sm:flex justify-center pb-5">
        <div className="flex gap-2 bg-white border border-[var(--br)] rounded-full shadow-[0_4px_24px_rgba(15,31,26,0.12)] px-3 py-2">
          <a
            href={`tel:${ctaPhoneRaw}`}
            aria-label="Chiama Fulgur Service"
            className="flex items-center gap-2 h-11 px-6 rounded-full bg-[var(--accent)] text-white font-body font-medium text-sm hover:bg-[var(--accent-d)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 transition-colors"
          >
            <Phone size={16} weight="bold" aria-hidden="true" />
            Chiama ora
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contatta su WhatsApp"
            className="flex items-center gap-2 h-11 px-6 rounded-full border border-[var(--br-solid)] text-[var(--accent-d)] font-body font-medium text-sm hover:bg-[var(--bg-2)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 transition-colors"
          >
            <WhatsappLogo size={16} weight="fill" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
