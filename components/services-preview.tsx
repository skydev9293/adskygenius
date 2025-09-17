import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesPreview() {
  const services = [
    {
      image: "/microservices-architecture-diagram-on-modern-scr.jpg",
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices.",
    },
    {
      image: "/mobile-app-development-team-working-on-scalable-a.jpg",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      image: "/cloud-infrastructure-dashboard-with-monitoring-ch.jpg",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment strategies.",
    },
    {
      image: "/database-architecture-diagram-with-performance-m.jpg",
      title: "Database Design",
      description: "Optimized database architecture and data management solutions.",
    },
    {
      image: "/cybersecurity-monitoring-dashboard-with-threat-d.jpg",
      title: "Cybersecurity",
      description: "Comprehensive security audits and protection implementations.",
    },
    {
      image: "/ai-powered-software-development-workspace-with-cod.jpg",
      title: "AI Integration",
      description: "Cutting-edge AI and machine learning solutions for your business.",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-card-foreground">Our Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We deliver comprehensive IT solutions tailored to your business needs, from concept to deployment and
            beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-video relative">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
