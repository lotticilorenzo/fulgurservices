// lib/services-data.ts Fulgur Service

export interface Service {
  id: string
  slug: string
  title: string
  shortDesc: string
  longDesc: string
  icon: string  // nome icona @phosphor-icons
  featured: boolean
  keywords: string[]
  benefits: string[]
  sectors: string[]
  metaTitle: string
  metaDescription: string
  image: string
  imageAlt?: string
  faq?: { q: string; a: string }[]
  relatedSlugs?: string[]
}

export interface IntegratedService {
  title: string
  desc: string
  icon: string
  image?: string
}

export const SERVICES: Service[] = [
  {
    id: '01',
    slug: 'pulizie-aziendali',
    title: 'Pulizie Aziendali',
    shortDesc: 'Elimina gli allergeni e migliora il benessere del team. Servizio di pulizia per uffici, negozi e studi professionali a Parma, senza sorprese in fattura.',
    longDesc: `Quasi sempre, quando facciamo un sopralluogo in un ufficio a Parma, la prima cosa che ci mostrano è il pavimento. Capisco: è quello che si vede. Ma quello su cui ci soffermiamo sono le griglie dell'aria condizionata, i bordi delle scrivanie, gli spazi sotto le sedute. Sono i posti che le pulizie rapide saltano per abitudine e dove si accumula la polvere che poi tutti respirano.

Molti clienti ci dicono che prima di noi cambiavano ditta ogni sei mesi. Il motivo, quasi sempre, era lo stesso: lavoro fatto di fretta, qualità che calava dopo le prime settimane, e nessuno con cui parlare davvero. Noi abbiamo scelto un approccio diverso: un referente unico che conosce i vostri spazi, dai palazzi storici del quartiere Oltretorrente agli uffici moderni della zona Repubblica.

Un ambiente di lavoro pulito non è un lusso, è uno strumento di produttività. Ridurre gli allergeni e l'accumulo di polvere significa concretamente ridurre l'assenteismo e migliorare la concentrazione del team. È proprio questo tipo di cura quotidiana che rende Fulgur Service il partner di fiducia per le pulizie professionali a Parma e provincia.`,
    icon: 'Buildings',
    featured: true,
    keywords: ['pulizie uffici Parma', 'pulizie aziendali Parma', 'pulizie negozi Parma', 'sanificazione postazioni lavoro', 'impresa pulizie studi professionali Parma'],
    benefits: [
      'Spolveratura postazioni PC con panni antistatici per tastiere e schermi',
      'Igienizzazione battericida dei bagni aziendali a ogni singolo intervento',
      'Interventi fuori orario lavorativo per non interferire con l\'operatività',
      'Contratto mensile a prezzo fisso: pianificazione finanziaria chiara',
      'Aspiratori industriali con filtri HEPA per la massima qualità dell\'aria',
    ],
    sectors: ['Uffici direzionali e open space', 'Negozi, boutique e showroom di Parma centro', 'Banche e studi legali', 'Spazi co-working e hub digitali'],
    metaTitle: 'Pulizie Uffici Parma | Igiene Professionale e Benessere Team | Fulgur Service',
    metaDescription: 'Trasforma il tuo ufficio a Parma in un ambiente sano e produttivo. Fulgur Service offre pulizie professionali con referente unico e prodotti certificati. Sopralluogo gratuito.',
    image: '/images/servizi/pulizie-aziendali-parma.webp',
    imageAlt: 'Ufficio di rappresentanza a Parma centro (zona Repubblica) perfettamente igienizzato da Fulgur Service',
    faq: [
      {
        q: 'Quanto costano le pulizie di un ufficio a Parma?',
        a: 'Il costo dipende dalla metratura, dal numero di postazioni e dalla frequenza desiderata. Lavoriamo esclusivamente con preventivi a corpo fissi stabiliti dopo un sopralluogo: nessuna sorpresa in fattura e massima trasparenza.',
      },
      {
        q: 'Ogni quanto consigliate la pulizia professionale per un ufficio?',
        a: 'Per spazi con alta densità di personale consigliamo almeno due interventi settimanali. Un singolo studio professionale può essere gestito con un intervento a settimana, programmando pulizie di fondo mensili.',
      },
    ],
  },
  {
    id: '02',
    slug: 'pulizie-industriali',
    title: 'Pulizie Industriali',
    shortDesc: 'Lavasciuga uomo a bordo, rimozione oli e grassi specialistica. Per capannoni e magazzini nella zona SPIP e nell\'intera provincia di Parma.',
    longDesc: `La pulizia industriale non è una versione "più grande" delle pulizie civili. È manutenzione tecnica degli asset aziendali. Un pavimento industriale unto o coperto di polvere di cartone non è solo brutto: è un rischio di infortuni concreto e una potenziale causa di malfunzionamento dei mezzi di movimentazione.

Interveniamo nei poli logistici di Fontevivo, nei capannoni della zona industriale SPIP e nei distretti meccanici tra Noceto e Collecchio. Utilizziamo lavasciuga uomo a bordo ad alte prestazioni capaci di pulire e asciugare centinaia di metri quadri in pochi minuti, garantendo corsie sicure e immediatamente percorribili.

La nostra squadra è formata per operare nel rispetto del D.Lgs 81/08 sulla sicurezza. Non siamo solo fornitori, siamo un supporto per il vostro RSPP nel mantenere gli standard di sicurezza e igiene richiesti dalle certificazioni ISO e BRC. Dove c'è un capannone che deve performare al massimo, Fulgur Service porta il metodo e la tecnologia giusti.`,
    icon: 'Factory',
    featured: true,
    keywords: ['pulizie industriali Parma', 'pulizia capannoni Parma', 'lavasciuga industriale Parma', 'pulizia magazzini logistici', 'rimozione oli pavimenti industriali', 'pulizie capannoni industriali Parma', 'pulizia officine Parma'],
    benefits: [
      'Utilizzo di lavasciuga uomo a bordo per grandi metrature ed elevata efficacia',
      'Rimozione specialistica di oli, grassi e residui di lavorazione meccanica',
      'Interventi programmati in orari notturni o weekend per zero fermo produzione',
      'Aspirazione polveri sottili e pulizia tecnica di scaffalature e impianti',
      'Report post-intervento dettagliato per audit di qualità e ispezioni',
    ],
    sectors: ['Capannoni produttivi e magazzini logistici', 'Officine meccaniche e distretti metalmeccanici', 'Stabilimenti della Food Valley parmense', 'Centri di distribuzione e poli interportuali'],
    metaTitle: 'Pulizie Industriali Parma | Manutenzione Capannoni e Logistica | Fulgur Service',
    metaDescription: 'Efficienza e sicurezza per il tuo stabilimento a Parma. Fulgur Service è specializzata in pulizie industriali pesanti con lavasciuga uomo a bordo. Sopralluogo immediato.',
    image: '/images/servizi/pulizie-industriali-parma.webp',
    imageAlt: 'Igiene industriale meccanizzata con lavasciuga uomo a bordo in un magazzino della zona SPIP di Parma',
    faq: [
      {
        q: 'Potete intervenire senza fermare la nostra produzione?',
        a: 'Assolutamente sì. Pianifichiamo gli interventi nei momenti di cambio turno, di notte o durante il weekend proprio per garantire la continuità operativa del vostro stabilimento.',
      },
      {
        q: 'Quanto costa pulire un capannone industriale a Parma?',
        a: 'Il prezzo varia in base allo sporco da trattare e alla regolarità degli interventi. Effettuiamo sempre un sopralluogo tecnico gratuito per valutare i macchinari necessari e fornire un preventivo fisso entro 24 ore.',
      },
    ],
  },
  {
    id: '03',
    slug: 'settore-sanitario',
    title: 'Settore Sanitario',
    shortDesc: 'Igiene clinica certificata HACCP con Presidi Medico Chirurgici. Sanificazione per cliniche, poliambulatori e studi dentistici a Parma.',
    longDesc: `In ambito sanitario, la parola "pulito" è insufficiente. Parliamo di ambienti che richiedono igiene clinica, dove l'abbattimento della carica batterica e virale è l'unica misura del successo. Sanificare uno studio medico a Parma significa proteggere non solo i pazienti, ma anche il personale e la reputazione della struttura.

Utilizziamo protocolli validati e Presidi Medico Chirurgici (PMC) registrati al Ministero della Salute. Ogni area della clinica — dalla sala d'attesa ai locali operativi — viene trattata con prodotti specifici per il livello di rischio biologico. Il nostro personale è formato per gestire le criticità di questi ambienti, garantendo discrezione e massima attenzione ai dettagli.

Spesso integriamo il servizio con la sanificazione a vapore saturo a 180°, una tecnologia naturale e potente che elimina il 99,9% dei patogeni senza lasciare umidità né residui chimici. Al termine di ogni intervento, rilasciamo la documentazione tecnica necessaria per i vostri protocolli interni e per eventuali ispezioni ASL, assicurando conformità e sicurezza totale.`,
    icon: 'FirstAidKit',
    featured: true,
    keywords: ['sanificazione studi medici Parma', 'pulizia cliniche Parma', 'HACCP Parma', 'sanificazione studio dentistico', 'presidi medico chirurgici PMC'],
    benefits: [
      'Impiego esclusivo di Presidi Medico Chirurgici (PMC) certificati',
      'Protocolli di sanificazione validati per l\'abbattimento di virus e batteri',
      'Vapore saturo 180° per una disinfezione profonda e naturale',
      'Documentazione tecnica completa rilasciata per ispezioni ASL',
      'Personale formato sulla gestione del rischio biologico e DPI sanitari',
    ],
    sectors: ['Studi medici specialistici e dentistici', 'Cliniche private e poliambulatori a Parma', 'Farmacie, parafarmacie e laboratori analisi', 'Centri estetici, fisioterapici e di riabilitazione'],
    metaTitle: 'Sanificazione Studi Medici e Cliniche Parma | Igiene Clinica Sicura | Fulgur Service',
    metaDescription: 'Proteggi i tuoi pazienti con la sanificazione professionale Fulgur Service. Protocolli HACCP, Presidi Medico Chirurgici e vapore 180°. Prevenzione totale a Parma.',
    image: '/images/gallery/pulizia-studio-medico-fulgur-service.webp',
    imageAlt: 'Sanificazione certificata Fulgur Service in un ambulatorio medico specialistico di Parma con protocolli PMC',
    relatedSlugs: ['sanificazione-salumifici', 'sanificazione-vapore', 'settore-alberghiero'],
    faq: [
      {
        q: 'Rilasciate la documentazione per i controlli ASL?',
        a: 'Sì, ad ogni intervento forniamo una scheda tecnica documentata che attesta i prodotti PMC utilizzati, le aree trattate e le modalità, fondamentale per dimostrare la corretta gestione igienica della struttura.',
      },
      {
        q: 'La sanificazione a vapore è sicura per le attrezzature mediche?',
        a: 'Il vapore secco a 180° è estremamente sicuro poiché non bagna le superfici e non lascia umidità residua. È ideale per igienizzare tappezzerie, poltrone odontoiatriche e aree d\'attesa senza residui chimici.',
      },
    ],
  },
  {
    id: '04',
    slug: 'pulizie-condomini',
    title: 'Pulizie Condomini',
    shortDesc: 'Androni, scale e aree comuni sempre in ordine. Gestione professionale per condomini e palazzi storici di Parma centro.',
    longDesc: `Il decoro di un condominio inizia dall'ingresso. Androni, ascensori e scale sono le "biglietto da visita" di ogni palazzo, e mantenerli puliti richiede costanza e un metodo rigoroso. Spesso gli amministratori di condominio a Parma si scontrano con servizi approssimativi o turnover continuo del personale: noi offriamo l'esatto opposto.

Assegniamo ad ogni condominio un operatore fisso di fiducia. Questa stabilità ci permette di conoscere le esigenze specifiche di ogni palazzo — che si tratti di un condominio moderno o di un palazzo storico nel centro di Parma con pavimenti in marmo pregiato che richiedono prodotti delicati e non aggressivi.

Il nostro servizio include la pulizia delle scale e dei pianerottoli, l'igienizzazione delle cabine ascensore, la cura degli androni e dei portoni d'ingresso, oltre alla pulizia periodica di garage e cantine. Offriamo trasparenza totale agli amministratori tramite report mensili degli interventi effettuati, garantendo un servizio puntuale e verificabile ad ogni assemblea.`,
    icon: 'BuildingApartment',
    featured: false,
    keywords: ['pulizie condomini Parma', 'pulizia scale condominio Parma', 'pulizie parti comuni Parma', 'impresa pulizie amministratori condominio'],
    benefits: [
      'Operatore fisso di riferimento per garantire continuità e fiducia',
      'Trattamento specifico per materiali pregiati (marmi boschetti, pietre naturali)',
      'Pulizia completa di garage, cantine e aree cortilizie su base periodica',
      'Rendicontazione digitale mensile per gli amministratori di condominio',
      'Pianificazione oraria flessibile per ridurre il disturbo ai condòmini',
    ],
    sectors: ['Condomini residenziali di pregio in Parma centro', 'Palazzi storici con marmi e scale di valore', 'Complessi condominiali moderni e residence', 'Amministrazioni condominiali professionali'],
    metaTitle: 'Pulizie Condomini Parma | Gestione Professionale Parti Comuni | Fulgur Service',
    metaDescription: 'Androni e scale impeccabili per il tuo condominio a Parma. Operatori fissi, attenzione ai materiali di pregio e report per amministratori. Sopralluogo veloce.',
    image: '/images/servizi/pulizie-condomini-parma.webp',
    imageAlt: 'Androne condominiale lussuoso a Parma perfettamente pulito con scale in marmo lucente',
    faq: [
      {
        q: 'Cosa include il servizio di pulizia condominiale standard?',
        a: 'Include la pulizia e l\'aspirazione di scale e pianerottoli, lavaggio dell\'androne e dei vetri dell\'ingresso, igienizzazione dell\'ascensore coordinato con il calendario di raccolta rifiuti condominiale.',
      },
      {
        q: 'Potete occuparvi anche della pulizia dei vetri e delle aree esterne?',
        a: 'Certamente. Inseriamo nel preventivo anche la pulizia periodica di vetrate, verande condominiali e la spazzatura delle aree esterne come ingressi e rampe garage.',
      },
    ],
  },
  {
    id: '05',
    slug: 'settore-alberghiero',
    title: 'Settore Alberghiero',
    shortDesc: 'Housekeeping e sanificazione camere per hotel, B&B e agriturismi a Parma. Standard da ospitalità superiore e massima discrezione.',
    longDesc: `Nell'ospitalità, l'igiene è il primo pilastro della reputazione. Un ospite che entra in una camera d'hotel a Parma o in un centro termale a Salsomaggiore si aspetta la perfezione: lenzuola fresche, bagni sanificati e superfici prive di polvere. Una sola recensione negativa sulla pulizia può costare carissimo al gestore.

Noi di Fulgur Service offriamo un servizio di housekeeping professionale che si integra con l'operatività della vostra struttura. Gestiamo il riassetto quotidiano delle camere, la pulizia profonda delle hall, dei corridoi e delle aree lobby, oltre alla sanificazione certificata delle cucine e dei ristoranti interni (HACCP).

Il nostro personale è formato per operare con discrezione e rapidità, seguendo checklist rigorose per non dimenticare alcun dettaglio. Offriamo anche servizi specialistici come il lavaggio a fondo di moquette, tendaggi e testate dei letti a vapore, garantendo ambienti anallergici e freschi che faranno la differenza nella valutazione finale dei vostri ospiti.`,
    icon: 'Bed',
    featured: false,
    keywords: ['pulizie hotel Parma', 'housekeeping Parma', 'pulizie B&B Parma', 'sanificazione strutture ricettive', 'pulizie alberghi Salsomaggiore'],
    benefits: [
      'Personale formato per standard di housekeeping internazionale e discrezione',
      'Sanificazione profonda di camere, suite e bagni a ogni cambio ospite',
      'Trattamento specialistico di moquette e tessuti con macchinari professionali',
      'Igienizzazione HACCP di cucine, aree colazione e sale ristorante',
      'Gestione flessibile delle squadre in base all\'occupazione stagionale',
    ],
    sectors: ['Hotel 3-5 stelle di Parma e della provincia termale', 'B&B e appartamenti per brevi periodi (Airbnb)', 'Agriturismi e residenze storiche della Provincia', 'Centri benessere, spa e località termali'],
    metaTitle: 'Pulizie Hotel e B&B Parma | Housekeeping e standard Hospitality | Fulgur Service',
    metaDescription: 'Assicura recensioni eccellenti alla tua struttura. Fulgur Service offre housekeeping professionale e sanificazione hotel a Parma e Salsomaggiore. Richiedi preventivo.',
    image: '/images/servizi/pulizia-hotel-alberghi-parma.webp',
    imageAlt: 'Camera d\'albergo a Parma perfettamente ordinata e sanificata dopo il servizio di housekeeping professionale',
    faq: [
      {
        q: 'Gestite anche il cambio biancheria e il rifacimento letti?',
        a: 'Sì, offriamo il servizio completo di riassetto camera con rifacimento letti e sostituzione biancheria secondo gli standard richiesti dalla categoria della struttura (hotel, B&B o agriturismo).',
      },
      {
        q: 'Siete operativi anche per strutture con check-in automatizzato (Airbnb)?',
        a: 'Assolutamente. Coordiniamo le pulizie in base alle prenotazioni per garantire la camera pronta e perfetta tra un ospite e l\'altro, con comunicazione rapida tramite app o WhatsApp.',
      },
    ],
  },
  {
    id: '06',
    slug: 'trattamento-superfici',
    title: 'Trattamento Superfici',
    shortDesc: 'Cristallizzazione marmo, trattamento gres e protezione pietre naturali. Ridai vita ai tuoi pavimenti con sistemi Klindex a Parma.',
    longDesc: `Ogni superficie ha una sua anima e una sua chimica. Pulire un pavimento non significa solo togliere lo sporco, ma rispettare il materiale e proteggerlo dal tempo. Un marmo che ha perso lucentezza o un gres macchiato non sono necessariamente da cambiare: spesso basta il trattamento giusto per riportarli alla bellezza originale.

Siamo specializzati nella cristallizzazione del marmo, un processo scientifico che — tramite l'azione meccanica di macchinari Klindex e prodotti cristallizzanti — ricrea lo strato lucido e protettivo della pietra in modo duraturo, senza la necessità di levigature costose e invadenti.

Che si tratti di un ufficio di rappresentanza nel centro di Parma o di un'abitazione privata, interveniamo su gres, cotto, pietre naturali e pavimenti in resina, applicando trattamenti idro e oleo-repellenti che facilitano la pulizia quotidiana e impediscono alle macchie di penetrare. La nostra consulenza tecnica vi aiuterà a scegliere il percorso di manutenzione ideale per valorizzare il vostro immobile.`,
    icon: 'Sparkle',
    featured: true,
    keywords: ['cristallizzazione marmo Parma', 'lucidatura pavimenti Parma', 'trattamento gres porcellanato', 'rigenerazione parquet Parma', 'levigatura cotto Parma'],
    benefits: [
      'Cristallizzazione marmo professionale per un effetto a specchio duraturo',
      'Trattamento gres e ceramiche per la rimozione profonda di aloni e residui',
      'Protezione antimacchia idro-oleorepellente per pietre naturali e cotto',
      'Lavaggio meccaniizzato pavimenti in resina e cemento con macchinari Klindex',
      'Consulenza tecnica sul mantenimento corretto di ogni tipo di superficie',
    ],
    sectors: ['Abitazioni private e dimore storiche di Parma', 'Uffici legali e sedi di alta rappresentanza', 'Showroom, negozi e aree espositive con pavimenti di valore', 'Edifici commerciali con alti flussi di passaggio'],
    metaTitle: 'Trattamento Superfici Parma | Lucidatura Marmo e Protezione Gres | Fulgur Service',
    metaDescription: 'Fai risplendere i tuoi spazi. Cristallizzazione marmo e trattamenti protettivi per ogni superficie a Parma. Tecnici specializzati e risultati garantiti.',
    image: '/images/servizi/trattamento-superfici-pavimenti-parma.webp',
    imageAlt: 'Operatore esperto durante il trattamento di cristallizzazione marmo per un effetto lucido specchiato',
    faq: [
      {
        q: 'Cosa si intende per cristallizzazione del marmo?',
        a: 'È un processo termo-chimico che chiude le porosità naturali del marmo e ne ripristina la lucentezza originale. È meno invasivo della levigatura classica e può essere ripetuto periodicamente per mantenere il pavimento sempre perfetto.',
      },
      {
        q: 'Fate anche trattamenti per i pavimenti in gres esterni?',
        a: 'Sì. Per le pavimentazioni esterne consigliamo trattamenti idrorepellenti specifici che impediscono la formazione di muschi, muffe e l\'assorbimento dello smog, facilitando di molto la pulizia stagionale.',
      },
    ],
  },
  {
    id: '07',
    slug: 'pulizie-fine-cantiere',
    title: 'Pulizie Edili e Fine Cantiere',
    shortDesc: 'Rimozione calce, cemento, silicone e polveri fini post-ristrutturazione. Consegna il tuo immobile pronto all\'uso a Parma e provincia.',
    longDesc: `La fine di una ristrutturazione o di un cantiere edile è un momento emozionante, ma lo sporco che residua può essere scoraggiante. Polvere sottile ovunque, residui di cemento sulle fughe, calce sui profili dei serramenti e tracce di silicone sui vetri nuovi: queste sono le "sfide di fine cantiere" che noi gestiamo ogni giorno.

Una pulizia post-cantiere richiede molto più di una scopa e un panno. Utilizziamo aspiratori industriali con filtri HEPA per bloccare le polveri edili nocive e prodotti deceranti o acidi tamponati specifici per rimuovere la calce senza intaccare i materiali nuovi appena posati. Conosciamo i pericoli: usare il prodotto sbagliato su un rubinetto di design o un pavimento di pregio può causare danni permanenti.

Che si tratti di un singolo appartamento ristrutturato a Parma o di un nuovo complesso immobiliare pronto per la vendita, interveniamo con squadre rapide ed efficienti per consegnare ogni spazio "pronto al rogito" o "pronto all'apertura". Fulgur Service è il tassello finale che trasforma un cantiere nella vostra nuova casa o nella vostra nuova sede aziendale.`,
    icon: 'HardHat',
    featured: false,
    keywords: ['pulizie fine cantiere Parma', 'pulizie edili Parma', 'pulizie post ristrutturazione Parma', 'rimozione calce cemento pavimenti', 'pulizie post cantiere edilizi Parma', 'ditta pulizie edili Parma'],
    benefits: [
      'Rimozione professionale di calce, cemento, pittura e residui siliconici',
      'Aspirazione intensiva polveri edili con filtri HEPA ad alta efficienza',
      'Lavaggio tecnico di vetrate, infissi e tapparelle da residui di posa',
      'Interventi rapidi per rispettare date di rogito, consegna chiavi o inaugurazioni',
      'Squadre specializzate che sanno come non rovinare i materiali nuovi',
    ],
    sectors: ['Abitazioni private post-ristrutturazione completa o parziale', 'Imprese edili e General Contractor per nuove costruzioni', 'Negozi e uffici pronti per l\'apertura commerciale a Parma', 'Sviluppi immobiliari e appartamenti campione per agenzie'],
    metaTitle: 'Pulizie Edili e Fine Cantiere Parma | Pronti alla Consegna Immobiliare | Fulgur Service',
    metaDescription: 'Elimina lo sporco del cantiere in tempi record. Pulizie post-ristrutturazione a Parma per privati e imprese. Personale esperto e macchinari potenti. Richiedi preventivo.',
    image: '/images/servizi/pulizie-fine-cantiere-parma.webp',
    imageAlt: 'Intervento di pulizia post-ristrutturazione a Parma con rimozione polveri e lucidatura finale pavimentazione',
    faq: [
      {
        q: 'Quando è il momento giusto per chiamarvi per la pulizia post-cantiere?',
        a: 'Idealmente 48-72 ore prima del trasloco o della consegna delle chiavi. È fondamentale che i lavori degli operai (soprattutto tinteggiatura e posa fughe) siano completamente terminati e asciutti.',
      },
      {
        q: 'Riuscite a togliere la pittura e il silicone dai pavimenti nuovi?',
        a: 'Sì, utilizziamo spatole gommate professionali e solventi selettivi che sciolgono pittura e silicone senza graffiare o aggredire i pavimenti in marmo, legno o gres appena posati.',
      },
    ],
  },
  {
    id: '08',
    slug: 'vetrate-altezza',
    title: 'Vetrate in Altezza',
    shortDesc: 'Pulizia vetrate continue e facciate in quota a Parma con operatori certificati. Piattaforme aeree e sistemi a fune omologati.',
    longDesc: `Le vetrate degli edifici commerciali si sporcano come tutte le altre superfici, ma pulirle è tutt'altra storia. Non si tratta solo di altezza: si tratta di sicurezza, attrezzatura certificata e un metodo che lascia il vetro pulito senza aloni, non trasparente a metà.

I nostri operatori sono certificati per il lavoro in quota secondo la normativa italiana. Utilizziamo piattaforme aeree omologate o sistemi a fune per edifici dove non è possibile avvicinare un mezzo, sempre con imbracature e DPI completi. Non è glamour, ma è quello che serve per farlo in modo sicuro.

Per le vetrate, utilizziamo l'acqua osmotizzata: priva di calcare e impurità, asciuga senza lasciare aloni. È la stessa tecnologia che usiamo per i pannelli fotovoltaici e per lo stesso motivo: l'acqua di rete lascia sempre una traccia bianca.

Interveniamo su palazzi direzionali, centri commerciali, showroom con facciate vetrate e edifici industriali con lucernari in quota. Operiamo in tutta la zona di Parma e nell'intera provincia.

È proprio questa capacità di operare in sicurezza a qualsiasi altezza che rende Fulgur Service un punto di riferimento per la pulizia di vetrate e facciate a Parma e provincia.`,
    icon: 'ArrowsOutSimple',
    featured: false,
    keywords: ['pulizia vetrate altezza Parma', 'lavaggio vetri in quota Parma', 'pulizia facciate vetrate edifici', 'operatori certificati lavoro in quota Parma'],
    benefits: [
      'Operatori certificati per lavori in quota con imbracature e DPI completi',
      'Piattaforme aeree e sistemi a fune omologati per qualsiasi altezza',
      'Acqua osmotizzata: nessun alone di calcare dopo l\'intervento',
      'Trattamento antiappannante e idrorepellente facoltativo sulle vetrate',
      'Nessun limite di altezza: dai vetri al quarto piano alle facciate continue',
    ],
    sectors: ['Palazzi direzionali e centri uffici', 'Centri commerciali con facciata vetrata', 'Showroom e concessionarie auto', 'Edifici industriali con lucernari in quota'],
    metaTitle: 'Pulizia Vetrate in Altezza e Facciate Parma | Operatori Certificati | Fulgur Service',
    metaDescription: 'Pulizia professionale vetrate continue e facciate in quota a Parma. Operatori certificati, piattaforme aeree omologate, acqua osmotizzata. Zero aloni garantito. Preventivo gratis.',
    image: '/images/servizi/pulizia-vetrate-altezza-parma.webp',
    imageAlt: 'Operatore esperto su piattaforma aerea mentre esegue il lavaggio di una facciata vetrata continua in quota',
    faq: [
      {
        q: 'Che attrezzatura usate per la pulizia di vetrate in altezza?',
        a: 'Piattaforme aeree omologate o sistemi a fune per edifici dove non è possibile accedere con un mezzo. Tutti gli operatori sono certificati per il lavoro in quota con imbracature e DPI completi. Usiamo acqua osmotizzata per evitare aloni.',
      },
      {
        q: 'Con quale frequenza andrebbe pulita una facciata vetrata di un edificio commerciale?',
        a: 'Dipende dall\'esposizione e dall\'ambiente. In zone urbane con traffico intenso, consigliamo almeno due interventi l\'anno. Per showroom o edifici di rappresentanza dove l\'estetica è prioritaria, anche trimestralmente.',
      },
    ],
  },
  {
    id: '09',
    slug: 'pannelli-fotovoltaici',
    title: 'Pulizia Pannelli Fotovoltaici',
    shortDesc: 'Recupera fino al +30% di produzione. Lavaggio pannelli solari con acqua demineralizzata ad osmosi per impianti residenziali e industriali a Parma.',
    longDesc: `La cosa che sentiamo più spesso da chi ha un impianto fotovoltaico a Parma è: "Ma tanto ci pensa la pioggia." Capisco l'idea, ma purtroppo non è così. La pioggia sposta lo sporco, non lo rimuove. E quello che lascia (depositi di calcare, residui di guano semicoagulato, pollini primaverili) si indurisce col sole e blocca una parte della luce prima che raggiunga le celle.

Il risultato, in termini di produzione persa, oscilla tra il 15 e il 30% a seconda del periodo e dell'esposizione. Non è poco. Traducendo in cifre reali su un impianto da 6 kWp, possono essere anche 1.500-2.000 kWh all'anno regalati alla rete invece di consumarli.

Usiamo acqua demineralizzata prodotta da un sistema ad osmosi inversa installato sul furgone, e spazzole rotanti morbide certificate. L'acqua di rete lascia calcare, e le spazzole dure graffiano il vetro laminato facendo decadere la garanzia del produttore. Con il nostro metodo, la superficie rimane pulita più a lungo e la garanzia rimane intatta.

Lavoriamo su impianti residenziali tetto e a terra, e su campi fotovoltaici industriali in tutta la provincia di Parma. Vi diciamo sempre in anticipo quanto stimate di recuperare: non vendiamo un lavaggio, portiamo un investimento con ritorno misurabile.

È proprio questa trasparenza sui risultati che rende Fulgur Service un punto di riferimento per la manutenzione di impianti fotovoltaici a Parma e provincia.`,
    icon: 'Sun',
    featured: false,
    keywords: ['pulizia pannelli fotovoltaici Parma', 'lavaggio pannelli solari Parma', 'manutenzione impianto fotovoltaico', 'acqua demineralizzata pannelli solari', 'recupero efficienza fotovoltaico'],
    benefits: [
      'Acqua demineralizzata ad osmosi inversa: zero aloni di calcare post-intervento',
      'Recupero produzione stimato tra +15% e +30% già nelle settimane successive',
      'Spazzole rotanti morbide certificate: garanzia del produttore sempre valida',
      'Interventi su impianti residenziali, aziendali e campi industriali',
      'Piano di manutenzione programmata: 2-3 interventi/anno concordati in anticipo',
    ],
    sectors: ['Impianti fotovoltaici residenziali a Parma e provincia', 'Aziende con impianti solari su capannoni', 'Campi fotovoltaici industriali (utility scale)', 'Agriturismi e strutture rurali con impianto solare'],
    metaTitle: 'Pulizia Pannelli Fotovoltaici Parma | Recupera il +30% di Efficienza | Fulgur Service',
    metaDescription: 'La pioggia non basta. Pannelli sporchi perdono fino al 30% di produzione. Fulgur Service pulisce impianti fotovoltaici a Parma con acqua osmotizzata. Garanzia intatta. Preventivo gratis.',
    image: '/images/servizi/pannelli-fotovoltaici-parma.webp',
    imageAlt: 'Pulizia di un impianto fotovoltaico con spazzole rotanti e acqua osmotizzata per massimizzare la resa energetica',
    faq: [
      {
        q: 'Ogni quanto bisogna pulire i pannelli fotovoltaici a Parma?',
        a: 'In zona urbana o agricola come la pianura parmense, consigliamo almeno 2 interventi l\'anno: primavera (dopo i pollini) e autunno. Per impianti vicino ad aree industriali o con forte presenza di piccioni, anche 3 interventi garantiscono la massima resa annuale.',
      },
      {
        q: 'La pulizia professionale invalida la garanzia dei pannelli?',
        a: 'No, se fatta correttamente. Usiamo spazzole morbide certificate e acqua demineralizzata: nessun abrasivo, nessun detergente chimico aggressivo. Il nostro metodo è compatibile con le condizioni di garanzia dei principali produttori (SolarEdge, Fronius, Enphase).',
      },
    ],
  },
  {
    id: '10',
    slug: 'cantiere-navale',
    title: 'Cantiere Navale',
    shortDesc: 'Pulizia scafi, pulizia interna imbarcazioni e strutture portuali. Prodotti specifici per ambienti marini.',
    longDesc: `Il mare o anche solo un rimessaggio al coperto lascia sui natanti un tipo di sporco che non somiglia a nessun altro: sale cristallizzato, alghe, barnacle, residui di carena. Pulire uno scafo non è come pulire un pavimento industriale. Richiede prodotti compatibili con l'ambiente marino, metodi che rispettano i trattamenti antifouling e una certa dose di esperienza su cosa si può usare e cosa no.

Interveniamo su imbarcazioni da diporto, scafi in vetroresina e alluminio, pontili e strutture portuali. Puliamo sia gli esterni che gli interni: coperta, pozzetto, cabina, bagni di bordo. Per strutture portuali come pontili e banchine, utilizziamo idropulitrici ad alta pressione con recupero d'acqua.

I prodotti che utilizziamo sono formulati per l'ambiente marino: biodegradabili, privi di solventi clorurati e compatibili con i sistemi di trattamento acque a bordo.

È proprio questa attenzione alla specificità dell'ambiente marino che rende Fulgur Service un punto di riferimento per la pulizia nautica nella nostra area di competenza.`,
    icon: 'Anchor',
    featured: false,
    keywords: ['pulizia barche Parma', 'pulizia cantiere navale', 'pulizia imbarcazioni diporto', 'lavaggio scafi vetroresina', 'manutenzione natanti'],
    benefits: [
      'Pulizia scafi in vetroresina e alluminio con prodotti specifici per ambiente marino',
      'Rimozione alghe, barnacle e depositi marini senza danneggiare l\'antifouling',
      'Pulizia completa interno: cabina, coperta, pozzetto e bagni di bordo',
      'Idropulitrici con recupero d\'acqua per pontili e banchine portuali',
      'Prodotti biodegradabili compatibili con sistemi di trattamento acque di bordo',
    ],
    sectors: ['Cantieri navali e rimessaggi', 'Porti turistici e porticcioli', 'Imbarcazioni da diporto fino a 20 mt', 'Strutture portuali e banchine'],
    metaTitle: 'Pulizia Imbarcazioni e Cantieri Navali | Scafi e Interni | Fulgur Service',
    metaDescription: 'Pulizia professionale di imbarcazioni e cantieri navali. Rimozione alghe e barnacle, pulizia scafi e interni, strutture portuali. Prodotti eco per ambiente marino.',
    image: '/images/servizi/pulizie-cantiere-navale-parma.webp',
    imageAlt: 'Intervento di pulizia tecnica su uno scafo in vetroresina con prodotti biodegradabili per ambiente marino',
    faq: [
      {
        q: 'Come si rimuovono le alghe e i barnacle da uno scafo senza danneggiarlo?',
        a: 'Con prodotti decalcificanti specifici per ambiente marino applicati a freddo, seguiti da rimozione meccanica con spazzole a setole morbide. Evitiamo sempre prodotti abrasivi o acidi forti che potrebbero compromettere l\'antifouling.',
      },
      {
        q: 'Pulite anche gli interni delle imbarcazioni?',
        a: 'Sì. Coperta, pozzetto, cabina, cucina di bordo e bagni. Per gli spazi interni usiamo prodotti anallergici e privi di solventi, sicuri anche in ambienti confinati con scarsa ventilazione.',
      },
    ],
  },
  {
    id: '11',
    slug: 'sanificazione-vapore',
    title: 'Sanificazione Vapore 180°',
    shortDesc: 'Igienizzazione naturale a vapore saturo 180° a Parma. Elimina il 99,9% di batteri e virus senza chimica aggressiva. Sicuro per bambini e allergici.',
    longDesc: `Il vapore saturo a 180 gradi non è la novità dell'anno: è una tecnologia consolidata che funziona per un motivo molto semplice. A quella temperatura, la struttura proteica dei batteri e dei virus si denatura in pochi secondi. Non c'è resistenza possibile, non c'è biofilm abbastanza spesso da sopravvivere.

La differenza rispetto ai disinfettanti chimici tradizionali è che il vapore non lascia residui. Nessun odore dopo l'intervento, nessuna superficie da risciacquare, nessuna sostanza in sospensione nell'aria. Per questo è particolarmente adatto agli ambienti con bambini piccoli, persone allergiche o animali domestici.

Utilizziamo generatori professionali di vapore secco (non umido): la differenza è importante, perché il vapore umido bagna le superfici e può creare condizioni favorevoli per le muffe se non c'è sufficiente ricambio d'aria. Il vapore secco igienizza e asciuga quasi istantaneamente.

Gli ambiti di applicazione sono molti: materassi e imbottiture, divani in tessuto, moquette, carrozzine e passeggini, cucine e piani di lavoro, bagni, studi medici. A Parma e provincia lavoriamo sia per privati che per strutture sanitarie, asili nido e ristoranti.

È proprio questa versatilità e sicurezza che rende la sanificazione a vapore di Fulgur Service un punto di riferimento nell'igiene naturale a Parma e provincia.`,
    icon: 'Wind',
    featured: false,
    keywords: ['sanificazione vapore Parma', 'igienizzazione naturale Parma', 'vapore saturo 180 gradi', 'sanificazione senza chimica', 'pulizia vapore materassi Parma'],
    benefits: [
      'Vapore secco 180°: elimina il 99,9% di batteri, virus e acari senza chimica',
      'Zero residui nell\'aria e sulle superfici: nessun risciacquo necessario',
      'Sicuro per bambini, persone allergiche e animali domestici',
      'Igienizza materassi, divani, moquette, carrozzine e cucine',
      'Ideale per studi medici, asili nido e ristoranti nella provincia di Parma',
    ],
    sectors: ['Abitazioni con bambini, anziani o allergici', 'Asili nido e scuole materne', 'Strutture sanitarie e studi medici', 'Ristoranti e cucine professionali'],
    metaTitle: 'Sanificazione Vapore 180° Parma | Igiene Naturale Senza Chimica | Fulgur Service',
    metaDescription: 'Sanificazione a vapore saturo 180° a Parma: elimina batteri e virus senza prodotti chimici. Sicuro per bambini e allergici. Materassi, studi medici, ristoranti. Preventivo gradito.',
    image: '/images/servizi/sanificazione-vapore-parma.webp',
    imageAlt: 'Igienizzazione anallergica a vapore 180 gradi di un divano in tessuto a Parma centro con Fulgur Service',
    relatedSlugs: ['settore-sanitario', 'sanificazione-salumifici', 'pulizie-industriali'],
    faq: [
      {
        q: 'Cos\'è la sanificazione a vapore saturo e come funziona?',
        a: 'Il vapore saturo a 180°C denatura la struttura proteica di batteri, virus e acari in pochi secondi. Non usa prodotti chimici e non lascia residui sulle superfici. È la stessa tecnologia usata in ospedale per sterilizzare strumenti, adattata per ambienti civili e sanitari.',
      },
      {
        q: 'È sicuro fare la sanificazione a vapore con bambini in casa?',
        a: 'Sì, è uno dei metodi più sicuri proprio per questo. Nessun prodotto chimico, nessun residuo nell\'aria. Dopo l\'intervento bastano 30 minuti di normale ventilazione e gli ambienti sono già accessibili. Lavoriamo regolarmente in asili nido e ambienti pediatrici.',
      },
    ],
  },
  {
    id: '12',
    slug: 'pulizie-civili',
    title: 'Pulizie Civili',
    shortDesc: 'Pulizie ordinarie e straordinarie per case, appartamenti e ville a Parma. Personale di fiducia, orari flessibili, discrezione garantita.',
    longDesc: `Mandare qualcuno a casa propria richiede fiducia. Non è come chiamare un idraulico la persona sarà nella tua cucina, nel tuo bagno, tra le cose di ogni giorno. Per questo nella selezione del personale per le pulizie civili siamo particolarmente attenti: contratti regolari, assicurazione INAIL, referenze verificate.

Il servizio che offriamo non è una ripulita veloce: è un piano personalizzato in base alle vostre abitudini. C'è chi ha bisogno di una pulizia profonda mensile e chi preferisce un passaggio settimanale leggero. C'è la signora anziana che vuole qualcuno di fisso ogni martedì mattina e c'è chi affitta su Airbnb e ha bisogno di un cambio rapido tra un ospite e l'altro.

Utilizziamo prodotti a basso impatto ambientale (detergenti certificati, pochi e specifici) perché in una casa ci vivono persone, non si fanno esperimenti chimici.

Operiamo in tutta la città di Parma, dai quartieri residenziali di Montanara e San Lazzaro alle ville sulla collina parmense. Possiamo anche gestire le chiavi in totale sicurezza per chi non è sempre presente.

È proprio questa discrezione e affidabilità che rende Fulgur Service un riferimento per le pulizie di casa a Parma e provincia.`,
    icon: 'House',
    featured: false,
    keywords: ['pulizie civili Parma', 'pulizie casa Parma', 'domestica Parma', 'pulizie appartamento Parma', 'Airbnb pulizie Parma'],
    benefits: [
      'Personale con contratto regolare, assicurazione INAIL e referenze verificate',
      'Piano di pulizia personalizzato: settimanale, quindicinale o mensile',
      'Cambio rapido tra ospiti per chi affitta su Airbnb o booking',
      'Prodotti a basso impatto ambientale certificati',
      'Gestione chiavi in totale sicurezza per chi non è sempre presente',
    ],
    sectors: ['Appartamenti e case di Parma centro e quartieri', 'Ville e abitazioni di pregio', 'Case vacanza e affitti brevi (Airbnb)', 'Abitazioni con anziani o persone non autonome'],
    metaTitle: 'Pulizie Civili e Casa Parma | Personale di Fiducia | Fulgur Service',
    metaDescription: 'Pulizie per casa e appartamenti a Parma con personale assicurato e di fiducia. Interventi settimanali, cambio Airbnb, deep cleaning. Gestione chiavi disponibile. Preventivo gratis.',
    image: '/images/servizi/pulizie-civili-parma.webp',
    imageAlt: 'Pulizia domestica professionale Fulgur Service in un appartamento dei quartieri residenziali di Parma',
    faq: [
      {
        q: 'Come scegliete il personale per le pulizie domestiche?',
        a: 'Selezione con colloquio, verifica referenze, contratto regolare e assicurazione INAIL. Il personale che mandiamo nelle case private è sempre lo stesso per abituare l\'ospite e garantire continuità e discrezione.',
      },
      {
        q: 'Gestite le pulizie per chi affitta casa su Airbnb o Booking?',
        a: 'Sì, è uno dei servizi più richiesti. Organizziamo il cambio tra un ospite e l\'altro con tempistiche veloci, cambio biancheria e ripristino completo. Coordinamento via app o WhatsApp con il gestore.',
      },
    ],
  },
  {
    id: '13',
    slug: 'strutture-sportive',
    title: 'Strutture Sportive',
    shortDesc: 'Sanificazione profonda di palestre, piscine e centri sportivi a Parma. Prodotti antifungini e antibatterici per spogliatoi e aree comuni.',
    longDesc: `Spogliatoi e docce di palestre e piscine sono tra gli ambienti più difficili da tenere davvero igienici. Il combinato di umidità, temperatura e traffico intenso crea le condizioni ideali per batteri, funghi e muffe. Non è un problema estetico è un rischio sanitario reale per i frequentatori.

Le pulizie ordinarie non bastano: serve una sanificazione con prodotti antifungini e antibatterici certificati, applicati sulle superfici giuste con la frequenza giusta. Le griglie dei pavimenti, le pareti delle docce, i tappetini antiscivolo e i corrimano sono i punti critici dove la carica batterica si accumula più rapidamente.

Per piscine e idromassaggi, interveniamo sul bordovasca con trattamenti antiscivolo e prodotti specifici per superfici in contatto con l'acqua clorata. Per le palestre, ci concentriamo sull'igienizzazione delle attrezzature (manubri, panche, macchine) e sulla sanificazione dei pavimenti in gomma o parquet.

Lavoriamo su centri fitness, palesti da combattimento, piscine comunali e private, palazzetti dello sport e campi da padel nella zona di Parma. Gli interventi sono programmati in orari di chiusura per non interferire con le attività.

È proprio questa specializzazione nei contesti sportivi che rende Fulgur Service un riferimento per la sanificazione di strutture sportive a Parma e provincia.`,
    icon: 'Trophy',
    featured: false,
    keywords: ['pulizie palestre Parma', 'sanificazione centri sportivi Parma', 'pulizia piscine Parma', 'igienizzazione spogliatoi', 'pulizie padel Parma'],
    benefits: [
      'Sanificazione spogliatoi e docce con prodotti antifungini certificati',
      'Igienizzazione attrezzature sportive (manubri, panche, macchine)',
      'Trattamento antiscivolo su bordovasca e aree bagnate',
      'Sanificazione pavimenti in gomma, parquet sportivo e taraflex',
      'Interventi in orario di chiusura: nessuna interferenza con le attività',
    ],
    sectors: ['Palestre e fitness club di Parma', 'Piscine comunali e private', 'Centri padel e campi da tennis', 'Palazzetti dello sport e sale polivalenti'],
    metaTitle: 'Sanificazione Palestre e Strutture Sportive Parma | Antifungino Certificato | Fulgur Service',
    metaDescription: 'Pulizia e sanificazione professionale per palestre, piscine e centri sportivi a Parma. Prodotti antifungini e antibatterici per spogliatoi, docce e aree comuni. Preventivo gratis.',
    image: '/images/gallery/lucidatura-pavimento-palestra-fulgur-service.webp',
    imageAlt: 'Sanificazione certificata di una palestra a Parma con trattamento antifungino specifico per spogliatoi e docce',
    faq: [
      {
        q: 'Con quale frequenza andrebbero sanificati gli spogliatoi di una palestra?',
        a: 'Per strutture con 50+ accessi giornalieri, consigliamo sanificazione giornaliera degli spogliatoi e docce, con trattamento antifungino profondo settimanale. Pavimenti e attrezzature andrebbero igienizzati ogni giorno a fine attività.',
      },
      {
        q: 'Pulite anche le attrezzature sportive come manubri e macchine?',
        a: 'Sì. Utilizziamo prodotti validati per superfici in gomma, plastica e acciaio inox, non aggressivi sulle superfici ma efficaci contro batteri e virus. Particolarmente importante per superfici ad alto contatto come maniglie, selle e poggiatesta delle macchine.',
      },
    ],
  },
  {
    id: '14',
    slug: 'locali-notturni',
    title: 'Locali Notturni',
    shortDesc: 'Ripristino completo di discoteche, pub e locali notturni a Parma nelle ore mattutine. Pronti alla riapertura serale.',
    longDesc: `Dopo una serata in discoteca, la pulizia di un locale non è una questione di estetica: è una questione di tempo. La squadra che lavora di notte deve finire prima dell'orario di apertura della sera successiva spesso con pochissime ore a disposizione, soprattutto nel fine settimana.

Lavoriamo nelle prime ore del mattino, quando il locale è ancora vuoto. Il protocollo di un locale notturno è specifico: rimozione di bicchieri e residui, lavaggio meccanizzato del pavimento (spesso in superficie scivolosa dopo una serata danzante), sanificazione intensiva dei bagni, smaltimento differenziato di vetro e rifiuti.

Le macchie più ostinate (drink versati sui divani, rossetto sulle pareti, cera delle candele sul pavimento) richiedono prodotti specifici e la conoscenza dei materiali su cui si lavora. Non tutto si toglie con il detergente universale.

Operiamo su pub, bar, lounge bar, discoteche e sale concerti nella zona di Parma. Siamo abituati ai ritmi del settore: lavoriamo con tempi comunicati, senza ritardi e senza che il gestore debba pensarci due volte.

È proprio questa affidabilità notturna che rende Fulgur Service un punto di riferimento per la pulizia di locali notturni a Parma.`,
    icon: 'Martini',
    featured: false,
    keywords: ['pulizie discoteche Parma', 'pulizie locali notturni Parma', 'pulizie pub Parma', 'sanificazione bagni locali notturni', 'interventi pulizia mattutini'],
    benefits: [
      'Interventi nelle prime ore del mattino per essere pronti alla riapertura serale',
      'Lavaggio meccanizzato pavimenti da danza e aree comuni',
      'Sanificazione intensiva dei bagni con prodotti battericidi ad azione rapida',
      'Rimozione macchie ostinate su arredi, moquette e superfici verticali',
      'Smaltimento differenziato di vetro, plastica e rifiuti organici',
    ],
    sectors: ['Discoteche e sale da ballo di Parma', 'Pub, birrerie e lounge bar', 'Sale concerti e locali live', 'Cocktail bar e aperitivo bar'],
    metaTitle: 'Pulizie Discoteche e Locali Notturni Parma | Interventi Mattutini | Fulgur Service',
    metaDescription: 'Pulizia rapida e completa di discoteche, pub e locali notturni a Parma. Interventi nelle prime ore del mattino: pronti alla riapertura. Sanificazione bagni garantita.',
    image: '/images/gallery/pulizia-locale-commerciale-operatore-fulgur.webp',
    imageAlt: 'Operatore Fulgur Service durante la pulizia mattutina intensiva di un locale notturno a Parma centro',
    faq: [
      {
        q: 'In quanto tempo riuscite a pulire una discoteca dopo la chiusura?',
        a: 'Dipende dalla superficie e dall\'afflusso della serata. Per una discoteca di 500 mq, un intervento completo richiede in genere 3-4 ore con una squadra di 2-3 operatori. Organizziamo tutto in anticipo con il gestore per rispettare l\'orario di apertura.',
      },
      {
        q: 'Come si rimuovono le macchie di drink dai divani e dai rivestimenti?',
        a: 'Con estrattori ad iniezione per i tessuti e prodotti sgrassanti specifici per le superfici in pelle o similpelle. L\'intervento tempestivo (nelle prime ore dopo la serata) aumenta notevolmente le probabilità di rimozione completa.',
      },
    ],
  },
  {
    id: '15',
    slug: 'pulizia-facciate',
    title: 'Pulizia Facciate',
    shortDesc: 'Idrolavaggio professionale e rimozione graffiti per facciate esterne di edifici civili e industriali a Parma.',
    longDesc: `Una facciata esterna subisce ogni giorno l'attacco di smog, umidità, muffe, alghe e (nelle aree urbane) graffiti. Il degrado è lento ma progressivo, e spesso ci si accorge del problema solo quando è già avanzato: la pietra scurita, l'intonaco macchiato, il clinker ricoperto di muschio.

Il metodo dipende sempre dal materiale. Su mattoni faccia a vista e pietre naturali, lavoriamo con idropulitrici a pressione controllata per non erodere la superficie. Su intonaci delicati, utilizziamo sistemi a bassa pressione con detergenti specifici. Per graffiti su facciate, abbiamo prodotti svernicianti selettivi che rimuovono la vernice spray senza attaccare il supporto sottostante.

Dopo la pulizia, su richiesta applichiamo trattamenti idrorepellenti e anti-graffiti trasparenti: proteggono la facciata dalla sporcizia e dagli agenti atmosferici, riducendo la frequenza degli interventi futuri.

Operiamo su edifici civili, condomini, capannoni industriali e strutture commerciali in tutto il territorio parmense. Per edifici storici del centro di Parma, adattiamo sempre il metodo alla sensibilità del materiale originale.

È proprio questa attenzione al materiale specifico che rende Fulgur Service un punto di riferimento per la pulizia e il ripristino di facciate a Parma e provincia.`,
    icon: 'Buildings',
    featured: false,
    keywords: ['pulizia facciate Parma', 'rimozione graffiti Parma', 'idrolavaggio edifici Parma', 'pulizia muri esterni Parma', 'trattamento idrorepellente facciate'],
    benefits: [
      'Idropulitrici a pressione controllata: efficacia senza erodere il materiale',
      'Prodotti svernicianti selettivi per rimozione graffiti senza danni al supporto',
      'Trattamenti idrorepellenti e anti-graffiti trasparenti post-pulizia',
      'Protocolli specifici per facciate in pietra, mattone, intonaco e clinker',
      'Interventi su edifici storici del centro di Parma con metodi delicati',
    ],
    sectors: ['Condomini e facciate residenziali', 'Edifici storici e palazzi del centro di Parma', 'Capannoni e strutture industriali', 'Centri commerciali e strutture pubbliche'],
    metaTitle: 'Pulizia Facciate ed Esterni Parma | Graffiti e Smog Rimossi | Fulgur Service',
    metaDescription: 'Idrolavaggio professionale e rimozione graffiti per facciate di edifici a Parma. Mattoni, intonaco, pietra e clinker trattati con il metodo giusto. Trattamento idrorepellente su richiesta.',
    image: '/images/gallery/pulizia-facciata-industriale-operatori-fulgur.webp',
    imageAlt: 'Idrolavaggio professionale per rimozione smog e graffiti da una facciata esterna a Parma',
    faq: [
      {
        q: 'Come si rimuovono i graffiti da una facciata senza danneggiare il muro?',
        a: 'Con svernicianti selettivi applicati a freddo sul graffito, che sciolgono la vernice spray senza aggredire il supporto. L\'efficacia dipende dal tipo di materiale e dall\'età del graffito: le rimozioni entro 48-72 ore dalla realizzazione sono quasi sempre complete.',
      },
      {
        q: 'Con quale frequenza andrebbe pulita la facciata di un condominio?',
        a: 'In ambiente urbano come Parma, un intervento ogni 5-7 anni è sufficiente per facciate trattate con idrorepellente. Senza protezione, la sporcizia si fissa prima e potrebbe richiedere interventi più ravvicinati (ogni 3-4 anni).',
      },
    ],
  },
  {
    id: '16',
    slug: 'sanificazione-salumifici',
    title: 'Sanificazione Salumifici',
    shortDesc: 'Sanificazione industriale HACCP per salumifici, prosciuttifici e stabilimenti alimentari nel distretto food di Parma. Detergenti food grade, zero residui chimici, conformità CE 852/2004.',
    longDesc: `Parma è la capitale mondiale del prosciutto e dei salumi. È il territorio dove ogni fase di lavorazione (dalla macellazione alla stagionatura, dal confezionamento alla spedizione) è soggetta ai controlli più rigorosi d'Europa. In questo contesto, la sanificazione non è un servizio accessorio: è parte integrante del processo produttivo, e un errore può bloccare una linea intera o aprire la porta a un richiamo di prodotto.

Lavoriamo con salumifici e prosciuttifici della provincia di Parma da anni. Conosciamo le specificità di questi ambienti: le celle di stagionatura con temperature e umidità controllate che non possono essere alterate, i pavimenti in calcestruzzo trattato che richiedono prodotti compatibili con la normativa CE 852/2004, le cappe di aspirazione delle nebbie di grasso che vanno sgrassate senza lasciare residui a contatto con il prodotto. Dettagli che chi non lavora nel settore alimentare non conosce e non può improvvisare.

Il protocollo di intervento viene scritto insieme al responsabile HACCP di ogni stabilimento: nessuno conosce la linea meglio di chi ci lavora ogni giorno, e noi siamo lì per eseguire, con precisione, con i prodotti giusti, con le registrazioni che servono per ogni audit. Utilizziamo esclusivamente detergenti e disinfettanti food grade con omologazione ministeriale e numero DIN, le cui schede tecniche rimangono nel dossier del cliente a disposizione per qualsiasi ispezione ASL o richiesta RASFF.

Gli interventi sono pianificati nelle finestre di fermo produzione (di notte, nel weekend, nei giorni di manutenzione programmata) per non interferire con i cicli produttivi e rispettare i tempi di carenza dei disinfettanti. Il turno del lunedì mattina trova la linea già pronta. Nessun ritardo, nessuna scusa.

È questa capacità di lavorare dentro i vincoli operativi dell'industria alimentare (rispettando norme, processi e persone) che distingue Fulgur Service da un'impresa di pulizie generica. Operiamo in tutta la Food Valley emiliana: da Langhirano a Felino, da Collecchio a San Secondo Parmense.`,
    icon: 'ForkKnife',
    featured: true,
    keywords: [
      'sanificazione salumificio Parma',
      'pulizia prosciuttificio Parma',
      'sanificazione HACCP industria alimentare Parma',
      'pulizia stabilimento alimentare Parma',
      'sanificazione food grade Parma',
      'disinfezione salumi Emilia Romagna',
      'sanificazione celle stagionatura prosciutto',
      'HACCP food valley emiliana',
    ],
    benefits: [
      'Detergenti e disinfettanti food grade certificati CE 852/2004 e D.Lgs. 193/2007',
      'Operatori formati HACCP con registrazioni firmate per ogni audit ASL',
      'Interventi notturni o nel weekend: produzione mai interrotta, zero downtime',
      'Sgrassaggio intensivo cappe, vasche e linee senza residui a contatto alimentare',
      'Sanificazione celle di stagionatura con prodotti compatibili con temperature controllate',
      'Dossier di conformità completo: schede tecniche, registrazioni, certificati a disposizione',
    ],
    sectors: [
      'Salumifici e prosciuttifici del distretto di Parma e Langhirano',
      'Laboratori di trasformazione carni certificati UE',
      'Stabilimenti di confezionamento prodotti DOP e IGP',
      'Industria alimentare della Food Valley emiliana',
    ],
    metaTitle: 'Sanificazione Salumifici e Prosciuttifici Parma | HACCP | Fulgur Service',
    metaDescription: 'Sanificazione HACCP per salumifici e prosciuttifici a Parma. Detergenti food grade, zero residui chimici, interventi notturni. Conformi CE 852/2004. Food Valley emiliana. Preventivo gratuito.',
    image: '/images/gallery/sanificazione-pavimento-capannone-fulgur.webp',
    imageAlt: 'Sanificazione professionale HACCP di un pavimento industriale in uno stabilimento alimentare del distretto food di Parma con attrezzatura certificata',
    relatedSlugs: ['settore-sanitario', 'sanificazione-vapore', 'pulizie-industriali'],
    faq: [
      {
        q: 'Quali normative rispettate per la sanificazione nei salumifici?',
        a: 'Lavoriamo in conformità con il Regolamento CE 852/2004 sull\'igiene dei prodotti alimentari e il D.Lgs. 193/2007 sui prodotti biocidi. Tutti i detergenti e disinfettanti sono food grade con omologazione ministeriale e numero DIN. Per ogni intervento rilasciamo una registrazione firmata da conservare nel manuale HACCP, valida per audit ASL e ispezioni RASFF.',
      },
      {
        q: 'Come lavorate nelle celle di stagionatura senza compromettere prosciutti e salumi?',
        a: 'Operiamo esclusivamente nelle finestre di fermo produzione concordate con il responsabile HACCP, usando prodotti specifici per ambienti a temperatura e umidità controllata. Rispettiamo rigorosamente i tempi di carenza richiesti prima del rientro del prodotto. La nostra esperienza nel distretto parmense ci permette di capire ogni fase del ciclo di stagionatura e agire di conseguenza.',
      },
      {
        q: 'Sanificate anche le linee di confezionamento e i macchinari?',
        a: 'Sì. Interveniamo su affettatrici, linee di confezionamento, nastri trasportatori e vasche di salamoia con prodotti specifici per contatto con superfici alimentari. Il protocollo di CIP (Clean In Place) e COP (Clean Out of Place) viene definito con il responsabile di produzione per garantire efficacia igienica senza compromettere i materiali delle attrezzature.',
      },
    ],
  },
]

// Servizi integrati Impresa 360°
export const INTEGRATED_SERVICES: IntegratedService[] = [
  {
    title: 'Manutenzione idraulica',
    desc: 'Interventi idraulici di manutenzione ordinaria',
    icon: 'Drop',
    image: '/images/servizi/manutenzione-idraulica-parma.webp',
  },
  {
    title: 'Piccola manutenzione edile',
    desc: 'Riparazioni murarie, tinteggiature, piccoli lavori edili',
    icon: 'Wrench',
  },
  {
    title: 'Gestione rifiuti',
    desc: 'Esposizione e rientro contenitori secondo calendario comunale',
    icon: 'Recycle',
  },
  {
    title: 'Manutenzione elettrica',
    desc: 'Interventi di manutenzione elettrica ordinaria',
    icon: 'Lightning',
  },
  {
    title: 'Manutenzione giardinaggio',
    desc: 'Cura di aree del verde, potature e manutenzione ordinaria del verde',
    icon: 'Leaf',
    image: '/images/servizi/manutenzione-aree-verdi-parma.webp',
  },
  {
    title: 'Fornitura carta e sapone',
    desc: 'Fornitura materiali di consumo e servizio lavanderia',
    icon: 'Basket',
  },
]
