import React from 'react'
import type { Metadata } from 'next'
import { METADATA } from '@/lib/seo'
import { MacchinariClient } from '@/components/macchinari/MacchinariClient'

// FIX SEO-02: sostituiti metadata hardcoded con METADATA.macchinari da seo.ts
export const metadata: Metadata = {
  title: METADATA.macchinari.title,
  description: METADATA.macchinari.description,
  openGraph: METADATA.macchinari.openGraph,
  alternates: { canonical: 'https://www.fulgurservice.it/macchinari' },
}

export default function MacchinariPage() {
  return <MacchinariClient />
}
