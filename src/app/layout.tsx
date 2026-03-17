import type { Metadata } from 'next'
import { Syne, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import { STRUCTURED_DATA } from '@/lib/seo'
import NoiseOverlay from '@/components/layout/NoiseOverlay'
import Navbar from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { FloatingAI } from '@/components/ui/FloatingAI'
import { PageTransitionLoader } from '@/components/layout/PageTransitionLoader'
import { CrystalCursor } from '@/components/ui/CrystalCursor'
import SplashScreen from '@/components/layout/SplashScreen'
import { CookieBanner } from '@/components/layout/CookieBanner'
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
    default: 'Fulgur Service — Pulizie Professionali Parma',
    template: '%s | Fulgur Service',
  },
  description:
    'Cerchi un’impresa di pulizie a Parma? Fulgur Service offre pulizie professionali per uffici, industrie, condomini e studi medici. Sopralluogo gratuito in 24h.',
  keywords: ['impresa pulizie Parma', 'ditta pulizie Parma', 'pulizie uffici Parma', 'pulizie industriali Parma', 'sanificazione ambienti Parma', 'pulizie condomini Parma', 'pulizie Parma e provincia'],
  authors: [{ name: 'Fulgur Service SRL' }],
  creator: 'Fulgur Service SRL',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Fulgur Service',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
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
      <head />
      <body 
        className={`${syne.variable} ${dmSans.variable} ${dmMono.variable} font-sans text-[var(--tx-1)] antialiased bg-[var(--bg)] min-h-[100dvh]`}
        suppressHydrationWarning
      >
        <NoiseOverlay />
        <SplashScreen />
        <React.Suspense>
          <PageTransitionLoader />
        </React.Suspense>
        <Navbar />
        <CrystalCursor />
        {children}
        <Footer />
        <WhatsAppButton />
        <FloatingAI />
        <CookieBanner />
      </body>
    </html>
  )
}
