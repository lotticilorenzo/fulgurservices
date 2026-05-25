import { AddressBook, Phone, Envelope, Globe } from '@phosphor-icons/react/dist/ssr'

const VCARD = `BEGIN:VCARD
VERSION:3.0
N:Service;Fulgur;;;
FN:Fulgur Service SRL
ORG:Fulgur Service SRL
TEL;TYPE=CELL:+393383160091
EMAIL:fulgurservice@gmail.com
URL:https://www.fulgurservice.it
ADR;TYPE=WORK:;;Via Alfredo Veroni 22;Parma;;43122;IT
NOTE:Impresa di pulizie professionali - Parma
END:VCARD`

const vcardHref = `data:text/vcard;charset=utf-8,${encodeURIComponent(VCARD)}`

export function LPThankYouSaveContact() {
  return (
    <section className="py-16 sm:py-20 bg-[var(--bg)]">
      <div className="mx-auto max-w-md px-5 sm:px-8">
        <div className="bg-[var(--bg-2)] border border-[var(--br)] rounded-2xl p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-[var(--accent-glow)] flex items-center justify-center mx-auto mb-4">
            <AddressBook size={24} weight="fill" className="text-[var(--accent)]" aria-hidden="true" />
          </div>

          <h2 className="font-display font-bold text-[var(--tx-1)] text-lg mb-1">
            Salva il nostro numero
          </h2>
          <p className="font-body text-sm text-[var(--tx-2)] mb-5">
            Così ci riconosci quando ti richiamiamo.
          </p>

          {/* Contact details */}
          <div className="flex flex-col gap-2 mb-6 text-left">
            <div className="flex items-center gap-3">
              <Phone size={14} weight="bold" className="text-[var(--accent-d)] shrink-0" aria-hidden="true" />
              <span className="font-body text-sm text-[var(--tx-1)]">338 316 0091</span>
            </div>
            <div className="flex items-center gap-3">
              <Envelope size={14} weight="bold" className="text-[var(--accent-d)] shrink-0" aria-hidden="true" />
              <span className="font-body text-sm text-[var(--tx-1)]">fulgurservice@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={14} weight="bold" className="text-[var(--accent-d)] shrink-0" aria-hidden="true" />
              <span className="font-body text-sm text-[var(--tx-1)]">www.fulgurservice.it</span>
            </div>
          </div>

          <a
            href={vcardHref}
            download="fulgur-service.vcf"
            className="inline-flex items-center justify-center gap-2 w-full h-11 rounded-full border border-[var(--br-solid)] text-[var(--accent-d)] font-body font-medium text-sm hover:bg-[var(--bg-3)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          >
            <AddressBook size={16} weight="bold" aria-hidden="true" />
            Aggiungi ai contatti
          </a>

          <p className="font-body text-[11px] text-[var(--tx-3)] mt-4">
            Fulgur Service SRL · Parma · P.IVA 03063010346
          </p>
        </div>
      </div>
    </section>
  )
}
