import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { VideoShowcase } from "@/components/video-showcase"
import { SocialProof } from "@/components/social-proof"
import { FeaturesSection } from "@/components/features-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-900 bg-dot-white/[0.2]">
      <div className="relative">
        <SiteHeader />
        <main>
          <HeroSection />
          <VideoShowcase />
          <SocialProof />
          <FeaturesSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}

