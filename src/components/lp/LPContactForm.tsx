'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { CircleNotch, WarningCircle, Phone } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import type { LPData, LPVariant } from '@/lib/lp-data'

const schema = z.object({
  variant: z.enum(['uffici', 'alimentare']),
  nome: z.string().min(2, 'Inserisci il tuo nome'),
  telefono: z
    .string()
    .regex(/^[+]?[\d\s]{8,15}$/, 'Numero non valido. Esempio: 338 123 4567'),
  email: z.string().email('Inserisci un indirizzo email valido'),
  qualifier: z.string().min(1, "Seleziona un'opzione"),
  gdpr: z.literal(true, { message: 'Spunta la casella per procedere' }),
  website: z.string().max(0).optional(),
})

type FormData = z.infer<typeof schema>

interface UtmParams {
  source?: string
  medium?: string
  campaign?: string
  content?: string
  term?: string
}

interface LPContactFormProps {
  variant: LPVariant
  form: LPData['form']
  ctaPhoneRaw: string
  ctaPhone: string
}

const fieldVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

export function LPContactForm({
  variant,
  form,
  ctaPhoneRaw,
  ctaPhone,
}: LPContactFormProps) {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { variant },
  })

  const qualifierValue = watch('qualifier')
  const isQualifierFilled = !!qualifierValue && qualifierValue !== ''

  const onSubmit = async (data: FormData) => {
    setServerError(null)
    try {
      const params = new URLSearchParams(window.location.search)
      const utm: UtmParams = {
        source: params.get('utm_source') ?? undefined,
        medium: params.get('utm_medium') ?? undefined,
        campaign: params.get('utm_campaign') ?? undefined,
        content: params.get('utm_content') ?? undefined,
        term: params.get('utm_term') ?? undefined,
      }
      const res = await fetch('/api/lp-preventivo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          utm: Object.values(utm).some(Boolean) ? utm : undefined,
          userAgent: navigator.userAgent.slice(0, 500),
        }),
      })
      const json = (await res.json()) as { ok: boolean; error?: string }
      if (!json.ok) {
        setServerError(json.error ?? 'Errore imprevisto. Riprova.')
        return
      }
      router.push(`/lp/${variant === 'uffici' ? 'pulizie-uffici' : 'settore-alimentare'}/grazie`)
    } catch {
      setServerError('Errore di rete. Controlla la connessione e riprova.')
    }
  }

  /* ── Floating-label input class ── */
  const inputFloatClass = cn(
    'w-full h-16 px-5 pt-6 pb-2 rounded-lg border border-[var(--br)] bg-white',
    'font-body text-[var(--tx-1)] text-base',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2',
    'transition-colors hover:border-[var(--br-h)]',
    'peer'
  )

  const floatLabelClass = cn(
    'absolute left-5 top-5 font-body text-base text-[var(--tx-3)]',
    'pointer-events-none transition-all duration-150 origin-top-left',
    'peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[var(--accent-d)]',
    'peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[var(--accent-d)]'
  )

  /* ── Select (no placeholder-shown trick — use watched value) ── */
  const selectFloatClass = cn(
    'w-full h-16 px-5 pt-6 pb-2 rounded-lg border border-[var(--br)] bg-white',
    'font-body text-[var(--tx-1)] text-base',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2',
    'transition-colors hover:border-[var(--br-h)]',
    'appearance-none bg-[image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%237A9E97\' d=\'M7 10l5 5 5-5z\'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_16px_center]'
  )

  const microcopyClass = 'font-body text-[11px] text-[var(--tx-3)] mt-1'
  const errorClass = 'flex items-center gap-1.5 text-red-600 text-xs mt-1.5 font-body'

  return (
    <div
      className="w-full max-w-xl mx-auto bg-[var(--bg-2)] border border-[var(--br)] rounded-2xl p-8 sm:p-10"
      style={{ boxShadow: '0 4px 6px -1px rgba(42,140,122,0.06), 0 20px 40px -8px rgba(42,140,122,0.12)' }}
    >
      {serverError && (
        <div
          role="alert"
          aria-live="polite"
          className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl p-3 mb-5"
        >
          <WarningCircle
            size={18}
            weight="fill"
            className="text-red-500 flex-shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="font-body text-sm text-red-700">{serverError}</p>
        </div>
      )}

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <input type="hidden" {...register('variant')} />

        {/* Honeypot */}
        <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }} aria-hidden="true">
          <label htmlFor="lp-website">Non compilare</label>
          <input
            id="lp-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register('website')}
          />
        </div>

        {/* Nome — floating label */}
        <motion.div variants={fieldVariants}>
          <div className="relative">
            <input
              id="lp-nome"
              type="text"
              autoComplete="name"
              placeholder=" "
              className={cn(inputFloatClass, errors.nome && 'border-red-400')}
              {...register('nome')}
            />
            <label htmlFor="lp-nome" className={floatLabelClass}>
              Nome
            </label>
          </div>
          <p className={microcopyClass}>{form.fieldMicrocopy.nome}</p>
          {errors.nome && (
            <p className={errorClass}>
              <WarningCircle size={14} weight="fill" aria-hidden="true" />
              {errors.nome.message}
            </p>
          )}
        </motion.div>

        {/* Telefono — floating label */}
        <motion.div variants={fieldVariants}>
          <div className="relative">
            <input
              id="lp-telefono"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder=" "
              className={cn(inputFloatClass, errors.telefono && 'border-red-400')}
              {...register('telefono')}
            />
            <label htmlFor="lp-telefono" className={floatLabelClass}>
              Telefono
            </label>
          </div>
          <p className={microcopyClass}>{form.fieldMicrocopy.telefono}</p>
          {errors.telefono && (
            <p className={errorClass}>
              <WarningCircle size={14} weight="fill" aria-hidden="true" />
              {errors.telefono.message}
            </p>
          )}
        </motion.div>

        {/* Email — floating label */}
        <motion.div variants={fieldVariants}>
          <div className="relative">
            <input
              id="lp-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder=" "
              className={cn(inputFloatClass, errors.email && 'border-red-400')}
              {...register('email')}
            />
            <label htmlFor="lp-email" className={floatLabelClass}>
              Email
            </label>
          </div>
          <p className={microcopyClass}>{form.fieldMicrocopy.email}</p>
          {errors.email && (
            <p className={errorClass}>
              <WarningCircle size={14} weight="fill" aria-hidden="true" />
              {errors.email.message}
            </p>
          )}
        </motion.div>

        {/* Qualifier — floating label via watched value */}
        <motion.div variants={fieldVariants}>
          <div className="relative">
            <select
              id="lp-qualifier"
              className={cn(selectFloatClass, errors.qualifier && 'border-red-400')}
              {...register('qualifier')}
              defaultValue=""
            >
              <option value="" disabled />
              {form.qualifierOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <label
              htmlFor="lp-qualifier"
              className={cn(
                'absolute left-5 pointer-events-none transition-all duration-150 origin-top-left font-body',
                isQualifierFilled
                  ? 'top-2 text-[10px] text-[var(--accent-d)]'
                  : 'top-5 text-base text-[var(--tx-3)]'
              )}
            >
              {form.qualifierLabel}
            </label>
          </div>
          <p className={microcopyClass}>{form.fieldMicrocopy.qualifier}</p>
          {errors.qualifier && (
            <p className={errorClass}>
              <WarningCircle size={14} weight="fill" aria-hidden="true" />
              {errors.qualifier.message}
            </p>
          )}
        </motion.div>

        {/* GDPR */}
        <motion.div variants={fieldVariants}>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className={cn(
                'mt-0.5 h-4 w-4 flex-shrink-0 rounded border border-[var(--br-solid)] text-[var(--accent)]',
                'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2'
              )}
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
            <p className={errorClass}>
              <WarningCircle size={14} weight="fill" aria-hidden="true" />
              {errors.gdpr.message}
            </p>
          )}
        </motion.div>

        {/* Urgency microcopy */}
        <motion.p
          variants={fieldVariants}
          className="font-body text-xs text-[var(--tx-2)] bg-[var(--bg-2)] rounded-lg px-3 py-2 border border-[var(--br)]"
        >
          {form.urgencyMicrocopy}
        </motion.p>

        {/* Submit */}
        <motion.div variants={fieldVariants}>
          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className={cn(
              'w-full py-4 rounded-lg font-body font-medium text-base',
              'bg-[var(--accent-d)] text-white',
              'hover:bg-[var(--tx-1)] transition-colors duration-300',
              'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2',
              'disabled:opacity-70 disabled:cursor-not-allowed',
              'flex items-center justify-center gap-2'
            )}
          >
            {isSubmitting ? (
              <>
                <CircleNotch size={20} weight="bold" className="animate-spin" aria-hidden="true" />
                Stiamo inviando...
              </>
            ) : (
              'Richiedi Sopralluogo Gratuito'
            )}
          </button>

          <p className="font-body text-xs text-center text-[var(--tx-3)] mt-2">
            {form.submitMicrocopy}
          </p>
        </motion.div>
      </motion.form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 border-t border-[var(--br)]" />
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--tx-3)]">
          oppure
        </span>
        <div className="flex-1 border-t border-[var(--br)]" />
      </div>

      {/* Phone CTA */}
      <a
        href={`tel:${ctaPhoneRaw}`}
        aria-label="Chiama Fulgur Service"
        className={cn(
          'w-full h-12 rounded-full font-body font-medium text-sm',
          'border border-[var(--br-solid)] text-[var(--accent-d)]',
          'hover:bg-[var(--bg-2)] transition-colors',
          'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2',
          'flex items-center justify-center gap-2'
        )}
      >
        <Phone size={16} weight="bold" aria-hidden="true" />
        {ctaPhone}
      </a>

      <p className="font-body text-[11px] text-center text-[var(--tx-3)] mt-3">
        {form.postFormReassurance}
      </p>
    </div>
  )
}
