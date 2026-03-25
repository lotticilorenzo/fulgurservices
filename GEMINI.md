# GEMINI.md — Fulgur Service
## Contesto di progetto · Leggi TUTTO prima di scrivere una riga di codice

> Questo file è la fonte unica di verità del progetto. Contiene ogni testo, ogni dato, ogni specifica. Non inventare mai nulla — tutto è qui. Leggi dall'inizio alla fine prima di iniziare qualsiasi sessione.

---

## 0. ISTRUZIONI PER L'AGENT — LEGGILE PRIMA DI TUTTO

```
PRIMA di scrivere codice, in ogni sessione:
1. Leggi questo file GEMINI.md dall'inizio alla fine
2. Leggi SKILL.md per le regole tecniche e di design  
3. Guarda il TASK LOG in fondo per capire dove eravamo rimasti
4. Aggiorna il TASK LOG alla fine di ogni sessione

PRINCIPI OPERATIVI:
- Se trovi un errore: analizza, risolvi, migliora il design nel processo
- Se non sai qualcosa: cerca la soluzione corretta, non improvvisare
- Se stai per deviare dalla palette o dai font: fermati e riallineati
- Ogni componente che costruisci deve essere il MIGLIORE della sua categoria
- Non chiedere conferma per scelte di design ovvie — esegui al massimo
```

---

## 1. CHI È IL CLIENTE

**Fulgur Service SRL** — Impresa di pulizie professionali  
**Indirizzo:** Via Alfredo Veroni, 20 - 43122 Parma (PR)  
**P.IVA:** 03063010346 | **REA:** 353051 | **URI:** PARMA  
**Cap. Soc.:** €10.000  
**Tel:** +39 338 316 0091 *(cliccabile su mobile)*  
**Email:** fulgurservice@gmail.com  
**Instagram:** https://www.instagram.com/fulgurservice/  
**Sito attuale (obsoleto):** https://www.fulgurservice.it *(su Shopify — da sostituire)*  
**WhatsApp link:** https://wa.me/393383160091?text=Ciao%2C%20vorrei%20richiedere%20un%20sopralluogo%20gratuito

---

## 2. BRAND IDENTITY

### Il brand in tre parole
**Energia · Natura · Precisione**

### Tagline ufficiale
> "Puliamo il futuro con l'energia della natura"

### Il brand in una frase
Impresa giovane e innovativa con 35 anni di esperienza del padre — il punto d'incontro tra la visione fresca di una nuova generazione e la solidità del lavoro costruito nel tempo.

### Logo
- Cerchio `#1A1A2E` come forma base con fulmine al centro
- Fulmine con gradiente `#4ECBA0` → `#1B5E6E` (verde acqua → teal scuro)
- Testo "FULGUR" (sopra, curvo) + "SERVICE" (sotto, curvo) in `#4ECBA0`
- Il cerchio + fulmine = energia + completezza + movimento

### Palette (estratta dal logo — NON modificare)
```
Accento primario:   #4ECBA0  ← verde acqua (dal testo logo)
Accento scuro:      #2A8C7A  ← teal profondo (sfumatura bassa fulmine)
Accento chiaro:     #6DD9B2  ← highlight fulmine
Background:         #0D1117  ← navy quasi-nero
Background 2:       #12151E  ← sezioni alternate
Card bg:            #161B24  ← cards standard
Card hover:         #1C2333  ← cards hover state
Cerchio logo:       #1A1A2E  ← riferimento diretto al logo
Testo primario:     #F0F4F2  ← bianco sporco
Testo secondario:   #8A9BAE  ← grigio-blu
Testo muto:         #4A5568  ← testo accessorio
```

### Typography
```
Display:  Syne 700/800 — geometrico, forte, coerente con il cerchio del logo
Body:     DM Sans 300/400/500 — pulito, professionale, leggibile
Dati:     DM Mono 400/500 — per badge, numeri, etichette tecniche
```

---

## 3. SERVIZI — DATI COMPLETI

```typescript
// lib/services-data.ts — copia esatta questo file

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
  sectors: string[]  // a chi è rivolto
  metaTitle: string
  metaDescription: string
}

export const SERVICES: Service[] = [
  {
    id: '01',
    slug: 'pulizie-aziendali',
    title: 'Pulizie Aziendali',
    shortDesc: 'Uffici, sedi operative e spazi commerciali sempre impeccabili.',
    longDesc: 'Garantiamo ambienti di lavoro puliti, igienici e professionali. Gestiamo pulizie ordinarie e straordinarie per uffici, sedi aziendali, showroom e spazi commerciali di qualsiasi dimensione. Team dedicato, prodotti eco-certificati, interventi programmati su misura.',
    icon: 'Buildings',
    featured: true,
    keywords: ['pulizie uffici Parma', 'pulizie aziendali Parma', 'pulizie commerciali Parma'],
    benefits: ['Pulizie ordinarie giornaliere/settimanali', 'Pulizie straordinarie a fondo', 'Sanificazione ambienti', 'Prodotti eco-sostenibili certificati', 'Team dedicato e formato'],
    sectors: ['Uffici direzionali', 'Open space', 'Showroom', 'Negozi', 'Banche e assicurazioni'],
    metaTitle: 'Pulizie Aziendali Parma | Uffici e Spazi Commerciali — Fulgur Service',
    metaDescription: 'Pulizie professionali per uffici, sedi aziendali e spazi commerciali a Parma. Team qualificato, prodotti eco-certificati, sopralluogo gratuito. Chiama ora.',
  },
  {
    id: '02',
    slug: 'pulizie-industriali',
    title: 'Pulizie Industriali',
    shortDesc: 'Capannoni, magazzini e impianti produttivi: pulizia al livello industriale.',
    longDesc: 'Interventi specializzati per ambienti industriali: capannoni produttivi, magazzini logistici, impianti di produzione, aree di carico/scarico. Macchinari professionali ad alta prestazione, operatori formati per ambienti difficili.',
    icon: 'Factory',
    featured: true,
    keywords: ['pulizie industriali Parma', 'pulizie capannoni Parma', 'pulizie magazzini Parma'],
    benefits: ['Pulizia pavimenti industriali', 'Rimozione oli e grassi', 'Pulizia macchinari e linee', 'Smaltimento rifiuti industriali', 'Interventi in orari produzione ferma'],
    sectors: ['Capannoni produttivi', 'Magazzini logistici', 'Impianti alimentari', 'Officine meccaniche', 'Centri distribuzione'],
    metaTitle: 'Pulizie Industriali Parma | Capannoni e Magazzini — Fulgur Service',
    metaDescription: 'Pulizie industriali a Parma per capannoni, magazzini e impianti produttivi. Macchinari professionali, operatori specializzati. 35 anni di esperienza. Preventivo gratuito.',
  },
  {
    id: '03',
    slug: 'settore-sanitario',
    title: 'Settore Sanitario',
    shortDesc: 'Protocolli HACCP, prodotti certificati, ambienti sempre sicuri.',
    longDesc: 'La pulizia in ambienti sanitari non è ordinaria amministrazione — è igiene clinica. Seguiamo protocolli certificati, usiamo prodotti virucidi e battericidi approvati, con operatori formati specificamente per ambienti ad alto rischio.',
    icon: 'FirstAidKit',
    featured: true,
    keywords: ['sanificazione Parma', 'pulizie sanitarie Parma', 'pulizie cliniche Parma', 'igienizzazione medica Parma'],
    benefits: ['Protocolli HACCP certificati', 'Prodotti virucidi e battericidi', 'Sanificazione ad ozono', 'Pulizia sale operatorie', 'Report interventi documentati'],
    sectors: ['Cliniche e poliambulatori', 'Studi medici', 'Dentisti e laboratori', 'Farmacie', 'Case di cura'],
    metaTitle: 'Sanificazione e Pulizie Sanitarie Parma | Cliniche e Studi — Fulgur Service',
    metaDescription: 'Sanificazione e pulizie professionali per strutture sanitarie a Parma. Protocolli HACCP, prodotti certificati, personale specializzato. Contattaci.',
  },
  {
    id: '04',
    slug: 'pulizie-condomini',
    title: 'Pulizie Condomini',
    shortDesc: 'Parti comuni, scale, androni e aree esterne: gestione completa.',
    longDesc: 'Gestiamo la pulizia di tutte le parti comuni condominiali: scale, androni, ascensori, garage, cantine, aree verdi e parcheggi. Contratti annuali con report mensili per gli amministratori. Rendicontazione digitale trasparente.',
    icon: 'BuildingApartment',
    featured: false,
    keywords: ['pulizie condomini Parma', 'pulizie scale condominio Parma', 'pulizie parti comuni Parma'],
    benefits: ['Pulizie scale e androni', 'Pulizia ascensori', 'Aree garage e cantine', 'Aree verdi esterne', 'Report per amministratori'],
    sectors: ['Condomini residenziali', 'Palazzi signorili', 'Complessi condominiali', 'Residence'],
    metaTitle: 'Pulizie Condomini Parma | Parti Comuni e Scale — Fulgur Service',
    metaDescription: 'Pulizie professionali per condomini a Parma. Scale, androni, garage, aree comuni. Contratti annuali, report digitali per amministratori. Sopralluogo gratuito.',
  },
  {
    id: '05',
    slug: 'settore-alberghiero',
    title: 'Settore Alberghiero',
    shortDesc: 'Hotel, B&B e strutture ricettive: standard da 5 stelle.',
    longDesc: 'Nel settore alberghiero la pulizia è parte dell\'esperienza degli ospiti. Gestiamo pulizia camere, spazi comuni, ristoranti, spa e aree esterne con la cura e la discrezione che il settore richiede. Interventi programmati in base alle esigenze operative.',
    icon: 'Bed',
    featured: false,
    keywords: ['pulizie hotel Parma', 'pulizie alberghi Parma', 'pulizie B&B Parma', 'pulizie strutture ricettive Parma'],
    benefits: ['Pulizia camere e suite', 'Spazi comuni e lobby', 'Ristoranti e cucine', 'Spa e piscine', 'Aree esterne e parcheggi'],
    sectors: ['Hotel 3-5 stelle', 'B&B e affittacamere', 'Agriturismi', 'Residence turistici'],
    metaTitle: 'Pulizie Hotel e B&B Parma | Settore Alberghiero — Fulgur Service',
    metaDescription: 'Pulizie professionali per hotel, B&B e strutture ricettive a Parma. Standard alberghieri garantiti. Team discreto e affidabile. Preventivo gratuito.',
  },
  {
    id: '06',
    slug: 'trattamento-superfici',
    title: 'Trattamento Superfici',
    shortDesc: 'Gres, marmo, parquet, cotto, resina: protezione e valorizzazione.',
    longDesc: 'Non solo pulizia — trattiamo le superfici per proteggerle e valorizzarle nel tempo. Cristallizzazione e lucidatura marmo, trattamento e impregnazione gres porcellanato, oliatura e lucidatura parquet, trattamento cotto e resina, pulizia e sanificazione moquette.',
    icon: 'Sparkle',
    featured: true,
    keywords: ['trattamento superfici Parma', 'lucidatura pavimenti Parma', 'cristallizzazione marmo Parma', 'trattamento gres Parma'],
    benefits: ['Cristallizzazione marmo', 'Trattamento gres e gres porcellanato', 'Oliatura parquet', 'Trattamento cotto', 'Pulizia resina e moquette'],
    sectors: ['Abitazioni private', 'Uffici rappresentanza', 'Negozi e showroom', 'Hotel di lusso', 'Musei e gallerie'],
    metaTitle: 'Trattamento Superfici Parma | Marmo, Parquet, Gres — Fulgur Service',
    metaDescription: 'Trattamento professionale superfici a Parma: marmo, parquet, gres, cotto, resina. Cristallizzazione, lucidatura, protezione. Sopralluogo gratuito.',
  },
  {
    id: '07',
    slug: 'pulizie-fine-cantiere',
    title: 'Fine Cantiere',
    shortDesc: 'Post-costruzione e ristrutturazione: consegni uno spazio impeccabile.',
    longDesc: 'Le pulizie di fine cantiere richiedono esperienza e attrezzatura specifica: rimozione calce, cemento, vernice, residui di lavorazione, polveri edili. Interveniamo su nuove costruzioni, ristrutturazioni complete e parziali. Il risultato è uno spazio pronto alla consegna.',
    icon: 'HardHat',
    featured: false,
    keywords: ['pulizie fine cantiere Parma', 'pulizie post cantiere Parma', 'pulizie post ristrutturazione Parma'],
    benefits: ['Rimozione calce e cemento', 'Pulizia vetri da residui', 'Aspirazione polveri edili', 'Lucidatura pavimenti nuovi', 'Sgombero rifiuti edili'],
    sectors: ['Nuove costruzioni', 'Ristrutturazioni complete', 'Appartamenti da vendere', 'Locali commerciali nuovi'],
    metaTitle: 'Pulizie Fine Cantiere Parma | Post Costruzione — Fulgur Service',
    metaDescription: 'Pulizie di fine cantiere a Parma per nuove costruzioni e ristrutturazioni. Rimozione calce, cemento, polveri edili. Consegna impeccabile garantita.',
  },
  {
    id: '08',
    slug: 'vetrate-altezza',
    title: 'Vetrate in Altezza',
    shortDesc: 'Facciate vetrate, finestre e lucernari: pulizia in quota in sicurezza.',
    longDesc: 'La pulizia di vetrate e facciate in altezza richiede attrezzatura specialistica e operatori certificati per il lavoro in quota. Gestiamo finestre alte, facciate vetrate di edifici commerciali e industriali, lucernari e cupole con sistemi di sicurezza certificati.',
    icon: 'ArrowsOutSimple',
    featured: false,
    keywords: ['pulizia vetrate altezza Parma', 'lavaggio vetri altezza Parma', 'pulizia facciate vetrate Parma'],
    benefits: ['Operatori certificati lavoro in quota', 'Funi e piattaforme certificate', 'Facciate vetrate edifici', 'Lucernari e cupole', 'Finestre industriali'],
    sectors: ['Palazzi direzionali', 'Centri commerciali', 'Edifici industriali', 'Strutture pubbliche'],
    metaTitle: 'Pulizia Vetrate in Altezza Parma | Facciate Vetrate — Fulgur Service',
    metaDescription: 'Pulizia professionale vetrate in altezza a Parma. Operatori certificati, funi e piattaforme omologate. Facciate, lucernari, finestre industriali.',
  },
  {
    id: '09',
    slug: 'pannelli-fotovoltaici',
    title: 'Pulizia Pannelli Fotovoltaici',
    shortDesc: 'Pannelli sporchi = energia persa. Massimizza il rendimento del tuo impianto.',
    longDesc: 'I pannelli fotovoltaici sporchi perdono fino al 30% di efficienza. La nostra pulizia professionale rimuove polvere, pollini, depositi calcarei e guano senza danneggiare i pannelli, ripristinando la massima produzione energetica. Interventi periodici programmabili.',
    icon: 'Sun',
    featured: false,
    keywords: ['pulizia pannelli fotovoltaici Parma', 'lavaggio pannelli solari Parma', 'manutenzione fotovoltaico Parma'],
    benefits: ['Recupero fino al 30% di efficienza', 'Prodotti non abrasivi certificati', 'Acqua demineralizzata', 'Nessun danno ai pannelli', 'Interventi periodici programmati'],
    sectors: ['Impianti residenziali', 'Impianti industriali', 'Campi fotovoltaici', 'Capannoni produttivi'],
    metaTitle: 'Pulizia Pannelli Fotovoltaici Parma | Massima Efficienza — Fulgur Service',
    metaDescription: 'Pulizia professionale pannelli fotovoltaici a Parma. Recupera fino al 30% di efficienza. Prodotti non abrasivi, acqua demineralizzata. Preventivo gratuito.',
  },
  {
    id: '10',
    slug: 'cantiere-navale',
    title: 'Cantiere Navale',
    shortDesc: 'Imbarcazioni, porti e ambienti marini: pulizia specializzata.',
    longDesc: 'Pulizia professionale per cantieri navali, imbarcazioni da diporto e ambienti portuali. Rimozione alghe, barnacle e depositi marini. Pulizia interni ed esterni barche, pontili e strutture portuali. Prodotti specifici per ambiente marino.',
    icon: 'Anchor',
    featured: false,
    keywords: ['pulizia cantiere navale', 'pulizia barche Parma', 'pulizia imbarcazioni'],
    benefits: ['Pulizia scafi e carene', 'Rimozione alghe e barnacle', 'Pulizia interni imbarcazioni', 'Strutture portuali', 'Prodotti eco per ambiente marino'],
    sectors: ['Cantieri navali', 'Porti turistici', 'Rimessaggi barche', 'Imbarcazioni da diporto'],
    metaTitle: 'Pulizia Cantiere Navale | Imbarcazioni e Porti — Fulgur Service',
    metaDescription: 'Pulizia professionale cantieri navali e imbarcazioni. Rimozione alghe, pulizia scafi, strutture portuali. Prodotti eco per ambiente marino.',
  },
  {
    id: '11',
    slug: 'sanificazione-vapore',
    title: 'Sanificazione Vapore 180°',
    shortDesc: 'Vapore saturo a 180°: igienizzazione profonda senza chimica aggressiva.',
    longDesc: 'La sanificazione con vapore saturo a 180° elimina il 99.9% di batteri, virus e acari senza utilizzare prodotti chimici aggressivi. Ideale per ambienti sensibili, famiglie con bambini, strutture sanitarie e ovunque sia richiesta igienizzazione profonda e sicura.',
    icon: 'Wind',
    featured: false,
    keywords: ['sanificazione vapore Parma', 'igienizzazione vapore Parma', 'sanificazione naturale Parma'],
    benefits: ['Elimina 99.9% batteri e virus', 'Zero prodotti chimici aggressivi', 'Sicuro per bambini e allergici', 'Rimuove acari e allergeni', 'Igienizza tessuti e imbottiture'],
    sectors: ['Abitazioni con bambini/anziani', 'Strutture sanitarie', 'Asili e scuole', 'Alberghi', 'Ristoranti e cucine'],
    metaTitle: 'Sanificazione con Vapore 180° Parma | Igienizzazione Profonda — Fulgur Service',
    metaDescription: 'Sanificazione con vapore saturo a 180° a Parma. Elimina 99.9% di batteri e virus senza chimica aggressiva. Sicuro, efficace, eco-sostenibile.',
  },
  {
    id: '12',
    slug: 'pulizie-civili',
    title: 'Pulizie Civili',
    shortDesc: 'Abitazioni private, ville e appartamenti: la tua casa è in buone mani.',
    longDesc: 'Pulizie residenziali per abitazioni private di qualsiasi dimensione. Pulizie ordinarie periodiche o straordinarie di fondo. Prodotti delicati ma efficaci. Team discreto e di fiducia, puntuale e professionale. La tua casa trattata come se fosse la nostra.',
    icon: 'House',
    featured: false,
    keywords: ['pulizie civili Parma', 'pulizie casa Parma', 'pulizie appartamento Parma', 'pulizie villa Parma'],
    benefits: ['Pulizie ordinarie periodiche', 'Pulizie straordinarie di fondo', 'Prodotti delicati e certificati', 'Team discreto e di fiducia', 'Orari flessibili'],
    sectors: ['Appartamenti', 'Ville private', 'Abitazioni in affitto', 'Case vacanza'],
    metaTitle: 'Pulizie Civili Parma | Casa e Abitazioni Private — Fulgur Service',
    metaDescription: 'Pulizie civili professionali a Parma per appartamenti, ville e abitazioni private. Team discreto, prodotti delicati, puntualità garantita. Preventivo gratuito.',
  },
]
```

---

## 4. SERVIZI INTEGRATI — IMPRESA 360°

```typescript
export const INTEGRATED_SERVICES = [
  {
    title: 'Manutenzione idraulica',
    desc: 'Interventi idraulici di manutenzione ordinaria inclusi per i clienti Fulgur',
    icon: 'Drop',
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
    title: 'Fornitura carta e sapone',
    desc: 'Fornitura materiali di consumo e servizio lavanderia',
    icon: 'Basket',
  },
]
```

---

## 5. COPY UFFICIALE — USA QUESTI TESTI ESATTI

### Hero
```
H1 Line 1: "Puliamo il Futuro"
H1 Line 2: "con l'Energia"     ← in outline/stroke accent
H1 Line 3: "della Natura"      ← in var(--accent) pieno

Subtitle:
"Impresa di pulizie professionali a Parma e provincia.
35 anni di esperienza, tecnologie all'avanguardia,
soluzioni sostenibili per ogni ambiente."

Badge: "Parma · Dal 1994"

Stats inline:
"35+ anni  ·  500+ clienti  ·  12 settori  ·  100% sopralluogo gratuito"

CTA primaria: "Richiedi Sopralluogo Gratuito"
CTA secondaria: "Scopri i Servizi"
```

### About / Chi siamo
```
Label: "— CHI SIAMO"
H2: "Tradizione e innovazione,\ninsieme."

Paragrafo 1:
"Fulgur Service è un'impresa giovane, nata da idee chiare e innovative,
con alle spalle 35 anni di esperienza: siamo il punto d'incontro tra
la visione fresca di una nuova generazione e la solidità del lavoro
costruito da mio padre."

Paragrafo 2:
"Per noi la pulizia non è un'attività meccanica: non siamo semplici
fornitori, ma partner che si prendono cura dell'ambiente del cliente a 360°."

Lista valori:
• "Prodotti a basso impatto ambientale quando possibile"
• "Referente unico per tutti i servizi integrati"
• "Team qualificato, assicurato e formato continuamente"
• "Sopralluogo sempre gratuito, preventivo in 24 ore"
```

### Filosofia / Manifesto
```
Parte piccola (grigio muto):
"La maggior parte delle imprese di pulizie si concentra su:
'pulire veloce, al prezzo più basso.'"

Parte grande (Syne 800, massive):
"Noi ci concentriamo su:
prendersi CURA
dell'ambiente del cliente
come se fosse nostro."

← la parola "CURA" in var(--accent)
```

### Come lavoriamo — 4 step
```
01: "Sopralluogo gratuito"
    "Veniamo da te senza impegno. Valutiamo l'ambiente,
     capiamo le tue esigenze, ascoltiamo ogni dettaglio."

02: "Preventivo in 24 ore"
    "Entro 24 ore ricevi un preventivo dettagliato e trasparente.
     Nessuna sorpresa, nessun costo nascosto."

03: "Intervento professionale"
    "Il nostro team qualificato interviene con macchinari
     professionali e prodotti certificati. Puntualità garantita."

04: "Controllo e garanzia"
    "Verifichiamo ogni risultato prima di chiudere l'intervento.
     La tua soddisfazione è la nostra misura del successo."
```

### Stats
```
35+   "Anni di esperienza" / "Nel settore pulizie professionali"
500+  "Clienti soddisfatti" / "In Emilia-Romagna"
12    "Settori di intervento" / "Dal civile all'industriale"
24h   "Preventivo garantito" / "Sopralluogo sempre gratuito"
```

### CTA Section
```
H2: "Pronto a trasformare i tuoi spazi?"
Sub: "Sopralluogo gratuito · Preventivo in 24h · Nessun impegno"
Button: "Richiedi Sopralluogo Gratuito"
Secondary: "+39 338 316 0091  |  fulgurservice@gmail.com"
```

### Impresa 360° intro
```
H2: "Un partner unico per tutto."
Sub: "Per i clienti Fulgur, oltre alle pulizie gestiamo anche 
     manutenzione idraulica, edile ed elettrica ordinaria.
     Un solo referente per tutto ciò che riguarda i tuoi spazi."
```

---

## 6. FORM PREVENTIVO — STRUTTURA COMPLETA

```typescript
// components/forms/PreventiveForm.tsx

// Progress bar: step corrente / 5 in DM Mono
// Transizione tra step: slide laterale Framer Motion x: [300,0] → x: [0,-300]

const FORM_STEPS = [
  {
    id: 1,
    title: "Di cosa hai bisogno?",
    subtitle: "Puoi selezionare più servizi",
    type: "checkbox-grid",
    // Mostra tutti i 12 servizi come checkbox card con icona
  },
  {
    id: 2,
    title: "Descrivici il tuo spazio",
    subtitle: "Ci aiuta a darti un preventivo più preciso",
    fields: [
      { id: 'tipo_ambiente', label: 'Tipo di ambiente', type: 'select',
        options: ['Ufficio / Spazio commerciale', 'Capannone / Magazzino',
                  'Condominio / Parti comuni', 'Abitazione privata',
                  'Hotel / Struttura ricettiva', 'Clinica / Studio medico',
                  'Cantiere / Post ristrutturazione', 'Altro'] },
      { id: 'metratura', label: 'Metratura approssimativa (m²)', type: 'number', placeholder: 'es. 250' },
      { id: 'note_ambiente', label: 'Note sull\'ambiente (opzionale)', type: 'textarea', placeholder: 'Piano, caratteristiche particolari...' },
    ]
  },
  {
    id: 3,
    title: "Con quale frequenza?",
    subtitle: "Scegli la soluzione più adatta",
    type: "radio-cards",
    options: [
      { id: 'una-tantum',    emoji: null, label: 'Una tantum',     desc: 'Intervento singolo' },
      { id: 'settimanale',   emoji: null, label: 'Settimanale',    desc: '1 o più volte/settimana' },
      { id: 'quindicinale',  emoji: null, label: 'Quindicinale',   desc: 'Ogni 2 settimane' },
      { id: 'mensile',       emoji: null, label: 'Mensile',        desc: '1 volta al mese' },
      { id: 'personalizzata',emoji: null, label: 'Personalizzata', desc: 'Da definire insieme' },
    ]
  },
  {
    id: 4,
    title: "Dove sei?",
    subtitle: "Operiamo a Parma e in tutta la provincia",
    fields: [
      { id: 'citta',     label: 'Città / Comune',      type: 'text', placeholder: 'es. Parma, Fidenza, Salsomaggiore...', required: true },
      { id: 'indirizzo', label: 'Indirizzo (opzionale)', type: 'text', placeholder: 'Via...' },
    ]
  },
  {
    id: 5,
    title: "Come ti contattare?",
    subtitle: "Ti risponderemo entro 24 ore",
    fields: [
      { id: 'nome',     label: 'Nome e Cognome',         type: 'text',     required: true },
      { id: 'azienda',  label: 'Azienda (opzionale)',    type: 'text',     required: false },
      { id: 'email',    label: 'Email',                  type: 'email',    required: true },
      { id: 'telefono', label: 'Telefono',               type: 'tel',      required: true },
      { id: 'note',     label: 'Note aggiuntive',        type: 'textarea', required: false,
        placeholder: 'Orari preferiti per il sopralluogo, esigenze particolari...' },
      { id: 'privacy',  label: 'Accetto il trattamento dei dati personali ai sensi del GDPR',
        type: 'checkbox', required: true },
    ]
  },
]

// SUCCESS STATE:
// Animazione checkmark SVG che si disegna
// H3: "Richiesta inviata!"
// P: "Ti contatteremo entro 24 ore per fissare il sopralluogo gratuito."
// Tel cliccabile: "+39 338 316 0091"

// VALIDAZIONE Zod:
const schema = z.object({
  servizi: z.array(z.string()).min(1, 'Seleziona almeno un servizio'),
  tipo_ambiente: z.string().min(1, 'Seleziona il tipo di ambiente'),
  metratura: z.number().optional(),
  frequenza: z.string().min(1, 'Seleziona una frequenza'),
  citta: z.string().min(2, 'Inserisci la città'),
  nome: z.string().min(2, 'Inserisci il tuo nome'),
  email: z.string().email('Email non valida'),
  telefono: z.string().min(8, 'Telefono non valido'),
  privacy: z.boolean().refine(v => v === true, 'Devi accettare la privacy policy'),
})
```

### Template email (API route)
```
Oggetto: [PREVENTIVO] {servizi} - {nome} - {citta}

Corpo:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NUOVA RICHIESTA PREVENTIVO — Fulgur Service
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTATTO:
Nome: {nome}
Azienda: {azienda}
Email: {email}
Telefono: {telefono}

RICHIESTA:
Servizi: {servizi}
Tipo ambiente: {tipo_ambiente}
Metratura: {metratura} m²
Frequenza: {frequenza}
Città: {citta} {indirizzo}

NOTE: {note}

Ricevuto il: {data_ora}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 7. SEO — METADATA COMPLETI

```typescript
// lib/seo.ts

export const METADATA = {
  home: {
    title: 'Fulgur Service — Impresa di Pulizie Professionali a Parma',
    description: 'Impresa di pulizie professionali a Parma e provincia. Aziendali, industriali, sanitarie, condomini, hotel. Sopralluogo gratuito, preventivo in 24h. Chiama ora.',
    keywords: 'impresa pulizie Parma, pulizie professionali Parma, sanificazione Parma',
  },
  servizi: {
    title: 'Tutti i Servizi | Fulgur Service Parma',
    description: '12 settori di intervento: pulizie aziendali, industriali, sanitarie, condomini, hotel, trattamento superfici e molto altro. Parma e provincia.',
  },
  chiSiamo: {
    title: 'Chi Siamo | 30 Anni di Esperienza — Fulgur Service Parma',
    description: 'Fulgur Service: impresa giovane con 30 anni di esperienza del settore. Team qualificato, prodotti eco-sostenibili, referente unico per tutti i tuoi spazi.',
  },
  preventivo: {
    title: 'Richiedi Preventivo Gratuito | Sopralluogo in 24h — Fulgur Service',
    description: 'Richiedi un sopralluogo gratuito. Preventivo personalizzato in 24 ore, nessun impegno. Fulgur Service, impresa di pulizie a Parma.',
  },
  contatti: {
    title: 'Contatti | Fulgur Service Parma',
    description: 'Contatta Fulgur Service: +39 338 316 0091 · fulgurservice@gmail.com · Via Alfredo Veroni, 20 - 43122 Parma. Risposta garantita entro 24 ore.',
  },
}

// Structured Data — copia in ogni pagina/layout
export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.fulgurservice.it/#organization",
  "name": "Fulgur Service SRL",
  "legalName": "Fulgur Service SRL",
  "url": "https://www.fulgurservice.it",
  "logo": "https://www.fulgurservice.it/images/logo.svg",
  "image": "https://www.fulgurservice.it/og/home.jpg",
  "description": "Impresa di pulizie professionali a Parma e provincia",
  "telephone": "+39-338-316-0091",
  "email": "fulgurservice@gmail.com",
  "vatID": "03063010346",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Alfredo Veroni, 20",
    "addressLocality": "Parma",
    "addressRegion": "PR",
    "postalCode": "43122",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.8197,
    "longitude": 10.3541
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/fulgurservice/"
  ],
  "priceRange": "€€",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 44.8197, "longitude": 10.3541 },
    "geoRadius": "50000"
  }
}
```

---

## 8. DIPENDENZE — COMANDI ESATTI

```bash
# 1. Crea il progetto
npx create-next-app@latest fulgur-service \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --no-git \
  --import-alias "@/*"

cd fulgur-service

# 2. Animazioni
npm install framer-motion gsap @gsap/react

# 3. Icone (SEMPRE phosphor, MAI lucide per questo progetto)
npm install @phosphor-icons/react

# 4. Form e validazione
npm install react-hook-form zod @hookform/resolvers

# 5. Utilità CSS
npm install clsx tailwind-merge

# 6. Email per form preventivo
npm install nodemailer
npm install --save-dev @types/nodemailer

# 7. Verifica installazione
npm run dev
```

---

## 9. ISTRUZIONI ANTIGRAVITY — COME LAVORARE

### All'inizio di ogni sessione
```
1. "Leggi GEMINI.md e SKILL.md"
2. Guarda il TASK LOG qui sotto
3. Dimmi dove eravamo rimasti
4. Inizia dal prossimo task senza che io debba rispiegare nulla
```

### Durante la sessione
```
- Se hai un dubbio sul design: consulta SKILL.md
- Se hai un dubbio sul contenuto: consulta GEMINI.md (questo file)
- Se trovi un errore: risolvilo e migliora il design nel processo
- Dopo ogni componente completato: aggiorna il TASK LOG
```

### Prompt ottimale da usare in Antigravity
```
"Leggi GEMINI.md e SKILL.md attentamente. 
Poi costruisci [COMPONENTE] seguendo esattamente le specifiche.
Il risultato deve sembrare fatto da un team di 10 designer senior.
Non fermarti mai per chiedere conferma su scelte ovvie — esegui al massimo."
```

### Quando qualcosa non funziona
```
"Hai un errore in [FILE]. Analizza il messaggio di errore completo,
trova la causa root (non il sintomo), risolvilo nel modo corretto,
e nel processo migliora il design se puoi."
```

---

## 10. TASK LOG — AGGIORNA OGNI SESSIONE

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SESSIONE 1 — Data: 16/03/2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Status: SETUP E LAYOUT BASE COMPLETATO

SETUP:
  [x] npx create-next-app fulgur-service
  [x] Installazione dipendenze
  [x] tailwind.config.ts configurato
  [x] globals.css con CSS variables + noise
  [x] lib/utils.ts (cn helper)
  [x] lib/motion.ts (Framer variants)
  [x] lib/services-data.ts (dati servizi)
  [x] lib/seo.ts (metadata)

LAYOUT:
  [x] app/layout.tsx (font + metadata globali)
  [x] components/layout/Navbar.tsx
  [ ] components/layout/Footer.tsx
  [x] components/layout/NoiseOverlay.tsx
  [x] components/ui/WhatsAppButton.tsx

HOME PAGE SEZIONI:
  [x] HeroSection (GSAP + particelle)
  [x] ServicesGrid (Bento)
  [x] StatsSection (CounterUp)
  [x] AboutSection (parallax)
  [x] PhilosophySection (GSAP split text)
  [x] ProcessSteps (sticky stack)
  [x] BrandsMarquee (ticker)
  [x] CTASection
  [x] Home Page Assembled & Validated (npm run build)  
UI COMPONENTS:
  [x] ParticleField (canvas 2D)
  [x] MagneticButton (useMotionValue)
  [x] SpotlightCard (radial gradient)
  [x] ScrollReveal (IntersectionObserver)
  [x] CounterUp (animated number)
  [x] GlowBadge (pulse dot)
  [x] SectionLabel (mono label)
  [x] GradientText (css utility)

FORM:
  [ ] components/forms/  [x] PreventiveForm (Multi-step + Framer Motion + Zod + Hook Form)
  [x] API API route (Nodemailer)
  [x] Preventivo Page (Desktop/Mobile split layout)

PAGINE INTERNE:
  [x] app/servizi/page.tsx (hub servizi)
  [x] app/servizi/[slug]/page.tsx (12 pagine dinamiche generate via generateStaticParams)
  [x] app/chi-siamo/page.tsx
  [x] app/gallery/page.tsx (in fase successiva se prevista)
  [x] app/macchinari/page.tsx
  [x] app/contatti/page.tsx (split layout info/form)
  [x] app/not-found.tsx (404 custom style)
  [x] app/loading.tsx (spinner svg fulmine)

SEO:
  [ ] app/sitemap.ts
  [ ] public/robots.txt
  [x] Structured data JSON-LD
  [ ] OG images per ogni pagina

ULTIMO AGGIORNAMENTO: Ripristinato logo EU Ecolabel (versione locale). Aggiunte brochure PDF per Macchine a Vapore. Sostituita immagine Lavasciuga con video in loop in Macchinari. Corretta etichetta Gallery. Allineamento anni esperienza (35+) completato. Push su GitHub finale.
SESSIONE PRECEDENTE: Progetto Next.js inizializzato, configurazione Tailwind (v4) CSS, dipendenze installate, componenti layout/UI base creati, JSON-LD in app/layout.tsx e check TypeScript superato senza errori.
NOTE: La configurazione Tailwind è in v4 (@theme in globals.css) anziché tailwind.config.ts, aggiornato per Next.js 15.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```