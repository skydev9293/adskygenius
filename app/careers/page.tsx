import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers/careers-hero"
import { JobListings } from "@/components/careers/job-listings"
import { WhyJoinUs } from "@/components/careers/why-join-us"
import { ApplicationProcess } from "@/components/careers/application-process"
import { EmployeeTestimonials } from "@/components/careers/employee-testimonials"

export const metadata: Metadata = {
  title: "Careers - Join Our Team",
  description: "Join AdSky Genius and shape the future of technology. Explore exciting career opportunities with our growing IT development team. Competitive benefits and remote work options.",
  keywords: ["careers", "jobs", "software developer jobs", "IT careers", "remote work", "technology jobs", "hiring developers", "join our team"],
  openGraph: {
    title: "Careers at AdSky Genius - Join Our Team",
    description: "Join AdSky Genius and shape the future of technology. Explore exciting career opportunities with our growing IT development team.",
    url: "/careers",
    type: "website",
  },
  twitter: {
    title: "Careers at AdSky Genius - Join Our Team",
    description: "Join AdSky Genius and shape the future of technology. Explore exciting career opportunities with our growing IT development team.",
  },
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CareersHero />
      <JobListings />
      <WhyJoinUs />
      <EmployeeTestimonials />
      <ApplicationProcess />
      <Footer />
    </main>
  )
}
