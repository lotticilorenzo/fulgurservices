'use client'

import React from 'react'
import Link from 'next/link'
import { TOWNS } from '@/lib/towns-data'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { MapPin, ArrowRight, Buildings, Globe } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export function GeographicCoverage() {
  const parmaTown = TOWNS.find(t => t.slug === 'parma')
  const topTowns = TOWNS.filter(t => t.slug !== 'parma').slice(0, 5)

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[var(--bg)]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-20 items-start">
          
          {/* Left Column: Authority & Districts */}
          <div className="flex flex-col">
            <ScrollReveal>
              <SectionLabel className="mb-6">CAPILLARITÀ LOCALE</SectionLabel>
              <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-[var(--tx-1)] mb-8 tracking-tighter leading-tight text-balance">
                Presenza costante a <span className="text-[var(--accent)]">Parma</span> e in tutta la Provincia.
              </h2>
              <p className="font-sans text-lg sm:text-xl font-light text-[var(--tx-2)] leading-relaxed max-w-2xl mb-12">
                Con sede operativa nel cuore di Parma, garantiamo tempi di intervento rapidissimi. Non siamo una ditta esterna: siamo parte integrante del tessuto produttivo e residenziale parmigiano.
              </p>
            </ScrollReveal>

            {/* Parma Neighborhoods Authority Block */}
            <ScrollReveal delay={0.2}>
              <div className="glass-premium p-8 rounded-[2.5rem] border border-[var(--br)] bg-gradient-to-br from-white/5 to-white/[0.02]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] border border-[var(--accent)]/20 shadow-glow">
                    <Buildings size={32} weight="duotone" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white leading-tight">Città di Parma</h3>
                    <p className="font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--accent)]">Sede Operativa • Intervento 24h</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {parmaTown?.neighborhoods?.map((q) => (
                    <div 
                      key={q} 
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-[12px] text-[var(--tx-2)] group hover:border-[var(--accent)]/40 hover:text-white transition-all cursor-default"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                      {q}
                    </div>
                  ))}
                </div>
                
                <Link 
                  href="/zone/parma" 
                  className="mt-8 flex items-center gap-2 font-mono-fulgur text-[11px] font-bold uppercase tracking-widest text-[var(--tx-3)] hover:text-[var(--accent)] transition-colors group"
                >
                  Scopri di più su Parma <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Province Hub */}
          <aside className="lg:mt-8">
            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-3 mb-8">
                <Globe size={24} className="text-[var(--accent)]" />
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight">Focus Provincia</h3>
              </div>
              
              <div className="space-y-4">
                {topTowns.map((town) => (
                  <Link
                    key={town.slug}
                    href={`/zone/${town.slug}`}
                    className="flex flex-col gap-1 p-6 rounded-3xl bg-[var(--bg-2)] border border-[var(--br)] hover:border-[var(--accent)]/40 hover:bg-[var(--card-hover)] transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors">{town.name}</span>
                      <ArrowRight size={16} className="text-[var(--tx-3)] group-hover:translate-x-1 group-hover:text-[var(--accent)] transition-all" />
                    </div>
                    <span className="font-mono-fulgur text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--tx-3)]">{town.keySector}</span>
                  </Link>
                ))}
                
                <Link 
                  href="/zone" 
                  className="flex items-center justify-center w-full py-5 rounded-3xl border border-[var(--accent)]/20 bg-[var(--accent)]/5 text-[var(--accent)] font-display font-bold text-[15px] hover:bg-[var(--accent)]/10 transition-all shadow-glow-sm"
                >
                  Tutte le Zone di Intervento
                </Link>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </div>
    </section>
  )
}
