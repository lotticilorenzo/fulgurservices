import Image from 'next/image'
import type { LPData } from '@/lib/lp-data'

interface LPCaseStudyProps {
  caseStudy: NonNullable<LPData['caseStudy']>
}

export function LPCaseStudy({ caseStudy }: LPCaseStudyProps) {
  return (
    <section data-scroll-section className="py-24 sm:py-32 bg-[var(--bg-3)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-d)] mb-6">
          {caseStudy.eyebrow}
        </p>
        <h2
          className="font-display font-extrabold text-[var(--tx-1)] tracking-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          {caseStudy.h2}
        </h2>
        <p className="font-body text-[var(--tx-2)] text-lg mb-14 max-w-[55ch]">
          {caseStudy.desc}
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <Image
              src={caseStudy.imageMain}
              alt={caseStudy.imageMainAlt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <Image
              src={caseStudy.imageSecondary}
              alt={caseStudy.imageSecondaryAlt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
