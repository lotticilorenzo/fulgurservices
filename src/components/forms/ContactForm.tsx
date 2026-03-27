'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Warning, PaperPlaneRight, CheckCircle, Check } from '@phosphor-icons/react'

const ContactSchema = z.object({
  nome:      z.string().min(2, 'Inserisci nome e cognome.'),
  email:     z.string().email('Indirizzo email non valido.'),
  tel:       z.string().min(5, 'Numero di telefono non valido.'),
  messaggio: z.string().min(10, 'Il messaggio è troppo corto (minimo 10 caratteri).'),
  website:   z.string().optional(), // Honeypot
  privacy:   z.boolean().refine(val => val === true, {
    message: 'Devi accettare la Privacy Policy per continuare',
  }),
})

type ContactFormData = z.infer<typeof ContactSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
    mode: 'onTouched',
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    try {
      const res = await fetch('/api/contatti', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json() as { success: boolean; error?: string }
      if (result.success) {
        setIsSuccess(true)
      } else {
        setSubmitError(result.error ?? "Si è verificato un errore. Riprova più tardi.")
      }
    } catch (e) {
      console.error(e)
      setSubmitError('Errore di rete. Controlla la connessione e riprova.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="w-full bg-white border border-[var(--br)] rounded-[2rem] sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[400px] shadow-sm">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-glow)] border border-[var(--accent)]/20">
          <CheckCircle size={36} weight="fill" className="text-[var(--accent)]" />
        </div>
        <h3 className="font-display text-2xl font-bold text-[var(--tx-1)]">Messaggio Inviato!</h3>
        <p className="font-sans text-base font-light text-[var(--tx-2)] mt-3 max-w-xs">
          Ti risponderemo entro 48 ore. Hai urgenza?{' '}
          <a href="tel:+393383160091" className="text-[var(--accent)] font-medium hover:underline">
            Chiamaci direttamente.
          </a>
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-white border border-[var(--br)] rounded-[2rem] sm:rounded-3xl p-5 sm:p-8 flex flex-col gap-5 shadow-xl shadow-[rgba(42,140,122,0.08)]"
      noValidate
    >
      <div className="mb-2">
        <h3 className="font-display text-[22px] sm:text-2xl font-bold text-[var(--tx-1)] text-balance leading-tight">Prendiamoci cura del tuo ambiente</h3>
        <p className="font-sans text-sm font-light text-[var(--tx-3)] mt-2 text-balance lg:text-left">
          Richiedi un sopralluogo gratuito o un preventivo personalizzato.
        </p>
      </div>

      {/* Honeypot — nascosto agli utenti */}
      <div className="hidden" aria-hidden="true">
        <input type="text" {...register('website')} tabIndex={-1} autoComplete="off" />
      </div>

      {/* Nome */}
      <div className="flex flex-col gap-2">
        <label htmlFor="cf-nome" className="font-sans text-sm font-medium text-[var(--tx-1)]">
          Nome e Cognome *
        </label>
        <input
          id="cf-nome"
          type="text"
          autoComplete="name"
          aria-describedby={errors.nome ? 'cf-nome-err' : undefined}
          aria-invalid={!!errors.nome}
          {...register('nome')}
          className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-4 py-3 font-sans text-base text-[var(--tx-1)] appearance-none focus:ring-2 focus:ring-[var(--accent)] outline-none transition-all focus:bg-white focus:shadow-[0_0_15px_var(--accent-glow)] aria-[invalid=true]:border-red-300"
        />
        {errors.nome && (
          <span id="cf-nome-err" role="alert" className="flex items-center gap-1 text-xs text-red-500 font-medium">
            <Warning size={14} aria-hidden="true" />{errors.nome.message}
          </span>
        )}
      </div>

      {/* Email + Tel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-email" className="font-sans text-sm font-medium text-[var(--tx-1)]">Email *</label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            aria-describedby={errors.email ? 'cf-email-err' : undefined}
            aria-invalid={!!errors.email}
            {...register('email')}
            className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-4 py-3 font-sans text-base text-[var(--tx-1)] appearance-none focus:ring-2 focus:ring-[var(--accent)] outline-none transition-all focus:bg-white focus:shadow-[0_0_15px_var(--accent-glow)] aria-[invalid=true]:border-red-300"
          />
          {errors.email && (
            <span id="cf-email-err" role="alert" className="flex items-center gap-1 text-xs text-red-500 font-medium">
              <Warning size={14} aria-hidden="true" />{errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-tel" className="font-sans text-sm font-medium text-[var(--tx-1)]">Telefono *</label>
          <input
            id="cf-tel"
            type="tel"
            autoComplete="tel"
            aria-describedby={errors.tel ? 'cf-tel-err' : undefined}
            aria-invalid={!!errors.tel}
            {...register('tel')}
            className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-4 py-3 font-sans text-base text-[var(--tx-1)] appearance-none focus:ring-2 focus:ring-[var(--accent)] outline-none transition-all focus:bg-white aria-[invalid=true]:border-red-300"
          />
          {errors.tel && (
            <span id="cf-tel-err" role="alert" className="flex items-center gap-1 text-xs text-red-500 font-medium">
              <Warning size={14} aria-hidden="true" />{errors.tel.message}
            </span>
          )}
        </div>
      </div>

      {/* Messaggio */}
      <div className="flex flex-col gap-2">
        <label htmlFor="cf-messaggio" className="font-sans text-sm font-medium text-[var(--tx-1)]">Messaggio *</label>
        <textarea
          id="cf-messaggio"
          rows={4}
          aria-describedby={errors.messaggio ? 'cf-msg-err' : undefined}
          aria-invalid={!!errors.messaggio}
          {...register('messaggio')}
          className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-4 py-3 font-sans text-base text-[var(--tx-1)] appearance-none focus:ring-2 focus:ring-[var(--accent)] outline-none resize-none transition-all focus:bg-white focus:shadow-[0_0_15px_var(--accent-glow)] aria-[invalid=true]:border-red-300"
        />
        {errors.messaggio && (
          <span id="cf-msg-err" role="alert" className="flex items-center gap-1 text-xs text-red-500 font-medium">
            <Warning size={14} aria-hidden="true" />{errors.messaggio.message}
          </span>
        )}
      </div>

      {/* Privacy Consent Checkbox */}
      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-start pt-1">
            <input
              type="checkbox"
              required
              {...register('privacy', { required: 'Devi accettare la Privacy Policy per continuare' })}
              className="peer sr-only"
            />
            <div className="w-5 h-5 rounded-[4px] border border-[var(--br)] bg-[var(--bg-2)] peer-checked:bg-[var(--accent)] peer-checked:border-[var(--accent)] transition-colors flex items-center justify-center">
              <Check weight="bold" className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" size={14} />
            </div>
          </div>
          <span className="font-sans text-[13px] text-[var(--tx-2)] leading-tight">
            Dichiaro di aver letto la <a href="/privacy" target="_blank" className="text-[var(--accent)] underline underline-offset-2">Privacy Policy</a> e acconsento al trattamento dei miei dati personali per la gestione della richiesta. *
          </span>
        </label>
        {errors.privacy && (
          <span className="flex items-center gap-1 text-xs text-red-500 font-medium">
            <Warning size={14} aria-hidden="true" />{errors.privacy.message as string}
          </span>
        )}
      </div>

      {/* Error Message */}
      {submitError && (
        <div role="alert" className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium animate-in fade-in slide-in-from-top-2">
          <Warning size={18} weight="fill" className="shrink-0 mt-0.5" />
          <span>{submitError}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[var(--tx-1)] text-[var(--bg)] font-display font-bold text-sm hover:bg-[var(--accent)] transition-all duration-300 hover:shadow-[0_8px_30px_var(--accent-glow-h)] hover:-translate-y-0.5 hover:scale-[1.01] disabled:transform-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
      >
        {isSubmitting
          ? <span className="flex items-center gap-2">Invio in corso... <Check size={16} className="animate-pulse" /></span>
          : <><span>Invia Messaggio</span><PaperPlaneRight weight="fill" aria-hidden="true" /></>
        }
      </button>

      <p className="text-center font-sans text-xs text-[var(--tx-3)]">
        Inviando acconsenti alla{' '}
        <a href="/privacy" className="underline underline-offset-2 hover:text-[var(--accent)] transition-colors">
          Privacy Policy
        </a>
        {' '}per la gestione della richiesta.
      </p>
    </form>
  )
}
