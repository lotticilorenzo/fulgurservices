// lib/lp-data.ts — Single source of truth for PPC landing page content
export type LPVariant = 'uffici' | 'alimentare'

export const LP_SLUG_MAP: Record<LPVariant, string> = {
  uffici: 'pulizie-uffici',
  alimentare: 'settore-alimentare',
}

export interface LeadPayload {
  variant: 'uffici' | 'alimentare'
  nome: string
  telefono: string
  email: string
  qualifier: string
  utm?: {
    source?: string
    medium?: string
    campaign?: string
    content?: string
    term?: string
  }
  userAgent?: string
}

export interface LPData {
  variant: LPVariant
  meta: {
    title: string
    description: string
    canonical: string
    ogImage: string
  }
  hero: {
    eyebrow: string
    headlinePrimary: string
    headlineAccent: string
    decorativeText: string
    subheadline: string
    heroImage: string
    heroImageAlt: string
    ctaPrimary: string
    ctaSecondary: string
    ctaPhoneRaw: string
    whatsappUrl: string
    trustInline: string
  }
  trustBar: Array<{
    icon: 'Users' | 'Clock' | 'Receipt' | 'Certificate' | 'TestTube' | 'Star' | 'ShieldCheck'
    title: string
    desc: string
  }>
  form: {
    eyebrow: string
    h2: string
    subhead: string
    fields: {
      qualifier: {
        label: string
        options: string[]
      }
    }
    fieldMicrocopy: {
      nome: string
      telefono: string
      email: string
      qualifier: string
    }
    urgencyMicrocopy: string
    postFormReassurance: string
    submitLabel: string
    submitLoadingLabel: string
  }
  process: {
    eyebrow: string
    h2: string
    steps: Array<{ num: number; title: string; desc: string }>
  }
  objections: {
    eyebrow: string
    h2: string
    items: Array<{ num: string; question: string; answer: string }>
  }
  credentials?: {
    eyebrow: string
    h2: string
    items: string[]
  }
  coverage?: {
    eyebrow: string
    h2: string
    intro: string
    categories: Array<{ icon: string; label: string }>
  }
  guarantees?: {
    eyebrow: string
    h2: string
    items: Array<{ icon: string; title: string; desc: string }>
  }
  caseStudy?: {
    eyebrow: string
    h2: string
    desc: string
    imageMain: string
    imageMainAlt: string
    imageSecondary: string
    imageSecondaryAlt: string
  }
  finalCta: {
    h2: string
    desc: string
    cta: string
    trustLine: string
  }
  socialProof: {
    eyebrow: string
    text: string
    author: string
    location: string
    verified: boolean
  }
  thankYou: {
    h1: string
    steps: string[]
    ctaWhatsAppText: string
  }
}

export const LP_DATA: Record<LPVariant, LPData> = {
  uffici: {
    variant: 'uffici',
    meta: {
      title: 'Pulizie Uffici a Parma | Fulgur Service',
      description:
        'Pulizie professionali per uffici a Parma. Operatori sempre uguali, orari extra-lavoro, fattura regolare. Sopralluogo gratuito in 24h.',
      canonical: 'https://www.fulgurservice.it/lp/pulizie-uffici',
      ogImage: '/images/servizi/pulizie-uffici-aziendali-parma.webp',
    },
    hero: {
      eyebrow: '01 — PULIZIE AZIENDALI · PARMA',
      headlinePrimary: 'Pulizie Uffici a Parma,',
      headlineAccent: 'sempre la stessa squadra.',
      decorativeText: 'B2B',
      subheadline:
        "Pulizie ricorrenti per uffici, studi professionali e sedi aziendali. Operatori formati, orari fuori dall'attività, fattura regolare e referente unico. Sopralluogo gratuito a Parma e provincia.",
      heroImage: '/images/servizi/pulizie-uffici-aziendali-parma.webp',
      heroImageAlt: 'Pulizie professionali uffici aziendali a Parma',
      ctaPrimary: 'Richiedi sopralluogo gratuito',
      ctaSecondary: 'oppure chiama 338 316 0091',
      ctaPhoneRaw: '+393383160091',
      whatsappUrl:
        'https://wa.me/393383160091?text=Ciao%2C%20ho%20appena%20inviato%20la%20richiesta%20per%20le%20pulizie%20del%20mio%20ufficio',
      trustInline:
        '★ 4.9 Google · 21 recensioni · 35+ anni di esperienza · Partner KilometroVerde',
    },
    trustBar: [
      {
        icon: 'Users',
        title: 'SQUADRA FISSA',
        desc: 'Gli stessi operatori in ufficio ogni intervento. Niente turnover, conoscono la tua sede e i tuoi spazi.',
      },
      {
        icon: 'Clock',
        title: 'ORARI FUORI ATTIVITÀ',
        desc: "Interveniamo prima dell'apertura o dopo la chiusura. La produttività dei tuoi dipendenti non si ferma.",
      },
      {
        icon: 'Receipt',
        title: 'FATTURA REGOLARE',
        desc: 'Contratto trasparente, fattura mensile elettronica, referente unico per ogni dubbio o richiesta.',
      },
    ],
    form: {
      eyebrow: '02 — RICHIEDI SOPRALLUOGO',
      h2: 'Una telefonata in 24 ore. Sopralluogo gratuito.',
      subhead: 'Lascia i tuoi dati. Ti contattiamo per fissare un sopralluogo nella tua sede.',
      fields: {
        qualifier: {
          label: 'Tipo di sede',
          options: [
            'Ufficio piccolo (fino a 10 dipendenti)',
            'Ufficio medio (10–30 dipendenti)',
            'Ufficio grande (oltre 30 dipendenti)',
            'Studio professionale',
            'Sede multipla',
            'Altro',
          ],
        },
      },
      fieldMicrocopy: {
        nome: 'Solo nome e cognome',
        telefono: 'Solo per richiamarti. Mai per spam, mai per terzi.',
        email: 'Per ricevere conferma della tua richiesta',
        qualifier: 'Ci aiuta a stimare costi e frequenze giuste',
      },
      urgencyMicrocopy: 'Settimana piena? Ti richiamiamo entro 4 ore lavorative.',
      postFormReassurance: 'Sopralluogo gratuito · Nessun impegno · Risposta in 24h lavorative',
      submitLabel: 'Richiedi sopralluogo gratuito',
      submitLoadingLabel: 'Stiamo inviando…',
    },
    process: {
      eyebrow: '03 — COME LAVORIAMO',
      h2: 'Dal primo contatto al contratto, in 4 passi.',
      steps: [
        { num: 1, title: 'Ti contattiamo', desc: 'Risposta entro 24 ore lavorative dal momento della tua richiesta.' },
        { num: 2, title: 'Veniamo in ufficio', desc: 'Sopralluogo gratuito nei tuoi spazi per capire metratura, frequenze e priorità.' },
        { num: 3, title: 'Ricevi il preventivo', desc: 'Per iscritto, dettagliato per voce, con frequenze e costi mensili trasparenti.' },
        { num: 4, title: 'Partiamo subito', desc: 'Squadra dedicata, orari concordati, primo intervento entro pochi giorni.' },
      ],
    },
    objections: {
      eyebrow: '04 — RISPOSTE CONCRETE',
      h2: 'Quello che ti chiedi prima di affidarci la sede.',
      items: [
        {
          num: '01',
          question: 'Avrò sempre gli stessi operatori?',
          answer:
            'Sì. La nostra logica è opposta al turnover delle grandi imprese: la stessa squadra conosce la tua sede, sa dove tieni cosa, rispetta il tuo modo di lavorare.',
        },
        {
          num: '02',
          question: 'E i costi? Mi aspetto sorprese.',
          answer:
            'Preventivo scritto, voce per voce. Il prezzo include prodotti, materiali di consumo e attrezzatura. Quello che firmi è quello che paghi.',
        },
        {
          num: '03',
          question: 'Le pulizie interferiscono con il lavoro?',
          answer:
            "No. Lavoriamo prima delle 8 o dopo le 18, weekend se preferisci. I tuoi dipendenti entrano la mattina e trovano un ambiente pronto.",
        },
      ],
    },
    finalCta: {
      h2: 'Una sede pulita vale ogni euro che spendi.',
      desc: 'Un sopralluogo gratuito ti dice quanto costa davvero. Senza impegno, senza pressioni.',
      cta: 'Richiedi sopralluogo gratuito',
      trustLine: '★ 4.9 su Google · 21 recensioni · 35 anni di esperienza',
    },
    socialProof: {
      eyebrow: 'COSA DICONO DI NOI',
      text: 'Gestiscono la pulizia dei nostri uffici da 8 mesi. Stessa squadra ogni settimana, sempre fuori orario, fattura puntuale. Non ci penso più.',
      author: 'Studio commercialisti associato',
      location: 'Centro storico, Parma',
      verified: true,
    },
    thankYou: {
      h1: 'Abbiamo ricevuto la tua richiesta.',
      steps: [
        'Ti contattiamo entro 4 ore lavorative al numero che ci hai lasciato',
        'Fissiamo un sopralluogo gratuito nella tua sede',
        'Ricevi un preventivo dettagliato entro 24 ore dal sopralluogo',
      ],
      ctaWhatsAppText: 'Ciao, ho appena inviato la richiesta per le pulizie del mio ufficio',
    },
  },

  alimentare: {
    variant: 'alimentare',
    meta: {
      title: 'Sanificazione Settore Alimentare a Parma | Fulgur Service',
      description:
        'Sanificazione HACCP per ristoranti, salumifici, caseifici e industria alimentare a Parma. Prodotti food-grade, documentazione firmata, fuori orario. Sopralluogo gratuito.',
      canonical: 'https://www.fulgurservice.it/lp/settore-alimentare',
      ogImage: '/images/gallery/sanificazione-salumificio-prosciutto-parma.webp',
    },
    hero: {
      eyebrow: '01 — SANIFICAZIONE HACCP · FOOD VALLEY PARMA',
      headlinePrimary: 'Sanificazione Settore Alimentare a Parma,',
      headlineAccent: 'dal ristorante al salumificio.',
      decorativeText: 'HACCP',
      subheadline:
        'Sanifichiamo cucine, laboratori, celle e ambienti di produzione per ristoranti, pasticcerie, salumifici e caseifici. Protocolli HACCP, prodotti food-grade, intervento fuori orario. Parma e provincia.',
      heroImage: '/images/gallery/sanificazione-salumificio-prosciutto-parma.webp',
      heroImageAlt: 'Sanificazione professionale settore alimentare a Parma',
      ctaPrimary: 'Richiedi sopralluogo gratuito',
      ctaSecondary: 'oppure chiama 338 316 0091',
      ctaPhoneRaw: '+393383160091',
      whatsappUrl:
        'https://wa.me/393383160091?text=Ciao%2C%20ho%20appena%20inviato%20la%20richiesta%20per%20la%20sanificazione%20HACCP%20del%20mio%20locale',
      trustInline:
        'Protocolli HACCP certificati · Presidi Medico Chirurgici · ★ 4.9 Google · 21 recensioni',
    },
    trustBar: [
      {
        icon: 'Certificate',
        title: 'PROTOCOLLI HACCP',
        desc: 'Procedure operative scritte, conformi alle linee guida del Reg. CE 852/2004. Documentazione firmata e archiviabile.',
      },
      {
        icon: 'TestTube',
        title: 'PRODOTTI FOOD-GRADE',
        desc: 'Presidi Medico Chirurgici autorizzati dal Ministero della Salute (Reg. UE 528/2012). Schede tecniche su richiesta.',
      },
      {
        icon: 'Clock',
        title: 'FUORI ORARIO',
        desc: "Interveniamo prima dell'apertura o dopo la chiusura. Servizio mai bloccato, ispezioni sempre coperte.",
      },
    ],
    form: {
      eyebrow: '02 — RICHIEDI SOPRALLUOGO',
      h2: 'Una telefonata in 24 ore. Sopralluogo gratuito.',
      subhead: 'Lascia i tuoi dati. Ti contattiamo per fissare un sopralluogo fuori orario di servizio.',
      fields: {
        qualifier: {
          label: 'Tipo di attività',
          options: [
            'Ristorante / Trattoria',
            'Bar / Caffetteria',
            'Pasticceria / Gelateria',
            'Pizzeria',
            'Salumificio / Prosciuttificio',
            'Caseificio',
            'Pastificio / Laboratorio',
            'Mensa / Catering',
            'Altro',
          ],
        },
      },
      fieldMicrocopy: {
        nome: 'Solo nome e cognome',
        telefono: 'Solo per richiamarti. Mai per spam, mai per terzi.',
        email: 'Per ricevere conferma della tua richiesta',
        qualifier: 'Ci aiuta a preparare il protocollo HACCP giusto',
      },
      urgencyMicrocopy: 'ASL, NAS e audit di filiera non danno preavviso. Ti richiamiamo entro 2 ore.',
      postFormReassurance: 'Sopralluogo gratuito · Discrezione totale · Risposta in 24h lavorative',
      submitLabel: 'Richiedi sopralluogo gratuito',
      submitLoadingLabel: 'Stiamo inviando…',
    },
    process: {
      eyebrow: '03 — COME LAVORIAMO',
      h2: "Dal sopralluogo all'intervento ricorrente, in 4 passi.",
      steps: [
        { num: 1, title: 'Ti contattiamo', desc: 'Risposta entro 24 ore lavorative. Discrezione totale, nessun disturbo durante il servizio.' },
        { num: 2, title: 'Sopralluogo HACCP', desc: 'Veniamo nel tuo locale fuori orario di apertura per valutare cucina, sala, magazzini.' },
        { num: 3, title: 'Protocollo + preventivo', desc: 'Ricevi protocollo di sanificazione personalizzato + preventivo dettagliato entro 24h.' },
        { num: 4, title: 'Interventi puntuali', desc: 'Squadra dedicata, ai tuoi orari, con documento firmato dopo ogni intervento.' },
      ],
    },
    objections: {
      eyebrow: '06 — RISPOSTE CONCRETE',
      h2: 'Quello che ti chiedi prima di chiamarci.',
      items: [
        {
          num: '01',
          question: 'I prodotti sono compatibili con il food?',
          answer:
            'Sì. Usiamo Presidi Medico Chirurgici autorizzati dal Ministero della Salute (Reg. UE 528/2012). Su richiesta forniamo schede tecniche di ogni prodotto.',
        },
        {
          num: '02',
          question: "E se arriva un'ispezione?",
          answer:
            "Sei coperto. Dopo ogni intervento rilasciamo un documento firmato con data, ore, prodotti utilizzati e operatori. Archivio HACCP pronto da mostrare.",
        },
        {
          num: '03',
          question: 'I miei orari sono difficili da incastrare.',
          answer:
            "Lavoriamo quando vuoi tu: notte, prima dell'apertura, dopo la chiusura, giorni di riposo. Tu chiudi la serranda, noi entriamo.",
        },
      ],
    },
    coverage: {
      eyebrow: '04 — DOVE INTERVENIAMO',
      h2: 'Tutta la filiera alimentare di Parma.',
      intro: "Dalla ristorazione all'industria di trasformazione. Conosciamo gli ambienti, i ritmi e i vincoli di ogni realtà food.",
      categories: [
        { icon: 'ForkKnife', label: 'Ristoranti e trattorie' },
        { icon: 'Coffee', label: 'Bar e caffetterie' },
        { icon: 'Oven', label: 'Pasticcerie e gelaterie' },
        { icon: 'Fire', label: 'Pizzerie' },
        { icon: 'Factory', label: 'Salumifici e prosciuttifici' },
        { icon: 'Cheese', label: 'Caseifici' },
        { icon: 'Flask', label: 'Pastifici e laboratori' },
        { icon: 'Warehouse', label: 'Magazzini e celle frigorifere' },
        { icon: 'Tray', label: 'Mense e catering' },
      ],
    },
    guarantees: {
      eyebrow: '05 — COSA GARANTIAMO',
      h2: 'Pronti per ogni controllo, ogni giorno.',
      items: [
        {
          icon: 'FileText',
          title: 'DOCUMENTO FIRMATO',
          desc: 'Ad ogni intervento rilasciamo un documento con data, ore, prodotti e operatori. Il tuo registro HACCP sempre in ordine.',
        },
        {
          icon: 'TestTube',
          title: 'PRODOTTI FOOD-GRADE',
          desc: 'Detergenti e disinfettanti compatibili con il contatto alimentare. Schede tecniche sempre disponibili.',
        },
        {
          icon: 'ShieldCheck',
          title: 'PRONTI PER ASL E NAS',
          desc: 'Sanificazione conforme HACCP e Reg. CE 852/2004. Quando arriva il controllo, sei a posto.',
        },
        {
          icon: 'Clock',
          title: 'FUORI ORARIO',
          desc: 'Interveniamo a fine turno, di notte o durante il fermo produzione. La tua attività non si ferma mai.',
        },
      ],
    },
    caseStudy: {
      eyebrow: '07 — INTERVENTI REALI',
      h2: 'Sanificazione salumificio nel territorio di Parma.',
      desc: 'Intervento ricorrente in un salumificio parmense. Pavimenti, attrezzature, celle di stagionatura. Documentazione HACCP firmata ad ogni passaggio.',
      imageMain: '/images/gallery/sanificazione-salumificio-prosciutto-parma.webp',
      imageMainAlt: 'Sanificazione salumificio nel territorio di Parma',
      imageSecondary: '/images/gallery/sanificazione-vapore-ambienti-sensibili.webp',
      imageSecondaryAlt: 'Sanificazione a vapore di ambienti sensibili',
    },
    finalCta: {
      h2: "L'ispezione può arrivare domani. Tu sei pronto?",
      desc: 'Un sopralluogo gratuito ti dice esattamente cosa serve per essere a norma. Nessuna pressione, nessun impegno.',
      cta: 'Richiedi sopralluogo gratuito',
      trustLine: '★ 4.9 su Google · 21 recensioni · Protocolli HACCP certificati',
    },
    socialProof: {
      eyebrow: 'COSA DICONO DI NOI',
      text: "Sanificano il laboratorio ogni settimana fuori orario. Ad ogni intervento lasciano il documento HACCP firmato. Quando è arrivata l'ispezione ASL eravamo a posto.",
      author: 'Pasticceria artigianale',
      location: 'Provincia di Parma',
      verified: true,
    },
    thankYou: {
      h1: 'Abbiamo ricevuto la tua richiesta.',
      steps: [
        'Ti contattiamo entro 4 ore lavorative al numero che ci hai lasciato',
        'Fissiamo un sopralluogo fuori orario nel tuo locale',
        'Ricevi protocollo HACCP personalizzato + preventivo entro 24h',
      ],
      ctaWhatsAppText: 'Ciao, ho appena inviato la richiesta per la sanificazione HACCP del mio locale',
    },
  },
}
