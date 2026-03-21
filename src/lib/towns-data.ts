export interface Town {
  slug: string
  name: string
  title: string
  heroTitle: string
  heroSub: string
  description: string
  metaTitle: string
  metaDescription: string
  keySector: string
  keyBenefit: string
}

export const TOWNS: Town[] = [
  {
    slug: 'fidenza',
    name: 'Fidenza',
    title: 'Pulizie Professionali Fidenza',
    heroTitle: 'Eccellenza nel Cleaning a Fidenza',
    heroSub: 'Servizi specializzati per uffici, negozi e il polo commerciale di Fidenza.',
    description: 'Fulgur Service opera a Fidenza offrendo soluzioni di pulizia certificate per il settore commerciale e terziario. La nostra vicinanza ci permette interventi rapidi e sopralluoghi gratuiti in 48 ore.',
    metaTitle: 'Impresa di Pulizie Fidenza | Uffici e Negozi — Fulgur Service',
    metaDescription: 'Cerchi un\'impresa di pulizie a Fidenza? Fulgur Service offre pulizie professionali per uffici, negozi e condomini a Fidenza. Sopralluogo gratuito in 48h.',
    keySector: 'Settore Commerciale & Outlet',
    keyBenefit: 'Pronto Intervento 48h',
  },
  {
    slug: 'salsomaggiore-terme',
    name: 'Salsomaggiore Terme',
    title: 'Pulizie Salsomaggiore Terme',
    heroTitle: 'Igiene Superiore a Salsomaggiore',
    heroSub: 'Protocolli sanitari e alberghieri per la città termale.',
    description: 'Sosteniamo il prestigio di Salsomaggiore con servizi di pulizia per hotel, spa e strutture sanitarie, utilizzando tecnologie a vapore 180° e prodotti eco-certificati.',
    metaTitle: 'Impresa di Pulizie Salsomaggiore Terme | Hotel e Spa — Fulgur Service',
    metaDescription: 'Servizi professionali di pulizia e sanificazione a Salsomaggiore Terme. Specializzati nel settore alberghiero e sanitario. Richiedi preventivo.',
    keySector: 'Alberghiero & Benessere',
    keyBenefit: 'Sanificazione Certificata',
  },
  {
    slug: 'collecchio',
    name: 'Collecchio',
    title: 'Pulizie Industriali Collecchio',
    heroTitle: 'Partner Tecnico a Collecchio',
    heroSub: 'Pulizie industriali e manutenzioni per il polo produttivo di Collecchio.',
    description: 'A Collecchio siamo il punto di riferimento per le industrie alimentari e meccaniche, garantendo standard HACCP e macchinari di ultima generazione per grandi superfici.',
    metaTitle: 'Impresa di Pulizie Collecchio | Industriale e Civile — Fulgur Service',
    metaDescription: 'Pulizie professionali a Collecchio per aziende e privati. Specialisti in pulizie industriali e manutenzioni integrate. Contattaci ora.',
    keySector: 'Industria Alimentare & Logistica',
    keyBenefit: 'Protocolli HACCP',
  }
]
