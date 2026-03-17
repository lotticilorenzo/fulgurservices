'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Drop, Wrench, Recycle, Lightning, ListChecks, ArrowRight } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { cn } from '@/lib/utils'

export function IntegratedBento() {
  return (
    <section className="relative py-12 lg:py-20 bg-[var(--bg)] overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 xl:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-[38%_62%] gap-12 lg:gap-16 items-center">
          
          {/* LEFT: TEXT & BADGE */}
          <div className="w-full">
            <ScrollReveal>
              <SectionLabel className="mb-6">— IMPRESA 360°</SectionLabel>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--tx-1)] leading-[1.1] mb-8">
                Un partner <br />
                unico per tutto.
              </h2>
              <div className="font-sans text-lg font-light text-[var(--tx-2)] leading-relaxed mb-10 max-w-md">
                Per i nostri clienti la pulizia è solo l'inizio. Garantiamo stabilità e continuità ai tuoi spazi occupandoci anche delle manutenzioni ordinarie.
              </div>
              
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] font-mono-fulgur text-[10px] font-bold uppercase tracking-widest">
                <ListChecks size={18} weight="bold" />
                4 servizi integrati inclusi
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: PHOTO BENTO GRID (2X2) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {/* IDRAULICA */}
            <BentoCard 
              index={0}
              title="Manutenzione idraulica"
              img="/images/servizi/pulizie-industriali-parma.jpg"
              icon={Drop}
              overlayOpacity="bg-black/60"
            />
            {/* EDILE */}
            <BentoCard 
              index={1}
              title="Piccola manutenzione edile"
              img="/images/servizi/pulizie-fine-cantiere-parma.jpg"
              icon={Wrench}
            />
            {/* RIFIUTI */}
            <BentoCard 
              index={2}
              title="Gestione rifiuti"
              img="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80"
              icon={Recycle}
            />
            {/* ELETTRICA */}
            <BentoCard 
              index={3}
              title="Manutenzione elettrica"
              img="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80"
              icon={Lightning}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function BentoCard({ index, title, img, icon: Icon, overlayOpacity = "bg-black/40" }: { index: number, title: string, img: string, icon: any, overlayOpacity?: string }) {
  return (
    <ScrollReveal delay={index * 0.1} className="h-full">
      <SpotlightCard className="relative h-full min-h-[240px] rounded-2xl overflow-hidden group bg-[#0A140F]">
        {/* Main Visual */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={img} 
            alt={title}
            fill
            className="object-cover transition-transform duration-[700ms] group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          {/* Overlays for contrast */}
          <div className={cn("absolute inset-0 z-10 transition-opacity duration-300", overlayOpacity)} />
          <div className="absolute inset-0 z-11 bg-gradient-to-t from-[#0A140F] via-transparent to-transparent opacity-80" />
        </div>
        
        {/* Content Layer */}
        <div className="relative z-20 flex h-full flex-col justify-end p-6 lg:p-8">
          {/* Minimal Icon */}
          <div className="absolute top-6 right-6 text-white/30 group-hover:text-[var(--accent)] transition-colors">
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
