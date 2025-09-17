import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Methodology() {
  const methodologies = [
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      title: "Agile Development",
      description:
        "We use Agile methodologies with 2-week sprints, ensuring rapid iteration and continuous improvement based on your feedback.",
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      title: "Collaborative Approach",
      description:
        "Regular stand-ups, sprint reviews, and client demos keep you involved throughout the development process.",
    },
    {
      image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      title: "Continuous Integration",
      description:
        "Automated testing and deployment pipelines ensure code quality and enable rapid, reliable releases.",
    },
    {
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      title: "Goal-Oriented",
      description:
        "Every sprint is focused on delivering tangible business value and moving closer to your project goals.",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-card-foreground">Our Methodology</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We combine proven methodologies with innovative approaches to deliver exceptional results efficiently.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {methodologies.map((method, index) => (
            <Card
              key={index}
              className="bg-background border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={method.image || "/placeholder.svg"}
                  alt={method.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-background p-8 rounded-lg border border-border">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">Typical Sprint Cycle</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { day: "Day 1", activity: "Sprint Planning", description: "Define goals and tasks" },
              { day: "Days 2-10", activity: "Development", description: "Daily standups & coding" },
              { day: "Day 11", activity: "Sprint Review", description: "Demo & feedback" },
              { day: "Day 12", activity: "Retrospective", description: "Process improvement" },
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                  {index + 1}
                </div>
                <div className="font-semibold text-foreground">{phase.day}</div>
                <div className="font-medium text-accent">{phase.activity}</div>
                <div className="text-sm text-muted-foreground">{phase.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
