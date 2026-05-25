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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="bg-zinc-950/60 p-4 md:p-6 border border-zinc-900 hover:border-zinc-800 rounded-xl flex items-center gap-4 transition-all duration-200">
        <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors duration-200">
          <skill.icon size={16} strokeWidth={1.5} />
        </div>
        
        <div className="space-y-0.5 text-left">
          <div className="font-mono text-[8px] uppercase tracking-wider text-zinc-500">
            {skill.category}
          </div>
          <h3 className="text-sm font-bold text-white transition-colors duration-200">
            {skill.name}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}