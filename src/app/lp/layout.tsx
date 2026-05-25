import type { Metadata } from 'next'
import React from 'react'
import { LPNavbar } from '@/components/lp/LPNavbar'
import { LPFooter } from '@/components/lp/LPFooter'
import { LenisProvider } from '@/components/layout/LenisProvider'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function LPLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `try{document.documentElement.setAttribute('data-lp-mode','true')}catch(e){}`,
        }}
      />
      <LenisProvider />
      <LPNavbar />
      <main className="pt-20">
        {children}
      </main>
      <LPFooter />
    </>
  )
}
