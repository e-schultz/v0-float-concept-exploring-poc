import Link from "next/link"
import { getTimeline } from "@/lib/data"
import ConceptCard from "./concept-card"

interface TimelineViewProps {
  compact?: boolean
}

export default function TimelineView({ compact = false }: TimelineViewProps) {
  const timeline = getTimeline()
  const displayTimeline = compact ? timeline.slice(0, 2) : timeline

  return (
    <div className="space-y-8">
      {displayTimeline.map((timelineItem) => (
        <div key={timelineItem.date} className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="bg-pink-500 h-px flex-grow"></div>
            <h3 className="text-lg font-bold whitespace-nowrap">{timelineItem.date}</h3>
            <div className="bg-pink-500 h-px flex-grow"></div>
          </div>

          <div className="pl-4 border-l-2 border-pink-500/30">
            <div className="text-sm text-gray-400 mb-4">Source: {timelineItem.source}</div>

            <div className="grid grid-cols-1 gap-4">
              {timelineItem.concepts.slice(0, compact ? 3 : undefined).map((concept) => (
                <ConceptCard
                  key={concept.name}
                  concept={{
                    ...concept,
                    date: timelineItem.date,
                    source: timelineItem.source,
                    slug: concept.name.toLowerCase().replace(/\s+/g, "-"),
                  }}
                />
              ))}

              {compact && timelineItem.concepts.length > 3 && (
                <div className="text-center py-2">
                  <Link href="/timeline" className="text-sm text-pink-400 hover:text-pink-300">
                    View {timelineItem.concepts.length - 3} more concepts from this period
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
