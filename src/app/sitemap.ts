import { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/services-data'
import { BLOG_POSTS } from '@/lib/blog-data'
import { TOWNS } from '@/lib/towns-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.fulgurservice.it'

  // Rotte statiche
  const staticRoutes = [
    '',
    '/servizi',
    '/blog',
    '/fulgur-ai',
    '/chi-siamo',
    '/macchinari',
    '/gallery',
    '/preventivo',
    '/contatti',
    '/privacy',
    '/cookie-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '/blog' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Rotte dinamiche servizi
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/servizi/${service.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Rotte dinamiche blog
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Rotte dinamiche città
  const townRoutes = TOWNS.map((town) => ({
    url: `${baseUrl}/zone/${town.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...townRoutes] as MetadataRoute.Sitemap
}
