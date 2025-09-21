import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogCategories } from "@/components/blog/blog-categories"

export const metadata: Metadata = {
  title: "Blog - Insights & Expertise",
  description: "Stay updated with the latest trends in software development, technology insights, and industry best practices from the AdSky Genius team.",
  keywords: ["technology blog", "software development insights", "IT trends", "programming tutorials", "tech industry news", "development best practices"],
  openGraph: {
    title: "AdSky Genius Blog - Technology Insights & Expertise",
    description: "Stay updated with the latest trends in software development, technology insights, and industry best practices from the AdSky Genius team.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    title: "AdSky Genius Blog - Technology Insights & Expertise",
    description: "Stay updated with the latest trends in software development, technology insights, and industry best practices.",
  },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <Footer />
    </main>
  )
}
