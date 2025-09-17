import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers/careers-hero"
import { JobListings } from "@/components/careers/job-listings"
import { WhyJoinUs } from "@/components/careers/why-join-us"
import { ApplicationProcess } from "@/components/careers/application-process"
import { EmployeeTestimonials } from "@/components/careers/employee-testimonials"

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
