'use client'

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X, PhoneCall, ArrowRight, WhatsappLogo, CaretDown } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/ui/Logo'

/* ── Nav structure ── */
const SERVICE_PREVIEWS = [
  { label: 'Pulizie Aziendali',      href: '/servizi/pulizie-aziendali' },
  { label: 'Pulizie Industriali',    href: '/servizi/pulizie-industriali' },
  { label: 'Settore Sanitario',      href: '/servizi/settore-sanitario' },
  { label: 'Pulizie Condomini',      href: '/servizi/pulizie-condomini' },
  { label: 'Pannelli Fotovoltaici',  href: '/servizi/pannelli-fotovoltaici' },
  { label: 'Trattamento Superfici',  href: '/servizi/trattamento-superfici' },
]

const NAV_ITEMS = [
  { label: 'Servizi',   href: '/servizi',   dropdown: true },
  { label: 'Gallery',   href: '/gallery' },
  { label: 'Blog',      href: '/blog' },
  { label: 'Chi Siamo', href: '/chi-siamo' },
  { label: 'Macchinari',href: '/macchinari' },
]

const MOBILE_LINKS = [
  { label: 'Home',           href: '/' },
  { label: 'Servizi',        href: '/servizi' },
  { label: 'Gallery',        href: '/gallery' },
  { label: 'Blog',           href: '/blog' },
  { label: 'Chi Siamo',      href: '/chi-siamo' },
  { label: 'Macchinari',     href: '/macchinari' },
  { label: 'Lavora con noi', href: '/lavora-con-noi' },
  { label: 'Contatti',       href: '/contatti' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handle, { passive: true })
    handle()
    return () => window.removeEventListener('scroll', handle)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  useEffect(() => { 
    const t = setTimeout(() => setIsMobileOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname])

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150)
  }

  return (
    <>
      {/* ── FLOATING PILL ── */}
      <header
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
        {/* LOGO */}
        <Link
          href="/"
          aria-label="Fulgur Service — home"
          className="flex shrink-0 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          <Logo size={44} iconOnly variant="default" className="shrink-0" />
          <span className="font-display text-[14px] font-bold tracking-tight text-[var(--tx-1)] whitespace-nowrap hidden sm:block">
            Fulgur Service
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navigazione principale">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href))

            if (item.dropdown) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-3.5 py-2 rounded-full',
                      'font-mono-fulgur text-[10.5px] font-bold uppercase tracking-[0.12em]',
                      'transition-colors duration-150',
                      isActive
                        ? 'text-[var(--accent)] bg-[var(--accent-glow)]'
                        : 'text-[var(--tx-2)] hover:text-[var(--tx-1)] hover:bg-[var(--bg-2)]'
                    )}
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: servicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[7px] opacity-50 leading-none"
                    >
                      ▾
                    </motion.span>
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 mt-2.5 w-64 rounded-2xl border border-[var(--br-h)] bg-white/95 backdrop-blur-sm p-2 shadow-xl shadow-[rgba(42,140,122,0.12)]"
                        onMouseEnter={openServices}
                        onMouseLeave={closeServices}
                      >
                        <div className="flex flex-col gap-0.5 mb-2">
                          {SERVICE_PREVIEWS.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={() => setServicesOpen(false)}
                              className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 font-sans text-[13px] text-[var(--tx-2)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow)] transition-colors"
                            >
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                              {s.label}
                            </Link>
                          ))}
                        </div>
                        <Link
                          href="/servizi"
                          onClick={() => setServicesOpen(false)}
                          className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[var(--bg-2)] px-3 py-2.5 border border-[var(--br)] font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--tx-3)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-colors"
                        >
                          Vedi tutti i 12 servizi
                          <ArrowRight size={10} weight="bold" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative flex items-center gap-1.5 px-3.5 py-2 rounded-full',
                  'font-mono-fulgur text-[10.5px] font-bold uppercase tracking-[0.12em]',
                  'transition-colors duration-150',
                  isActive
                    ? 'text-[var(--accent)] bg-[var(--accent-glow)]'
                    : 'text-[var(--tx-2)] hover:text-[var(--tx-1)] hover:bg-[var(--bg-2)]'
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-px w-3 bg-[var(--accent)] rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* DESKTOP RIGHT */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="tel:+393383160091"
            className="flex items-center gap-1.5 font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--tx-3)] hover:text-[var(--accent)] transition-colors"
          >
            <PhoneCall size={12} weight="bold" className="text-[var(--accent)]" aria-hidden="true" />
            338 316 0091
          </a>
          <Link
            href="/preventivo"
            className="rounded-full bg-[var(--accent)] px-5 py-2.5 font-display text-[12px] font-bold text-white whitespace-nowrap shadow-[0_4px_16px_rgba(78,203,160,0.35)] transition-all hover:bg-[var(--accent-d)] hover:shadow-[0_6px_24px_rgba(78,203,160,0.45)]"
          >
            Preventivo Gratuito
          </Link>
        </div>

        {/* MOBILE HAMBURGER — 44×44px per WCAG touch target */}
        <button
          className="lg:hidden flex items-center justify-center h-11 w-11 rounded-full border border-[var(--br-h)] text-[var(--tx-1)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          onClick={() => setIsMobileOpen(true)}
          aria-label="Apri menu principale"
          aria-expanded={isMobileOpen}
        >
          <List size={18} />
        </button>
      </header>

      {/* ── MOBILE OVERLAY ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 32px) 32px)' }}
            animate={{ opacity: 1, clipPath: 'circle(160% at calc(100% - 32px) 32px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 32px) 32px)' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[300] flex flex-col bg-[var(--bg)]/95 backdrop-blur-2xl h-[100dvh] overflow-hidden overscroll-contain"
          >
            {/* Header del mobile overlay */}
            <div className="flex shrink-0 items-center justify-between px-6 py-4 border-b border-[var(--br)]">
              <Link
                href="/"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center gap-2.5"
              >
                <Logo size={40} iconOnly variant="default" />
                <span className="font-display text-base font-bold text-[var(--tx-1)]">Fulgur Service</span>
              </Link>
              <button
                onClick={() => setIsMobileOpen(false)}
                aria-label="Chiudi menu"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--br-h)] bg-[var(--bg-2)] text-[var(--tx-1)] hover:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] hover:text-[var(--accent)] transition-colors shadow-sm"
              >
                <X size={24} weight="bold" />
              </button>
            </div>

            {/* Links scrollabili */}
            <nav className="flex flex-col px-6 py-2 flex-1 overflow-y-auto min-h-0" aria-label="Menu mobile">
              {MOBILE_LINKS.map((link, i) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                const delay = 0.12 + i * 0.045

                if (link.href === '/servizi') {
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="border-b border-[var(--br)]"
                    >
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex w-full items-center justify-between py-3 focus-visible:outline-none"
                      >
                        <span className={cn(
                          'font-display text-[20px] font-semibold tracking-tight transition-colors',
                          isActive ? 'text-[var(--accent)]' : 'text-[var(--tx-1)]'
                        )}>
                          {link.label}
                        </span>
                        <motion.div
                          animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="flex items-center justify-center h-8 w-8 rounded-full bg-[var(--bg-2)] border border-[var(--br)] text-[var(--tx-2)]"
                        >
                          <CaretDown size={14} weight="bold" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 pb-4 pt-1 pl-3 border-l-2 border-[var(--accent)]/30 ml-2">
                              {SERVICE_PREVIEWS.map((s) => (
                                <Link
                                  key={s.href}
                                  href={s.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className="py-2 px-3 rounded-xl font-sans text-[14px] font-medium text-[var(--tx-2)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow)] transition-colors"
                                >
                                  {s.label}
                                </Link>
                              ))}
                              <Link
                                href="/servizi"
                                onClick={() => setIsMobileOpen(false)}
                                className="inline-flex mt-2 ml-3 items-center gap-1.5 font-mono-fulgur text-[11px] font-bold uppercase tracking-widest text-[var(--accent)]"
                              >
                                Vedi tutti i 12 servizi <ArrowRight size={12} weight="bold" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                }

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={cn(
                        'flex min-h-[44px] items-center justify-between py-3 border-b border-[var(--br)] focus-visible:outline-none',
                        'font-display text-[20px] font-semibold tracking-tight transition-colors',
                        isActive ? 'text-[var(--accent)]' : 'text-[var(--tx-1)] hover:text-[var(--accent)]'
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_12px_rgba(78,203,160,0.6)]" />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
              {/* Spaziatore a fine scroll */}
              <div className="h-4 shrink-0" />
            </nav>

            {/* Bottom CTAs (Fissi a fondo schermo) — pb usa safe-area per iPhone con notch */}
            <div className="shrink-0 bg-[var(--bg)] border-t border-[var(--br)] px-6 pt-4 flex flex-col gap-2.5" style={{ paddingBottom: 'max(2.5rem, env(safe-area-inset-bottom, 2.5rem))' }}>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="tel:+393383160091"
                  className="flex flex-1 min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-[var(--br-h)] bg-[var(--bg)]/80 backdrop-blur-md py-3 font-display text-[14px] font-semibold text-[var(--tx-1)] shadow-sm hover:border-[var(--accent)] transition-all"
                >
                  <PhoneCall size={18} weight="fill" className="text-[var(--accent)]" aria-hidden="true" />
                  Chiama
                </a>
                <a
                  href="https://wa.me/393383160091?text=Ciao%2C%20vorrei%20richiedere%20un%20sopralluogo%20gratuito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 py-3 font-display text-[14px] font-semibold text-[#1DA851] shadow-sm hover:bg-[#25D366]/20 transition-all"
                >
                  <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
              <Link
                href="/preventivo"
                onClick={() => setIsMobileOpen(false)}
                className="flex w-full min-h-[44px] items-center justify-center rounded-xl bg-[var(--accent)] py-3 font-display text-[15px] font-bold text-white shadow-[0_4px_16px_rgba(78,203,160,0.3)] hover:bg-[var(--accent-d)] transition-all"
              >
                Sopralluogo Gratuito
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
