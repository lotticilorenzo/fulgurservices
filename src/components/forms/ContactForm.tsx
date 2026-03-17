'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Warning, PaperPlaneRight, CheckCircle } from '@phosphor-icons/react'

const ContactSchema = z.object({
  nome: z.string().min(2, 'Inserisci il nome.'),
  email: z.string().email('Indirizzo email non valido.'),
  tel: z.string().min(5, 'Numero non valido.'),
  messaggio: z.string().min(10, 'Il messaggio è troppo corto.'),
  website: z.string().optional(), // Honeypot
})

type ContactFormData = z.infer<typeof ContactSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contatti', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (result.success) {
        setIsSuccess(true)
      } else {
        alert(result.error)
      }
    } catch (e) {
      alert("Errore di rete.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="w-full bg-white border border-[var(--br)] rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[400px] shadow-sm">
        <CheckCircle size={64} className="text-[var(--accent)] mb-4" />
        <h3 className="font-display text-2xl font-bold text-[var(--tx-1)]">Messaggio Inviato</h3>
        <p className="font-sans text-[var(--tx-2)] mt-2">Ti risponderemo il prima possibile.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-white border border-[var(--br)] rounded-3xl p-8 flex flex-col gap-5 shadow-xl shadow-[rgba(42,140,122,0.08)]">
      <div className="mb-2">
        <h3 className="font-display text-2xl font-bold text-[var(--tx-1)]">Prendiamoci cura del tuo ambiente</h3>
        <p className="font-sans text-sm font-light text-[var(--tx-3)] mt-1">Richiedi un sopralluogo gratuito o un preventivo personalizzato.</p>
      </div>
      
      {/* Honeypot field - Hidden from users */}
      <div className="hidden" aria-hidden="true">
        <input type="text" {...register('website')} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-sm font-medium text-[var(--tx-1)]">Nome e Cognome *</label>
        <input 
          type="text" 
          {...register('nome')} 
          className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-4 py-3 font-sans text-sm text-[var(--tx-1)] focus:ring-2 focus:ring-[var(--accent)] outline-none transition-all focus:bg-white"
        />
        {errors.nome && <span className="text-red-500 text-xs font-medium flex items-center gap-1"><Warning size={14}/>{errors.nome.message}</span>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="font-sans text-sm font-medium text-[var(--tx-1)]">Email *</label>
          <input 
            type="email" 
            {...register('email')} 
            className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-4 py-3 font-sans text-sm text-[var(--tx-1)] focus:ring-2 focus:ring-[var(--accent)] outline-none transition-all focus:bg-white"
          />
          {errors.email && <span className="text-red-500 text-xs font-medium flex items-center gap-1"><Warning size={14}/>{errors.email.message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-sans text-sm font-medium text-[var(--tx-1)]">Telefono *</label>
          <input 
            type="tel" 
            {...register('tel')} 
            className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-4 py-3 font-sans text-sm text-[var(--tx-1)] focus:ring-2 focus:ring-[var(--accent)] outline-none transition-all focus:bg-white"
          />
          {errors.tel && <span className="text-red-500 text-xs font-medium flex items-center gap-1"><Warning size={14}/>{errors.tel.message}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-sm font-medium text-[var(--tx-1)]">Messaggio *</label>
        <textarea 
          rows={4}
          {...register('messaggio')} 
          className="w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-xl px-4 py-3 font-sans text-sm text-[var(--tx-1)] focus:ring-2 focus:ring-[var(--accent)] outline-none resize-none transition-all focus:bg-white"
        />
        {errors.messaggio && <span className="text-red-500 text-xs font-medium flex items-center gap-1"><Warning size={14}/>{errors.messaggio.message}</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[var(--tx-1)] text-[var(--bg)] font-display font-bold text-sm hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'Invio in corso...' : <>Invia Messaggio <PaperPlaneRight weight="fill" /></>}
      </button>

      <p className="text-center font-sans text-xs text-[var(--tx-3)] mt-2">
        Inviando questo form acconsenti alla Privacy Policy per la gestione della richiesta.
      </p>
    </form>
  )
}
