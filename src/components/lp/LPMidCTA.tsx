import { ArrowRight, Phone } from '@phosphor-icons/react/dist/ssr'

interface LPMidCTAProps {
  formId: string
  phoneRaw: string
}

export function LPMidCTA({ formId, phoneRaw }: LPMidCTAProps) {
  return (
    <section data-scroll-section className="py-20 bg-[var(--accent-d)]">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/60 mb-4">
          SOPRALLUOGO GRATUITO
        </p>
        <h3
          className="font-display font-extrabold text-white mb-8 leading-tight"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}
        >
          Hai ancora dubbi?
          <br />
          <span className="text-[var(--accent-l)]">Parlaci direttamente.</span>
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`#${formId}`}
            className="inline-flex items-center justify-center gap-2 bg-white text-[var(--accent-d)] px-8 py-4 font-body font-medium hover:bg-[var(--bg-2)] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--accent-d)]"
          >
            Richiedi sopralluogo gratuito
            <ArrowRight weight="bold" size={18} aria-hidden="true" />
          </a>
          <a
            href={`tel:${phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/40 text-white px-8 py-4 font-body font-medium hover:border-white transition-colors focus-visible:ring-2 focus-visible:ring-white"
          >
            <Phone weight="bold" size={18} aria-hidden="true" />
            338 316 0091
          </a>
        </div>
      </div>
    </section>
  )
}
