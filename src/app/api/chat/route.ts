import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// SIMULAZIONE NEURAL-RAG ENGINE
// Legge la knowledge base e produce una risposta contestuale

export async function POST(req: Request) {
  try {
    const { message } = await req.json()
    const lowerMsg = message.toLowerCase()
    
    // HEURISTICS PRICING
    const rates: Record<string, { min: number, max: number, label: string }> = {
      ufficio: { min: 1.5, max: 2.5, label: "Uffici/Commerciale" },
      aziendale: { min: 1.5, max: 2.5, label: "Aziendale" },
      industriale: { min: 0.8, max: 1.5, label: "Capannone/Industriale" },
      magazzino: { min: 0.8, max: 1.5, label: "Magazzino" },
      marmo: { min: 12, max: 18, label: "Cristallizzazione Marmo" },
      cantiere: { min: 3, max: 5, label: "Fine Cantiere" },
      vapore: { min: 2, max: 4, label: "Sanificazione Vapore" },
      casa: { min: 4, max: 7, label: "Civile/Appartamenti" },
      abitazione: { min: 4, max: 7, label: "Civile/Appartamenti" },
    }

    // Extraction of numbers (MQ)
    const mqMatch = lowerMsg.match(/(\d+)\s*(mq|metri|quadri|m2|square)/i) || lowerMsg.match(/(\d+)\s*$/)
    const mq = mqMatch ? parseInt(mqMatch[1]) : null

    // Pattern matching for service
    let detectedService = ""
    for (const key in rates) {
      if (lowerMsg.includes(key)) {
        detectedService = key
        break
      }
    }

    let response = ""

    if (mq && detectedService) {
      const rate = rates[detectedService]
      const minPrice = (mq * rate.min).toFixed(2)
      const maxPrice = (mq * rate.max).toFixed(2)
      
      response = `Ecco una bozza di preventivo per il servizio **${rate.label}** su una superficie di **${mq} mq**:
      
Il costo stimato è compreso tra **€${minPrice}** e **€${maxPrice}** (+ IVA).

*Nota: Questa è una stima indicativa (bozza). Il prezzo finale può variare in base alle condizioni reali e verrà confermato solo dopo il sopralluogo gratuito.*

Desideri che un nostro tecnico venga a fare un sopralluogo gratuito per confermare il prezzo?`
    } else if (detectedService && !mq) {
      response = `Ottimo, ci occupiamo di **${rates[detectedService].label}** quotidianamente. Per poterti dare una bozza di preventivo immediata, potresti indicarmi la **metratura approssimativa (mq)** dello spazio?`
    } else if (mq && !detectedService) {
      response = `Ho preso nota della metratura (**${mq} mq**). Di che tipo di ambiente si tratta? (es. Ufficio, Capannone, Casa privara, Marmo...)`
    } else if (lowerMsg.includes('ciao') || lowerMsg.includes('buongiorno')) {
      response = "Buongiorno! Sono il simulatore di preventivi di Fulgur Service. Se mi indichi il **tipo di servizio** e la **metratura**, posso farti una bozza di preventivo in tempo reale. Di cosa hai bisogno?"
    } else {
      response = "Sono specializzato nel fornire bozze di preventivo rapide per i servizi Fulgur Service. Indicami la **tipologia di ambiente** e i **mq** per ricevere una stima. Per domande generali, ti consiglio di contattarci direttamente al +39 338 316 0091."
    }

    await new Promise(resolve => setTimeout(resolve, 800))

    return NextResponse.json({ 
      text: response,
      source: "Fulgur Estimator Engine v1.0"
    })

  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
