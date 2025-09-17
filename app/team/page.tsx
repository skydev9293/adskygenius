import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TeamHero } from "@/components/team/team-hero"
import { Leadership } from "@/components/team/leadership"
import { DevelopmentTeam } from "@/components/team/development-team"
import { TeamCulture } from "@/components/team/team-culture"
import { JoinTeam } from "@/components/team/join-team"

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
