'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { X, MagnifyingGlassPlus } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CTASection } from '@/components/home/CTASection'
import { WipeReveal } from '@/components/ui/WipeReveal'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'
import { CASE_STUDIES } from '@/lib/case-studies'

const CATEGORIES = [
  { id: 'all', label: 'Tutte' },
  { id: 'aziendali', label: 'Aziendali' },
  { id: 'industriali', label: 'Industriali' },
  { id: 'speciali', label: 'Specialistici' },
  { id: 'residenziali', label: 'Residenziali' },
  { id: 'azienda', label: 'Chi Siamo' },
]

const GALLERY_ITEMS = [
  {
    id: 1,
    src: '/images/servizi/pulizie-aziendali-parma.jpg',
    alt: 'Pulizie aziendali professionali a Parma — Fulgur Service',
    label: 'Pulizie Aziendali',
    category: 'aziendali',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    src: '/images/fulgur-service-team-lavoro.jpg',
    alt: 'Team Fulgur Service al lavoro — pulizie professionali Parma',
    label: 'Il Nostro Team',
    category: 'azienda',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    src: '/images/servizi/pulizie-industriali-parma.jpg',
    alt: 'Pulizie industriali capannoni e magazzini a Parma — Fulgur Service',
    label: 'Pulizie Industriali',
    category: 'industriali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    src: '/images/pulizie-professionali-parma-hero.jpg',
    alt: 'Fulgur Service — impresa di pulizie a Parma e provincia',
    label: 'Fulgur Service',
    category: 'azienda',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 5,
    src: '/images/servizi/pulizia-vetrate-altezza-parma.jpg',
    alt: 'Pulizia vetrate in altezza facciate vetrate a Parma — Fulgur Service',
    label: 'Vetrate in Altezza',
    category: 'speciali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    src: '/images/servizi/pulizie-civili-parma.jpg',
    alt: 'Pulizie civili abitazioni private a Parma — Fulgur Service',
    label: 'Pulizie Civili',
    category: 'residenziali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 7,
    src: '/images/servizi/pulizie-condomini-parma.jpg',
    alt: 'Pulizie condomini parti comuni scale a Parma — Fulgur Service',
    label: 'Condomini',
    category: 'residenziali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 8,
    src: '/images/trattamento-superfici-parma.jpg',
    alt: 'Trattamento superfici parquet marmo gres a Parma — Fulgur Service',
    label: 'Trattamento Superfici',
    category: 'speciali',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 9,
    src: '/images/servizi/pulizie-cantiere-navale-parma.jpg',
    alt: 'Pulizie cantiere navale imbarcazioni barche — Fulgur Service',
    label: 'Cantiere Navale',
    category: 'speciali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 10,
    src: '/images/servizi/pulizia-pannelli-fotovoltaici-parma.png',
    alt: 'Pulizia pannelli fotovoltaici impianti solari Parma — Fulgur Service',
    label: 'Pannelli Fotovoltaici',
    category: 'speciali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 11,
    src: '/images/servizi/pulizie-fine-cantiere-parma.jpg',
    alt: 'Pulizie fine cantiere post ristrutturazione a Parma — Fulgur Service',
    label: 'Fine Cantiere',
    category: 'speciali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 12,
    src: '/images/servizi/pulizie-hotel-alberghi-parma.png',
    alt: 'Pulizie hotel alberghi settore alberghiero a Parma — Fulgur Service',
    label: 'Settore Alberghiero',
    category: 'aziendali',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 13,
    src: '/images/macchinari-pulizie-professionali.jpg',
    alt: 'Macchinari professionali pulizie industriali Fulgur Service',
    label: 'I Nostri Macchinari',
    category: 'azienda',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 14,
    src: '/images/fulgur-service-pulizie-sostenibili.jpg',
    alt: 'Pulizie sostenibili prodotti eco-certificati Fulgur Service Parma',
    label: 'Sostenibilità',
    category: 'azienda',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 15,
    src: '/images/operatori-pulizie-professionali-parma.jpg',
    alt: 'Operatori pulizie professionali al lavoro a Parma — Fulgur Service',
    label: 'I Nostri Operatori',
    category: 'azienda',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 16,
    src: '/images/servizi/pulizie-palestre-strutture-sportive-parma.jpg',
    alt: 'Pulizie palestre strutture sportive a Parma — Fulgur Service',
    label: 'Strutture Sportive',
    category: 'industriali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 17,
    src: '/images/fulgur-service-van-ai.png',
    alt: 'La flotta di Fulgur Service — furgoni moderni e attrezzati sempre pronti all\'intervento a Parma',
    label: 'La Nostra Flotta',
    category: 'azienda',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 18,
    src: '/images/servizi/pulizia-facciate-parma.jpg',
    alt: 'Pulizia facciate edifici a Parma — Fulgur Service',
    label: 'Pulizia Facciate',
    category: 'speciali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 19,
    src: '/images/gallery/gallery-project-1.jpg',
    alt: 'Prima e Dopo Pulizie a Fondo Parma',
    label: 'Prima E Dopo',
    category: 'speciali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 20,
    src: '/images/gallery/gallery-project-2.jpg',
    alt: 'Prima e Dopo Trattamento Superfici',
    label: 'Prima E Dopo',
    category: 'industriali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 21,
    src: '/images/gallery/gallery-project-3.jpg',
    alt: 'Prima e Dopo Pavimenti',
    label: 'Prima E Dopo',
    category: 'aziendali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 22,
    src: '/images/gallery/gallery-project-4.png',
    alt: 'Team Operativo Fulgur Service',
    label: 'Il Nostro Team',
    category: 'azienda',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 23,
    src: '/images/gallery/gallery-project-5.jpg',
    alt: 'Intervento in alta quota e vetrate',
    label: 'Lavori In Quota',
    category: 'speciali',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 24,
    src: '/images/gallery/gallery-project-6.jpg',
    alt: 'Macchinari e attrezzature pulizie parma',
    label: 'Intervento Professionale',
    category: 'aziendali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 25,
    src: '/images/gallery/gallery-project-7.jpg',
    alt: 'Pulizie industriali pavimentazione e magazzini',
    label: 'Pavimentazioni',
    category: 'industriali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 26,
    src: '/images/gallery/gallery-project-8.jpg',
    alt: 'Risultato pulizia a fondo superfici',
    label: 'Riserve e Dettagli',
    category: 'residenziali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 27,
    src: '/images/gallery/gallery-project-9.jpg',
    alt: 'Risultati perfetti negli ambienti di lavoro',
    label: 'Uffici',
    category: 'aziendali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 28,
    src: '/images/gallery/gallery-project-10.jpg',
    alt: 'Cura e manutenzione condomini',
    label: 'Intervento in Condominio',
    category: 'residenziali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 29,
    src: '/images/gallery/gallery-project-11.jpg',
    alt: 'Sanificazione e trattamenti specifici',
    label: 'Igiene Profonda',
    category: 'speciali',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 30,
    src: '/images/gallery/gallery-project-12.jpg',
    alt: 'Pulizie di fino post cantiere',
    label: 'Fine Cantiere',
    category: 'speciali',
    span: 'col-span-1 row-span-1',
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null)

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_ITEMS
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-0 sm:pt-40">
      <WipeReveal direction="top">
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

          {/* FILTER PILLS */}
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-7 py-3 rounded-full font-mono-fulgur text-[11px] font-bold uppercase tracking-[0.15em] transition-all ${
                  activeCategory === cat.id
                    ? 'text-[var(--bg)] bg-[var(--accent)] shadow-[0_8px_20px_rgba(78,203,160,0.3)]'
                    : 'text-[var(--tx-3)] bg-[var(--bg-2)] border border-[var(--br)] hover:border-[var(--accent)]/50'
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 rounded-full bg-[var(--accent)] -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </WipeReveal>

      {/* BENTO GRID GALLERY */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 mb-32">
        <LayoutGroup>
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[220px] lg:auto-rows-[260px] gap-3 sm:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedImage(item)}
                  className={`group relative overflow-hidden rounded-2xl bg-[var(--bg-2)] border border-[var(--br)] shadow-sm hover:shadow-[0_20px_40px_rgba(78,203,160,0.15)] hover:border-[var(--accent)]/50 hover:z-10 transition-all duration-500 cursor-zoom-in ${item.span}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-12 w-12 rounded-full bg-[var(--accent)] text-[var(--bg)] flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                      <MagnifyingGlassPlus size={24} weight="bold" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>

      {/* BEFORE / AFTER SECTION */}
      <div className="w-full bg-[var(--bg-2)] py-32 border-t border-[var(--br)] relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center mb-20">
              <SectionLabel className="mb-4">— RISULTATI CERTIFICATI</SectionLabel>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--tx-1)] tracking-tight">
                Il potere dei <span className="text-[var(--accent)]">risultati visibili.</span>
              </h2>
              <p className="mt-6 font-sans text-lg font-light text-[var(--tx-2)] max-w-2xl text-balance">
                Usa lo slider per confrontare lo stato degli ambienti prima e dopo il nostro intervento professionale. La precisione è la nostra firma.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-8"
              >
                 <BeforeAfterSlider 
                    beforeImage={study.beforeImage} 
                    afterImage={study.afterImage} 
                    className="shadow-2xl"
                 />
                 <div className="px-2">
                    <div className="flex items-center gap-3 mb-3">
                       <span className="text-[10px] font-mono-fulgur font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full border border-[var(--accent)]/20">
                          {study.category}
                       </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-3">{study.title}</h3>
                    <p className="font-sans text-sm font-light text-[var(--tx-2)] leading-relaxed">
                       {study.description}
                    </p>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-[var(--bg)]/95 p-4 md:p-12 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-8 right-8 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} weight="bold" />
            </motion.button>

            <motion.div 
              layoutId={`img-${selectedImage.id}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative aspect-video w-full max-w-6xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <SectionLabel className="mb-2 text-[var(--accent)] border-[var(--accent)]/30">— PORTFOLIO</SectionLabel>
                <h3 className="font-display text-2xl font-bold text-white mb-2">{selectedImage.label}</h3>
                <p className="font-sans text-sm text-white/70 max-w-xl">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
