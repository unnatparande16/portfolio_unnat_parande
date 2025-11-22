import { Card, CardContent } from "@/components/ui/card"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProjects } from "@/components/featured-projects"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Me Preview */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
              Geospatial professional with expertise in GIS, Remote Sensing, and spatial databases. Currently pursuing
              MSc in GIS and Earth Observation at University of Twente, with hands-on experience developing custom GIS
              applications at ESRI India and conducting advanced research in land subsidence mapping using InSAR
              techniques.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">ESRI India Experience</h3>
                      <p className="text-sm text-muted-foreground">
                        Developing GIS applications for municipal corporation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Distinguished Student Award</h3>
                      <p className="text-sm text-muted-foreground">University-level recognition at CEPT University</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Disaster Resilience Enthusiast</h3>
                      <p className="text-sm text-muted-foreground">Analysing and Modelling Disasters</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Distinguished Student Award, CEPT University 2025</h3>
                      <p className="text-sm text-muted-foreground">
                        University-level recognition for academic excellence
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <FeaturedProjects />
    </div>
  )
}
