'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, CircleNotch } from '@phosphor-icons/react'

export function LPHeroForm({ variant }: { variant: 'uffici' | 'alimentare' }) {
  const router = useRouter()
  const [nome, setNome] = useState('')
  const [telefono, setTelefono] = useState('')
  const [website, setWebsite] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!nome.trim() || !telefono.trim()) {
      setError('Inserisci nome e telefono per continuare')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/lp-preventivo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          variant,
          nome,
          telefono,
          qualifier: 'Da hero form',
          gdpr: true,
          website,
          utm: Object.fromEntries(new URLSearchParams(window.location.search)),
        }),
      })
      const data = (await res.json()) as { ok: boolean }
      if (data.ok) {
        router.push(
          `/lp/${variant}/grazie?nome=${encodeURIComponent(nome.split(' ')[0])}`
        )
      } else {
        setError('Qualcosa non ha funzionato. Riprova o chiamaci.')
      }
    } catch {
      setError('Errore di connessione. Riprova.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl p-8 border border-[var(--br)] shadow-[0_20px_60px_-20px_rgba(42,140,122,0.15)]">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-d)] mb-6">
        SOPRALLUOGO GRATUITO
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot */}
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          aria-hidden="true"
          autoComplete="off"
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
        />

        <div className="relative">
          <input
            type="text"
            id="hero-nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder=" "
            autoComplete="name"
            className="peer h-14 w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-lg px-5 pt-5 pb-2 outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-glow)] transition-all text-base"
          />
          <label
            htmlFor="hero-nome"
            className="absolute left-5 top-4 text-[var(--tx-3)] text-base transition-all duration-200 pointer-events-none peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[var(--accent-d)] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[var(--accent-d)]"
          >
            Nome
          </label>
        </div>

        <div className="relative">
          <input
            type="tel"
            id="hero-telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder=" "
            inputMode="numeric"
            autoComplete="tel"
            className="peer h-14 w-full bg-[var(--bg-2)] border border-[var(--br)] rounded-lg px-5 pt-5 pb-2 outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-glow)] transition-all text-base"
          />
          <label
            htmlFor="hero-telefono"
            className="absolute left-5 top-4 text-[var(--tx-3)] text-base transition-all duration-200 pointer-events-none peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[var(--accent-d)] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[var(--accent-d)]"
          >
            Telefono
          </label>
        </div>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          className="w-full h-14 bg-[var(--accent-d)] hover:bg-[var(--tx-1)] text-white font-body font-medium rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 disabled:opacity-70"
        >
          {loading ? (
            <>
              <CircleNotch size={20} className="animate-spin" aria-hidden="true" />
              Stiamo inviando…
            </>
          ) : (
            <>
              Richiedi sopralluogo gratuito
              <ArrowRight weight="bold" size={16} aria-hidden="true" />
            </>
          )}
        </button>

        <p className="text-center text-xs text-[var(--tx-3)]">
          Sopralluogo gratuito · Nessun impegno · Risposta in 24h
        </p>
        <p className="text-center text-[10px] text-[var(--tx-3)]">
          Inviando accetti la{' '}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[var(--tx-1)]"
          >
            Privacy Policy
          </a>
        </p>
      </form>

      <div className="mt-6 pt-6 border-t border-[var(--br)] text-center">
        <p className="text-xs text-[var(--tx-3)] mb-2">Preferisci chiamare?</p>
        <a
          href="tel:+393383160091"
          className="font-display text-xl font-bold text-[var(--tx-1)] hover:text-[var(--accent-d)] transition-colors"
        >
          338 316 0091
        </a>
      </div>
    </div>
  )
}
