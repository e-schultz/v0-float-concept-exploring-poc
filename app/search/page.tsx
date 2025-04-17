"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Search, X } from "lucide-react"
import { getAllConcepts } from "@/lib/data"
import ConceptCard from "@/components/concept-card"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const concepts = getAllConcepts()

  const filteredConcepts = concepts.filter(
    (concept) =>
      concept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concept.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concept.quote.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm border-b border-pink-500/20 p-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <Link href="/" className="mr-4">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold">Search Concepts</h1>
        </div>
      </header>

      <main className="flex-1 p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search concepts, quotes, descriptions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-gray-900 border border-pink-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-400">
              {filteredConcepts.length} {filteredConcepts.length === 1 ? "result" : "results"} found
            </p>

            <div className="grid grid-cols-1 gap-4">
              {filteredConcepts.map((concept) => (
                <ConceptCard key={concept.slug} concept={concept} />
              ))}

              {filteredConcepts.length === 0 && searchQuery && (
                <div className="text-center py-8">
                  <p className="text-gray-400">No concepts found matching "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
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
