// lib/services-data.ts — Fulgur Service

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
    longDesc: `Quasi sempre, quando facciamo un sopralluogo in un ufficio a Parma, la prima cosa che ci mostrano è il pavimento. Capisco: è quello che si vede. Ma quello su cui ci soffermiamo sono le griglie dell'aria condizionata, i bordi delle scrivanie, gli spazi sotto le sedute. Sono i posti che le pulizie rapide saltano per abitudine — e dove si accumula la polvere che poi tutti respirano.

Molti clienti ci dicono che prima di noi cambiavano ditta ogni sei mesi. Il motivo, quasi sempre, era lo stesso: lavoro fatto di fretta, qualcosa sempre dimenticato, e nessuno con cui parlare quando c'era un problema. Noi lavoriamo con un referente unico per ogni azienda: una persona che conosce i vostri spazi e che risponde al telefono.

Operiamo in tutta la città — dal quartiere Oltretorrente agli uffici della zona industriale SPIP — con contratti mensili a prezzo fisso concordato dopo il sopralluogo. Nessun rincaro imprevisto, nessuna sorpresa. Un ambiente di lavoro pulito riduce l'assenteismo e migliora la concentrazione: lo dicono i dati, ma lo vediamo anche noi ogni volta che entriamo in un ufficio il giorno dopo il primo intervento.

È proprio questo tipo di cura quotidiana che rende Fulgur Service un punto di riferimento per le pulizie professionali a Parma e provincia.`,
    icon: 'Buildings',
    featured: true,
    keywords: ['pulizie uffici Parma', 'pulizie aziendali Parma', 'pulizie negozi Parma', 'sanificazione postazioni lavoro', 'impresa pulizie studi professionali Parma'],
    benefits: [
      'Spolveratura postazioni PC con panni antistatici (tastiere incluse)',
      'Igienizzazione battericida dei bagni aziendali a ogni intervento',
      'Interventi fuori orario lavorativo: il team trova tutto pronto al mattino',
      'Contratto mensile a prezzo fisso: sai esattamente cosa paghi',
      'Aspiratori con filtri HEPA per chi soffre di allergie stagionali',
    ],
    sectors: ['Uffici direzionali e open space', 'Negozi, boutique e showroom', 'Banche e studi legali', 'Spazi co-working e coworking hub'],
    metaTitle: 'Pulizie Uffici Parma: Igiene Garantita, Zero Sorprese | Fulgur Service',
    metaDescription: 'La polvere negli uffici fa ammalare il team e cala la produttività. Fulgur Service pulisce uffici e negozi a Parma con personale assicurato e preventivo fisso. Sopralluogo gratis.',
    image: '/images/servizi/pulizie-aziendali-parma.webp',
    imageAlt: 'Interno di un ufficio moderno a Parma perfettamente pulito e ordinato dopo un intervento di igienizzazione',
    faq: [
      {
        q: 'Quanto costano le pulizie di un ufficio a Parma?',
        a: 'Il costo per la pulizia di un ufficio a Parma dipende da metratura, numero di bagni e frequenza degli interventi. Preferiamo lavorare con preventivi a corpo fissi: nessun rincaro a fine mese. Il sopralluogo gratuito ci permette di darti un prezzo definitivo entro 24 ore.',
      },
      {
        q: 'Ogni quanto bisogna pulire un ufficio in modo professionale?',
        a: 'Per uffici con 10+ postazioni, consigliamo almeno due interventi settimanali. Un singolo studio professionale può bastare con uno. La frequenza ideale dipende dal traffico di persone e dalla presenza di sale riunioni o aree comuni ad alto utilizzo.',
      },
    ],
  },
  {
    id: '02',
    slug: 'pulizie-industriali',
    title: 'Pulizie Industriali',
    shortDesc: 'Lavasciuga uomo a bordo, rimozione oli e grassi, interventi senza fermare la produzione. Per capannoni e magazzini di Parma e dintorni.',
    longDesc: `Quando entriamo in un capannone per la prima volta, spesso la situazione è più complicata di quello che ci avevano descritto al telefono. Non per malafede: è che chi lavora in quel posto ogni giorno non riesce più a vedere certi accumuli. Il grasso sulle guide dei muletti, la polvere di cartone negli angoli, i residui di lavorazione sotto le linee.

Un pavimento industriale sporco non è solo un problema estetico. È un rischio di infortuni concreto, rilevante ai fini del D.Lgs 81/08 sulla sicurezza sul lavoro. Un muletto che slitta su un pavimento unto può costare molto più di una pulizia professionale.

La nostra risposta è semplice: lavasciuga uomo a bordo che coprono 3.000 mq in due ore, asciugando istantaneamente. Nessun pavimento bagnato in mezzo alla corsia. Lavoriamo di notte o nel weekend, pianificando ogni zona con il responsabile di stabilimento prima di iniziare.

Operiamo nell'intera area produttiva di Parma: dall'interporto di Fontevivo ai poli logistici di Langhirano, dai distretti meccanici di Noceto alle cooperative alimentari di Collecchio. Dove c'è un capannone con un problema, c'è un modo per risolverlo senza bloccare la produzione.

È proprio questo approccio operativo che rende Fulgur Service un punto di riferimento per le pulizie industriali a Parma e provincia.`,
    icon: 'Factory',
    featured: true,
    keywords: ['pulizie industriali Parma', 'pulizia capannoni Parma', 'lavasciuga industriale Parma', 'pulizia magazzini logistici', 'rimozione oli pavimenti industriali'],
    benefits: [
      'Lavasciuga uomo a bordo: pulisce e asciuga senza lasciare pavimento bagnato',
      'Rimozione macchie d\'olio e grasso conformemente al D.Lgs 81/08',
      'Interventi notturni o nel weekend: nessuna interruzione alla produzione',
      'Aspirazione polveri sottili (trucioli, cartone, polvere di lavorazione)',
      'Report dell\'intervento disponibile per audit ISO, BRC o IFS',
    ],
    sectors: ['Capannoni produttivi e magazzini logistici', 'Officine meccaniche e metalmeccanica', 'Stabilimenti alimentari (Food Valley)', 'Centri di distribuzione e interporti'],
    metaTitle: 'Pulizie Industriali Parma | Capannoni e Magazzini Senza Fermare la Produzione',
    metaDescription: 'Pulizia industriale pesante a Parma con lavasciuga uomo a bordo. Rimozione oli e polveri, interventi notturni. Food Valley, interporto, SPIP. Preventivo in 24h.',
    image: '/images/servizi/pulizie-industriali-parma.webp',
    imageAlt: 'Macchinario lavasciuga uomo a bordo in funzione su un pavimento industriale in un magazzino logistico',
    faq: [
      {
        q: 'Quando è necessario un intervento di pulizia industriale professionale?',
        a: 'Serve quando i metodi ordinari non bastano: accumulo di oli e grassi sulle corsie, polveri sottili nei reparti di lavorazione, o prima di un audit di qualità (ISO, BRC, IFS). Anche un cambio di destinazione d\'uso di un capannone richiede un intervento di fondo.',
      },
      {
        q: 'Quanto costa la pulizia di un capannone industriale a Parma?',
        a: 'Il costo dipende dalla superficie, dallo stato del pavimento e dai macchinari necessari. Un capannone da 1.000 mq ha esigenze molto diverse da uno da 5.000 mq con linee produttive attive. Facciamo sempre un sopralluogo gratuito prima di emettere qualsiasi preventivo.',
      },
    ],
  },
  {
    id: '03',
    slug: 'settore-sanitario',
    title: 'Settore Sanitario',
    shortDesc: 'Sanificazione certificata HACCP con Presidi Medico Chirurgici e vapore 180°. Per cliniche, studi medici e dentistici a Parma.',
    longDesc: `Uno studio medico in apparenza pulito non è necessariamente un ambiente sanificato. È una distinzione che fa molta differenza — soprattutto in ambienti dove ogni giorno passano pazienti con sistemi immunitari compromessi, anziani, bambini.

Quando lavoriamo in cliniche o studi dentistici nella provincia di Parma, utilizziamo Presidi Medico Chirurgici (PMC) registrati al Ministero della Salute. Non prodotti generici: formulazioni specifiche per livello di rischio biologico. La sala d'attesa e il bagno paziente sono trattati diversamente dal corridoio o dall'archivio.

Per molti studi, affianchiamo anche la sanificazione a vapore saturo a 180 gradi. Non è la stessa cosa degli steamer casalinghi: parliamo di apparecchiature professionali che portano il vapore secco a una temperatura che elimina il 99,9% di virus e batteri senza lasciare umidità sulle superfici e senza residui chimici nell'aria.

A fine intervento rilasciamo sempre una scheda documentata: prodotti usati, aree trattate, orario di intervento. Molti nostri clienti la usano come prassi standard in caso di ispezione ASL — non come eccezione per un'emergenza.

È proprio questa documentazione e precisione che rende Fulgur Service un punto di riferimento per la sanificazione di strutture sanitarie a Parma e provincia.`,
    icon: 'FirstAidKit',
    featured: true,
    keywords: ['sanificazione studi medici Parma', 'pulizia cliniche Parma', 'HACCP Parma', 'sanificazione studio dentistico', 'presidi medico chirurgici PMC'],
    benefits: [
      'Presidi Medico Chirurgici (PMC) certificati dal Ministero della Salute',
      'Vapore saturo 180°: elimina il 99,9% di patogeni senza residui chimici',
      'Classificazione delle zone per livello di rischio biologico (alto/medio/basso)',
      'Scheda documentata post-intervento per ispezioni ASL e audit interni',
      'Personale formato sulla gestione di ambienti sanitari e dispositivi di protezione',
    ],
    sectors: ['Studi medici e dentistici', 'Cliniche e poliambulatori', 'Farmacie e parafarmacie', 'Centri estetici e fisioterapici'],
    metaTitle: 'Sanificazione Studi Medici e Cliniche Parma | Protocolli HACCP | Fulgur Service',
    metaDescription: 'Sanificazione certificata HACCP per studi medici, dentistici e cliniche a Parma. PMC ministeriali, vapore 180°, report ASL. Prevenzione infezioni crociate. Preventivo gratis.',
    image: '/images/gallery/pulizia-studio-medico-fulgur-service.webp',
    imageAlt: 'Sanificazione certificata di uno studio medico con protocolli HACCP e prodotti presidio medico chirurgico',
    relatedSlugs: ['sanificazione-salumifici', 'sanificazione-vapore', 'settore-alberghiero'],
    faq: [
      {
        q: 'Che differenza c\'è tra pulizia ordinaria e sanificazione HACCP?',
        a: 'La pulizia ordinaria rimuove lo sporco visibile. La sanificazione HACCP abbatte la carica microbica e virale su superfici critiche usando Presidi Medico Chirurgici specifici per livello di rischio. È obbligatoria nei contesti alimentari e raccomandata in tutti gli ambienti sanitari.',
      },
      {
        q: 'Rilasciate documentazione per le ispezioni ASL?',
        a: 'Sì, sempre. A fine di ogni intervento emettiamo una scheda tecnica con prodotti utilizzati, aree trattate e orario, firmata dal responsabile. Molti nostri clienti la tengono in cartella come prassi standard.',
      },
    ],
  },
  {
    id: '04',
    slug: 'pulizie-condomini',
    title: 'Pulizie Condomini',
    shortDesc: 'Gestione completa delle parti comuni: scale, androni, ascensori e garage. Con reportistica mensile per gli amministratori di Parma.',
    longDesc: `La cosa che sentiamo più spesso dagli amministratori di condominio a Parma è che il servizio precedente funzionava... finché non smetteva. Ditte che saltano appuntamenti, qualità che cala con il tempo, nessuno con cui parlare quando c'è un problema. Capiamo la frustrazione — ed è esattamente per questo che lavoriamo in modo diverso.

Per ogni condominio assegniamo un referente fisso: una persona che conosce le scale, gli androni, la posizione dell'ascensore e le aree critiche. Non manda squadre diverse ogni settimana. È sempre la stessa persona, con la stessa cura.

Gli interventi coprono tutto ciò che è parte comune: scale e pianerottoli, androni e hall d'ingresso, vani ascensore, corsie garage e cantine, aree cortilizie. Nei condomini di pregio o nei palazzi storici del centro di Parma, prestiamo particolare attenzione ai pavimenti in marmo e ai corrimano — superfici che con la pulizia sbagliata si rovinano, non si puliscono.

A fine mese inviamo all'amministratore un report degli interventi effettuati: date, ore, aree trattate. Uno strumento semplice che rende tutto trasparente e gestibile, anche in sede di assemblea condominiale.

È proprio questa affidabilità documentata che rende Fulgur Service un punto di riferimento per le pulizie condominiali a Parma e provincia.`,
    icon: 'BuildingApartment',
    featured: false,
    keywords: ['pulizie condomini Parma', 'pulizia scale condominio Parma', 'pulizie parti comuni Parma', 'impresa pulizie amministratori condominio'],
    benefits: [
      'Referente fisso per ogni condominio: sempre la stessa persona, non squadre a rotazione',
      'Pulizia scale, androni, ascensori, garage e aree esterne condominiali',
      'Attenzione speciale ai pavimenti in marmo e materiali sensibili',
      'Report mensile degli interventi per amministratori di condominio',
      'Contratto annuale con prezzo bloccato: nessun adeguamento sorpresa',
    ],
    sectors: ['Condomini residenziali di Parma centro', 'Palazzi storici con marmi e materiali pregiati', 'Complessi condominiali moderni', 'Residence e case a schiera'],
    metaTitle: 'Pulizie Condomini Parma | Scale, Androni e Garage | Fulgur Service',
    metaDescription: 'Pulizia professionali delle parti comuni per condomini a Parma. Referente fisso, report mensile per amministratori, attenzione ai materiali pregiati. Preventivo gratuito.',
    image: '/images/servizi/pulizie-condomini-parma.webp',
    imageAlt: 'Androne condominiale e scale in marmo lucide e igienizzate in un palazzo residenziale di Parma',
    faq: [
      {
        q: 'Con quale frequenza bisogna pulire le parti comuni di un condominio?',
        a: 'Dipende dal numero di unità abitative e dal traffico di persone. Per condomini con 10+ appartamenti, consigliamo almeno 2 interventi settimanali sulle scale e pulizia mensile di garage e cantine. Per i vani ascensore, idealmente un intervento settimanale.',
      },
      {
        q: 'Fornite documentazione per gli amministratori di condominio?',
        a: 'Sì. A fine mese inviamo un report digitale con date, orari e aree trattate per ogni intervento. Molti amministratori lo usano come allegato durante le assemblee condominiali per dimostrare la corretta gestione del servizio.',
      },
    ],
  },
  {
    id: '05',
    slug: 'settore-alberghiero',
    title: 'Settore Alberghiero',
    shortDesc: 'Housekeeping professionale per hotel, B&B e agriturismi a Parma. Standard da ospitalità di qualità, personale formato e discreto.',
    longDesc: `Nel settore alberghiero, la pulizia non è un dettaglio: è parte dell'esperienza dell'ospite. Una camera rimessa male, un bagno con i capelli della persona precedente, una lobby con l'odore stantio — sono cose che si notano subito e che finiscono nelle recensioni online ancora più in fretta.

Molti gestori di hotel a Parma ci contattano dopo aver ricevuto una recensione negativa sull'igiene. Capiamo la situazione: a volte non è colpa del personale, ma di procedure non strutturate o di macchinari non adeguati. Il nostro primo intervento, di solito, serve a capire dove si trova davvero il problema.

Gestiamo il riassetto completo delle camere, la pulizia profonda delle aree comuni (lobby, corridoi, ascensori), la sanificazione di spa e piscine, il lavaggio a fondo di moquette e tessuti con macchinari ad estrazione e la pulizia delle cucine e dei ristoranti secondo i protocolli HACCP. Lavoriamo rispettando i ritmi operativi della struttura: sappiamo che non si può entrare in una camera mentre c'è ancora un ospite dentro.

Operiamo su strutture ricettive in tutto il territorio parmense, incluse le zone termali di Salsomaggiore Terme e gli agriturismi della val Taro.

È proprio questa flessibilità operativa che rende Fulgur Service un punto di riferimento per la pulizia nel settore alberghiero a Parma e provincia.`,
    icon: 'Bed',
    featured: false,
    keywords: ['pulizie hotel Parma', 'housekeeping Parma', 'pulizie B&B Parma', 'sanificazione strutture ricettive', 'pulizie alberghi Salsomaggiore'],
    benefits: [
      'Riassetto camere secondo standard hospitality con personale formato e discreto',
      'Pulizia profonda lobby, corridoi e aree comuni con macchinari a vapore',
      'Sanificazione spa, piscine e centri benessere con prodotti antifungini',
      'Lavaggio moquette e tessuti con macchinari ad estrazione e iniezione',
      'Cucine e ristoranti sanificati secondo protocollo HACCP',
    ],
    sectors: ['Hotel 3-5 stelle di Parma e Provincia', 'B&B e affittacamere', 'Agriturismi della val Taro e dintorni', 'Strutture termali di Salsomaggiore Terme'],
    metaTitle: 'Pulizie Hotel e B&B Parma | Housekeeping Professionale | Fulgur Service',
    metaDescription: 'Housekeeping e sanificazione per hotel, B&B e agriturismi a Parma. Personale formato e discreto, standard alberghieri garantiti. Operiamo anche a Salsomaggiore. Preventivo gratis.',
    image: '/images/servizi/pulizia-hotel-alberghi-parma.webp',
    imageAlt: 'Riassetto impeccabile di una camera matrimoniale in un hotel di lusso con standard di pulizia alberghiera',
    faq: [
      {
        q: 'Gestite il servizio di housekeeping quotidiano per hotel?',
        a: 'Sì. Ci integriamo con i turni operativi della struttura, garantendo il riassetto delle camere nei tempi concordati. Lavoriamo con personale fisso assegnato alla struttura per garantire discrezione e conoscenza degli spazi.',
      },
      {
        q: 'Sanificate anche le aree spa e piscine degli hotel?',
        a: 'Assolutamente sì. Per spa, saune e bordovasca utilizziamo prodotti antifungini e antiscivolo specifici. Rilasciamo documentazione degli interventi su richiesta.',
      },
    ],
  },
  {
    id: '06',
    slug: 'trattamento-superfici',
    title: 'Trattamento Superfici',
    shortDesc: 'Cristallizzazione marmo, trattamento gres, levigatura parquet e cotto. Risultati a specchio senza cantieri costosi a Parma.',
    longDesc: `La cosa che sentiamo più spesso in questo tipo di lavoro è: "Pensavo di dover sostituire tutto." Un marmo opaco che sembra sempre sporco anche dopo il lavaggio, un cotto consumato che non si riesce più a pulire davvero, un parquet pieno di graffi. Quasi sempre non serve rifare. Serve il metodo giusto.

La cristallizzazione del marmo, per esempio, è un processo che la maggior parte delle persone non conosce. Non è cera, non è trattamento chimico aggressivo: è una reazione termo-chimica tra disco e prodotto che ricostruisce uno strato protettivo sulla pietra, riportando la lucentezza originale. Lo facciamo nei palazzi storici del centro di Parma, nelle hall dei hotel, negli studi legali di rappresentanza.

Sul gres porcellanato, invece, il problema più comune sono gli aloni e le fughe annerite. Usiamo macchinari specifici con dischi calibrati per tipo di finitura: il gres lucidato e quello satinato si trattano diversamente, e il primo errore sarebbe usare lo stesso prodotto per entrambi.

Per il parquet, lavoriamo sulla rigenerazione: rimozione dello strato di vernice deteriorata e riapplicazione con vernici o cere di qualità, rispettando le fibre del legno.

Ogni superficie ha il suo protocollo. È la differenza tra un risultato che dura sei mesi e uno che dura anni.

È proprio questa competenza tecnica specifica che rende Fulgur Service un punto di riferimento per il trattamento e la lucidatura di pavimenti a Parma e provincia.`,
    icon: 'Sparkle',
    featured: true,
    keywords: ['cristallizzazione marmo Parma', 'lucidatura pavimenti Parma', 'trattamento gres porcellanato', 'rigenerazione parquet Parma', 'levigatura cotto Parma'],
    benefits: [
      'Cristallizzazione marmo: ripristino della lucentezza senza sostituzione',
      'Trattamento gres con dischi calibrati per tipo di finitura (lucido/satinato)',
      'Rigenerazione parquet: rimozione vernice e ritrattamento con prodotti di qualità',
      'Levigatura cotto e pietre naturali con protezione antimacchia finale',
      'Lavaggio profondo moquette e tappeti con estrazione e asciugatura rapida',
    ],
    sectors: ['Appartamenti e ville private di Parma', 'Palazzi storici e uffici di rappresentanza', 'Hotel e strutture ricettive di lusso', 'Negozi e showroom con pavimentazioni pregiate'],
    metaTitle: 'Lucidatura Marmo e Trattamento Pavimenti Parma | Fulgur Service',
    metaDescription: 'Cristallizzazione marmo, trattamento gres e rigenerazione parquet a Parma. Non sempre serve sostituire: spesso bastano i macchinari e il metodo giusti. Richiedi sopralluogo.',
    image: '/images/servizi/trattamento-superfici-pavimenti-parma.webp',
    imageAlt: 'Dettaglio della cristallizzazione di un pavimento in marmo che mostra un effetto a specchio riflettente',
    faq: [
      {
        q: 'Come si elimina l\'opacità dal pavimento in marmo senza sostituirlo?',
        a: 'Con la cristallizzazione professionale: un processo termo-chimico che usa dischi rotanti e prodotti specifici per ricostruire lo strato protettivo della pietra. Il risultato è un marmo a specchio duraturo, senza cere che si consumano in poche settimane.',
      },
      {
        q: 'Quanto costa il trattamento di un pavimento in marmo a Parma?',
        a: 'Il costo dipende dalla superficie, dallo stato del marmo e dal tipo di trattamento necessario (cristallizzazione, levigatura o solo lucidatura). Il sopralluogo gratuito ci permette di valutare esattamente cosa serve senza impegno.',
      },
    ],
  },
  {
    id: '07',
    slug: 'pulizie-fine-cantiere',
    title: 'Fine Cantiere',
    shortDesc: 'Pulizie post-ristrutturazione a Parma: rimozione calce, cemento, polveri edili. Consegna l\'immobile pronto senza tracce di lavori.',
    longDesc: `Chi ha ristrutturato casa o un locale commerciale sa come finisce: il cantiere chiude, gli operai se ne vanno, e rimane quella patina di polvere ovunque che sembra impossibile da togliere. Calce sulle fughe del gres, silicone sui vetri, aloni di vernice sulle maniglie, polvere sottile che si deposita su tutto.

La pulizia post-cantiere non si fa con una passata di straccio. Richiede prodotti specifici per tipo di residuo: un decappante per la calce non è lo stesso che serve per rimuovere il cemento dai pavimenti. E soprattutto richiede di sapere cosa non fare: certi prodotti acidi su certi marmi creano danni permanenti.

Interveniamo su nuove costruzioni, ristrutturazioni complete e parziali, sia per privati che per agenzie immobiliari e costruttori. Il tempo di consegna è sempre una priorità: sappiamo che chi ha appena finito un cantiere ha la firma del rogito o l'inaugurazione del locale già fissata.

Operiamo in tutta la provincia di Parma, spesso in sinergia con imprese edili e general contractor che ci inseriscono come tappa finale del loro processo di consegna.

È proprio questa specializzazione post-cantiere che rende Fulgur Service un punto di riferimento per le pulizie di fine lavori a Parma e provincia.`,
    icon: 'HardHat',
    featured: false,
    keywords: ['pulizie fine cantiere Parma', 'pulizie post ristrutturazione Parma', 'rimozione calce cemento pavimenti', 'pulizie post cantiere edilizi Parma'],
    benefits: [
      'Rimozione calce, cemento e residui edili con prodotti specifici per materiale',
      'Pulizia vetri da silicone e vernici senza rigature',
      'Aspirazione polveri sottili con macchinari industriali (non aspiratori domestici)',
      'Lucidatura pavimenti nuovi per la prima volta',
      'Interventi rapidi per rispettare le date di consegna o rogito',
    ],
    sectors: ['Nuove costruzioni residenziali e commerciali', 'Ristrutturazioni complete di appartamenti', 'Locali commerciali nuovi da inaugurare', 'Cantieri edilizi con general contractor'],
    metaTitle: 'Pulizie Fine Cantiere Parma | Post Ristrutturazione Senza Tracce | Fulgur Service',
    metaDescription: 'Pulizie di fine cantiere a Parma: rimozione calce, cemento, silicone e polveri edili. Interventi rapidi per rispettare le date di consegna. Preventivo gratuito in 24h.',
    image: '/images/servizi/pulizie-fine-cantiere-parma.webp',
    imageAlt: 'Rimozione professionale di polveri edili e residui di cemento dopo una ristrutturazione in un appartamento',
    faq: [
      {
        q: 'Come si rimuove la calce dai pavimenti nuovi dopo un cantiere?',
        a: 'Con decappanti specifici per tipo di superficie, applicati a pH controllato. La calce su gres e su marmo si rimuove con prodotti diversi: usare quello sbagliato può rovinare la superficie permanentemente. Per questo è importante affidarsi a chi conosce i materiali.',
      },
      {
        q: 'Quanto tempo ci vuole per la pulizia di fine cantiere di un appartamento?',
        a: 'Un appartamento di 80-100 mq richiede in genere 1-2 giorni di lavoro, a seconda della quantità di residui e del tipo di pavimentazione. Forniamo una stima precisa dopo un rapido sopralluogo gratuito.',
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

Per le vetrate, utilizziamo l'acqua osmotizzata: priva di calcare e impurità, asciuga senza lasciare aloni. È la stessa tecnologia che usiamo per i pannelli fotovoltaici — e per lo stesso motivo: l'acqua di rete lascia sempre una traccia bianca.

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
    longDesc: `La cosa che sentiamo più spesso da chi ha un impianto fotovoltaico a Parma è: "Ma tanto ci pensa la pioggia." Capisco l'idea, ma purtroppo non è così. La pioggia sposta lo sporco, non lo rimuove. E quello che lascia — depositi di calcare, residui di guano semicoagulato, pollini primaverili — si indurisce col sole e blocca una parte della luce prima che raggiunga le celle.

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
    longDesc: `Il mare — o anche solo un rimessaggio al coperto — lascia sui natanti un tipo di sporco che non somiglia a nessun altro: sale cristallizzato, alghe, barnacle, residui di carena. Pulire uno scafo non è come pulire un pavimento industriale. Richiede prodotti compatibili con l'ambiente marino, metodi che rispettano i trattamenti antifouling e una certa dose di esperienza su cosa si può usare e cosa no.

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
    imageAlt: 'Igienizzazione naturale di un divano in tessuto tramite generatore di vapore secco a 180 gradi',
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
    longDesc: `Mandare qualcuno a casa propria richiede fiducia. Non è come chiamare un idraulico — la persona sarà nella tua cucina, nel tuo bagno, tra le cose di ogni giorno. Per questo nella selezione del personale per le pulizie civili siamo particolarmente attenti: contratti regolari, assicurazione INAIL, referenze verificate.

Il servizio che offriamo non è una ripulita veloce: è un piano personalizzato in base alle vostre abitudini. C'è chi ha bisogno di una pulizia profonda mensile e chi preferisce un passaggio settimanale leggero. C'è la signora anziana che vuole qualcuno di fisso ogni martedì mattina e c'è chi affitta su Airbnb e ha bisogno di un cambio rapido tra un ospite e l'altro.

Utilizziamo prodotti a basso impatto ambientale — detergenti certificati, pochi e specifici — perché in una casa ci vivono persone, non si fanno esperimenti chimici.

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
    imageAlt: 'Pulizia domestica accurata di una zona living con attenzione ai dettagli e prodotti a basso impatto ambientale',
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
    longDesc: `Spogliatoi e docce di palestre e piscine sono tra gli ambienti più difficili da tenere davvero igienici. Il combinato di umidità, temperatura e traffico intenso crea le condizioni ideali per batteri, funghi e muffe. Non è un problema estetico — è un rischio sanitario reale per i frequentatori.

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
    imageAlt: 'Pulizia e sanificazione professionale pavimentazione in parquet termico per palestre e strutture sportive a Parma',
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
    longDesc: `Dopo una serata in discoteca, la pulizia di un locale non è una questione di estetica: è una questione di tempo. La squadra che lavora di notte deve finire prima dell'orario di apertura della sera successiva — spesso con pochissime ore a disposizione, soprattutto nel fine settimana.

Lavoriamo nelle prime ore del mattino, quando il locale è ancora vuoto. Il protocollo di un locale notturno è specifico: rimozione di bicchieri e residui, lavaggio meccanizzato del pavimento (spesso in superficie scivolosa dopo una serata danzante), sanificazione intensiva dei bagni, smaltimento differenziato di vetro e rifiuti.

Le macchie più ostinate — drink versati sui divani, rossetto sulle pareti, cera delle candele sul pavimento — richiedono prodotti specifici e la conoscenza dei materiali su cui si lavora. Non tutto si toglie con il detergente universale.

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
    imageAlt: 'Intervento di pulizia post-evento e sanificazione in un locale a Parma con operazione di lavaggio meccanizzato',
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
    longDesc: `Una facciata esterna subisce ogni giorno l'attacco di smog, umidità, muffe, alghe e — nelle aree urbane — graffiti. Il degrado è lento ma progressivo, e spesso ci si accorge del problema solo quando è già avanzato: la pietra scurita, l'intonaco macchiato, il clinker ricoperto di muschio.

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
    imageAlt: 'Pulizia facciata esterna in quota a Parma con operatori Fulgur Service e sistemi ad acqua in alta pressione per rimozione smog',
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
    shortDesc: 'Sanificazione industriale HACCP per salumifici, prosciuttifici e stabilimenti alimentari nel distretto food di Parma. Detergenti food-grade, zero residui chimici, conformità CE 852/2004.',
    longDesc: `Parma è la capitale mondiale del prosciutto e dei salumi. È il territorio dove ogni fase di lavorazione — dalla macellazione alla stagionatura, dal confezionamento alla spedizione — è soggetta ai controlli più rigorosi d'Europa. In questo contesto, la sanificazione non è un servizio accessorio: è parte integrante del processo produttivo, e un errore può bloccare una linea intera o aprire la porta a un richiamo di prodotto.

Lavoriamo con salumifici e prosciuttifici della provincia di Parma da anni. Conosciamo le specificità di questi ambienti: le celle di stagionatura con temperature e umidità controllate che non possono essere alterate, i pavimenti in calcestruzzo trattato che richiedono prodotti compatibili con la normativa CE 852/2004, le cappe di aspirazione delle nebbie di grasso che vanno sgrassate senza lasciare residui a contatto con il prodotto. Dettagli che chi non lavora nel settore alimentare non conosce e non può improvvisare.

Il protocollo di intervento viene scritto insieme al responsabile HACCP di ogni stabilimento: nessuno conosce la linea meglio di chi ci lavora ogni giorno, e noi siamo lì per eseguire — con precisione, con i prodotti giusti, con le registrazioni che servono per ogni audit. Utilizziamo esclusivamente detergenti e disinfettanti food-grade con omologazione ministeriale e numero DIN, le cui schede tecniche rimangono nel dossier del cliente a disposizione per qualsiasi ispezione ASL o richiesta RASFF.

Gli interventi sono pianificati nelle finestre di fermo produzione — di notte, nel weekend, nei giorni di manutenzione programmata — per non interferire con i cicli produttivi e rispettare i tempi di carenza dei disinfettanti. Il turno del lunedì mattina trova la linea già pronta. Nessun ritardo, nessuna scusa.

È questa capacità di lavorare dentro i vincoli operativi dell'industria alimentare — rispettando norme, processi e persone — che distingue Fulgur Service da un'impresa di pulizie generica. Operiamo in tutta la Food Valley emiliana: da Langhirano a Felino, da Collecchio a San Secondo Parmense.`,
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
      'Detergenti e disinfettanti food-grade certificati CE 852/2004 e D.Lgs. 193/2007',
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
    metaDescription: 'Sanificazione HACCP per salumifici e prosciuttifici a Parma. Detergenti food-grade, zero residui chimici, interventi notturni. Conformi CE 852/2004. Food Valley emiliana. Preventivo gratuito.',
    image: '/images/gallery/sanificazione-pavimento-capannone-fulgur.webp',
    imageAlt: 'Sanificazione professionale HACCP di un pavimento industriale in uno stabilimento alimentare del distretto food di Parma con attrezzatura certificata',
    relatedSlugs: ['settore-sanitario', 'sanificazione-vapore', 'pulizie-industriali'],
    faq: [
      {
        q: 'Quali normative rispettate per la sanificazione nei salumifici?',
        a: 'Lavoriamo in conformità con il Regolamento CE 852/2004 sull\'igiene dei prodotti alimentari e il D.Lgs. 193/2007 sui prodotti biocidi. Tutti i detergenti e disinfettanti sono food-grade con omologazione ministeriale e numero DIN. Per ogni intervento rilasciamo una registrazione firmata da conservare nel manuale HACCP, valida per audit ASL e ispezioni RASFF.',
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

// Servizi integrati — Impresa 360°
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
