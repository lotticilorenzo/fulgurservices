import type { Metadata } from 'next'
import { METADATA } from '@/lib/seo'
import { GalleryClient } from '@/components/gallery/GalleryClient'

// SEO-04: page.tsx è ora un Server Component — può esportare metadata correttamente
export const metadata: Metadata = {
  title: METADATA.gallery.title,
  description: METADATA.gallery.description,
  openGraph: METADATA.gallery.openGraph,
  alternates: { canonical: 'https://www.fulgurservice.it/gallery' },
}

export default function GalleryPage() {
  return <GalleryClient />
}
