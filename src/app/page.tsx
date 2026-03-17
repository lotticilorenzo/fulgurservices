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
import { GoogleReviewsPlugin } from '@/components/home/GoogleReviewsPlugin'
import { FAQSection } from '@/components/ui/FAQSection'
import { IntegratedBento } from '@/components/servizi/IntegratedBento'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { GeographicCoverage } from '@/components/home/GeographicCoverage'
import { WipeReveal } from '@/components/ui/WipeReveal'

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
        <WipeReveal direction="left">
          <ServicesGrid />
        </WipeReveal>
      </div>

      <WipeReveal direction="right" delay={0.2}>
        <WhyChooseUs />
      </WipeReveal>
      
      <WipeReveal direction="left">
        <PartnershipSection />
      </WipeReveal>

      <div id="chi-siamo" className="scroll-mt-24">
        <WipeReveal direction="right">
          <AboutSection />
        </WipeReveal>
      </div>
      
      <WipeReveal direction="bottom">
        <PhilosophySection />
      </WipeReveal>
      
      <WipeReveal direction="left">
        <IntegratedBento />
      </WipeReveal>

      <div id="processo" className="scroll-mt-24">
        <WipeReveal direction="right">
          <ProcessStepper />
        </WipeReveal>
      </div>

      <WipeReveal direction="top">
        <GoogleReviewsPlugin />
      </WipeReveal>

      <WipeReveal direction="left">
        <GeographicCoverage />
      </WipeReveal>
      
      <WipeReveal direction="bottom">
        <FAQSection />
      </WipeReveal>

      <div id="contatti" className="scroll-mt-24">
        <WipeReveal direction="top">
          <CTASection />
        </WipeReveal>
      </div>
    </main>
  )
}

