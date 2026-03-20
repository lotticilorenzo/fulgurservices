import type { Metadata } from 'next'
import { METADATA } from '@/lib/seo'
import { LavoraConNoiClient } from '@/components/lavora-con-noi/LavoraConNoiClient'

// SEO-03: page.tsx è ora un Server Component — può esportare metadata correttamente
export const metadata: Metadata = {
  title: 'Lavora con Noi | Fulgur Service Parma — Candidatura',
  description: 'Entra nel team Fulgur Service: cerchiamo persone motivate e precise per ruoli operativi e di coordinamento. Candidatura spontanea, risposta garantita.',
  openGraph: {
    title: 'Lavora con Noi — Fulgur Service',
    description: 'Entra nel team di una delle imprese di pulizie più innovative di Parma.',
    url: 'https://www.fulgurservice.it/lavora-con-noi',
    siteName: 'Fulgur Service',
    images: [{ url: 'https://www.fulgurservice.it/og/default.jpg', width: 1200, height: 630, alt: 'Lavora con Fulgur Service' }],
    locale: 'it_IT',
    type: 'website',
  },
  alternates: { canonical: 'https://www.fulgurservice.it/lavora-con-noi' },
}

export default function LavoraConNoiPage() {
  return <LavoraConNoiClient />
}
