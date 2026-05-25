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
      title: "Backend Engineering",
      description: "Building resilient APIs, learning scalable backend architecture, and exploring high-performance concurrency with Go.",
      color: "zinc"
    },
    {
      icon: Cpu,
      title: "Databases & Caching",
      description: "Working hands-on with PostgreSQL and Redis, while learning how modern backend systems manage and optimize data flows.",
      color: "zinc"
    },
    {
      icon: Database,
      title: "Infrastructure & Tooling",
      description: "Leveraging Git and modern backend workflows to consistently ship solid projects. I have a deep, growing interest in engineering developer tools and core infrastructure platforms.",
      color: "zinc"
    },
  ]

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-24 md:py-36 px-4 md:px-8 bg-[#050505] relative border-t border-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="font-mono text-zinc-500 text-[9px] mb-4 flex items-center gap-4 uppercase tracking-wider"
              >
                <span className="w-8 h-[1px] bg-zinc-800" />
                01 / ABOUT
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-none"
              >
                ENGINEERING ROBUST <br />BACKEND SERVICES<span className="text-zinc-800">.</span>
              </motion.h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="space-y-5 text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-lg"
            >
              <p>
                I'm a backend-focused engineer driven by the mechanics of the web. I obsess over building scalable APIs, optimizing database performance, and designing architectures that prioritize operational simplicity and speed.
              </p>
              <p className="text-zinc-500 text-sm border-l border-zinc-800 pl-4 italic">
                "Code is cheap, but reliable systems are invaluable. I build things to scale, last, and recover gracefully when they break."
              </p>
            </motion.div>
          </div>

          <div className="grid gap-4">
            {technicalFocus.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-zinc-950/60 p-6 md:p-8 rounded-2xl border border-zinc-900 hover:border-zinc-800 transition-all duration-300 relative overflow-hidden">
                  <div className="flex items-start gap-4 md:gap-6 relative z-10">
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 group-hover:text-white transition-colors duration-300">
                      <item.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed font-light">{item.description}</p>
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