import type { Metadata } from 'next'
import Script from 'next/script'
import { LP_DATA } from '@/lib/lp-data'
import { LPThankYouHero } from '@/components/lp/LPThankYouHero'
import { LPThankYouTimeline } from '@/components/lp/LPThankYouTimeline'
import { LPThankYouSaveContact } from '@/components/lp/LPThankYouSaveContact'

export const metadata: Metadata = {
  title: 'Grazie — Richiesta ricevuta | Fulgur Service',
  description: 'La tua richiesta è stata ricevuta. Ti contattiamo entro 4 ore lavorative.',
  robots: { index: false, follow: false },
}

const data = LP_DATA.alimentare

export default function GrazieSettoreAlimentarePage() {
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
      <LPThankYouHero variant="alimentare" whatsAppText={data.thankYou.ctaWhatsAppText} />
      <LPThankYouTimeline />
      <LPThankYouSaveContact />
    </>
  )
}
