import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProcessSteps() {
  const steps = [
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      step: "01",
      title: "Discovery & Analysis",
      duration: "1-2 weeks",
      description:
        "We dive deep into your business requirements, target audience, and technical needs to create a comprehensive project roadmap.",
      deliverables: ["Project Requirements Document", "Technical Specification", "Timeline & Budget Estimate"],
    },
    {
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      step: "02",
      title: "Design & Planning",
      duration: "2-3 weeks",
      description:
        "Our design team creates intuitive user experiences while our architects plan the technical foundation for scalable solutions.",
      deliverables: ["UI/UX Designs", "System Architecture", "Development Plan"],
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      step: "03",
      title: "Development",
      duration: "4-12 weeks",
      description:
        "Our diverse team of expert developers brings your vision to life using cutting-edge technologies and best practices.",
      deliverables: ["Working Software", "Code Documentation", "Progress Reports"],
    },
    {
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      step: "04",
      title: "Testing & QA",
      duration: "1-2 weeks",
      description:
        "Rigorous testing ensures your application is bug-free, secure, and performs optimally across all platforms.",
      deliverables: ["Test Reports", "Bug Fixes", "Performance Optimization"],
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      step: "05",
      title: "Deployment",
      duration: "1 week",
      description:
        "We handle the complete deployment process, ensuring smooth launch and optimal performance in production.",
      deliverables: ["Live Application", "Deployment Guide", "Monitoring Setup"],
    },
    {
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      step: "06",
      title: "Support & Maintenance",
      duration: "Ongoing",
      description: "Continuous support and maintenance to keep your application running smoothly and up-to-date.",
      deliverables: ["24/7 Support", "Regular Updates", "Performance Monitoring"],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Our Development Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A systematic approach that ensures quality, transparency, and exceptional results at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-video relative">
                <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-bold text-sm">
                  {step.step}
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-xl font-semibold text-card-foreground">{step.title}</CardTitle>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {step.duration}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Key Deliverables:</h4>
                  <ul className="space-y-1">
                    {step.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
