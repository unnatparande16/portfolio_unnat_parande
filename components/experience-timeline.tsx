import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from 'lucide-react'

interface Experience {
  company: string
  location: string
  position: string
  duration: string
  responsibilities: string[]
  badge?: string
}

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-start gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">{exp.position}</CardTitle>
                  <CardDescription className="text-base mt-1">
                    {exp.company} • {exp.location}
                  </CardDescription>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="outline">{exp.duration}</Badge>
                {exp.badge && (
                  <Badge variant="secondary" className="mt-2 block">
                    {exp.badge}
                  </Badge>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1 flex-shrink-0">▸</span>
                  <span className="text-pretty">{responsibility}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
