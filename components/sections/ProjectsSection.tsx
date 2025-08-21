"use client"

import { motion } from "framer-motion"
import { Lightbulb } from "lucide-react"
import ProjectCard from "@/components/ui/ProjectCard"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  image: string
  github: string
  live: string
  featured: boolean
  category: string
  year: string
  duration: string
  team: string
}

interface ProjectsSectionProps {
  projectsRef: React.RefObject<HTMLElement>
  projects: Project[]
}

export default function ProjectsSection({ projectsRef, projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-20 md:py-32 px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-gradient-to-br from-[#0f0c29] via-[#302b69] to-[#24243f] backdrop-blur-sm text-purple-300 px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-6 border border-purple-500/20"
          >
            <Lightbulb className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            Featured Work
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8">
            Projects That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0f0c24] via-[#302b69] to-[#24243f]">
              Make Impact
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how I've helped businesses transform their digital presence with innovative solutions that drive
            real results and user engagement.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
} 