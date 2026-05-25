import { Phone } from '@phosphor-icons/react/dist/ssr'

export function LPNavbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-20 bg-[var(--bg)]/95 backdrop-blur-sm border-b border-[var(--br)]"
      aria-label="Navigazione landing page"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-full flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="font-display font-bold text-lg text-[var(--tx-1)] tracking-tight">
            Fulgur<span className="text-[var(--accent)]">.</span>
          </span>
          <span className="hidden md:inline font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--tx-3)]">
            Impresa di pulizie — Parma
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+393383160091"
            aria-label="Chiama Fulgur Service al 338 316 0091"
            className="hidden sm:flex items-center gap-1.5 font-mono text-sm text-[var(--tx-1)] hover:text-[var(--accent-d)] transition-colors"
          >
            <Phone size={13} weight="bold" aria-hidden="true" />
            338 316 0091
          </a>

          <div className="hidden sm:block w-px h-5 bg-[var(--br)]" aria-hidden="true" />

          <a
            href="#lp-form"
            className="font-body text-sm font-medium text-[var(--tx-1)] border-b border-[var(--accent)] pb-0.5 hover:text-[var(--accent-d)] transition-colors"
          >
            Richiedi sopralluogo →
          </a>
        </div>
      </div>
    </nav>
  )
}
