'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Buildings, 
  House, 
  Sparkle, 
  FirstAidKit, 
  Question, 
  Wrench,
  CaretRight,
  ArrowLeft,
  ChatCircleText
} from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface Action {
  id: string
  label: string
  prompt: string
}

interface Category {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  actions: Action[]
}

const CATEGORIES: Category[] = [
  {
    id: 'aziende',
    title: 'Pulizie Aziendali',
    icon: <Buildings size={24} weight="duotone" />,
    description: 'Uffici, negozi e spazi professionali.',
    actions: [
      { id: 'offices', label: 'Preventivo Uffici', prompt: 'Vorrei un preventivo per la pulizia del mio ufficio. Potete aiutarmi?' },
      { id: 'shops', label: 'Pulizia Negozi/Showroom', prompt: 'Ho un negozio a Parma e avrei bisogno di una pulizia regolare. Come funziona?' },
      { id: 'industrial', label: 'Capannoni e Logistica', prompt: 'Ho un magazzino industriale da pulire. Che macchinari utilizzate?' }
    ]
  },
  {
    id: 'superfici',
    title: 'Trattamento Superfici',
    icon: <Sparkle size={24} weight="duotone" />,
    description: 'Marmo, gres, parquet e altro.',
    actions: [
      { id: 'marmo', label: 'Lucidatura Marmo', prompt: 'Il mio pavimento in marmo è opaco. Quali trattamenti proponete?' },
      { id: 'gres', label: 'Pulizia Gres Porcellanato', prompt: 'Ho delle macchie ostinate sul gres. Avete prodotti specifici?' },
      { id: 'parquet', label: 'Manutenzione Parquet', prompt: 'Come posso proteggere il mio parquet nel tempo?' }
    ]
  },
  {
    id: 'faq',
    title: 'Domande Frequenti',
    icon: <Question size={24} weight="duotone" />,
    description: 'Info su prodotti, orari e metodi.',
    actions: [
      { id: 'eco', label: 'Prodotti Utilizzati', prompt: 'Usate prodotti ecologici certificati?' },
      { id: 'times', label: 'Orari di Intervento', prompt: 'Potete intervenire in orari di chiusura ufficio?' },
      { id: 'sopralluogo', label: 'Il Sopralluogo', prompt: 'Il sopralluogo è davvero gratuito e senza impegno?' }
    ]
  },
  {
    id: 'manutenzione',
    title: 'Servizi 360°',
    icon: <Wrench size={24} weight="duotone" />,
    description: 'Idraulica, elettrica e altro.',
    actions: [
      { id: 'plumbing', label: 'Piccola Idraulica', prompt: 'Ho letto che gestite anche piccola manutenzione idraulica per i clienti.' },
      { id: 'waste', label: 'Gestione Rifiuti', prompt: 'Come gestite l\'esposizione dei bidoni per i condomini?' }
    ]
  }
]

interface AIGuidedExperienceProps {
  onSelectPrompt: (prompt: string) => void
}

export function AIGuidedExperience({ onSelectPrompt }: AIGuidedExperienceProps) {
  const [selectedCat, setSelectedCat] = useState<Category | null>(null)

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!selectedCat ? (
          <motion.div 
            key="categories"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat)}
                className="group flex flex-col items-start p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/[0.02] transition-all text-left"
              >
                <div className="h-12 w-12 rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-1">{cat.title}</h3>
                <p className="font-sans text-xs text-[var(--tx-3)] font-light leading-relaxed">
                  {cat.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[var(--accent)] text-[10px] font-mono-fulgur uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Esplora opzioni <CaretRight />
                </div>
              </button>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="actions"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <button 
              onClick={() => setSelectedCat(null)}
              className="flex items-center gap-2 text-[var(--accent)] text-[10px] font-mono-fulgur uppercase tracking-widest mb-6 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft /> Torna alle categorie
            </button>
            
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[var(--accent)]">{selectedCat.icon}</span>
                {selectedCat.title}
              </h3>
              <p className="text-sm font-light text-[var(--tx-3)] mt-2">Seleziona l&apos;argomento per iniziare la conversazione guidata:</p>
            </div>

            <div className="flex flex-col gap-3">
              {selectedCat.actions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => onSelectPrompt(action.prompt)}
                  className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[var(--accent)]/30 hover:bg-white/[0.05] transition-all text-left group"
                >
                  <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    {action.label}
                  </span>
                  <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:bg-[var(--accent)] group-hover:text-white transition-all">
                    <ChatCircleText size={18} />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
