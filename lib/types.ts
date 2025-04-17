export interface ConceptReappearance {
  date: string
  source: string
  connection: string
}

export interface Concept {
  name: string
  description: string
  quote?: string
  details?: string
  reappearances?: ConceptReappearance[]
  date: string
  source: string
  slug: string
}

export interface TimelineItem {
  date: string
  source: string
  concepts: Concept[]
}

export interface Timeline {
  timeline: TimelineItem[]
}
