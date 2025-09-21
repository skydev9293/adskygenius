import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WorkflowHero } from "@/components/how-we-work/workflow-hero"
import { ProcessSteps } from "@/components/how-we-work/process-steps"
import { Methodology } from "@/components/how-we-work/methodology"
import { ClientCollaboration } from "@/components/how-we-work/client-collaboration"
import { QualityAssurance } from "@/components/how-we-work/quality-assurance"

export const metadata: Metadata = {
  title: "How We Work - Our Development Process",
  description: "Discover AdSky Genius's proven development methodology. From initial consultation to deployment, learn about our agile approach and quality assurance processes.",
  keywords: ["development process", "agile methodology", "software development lifecycle", "quality assurance", "project management", "IT consulting process"],
  openGraph: {
    title: "How We Work - Our Development Process",
    description: "Discover AdSky Genius's proven development methodology. From initial consultation to deployment, learn about our agile approach.",
    url: "/how-we-work",
    type: "website",
  },
  twitter: {
    title: "How We Work - Our Development Process",
    description: "Discover AdSky Genius's proven development methodology. From initial consultation to deployment, learn about our agile approach.",
  },
}

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <WorkflowHero />
      <ProcessSteps />
      <Methodology />
      <ClientCollaboration />
      <QualityAssurance />
      <Footer />
    </main>
  )
}
