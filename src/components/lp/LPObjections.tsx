import type { LPData } from '@/lib/lp-data'

interface LPObjectionsProps {
  objections: LPData['objections']
}

export function LPObjections({ objections }: LPObjectionsProps) {
  return (
    <section data-scroll-section className="py-24 sm:py-32 bg-[var(--bg)]">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-d)] mb-6">
          {objections.eyebrow}
        </p>
        <h2
          className="font-display font-extrabold text-[var(--tx-1)] tracking-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          {objections.h2}
        </h2>

        <div className="mt-16">
          {objections.items.map((item, i) => (
            <div
              key={item.num}
              className={`py-10 border-t border-[var(--br)]${i === objections.items.length - 1 ? ' border-b' : ''}`}
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-8">
                <div className="md:col-span-5">
                  <p className="font-mono text-sm text-[var(--accent-d)] mb-3">{item.num}</p>
                  <h3 className="font-display text-2xl font-bold leading-snug text-[var(--tx-1)]">
                    {item.question}
                  </h3>
                </div>
                <div className="md:col-span-7 flex items-center">
                  <p className="font-body text-lg text-[var(--tx-2)] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
