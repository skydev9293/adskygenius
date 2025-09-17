import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export function BlogGrid() {
  const blogPosts = [
    {
      slug: "adsky-genius-building-the-future",
      title: "AdSky Genius: Building the Future of Software, One Outcome at a Time",
      excerpt:
        "Founded in 2024, AdSky Genius turns business ambition into durable software outcomes through a pragmatic operating system that unites discovery, delivery, and enablement.",
      category: "Company",
      author: {
        name: "AdSky Genius Editorial Team",
        avatar: "/authors/adsky-editorial.jpg",
        background: "Global Team",
        bio: "Product, design, and engineering leaders at AdSky Genius focused on outcome-driven software."
      },
      publishDate: "September 8, 2025",
      readTime: "12 min read",
      image: "/images/adsky-company-outcomes.jpg",
      featured: true,
    },
    {
      slug: "development-playbook",
      title: "The AdSky Genius Development Playbook: From First Commit to Confident Release",
      excerpt:
        "A practical engineering approach—modular design, strong testing, continuous delivery, and observability—so teams ship value fast and keep it reliable.",
      category: "Development",
      author: {
        name: "Jordan Lee",
        avatar: "/authors/jordan-lee.jpg",
        background: "Global Engineering",
        bio: "Principal Engineer focused on scalable architectures and reliable delivery."
      },
      publishDate: "September 8, 2025",
      readTime: "14 min read",
      image: "/images/adsky-development-playbook.jpg",
    },
    {
      slug: "strategy-into-shipping",
      title: "Turning Strategy into Shipping: How AdSky Genius Aligns Software with Outcomes",
      excerpt:
        "A living strategy system that connects discovery to delivery with measurable outcomes, clear governance, and smart prioritization.",
      category: "Strategy",
      author: {
        name: "Ariana Patel",
        avatar: "/authors/ariana-patel.jpg",
        background: "Product Strategy",
        bio: "Head of Product Strategy at AdSky Genius, focused on outcome-centric roadmaps."
      },
      publishDate: "September 8, 2025",
      readTime: "13 min read",
      image: "/images/adsky-strategy-outcomes.jpg",
    },
    {
      slug: "talent-that-ships",
      title: "Talent That Ships: How We Attract, Grow, and Retain High-Impact Teams",
      excerpt:
        "Great software is the output of healthy teams. Here’s our ecosystem for hiring, onboarding, growth, and culture—designed to ship.",
      category: "Talent",
      author: {
        name: "Maya Thompson",
        avatar: "/authors/maya-thompson.jpg",
        background: "People & Culture",
        bio: "Director of People Operations, building inclusive, high-impact teams at AdSky Genius."
      },
      publishDate: "September 8, 2025",
      readTime: "11 min read",
      image: "/images/adsky-talent-teams.jpg",
    },
    {
      slug: "why-partner-with-adsky-genius",
      title: "Why Partner with AdSky Genius: Benefits, Proof, and How to Decide",
      excerpt:
        "De-risk your roadmap and compress time-to-value with outcome-driven delivery, strong security posture, and real capability transfer.",
      category: "Benefits",
      author: {
        name: "Noah García",
        avatar: "/authors/noah-garcia.jpg",
        background: "Client Services",
        bio: "Client partner helping organizations realize ROI through product and platform investments."
      },
      publishDate: "September 8, 2025",
      readTime: "10 min read",
      image: "/images/adsky-benefits-roi.jpg",
    },
  ]


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          {blogPosts
            .filter((post) => post.featured)
            .map((post, index) => (
              <div key={index} className="lg:col-span-2">
                <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Featured</Badge>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline" className="text-accent border-accent">
                          {post.category}
                        </Badge>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.publishDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>

                      <h2 className="font-serif text-2xl font-bold text-card-foreground leading-tight">
                        <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={post.author.avatar || "/placeholder.svg"}
                            alt={post.author.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-medium text-card-foreground text-sm">{post.author.name}</p>
                            <p className="text-xs text-muted-foreground">{post.author.background}</p>
                          </div>
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}

          {/* Regular Posts */}
          <div className="space-y-6">
            {blogPosts
              .filter((post) => !post.featured)
              .slice(0, 3)
              .map((post, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{post.publishDate}</span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-card-foreground leading-tight">
                        <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center space-x-2">
                          <img
                            src={post.author.avatar || "/placeholder.svg"}
                            alt={post.author.name}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                          <span className="text-xs text-muted-foreground">{post.author.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* More Posts Grid */}
        <div className="mt-16">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8">More Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => !post.featured)
              .slice(3)
              .map((post, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="aspect-video relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{post.publishDate}</span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-card-foreground leading-tight">
                        <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center space-x-2">
                          <img
                            src={post.author.avatar || "/placeholder.svg"}
                            alt={post.author.name}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                          <span className="text-xs text-muted-foreground">{post.author.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
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
