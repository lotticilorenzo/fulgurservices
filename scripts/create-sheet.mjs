/**
 * create-sheet.mjs
 * Crea il Google Spreadsheet "Fulgur LP Leads" con header formattata.
 * Uso: node scripts/create-sheet.mjs
 */

import { readFileSync } from 'fs'
import { google } from 'googleapis'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// ─── Env loader (no dotenv needed) ───────────────────────────────────────────

const __dirname = dirname(fileURLToPath(import.meta.url))

function loadEnvLocal() {
  const envPath = join(__dirname, '..', '.env.local')
  let content
  try {
    content = readFileSync(envPath, 'utf-8')
  } catch {
    return // .env.local non presente — usa process.env direttamente
  }
  for (const line of content.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIdx = trimmed.indexOf('=')
    if (eqIdx === -1) continue
    const key = trimmed.slice(0, eqIdx).trim()
    let value = trimmed.slice(eqIdx + 1)
    // Rimuovi eventuali virgolette esterne
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    if (!(key in process.env)) {
      process.env[key] = value
    }
  }
}

loadEnvLocal()

// ─── Auth ─────────────────────────────────────────────────────────────────────

function buildAuth() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const rawKey     = process.env.GOOGLE_SHEETS_PRIVATE_KEY

  if (!clientEmail || !rawKey) {
    console.error('❌  Variabili mancanti: GOOGLE_SHEETS_CLIENT_EMAIL e/o GOOGLE_SHEETS_PRIVATE_KEY')
    console.error('    Aggiungi queste variabili a .env.local prima di eseguire lo script.')
    process.exit(1)
  }

  const privateKey = rawKey.replace(/\\n/g, '\n')

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive',       // necessario per la condivisione
    ],
  })
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Converte hex (#RRGGBB) in colore normalizzato 0-1 per l'API Sheets */
function hexToSheetsColor(hex) {
  const n = hex.replace('#', '')
  return {
    red:   parseInt(n.slice(0, 2), 16) / 255,
    green: parseInt(n.slice(2, 4), 16) / 255,
    blue:  parseInt(n.slice(4, 6), 16) / 255,
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const auth   = buildAuth()
  const sheets = google.sheets({ version: 'v4', auth })
  const drive  = google.drive({ version: 'v3', auth })

  // 1. Crea il Spreadsheet con il foglio già rinominato "Leads" ───────────────
  console.log('⏳  Creazione spreadsheet...')
  const createRes = await sheets.spreadsheets.create({
    requestBody: {
      properties: { title: 'Fulgur LP Leads' },
      sheets: [
        { properties: { title: 'Leads', index: 0 } },
      ],
    },
  })

  const spreadsheetId  = createRes.data.spreadsheetId
  const spreadsheetUrl = createRes.data.spreadsheetUrl
  const sheetId        = createRes.data.sheets?.[0]?.properties?.sheetId ?? 0

  if (!spreadsheetId) {
    console.error('❌  Creazione fallita: spreadsheetId non ricevuto.')
    process.exit(1)
  }

  // 2. Scrivi la riga di header ───────────────────────────────────────────────
  console.log('⏳  Scrittura header...')
  const headers = [
    'Timestamp',
    'Variant',
    'Nome',
    'Telefono',
    'Email',
    'Qualifier',
    'UTM Source',
    'UTM Campaign',
    'UTM Content',
    'User Agent',
  ]

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Leads!A1:J1',
    valueInputOption: 'RAW',
    requestBody: { values: [headers] },
  })

  // 3. Formattazione + freeze ─────────────────────────────────────────────────
  console.log('⏳  Formattazione e freeze riga 1...')
  const accentColor = hexToSheetsColor('#4ECBA0')
  const white       = { red: 1, green: 1, blue: 1 }

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        // Grassetto + sfondo #4ECBA0 + testo bianco su tutta la riga 1
        {
          repeatCell: {
            range: {
              sheetId,
              startRowIndex: 0,
              endRowIndex: 1,
              startColumnIndex: 0,
              endColumnIndex: 10,
            },
            cell: {
              userEnteredFormat: {
                backgroundColor: accentColor,
                textFormat: {
                  bold: true,
                  foregroundColor: white,
                },
                verticalAlignment: 'MIDDLE',
              },
            },
            fields: 'userEnteredFormat(backgroundColor,textFormat,verticalAlignment)',
          },
        },
        // Freeze riga 1
        {
          updateSheetProperties: {
            properties: {
              sheetId,
              gridProperties: { frozenRowCount: 1 },
            },
            fields: 'gridProperties.frozenRowCount',
          },
        },
        // Auto-resize colonne A:J
        {
          autoResizeDimensions: {
            dimensions: {
              sheetId,
              dimension: 'COLUMNS',
              startIndex: 0,
              endIndex: 10,
            },
          },
        },
      ],
    },
  })

  // 4. Condivisione con l'admin email (opzionale) ────────────────────────────
  const adminEmail = process.env.RESEND_ADMIN_EMAIL
  if (adminEmail) {
    console.log(`⏳  Condivisione con ${adminEmail}...`)
    try {
      await drive.permissions.create({
        fileId: spreadsheetId,
        requestBody: {
          type: 'user',
          role: 'writer',
          emailAddress: adminEmail,
        },
        sendNotificationEmail: false,
      })
      console.log(`✅  Foglio condiviso con ${adminEmail} (Editor)`)
    } catch (err) {
      console.warn(`⚠️   Condivisione fallita (non critico): ${err.message}`)
      console.warn('    Puoi condividerlo manualmente da Google Drive.')
    }
  } else {
    console.log('ℹ️   RESEND_ADMIN_EMAIL non impostato — condivisione saltata.')
    console.log('    Apri il foglio e condividilo manualmente con il tuo account Google.')
  }

  // 5. Output finale ──────────────────────────────────────────────────────────
  console.log('\n─────────────────────────────────────────────────────────')
  console.log('✅  Spreadsheet creato con successo!')
  console.log('')
  console.log(`📊  Nome:  Fulgur LP Leads`)
  console.log(`🔗  URL:   ${spreadsheetUrl}`)
  console.log(`🆔  ID:    ${spreadsheetId}`)
  console.log('')
  console.log('💡  Aggiungi questa variabile a .env.local e su Vercel:')
  console.log('')
  console.log(`    GOOGLE_SHEETS_SPREADSHEET_ID=${spreadsheetId}`)
  console.log('')
  console.log('    Vercel → Project → Settings → Environment Variables → Add')
  console.log('─────────────────────────────────────────────────────────\n')
}

main().catch((err) => {
  console.error('\n❌  Errore fatale:', err.message)
  if (err.errors) {
    for (const e of err.errors) console.error('   ', e.message)
  }
  process.exit(1)
})
