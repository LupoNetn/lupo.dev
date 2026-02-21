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
      className="py-20 md:py-60 px-6 lg:px-12 bg-[#010101] relative border-t border-white/5 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] mask-radial" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-mono text-blue-500 text-[10px] mb-8 flex items-center gap-6 uppercase tracking-[0.5em]"
          >
            <span className="w-12 h-[1px] bg-blue-500/30" />
            TECHNICAL_TOOLKIT
            <span className="w-12 h-[1px] bg-blue-500/30" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none"
          >
            TECHNICAL <span className="text-shine">STACK</span><span className="text-zinc-800">.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] max-w-md"
          >
            A curated list of technologies I use to build scalable and modern applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}