// lib/seo.ts Fulgur Service
// Metadata completi e Structured Data da GEMINI.md sezione 7

import { SERVICE_AREAS_COUNT } from '@/lib/site-constants'

const BASE_URL = 'https://www.fulgurservice.it'
const OG_DEFAULT = `${BASE_URL}/og/default.jpg`

export const METADATA = {
  home: {
    title: 'Impresa di Pulizie Parma | Fulgur Service | Professionalità e Sanificazioni',
    description:
      'Cerchi un’impresa di pulizie a Parma? Fulgur Service offre pulizie professionali per uffici, industrie, condomini e studi medici. Sopralluogo gratuito in 24h a Parma e provincia.',
    keywords: 'impresa pulizie Parma, ditta pulizie Parma, pulizie uffici Parma, pulizie industriali Parma, sanificazione ambienti Parma, pulizie condomini Parma, pulizie edili Parma, pulizie professionali Parma',
    openGraph: {
      title: 'Impresa di Pulizie Parma | Fulgur Service',
      description: 'Soluzioni di pulizia avanzate per aziende e privati a Parma e provincia. 35 anni di esperienza, risultati garantiti e sopralluogo gratuito.',
      url: BASE_URL,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Fulgur Service Leader Pulizie Parma' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  servizi: {
    title: 'Tutti i Servizi | Fulgur Service Parma',
    description:
      `${SERVICE_AREAS_COUNT} aree di intervento: pulizie aziendali, industriali, sanitarie, salumifici, condomini, hotel, trattamento superfici e molto altro. Sede a Parma, operativi in tutta Italia.`,
    openGraph: {
      title: 'Tutti i Servizi | Fulgur Service Parma',
      description: `${SERVICE_AREAS_COUNT} aree di intervento con team specializzato e macchinari professionali.`,
      url: `${BASE_URL}/servizi`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Servizi Fulgur Service Parma' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  chiSiamo: {
    title: 'Chi Siamo | 35 Anni di Esperienza Fulgur Service Parma',
    description:
      'Fulgur Service: impresa giovane con 35 anni di esperienza del settore. Team qualificato, prodotti eco-sostenibili, referente unico per tutti i tuoi spazi.',
    openGraph: {
      title: 'Chi Siamo Fulgur Service',
      description: '35 anni di esperienza, visione nuova. La nostra storia.',
      url: `${BASE_URL}/chi-siamo`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Team Fulgur Service' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  preventivo: {
    title: 'Richiedi Preventivo Gratuito | Sopralluogo Gratis in 24h a Parma',
    description:
      'Ottieni un preventivo personalizzato per le tue pulizie a Parma entro 24-48 ore. Sopralluogo gratuito e senza impegno. Fulgur Service: efficienza e trasparenza.',
    openGraph: {
      title: 'Preventivo Gratuito Pulizie Parma | Fulgur Service',
      description: 'Sopralluogo gratuito e preventivo su misura in 24-48 ore a Parma.',
      url: `${BASE_URL}/preventivo`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Preventivo Fulgur Service' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  contatti: {
    title: 'Contatti e Sede | Fulgur Service Impresa Pulizie Parma',
    description:
      'Contatta Fulgur Service a Parma: +39 338 316 0091 | fulgurservice@gmail.com. Via Alfredo Veroni, 22 - Parma. Risposta rapida garantita.',
    openGraph: {
      title: 'Contatti | Fulgur Service Parma',
      description: '+39 338 316 0091 | fulgurservice@gmail.com | Sede a Parma.',
      url: `${BASE_URL}/contatti`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Contatti Fulgur Service' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  gallery: {
    title: 'Gallery | Fulgur Service Parma Pulizie Professionali',
    description: 'Guarda i nostri lavori: pulizie aziendali, industriali, cantieri navali, pannelli fotovoltaici e molto altro. Operativi in tutta Italia.',
    openGraph: {
      title: 'Gallery | Fulgur Service Parma',
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
      title: 'Privacy Policy | Fulgur Service',
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
      title: 'Cookie Policy | Fulgur Service',
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
      title: 'Macchinari Professionali | Fulgur Service',
      description: 'Tecnologia e potenza per pulizie industriali e civili impeccabili.',
      url: `${BASE_URL}/macchinari`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Macchinari Fulgur Service' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  blog: {
    title: 'Blog & News | Consigli e Guide sulle Pulizie | Fulgur Service Parma',
    description:
      'Approfondimenti, guide e news sul mondo delle pulizie industriali, sanificazioni HACCP e manutenzione pannelli fotovoltaici. Operativi in tutta Italia.',
    openGraph: {
      title: 'Blog Fulgur Service | Authority nel Cleaning a Parma',
      description: 'Scopri i segreti della pulizia professionale e della manutenzione industriale.',
      url: `${BASE_URL}/blog`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Blog Fulgur Service Parma' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  storage: {
    title: 'Box Archivio Sicuri a Parma | Fulgur Storage | Deposito Documenti con Accesso H24',
    description:
      'Box archivio riservati a Parma con telecamera, allarme certificato e accesso illimitato 24/7. Prezzo fisso mensile, box dedicato esclusivo. Ideale per avvocati, commercialisti e aziende. Sopralluogo gratuito.',
    openGraph: {
      title: 'Fulgur Storage | Box Archivio Sicuri a Parma | Accesso H24 | Prezzo Fisso',
      description: 'Box archivio privati con sorveglianza, allarme e accesso 24/7 a Parma. Prezzo fisso mensile senza sorprese.',
      url: `${BASE_URL}/storage`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: 'Fulgur Storage Box Archivio Parma' }],
      locale: 'it_IT',
      type: 'website' as const,
    },
  },
  fulgurAI: {
    title: 'Fulgur AI | Il tuo Consulente Intelligente Fulgur Service',
    description:
      'Incontra Fulgur AI, il consulente virtuale basato su intelligenza artificiale di Fulgur Service. Risposte tecniche istantanee su pulizie industriali, sanificazioni e trattamenti.',
    openGraph: {
      title: 'Fulgur AI | L\'Intelligenza al servizio del Pulito',
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
  description: 'Fulgur Service è l\'impresa di pulizie di riferimento con sede a Parma per pulizie civili, industriali e sanificazioni certificate. Operativi in tutta Italia.',
  telephone: '+39-338-316-0091',
  email: 'fulgurservice@gmail.com',
  vatID: '03063010346',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Alfredo Veroni, 22',
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
  sameAs: [
    'https://www.instagram.com/fulgurservicesrl_/',
    'https://www.facebook.com/fulgurservicesrl/',
    'https://www.linkedin.com/company/fulgurservice/',
  ],
  priceRange: '€€',
  areaServed: [
    { '@type': 'City', name: 'Parma', addressCountry: 'IT' },
    { '@type': 'AdministrativeArea', name: 'Oltretorrente', addressCountry: 'IT' },
    { '@type': 'AdministrativeArea', name: 'San Lazzaro', addressCountry: 'IT' },
    { '@type': 'AdministrativeArea', name: 'Montanara', addressCountry: 'IT' },
    { '@type': 'AdministrativeArea', name: 'San Leonardo', addressCountry: 'IT' },
    { '@type': 'AdministrativeArea', name: 'Zona Industriale SPIP', addressCountry: 'IT' },
    { '@type': 'City', name: 'Fidenza', addressCountry: 'IT' },
    { '@type': 'City', name: 'Collecchio', addressCountry: 'IT' },
    { '@type': 'City', name: 'Salsomaggiore Terme', addressCountry: 'IT' },
    { '@type': 'City', name: 'Langhirano', addressCountry: 'IT' },
    { '@type': 'City', name: 'Noceto', addressCountry: 'IT' },
    { '@type': 'City', name: 'Fontevivo', addressCountry: 'IT' },
    { '@type': 'City', name: 'Sorbolo', addressCountry: 'IT' },
    { '@type': 'City', name: 'Traversetolo', addressCountry: 'IT' },
    { '@type': 'City', name: 'Colorno', addressCountry: 'IT' },
  ],
  knowsAbout: [
    'Pulizie industriali e manutenzione magazzini logistici',
    'Pulizie uffici e sanificazione postazioni lavorative',
    'Protocolli HACCP per industria alimentare e salumifici',
    'Sanificazione Presidio Medico Chirurgico per cliniche e studi medici',
    'Trattamento protettivo superfici (Cristallizzazione marmo, cotto, gres)',
    'Pulizia pannelli fotovoltaici con sistemi ad osmosi inversa',
    'Pulizie post-cantiere e fine ristrutturazione professionale',
    'Manutenzione giardini e aree verdi aziendali',
    'Socio sostenitore consorzio KilometroVerde Parma',
    'Protocolli sicurezza sul lavoro D.Lgs 81/08',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '21',
    bestRating: '5',
    worstRating: '1',
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
    areaServed: [
      { '@type': 'City', name: 'Parma', addressCountry: 'IT' },
      { '@type': 'City', name: 'Fidenza', addressCountry: 'IT' },
      { '@type': 'City', name: 'Collecchio', addressCountry: 'IT' },
      { '@type': 'City', name: 'Salsomaggiore Terme', addressCountry: 'IT' },
      { '@type': 'City', name: 'Langhirano', addressCountry: 'IT' },
      { '@type': 'City', name: 'Noceto', addressCountry: 'IT' },
    ],
  }
}

// ─── Breadcrumbs JSON-LD factory ───────────────────────────────────────────
export function makeBreadcrumbsJsonLd(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: it.item.startsWith('http') ? it.item : `${BASE_URL}${it.item}`,
    })),
  }
}

// ─── Blog Post JSON-LD factory ─────────────────────────────────────────────
export function makeBlogPostJsonLd(post: {
  title: string
  excerpt: string
  slug: string
  date: string
  author: string
  image: string
  category?: string
  keywords?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image.startsWith('http') ? post.image : `${BASE_URL}${post.image}`,
    articleSection: post.category,
    keywords: post.keywords?.join(', '),
    author: {
      '@type': 'Organization',
      name: 'Fulgur Service SRL',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Fulgur Service SRL',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/logo-fulgur-service-impresa-pulizie-parma.webp`,
      },
    },
    datePublished: post.date,
    url: `${BASE_URL}/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
  }
}


