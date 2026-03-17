import type { Metadata } from 'next'
import { METADATA, STRUCTURED_DATA } from '@/lib/seo'
import { HeroSection } from '@/components/home/HeroSection'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { AboutSection } from '@/components/home/AboutSection'
import { PhilosophySection } from '@/components/home/PhilosophySection'
import { ProcessStepper } from '@/components/home/ProcessStepper'
import { CTASection } from '@/components/home/CTASection'
import { TrustBar } from '@/components/ui/TrustBar'
import { PartnershipSection } from '@/components/ui/PartnershipSection'
import { ReviewsStrip } from '@/components/home/ReviewsStrip'
import { FAQSection } from '@/components/ui/FAQSection'
import { IntegratedBento } from '@/components/servizi/IntegratedBento'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { GeographicCoverage } from '@/components/home/GeographicCoverage'

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
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <HeroSection />
      
      <TrustBar />

      <div id="servizi" className="scroll-mt-24">
        <ServicesGrid />
      </div>

      <WhyChooseUs />
      
      <PartnershipSection />

      <div id="chi-siamo" className="scroll-mt-24">
        <AboutSection />
      </div>
      
      <PhilosophySection />
      
      <IntegratedBento />

      <div id="processo" className="scroll-mt-24">
        <ProcessStepper />
      </div>

      <ReviewsStrip />

      <GeographicCoverage />
      
      <FAQSection />

      <div id="contatti" className="scroll-mt-24">
        <CTASection />
      </div>
    </main>
  )
}

