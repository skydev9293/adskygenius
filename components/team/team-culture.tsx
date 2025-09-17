import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Coffee, Lightbulb, Globe, Users, Zap } from "lucide-react"

export function TeamCulture() {
  const cultureValues = [
    {
      icon: Heart,
      title: "Inclusive Environment",
      description: "We celebrate diversity and create a welcoming space where everyone can thrive and contribute.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "We invest in our team's growth with learning budgets, conferences, and skill development programs.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible schedules, remote work options, and wellness programs support our team's well-being.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Our diverse backgrounds bring global insights that enhance our solutions and client relationships.",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "We believe in teamwork, knowledge sharing, and supporting each other's success.",
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "We encourage experimentation, creative problem-solving, and staying ahead of tech trends.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Our Culture</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We've built a culture that values diversity, promotes growth, and fosters innovation in everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cultureValues.map((value, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Benefits */}
        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="font-serif text-2xl font-bold text-card-foreground mb-8 text-center">Team Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Health & Wellness", items: ["Medical Insurance", "Dental & Vision", "Mental Health Support"] },
              {
                title: "Growth & Learning",
                items: ["$2000 Learning Budget", "Conference Attendance", "Skill Certifications"],
              },
              { title: "Work Flexibility", items: ["Remote Work Options", "Flexible Hours", "Unlimited PTO"] },
              { title: "Team Perks", items: ["Team Retreats", "Monthly Team Lunches", "Latest Tech Equipment"] },
            ].map((benefit, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-semibold text-card-foreground">{benefit.title}</h4>
                <ul className="space-y-1">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
