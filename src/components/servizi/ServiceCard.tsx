'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Buildings, Factory, FirstAidKit, BuildingApartment, 
  Bed, Sparkle, HardHat, ArrowsOutSimple, Sun, 
  Anchor, Wind, House 
} from '@phosphor-icons/react'
import Image from 'next/image'
import { Service } from '@/lib/services-data'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { cn } from '@/lib/utils'

export type ServiceCardSize = 'large' | 'medium' | 'small'

interface ServiceCardProps {
  service: Service
  size?: ServiceCardSize
  index: number
  className?: string
}

// Mappa dinamica icone Phosphor
const IconMap: Record<string, React.ElementType> = {
  Buildings, Factory, FirstAidKit, BuildingApartment, 
  Bed, Sparkle, HardHat, ArrowsOutSimple, Sun, 
  Anchor, Wind, House
}

export function ServiceCard({ service, size = 'small', index, className }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = IconMap[service.icon] || IconMap.Buildings

  const sizeClasses = {
    large: 'col-span-1 lg:col-span-2 min-h-[280px] md:min-h-[380px]',
    medium: 'col-span-1 min-h-[280px] md:min-h-[380px]',
    small: 'col-span-1 min-h-[260px] md:min-h-[320px]',
  }

  return (
    <ScrollReveal delay={index * 0.1} className={cn(sizeClasses[size], className, 'group block')}>
      <Link href={`/servizi/${service.slug}`} tabIndex={-1} className="h-full w-full outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-2xl block relative">
        <SpotlightCard
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            'relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/40 transition-all duration-500 glass-premium shine-effect hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(78,203,160,0.15)] hover:border-[var(--accent)]/50'
          )}
        >
          {/* Main Visual */}
          <div className="absolute inset-0 z-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-[700ms] ease-in-out group-hover:scale-[1.05]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Direct Gradient Overlay */}
            <div
              className="absolute inset-0 z-10 transition-opacity duration-300"
              style={{ background: 'linear-gradient(to top, rgba(10,20,15,0.96) 0%, rgba(10,20,15,0.45) 40%, rgba(10,20,15,0.55) 100%)' }}
            />
          </div>

          {/* Minimalist Icon Block (Top Left) */}
          <div className="absolute top-6 left-6 z-20 p-2 text-white/40">
            <Icon size={24} weight="regular" />
          </div>

          {/* Content Layer */}
          <div className="relative z-20 flex h-full flex-col justify-end p-6 lg:p-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-[18px] md:text-[22px] font-bold text-white transition-colors duration-300 group-hover:text-[var(--accent)]">
                {service.title}
              </h3>
              
              <p className="font-sans text-[12px] md:text-[14px] font-light text-white/70 max-w-[90%] line-clamp-2">
                {service.shortDesc}
              </p>

              {/* Persuasive Mini-badge */}
              <div className="mt-4 flex">
                <span className="inline-flex items-center rounded-full bg-[var(--accent)]/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[var(--accent)] border border-[var(--accent)]/20 shadow-[0_0_15px_rgba(78,203,160,0.1)]">
                  Sopralluogo Gratuito
                </span>
              </div>
            </div>

            {/* Bottom meta row */}
            <div className="mt-8 flex items-center justify-between">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[var(--accent)]">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="font-mono-fulgur text-[9px] md:text-[10px] uppercase tracking-wider text-white/30">
                {service.keywords[0]}
              </div>
            </div>
          </div>
        </SpotlightCard>
      </Link>
    </ScrollReveal>
  )
}
