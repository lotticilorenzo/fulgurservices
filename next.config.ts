import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // VIOL-06: breakpoint ottimizzati per mobile-first — evita immagini sovradimensionate
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes:  [16, 32, 64, 96, 128, 256, 384, 512],
    minimumCacheTTL: 86400, // 24 ore — evita immagini stantie dopo deploy
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/pages/chi-siamo', destination: '/chi-siamo', permanent: true },
      { source: '/pages/contatti', destination: '/contatti', permanent: true },
      { source: '/pages/preventivo', destination: '/preventivo', permanent: true },
      { source: '/pages/i-nostri-servizi', destination: '/servizi', permanent: true },
      { source: '/pages/servizi', destination: '/servizi', permanent: true },
      { source: '/pages/impresa-360', destination: '/chi-siamo', permanent: true },
      { source: '/pages/trattamento-superfici', destination: '/servizi/trattamento-superfici', permanent: true },
      { source: '/pages/pulizie-industriali', destination: '/servizi/pulizie-industriali', permanent: true },
      { source: '/pages/pulizie-aziendali', destination: '/servizi/pulizie-aziendali', permanent: true },
      { source: '/pages/pulizie-civili', destination: '/servizi/pulizie-civili', permanent: true },
      { source: '/pages/pulizie-condomini', destination: '/servizi/pulizie-condomini', permanent: true },
      { source: '/pages/settore-sanitario', destination: '/servizi/settore-sanitario', permanent: true },
      { source: '/collections/all', destination: '/servizi', permanent: true },
      { source: '/collections/frontpage', destination: '/', permanent: true },
      // Servizi Shopify non ancora mappati → rotte /servizi/[slug]
      { source: '/pages/pannelli-fotovoltaici', destination: '/servizi/pannelli-fotovoltaici', permanent: true },
      { source: '/pages/sanificazione-vapore', destination: '/servizi/sanificazione-vapore', permanent: true },
      { source: '/pages/vetrate-altezza', destination: '/servizi/vetrate-altezza', permanent: true },
      { source: '/pages/settore-alberghiero', destination: '/servizi/settore-alberghiero', permanent: true },
      { source: '/pages/pulizie-fine-cantiere', destination: '/servizi/pulizie-fine-cantiere', permanent: true },
      { source: '/pages/cantiere-navale', destination: '/servizi/cantiere-navale', permanent: true },
      { source: '/pages/pulizie-condominio', destination: '/servizi/pulizie-condomini', permanent: true },
      // Pagine Shopify → nuove rotte
      { source: '/pages/aree-di-intervento', destination: '/zone', permanent: true },
      { source: '/pages/zone-di-copertura', destination: '/zone', permanent: true },
      { source: '/pages/gallery', destination: '/gallery', permanent: true },
      { source: '/pages/macchinari', destination: '/macchinari', permanent: true },
      { source: '/pages/macchinari-e-prodotti', destination: '/macchinari', permanent: true },
      { source: '/pages/lavora-con-noi', destination: '/lavora-con-noi', permanent: true },
      { source: '/pages/blog', destination: '/blog', permanent: true },
      // Catch-all /pages/* (dopo i redirect specifici)
      { source: '/pages/:path*', destination: '/:path*', permanent: true },
      { source: '/products/:path*', destination: '/servizi/:path*', permanent: true },
      // URL dirette senza /pages/ che Shopify potrebbe aver indicizzato
      { source: '/aree-di-intervento', destination: '/zone', permanent: true },
      { source: '/zone-di-copertura', destination: '/zone', permanent: true },
      // Redirect puntuali per tutti i servizi (da radice a /servizi/)
      { source: '/pulizie-aziendali', destination: '/servizi/pulizie-aziendali', permanent: true },
      { source: '/pulizie-industriali', destination: '/servizi/pulizie-industriali', permanent: true },
      { source: '/settore-sanitario', destination: '/servizi/settore-sanitario', permanent: true },
      { source: '/pulizie-condomini', destination: '/servizi/pulizie-condomini', permanent: true },
      { source: '/settore-alberghiero', destination: '/servizi/settore-alberghiero', permanent: true },
      { source: '/trattamento-superfici', destination: '/servizi/trattamento-superfici', permanent: true },
      { source: '/pulizie-fine-cantiere', destination: '/servizi/pulizie-fine-cantiere', permanent: true },
      { source: '/vetrate-altezza', destination: '/servizi/vetrate-altezza', permanent: true },
      { source: '/pannelli-fotovoltaici', destination: '/servizi/pannelli-fotovoltaici', permanent: true },
      { source: '/cantiere-navale', destination: '/servizi/cantiere-navale', permanent: true },
      { source: '/sanificazione-vapore', destination: '/servizi/sanificazione-vapore', permanent: true },
      { source: '/pulizie-civili', destination: '/servizi/pulizie-civili', permanent: true },
      { source: '/strutture-sportive', destination: '/servizi/strutture-sportive', permanent: true },
      { source: '/locali-notturni', destination: '/servizi/locali-notturni', permanent: true },
      { source: '/pulizia-facciate', destination: '/servizi/pulizia-facciate', permanent: true },
      // Redirect Shopify Blog Patterns
      { source: '/blogs/:blog/:post', destination: '/blog/:post', permanent: true },
      { source: '/blogs/:path*', destination: '/blog', permanent: true },
      // Collections Shopify residue
      { source: '/collections/:path*', destination: '/servizi', permanent: true },
    ];

  },
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; frame-src 'self' https://www.google.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com https://connect.facebook.net https://elfsightcdn.com https://static.elfsight.com https://universe-static.elfsightcdn.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://static.elfsight.com; img-src 'self' blob: data: https://www.google.com https://www.facebook.com https://static.elfsight.com https://elfsightcdn.com https://phosphor.utils.elfsightcdn.com; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self' https://www.google-analytics.com https://stats.g.doubleclick.net https://graph.facebook.com https://elfsightcdn.com https://static.elfsight.com https://core.service.elfsight.com https://universe-static.elfsightcdn.com https://service-reviews-ultimate.elfsight.com;",
          },
        ],
      },
    ]
  },
};

export default nextConfig;
