import Image from 'next/image'
import { Phone } from '@phosphor-icons/react/dist/ssr'
import type { LPData } from '@/lib/lp-data'
import { cn } from '@/lib/utils'

interface LPHeroProps {
  data: LPData
  formId: string
}

export function LPHero({ data, formId }: LPHeroProps) {
  const { hero } = data

  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-[var(--bg)] overflow-hidden">
      {/* Top bar — minimal brand signal */}
      <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-[var(--br)] bg-[var(--bg)] relative z-10">
        <div className="flex items-center gap-2">
          <span className="font-display font-700 text-lg text-[var(--tx-1)]">
            Fulgur<span className="text-[var(--accent)]">.</span>
          </span>
          <span className="hidden sm:inline font-mono-fulgur text-[10px] uppercase tracking-[0.18em] text-[var(--tx-3)]">
            Impresa di pulizie · Parma
          </span>
        </div>
        <a
          href={`tel:${hero.ctaPhoneRaw}`}
          aria-label="Chiama Fulgur Service"
          className="flex items-center gap-2 text-sm font-body font-medium text-[var(--accent-d)] hover:text-[var(--accent)] transition-colors"
        >
          <Phone size={16} weight="bold" aria-hidden="true" />
          <span>338 316 0091</span>
        </a>
      </div>

      {/* Hero grid */}
      <div className="flex-1 grid lg:grid-cols-2 items-center gap-0">
        {/* Left — copy */}
        <div className="flex flex-col justify-center px-5 sm:px-8 xl:px-16 py-12 lg:py-16 relative z-10">
          {/* Label */}
          <p className="font-mono-fulgur text-[10px] uppercase tracking-[0.18em] text-[var(--accent)] mb-5">
            {hero.label}
          </p>

          {/* H1 */}
          <h1 className="font-display font-extrabold leading-[0.95] tracking-tighter mb-6">
            <span
              className="block text-[var(--tx-1)]"
              style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
            >
              {hero.headline1}
            </span>
            <span
              className="block text-[var(--accent)]"
              style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
            >
              {hero.headline2}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-[var(--tx-2)] text-base sm:text-lg leading-relaxed max-w-[52ch] mb-8">
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`#${formId}`}
              className={cn(
                'inline-flex items-center justify-center gap-2',
                'h-14 px-7 rounded-full',
                'bg-[var(--accent)] text-white font-body font-medium text-base',
                'hover:bg-[var(--accent-d)] transition-colors',
                'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2',
                'shine-effect'
              )}
            >
              {hero.ctaPrimary}
            </a>
            <a
              href={`tel:${hero.ctaPhoneRaw}`}
              aria-label="Chiama Fulgur Service"
              className={cn(
                'inline-flex items-center justify-center gap-2',
                'h-14 px-7 rounded-full',
                'border border-[var(--br-solid)] text-[var(--accent-d)] font-body font-medium text-base',
                'hover:bg-[var(--bg-2)] transition-colors',
                'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2'
              )}
            >
              <Phone size={18} weight="bold" aria-hidden="true" />
              {hero.ctaPhone}
            </a>
          </div>

          {/* Microcopy */}
          <p className="font-body text-[var(--tx-3)] text-sm mt-4">
            Sopralluogo gratuito, nessun impegno. Risposta garantita in 24h.
          </p>
        </div>

        {/* Right — image */}
        <div className="relative h-64 sm:h-80 lg:h-full lg:min-h-[100dvh] overflow-hidden">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/30 to-transparent lg:bg-gradient-to-r lg:from-[var(--bg)]/40 lg:to-transparent" />
        </div>
      </div>
    </section>
  )
}
