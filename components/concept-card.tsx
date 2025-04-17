import Link from "next/link"
import { Calendar } from "lucide-react"
import type { Concept } from "@/lib/types"

interface ConceptCardProps {
  concept: Concept
  featured?: boolean
}

export default function ConceptCard({ concept, featured = false }: ConceptCardProps) {
  return (
    <Link
      href={`/concepts/${concept.slug}`}
      className={`block rounded-xl border border-pink-500/30 bg-gray-900/50 hover:bg-gray-900/80 transition-colors overflow-hidden ${
        featured ? "h-full" : ""
      }`}
    >
      <div className="p-4 space-y-2">
        <h3 className="font-bold text-lg">{concept.name}</h3>

        <div className="flex items-center text-xs text-gray-400">
          <Calendar size={12} className="mr-1" />
          <span>{concept.date}</span>
        </div>

        <p className="text-sm text-gray-300 line-clamp-2">{concept.description}</p>

        {concept.quote && (
          <div className="pt-2 border-t border-pink-500/10 mt-2">
            <p className="text-sm italic text-gray-300 line-clamp-1">"{concept.quote}"</p>
          </div>
        )}
      </div>
    </Link>
  )
}
