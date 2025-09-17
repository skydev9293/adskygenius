import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Zap, Globe, TrendingUp, Users, Award } from "lucide-react"

export function WhyJoinUs() {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Rapid Growth",
      description:
        "Join us at an exciting time as we scale from startup to industry leader. Your contributions will have immediate impact.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Work on projects that reach users worldwide. Our diverse team brings unique perspectives to every solution.",
    },
    {
      icon: Users,
      title: "Diverse Team",
      description:
        "Collaborate with talented professionals from Asian and American backgrounds, fostering innovation through diversity.",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Tech",
      description:
        "Work with the latest technologies and frameworks. We invest in tools that make you more productive and creative.",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description:
        "Flexible schedules, remote work options, and comprehensive wellness programs support your well-being.",
    },
    {
      icon: Award,
      title: "Career Growth",
      description:
        "Clear advancement paths, mentorship programs, and learning budgets to accelerate your professional development.",
    },
  ]

  const benefits = [
    {
      category: "Health & Wellness",
      items: [
        "Comprehensive Medical Insurance",
        "Dental & Vision Coverage",
        "Mental Health Support",
        "Wellness Stipend",
      ],
    },
    {
      category: "Professional Growth",
      items: [
        "$2,000 Annual Learning Budget",
        "Conference & Training Support",
        "Mentorship Programs",
        "Career Development Plans",
      ],
    },
    {
      category: "Work Flexibility",
      items: ["Remote Work Options", "Flexible Working Hours", "Unlimited PTO Policy", "Home Office Setup Budget"],
    },
    {
      category: "Financial Benefits",
      items: ["Competitive Salaries", "Equity Participation", "Performance Bonuses", "Retirement Planning Support"],
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-card-foreground">Why Join AdSky Genius?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Be part of a company that values diversity, innovation, and exceptional talent. We're building something
            special, and we want you to be part of the journey.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-background p-8 rounded-lg border border-border">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
            Comprehensive Benefits Package
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-foreground text-lg">{benefit.category}</h4>
                <ul className="space-y-2">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
