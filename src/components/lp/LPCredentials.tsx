import Image from 'next/image'
import { CheckCircle } from '@phosphor-icons/react/dist/ssr'
import type { LPData } from '@/lib/lp-data'

interface LPCredentialsProps {
  credentials: NonNullable<LPData['credentials']>
}

export function LPCredentials({ credentials }: LPCredentialsProps) {
  return (
    <section data-scroll-section className="py-16 sm:py-20 bg-[var(--bg-2)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-d)] mb-4">
          {credentials.eyebrow}
        </p>
        <h2
          className="font-display font-bold text-[var(--tx-1)] tracking-tight mb-4"
          style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
        >
          {credentials.h2}
        </h2>

        <ul className="grid sm:grid-cols-2 gap-3 mb-12 mt-8">
          {credentials.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 bg-[var(--bg-card)] border border-[var(--br)] rounded-xl px-5 py-4"
            >
              <CheckCircle
                size={18}
                weight="fill"
                className="text-[var(--accent)] flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="font-body text-sm text-[var(--tx-1)] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        {/* Photo gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden col-span-2 sm:col-span-1">
            <Image
              src="/images/team-operatori-pulizie-professionali-parma.webp"
              alt="Team operatori Fulgur Service con DPI — pronti per sanificazione settore alimentare Parma"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/gallery/attrezzatura-professionale-pulitalia.webp"
              alt="Attrezzatura professionale Fulgur Service per sanificazione alimentare — Parma"
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/gallery/prodotto-kiter-evolution-pavimento-sanificato.webp"
              alt="Prodotto PMC Kiter Evolution per sanificazione pavimenti settore alimentare Parma"
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
