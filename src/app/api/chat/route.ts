import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// SIMULAZIONE NEURAL-RAG ENGINE
// Legge la knowledge base e produce una risposta contestuale

export async function POST(req: Request) {
  try {
    const { message, context } = await req.json()
    const kbPath = path.join(process.cwd(), 'src/lib/ai/knowledge-base.md')
    const kbContent = fs.readFileSync(kbPath, 'utf8')

    const lowerMsg = message.toLowerCase()
    let response = ""

    // LOGICA DI RETRIEVAL (Semplificata ma efficace per la demo)
    if (lowerMsg.includes('preventivo') || lowerMsg.includes('costo') || lowerMsg.includes('prezzo')) {
      response = "Certamente! Per fornire un preventivo accurato, Fulgur Service offre sempre un SOPRALLUOGO GRATUITO entro 24 ore. Puoi compilare il form nella sezione Preventivo o chiamarci direttamente al +39 338 316 0091."
    } else if (lowerMsg.includes('marmo') || lowerMsg.includes('pavimento') || lowerMsg.includes('cristallizzazione')) {
      response = "Per il trattamento del marmo utilizziamo sistemi planetari Klindex (fino a 1300 RPM). Il nostro protocollo prevede la rimozione delle porosità e la cristallizzazione per un effetto a specchio duraturo, senza pellicole chimiche che si staccano."
    } else if (lowerMsg.includes('industriale') || lowerMsg.includes('capannone') || lowerMsg.includes('magazzino')) {
      response = "Nelle pulizie industriali impieghiamo aspiratori Nilfisk/CFM ad alta depressione (250 mBar) per polveri sottili H-Class e lavasciuga uomo a bordo per grandi metrature, garantendo la continuità operativa della vostra logistica."
    } else if (lowerMsg.includes('sanificazione') || lowerMsg.includes('vapore') || lowerMsg.includes('batteri')) {
      response = "Garantiamo l'abbattimento del 99.9% di virus e batteri tramite vapore saturo a 180°C. Questo metodo è ideale per ambienti sanitari (HACCP) e abitazioni con bambini, poiché non lascia residui chimici tossici."
    } else if (lowerMsg.includes('fidenza') || lowerMsg.includes('parma') || lowerMsg.includes('collecchio')) {
      response = "Operiamo capillarmente su tutta la provincia di Parma. Abbiamo squadre dedicate per Fidenza, Salsomaggiore e Collecchio, assicurando tempi di risposta rapidissimi."
    } else {
      // Risposta generica basata su visione aziendale se non ci sono match tecnici
      response = "Fulgur Service è un'impresa che unisce 30 anni di esperienza a una visione innovativa. Ci prendiamo cura dei vostri ambienti come se fossero nostri. Per dettagli su questo servizio specifico, le consiglio un sopralluogo tecnico senza impegno."
    }

    // Simulazione latenza "pensiero neurale"
    await new Promise(resolve => setTimeout(resolve, 800))

    return NextResponse.json({ 
      text: response,
      source: "Fulgur Knowledge Base v2.1"
    })

  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
