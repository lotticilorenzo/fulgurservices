import Image from 'next/image'
import { ShieldCheck, Certificate, UsersThree, Atom } from '@phosphor-icons/react/dist/ssr'

const credentials = [
  {
    icon: ShieldCheck,
    label: 'P.IVA 03063010346 · REA PR-353051',
    desc: 'Impresa regolarmente registrata alla CCIAA di Parma.',
  },
  {
    icon: Certificate,
    label: 'Polizza RC/RCO attiva',
    desc: 'Copertura assicurativa su tutti gli operatori e le attività.',
  },
  {
    icon: Atom,
    label: 'Prodotti PMC – Min. della Salute',
    desc: 'Presidi Medico Chirurgici registrati, conformi Reg. UE 528/2012.',
  },
  {
    icon: UsersThree,
    label: 'Operatori formati + riservatezza',
    desc: 'DPI sanitari, patto di riservatezza firmato da ogni operatore.',
  },
]

export function LPCredentials() {
  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-2)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="font-mono-fulgur text-[10px] uppercase tracking-[0.18em] text-[var(--accent)] mb-3">
          — CERTIFICAZIONI
        </p>
        <h2
          className="font-display font-bold text-[var(--tx-1)] tracking-tight mb-4"
          style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
        >
          Perché puoi fidarti.
        </h2>
        <p className="font-body text-[var(--tx-2)] text-base mb-10 max-w-[55ch]">
          Nel settore sanitario, le credenziali non sono optional. Ecco cosa portiamo in ogni studio.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {credentials.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="flex items-start gap-4 bg-[var(--bg-card)] border border-[var(--br)] rounded-2xl p-5"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--accent-glow)] flex items-center justify-center">
                <Icon size={20} weight="fill" className="text-[var(--accent-d)]" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display font-bold text-[var(--tx-1)] text-sm mb-0.5">{label}</p>
                <p className="font-body text-xs text-[var(--tx-2)] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden col-span-2 sm:col-span-1">
            <Image
              src="/images/team-operatori-pulizie-professionali-parma.webp"
              alt="Team operatori Fulgur Service con DPI sanitari — pronti per sanificazione studio medico Parma"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/gallery/attrezzatura-professionale-pulitalia.webp"
              alt="Attrezzatura professionale Fulgur Service per sanificazione sanitaria — Parma"
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/gallery/prodotto-kiter-evolution-pavimento-sanificato.webp"
              alt="Prodotto PMC Kiter Evolution per sanificazione pavimenti studi medici Parma"
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
