import type { Metadata } from 'next'
import { METADATA } from '@/lib/seo'

export const metadata: Metadata = {
  title: METADATA.gallery.title,
  description: METADATA.gallery.description,
  openGraph: METADATA.gallery.openGraph,
  alternates: {
    canonical: 'https://www.fulgurservice.it/gallery',
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
