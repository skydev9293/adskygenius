"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, Clock } from "lucide-react"
import { useRouter } from "next/navigation"

export function JoinTeam() {
  const router = useRouter()

  const handleNavigateToContact = () => {
    router.push('/contact')
  }

  const openPositions = [
    {
      title: "Senior React Developer",
      location: "Remote / New York",
      type: "Full-time",
      description: "Join our frontend team to build exceptional user experiences with React and TypeScript.",
    },
    {
      title: "DevOps Engineer",
      location: "Remote / San Francisco",
      type: "Full-time",
      description:
        "Help us scale our infrastructure and improve our deployment processes with modern DevOps practices.",
    },
    {
      title: "UX/UI Designer",
      location: "Remote / Los Angeles",
      type: "Full-time",
      description: "Create beautiful, intuitive designs that delight users and drive business results.",
    },
  ]

  return (
    <section id="join-team" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-card-foreground">Join Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We're always looking for talented individuals who share our passion for exceptional software development and
            diverse collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Open Positions */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-card-foreground">Open Positions</h3>
            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <Card
                  key={index}
                  className="bg-background border-border hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-lg text-foreground">{position.title}</h4>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-accent border-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                          onClick={handleNavigateToContact}
                        >
                          Apply
                        </Button>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{position.type}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed">{position.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Join Us */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-card-foreground">Why Join AdSky Genius?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Be part of a rapidly growing company that values diversity, innovation, and exceptional talent. We offer
                competitive compensation, comprehensive benefits, and the opportunity to work on cutting-edge projects
                with a world-class team.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Work with diverse, talented professionals from around the world",
                "Contribute to innovative projects that make a real impact",
                "Enjoy flexible work arrangements and excellent benefits",
                "Grow your skills with our learning and development programs",
                "Be part of our rapid growth story from the early stages",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-card-foreground mb-3">Don't see the right position?</h4>
              <p className="text-muted-foreground text-sm mb-4">
                We're always interested in connecting with talented individuals. Send us your resume and let us know how
                you'd like to contribute to our team.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleNavigateToContact}>
                Send Your Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
