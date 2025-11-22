"use client"

import { useEffect } from "react"
import { X, ExternalLink, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ProjectModalProps {
  project: {
    id: string
    title: string
    type?: string
    date: string
    institution: string
    description: string
    technologies: string[]
    link: string
    award?: string
    modalContent: {
      detailedDescription: string
      keyAchievements: string[]
      technicalApproach: string
      conferenceLink?: string
    }
  } | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (project) {
      document.addEventListener("keydown", handleEscape)
    }
    return () => document.removeEventListener("keydown", handleEscape)
  }, [project, onClose])

  if (!project) return null

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-[#1a1a1a] text-gray-100 border-gray-700 shadow-2xl">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold mb-2 text-balance text-white">{project.title}</DialogTitle>
              <p className="text-sm text-gray-400">
                {project.institution} • {project.date}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={onClose}
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {project.award && (
            <div className="flex items-center gap-2 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
              <Award className="h-5 w-5 text-yellow-500" />
              <span className="font-medium text-sm text-yellow-200">{project.award}</span>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">Overview</h3>
            <p className="text-gray-300 text-pretty">{project.modalContent.detailedDescription}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Key Achievements</h3>
            <ul className="space-y-2">
              {project.modalContent.keyAchievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1 flex-shrink-0">✓</span>
                  <span className="text-sm text-gray-300 text-pretty">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">Technical Approach</h3>
            <p className="text-sm text-gray-300 text-pretty">{project.modalContent.technicalApproach}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-200 hover:bg-gray-700">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t border-gray-700">
            <Button asChild className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white border-none">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View on CEPT Portfolio
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            {project.modalContent.conferenceLink && (
              <Button
                asChild
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
              >
                <a href={project.modalContent.conferenceLink} target="_blank" rel="noopener noreferrer">
                  Conference Link
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
