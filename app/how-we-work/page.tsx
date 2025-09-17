import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WorkflowHero } from "@/components/how-we-work/workflow-hero"
import { ProcessSteps } from "@/components/how-we-work/process-steps"
import { Methodology } from "@/components/how-we-work/methodology"
import { ClientCollaboration } from "@/components/how-we-work/client-collaboration"
import { QualityAssurance } from "@/components/how-we-work/quality-assurance"

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
