'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PhoneCall, ArrowSquareOut } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/ui/Logo'

export function LPNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handle, { passive: true })
    handle()
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <header
      data-lp-header="true"
      aria-label="Navigazione landing page"
      className={cn(
        'fixed left-1/2 z-[200] -translate-x-1/2',
        'flex w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-6xl items-center justify-between',
        'rounded-full px-4 py-2 lg:px-5 lg:py-2',
        'border border-[var(--nav-border)] bg-[var(--nav-bg)] backdrop-blur-xl',
        'transition-all duration-500',
        isScrolled
          ? 'top-3 shadow-[0_8px_40px_rgba(42,140,122,0.14),0_1px_0_rgba(42,140,122,0.06)]'
          : 'top-4 shadow-[0_4px_24px_rgba(42,140,122,0.08),0_1px_0_rgba(42,140,122,0.04)]'
      )}
    >
      {/* Logo */}
      <Link
        href="/"
        aria-label="Fulgur Service home"
        className="flex shrink-0 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      >
        <Logo size={44} iconOnly variant="default" className="shrink-0" />
        <span className="font-display text-[14px] font-bold tracking-tight text-[var(--tx-1)] whitespace-nowrap hidden sm:block">
          Fulgur Service
        </span>
      </Link>

      {/* Right actions */}
      <div className="flex items-center gap-3 shrink-0">

        {/* Visita il sito */}
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--tx-3)] hover:text-[var(--accent)] transition-colors"
        >
          Visita il sito
          <ArrowSquareOut size={11} weight="bold" aria-hidden="true" />
        </Link>

        <div className="hidden md:block w-px h-5 bg-[var(--br)]" aria-hidden="true" />

        {/* Telefono */}
        <a
          href="tel:+393383160091"
          aria-label="Chiama Fulgur Service al 338 316 0091"
          className="flex items-center gap-1.5 font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--tx-3)] hover:text-[var(--accent)] transition-colors"
        >
          <PhoneCall size={12} weight="bold" className="text-[var(--accent)]" aria-hidden="true" />
          <span className="hidden sm:inline">338 316 0091</span>
        </a>

        {/* CTA pill — identical style to main Navbar "Preventivo Gratuito" */}
        <a
          href="#lp-form"
          className="rounded-full bg-[var(--accent)] px-5 py-2.5 font-display text-[12px] font-bold text-white whitespace-nowrap shadow-[0_4px_16px_rgba(78,203,160,0.35)] transition-all hover:bg-[var(--accent-d)] hover:shadow-[0_6px_24px_rgba(78,203,160,0.45)]"
        >
          Richiedi sopralluogo
        </a>
      </div>
    </header>
  )
}
