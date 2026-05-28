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
      eyebrow: '01 — PULIZIE PER UFFICI E AZIENDE · PARMA',
      headlinePrimary: 'Pulizie uffici a Parma',
      headlineAccent: 'fatte da professionisti veri.',
      decorativeText: 'B2B',
      subheadline:
        'Niente improvvisati che spariscono dopo due mesi. Operatori formati, macchinari professionali, un referente unico che risponde sempre. Sopralluogo gratuito in 24 ore.',
      heroImage: '/images/servizi/pulizie-uffici-aziendali-parma.webp',
      heroImageAlt: 'Pulizie professionali uffici aziendali a Parma',
      ctaPrimary: 'Richiedi sopralluogo gratuito',
      ctaSecondary: 'oppure chiama 338 316 0091',
      ctaPhoneRaw: '+393383160091',
      whatsappUrl:
        'https://wa.me/393383160091?text=Ciao%2C%20ho%20appena%20inviato%20la%20richiesta%20per%20le%20pulizie%20del%20mio%20ufficio',
      trustInline:
        '★ 4.9 su Google · 35 anni di esperienza · Operatori formati · Partner KilometroVerde',
    },
    trustBar: [
      {
        icon: 'ShieldCheck',
        title: 'PROFESSIONISTI SERI',
        desc: 'Operatori formati, macchinari professionali, metodo collaudato in 35 anni. Non l\'ultimo arrivato con uno straccio.',
      },
      {
        icon: 'Users',
        title: 'SEMPRE GLI STESSI',
        desc: 'La stessa squadra ogni settimana. Conosce la tua sede, i tuoi spazi, le tue abitudini. Zero turnover.',
      },
      {
        icon: 'Clock',
        title: 'QUANDO NON CI SEI',
        desc: 'Lavoriamo prima dell\'apertura o dopo la chiusura. I tuoi dipendenti trovano tutto pronto, ogni mattina.',
      },
    ],
    form: {
      eyebrow: '02 — RICHIEDI SOPRALLUOGO',
      h2: 'Parliamone. Sopralluogo gratuito in 24 ore.',
      subhead: 'Lasciaci due dati. Ti richiamiamo noi per capire di cosa hai bisogno, senza impegno.',
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
      urgencyMicrocopy: 'Ti richiamiamo entro 4 ore lavorative.',
      postFormReassurance: 'Sopralluogo gratuito · Nessun impegno · Risposta in 24h lavorative',
      submitLabel: 'Richiedi sopralluogo gratuito',
      submitLoadingLabel: 'Stiamo inviando…',
    },
    process: {
      eyebrow: '03 — COME LAVORIAMO',
      h2: 'Come iniziamo a lavorare insieme.',
      steps: [
        { num: 1, title: 'Ci senti', desc: 'Ti richiamiamo entro 4 ore lavorative. Capiamo subito cosa ti serve.' },
        { num: 2, title: 'Veniamo da te', desc: 'Sopralluogo gratuito in sede. Guardiamo gli spazi, ascoltiamo le tue priorità.' },
        { num: 3, title: 'Preventivo chiaro', desc: 'Per iscritto, voce per voce. Niente sorprese, niente costi nascosti.' },
        { num: 4, title: 'Si parte', desc: 'Squadra fissa, orari concordati, primo intervento in pochi giorni.' },
      ],
    },
    objections: {
      eyebrow: '04 — RISPOSTE CONCRETE',
      h2: 'Le domande che ti stai facendo.',
      items: [
        {
          num: '01',
          question: 'Come faccio a sapere che siete seri?',
          answer:
            'Trentacinque anni di lavoro, 21 recensioni verificate su Google, operatori formati e assicurati. Vieni a vedere chi siamo prima di decidere: il sopralluogo è gratis.',
        },
        {
          num: '02',
          question: 'Quanto mi costa davvero?',
          answer:
            'Preventivo scritto, voce per voce. Prodotti, materiali e attrezzatura sono inclusi. Quello che firmi è quello che paghi, ogni mese, senza ritocchi.',
        },
        {
          num: '03',
          question: 'Mi rallentate il lavoro in ufficio?',
          answer:
            'Mai. Entriamo prima delle 8 o dopo le 18, anche nel weekend. Tu apri la mattina e trovi tutto a posto, come se non fossimo passati.',
        },
      ],
    },
    finalCta: {
      h2: 'Smetti di pensare alle pulizie.',
      desc: 'Affidale a chi le fa da 35 anni. Un sopralluogo gratuito e capisci subito la differenza.',
      cta: 'Richiedi sopralluogo gratuito',
      trustLine: '★ 4.9 su Google · 35 anni di esperienza · Sopralluogo sempre gratuito',
    },
    socialProof: {
      eyebrow: 'COSA DICONO DI NOI',
      text: 'Da otto mesi puliscono i nostri uffici. Sempre la stessa squadra, sempre fuori orario, fattura puntuale ogni mese. Onestamente, non ci penso più.',
      author: 'Cliente verificato',
      location: 'Studio professionale · Parma',
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
      headlinePrimary: 'Sanificazione alimentare a Parma.',
      headlineAccent: 'Quando arriva il controllo, sei a posto.',
      decorativeText: 'HACCP',
      subheadline:
        'Dalla cucina del ristorante alla cella del salumificio. Sanifichiamo a norma HACCP e ti lasciamo il documento firmato ad ogni intervento. Il tuo registro è sempre pronto per ASL e NAS.',
      heroImage: '/images/gallery/sanificazione-salumificio-prosciutto-parma.webp',
      heroImageAlt: 'Sanificazione professionale settore alimentare a Parma',
      ctaPrimary: 'Richiedi sopralluogo gratuito',
      ctaSecondary: 'oppure chiama 338 316 0091',
      ctaPhoneRaw: '+393383160091',
      whatsappUrl:
        'https://wa.me/393383160091?text=Ciao%2C%20ho%20appena%20inviato%20la%20richiesta%20per%20la%20sanificazione%20HACCP%20del%20mio%20locale',
      trustInline:
        'Protocolli HACCP · Documento firmato ogni intervento · Prodotti food-grade · ★ 4.9 Google',
    },
    trustBar: [
      {
        icon: 'Certificate',
        title: 'REGISTRO SEMPRE IN ORDINE',
        desc: 'Documento firmato dopo ogni intervento: data, ore, prodotti, operatori. Il tuo archivio HACCP non ha buchi.',
      },
      {
        icon: 'ShieldCheck',
        title: 'PRONTO PER L\'ISPEZIONE',
        desc: 'Sanificazione conforme HACCP e Reg. CE 852/2004. Quando ASL o NAS bussano, hai tutto in regola.',
      },
      {
        icon: 'Clock',
        title: 'SENZA FERMARE LA PRODUZIONE',
        desc: 'Lavoriamo a fine turno, di notte o nel fermo. La tua attività non perde un\'ora.',
      },
    ],
    form: {
      eyebrow: '02 — RICHIEDI SOPRALLUOGO',
      h2: 'Parliamone. Sopralluogo gratuito in 24 ore.',
      subhead: 'Lasciaci due dati. Veniamo a vedere il tuo locale fuori orario, senza intralciare il servizio.',
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
      urgencyMicrocopy: 'Hai un controllo in arrivo? Ti richiamiamo entro 2 ore.',
      postFormReassurance: 'Sopralluogo gratuito · Discrezione totale · Risposta in 24h lavorative',
      submitLabel: 'Richiedi sopralluogo gratuito',
      submitLoadingLabel: 'Stiamo inviando…',
    },
    process: {
      eyebrow: '03 — COME LAVORIAMO',
      h2: 'Come mettiamo in regola il tuo locale.',
      steps: [
        { num: 1, title: 'Ci senti', desc: 'Ti richiamiamo entro 4 ore lavorative. Discrezione totale, zero disturbo al servizio.' },
        { num: 2, title: 'Sopralluogo', desc: 'Veniamo fuori orario. Guardiamo cucina, laboratorio, celle, magazzini.' },
        { num: 3, title: 'Protocollo su misura', desc: 'Ricevi un piano di sanificazione e un preventivo chiaro entro 24 ore.' },
        { num: 4, title: 'Interventi firmati', desc: 'Squadra fissa, ai tuoi orari, con il documento HACCP firmato ogni volta.' },
      ],
    },
    objections: {
      eyebrow: '06 — RISPOSTE CONCRETE',
      h2: 'Le domande che ti stai facendo.',
      items: [
        {
          num: '01',
          question: 'E se domani arriva un\'ispezione?',
          answer:
            'Sei coperto. Ogni intervento finisce con un documento firmato: data, ore, prodotti usati, operatori. Il tuo registro HACCP è sempre pronto da mostrare ad ASL e NAS.',
        },
        {
          num: '02',
          question: 'I prodotti sono sicuri per gli alimenti?',
          answer:
            'Sì. Usiamo solo Presidi Medico Chirurgici autorizzati dal Ministero della Salute, compatibili con il contatto alimentare. Le schede tecniche te le diamo su richiesta.',
        },
        {
          num: '03',
          question: 'Non posso fermare la produzione.',
          answer:
            'E non la fermi. Lavoriamo di notte, prima dell\'apertura, nei giorni di chiusura. Tu abbassi la serranda, noi entriamo e usciamo prima che riapri.',
        },
      ],
    },
    coverage: {
      eyebrow: '04 — DOVE INTERVENIAMO',
      h2: 'Conosciamo ogni angolo della Food Valley.',
      intro: 'Dalla trattoria al prosciuttificio. Sappiamo come si sanifica una cucina, una cella di stagionatura, un laboratorio. E sappiamo cosa cerca l\'ispettore.',
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
      h2: 'Pronti per ogni controllo. Sempre.',
      items: [
        {
          icon: 'FileText',
          title: 'DOCUMENTO FIRMATO',
          desc: 'Ad ogni intervento: data, ore, prodotti, operatori. Il tuo registro HACCP non ha mai un buco.',
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
      h2: 'Un salumificio di Parma, sanificato a norma.',
      desc: 'Intervento ricorrente in un prosciuttificio del territorio: pavimenti, attrezzature, celle di stagionatura. Documento HACCP firmato ad ogni passaggio. Quando è arrivato il controllo, era tutto in regola.',
      imageMain: '/images/gallery/sanificazione-salumificio-prosciutto-parma.webp',
      imageMainAlt: 'Sanificazione salumificio nel territorio di Parma',
      imageSecondary: '/images/gallery/sanificazione-vapore-ambienti-sensibili.webp',
      imageSecondaryAlt: 'Sanificazione a vapore di ambienti sensibili',
    },
    finalCta: {
      h2: 'Non aspettare l\'ispezione per metterti in regola.',
      desc: 'Un sopralluogo gratuito ti dice esattamente cosa serve. Poi ci pensiamo noi, ogni settimana.',
      cta: 'Richiedi sopralluogo gratuito',
      trustLine: '★ 4.9 su Google · Protocolli HACCP · Documento firmato ogni intervento',
    },
    socialProof: {
      eyebrow: 'COSA DICONO DI NOI',
      text: 'Sanificano il laboratorio ogni settimana, sempre fuori orario. Ogni volta ci lasciano il documento HACCP firmato. Quando è arrivata l\'ASL, eravamo a posto senza muovere un dito.',
      author: 'Cliente verificato',
      location: 'Pasticceria artigianale · Provincia di Parma',
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
