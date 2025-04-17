import Link from "next/link"
import { getAllConcepts } from "@/lib/data"

interface RelatedConceptsProps {
  currentSlug: string
}

export default function RelatedConcepts({ currentSlug }: RelatedConceptsProps) {
  const allConcepts = getAllConcepts()
  const currentConcept = allConcepts.find((c) => c.slug === currentSlug)

  if (!currentConcept) return null

  // Find related concepts based on keywords in description or reappearances
  const relatedConcepts = allConcepts
    .filter((concept) => concept.slug !== currentSlug)
    .map((concept) => {
      // Calculate relevance score based on shared words in descriptions
      const currentWords = currentConcept.description.toLowerCase().split(/\s+/)
      const conceptWords = concept.description.toLowerCase().split(/\s+/)
      const sharedWords = currentWords.filter((word) => word.length > 4 && conceptWords.includes(word)).length

      // Check if this concept appears in current concept's reappearances
      const isReferenced = currentConcept.reappearances?.some((r) =>
        r.connection.toLowerCase().includes(concept.name.toLowerCase()),
      )

      // Check if current concept appears in this concept's reappearances
      const isReferencing = concept.reappearances?.some((r) =>
        r.connection.toLowerCase().includes(currentConcept.name.toLowerCase()),
      )

      return {
        ...concept,
        relevance: sharedWords + (isReferenced ? 3 : 0) + (isReferencing ? 3 : 0),
      }
    })
    .filter((concept) => concept.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 3)

  if (relatedConcepts.length === 0) {
    // If no related concepts found by relevance, just show some random ones
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {allConcepts
          .filter((concept) => concept.slug !== currentSlug)
          .slice(0, 3)
          .map((concept) => (
            <Link
              key={concept.slug}
              href={`/concepts/${concept.slug}`}
              className="block rounded-lg border border-pink-500/30 bg-gray-900/50 hover:bg-gray-900/80 transition-colors p-4"
            >
              <h3 className="font-medium">{concept.name}</h3>
              <p className="text-sm text-gray-400 mt-1 line-clamp-2">{concept.description}</p>
            </Link>
          ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {relatedConcepts.map((concept) => (
        <Link
          key={concept.slug}
          href={`/concepts/${concept.slug}`}
          className="block rounded-lg border border-pink-500/30 bg-gray-900/50 hover:bg-gray-900/80 transition-colors p-4"
        >
          <h3 className="font-medium">{concept.name}</h3>
          <p className="text-sm text-gray-400 mt-1 line-clamp-2">{concept.description}</p>
        </Link>
      ))}
    </div>
  )
}
