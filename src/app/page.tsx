import type { Metadata } from 'next'
import { METADATA } from '@/lib/seo'
import { HeroSection } from '@/components/home/HeroSection'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { AboutSection } from '@/components/home/AboutSection'
import { PhilosophySection } from '@/components/home/PhilosophySection'
import { ProcessStepper } from '@/components/home/ProcessStepper'
import { StatsSection } from '@/components/home/StatsSection'
import { BrandsMarquee } from '@/components/home/BrandsMarquee'
import { CTASection } from '@/components/home/CTASection'
import { ScrollVideoSection } from '@/components/home/ScrollVideoSection'
import { ScrollMobileSection } from '@/components/home/ScrollMobileSection'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'

export const metadata: Metadata = {
  title: METADATA.home.title,
  description: METADATA.home.description,
  keywords: METADATA.home.keywords,
  openGraph: METADATA.home.openGraph,
  twitter: {
    card: 'summary_large_image',
    title: METADATA.home.title,
    description: METADATA.home.description,
    images: ['https://www.fulgurservice.it/og/default.webp'],
  },
  alternates: { canonical: 'https://www.fulgurservice.it' },
}

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-[var(--bg)]">

      {/* 1. Hero — The Opening Shot */}
      <HeroSection />


      {/* 2a. Scroll Video Scrubbing — mobile only */}
      <ScrollMobileSection />

      {/* 2b. Scroll Video Scrubbing — desktop only */}
      <ScrollVideoSection />

      {/* 3. Services Bento Grid */}
      <div id="servizi" className="scroll-mt-24">
        <ServicesGrid />
      </div>

      {/* 3. Why Choose Us — Trust & Value */}
      <WhyChooseUs />

      {/* 3. Chi Siamo — La Storia */}
      <div id="chi-siamo" className="scroll-mt-24">
        <AboutSection />
      </div>

      {/* 4. Philosophy — Il Manifesto */}
      <PhilosophySection />

      {/* 5. Process Steps — Come Lavoriamo */}
      <div id="processo" className="scroll-mt-24">
        <ProcessStepper />
      </div>

      {/* 6. Stats — Sezione Invertita Accent */}
      <StatsSection />

      {/* 7. Brands Marquee — I nostri partner */}
      <BrandsMarquee />

      {/* 8. CTA — Chiudi col botto */}
      <div id="contatti" className="scroll-mt-24">
        <CTASection />
      </div>
    </main>
  )
}
