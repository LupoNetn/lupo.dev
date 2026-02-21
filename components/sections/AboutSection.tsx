"use client"

import { motion } from "framer-motion"
import { Server, Cpu, Database } from "lucide-react"

interface AboutSectionProps {
  aboutRef: React.RefObject<HTMLElement>
}

export default function AboutSection({ aboutRef }: AboutSectionProps) {
  const technicalFocus = [
    {
      icon: Server,
      title: "Distributed Systems",
      description: "Interested in modular architectures and building networked systems focusing on high availability and reliability.",
      color: "purple"
    },
    {
      icon: Cpu,
      title: "Backend Infrastructure",
      description: "Focusing on low-level optimizations and robust server-side logic to handle demanding application loads.",
      color: "indigo"
    },
    {
      icon: Database,
      title: "Data Architecture",
      description: "Designing efficient schemas and persistence strategies to ensure data integrity across various backend services.",
      color: "blue"
    },
  ]

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-40 md:py-60 px-6 lg:px-12 bg-[#010101] relative border-t border-white/5 overflow-hidden"
    >
      {/* Background Aura */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="font-mono text-blue-500 text-[10px] mb-8 flex items-center gap-6 uppercase tracking-[0.5em]"
              >
                <span className="w-12 h-[1px] bg-blue-500/30" />
                ABOUT_ME
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl xl:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]"
              >
                CRAFTING <br />RELIABLE <span className="text-shine italic">BACKEND</span> SOLUTIONS<span className="text-zinc-800">.</span>
              </motion.h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-10 text-lg md:text-xl xl:text-2xl text-zinc-400 font-light leading-relaxed max-w-xl"
            >
              <p>
                I specialize in crafting the systems and logic that power modern web and <span className="text-white font-medium">mobile applications</span>. 
                With a deep interest in <span className="text-white font-medium">distributed systems</span> and <span className="text-white font-medium">backend infrastructure</span>, I focus on building maintainable architecture that handles complex logic and high traffic.
              </p>
              <p className="text-zinc-500 text-base md:text-lg border-l-2 border-blue-500/30 pl-6 md:pl-8 italic">
                "Writing clean, efficient code that prioritizes performance and long-term stability."
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6">
            {technicalFocus.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="glass-card p-6 md:p-10 rounded-[24px] md:rounded-[32px] hover:border-white/10 transition-all duration-700 hover:aura-glow-blue/10 relative overflow-hidden">
                  <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 relative z-10">
                    <div className="p-4 md:p-5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white group-hover:aura-glow-blue transition-all duration-700">
                      <item.icon size={24} strokeWidth={1} className="md:w-7 md:h-7" />
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                      <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-light">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}