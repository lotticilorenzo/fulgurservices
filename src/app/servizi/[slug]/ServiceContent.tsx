'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import * as Icons from '@phosphor-icons/react'
import { CaretRight, CheckCircle, ArrowRight, Star, ShieldCheck, Gauge } from '@phosphor-icons/react'
import { ParallaxText } from '@/components/ui/ParallaxText'
import { WipeReveal } from '@/components/ui/WipeReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'
import { CASE_STUDIES } from '@/lib/case-studies'
import { Service, SERVICES } from '@/lib/services-data'
import { CTASection } from '@/components/home/CTASection'

interface ServiceContentProps {
  service: Service
}

export function ServiceContent({ service }: ServiceContentProps) {
  // Phosphor exports SSR namespace alongside components — cast through unknown
  const IconLookup = Icons as unknown as Record<string, React.ElementType>
  const IconComponent: React.ElementType = IconLookup[service.icon] ?? Icons.Briefcase

  return (
    <main className="bg-[var(--bg)] min-h-[100dvh] pt-32 sm:pt-40 relative overflow-hidden">
      
      {/* PARALLAX BACKGROUND TEXT — nascosto su mobile per ghost scroll prevention */}
      <div className="absolute top-[10%] left-0 w-full z-0 opacity-40 pointer-events-none hidden sm:block">
        <ParallaxText text={service.title} direction="right" distance={300} />
        <ParallaxText text="FULGUR SERVICE" direction="left" distance={200} className="mt-[-5vw]" />
      </div>

      {/* BREADCRUMBS */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8 mb-8 relative z-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono-fulgur text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--tx-3)]">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors" aria-label="Vai alla home page">Home</Link>
          <CaretRight size={10} aria-hidden="true" />
          <Link href="/servizi" className="hover:text-[var(--accent)] transition-colors" aria-label="Vai a tutti i servizi">Servizi</Link>
          <CaretRight size={10} aria-hidden="true" />
          <span className="text-[var(--tx-1)]" aria-current="page">{service.title}</span>
        </nav>
      </div>

      {/* HERO DEL SERVIZIO */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8 mb-32 relative z-10">
        <WipeReveal direction="left" duration={1}>
          <div
            className="h-24 w-24 rounded-3xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-8 border border-[var(--accent)]/20 shadow-[0_0_50px_rgba(78,203,160,0.2)] backdrop-blur-sm"
            aria-hidden="true"
          >
            <IconComponent size={48} weight="duotone" />
          </div>
          <h1 className="font-display text-[36px] font-extrabold text-[var(--tx-1)] sm:text-7xl lg:text-8xl mb-6 sm:mb-8 tracking-tighter max-w-5xl leading-tight sm:leading-[1.05] text-balance">
            {service.title}{' '}
            <span className="text-[var(--accent)]">a Parma</span>
          </h1>
          <p className="font-sans text-lg font-light text-[var(--tx-2)] sm:text-2xl leading-relaxed max-w-3xl border-l-[3px] border-[var(--accent)] pl-5 sm:pl-8 py-3 bg-gradient-to-r from-[var(--accent)]/5 to-transparent text-balance">
            {service.shortDesc}
          </p>
        </WipeReveal>
      </div>

      {/* KEY STATS / HIGHLIGHTS */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8 mb-32 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Efficienza', value: '100%', icon: Gauge },
            { label: 'Sostenibile', value: 'ECO', icon: ShieldCheck },
            { label: 'Esperienza', value: '35Y', icon: Star },
            { label: 'Preventivo', value: '48H', icon: Icons.Fingerprint },
          ].map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-premium p-6 flex flex-col items-center justify-center text-center border border-[var(--br)] rounded-2xl">
                <stat.icon size={24} weight="duotone" className="text-[var(--accent)] mb-3" />
                <div className="font-mono-fulgur text-2xl font-bold text-[var(--tx-1)]">{stat.value}</div>
                <div className="font-sans text-[10px] uppercase tracking-widest text-[var(--tx-3)] mt-1">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="w-full bg-[var(--bg-2)] border-t border-[var(--br)] py-16 sm:py-32 relative z-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 sm:gap-20">

            {/* LATO SINISTRO (Contenuto Principale) */}
            <div className="flex flex-col gap-24">

              {/* DESCRIZIONE LUNGA */}
              <WipeReveal direction="top">
                <SectionLabel className="mb-10">DETTAGLI INTERVENTO</SectionLabel>
                <div className="font-sans font-light text-[var(--tx-2)] leading-relaxed text-base sm:text-lg md:text-xl opacity-90 space-y-6">
                  {service.longDesc.split('\n\n').map((para, i) => (
                    <p key={i} className={i === 0 ? 'first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-[var(--accent)] first-letter:mr-3 first-letter:float-left' : ''}>
                      {para.trim()}
                    </p>
                  ))}
                </div>
              </WipeReveal>

              {/* BENEFITS / CHECKLIST */}
              <ScrollReveal>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--tx-1)] mb-8 sm:mb-10 flex items-center gap-3 sm:gap-4 text-balance leading-tight">
                  <CheckCircle size={32} className="text-[var(--accent)] shrink-0" />
                  Cosa include il nostro servizio di {service.title.toLowerCase()} a Parma
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-[var(--bg)] border border-[var(--br)] shadow-sm hover:border-[var(--accent)]/30 transition-colors"
                    >
                      <CheckCircle size={24} weight="fill" className="text-[var(--accent)] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-sans text-[var(--tx-1)] font-medium text-base sm:text-lg">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>

              {/* SPECIFIC CASE STUDY COMPARISON (IF EXISTS) */}
              {CASE_STUDIES.filter(cs => cs.serviceSlug === service.slug).map(study => (
                 <ScrollReveal key={study.id}>
                    <div className="p-5 sm:p-8 lg:p-12 rounded-3xl sm:rounded-[2.5rem] bg-[var(--bg)] border border-[var(--br)] shadow-2xl relative overflow-hidden group">
                       <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                          <CheckCircle size={100} weight="fill" />
                       </div>
                       
                       <SectionLabel className="mb-10 text-[var(--accent)] border-[var(--accent)]/30">ESEMPIO REALE DI RISULTATO</SectionLabel>
                       
                       <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-12 items-center">
                          <BeforeAfterSlider 
                            beforeImage={study.beforeImage} 
                            afterImage={study.afterImage} 
                            aspectRatio="aspect-video"
                            className="shadow-xl"
                          />
                          <div className="flex flex-col justify-center">
                             <h3 className="font-display text-3xl font-bold text-[#0F1F1A] mb-6 leading-tight">
                               {study.title}
                             </h3>
                             <p className="font-sans text-lg font-light text-[var(--tx-2)] leading-relaxed italic mb-8 border-l-2 border-[var(--accent)] pl-6">
                               &quot;{study.description}&quot;
                             </p>
                             <div className="flex items-center gap-3 text-xs font-mono-fulgur font-bold uppercase tracking-widest text-[var(--accent)]">
                                <Icons.Sparkle size={20} weight="fill" />
                                Risultato Garantito Fulgur
                             </div>
                          </div>
                       </div>
                    </div>
                 </ScrollReveal>
              ))}

              {/* FAQ BLOCK — Snippet Targeting */}
              {service.faq && service.faq.length > 0 && (
                <ScrollReveal>
                  <div className="mt-4">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--tx-1)] mb-8 flex items-center gap-3 text-balance leading-tight">
                      <Icons.Question size={32} className="text-[var(--accent)] shrink-0" />
                      Domande frequenti su {service.title.toLowerCase()} a Parma
                    </h2>
                    <div className="flex flex-col gap-5">
                      {service.faq.map((item, i) => (
                        <div key={i} className="rounded-2xl border border-[var(--br)] bg-[var(--bg)] p-6 sm:p-8 hover:border-[var(--accent)]/30 transition-colors">
                          <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--tx-1)] mb-3 leading-snug">
                            {item.q}
                          </h3>
                          <p className="font-sans text-[var(--tx-2)] font-light leading-relaxed text-base">
                            {item.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

            </div>

            {/* LATO DESTRO (Sidebar Info Elite) */}
            <aside className="flex flex-col gap-8 lg:sticky lg:top-32 h-fit">

              {/* A CHI E' RIVOLTO */}
              <div className="glass-premium rounded-3xl border border-[var(--br)] bg-white/60 p-5 sm:p-8 shadow-2xl backdrop-blur-xl">
                <SectionLabel className="mb-6">AMBITI DI APPLICAZIONE</SectionLabel>
                <div className="flex flex-col gap-3">
                  {service.sectors.map((sector, i) => (
                    <div key={i} className="flex items-center gap-3 font-sans text-base text-[var(--tx-2)] py-3 px-4 rounded-xl bg-[var(--bg-2)] border border-[var(--br)] hover:text-[var(--tx-1)] transition-colors">
                      <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                      {sector}
                    </div>
                  ))}
                </div>
              </div>

              {/* SERVIZI CORRELATI */}
              {service.relatedSlugs && service.relatedSlugs.length > 0 && (() => {
                const related = SERVICES.filter(s => service.relatedSlugs!.includes(s.slug))
                if (!related.length) return null
                const IconLookupR = Icons as unknown as Record<string, React.ElementType>
                return (
                  <div className="glass-premium rounded-3xl border border-[var(--br)] bg-white/60 p-5 sm:p-7 shadow-xl backdrop-blur-xl">
                    <SectionLabel className="mb-5">SERVIZI CORRELATI</SectionLabel>
                    <div className="flex flex-col gap-3">
                      {related.map((rel) => {
                        const RelIcon: React.ElementType = IconLookupR[rel.icon] ?? Icons.Briefcase
                        return (
                          <Link
                            key={rel.slug}
                            href={`/servizi/${rel.slug}`}
                            className="flex items-center gap-3 rounded-xl border border-[var(--br)] bg-[var(--bg-2)] px-4 py-3 hover:border-[var(--accent)]/40 hover:bg-[var(--card-hover)] transition-all group/rel"
                          >
                            <RelIcon size={18} weight="duotone" className="text-[var(--accent)] shrink-0" />
                            <span className="font-sans text-[14px] text-[var(--tx-2)] group-hover/rel:text-[var(--tx-1)] transition-colors flex-1">{rel.title}</span>
                            <ArrowRight size={12} className="text-[var(--tx-3)] group-hover/rel:text-[var(--accent)] transition-colors shrink-0" />
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              })()}

              {/* TEASER IMPRESA 360 */}
              <div className="rounded-3xl border border-[var(--accent)]/20 bg-gradient-to-br from-[var(--bg)] to-[var(--accent)]/10 p-6 sm:p-8 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                  <Icons.Lightning size={120} weight="fill" />
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="inline-block p-4 rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] mb-6 shadow-glow" aria-hidden="true">
                    <Icons.Wrench size={32} weight="duotone" />
                  </div>
                  <h3 className="font-display text-[var(--tx-1)] font-bold text-2xl mb-4 leading-tight">Soluzione Integrata 360°</h3>
                  <p className="font-sans text-[var(--tx-2)] text-base mb-8 leading-relaxed font-light">
                    Oltre alle pulizie, gestiamo manutenzione ordinaria direttamente col nostro personale interno e i nostri artigiani/imprese.
                  </p>
                  <Link href="/chi-siamo" className="font-mono-fulgur text-xs font-bold tracking-[0.2em] text-[var(--accent)] hover:text-[var(--tx-1)] uppercase flex items-center gap-2 transition-colors">
                    Scopri i vantaggi <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

            </aside>
          </div>
        </div>
      </div>

      {/* SEZIONE SETTORE ALBERGHIERO (Visibile solo per questo servizio) */}
      {service.slug === 'settore-alberghiero' && (
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8 mt-16 mb-24 relative z-10">
          <SectionLabel className="mb-10 text-center sm:text-left">I NOSTRI SERVIZI ALBERGHIERI</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--br)] shadow-sm hover:border-[var(--accent)]/50 transition-colors">
              <h3 className="font-display text-xl font-bold text-[var(--tx-1)] mb-3 flex items-center gap-3">
                <Icons.Bed className="text-[var(--accent)]" size={24} weight="duotone" />
                Housekeeping
              </h3>
              <p className="font-sans text-sm text-[var(--tx-2)] leading-relaxed">Riassetto quotidiano, sanificazione bagni e cambio biancheria con personale formato alla massima discrezione e agli standard di hotellerie di lusso.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--br)] shadow-sm hover:border-[var(--accent)]/50 transition-colors">
              <h3 className="font-display text-xl font-bold text-[var(--tx-1)] mb-3 flex items-center gap-3">
                <Icons.Armchair className="text-[var(--accent)]" size={24} weight="duotone" />
                Aree Comuni & Hall
              </h3>
              <p className="font-sans text-sm text-[var(--tx-2)] leading-relaxed">Mantenimento costante della pulizia in lobby, lounge, ascensori e corridoi, per accogliere gli ospiti in un ambiente sempre perfetto.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--br)] shadow-sm hover:border-[var(--accent)]/50 transition-colors">
              <h3 className="font-display text-xl font-bold text-[var(--tx-1)] mb-3 flex items-center gap-3">
                <Icons.Waves className="text-[var(--accent)]" size={24} weight="duotone" />
                Spa & Benessere
              </h3>
              <p className="font-sans text-sm text-[var(--tx-2)] leading-relaxed">Protocolli di igienizzazione severi per piscine, saune e percorsi wellness, con trattamenti antiscivolo e antifungini garantiti.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--br)] shadow-sm hover:border-[var(--accent)]/50 transition-colors">
              <h3 className="font-display text-xl font-bold text-[var(--tx-1)] mb-3 flex items-center gap-3">
                <Icons.Drop className="text-[var(--accent)]" size={24} weight="duotone" />
                Lavaggio Moquette
              </h3>
              <p className="font-sans text-sm text-[var(--tx-2)] leading-relaxed">Estrazione e lavaggio profondo di moquette, tendaggi, materassi e tessuti per eliminare macchie, allergeni e cattivi odori in camera.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--br)] shadow-sm hover:border-[var(--accent)]/50 transition-colors">
              <h3 className="font-display text-xl font-bold text-[var(--tx-1)] mb-3 flex items-center gap-3">
                <Icons.ForkKnife className="text-[var(--accent)]" size={24} weight="duotone" />
                Ristorazione
              </h3>
              <p className="font-sans text-sm text-[var(--tx-2)] leading-relaxed">Sanificazione serale e notturna delle aree food & beverage secondo normative HACCP, sgrassamento intensivo cappe e piani di lavoro.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--br)] shadow-sm hover:border-[var(--accent)]/50 transition-colors">
              <h3 className="font-display text-xl font-bold text-[var(--tx-1)] mb-3 flex items-center gap-3">
                <Icons.Sparkle className="text-[var(--accent)]" size={24} weight="duotone" />
                Trattamenti Speciali
              </h3>
              <p className="font-sans text-sm text-[var(--tx-2)] leading-relaxed">Cristallizzazione marmi della hall, lavaggio vetrate continue in quota, pulizia parcheggi interrati e mantenimento aree verdi esterne.</p>
            </div>
          </div>
        </div>
      )}

      {/* SEZIONE TRATTAMENTO SUPERFICI | tipologie */}
      {service.slug === 'trattamento-superfici' && (
        <div className="w-full bg-[var(--bg-2)] border-t border-[var(--br)] py-16 sm:py-24 relative z-10">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">
            <SectionLabel className="mb-4">SUPERFICI CHE TRATTIAMO</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F1F1A] mb-12 tracking-tight">
              Ogni superficie ha il suo protocollo.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Icons.Cube,
                  title: 'Calcestruzzo e Cemento',
                  desc: 'Levigatura e lucidatura a secco senza cere: trasformiamo un pavimento in cemento ordinario in una superficie a specchio, resistente all\'usura, igienica e facile da mantenere.',
                },
                {
                  icon: Icons.Fire,
                  title: 'Cotto',
                  desc: 'Interveniamo su cotto nuovo e antico: rimuoviamo incrostazioni e strati di vecchie cere, trattiamo la superficie con prodotti protettivi che esaltano il colore naturale.',
                },
                {
                  icon: Icons.Diamond,
                  title: 'Marmo',
                  desc: 'Cristallizzazione professionale: metodo rapido e preciso che ripristina la lucentezza del marmo consumato senza sporcare, con effetto protettivo a lungo termine.',
                },
                {
                  icon: Icons.Swatches,
                  title: 'Moquette',
                  desc: 'Iniezione di acqua e detergente ecologico tra le fibre seguita da immediata aspirazione: rimuoviamo sporco fondo, batteri e allergeni con tempi di asciugatura ridotti.',
                },
                {
                  icon: Icons.Drop,
                  title: 'Resina',
                  desc: 'Detersione profonda con macchinari dedicati: eliminiamo sporco, segni e residui di cere senza aggredire la superficie. Risultato uniforme, brillante e pronto in tempi rapidi.',
                },
                {
                  icon: Icons.Buildings,
                  title: 'Pulizia Facciate',
                  desc: 'Rimozione di smog, muffe, polveri e incrostazioni da superfici esterne con idropulitrici a bassa o alta pressione e detergenti specifici per materiale.',
                },
                {
                  icon: Icons.SquaresFour,
                  title: 'Grès Porcellanato',
                  desc: 'Rimozione di aloni, residui di cantiere e sporco da posa. Ripristiniamo uniformità e brillantezza del gres nel pieno rispetto di superfici e fughe.',
                },
                {
                  icon: Icons.Sun,
                  title: 'Pavimento Esterno',
                  desc: 'Pulizia a fondo di terrazze e pavimentazioni esterne: sporco, muschio e macchie ostinate eliminati con attrezzatura professionale e trattamenti idrorepellenti protettivi.',
                },
                {
                  icon: Icons.Rows,
                  title: 'Parquet',
                  desc: 'Rigenerazione del legno: rimozione dello strato di vernice deteriorato e ritrattamento con vernici o cere di qualità per un risultato duraturo che rispetta le fibre del legno.',
                },
                {
                  icon: Icons.Mountains,
                  title: 'Pietre Naturali',
                  desc: 'Cere trasparenti specifiche per superfici in pietra: eliminiamo residui calcarei e di cemento e valorizziamo la texture e la bellezza naturale del materiale.',
                },
                {
                  icon: Icons.Stack,
                  title: 'PVC e Linoleum',
                  desc: 'Applicazione di cere resistenti che creano un film flessibile e protettivo: riduciamo l\'attrito, preveniamo l\'usura e manteniamo il colore vivo nel tempo.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-[var(--bg)] border border-[var(--br)] shadow-sm hover:border-[var(--accent)]/40 hover:shadow-md transition-all duration-200 flex flex-col gap-4"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] shrink-0">
                    <item.icon size={22} weight="duotone" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#0F1F1A] mb-2">{item.title}</h3>
                    <p className="font-sans text-sm text-[var(--tx-2)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CALL TO ACTION MONUMENTALE */}
      <div className="w-full bg-[var(--bg)] py-16 sm:py-32 border-t border-[var(--br)] relative z-10">
        <WipeReveal direction="top">
          <div className="mx-auto w-full max-w-4xl px-5 sm:px-6 xl:px-8 text-center flex flex-col items-center">
            <SectionLabel className="mb-6">AZIONE IMMEDIATA</SectionLabel>
            <h2 className="font-display text-[32px] sm:text-6xl lg:text-7xl font-extrabold text-[var(--tx-1)] mb-6 sm:mb-8 tracking-tighter leading-[1.05] text-balance">
              Il tuo spazio merita <span className="text-[var(--accent)]">brillantezza.</span>
            </h2>
            <p className="font-sans text-lg sm:text-xl font-light text-[var(--tx-2)] mb-10 sm:mb-12 max-w-2xl text-balance leading-relaxed italic">
              Sopralluogo gratuito per {service.title} entro 48 ore.
            </p>
            
            <Link href="/preventivo" className="w-full sm:w-auto">
              <MagneticButton className="w-full sm:w-auto min-h-[56px] px-6 py-4 sm:px-12 sm:py-6 rounded-2xl bg-[var(--accent)] font-display text-[15px] sm:text-lg font-bold text-white shadow-[0_10px_20px_var(--accent-glow)] transition-all duration-300 hover:shadow-[0_15px_30px_var(--accent-glow-h)] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3">
                Richiedi Sopralluogo Gratuito <ArrowRight weight="bold" />
              </MagneticButton>
            </Link>
          </div>
        </WipeReveal>
      </div>

      <CTASection />
    </main>
  )
}
