import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Calendar, FileText, Video } from "lucide-react"

export function ClientCollaboration() {
  const collaborationTools = [
    {
      icon: MessageSquare,
      title: "Real-time Communication",
      description: "Slack channels for instant updates and quick questions throughout the project.",
    },
    {
      icon: Video,
      title: "Regular Video Calls",
      description: "Weekly progress meetings and sprint demos to keep you in the loop.",
    },
    {
      icon: FileText,
      title: "Transparent Documentation",
      description: "Detailed project documentation and progress reports accessible 24/7.",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Meetings scheduled around your availability across different time zones.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Client Collaboration</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe great software is built through great partnerships. Our collaborative approach ensures you're
                involved every step of the way, with transparent communication and regular feedback loops.
              </p>
            </div>

            <div className="grid gap-6">
              {collaborationTools.map((tool, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <tool.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-card-foreground">{tool.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
              alt="Client collaboration meeting"
              className="w-full h-auto rounded-lg shadow-2xl"
            />

            {/* Floating notification */}
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg max-w-xs">
              <div className="text-sm font-medium">Sprint Demo Today!</div>
              <div className="text-xs opacity-90">Ready to show latest features</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
