"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Globe, Zap } from "lucide-react"
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
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-150px" }}
      className="relative group"
    >
      <div className="grid lg:grid-cols-12 gap-12 xl:gap-24 items-center">
        {/* Project Image Cluster */}
        <div className={`lg:col-span-12 xl:col-span-7 relative ${!isEven ? "xl:order-last" : ""}`}>
          <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden border border-white/5 aura-glow-blue/10 bg-zinc-950">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2s] ease-out grayscale group-hover:grayscale-0"
            />
            
            {/* Immersive HUD Overlay */}
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between items-start">
                <div className="glass-card px-3 md:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse blur-[1px]" />
                  <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-white">Live</span>
                </div>
                <div className="text-[8px] md:text-[10px] font-mono text-white/40 tracking-widest bg-black/40 backdrop-blur-xl px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/5">
                  ID: 0x{project.id.toString(16).toUpperCase().padStart(4, '0')}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 md:gap-3">
                {project.tech.map(t => (
                  <span key={t} className="glass-card px-3 md:px-4 py-1.5 md:py-2 rounded-full text-zinc-300 font-mono text-[8px] md:text-[9px] uppercase tracking-widest border border-white/10 group-hover:border-blue-500/50 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Glitchy Hover Light */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </div>
          
          {/* Background Highlight Floating Element */}
          <div className={`absolute -z-10 w-full h-full border-2 border-blue-500/10 rounded-[20px] md:rounded-[40px] transition-all duration-1000 group-hover:scale-105 group-hover:rotate-2 group-hover:translate-x-4 ${isEven ? "left-4 md:left-8" : "-left-4 md:-left-8"}`} />
        </div>

        {/* Project Content */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-4 md:gap-6">
              <span className="font-mono text-[9px] md:text-[10px] text-blue-500 uppercase tracking-[0.5em]">0{project.id} // BUILD</span>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <h3 className="text-4xl md:text-6xl xl:text-8xl font-black text-white tracking-tighter leading-none transition-all duration-700 group-hover:text-shine">
              {project.title.toUpperCase()}
            </h3>
            
            <div className="space-y-4">
              <p className="text-lg md:text-xl xl:text-2xl text-zinc-400 font-light leading-relaxed tracking-tight">
                {isExpanded ? project.longDescription : `${project.longDescription.slice(0, 120)}...`}
              </p>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs uppercase font-mono tracking-[0.3em] text-blue-500 hover:text-white transition-colors"
              >
                {isExpanded ? "[ Collapse_View ]" : "[ Read_Full_Log ]"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-10 py-6 md:py-10 border-y border-white/5">
            <div className="space-y-2 md:space-y-3">
              <div className="text-[8px] md:text-[9px] font-mono uppercase text-zinc-500 tracking-[0.4em] flex items-center gap-2 md:gap-3">
                <Zap size={12} className="text-blue-500" /> Architecture
              </div>
              <div className="text-base md:text-lg text-zinc-100 font-mono tracking-tighter">{project.tech[0]} + {project.tech[1]}</div>
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="text-[8px] md:text-[9px] font-mono uppercase text-zinc-500 tracking-[0.4em] flex items-center gap-2 md:gap-3">
                <Globe size={12} className="text-purple-500" /> Platform
              </div>
              <div className="text-base md:text-lg text-zinc-100 font-mono tracking-tighter capitalize">{project.category}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Button
              asChild
              className="bg-white text-black hover:bg-blue-600 hover:text-white h-16 md:h-20 px-8 md:px-10 rounded-full font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px] transition-all duration-700 aura-glow-blue/20 group/btn"
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                Live Preview
                <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/5 text-zinc-500 hover:text-white hover:bg-white/5 h-16 md:h-20 px-8 md:px-10 rounded-full font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] transition-all duration-700"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <Github size={16} /> Source Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}