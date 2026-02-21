"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface SkillCardProps {
  skill: {
    name: string
    icon: LucideIcon
    category: string
    color: string
  }
  index: number
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="glass-card p-4 md:p-10 rounded-[20px] md:rounded-[32px] hover:border-white/10 transition-all duration-700 hover:aura-glow-blue/10 flex flex-col items-center text-center group-hover:-translate-y-2">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="w-12 h-12 md:w-20 md:h-20 bg-white/[0.03] border border-zinc-900 rounded-[16px] md:rounded-[24px] flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:bg-blue-600 transition-all duration-700 group-hover:aura-glow-blue group-hover:rotate-[15deg] mb-4 md:mb-8">
          <skill.icon size={20} strokeWidth={1} className="md:w-8 md:h-8" />
        </div>
        
        <div className="space-y-2 md:space-y-4">
          <div className="font-mono text-[7px] md:text-[9px] uppercase tracking-[0.4em] text-blue-500/50 group-hover:text-blue-400 transition-colors">
            {skill.category}
          </div>
          <h3 className="text-sm md:text-2xl font-black text-white px-2 tracking-tight group-hover:text-shine">
            {skill.name}
          </h3>
          
          <div className="flex justify-center pt-1 md:pt-2">
            <div className="flex gap-1">
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-0.5 h-0.5 md:w-1 md:h-1 rounded-full ${i <= 3 ? "bg-blue-500/40" : "bg-zinc-800"}`} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Animated border bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-blue-500 rounded-full group-hover:w-[50%] transition-all duration-700" />
      </div>
    </motion.div>
  )
}