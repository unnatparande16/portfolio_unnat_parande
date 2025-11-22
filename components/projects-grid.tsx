"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectModal } from "@/components/project-modal"

interface Project {
  id: string
  title: string
  type?: string
  date: string
  institution: string
  description: string
  technologies: string[]
  link: string
  image?: string
  award?: string
  modalContent: {
    detailedDescription: string
    keyAchievements: string[]
    technicalApproach: string
    conferenceLink?: string
  }
}

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 flex flex-col h-full"
          >
            <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-muted rounded-t-lg w-32 h-32 mx-auto">
              {project.image ? (
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-6xl opacity-20">🛰️</span>
                </div>
              )}
              {project.award && <Badge className="absolute top-2 right-2 bg-secondary">Award Winner</Badge>}
            </div>
            <CardHeader>
              <div className="space-y-2">
                {project.type && (
                  <Badge variant="outline" className="mb-2">
                    {project.type}
                  </Badge>
                )}
                <CardTitle className="text-xl group-hover:text-primary transition-colors text-balance">
                  {project.title}
                </CardTitle>
                <CardDescription>
                  {project.institution} • {project.date}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 mt-auto">
              <p className="text-sm text-muted-foreground text-pretty">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                <Button onClick={() => setSelectedProject(project)} variant="default" size="sm" className="flex-1">
                  View Details
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
