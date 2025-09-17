import { Card, CardContent } from "@/components/ui/card"

export function LifeSection() {
  const lifeAspects = [
    {
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options that prioritize your well-being and productivity.",
      image: "/work-life-balance-flexible-remote-team-collaboration.jpg",
    },
    {
      title: "Team Culture",
      description: "Collaborative environment where diverse perspectives drive innovation and creative solutions.",
      image: "/diverse-team-culture-collaboration-innovation-workspace.jpg",
    },
    {
      title: "Learning & Development",
      description: "Continuous learning opportunities with access to latest technologies and industry conferences.",
      image: "/professional-development-learning-technology-training.jpg",
    },
    {
      title: "Wellness Programs",
      description: "Comprehensive health benefits, mental wellness support, and team building activities.",
      image: "/employee-wellness-programs-team-building-activities.jpg",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">Life at AdSky Genius</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We believe that great work comes from great people living fulfilling lives. Discover how we create an
            environment where talent thrives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lifeAspects.map((aspect, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={aspect.image || "/placeholder.svg"}
                  alt={aspect.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{aspect.title}</h3>
                <p className="text-slate-600 leading-relaxed">{aspect.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
