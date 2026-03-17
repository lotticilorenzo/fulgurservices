import type { Metadata } from 'next'
import { Syne, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import { STRUCTURED_DATA } from '@/lib/seo'
import NoiseOverlay from '@/components/layout/NoiseOverlay'
import Navbar from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

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
    'Impresa di pulizie professionali a Parma e provincia. Pulizie aziendali, industriali, sanitarie, condomini. Sopralluogo gratuito, preventivo in 24h.',
  keywords: ['impresa pulizie Parma', 'pulizie professionali Parma', 'sanificazione Parma'],
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
      <body className={`${syne.variable} ${dmSans.variable} ${dmMono.variable} font-sans text-[var(--tx-1)] antialiased bg-[var(--bg)] min-h-[100dvh]`}>
        <NoiseOverlay />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
