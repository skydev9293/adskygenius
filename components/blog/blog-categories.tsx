import { Badge } from "@/components/ui/badge"

export function BlogCategories() {
  const categories = [
    { name: "All Posts", count: 24, active: true },
    { name: "Web Development", count: 8 },
    { name: "Mobile Apps", count: 6 },
    { name: "AI & Machine Learning", count: 4 },
    { name: "DevOps", count: 3 },
    { name: "Design", count: 3 },
  ]

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={category.active ? "default" : "outline"}
              className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
                category.active
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "hover:bg-accent/10 hover:text-accent"
              }`}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
