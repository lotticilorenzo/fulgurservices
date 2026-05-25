// lib/lp-data.ts — Single source of truth for PPC landing page content
export type LPVariant = 'cantiere' | 'sanitario'

export interface LPQualifierOption {
  value: string
  label: string
}

export interface LPStep {
  number: string
  title: string
  desc: string
}

export interface LPObjection {
  q: string
  a: string
}

export interface TrustBadge {
  label: string
  desc: string
  icon: 'Star' | 'ShieldCheck' | 'Clock' | 'Certificate' | 'TestTube'
}

export interface LPTestimonial {
  text: string
  author: string
}

export interface LeadPayload {
  variant: 'cantiere' | 'sanitario'
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
    decorativeText: string
    label: string
    headline1: string
    headline2: string
    subheadline: string
    ctaPrimary: string
    ctaPhone: string
    ctaPhoneRaw: string
    whatsappUrl: string
    image: {
      src: string
      alt: string
    }
  }
  trustBar: TrustBadge[]
  form: {
    qualifierLabel: string
    qualifierOptions: LPQualifierOption[]
    fieldMicrocopy: {
      nome: string
      telefono: string
      email: string
      qualifier: string
    }
    urgencyMicrocopy: string
    submitMicrocopy: string
    postFormReassurance: string
  }
  benefits: {
    title: string
    items: string[]
  }
  process: {
    title: string
    steps: LPStep[]
  }
  objections: {
    title: string
    items: LPObjection[]
  }
  testimonial: LPTestimonial
  finalCta: {
    headline: string
    sub: string
  }
  grazie: {
    headline: string
    sub: string
    nextSteps: string[]
    eventLabel: string
  }
}

export const LP_DATA: Record<LPVariant, LPData> = {
  cantiere: {
    variant: 'cantiere',
    meta: {
      title: 'Pulizie Fine Cantiere a Parma | Consegna in 48 Ore | Fulgur Service',
      description:
        'Rimuoviamo calce, cemento, silicone e polveri di levigatura. Sopralluogo gratuito a Parma e provincia, squadra in cantiere entro 48 ore lavorative.',
      canonical: 'https://www.fulgurservice.it/lp/fine-cantiere',
      ogImage: '/images/gallery/fine-cantiere-boutique-zegna-parma-1.webp',
    },
    hero: {
      eyebrow: '01 — PULIZIE EDILI · PARMA',
      decorativeText: '48',
      label: 'Pulizie Edili · Parma',
      headline1: 'Pulizie Fine Cantiere,',
      headline2: 'consegna in 48 ore.',
      subheadline:
        'Rimuoviamo calce, cemento, silicone e polveri di levigatura. Sopralluogo gratuito a Parma e provincia, squadra in cantiere entro 48 ore lavorative.',
      ctaPrimary: 'Richiedi sopralluogo gratuito',
      ctaPhone: 'Chiama: 338 316 0091',
      ctaPhoneRaw: '+393383160091',
      whatsappUrl:
        'https://wa.me/393383160091?text=Ciao%2C%20ho%20visto%20la%20vostra%20landing%20%5BCANTIERE%5D',
      image: {
        src: '/images/gallery/fine-cantiere-boutique-zegna-parma-1.webp',
        alt: 'Pulizia fine cantiere boutique a Parma — Fulgur Service rimuove calce e residui edilizi professionalmente',
      },
    },
    trustBar: [
      {
        label: 'Polizza RC/RCO attiva',
        icon: 'ShieldCheck',
        desc: 'Tutti i nostri operatori sono coperti da assicurazione professionale.',
      },
      {
        label: '4.9 su Google · 21 recensioni',
        icon: 'Star',
        desc: '21 recensioni verificate di clienti reali a Parma e provincia.',
      },
      {
        label: '35+ anni di esperienza',
        icon: 'Clock',
        desc: 'Esperienza ereditata da decenni di lavoro nel settore.',
      },
    ],
    form: {
      qualifierLabel: 'Metri quadri del cantiere',
      qualifierOptions: [
        { value: '~50mq', label: 'Circa 50 m²' },
        { value: '~100mq', label: 'Circa 100 m²' },
        { value: '~150mq', label: 'Circa 150 m²' },
        { value: '200mq+', label: '200 m² o più' },
      ],
      fieldMicrocopy: {
        nome: 'Solo il nome, non serve cognome',
        telefono: 'Solo per richiamarti. Mai per spam, mai per terzi.',
        email: 'Per ricevere conferma della tua richiesta',
        qualifier: 'Stima approssimativa, anche al ribasso',
      },
      urgencyMicrocopy: 'Settimana piena di consegne? Ti richiamiamo entro 4 ore lavorative.',
      submitMicrocopy: 'Ti richiamiamo entro 24 ore lavorative. Nessun impegno.',
      postFormReassurance: 'Sopralluogo gratuito · Nessun impegno · Risposta in 24h lavorative',
    },
    benefits: {
      title: 'Cosa rimuoviamo',
      items: [
        'Calce',
        'Cemento',
        'Stucco',
        'Silicone',
        'Polveri di levigatura',
        'Schizzi di pittura',
        'Adesivi',
      ],
    },
    process: {
      title: 'Come funziona',
      steps: [
        { number: '01', title: 'Ti richiamiamo', desc: 'Risposta entro 24 ore lavorative.' },
        { number: '02', title: 'Veniamo in cantiere', desc: 'Sopralluogo gratuito, anche entro pochi giorni.' },
        { number: '03', title: 'Ricevi il preventivo', desc: 'Per iscritto, dettagliato, trasparente.' },
        { number: '04', title: 'Interveniamo in 48h', desc: 'Squadra dedicata, immobile pronto alla consegna.' },
      ],
    },
    objections: {
      title: 'Risposte concrete',
      items: [
        {
          q: 'Avrò sorprese in fattura?',
          a: 'No. Preventivo scritto entro 24h dal sopralluogo. Quello che leggi è quello che paghi. Senza extra, senza voci nascoste.',
        },
        {
          q: 'E se rovinate qualcosa? Il cantiere è fragile.',
          a: 'Polizza RC/RCO attiva su tutti i nostri operatori. Eventuali danni accidentali sono coperti.',
        },
        {
          q: 'Lo sporco di cantiere è particolare.',
          a: 'Macchinari professionali Klindex e Nilfisk. Aspiratori industriali con filtri HEPA. Trent\'anni di pratica fra calce e silicone.',
        },
      ],
    },
    // TODO: sostituire con review reale estratta da Google Business Profile (4.9★ · 21 reviews).
    testimonial: {
      text: 'Hanno consegnato l\'appartamento pulito a un giorno dalla deadline del rogito. Squadra puntuale, zero sorprese in fattura. Da consigliare.',
      author: 'Privato · Quartiere Cittadella, Parma',
    },
    finalCta: {
      headline: 'Quanto tempo manca alla tua consegna?',
      sub: 'Chiamaci ora. Sopralluogo gratuito, preventivo in 24h.',
    },
    grazie: {
      headline: 'Richiesta ricevuta.',
      sub: 'Ti richiamiamo entro 24 ore lavorative.',
      nextSteps: [
        'Ti richiamiamo entro 24 ore lavorative',
        'Concordiamo il sopralluogo gratuito in cantiere',
        'Ricevi il preventivo scritto entro 24h dal sopralluogo',
      ],
      eventLabel: 'lp-cantiere',
    },
  },

  sanitario: {
    variant: 'sanitario',
    meta: {
      title: 'Sanificazione Studi Medici Parma | Protocolli HACCP | Fulgur Service',
      description:
        'Protocolli HACCP, Presidi Medico Chirurgici autorizzati Ministero della Salute, vapore a 180°. Sanifichiamo fuori orario visite, con schede prodotto sempre disponibili.',
      canonical: 'https://www.fulgurservice.it/lp/sanitario',
      ogImage: '/images/servizi/pulizie-aziendali-parma.webp',
    },
    hero: {
      eyebrow: '01 — SANIFICAZIONE SANITARIA · PARMA',
      decorativeText: 'HACCP',
      label: 'Sanificazione Sanitaria · Parma',
      headline1: 'Sanificazione Studi Medici',
      headline2: 'a Parma.',
      subheadline:
        'Protocolli HACCP, Presidi Medico Chirurgici autorizzati Ministero della Salute, vapore a 180°. Sanifichiamo fuori orario visite, con schede prodotto sempre disponibili.',
      ctaPrimary: 'Richiedi sopralluogo gratuito',
      ctaPhone: 'Chiama: 338 316 0091',
      ctaPhoneRaw: '+393383160091',
      whatsappUrl:
        'https://wa.me/393383160091?text=Ciao%2C%20ho%20visto%20la%20vostra%20landing%20%5BSANITARIO%5D',
      image: {
        src: '/images/servizi/pulizie-aziendali-parma.webp',
        alt: 'Sanificazione professionale con protocolli HACCP per studio medico a Parma — Fulgur Service',
      },
    },
    trustBar: [
      {
        label: 'Protocolli HACCP certificati',
        icon: 'Certificate',
        desc: 'Protocolli personalizzati per ogni tipo di struttura sanitaria.',
      },
      {
        label: 'Presidi Medico Chirurgici',
        icon: 'TestTube',
        desc: 'Prodotti autorizzati dal Ministero della Salute, schede tecniche su richiesta.',
      },
      {
        label: '4.9 su Google · 21 recensioni',
        icon: 'Star',
        desc: '21 recensioni verificate di clienti reali a Parma e provincia.',
      },
    ],
    form: {
      qualifierLabel: 'Tipo di struttura',
      qualifierOptions: [
        { value: 'studio-dentistico', label: 'Studio dentistico' },
        { value: 'studio-medico', label: 'Studio medico' },
        { value: 'ambulatorio', label: 'Ambulatorio' },
        { value: 'poliambulatorio', label: 'Poliambulatorio' },
        { value: 'clinica-privata', label: 'Clinica privata' },
        { value: 'altro', label: 'Altro' },
      ],
      fieldMicrocopy: {
        nome: 'Solo il nome, non serve cognome',
        telefono: 'Solo per richiamarti. Mai per spam, mai per terzi.',
        email: 'Per ricevere conferma della tua richiesta',
        qualifier: 'Ci serve per pre-preparare il protocollo giusto',
      },
      urgencyMicrocopy: 'Studio aperto solo certi giorni? Concordiamo l\'orario che funziona per te.',
      submitMicrocopy: 'Discrezione garantita. Ti contattiamo entro 24 ore lavorative.',
      postFormReassurance: 'Sopralluogo gratuito · Nessun impegno · Risposta in 24h lavorative',
    },
    benefits: {
      title: 'Cosa includiamo',
      items: [
        'Prodotti PMC registrati Ministero della Salute',
        'Vapore saturo 180° — zero chimica aggressiva',
        'Protocollo HACCP personalizzato per la struttura',
        'Operatori con DPI sanitari e patto di riservatezza',
        'Documentazione tecnica per ispezioni ASL',
      ],
    },
    process: {
      title: 'Come funziona',
      steps: [
        { number: '01', title: 'Ti contattiamo', desc: 'Risposta entro 24 ore lavorative.' },
        { number: '02', title: 'Veniamo nello studio', desc: 'Sopralluogo discreto fuori orario visite.' },
        { number: '03', title: 'Ricevi protocollo + preventivo', desc: 'Programma di sanificazione personalizzato.' },
        { number: '04', title: 'Interveniamo ai tuoi orari', desc: 'Squadra dedicata, zero interferenze con pazienti.' },
      ],
    },
    objections: {
      title: 'Risposte concrete',
      items: [
        {
          q: 'I vostri prodotti sono certificati per il sanitario?',
          a: 'Sì. Usiamo Presidi Medico Chirurgici autorizzati dal Ministero della Salute (Reg. UE 528/2012). Su richiesta forniamo le schede tecniche.',
        },
        {
          q: 'E la riservatezza? Lavoriamo con dati pazienti.',
          a: 'Tutti i nostri operatori firmano patto di riservatezza. Interveniamo negli orari di chiusura dello studio.',
        },
        {
          q: 'Gli orari devono incastrarsi con le mie visite.',
          a: 'Pianifichiamo gli interventi quando vuoi tu: sera, mattino presto, sabato pomeriggio. Tu decidi.',
        },
      ],
    },
    // TODO: sostituire con review reale estratta da Google Business Profile (4.9★ · 21 reviews).
    testimonial: {
      text: 'Lavorano in studio fuori orario visite, senza disturbare i pazienti. Forniscono le schede dei prodotti su richiesta. Discreti e seri.',
      author: 'Studio dentistico associato · Parma centro',
    },
    finalCta: {
      headline: 'I tuoi pazienti meritano un ambiente impeccabile.',
      sub: 'Chiamaci ora. Sopralluogo gratuito, preventivo in 24h.',
    },
    grazie: {
      headline: 'Richiesta ricevuta.',
      sub: 'Ti contattiamo entro 24 ore lavorative.',
      nextSteps: [
        'Ti contattiamo entro 24 ore lavorative',
        'Sopralluogo discreto fuori orario visite',
        'Ricevi il programma di sanificazione personalizzato',
      ],
      eventLabel: 'lp-sanitario',
    },
  },
}
