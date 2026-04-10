'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Drop, Wrench, Recycle, Lightning, ListChecks, Leaf, Basket } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { cn } from '@/lib/utils'

export function IntegratedBento() {
  return (
    <section className="relative py-12 lg:py-20 bg-[var(--bg)] overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-[38%_62%] gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT: TEXT & BADGE */}
          <div className="w-full">
            <ScrollReveal>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <SectionLabel>— IMPRESA 360°</SectionLabel>
                <span className="font-mono-fulgur text-[9px] sm:text-[10px] uppercase tracking-widest text-[var(--tx-muted)] border border-[var(--br)] rounded-full px-3 py-1">Servizi esclusivi per i nostri clienti</span>
              </div>
              <h2 className="font-display text-[32px] sm:text-4xl lg:text-5xl font-extrabold text-[var(--tx-1)] leading-[1.1] mb-4 text-balance">
                Un partner <br className="hidden sm:block" />
                unico per tutto.
              </h2>
              <div className="font-display text-xl sm:text-2xl font-bold text-[var(--accent)] mb-6 sm:mb-8 text-balance">
                Un partner unico - manutenzione integrata
              </div>
              <div className="font-sans text-base sm:text-lg font-light text-[var(--tx-2)] leading-relaxed mb-8 sm:mb-10 max-w-md">
                Per i nostri clienti la pulizia è solo l&apos;inizio. Garantiamo stabilità e continuità ai tuoi spazi occupandoci anche delle manutenzioni ordinarie.
              </div>
              
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] font-mono-fulgur text-[9px] sm:text-[10px] font-bold uppercase tracking-widest w-full sm:w-auto justify-center">
                <ListChecks size={18} weight="bold" />
                6 servizi integrati inclusi
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: PHOTO BENTO GRID (2X2) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {/* IDRAULICA */}
            <BentoCard 
              index={0}
              title="Manutenzione idraulica"
              img="/images/servizi/manutenzione-idraulica-parma.webp"
              alt="Dettaglio di un intervento tecnico su tubazioni idrauliche in un contesto aziendale"
              icon={Drop}
              overlayOpacity="bg-black/60"
            />
            {/* EDILE */}
            <BentoCard 
              index={1}
              title="Piccola manutenzione edile"
              img="/images/servizi/pulizie-fine-cantiere-parma.webp"
              alt="Riparazione muraria e stuccatura professionale eseguita dal team di manutenzione"
              icon={Wrench}
            />
            {/* RIFIUTI */}
            <BentoCard 
              index={2}
              title="Gestione rifiuti"
              img="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80"
              alt="Servizio di movimentazione e organizzazione contenitori per la raccolta differenziata"
              icon={Recycle}
            />
            {/* ELETTRICA */}
            <BentoCard
              index={3}
              title="Manutenzione elettrica"
              img="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80"
              alt="Controllo e manutenzione di un quadro elettrico industriale effettuato da tecnici qualificati"
              icon={Lightning}
            />
            {/* GIARDINAGGIO */}
            <BentoCard
              index={4}
              title="Manutenzione giardinaggio"
              img="/images/servizi/manutenzione-aree-verdi-parma.webp"
              alt="Cura e potatura di siepi fiorite in un giardino privato perfettamente mantenuto"
              icon={Leaf}
            />
            {/* LAVANDERIA & FORNITURE */}
            <BentoCard
              index={5}
              title="Fornitura carta e sapone"
              img="/images/servizi/fornitura-materiali-consumo.webp"
              alt="Magazzino scorte per la fornitura periodica di materiali igienici e di consumo"
              icon={Basket}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function BentoCard({ index, title, img, alt, icon: Icon, overlayOpacity = "bg-black/40", className }: { index: number, title: string, img: string, alt: string, icon: React.ElementType, overlayOpacity?: string, className?: string }) {
  return (
    <ScrollReveal delay={index * 0.1} className={cn("h-full", className)}>
      <SpotlightCard className="relative h-full min-h-[240px] rounded-2xl overflow-hidden group bg-[#0A140F]">
        {/* Main Visual */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={img} 
            alt={alt}
            fill
            className="object-cover transition-transform duration-[700ms] group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          {/* Overlays for contrast */}
          <div className={cn("absolute inset-0 z-10 transition-opacity duration-300", overlayOpacity)} />
          <div className="absolute inset-0 z-11 bg-gradient-to-t from-[#0A140F] via-transparent to-transparent opacity-80" />
        </div>
        
        {/* Content Layer */}
        <div className="relative z-20 flex h-full flex-col justify-end p-5 sm:p-6 lg:p-8">
          {/* Minimal Icon */}
          <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white/30 group-hover:text-[var(--accent)] transition-colors">
            <Icon size={24} weight="regular" />
          </div>

          {/* Title */}
          <div>
            <h4 className="font-display text-xl font-bold text-white transition-colors duration-300 group-hover:text-[var(--accent)]">
              {title}
            </h4>
            <div className="mt-2 h-1 w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-12" />
          </div>
        </div>
      </SpotlightCard>
    </ScrollReveal>
  )
}
