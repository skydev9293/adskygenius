import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Users } from "lucide-react"

export function JobListings() {
  const openPositions = [
    {
      id: 1,
      title: "Senior React Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$120k - $160k",
      experience: "5+ years",
      description:
        "Join our frontend team to build exceptional user experiences with React and TypeScript. Work on cutting-edge projects with a diverse, global team.",
      requirements: [
        "5+ years of React development experience",
        "Strong TypeScript and JavaScript skills",
        "Experience with modern frontend tooling",
        "Collaborative mindset and excellent communication",
      ],
      benefits: ["Health Insurance", "Remote Work", "$2k Learning Budget", "Equity Options"],
    },
    {
      id: 2,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$130k - $170k",
      experience: "4+ years",
      description:
        "Help us scale our infrastructure and improve our deployment processes with modern DevOps practices. Lead automation initiatives across our growing platform.",
      requirements: [
        "4+ years of DevOps/Infrastructure experience",
        "Expertise in Kubernetes and Docker",
        "Cloud platforms (AWS, GCP, Azure)",
        "Infrastructure as Code (Terraform, CloudFormation)",
      ],
      benefits: ["Health Insurance", "Remote Work", "Conference Budget", "Stock Options"],
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Los Angeles",
      type: "Full-time",
      salary: "$100k - $140k",
      experience: "3+ years",
      description:
        "Create beautiful, intuitive designs that delight users and drive business results. Work closely with our diverse team to design for global audiences.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma and design systems",
        "Understanding of accessibility principles",
        "Experience with user research and testing",
      ],
      benefits: ["Health Insurance", "Design Tools Budget", "Flexible Hours", "Creative Freedom"],
    },
    {
      id: 4,
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote / Austin",
      type: "Full-time",
      salary: "$110k - $150k",
      experience: "4+ years",
      description:
        "Build scalable backend systems and APIs that power our applications. Work with modern technologies and contribute to architectural decisions.",
      requirements: [
        "4+ years of backend development experience",
        "Strong knowledge of Node.js, Python, or Java",
        "Database design and optimization skills",
        "API design and microservices architecture",
      ],
      benefits: ["Health Insurance", "Remote Work", "Tech Stipend", "Growth Opportunities"],
    },
    {
      id: 5,
      title: "Product Manager",
      department: "Product",
      location: "Remote / Seattle",
      type: "Full-time",
      salary: "$140k - $180k",
      experience: "5+ years",
      description:
        "Drive product strategy and execution for our growing platform. Work with cross-functional teams to deliver exceptional user experiences.",
      requirements: [
        "5+ years of product management experience",
        "Strong analytical and strategic thinking",
        "Experience with agile development processes",
        "Excellent communication and leadership skills",
      ],
      benefits: ["Health Insurance", "Equity Package", "Product Budget", "Leadership Development"],
    },
    {
      id: 6,
      title: "QA Engineer",
      department: "Quality",
      location: "Remote / Boston",
      type: "Full-time",
      salary: "$90k - $120k",
      experience: "3+ years",
      description:
        "Ensure the quality and reliability of our software products through comprehensive testing strategies and automation.",
      requirements: [
        "3+ years of QA engineering experience",
        "Test automation frameworks (Selenium, Cypress)",
        "API testing and performance testing",
        "Strong attention to detail and problem-solving",
      ],
      benefits: ["Health Insurance", "Remote Work", "Certification Budget", "Career Growth"],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Open Positions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join our growing team and help us build the future of technology. We offer competitive compensation,
            excellent benefits, and the opportunity to work with cutting-edge technologies.
          </p>
        </div>

        <div className="grid gap-8">
          {openPositions.map((position) => (
            <Card key={position.id} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Job Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="font-serif text-2xl font-bold text-card-foreground">{position.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <Badge variant="outline" className="text-accent border-accent">
                              {position.department}
                            </Badge>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{position.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{position.type}</span>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Apply Now</Button>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{position.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-card-foreground mb-3">Benefits</h4>
                        <div className="flex flex-wrap gap-2">
                          {position.benefits.map((benefit, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="space-y-6">
                    <div className="bg-background p-6 rounded-lg border border-border">
                      <h4 className="font-semibold text-foreground mb-4">Job Details</h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <DollarSign className="h-5 w-5 text-accent" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Salary Range</p>
                            <p className="text-muted-foreground text-sm">{position.salary}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users className="h-5 w-5 text-accent" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Experience</p>
                            <p className="text-muted-foreground text-sm">{position.experience}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-accent" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Location</p>
                            <p className="text-muted-foreground text-sm">{position.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <Button
                        variant="outline"
                        className="w-full text-accent border-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                      >
                        Save Job
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Position Match */}
        <div className="mt-16 text-center">
          <Card className="bg-card border-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold text-card-foreground mb-4">Don't see the right position?</h3>
              <p className="text-muted-foreground mb-6">
                We're always interested in connecting with talented individuals. Send us your resume and let us know how
                you'd like to contribute to our team.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Send Your Resume</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
