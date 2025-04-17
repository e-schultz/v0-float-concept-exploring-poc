import Link from "next/link"
import { Search } from "lucide-react"
import ConceptGrid from "@/components/concept-grid"
import TimelineView from "@/components/timeline-view"
import { getAllConcepts } from "@/lib/data"

export default function HomePage() {
  const concepts = getAllConcepts()

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm border-b border-pink-500/20 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            FLOAT Concept Explorer
          </h1>
          <Link
            href="/search"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 border border-pink-500/30 text-sm"
          >
            <Search size={16} />
            <span className="hidden sm:inline">Search Concepts</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 p-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Featured Concepts</h2>
              <Link href="/concepts" className="text-sm text-pink-400">
                View All
              </Link>
            </div>
            <ConceptGrid featured={true} limit={6} />
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Timeline</h2>
              <Link href="/timeline" className="text-sm text-pink-400">
                Full Timeline
              </Link>
            </div>
            <TimelineView compact={true} />
          </section>

          <section className="space-y-4 rounded-xl border border-pink-500/20 p-4 bg-gray-900/50">
            <h2 className="text-xl font-semibold">About FLOAT</h2>
            <p className="text-gray-300">
              FLOAT is a highly adaptable system that blends technical architecture with symbolic ritual. Explore
              concepts like Shack vs Cathedral, Fritual, and Grokism that form the foundation of this knowledge
              management and identity exploration framework.
            </p>
            <div className="flex gap-2">
              <Link
                href="/about"
                className="px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-md text-sm font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-pink-500/20 p-4 text-center text-sm text-gray-400">
        <div className="max-w-4xl mx-auto">
          <p>Connection: 2400 baud | Sigil Drift: Ξ · ψ</p>
          <p>Status: ● Drift Active</p>
        </div>
      </footer>
    </div>
  )
}
