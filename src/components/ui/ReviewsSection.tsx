'use client'

import React, { useRef } from 'react'
import { GoogleLogo } from '@phosphor-icons/react'
import { ScrollReveal } from './ScrollReveal'

const REVIEWS = [
  {
    id: 1,
    author: 'Enyely Carmona',
    initials: 'E',
    color: '#4ECBA0',
    date: '2 settimane fa',
    stars: 5,
    text: 'Consigliatissima come azienda. Efficenti, affidabili e soprattutto esperti. Con una buona organizzazione e affabile. Raccomando il servizio sia a livello di dimora e aziende; mai più senza.',
  },
  {
    id: 2,
    author: 'Francesca Marino',
    initials: 'F',
    color: '#2A8C7A',
    date: '5 mesi fa',
    stars: 5,
    text: 'Ho conosciuto questa azienda per caso per la pulizia della facciata di casa. Padre e figlio persone serie hanno fatto un ottimo lavoro. Grazie Fulgur Service',
  },
  {
    id: 3,
    author: 'Paola Vernizzi',
    initials: 'P',
    color: '#7DDFC0',
    date: '3 mesi fa',
    stars: 5,
    text: 'Consigliati da un\'amica li abbiamo chiamati per pulire il nostro laboratorio di pasticceria, hanno fatto un buon lavoro! Prezzi onesti e personale gentile.',
  },
  {
    id: 4,
    author: 'Paola Gallucci',
    initials: 'P',
    color: '#4ECBA0',
    date: '7 mesi fa',
    stars: 5,
    text: 'Fulgur Service è utilizzato da oltre due anni nell\'azienda dove lavoro. È una ditta seria che ha sempre cercato di venire incontro alle nostre esigenze.',
  },
  {
    id: 5,
    author: 'Marco Pinna',
    initials: 'M',
    color: '#2A8C7A',
    date: '5 mesi fa',
    stars: 5,
    text: 'Siamo stati molto contenti sia della professionalità del titolare e suo figlio e grazie anche alle loro collaboratrici che hanno fatto un bel lavoro di pulizie totali. Bravi, sarete consigliati ad altri conoscenti!',
  },
  {
    id: 6,
    author: 'Gabriele Viganò',
    initials: 'G',
    color: '#7DDFC0',
    date: '7 mesi fa',
    stars: 5,
    text: 'Un\'ottima azienda con personale qualificato, serio e ottimi lavoratori. L\'abbiamo utilizzata in azienda, risultato a fine lavori ottimo! Consiglio a tutti di chiamare e lavorare con loro.',
  },
  {
    id: 7,
    author: 'Lorenzo Bertoli',
    initials: 'L',
    color: '#4ECBA0',
    date: '1 mese fa',
    stars: 5,
    isGuide: true,
    text: 'Super professionali e attenti, noi ci affidiamo solo a loro.',
  },
  {
    id: 8,
    author: 'Roberto Perelli',
    initials: 'R',
    color: '#2A8C7A',
    date: '6 mesi fa',
    stars: 5,
    isGuide: true,
    text: 'La Fulgur Service si è dimostrata ditta efficiente e preparata anche in un intervento presso la nostra abitazione con tempistica e disponibilità.',
  },
  {
    id: 9,
    author: 'Ale Tafuni',
    initials: 'A',
    color: '#7DDFC0',
    date: '6 mesi fa',
    stars: 5,
    text: 'Super professionali e disponibili, mi hanno sistemato casa in mezza giornata ed è venuta come nuova.',
  },
  {
    id: 10,
    author: 'Daniel Fontana',
    initials: 'D',
    color: '#4ECBA0',
    date: '1 mese fa',
    stars: 5,
    text: 'Impresa di pulizie affidabile e precisa, la consiglio.',
  },
  {
    id: 11,
    author: 'Adriano Bastianelli',
    initials: 'A',
    color: '#2A8C7A',
    date: '6 mesi fa',
    stars: 5,
    text: 'Pulizia ineccepibile, prezzo onesto e ragazzi molto disponibili. Consigliato.',
  },
  {
    id: 12,
    author: 'Marina',
    initials: 'M',
    color: '#7DDFC0',
    date: '7 mesi fa',
    stars: 5,
    text: 'Personale gentile e cortese, professionale e preciso. Attenti a tutti i particolari, non tralasciano nulla. Consigliati!!!',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-[#FBBC04]" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <div className="w-[320px] shrink-0 flex flex-col gap-3 p-6 rounded-2xl bg-white border border-[var(--br)] shadow-sm mx-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-full flex items-center justify-center font-display font-bold text-white text-base"
            style={{ backgroundColor: review.color }}
          >
            {review.initials}
          </div>
          <div>
            <p className="font-display font-bold text-[var(--tx-1)] text-sm leading-tight">{review.author}</p>
            {review.isGuide && (
              <p className="text-[10px] text-[var(--tx-3)] font-mono-fulgur uppercase tracking-wide">Local Guide</p>
            )}
          </div>
        </div>
        <GoogleLogo size={20} weight="fill" className="text-[#4285F4] shrink-0" />
      </div>

      {/* Stars + date */}
      <div className="flex items-center gap-2">
        <StarRating count={review.stars} />
        <span className="text-[11px] text-[var(--tx-3)]">{review.date}</span>
      </div>

      {/* Text */}
      <p className="font-sans text-[var(--tx-2)] text-[13px] leading-relaxed line-clamp-4">
        &ldquo;{review.text}&rdquo;
      </p>
    </div>
  )
}

export function ReviewsSection() {
  const doubled = [...REVIEWS, ...REVIEWS]

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[var(--bg-2)] overflow-hidden border-y border-[var(--br)]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8 mb-10 sm:mb-14">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-display text-[32px] sm:text-4xl font-bold text-[var(--tx-1)] mb-4 text-balance leading-tight">
              Cosa dicono i nostri clienti.
            </h2>
            <p className="font-sans text-[var(--tx-2)] font-light max-w-2xl mx-auto text-balance">
              Recensioni reali di Google da clienti in tutta Emilia-Romagna.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-[var(--bg-2)] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-[var(--bg-2)] to-transparent" />

        <div
          className="flex w-max"
          style={{
            animation: 'reviews-scroll 50s linear infinite',
          }}
        >
          {doubled.map((review, i) => (
            <ReviewCard key={`${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Rating badge */}
      <div className="flex justify-center mt-10">
        <ScrollReveal delay={0.2}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-[var(--br)] shadow-sm">
            <GoogleLogo size={18} weight="fill" className="text-[#4285F4]" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 fill-[#FBBC04]" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="font-sans text-sm font-bold text-[var(--tx-1)]">
              4.7 <span className="text-[var(--tx-3)] font-normal">su Google</span>
            </p>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @keyframes reviews-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .flex[style*="reviews-scroll"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}
