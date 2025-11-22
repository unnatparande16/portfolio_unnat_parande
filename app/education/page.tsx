import type { Metadata } from "next"
import { GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { education } from "@/lib/data"

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background and educational qualifications",
}

export default function EducationPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Education */}
          <section>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Education</h1>
            <p className="text-lg text-muted-foreground mb-12 text-pretty">
              Strong foundation in geomatics, GIS, and earth observation
            </p>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div>
                            <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                            <CardDescription className="text-base">
                              {edu.institution} • {edu.location}
                            </CardDescription>
                          </div>
                          <Badge variant="outline">{edu.duration}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm font-medium">Field of Study</p>
                        <p className="text-sm text-muted-foreground">{edu.fieldOfStudy}</p>
                      </div>
                      {edu.specialization && (
                        <div>
                          <p className="text-sm font-medium">Specialization</p>
                          <p className="text-sm text-muted-foreground">{edu.specialization}</p>
                        </div>
                      )}
                      {edu.grade && (
                        <div>
                          <p className="text-sm font-medium">Grade</p>
                          <p className="text-sm text-muted-foreground">{edu.grade}</p>
                        </div>
                      )}
                      {edu.status && (
                        <div>
                          <p className="text-sm font-medium">Status</p>
                          <Badge variant="secondary">{edu.status}</Badge>
                        </div>
                      )}
                    </div>

                    {edu.achievements && edu.achievements.length > 0 && (
                      <div>
                        <p className="text-sm font-medium mb-2">Achievements</p>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-secondary mt-1 flex-shrink-0">★</span>
                              <span className="text-pretty">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {edu.thesis && (
                      <div>
                        <p className="text-sm font-medium mb-1">Thesis</p>
                        <a
                          href={edu.thesis.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          {edu.thesis.title}
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
