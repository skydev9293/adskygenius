import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact Us - Get In Touch",
  description: "Ready to start your next project? Contact AdSky Genius for expert IT development services. Get a free consultation and discover how we can help your business grow.",
  keywords: ["contact AdSky Genius", "IT consultation", "project inquiry", "software development quote", "get in touch", "business inquiry"],
  openGraph: {
    title: "Contact AdSky Genius - Get Expert IT Development",
    description: "Ready to start your next project? Contact AdSky Genius for expert IT development services. Get a free consultation and discover how we can help your business grow.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    title: "Contact AdSky Genius - Get Expert IT Development",
    description: "Ready to start your next project? Contact AdSky Genius for expert IT development services. Get a free consultation.",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </main>
  )
}