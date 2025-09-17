import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogPost } from "@/components/blog/blog-post"
import { RelatedPosts } from "@/components/blog/related-posts"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogPost slug={params.slug} />
      <RelatedPosts currentSlug={params.slug} />
      <Footer />
    </main>
  )
}
