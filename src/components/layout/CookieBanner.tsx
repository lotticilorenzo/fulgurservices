'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Cookie, X, Check } from '@phosphor-icons/react'
import Script from 'next/script'

const PIXEL_ID = '6489438914488358'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [consent, setConsent] = useState<boolean | null>(() => {
    if (typeof window === 'undefined') return null
    const savedConsent = window.localStorage.getItem('fulgur_cookie_consent')
    return savedConsent === null ? null : savedConsent === 'true'
  })

  useEffect(() => {
    if (consent !== null) return

    // Aspettiamo un po' prima di mostrare il banner per non disturbare l'LCP
    const timer = setTimeout(() => setShowBanner(true), 2000)
    return () => clearTimeout(timer)
  }, [consent])

  const handleAccept = () => {
    localStorage.setItem('fulgur_cookie_consent', 'true')
    setConsent(true)
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem('fulgur_cookie_consent', 'false')
    setConsent(false)
    setShowBanner(false)
  }

  return (
    <>
      {/* ── META PIXEL ENFORCEMENT ── */}
      {consent === true && (
        <>
          <Script
            id="fb-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* ── BANNER UI ── */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[1000] p-4 sm:p-6 pointer-events-none"
          >
            <div className="mx-auto max-w-lg bg-white border border-[var(--br)] rounded-3xl shadow-[0_20px_50px_rgba(13,31,26,0.2)] p-5 sm:p-6 pointer-events-auto flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex-shrink-0 rounded-2xl bg-[var(--accent-glow)] text-[var(--accent)] flex items-center justify-center">
                  <Cookie size={24} weight="duotone" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-[var(--tx-1)]">Gestione Privacy</h3>
                  <p className="font-sans text-sm text-[var(--tx-2)] leading-relaxed mt-1">
                    Utilizziamo i cookie per migliorare la tua esperienza e analizzare il traffico. Cliccando &quot;Accetta&quot;, acconsenti all&apos;uso dei cookie di tracciamento (Meta Pixel). 
                    Leggi la <Link href="/cookie-policy" className="text-[var(--accent)] underline underline-offset-2">Cookie Policy</Link>.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[var(--tx-1)] py-3 px-4 font-display text-[13px] font-bold text-white hover:bg-[var(--accent)] transition-colors"
                >
                  <Check size={16} weight="bold" />
                  Accetta Tutti
                </button>
                <button
                  onClick={handleDecline}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-[var(--br)] bg-[var(--bg-2)] py-3 px-4 font-display text-[13px] font-bold text-[var(--tx-2)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                >
                  Solo Necessari
                </button>
                <button
                  onClick={() => setShowBanner(false)}
                  className="h-11 w-11 flex items-center justify-center rounded-xl bg-[var(--bg-2)] border border-[var(--br)] text-[var(--tx-3)] hover:text-[var(--tx-1)] transition-colors"
                  aria-label="Chiudi"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
