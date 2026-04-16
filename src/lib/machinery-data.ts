export interface MachinerySpec {
  label: string
  value: string
  unit?: string
}

export interface MachineBrand {
  id: string
  name: string
  description: string
  usage: string
  specs: MachinerySpec[]
  image: string
}

export const MACHINERY_DATA: MachineBrand[] = [
  {
    id: 'klindex',
    name: 'Klindex',
    description: 'Eccellenza italiana nel trattamento marmo e ripristino superfici.',
    usage: 'Levigatura, lucidatura e cristallizzazione marmo, granito, cemento e pietre naturali.',
    image: '/images/brands/klindex.webp',
    specs: [
      { label: 'Sistema', value: 'Planetario Monofase/Trifase' },
      { label: 'Velocità', value: '300-1300', unit: 'RPM' },
      { label: 'Pressione', value: 'Variabile a contrappesi' },
      { label: 'Settore', value: 'Restauro & Design' },
    ]
  },
  {
    id: 'lindhaus',
    name: 'Lindhaus',
    description: 'Specialisti mondiali nella filtrazione e pulizia sanitaria.',
    usage: 'Sanificazione ambienti medici, cliniche, hotel 5 stelle e uffici ad alto traffico.',
    image: '/images/macchinari/scopa-elettrica-lindhaus.webp',
    specs: [
      { label: 'Filtrazione', value: 'HEPA S-Class Certificata' },
      { label: 'Efficienza', value: '99.97% a 0.3 micron' },
      { label: 'Aspirazione', value: 'Doppio Motore Hi-Power' },
      { label: 'Settore', value: 'Sanitario & Pharma' },
    ]
  },
  {
    id: 'nilfisk',
    name: 'Nilfisk / CFM',
    description: 'Soluzioni industriali per la gestione di polveri sottili e grandi superfici.',
    usage: 'Pulizia capannoni, magazzini logistici, industrie meccaniche e asportazione polveri edili.',
    image: '/images/brands/nilfisk.webp',
    specs: [
      { label: 'Portata Aria', value: '8100', unit: 'L/min' },
      { label: 'Depressione', value: '250', unit: 'mBar' },
      { label: 'Capacità', value: '100', unit: 'Litri' },
      { label: 'Settore', value: 'Industriale & Logistica' },
    ]
  },
  {
    id: 'vapor-systems',
    name: 'Vapor Systems',
    description: 'Generazione continua di vapore saturo a 180° per igienizzazione chimica-free.',
    usage: 'Sanificazione cucine industriali, bagni pubblici, aree sanitarie e rimozione allergeni.',
    image: '/images/macchinari/sistema-gioel-vapore.svg',
    specs: [
      { label: 'Temperatura', value: '180', unit: '°C' },
      { label: 'Pressione', value: '10', unit: 'Bar' },
      { label: 'Igienizzazione', value: '99.9% Batteri/Virus' },
      { label: 'Settore', value: 'Ecologico & FOOD' },
    ]
  },
  {
    id: 'ecolabel',
    name: 'EU Ecolabel',
    description: 'Il marchio di qualità ecologica dell\'Unione Europea (Ecolabel UE) premia i prodotti e i servizi che hanno un basso impatto ambientale durante tutto il loro ciclo di vita.',
    usage: 'Certificazione di eccellenza per i detergenti e i processi di pulizia a basso impatto ambientale utilizzati da Fulgur Service.',
    image: '/images/macchinari/ecolabel.webp',
    specs: [
      { label: 'Certificazione', value: 'EU Ecolabel' },
      { label: 'Impatto Materie Prime', value: 'Minimo & Biodegradabile' },
      { label: 'Efficacia Pulizia', value: 'Testata & Garantita' },
      { label: 'Settore', value: 'Sostenibilità & Ambiente' },
    ]
  }
]
