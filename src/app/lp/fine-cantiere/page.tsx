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
import { LPStickyCTABar } from '@/components/lp/LPStickyCTABar'

const data = LP_DATA.cantiere
const FORM_ID = 'lp-form-cantiere'

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
      <section className="py-16 sm:py-20 bg-[var(--bg-2)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">
            {/* Left — context */}
            <div>
              <p className="font-mono-fulgur text-[10px] uppercase tracking-[0.18em] text-[var(--accent)] mb-4">
                — RICHIEDI SOPRALLUOGO
              </p>
              <h2
                className="font-display font-extrabold text-[var(--tx-1)] tracking-tight mb-4"
                style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
              >
                Partiamo dal sopralluogo. Gratis.
              </h2>
              <p className="font-body text-[var(--tx-2)] text-base leading-relaxed mb-6">
                Veniamo in cantiere, valutiamo lo sporco, ti diciamo cosa facciamo e in quanto tempo.
                Preventivo scritto entro 24h. Nessuna sorpresa.
              </p>
              <ul className="space-y-2.5">
                {['Sopralluogo gratuito a Parma e provincia', 'Preventivo scritto in 24 ore', 'Polizza RC/RCO attiva — sei coperto', 'Intervento entro 48 ore lavorative'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 font-body text-sm text-[var(--tx-2)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Right — form */}
            <div>
              <LPContactForm
                variant={data.variant}
                form={data.form}
                ctaPhoneRaw={data.hero.ctaPhoneRaw}
                ctaPhone={data.hero.ctaPhone}
                formId={FORM_ID}
              />
            </div>
          </div>
        </div>
      </section>

      <LPBenefits benefits={data.benefits} />
      <LPProcess process={data.process} />
      <LPCaseStudy />
      <LPObjections objections={data.objections} />
      <LPSocialProof testimonial={data.testimonial} />
      <LPFinalCTA
        finalCta={data.finalCta}
        ctaPhoneRaw={data.hero.ctaPhoneRaw}
        ctaPhone={data.hero.ctaPhone}
        whatsappUrl={data.hero.whatsappUrl}
        formId={FORM_ID}
      />
      <LPStickyCTABar ctaPhoneRaw={data.hero.ctaPhoneRaw} whatsappUrl={data.hero.whatsappUrl} />
    </>
  )
}
