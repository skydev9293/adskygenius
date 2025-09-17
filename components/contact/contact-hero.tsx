"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function ContactHero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Contact AdSky Genius
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
              Ready to start your next project or join our exceptional team? Get in touch with us and let's create something amazing together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  Schedule a Call
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    Schedule a Call
                  </DialogTitle>
                  <DialogDescription className="text-left">
                    We appreciate your interest in scheduling a call with our team.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-amber-800 mb-1">No Available Slots</h4>
                        <p className="text-sm text-amber-700">
                          We currently don't have any available slots for scheduling calls.
                          Please wait for open slots or contact us through the form below.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      In the meantime, feel free to reach out to us using the contact form,
                      and we'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsDialogOpen(false)}
                      className="w-full"
                    >
                      Continue to Contact Form
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  )
}