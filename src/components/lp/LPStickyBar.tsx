'use client'

import { useState, useEffect } from 'react'
import { Phone, ArrowRight } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface LPStickyBarProps {
  phoneRaw: string
}

export function LPStickyBar({ phoneRaw }: LPStickyBarProps) {
  const [visible, setVisible] = useState(false)
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    setPrefersReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)

    const form = document.getElementById('lp-form')

    const onScroll = () => {
      const scrolled = window.scrollY > 600
      let formVisible = false
      if (form) {
        const r = form.getBoundingClientRect()
        formVisible = r.top < window.innerHeight && r.bottom > 0
      }
      setVisible(scrolled && !formVisible)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const inner = (
    <div className="flex items-center gap-3 px-4 py-3">
      <a
        href={`tel:${phoneRaw}`}
        aria-label="Chiama Fulgur Service"
        className="flex items-center justify-center w-12 h-12 rounded-xl border border-[var(--br-solid)] text-[var(--accent-d)] shrink-0 hover:bg-[var(--bg-2)] transition-colors"
      >
        <Phone size={20} weight="bold" aria-hidden="true" />
      </a>
      <a
        href="#lp-form"
        className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-[var(--accent-d)] text-white font-body font-medium text-sm hover:bg-[var(--tx-1)] transition-colors"
      >
        Richiedi sopralluogo
        <ArrowRight size={16} weight="bold" aria-hidden="true" />
      </a>
    </div>
  )

  const base = 'fixed bottom-0 inset-x-0 z-40 md:hidden bg-white border-t border-[var(--br)] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]'

  if (prefersReduced) {
    return visible ? (
      <div className={base} style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        {inner}
      </div>
    ) : null
  }

  return (
    <div
      className={cn(base, 'transition-transform duration-300', visible ? 'translate-y-0' : 'translate-y-full')}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-hidden={!visible}
    >
      {inner}
    </div>
  )
}
