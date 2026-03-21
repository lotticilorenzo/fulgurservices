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
    id: 'marble-restoration',
    title: 'Ripristino Marmo Hotel Elite',
    description: 'Trattamento di cristallizzazione su superficie opacizzata e graffiata. Risultato a specchio con protezione a lungo termine.',
    category: 'Trattamento Superfici',
    // [TODO/CLIENTE]: Sostituire con FOTO REALI del "Prima" in formato orizzontale
    beforeImage: '/images/case-studies/marble-before.png', 
    // [TODO/CLIENTE]: Sostituire con FOTO REALI del "Dopo" in formato orizzontale
    afterImage: '/images/case-studies/marble-after.png',
    serviceSlug: 'trattamento-superfici',
  },
  {
    id: 'industrial-degreasing',
    title: 'Sgrassatura Padiglione Logistico',
    description: 'Rimozione di residui gommosi, oli e sporco stratificato da pavimentazione industriale in cemento al quarzo.',
    category: 'Pulizie Industriali',
    // [TODO/CLIENTE]: Sostituire con FOTO REALI del "Prima" in formato orizzontale
    beforeImage: '/images/case-studies/industrial-before.png',
    // [TODO/CLIENTE]: Sostituire con FOTO REALI del "Dopo" in formato orizzontale
    afterImage: '/images/case-studies/industrial-after.png',
    serviceSlug: 'pulizie-industriali',
  },
]
