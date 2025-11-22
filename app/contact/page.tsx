import type { Metadata } from "next"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { personalInfo, services } from "@/lib/data"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for consulting opportunities and collaborative projects",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Get In Touch */}
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Let's Work Together</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Open to consulting opportunities and collaborative projects in GIS, Remote Sensing, and Spatial Data
              Engineering
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-sm text-muted-foreground">{personalInfo.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">LinkedIn</h3>
                      <a
                        href={personalInfo.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Connect on LinkedIn →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What I Offer */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-balance">What I Offer</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center text-pretty">
              Professional services in geospatial engineering and spatial data analysis
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-balance">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-pretty">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center p-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-muted rounded-lg border">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Ready to Start a Project?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
              Whether you need custom GIS solutions, remote sensing analysis, or spatial data consulting, I'm here to
              help bring your geospatial projects to life.
            </p>
            <Button asChild size="lg">
              <a href={`mailto:${personalInfo.email}`}>Get In Touch</a>
            </Button>
          </section>
        </div>
      </div>
    </div>
  )
}
