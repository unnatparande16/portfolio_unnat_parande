import { Metadata } from "next"
import { GraduationCap, AwardIcon, Calendar, Users } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { education, awards } from "@/lib/data"

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background, awards, and professional development",
}

export default function EducationPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Academic Background */}
          <section>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Academic Background</h1>
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

          {/* Honors & Awards */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Honors & Awards</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Recognition for academic excellence and research contributions
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow border-l-4 border-l-secondary">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <AwardIcon className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-balance">{award.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {award.institution || award.location} • {award.date || award.duration}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3 text-pretty">{award.description}</p>
                    {award.significance && (
                      <Badge variant="secondary">{award.significance}</Badge>
                    )}
                    {award.link && (
                      <a
                        href={award.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline block mt-2"
                      >
                        View Publication →
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Professional Development */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Professional Development</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Continuous learning through conferences, workshops, and seminars
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-sm mb-1">ILUS 2023</h3>
                      <p className="text-xs text-muted-foreground">International Land Use Symposium</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-sm mb-1">GEE Workshop</h3>
                      <p className="text-xs text-muted-foreground">Spatial Data Analysis with Google Earth Engine</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Urban Planning Seminar</h3>
                      <p className="text-xs text-muted-foreground">Urban Planning in India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Defence Expo 2022</h3>
                      <p className="text-xs text-muted-foreground">Conference in Gandhinagar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Positions of Responsibility */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Positions of Responsibility</h2>
            
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">Program Ambassador</CardTitle>
                    <CardDescription className="mt-1">
                      M.Tech Geomatics Program, CEPT University • November 2022 - December 2023
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 flex-shrink-0">▸</span>
                    <span className="text-pretty">Managed official social media handles for M.Tech Geomatics</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 flex-shrink-0">▸</span>
                    <span className="text-pretty">Conducted interviews with guests and faculty</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 flex-shrink-0">▸</span>
                    <span className="text-pretty">Created and edited promotional videos for program outreach</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
