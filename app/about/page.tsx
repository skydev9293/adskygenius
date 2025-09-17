import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyStory } from "@/components/about/company-story"
import { OurValues } from "@/components/about/our-values"
import { TeamShowcase } from "@/components/about/team-showcase"
import { WhyChooseUs } from "@/components/about/why-choose-us"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <CompanyStory />
      <OurValues />
      <TeamShowcase />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}
