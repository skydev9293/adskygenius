import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CelebrationSection() {
  const achievements = [
    {
      title: "50+ Projects Delivered",
      description: "Successfully launched applications serving millions of users worldwide",
      metric: "50+",
      label: "Projects",
      image: "/successful-project-delivery-milestone-celebration.jpg",
    },
    {
      title: "Industry Recognition",
      description: "Awarded 'Best Emerging Tech Company' by TechCrunch Disrupt 2024",
      metric: "2024",
      label: "Award Winner",
      image: "/tech-industry-award-recognition-ceremony.jpg",
    },
    {
      title: "Client Satisfaction",
      description: "Maintaining 98% client satisfaction rate with long-term partnerships",
      metric: "98%",
      label: "Satisfaction",
      image: "/client-satisfaction-success-partnership-celebration.jpg",
    },
    {
      title: "Team Growth",
      description: "Expanded from 5 to 25+ talented professionals in just one year",
      metric: "25+",
      label: "Team Members",
      image: "/team-growth-expansion-diverse-professionals.jpg",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">Celebrating Success</Badge>
          <h2 className="text-4xl font-bold mb-4 font-serif">Milestones Worth Celebrating</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Every achievement reflects our commitment to excellence and the trust our clients place in us. Here's what
            we've accomplished together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={achievement.image || "/placeholder.svg"}
                  alt={achievement.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">{achievement.metric}</div>
                <div className="text-sm text-emerald-300 mb-3 font-medium">{achievement.label}</div>
                <h3 className="text-lg font-semibold mb-3">{achievement.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
