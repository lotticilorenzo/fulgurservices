// lib/seo.ts Fulgur Service
// Metadata completi e Structured Data da GEMINI.md sezione 7

const BASE_URL = 'https://www.fulgurservice.it'
const OG_DEFAULT = `${BASE_URL}/og/default.jpg`

export const METADATA = {
  home: {
    title: 'Fulgur Service Impresa di Pulizie Professionali a Parma e Provincia',
    description:
      'Fulgur Service impresa di pulizie professionali con sede a Parma, operativa in tutta Italia. Pulizie per uffici, industrie, condomini e studi medici. Sopralluogo gratuito in 24h.',
    keywords: 'impresa pulizie Parma, ditta pulizie Parma, pulizie uffici Parma, pulizie industriali Parma, sanificazione ambienti Parma, pulizie condomini Parma, impresa pulizie Italia, pulizie professionali Italia',
    openGraph: {
      title: 'Fulgur Service Impresa di Pulizie Professionali a Parma e in tutta Italia',
      description: 'Soluzioni di pulizia avanzate per aziende e privati. Sede a Parma, operativi in tutta Italia. 35 anni di esperienza, risultati garantiti.',
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
      '16 aree di intervento: pulizie aziendali, industriali, sanitarie, salumifici, condomini, hotel, trattamento superfici e molto altro. Sede a Parma, operativi in tutta Italia.',
    openGraph: {
      title: 'Tutti i Servizi | Fulgur Service Parma',
      description: '16 aree di intervento con team specializzato e macchinari professionali.',
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
    title: 'Richiedi Preventivo Gratuito | Sopralluogo in 24h Fulgur Service',
    description:
      'Richiedi un sopralluogo gratuito. Preventivo personalizzato in 48 ore, nessun impegno. Fulgur Service, impresa di pulizie a Parma.',
    openGraph: {
      title: 'Preventivo Gratuito | Fulgur Service',
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
      title: 'Contatti | Fulgur Service',
      description: '+39 338 316 0091 · fulgurservice@gmail.com · Parma, Italia.',
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
  sameAs: ['https://www.instagram.com/fulgurservicesrl_/'],
  priceRange: '€€',
  areaServed: [
    { '@type': 'City', name: 'Parma', addressCountry: 'IT' },
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
    'Pulizie industriali',
    'Pulizie uffici e ambienti aziendali',
    'Sanificazione HACCP',
    'Pulizie condomini e parti comuni',
    'Housekeeping alberghiero',
    'Trattamento e cristallizzazione del marmo',
    'Pulizia pannelli fotovoltaici con acqua demineralizzata',
    'Pulizie fine cantiere',
    'Pulizia vetrate in altezza',
    'Sanificazione con vapore saturo a 180 gradi',
    'Pulizie civili e domestiche',
    'Pulizia cantieri navali e imbarcazioni',
    'Pulizia facciate e rimozione graffiti',
    'Sanificazione strutture sportive e palestre',
    'Pulizie locali notturni e discoteche',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '21',
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
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image.startsWith('http') ? post.image : `${BASE_URL}${post.image}`,
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


