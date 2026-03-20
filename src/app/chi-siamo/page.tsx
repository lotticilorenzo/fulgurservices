import type { Metadata } from 'next'
import { METADATA } from '@/lib/seo'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TrustBar } from '@/components/ui/TrustBar'
import { VisualGuarantees } from '@/components/ui/VisualGuarantees'
import { ReviewsSection } from '@/components/ui/ReviewsSection'
import { CTASection } from '@/components/home/CTASection'
import Image from 'next/image'
import { Leaf, ShieldStar, UsersThree, Handshake, CheckCircle } from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: METADATA.chiSiamo.title,
  description: METADATA.chiSiamo.description,
  openGraph: METADATA.chiSiamo.openGraph,
}

const VALORI = [
  {
    Icon: Leaf,
    title: 'Sostenibilità reale',
    desc: 'Utilizziamo prodotti a basso impatto ambientale e certificati Ecolabel ovunque sia possibile.',
  },
  {
    Icon: ShieldStar,
    title: 'Referente unico',
    desc: 'Gestiamo servizi integrati per offrirti la comodità di un solo interlocutore di fiducia per ogni esigenza.',
  },
  {
    Icon: UsersThree,
    title: 'Team qualificato',
    desc: 'Personale regolarmente assunto, assicurato e formato continuamente sulle ultime tecniche del settore.',
  },
  {
    Icon: Handshake,
    title: 'Trasparenza totale',
    desc: 'Sopralluogo sempre gratuito, preventivo dettagliato entro 24 ore e nessuna spesa nascosta.',
  },
]

export default function ChiSiamoPage() {
  return (
    <main className="bg-[var(--bg)] min-h-[100dvh] pt-24 sm:pt-40">
      
      {/* HERO STORIA */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8 mb-16 sm:mb-20 text-center flex flex-col items-center">
        <SectionLabel className="mb-4">— LA NOSTRA STORIA</SectionLabel>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl lg:text-7xl max-w-4xl text-balance leading-tight sm:leading-[0.9]">
          Tradizione e innovazione nel <span className="text-[var(--accent)]">cleaning a Parma.</span>
        </h1>
        <p className="mt-8 font-sans text-lg lg:text-xl font-light text-[var(--tx-2)] max-w-3xl leading-relaxed text-balance">
          Fulgur Service è l'<strong>impresa di pulizie a Parma</strong> che unisce l'esperienza tecnica di trent'anni alla visione dinamica di una nuova generazione. 
          Siamo il punto d'incontro tra la solidità del lavoro costruito sul territorio e l'innovazione tecnologica costante.
        </p>
      </div>

      {/* MULTI MEDIA SEZIONE - TEAM AI PHOTO */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8 mb-20 md:mb-32">
        <ScrollReveal>
          <div className="w-full aspect-[4/3] sm:aspect-[21/9] rounded-3xl overflow-hidden relative border border-[var(--br)] bg-[var(--bg-2)] shadow-xl">
            <Image
          src="/images/team-operatori-pulizie-professionali-parma.webp"
          alt="Il team di operatori professionisti di Fulgur Service al lavoro a Parma"
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="100vw"
          priority
        />
            <div className="absolute inset-x-0 bottom-0 aspect-[21/6] bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <div className="text-left max-w-lg">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">Una promessa di valore</h3>
                <p className="font-sans text-sm text-white/90">Per noi la pulizia non è un'attività meccanica: non siamo semplici fornitori, ma partner che si prendono cura dell'ambiente del cliente a 360°.</p>
              </div>
              <div className="px-6 py-3 rounded-xl bg-[var(--accent)] text-[var(--bg)] font-mono-fulgur text-sm font-bold tracking-widest shrink-0">
                DAL 1994
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* TIMELINE / STORIA */}
      <div className="w-full bg-[var(--bg-2)] border-t border-[var(--br)] py-16 md:py-24">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-6 xl:px-8">
          {/* FIX SEM-01: h2 sr-only ripristina cascata H1→H2→H3→H4 senza alterare il design */}
          <h2 className="sr-only">La nostra storia</h2>
          <SectionLabel className="mb-10 lg:mb-12 text-center">— 30 ANNI DI ESPERIENZA</SectionLabel>
          <div className="relative border-l border-[var(--br)] ml-4 sm:ml-8 flex flex-col gap-12 sm:gap-16">
            
            <ScrollReveal>
              <div className="relative pl-8 sm:pl-12">
                <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
                <h3 className="font-mono-fulgur text-[var(--accent)] font-bold mb-2 uppercase tracking-widest text-xs">1994</h3>
                <h4 className="font-display text-2xl font-bold text-[var(--tx-1)] mb-4">Le fondamenta</h4>
                <p className="font-sans font-light text-[var(--tx-2)] leading-relaxed text-lg">
                  L'inizio dell'avventura nel cleaning professionale. Anni dedicati a sviluppare la conoscenza perfetta dei materiali, delle superfici e delle reazioni chimiche dei detergenti per garantire l'eccellenza.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative pl-8 sm:pl-12">
                <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
                <h3 className="font-mono-fulgur text-[var(--accent)] font-bold mb-2 uppercase tracking-widest text-xs">L'Evoluzione</h3>
                <h4 className="font-display text-2xl font-bold text-[var(--tx-1)] mb-4">Metodologia e Tecnologie</h4>
                <p className="font-sans font-light text-[var(--tx-2)] leading-relaxed text-lg">
                  L'ingresso di macchinari industriali e protocolli rigidi come l'HACCP porta l'azienda ad ampliare il suo raggio d'azione nel settore alberghiero, sanitario e dei grandi insediamenti logistici.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative pl-8 sm:pl-12">
                <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full outline outline-2 outline-[var(--bg-2)] outline-offset-2 bg-gradient-to-r from-[var(--br-h)] to-[var(--accent)] shadow-[0_0_15px_var(--accent)]" />
                <h3 className="font-mono-fulgur text-[var(--tx-1)] font-bold mb-2 uppercase tracking-widest text-xs">Oggi</h3>
                <h4 className="font-display text-2xl font-bold text-[var(--tx-1)] mb-4">Fulgur Service SRL</h4>
                <p className="font-sans font-light text-[var(--tx-2)] leading-relaxed text-lg">
                  Il passaggio generazionale fonda Fulgur Service: un brand giovane che eredita 30 anni di know-how paterno unendolo a gestioni digitali smart, sostenibilità ambientale certificata ed engineering dei processi integrati.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>

      <TrustBar />

      {/* VALORI — 4 pillars */}
      <div className="w-full bg-[var(--bg-2)] border-y border-[var(--br)] py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">
          <ScrollReveal>
            <SectionLabel className="mb-8 lg:mb-10 mx-auto justify-center">— I NOSTRI VALORI</SectionLabel>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {VALORI.map((valore, i) => {
              const { Icon, title, desc } = valore
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex flex-col gap-4 rounded-3xl border border-[var(--br)] bg-white p-6 md:p-8 h-full hover:border-[var(--accent)] hover:shadow-[0_15px_30px_rgba(42,140,122,0.12)] hover:-translate-y-1 transition-all duration-300 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-glow)] border border-[var(--accent)]/20 group-hover:bg-[var(--accent)] transition-colors duration-300">
                      <Icon size={22} weight="duotone" className="text-[var(--accent)] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[var(--tx-1)]">{title}</h3>
                    <p className="font-body text-sm font-light text-[var(--tx-2)] leading-relaxed">{desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>

      <VisualGuarantees />

      {/* TEAM SECTION */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8 py-16 md:py-32 border-t border-[var(--br)]">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <ScrollReveal>
               <SectionLabel className="mb-6">— IL NOSTRO CAPITALE UMANO</SectionLabel>
               <h2 className="font-display text-[32px] sm:text-5xl font-extrabold text-[var(--tx-1)] mb-6 sm:mb-8 text-balance leading-[1.05] sm:leading-tight tracking-tighter">
                  Specialisti delle pulizie al <span className="text-[var(--accent)]">servizio di Parma.</span>
               </h2>
               <p className="font-sans text-xl font-light text-[var(--tx-2)] leading-relaxed mb-10 opacity-90">
                  Ogni professionista di Fulgur Service viene selezionato per garantire discrezione, affidabilità e competenza tecnica superiore. 
                  Il nostro team, attivo su tutta la <strong>provincia di Parma</strong>, partecipa regolarmente a corsi di aggiornamento su protocolli HACCP, sicurezza e nuove tecnologie eco-friendly.
               </p>
               <ul className="flex flex-col gap-5">
                  {[
                    'Formazione continua protocolli HACCP',
                    'Operatori certificati lavoro in quota',
                    'Referenti dedicati per ogni cantiere',
                    'Discrezione e professionalità garantita'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[var(--tx-1)] font-medium text-lg">
                       <CheckCircle size={28} weight="fill" className="text-[var(--accent)] shrink-0" />
                       {item}
                    </li>
                  ))}
               </ul>
            </ScrollReveal>
            <ScrollReveal>
               <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-[var(--br)] shadow-2xl bg-[var(--bg-2)] hover:shadow-[0_30px_60px_rgba(78,203,160,0.15)] transition-all duration-700">
                  <Image
                     src="/images/team-operatori-pulizie-professionali-parma.webp"
                     alt="Il team Fulgur Service — specialisti di pulizie professionali a Parma"
                     fill
                     className="object-cover hover:scale-105 transition-transform duration-1000"
                     sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 to-transparent pointer-events-none" />
               </div>
            </ScrollReveal>
         </div>
      </div>

      <ReviewsSection />

      <CTASection />

    </main>
  )
}
