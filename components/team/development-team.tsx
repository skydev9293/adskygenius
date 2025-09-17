import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function DevelopmentTeam() {
  const developers = [
    {
      name: "Matthew Lin",
      role: "Senior Full-Stack Developer",
      background: "Asian",
      image: "/asian-male-senior-developer-professional-headshot.png",
      skills: ["React", "Node.js", "Python", "AWS"],
      experience: "9 years",
    },
    {
      name: "Justin Lee",
      role: "Frontend Developer",
      background: "American",
      image: "/american-female-frontend-developer-professional-he.jpg",
      skills: ["React", "TypeScript", "CSS", "Figma"],
      experience: "10 years",
    },
    {
      name: "Jacob Chen",
      role: "Backend Developer",
      background: "Asian-American",
      image: "/asian-american-male-backend-developer-professional.jpg",
      skills: ["Java", "Spring", "PostgreSQL", "Docker"],
      experience: "9 years",
    },
    {
      name: "Xinyi Chen",
      role: "DevOps Engineer",
      background: "American",
      image: "/american-female-devops-engineer-professional-heads.jpg",
      skills: ["Kubernetes", "CI/CD", "Terraform", "GCP"],
      experience: "8 years",
    },
    {
      name: "Alina German",
      role: "Mobile Developer",
      background: "Asian",
      image: "/asian-male-mobile-developer-professional-headshot.jpg",
      skills: ["React Native", "Swift", "Kotlin", "Firebase"],
      experience: "6 years",
    },
    {
      name: "Alison Hodgson",
      role: "QA Engineer",
      background: "American",
      image: "/T09D9JDNBT7-U09DB1ZD9HR-de1fe1547ea8-512.png",
      skills: ["Selenium", "Jest", "Cypress", "API Testing"],
      experience: "8 years",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-card-foreground">Founding Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our founding team unites top talent from both Asian and American backgrounds, blending deep technical expertise and creative problem-solving to build innovative, high-quality software from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((developer, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={developer.image || "/placeholder.svg"}
                    alt={developer.name}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground">{developer.name}</h3>
                    <p className="text-accent text-sm font-medium">{developer.role}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {developer.background}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {developer.experience}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {developer.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
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
