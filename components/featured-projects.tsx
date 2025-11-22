"use client"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/lib/data"
import { ProjectModal } from "@/components/project-modal"

function ProjectCard({
  project,
  onClick,
}: { project: (typeof projects)[0]; onClick: (p: (typeof projects)[0]) => void }) {
  const [showAllTags, setShowAllTags] = useState(false)

  return (
    <Card
      className="group overflow-hidden border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover-lift hover-glow cursor-pointer flex flex-col h-full"
      onClick={() => onClick(project)}
    >
      <div className="relative aspect-square overflow-hidden shrink-0">
        <Image
          src={project.image || "/placeholder.svg?height=400&width=600&query=tech+project"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <Button size="sm" className="w-full bg-primary text-primary-foreground">
            View Details
          </Button>
        </div>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
            <CardDescription className="mt-2 line-clamp-2">{project.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {(showAllTags ? project.technologies : project.technologies.slice(0, 3)).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {tech}
            </Badge>
          ))}
          {!showAllTags && project.technologies.length > 3 && (
            <Badge
              variant="outline"
              className="text-muted-foreground hover:bg-primary/10 hover:text-primary cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                setShowAllTags(true)
              }}
            >
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of my recent work and experiments.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/work">
            <Button
              variant="outline"
              size="lg"
              className="group border-primary/20 hover:bg-primary/5 hover-lift bg-transparent"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
