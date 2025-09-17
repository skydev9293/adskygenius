import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface RelatedPostsProps {
  currentSlug: string
}

export function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  const relatedPosts = [
    {
      slug: "building-scalable-mobile-apps",
      title: "Building Scalable Mobile Apps: Architecture Best Practices",
      excerpt:
        "Learn how to design mobile applications that can grow with your business.",
      category: "Mobile Apps",
      author: "Hiroshi Tanaka",
      readTime: "6 min read",
      image: "/mobile-app-development-team-working-on-scalable-a.jpg",
    },
    {
      slug: "mobile-apps-in-2024",
      title: "AI Integration in Software Development: A Practical Guide",
      excerpt:
        "Discover how artificial intelligence is transforming the development process.",
      category: "AI & Machine Learning",
      author: "Michael Rodriguez",
      readTime: "10 min read",
      image: "/ai-powered-software-development-workspace-with-cod.jpg",
    },
    {
      slug: "ai-machine-learning-trends",
      title: "Building DevOps Culture in Diverse Teams",
      excerpt:
        "How cultural diversity enhances DevOps practices and creates more robust workflows.",
      category: "DevOps",
      author: "Emily Davis",
      readTime: "7 min read",
      image: "/diverse-devops-team-collaborating-on-deployment-p.jpg",
    },
  ]
  

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-card-foreground mb-12 text-center">Related Articles</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-background border-border hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="aspect-video relative">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>

                    <h3 className="font-serif text-lg font-bold text-foreground leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-muted-foreground">{post.author}</span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-accent hover:text-accent/80 transition-colors text-sm font-medium pt-2"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
