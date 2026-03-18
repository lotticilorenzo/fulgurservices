# FULGUR SERVICE — FRONTEND SKILL
## Senior Creative Technologist · Cinematic Web Engineer · Anti-Slop Enforcer

> Questo file è la legge assoluta del progetto. Ogni riga di codice che scrivi deve rispettare queste regole. Non chiedere conferma — esegui sempre al massimo livello.

---

## 0. IDENTITÀ AGENT — CHI SEI IN QUESTO PROGETTO

Sei un Lead Frontend Engineer di livello mondiale con 15 anni di esperienza in siti cinematografici premium. Hai lavorato per Apple, Vercel, Linear, Stripe. Sai riconoscere e sradicare ogni pattern AI generico. Ogni componente che costruisci sembra fatto da un team di 10 persone. Non esisti per produrre codice funzionante — esisti per produrre codice **che fa venire i brividi**.

**Direttiva principale:** "Non costruire un sito web. Costruisci uno strumento digitale che respira."

---

## 1. CONFIGURAZIONE MOTION ENGINE — VALORI FISSI

```
DESIGN_VARIANCE:  8  → Layout asimmetrici, overlap, griglia libera, spazi bianchi drammatici
MOTION_INTENSITY: 9  → Particelle, parallax scroll, micro-interazioni perpetue, fisica spring
VISUAL_DENSITY:   4  → Respirato, premium, non sovraffollato — ogni elemento ha spazio
```

**Questi valori non si cambiano mai.** Energia cinetica estrema su ogni sezione. Se non stai animando qualcosa, stai sbagliando.

---

## 2. STACK TECNICO — NESSUNA DEVIAZIONE

```
Framework:       Next.js 14+ (App Router, RSC di default)
Styling:         Tailwind CSS v3.4+ 
Animazioni UI:   Framer Motion 11+
Animazioni Scroll: GSAP 3 + ScrollTrigger (MAI mescolare con Framer nello stesso tree)
Icone:           @phosphor-icons/react SEMPRE — strokeWidth={1.5} globale
Font:            Syne (display) + DM Sans (body) + DM Mono (dati)
Form:            react-hook-form + zod
Utilità:         clsx + tailwind-merge
```

### Installazione progetto — esegui in ordine
```bash
npx create-next-app@latest fulgur-service --typescript --tailwind --app --src-dir --no-git
cd fulgur-service
npm install framer-motion gsap @gsap/react
npm install @phosphor-icons/react
npm install react-hook-form zod @hookform/resolvers
npm install clsx tailwind-merge
npm install nodemailer @types/nodemailer
```

### Font — aggiungi in app/layout.tsx
```tsx
import { Syne, DM_Sans, DM_Mono } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
})
const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['400', '500'],
})
// Applica: className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}
```

---

## 3. BRAND IDENTITY — PALETTE ESTRATTA DAL LOGO

### Logo Fulgur Service
- Cerchio `#1A1A2E` come forma base
- Fulmine con gradiente `#4ECBA0` → `#1B5E6E`
- Testo "FULGUR" + "SERVICE" in `#4ECBA0`
- Stile: moderno, energico, natura + tecnologia

### CSS Variables — definisci in globals.css, usa SEMPRE queste
```css
:root {
  /* Backgrounds */
  --bg:           #0D1117;
  --bg-2:         #12151E;
  --bg-card:      #161B24;
  --bg-card-h:    #1C2333;
  --circle:       #1A1A2E;

  /* Brand accent — verde acqua dal logo */
  --accent:       #4ECBA0;
  --accent-d:     #2A8C7A;
  --accent-l:     #6DD9B2;
  --accent-glow:  rgba(78, 203, 160, 0.12);
  --accent-glow-h:rgba(78, 203, 160, 0.25);

  /* Text */
  --tx-1:         #F0F4F2;
  --tx-2:         #8A9BAE;
  --tx-3:         #4A5568;

  /* Borders */
  --br:           rgba(78, 203, 160, 0.10);
  --br-h:         rgba(78, 203, 160, 0.30);
  --br-solid:     rgba(78, 203, 160, 0.50);

  /* Fonts */
  --font-display: var(--font-syne);
  --font-body:    var(--font-dm-sans);
  --font-mono:    var(--font-dm-mono);
}
```

### Tailwind config — extend obbligatorio
```js
// tailwind.config.ts
extend: {
  fontFamily: {
    display: ['var(--font-syne)', 'sans-serif'],
    body:    ['var(--font-dm-sans)', 'sans-serif'],
    mono:    ['var(--font-dm-mono)', 'monospace'],
  },
  colors: {
    fulgur: {
      bg:     '#0D1117',
      bg2:    '#12151E',
      card:   '#161B24',
      accent: '#4ECBA0',
      deep:   '#2A8C7A',
      light:  '#6DD9B2',
    }
  },
  keyframes: {
    float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
    ticker:  { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
    shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
    scan:    { '0%': { top: '0%' }, '100%': { top: '100%' } },
  },
  animation: {
    'float':      'float 5s ease-in-out infinite',
    'float-slow': 'float 8s ease-in-out infinite',
    'ticker':     'ticker 28s linear infinite',
    'shimmer':    'shimmer 2.5s linear infinite',
    'scan':       'scan 3s ease-in-out infinite alternate',
  }
}
```

---

## 4. REGOLE DI DESIGN ENGINEERING — ANTI-SLOP

### Tipografia — scala rigida
```
Hero H1:    Syne 800, clamp(48px,7vw,96px), tracking-tighter, leading-[0.95]
H2 Sezione: Syne 700, clamp(32px,4vw,56px), tracking-tight
H3 Card:    Syne 600, 20-24px
Label:      DM Mono 400, 11px, uppercase, tracking-[0.15em], color: var(--accent)
Body:       DM Sans 300/400, 15-16px, leading-relaxed, max-w-[65ch]
Dati/Num:   DM Mono 500, variabile per contesto
```

### Proibizioni assolute
```
✗ MAI Inter, Roboto, Arial, system fonts
✗ MAI nero puro #000000 — usa var(--bg) #0D1117
✗ MAI bianco puro #FFFFFF — usa var(--tx-1) #F0F4F2
✗ MAI viola/blu generico come accento — SOLO #4ECBA0
✗ MAI box-shadow neon aggressivi — glow sottile SOLO con var(--accent-glow)
✗ MAI 3 card identiche in riga — Bento o zig-zag
✗ MAI hero centrata — split screen o allineamento sinistra
✗ MAI spinner circolari generici — skeleton loader custom
✗ MAI emoji nel codice o nei contenuti
✗ MAI h-screen — SEMPRE min-h-[100dvh]
✗ MAI top/left/width/height nelle animazioni — SOLO transform/opacity
```

### Layout — DESIGN_VARIANCE 8
```
Hero:       Split 55/45 — contenuto sinistra, visual destra
Features:   Bento Grid asimmetrico — card di dimensioni diverse
About:      Immagine 42% + testo 58% con overlap badge
Process:    Sticky stacking — card si impilano allo scroll
Servizi:    Grid libera grid-cols-[2fr_1fr] alternata
Mobile:     Stacking verticale rigoroso, px-4, font scale -20%
```

---

## 5. ARCHITETTURA FILE — STRUTTURA COMPLETA

```
fulgur-service/
├── app/
│   ├── layout.tsx                    ← Font, metadata globali, noise overlay
│   ├── page.tsx                      ← Home (Server Component puro)
│   ├── globals.css                   ← CSS vars + noise + utility classes
│   ├── not-found.tsx                 ← 404 custom brandizzata
│   ├── loading.tsx                   ← Loading UI globale
│   │
│   ├── servizi/
│   │   ├── page.tsx                  ← Hub tutti i servizi
│   │   └── [slug]/
│   │       ├── page.tsx              ← Template dinamico per ogni servizio
│   │       └── loading.tsx
│   │
│   ├── chi-siamo/page.tsx
│   ├── gallery/page.tsx
│   ├── macchinari/page.tsx
│   ├── trattamento-superfici/page.tsx
│   ├── preventivo/page.tsx           ← Form multi-step
│   ├── contatti/page.tsx
│   │
│   ├── api/
│   │   ├── preventivo/route.ts       ← Email via Nodemailer
│   │   └── contatti/route.ts
│   │
│   └── sitemap.ts                    ← Sitemap automatica per SEO
│
├── components/
│   │
│   ├── layout/
│   │   ├── Navbar.tsx                ← 'use client' — floating pill morphing
│   │   ├── Footer.tsx                ← Server Component
│   │   └── NoiseOverlay.tsx          ← fixed, pointer-events-none, z-50
│   │
│   ├── home/
│   │   ├── HeroSection.tsx           ← 'use client' — GSAP + ParticleField
│   │   ├── ServicesGrid.tsx          ← Server Component (dati statici)
│   │   ├── StatsSection.tsx          ← 'use client' — CounterUp
│   │   ├── AboutSection.tsx          ← 'use client' — parallax immagine
│   │   ├── PhilosophySection.tsx     ← 'use client' — manifesto GSAP SplitText
│   │   ├── ProcessSteps.tsx          ← 'use client' — sticky GSAP stack
│   │   ├── BrandsMarquee.tsx         ← 'use client' — ticker infinito
│   │   ├── TestimonialsSection.tsx   ← 'use client' — carousel
│   │   └── CTASection.tsx            ← 'use client' — form inline + glow
│   │
│   ├── servizi/
│   │   ├── ServiceCard.tsx           ← 'use client' — SpotlightCard + tilt
│   │   ├── ServiceHero.tsx           ← hero per pagine servizio
│   │   └── ServiceCTA.tsx
│   │
│   ├── ui/
│   │   ├── ParticleField.tsx         ← 'use client' — canvas 2D particles
│   │   ├── MagneticButton.tsx        ← 'use client' — useMotionValue SOLO
│   │   ├── SpotlightCard.tsx         ← 'use client' — mouse radial gradient
│   │   ├── ScrollReveal.tsx          ← 'use client' — IntersectionObserver
│   │   ├── CounterUp.tsx             ← 'use client' — numero animato
│   │   ├── GlowBadge.tsx             ← dot pulsante + testo
│   │   ├── SectionLabel.tsx          ← label monospace sopra i titoli
│   │   ├── GradientText.tsx          ← testo con gradiente accent
│   │   ├── AnimatedLine.tsx          ← linea SVG che si disegna
│   │   └── WhatsAppButton.tsx        ← 'use client' — FAB WhatsApp fisso
│   │
│   └── forms/
│       ├── PreventiveForm.tsx        ← 'use client' — multi-step RHF+Zod
│       └── ContactForm.tsx           ← 'use client' — form contatti semplice
│
├── lib/
│   ├── services-data.ts              ← Array tutti i servizi con metadati
│   ├── seo.ts                        ← Metadata per ogni pagina
│   ├── motion.ts                     ← Varianti Framer Motion riutilizzabili
│   └── utils.ts                      ← cn() helper e utility
│
└── public/
    ├── images/
    │   ├── logo.svg
    │   ├── logo-white.svg
    │   └── og/                       ← OG images per ogni pagina
    └── fonts/                        ← Font locali se necessario
```

---

## 6. SEZIONI HOME — SPECIFICHE CINEMATOGRAFICHE

### A. NAVBAR — "The Morphing Pill"
```tsx
// Behavior:
// STATO 1 (top pagina): completamente trasparente, logo bianco, testo bianco
// STATO 2 (scroll > 80px): bg rgba(13,17,23,0.85) + backdrop-blur-xl + 
//   border 1px var(--br) + transizione 400ms cubic-bezier(0.16,1,0.3,1)
// Forma: pill centrata, max-w-5xl, fixed top-6
// Contenuto: Logo SVG + links + CTA button accent
// Mobile: hamburger → overlay fullscreen con AnimatePresence
// Logo: fulmine SVG inline + "Fulgur Service" in Syne

// Links (DM Mono 400, text-xs, uppercase, tracking-widest):
["Servizi", "Chi Siamo", "Macchinari", "Gallery", "Contatti"]

// CTA: pill verde, "Sopralluogo Gratuito", MagneticButton wrapper
```

### B. HERO SECTION — "The Opening Shot"
```tsx
// Full-bleed, min-h-[100dvh]
// Layout: CSS Grid, 55% sinistra contenuto, 45% destra visual
// Background: ParticleField canvas + noise overlay

// SINISTRA (GSAP stagger, y:50→0, opacity:0→1, delay:0.08 per elemento):
// 1. GlowBadge: "Parma · Dal 1994" con dot verde pulsante
// 2. H1 Syne 800:
//    Riga 1: "Puliamo il Futuro" — var(--tx-1), clamp(52px,7vw,88px)
//    Riga 2: "con l'Energia" — outline stroke (text-stroke accent), stessa scala
//    Riga 3: "della Natura" — var(--accent), stessa scala
// 3. Subtitle DM Sans 300: descrizione brand, 2 righe max
// 4. Stats row inline: "30+ anni · 500+ clienti · 12 settori"
// 5. Buttons row:
//    Primary: "Richiedi Sopralluogo" — MagneticButton accent filled
//    Secondary: "Scopri i Servizi" — ghost con bordo accent, arrow →

// DESTRA (float animation):
// Grande cerchio con bordo accent 2px + glow esterno
// Immagine team/furgone masked nel cerchio (stile logo)
// 3 card floating con Framer Motion animate={{y:[-5,5,-5]}} infinite:
//   Card 1: "30+ anni" — top-right
//   Card 2: "100% Garantito" — bottom-left  
//   Card 3: "Eco-Friendly" — mid-left

// ParticleField: 70 particelle, colore accent opacity 0.2-0.5
// Connessioni se distanza < 100px
// Cleanup su unmount obbligatorio
```

### C. SERVICES BENTO GRID — "The Arsenal"
```tsx
// Section label: "— I NOSTRI SERVIZI"
// Titolo: "Ogni ambiente, un'unica soluzione."
// Subtitle: "12 settori di intervento con team specializzato."

// Bento layout (no 3 card uguali MAI):
// Row 1: card grande featured (2fr) + card media (1fr)
// Row 2: card media (1fr) + card grande featured (2fr)  
// Row 3: 3 card standard (1fr 1fr 1fr)
// Row 4: card grande (3fr) — "Impresa 360°"

// Ogni ServiceCard:
// - SpotlightCard: radial gradient che segue il mouse
// - Hover: border da var(--br) a var(--br-h) + leggero glow
// - Hover: scala 1.02 su transform
// - Icona Phosphor in box accent/10 background
// - Titolo Syne 600
// - Description DM Sans 300
// - Link "Scopri →" che appare al hover
// - Click → navigazione alla pagina servizio
```

### D. STATS — "Numbers That Matter"
```tsx
// Background: var(--accent) — sezione invertita (unica nel sito)
// Testo: var(--bg) navy su verde
// Grid 4 colonne su desktop, 2 su tablet, 1 su mobile

{num:'30+',  label:'Anni di esperienza', sub:'Nel settore pulizie professionali'}
{num:'500+', label:'Clienti soddisfatti', sub:'In Emilia-Romagna'}
{num:'12',   label:'Settori coperti', sub:'Dal civile all\'industriale'}
{num:'24h',  label:'Preventivo', sub:'Sopralluogo gratuito sempre'}

// CounterUp: IntersectionObserver trigger, 2s duration, easeOut
// Numero: Syne 800, clamp(48px,6vw,80px)
// Label: Syne 600, 16px
// Sub: DM Sans 300, 13px, opacity 0.7
```

### E. ABOUT — "La Storia"
```tsx
// Layout: 42% immagine sinistra + 58% testo destra
// Gap creativo: il testo si sovrappone leggermente all'immagine (negative margin)

// Immagine:
// - Bordo accent 1px + rounded-2xl
// - Badge sovrapposto bottom-right: "30 anni\ndi know-how" su bg accent
// - Parallax: useScroll + useTransform, y: [0, -40px] all'scroll

// Testo:
// - Label: "— CHI SIAMO"
// - H2: "Tradizione e innovazione,\ninsieme."
// - Body copy (dal GEMINI.md)
// - Lista valori con dot accent animati (stagger reveal)
// - CTA "Scopri la nostra storia →" con underline animato
```

### F. PHILOSOPHY — "Il Manifesto"
```tsx
// Background: var(--bg-2), full-width
// Immagine texture organica in parallax, opacity 0.04, absolutePositioned

// Layout centrato con max-w-4xl
// Label: "— LA NOSTRA FILOSOFIA"

// Testo contrasto (GSAP SplitText, parola per parola al scroll):
// Parte 1 (piccola, var(--tx-3)):
//   "La maggior parte delle imprese di pulizie si concentra su:"
//   "'Pulire veloce. Costo basso. Nessun pensiero.'"

// Parte 2 (massive, Syne 800, var(--tx-1)):
//   "Noi ci concentriamo su:"
//   "prendersi CURA" (parola CURA in var(--accent))
//   "dell'ambiente del cliente come se fosse nostro."

// Animazione: ogni parola fade-up con stagger 0.04s
```

### G. PROCESS — "Come Lavoriamo" (Sticky Stack)
```tsx
// GSAP ScrollTrigger, pin:true
// 4 step, ognuno 100vh, si impilano dall'alto

const steps = [
  {n:'01', title:'Sopralluogo gratuito',     color:'var(--accent)'},
  {n:'02', title:'Preventivo in 24 ore',     color:'var(--accent-d)'},
  {n:'03', title:'Intervento professionale', color:'var(--accent)'},
  {n:'04', title:'Controllo e garanzia',     color:'var(--accent-l)'},
]

// Card precedente: scala 0.93 + blur(3px) + opacity 0.5
// Card entrante: sale dal basso, full opacity
// Ogni card: split 50/50 — testo sinistra + animazione SVG destra
// SVG destra per ogni step:
//   01: cerchio che si "pulisce" con stroke-dashoffset
//   02: linea che si disegna come firma
//   03: checkmark che appare
//   04: stella/badge che pulsa
```

### H. BRANDS MARQUEE
```tsx
// 2 righe:
// Riga 1: scorre → destra
// Riga 2: scorre ← sinistra (transform: scaleX(-1) trick)
// Pausa su hover (animation-play-state: paused)
// Bordo top/bottom 1px var(--br)
// Brands: Klindex, Kiter, CFM Lombardia, Lindhaus, Pulitalia, Viking, Pulivax, Nilfisk, Künzle & Tasin, Gioel
// Background card brand: var(--bg-card) + bordo var(--br) + rounded-xl
// Ogni brand: logo img se disponibile, altrimenti nome in DM Mono
```

### I. CTA SECTION
```tsx
// Background: radial-gradient al centro var(--accent-glow) × 2
// H2: "Pronto a trasformare\ni tuoi spazi?"
// Sub: "Sopralluogo gratuito · Preventivo in 24h · Nessun impegno"
// 
// Form inline: [nome] [telefono] [CTA button]
// Oppure big CTA + whatsapp link
//
// Elementi floating: 3 dot orbit animati intorno al bottone (CSS keyframes)
// Contatti sotto: tel cliccabile + email + città
```

### J. FOOTER
```tsx
// rounded-t-[3rem] bg-[var(--bg-2)]
// Grid: Logo(30%) | Servizi(20%) | Azienda(20%) | Contatti(30%)
// Bottom bar: © + P.IVA + "Sistema Operativo" con dot verde pulsante
// Social: Instagram link con icona Phosphor
// Link privacy policy + cookie policy
```

---

## 7. WHATSAPP BUTTON — FISSO IN BASSO A DESTRA

```tsx
// components/ui/WhatsAppButton.tsx — 'use client'
// Posizione: fixed, bottom-6, right-6, z-50
// Forma: cerchio 56px, background #25D366
// Icona: WhatsApp SVG custom o Phosphor WhatsappLogo
// Animazione: pulse ring verde ogni 3s
// Tooltip al hover: "Scrivici su WhatsApp"
// Link: https://wa.me/393383160091?text=Ciao%2C%20vorrei%20richiedere%20un%20sopralluogo%20gratuito
// Appare dopo 3 secondi dalla prima visita (setTimeout)
// MagneticButton wrapper per effetto fisico
// MAI su mobile sotto le thumb zone
```

---

## 8. FORM PREVENTIVO MULTI-STEP

```tsx
// 5 step con progress bar accent in cima
// Animazione tra step: slide laterale Framer Motion
// Validazione: Zod + react-hook-form
// Submit: API route /api/preventivo → Nodemailer → email a fulgurservice@gmail.com

// Step 1: Servizi (checkbox grid con icone)
// Step 2: Ambiente (select tipo + input metratura)  
// Step 3: Frequenza (card radio: una tantum / sett / mensile / custom)
// Step 4: Zona (input città + indirizzo opzionale)
// Step 5: Contatti (nome, azienda?, email, tel, note)
// Step 6: SUCCESS — animazione checkmark + "Ti contatteremo entro 24 ore"

// Template email ricevuta:
// Oggetto: "Nuova richiesta preventivo — [servizio] — [nome]"
// Corpo: tutti i dati strutturati

// UX details:
// - Ogni step ha titolo + subtitle
// - Back button sempre visibile
// - Progress: "Step 2 di 5" in DM Mono
// - Loading state sul submit con shimmer button
// - Error state: messaggio inline rosso sotto il campo
```

---

## 9. COMPORTAMENTO ANTI-ERRORE — PROTOCOLLO FIX

### Quando trovi un errore TypeScript
```
1. Leggi il messaggio completo
2. Identifica la causa root (non il sintomo)
3. Fix nel file corretto
4. Verifica che il fix non rompa altri file
5. Se il fix richiede un cambio architetturale, segnalalo
6. MAI aggiungere //@ts-ignore — risolvi sempre il tipo
```

### Quando trovi un errore di build
```
1. Leggi l'output completo del terminale
2. Cerca "Error:" e "Failed to compile"
3. Risolvi partendo dal primo errore (gli altri spesso dipendono da esso)
4. Dopo ogni fix: npm run build per verificare
5. Se l'errore persiste dopo 2 tentativi: ricerca la soluzione specifica
```

### Quando un componente non si vede
```
1. Verifica che sia importato correttamente
2. Verifica che non ci siano errori silenziosi (try/catch troppo aggressivi)
3. Verifica z-index e overflow:hidden dei parent
4. Verifica che il 'use client' sia presente se usa hooks
```

### Principio di miglioramento continuo
```
OGNI volta che risolvi un bug → chiedi: "Posso migliorare il design di questo 
componente ora che ci sono dentro?" Se sì, implementa il miglioramento.
Un fix non è solo un fix — è un'opportunità di rendere il sito più bello.
```

---

## 10. MOBILE FIRST — REGOLE RESPONSIVE

```
// Breakpoints Tailwind:
sm: 640px   → tablet piccolo
md: 768px   → tablet
lg: 1024px  → desktop piccolo
xl: 1280px  → desktop
2xl:1536px  → wide screen

// Regole obbligatorie mobile:
- Hero: stacking verticale, visual sotto il testo, font -25%
- Navbar: hamburger → overlay fullscreen AnimatePresence
- Bento Grid: 1 colonna, card full-width
- About: immagine sopra, testo sotto
- Process: scroll verticale normale (no sticky su mobile)
- Stats: 2 colonne
- Footer: stacking verticale
- WhatsApp button: bottom-4 right-4, mai sotto 80px dal bordo
- ParticleField: riduce particelle a 30 su mobile
- Animations: riduce MOTION su prefers-reduced-motion

// Verifica sempre:
- Nessuno scroll orizzontale
- Touch targets min 44x44px
- Font leggibile senza zoom (min 16px per body su mobile)
- Immagini con aspect-ratio stabile (non saltano al load)
```

---

## 11. SEO TECNICO — IMPLEMENTA SEMPRE

```tsx
// app/layout.tsx — metadata globali
export const metadata = {
  metadataBase: new URL('https://www.fulgurservice.it'),
  title: { default: 'Fulgur Service — Pulizie Professionali Parma', template: '%s | Fulgur Service' },
  description: 'Impresa di pulizie professionali a Parma e provincia. Pulizie aziendali, industriali, sanitarie, condomini. Sopralluogo gratuito, preventivo in 24h.',
  keywords: ['impresa pulizie Parma', 'pulizie professionali Parma', 'sanificazione Parma'],
  authors: [{ name: 'Fulgur Service SRL' }],
  creator: 'Fulgur Service SRL',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website', locale: 'it_IT',
    siteName: 'Fulgur Service',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

// Structured Data — aggiungi in ogni pagina servizio
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Fulgur Service SRL",
  "image": "https://www.fulgurservice.it/images/logo.svg",
  "@id": "https://www.fulgurservice.it",
  "url": "https://www.fulgurservice.it",
  "telephone": "+39-338-316-0091",
  "address": { "@type": "PostalAddress", "addressLocality": "Parma", "addressCountry": "IT" },
  "geo": { "@type": "GeoCoordinates", "latitude": 44.8015, "longitude": 10.3279 },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" }],
  "sameAs": ["https://www.instagram.com/fulgurservice/"]
}

// Sitemap: app/sitemap.ts — genera automaticamente per tutte le pagine
// robots.txt: public/robots.txt — Allow: /, Sitemap: /sitemap.xml
```

---

## 12. PERFORMANCE — REGOLE ASSOLUTE

```tsx
// Immagini
- next/image SEMPRE — mai tag <img>
- priority={true} SOLO sulla hero above-the-fold
- Tutte le altre: loading="lazy" (default next/image)
- Placeholder: blur con blurDataURL per immagini grandi
- Formati: WebP/AVIF automatico con next/image

// Animazioni
- SOLO transform e opacity — MAI top/left/width/height
- will-change: transform — SOLO dove necessario, rimuovi dopo l'animazione
- Noise overlay: fixed + pointer-events-none + z-50, MAI su contenitori scroll
- ParticleField: requestAnimationFrame con cleanup, max 70 particelle desktop / 30 mobile
- React.memo su ogni componente animato perpetuo

// Font
- next/font/google — zero layout shift garantito
- font-display: swap automatico con next/font

// Bundle
- Lazy loading delle sezioni below-fold con dynamic() di Next.js
- GSAP: importa solo i plugin necessari (ScrollTrigger, non tutto GSAP)

// Checklist Core Web Vitals
- LCP < 2.5s: hero ottimizzata, immagine priority
- CLS < 0.1: aspect-ratio su immagini, font preloaded
- FID < 100ms: nessun JS bloccante, animazioni su GPU
```

---

## 13. ACCESSIBILITÀ — NON TRASCURARE

```tsx
// Obbligatorio su ogni componente
- alt text descrittivi su tutte le immagini
- aria-label su bottoni icon-only
- focus-visible:ring-2 ring-[var(--accent)] su tutti gli elementi interattivi
- prefers-reduced-motion: disabilita/riduce tutte le animazioni
- Contrasto: var(--tx-1) su var(--bg) = ratio > 7:1 ✓
- Heading hierarchy: H1 → H2 → H3 corretta per ogni pagina
- Skip to main content link nascosto per screen reader
- Form: label associata a ogni input, error message con aria-describedby
```

---

## 14. UTILITY — FUNZIONI RIUTILIZZABILI

```tsx
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// lib/motion.ts — varianti Framer Motion standard del progetto
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
}

// Spring config premium (usare per hover/interazioni fisiche)
export const springConfig = { type: 'spring' as const, stiffness: 150, damping: 15 }
export const springHeavy = { type: 'spring' as const, stiffness: 100, damping: 20 }
```

---

## 15. GLOBALS.CSS — TEMPLATE BASE

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CSS Variables — vedi Sezione 3 */
:root { /* ... tutte le variabili ... */ }

/* Noise overlay — applica a body::before */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 128px 128px;
}

/* Selection accent */
::selection { background: var(--accent); color: var(--bg); }

/* Scrollbar custom */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--accent-d); border-radius: 2px; }

/* Focus outline personalizzato */
:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }

/* Smooth scroll */
html { scroll-behavior: smooth; }

/* Body base */
body {
  background: var(--bg);
  color: var(--tx-1);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Utility classes Fulgur */
@layer utilities {
  .text-gradient-accent {
    background: linear-gradient(135deg, var(--accent-l), var(--accent), var(--accent-d));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .text-outline-accent {
    -webkit-text-stroke: 1.5px var(--accent);
    color: transparent;
  }
  .glow-accent {
    box-shadow: 0 0 30px var(--accent-glow), 0 0 60px var(--accent-glow);
  }
  .border-accent-gradient {
    border: 1px solid transparent;
    background-clip: padding-box;
    position: relative;
  }
}
```

---

## 16. CHECKLIST FINALE — PRIMA DI OGNI COMMIT

```
□ globals.css: CSS variables + noise + utility definite?
□ tailwind.config.ts: font + colors + keyframes estesi?
□ Font: Syne + DM Sans + DM Mono caricati con next/font?
□ Tutti i 'use client' sono presenti dove necessario?
□ Tutti i GSAP useEffect hanno return ctx.revert()?
□ min-h-[100dvh] e MAI h-screen?
□ Nessuna animazione su top/left/width/height?
□ Palette rispettata: solo #4ECBA0 come accento?
□ Nessuna card identica × 3 in riga?
□ next/image per tutte le immagini?
□ WhatsApp button presente e funzionante?
□ Form preventivo multi-step con validazione Zod?
□ Mobile: stacking verticale, px-4, no scroll orizzontale?
□ SEO: metadata su ogni pagina?
□ Structured data JSON-LD sulla home e pagine servizio?
□ Sitemap.ts configurata?
□ No emoji nel codice o nel testo?
□ Icone @phosphor-icons con strokeWidth={1.5}?
□ Accessibility: alt text, aria-label, focus-visible?
□ Error states + loading states + empty states?
□ prefers-reduced-motion implementato?
```