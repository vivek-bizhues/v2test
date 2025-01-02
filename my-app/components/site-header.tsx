import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-2 mr-4">
          <Sparkles className="h-6 w-6 text-red-500" />
          <span className="font-bold text-xl">MyShortStory</span>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
          <Link href="/pricing" className="transition-colors hover:text-foreground/80">
            Pricing
          </Link>
          <Link href="/blog" className="transition-colors hover:text-foreground/80">
            Blog
          </Link>
          <Link href="/affiliate" className="transition-colors hover:text-foreground/80">
            Affiliate Program
            <span className="ml-1 rounded-full bg-red-500 px-1.5 py-0.5 text-xs text-white">
              New
            </span>
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button size="sm" className="bg-red-500 hover:bg-red-600">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}

