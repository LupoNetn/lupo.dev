"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ShieldCheck, Cpu } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  project: {
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
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Project Image Panel */}
        <div className={`lg:col-span-7 relative ${!isEven ? "lg:order-last" : ""}`}>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover opacity-50 group-hover:opacity-85 transition-opacity duration-300 grayscale group-hover:grayscale-0"
            />
            
            {/* Tech tags list on top of visual */}
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5 pointer-events-none">
              {project.tech.map(t => (
                <span key={t} className="bg-zinc-950/80 border border-zinc-900 px-2 py-0.5 rounded text-[8px] font-mono text-zinc-400 uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Technical Architecture Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">0{project.id} // DEPLOYMENT</span>
              <div className="h-[1px] flex-1 bg-zinc-900" />
            </div>
            <h3 className="text-3xl font-black text-white tracking-tight uppercase">
              {project.title}
            </h3>
            
            <div className="space-y-2">
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                {isExpanded ? project.longDescription : `${project.longDescription.slice(0, 140)}...`}
              </p>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[9px] font-mono uppercase tracking-wider text-zinc-500 hover:text-white transition-colors"
              >
                {isExpanded ? "[ Close Log ]" : "[ Read Architecture Log ]"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 py-4 border-y border-zinc-900">
            <div className="space-y-1">
              <div className="text-[8px] font-mono uppercase text-zinc-600 tracking-wider flex items-center gap-1.5">
                <Cpu size={10} className="text-zinc-500" /> STACK
              </div>
              <div className="text-xs text-zinc-300 font-mono tracking-tight">{project.tech[0]} / {project.tech[1]}</div>
            </div>
            <div className="space-y-1">
              <div className="text-[8px] font-mono uppercase text-zinc-600 tracking-wider flex items-center gap-1.5">
                <ShieldCheck size={10} className="text-zinc-500" /> CATEGORY
              </div>
              <div className="text-xs text-zinc-300 font-mono tracking-tight">{project.category}</div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              asChild
              className="bg-white text-black hover:bg-zinc-200 h-10 px-5 rounded-lg font-semibold uppercase tracking-wider text-[10px] transition-colors duration-200"
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Live Server
                <ExternalLink size={12} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 h-10 px-5 rounded-lg font-mono text-[10px] uppercase tracking-wider transition-colors duration-200"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={12} /> Source Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}