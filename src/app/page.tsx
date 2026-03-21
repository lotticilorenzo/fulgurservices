import type { Metadata } from 'next'
import { METADATA, STRUCTURED_DATA } from '@/lib/seo'
import { HeroSection } from '@/components/home/HeroSection'
import { SliderSection } from '@/components/home/SliderSection'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { AboutSection } from '@/components/home/AboutSection'
import { PhilosophySection } from '@/components/home/PhilosophySection'
import { ProcessStepper } from '@/components/home/ProcessStepper'
import { StatsSection } from '@/components/home/StatsSection'
import { BrandsMarquee } from '@/components/home/BrandsMarquee'
import { CTASection } from '@/components/home/CTASection'
import { ScrollVideoSection } from '@/components/home/ScrollVideoSection'

export const metadata: Metadata = {
  title: METADATA.home.title,
  description: METADATA.home.description,
  keywords: METADATA.home.keywords,
  openGraph: METADATA.home.openGraph,
  twitter: {
    card: 'summary_large_image',
    title: METADATA.home.title,
    description: METADATA.home.description,
    images: ['https://www.fulgurservice.it/og/default.jpg'],
  },
  alternates: { canonical: 'https://www.fulgurservice.it' },
}

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-[var(--bg)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />

      {/* 1. Hero — The Opening Shot */}
      <HeroSection />

      {/* 1.1. Technology & Method Slider — The moving text section */}
      <SliderSection />

      {/* 2. Scroll Video Scrubbing */}
      <ScrollVideoSection />

      {/* 3. Services Bento Grid */}
      <div id="servizi" className="scroll-mt-24">
        <ServicesGrid />
      </div>

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
