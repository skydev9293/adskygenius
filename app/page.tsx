import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { LifeSection } from "@/components/home/life-section"
import { CelebrationSection } from "@/components/home/celebration-section"
import { OutcomesSection } from "@/components/home/outcomes-section"
import { GrowthSection } from "@/components/home/growth-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "AdSky Genius - Leading IT Development Agency",
  description: "Transform your business with AdSky Genius - the leading IT development agency founded in 2024. We deliver exceptional web development, mobile apps, cloud solutions, and custom software with unmatched expertise.",
  keywords: ["IT development agency", "web development", "mobile app development", "cloud solutions", "custom software", "digital transformation", "software consulting", "technology services", "AdSky Genius"],
  authors: [{ name: "AdSky Genius" }],
  creator: "AdSky Genius",
  publisher: "AdSky Genius",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "AdSky Genius - Leading IT Development Agency",
    description: "Transform your business with AdSky Genius - the leading IT development agency. We deliver exceptional web development, mobile apps, cloud solutions, and custom software.",
    type: "website",
    url: "https://adskygenius.com",
    siteName: "AdSky Genius",
    locale: "en_US",
    images: [
      {
        url: "https://adskygenius.com/company_logo.png",
        width: 1200,
        height: 630,
        alt: "AdSky Genius - IT Development Agency",
      },
    ],
  },
  twitter: {
    title: "AdSky Genius - Leading IT Development Agency",
    description: "Transform your business with AdSky Genius - the leading IT development agency. We deliver exceptional web development, mobile apps, cloud solutions.",
    images: ["https://adskygenius.com/company_logo.png"],
    card: "summary_large_image",
    creator: "@adskygenius",
  },
  alternates: {
    canonical: "https://adskygenius.com",
  },
}

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
