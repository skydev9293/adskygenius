import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TeamHero } from "@/components/team/team-hero"
import { Leadership } from "@/components/team/leadership"
import { DevelopmentTeam } from "@/components/team/development-team"
import { TeamCulture } from "@/components/team/team-culture"
import { JoinTeam } from "@/components/team/join-team"

export const metadata: Metadata = {
  title: "Our Team - Expert Developers & Leaders",
  description: "Meet the exceptional talent behind AdSky Genius. Our diverse team of experienced developers, designers, and technology leaders delivering innovative solutions.",
  keywords: ["development team", "software engineers", "tech leadership", "expert developers", "IT professionals", "technology talent"],
  openGraph: {
    title: "Meet Our Expert Development Team",
    description: "Meet the exceptional talent behind AdSky Genius. Our diverse team of experienced developers, designers, and technology leaders.",
    url: "/team",
    type: "website",
  },
  twitter: {
    title: "Meet Our Expert Development Team",
    description: "Meet the exceptional talent behind AdSky Genius. Our diverse team of experienced developers, designers, and technology leaders.",
  },
}

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <TeamHero />
      <Leadership />
      <DevelopmentTeam />
      <TeamCulture />
      <JoinTeam />
      <Footer />
    </main>
  )
}
