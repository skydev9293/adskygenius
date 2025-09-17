// ... existing imports ...
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
// Optionally import custom CSS for extra polish
// import "../../styles/blog-post.css"

interface BlogPostProps {
  slug: string
}

// Simulated posts data (same as before)
const posts = [
  // ... (same posts array as before)
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
    content: `
# Turning Ambition Into Software: Inside the AdSky Genius Operating System

In today’s rapidly shifting business landscape, ambition is no longer enough. Companies that thrive are the ones that can convert bold ideas into real, usable software—faster than the competition, and without cutting corners that come back to bite later. That’s exactly where **AdSky Genius** comes in. Founded in 2024 with a clear mission in mind, we help organizations transform ambition into resilient, customer-centered digital products by integrating strategy, engineering, and enablement into one seamless system.

We don’t believe you should have to choose between moving fast and building things that last. When software is built right from the start—with clear objectives, lean processes, and technical excellence—it becomes more than just a tool; it becomes a growth engine that compounds value over time.

## A.G.O.S. – The AdSky Genius Operating System

At the heart of everything we do is our Operating System—**A.G.O.S.**—a practical, repeatable framework that guides each engagement from fuzzy idea to scalable solution. It’s not just a process; it’s a mindset, a rhythm of work that drives results while adapting to the realities of each unique context.

### 1. Discovery → Direction

Before a single line of code is written, we anchor on what truly matters. Through **Jobs-to-Be-Done interviews**, journey mapping, and focused collaboration with stakeholders, we uncover the core user needs and business constraints that shape product direction. Every initiative is grounded in a clear **value hypothesis**, defined **North Star metrics**, and sharp success guardrails—so we always know what “good” looks like.

### 2. Delivery → Durability

Fast iteration doesn’t mean loose standards. We operate in **two-week sprints**, supported by automated testing and modern CI/CD pipelines that allow us to release frequently and safely. Our approach to **progressive delivery** ensures that new features roll out incrementally with feedback loops built-in, while **service-level objectives (SLOs)** guide technical quality and resilience from day one.

### 3. Enablement → Expansion

Great software outlives its creators. That’s why every engagement includes a strong focus on **capability transfer**, **documentation**, and **change enablement**. We don’t just hand over code—we deliver **custom playbooks**, embed within your teams, and train your people to run and grow the systems we build together. Because real impact happens when your team can confidently carry the work forward.

## Values We Live and Build By

- **People First:** We reduce complexity to amplify human judgment. Every product we ship aims to make people’s work clearer, faster, and more meaningful.
- **Pragmatic Excellence:** We aim for the simplest design that can win. No overengineering, no vanity patterns—just what works.
- **Evidence Over Ego:** We move forward by learning fast. We ship small, validate often, and let data—not opinion—guide our decisions.
- **Security by Default:** From the first sprint, we bake in security. Every system is built with threat modeling, auditability, and least-privilege access from day one.
- **Sustainable Pace:** We favor consistent, calm delivery over late-night heroics. We build predictable momentum that lasts.

## What We Offer: A Modern Service Map

- Strategic product planning, including OKRs, roadmap prioritization, and portfolio bets.
- Research-backed design systems, rapid prototyping, and iterative UX validation.
- Web, mobile, and platform development using modern cloud-native stacks and dev practices.
- Data and AI enablement, with a responsible approach to model training, bias mitigation, and decision transparency.
- Robust cloud infrastructure powered by Infrastructure as Code (IaC), SRE practices, and deep observability.
- Application modernization using domain-driven design (DDD) and strangler patterns to safely evolve legacy systems.

## Flexible Ways to Work Together

- **Sprint Pods:** Cross-functional squads delivering a single outcome with autonomy and speed.
- **Capability Boosters:** Senior specialists embedded to upskill your team and accelerate critical outcomes.
- **End-to-End Build:** Full-cycle delivery from discovery to launch and post-launch enablement.
- **Advisory Retainers:** Continuous strategic support for product, architecture, and governance decisions.

## What It Looks Like in Action

Take the case of a fast-moving **healthcare startup** that came to us with a clear goal: launch a secure, compliant MVP for tele-triage in under two months. We started with a focused three-week discovery phase to identify real patient and clinician needs alongside regulatory requirements. By the second sprint, we delivered a usable triage workflow that supported identity verification, consent, and clinician decision support—all designed with security and HIPAA compliance in mind.

This early success allowed the client to pilot with confidence and iterate from a position of stability. As the product matured, we helped them scale infrastructure, tighten observability, and build internal playbooks to support operations—ensuring they could own and grow the platform independently.

## What Success Really Looks Like

- **Time-to-learning:** From zero to validated insight in weeks, not quarters.
- **Lower cost-of-change:** Well-structured, testable systems that evolve safely.
- **Playbooks, not handoffs:** Teams who understand, own, and can extend the software we deliver.

At AdSky Genius, we don’t just build software. We build momentum. If your team is ready to turn bold ambition into something real and resilient—let’s build it together.
    `
  },
  // ... (other posts unchanged)
]

export function BlogPost({ slug }: BlogPostProps) {
  // Find the post by slug
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Post not found</h2>
            <Link
              href="/blog"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <article className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="space-y-4 mb-8">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="font-mono bg-muted px-2 py-1 rounded">{post.category}</span>
              <span>{post.publishDate}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="font-mono text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center space-x-3 pt-4 border-t border-border mt-4">
              <img
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-foreground">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.author.background}</p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video mb-8 rounded-lg overflow-hidden">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Article Content as README style */}
          <div
            className="
              prose
              prose-neutral
              prose-headings:font-mono
              prose-headings:text-foreground
              prose-h1:text-4xl
              prose-h2:text-3xl
              prose-h3:text-2xl
              prose-h4:text-xl
              prose-p:text-lg
              prose-p:leading-relaxed
              prose-strong:font-semibold
              prose-strong:text-foreground
              prose-em:italic
              prose-blockquote:border-l-4
              prose-blockquote:border-accent
              prose-blockquote:bg-muted
              prose-blockquote:px-4
              prose-blockquote:py-2
              prose-li:marker:text-accent
              prose-a:text-accent
              prose-a:underline
              hover:prose-a:text-accent-foreground
              prose-code:bg-muted
              prose-code:text-foreground
              prose-code:rounded
              prose-code:px-1
              prose-code:py-0.5
              prose-img:rounded-lg
              prose-img:shadow
              max-w-none
              text-foreground
            "
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center space-x-4">
              <img
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-foreground text-lg">{post.author.name}</p>
                <p className="text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </article>
  )
}