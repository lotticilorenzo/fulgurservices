import React from 'react'
import { Metadata } from 'next'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Informativa sui cookie di Fulgur Service SRL',
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-[100dvh] bg-[var(--bg)] pt-[120px] pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionLabel className="mb-8">— LEGALE</SectionLabel>
        <h1 className="font-display text-4xl font-extrabold text-[var(--tx-1)] sm:text-5xl mb-12">
          Cookie Policy
        </h1>

        <div className="prose prose-invert max-w-none font-sans text-[var(--tx-2)] leading-relaxed space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[var(--tx-1)] mb-4">1. Cosa sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati dall&apos;utente inviano al suo terminale, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--tx-1)] mb-4">2. Tipologie di Cookie utilizzati</h2>
            <p>
              Questo sito utilizza esclusivamente le seguenti tipologie di cookie:
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <strong>Cookie Tecnici e di Sessione:</strong> Necessari per il corretto funzionamento del sito. Ad esempio, per memorizzare la tua scelta in merito ai cookie stessi. Senza questi cookie, il sito potrebbe non funzionare correttamente.
              </li>
              <li>
                <strong>Cookie Analitici (Placeholder):</strong> Al momento non utilizziamo tool di tracciamento avanzato. In futuro potremmo utilizzare Google Analytics in modalità anonimizzata per capire come gli utenti navigano il sito.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--tx-1)] mb-4">3. Gestione del Consenso</h2>
            <p>
              Visitando il sito per la prima volta, un banner ti ha informato dell&apos;uso dei cookie. Puoi cambiare le tue preferenze cancellando la cache del browser o modificando le impostazioni sulla privacy del tuo browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--tx-1)] mb-4">4. Disabilitazione dei Cookie</h2>
            <p>
              È possibile configurare il browser in modo da bloccare o eliminare i cookie. Ecco i link alle istruzioni dei principali browser:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Apple Safari</li>
              <li>Microsoft Edge</li>
            </ul>
          </section>

          <p className="text-sm italic text-[var(--tx-3)] pt-8 border-t border-[var(--br)]">
            Ultimo aggiornamento: 17 Marzo 2026
          </p>
        </div>
      </div>
    </main>
  )
}
