import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function OutcomesSection() {
  const outcomes = [
    {
      client: "FinTech Startup",
      project: "Digital Banking Platform",
      result: "300% increase in user engagement within 6 months",
      metrics: ["2M+ Active Users", "99.9% Uptime", "40% Cost Reduction"],
      image: "/fintech-banking-platform-success-metrics-dashboard.jpg",
    },
    {
      client: "E-commerce Giant",
      project: "Mobile Commerce App",
      result: "Boosted mobile sales by 250% in first quarter",
      metrics: ["5M+ Downloads", "4.8★ Rating", "60% Mobile Revenue"],
      image: "/ecommerce-mobile-app-success-growth-analytics.jpg",
    },
    {
      client: "Healthcare Network",
      project: "Patient Management System",
      result: "Reduced administrative overhead by 45%",
      metrics: ["100K+ Patients", "24/7 Availability", "HIPAA Compliant"],
      image: "/healthcare-patient-management-system-efficiency.jpg",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">Measurable Outcomes</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our success is measured by the impact we create for our clients. Here are real results from real
            partnerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={outcome.image || "/placeholder.svg"}
                  alt={outcome.project}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8">
                <div className="text-sm text-emerald-600 font-medium mb-2">{outcome.client}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{outcome.project}</h3>
                <p className="text-lg text-slate-700 mb-6 font-medium">{outcome.result}</p>

                <div className="space-y-2 mb-6">
                  {outcome.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      {metric}
                    </div>
                  ))}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
