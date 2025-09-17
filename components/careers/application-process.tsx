import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Users, MessageSquare, CheckCircle, ArrowRight } from "lucide-react"

export function ApplicationProcess() {
  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Send us your resume and cover letter through our application portal or email.",
      duration: "5 minutes",
    },
    {
      icon: Users,
      title: "Initial Screening",
      description: "Our HR team will review your application and reach out within 2-3 business days.",
      duration: "2-3 days",
    },
    {
      icon: MessageSquare,
      title: "Technical Interview",
      description: "Meet with our technical team to discuss your experience and problem-solving approach.",
      duration: "1 hour",
    },
    {
      icon: CheckCircle,
      title: "Final Decision",
      description: "We'll make our decision and extend an offer to successful candidates.",
      duration: "1-2 days",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-card-foreground">Application Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our streamlined hiring process is designed to be efficient and transparent. We respect your time and aim to
            provide feedback at every step.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-background border-border hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      <div className="bg-accent/10 px-3 py-1 rounded-full inline-block">
                        <span className="text-accent text-xs font-medium">{step.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Application Tips */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-card-foreground">Application Tips</h3>
              <div className="space-y-4">
                {[
                  "Highlight your experience with diverse teams and global projects",
                  "Show examples of your problem-solving approach and technical skills",
                  "Demonstrate your passion for continuous learning and growth",
                  "Share how you've contributed to inclusive and collaborative environments",
                  "Be authentic about your career goals and how they align with our mission",
                ].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground text-xl mb-4">Ready to Apply?</h4>
              <p className="text-muted-foreground mb-6">
                Join our team of talented professionals and help us build the future of technology. We're excited to
                learn about your unique background and experience.
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Browse Open Positions
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-accent border-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  Send General Application
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Questions? Email us at careers@AdSky Genius.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
