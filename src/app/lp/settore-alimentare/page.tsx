import type { Metadata } from 'next'
import { LP_DATA } from '@/lib/lp-data'
import { LPHero } from '@/components/lp/LPHero'
import { LPTrustBar } from '@/components/lp/LPTrustBar'
import { LPContactForm } from '@/components/lp/LPContactForm'
import { LPCoverage } from '@/components/lp/LPCoverage'
import { LPGuarantees } from '@/components/lp/LPGuarantees'
import { LPProcess } from '@/components/lp/LPProcess'
import { LPSocialProof } from '@/components/lp/LPSocialProof'
import { LPCaseStudy } from '@/components/lp/LPCaseStudy'
import { LPObjections } from '@/components/lp/LPObjections'
import { LPMidCTA } from '@/components/lp/LPMidCTA'
import { LPFinalCTA } from '@/components/lp/LPFinalCTA'

const data = LP_DATA.alimentare
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: data.objections.items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function AlimentareLPPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <LPHero data={data} formId={FORM_ID} />
      <LPTrustBar items={data.trustBar} />
      <div className="lp-section-divider" aria-hidden="true" />
      <LPCoverage coverage={data.coverage!} />
      <div className="lp-section-divider" aria-hidden="true" />
      <LPProcess process={data.process} />
      <div className="lp-section-divider" aria-hidden="true" />
      <LPCaseStudy caseStudy={data.caseStudy!} />
      <div className="lp-section-divider" aria-hidden="true" />
      <LPObjections objections={data.objections} />
      <div className="lp-section-divider" aria-hidden="true" />
      <LPGuarantees guarantees={data.guarantees!} />
      <div className="lp-section-divider" aria-hidden="true" />
      <LPSocialProof socialProof={data.socialProof} />

      <section id={FORM_ID} data-scroll-section className="py-24 md:py-40 bg-[var(--bg)]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-d)] mb-6">
            {data.form.eyebrow}
          </p>
          <h2
            className="font-display font-extrabold text-[var(--tx-1)] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            dangerouslySetInnerHTML={{ __html: data.form.h2 }}
          />
          <p className="font-body text-lg text-[var(--tx-2)] max-w-xl mx-auto">
            {data.form.subhead}
          </p>
          <div className="mt-12">
            <LPContactForm
              variant={data.variant}
              form={data.form}
              ctaPhoneRaw={data.hero.ctaPhoneRaw}
            />
          </div>
        </div>
      </section>

      <LPMidCTA formId={FORM_ID} phoneRaw={data.hero.ctaPhoneRaw} />
      <LPFinalCTA
        finalCta={data.finalCta}
        ctaPhoneRaw={data.hero.ctaPhoneRaw}
        whatsappUrl={data.hero.whatsappUrl}
        formId={FORM_ID}
      />
    </>
  )
}
