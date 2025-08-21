"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.05 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="p-6 md:p-8 h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-500 relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />
        <CardContent className="p-0 relative z-10">
          <motion.div
            className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg`}
          >
            <skill.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </motion.div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{skill.name}</h3>
          <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs mb-4">
            {skill.category}
          </Badge>
        </CardContent>
      </Card>
    </motion.div>
  )
} 