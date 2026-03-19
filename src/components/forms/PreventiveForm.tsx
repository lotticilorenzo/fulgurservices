'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm, Controller } from 'react-hook-form'
import type { Path } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, Warning, CaretLeft, Sparkle, Buildings, Factory, FirstAidKit, BuildingApartment, Bed, HardHat, ArrowsOutSimple, Sun, Anchor, Wind, House, Drop } from '@phosphor-icons/react'
import { SERVICES } from '@/lib/services-data'
import { SectionLabel } from '@/components/ui/SectionLabel'

// Mapping icon from services-data
const IconMap: Record<string, React.ElementType> = {
  Buildings, Factory, FirstAidKit, BuildingApartment, 
  Bed, Sparkle, HardHat, ArrowsOutSimple, Sun, 
  Anchor, Wind, House, Drop
}

// ==========================================
// ZOD SCHEMA PER LA VALIDAZIONE
// ==========================================
const FormSchema = z.object({
  servizi: z.array(z.string()).min(1, 'Seleziona almeno un servizio per continuare.'),
  tipo_ambiente: z.string().min(1, 'Seleziona il tipo di ambiente.'),
  metratura: z.string().min(1, 'Inserisci una metratura valida.').refine(v => !isNaN(Number(v)) && Number(v) > 0, 'Inserisci una metratura valida.'),
  note_ambiente: z.string().optional(),
  frequenza: z.string().min(1, 'Seleziona con quale frequenza desideri il servizio.'),
  citta: z.string().trim().min(2, 'Inserisci il nome della tua città o comune.'),
  indirizzo: z.string().optional(),
  nome: z.string().trim().min(3, 'Inserisci il tuo nome e cognome completo.'),
  azienda: z.string().optional(),
  email: z.string().email('Inserisci un indirizzo email valido.'),
  tel: z.string().min(6, 'Inserisci un numero di telefono valido.'),
  note: z.string().optional(),
  privacy: z.boolean().refine((val) => val === true, {
    message: 'Devi accettare la privacy policy per continuare.',
  }),
  website: z.string().optional(), // Honeypot
})

type FormData = z.infer<typeof FormSchema>

// ==========================================
// FORM COMPONENT
// ==========================================
export function PreventiveForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Step 6 equivale allo status di successo
  const isSuccess = step === 6

  const {
    register,
    handleSubmit,
    control,
    trigger,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      servizi: [],
      tipo_ambiente: '',
      metratura: '',
      note_ambiente: '',
      frequenza: '',
      citta: '',
      indirizzo: '',
      nome: '',
      azienda: '',
      email: '',
      tel: '',
      note: '',
      privacy: false, // richiederà click
    },
    mode: 'onTouched'
  })

  // Transizioni Framer Motion
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  }

  // Direzione per l'animazione slide: 1 per avanti, -1 per indietro
  const [[page, direction], setPage] = useState([1, 0])

  const goNext = async () => {
    const stepFields: Record<number, Path<FormData>[]> = {
      1: ['servizi'],
      2: ['tipo_ambiente', 'metratura'],
      3: ['frequenza'],
      4: ['citta'],
      5: ['nome', 'email', 'tel', 'privacy'],
    }
    const fieldsToValidate = stepFields[step] ?? []

    const isStepValid = await trigger(fieldsToValidate)
    
    if (isStepValid && step < 5) {
      setPage([step + 1, 1])
      setStep((prev) => prev + 1)
    }
  }

  const goBack = () => {
    if (step > 1 && step < 6) {
      setPage([step - 1, -1])
      setStep((prev) => prev - 1)
    }
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    try {
      const response = await fetch('/api/preventivo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json() as { success: boolean; error?: string }
      if (result.success) {
        setPage([6, 1])
        setStep(6)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setSubmitError(result.error ?? "Si è verificato un errore durante l'invio. Riprova più tardi.")
      }
    } catch (e) {
      console.error(e)
      setSubmitError('Errore di rete. Controlla la tua connessione e riprova.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full relative shadow-2xl rounded-3xl bg-white border border-[var(--br)] overflow-hidden">
      
      {/* HEADER DELLA FORM: PROGRESS BAR */}
      {!isSuccess && (
        <div className="w-full bg-[var(--bg-2)] px-8 py-5 border-b border-[var(--br)] flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-mono-fulgur text-xs font-bold tracking-widest uppercase text-[var(--tx-1)]">
              Preventivo Rapido
            </span>
            <span className="font-mono-fulgur text-xs font-bold tracking-widest uppercase text-[var(--accent)]">
              Step {step} di 5
            </span>
          </div>
          {/* Progress Bar */}
          <div
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={5}
            aria-label={`Step ${step} di 5`}
            className="h-1.5 w-full bg-[var(--bg-3)] rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-[var(--accent)] rounded-full"
              initial={{ width: `${((step - 1) / 5) * 100}%` }}
              animate={{ width: `${(step / 5) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>
        </div>
      )}

      {/* FORM CONTENT CONTAINER */}
      <div className="relative min-h-[480px] w-full p-6 md:p-8 lg:p-12">
        <form onSubmit={handleSubmit(onSubmit)} className="h-full">
          {/* Honeypot field - Hidden from users */}
          <div className="hidden" aria-hidden="true">
            <input type="text" {...register('website')} tabIndex={-1} autoComplete="off" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            
            {/* STEP 1: Servizi grid */}
            {step === 1 && (
              <motion.div
                key="step1"
                custom={direction}
                variants={slideVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                <div className="mb-8">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--tx-1)]">Di cosa hai bisogno?</h3>
                  <p className="font-sans text-sm font-light mt-2 text-[var(--tx-2)]">Puoi selezionare più servizi contemporaneamente.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Controller
                    name="servizi"
                    control={control}
                    render={({ field }) => (
                      <>
                        {SERVICES.map((s) => {
                          const Icon = IconMap[s.icon] || Buildings
                          const isSelected = field.value.includes(s.title)
                          return (
                            <label
                              key={s.id}
                              className={`flex flex-col gap-3 cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all ${
                                isSelected 
                                  ? 'border-[var(--accent)] bg-[var(--accent)]/5 shadow-[0_10px_30px_rgba(42,140,122,0.1)]' 
                                  : 'border-[var(--br)] bg-[var(--bg-2)] hover:border-[var(--accent)]'
                              }`}
                            >
                              <input
                                type="checkbox"
                                value={s.title}
                                className="sr-only"
                                onChange={(e) => {
                                  const checked = e.target.checked
                                  if (checked) {
                                    field.onChange([...field.value, s.title])
                                  } else {
                                    field.onChange(field.value.filter((val) => val !== s.title))
                                  }
                                }}
                                checked={isSelected}
                              />
                              <div className={`h-10 w-10 flex items-center justify-center rounded-xl transition-colors ${
                                isSelected ? 'bg-[var(--accent)] text-white' : 'bg-white text-[var(--tx-1)]'
                              }`}>
                                <Icon size={20} weight={isSelected ? 'fill' : 'duotone'} />
                              </div>
                              <span className={`font-display text-sm font-bold ${isSelected ? 'text-[var(--accent)]' : 'text-[var(--tx-1)]'}`}>
                                {s.title}
                              </span>
                            </label>
                          )
                        })}
                      </>
                    )}
                  />
                </div>
                {errors.servizi && (
                  <p className="mt-4 flex items-center gap-2 text-sm text-red-400 font-sans">
                    <Warning size={16} weight="bold" /> {errors.servizi.message}
                  </p>
                )}
              </motion.div>
            )}

            {/* STEP 2: Ambiente */}
            {step === 2 && (
              <motion.div
                key="step2"
                custom={direction}
                variants={slideVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full max-w-xl mx-auto"
              >
                <div className="mb-8">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--tx-1)]">Descrivici lo spazio</h3>
                  <p className="font-sans text-sm font-light mt-2 text-[var(--tx-2)]">Ci aiuta a fornirti un preventivo ancora più preciso.</p>
                </div>

                <div className="flex flex-col gap-6">
                  {/* Tipo Ambiente Select */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-sm font-medium text-[var(--tx-1)]">Tipo di ambiente</label>
                    <select
                      {...register('tipo_ambiente')}
                      className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-5 py-4 font-sans text-sm text-[var(--tx-1)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:shadow-[0_0_15px_var(--accent-glow)] focus:border-transparent transition-all outline-none appearance-none focus:bg-white"
                    >
                      <option value="">Seleziona...</option>
                      <option value="Ufficio / Spazio commerciale">Ufficio / Spazio commerciale</option>
                      <option value="Capannone / Magazzino">Capannone / Magazzino</option>
                      <option value="Condominio / Parti comuni">Condominio / Parti comuni</option>
                      <option value="Abitazione privata">Abitazione privata</option>
                      <option value="Hotel / Struttura ricettiva">Hotel / Struttura ricettiva</option>
                      <option value="Clinica / Studio medico">Clinica / Studio medico</option>
                      <option value="Cantiere / Post ristrutturazione">Cantiere / Post ristrutturazione</option>
                      <option value="Altro">Altro</option>
                    </select>
                    {errors.tipo_ambiente && (
                      <p className="flex items-center gap-2 text-sm text-red-400 mt-1"><Warning size={15} /> {errors.tipo_ambiente.message}</p>
                    )}
                  </div>

                  {/* Metratura */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-sm font-medium text-[var(--tx-1)]">Metratura approssimativa (m²)</label>
                    <input
                      type="number"
                      placeholder="es. 250"
                      {...register('metratura')}
                      className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-5 py-4 font-sans text-sm text-[var(--tx-1)] placeholder-[var(--tx-3)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:shadow-[0_0_15px_var(--accent-glow)] focus:border-transparent transition-all outline-none focus:bg-white"
                    />
                    {errors.metratura && (
                      <p className="flex items-center gap-2 text-sm text-red-400 mt-1"><Warning size={15} /> {errors.metratura.message}</p>
                    )}
                  </div>

                  {/* Note Ambiente */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-sm font-medium text-[var(--tx-1)]">Note sull'ambiente (opzionale)</label>
                    <textarea
                      placeholder="Piani senza ascensore, particolarità specifiche..."
                      rows={3}
                      {...register('note_ambiente')}
                      className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-5 py-4 font-sans text-sm text-[var(--tx-1)] placeholder-[var(--tx-3)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:shadow-[0_0_15px_var(--accent-glow)] focus:border-transparent transition-all outline-none resize-none focus:bg-white"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Frequenza */}
            {step === 3 && (
              <motion.div
                key="step3"
                custom={direction}
                variants={slideVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full max-w-2xl mx-auto"
              >
                <div className="mb-8 text-center">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--tx-1)]">Con quale frequenza?</h3>
                  <p className="font-sans text-sm font-light mt-2 text-[var(--tx-2)]">Scegli la soluzione più adatta alle tue esigenze e routine.</p>
                </div>

                <Controller
                    name="frequenza"
                    control={control}
                    render={({ field }) => (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { id: 'Una tantum', label: 'Una tantum', desc: 'Intervento singolo immediato' },
                          { id: 'Settimanale', label: 'Settimanale', desc: '1 o più volte alla settimana' },
                          { id: 'Quindicinale', label: 'Quindicinale', desc: 'Ogni 2 settimane' },
                          { id: 'Mensile', label: 'Mensile', desc: '1 volta al mese' },
                          { id: 'Personalizzata', label: 'Personalizzata', desc: 'Da definire insieme in fase di accordo' },
                        ].map((opt) => {
                          const isSelected = field.value === opt.id
                          return (
                            <label
                              key={opt.id}
                              className={`flex flex-col p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all ${
                                isSelected 
                                  ? 'border-[var(--accent)] bg-[var(--accent)]/5 shadow-[0_10px_30px_rgba(42,140,122,0.1)]' 
                                  : 'border-[var(--br)] bg-[var(--bg-2)] hover:border-[var(--accent)]'
                              }`}
                            >
                              <input
                                type="radio"
                                value={opt.id}
                                className="sr-only"
                                onChange={(e) => field.onChange(e.target.value)}
                                checked={isSelected}
                              />
                              <span className={`font-display text-base font-bold mb-1 ${isSelected ? 'text-[var(--accent)]' : 'text-[var(--tx-1)]'}`}>
                                {opt.label}
                              </span>
                              <span className="font-sans text-[13px] text-[var(--tx-2)]">{opt.desc}</span>
                            </label>
                          )
                        })}
                      </div>
                    )}
                />
                {errors.frequenza && (
                  <p className="mt-4 flex justify-center items-center gap-2 text-sm text-red-400 font-sans">
                    <Warning size={16} weight="bold" /> {errors.frequenza.message}
                  </p>
                )}
              </motion.div>
            )}

            {/* STEP 4: Luogo */}
            {step === 4 && (
              <motion.div
                key="step4"
                custom={direction}
                variants={slideVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full max-w-xl mx-auto"
              >
                <div className="mb-8">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--tx-1)]">Dove sei?</h3>
                  <p className="font-sans text-sm font-light mt-2 text-[var(--tx-2)]">Operiamo attivamente a Parma e in tutta l'Emilia Romagna.</p>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-sm font-medium text-[var(--tx-1)]">Città / Comune *</label>
                    <input
                      type="text"
                      placeholder="es. Parma, Fidenza, Salsomaggiore..."
                      {...register('citta')}
                      className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-5 py-4 font-sans text-sm text-[var(--tx-1)] placeholder-[var(--tx-3)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:shadow-[0_0_15px_var(--accent-glow)] focus:border-transparent transition-all outline-none focus:bg-white"
                    />
                    {errors.citta && (
                      <p className="flex items-center gap-2 text-sm text-red-400 mt-1"><Warning size={15} /> {errors.citta.message}</p>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-sm font-medium text-[var(--tx-1)]">Indirizzo (opzionale)</label>
                    <input
                      type="text"
                      placeholder="via / piazza..."
                      {...register('indirizzo')}
                      className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-5 py-4 font-sans text-sm text-[var(--tx-1)] placeholder-[var(--tx-3)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:shadow-[0_0_15px_var(--accent-glow)] focus:border-transparent transition-all outline-none focus:bg-white"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 5: Contatti */}
            {step === 5 && (
              <motion.div
                key="step5"
                custom={direction}
                variants={slideVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full max-w-xl mx-auto"
              >
                <div className="mb-8">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--tx-1)]">Come possiamo contattarti?</h3>
                  <p className="font-sans text-sm font-light mt-2 text-[var(--tx-2)]">Inserisci i tuoi contatti, ti risponderemo entro 24 ore lavorative.</p>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-sm font-medium text-[var(--tx-1)]">Nome e Cognome *</label>
                      <input
                        type="text"
                        {...register('nome')}
                        className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-4 py-3.5 font-sans text-sm text-[var(--tx-1)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:shadow-[0_0_15px_var(--accent-glow)] outline-none focus:bg-white transition-all"
                      />
                      {errors.nome && <p className="flex items-center gap-1 text-xs text-red-400"><Warning size={14} /> {errors.nome.message}</p>}
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-sm font-medium text-[var(--tx-1)]">Azienda (opzionale)</label>
                      <input
                        type="text"
                        {...register('azienda')}
                        className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-4 py-3.5 font-sans text-sm text-[var(--tx-1)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:shadow-[0_0_15px_var(--accent-glow)] outline-none focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-sm font-medium text-[var(--tx-1)]">Indirizzo Email *</label>
                      <input
                        type="email"
                        {...register('email')}
                        className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-4 py-3.5 font-sans text-sm text-[var(--tx-1)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:shadow-[0_0_15px_var(--accent-glow)] outline-none focus:bg-white transition-all"
                      />
                      {errors.email && <p className="flex items-center gap-1 text-xs text-red-400"><Warning size={14} /> {errors.email.message}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-sm font-medium text-[var(--tx-1)]">Telefono / Cellulare *</label>
                      <input
                        type="tel"
                        {...register('tel')}
                        className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-4 py-3.5 font-sans text-sm text-[var(--tx-1)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:shadow-[0_0_15px_var(--accent-glow)] outline-none focus:bg-white transition-all"
                      />
                      {errors.tel && <p className="flex items-center gap-1 text-xs text-red-400"><Warning size={14} /> {errors.tel.message}</p>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-2">
                    <label className="font-sans text-sm font-medium text-[var(--tx-1)]">Ulteriori richieste (opzionale)</label>
                    <textarea
                      rows={3}
                      {...register('note')}
                      className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-4 py-3.5 font-sans text-sm text-[var(--tx-1)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:shadow-[0_0_15px_var(--accent-glow)] outline-none resize-none focus:bg-white transition-all"
                    />
                  </div>

                  <div className="mt-2 flex flex-col gap-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-start pt-1">
                        <input
                          type="checkbox"
                          {...register('privacy')}
                          className="peer sr-only"
                        />
                        <div className="w-5 h-5 rounded-[4px] border border-[var(--br)] bg-[var(--bg-2)] peer-checked:bg-[var(--accent)] peer-checked:border-[var(--accent)] transition-colors flex items-center justify-center">
                          <CheckCircle weight="bold" className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" size={14} />
                        </div>
                      </div>
                      <span className="font-sans text-[13px] text-[var(--tx-2)] leading-tight">
                        Dichiaro di aver letto la Privacy Policy e acconsento al trattamento dei miei dati personali ai fini dell'erogazione del modulo di contatto. *
                      </span>
                    </label>
                    {errors.privacy && <p className="flex items-center gap-1 text-xs text-red-400 mt-1"><Warning size={14} /> {errors.privacy.message}</p>}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 6: SUCCESS (Submitted) */}
            {isSuccess && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-24 h-24 mb-8 text-[var(--accent)] relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <motion.circle
                      cx="50" cy="50" r="45"
                      fill="none" stroke="currentColor" strokeWidth="4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                    <motion.path
                      d="M25 50 L45 70 L75 30"
                      fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                    />
                  </svg>
                  <div className="absolute inset-0 bg-[var(--accent)]/20 blur-2xl rounded-full" />
                </div>
                
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--tx-1)]">Richiesta inviata!</h3>
                <p className="mt-4 font-sans text-base text-[var(--tx-2)] max-w-sm">
                  Grazie per averci contattato. Abbiamo ricevuto la tua richiesta e un membro del nostro team ti risponderà entro 24 ore.
                </p>

                <div className="mt-10 px-6 py-4 rounded-full border border-[var(--br)] bg-[var(--bg-2)] inline-flex items-center gap-3">
                  <span className="font-sans text-sm text-[var(--tx-2)]">Hai urgenza?</span>
                  <a href="tel:+393383160091" className="font-mono-fulgur text-sm font-bold text-[var(--accent)] hover:brightness-110">
                    +39 338 316 0091
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>

      {/* ERRORE SUBMIT INLINE */}
      {submitError && (
        <div role="alert" className="mx-8 mb-0 mt-[-8px] flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-5 py-3.5 text-sm text-red-700">
          <Warning size={16} weight="bold" className="mt-0.5 shrink-0" />
          <span className="font-sans">{submitError}</span>
        </div>
      )}

      {/* FOOTER ACTIONS (Navigazione) */}
      {!isSuccess && (
        <div className="w-full bg-[var(--bg-2)] px-8 py-5 border-t border-[var(--br)] flex items-center justify-between">
          <div>
            {step > 1 && (
              <button
                type="button"
                onClick={goBack}
                disabled={isSubmitting}
                className="flex items-center gap-2 font-mono-fulgur text-xs font-bold uppercase tracking-widest text-[var(--tx-2)] hover:text-[var(--tx-1)] transition-colors disabled:opacity-50"
              >
                <CaretLeft size={16} weight="bold" /> Indietro
              </button>
            )}
          </div>
          <div>
            {step < 5 ? (
              <button
                type="button"
                onClick={goNext}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] font-display text-sm font-bold text-white shadow-[0_10px_30px_rgba(42,140,122,0.1)] hover:scale-105 active:scale-95 transition-transform"
              >
                Continua →
              </button>
            ) : (
              <button
                 // Intercetta click esterno e fa scattare il submit di react-hook-form
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="relative overflow-hidden flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--accent-d)] font-display text-sm font-bold text-white shadow-[0_15px_40px_rgba(42,140,122,0.1)] hover:brightness-110 active:scale-95 hover:-translate-y-0.5 transition-all disabled:opacity-75 disabled:transform-none disabled:cursor-not-allowed group"
              >
                {/* Effetto Shimmering loading state */}
                {isSubmitting && (
                  <motion.div
                    className="absolute inset-0 -translate-x-full w-full h-full"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
                    animate={{ translateX: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  />
                )}
                {isSubmitting ? 'Invio in corso...' : 'Invia Richiesta Elaborata'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
