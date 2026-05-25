import type { Metadata } from 'next'
import React from 'react'
import { LPNavbar } from '@/components/lp/LPNavbar'
import { LPScrollProgress } from '@/components/lp/LPScrollProgress'

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
      <LPScrollProgress />
      <LPNavbar />
      <main>
        {children}
      </main>
    </>
  )
}
