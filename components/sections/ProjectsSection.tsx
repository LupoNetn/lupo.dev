"use client"

import { motion } from "framer-motion"
import { Globe, Cpu, Zap, Server, Code2 } from "lucide-react"
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
      className="py-40 md:py-60 px-6 lg:px-12 bg-[#010101] relative border-t border-white/5 overflow-hidden"
    >
      {/* Background Aura */}
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-40 flex flex-col xl:flex-row xl:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-mono text-blue-500 text-[10px] mb-8 flex items-center gap-6 uppercase tracking-[0.5em]"
            >
              <span className="w-12 h-[1px] bg-blue-500/30" />
              PROJECTS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl xl:text-9xl font-black text-white mb-10 tracking-tighter leading-[0.8]"
            >
              SELECTED <br /><span className="text-shine">WORKS</span><span className="text-zinc-800">.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="xl:pb-4"
          >
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.4em] max-w-sm text-right hidden xl:block">
              A collection of projects focused on scalable architecture and real-time systems.
            </p>
          </motion.div>
        </div>

        <div className="space-y-60">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}