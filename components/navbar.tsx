"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Terminal, Home, Briefcase, GraduationCap, Mail, Award } from "lucide-react"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Work", path: "/work", icon: Briefcase },
  { name: "Education", path: "/education", icon: GraduationCap },
  { name: "Achievements & more", path: "/achievements", icon: Award },
  { name: "Contact", path: "/contact", icon: Mail },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const main = document.querySelector("main")
    if (main) {
      if (scrolled) {
        main.style.transition = "padding-left 0.3s ease"
        main.style.paddingLeft = "80px" // Push content to accommodate sidebar
      } else {
        main.style.paddingLeft = "0"
      }
    }
  }, [scrolled])

  return (
    <TooltipProvider>
      <AnimatePresence mode="wait">
        {!scrolled ? (
          /* Top Navigation Bar */
          <motion.header
            key="top-nav"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
                    Unnat<span className="text-primary">.dev</span>
                  </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                  {navItems.map((item) => {
                    const isActive = pathname === item.path
                    return (
                      <Link
                        key={item.path}
                        href={item.path}
                        className={cn(
                          "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md hover:text-primary-foreground hover:bg-primary hover:shadow-md hover:scale-105",
                          isActive ? "text-primary bg-primary/10" : "text-muted-foreground",
                        )}
                      >
                        {item.name}
                        {isActive && (
                          <motion.div
                            layoutId="navbar-indicator"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                            initial={false}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </Link>
                    )
                  })}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                  <ThemeToggle />
                  <Button asChild size="sm" className="font-medium">
                    <Link href="/contact">Hire Me</Link>
                  </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                  <ThemeToggle />
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Toggle menu"
                  >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <motion.div
              initial={false}
              animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-border/40"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 text-sm font-medium rounded-md transition-colors",
                      pathname === item.path ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2 mt-2 border-t border-border/40">
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Hire Me
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.header>
        ) : (
          /* Sidebar Navigation (Scrolled State) */
          <motion.nav
            key="side-nav"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 p-3 rounded-2xl bg-background border border-border/40 shadow-lg"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.path
              return (
                <Tooltip key={item.path}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.path}
                      className={cn(
                        "p-3 rounded-xl transition-all duration-300 hover:scale-110",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="sr-only">{item.name}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="ml-2">
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              )
            })}
            <div className="w-full h-px bg-border/50 my-1" />
            <div className="flex flex-col gap-4 items-center">
              <ThemeToggle />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Nav is always top for usability, so we only switch on desktop */}
      {scrolled && (
        <div className="md:hidden fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                  <Terminal className="w-5 h-5" />
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          <motion.div
            initial={false}
            animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            className="overflow-hidden bg-background/95 backdrop-blur-md border-b border-border/40"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-md transition-colors",
                    pathname === item.path ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </TooltipProvider>
  )
}
