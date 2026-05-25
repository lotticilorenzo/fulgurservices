import type { Metadata } from 'next'
import Script from 'next/script'
import { LP_DATA } from '@/lib/lp-data'
import { LPThankYou } from '@/components/lp/LPThankYou'

const data = LP_DATA.cantiere

export const metadata: Metadata = {
  title: 'Richiesta ricevuta | Fulgur Service',
  description: 'Grazie per la tua richiesta. Ti richiamiamo entro 24 ore lavorative.',
  robots: { index: false, follow: false },
}

export default function FineCantiereLPGraziePage() {
  return (
    <>
      <Script id="lp-conversion-cantiere" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'lp_conversion',
  lp_variant: 'cantiere',
  conversion_value: 1,
  currency: 'EUR'
});`}
      </Script>
      <LPThankYou
        grazie={data.grazie}
        ctaPhoneRaw={data.hero.ctaPhoneRaw}
        ctaPhone={data.hero.ctaPhone}
        whatsappUrl={data.hero.whatsappUrl}
      />
    </>
  )
}
