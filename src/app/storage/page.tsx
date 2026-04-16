import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { METADATA } from '@/lib/seo'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { CTASection } from '@/components/home/CTASection'
import {
  Lock,
  Camera,
  Bell,
  Clock,
  Package,
  CurrencyEur,
  Eye,
  Briefcase,
  Scales,
  Buildings,
  UserCircle,
  Stethoscope,
  ArrowRight,
  CheckCircle,
  Warehouse,
  Key,
  ShieldCheck,
  FileDoc,
} from '@phosphor-icons/react/dist/ssr'

/* ── Metadata ── */
export const metadata: Metadata = {
  title: METADATA.storage.title,
  description: METADATA.storage.description,
  openGraph: METADATA.storage.openGraph,
  alternates: { canonical: 'https://www.fulgurservice.it/storage' },
  keywords: 'box archivio Parma, deposito documenti Parma, self storage Parma, magazzino archivio avvocati Parma, deposito sicuro Parma, box archiviazione documenti Parma, storage documenti uffici Parma',
}

/* ── JSON-LD ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fulgur Storage — Box Archivio Sicuri',
  description: 'Box archivio riservati con telecamera, allarme certificato e accesso illimitato 24/7 a Parma. Prezzo fisso mensile, box dedicato esclusivo.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Fulgur Service SRL',
    telephone: '+39-338-316-0091',
    email: 'fulgurservice@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Parma',
      addressRegion: 'Emilia-Romagna',
      addressCountry: 'IT',
    },
  },
  areaServed: 'Parma',
  serviceType: 'Deposito documenti e archiviazione sicura',
}

/* ── Feature cards ── */
const FEATURES = [
  {
    Icon: Camera,
    title: 'Videosorveglianza H24',
    desc: 'Il tuo box è monitorato 24 ore su 24, 7 giorni su 7 da un sistema di telecamere digitali ad alta definizione. Ogni accesso è registrato e tracciato.',
  },
  {
    Icon: Bell,
    title: 'Allarme Certificato',
    desc: 'Impianto antintrusione omologato con centrale di allarme attiva e collegamento a istituto di vigilanza. Sicurezza al livello di una cassaforte bancaria.',
  },
  {
    Icon: Key,
    title: 'Accesso Illimitato',
    desc: 'Entri quando vuoi, senza prenotare e senza vincoli di orario. Il tuo box è disponibile 7 giorni su 7, anche nei festivi. Nessuna dipendenza da terzi.',
  },
  {
    Icon: Package,
    title: 'Box Dedicato ed Esclusivo',
    desc: 'Il tuo spazio è riservato solo a te. Nessuna condivisione, nessun accesso di terzi. Una chiave, un cliente, un box. Privacy totale garantita.',
  },
  {
    Icon: CurrencyEur,
    title: 'Prezzo Fisso Mensile',
    desc: 'Un canone mensile fisso e trasparente, senza costi nascosti, senza sorprese. Sai esattamente quanto paghi ogni mese, da subito.',
  },
  {
    Icon: ShieldCheck,
    title: 'Struttura Sorvegliata',
    desc: 'Il magazzino è gestito direttamente da Fulgur Service, che ne garantisce la pulizia, la manutenzione e la sicurezza. Non affidiamo a terzi.',
  },
]

/* ── Target clients ── */
const TARGETS = [
  {
    Icon: Scales,
    title: 'Avvocati e Studi Legali',
    desc: 'Fascicoli processuali, contratti e documentazione da conservare per obbligo di legge. Accesso rapido quando serve, lontano dal caos dell\'ufficio.',
  },
  {
    Icon: Briefcase,
    title: 'Commercialisti e CAF',
    desc: 'Dichiarazioni dei redditi, libri contabili, documenti fiscali che devono essere conservati anni. Archivio ordinato, sicuro e sempre consultabile.',
  },
  {
    Icon: FileDoc,
    title: 'Studi Notarili',
    desc: 'Atti, repertori e registri notarili richiedono conservazione in ambienti sicuri e controllati. Il box Fulgur Storage è la soluzione professionale.',
  },
  {
    Icon: Buildings,
    title: 'Aziende e PMI',
    desc: 'Documentazione amministrativa, buste paga, contratti di fornitura. Riduci l\'ingombro in ufficio senza rinunciare all\'accesso immediato.',
  },
  {
    Icon: Stethoscope,
    title: 'Medici e Studi Sanitari',
    desc: 'Cartelle cliniche, referti e documentazione medica che richiedono conservazione riservata per obbligo normativo (D.Lgs. 196/2003).',
  },
  {
    Icon: UserCircle,
    title: 'Privati',
    desc: 'Documenti di famiglia, oggetti di valore, ricordi importanti. Un posto sicuro lontano da casa, accessibile solo a te.',
  },
]

/* ── Steps ── */
const STEPS = [
  {
    num: '01',
    title: 'Sopralluogo gratuito',
    desc: 'Vieni a visitare il magazzino senza impegno. Ti mostriamo i box disponibili e capiamo insieme le tue esigenze di spazio.',
  },
  {
    num: '02',
    title: 'Assegnazione del Box',
    desc: 'Scegli la dimensione, firmi il contratto, ricevi le tue chiavi. Da quel momento il box è tuo e solo tuo.',
  },
  {
    num: '03',
    title: 'Accesso libero da subito',
    desc: 'Nessun vincolo di orario, nessuna prenotazione. Entri e esci quando ne hai bisogno. Sempre.',
  },
]

/* ── Page ── */
export default function StoragePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[var(--bg)] min-h-[100dvh]">

        {/* ── HERO ── */}
        <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
          {/* BG gradient */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(78,203,160,0.08),transparent)]" />

          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

              {/* Badge NUOVO */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/8 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_rgba(78,203,160,0.8)]" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--accent)]">
                  Nuovo Servizio · Fulgur Storage
                </span>
              </div>

              <SectionLabel className="mb-6 justify-center">— BOX ARCHIVIO SICURI A PARMA</SectionLabel>

              <h1 className="font-display text-[clamp(40px,7vw,80px)] font-extrabold tracking-tighter leading-[0.92] text-[var(--tx-1)] text-balance">
                Il tuo archivio.{' '}
                <span className="text-[var(--accent)]">Riservato.</span>
                <br />
                Sempre accessibile.
              </h1>

              <p className="mt-7 font-sans text-lg sm:text-xl font-light text-[var(--tx-2)] max-w-2xl leading-relaxed text-balance">
                Abbiamo acquisito un grande magazzino a Parma e lo abbiamo trasformato in uno spazio
                di <strong className="font-medium text-[var(--tx-1)]">archiviazione professionale</strong>.
                Box dedicati con telecamera, allarme certificato e accesso illimitato 24/7.
                Un prezzo fisso, nessuna sorpresa.
              </p>

              {/* Key stats bar */}
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
                {[
                  'Accesso 24/7 · 365 giorni',
                  'Camera + Allarme certificato',
                  'Prezzo fisso mensile',
                  'Box dedicato esclusivo',
                ].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--tx-3)]">
                    <CheckCircle size={12} weight="fill" className="text-[var(--accent)] shrink-0" />
                    {item}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contatti"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 font-display text-[14px] font-bold text-white shadow-[0_4px_24px_rgba(78,203,160,0.4)] hover:bg-[var(--accent-d)] hover:shadow-[0_6px_32px_rgba(78,203,160,0.5)] transition-all duration-300"
                >
                  Richiedi Informazioni
                  <ArrowRight size={16} weight="bold" />
                </Link>
                <a
                  href="https://wa.me/393383160091?text=Ciao%2C%20vorrei%20informazioni%20sui%20box%20archivio%20Fulgur%20Storage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--br-h)] bg-[var(--bg-2)] px-8 py-4 font-display text-[14px] font-bold text-[var(--tx-1)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
                >
                  Scrivici su WhatsApp
                </a>
              </div>
            </div>

            {/* HERO IMAGE PLACEHOLDER */}
            <ScrollReveal className="mt-14 sm:mt-20">
              <div className="relative w-full aspect-[16/7] rounded-3xl overflow-hidden border border-[var(--br)] bg-[var(--bg-3)] shadow-2xl shadow-[rgba(78,203,160,0.08)]">
                {/* Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[var(--bg-2)] to-[var(--bg-3)]">
                  <Warehouse size={48} className="text-[var(--accent)]/40" />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--tx-3)]">
                    Foto magazzino in arrivo
                  </span>
                </div>
                {/* Overlay info strips */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                  <div className="rounded-2xl border border-white/10 bg-[var(--tx-1)]/80 backdrop-blur-md px-5 py-3">
                    <p className="font-display text-base font-bold text-white">Fulgur Storage</p>
                    <p className="font-sans text-xs text-white/70 mt-0.5">Magazzino sicuro · Parma</p>
                  </div>
                  <div className="flex gap-2">
                    {['Camera H24', 'Allarme', 'Accesso Libero'].map((tag) => (
                      <span key={tag} className="rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/15 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--accent)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── IL SERVIZIO ── */}
        <section className="py-20 sm:py-28 bg-[var(--bg-2)]">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* TEXT */}
              <ScrollReveal>
                <SectionLabel className="mb-5">— IL SERVIZIO</SectionLabel>
                <h2 className="font-display text-[clamp(28px,4vw,52px)] font-bold tracking-tight text-[var(--tx-1)] leading-tight text-balance">
                  Un magazzino acquisito.<br />
                  Trasformato in{' '}
                  <span className="text-[var(--accent)]">spazio sicuro</span>{' '}
                  per i tuoi documenti.
                </h2>
                <p className="mt-6 font-sans text-base sm:text-lg font-light text-[var(--tx-2)] leading-relaxed">
                  Abbiamo recentemente acquisito un grande magazzino a Parma e lo abbiamo attrezzato
                  con sistemi di sicurezza di livello professionale per offrire un servizio che mancava
                  sul territorio: <strong className="font-medium text-[var(--tx-1)]">box archivio privati e riservati</strong>, con accesso libero e prezzo fisso.
                </p>
                <p className="mt-4 font-sans text-base font-light text-[var(--tx-2)] leading-relaxed">
                  Non un deposito condiviso. Non uno spazio in cogestione. Il tuo box è esclusivamente
                  tuo, accessibile solo con la tua chiave, sorvegliato da telecamere e protetto da allarme
                  certificato. Pensato per chi ha bisogno di riservatezza, ordine e accesso immediato.
                </p>
                <ul className="mt-8 flex flex-col gap-3">
                  {[
                    'Contratto mensile flessibile, senza vincoli pluriennali',
                    'Struttura pulita e manutenuta da Fulgur Service',
                    'Referente dedicato per ogni esigenza logistica',
                    'Disponibile in varie metrature per ogni necessità',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={18} weight="fill" className="text-[var(--accent)] shrink-0 mt-0.5" />
                      <span className="font-sans text-[15px] text-[var(--tx-2)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              {/* IMAGE PLACEHOLDER */}
              <ScrollReveal delay={0.15}>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--br)] bg-[var(--bg-3)] shadow-xl">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-[var(--bg-2)] to-[var(--bg-3)]">
                    <Lock size={40} className="text-[var(--accent)]/40" />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--tx-3)]">
                      Foto interno box in arrivo
                    </span>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute top-5 left-5 rounded-2xl border border-[var(--accent)]/20 bg-white/90 backdrop-blur-sm px-4 py-2.5 shadow-lg">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--tx-3)]">Sicurezza</p>
                    <p className="font-display text-[18px] font-bold text-[var(--accent)] leading-tight">H24 · 365</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-20 sm:py-28 bg-[var(--bg)]">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
                <SectionLabel className="mb-5 justify-center">— COSA È INCLUSO</SectionLabel>
                <h2 className="font-display text-[clamp(26px,3.5vw,48px)] font-bold tracking-tight text-[var(--tx-1)] leading-tight">
                  Tutto quello che ti serve.<br />
                  <span className="text-[var(--accent)]">Niente di superfluo.</span>
                </h2>
                <p className="mt-5 font-sans text-base font-light text-[var(--tx-2)] leading-relaxed">
                  Ogni box include di default sicurezza, sorveglianza e accesso illimitato.
                  Nessun costo aggiuntivo per i servizi essenziali.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 0.07}>
                  <div className="group relative flex flex-col gap-4 rounded-2xl border border-[var(--br)] bg-[var(--bg)] p-6 sm:p-7 hover:border-[var(--br-h)] hover:bg-[var(--card-hover)] hover:shadow-[0_12px_40px_rgba(78,203,160,0.10)] transition-all duration-500">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] group-hover:bg-[var(--accent)]/15 transition-colors">
                      <f.Icon size={24} weight="duotone" />
                    </div>
                    <div>
                      <h3 className="font-display text-[18px] font-bold text-[var(--tx-1)] mb-2">{f.title}</h3>
                      <p className="font-sans text-[14px] font-light text-[var(--tx-2)] leading-relaxed">{f.desc}</p>
                    </div>
                    {/* Bottom accent line on hover */}
                    <div className="absolute bottom-0 left-6 right-6 h-px bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── COME FUNZIONA ── */}
        <section className="py-20 sm:py-28 bg-[var(--bg-2)]">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">
            <ScrollReveal>
              <div className="text-center max-w-xl mx-auto mb-14">
                <SectionLabel className="mb-5 justify-center">— COME FUNZIONA</SectionLabel>
                <h2 className="font-display text-[clamp(26px,3.5vw,48px)] font-bold tracking-tight text-[var(--tx-1)] leading-tight">
                  Tre passi e il box è tuo.
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
              {/* Connector line (desktop) */}
              <div className="hidden md:block absolute top-10 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

              {STEPS.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.12}>
                  <div className="relative flex flex-col items-center text-center gap-5 rounded-2xl border border-[var(--br)] bg-[var(--bg)] p-8 shadow-sm hover:shadow-[0_8px_32px_rgba(78,203,160,0.10)] hover:-translate-y-1 transition-all duration-500">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 shadow-[0_0_24px_rgba(78,203,160,0.15)]">
                      <span className="font-mono text-[20px] font-bold text-[var(--accent)]">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-[20px] font-bold text-[var(--tx-1)] mb-2">{step.title}</h3>
                      <p className="font-sans text-[14px] font-light text-[var(--tx-2)] leading-relaxed max-w-[280px] mx-auto">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PER CHI È ── */}
        <section className="py-20 sm:py-28 bg-[var(--bg)]">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">
            <ScrollReveal>
              <div className="max-w-2xl mb-14">
                <SectionLabel className="mb-5">— IDEALE PER</SectionLabel>
                <h2 className="font-display text-[clamp(26px,3.5vw,48px)] font-bold tracking-tight text-[var(--tx-1)] leading-tight">
                  Chi ha bisogno di un archivio{' '}
                  <span className="text-[var(--accent)]">fuori dall&apos;ufficio.</span>
                </h2>
                <p className="mt-5 font-sans text-base font-light text-[var(--tx-2)] leading-relaxed max-w-xl">
                  Ogni professionista accumula documentazione che deve conservare per anni.
                  Fulgur Storage risolve il problema dello spazio senza rinunciare all&apos;accessibilità.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {TARGETS.map((t, i) => (
                <ScrollReveal key={t.title} delay={i * 0.07}>
                  <div className="group flex gap-4 rounded-2xl border border-[var(--br)] bg-[var(--bg)] p-6 hover:border-[var(--br-h)] hover:bg-[var(--card-hover)] hover:shadow-[0_8px_32px_rgba(78,203,160,0.08)] transition-all duration-400">
                    <div className="shrink-0 h-11 w-11 flex items-center justify-center rounded-xl bg-[var(--bg-3)] text-[var(--accent)] group-hover:bg-[var(--accent)]/12 transition-colors">
                      <t.Icon size={22} weight="duotone" />
                    </div>
                    <div>
                      <h3 className="font-display text-[16px] font-bold text-[var(--tx-1)] mb-1.5">{t.title}</h3>
                      <p className="font-sans text-[13px] font-light text-[var(--tx-2)] leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY PLACEHOLDER ── */}
        <section className="py-20 sm:py-28 bg-[var(--bg-3)]">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">
            <ScrollReveal>
              <div className="text-center max-w-xl mx-auto mb-12">
                <SectionLabel className="mb-5 justify-center">— LA STRUTTURA</SectionLabel>
                <h2 className="font-display text-[clamp(24px,3vw,44px)] font-bold tracking-tight text-[var(--tx-1)] leading-tight">
                  Vedi il magazzino.
                </h2>
                <p className="mt-4 font-sans text-base font-light text-[var(--tx-2)]">
                  Foto e video del magazzino in arrivo. Prenditi un appuntamento per visitarlo di persona.
                </p>
              </div>
            </ScrollReveal>

            {/* Placeholder grid */}
            <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
              {/* Big left */}
              <ScrollReveal className="col-span-12 sm:col-span-7 row-span-2">
                <div className="h-full w-full rounded-3xl border border-[var(--br)] bg-[var(--bg-2)] flex flex-col items-center justify-center gap-3 group hover:border-[var(--br-h)] transition-colors">
                  <Warehouse size={40} className="text-[var(--accent)]/30 group-hover:text-[var(--accent)]/50 transition-colors" />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--tx-3)]">Vista esterna magazzino</span>
                </div>
              </ScrollReveal>
              {/* Right top */}
              <ScrollReveal className="col-span-12 sm:col-span-5" delay={0.07}>
                <div className="h-full w-full rounded-3xl border border-[var(--br)] bg-[var(--bg-2)] flex flex-col items-center justify-center gap-3 group hover:border-[var(--br-h)] transition-colors">
                  <Package size={32} className="text-[var(--accent)]/30 group-hover:text-[var(--accent)]/50 transition-colors" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--tx-3)]">Interno box archivio</span>
                </div>
              </ScrollReveal>
              {/* Right bottom */}
              <ScrollReveal className="col-span-12 sm:col-span-5" delay={0.14}>
                <div className="h-full w-full rounded-3xl border border-[var(--br)] bg-[var(--bg-2)] flex flex-col items-center justify-center gap-3 group hover:border-[var(--br-h)] transition-colors">
                  <Camera size={32} className="text-[var(--accent)]/30 group-hover:text-[var(--accent)]/50 transition-colors" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--tx-3)]">Sistema sorveglianza</span>
                </div>
              </ScrollReveal>
              {/* Bottom strip */}
              <ScrollReveal className="col-span-12 sm:col-span-4" delay={0.07}>
                <div className="h-full w-full rounded-3xl border border-[var(--br)] bg-[var(--bg-2)] flex flex-col items-center justify-center gap-3 group hover:border-[var(--br-h)] transition-colors">
                  <Lock size={28} className="text-[var(--accent)]/30 group-hover:text-[var(--accent)]/50 transition-colors" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--tx-3)]">Accesso dedicato</span>
                </div>
              </ScrollReveal>
              <ScrollReveal className="col-span-12 sm:col-span-4" delay={0.12}>
                <div className="h-full w-full rounded-3xl border border-[var(--br)] bg-[var(--bg-2)] flex flex-col items-center justify-center gap-3 group hover:border-[var(--br-h)] transition-colors">
                  <Eye size={28} className="text-[var(--accent)]/30 group-hover:text-[var(--accent)]/50 transition-colors" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--tx-3)]">Vista corridoio box</span>
                </div>
              </ScrollReveal>
              <ScrollReveal className="col-span-12 sm:col-span-4" delay={0.18}>
                <div className="h-full w-full rounded-3xl border border-[var(--br)] bg-[var(--bg-2)] flex flex-col items-center justify-center gap-3 group hover:border-[var(--br-h)] transition-colors">
                  <Bell size={28} className="text-[var(--accent)]/30 group-hover:text-[var(--accent)]/50 transition-colors" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--tx-3)]">Pannello allarme</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── PRICING TEASER ── */}
        <section className="py-20 sm:py-28 bg-[var(--bg-2)]">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Left: perché scegliere */}
              <ScrollReveal>
                <SectionLabel className="mb-5">— PERCHÉ FULGUR STORAGE</SectionLabel>
                <h2 className="font-display text-[clamp(26px,3.5vw,48px)] font-bold tracking-tight text-[var(--tx-1)] leading-tight">
                  Non gestiamo spazi di terzi.<br />
                  <span className="text-[var(--accent)]">È il nostro magazzino.</span>
                </h2>
                <p className="mt-5 font-sans text-base font-light text-[var(--tx-2)] leading-relaxed">
                  Fulgur Service ha acquisito direttamente la struttura. Questo significa che pulizia,
                  manutenzione, sicurezza e gestione sono interamente in carico a noi. Nessun intermediario,
                  nessun franchising, nessun accordo con terzi. Rispondiamo noi, direttamente.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { label: 'Struttura di Proprietà', icon: Warehouse },
                    { label: 'Manutenzione Diretta', icon: ShieldCheck },
                    { label: 'Contratto Mensile', icon: CurrencyEur },
                    { label: 'Referente Unico', icon: UserCircle },
                  ].map(({ label, icon: Icon }) => (
                    <div key={label} className="flex items-center gap-2.5 rounded-xl border border-[var(--br)] bg-[var(--bg)] px-4 py-3">
                      <Icon size={16} className="text-[var(--accent)] shrink-0" weight="duotone" />
                      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--tx-2)]">{label}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Right: pricing card */}
              <ScrollReveal delay={0.12}>
                <div className="relative rounded-3xl border border-[var(--accent)]/20 bg-[var(--bg)] p-8 sm:p-10 shadow-[0_20px_60px_rgba(78,203,160,0.12)]">
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent" />

                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[var(--accent)] mb-1">Canone Mensile</p>
                      <p className="font-display text-[40px] font-extrabold text-[var(--tx-1)] leading-none">
                        Su Richiesta
                      </p>
                      <p className="mt-2 font-sans text-[13px] text-[var(--tx-3)]">Prezzo fisso in base alla metratura del box</p>
                    </div>
                    <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-[var(--accent)]/10">
                      <CurrencyEur size={28} weight="duotone" className="text-[var(--accent)]" />
                    </div>
                  </div>

                  <ul className="flex flex-col gap-3 mb-8">
                    {[
                      'Box dedicato ed esclusivo',
                      'Telecamera sorveglianza inclusa',
                      'Allarme certificato incluso',
                      'Accesso illimitato 24/7',
                      'Nessun costo nascosto',
                      'Disdetta con preavviso 30 giorni',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle size={16} weight="fill" className="text-[var(--accent)] shrink-0" />
                        <span className="font-sans text-[14px] text-[var(--tx-2)]">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contatti"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-6 py-4 font-display text-[14px] font-bold text-white shadow-[0_4px_20px_rgba(78,203,160,0.35)] hover:bg-[var(--accent-d)] hover:shadow-[0_6px_28px_rgba(78,203,160,0.45)] transition-all duration-300"
                  >
                    Scopri disponibilità e prezzi
                    <ArrowRight size={16} weight="bold" />
                  </Link>

                  <p className="mt-4 text-center font-mono text-[11px] text-[var(--tx-3)] uppercase tracking-widest">
                    Sopralluogo gratuito · Nessun impegno
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── CTA FINALE ── */}
        <CTASection />
      </main>
    </>
  )
}
