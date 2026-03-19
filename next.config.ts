import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
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
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com https://connect.facebook.net https://elfsightcdn.com https://static.elfsight.com https://universe-static.elfsightcdn.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://static.elfsight.com; img-src 'self' blob: data: https://www.google.com https://www.facebook.com https://static.elfsight.com https://elfsightcdn.com https://phosphor.utils.elfsightcdn.com; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self' https://www.google-analytics.com https://stats.g.doubleclick.net https://graph.facebook.com https://elfsightcdn.com https://static.elfsight.com https://core.service.elfsight.com https://universe-static.elfsightcdn.com https://service-reviews-ultimate.elfsight.com;",
          },
        ],
      },
    ]
  },
};

export default nextConfig;
