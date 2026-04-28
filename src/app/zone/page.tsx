import type { Metadata } from 'next'
import Link from 'next/link'
import { TOWNS } from '@/lib/towns-data'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { CTASection } from '@/components/home/CTASection'
import { MapPin, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { makeBreadcrumbsJsonLd } from '@/lib/seo'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Zone di Copertura | Pulizie Parma e Provincia | Fulgur Service',
  description: 'Fulgur Service opera a Parma e in tutta la provincia: Fidenza, Salsomaggiore, Collecchio e oltre. Sopralluogo gratuito ovunque tu sia in Emilia-Romagna.',
  openGraph: {
    title: 'Zone di Copertura | Pulizie Parma e Provincia | Fulgur Service',
    description: 'Fulgur Service opera a Parma e in tutta la provincia: Fidenza, Salsomaggiore, Collecchio e oltre. Sopralluogo gratuito ovunque tu sia in Emilia-Romagna.',
    url: 'https://www.fulgurservice.it/zone',
    images: [{ url: '/images/zone-copertura-servizi-pulizie-parma-provincia.webp', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://www.fulgurservice.it/zone' },
}

export default function ZonePage() {
  const breadcrumbsJsonLd = makeBreadcrumbsJsonLd([
    { name: 'Home', item: '/' },
    { name: 'Zone', item: '/zone' },
  ])

  return (
    <main className="min-h-[100dvh] bg-[var(--bg)] pt-32 pb-0 sm:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />


      {/* HEADER */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8 mb-12 text-center flex flex-col items-center">
        <Breadcrumbs 
          items={[{ label: 'Zone', href: '/zone', active: true }]} 
          className="mb-8"
        />
        <SectionLabel className="mb-4">DOVE OPERIAMO</SectionLabel>
        <h1 className="font-display text-[32px] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--tx-1)] max-w-4xl text-balance leading-[1.1] pb-1">
          Parma e Provincia:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--br-h)]">
            il nostro territorio.
          </span>
        </h1>
        <p className="mt-4 sm:mt-6 font-sans text-base sm:text-lg font-light text-[var(--tx-2)] max-w-2xl leading-relaxed text-balance">
          Interveniamo a Parma e in tutta la provincia con sopralluogo gratuito.
          Dalla città ai comuni più piccoli: il nostro servizio arriva dove sei tu.
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
          {['Parma e Provincia', 'Sopralluogo Gratuito', 'Emilia-Romagna'].map((pill) => (
            <span
              key={pill}
              className="bg-[var(--bg-2)] border border-[var(--br)] font-mono-fulgur text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[var(--tx-3)] rounded-full px-3 py-1.5 sm:px-4 sm:py-2"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      {/* GRID ZONE */}
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8 mb-20 sm:mb-32">
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {TOWNS.map((town) => (
              <Link
                key={town.slug}
                href={`/zone/${town.slug}`}
                className="group flex items-start gap-4 rounded-2xl border border-[var(--br)] bg-[var(--card-bg)] p-5 sm:p-6 transition-all duration-300 hover:border-[var(--br-h)] hover:bg-[var(--card-hover)] hover:shadow-[0_4px_24px_rgba(42,140,122,0.08)]"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-2)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                  <MapPin size={18} weight="fill" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-base font-bold text-[var(--tx-1)] leading-snug">
                    {town.name}
                  </p>
                  <p className="mt-0.5 font-mono-fulgur text-[10px] font-bold uppercase tracking-wider text-[var(--tx-3)]">
                    {town.keySector}
                  </p>
                  <p className="mt-2 font-sans text-sm font-light text-[var(--tx-2)] leading-relaxed line-clamp-2">
                    {town.heroSub}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="mt-1 shrink-0 text-[var(--tx-3)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                />
              </Link>
            ))}
          </div>
        </ScrollReveal>

        {/* NOTA COPERTURA */}
        <ScrollReveal>
          <div className="mt-10 rounded-2xl border border-[var(--br)] bg-[var(--bg-2)] p-6 sm:p-8 text-center">
            <p className="font-sans text-sm sm:text-base font-light text-[var(--tx-2)] leading-relaxed max-w-2xl mx-auto">
              Non vedi il tuo comune?{' '}
              <Link href="/contatti" className="font-medium text-[var(--accent)] underline underline-offset-2 hover:text-[var(--accent-d)]">
                Contattaci comunque
              </Link>
              {' '}| operiamo in tutta la provincia di Parma e nelle zone limitrofe dell&apos;Emilia-Romagna.
              Il sopralluogo è sempre gratuito e senza impegno.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <CTASection />
    </main>
  )
}
