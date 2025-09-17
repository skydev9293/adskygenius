import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { LifeSection } from "@/components/home/life-section"
import { CelebrationSection } from "@/components/home/celebration-section"
import { OutcomesSection } from "@/components/home/outcomes-section"
import { GrowthSection } from "@/components/home/growth-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesPreview />
      <LifeSection />
      <CelebrationSection />
      <OutcomesSection />
      <GrowthSection />
      <Footer />
    </main>
  )
}
