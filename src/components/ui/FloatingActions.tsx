'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowLeft, ArrowRight, CheckCircle } from '@phosphor-icons/react'
import { MagneticButton } from '@/components/ui/MagneticButton'

/* ── WhatsApp URL smart: web su desktop, app su mobile ── */
function getWhatsAppUrl(text: string): string {
  const phone = '393383160091'
  const encoded = encodeURIComponent(text)
  const isMobile = typeof navigator !== 'undefined'
    && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  return isMobile
    ? `https://wa.me/${phone}?text=${encoded}`
    : `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`
}

/* ── Dati step ── */
const STEP_SERVIZI = [
  { id: 'uffici',       label: 'Pulizie Uffici',       icon: '🏢' },
  { id: 'industriale',  label: 'Capannoni / Industria', icon: '🏭' },
  { id: 'condomini',    label: 'Condomini',             icon: '🏘️' },
  { id: 'sanitario',    label: 'Settore Sanitario',     icon: '🏥' },
  { id: 'cantiere',     label: 'Fine Cantiere',         icon: '🔨' },
  { id: 'civile',       label: 'Casa / Appartamento',   icon: '🏠' },
  { id: 'fotovoltaico', label: 'Pannelli Fotovoltaici', icon: '☀️' },
  { id: 'altro',        label: 'Altro',                 icon: '✨' },
]

const STEP_METRATURA = [
  { id: 'xs',  label: '< 50 mq' },
  { id: 'sm',  label: '50 – 200 mq' },
  { id: 'md',  label: '200 – 500 mq' },
  { id: 'lg',  label: '500+ mq' },
]

const STEP_FREQUENZA = [
  { id: 'una-tantum',  label: 'Una tantum' },
  { id: 'settimanale', label: 'Settimanale' },
  { id: 'mensile',     label: 'Mensile' },
  { id: 'da-definire', label: 'Da definire' },
]

interface Selections {
  servizio:  string
  metratura: string
  frequenza: string
}

function buildMessage(sel: Selections): string {
  const s = STEP_SERVIZI.find(x => x.id === sel.servizio)?.label ?? sel.servizio
  const m = STEP_METRATURA.find(x => x.id === sel.metratura)?.label ?? sel.metratura
  const f = STEP_FREQUENZA.find(x => x.id === sel.frequenza)?.label ?? sel.frequenza
  return `Ciao Fulgur Service! 👋 Vorrei ricevere un preventivo per: *${s}* · Spazio *${m}* · Frequenza *${f}*. Quando possiamo sentirci per un sopralluogo gratuito?`
}

/* ── SVG WhatsApp ── */
const WaIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884Zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

/* ── Modal Preventivo Rapido ── */
function PreventivoModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0)
  const [sel, setSel] = useState<Selections>({ servizio: '', metratura: '', frequenza: '' })

  const steps = ['Servizio', 'Spazio', 'Frequenza', 'Riepilogo']
  const total = steps.length

  const handleSelect = useCallback((field: keyof Selections, value: string) => {
    setSel(prev => ({ ...prev, [field]: value }))
    setTimeout(() => setStep(s => s + 1), 220)
  }, [])

  const waUrl = step === 3 ? getWhatsAppUrl(buildMessage(sel)) : ''

  return (
    <motion.div
      key="pr-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[500] flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{ background: 'rgba(15,31,26,0.55)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <motion.div
        key="pr-panel"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[var(--br)]">
          <div>
            <p className="font-mono-fulgur text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
              Preventivo Rapido
            </p>
            <p className="font-display text-lg font-bold text-[var(--tx-1)] mt-0.5">
              {steps[step]}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Chiudi"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--br-h)] text-[var(--tx-3)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-[2px] bg-[var(--br)] mx-6">
          <motion.div
            className="h-full bg-[var(--accent)] rounded-full"
            animate={{ width: `${((step + 1) / total) * 100}%` }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Body */}
        <div className="px-6 py-6 min-h-[260px]">
          <AnimatePresence mode="wait">

            {/* Step 0 — Servizio */}
            {step === 0 && (
              <motion.div key="s0"
                initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}
              >
                <p className="font-body text-sm text-[var(--tx-3)] mb-4">Di cosa hai bisogno?</p>
                <div className="grid grid-cols-2 gap-2.5">
                  {STEP_SERVIZI.map(s => (
                    <button
                      key={s.id}
                      onClick={() => handleSelect('servizio', s.id)}
                      className="flex items-center gap-2.5 rounded-xl border border-[var(--br)] bg-[var(--bg-2)] px-4 py-3 text-left hover:border-[var(--accent)] hover:bg-[var(--accent-glow)] transition-all group"
                    >
                      <span className="text-lg leading-none">{s.icon}</span>
                      <span className="font-body text-[13px] font-medium text-[var(--tx-2)] group-hover:text-[var(--accent)] transition-colors leading-tight">
                        {s.label}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 1 — Metratura */}
            {step === 1 && (
              <motion.div key="s1"
                initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}
              >
                <p className="font-body text-sm text-[var(--tx-3)] mb-4">Quanto è grande lo spazio?</p>
                <div className="grid grid-cols-2 gap-2.5">
                  {STEP_METRATURA.map(m => (
                    <button
                      key={m.id}
                      onClick={() => handleSelect('metratura', m.id)}
                      className="rounded-xl border border-[var(--br)] bg-[var(--bg-2)] px-4 py-5 font-display text-[17px] font-bold text-[var(--tx-1)] hover:border-[var(--accent)] hover:bg-[var(--accent-glow)] hover:text-[var(--accent)] transition-all"
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2 — Frequenza */}
            {step === 2 && (
              <motion.div key="s2"
                initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}
              >
                <p className="font-body text-sm text-[var(--tx-3)] mb-4">Con che frequenza?</p>
                <div className="grid grid-cols-2 gap-2.5">
                  {STEP_FREQUENZA.map(f => (
                    <button
                      key={f.id}
                      onClick={() => handleSelect('frequenza', f.id)}
                      className="rounded-xl border border-[var(--br)] bg-[var(--bg-2)] px-4 py-5 font-display text-[17px] font-bold text-[var(--tx-1)] hover:border-[var(--accent)] hover:bg-[var(--accent-glow)] hover:text-[var(--accent)] transition-all"
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3 — Riepilogo */}
            {step === 3 && (
              <motion.div key="s3"
                initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center gap-5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-glow)]">
                  <CheckCircle size={32} weight="fill" className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="font-body text-sm text-[var(--tx-3)] mb-2">Il tuo messaggio pre-compilato:</p>
                  <div className="rounded-2xl bg-[var(--bg-2)] border border-[var(--br)] px-5 py-4 font-body text-[13px] text-[var(--tx-2)] leading-relaxed text-left">
                    {buildMessage(sel)}
                  </div>
                </div>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-display text-[15px] font-bold text-white shadow-lg transition-all hover:brightness-110 hover:shadow-xl"
                >
                  <WaIcon />
                  Invia su WhatsApp
                </a>
                <p className="font-mono-fulgur text-[10px] text-[var(--tx-3)] uppercase tracking-widest">
                  Vi risponderemo entro poche ore
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer nav */}
        {step > 0 && step < 3 && (
          <div className="px-6 pb-6">
            <button
              onClick={() => setStep(s => s - 1)}
              className="flex items-center gap-1.5 font-mono-fulgur text-[11px] font-bold uppercase tracking-widest text-[var(--tx-3)] hover:text-[var(--accent)] transition-colors"
            >
              <ArrowLeft size={12} />
              Indietro
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

/* ── FloatingActions — due bottoni sovrapposti in basso a destra ── */
export function FloatingActions() {
  const [visible, setVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [waHovered, setWaHovered] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2500)
    return () => clearTimeout(t)
  }, [])

  const waUrl = getWhatsAppUrl('Ciao Fulgur Service! Vorrei richiedere un sopralluogo gratuito.')

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="fixed bottom-6 right-4 sm:right-6 z-[90] flex flex-col items-end gap-3 pointer-events-none"
          >
            {/* ── Preventivo Rapido button ── */}
            <motion.button
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 280, damping: 22 }}
              onClick={() => setModalOpen(true)}
              aria-label="Preventivo Rapido"
              className="group flex pointer-events-auto items-center gap-2.5 rounded-full bg-[var(--accent)] px-4 py-3 shadow-[0_8px_28px_rgba(78,203,160,0.4)] transition-all hover:bg-[var(--accent-d)] hover:shadow-[0_10px_36px_rgba(78,203,160,0.5)] hover:gap-3"
            >
              {/* Lightning icon */}
              <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5 shrink-0" aria-hidden="true">
                <path d="M13 2 4.09 12.96A1 1 0 0 0 5 14.5h6.5L10 22l10.5-12A1 1 0 0 0 19.5 8.5H13V2z" />
              </svg>
              <span className="font-display text-[13px] font-bold text-white whitespace-nowrap">
                Preventivo Rapido
              </span>
              <ArrowRight size={14} className="text-white/70 transition-transform group-hover:translate-x-0.5" />
            </motion.button>

            {/* ── WhatsApp button ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.18, type: 'spring', stiffness: 280, damping: 22 }}
              className="flex items-center justify-end group"
              onMouseEnter={() => setWaHovered(true)}
              onMouseLeave={() => setWaHovered(false)}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {waHovered && (
                  <motion.span
                    initial={{ opacity: 0, x: 16, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.9 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-[72px] rounded-full bg-white border border-[var(--br)] px-4 py-2 font-mono-fulgur text-xs uppercase tracking-widest text-[var(--tx-1)] shadow-xl whitespace-nowrap"
                  >
                    Scrivici ora
                  </motion.span>
                )}
              </AnimatePresence>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contattaci su WhatsApp"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 rounded-full"
              >
                <MagneticButton
                  as="div"
                  intensity={0.2}
                  className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
                >
                  <div className="absolute -inset-2 animate-pulse-ring rounded-full border-2 border-[#25D366]" />
                  <WaIcon />
                </MagneticButton>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && <PreventivoModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
