"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MessageCircle, Send, Globe, ArrowUpRight } from "lucide-react"

interface ContactSectionProps {
  contactRef: React.RefObject<HTMLElement>
}

export default function ContactSection({ contactRef }: ContactSectionProps) {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/luponetn",
      label: "Fetch_Source",
      color: "zinc"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/luponetn",
      label: "Establish_Sync",
      color: "blue"
    },
    {
      name: "Twitter",
      icon: Globe,
      url: "https://twitter.com/luponetn",
      label: "Public_Log",
      color: "cyan"
    }
  ]

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-40 md:py-60 px-6 lg:px-12 bg-[#010101] relative border-t border-white/5 overflow-hidden"
    >
      {/* Immersive Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <div className="text-center mb-40 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-mono text-blue-500 text-[10px] mb-8 inline-flex items-center gap-6 uppercase tracking-[0.5em]"
          >
            <span className="w-12 h-[1px] bg-blue-500/30" />
            CONNECT
            <span className="w-12 h-[1px] bg-blue-500/30" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl xl:text-[10rem] font-black text-white mb-16 tracking-tighter leading-[0.8]"
          >
            LET'S <span className="text-shine">TALK</span>.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl xl:text-4xl text-zinc-400 font-light tracking-tight leading-tight mb-20 px-4">
              I'm open to <span className="text-white italic">collaborations</span> and new opportunities. 
              Let's build something scalable and reliable together.
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-12">
            <motion.a
              href="mailto:luponetn@gmail.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative inline-flex items-center justify-center p-1 font-black text-white transition-all duration-1000 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[30px] md:rounded-[40px] aura-glow-blue hover:scale-105 active:scale-95"
            >
              <div className="relative px-6 md:px-12 py-6 md:py-10 bg-[#010101] rounded-[29px] md:rounded-[39px] flex items-center gap-4 md:gap-6">
                <div className="p-4 md:p-5 bg-blue-600 rounded-full group-hover:aura-glow-blue transition-all duration-700">
                  <Mail size={24} strokeWidth={1.5} className="md:w-8 md:h-8" />
                </div>
                <div className="text-left">
                  <div className="text-[8px] md:text-[10px] font-mono uppercase tracking-[0.4em] text-blue-500 mb-1 md:mb-2">Get in touch</div>
                  <div className="text-xl md:text-3xl xl:text-5xl border-b-2 border-transparent group-hover:border-blue-500/50 transition-all duration-700 font-bold tracking-tighter">
                    luponetn@gmail.com
                  </div>
                </div>
                <ArrowUpRight size={20} className="md:w-6 md:h-6 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-700 ml-4 md:ml-6" />
              </div>
            </motion.a>
          </div>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 md:p-8 rounded-[24px] md:rounded-[32px] flex items-center justify-between group hover:border-white/10 transition-all duration-700 hover:-translate-y-1 md:hover:-translate-y-2 hover:aura-glow-blue/10"
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl text-zinc-400 group-hover:text-blue-500 transition-colors duration-700">
                  <link.icon size={20} strokeWidth={1} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="text-[8px] md:text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-600 group-hover:text-blue-500/50 transition-colors">{link.label}</div>
                  <div className="text-lg md:text-xl font-bold text-white tracking-tight">{link.name}</div>
                </div>
              </div>
              <ArrowUpRight size={14} className="md:w-4 md:h-4 text-zinc-800 group-hover:text-blue-500 transition-all duration-700" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
