# CLAUDE.md — Fulgur Service
Leggi questo file INTERO prima di scrivere qualsiasi riga di codice.
È la fonte di verità del progetto. Non assumere nulla che non sia scritto qui.

---

## 1. IDENTITÀ BRAND

**Nome:** Fulgur Service SRL — Impresa di pulizie professionali
**Città:** Parma, Italia (opera in tutta la provincia e Emilia-Romagna)
**P.IVA:** 03063010346
**Tel:** +39 338 316 0091
**Email:** fulgurservice@gmail.com
**Instagram:** https://www.instagram.com/fulgurservicesrl_/
**WhatsApp:** https://wa.me/393383160091?text=Ciao%2C%20vorrei%20richiedere%20un%20sopralluogo%20gratuito

**Brand in tre parole:** Energia · Natura · Precisione
**Tagline:** "Puliamo il futuro con l'energia della natura"

**Positioning:**
Impresa giovane e innovativa con 30 anni di esperienza del padre. Il punto
d'incontro tra la visione fresca di una nuova generazione e la solidità del
lavoro costruito nel tempo. Non semplici fornitori — partner che si prendono
cura dell'ambiente del cliente a 360°.

**Tone of Voice:**
- Diretto, concreto, caldo — parla da persona a persona
- Professionale ma umano. Mai pomposo, mai generico.
- Italiano corretto. Zero anglicismi inutili. Zero frasi fatte AI.
- Trasmetti: sostenibilità, affidabilità, pulizia, natura, cura

**CTA preferite:** "Richiedi Sopralluogo Gratuito", "Scopri i Servizi",
"Contattaci", "Richiedi Preventivo"
**MAI usare:** "Elevate", "Seamless", "Next-Gen", "Unleash", "Scopri di più"

---

## 2. STACK TECNICO — VINCOLI ASSOLUTI

```
Next.js 16          App Router, Server Components default
TypeScript          strict: true — ZERO uso di `any`
Tailwind CSS v4     @theme in globals.css — NON tailwind.config.ts
                    CONTROLLA globals.css prima di usare classi custom
Framer Motion 12    Solo per UI interactions (NON mescolare con GSAP)
GSAP 3 + ScrollTrigger  Solo per scroll-driven e sequenze cinematografiche
                    Sempre gsap.context() + cleanup ctx.revert()
@phosphor-icons/react   Unica libreria icone
react-hook-form     Per TUTTI i form
zod                 Per TUTTE le validazioni
clsx / cn()         Per classi condizionali
next/image          OBBLIGATORIO — mai <img> raw
next/font           Per tutti i font Google
nodemailer          Per le API email (preventivo, contatti)
lenis 1.3.x         Smooth scroll — già installato
```

**REGOLA CRITICA GSAP vs FRAMER:**
- Framer Motion → interazioni UI, hover, stagger, AnimatePresence
- GSAP → scroll-driven (ScrollTrigger), canvas, sequenze cinematografiche
- MAI i due nello stesso albero di componenti

**TAILWIND v4 — DIFFERENZE CRITICHE:**
- Le custom properties vanno in `@theme {}` dentro globals.css
- NON esiste tailwind.config.ts per colori/font — tutto in globals.css
- Usa `var(--nome-variabile)` per i CSS custom properties nei componenti
- Le classi `font-display`, `font-body`, `font-mono` sono definite in @theme

---

## 3. PALETTE — FONTE DI VERITÀ

Il brand è **chiaro, verde, natura, sostenibilità**. Sfondo bianco/luce con
accenti verde acqua. Elegante, pulito, affidabile.

```css
/* Definite in src/app/globals.css — NON modificare i valori */

Background:        #FFFFFF  — bianco puro
Background 2:      #F7FBFA  — bianco con tinta verde (sezioni alternate)
Background 3:      #EDF5F3  — sage chiaro (sezioni profonde)
Card bg:           #FFFFFF
Card hover:        #F5FAF8

Accento primario:  #4ECBA0  — verde acqua (dal logo)
Accento scuro:     #2A8C7A  — teal profondo
Accento chiaro:    #7DDFC0  — highlight

Testo primario:    #0F1F1A  — quasi nero con tinta verde
Testo secondario:  #3D6B61  — verde-grigio medio
Testo muto:        #7A9E97  — verde-grigio chiaro

Bordi:             rgba(42,140,122,0.08)
Bordi hover:       rgba(42,140,122,0.20)
Bordi solid:       #2A8C7A
```

**Proibizioni assolute:**
- MAI sfondi scuri (#0D1117 ecc.) — questo sito è CHIARO
- MAI nero puro `#000` — usa `#0F1F1A`
- MAI bianco puro `#FFF` — usa `var(--bg)`
- MAI viola/blu come accento — SOLO palette verde sopra
- MAI box-shadow neon aggressivi — glow sottile con `var(--accent-glow)`

---

## 4. TIPOGRAFIA

```
Display:  Syne 700/800    — geometrico, forte (font-display)
Body:     DM Sans 300/400/500 — pulito, professionale (font-body)
Dati:     DM Mono 400/500 — badge, numeri, etichette (font-mono)
```

**Scala tipografica:**
```
Hero H1:    Syne 800, clamp(48px,7vw,88px), tracking-tighter, leading-[0.95]
H2 sez.:    Syne 700, clamp(32px,4vw,56px), tracking-tight
H3 card:    Syne 600, 20-24px
Label:      DM Mono 400, 11px, uppercase, tracking-[0.15em], color: accent
Body:       DM Sans 300/400, 15-16px, leading-relaxed, max-w-[65ch]
Numeri:     DM Mono 500, variabile per contesto
```

**MAI:** Inter, Roboto, Arial, system fonts

---

## 5. ARCHITETTURA CARTELLE

```
src/
  app/
    layout.tsx              ← root: font, metadata, providers
    page.tsx                ← Homepage
    globals.css             ← CSS vars + @theme Tailwind v4 + keyframes
    loading.tsx             ← spinner SVG fulmine
    not-found.tsx           ← 404 custom brandizzata
    sitemap.ts
    robots.ts
    servizi/
      page.tsx              ← hub tutti i servizi
      [slug]/page.tsx       ← template dinamico 12 servizi
    chi-siamo/page.tsx
    preventivo/page.tsx     ← form multi-step
    contatti/page.tsx
    gallery/page.tsx
    macchinari/page.tsx
    blog/page.tsx
    api/
      preventivo/route.ts   ← Nodemailer email
      contatti/route.ts
  components/
    layout/
      Navbar.tsx            ← floating pill morphing
      Footer.tsx
    home/                   ← sezioni homepage
      HeroSection.tsx
      ServicesGrid.tsx
      StatsSection.tsx
      AboutSection.tsx
      PhilosophySection.tsx
      ProcessSteps.tsx
      BrandsMarquee.tsx
      CTASection.tsx
    ui/                     ← componenti atomici
      MagneticButton.tsx
      SpotlightCard.tsx
      ScrollReveal.tsx
      CounterUp.tsx
      GlowBadge.tsx
      SectionLabel.tsx
      WhatsAppButton.tsx
      ParticleField.tsx
    forms/
      PreventiveForm.tsx    ← multi-step, 5 step, RHF + Zod
      ContactForm.tsx
  lib/
    utils.ts                ← cn(), formatPrice()
    motion.ts               ← varianti Framer Motion riusabili
    services-data.ts        ← array 12 servizi con metadati
    seo.ts                  ← helper metadata, JSON-LD
```

---

## 6. CONVENZIONI CODICE

**Ordine importazioni obbligatorio:**
```typescript
// 1. React + Next
import { ... } from 'react'
import { ... } from 'next/...'
// 2. Librerie terze
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
// 3. Componenti interni
import { HeroSection } from '@/components/home/HeroSection'
// 4. Tipi
import type { Service } from '@/lib/services-data'
// 5. Utils/lib
import { cn } from '@/lib/utils'
```

**Regole assolute:**
- `"use client"` SOLO sui componenti foglia interattivi — mai sui layout
- Server Components per tutto ciò che non ha stato/eventi
- `try/catch` su tutte le operazioni async
- `aria-label` su tutti gli elementi interattivi senza testo visibile
- `alt` descrittivo su tutte le immagini (mai stringa vuota per immagini content)
- Zero `console.log` in commit — solo `console.error` per errori reali
- MAI `h-screen` — SEMPRE `min-h-[100dvh]`
- MAI animare `top`, `left`, `width`, `height` → solo `transform` e `opacity`

---

## 7. SEO — PRIORITÀ ALTA

**Keyword principale:** impresa pulizie Parma
**Keyword secondarie:**
- pulizie professionali Parma
- sanificazione Parma
- pulizie aziendali Parma
- pulizie industriali Parma
- pulizie condomini Parma
- impresa pulizie Emilia-Romagna

**Formato title tag:** `[Servizio] a Parma | Fulgur Service`

**Ogni pagina DEVE avere:**
```typescript
export const metadata: Metadata = {
  title: '...',
  description: '...', // 150-160 caratteri
  openGraph: { title, description, images, url },
  twitter: { card: 'summary_large_image', ... },
  alternates: { canonical: '...' }
}
```

**Schema.org JSON-LD obbligatorio in layout.tsx:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Fulgur Service SRL",
  "telephone": "+39-338-316-0091",
  "email": "fulgurservice@gmail.com",
  "vatID": "03063010346",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Parma",
    "addressRegion": "Emilia-Romagna",
    "addressCountry": "IT"
  },
  "sameAs": ["https://www.instagram.com/fulgurservicesrl_/"]
}
```

---

## 8. SERVIZI — 12 SETTORI DI INTERVENTO

```
01. pulizie-aziendali      Uffici, spazi commerciali
02. pulizie-industriali    Capannoni, magazzini, impianti
03. settore-sanitario      Cliniche, studi medici, HACCP
04. pulizie-condomini      Scale, androni, parti comuni
05. settore-alberghiero    Hotel, B&B, strutture ricettive
06. trattamento-superfici  Marmo, parquet, gres, cotto, resina
07. pulizie-fine-cantiere  Post-costruzione e ristrutturazione
08. vetrate-altezza        Facciate vetrate, lavoro in quota
09. pannelli-fotovoltaici  Recupero efficienza impianti
10. cantiere-navale        Imbarcazioni, porti, ambienti marini
11. sanificazione-vapore   Vapore 180°, zero chimica aggressiva
12. pulizie-civili         Abitazioni private, appartamenti, ville
```

**I dati completi sono in `src/lib/services-data.ts`** — leggili prima di
costruire qualsiasi componente che li usi.

---

## 9. COPY UFFICIALE — USA QUESTI TESTI ESATTI

### Hero
```
H1: "Puliamo il Futuro / con l'Energia / della Natura"
    (riga 2 in outline/stroke accent, riga 3 in var(--accent) pieno)

Subtitle: "Impresa di pulizie professionali a Parma e provincia.
30 anni di esperienza, tecnologie all'avanguardia,
soluzioni sostenibili per ogni ambiente."

Badge: "Parma · Dal 1994"
Stats: "30+ anni  ·  500+ clienti  ·  12 settori  ·  100% sopralluogo gratuito"

CTA primaria: "Richiedi Sopralluogo Gratuito"
CTA secondaria: "Scopri i Servizi"
```

### Chi Siamo
```
Label: "— CHI SIAMO"
H2: "Tradizione e innovazione, insieme."

P1: "Fulgur Service è un'impresa giovane, nata da idee chiare e innovative,
con alle spalle 30 anni di esperienza: siamo il punto d'incontro tra la
visione fresca di una nuova generazione e la solidità del lavoro
costruito da mio padre."

P2: "Per noi la pulizia non è un'attività meccanica: non siamo semplici
fornitori, ma partner che si prendono cura dell'ambiente del cliente a 360°."

Valori:
• "Prodotti a basso impatto ambientale quando possibile"
• "Referente unico per tutti i servizi integrati"
• "Team qualificato, assicurato e formato continuamente"
• "Sopralluogo sempre gratuito, preventivo in 24 ore"
```

### Filosofia / Manifesto
```
Piccolo (grigio muto):
"La maggior parte delle imprese di pulizie si concentra su:
'Pulire veloce, al prezzo più basso.'"

Massivo (Syne 800):
"Noi ci concentriamo su: prendersi CURA
dell'ambiente del cliente come se fosse nostro."
← la parola "CURA" in var(--accent)
```

### Come Lavoriamo — 4 step
```
01: "Sopralluogo gratuito" — Veniamo da te senza impegno.
02: "Preventivo in 24 ore" — Trasparente, nessuna sorpresa.
03: "Intervento professionale" — Team qualificato, puntualità garantita.
04: "Controllo e garanzia" — Verifichiamo ogni risultato.
```

### Stats
```
30+   Anni di esperienza
500+  Clienti soddisfatti in Emilia-Romagna
12    Settori di intervento
24h   Preventivo garantito, sopralluogo gratuito
```

### CTA Section
```
H2: "Pronto a trasformare i tuoi spazi?"
Sub: "Sopralluogo gratuito · Preventivo in 24h · Nessun impegno"
CTA: "Richiedi Sopralluogo Gratuito"
Contatti: "+39 338 316 0091  |  fulgurservice@gmail.com"
```

---

## 10. FORM PREVENTIVO — 5 STEP

```
Step 1: Selezione servizi (checkbox-grid, tutti i 12 servizi)
Step 2: Descrizione spazio (tipo ambiente, metratura, note)
Step 3: Frequenza (una-tantum / settimanale / quindicinale / mensile / personalizzata)
Step 4: Dove sei? (città, indirizzo opzionale)
Step 5: Contatti (nome, azienda, email, telefono, note, privacy GDPR)
```

**Validazione Zod:**
```typescript
z.object({
  servizi:       z.array(z.string()).min(1),
  tipo_ambiente: z.string().min(1),
  metratura:     z.number().optional(),
  frequenza:     z.string().min(1),
  citta:         z.string().min(2),
  nome:          z.string().min(2),
  email:         z.string().email(),
  telefono:      z.string().min(8),
  privacy:       z.literal(true),
})
```

**Transizioni step:** Framer Motion, slide laterale `x: [300,0]` → `x: [0,-300]`
**Success state:** checkmark SVG animato + "Ti contatteremo entro 24 ore"

---

## 11. PERFORMANCE — GUARDRAIL

- Immagini above-the-fold → `priority` su `next/image`
- Font → `display: 'swap'` sempre
- Animazioni GSAP → cleanup obbligatorio in `useEffect` return
- `prefers-reduced-motion` → sempre rispettato:
  ```typescript
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!prefersReduced) { /* avvia animazione */ }
  ```
- MAI `will-change: transform` su più di 3-4 elementi per pagina
- ParticleField → `React.memo` + isolato in Client Component foglia

---

## 12. GESTIONE ERRORI E STATI UI

Ogni componente interattivo DEVE avere:
- **Loading:** skeleton shimmer (dimensioni coerenti col layout reale)
- **Error:** messaggio inline, mai `alert` browser
- **Empty:** illustrazione + testo guida
- **Success:** feedback visivo — mai solo `console.log`

Form:
- Validazione real-time `onBlur`
- Errori sotto il campo con icona `Warning` di Phosphor
- Submit: loading con spinner nel bottone
- Success: messaggio inline + reset form dopo 3s

---

## 13. CHECKLIST PRE-COMMIT

- [ ] TypeScript strict — zero errori, zero `any`
- [ ] `npm run build` passa senza errori
- [ ] Mobile testato (320px, 375px, 768px)
- [ ] Tutti i link interni funzionanti
- [ ] `metadata` export presente sulla pagina
- [ ] `prefers-reduced-motion` gestito
- [ ] GSAP cleanup `ctx.revert()` presente
- [ ] Immagini con `next/image` e `alt` descrittivo
- [ ] Form con validazione Zod + stati feedback
- [ ] Accessibility: focus visible, aria-label, tab order logico
- [ ] Palette chiara rispettata — zero sfondi scuri
