"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"

interface Experience {
  id: number
  company: string
  role: string
  period: string
  description: string
  longDescription: string
  tech: string[]
  link: string
  category: string
}

interface ExperienceSectionProps {
  experienceRef: React.RefObject<HTMLElement>
  experiences: Experience[]
}

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Timeline connector line */}
      <div className="absolute left-[19px] top-12 bottom-0 w-[1px] bg-gradient-to-b from-zinc-800 to-transparent pointer-events-none hidden md:block" />

      <div className="flex gap-6 items-start">
        {/* Timeline dot */}
        <div className="hidden md:flex flex-col items-center pt-1.5">
          <div className="w-[10px] h-[10px] rounded-full border-2 border-zinc-700 bg-zinc-950 group-hover:border-blue-500/70 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.15)] transition-all duration-500 z-10 relative" />
        </div>

        {/* Card content */}
        <div className="flex-1 border border-zinc-900 rounded-2xl bg-zinc-950/50 p-6 md:p-8 hover:border-zinc-800 transition-all duration-500 group-hover:bg-zinc-950/80">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors duration-300">
                  <Briefcase size={14} className="text-zinc-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white tracking-tight uppercase">
                    {experience.company}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 pl-11">
                <span className="text-sm text-zinc-400 font-light">{experience.role}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">{experience.category}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pl-11 md:pl-0">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider bg-zinc-900/80 border border-zinc-800/80 px-3 py-1 rounded-full">
                {experience.period}
              </span>
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 transition-all duration-300"
              >
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

          {/* Description */}
          <div className="pl-0 md:pl-11 space-y-4">
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              {isExpanded ? experience.longDescription : experience.description}
            </p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-zinc-500 hover:text-white transition-colors duration-300"
            >
              {isExpanded ? (
                <>
                  <ChevronUp size={10} /> [ Collapse ]
                </>
              ) : (
                <>
                  <ChevronDown size={10} /> [ Read Full Scope ]
                </>
              )}
            </button>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {experience.tech.map(t => (
                <span
                  key={t}
                  className="bg-zinc-900/80 border border-zinc-800/60 px-2.5 py-1 rounded-md text-[8px] font-mono text-zinc-400 uppercase tracking-wider hover:text-zinc-200 hover:border-zinc-700 transition-colors duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ExperienceSection({ experienceRef, experiences }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      ref={experienceRef}
      className="py-24 md:py-36 px-4 md:px-8 bg-[#050505] relative border-t border-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="font-mono text-zinc-500 text-[9px] mb-4 flex items-center gap-4 uppercase tracking-wider"
          >
            <span className="w-8 h-[1px] bg-zinc-800" />
            03 / EXPERIENCE
            <span className="w-8 h-[1px] bg-zinc-800" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-none"
          >
            WORK HISTORY<span className="text-zinc-800">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-zinc-500 font-mono text-[9px] uppercase tracking-wider max-w-sm"
          >
            Production environments where I&apos;ve shipped mission-critical backend systems at scale.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
