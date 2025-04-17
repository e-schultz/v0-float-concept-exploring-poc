import { Calendar } from "lucide-react"
import type { ConceptReappearance } from "@/lib/types"

interface ConceptReappearancesProps {
  reappearances: ConceptReappearance[]
}

export default function ConceptReappearances({ reappearances }: ConceptReappearancesProps) {
  return (
    <div className="space-y-4">
      {reappearances.map((reappearance, index) => (
        <div key={index} className="rounded-lg border border-pink-500/30 bg-gray-900/30 p-4 space-y-2">
          <div className="flex items-center text-sm text-gray-400">
            <Calendar size={14} className="mr-2" />
            <span>{reappearance.date}</span>
          </div>

          <div className="text-sm text-gray-300">
            <span className="text-gray-400">Source:</span> {reappearance.source}
          </div>

          <div className="pt-2 border-t border-pink-500/10 mt-2">
            <p className="text-sm text-gray-300">{reappearance.connection}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
