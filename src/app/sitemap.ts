import { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/services-data'
import { TOWNS } from '@/lib/towns-data'
import { BLOG_POSTS } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.fulgurservice.it'

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl,                         lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/servizi`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/chi-siamo`,          lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.8 },
    { url: `${baseUrl}/preventivo`,         lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.8 },
    { url: `${baseUrl}/contatti`,           lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.8 },
    { url: `${baseUrl}/gallery`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`,               lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${baseUrl}/macchinari`,         lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${baseUrl}/fulgur-ai`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy`,            lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`,      lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/servizi/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const townRoutes: MetadataRoute.Sitemap = TOWNS.map((town) => ({
    url: `${baseUrl}/zone/${town.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...townRoutes, ...blogRoutes]
}
