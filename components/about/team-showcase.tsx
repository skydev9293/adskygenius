import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TeamShowcase() {
  const teamStats = [
    { number: "15+", label: "Expert Developers" },
    { number: "8", label: "Countries Represented" },
    { number: "50+", label: "Projects Delivered" },
    { number: "100%", label: "Client Satisfaction" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Team Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/diverse-team-of-asian-and-american-software-develo.jpg"
                alt="Diverse team of Asian and American software developers"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 z-20">
              <Badge variant="secondary" className="bg-accent text-accent-foreground px-4 py-2 text-sm font-medium">
                Diverse Team
              </Badge>
            </div>
            <div className="absolute -bottom-4 -left-4 z-20">
              <Badge
                variant="secondary"
                className="bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium"
              >
                Global Talent
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our strength lies in our diversity. We've assembled a world-class team of developers, designers, and
                strategists from Asian and American backgrounds, each bringing unique perspectives and expertise to
                every project.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This cultural diversity isn't just about representation—it's about creating better solutions. Different
                backgrounds mean different approaches to problem-solving, leading to more innovative and comprehensive
                digital solutions for our clients.
              </p>
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-2 gap-6">
              {teamStats.map((stat, index) => (
                <Card key={index} className="bg-card border-border text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-lg text-foreground mb-3">Why Diversity Matters</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Enhanced creativity and innovation through varied perspectives</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Better understanding of global markets and user needs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Comprehensive problem-solving approaches</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Cultural sensitivity in international projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
