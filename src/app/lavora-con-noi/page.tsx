'use client'

import React, { useState } from 'react'
import { motion as m, AnimatePresence as AP } from 'framer-motion'
import { 
  Users, 
  RocketLaunch, 
  Handshake, 
  CheckCircle, 
  PaperPlaneRight, 
  UploadSimple,
  Briefcase,
  TrendUp,
  Heart
} from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { WipeReveal } from '@/components/ui/WipeReveal'

const VALUES = [
  {
    icon: <RocketLaunch size={32} weight="duotone" />,
    title: "Innovazione",
    desc: "Uniamo 30 anni di esperienza a tecnologie all'avanguardia per risultati impeccabili."
  },
  {
    icon: <Users size={32} weight="duotone" />,
    title: "Team-Centric",
    desc: "Crediamo nella formazione continua e nel benessere dei nostri collaboratori."
  },
  {
    icon: <Heart size={32} weight="duotone" />,
    title: "Sostenibilità",
    desc: "Lavoriamo con prodotti eco-certificati per proteggere l'ambiente e le persone."
  }
]

export default function LavoraConNoiPage() {
  const [formStep, setFormStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStep(prev => prev + 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSent(true)
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 lg:pt-32">
      {/* HERO SECTION */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <ScrollReveal>
             <SectionLabel className="mb-6">— LAVORA CON NOI</SectionLabel>
             <h1 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-6xl lg:text-8xl max-w-4xl text-balance leading-[0.9]">
               Cresci con l'energia di <br />
               <span className="text-[var(--accent)]">Fulgur Service.</span>
             </h1>
             <p className="mt-8 font-sans text-xl font-light text-[var(--tx-2)] max-w-2xl text-balance">
               Siamo costantemente alla ricerca di persone motivate, precise e con voglia di fare. 
               Unisciti a un'impresa che valorizza il tuo lavoro e la tua crescita professionale.
             </p>
          </ScrollReveal>
        </div>
        
        {/* Background Grid Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none -z-10">
          <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="bg-[var(--bg-2)] py-24 lg:py-32 border-y border-[var(--br)]">
        <div className="mx-auto max-w-7xl px-6 xl:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {VALUES.map((val, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center text-[var(--accent)] shadow-sm border border-[var(--br)] mb-6">
                    {val.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[var(--tx-1)] mb-4">{val.title}</h3>
                  <p className="font-sans text-base font-light text-[var(--tx-2)] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-24 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            
            {/* INVITATION TEXT */}
            <div>
              <ScrollReveal>
                <SectionLabel className="mb-4">— CANDIDATURA</SectionLabel>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--tx-1)] tracking-tight text-balance leading-tight">
                  Cerchiamo <span className="text-[var(--accent)]">persone motivate</span> per ampliare il nostro team.
                </h2>
                <p className="mt-8 font-sans text-lg font-light text-[var(--tx-2)] leading-relaxed">
                  In Fulgur Service non cerchiamo solo "addetti", ma collaboratori che abbiano voglia di crescere in un ambiente sano, professionale e tecnologicamente avanzato.
                </p>
                <p className="mt-4 font-sans text-lg font-light text-[var(--tx-2)] leading-relaxed">
                  Compila il form a lato e inviaci i tuoi dati e il tuo curriculum. Valutiamo costantemente nuovi profili per diversi ambiti operativi.
                </p>
              </ScrollReveal>
            </div>

            {/* APPLICATION FORM */}
            <div id="candidatura">
              <ScrollReveal>
                <div className="p-6 md:p-12 rounded-3xl lg:rounded-[3rem] bg-[var(--tx-1)] text-white shadow-2xl relative overflow-hidden">
                   {/* Shine Effect */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--accent)]/20 to-transparent blur-3xl -z-0" />

                   <AP mode="wait">
                     {!isSent ? (
                       <m.div
                         key="form"
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -20 }}
                         className="relative z-10"
                       >
                         <h3 className="font-display text-3xl font-bold mb-2">Invia la tua candidatura</h3>
                         <p className="font-sans text-sm font-light text-white/50 mb-10">
                           Compila i campi sottostanti per entrare nel nostro database.
                         </p>

                         <form onSubmit={formStep < 2 ? handleNext : handleSubmit} className="space-y-6">
                            {formStep === 1 ? (
                              <m.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-6"
                              >
                                <div>
                                  <label className="block font-mono-fulgur text-[10px] uppercase tracking-widest text-[var(--accent)] mb-2">Nome e Cognome</label>
                                  <input type="text" required placeholder="Mario Rossi" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-[var(--accent)] outline-none transition-all" />
                                </div>
                                <div>
                                  <label className="block font-mono-fulgur text-[10px] uppercase tracking-widest text-[var(--accent)] mb-2">Email</label>
                                  <input type="email" required placeholder="mario@email.it" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-[var(--accent)] outline-none transition-all" />
                                </div>
                                <div className="flex justify-end pt-4">
                                  <MagneticButton as="div">
                                    <button type="submit" className="px-8 py-4 bg-[var(--accent)] text-white rounded-full font-display font-bold text-sm shadow-lg hover:bg-[var(--accent-d)] transition-colors flex items-center gap-2">
                                      Continua <PaperPlaneRight weight="fill" />
                                    </button>
                                  </MagneticButton>
                                </div>
                              </m.div>
                            ) : (
                              <m.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-6"
                              >
                                <div>
                                  <label className="block font-mono-fulgur text-[10px] uppercase tracking-widest text-[var(--accent)] mb-2">Città di residenza</label>
                                  <input type="text" required placeholder="es. Parma" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-[var(--accent)] outline-none transition-all" />
                                </div>
                                <div>
                                  <label className="block font-mono-fulgur text-[10px] uppercase tracking-widest text-[var(--accent)] mb-2">Il tuo CV (Opzionale)</label>
                                  <div className="relative h-32 w-full border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-[var(--accent)]/50 transition-colors cursor-pointer group">
                                     <UploadSimple size={24} className="text-white/20 group-hover:text-[var(--accent)] transition-colors" />
                                     <span className="text-[10px] font-mono-fulgur text-white/40 uppercase tracking-widest">Trascina qui o clicca per caricare</span>
                                     <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                                  </div>
                                </div>
                                <div className="flex justify-between pt-4">
                                  <button onClick={() => setFormStep(1)} className="text-[var(--accent)] text-xs font-mono-fulgur uppercase tracking-widest hover:underline">Indietro</button>
                                  <MagneticButton as="div">
                                    <button 
                                      type="submit" 
                                      disabled={isSubmitting}
                                      className="px-10 py-5 bg-[var(--accent)] text-white rounded-full font-display font-extrabold text-sm shadow-[0_10px_30px_rgba(78,203,160,0.3)] hover:scale-105 transition-all flex items-center gap-2 disabled:opacity-50"
                                    >
                                      {isSubmitting ? 'Invio in corso...' : 'Invia Candidatura'}
                                      <CheckCircle weight="fill" />
                                    </button>
                                  </MagneticButton>
                                </div>
                              </m.div>
                            )}
                         </form>
                       </m.div>
                     ) : (
                       <m.div
                         key="success"
                         initial={{ opacity: 0, scale: 0.9 }}
                         animate={{ opacity: 1, scale: 1 }}
                         className="flex flex-col items-center text-center py-20 relative z-10"
                       >
                         <div className="h-20 w-20 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] mb-8">
                            <CheckCircle size={48} weight="fill" />
                         </div>
                         <h3 className="font-display text-4xl font-bold mb-4">Candidatura Ricevuta!</h3>
                         <p className="font-sans text-lg font-light text-white/60">
                           Grazie per il tuo interesse. Il nostro team HR <br />
                           esaminerà il tuo profilo e ti contatterà presto.
                         </p>
                       </m.div>
                     )}
                   </AP>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[var(--accent)] py-20 overflow-hidden">
        <WipeReveal direction="left">
          <div className="mx-auto max-w-7xl px-6 xl:px-8 text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-12">
            <h2 className="font-display text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-none">
              Non trovi la posizione <br /> giusta per te?
            </h2>
            <MagneticButton as="div">
              <a href="mailto:fulgurservice@gmail.com" className="px-8 py-4 sm:px-10 sm:py-5 bg-[var(--tx-1)] text-white rounded-full font-display font-bold text-sm shadow-xl hover:scale-105 transition-all">
                Candidatura Spontanea
              </a>
            </MagneticButton>
          </div>
        </WipeReveal>
      </section>

    </main>
  )
}
