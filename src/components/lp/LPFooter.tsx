export function LPFooter() {
  return (
    <footer data-lp-footer="true" className="bg-[var(--tx-1)] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Main grid */}
        <div className="grid md:grid-cols-12 gap-12">
          {/* Column A — brand (5/12) */}
          <div className="md:col-span-5">
            <div className="font-display font-bold text-2xl text-white tracking-tight mb-6">
              Fulgur<span className="text-[var(--accent-l)]">.</span>
            </div>
            <h3 className="font-display text-3xl font-bold text-white leading-tight mb-4">
              Pulizie professionali a Parma da decenni.
            </h3>
            <p className="font-body text-sm text-white/60 max-w-md leading-relaxed">
              35 anni di esperienza nel settore, 21 recensioni verificate, polizza RC/RCO attiva.
              Operatori formati, prodotti certificati, sopralluogo sempre gratuito.
            </p>
          </div>

          {/* Column B — links (3/12) */}
          <div className="md:col-span-3">
            <p className="font-mono uppercase tracking-[0.25em] text-xs text-white/40 mb-6">
              ESPLORA IL SITO
            </p>
            <nav aria-label="Link del sito">
              <ul>
                {[
                  { href: '/servizi', label: 'Tutti i servizi' },
                  { href: '/macchinari', label: 'Macchinari professionali' },
                  { href: '/chi-siamo', label: 'Chi siamo' },
                  { href: '/gallery', label: 'Gallery interventi' },
                  { href: '/zone', label: 'Le 16 zone coperte' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block py-2 font-body text-base text-white/80 hover:text-[var(--accent-l)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column C — contacts (4/12) */}
          <div className="md:col-span-4">
            <p className="font-mono uppercase tracking-[0.25em] text-xs text-white/40 mb-6">
              CONTATTI
            </p>

            <div className="space-y-6">
              <div>
                <p className="font-mono text-white/40 text-[10px] uppercase tracking-wider mb-1">
                  TELEFONO
                </p>
                <a
                  href="tel:+393383160091"
                  aria-label="Chiama Fulgur Service al 338 316 0091"
                  className="font-display text-2xl text-white block hover:text-[var(--accent-l)] transition-colors"
                >
                  338 316 0091
                </a>
              </div>

              <div>
                <p className="font-mono text-white/40 text-[10px] uppercase tracking-wider mb-1">
                  EMAIL
                </p>
                <a
                  href="mailto:fulgurservice@gmail.com"
                  className="font-body text-white/80 hover:text-[var(--accent-l)] transition-colors"
                >
                  fulgurservice@gmail.com
                </a>
              </div>

              <div>
                <p className="font-mono text-white/40 text-[10px] uppercase tracking-wider mb-1">
                  DOVE SIAMO
                </p>
                <p className="font-body text-white/80">Via Alfredo Veroni 22, 43122 Parma</p>
              </div>

              <a
                href="https://wa.me/393383160091?text=Ciao%2C%20vorrei%20richiedere%20un%20sopralluogo%20gratuito"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body text-sm text-[var(--accent-l)] hover:translate-x-1 transition-transform"
              >
                Scrivici su WhatsApp →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
          <p className="font-mono text-xs text-white/40 uppercase tracking-wider">
            © 2026 Fulgur Service SRL — P.IVA 03063010346 — REA PR-353051
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="font-mono text-xs text-white/40 hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="font-mono text-xs text-white/20" aria-hidden="true">·</span>
            <a
              href="/cookie-policy"
              className="font-mono text-xs text-white/40 hover:text-white/80 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
