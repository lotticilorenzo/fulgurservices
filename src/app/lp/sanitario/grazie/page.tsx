import type { Metadata } from 'next'
import Script from 'next/script'
import { LP_DATA } from '@/lib/lp-data'
import { LPThankYou } from '@/components/lp/LPThankYou'

const data = LP_DATA.sanitario

export const metadata: Metadata = {
  title: 'Richiesta ricevuta | Fulgur Service',
  description: 'Grazie per la tua richiesta. Ti contattiamo entro 24 ore lavorative.',
  robots: { index: false, follow: false },
}

export default function SanitarioLPGraziePage() {
  return (
    <>
      {/* Google Ads conversion tracking — TODO: sostituire AW-XXXXXXXXX/YYYYYYYYY con il conversion ID reale */}
      <Script
        id="gtag-lp-sanitario-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window.gtag === 'function') {
              window.gtag('event', 'conversion', {
                send_to: 'AW-XXXXXXXXX/YYYYYYYYY',
                value: 1.0,
                currency: 'EUR'
              });
              window.gtag('event', 'lp_conversion', {
                event_category: 'lead',
                event_label: '${data.grazie.eventLabel}'
              });
            }
          `,
        }}
      />
      <LPThankYou
        grazie={data.grazie}
        ctaPhoneRaw={data.hero.ctaPhoneRaw}
        ctaPhone={data.hero.ctaPhone}
        whatsappUrl={data.hero.whatsappUrl}
      />
    </>
  )
}
