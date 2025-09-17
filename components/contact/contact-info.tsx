import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-lg text-muted-foreground">
              We're here to help and answer any questions you might have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Send us an email anytime
                </p>
                <p className="text-accent font-medium">support@adskygenius.com</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Speak with our team
                </p>
                <p className="text-accent font-medium">+1 (747) 777-9999</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Our headquarters
                </p>
                <p className="text-accent font-medium">San Francisco, CA</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  We're available
                </p>
                <p className="text-accent font-medium">Mon-Fri 9AM-6PM EST</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-primary/5 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join the growing number of companies that trust AdSky Genius for their technology needs.
                Let's discuss how we can help bring your vision to life.
              </p>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">
                  <strong className="text-foreground">Response Time:</strong> We typically respond within 24 hours during business days.
                </p>
                <p>
                  <strong className="text-foreground">Project Consultations:</strong> Free initial consultations for all new projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}