import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyStory } from "@/components/about/company-story"
import { OurValues } from "@/components/about/our-values"
import { TeamShowcase } from "@/components/about/team-showcase"
import { WhyChooseUs } from "@/components/about/why-choose-us"

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description: "Learn about AdSky Genius's journey, mission, and values. Founded in 2024 with exceptional talent and a vision to become the leading IT development agency in the United States.",
  keywords: ["about AdSky Genius", "company story", "IT agency mission", "development team", "company values", "technology leadership"],
  openGraph: {
    title: "About AdSky Genius - Our Story & Mission",
    description: "Learn about AdSky Genius's journey, mission, and values. Founded in 2024 with exceptional talent and a vision to become the leading IT development agency.",
    url: "/about",
    type: "website",
  },
  twitter: {
    title: "About AdSky Genius - Our Story & Mission",
    description: "Learn about AdSky Genius's journey, mission, and values. Founded in 2024 with exceptional talent and a vision to become the leading IT development agency.",
  },
}

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
