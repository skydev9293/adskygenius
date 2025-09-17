import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Github } from "lucide-react"

export function Leadership() {
  const leaders = [
    {
      name: "Ross Findlay",
      role: "CEO & Co-Founder",
      background: "American",
      image: "/asian-female-ceo-professional-headshot-in-modern-off.avif",
      bio: "Former senior engineer at Google with 10+ years in tech leadership. Passionate about building diverse, high-performing teams.",
      expertise: ["Strategic Leadership", "Product Vision", "Team Building"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      background: "American",
      image: "/american-male-cto-professional-headshot-in-tech-off.avif",
      bio: "Full-stack architect with expertise in scalable systems. Previously led engineering teams at Microsoft and startups.",
      expertise: ["System Architecture", "Cloud Infrastructure", "Technical Strategy"],
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "James Wang",
      role: "Head of Design",
      background: "Asian-American",
      image: "/asian-female-design-director-professional-headshot.avif",
      bio: "Award-winning UX designer with a passion for creating intuitive, accessible digital experiences for global audiences.",
      expertise: ["UX/UI Design", "Design Systems", "User Research"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Leadership Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experienced leaders who bring together diverse perspectives and deep technical expertise to guide our
            vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative">
                  <img  
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-72 h-72 rounded-full mx-auto object-cover"
                  />
                  <Badge
                    variant="secondary"
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground"
                  >
                    {leader.background}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-card-foreground">{leader.name}</h3>
                  <p className="text-accent font-medium">{leader.role}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground text-sm mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {leader.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3 pt-2">
                    {leader.social.linkedin && (
                      <a href={leader.social.linkedin} className="text-muted-foreground hover:text-accent">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {leader.social.twitter && (
                      <a href={leader.social.twitter} className="text-muted-foreground hover:text-accent">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {leader.social.github && (
                      <a href={leader.social.github} className="text-muted-foreground hover:text-accent">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
