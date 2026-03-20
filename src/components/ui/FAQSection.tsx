'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from '@phosphor-icons/react'
import { ScrollReveal } from './ScrollReveal'
import { SectionLabel } from './SectionLabel'
import Link from 'next/link'

const FAQS = [
  {
    q: 'Il sopralluogo è davvero gratuito?',
    a: 'Assolutamente sì. Veniamo presso la tua sede senza alcun impegno per valutare lo stato degli ambienti, ascoltare le tue necessità e fornirti un preventivo dettagliato entro 24 ore. Zero spese, zero impegni.',
  },
  {
    q: 'Siete assicurati contro eventuali danni?',
    a: 'Certamente. Fulgur Service dispone di una copertura assicurativa RCT (Responsabilità Civile verso Terzi) completa fino a €2.000.000 per tutelare i nostri clienti e i nostri operatori durante ogni tipo di intervento.',
  },
  {
    q: 'Quali prodotti utilizzate? Sono eco-sostenibili?',
    a: 'Utilizziamo esclusivamente prodotti professionali certificati. Ove possibile, prediligiamo soluzioni eco-sostenibili con certificazione Ecolabel per garantire ambienti salubri e ridurre l\'impatto ambientale senza mai compromettere la qualità del risultato.',
  },
  {
    q: 'Gestite anche le manutenzioni oltre alle pulizie?',
    a: 'Sì, siamo un\'impresa 360°. Oltre alle pulizie, offriamo ai nostri clienti servizi di piccola manutenzione idraulica, elettrica ed edile, permettendoti di avere un unico referente per tutto l\'immobile.',
  },
  {
    q: 'In quali zone operate?',
    a: 'La nostra sede è a Parma, ma operiamo attivamente in tutta la provincia e su richiesta in tutta l\'Emilia-Romagna, specialmente per interventi industriali o di fine cantiere. Il nostro obiettivo è essere sempre vicini a te.',
  },
  {
    q: 'Quanto tempo ci vuole per ricevere il preventivo?',
    a: 'Garantiamo un preventivo dettagliato entro 24 ore dal sopralluogo. Il documento è chiaro, trasparente e suddiviso per voci. Nessun costo nascosto, nessuna sorpresa in fase di fatturazione.',
  },
]

function FAQItem({ q, a, isOpen, onClick, index }: { 
  q: string; a: string; isOpen: boolean; onClick: () => void; index: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen 
          ? 'border-[var(--accent)] bg-white shadow-[0_8px_32px_rgba(78,203,160,0.08)]' 
          : 'border-[var(--br)] bg-white hover:border-[var(--accent)]/40 hover:shadow-md'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
      >
        <div className="flex items-center gap-4">
          <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] opacity-60 hidden sm:block shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`font-display font-bold text-base lg:text-lg leading-snug ${isOpen ? 'text-[var(--tx-1)]' : 'text-[var(--tx-2)]'}`}>
            {q}
          </span>
        </div>
        <div className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-[var(--accent)] text-white rotate-0' 
            : 'bg-[var(--bg-2)] text-[var(--tx-3)] border border-[var(--br)]'
        }`}>
          {isOpen ? <Minus size={16} weight="bold" /> : <Plus size={16} weight="bold" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-6 font-sans text-[var(--tx-2)] leading-relaxed text-[15px] border-t border-[var(--accent)]/10 pt-4 ml-[0] sm:ml-[54px]">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-white overflow-hidden border-t border-[var(--br)]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 xl:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[38%_58%] gap-12 sm:gap-16 lg:gap-20 items-start">
          
          {/* Left: Sticky header */}
          <div className="lg:sticky lg:top-28">
            <ScrollReveal>
              <SectionLabel className="mb-5">— FAQ</SectionLabel>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl text-balance leading-[1.1]">
                Tutto quello che<br />
                <span className="text-[var(--accent)]">c'è da sapere.</span>
              </h2>
              <p className="mt-6 font-sans text-base font-light text-[var(--tx-2)] leading-relaxed max-w-xs">
                Trasparenza e chiarezza sono alla base del nostro rapporto con ogni cliente.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-10 flex flex-col gap-4">
                <p className="font-sans text-sm text-[var(--tx-3)]">
                  Hai altre domande? Contattaci direttamente.
                </p>
                <Link
                  href="/contatti"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--accent)] px-6 py-2.5 font-display text-sm font-bold text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
                >
                  Contattaci →
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: FAQ Items */}
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}
