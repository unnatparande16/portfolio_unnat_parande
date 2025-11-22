"use client"
import { ArrowRight, Github, Linkedin, Mail, FileText, Terminal, Leaf, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Available for new projects
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Hi, I'm <span className="text-primary">{personalInfo.name}</span>
              </h1>
              <h2 className="text-2xl font-medium text-muted-foreground">
                {personalInfo.title} & <span className="text-primary/80">Tech Enthusiast</span>
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">{personalInfo.bio}</p>
              {/* Capitalized 'Understanding' in the tagline */}
              <p className="text-lg font-medium italic text-primary/80">
                "Understanding our world, one pixel at a time..."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/work">
                <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground hover-lift">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-primary/20 hover:bg-primary/5 hover-lift bg-transparent"
                >
                  Contact Me
                </Button>
              </Link>
            </div>

            <div className="flex gap-4 text-muted-foreground">
              <Link
                href={personalInfo.social.github}
                target="_blank"
                className="hover:text-primary transition-colors hover-lift"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={personalInfo.social.linkedin}
                target="_blank"
                className="hover:text-primary transition-colors hover-lift"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors hover-lift">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="/resume.pdf" target="_blank" className="hover:text-primary transition-colors hover-lift">
                <FileText className="h-6 w-6" />
                <span className="sr-only">Resume</span>
              </Link>
            </div>
          </div>

          {/* Visual Element - Abstract Tech/Nature Blend */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-3xl rotate-3 backdrop-blur-sm border border-white/10" />
              <div className="absolute inset-0 bg-card/50 backdrop-blur-md rounded-3xl -rotate-3 border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-2 gap-4 p-8 w-full h-full opacity-80">
                  <div className="bg-primary/10 rounded-2xl p-4 flex items-center justify-center hover:bg-primary/20 transition-colors duration-500">
                    <Terminal className="w-12 h-12 text-primary" />
                  </div>
                  <div className="bg-blue-500/10 rounded-2xl p-4 flex items-center justify-center hover:bg-blue-500/20 transition-colors duration-500">
                    <Globe className="w-12 h-12 text-blue-500" />
                  </div>
                  <div className="bg-emerald-500/10 rounded-2xl p-4 flex items-center justify-center hover:bg-emerald-500/20 transition-colors duration-500">
                    <Leaf className="w-12 h-12 text-emerald-500" />
                  </div>
                  <div className="bg-purple-500/10 rounded-2xl p-4 flex items-center justify-center hover:bg-purple-500/20 transition-colors duration-500">
                    <div className="text-4xl font-bold text-purple-500">{"</>"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
