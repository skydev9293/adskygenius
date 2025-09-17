import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function EmployeeTestimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      background: "Asian-American",
      avatar: "/asian-female-ceo-professional-headshot-in-modern-off.jpg",
      quote:
        "Building AdSky Genius has been an incredible journey. Our diverse team brings unique perspectives that drive innovation and create better solutions for our clients.",
      highlight: "Leadership & Vision",
    },
    {
      name: "Kevin Liu",
      role: "Senior Full-Stack Developer",
      background: "Asian",
      avatar: "/asian-male-senior-developer-professional-headshot.jpg",
      quote:
        "The learning opportunities here are amazing. I've grown more in my first year at AdSky Genius than in my previous three years combined. The team truly supports each other's growth.",
      highlight: "Professional Growth",
    },
    {
      name: "Emily Davis",
      role: "DevOps Engineer",
      background: "American",
      avatar: "/american-female-devops-engineer-professional-heads.jpg",
      quote:
        "The work-life balance is exceptional. I can work remotely, set my own schedule, and still collaborate effectively with team members across different time zones.",
      highlight: "Work-Life Balance",
    },
    {
      name: "Raj Sharma",
      role: "Backend Developer",
      background: "Asian-American",
      avatar: "/asian-american-male-backend-developer-professional.jpg",
      quote:
        "What I love most is how our diverse backgrounds contribute to better problem-solving. We approach challenges from different angles and always find innovative solutions.",
      highlight: "Diversity & Innovation",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">What Our Team Says</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear directly from our team members about their experience working at AdSky Genius and what makes our company
            culture special.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-1">
                    <Quote className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    <blockquote className="text-muted-foreground leading-relaxed italic">
                      {testimonial.quote}
                    </blockquote>
                  </div>

                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground text-lg">{testimonial.name}</h4>
                      <p className="text-accent text-sm font-medium">{testimonial.role}</p>
                      <p className="text-muted-foreground text-xs">{testimonial.background}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-accent/10 px-3 py-1 rounded-full">
                        <span className="text-accent text-xs font-medium">{testimonial.highlight}</span>
                      </div>
                    </div>
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
