import Link from "next/link"
import { ChevronLeft, Calendar } from "lucide-react"
import { getConceptBySlug, getAllConcepts } from "@/lib/data"
import RelatedConcepts from "@/components/related-concepts"
import ConceptReappearances from "@/components/concept-reappearances"

export async function generateStaticParams() {
  const concepts = getAllConcepts()
  return concepts.map((concept) => ({
    slug: concept.slug,
  }))
}

export default function ConceptPage({ params }: { params: { slug: string } }) {
  const concept = getConceptBySlug(params.slug)

  if (!concept) {
    return <div>Concept not found</div>
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm border-b border-pink-500/20 p-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <Link href="/concepts" className="mr-4">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold truncate">{concept.name}</h1>
        </div>
      </header>

      <main className="flex-1 p-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              {concept.name}
            </h1>

            <div className="flex items-center text-sm text-gray-400">
              <Calendar size={16} className="mr-2" />
              <span>First appeared: {concept.date}</span>
            </div>

            <div className="rounded-xl overflow-hidden border border-pink-500/30 bg-gray-900/50">
              <div className="p-4 border-b border-pink-500/20 bg-gray-900/80">
                <p className="italic text-lg text-gray-200">"{concept.quote}"</p>
              </div>
              <div className="p-4">
                <p className="text-gray-300">{concept.description}</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Details</h2>
              <p className="text-gray-300">{concept.details}</p>
            </div>

            {concept.reappearances && concept.reappearances.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Reappearances</h2>
                <ConceptReappearances reappearances={concept.reappearances} />
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Related Concepts</h2>
            <RelatedConcepts currentSlug={params.slug} />
          </div>
        </div>
      </main>

      <footer className="border-t border-pink-500/20 p-4 text-center text-sm text-gray-400">
        <div className="max-w-4xl mx-auto">
          <p>
            NODE: /glitchChorus/{concept.source.replace(/[^a-zA-Z0-9]/g, "")}/
            {concept.name.toLowerCase().replace(/\s+/g, "")}
          </p>
        </div>
      </footer>
    </div>
  )
}
