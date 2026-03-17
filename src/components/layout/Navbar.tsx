'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X, PhoneCall } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { overlayVariants, menuVariants } from '@/lib/motion'
import { Logo } from '@/components/ui/Logo'

const LINKS = [
  { label: 'Servizi', href: '/servizi' },
  { label: 'Blog', href: '/blog' },
  { label: 'Fulgur AI', href: '/fulgur-ai', isAI: true },
  { label: 'Chi Siamo', href: '/chi-siamo' },
  { label: 'Macchinari', href: '/macchinari' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contatti', href: '/contatti' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll logic via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting)
      },
      { root: null, rootMargin: '0px', threshold: 0 }
    )

    const sentinel = document.getElementById('nav-sentinel')
    if (sentinel) observer.observe(sentinel)

    return () => observer.disconnect()
  }, [])

  // Blocca lo scroll quando il menu mobile è aperto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Sentinel per l'isScrolled state */}
      <div id="nav-sentinel" className="absolute top-20 left-0 w-px h-px pointer-events-none -z-10" aria-hidden="true" />
      
      <header
        className={cn(
          'fixed left-1/2 top-4 lg:top-6 z-50 flex w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 items-center justify-between rounded-full px-4 py-2.5 lg:py-3 xl:px-8',
          'transition-[background,border,backdrop-filter] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]',
          isScrolled
            ? 'border border-[var(--nav-border)] bg-[var(--nav-bg)] backdrop-blur-xl shadow-sm'
            : 'border border-transparent bg-transparent backdrop-blur-none'
        )}
      >
        {/* LOGO */}
        <Link
          href="/"
          className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg"
          aria-label="Fulgur Service — torna alla home"
        >
          <Logo size={44} iconOnly variant="default" className="h-10 w-auto" />
          <span className="font-display text-xl font-bold text-[var(--tx-1)] tracking-tight">
            Fulgur Service
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <nav className="hidden lg:flex items-center gap-10">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative font-mono-fulgur text-[11px] font-bold uppercase tracking-widest text-[var(--tx-1)] transition-colors duration-200 hover:text-[var(--accent-d)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm'
              )}
            >
              {link.label}
              {link.isAI && (
                <span className="absolute -top-3 -right-6 flex h-3.5 items-center justify-center rounded-full bg-[var(--accent)] px-1 py-0.5 text-[7px] font-black text-white shadow-[0_0_10px_var(--accent)]">
                  AI
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA & PHONE */}
        <div className="hidden lg:flex items-center gap-10">
          <a 
            href="tel:+393383160091" 
            className="flex items-center gap-2 font-mono-fulgur text-[11px] font-bold uppercase tracking-widest text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors"
          >
            <PhoneCall size={18} weight="bold" />
            +39 338 316 0091
          </a>
          
          <Link href="/preventivo" tabIndex={-1}>
            <MagneticButton
              as="div"
              intensity={0.1}
              className="relative rounded-full bg-[var(--accent)] px-8 py-3 font-display text-sm font-bold text-white transition-[background-color,transform,shadow] duration-300 hover:bg-[var(--accent-d)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent outline-none group overflow-hidden"
            >
              {/* Subtle Glow Pulse - Framer Motion for better stability */}
                <motion.span 
                  aria-hidden="true"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3]
                  }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 rounded-full bg-white" 
              />
              <span className="relative z-10">Sopralluogo Gratuito</span>
            </MagneticButton>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="lg:hidden flex items-center justify-center p-2 text-[var(--tx-1)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Apri menu principale"
          aria-expanded={isMobileMenuOpen}
        >
          <List size={24} />
        </button>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] bg-[var(--bg)]/98 backdrop-blur-md"
          >
            <div className="flex h-full flex-col px-6 pb-12 pt-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold text-[var(--tx-1)] tracking-tight">
                  Menu
                </span>
                <button
                  className="flex items-center justify-center p-2 text-[var(--tx-1)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Chiudi menu principale"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="mt-16 flex flex-col gap-8">
                {LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="relative font-display text-4xl font-bold tracking-tight text-[var(--tx-1)] transition-colors hover:text-[var(--accent)] focus-visible:text-[var(--accent)] focus-visible:outline-none"
                    >
                      {link.label}
                      {link.isAI && (
                        <span className="absolute -top-1 -right-6 flex h-4 items-center justify-center rounded-full bg-[var(--accent)] px-1.5 py-0.5 text-[8px] font-black text-white shadow-[0_0_15px_var(--accent)]">
                          AI
                        </span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4">
                <a 
                  href="tel:+393383160091"
                  className="flex w-full items-center justify-center gap-3 rounded-full border border-[var(--br)] bg-white/5 py-4 font-display text-lg font-bold text-[var(--tx-1)] transition-colors hover:bg-white/10"
                >
                  <PhoneCall size={24} weight="bold" className="text-[var(--accent)]" aria-hidden="true" />
                  +39 338 316 0091
                </a>
                
                <Link
                  href="/preventivo"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-[var(--accent)] py-4 font-display text-lg font-bold text-white transition-colors hover:bg-[var(--accent-d)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  Sopralluogo Gratuito
                </Link>
                <div className="mt-8 flex items-center justify-center gap-6 font-mono-fulgur text-xs uppercase tracking-widest text-[var(--tx-2)]">
                  <a href="tel:+393383160091" className="hover:text-[var(--accent)] transition-colors">Chiama</a>
                  <span>·</span>
                  <a href="mailto:fulgurservice@gmail.com" className="hover:text-[var(--accent)] transition-colors">Email</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
