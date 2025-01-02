import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from 'lucide-react'

export function SocialProof() {
  return (
    <div className="container flex flex-col items-center py-16">
      <div className="flex -space-x-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Avatar key={i} className="border-2 border-background w-12 h-12">
            <AvatarImage src={`/placeholder.svg?text=${i}`} />
            <AvatarFallback>{i}</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <div className="flex items-center space-x-1 mt-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
        ))}
      </div>
      <p className="text-zinc-500 mt-2">Trusted by 27,000+ creators</p>
    </div>
  )
}

