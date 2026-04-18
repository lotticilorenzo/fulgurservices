import type { Metadata } from 'next'
import { Syne, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import { STRUCTURED_DATA } from '@/lib/seo'
import NoiseOverlay from '@/components/layout/NoiseOverlay'
import Navbar from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingActions } from '@/components/ui/FloatingActions'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { LenisProvider } from '@/components/layout/LenisProvider'
import { IntroLoader } from '@/components/ui/IntroLoader'
import { PageTransitionProvider } from '@/components/layout/PageTransitionProvider'
import { CookieBanner } from '@/components/layout/CookieBanner'
import ChatWidgetLoader from '@/components/ai/ChatWidgetLoader'
import React from 'react'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fulgurservice.it'),
  title: {
    default: 'Fulgur Service Pulizie Professionali Parma',
    template: '%s | Fulgur Service',
  },
  description:
    'Cerchi un’impresa di pulizie a Parma? Fulgur Service offre pulizie professionali per uffici, industrie, condomini e studi medici. Sopralluogo gratuito in 24h.',
  keywords: ['impresa pulizie Parma', 'ditta pulizie Parma', 'pulizie uffici Parma', 'pulizie industriali Parma', 'sanificazione ambienti Parma', 'pulizie condomini Parma', 'impresa pulizie Italia', 'pulizie professionali Italia'],
  authors: [{ name: 'Fulgur Service SRL' }],
  creator: 'Fulgur Service SRL',
  verification: {
    google: 'WxKNsSCEnsQKzdUY0BwaXG1ItSgJ33Ob25PWpn92vG8', 
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.webp', type: 'image/png' },
    ],
    apple: '/icon.webp',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Fulgur Service',
    images: [{ url: '/images/team-operatori-pulizie-professionali-parma.webp', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </head>
      <body 
        className={`${syne.variable} ${dmSans.variable} ${dmMono.variable} font-sans text-[var(--tx-1)] antialiased bg-[var(--bg)] min-h-[100dvh] flex flex-col`}
        suppressHydrationWarning
      >
        <PageTransitionProvider>
          <LenisProvider />
          <CustomCursor />
          <IntroLoader />
          <NoiseOverlay />
          <Navbar />
          {children}
          <Footer />
          <FloatingActions />
          <CookieBanner />
          <ChatWidgetLoader />
        </PageTransitionProvider>
      </body>
    </html>
  )
}
