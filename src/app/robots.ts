import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'AdsBot-Google',
        allow: ['/lp/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/lp/'],
      },
    ],
    sitemap: 'https://www.fulgurservice.it/sitemap.xml',
  }
}
