# SKILL.md — Fulgur Service
## Standard di qualita assoluti. Ogni componente deve fare venire i brividi.

Leggi questo file dopo CLAUDE.md. Contiene le regole tecniche e di design.
Non chiedere conferma per scelte di design ovvie — esegui sempre al massimo.

---

## 0. MENTALITA

Non stai costruendo un sito web. Stai costruendo uno strumento digitale che
respira. Ogni pixel ha un motivo. Ogni animazione racconta qualcosa.

L'utente che arriva su Fulgur Service deve pensare:
"Questi sono professionisti seri. Mi fido di loro."

Il design serve il brand. Il brand e: natura, pulizia, precisione, cura.

---

## 1. PARAMETRI DESIGN

DESIGN_VARIANCE:   7  -- Layout asimmetrici, overlap, griglia libera
MOTION_INTENSITY:  8  -- Scroll animations, micro-interazioni, fisica spring
VISUAL_DENSITY:    4  -- Respirato, bianco dominante, ogni elemento ha spazio
NATURE_FEEL:      10  -- Verde, organico, texture naturali, niente neon

---

## 2. SISTEMA VISIVO

### Sfondi — alternanza sezioni
```
Sezione standard:   bg-[var(--bg)]    #FFFFFF
Sezione alternata:  bg-[var(--bg-2)]  #F7FBFA
Sezione profonda:   bg-[var(--bg-3)]  #EDF5F3
Sezione invertita:  bg-[var(--accent)] #4ECBA0  (SOLO per Stats)
```

### Ombre — organiche, mai neon
```css
/* Card standard */
box-shadow: 0 1px 3px rgba(15,31,26,0.06), 0 4px 12px rgba(15,31,26,0.04);
/* Card hover */
box-shadow: 0 4px 20px rgba(78,203,160,0.12), 0 1px 3px rgba(15,31,26,0.08);
/* Glow accent con parsimonia */
box-shadow: 0 0 40px var(--accent-glow);
```

### Gradienti — sfumati, naturali
```css
background: linear-gradient(to bottom, transparent 40%, var(--bg) 100%);
background: radial-gradient(ellipse 60% 50% at 50% 100%, var(--accent-glow-h), transparent);
```

### Noise Overlay
NoiseOverlay.tsx — fixed, pointer-events-none, z-50, opacity 0.025
Aggiunge texture organica. Verificare sia attivo in app/layout.tsx.

---

## 3. ANIMAZIONI — REGOLE ASSOLUTE

### Framer Motion — per UI interactions
```typescript
// lib/motion.ts — varianti riusabili
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16,1,0.3,1] } }
}
export const staggerContainer = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08 } }
}
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16,1,0.3,1] } }
}
// SEMPRE useInView con once:true
const inView = useInView(ref, { once: true, margin: '-80px' })
```

### GSAP — per scroll-driven
```typescript
useEffect(() => {
  const ctx = gsap.context(() => {
    // animazioni qui
  }, sectionRef)
  return () => ctx.revert()  // OBBLIGATORIO
}, [])

// prefers-reduced-motion — SEMPRE
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
if (prefersReduced) return
```

### Timing standard
```
Durata:  0.4-0.6s standard, 0.8-1.0s solo hero
Easing:  cubic-bezier(0.16, 1, 0.3, 1) — spring naturale
Stagger: 0.06-0.10s tra elementi
Delay:   0.1-0.2s iniziale
```

MAI animare: top, left, width, height, padding, margin
SEMPRE: transform (translate, scale, rotate), opacity

---

## 4. COMPONENTI UI — STANDARD PREMIUM

### MagneticButton
Bottone che si sposta magneticamente verso il cursore.
useMotionValue x/y + useSpring (stiffness:150, damping:15), max spostamento ±20px.
Varianti: primary (bg accent), ghost (bordo accent), white (per sezioni invertite).

### SpotlightCard
Radial gradient che segue il cursore dentro la card.
onMouseMove: calcola posizione relativa del mouse.
background: radial-gradient(circle at {x}px {y}px, var(--accent-glow-h), transparent 60%)
Overlay visibile SOLO al hover della card specifica.

### ScrollReveal
Wrapper IntersectionObserver per reveal al scroll.
Props: direction ('up' | 'left' | 'right' | 'fade'), delay, threshold.
MAI su elementi above-the-fold. SEMPRE once:true.

### CounterUp
Numero che conta da 0 al target. Trigger: IntersectionObserver.
Duration: 2s, easing easeOut cubica. Formato: "30+" non "30.0".

### SectionLabel
DM Mono 400, 11px, uppercase, tracking-[0.15em], colore var(--accent).
Formato: "— NOME SEZIONE". Sempre sopra al titolo H2.

### GlowBadge
Dot verde pulsante (animate-pulse-ring) + testo DM Mono.
Border: 1px var(--br-h), backdrop-blur-sm, BG: rgba(78,203,160,0.06).

### WhatsAppButton
FAB fixed bottom-right, z-50, w-14 h-14, rounded-full, BG #25D366.
Icona SVG WhatsApp diretto (non Phosphor). Tooltip "Chatta con noi".
Animate float: y -4px, 3s ease-in-out infinite.

### ParticleField
Canvas 2D, React.memo obbligatorio. 60-80 particelle.
Colore var(--accent), opacity 0.15-0.35. Connessioni se distanza < 100px.
Solo nella Hero. cancelAnimationFrame nel cleanup obbligatorio.

---

## 5. SEZIONI HOMEPAGE — SPECIFICHE

### NAVBAR — Floating Pill Morphing
```
STATO 1 (top):         trasparente, bordo rgba bianco sottile
STATO 2 (scroll>80px): bg var(--nav-bg) + backdrop-blur-xl + shadow
Forma: pill centrata, max-w-5xl, fixed top-4
Transizione: 300ms cubic-bezier(0.16,1,0.3,1)
Logo: SVG fulmine + "Fulgur Service" Syne 700
Links: DM Sans 500, sm, var(--tx-2) hover var(--tx-1)
CTA: MagneticButton primary sm "Sopralluogo Gratuito"
Mobile: hamburger -> AnimatePresence overlay fullscreen
```

### HERO — The Opening Shot
```
Layout: min-h-[100dvh], CSS grid 55/45 desktop
BG: var(--bg) + ParticleField canvas sottile

SINISTRA (stagger GSAP y:40->0, opacity:0->1, 0.08s delay):
  1. GlowBadge "Parma - Dal 1994"
  2. H1 Syne 800 clamp(48px,7vw,88px):
     Riga 1: "Puliamo il Futuro"  -- var(--tx-1)
     Riga 2: "con l'Energia"      -- outline/stroke accent
     Riga 3: "della Natura"       -- var(--accent) pieno
  3. Subtitle DM Sans 300, max-w-[48ch]
  4. Stats inline DM Mono: "30+ anni - 500+ clienti - 12 settori"
  5. MagneticButton primary + ghost

DESTRA (float y:[-6,6,-6] infinite):
  Grande cerchio bordo accent 1px + glow
  Immagine masked nel cerchio
  3 card floating: "30+ anni", "Eco-Friendly", "Garantito"

Gradient basso: transparent -> var(--bg)
```

### SERVICES GRID — Bento Asimmetrico
```
Label: "— I NOSTRI SERVIZI"
H2: "Ogni ambiente, un'unica soluzione."

Layout (MAI 3 card uguali in riga):
  Row 1: card grande (2fr) + card media (1fr)
  Row 2: card media (1fr) + card grande (2fr)
  Row 3: 3 card standard

Ogni ServiceCard con SpotlightCard wrapper:
  Icona Phosphor in box accent/10
  Titolo Syne 600, desc DM Sans 300 14px
  "Scopri ->" appare al hover
  Hover: border var(--br-h) + shadow accent + scale 1.02
  Click -> /servizi/[slug]
```

### ABOUT — La Storia
```
Layout: immagine 42% sinistra + testo 58% destra
Badge sovrapposto: "30 anni di know-how" su bg accent, bottom-right
Parallax GSAP: y 0->-40px al scroll
Lista valori: dot accent + testo, stagger 0.08s
```

### PHILOSOPHY — Il Manifesto
```
BG: var(--bg-2), texture organica parallax opacity 0.03
GSAP SplitText word-by-word al scroll:
  Piccolo (var(--tx-3)): "La maggior parte delle imprese..."
  Massivo (Syne 800): "Noi ci concentriamo su: prendersi CURA..."
  La parola "CURA" in var(--accent)
```

### PROCESS STEPS — Sticky Stack
```
GSAP ScrollTrigger pin:true
4 step x ~100vh, si impilano dall'alto
Card precedente: scale 0.93 + opacity 0.4 + blur(2px)
Card entrante: sale dal basso, full opacity
```

### STATS — Sezione Invertita
```
BG: var(--accent) — unica sezione invertita del sito
Testo: var(--bg) navy su verde
4 colonne: 30+ anni / 500+ clienti / 12 settori / 24h preventivo
CounterUp trigger IntersectionObserver
Numero: Syne 800 clamp(48px,6vw,80px)
```

### CTA SECTION
```
BG: var(--bg-2) + radial glow accent al centro
H2: "Pronto a trasformare i tuoi spazi?"
Sub: "Sopralluogo gratuito - Preventivo in 24h - Nessun impegno"
CTA: MagneticButton primary large
3 dot orbit animati CSS intorno al bottone
Contatti: tel + email DM Mono sotto
```

---

## 6. PAGINE INTERNE — STANDARD

### /servizi — Hub
Hero compatta + grid 12 servizi Bento + IntegratedBento + CTA.

### /servizi/[slug] — Singolo Servizio
Hero: nome + icona + desc + CTA "Sopralluogo".
Sezione benefici ScrollReveal stagger.
Sezione settori serviti.
JSON-LD Service schema.

### /chi-siamo
Hero foto team + headline.
Timeline verticale GSAP (fondazione -> crescita -> oggi).
4 valori aziendali con icona.
CTA.

### /preventivo
Form multi-step 5 step (vedi CLAUDE.md sezione 10).
Layout split: form 60% + info 40%.
Progress bar DM Mono. Transizioni Framer Motion slide.
Success: checkmark SVG animato.

### /contatti
Layout split: info 40% + form 60%.
Tel cliccabile, email, indirizzo, orari, Instagram.

### /gallery
Masonry grid + lightbox.
BeforeAfterSlider per prima/dopo pulizie.
Filtri per categoria.

### /macchinari
Grid macchinari: foto + nome + brand + desc.
Modal al click. Brand section.

---

## 7. FOOTER

```
rounded-t-[2.5rem] bg-[var(--bg-2)]
Grid 4 colonne: Logo+social | Servizi | Azienda | Contatti
Bordo top: 1px var(--br)
Bottom bar: copyright + P.IVA + Privacy + Cookie
StatusBadge: dot verde pulsante + "Attivo" accanto al logo
```

---

## 8. RESPONSIVE

Mobile-first, breakpoint principale: 768px (md).
Hero mobile: stack verticale, H1 clamp(36px,8vw,52px), ParticleField 30 particelle.
Navbar mobile: hamburger -> overlay AnimatePresence fullscreen.
Grid: desktop 3col -> tablet 2col -> mobile 1col.
Stagger mobile: 0.04s, Y 16px, durata -20%.

---

## 9. ACCESSIBILITA

focus-visible: bordo accent 2px su tutti gli interattivi.
aria-label: su bottoni senza testo visibile.
alt: descrittivo su tutte le immagini.
Contrasto minimo: 4.5:1 su bg bianco.
Form: label associate a input, errori con role="alert".

---

## 10. PRIORITA DI INTERVENTO

ALTA — visibili subito:
  1. Navbar (morphing pill perfetto)
  2. HeroSection (ParticleField + floating cards + stagger GSAP)
  3. ServicesGrid (Bento asimmetrico + SpotlightCard)
  4. PhilosophySection (GSAP SplitText word-by-word)

MEDIA — conversione:
  5. CTASection (glow + orbit dots)
  6. PreventiveForm (multi-step + transizioni)
  7. ProcessSteps (sticky stack GSAP)

STANDARD — trust:
  8. AboutSection (parallax + badge)
  9. StatsSection (sezione invertita accent)
  10. Footer (completo + status badge)

PAGINE INTERNE:
  11. /servizi hub + [slug] dinamico
  12. /chi-siamo timeline
  13. /contatti split
  14. /preventivo form completo

---

## 11. DIVIETI ASSOLUTI

NO 3 card identiche in riga — sempre Bento o varianza
NO hero centrata — split screen o allineamento sinistra
NO spinner circolari generici — skeleton custom
NO alert/confirm browser — feedback inline
NO !important nel CSS
NO sfondi scuri — questo sito e CHIARO
NO useEffect senza cleanup return
NO dati hardcodati — sempre da lib/services-data.ts o lib/seo.ts
NO img raw — sempre next/image
NO emoji nel codice o testo UI
NO h-screen — sempre min-h-[100dvh]
NO animare top/left/width/height
NO componenti > 400 righe — spezzare
