import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="relative">
      <div className="container flex flex-col items-center text-center pt-20 pb-16">
        <Badge variant="outline" className="mb-4">
          <Bot className="mr-2 h-3 w-3" />
          Powered by GPT-4
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Create{" "}
          <span className="text-red-500">viral faceless videos</span>
          <br />
          on Auto-Pilot.
        </h1>
        <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400 mb-8">
          Create AI Videos in minutes. Our AI creation tool creates viral AI videos for you.
        </p>
        <Button size="lg" className="bg-red-500 hover:bg-red-600">
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 h-4 w-4"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Button>
      </div>
    </div>
  )
}

