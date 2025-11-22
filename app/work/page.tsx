import type { Metadata } from "next"
import { experiences, projects } from "@/lib/data"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { ProjectsGrid } from "@/components/projects-grid"

export const metadata: Metadata = {
  title: "Work",
  description: "Professional experience and projects in GIS, Remote Sensing, and spatial data engineering",
}

export default function WorkPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Work */}
          <section>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Work</h1>
            <p className="text-lg text-muted-foreground mb-12 text-pretty">
              Real-world experience developing GIS applications and conducting research
            </p>
            <ExperienceTimeline experiences={experiences} />
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Projects</h2>
            <p className="text-lg text-muted-foreground mb-12 text-pretty">
              Research projects from CEPT University showcasing expertise in geospatial analysis
            </p>
            <ProjectsGrid projects={projects} />
          </section>
        </div>
      </div>
    </div>
  )
}
