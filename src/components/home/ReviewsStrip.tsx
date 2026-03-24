'use client'

import React from 'react'
import { Star, Quotes } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const REVIEWS = [
  {
    name: 'Enyely Carmona',
    period: '2 settimane fa',
    text: 'Consigliatissima come azienda. Efficenti, affidabili e soprattutto esperti. Con una buona organizzazione e affabile. Raccomando il servizio sia a livello di dimora e aziende; mai più senza.',
  },
  {
    name: 'Francesca Marino',
    period: '5 mesi fa',
    text: 'Ho conosciuto questa azienda per caso per la pulizia della facciata di casa. Padre e figlio persone serie hanno fatto un ottimo lavoro. Grazie Fulgur Service',
  },
  {
    name: 'Paola Vernizzi',
    period: '3 mesi fa',
    text: "Consigliati da un'amica li abbiamo chiamati per pulire il nostro laboratorio di pasticceria, hanno fatto un buon lavoro! Prezzi onesti e personale gentile.",
  },
  {
    name: 'Paola Gallucci',
    period: '7 mesi fa',
    text: "Fulgur Service è utilizzato da oltre due anni nell'azienda dove lavoro. È una ditta seria che ha sempre cercato di venire incontro alle nostre esigenze.",
  },
  {
    name: 'Marco Pinna',
    period: '5 mesi fa',
    text: 'Abbiamo avuto il piacere di conoscere questa azienda per caso dopo aver cambiato appartamento. Siamo stati molto contenti della professionalità del titolare e suo figlio. Bravi, sarete consigliati ad altri conoscenti!',
  },
  {
    name: 'Gabriele Viganò',
    period: '7 mesi fa',
    text: "Un'ottima azienda con personale qualificato, serio e ottimi lavoratori. L'abbiamo utilizzata in Azienda, risultato a fine lavori ottimo! Consiglio a tutti di chiamare e lavorare con loro.",
  },
  {
    name: 'Lorenzo Bertoli',
    period: '1 mese fa',
    text: 'Super professionali e attenti, noi ci affidiamo solo a loro.',
  },
  {
    name: 'Roberto Perelli',
    period: '6 mesi fa',
    text: 'La Fulgur Service si è dimostrata ditta efficente e preparata anche in un intervento presso la nostra abitazione con tempistica e disponibilità.',
  },
  {
    name: 'Ale Tafuni',
    period: '6 mesi fa',
    text: 'Super professionali e disponibili, mi hanno sistemato casa in mezza giornata ed è venuta come nuova.',
  },
  {
    name: 'Daniel Fontana',
    period: '1 mese fa',
    text: 'Impresa di pulizie affidabile e precisa, la consiglio.',
  },
  {
    name: 'Adriano Bastianelli',
    period: '6 mesi fa',
    text: 'Pulizia ineccepibile, prezzo onesto e ragazzi molto disponibili. Consigliato.',
  },
  {
    name: 'Marina',
    period: '7 mesi fa',
    text: 'Personale gentile e cortese, professionale e preciso. Attenti a tutti i particolari, non tralasciano nulla. Consigliati!!!',
  },
]

const AVATAR_COLORS = [
  'bg-[#4ECBA0]',
  'bg-[#2A8C7A]',
  'bg-[#7DDFC0]',
  'bg-[#3D6B61]',
  'bg-[#4ECBA0]',
  'bg-[#2A8C7A]',
  'bg-[#7DDFC0]',
  'bg-[#3D6B61]',
  'bg-[#4ECBA0]',
  'bg-[#2A8C7A]',
  'bg-[#7DDFC0]',
  'bg-[#3D6B61]',
]

const ROW1 = REVIEWS.slice(0, 6)
const ROW2 = REVIEWS.slice(6, 12)

function ReviewCard({ review, index }: { review: typeof REVIEWS[0]; index: number }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[360px] mx-3 rounded-[24px] border border-[var(--br)] bg-white p-6 shadow-sm flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 text-[var(--accent)]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} weight="fill" />
          ))}
        </div>
        {/* Google G */}
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
        </svg>
      </div>

      <p className="font-sans text-sm font-light text-[var(--tx-2)] leading-relaxed flex-1">
        &ldquo;{review.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-3 border-t border-[var(--br)]/50">
        <div className={`h-9 w-9 rounded-full ${AVATAR_COLORS[index % AVATAR_COLORS.length]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
          {review.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="font-display text-sm font-bold text-[var(--tx-1)]">{review.name}</p>
          <p className="font-mono-fulgur text-[10px] uppercase tracking-wider text-[var(--tx-3)]">{review.period}</p>
        </div>
      </div>
    </div>
  )
}

export function ReviewsStrip() {
  return (
    <section className="relative w-full bg-[var(--bg-2)] py-20 lg:py-32 border-y border-[var(--br)] overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <Quotes size={600} weight="fill" className="text-[var(--tx-1)]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8 mb-14 lg:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <ScrollReveal className="max-w-2xl text-center md:text-left">
              <SectionLabel className="mb-4">— COSA DICONO I CLIENTI</SectionLabel>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl lg:text-6xl text-balance">
                Clienti <span className="text-[var(--accent)]">soddisfatti</span> in tutta <br className="hidden lg:block" /> Italia.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="hidden lg:flex items-center gap-3">
              <div className="flex gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} weight="fill" />)}
              </div>
              <span className="font-display text-4xl font-extrabold text-[var(--tx-1)]">4.7</span>
              <span className="font-sans text-sm text-[var(--tx-3)]">su Google</span>
            </ScrollReveal>
          </div>
        </div>

        {/* Marquee Row 1 — sinistra */}
        <div className="relative mb-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
            {[...ROW1, ...ROW1].map((review, i) => (
              <ReviewCard key={`r1-${i}`} review={review} index={i % 6} />
            ))}
          </div>
        </div>

        {/* Marquee Row 2 — destra */}
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
            {[...ROW2, ...ROW2].map((review, i) => (
              <ReviewCard key={`r2-${i}`} review={review} index={(i % 6) + 6} />
            ))}
          </div>
        </div>

        {/* Google Badge */}
        <div className="mt-14 flex justify-center px-5">
          <ScrollReveal delay={0.3}>
            <a
              href="https://www.google.it/maps/place/Fulgur+Service+Parma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leggi le recensioni di Fulgur Service su Google Maps"
              className="flex min-h-[44px] items-center gap-4 sm:gap-5 px-5 sm:px-8 py-3 sm:py-4 rounded-2xl border border-[var(--br)] bg-white hover:border-[var(--accent)] hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
                <div className="flex gap-0.5 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} weight="fill" />)}
                </div>
              </div>
              <div className="h-6 w-px bg-slate-200" />
              <span className="font-mono-fulgur text-[12px] font-bold text-[var(--tx-1)]">
                4.7 su Google · <span className="text-[var(--tx-3)]">recensioni verificate</span>
              </span>
              <span className="text-[var(--tx-3)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all">→</span>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
