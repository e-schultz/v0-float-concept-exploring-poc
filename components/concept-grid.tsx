import { getAllConcepts } from "@/lib/data"
import ConceptCard from "./concept-card"

interface ConceptGridProps {
  featured?: boolean
  limit?: number
}

export default function ConceptGrid({ featured = false, limit }: ConceptGridProps) {
  let concepts = getAllConcepts()

  if (featured) {
    // Sort by most reappearances for featured concepts
    concepts = concepts.sort((a, b) => (b.reappearances?.length || 0) - (a.reappearances?.length || 0))
  }

  if (limit) {
    concepts = concepts.slice(0, limit)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {concepts.map((concept) => (
        <ConceptCard key={concept.slug} concept={concept} featured={featured} />
      ))}
    </div>
  )
}
