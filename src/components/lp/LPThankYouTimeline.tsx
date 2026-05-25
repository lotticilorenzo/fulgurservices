import { Clock, MapPin, FileText } from '@phosphor-icons/react/dist/ssr'
import { CounterUp } from '@/components/ui/CounterUp'

const STEPS = [
  {
    key: 'call',
    icon: Clock,
    counter: 4,
    counterSuffix: 'h',
    label: 'ore lavorative',
    title: 'Ti richiamiamo',
    desc: 'Al numero che ci hai lasciato. Senza chiamate dall\'agenzia, direttamente da noi.',
  },
  {
    key: 'visit',
    icon: MapPin,
    counter: null,
    counterSuffix: '',
    label: 'sopralluogo gratuito',
    title: 'Veniamo da te',
    desc: 'Valutiamo la sede, capiamo le esigenze, nessun impegno e nessuna sorpresa.',
  },
  {
    key: 'quote',
    icon: FileText,
    counter: 24,
    counterSuffix: 'h',
    label: 'ore dal sopralluogo',
    title: 'Ricevi il preventivo',
    desc: 'Dettagliato per voce, per iscritto. Quello che firmi è quello che paghi.',
  },
] as const

export function LPThankYouTimeline() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--bg-2)]">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent-d)] mb-3 text-center">
          Cosa succede adesso
        </p>
        <h2
          className="font-display font-extrabold text-[var(--tx-1)] tracking-tight text-center mb-12"
          style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
        >
          I prossimi 3 passi
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden sm:block absolute top-8 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-[var(--br)]"
            aria-hidden="true"
          />

          {STEPS.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.key} className="relative flex flex-col items-center text-center">
                {/* Number bubble */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-[var(--bg)] border-2 border-[var(--accent-glow)] flex items-center justify-center mb-4 shadow-[0_0_0_4px_var(--bg-2)]">
                  {s.counter !== null ? (
                    <div className="flex items-baseline gap-0.5">
                      <CounterUp
                        value={s.counter}
                        suffix={s.counterSuffix}
                        duration={1200}
                        className="font-display font-extrabold text-xl text-[var(--accent-d)]"
                      />
                    </div>
                  ) : (
                    <Icon size={28} weight="fill" className="text-[var(--accent)]" aria-hidden="true" />
                  )}
                </div>

                {/* Step number */}
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent-d)] mb-1">
                  {String(i + 1).padStart(2, '0')}
                </p>

                <h3 className="font-display font-bold text-base text-[var(--tx-1)] mb-1">
                  {s.title}
                </h3>
                {s.counter !== null && (
                  <p className="font-mono text-[10px] text-[var(--accent-d)] mb-2 uppercase tracking-[0.1em]">
                    Entro {s.counter}{s.counterSuffix} {s.label}
                  </p>
                )}
                {s.counter === null && (
                  <p className="font-mono text-[10px] text-[var(--accent-d)] mb-2 uppercase tracking-[0.1em]">
                    {s.label}
                  </p>
                )}
                <p className="font-body text-sm text-[var(--tx-2)] leading-relaxed max-w-[22ch] mx-auto">
                  {s.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
