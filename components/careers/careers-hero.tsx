import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Globe, TrendingUp } from "lucide-react"

export function CareersHero() {
  const stats = [
    { icon: Users, number: "15+", label: "Team Members" },
    { icon: Globe, number: "8", label: "Countries" },
    { icon: TrendingUp, number: "300%", label: "Growth Rate" },
  ]

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Build Your Career with Us
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Join a rapidly growing IT development agency where diverse perspectives drive innovation. We're building
                the future of technology with exceptional talent from around the world.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                Learn About Our Culture
              </Button>
            </div>
          </div>

          {/* Team Photo */}
          <div className="relative">
            <img
              src="/diverse-team-photo-asian-american-developers-in-mod.jpg"
              alt="Diverse team of developers at AdSky Genius"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
              <p className="font-semibold text-sm">Founded in 2024</p>
              <p className="text-xs opacity-90">Rapid Growth Journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
