export function LPFooter() {
  return (
    <footer data-lp-footer="true" className="bg-[var(--bg-2)] border-t border-[var(--br)] py-10">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-[var(--tx-1)] text-base mb-2">
              Fulgur Service SRL
            </p>
            <p className="font-body text-xs text-[var(--tx-3)] leading-relaxed">
              Impresa di pulizie professionali.
              <br />
              Parma e provincia.
              <br />
              P.IVA 03063010346
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--tx-3)] mb-3">
              Informazioni
            </p>
            <ul className="space-y-1.5">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Cookie Policy', href: '/cookie' },
                { label: 'Sito ufficiale', href: 'https://www.fulgurservice.it' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs text-[var(--tx-2)] hover:text-[var(--accent-d)] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--tx-3)] mb-3">
              Contatti
            </p>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="tel:+393383160091"
                  className="font-body text-xs text-[var(--tx-2)] hover:text-[var(--accent-d)] transition-colors"
                >
                  338 316 0091
                </a>
              </li>
              <li>
                <a
                  href="mailto:fulgurservice@gmail.com"
                  className="font-body text-xs text-[var(--tx-2)] hover:text-[var(--accent-d)] transition-colors"
                >
                  fulgurservice@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/fulgurservicesrl_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-[var(--tx-2)] hover:text-[var(--accent-d)] transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--br)]">
          <p className="font-body text-[10px] text-center text-[var(--tx-3)]">
            &copy; 2026 Fulgur Service SRL &middot; Via Alfredo Veroni 22, 43122 Parma &middot; Tutti i
            diritti riservati
          </p>
        </div>
      </div>
    </footer>
  )
}
