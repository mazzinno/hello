import { useState } from "react"
import { motion } from "framer-motion"
import { Monitor } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution.",
    image: "https://placehold.co/800x600",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website",
    image: "https://placehold.co/800x600",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application",
    image: "https://placehold.co/800x600",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather application with location",
    image: "https://placehold.co/800x600",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: 5,
    title: "Restaurant Booking System",
    description: "An online reservation system for restaurants",
    image: "https://placehold.co/800x600",
    liveUrl: "https://example.com",
    featured: true,
  },
]

const ProjectShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      <div className="container mx-auto max-w-6xl">
        <div data-aos="fade-up" className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Nos réalisations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of web development projects. Each project represents my passion for creating beautiful,
            functional, and user-friendly digital experiences.
          </p>
        </div>

        {/* Project Grid */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
              <Card className="overflow-hidden h-full border-border transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={cn(
                      "object-cover w-full h-full transition-transform duration-500",
                      hoveredProject === project.id ? "scale-110" : "scale-100",
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-black/70 flex items-center justify-center gap-4 transition-opacity duration-300",
                      hoveredProject === project.id ? "opacity-100" : "opacity-0",
                    )}
                  >
                    <Button size="icon" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Monitor className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div data-aos="fade-up" className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Interested in working together? Lets build something amazing.</p>
          <Button size="lg">Get In Touch</Button>
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase;