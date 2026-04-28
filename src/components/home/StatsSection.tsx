'use client'

import { motion } from 'framer-motion'
import { CounterUp } from '@/components/ui/CounterUp'
import { SERVICE_AREAS_COUNT } from '@/lib/site-constants'

const STATS = [
  {
    value: 35,
    suffix: '+',
    label: 'Anni di esperienza',
    sub: 'Nel settore pulizie professionali',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Clienti soddisfatti',
    sub: 'In tutta Italia',
  },
  {
    value: SERVICE_AREAS_COUNT,
    suffix: '',
    label: 'Aree di intervento',
    sub: "Dal civile all'industriale",
  },
  {
    value: 48,
    suffix: 'h',
    label: 'Preventivo garantito',
    sub: 'Sopralluogo sempre gratuito',
  },
]

const EASE = [0.16, 1, 0.3, 1] as const

export function StatsSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-12 md:py-20 lg:py-28"
      style={{ background: 'var(--accent)' }}
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 xl:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-6% 0px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-8 sm:mb-12 lg:mb-14 text-center"
        >
          <p className="font-mono-fulgur text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 mb-3">
            I NUMERI CHE CI DEFINISCONO
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Risultati concreti,<br />ogni giorno.
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-6% 0px' }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: EASE }}
              className="flex flex-col items-center justify-center gap-1.5 sm:gap-3 bg-white/5 px-1.5 py-4 sm:px-3 sm:py-5 md:px-6 md:py-8 lg:px-8 lg:py-10 text-center hover:bg-white/10 transition-colors duration-300"
            >
              <div
                className="font-display font-black leading-none tracking-tight text-white"
                style={{ fontSize: 'clamp(36px, 9vw, 80px)' }}
              >
                <CounterUp value={stat.value} suffix={stat.suffix} duration={2200} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-base font-bold text-white/90 leading-snug">
                  {stat.label}
                </span>
                <span className="font-mono-fulgur text-[10px] font-medium uppercase tracking-wider text-white/50">
                  {stat.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
