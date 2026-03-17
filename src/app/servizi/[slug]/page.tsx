import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICES } from '@/lib/services-data'
import { makeServiceJsonLd } from '@/lib/seo'
import { ServiceContent } from './ServiceContent'

const BASE_URL = 'https://www.fulgurservice.it'
const OG_DEFAULT = `${BASE_URL}/og/default.jpg`

// STATIC GENERATION
export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${BASE_URL}/servizi/${service.slug}`,
      siteName: 'Fulgur Service',
      images: [{ url: OG_DEFAULT, width: 1200, height: 630, alt: `${service.title} — Fulgur Service Parma` }],
      locale: 'it_IT',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [OG_DEFAULT],
    },
  }
}

export default async function ServiceSlugPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const service = SERVICES.find((s) => s.slug === params.slug)

  if (!service) notFound()

  const jsonLd = makeServiceJsonLd(service)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceContent service={service} />
    </>
  )
}
