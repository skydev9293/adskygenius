import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Bug, Gauge, Lock, ArrowRight } from "lucide-react"

export function QualityAssurance() {
  const qaProcesses = [
    {
      icon: Bug,
      title: "Automated Testing",
      description:
        "Comprehensive unit, integration, and end-to-end tests ensure code reliability and catch issues early.",
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description: "Regular performance audits and optimization to ensure your application runs fast and efficiently.",
    },
    {
      icon: Lock,
      title: "Security Audits",
      description: "Thorough security reviews and penetration testing to protect your application and user data.",
    },
    {
      icon: Shield,
      title: "Code Reviews",
      description: "Peer code reviews by senior developers ensure code quality and knowledge sharing across the team.",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-card-foreground">Quality Assurance</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our rigorous QA process ensures every line of code meets the highest standards of quality, security, and
            performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {qaProcesses.map((process, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <process.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{process.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{process.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Metrics */}
        <div className="bg-background p-8 rounded-lg border border-border mb-16">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">Our Quality Standards</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Code Coverage</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">&lt;2s</div>
              <div className="text-sm text-muted-foreground">Load Time Target</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">0</div>
              <div className="text-sm text-muted-foreground">Security Vulnerabilities</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary/5 p-12 rounded-lg border border-primary/20">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Ready to Experience Our Process?
            </h3>
            <p className="text-lg text-muted-foreground">
              Let's discuss your project and show you how our proven methodology can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
