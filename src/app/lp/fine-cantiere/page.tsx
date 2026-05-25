import type { Metadata } from 'next'
import { LP_DATA } from '@/lib/lp-data'
import { LPHero } from '@/components/lp/LPHero'
import { LPTrustBar } from '@/components/lp/LPTrustBar'
import { LPContactForm } from '@/components/lp/LPContactForm'
import { LPBenefits } from '@/components/lp/LPBenefits'
import { LPProcess } from '@/components/lp/LPProcess'
import { LPObjections } from '@/components/lp/LPObjections'
import { LPCaseStudy } from '@/components/lp/LPCaseStudy'
import { LPSocialProof } from '@/components/lp/LPSocialProof'
import { LPFinalCTA } from '@/components/lp/LPFinalCTA'

const data = LP_DATA.cantiere
const FORM_ID = 'lp-form'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: data.meta.canonical },
  openGraph: {
    title: data.meta.title,
    description: data.meta.description,
    url: data.meta.canonical,
    images: [{ url: data.meta.ogImage, width: 1200, height: 630 }],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

export default function FineCantiereLPPage() {
  return (
    <>
      <LPHero data={data} formId={FORM_ID} />
      <LPTrustBar items={data.trustBar} />

      {/* Form section */}
      <section id="lp-form" data-scroll-section className="py-24 md:py-40 bg-[var(--bg)]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-d)] mb-6">
            02 — RICHIEDI SOPRALLUOGO
          </p>
          <h2
            className="font-display font-extrabold text-[var(--tx-1)] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Una telefonata in{' '}
            <span className="text-[var(--accent)]">24 ore</span>
            . Sopralluogo gratuito.
          </h2>
          <p className="font-body text-lg text-[var(--tx-2)] max-w-xl mx-auto">
            Lascia i tuoi dati. Ti richiamiamo per fissare un sopralluogo gratuito a Parma e provincia.
          </p>
          <div className="mt-12">
            <LPContactForm
              variant={data.variant}
              form={data.form}
              ctaPhoneRaw={data.hero.ctaPhoneRaw}
              ctaPhone={data.hero.ctaPhone}
            />
          </div>
        </div>
      </section>

      <LPBenefits benefits={data.benefits} />
      <div className="lp-section-divider" aria-hidden="true" />
      <LPProcess process={data.process} />
      <div className="lp-section-divider" aria-hidden="true" />
      <LPCaseStudy />
      <div className="lp-section-divider" aria-hidden="true" />
      <LPObjections objections={data.objections} />
      <div className="lp-section-divider" aria-hidden="true" />
      <LPSocialProof testimonial={data.testimonial} />
      <LPFinalCTA
        finalCta={data.finalCta}
        ctaPhoneRaw={data.hero.ctaPhoneRaw}
        ctaPhone={data.hero.ctaPhone}
        whatsappUrl={data.hero.whatsappUrl}
        formId={FORM_ID}
      />
    </>
  )
}
