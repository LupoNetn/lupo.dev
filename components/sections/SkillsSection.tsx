"use client"

import { motion } from "framer-motion"
import SkillCard from "@/components/ui/SkillCard"

interface Skill {
  name: string
  icon: any
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
      className="py-24 md:py-36 px-4 md:px-8 bg-[#050505] relative border-t border-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="font-mono text-zinc-500 text-[9px] mb-4 flex items-center gap-4 uppercase tracking-wider"
          >
            <span className="w-8 h-[1px] bg-zinc-800" />
            02 / EXPERTISE
            <span className="w-8 h-[1px] bg-zinc-800" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-none"
          >
            CORE TOOLKIT<span className="text-zinc-800">.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-zinc-500 font-mono text-[9px] uppercase tracking-wider max-w-xs"
          >
            Technologies and protocols I use to build robust system foundations.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}