import type { Metadata } from 'next'
import { METADATA } from '@/lib/seo'

export const metadata: Metadata = {
  title: METADATA.fulgurAI.title,
  description: METADATA.fulgurAI.description,
  openGraph: METADATA.fulgurAI.openGraph,
  alternates: {
    canonical: 'https://www.fulgurservice.it/fulgur-ai',
  },
}

export default function FulgurAILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
