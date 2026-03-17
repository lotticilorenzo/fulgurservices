import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CTASection } from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'Gallery | Fulgur Service Parma — Pulizie Professionali',
  description: 'Guarda i nostri lavori: pulizie aziendali, industriali, cantieri navali, pannelli fotovoltaici e molto altro a Parma e provincia.',
  openGraph: {
    title: 'Gallery — Fulgur Service Parma',
    description: 'I nostri lavori in foto: pulizie professionali a Parma in tutti i settori.',
    url: 'https://www.fulgurservice.it/gallery',
    siteName: 'Fulgur Service',
    images: [{ url: 'https://www.fulgurservice.it/og/default.jpg', width: 1200, height: 630 }],
    locale: 'it_IT',
    type: 'website',
  },
}

const GALLERY_ITEMS = [
  {
    src: '/images/servizi/pulizie-aziendali-parma.jpg',
    alt: 'Pulizie aziendali professionali a Parma — Fulgur Service',
    label: 'Pulizie Aziendali',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/images/fulgur-service-team-lavoro.jpg',
    alt: 'Team Fulgur Service al lavoro — pulizie professionali Parma',
    label: 'Il Nostro Team',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/servizi/pulizie-industriali-parma.jpg',
    alt: 'Pulizie industriali capannoni e magazzini a Parma — Fulgur Service',
    label: 'Pulizie Industriali',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/pulizie-professionali-parma-hero.jpg',
    alt: 'Fulgur Service — impresa di pulizie a Parma e provincia',
    label: 'Fulgur Service',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/servizi/pulizia-vetrate-altezza-parma.jpg',
    alt: 'Pulizia vetrate in altezza facciate vetrate a Parma — Fulgur Service',
    label: 'Vetrate in Altezza',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/servizi/pulizie-civili-parma.jpg',
    alt: 'Pulizie civili abitazioni private a Parma — Fulgur Service',
    label: 'Pulizie Civili',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/servizi/pulizie-condomini-parma.jpg',
    alt: 'Pulizie condomini parti comuni scale a Parma — Fulgur Service',
    label: 'Condomini',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/trattamento-superfici-parma.jpg',
    alt: 'Trattamento superfici parquet marmo gres a Parma — Fulgur Service',
    label: 'Trattamento Superfici',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/servizi/pulizie-cantiere-navale-parma.jpg',
    alt: 'Pulizie cantiere navale imbarcazioni barche — Fulgur Service',
    label: 'Cantiere Navale',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/servizi/pulizia-pannelli-fotovoltaici-parma.png',
    alt: 'Pulizia pannelli fotovoltaici impianti solari Parma — Fulgur Service',
    label: 'Pannelli Fotovoltaici',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/servizi/pulizie-fine-cantiere-parma.jpg',
    alt: 'Pulizie fine cantiere post ristrutturazione a Parma — Fulgur Service',
    label: 'Fine Cantiere',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/servizi/pulizie-hotel-alberghi-parma.png',
    alt: 'Pulizie hotel alberghi settore alberghiero a Parma — Fulgur Service',
    label: 'Settore Alberghiero',
    span: 'col-span-2 row-span-1',
  },
  {
    src: '/images/macchinari-pulizie-professionali.jpg',
    alt: 'Macchinari professionali pulizie industriali Fulgur Service',
    label: 'I Nostri Macchinari',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/fulgur-service-pulizie-sostenibili.jpg',
    alt: 'Pulizie sostenibili prodotti eco-certificati Fulgur Service Parma',
    label: 'Sostenibilità',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/operatori-pulizie-professionali-parma.jpg',
    alt: 'Operatori pulizie professionali al lavoro a Parma — Fulgur Service',
    label: 'I Nostri Operatori',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/servizi/pulizie-palestre-strutture-sportive-parma.jpg',
    alt: 'Pulizie palestre strutture sportive a Parma — Fulgur Service',
    label: 'Strutture Sportive',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/impresa-pulizie-parma-furgone.jpg',
    alt: 'Furgone Fulgur Service impresa di pulizie a Parma',
    label: 'La Nostra Flotta',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/servizi/pulizia-facciate-parma.jpg',
    alt: 'Pulizia facciate edifici a Parma — Fulgur Service',
    label: 'Pulizia Facciate',
    span: 'col-span-1 row-span-1',
  },
]

function GalleryCard({ item }: { item: typeof GALLERY_ITEMS[0] }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-white border border-[var(--br)] shadow-sm ${item.span}`}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-[0.2em] text-white">
          {item.label}
        </span>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-0 sm:pt-40">

      {/* HEADER */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 mb-16 text-center flex flex-col items-center">
        <SectionLabel className="mb-4">— I NOSTRI LAVORI</SectionLabel>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl lg:text-6xl max-w-3xl">
          Ogni spazio pulito racconta{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--br-h)]">
            una storia.
          </span>
        </h1>
        <p className="mt-6 font-sans text-lg font-light text-[var(--tx-2)] max-w-2xl text-balance">
          Ambienti aziendali, industriali, sanitari, alberghieri e residenziali. 
          Ogni intervento è unico — ogni risultato è garantito.
        </p>
      </div>

      {/* BENTO GRID GALLERY */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryCard key={i} item={item} />
          ))}
        </div>
      </div>

      <CTASection />
    </main>
  )
}
