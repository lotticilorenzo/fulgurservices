import type { Metadata } from 'next'
import Script from 'next/script'
import { LP_DATA } from '@/lib/lp-data'
import { LPThankYou } from '@/components/lp/LPThankYou'

const data = LP_DATA.alimentare

export const metadata: Metadata = {
  title: 'Richiesta ricevuta | Fulgur Service',
  description: 'Grazie per la tua richiesta. Ti contattiamo entro 24 ore lavorative.',
  robots: { index: false, follow: false },
}

export default function AlimentareLPGraziePage() {
  return (
    <>
      <Script id="lp-conversion-alimentare" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'lp_conversion',
  lp_variant: 'alimentare',
  conversion_value: 1,
  currency: 'EUR'
});`}
      </Script>
      <LPThankYou
        thankYou={data.thankYou}
        ctaPhoneRaw={data.hero.ctaPhoneRaw}
        whatsappUrl={data.hero.whatsappUrl}
      />
    </>
  )
}
