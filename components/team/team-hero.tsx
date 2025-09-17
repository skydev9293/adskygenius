"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Globe, Award } from "lucide-react"
import Link from "next/link"

export function TeamHero() {
  const handleScrollToJoinTeam = () => {
    const joinTeamSection = document.getElementById('join-team')
    if (joinTeamSection) {
      joinTeamSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const stats = [
    { icon: Users, number: "15+", label: "Team Members" },
    { icon: Globe, number: "8", label: "Countries" },
    { icon: Award, number: "50+", label: "Projects" },
  ]

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Meet Our Team
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Our diverse team of talented professionals from Asian and American backgrounds brings together unique
                perspectives, innovative solutions, and exceptional expertise to every project.
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
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Join Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                onClick={handleScrollToJoinTeam}
              >
                View Open Positions
              </Button>
            </div>
          </div>

          {/* Team Photo */}
          <div className="relative">
            <img
              src="/pexels-cottonbro-7437491.jpg"
              alt="Diverse team of Asian and American developers"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
