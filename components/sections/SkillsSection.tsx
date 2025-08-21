"use client"

import { motion } from "framer-motion"
import { Target } from "lucide-react"
import SkillCard from "@/components/ui/SkillCard"
import { LucideIcon } from "lucide-react"

interface Skill {
  name: string
  icon: LucideIcon
  category: string
  color: string
}

interface SkillsSectionProps {
  skillsRef: React.RefObject<HTMLElement>
  skills: Skill[]
}

export default function SkillsSection({ skillsRef, skills }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-20 md:py-32 px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
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
            className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm text-cyan-300 px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-6 border border-cyan-500/20"
          >
            <Target className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            Technical Expertise
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8">
            Skills That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0f0c29] via-[#302b69] to-[#24243f]">
              Deliver Results
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of cutting-edge technologies and frameworks, refined through years of hands-on
            experience and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
} 