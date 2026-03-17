// lib/seo.ts — Fulgur Service
// Metadata completi e Structured Data da GEMINI.md sezione 7

const BASE_URL = 'https://www.fulgurservice.it'
const OG_DEFAULT = `${BASE_URL}/og/default.jpg`

export const METADATA = {
  home: {
    title: 'Fulgur Service — Impresa di Pulizie Professionali a Parma',
    description:
      'Impresa di pulizie professionali a Parma e provincia. Aziendali, industriali, sanitarie, condomini, hotel. Sopralluogo gratuito, preventivo in 24h. Chiama ora.',
    keywords: 'impresa pulizie Parma, pulizie professionali Parma, sanificazione Parma',
    openGraph: {
      title: 'Fulgur Service — Pulizie Professionali a Parma',
      description: 'Impresa giovane con 30 anni di esperienza. Sopralluogo gratuito, preventivo in 24h.',
      url: BASE_URL,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Fulgur Service — Pulizie Professionali Parma' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  servizi: {
    title: 'Tutti i Servizi | Fulgur Service Parma',
    description:
      '12 settori di intervento: pulizie aziendali, industriali, sanitarie, condomini, hotel, trattamento superfici e molto altro. Parma e provincia.',
    openGraph: {
      title: 'Tutti i Servizi — Fulgur Service Parma',
      description: '12 settori di intervento con team specializzato e macchinari professionali.',
      url: `${BASE_URL}/servizi`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Servizi Fulgur Service Parma' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  chiSiamo: {
    title: 'Chi Siamo | 30 Anni di Esperienza — Fulgur Service Parma',
    description:
      'Fulgur Service: impresa giovane con 30 anni di esperienza del settore. Team qualificato, prodotti eco-sostenibili, referente unico per tutti i tuoi spazi.',
    openGraph: {
      title: 'Chi Siamo — Fulgur Service',
      description: '30 anni di esperienza, visione nuova. La nostra storia.',
      url: `${BASE_URL}/chi-siamo`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Team Fulgur Service' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  preventivo: {
    title: 'Richiedi Preventivo Gratuito | Sopralluogo in 24h — Fulgur Service',
    description:
      'Richiedi un sopralluogo gratuito. Preventivo personalizzato in 24 ore, nessun impegno. Fulgur Service, impresa di pulizie a Parma.',
    openGraph: {
      title: 'Preventivo Gratuito — Fulgur Service',
      description: 'Sopralluogo gratuito e preventivo personalizzato in 24 ore.',
      url: `${BASE_URL}/preventivo`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Preventivo Fulgur Service' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  contatti: {
    title: 'Contatti | Fulgur Service Parma',
    description:
      'Contatta Fulgur Service: +39 338 316 0091 · fulgurservice@gmail.com · Parma, Italia. Risposta garantita entro 24 ore.',
    openGraph: {
      title: 'Contatti — Fulgur Service',
      description: '+39 338 316 0091 · fulgurservice@gmail.com · Parma, Italia.',
      url: `${BASE_URL}/contatti`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Contatti Fulgur Service' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
}

// ─── Structured Data (LocalBusiness) ─────────────────────────────────────────
export const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#organization`,
  name: 'Fulgur Service SRL',
  legalName: 'Fulgur Service SRL',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.svg`,
  image: OG_DEFAULT,
  description: 'Impresa di pulizie professionali a Parma e provincia',
  telephone: '+39-338-316-0091',
  email: 'fulgurservice@gmail.com',
  vatID: '03063010346',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Parma',
    addressRegion: 'Emilia-Romagna',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.8015,
    longitude: 10.3279,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  sameAs: ['https://www.instagram.com/fulgurservice/'],
  priceRange: '€€',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 44.8015,
      longitude: 10.3279,
    },
    geoRadius: '50000',
  },
}

// ─── Service-specific JSON-LD factory ────────────────────────────────────────
export function makeServiceJsonLd(service: {
  title: string
  shortDesc: string
  slug: string
  metaDescription: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    url: `${BASE_URL}/servizi/${service.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Fulgur Service SRL',
      url: BASE_URL,
      telephone: '+39-338-316-0091',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Parma',
        addressRegion: 'Emilia-Romagna',
        addressCountry: 'IT',
      },
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 44.8015,
        longitude: 10.3279,
      },
      geoRadius: '50000',
    },
  }
}
