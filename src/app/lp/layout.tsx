import type { Metadata } from 'next'
import React from 'react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { LPNavbar } from '@/components/lp/LPNavbar'
import { LPScrollProgress } from '@/components/lp/LPScrollProgress'
import { CustomCursor } from '@/components/ui/CustomCursor'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function LPLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/*
        data-lp-mode: nasconde la Navbar del sito (header:not([data-lp-header]))
        e gli elementi di distrazione (FloatingActions, ChatWidget).
        Footer, NoiseOverlay e CookieBanner restano visibili dal root layout.
      */}
      <script
        dangerouslySetInnerHTML={{
          __html: `try{document.documentElement.setAttribute('data-lp-mode','true')}catch(e){}`,
        }}
      />
      <CustomCursor />
      <LPScrollProgress />
      <LPNavbar />
      <main>
        {children}
      </main>
      {/* WhatsApp sticky — mobile only, above any sticky bar */}
      <a
        href="https://wa.me/393383160091?text=Ciao%2C%20ho%20visto%20le%20vostre%20landing%20page"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp"
        className="fixed bottom-6 right-4 z-50 md:hidden w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <WhatsappLogo weight="fill" size={28} className="text-white" aria-hidden="true" />
      </a>
    </>
  )
}
