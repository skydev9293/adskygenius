import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Users, Trophy, ArrowRight } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Successfully delivered 50+ projects with 100% client satisfaction since our founding.",
    },
    {
      icon: Clock,
      title: "Rapid Delivery",
      description: "Our agile methodology ensures fast turnaround times without compromising quality.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Diverse team of seasoned professionals with expertise across multiple technologies.",
    },
    {
      icon: Trophy,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure exceptional results every time.",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-card-foreground">Why Choose AdSky Genius?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We combine exceptional talent with proven methodologies to deliver results that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-background border-border">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <reason.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{reason.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary/5 p-12 rounded-lg border border-primary/20">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">Ready to Work with Us?</h3>
            <p className="text-lg text-muted-foreground">
              Let's discuss how our exceptional talent can deliver exceptional results for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
