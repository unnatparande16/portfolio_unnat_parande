import { Metadata } from "next"
import { Code, Monitor, Layers, Wrench } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { skills, competencies } from "@/lib/data"

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills, software proficiency, and core competencies in GIS and Remote Sensing",
}

const domains = [
  "Urban Planning & Smart Cities",
  "Disaster Resilience & Risk Management",
  "Environmental Monitoring",
  "Land Subsidence Analysis",
  "Transportation Planning",
  "Air Quality Assessment",
  "Forest & Land Use Change Detection",
  "Geospatial Application Development",
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <section>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Technical Skills</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Comprehensive expertise in GIS, Remote Sensing, and spatial data engineering
            </p>
          </section>

          {/* Programming Languages */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Programming Languages</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.programming.map((skill) => (
                <Card key={skill.name} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{skill.name}</CardTitle>
                      <Badge variant={skill.proficiency === "Advanced" ? "default" : "secondary"}>
                        {skill.proficiency}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.useCases.map((useCase) => (
                        <Badge key={useCase} variant="outline" className="text-xs">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* GIS & Remote Sensing Software */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Monitor className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">GIS & Remote Sensing Software</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.software.map((skill) => (
                <Card key={skill.name} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{skill.name}</h3>
                        <Badge
                          variant={skill.proficiency === "Advanced" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {skill.proficiency}
                        </Badge>
                      </div>
                      {skill.type && (
                        <p className="text-xs text-muted-foreground">{skill.type}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Specialized Technologies */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Layers className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Specialized Technologies</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.specialized.map((skill) => (
                <Card key={skill.name} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground text-pretty">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Development & Tools */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Wrench className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Development & Tools</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skills.tools.map((tool) => (
                <Card key={tool.name} className="hover:shadow-sm transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-medium text-sm mb-1">{tool.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {tool.proficiency}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Core Competencies */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {competencies.map((competency) => (
                <Card key={competency.name} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-base">{competency.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-pretty">{competency.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Domain Expertise */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Domain Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {domains.map((domain) => (
                <Badge key={domain} variant="secondary" className="text-sm py-2 px-4">
                  {domain}
                </Badge>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
