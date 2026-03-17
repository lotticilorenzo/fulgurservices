import React from 'react'
import type { Metadata } from 'next'
import { MacchinariClient } from '@/components/macchinari/MacchinariClient'

export const metadata: Metadata = {
  title: 'I Nostri Macchinari Partner | Fulgur Service Parma',
  description: 'Scopri i brand industriali professionali con cui operiamo: CFM, Lindhaus, Nilfisk, Klindex e molti altri. Strumentazione certificata per altissime prestazioni.',
}

export default function MacchinariPage() {
  return <MacchinariClient />
}
