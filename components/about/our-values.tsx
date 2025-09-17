import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OurValues() {
  const values = [
    {
      image: "/client-meeting-diverse-team-discussing-project-r.jpg",
      title: "Client-Centric",
      description: "We put our clients at the heart of everything we do, ensuring their success is our success.",
    },
    {
      image: "/innovation-brainstorming-session-with-diverse-te.jpg",
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
    },
    {
      image: "/professional-handshake-diverse-business-partners.jpg",
      title: "Integrity",
      description: "We maintain the highest standards of honesty, transparency, and ethical business practices.",
    },
    {
      image: "/quality-assurance-testing-process-with-multiple.jpg",
      title: "Excellence",
      description: "We strive for perfection in every project, delivering quality that exceeds expectations.",
    },
    {
      image: "/diverse-team-of-asian-and-american-software-develo.jpg",
      title: "Diversity",
      description: "We celebrate diverse perspectives and backgrounds that strengthen our team and solutions.",
    },
    {
      image: "/professional-development-training-session-with-d.jpg",
      title: "Growth",
      description: "We are committed to continuous learning and improvement for ourselves and our clients.",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-card-foreground">Our Values</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            The principles that guide our work and define our culture as we build the future of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-video relative">
                <img src={value.image || "/placeholder.svg"} alt={value.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
