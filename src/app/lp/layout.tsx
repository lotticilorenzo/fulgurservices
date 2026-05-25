import type { Metadata } from 'next'
import React from 'react'
import { LPFooter } from '@/components/lp/LPFooter'

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
      {children}
      <LPFooter />
    </>
  )
}
