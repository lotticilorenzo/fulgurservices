'use client'

import React from 'react'
import Link from 'next/link'
import { InstagramLogo } from '@phosphor-icons/react/dist/ssr'
import { SERVICES } from '@/lib/services-data'

export function Footer() {
  const [year, setYear] = React.useState<number | string>('...')
  
  React.useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  const topServices = SERVICES.slice(0, 6)

  return (
    <footer className="w-full rounded-t-[3rem] border-t border-white/5 bg-[var(--tx-1)] pb-8 pt-20 sm:pt-24 mt-[-3rem] relative z-20 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[25%_20%_20%_15%_20%] lg:gap-8">
          
          {/* Col 1: Logo & Tagline */}
          <div className="flex flex-col items-start">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg">
              <div className="flex items-center gap-3">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#1A1A2E" />
                  <path d="M22.5 10L14 22H20.5L17.5 31L27 18.5H20.5L22.5 10Z" fill="url(#paint0_linear_logo)" stroke="#4ECBA0" strokeWidth="1.5" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear_logo" x1="14" y1="10" x2="27" y2="31" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4ECBA0" />
                      <stop offset="1" stopColor="#1B5E6E" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex flex-col">
                  <span className="font-display text-xl font-bold leading-none tracking-tight text-white">
                    FULGUR
                  </span>
                  <span className="font-display text-sm font-bold leading-none tracking-tight text-[var(--accent)]">
                    SERVICE
                  </span>
                </div>
              </div>
            </Link>
            <p className="mt-6 max-w-xs font-sans text-sm font-light leading-relaxed text-white/60">
              "Puliamo il futuro con l'energia della natura"
            </p>
          </div>

          {/* Col 2: Servizi */}
          <div>
            <h4 className="font-mono-fulgur text-xs font-bold uppercase tracking-widest text-white/40">
              Servizi
            </h4>
            <ul className="mt-6 flex flex-col gap-3 font-sans text-sm font-light text-white/70">
              {topServices.map((service) => (
                <li key={service.id}>
                  <Link href={`/servizi/${service.slug}`} className="transition-colors hover:text-[var(--accent)]">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/servizi" className="text-[var(--accent)] hover:text-[var(--accent-l)] hover:underline underline-offset-4">
                  Tutti i servizi →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Azienda */}
          <div>
            <h4 className="font-mono-fulgur text-xs font-bold uppercase tracking-widest text-white/40">
              Azienda
            </h4>
            <ul className="mt-6 flex flex-col gap-3 font-sans text-sm font-light text-white/70">
              <li><Link href="/chi-siamo" className="transition-colors hover:text-[var(--accent)]">Chi Siamo</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-[var(--accent)]">Blog & Authority</Link></li>
              <li><Link href="/macchinari" className="transition-colors hover:text-[var(--accent)]">Macchinari</Link></li>
              <li><Link href="/lavora-con-noi" className="transition-colors hover:text-[var(--accent)] font-medium text-[var(--accent)]">Lavora con noi</Link></li>
              <li><Link href="/gallery" className="transition-colors hover:text-[var(--accent)]">Gallery</Link></li>
              <li><Link href="/preventivo" className="transition-colors hover:text-[var(--accent)]">Preventivo</Link></li>
              <li><Link href="/contatti" className="transition-colors hover:text-[var(--accent)]">Contatti</Link></li>
            </ul>
          </div>

          {/* Col 4: Aree Servite */}
          <div>
            <h4 className="font-mono-fulgur text-xs font-bold uppercase tracking-widest text-white/40">
              Aree Servite
            </h4>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 font-mono-fulgur text-[10px] uppercase tracking-wider text-white/50">
              <li><Link href="/servizi?zona=parma" className="hover:text-[var(--accent)]">Parma</Link></li>
              <li><Link href="/servizi?zona=fidenza" className="hover:text-[var(--accent)]">Fidenza</Link></li>
              <li><Link href="/servizi?zona=salsomaggiore" className="hover:text-[var(--accent)]">Salsomaggiore</Link></li>
              <li><Link href="/servizi?zona=collecchio" className="hover:text-[var(--accent)]">Collecchio</Link></li>
              <li><Link href="/servizi?zona=noceto" className="hover:text-[var(--accent)]">Noceto</Link></li>
              <li><Link href="/servizi?zona=medesano" className="hover:text-[var(--accent)]">Medesano</Link></li>
              <li><Link href="/servizi?zona=montechiarugolo" className="hover:text-[var(--accent)]">Montechiarugolo</Link></li>
              <li><Link href="/servizi?zona=traversetolo" className="hover:text-[var(--accent)]">Traversetolo</Link></li>
              <li><Link href="/servizi?zona=langhirano" className="hover:text-[var(--accent)]">Langhirano</Link></li>
              <li><Link href="/servizi?zona=sorbolo" className="hover:text-[var(--accent)]">Sorbolo</Link></li>
            </ul>
          </div>

          {/* Col 5: Contatti */}
          <div>
            <h4 className="font-mono-fulgur text-xs font-bold uppercase tracking-widest text-white/40">
              Contatti
            </h4>
            <ul className="mt-6 flex flex-col gap-4 font-sans text-sm font-light text-white/70">
              <li>
                <div className="font-medium text-white">Sede Parma</div>
                <div className="mt-1">Emilia-Romagna, Italia</div>
              </li>
              <li>
                <a href="tel:+393383160091" className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
                  <span className="font-mono-fulgur text-[13px]">+39 338 316 0091</span>
                </a>
              </li>
              <li>
                <a href="mailto:fulgurservice@gmail.com" className="hover:text-[var(--accent)] transition-colors">
                  fulgurservice@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href="https://www.instagram.com/fulgurservice/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)]"
                  aria-label="Seguici su Instagram"
                >
                  <InstagramLogo size={20} weight="duotone" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 sm:mt-24 border-t border-white/5 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row font-mono-fulgur text-[11px] uppercase tracking-wider text-white/30">
          <div>
            © {year} Fulgur Service S.R.L. <span className="mx-2 lg:inline hidden">|</span><br className="lg:hidden" /> P.IVA 03063010346 - REA 353051 - Cap. Soc. €10.000 i.v.
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie</Link>
            
            <div className="h-4 w-[1px] bg-white/10" />
            
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
              </span>
              Sistema Operativo
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
