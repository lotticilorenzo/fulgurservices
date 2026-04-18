import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICES } from '@/lib/services-data'
import { makeServiceJsonLd, makeBreadcrumbsJsonLd } from '@/lib/seo'
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
      images: [{ 
        url: service.image ? `${BASE_URL}${service.image}` : OG_DEFAULT, 
        width: 1200, 
        height: 630, 
        alt: service.imageAlt || `${service.title} a Parma | Fulgur Service` 
      }],
      locale: 'it_IT',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image ? `${BASE_URL}${service.image}` : OG_DEFAULT],
    },
    alternates: { canonical: `${BASE_URL}/servizi/${service.slug}` },
  }
}

export default async function ServiceSlugPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const service = SERVICES.find((s) => s.slug === params.slug)

  if (!service) notFound()

  const jsonLd = makeServiceJsonLd(service)
  const breadcrumbsJsonLd = makeBreadcrumbsJsonLd([
    { name: 'Home', item: '/' },
    { name: 'Servizi', item: '/servizi' },
    { name: service.title, item: `/servizi/${service.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <ServiceContent service={service} />
    </>
  )
}

