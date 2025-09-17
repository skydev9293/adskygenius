import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Users, Zap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-card py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className=" text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Leading IT Development Agency
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Founded in 2024 with a bold vision to become a leading IT development agency in the United States. We
                are a dynamic technology partner committed to delivering exceptional digital solutions.
              </p>
              <p className="text-lg text-accent font-medium">Exceptional talent delivers exceptional results.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Expert Developers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/pexels-fauxels-3182835.jpg"
                alt="Diverse team of software developers"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
              <Code className="h-8 w-8" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground p-4 rounded-lg shadow-lg">
              <Users className="h-8 w-8" />
            </div>
            <div className="absolute top-1/2 -right-8 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg">
              <Zap className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
