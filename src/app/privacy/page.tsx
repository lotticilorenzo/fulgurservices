import React from 'react'
import { Metadata } from 'next'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Informativa sulla privacy di Fulgur Service SRL',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-[120px] pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionLabel className="mb-8">— LEGALE</SectionLabel>
        <h1 className="font-display text-4xl font-extrabold text-[var(--tx-1)] sm:text-5xl mb-12">
          Privacy Policy
        </h1>

        <div className="prose prose-invert max-w-none font-sans text-[var(--tx-2)] leading-relaxed space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[var(--tx-1)] mb-4">1. Titolare del Trattamento</h2>
            <p>
              Il Titolare del trattamento è <strong>Fulgur Service S.R.L.</strong>, con sede in Parma, Italia.<br />
              P.IVA: 03063010346 | REA: 353051<br />
              Email: <a href="mailto:fulgurservice@gmail.com" className="text-[var(--accent)] hover:underline">fulgurservice@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--tx-1)] mb-4">2. Tipologia di Dati raccolti</h2>
            <p>
              I dati personali raccolti tramite questo sito includono:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Dati identificativi (nome, cognome) tramite form di contatto o preventivo.</li>
              <li>Dati di contatto (email, numero di telefono).</li>
              <li>Dati di navigazione (indirizzo IP, tipo di browser, tempi di permanenza) raccolti in forma anonima per fini statistici.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--tx-1)] mb-4">3. Finalità del Trattamento</h2>
            <p>
              I tuoi dati sono trattati per:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Rispondere alle richieste di informazioni o preventivi.</li>
              <li>Garantire il corretto funzionamento tecnico del sito.</li>
              <li>Adempiere ad obblighi di legge o richieste delle autorità.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--tx-1)] mb-4">4. Base Giuridica</h2>
            <p>
              Il trattamento si fonda sul tuo consenso espresso o sulla necessità di eseguire misure pre-contrattuali (preventivi) richieste dall'interessato.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--tx-1)] mb-4">5. Periodo di Conservazione</h2>
            <p>
              I dati saranno conservati per il tempo strettamente necessario a gestire la tua richiesta o secondo quanto previsto dalle normative vigenti in materia fiscale e contrattuale.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--tx-1)] mb-4">6. Diritti dell'Interessato</h2>
            <p>
              In conformità al GDPR (Regolamento UE 2016/679), hai il diritto di:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Accedere ai tuoi dati.</li>
              <li>Chiederne la rettifica o la cancellazione.</li>
              <li>Limitare il trattamento o opporsi ad esso.</li>
              <li>Richiedere la portabilità dei dati.</li>
            </ul>
            <p className="mt-4">
              Per esercitare tali diritti, puoi scrivere a: <a href="mailto:fulgurservice@gmail.com" className="text-[var(--accent)] hover:underline">fulgurservice@gmail.com</a>.
            </p>
          </section>
          
          <p className="text-sm italic text-[var(--tx-3)] pt-8 border-t border-[var(--br)]">
            Ultimo aggiornamento: 17 Marzo 2026
          </p>
        </div>
      </div>
    </main>
  )
}
