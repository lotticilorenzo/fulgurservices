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

const data = LP_DATA.uffici

export default function GraziePulizieUfficiPage() {
  return (
    <>
      <Script id="lp-conversion-uffici" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'lp_conversion',
  lp_variant: 'uffici',
  conversion_value: 1,
  currency: 'EUR'
});`}
      </Script>
      <LPThankYouHero variant="uffici" whatsAppText={data.thankYou.ctaWhatsAppText} />
      <LPThankYouTimeline />
      <LPThankYouSaveContact />
    </>
  )
}
