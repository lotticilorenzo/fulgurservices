'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CaretDown, Question } from '@phosphor-icons/react'
import { ScrollReveal } from './ScrollReveal'

const FAQS = [
  {
    q: "Il sopralluogo è davvero gratuito?",
    a: "Assolutamente sì. Veniamo presso la tua sede senza alcun impegno per valutare lo stato degli ambienti, ascoltare le tue necessità e fornirti un preventivo dettagliato entro 24 ore."
  },
  {
    q: "Siete assicurati contro eventuali danni?",
    a: "Certamente. Fulgur Service dispone di una copertura assicurativa RCT (Responsabilità Civile verso Terzi) completa per tutelare i nostri clienti e i nostri operatori durante ogni tipo di intervento."
  },
  {
    q: "Quali prodotti utilizzate? Sono eco-sostenibili?",
    a: "Utilizziamo esclusivamente prodotti professionali certificati. Ove possibile, prediligiamo soluzioni eco-sostenibili con certificazione Ecolabel per garantire ambienti salubri e ridurre l'impatto ambientale."
  },
  {
    q: "Gestite anche le manutenzioni oltre alle pulizie?",
    a: "Sì, siamo un'impresa 360°. Oltre alle pulizie, offriamo ai nostri clienti servizi di piccola manutenzione idraulica, elettrica ed edile, permettendoti di avere un unico referente per tutto l'immobile."
  },
  {
    q: "In quali zone operate?",
    a: "La nostra sede è a Parma, ma operiamo attivamente in tutta la provincia e su richiesta in tutta l'Emilia-Romagna, specialmente per interventi industriali o di fine cantiere."
  }
]

function FAQItem({ q, a, isOpen, onClick }: { q: string, a: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'border-[var(--accent)] bg-[var(--accent)]/[0.03] shadow-lg shadow-[var(--accent-glow)]' : 'border-[var(--br)] bg-white hover:border-[var(--accent)]/50'}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div className={`h-8 w-8 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-2)] text-[var(--tx-3)]'}`}>
            <Question size={18} weight={isOpen ? 'bold' : 'duotone'} />
          </div>
          <span className={`font-display font-bold text-lg ${isOpen ? 'text-[var(--tx-1)]' : 'text-[var(--tx-2)]'}`}>{q}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={isOpen ? 'text-[var(--accent)]' : 'text-[var(--tx-3)]'}
        >
          <CaretDown size={20} weight="bold" />
        </motion.div>
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
            <div className="p-6 pt-0 font-sans text-[var(--tx-2)] leading-relaxed border-t border-[var(--accent)]/10 mt-2">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-12 lg:py-20 bg-white overflow-hidden border-t border-[var(--br)]">
      <div className="mx-auto w-full max-w-4xl px-6 xl:px-8">
        
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] mb-6">
              <span className="font-mono-fulgur text-[10px] font-bold uppercase tracking-widest">Domande Frequenti</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-[var(--tx-1)] sm:text-4xl">
              Tutto quello che c'è da sapere.
            </h2>
            <p className="mt-4 font-sans text-[var(--tx-2)] font-light max-w-2xl mx-auto">
              Trasparenza e chiarezza sono alla base del nostro rapporto con il cliente. <br className="hidden sm:block" />
              Se hai altre domande, non esitare a contattarci.
            </p>
          </ScrollReveal>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FAQItem 
                q={faq.q} 
                a={faq.a} 
                isOpen={openIndex === i} 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
