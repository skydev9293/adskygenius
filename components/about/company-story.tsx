import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Target, Rocket, Users } from "lucide-react"

export function CompanyStory() {
  const milestones = [
    {
      icon: Calendar,
      title: "Founded in 2024",
      description: "Started with a bold vision to transform the IT development landscape in the United States.",
    },
    {
      icon: Target,
      title: "Clear Mission",
      description: "Committed to delivering exceptional digital solutions through our rapid-growth strategy.",
    },
    {
      icon: Users,
      title: "Exceptional Talent",
      description: "Built a diverse team of skilled professionals from Asian and American backgrounds.",
    },
    {
      icon: Rocket,
      title: "Rapid Growth",
      description: "Expanding our reach and impact through innovative solutions and client satisfaction.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AdSky Genius was born from a simple yet powerful philosophy: exceptional talent delivers exceptional
                results. Founded in 2024, we set out to challenge the status quo in IT development by bringing together
                diverse minds and cutting-edge technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our rapid-growth strategy is built on the foundation of delivering outstanding digital solutions that
                not only meet but exceed our clients' expectations. We believe that innovation thrives in diversity,
                which is why our team represents a rich blend of cultures, perspectives, and expertise.
              </p>
            </div>

            <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
              <p className="text-lg font-medium text-accent italic">
                "Exceptional talent delivers exceptional results."
              </p>
              <p className="text-sm text-muted-foreground mt-2">— Our Core Philosophy</p>
            </div>
          </div>

          {/* Milestones */}
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <milestone.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-card-foreground">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
