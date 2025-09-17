import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function GrowthSection() {
  const growthMetrics = [
    {
      title: "Revenue Growth",
      value: "400%",
      period: "Year over Year",
      description: "Consistent growth through quality delivery and client satisfaction",
      trend: "↗️",
    },
    {
      title: "Team Expansion",
      value: "500%",
      period: "Since 2024",
      description: "Attracting top talent from leading tech companies worldwide",
      trend: "👥",
    },
    {
      title: "Market Reach",
      value: "15+",
      period: "Countries",
      description: "Serving clients across North America, Europe, and Asia-Pacific",
      trend: "🌍",
    },
    {
      title: "Technology Stack",
      value: "25+",
      period: "Technologies",
      description: "Mastering cutting-edge tools and frameworks for optimal solutions",
      trend: "⚡",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-serif">Exponential Growth</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            From a bold vision to a leading IT development agency. Our growth story is just beginning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {growthMetrics.map((metric, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/15 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{metric.trend}</div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">{metric.value}</div>
                <div className="text-emerald-300 font-medium mb-4">{metric.period}</div>
                <h3 className="text-lg font-semibold mb-3">{metric.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-4 font-serif">Ready to Grow With Us?</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join our journey as we continue to push boundaries, deliver exceptional results, and shape the future of
            technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 bg-transparent"
              >
                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
