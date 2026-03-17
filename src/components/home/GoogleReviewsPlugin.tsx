'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, GoogleLogo, ArrowRight, Quotes } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'

// Google Place ID for Fulgur Service Parma
const PLACE_ID = "ChIJB0qma-EUgEcROgdYtBuyiG4"
const GOOGLE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`

export function GoogleReviewsPlugin() {
  // We use useEffect to ensure the script is loaded on the client side only
  useEffect(() => {
    // Check if script already exists to avoid duplicates
    const scriptId = 'elfsight-platform-js';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="relative w-full bg-[var(--bg-2)] py-20 lg:py-32 border-y border-[var(--br)] overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute right-[-10%] top-[-10%] opacity-[0.03] pointer-events-none rotate-12">
        <GoogleLogo size={600} weight="fill" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 xl:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16 lg:mb-20">
          <ScrollReveal className="max-w-2xl">
            <SectionLabel className="mb-4">— RECENSIONI GOOGLE REALI</SectionLabel>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl lg:text-6xl">
              Cosa dicono <br /> di <span className="text-[var(--accent)]">noi</span>.
            </h2>
            <p className="mt-6 font-sans text-lg font-light text-[var(--tx-2)] max-w-xl">
              Tutte le recensioni sono veritiere e caricate in tempo reale da Google. 
              La trasparenza è il nostro biglietto da visita.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} weight="fill" />)}
              </div>

              <MagneticButton>
                <a 
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 bg-white border border-[var(--br)] rounded-2xl hover:border-[var(--accent)] hover:shadow-lg transition-all group"
                >
                  <GoogleLogo size={20} weight="bold" className="text-[#4285F4]" />
                  <span className="font-display font-bold text-sm text-[var(--tx-1)]">Lascia una recensione</span>
                  <ArrowRight size={16} className="text-[var(--tx-3)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
                </a>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Elfsight Widget Container */}
        <ScrollReveal className="relative min-h-[400px]">
          <div className="absolute -top-10 -left-6 z-0 opacity-10 pointer-events-none">
            <Quotes size={120} weight="fill" className="text-[var(--accent)]" />
          </div>
          
          <div className="relative z-10 bg-white/40 backdrop-blur-md rounded-[40px] border border-white/50 p-4 lg:p-8 overflow-hidden shadow-2xl">
            {/* The Widget */}
            <div className="elfsight-app-219ffd5f-6ad1-4ab4-b866-f95c840a5192" data-elfsight-app-lazy></div>
          </div>
        </ScrollReveal>

        <div className="mt-16 text-center">
          <ScrollReveal delay={0.4}>
            <p className="font-mono-fulgur text-[10px] uppercase tracking-[0.2em] text-[var(--tx-3)] mb-4">
              Verified by Google Business Profile
            </p>
            <div className="flex items-center justify-center gap-4 opacity-50">
              <div className="h-px w-12 bg-[var(--br)]" />
              <GoogleLogo size={24} weight="bold" />
              <div className="h-px w-12 bg-[var(--br)]" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
