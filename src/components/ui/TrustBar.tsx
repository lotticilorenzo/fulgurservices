'use client'

import Link from 'next/link'
import { ScrollReveal } from './ScrollReveal'
import { CounterUp } from './CounterUp'

const TRUST_DATA = [
  {
    prefix: "€",
    value: 2,
    suffix: "M+",
    label: "Massimale RCT",
    desc: "Assicurazione completa per la totale tutela del patrimonio dei nostri clienti.",
    link: "/chi-siamo#garanzie"
  },
  {
    value: 100,
    suffix: "%",
    label: "Prodotti Certificati",
    desc: "Utilizziamo esclusivamente detergenti professionali certificati HACCP ed Ecolabel.",
    link: "/chi-siamo#certificazioni"
  },
  {
    value: 35,
    suffix: "+",
    label: "Anni di Esperienza",
    desc: "Know-how consolidato in 35 anni di attività nel settore delle pulizie professionali.",
    link: "/chi-siamo"
  },
  {
    value: "HACCP",
    isText: true,
    label: "Protocollo Sanitario",
    desc: "Rigidi standard di igienizzazione per ambienti alimentari, medici e industriali.",
    link: "/servizi/settore-sanitario"
  }
]

export function TrustBar() {
  return (
    <section className="bg-[var(--bg-2)] border-y border-[var(--br)]">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {TRUST_DATA.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link 
                href={item.link}
                className={`p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col items-start border-t-[3px] border-transparent hover:border-[var(--accent)] transition-all duration-500 group relative block h-full ${i < TRUST_DATA.length - 1 ? 'md:border-r border-[var(--br)]' : ''}`}
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[var(--accent)] opacity-100" />
                
                <div className="font-display text-[clamp(28px,7vw,56px)] font-extrabold text-[var(--tx-1)] mb-2 sm:mb-3 tracking-tight">
                  {item.isText ? (
                    item.value
                  ) : (
                    <CounterUp 
                      value={item.value as number} 
                      prefix={item.prefix} 
                      suffix={item.suffix} 
                      duration={2500} 
                    />
                  )}
                </div>
                
                <span className="font-mono-fulgur text-[10px] font-bold text-[var(--tx-3)] uppercase tracking-[0.2em] mb-4 group-hover:text-[var(--accent)] transition-colors">
                  {item.label}
                </span>
                
                <p className="font-sans text-[12px] sm:text-[13px] font-light text-[var(--tx-2)] leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
