export interface CaseStudy {
  id: string
  title: string
  description: string
  category: string
  beforeImage: string
  afterImage: string
  serviceSlug: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'carpet-office-cleaning',
    title: 'Lavaggio Moquette Ufficio Open Space',
    description: 'Aspirazione profonda e lavaggio di moquette in ufficio open space con forte accumulo di polvere e sporco da calpestio intenso. Risultato uniforme e igienizzato.',
    category: 'Trattamento Superfici',
    beforeImage: '/images/case-studies/primapulizia.webp',
    afterImage: '/images/case-studies/dopopulizia.webp',
    serviceSlug: 'trattamento-superfici',
  },
  {
    id: 'industrial-workshop-cleaning',
    title: 'Pulizia Pavimentazione Officina Industriale',
    description: 'Intervento di pulizia profonda in officina meccanica con lavasciuga industriale. Pavimento ripristinato da sporco oleoso, residui di lavorazione e polvere accumulata.',
    category: 'Pulizie Industriali',
    beforeImage: '/images/case-studies/prima-reale.webp',
    afterImage: '/images/case-studies/dopo-reale.webp',
    serviceSlug: 'pulizie-industriali',
  },
]
