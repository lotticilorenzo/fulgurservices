// lib/seo.ts — Fulgur Service
// Metadata completi e Structured Data da GEMINI.md sezione 7

const BASE_URL = 'https://www.fulgurservice.it'
const OG_DEFAULT = `${BASE_URL}/og/default.jpg`

export const METADATA = {
  home: {
    title: 'Fulgur Service — Impresa di Pulizie Professionali a Parma e Provincia',
    description:
      'Cerchi un’impresa di pulizie a Parma? Fulgur Service offre pulizie professionali per uffici, industrie, condomini e studi medici. Sopralluogo gratuito in 24h. Puliamo il futuro.',
    keywords: 'impresa pulizie Parma, ditta pulizie Parma, pulizie uffici Parma, pulizie industriali Parma, sanificazione ambienti Parma, pulizie condomini Parma, pulizie Parma e provincia',
    openGraph: {
      title: 'Fulgur Service — Impresa di Pulizie Professionali a Parma',
      description: 'Soluzioni di pulizia avanzate per aziende e privati a Parma e provincia. 40 anni di esperienza, risultati garantiti.',
      url: BASE_URL,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Fulgur Service — Leader Pulizie Parma' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  servizi: {
    title: 'Tutti i Servizi | Fulgur Service Parma',
    description:
      '15 aree di intervento: pulizie aziendali, industriali, sanitarie, condomini, hotel, trattamento superfici e molto altro. Parma e provincia.',
    openGraph: {
      title: 'Tutti i Servizi — Fulgur Service Parma',
      description: '15 aree di intervento con team specializzato e macchinari professionali.',
      url: `${BASE_URL}/servizi`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Servizi Fulgur Service Parma' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  chiSiamo: {
    title: 'Chi Siamo | 40 Anni di Esperienza — Fulgur Service Parma',
    description:
      'Fulgur Service: impresa giovane con 40 anni di esperienza del settore. Team qualificato, prodotti eco-sostenibili, referente unico per tutti i tuoi spazi.',
    openGraph: {
      title: 'Chi Siamo — Fulgur Service',
      description: '40 anni di esperienza, visione nuova. La nostra storia.',
      url: `${BASE_URL}/chi-siamo`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Team Fulgur Service' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  preventivo: {
    title: 'Richiedi Preventivo Gratuito | Fulgur Service Parma',
    description:
      'Richiedi un sopralluogo gratuito. Preventivo personalizzato in 48 ore, nessun impegno. Fulgur Service, impresa di pulizie a Parma.',
    openGraph: {
      title: 'Preventivo Gratuito — Fulgur Service',
      description: 'Sopralluogo gratuito e preventivo personalizzato in 48 ore.',
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
      'Contatta Fulgur Service: +39 338 316 0091 · fulgurservice@gmail.com · Parma, Italia. Risposta garantita entro 48 ore.',
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
  gallery: {
    title: 'Gallery | Fulgur Service Parma — Pulizie Professionali',
    description: 'Guarda i nostri lavori: pulizie aziendali, industriali, cantieri navali, pannelli fotovoltaici e molto altro a Parma e provincia.',
    openGraph: {
      title: 'Gallery — Fulgur Service Parma',
      description: 'I nostri lavori in foto: pulizie professionali a Parma in tutti i settori.',
      url: `${BASE_URL}/gallery`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Gallery Fulgur Service' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  privacy: {
    title: 'Privacy Policy | Fulgur Service Parma',
    description: 'Informativa sulla privacy di Fulgur Service SRL. Trasparenza e protezione dei tuoi dati.',
    openGraph: {
      title: 'Privacy Policy — Fulgur Service',
      url: `${BASE_URL}/privacy`,
      siteName: 'Fulgur Service',
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  cookiePolicy: {
    title: 'Cookie Policy | Fulgur Service Parma',
    description: 'Informativa sui cookie di Fulgur Service SRL. Scopri come utilizziamo i cookie sul nostro sito.',
    openGraph: {
      title: 'Cookie Policy — Fulgur Service',
      url: `${BASE_URL}/cookie-policy`,
      siteName: 'Fulgur Service',
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  macchinari: {
    title: 'Macchinari Professionali | Tecnologia Fulgur Service Parma',
    description:
      'Utilizziamo solo tecnologie all\'avanguardia: lavasciuga, aspiratori industriali CFM e sistemi Klindex per la lucidatura. Scopri le nostre attrezzature professionali.',
    openGraph: {
      title: 'Macchinari Professionali — Fulgur Service',
      description: 'Tecnologia e potenza per pulizie industriali e civili impeccabili.',
      url: `${BASE_URL}/macchinari`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Macchinari Fulgur Service' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  blog: {
    title: 'Blog & News | Consigli e Guide sulle Pulizie — Fulgur Service Parma',
    description:
      'Approfondimenti, guide e news sul mondo delle pulizie industriali, sanificazioni HACCP e manutenzione pannelli fotovoltaici a Parma e provincia.',
    openGraph: {
      title: 'Blog Fulgur Service — Authority nel Cleaning a Parma',
      description: 'Scopri i segreti della pulizia professionale e della manutenzione industriale.',
      url: `${BASE_URL}/blog`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Blog Fulgur Service Parma' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  fulgurAI: {
    title: 'Fulgur AI | Il tuo Consulente Intelligente — Fulgur Service',
    description:
      'Incontra Fulgur AI, il consulente virtuale basato su intelligenza artificiale di Fulgur Service. Risposte tecniche istantanee su pulizie industriali, sanificazioni e trattamenti.',
    openGraph: {
      title: 'Fulgur AI — L\'Intelligenza al servizio del Pulito',
      description: 'Consulto tecnico istantaneo fornito dal nostro agente AI specializzato.',
      url: `${BASE_URL}/fulgur-ai`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Fulgur AI Consultant' }],
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
  logo: `${BASE_URL}/images/logo-fulgur-service-impresa-pulizie-parma.webp`,
  image: OG_DEFAULT,
  description: 'Fulgur Service è l’impresa di pulizie di riferimento a Parma per pulizie civili, industriali e sanificazioni certificate. Operiamo a Parma, Fidenza, Salsomaggiore e tutta la provincia.',
  telephone: '+39-338-316-0091',
  email: 'fulgurservice@gmail.com',
  vatID: '03063010346',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Alfredo Veroni, 20',
    addressLocality: 'Parma',
    addressRegion: 'PR',
    postalCode: '43122',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.8197,
    longitude: 10.3541,
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
      latitude: 44.8197,
      longitude: 10.3541,
    },
    geoRadius: '50000',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
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
        streetAddress: 'Via Alfredo Veroni, 20',
        addressLocality: 'Parma',
        addressRegion: 'PR',
        postalCode: '43122',
        addressCountry: 'IT',
      },
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 44.8197,
        longitude: 10.3541,
      },
      geoRadius: '50000',
    },
  }
}
