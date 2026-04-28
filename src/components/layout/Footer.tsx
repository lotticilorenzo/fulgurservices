'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { InstagramLogo, WhatsappLogo, EnvelopeSimple, Phone, MapPin, TiktokLogo, LinkedinLogo, FacebookLogo } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { SERVICES } from '@/lib/services-data'
import { TOWNS } from '@/lib/towns-data'
import { WhatsAppHybridLink } from '@/components/ui/WhatsAppHybridLink'

const COMPANY_LINKS = [
  { label: 'Chi Siamo', href: '/#chi-siamo' },
  { label: 'Come Lavoriamo', href: '/#processo' },
  { label: 'Macchinari', href: '/macchinari' },
  { label: 'Lavora con Noi', href: '/lavora-con-noi' },
  { label: 'Contatti', href: '/contatti' },
  { label: 'Preventivo', href: '/preventivo' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
]

const SOCIAL_URLS = {
  instagram: 'https://www.instagram.com/fulgurservicesrl_/',
  whatsapp: 'https://wa.me/393383160091?text=Ciao%2C%20vorrei%20richiedere%20un%20sopralluogo%20gratuito',
  facebook: 'https://www.facebook.com/fulgurservicesrl/',
  linkedin: 'https://www.linkedin.com/company/fulgurservice/',
  tiktok: 'https://www.tiktok.com/@fulgurservicesrl',
}

export function Footer() {
  const [year, setYear] = React.useState<number | string>('2025')
  
  React.useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  const topServices = SERVICES.slice(0, 7)
  const topTowns = TOWNS.filter(t => t.slug !== 'parma').slice(0, 7)

  return (
    <footer className="w-full mt-auto border-t border-[var(--br)] bg-[var(--bg-3)] overflow-hidden">
      
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8 pt-14 pb-6 sm:pt-20 sm:pb-8 lg:pb-12">
        
        {/* Main Grid: 5 columns for SEO optimization */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-[2fr_1fr_1fr_1fr_1.4fr] lg:gap-8">
          
          {/* Col 1: Brand */}
          <div className="flex flex-col">
            <Link href="/" className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-xl w-fit">
              <div className="rounded-xl bg-white p-1 shadow-sm border border-[var(--br)]">
                <Image
                  src="/images/logo-fulgur-service-impresa-pulizie-parma.webp"
                  alt="Fulgur Service Logo Ufficiale dell'impresa di pulizie professionali a Parma"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display text-2xl sm:text-xl font-bold leading-none tracking-tight text-[var(--tx-1)]">FULGUR</span>
                <span className="font-display text-base sm:text-sm font-bold leading-none tracking-tight text-[var(--accent)]">SERVICE</span>
              </div>
            </Link>
            
            <p className="mt-6 max-w-[280px] font-sans text-[14px] sm:text-[13px] font-light leading-relaxed text-[var(--tx-2)]">
              <strong className="font-medium text-[var(--tx-1)]">Fulgur Service S.r.l.</strong> è specializzata nella
              sanificazione e pulizia professionale per aziende, condomini e industrie
              nel territorio di <strong className="font-medium text-[var(--tx-1)]">Parma e provincia</strong>.
              Operativi anche a Fidenza, Collecchio e Salsomaggiore Terme.
            </p>
            <div className="mt-4 flex flex-col gap-1.5 font-mono-fulgur text-[9.5px] font-bold uppercase tracking-widest text-[var(--tx-3)]">
              <span>✓ Polizza Assicurativa RC/RCO</span>
              <span>✓ Protocolli HACCP Certificati</span>
              <span>✓ Partner KilometroVerde Parma</span>
            </div>

            <div className="mt-5 inline-flex flex-col gap-1 rounded-xl border border-[var(--br)] bg-white/50 p-3 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="font-display text-sm font-bold text-[var(--accent)]">4.9★</span>
                <span className="font-mono-fulgur text-[9px] font-bold tracking-widest uppercase text-[var(--tx-2)]">Google Reviews</span>
              </div>
              <p className="font-sans text-[10px] text-[var(--tx-2)]">Valutazione media 4,9 su 21 recensioni verificate.</p>
            </div>

            {/* Social + WhatsApp */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={SOCIAL_URLS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguici su Instagram"
                className="inline-flex h-12 w-12 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[var(--br)] bg-white text-[var(--tx-1)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow)] shadow-sm"
              >
                <InstagramLogo size={22} weight="duotone" className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href={SOCIAL_URLS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguici su Facebook"
                className="inline-flex h-12 w-12 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[var(--br)] bg-white text-[var(--tx-1)] transition-all hover:border-[#1877F2] hover:text-[#1877F2] hover:bg-[rgba(24,119,242,0.1)] shadow-sm"
              >
                <FacebookLogo size={22} weight="duotone" className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href={SOCIAL_URLS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguici su LinkedIn"
                className="inline-flex h-12 w-12 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[var(--br)] bg-white text-[var(--tx-1)] transition-all hover:border-[#0A66C2] hover:text-[#0A66C2] hover:bg-[rgba(10,102,194,0.1)] shadow-sm"
              >
                <LinkedinLogo size={22} weight="duotone" className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href={SOCIAL_URLS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguici su TikTok"
                className="inline-flex h-12 w-12 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[var(--br)] bg-white text-[var(--tx-1)] transition-all hover:border-[#111111] hover:text-[#111111] hover:bg-[rgba(17,17,17,0.06)] shadow-sm"
              >
                <TiktokLogo size={22} weight="duotone" className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <WhatsAppHybridLink
                href={SOCIAL_URLS.whatsapp}
                aria-label="Contattaci su WhatsApp"
                className="inline-flex h-12 w-12 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[var(--br)] bg-white text-[var(--tx-1)] transition-all hover:border-[#25D366] hover:text-[#25D366] hover:bg-[rgba(37,211,102,0.1)] shadow-sm"
              >
                <WhatsappLogo size={22} weight="duotone" className="sm:w-[18px] sm:h-[18px]" />
              </WhatsAppHybridLink>
            </div>
          </div>

          {/* Col 2: Servizi */}
          <div>
            <h4 className="font-mono-fulgur text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--tx-3)]">
              Servizi
            </h4>
            <ul className="mt-5 flex flex-col gap-1 sm:gap-0.5 font-sans text-[16px] sm:text-sm text-[var(--tx-1)] sm:text-[var(--tx-2)]">
              {topServices.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/servizi/${service.slug}`} 
                    className="flex min-h-[44px] sm:min-h-[32px] items-center transition-colors hover:text-[var(--accent)]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/servizi" className="flex min-h-[44px] sm:min-h-[32px] items-center font-medium text-[var(--accent)] hover:text-[var(--accent-d)] hover:underline underline-offset-4 transition-colors">
                  Tutti i servizi →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Zone di Intervento (SEO Local) */}
          <div>
            <h4 className="font-mono-fulgur text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--tx-3)]">
              Provincia
            </h4>
            <ul className="mt-5 flex flex-col gap-1 sm:gap-0.5 font-sans text-[16px] sm:text-sm text-[var(--tx-1)] sm:text-[var(--tx-2)]">
              {topTowns.map((town) => (
                <li key={town.slug}>
                  <Link 
                    href={`/zone/${town.slug}`} 
                    className="flex min-h-[44px] sm:min-h-[32px] items-center transition-colors hover:text-[var(--accent)]"
                  >
                    {town.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/zone" className="flex min-h-[44px] sm:min-h-[32px] items-center font-medium text-[var(--accent)] hover:text-[var(--accent-d)] hover:underline underline-offset-4 transition-colors">
                  Tutte le zone →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quartieri Parma (SEO Hyper-Local) */}
          <div className="hidden lg:block">
            <h4 className="font-mono-fulgur text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--tx-3)]">
              Quartieri Parma
            </h4>
            <ul className="mt-5 flex flex-col gap-0.5 font-sans text-sm text-[var(--tx-2)]">
              {['Oltretorrente', 'San Lazzaro', 'Montanara', 'San Leonardo', 'Zona SPIP', 'Cittadella'].map((q) => (
                <li key={q}>
                  <Link 
                    href="/zone/parma" 
                    className="flex min-h-[32px] items-center transition-colors hover:text-[var(--accent)]"
                  >
                    Pulizie {q}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Azienda */}
          <div>
            <h4 className="font-mono-fulgur text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--tx-3)]">
              Azienda
            </h4>
            <ul className="mt-5 flex flex-col gap-1 sm:gap-0.5 font-sans text-[16px] sm:text-sm text-[var(--tx-1)] sm:text-[var(--tx-2)]">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex min-h-[44px] sm:min-h-[32px] items-center transition-colors hover:text-[var(--accent)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contatti */}
          <div>
            <h4 className="font-mono-fulgur text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--tx-3)]">
              Contatti
            </h4>
            <ul className="mt-5 flex flex-col gap-4 sm:gap-3 font-sans text-[15px] sm:text-sm text-[var(--tx-1)] sm:text-[var(--tx-2)]">
              <li className="flex items-start gap-4 sm:gap-3">
                <a 
                  href="https://www.google.com/maps/place/Via+Alfredo+Veroni,+20,+43122+Parma+PR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-[var(--accent)] transition-colors group"
                >
                  <MapPin size={16} weight="duotone" className="mt-0.5 shrink-0 text-[var(--accent)]" />
                  <span className="leading-snug">Via Alfredo Veroni, 22<br />43122 Parma (PR)</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+393383160091" 
                  className="flex items-center gap-3 hover:text-[var(--accent)] transition-colors"
                >
                  <Phone size={16} weight="duotone" className="shrink-0 text-[var(--accent)]" />
                  <span className="font-mono-fulgur">+39 338 316 0091</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:fulgurservice@gmail.com" 
                  className="flex items-center gap-3 hover:text-[var(--accent)] transition-colors"
                >
                  <EnvelopeSimple size={16} weight="duotone" className="shrink-0 text-[var(--accent)]" />
                  <span>fulgurservice@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:fulgurservicesrl@pec.it" 
                  className="flex items-center gap-3 hover:text-[var(--accent)] transition-colors"
                >
                  <EnvelopeSimple size={16} weight="duotone" className="shrink-0 text-[var(--accent)]" />
                  <span>fulgurservicesrl@pec.it</span>
                </a>
              </li>
            </ul>

            {/* CTA mini */}
            <Link
              href="/preventivo"
              className="mt-8 flex w-full sm:w-fit sm:inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-full bg-[var(--accent)] px-5 py-3.5 sm:py-2.5 font-display text-[15px] sm:text-sm font-bold text-white shadow-lg transition-all hover:bg-[var(--accent-d)] hover:shadow-xl"
            >
              Preventivo gratuito
            </Link>
          </div>

        </div>

        {/* Bottom Bar | maintain pb-32 on mobile to not be covered by floating actions (WhatsApp, N badge) */}
        <div className="mt-12 sm:mt-14 border-t border-[var(--br)] pt-8 sm:pt-7 pb-24 sm:pb-0 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="font-mono-fulgur text-[10px] sm:text-[10px] uppercase tracking-wider text-[var(--tx-2)] text-center sm:text-left leading-relaxed">
            © {year} Fulgur Service S.R.L.<br className="block sm:hidden" /> P.IVA 03063010346 · REA PR-353051<br className="block sm:hidden" /> Cap. Soc. €10.000 i.v.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-5">
            <div className="flex items-center gap-4">
              {LEGAL_LINKS.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="font-mono-fulgur text-[10.5px] sm:text-[10px] font-semibold sm:font-normal uppercase tracking-wider text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="hidden sm:block h-3 w-px bg-[var(--br)]" />
            <div className="flex items-center gap-2 mt-1 sm:mt-0 px-4 py-1.5 sm:p-0 rounded-full border border-[var(--br)] sm:border-none bg-[var(--bg-2)] sm:bg-transparent">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]" />
              </span>
              <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--tx-1)] sm:text-[var(--tx-3)]">Operativi</span>
            </div>
          </div>
        </div>

        {/* Made by credit */}
        <div className="pt-4 pb-2 sm:pb-0 flex items-center justify-center gap-1.5 font-mono-fulgur text-[10px] uppercase tracking-widest text-[var(--tx-3)]">
          <span>Made with</span>
          <motion.span
            animate={{ scale: [1, 1.35, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.6 }}
            className="inline-block text-[#e05a6d] select-none"
            aria-hidden="true"
          >
            ♥
          </motion.span>
          <span>passion by</span>
          <a
            href="https://www.lorenzodigital.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors underline underline-offset-2 decoration-[var(--br)] hover:decoration-[var(--accent)]"
          >
            DigitalByLorenzo
          </a>
        </div>

      </div>
    </footer>
  )
}
