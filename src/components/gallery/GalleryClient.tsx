'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { X, MagnifyingGlassPlus } from '@phosphor-icons/react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CTASection } from '@/components/home/CTASection'
import { WipeReveal } from '@/components/ui/WipeReveal'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'
import { CASE_STUDIES } from '@/lib/case-studies'

const CATEGORIES = [
  { id: 'all', label: 'Tutte' },
  { id: 'aziendali', label: 'Aziendali' },
  { id: 'industriali', label: 'Industriali' },
  { id: 'speciali', label: 'Specialistici' },
  { id: 'residenziali', label: 'Residenziali' },
  { id: 'azienda', label: 'Chi Siamo' },
]

const GALLERY_ITEMS = [
  { id: 1, src: '/images/servizi/pulizie-aziendali-parma.jpg', alt: 'Pulizie aziendali professionali a Parma — Fulgur Service', label: 'Pulizie Aziendali', category: 'aziendali', span: 'col-span-2 row-span-2' },
  { id: 2, src: '/images/fulgur-service-team-lavoro.jpg', alt: 'Team Fulgur Service al lavoro — pulizie professionali Parma', label: 'Il Nostro Team', category: 'azienda', span: 'col-span-1 row-span-1' },
  { id: 3, src: '/images/servizi/pulizie-industriali-parma.jpg', alt: 'Pulizie industriali capannoni e magazzini a Parma — Fulgur Service', label: 'Pulizie Industriali', category: 'industriali', span: 'col-span-1 row-span-1' },
  { id: 4, src: '/images/pulizie-professionali-parma-hero.jpg', alt: 'Fulgur Service — impresa di pulizie a Parma e provincia', label: 'Fulgur Service', category: 'azienda', span: 'col-span-1 row-span-2' },
  { id: 5, src: '/images/servizi/pulizia-vetrate-altezza-parma.jpg', alt: 'Pulizia vetrate in altezza facciate vetrate a Parma — Fulgur Service', label: 'Vetrate in Altezza', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 6, src: '/images/servizi/pulizie-civili-parma.jpg', alt: 'Pulizie civili abitazioni private a Parma — Fulgur Service', label: 'Pulizie Civili', category: 'residenziali', span: 'col-span-1 row-span-1' },
  { id: 7, src: '/images/servizi/pulizie-condomini-parma.jpg', alt: 'Pulizie condomini parti comuni scale a Parma — Fulgur Service', label: 'Condomini', category: 'residenziali', span: 'col-span-1 row-span-1' },
  { id: 8, src: '/images/trattamento-superfici-parma.jpg', alt: 'Trattamento superfici parquet marmo gres a Parma — Fulgur Service', label: 'Trattamento Superfici', category: 'speciali', span: 'col-span-1 row-span-2' },
  { id: 9, src: '/images/servizi/pulizie-cantiere-navale-parma.jpg', alt: 'Pulizie cantiere navale imbarcazioni barche — Fulgur Service', label: 'Cantiere Navale', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 10, src: '/images/servizi/lavaggio-pulizia-pannelli-fotovoltaici-parma.webp', alt: 'Operazione di lavaggio professionale per pannelli fotovoltaici a Parma e provincia', label: 'Pannelli Fotovoltaici', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 11, src: '/images/servizi/pulizie-fine-cantiere-parma.jpg', alt: 'Pulizie fine cantiere post ristrutturazione a Parma — Fulgur Service', label: 'Fine Cantiere', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 12, src: '/images/servizi/pulizie-settore-alberghiero-hotel-bed-breakfast-parma.webp', alt: 'Servizio di pulizia e riassetto camere per hotel e strutture ricettive a Parma', label: 'Settore Alberghiero', category: 'aziendali', span: 'col-span-2 row-span-1' },
  { id: 13, src: '/images/macchinari-pulizie-professionali.jpg', alt: 'Macchinari professionali pulizie industriali Fulgur Service', label: 'I Nostri Macchinari', category: 'azienda', span: 'col-span-1 row-span-1' },
  { id: 14, src: '/images/fulgur-service-pulizie-sostenibili.jpg', alt: 'Pulizie sostenibili prodotti eco-certificati Fulgur Service Parma', label: 'Sostenibilità', category: 'azienda', span: 'col-span-1 row-span-1' },
  { id: 15, src: '/images/operatori-pulizie-professionali-parma.jpg', alt: 'Operatori pulizie professionali al lavoro a Parma — Fulgur Service', label: 'I Nostri Operatori', category: 'azienda', span: 'col-span-1 row-span-2' },
  { id: 16, src: '/images/servizi/pulizie-palestre-strutture-sportive-parma.jpg', alt: 'Pulizie palestre strutture sportive a Parma — Fulgur Service', label: 'Strutture Sportive', category: 'industriali', span: 'col-span-1 row-span-1' },
  { id: 17, src: '/images/impresa-pulizie-parma-furgone.jpg', alt: "La flotta di Fulgur Service — furgoni moderni e attrezzati sempre pronti all'intervento a Parma", label: 'La Nostra Flotta', category: 'azienda', span: 'col-span-1 row-span-1' },
  { id: 18, src: '/images/servizi/pulizia-facciate-parma.jpg', alt: 'Pulizia facciate edifici a Parma — Fulgur Service', label: 'Pulizia Facciate', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 19, src: '/images/gallery/pulizie-a-fondo-prima-dopo-parma.jpg', alt: "Risultato eccellente: prima e dopo l'intervento di pulitura a fondo per un cliente di Parma", label: 'Prima E Dopo', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 20, src: '/images/gallery/trattamento-superfici-pavimenti-prima-dopo-parma.jpg', alt: 'Differenza netta sul pavimento industriale prima e dopo il nostro trattamento professionale', label: 'Prima E Dopo', category: 'industriali', span: 'col-span-1 row-span-1' },
  { id: 21, src: '/images/gallery/lucidatura-marmo-gres-risultato-parma.jpg', alt: 'Pavimento riportato a nuovo tramite i nostri processi di lucidatura e sgrassamento', label: 'Prima E Dopo', category: 'aziendali', span: 'col-span-1 row-span-1' },
  { id: 22, src: '/images/gallery/operatori-squadra-pulizie-fulgur-service.webp', alt: 'La squadra operativa Fulgur Service impiegata in un intervento strutturato', label: 'Il Nostro Team', category: 'azienda', span: 'col-span-1 row-span-1' },
  { id: 23, src: '/images/gallery/pulizia-vetrate-in-quota-piattaforma-parma.jpg', alt: 'Pulizia di vetrate in altezza tramite piattaforme aeree specializzate e personale formato', label: 'Lavori In Quota', category: 'speciali', span: 'col-span-1 row-span-2' },
  { id: 24, src: '/images/gallery/macchinari-pulizia-professionale-industriale.jpg', alt: 'Flotta di macchinari industriali pronta per sanificazioni e lavaggi di grandi aree', label: 'Intervento Professionale', category: 'aziendali', span: 'col-span-1 row-span-1' },
  { id: 25, src: '/images/gallery/pulizia-capannone-magazzino-industriale-parma.jpg', alt: 'Risanamento di un grande magazzino logistico e lavaggio pavimentazione industriale a Parma', label: 'Pavimentazioni', category: 'industriali', span: 'col-span-1 row-span-1' },
  { id: 26, src: '/images/gallery/risultato-pulizia-pavimentazione-resina.jpg', alt: 'Pavimentazione in resina sanificata e trattata per la massima resa visiva e igienica', label: 'Riserve e Dettagli', category: 'residenziali', span: 'col-span-1 row-span-1' },
  { id: 27, src: '/images/gallery/pulizie-uffici-aziendali-open-space-parma.jpg', alt: 'Ambiente di lavoro aziendale e uffici igienizzati con protocolli quotidiani', label: 'Uffici', category: 'aziendali', span: 'col-span-1 row-span-1' },
  { id: 28, src: '/images/gallery/pulizia-condominio-parti-comuni-parma.jpg', alt: 'Manutenzione ordinaria per le parti comuni, scale e androni di un condominio a Parma', label: 'Intervento in Condominio', category: 'residenziali', span: 'col-span-1 row-span-1' },
  { id: 29, src: '/images/gallery/sanificazione-vapore-ambienti-sensibili.jpg', alt: 'Procedura di sanificazione avanzata con vapore saturo per eliminare patogeni e batteri', label: 'Igiene Profonda', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 30, src: '/images/gallery/pulizia-post-cantiere-nuova-costruzione.jpg', alt: 'Intervento di sgrosso e pulizia fine cantiere al termine di una ristrutturazione edile', label: 'Fine Cantiere', category: 'speciali', span: 'col-span-1 row-span-1' },
  // — Foto reali Fulgur Service —
  { id: 31, src: '/images/gallery/pulizie-uffici-operatore-fulgur-service.jpg', alt: 'Operatore Fulgur Service al lavoro nella pulizia di un ufficio open space', label: 'Pulizie Uffici', category: 'aziendali', span: 'col-span-1 row-span-1' },
  { id: 32, src: '/images/gallery/pulizia-finestre-edificio-scala-fulgur.jpg', alt: 'Operatore su scala alta per la pulizia di finestre su facciata esterna di edificio residenziale', label: 'Pulizia Finestre', category: 'speciali', span: 'col-span-1 row-span-2' },
  { id: 33, src: '/images/gallery/furgone-fulgur-service-negozio-centro.jpg', alt: 'Furgone Fulgur Service parcheggiato davanti a un locale commerciale in centro città', label: 'La Nostra Flotta', category: 'azienda', span: 'col-span-1 row-span-1' },
  { id: 34, src: '/images/gallery/fine-cantiere-boutique-zegna-parma-1.jpg', alt: 'Pulizia fine cantiere boutique Zegna a Parma — interni con scaffalature e pavimento pronti per apertura', label: 'Fine Cantiere Zegna', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 35, src: '/images/gallery/pulizia-vetrate-villa-giardino-fulgur.jpg', alt: 'Pulizia vetrate scorrevoli in una villa con vista sul giardino privato — Fulgur Service', label: 'Vetrate Villa', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 36, src: '/images/gallery/lucidatura-pavimento-grande-macchina-fulgur.jpg', alt: 'Monospazzola professionale al lavoro su pavimento in cemento in locale commerciale in ristrutturazione', label: 'Trattamento Pavimento', category: 'speciali', span: 'col-span-2 row-span-1' },
  { id: 37, src: '/images/gallery/piattaforma-aerea-fulgur-service.jpg', alt: 'Braccio della piattaforma aerea Fulgur Service esteso per lavori in quota tra la vegetazione', label: 'Piattaforma Aerea', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 38, src: '/images/gallery/furgone-piattaforma-aerea-fulgur-service.jpg', alt: 'Furgone e camion con piattaforma aerea Fulgur Service pronti per un intervento in quota', label: 'Attrezzatura', category: 'azienda', span: 'col-span-1 row-span-1' },
  { id: 39, src: '/images/gallery/pulizia-scale-esterne-gradini-fulgur.jpg', alt: 'Levigatura e trattamento di gradini in pietra con monospazzola e attrezzatura professionale', label: 'Trattamento Gradini', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 40, src: '/images/gallery/pulizia-facciata-ponteggio-edificio-fulgur.jpg', alt: 'Operatore con gilet catarifrangente su ponteggio per pulizia di facciata edificio urbano', label: 'Pulizia Facciate', category: 'speciali', span: 'col-span-1 row-span-2' },
  { id: 41, src: '/images/gallery/pulizia-struttura-vetrata-copertura-fulgur.jpg', alt: 'Pulizia interna di una tenda da giardino trasparente con pavimento lucidato a specchio', label: 'Strutture Esterne', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 42, src: '/images/gallery/trattamento-cotto-terracotta-macchina-fulgur.jpg', alt: 'Trattamento e lucidatura di pavimento in cotto rosso su terrazza esterna con monospazzola', label: 'Trattamento Cotto', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 43, src: '/images/gallery/piattaforma-aerea-palazzo-residenziale-fulgur.jpg', alt: 'Camion con piattaforma aerea Fulgur Service posizionato per intervento su palazzo residenziale', label: 'Lavori in Quota', category: 'speciali', span: 'col-span-2 row-span-1' },
  { id: 44, src: '/images/gallery/levigatura-parquet-macchina-fulgur.jpg', alt: 'Levigatura di parquet scuro con aspiratore e monospazzola in salone con camino', label: 'Levigatura Parquet', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 45, src: '/images/gallery/restauro-parquet-aspiratore-lucidatrice-fulgur.jpg', alt: 'Attrezzatura professionale per trattamento di pavimento in legno in locale commerciale', label: 'Restauro Pavimento', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 46, src: '/images/gallery/pulizia-vetrata-camera-appartamento-fulgur.jpg', alt: 'Operatrice Fulgur Service su scala pulisce pareti vetrate in camera da letto di appartamento privato', label: 'Vetrate Interne', category: 'residenziali', span: 'col-span-1 row-span-1' },
  { id: 47, src: '/images/gallery/pulizia-vetrate-scala-interna-villa-fulgur.jpg', alt: 'Operatore pulisce vetrate e vetro strutturale su scala moderna di villa privata', label: 'Scala Villa', category: 'residenziali', span: 'col-span-1 row-span-2' },
  { id: 48, src: '/images/gallery/lucidatura-pavimento-palestra-fulgur-service.jpg', alt: 'Lucidatura pavimento con monospazzola professionale in un ampia sala polifunzionale', label: 'Sala Polifunzionale', category: 'aziendali', span: 'col-span-1 row-span-1' },
  { id: 49, src: '/images/gallery/pulizia-studio-medico-fulgur-service.jpg', alt: 'Operatrice Fulgur Service al lavoro nella pulizia di uno studio privato attrezzato', label: 'Studio Privato', category: 'aziendali', span: 'col-span-1 row-span-1' },
  { id: 50, src: '/images/gallery/pulizia-vetrina-negozio-centro-storico-fulgur.jpg', alt: 'Operatrice Fulgur Service su scala pulisce la vetrina di un negozio nel centro città', label: 'Vetrina Negozio', category: 'aziendali', span: 'col-span-2 row-span-1' },
  { id: 51, src: '/images/gallery/aspirazione-moquette-corridoio-fulgur.jpg', alt: 'Aspirazione professionale di moquette bordeaux con aspiraliquidi industriale in corridoio', label: 'Aspirazione Moquette', category: 'aziendali', span: 'col-span-1 row-span-1' },
  { id: 52, src: '/images/gallery/parquet-lucidato-appartamento-lusso-fulgur.jpg', alt: 'Salone di appartamento elegante con parquet scuro lucidato a specchio e arredi moderni', label: 'Parquet Lucidato', category: 'residenziali', span: 'col-span-1 row-span-1' },
  { id: 53, src: '/images/gallery/salone-parquet-lucidato-camino-villa-fulgur.jpg', alt: 'Salone di appartamento con pavimento in parquet scuro lucidato, camino e libreria in legno', label: 'Salone Parquet', category: 'residenziali', span: 'col-span-2 row-span-2' },
  { id: 54, src: '/images/gallery/salone-bellezza-pavimento-marmo-fulgur-1.jpg', alt: 'Centro estetico con pavimento in marmo lucidato e postazioni per trattamenti', label: 'Centro Estetico', category: 'aziendali', span: 'col-span-1 row-span-1' },
  { id: 55, src: '/images/gallery/salone-bellezza-pavimento-marmo-fulgur-2.jpg', alt: 'Area attesa di locale commerciale con pavimento in marmo a specchio e sedute moderne', label: 'Pavimento Marmo', category: 'aziendali', span: 'col-span-1 row-span-1' },
  { id: 56, src: '/images/gallery/scala-condominiale-marmo-lucidato-fulgur.jpg', alt: 'Scala interna con gradini in marmo lucidato — risultato dopo intervento Fulgur Service', label: 'Scala Marmo', category: 'residenziali', span: 'col-span-1 row-span-2' },
  { id: 57, src: '/images/gallery/pulizia-terrazzo-villa-giardino-fulgur.jpg', alt: 'Pulizia di terrazzo residenziale con pavimento in gres e giardino fiorito con rose', label: 'Terrazzo Esterno', category: 'residenziali', span: 'col-span-1 row-span-1' },
  { id: 58, src: '/images/gallery/fine-cantiere-boutique-zegna-parma-2.jpg', alt: 'Boutique Zegna a Parma — fase finale di pulizia fine cantiere con insegna ben visibile', label: 'Fine Cantiere', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 59, src: '/images/gallery/auto-fulgur-service-sede-uffici.jpg', alt: 'Auto aziendale Jeep Fulgur Service con logo parcheggiata davanti a un edificio operativo', label: 'Uscita team operativo', category: 'azienda', span: 'col-span-1 row-span-1' },
  { id: 60, src: '/images/gallery/furgone-fulgur-service-capannone-notte.jpg', alt: 'Furgone Fulgur Service durante un intervento notturno presso un capannone industriale', label: 'Intervento Notturno', category: 'azienda', span: 'col-span-1 row-span-1' },
  { id: 61, src: '/images/gallery/prima-durante-dopo-lucidatura-marmo-fulgur.jpg', alt: 'Tre fasi a confronto: prima, durante e dopo il trattamento di lucidatura di un pavimento in marmo', label: 'Prima e Dopo', category: 'speciali', span: 'col-span-2 row-span-1' },
  { id: 62, src: '/images/gallery/sanificazione-pavimento-capannone-fulgur.jpg', alt: 'Trattamento di pavimento in cemento di un capannone industriale con attrezzatura di sanificazione', label: 'Capannone Industriale', category: 'industriali', span: 'col-span-1 row-span-2' },
  { id: 63, src: '/images/gallery/pulizia-pavimento-garage-industriale-fulgur.jpg', alt: 'Pulizia di un garage privato con pavimento in cemento e auto parcheggiata', label: 'Piccola concessionaria di auto d’epoca', category: 'industriali', span: 'col-span-1 row-span-1' },
  { id: 64, src: '/images/gallery/pulizia-infissi-esterni-villa-fulgur.jpg', alt: 'Operatore pulisce serramenti e infissi sulla facciata esterna di una casa con portico in legno', label: 'Serramenti Esterni', category: 'residenziali', span: 'col-span-1 row-span-1' },
  { id: 65, src: '/images/gallery/pulizia-salone-villa-lusso-macchinari-fulgur.jpg', alt: 'Pulizia di ampio salone con grandi lastre di marmo bianco e attrezzatura professionale', label: 'Salone', category: 'residenziali', span: 'col-span-2 row-span-1' },
  { id: 66, src: '/images/gallery/pulizia-facciata-industriale-operatori-fulgur.jpg', alt: 'Due operatrici Fulgur Service su scala puliscono persiane metalliche su facciata di edificio commerciale', label: 'Pulizia Esterna', category: 'aziendali', span: 'col-span-1 row-span-1' },
  { id: 67, src: '/images/gallery/fine-cantiere-appartamento-nuovo-fulgur.jpg', alt: 'Pulizia fine cantiere in appartamento di nuova costruzione con macchinari industriali professionale', label: 'Fine Cantiere', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 68, src: '/images/gallery/furgone-fulgur-service-centro-storico-parma.jpg', alt: 'Furgone Fulgur Service parcheggiato in una piazza del centro storico cittadino', label: 'Centro Storico', category: 'azienda', span: 'col-span-1 row-span-1' },
  { id: 69, src: '/images/gallery/pulizia-locale-commerciale-operatore-fulgur.jpg', alt: 'Operatrice Fulgur Service pulisce il pavimento di un ampio locale con soffitto a vetro', label: 'Locale Commerciale', category: 'aziendali', span: 'col-span-1 row-span-2' },
  { id: 70, src: '/images/gallery/pulizia-scaffali-magazzino-fulgur.jpg', alt: 'Operatore Fulgur Service su scala pulisce scaffalature metalliche in magazzino', label: 'Scaffali Magazzino', category: 'industriali', span: 'col-span-1 row-span-1' },
  { id: 71, src: '/images/gallery/pulizia-salone-parrucchiere-pavimento-nero.jpg', alt: 'Pulizia a fondo di un salone da parrucchiere con pavimento in gres nero e postazioni operative', label: 'Salone Parrucchiere', category: 'aziendali', span: 'col-span-1 row-span-1' },
  { id: 72, src: '/images/gallery/terrazzo-cotto-pulito-villa-fulgur-1.jpg', alt: 'Portico residenziale con pavimento in cotto rosso trattato e lucidato — Fulgur Service', label: 'Portico Cotto', category: 'residenziali', span: 'col-span-1 row-span-1' },
  { id: 73, src: '/images/gallery/terrazzo-cotto-pulito-villa-fulgur-2.jpg', alt: 'Terrazzo con pavimento in cotto arancione lucidato e trattato — Fulgur Service', label: 'Terrazzo Cotto', category: 'residenziali', span: 'col-span-1 row-span-1' },
  { id: 74, src: '/images/gallery/prodotto-kiter-evolution-pavimento-sanificato.jpg', alt: 'Prodotto professionale Kiter Evolution ad alta resistenza su pavimento appena trattato', label: 'Prodotti Pro', category: 'industriali', span: 'col-span-1 row-span-1' },
  { id: 75, src: '/images/gallery/pulizia-magazzino-logistica-parma.jpg', alt: 'Pulizia professionale con lavasciuga in un grande magazzino logistico a Parma', label: 'Magazzini', category: 'industriali', span: 'col-span-1 row-span-1' },
  { id: 76, src: '/images/gallery/pulizie-residenziali-lusso-parma.jpg', alt: 'Pulizia a fondo di un salone moderno con pavimento in microcemento e arredi di design', label: 'Residenziale Lusso', category: 'residenziali', span: 'col-span-1 row-span-2' },
  { id: 77, src: '/images/gallery/attrezzatura-professionale-pulitalia.jpg', alt: 'Dotazione tecnica Fulgur Service: macchinari Pulitalia per detergente industriale', label: 'Attrezzatura', category: 'azienda', span: 'col-span-1 row-span-1' },
  { id: 78, src: '/images/gallery/sistema-acqua-pura-pannelli.jpg', alt: 'Sistema di filtrazione ad acqua pura per la pulizia di vetrate e pannelli solari', label: 'Sistemi Acqua Pura', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 79, src: '/images/gallery/pulizia-vetrate-quota-palazzo.jpg', alt: 'Intervento di pulizia vetrate in quota su facciata di un palazzo moderno con asta telescopica', label: 'Vetrate in Quota', category: 'speciali', span: 'col-span-2 row-span-1' },
  { id: 80, src: '/images/gallery/lavaggio-pavimenti-industriali-parma.jpg', alt: 'Operazione di lavaggio meccanizzato di una pavimentazione industriale di grande metratura', label: 'Lavaggio Industriale', category: 'industriali', span: 'col-span-1 row-span-1' },
  { id: 81, src: '/images/gallery/pulizia-pannelli-fotovoltaici-operatori.jpg', alt: 'Operatore Fulgur Service con DPI e casco pulisce pannelli fotovoltaici su tetto industriale', label: 'Fotovoltaico', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 82, src: '/images/gallery/pulizia-fine-cantiere-industriale.jpg', alt: 'Sgrosso e pulizia fine cantiere di un nuovo stabilimento industriale a Parma', label: 'Fine Cantiere', category: 'industriali', span: 'col-span-1 row-span-1' },
  { id: 83, src: '/images/gallery/manutenzione-pulizie-capannoni-abb.jpg', alt: 'Pulizia e manutenzione ordinaria presso lo stabilimento ABB — Fulgur Service', label: 'Stabilimenti ABB', category: 'industriali', span: 'col-span-1 row-span-2' },
  { id: 84, src: '/images/gallery/pulizia-pavimento-officina-meccanica.jpg', alt: 'Dettaglio pulizia pavimento tecnico in un’officina meccanica specializzata', label: 'Officine', category: 'industriali', span: 'col-span-1 row-span-1' },
  { id: 85, src: '/images/gallery/piattaforme-aeree-pulizie-interne.jpg', alt: 'Utilizzo di sollevatori e piattaforme aeree per la pulizia delle strutture interne di un capannone', label: 'Interventi in Altezza', category: 'speciali', span: 'col-span-1 row-span-1' },
  { id: 86, src: '/images/gallery/trattamento-lucidatura-monospazzola.jpg', alt: 'Trattamento di lucidatura e ceratura pavimenti con monospazzola professionale Fulgur Service', label: 'Trattamenti', category: 'speciali', span: 'col-span-1 row-span-1' },
]

export function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null)

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_ITEMS
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="min-h-[100dvh] bg-[var(--bg)] pt-24 pb-0 md:pt-32 lg:pt-40">
      <WipeReveal direction="top">
        {/* HEADER */}
        <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 mb-10 md:mb-16 text-center flex flex-col items-center">
          <SectionLabel className="mb-4">— I NOSTRI LAVORI</SectionLabel>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl lg:text-6xl max-w-3xl text-balance">
            Ogni spazio pulito racconta{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--br-h)]">
              una storia.
            </span>
          </h1>
          <p className="mt-6 font-sans text-lg font-light text-[var(--tx-2)] max-w-2xl text-balance">
            Ambienti aziendali, industriali, sanitari, alberghieri e residenziali.
            Ogni intervento è unico — ogni risultato è garantito.
          </p>

          {/* FILTER PILLS */}
          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-2" role="group" aria-label="Filtra per categoria">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={activeCategory === cat.id}
                className={`relative px-7 py-3 rounded-full font-mono-fulgur text-[11px] font-bold uppercase tracking-[0.15em] transition-all ${
                  activeCategory === cat.id
                    ? 'text-[var(--bg)] bg-[var(--accent)] shadow-[0_8px_20px_rgba(78,203,160,0.3)]'
                    : 'text-[var(--tx-3)] bg-[var(--bg-2)] border border-[var(--br)] hover:border-[var(--accent)]/50'
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 rounded-full bg-[var(--accent)] -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </WipeReveal>

      {/* BENTO GRID GALLERY */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 mb-16 md:mb-32">
        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[220px] lg:auto-rows-[260px] gap-3 sm:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedImage(item)}
                  className={`group relative overflow-hidden rounded-2xl bg-[var(--bg-2)] border border-[var(--br)] shadow-sm hover:shadow-[0_20px_40px_rgba(78,203,160,0.15)] hover:border-[var(--accent)]/50 hover:z-10 transition-all duration-500 cursor-zoom-in ${item.span}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Apri immagine: ${item.label}`}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  {/* Base Gradient for mobile text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                    <div className="h-12 w-12 rounded-full bg-[var(--accent)] text-[var(--bg)] flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                      <MagnifyingGlassPlus size={24} weight="bold" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-0 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500" aria-hidden="true">
                    <span className="font-mono-fulgur text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white md:text-[var(--accent)] drop-shadow-md">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>

      {/* AFTER SECTION */}
      <div className="w-full bg-[var(--bg-2)] py-16 md:py-32 border-t border-[var(--br)] relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center mb-12 md:mb-20">
              <SectionLabel className="mb-4">— RISULTATI CERTIFICATI</SectionLabel>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--tx-1)] tracking-tight text-balance">
                Il potere dei <span className="text-[var(--accent)]">risultati visibili.</span>
              </h2>
              <p className="mt-6 font-sans text-lg font-light text-[var(--tx-2)] max-w-2xl text-balance">
                Usa lo slider per confrontare lo stato degli ambienti prima e dopo il nostro intervento professionale. La precisione è la nostra firma.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-8"
              >
                 <BeforeAfterSlider
                    beforeImage={study.beforeImage}
                    afterImage={study.afterImage}
                    className="shadow-2xl"
                 />
                 <div className="px-2">
                    <div className="flex items-center gap-3 mb-3">
                       <span className="text-[10px] font-mono-fulgur font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full border border-[var(--accent)]/20">
                          {study.category}
                       </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#0F1F1A] mb-3">{study.title}</h3>
                    <p className="font-sans text-sm font-light text-[var(--tx-2)] leading-relaxed">
                       {study.description}
                    </p>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-[var(--bg)]/95 p-4 md:p-12 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Immagine ingrandita: ${selectedImage.label}`}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-8 right-8 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Chiudi immagine"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} weight="bold" />
            </motion.button>

            <motion.div
              layoutId={`img-${selectedImage.id}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl h-[70vh] md:h-[80vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent" aria-hidden="true">
                <SectionLabel className="mb-2 text-[var(--accent)] border-[var(--accent)]/30">— PORTFOLIO</SectionLabel>
                <h3 className="font-display text-2xl font-bold text-white mb-2">{selectedImage.label}</h3>
                <p className="font-sans text-sm text-white/70 max-w-xl">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
