'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useForm, Controller } from 'react-hook-form'
import type { Path } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import {
  House, Buildings, Factory, Briefcase, Storefront, Sparkle,
  ForkKnife, Coffee, CookingPot, Cheese, Fire, Flask, Tray,
  WarningCircle, CaretLeft, CheckCircle, MapPin, CircleNotch,
} from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { slideStep } from '@/lib/motion'
import type { LPData, LPVariant } from '@/lib/lp-data'
import { LP_SLUG_MAP } from '@/lib/lp-data'

// ── Icon map: qualifier option → phosphor icon ──────────────────────────────
const QUALIFIER_ICONS: Record<string, React.ElementType> = {
  'Ufficio piccolo (fino a 10 dipendenti)': House,
  'Ufficio medio (10–30 dipendenti)': Buildings,
  'Ufficio grande (oltre 30 dipendenti)': Factory,
  'Studio professionale': Briefcase,
  'Sede multipla': Storefront,
  'Ristorante / Trattoria': ForkKnife,
  'Bar / Caffetteria': Coffee,
  'Pasticceria / Gelateria': CookingPot,
  'Pizzeria': Fire,
  'Salumificio / Prosciuttificio': Factory,
  'Caseificio': Cheese,
  'Pastificio / Laboratorio': Flask,
  'Mensa / Catering': Tray,
  'Altro': Sparkle,
}

const ZONE = ['Parma', 'Provincia di Parma', 'Fuori provincia'] as const
type Zona = (typeof ZONE)[number]

// ── Zod schema ───────────────────────────────────────────────────────────────
const schema = z.object({
  variant: z.enum(['uffici', 'alimentare']),
  qualifier: z.string().min(1, "Seleziona il tipo di sede o attività"),
  zona: z.string().min(1, 'Seleziona la tua zona'),
  zonaCitta: z.string().optional(),
  nome: z.string().min(2, 'Inserisci il tuo nome'),
  telefono: z
    .string()
    .regex(/^[+]?[\d\s]{8,15}$/, 'Numero non valido. Esempio: 338 123 4567'),
  email: z.string().email('Inserisci un indirizzo email valido'),
  gdpr: z.literal(true, { message: 'Spunta la casella per procedere' }),
  website: z.string().max(0).optional(),
})
type FormData = z.infer<typeof schema>

interface LPContactFormProps {
  variant: LPVariant
  form: LPData['form']
  ctaPhoneRaw: string
}

// ── Floating label helpers ───────────────────────────────────────────────────
const inputCls = cn(
  'w-full h-16 px-5 pt-6 pb-2 rounded-xl border border-[var(--br)] bg-[var(--bg-2)]',
  'font-body text-[var(--tx-1)] text-base placeholder-transparent',
  'focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:bg-white',
  'transition-colors hover:border-[var(--br-h)] peer'
)
const labelCls = cn(
  'absolute left-5 top-5 font-body text-base text-[var(--tx-3)]',
  'pointer-events-none transition-all duration-150 origin-top-left',
  'peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[var(--accent-d)]',
  'peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[var(--accent-d)]'
)
const errCls = 'flex items-center gap-1.5 text-red-600 text-xs mt-1.5 font-body'

export function LPContactForm({ variant, form, ctaPhoneRaw }: LPContactFormProps) {
  const router = useRouter()
  const prefersReduced = useReducedMotion()
  const [serverError, setServerError] = useState<string | null>(null)
  const [[, direction], setPage] = useState([1, 0])
  const [step, setStep] = useState(1)
  const isSuccess = step === 5

  const {
    register,
    handleSubmit,
    control,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { variant, qualifier: '', zona: '', zonaCitta: '', nome: '', telefono: '', email: '' },
    mode: 'onTouched',
  })

  const qualifierValue = watch('qualifier')
  const zonaValue = watch('zona') as Zona | ''
  const zonaCittaValue = watch('zonaCitta')
  const nomeValue = watch('nome')
  const telefonoValue = watch('telefono')

  const advance = () => {
    setPage(([p]) => [p + 1, 1])
    setStep(s => s + 1)
  }

  const goBack = () => {
    setPage(([p]) => [p - 1, -1])
    setStep(s => s - 1)
  }

  const goNext = async (fields: Path<FormData>[]) => {
    const ok = await trigger(fields)
    if (ok) advance()
  }

  const autoAdvance = (fields: Path<FormData>[]) => {
    setTimeout(async () => {
      const ok = await trigger(fields)
      if (ok) advance()
    }, 80)
  }

  const onSubmit = async (data: FormData) => {
    setServerError(null)
    try {
      const params = new URLSearchParams(window.location.search)
      const utm = {
        source: params.get('utm_source') ?? undefined,
        medium: params.get('utm_medium') ?? undefined,
        campaign: params.get('utm_campaign') ?? undefined,
        content: params.get('utm_content') ?? undefined,
        term: params.get('utm_term') ?? undefined,
      }
      const zonaLabel =
        data.zona === 'Fuori provincia' && data.zonaCitta
          ? `Fuori provincia (${data.zonaCitta})`
          : data.zona
      const res = await fetch('/api/lp-preventivo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          variant: data.variant,
          nome: data.nome,
          telefono: data.telefono,
          email: data.email,
          qualifier: `${data.qualifier} · ${zonaLabel}`,
          gdpr: data.gdpr,
          utm: Object.values(utm).some(Boolean) ? utm : undefined,
          userAgent: navigator.userAgent.slice(0, 500),
          website: data.website,
        }),
      })
      const json = (await res.json()) as { ok: boolean; error?: string }
      if (!json.ok) {
        setServerError(json.error ?? 'Errore imprevisto. Riprova.')
        return
      }
      setPage(([p]) => [p + 1, 1])
      setStep(5)
      const firstName = encodeURIComponent(data.nome.trim().split(' ')[0])
      setTimeout(() => router.push(`/lp/${LP_SLUG_MAP[data.variant]}/grazie?nome=${firstName}`), 1500)
    } catch {
      setServerError('Errore di rete. Controlla la connessione e riprova.')
    }
  }

  const transition = { duration: prefersReduced ? 0 : 0.42, ease: [0.16, 1, 0.3, 1] as const }

  return (
    <div className="w-full relative rounded-3xl bg-white border border-[var(--br)] overflow-hidden shadow-[0_4px_6px_-1px_rgba(42,140,122,0.06),0_20px_40px_-8px_rgba(42,140,122,0.12)]">

      {/* Honeypot */}
      <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>
      <input type="hidden" {...register('variant')} />

      {/* Progress header */}
      {!isSuccess && (
        <div className="bg-[var(--bg-2)] px-6 py-4 border-b border-[var(--br)] flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--tx-2)]">
              Richiesta sopralluogo
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent-d)]">
              {step} / 4
            </span>
          </div>
          <div
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={4}
            aria-label={`Step ${step} di 4`}
            className="h-1 w-full bg-[var(--bg-3)] rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-[var(--accent)] rounded-full"
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: prefersReduced ? 0 : 0.5, ease: 'easeInOut' }}
            />
          </div>
        </div>
      )}

      {/* Step content */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative overflow-hidden min-h-[380px] px-6 py-8 sm:px-8 sm:py-10">
          <AnimatePresence initial={false} custom={direction} mode="wait">

            {/* ── STEP 1: Qualifier ─────────────────────────────────── */}
            {step === 1 && (
              <motion.div
                key="step1"
                custom={direction}
                variants={slideStep}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent-d)] mb-2">
                  Step 1
                </p>
                <h3 className="font-display font-bold text-xl text-[var(--tx-1)] mb-6">
                  {form.fields.qualifier.label}
                </h3>
                <Controller
                  name="qualifier"
                  control={control}
                  render={({ field }) => (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {form.fields.qualifier.options.map(opt => {
                        const Icon = QUALIFIER_ICONS[opt] ?? Sparkle
                        const selected = field.value === opt
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              field.onChange(opt)
                              autoAdvance(['qualifier'])
                            }}
                            className={cn(
                              'flex flex-col items-center gap-2 p-4 rounded-2xl border text-center transition-all duration-200',
                              'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2',
                              selected
                                ? 'border-[var(--accent)] bg-[var(--accent-glow)] shadow-[0_4px_16px_rgba(78,203,160,0.18)]'
                                : 'border-[var(--br)] bg-[var(--bg-2)] hover:border-[var(--br-h)] hover:bg-[var(--bg-3)]'
                            )}
                            aria-pressed={selected}
                          >
                            <div className={cn(
                              'w-10 h-10 rounded-xl flex items-center justify-center transition-colors',
                              selected ? 'bg-[var(--accent)] text-white' : 'bg-white text-[var(--tx-2)] border border-[var(--br)]'
                            )}>
                              <Icon size={20} weight={selected ? 'fill' : 'regular'} aria-hidden="true" />
                            </div>
                            <span className={cn(
                              'font-body text-[12px] leading-tight',
                              selected ? 'text-[var(--accent-d)] font-medium' : 'text-[var(--tx-2)]'
                            )}>
                              {opt}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  )}
                />
                {errors.qualifier && (
                  <p className={cn(errCls, 'mt-4')}>
                    <WarningCircle size={14} weight="fill" aria-hidden="true" />
                    {errors.qualifier.message}
                  </p>
                )}
              </motion.div>
            )}

            {/* ── STEP 2: Zona ──────────────────────────────────────── */}
            {step === 2 && (
              <motion.div
                key="step2"
                custom={direction}
                variants={slideStep}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent-d)] mb-2">
                  Step 2
                </p>
                <h3 className="font-display font-bold text-xl text-[var(--tx-1)] mb-2">
                  Dove si trova la tua sede?
                </h3>
                <p className="font-body text-sm text-[var(--tx-3)] mb-6">
                  Operiamo a Parma e in tutta la provincia.
                </p>
                <Controller
                  name="zona"
                  control={control}
                  render={({ field }) => (
                    <div className="flex flex-col gap-3">
                      {ZONE.map(z => {
                        const selected = field.value === z
                        const isFuori = z === 'Fuori provincia'
                        return (
                          <div key={z}>
                            <button
                              type="button"
                              onClick={() => {
                                field.onChange(z)
                                if (!isFuori) autoAdvance(['zona'])
                              }}
                              className={cn(
                                'w-full flex items-center gap-4 px-5 py-4 rounded-2xl border text-left transition-all duration-200',
                                'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2',
                                selected
                                  ? 'border-[var(--accent)] bg-[var(--accent-glow)] shadow-[0_4px_16px_rgba(78,203,160,0.18)]'
                                  : 'border-[var(--br)] bg-[var(--bg-2)] hover:border-[var(--br-h)] hover:bg-[var(--bg-3)]'
                              )}
                              aria-pressed={selected}
                            >
                              <MapPin
                                size={20}
                                weight={selected ? 'fill' : 'regular'}
                                className={selected ? 'text-[var(--accent)]' : 'text-[var(--tx-3)]'}
                                aria-hidden="true"
                              />
                              <span className={cn(
                                'font-body text-sm',
                                selected ? 'text-[var(--accent-d)] font-medium' : 'text-[var(--tx-1)]'
                              )}>
                                {z}
                              </span>
                            </button>

                            {/* City input for "Fuori provincia" */}
                            {isFuori && selected && (
                              <motion.div
                                initial={prefersReduced ? {} : { opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25 }}
                                className="mt-2 pl-1"
                              >
                                <input
                                  type="text"
                                  placeholder="In quale città o comune?"
                                  autoFocus
                                  className={cn(
                                    'w-full px-5 py-3.5 rounded-xl border border-[var(--br)] bg-white',
                                    'font-body text-sm text-[var(--tx-1)] placeholder-[var(--tx-3)]',
                                    'focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-colors'
                                  )}
                                  {...register('zonaCitta')}
                                />
                              </motion.div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                />
                {errors.zona && (
                  <p className={cn(errCls, 'mt-4')}>
                    <WarningCircle size={14} weight="fill" aria-hidden="true" />
                    {errors.zona.message}
                  </p>
                )}
              </motion.div>
            )}

            {/* ── STEP 3: Contacts ──────────────────────────────────── */}
            {step === 3 && (
              <motion.div
                key="step3"
                custom={direction}
                variants={slideStep}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent-d)] mb-2">
                  Step 3
                </p>
                <h3 className="font-display font-bold text-xl text-[var(--tx-1)] mb-6">
                  Come possiamo contattarti?
                </h3>
                <div className="flex flex-col gap-4">
                  {/* Nome */}
                  <div className="relative">
                    <input
                      id="lp-nome"
                      type="text"
                      autoComplete="name"
                      placeholder=" "
                      className={cn(inputCls, errors.nome && 'border-red-400')}
                      {...register('nome')}
                    />
                    <label htmlFor="lp-nome" className={labelCls}>
                      Nome e cognome
                    </label>
                    {errors.nome && (
                      <p className={errCls}>
                        <WarningCircle size={14} weight="fill" aria-hidden="true" />
                        {errors.nome.message}
                      </p>
                    )}
                  </div>
                  {/* Telefono */}
                  <div className="relative">
                    <input
                      id="lp-telefono"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder=" "
                      className={cn(inputCls, errors.telefono && 'border-red-400')}
                      {...register('telefono')}
                    />
                    <label htmlFor="lp-telefono" className={labelCls}>
                      Telefono
                    </label>
                    {errors.telefono && (
                      <p className={errCls}>
                        <WarningCircle size={14} weight="fill" aria-hidden="true" />
                        {errors.telefono.message}
                      </p>
                    )}
                    <p className="font-body text-[11px] text-[var(--tx-3)] mt-1">
                      {form.fieldMicrocopy.telefono}
                    </p>
                  </div>
                  {/* Email */}
                  <div className="relative">
                    <input
                      id="lp-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder=" "
                      className={cn(inputCls, errors.email && 'border-red-400')}
                      {...register('email')}
                    />
                    <label htmlFor="lp-email" className={labelCls}>
                      Email
                    </label>
                    {errors.email && (
                      <p className={errCls}>
                        <WarningCircle size={14} weight="fill" aria-hidden="true" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── STEP 4: Recap + GDPR + Submit ─────────────────────── */}
            {step === 4 && (
              <motion.div
                key="step4"
                custom={direction}
                variants={slideStep}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent-d)] mb-2">
                  Step 4
                </p>
                <h3 className="font-display font-bold text-xl text-[var(--tx-1)] mb-5">
                  Riepilogo e invio
                </h3>

                {/* Recap card */}
                <div className="bg-[var(--bg-2)] border border-[var(--br)] rounded-2xl p-5 mb-5 space-y-3">
                  <div className="flex gap-3 items-start">
                    <span className="font-mono text-[11px] text-[var(--tx-3)] w-20 shrink-0 pt-px">Tipo</span>
                    <span className="font-body text-sm text-[var(--tx-1)] leading-snug">{qualifierValue}</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-mono text-[11px] text-[var(--tx-3)] w-20 shrink-0 pt-px">Zona</span>
                    <span className="font-body text-sm text-[var(--tx-1)]">
                      {zonaValue}{zonaValue === 'Fuori provincia' && zonaCittaValue ? ` · ${zonaCittaValue}` : ''}
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-mono text-[11px] text-[var(--tx-3)] w-20 shrink-0 pt-px">Contatti</span>
                    <span className="font-body text-sm text-[var(--tx-1)]">
                      {nomeValue} · {telefonoValue}
                    </span>
                  </div>
                </div>

                {/* GDPR */}
                <label className="flex items-start gap-3 cursor-pointer mb-4">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border border-[var(--br-solid)] text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    {...register('gdpr')}
                  />
                  <span className="font-body text-xs text-[var(--tx-2)] leading-relaxed">
                    Ho letto e accetto la{' '}
                    <a
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent-d)] underline underline-offset-2"
                    >
                      Privacy Policy
                    </a>
                    . Autorizzo il trattamento dei miei dati per ricevere informazioni su questo servizio.
                  </span>
                </label>
                {errors.gdpr && (
                  <p className={cn(errCls, 'mb-4')}>
                    <WarningCircle size={14} weight="fill" aria-hidden="true" />
                    {errors.gdpr.message}
                  </p>
                )}

                {serverError && (
                  <div role="alert" className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl p-3 mb-4">
                    <WarningCircle size={16} weight="fill" className="text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="font-body text-sm text-red-700">{serverError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className={cn(
                    'w-full py-4 rounded-xl font-body font-medium text-base',
                    'bg-[var(--accent-d)] text-white',
                    'hover:bg-[var(--tx-1)] transition-colors duration-300',
                    'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2',
                    'disabled:opacity-70 disabled:cursor-not-allowed',
                    'flex items-center justify-center gap-2'
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <CircleNotch size={18} weight="bold" className="animate-spin" aria-hidden="true" />
                      {form.submitLoadingLabel}
                    </>
                  ) : (
                    form.submitLabel
                  )}
                </button>

                <p className="font-body text-[11px] text-center text-[var(--tx-3)] mt-3">
                  {form.postFormReassurance}
                </p>
              </motion.div>
            )}

            {/* ── SUCCESS STATE ─────────────────────────────────────── */}
            {isSuccess && (
              <motion.div
                key="success"
                initial={prefersReduced ? {} : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center text-center py-8"
              >
                <div className="relative w-20 h-20 mb-6 text-[var(--accent)]">
                  <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                    <motion.circle
                      cx="50" cy="50" r="44"
                      fill="none" stroke="currentColor" strokeWidth="4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: prefersReduced ? 0 : 0.9, ease: 'easeOut' }}
                    />
                    <motion.path
                      d="M28 50 L44 68 L72 32"
                      fill="none" stroke="currentColor" strokeWidth="6"
                      strokeLinecap="round" strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: prefersReduced ? 0 : 0.7, delay: prefersReduced ? 0 : 0.6, ease: 'easeOut' }}
                    />
                  </svg>
                  <div className="absolute inset-0 bg-[var(--accent-glow)] blur-2xl rounded-full -z-10" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-[var(--tx-1)] mb-2">
                  Richiesta inviata!
                </h3>
                <p className="font-body text-sm text-[var(--tx-2)]">
                  Stiamo aprendo la pagina di conferma…
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Footer nav */}
        {!isSuccess && step < 4 && (
          <div className="bg-[var(--bg-2)] px-6 py-4 border-t border-[var(--br)] flex items-center justify-between">
            <div>
              {step > 1 && (
                <button
                  type="button"
                  onClick={goBack}
                  className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--tx-3)] hover:text-[var(--tx-1)] transition-colors"
                >
                  <CaretLeft size={14} weight="bold" aria-hidden="true" />
                  Indietro
                </button>
              )}
            </div>
            <div>
              {step === 1 && (
                <button
                  type="button"
                  onClick={() => goNext(['qualifier'])}
                  className="font-body text-sm text-[var(--accent-d)] hover:text-[var(--tx-1)] transition-colors font-medium"
                >
                  Avanti →
                </button>
              )}
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => goNext(['zona'])}
                  className={cn(
                    'px-5 py-2.5 rounded-xl bg-[var(--accent)] text-white font-body text-sm font-medium',
                    'hover:bg-[var(--accent-d)] transition-colors',
                    'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2'
                  )}
                >
                  Continua →
                </button>
              )}
              {step === 3 && (
                <button
                  type="button"
                  onClick={() => goNext(['nome', 'telefono', 'email'])}
                  className={cn(
                    'px-5 py-2.5 rounded-xl bg-[var(--accent)] text-white font-body text-sm font-medium',
                    'hover:bg-[var(--accent-d)] transition-colors',
                    'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2'
                  )}
                >
                  Riepilogo →
                </button>
              )}
            </div>
          </div>
        )}

        {/* Back button visible on step 4 */}
        {!isSuccess && step === 4 && (
          <div className="px-6 pb-2 pt-0">
            <button
              type="button"
              onClick={goBack}
              className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--tx-3)] hover:text-[var(--tx-1)] transition-colors"
            >
              <CaretLeft size={14} weight="bold" aria-hidden="true" />
              Indietro
            </button>
          </div>
        )}
      </form>

      {/* Phone fallback */}
      {!isSuccess && (
        <>
          <div className="flex items-center gap-3 mx-6 my-4">
            <div className="flex-1 border-t border-[var(--br)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--tx-3)]">oppure</span>
            <div className="flex-1 border-t border-[var(--br)]" />
          </div>
          <div className="px-6 pb-6">
            <a
              href={`tel:${ctaPhoneRaw}`}
              aria-label="Chiama Fulgur Service"
              className={cn(
                'w-full h-11 rounded-full font-body font-medium text-sm',
                'border border-[var(--br-solid)] text-[var(--accent-d)]',
                'hover:bg-[var(--bg-2)] transition-colors',
                'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2',
                'flex items-center justify-center gap-2'
              )}
            >
              Chiama: 338 316 0091
            </a>
          </div>
        </>
      )}
    </div>
  )
}
