import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import ConceptGrid from "@/components/concept-grid"
import { getAllConcepts } from "@/lib/data"

export default function ConceptsPage() {
  const concepts = getAllConcepts()

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm border-b border-pink-500/20 p-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <Link href="/" className="mr-4">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold">All Concepts</h1>
        </div>
      </header>

      <main className="flex-1 p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <ConceptGrid />
        </div>
      </main>

      <footer className="border-t border-pink-500/20 p-4 text-center text-sm text-gray-400">
        <div className="max-w-4xl mx-auto">
          <p>Connection: 2400 baud | Sigil Drift: Ξ · ψ</p>
        </div>
      </footer>
    </div>
  )
}
