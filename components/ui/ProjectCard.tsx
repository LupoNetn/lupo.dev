"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Calendar, Users } from "lucide-react"

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

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`grid lg:grid-cols-2 gap-10 md:gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
    >
      {/* Project Image */}
      <motion.div
        className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative overflow-hidden rounded-xl md:rounded-3xl shadow-2xl border border-gray-700">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Overlay with buttons */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex gap-3 md:gap-4"
          >
            <Button className="bg-gray-800/90 text-white hover:bg-gray-700 backdrop-blur-sm flex-1 text-sm md:text-base border border-gray-600 px-3 py-2 md:px-4 md:py-2.5">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
            <Button className="bg-cyan-600/90 hover:bg-cyan-500 backdrop-blur-sm flex-1 text-sm md:text-base px-3 py-2 md:px-4 md:py-2.5">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Project Details */}
      <motion.div
        className={`space-y-6 md:space-y-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div>
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <Badge className=" bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]text-white text-xs md:text-sm">
              {project.category}
            </Badge>
            <span className="text-xs md:text-sm text-gray-400">{project.year}</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 md:mb-6 leading-tight">
            {project.title}
          </h3>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
            {project.longDescription}
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3 md:mb-4 uppercase tracking-wide">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {project.tech.map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: techIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Badge
                  variant="outline"
                  className="bg-gray-800 border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-300 transition-colors text-xs md:text-sm"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{project.team}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
} 