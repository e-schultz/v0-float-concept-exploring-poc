import type { Concept, TimelineItem } from "./types"
import timelineData from "./timeline-data"

// Get all concepts from the timeline data
export function getAllConcepts(): Concept[] {
  const concepts: Concept[] = []

  timelineData.timeline.forEach((timelineItem) => {
    timelineItem.concepts.forEach((concept) => {
      concepts.push({
        ...concept,
        date: timelineItem.date,
        source: timelineItem.source,
        slug: concept.name.toLowerCase().replace(/\s+/g, "-"),
      })
    })
  })

  return concepts
}

// Get a specific concept by slug
export function getConceptBySlug(slug: string): Concept | undefined {
  return getAllConcepts().find((concept) => concept.slug === slug)
}

// Get the timeline data
export function getTimeline(): TimelineItem[] {
  return timelineData.timeline
}
