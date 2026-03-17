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
    large: 'col-span-1 lg:col-span-2 min-h-[380px] md:aspect-[16/7]',
    medium: 'col-span-1 min-h-[380px]',
    small: 'col-span-1 min-h-[320px]',
  }

  return (
    <ScrollReveal delay={index * 0.1} className={cn(sizeClasses[size], className, 'group block')}>
      <Link href={`/servizi/${service.slug}`} tabIndex={-1} className="h-full w-full outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-2xl block">
        <SpotlightCard
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            'relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--br)] bg-[#0A140F] transition-all duration-500'
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
              style={{ background: 'linear-gradient(to top, rgba(10,20,15,0.92) 0%, rgba(10,20,15,0.2) 60%, transparent 100%)' }}
            />
          </div>

          {/* Minimalist Icon Block (Top Left) */}
          <div className="absolute top-4 left-4 z-20 p-2 text-white/50">
            <Icon size={20} weight="regular" />
          </div>

          {/* Content Layer */}
          <div className="relative z-20 flex h-full flex-col justify-end p-5">
            {/* Title - Syne 700 18px absolute bottom-16 left-5 */}
            <h3 className="absolute bottom-16 left-5 font-display text-[18px] font-bold text-white transition-colors duration-300 group-hover:text-[var(--accent)]">
              {service.title}
            </h3>
            
            {/* Description - DM Sans 300 12px absolute bottom-8 left-5 */}
            <p className="absolute bottom-8 left-5 font-sans text-[12px] font-light text-white/65 max-w-[85%] line-clamp-1">
              {service.shortDesc}
            </p>

            {/* SEO Badge - DM Mono 9px absolute bottom-4 right-5 */}
            <div className="absolute bottom-4 right-5 font-mono-fulgur text-[9px] uppercase tracking-wider text-white/40">
              {service.keywords[0]}
            </div>

            {/* Hover Arrow Indicator - bottom-4 left-5 */}
            <div className="absolute bottom-4 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </SpotlightCard>
      </Link>
    </ScrollReveal>
  )
}
