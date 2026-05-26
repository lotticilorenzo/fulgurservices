# LP Setup — Fulgur Service PPC Landing Pages

Guida operativa per configurare, testare e mantenere le landing page `/lp/fine-cantiere` e `/lp/sanitario`.

---

## 1. Resend — Email transazionali

### Variabili d'ambiente richieste

| Variabile | Descrizione | Esempio |
|---|---|---|
| `RESEND_API_KEY` | Chiave API del progetto Resend | `re_xxxxxxxxxxxx` |
| `RESEND_FROM_EMAIL` | Mittente verificato su Resend | `noreply@fulgurservice.it` |
| `RESEND_ADMIN_EMAIL` | Destinatario notifiche lead | `fulgurservice@gmail.com` |
| `RESEND_REPLY_TO` | Reply-to per l'admin email | `fulgurservice@gmail.com` |

### Setup

1. Crea account su [resend.com](https://resend.com) e genera una API key.
2. Verifica il dominio `fulgurservice.it` (DNS TXT record fornito da Resend).
3. Finché il dominio non è verificato, usa `onboarding@resend.dev` come `RESEND_FROM_EMAIL` (funziona solo verso il tuo account Resend).
4. Aggiungi le variabili su Vercel: **Project → Settings → Environment Variables**.

### Flusso email

- **Admin email**: inviata a `RESEND_ADMIN_EMAIL` con subject `[LP-CANTIERE-LEAD]` o `[LP-SANITARIO-LEAD]` + nome, telefono, qualifier, UTM, timestamp IT.
- **Autoreply**: inviata all'email del lead (campo obbligatorio nel form — parte sempre).
- Se l'admin email fallisce → risposta `500` (critico). Se l'autoreply o il foglio falliscono → log e `200` (non critico).

---

## 2. Google Sheets — Log lead

### Variabili d'ambiente richieste

| Variabile | Descrizione |
|---|---|
| `GOOGLE_SHEETS_SPREADSHEET_ID` | ID del foglio (dalla URL: `.../d/<ID>/edit`) |
| `GOOGLE_SHEETS_CLIENT_EMAIL` | Email del Service Account (es. `fulgur-leads@...iam.gserviceaccount.com`) |
| `GOOGLE_SHEETS_PRIVATE_KEY` | Chiave privata RSA del Service Account (PEM completo) |
| `GOOGLE_SHEETS_RANGE` | Range foglio (default: `Leads!A:J`) |

### Setup Service Account

1. Vai su [Google Cloud Console](https://console.cloud.google.com) → crea o seleziona un progetto.
2. Abilita **Google Sheets API**.
3. Crea un **Service Account** (IAM → Service Accounts → Create).
4. Genera una chiave JSON: Service Account → Keys → Add Key → JSON.
5. Dal JSON estrai `client_email` e `private_key`.
6. Apri il foglio Google Sheets → Share → incolla l'email del Service Account con permesso **Editor**.

### Variabili su Vercel

La `private_key` contiene newline (`\n`). Vercel le salva come `\\n` (escaped). Il codice in `sheets-client.ts` gestisce già la conversione automaticamente via `.replace(/\\n/g, '\n')`.

### Struttura colonne foglio

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Variant | Nome | Telefono | Email | Qualifier | UTM Source | UTM Campaign | UTM Content | User Agent |

Crea manualmente la riga di intestazione (10 colonne, A:J). Ogni submit aggiunge una riga in append.

**Se hai già il foglio con la struttura precedente (9 colonne A:I):** inserisci manualmente una colonna E vuota intitolata "Email", poi aggiorna `GOOGLE_SHEETS_RANGE` a `Leads!A:J`.

---

## 3. Google Ads — Configurazione campagne

### URL finali

```
/lp/fine-cantiere   → campagna "Pulizie Fine Cantiere Parma"
/lp/sanitario       → campagna "Sanificazione Studi Medici Parma"
```

### Parametri UTM raccomandati

```
utm_source=google
utm_medium=cpc
utm_campaign=fine-cantiere-parma   (o sanitario-parma)
utm_content={ad_name}              (auto-populated da Ads)
utm_term={keyword}                 (auto-populated da Ads)
```

### Tracking conversioni

Le pagine `/lp/*/grazie` attivano due eventi:

1. **Google Ads** — `gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXX/YYYYYYY' })` — configura l'ID nel tag site-wide.
2. **GA4** — `gtag('event', 'lp_lead', { event_label: 'lp-cantiere' | 'lp-sanitario' })`.

Tieni `NEXT_PUBLIC_GA_ID` configurato nelle env vars di produzione.

### Robots / indicizzazione

- Le LP sono escluse dall'indice via `src/app/lp/layout.tsx` (`robots: { index: false }`).
- `robots.ts` consente l'accesso a `AdsBot-Google` per `Disallow /lp/`, permettendo la scansione degli annunci.
- Le LP non appaiono in sitemap.

---

## 4. Test pre-deploy checklist

### Funzionalità form

- [ ] Submit valido → redirect a `/lp/*/grazie`
- [ ] Admin email ricevuta con dati corretti
- [ ] Lead appendito nel foglio Google Sheets
- [ ] UTM params presenti nel foglio (testa con `?utm_source=test&utm_campaign=test`)
- [ ] Honeypot: submit con campo `website` compilato → risposta `200` senza email
- [ ] Errore validazione: campi vuoti mostrano messaggi inline
- [ ] GDPR non spuntata → messaggio errore

### Responsive

- [ ] Mobile 375px: sticky bar visibile dopo scroll, form a singola colonna
- [ ] Desktop 1280px: form 2 colonne, sticky bar pill centrata
- [ ] LPFooter visibile su entrambe le LP (non nascosta dal CSS LP mode)
- [ ] Header/Footer del sito principale NON visibili nelle LP

### Performance

- [ ] LCP < 2.5s su mobile (hero image con `priority`)
- [ ] Nessun layout shift dalla sticky bar (`translate-y` non causa reflow)

### API

```bash
# Test locale con curl
curl -X POST http://localhost:3000/api/lp-preventivo \
  -H "Content-Type: application/json" \
  -d '{
    "variant": "cantiere",
    "nome": "Test",
    "telefono": "338 123 4567",
    "email": "test@esempio.it",
    "qualifier": "~100mq",
    "gdpr": true,
    "utm": { "source": "google", "campaign": "test" }
  }'
# Atteso: {"ok":true}
```

---

## 5. Troubleshooting

### "RESEND_API_KEY not configured" in produzione

Le env vars non sono caricate. Verifica su Vercel che esistano per l'environment corretto (Production / Preview / Development). Fai un redeploy dopo averle aggiunte.

### Admin email non arriva

1. Controlla i log Vercel: Functions → `/api/lp-preventivo` → logs.
2. Cerca `[lp-preventivo] admin email failed:` — il messaggio contiene il motivo.
3. Verifica che `RESEND_FROM_EMAIL` sia un dominio verificato su Resend (o usa `onboarding@resend.dev` per test).

### Lead non appare nel foglio

Il foglio è non-critico: se fallisce, il form risponde `200` comunque. Cerca `[lp-preventivo] sheet append failed:` nei log Vercel.

Cause comuni:
- `GOOGLE_SHEETS_SPREADSHEET_ID` errato
- Service Account non ha permessi **Editor** sul foglio
- Chiave privata malformata (controlla che `GOOGLE_SHEETS_PRIVATE_KEY` inizi con `-----BEGIN RSA PRIVATE KEY-----`)

### "Google Sheets credentials not configured"

`GOOGLE_SHEETS_CLIENT_EMAIL` o `GOOGLE_SHEETS_PRIVATE_KEY` non impostati. Il lead non viene loggato ma l'email parte comunque.

### La sticky bar non appare

La sticky bar compare dopo uno scroll di `window.innerHeight * 0.6` (60% della viewport). Su pagine corte potrebbe non attivarsi. Comportamento atteso.

### LPFooter nascosto

Se il footer LP non appare, verifica che `globals.css` contenga `footer:not([data-lp-footer])` e non solo `footer` nella regola LP mode. Controlla anche che `LPFooter` abbia `data-lp-footer="true"` sull'elemento `<footer>`.

---

## 6. Microsoft Clarity (gratuito — consigliato)

1. Vai su [clarity.microsoft.com](https://clarity.microsoft.com) → crea account → nuovo progetto "Fulgur LP"
2. Copia il Clarity ID (es: `abc123def`)
3. In GTM → New Tag → Custom HTML:
   ```html
   <script type="text/javascript">
     (function(c,l,a,r,i,t,y){
       c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
       t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
       y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
     })(window,document,"clarity","script","abc123def");
   </script>
   ```
4. Trigger: All Pages
5. Publish container GTM
6. Dopo 48h avrai dati su dove cliccano e dove abbandonano il form

Usalo per decidere il prossimo A/B test.
