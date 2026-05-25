"use client"

import { motion } from "framer-motion"
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
  category: string
  year: string
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
      className="py-24 md:py-36 px-4 md:px-8 bg-[#050505] relative border-t border-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col xl:flex-row xl:items-end justify-between gap-6">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="font-mono text-zinc-500 text-[9px] mb-4 flex items-center gap-4 uppercase tracking-wider"
            >
              <span className="w-8 h-[1px] bg-zinc-800" />
              04 / PROJECTS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-none"
            >
              SYSTEMS ARCHITECTURES<span className="text-zinc-800">.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="xl:pb-2"
          >
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-wider max-w-xs text-left xl:text-right">
              Production-ready services built with computational efficiency, transactional safety, and robust APIs.
            </p>
          </motion.div>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}