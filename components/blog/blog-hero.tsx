import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function BlogHero() {
  return (
    <section className="bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Insights & Innovation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
              Stay ahead of the curve with our latest thoughts on technology trends, development best practices, and
              industry insights from our diverse team of experts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">Search</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
