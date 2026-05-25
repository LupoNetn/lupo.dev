"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Globe, ArrowUpRight } from "lucide-react"

interface ContactSectionProps {
  contactRef: React.RefObject<HTMLElement>
}

export default function ContactSection({ contactRef }: ContactSectionProps) {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/luponetn",
      label: "SOURCE",
      color: "zinc"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/daniel-lupo-o",
      label: "CONNECT",
      color: "zinc"
    },
    {
      name: "Twitter",
      icon: Globe,
      url: "https://twitter.com/oluwatobii.io",
      label: "LOG",
      color: "zinc"
    }
  ]

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-24 md:py-36 px-4 md:px-8 bg-[#050505] relative border-t border-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <div className="text-center mb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="font-mono text-zinc-500 text-[9px] mb-4 inline-flex items-center gap-4 uppercase tracking-wider"
          >
            <span className="w-8 h-[1px] bg-zinc-800" />
            04 / CONNECT
            <span className="w-8 h-[1px] bg-zinc-800" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-none"
          >
            GET IN TOUCH<span className="text-zinc-800">.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg text-zinc-400 font-light tracking-tight leading-relaxed mb-10">
              I am open to collaborations, technical discussions, and new engineering opportunities. Let's design reliable architectures together.
            </p>
          </motion.div>

          <div className="flex flex-col items-center">
            <motion.a
              href="mailto:daniellupo30@gmail.com"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group bg-zinc-950/60 p-5 md:p-6 rounded-2xl border border-zinc-900 hover:border-zinc-800 transition-all duration-300 flex items-center gap-4 md:gap-6 max-w-md w-full"
            >
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 group-hover:text-white transition-colors duration-300">
                <Mail size={18} strokeWidth={1.5} />
              </div>
              <div className="text-left flex-1">
                <div className="font-mono text-[8px] uppercase tracking-wider text-zinc-500 mb-0.5">Email Protocol</div>
                <div className="text-base md:text-lg font-bold text-white tracking-tight">
                  daniellupo30@gmail.com
                </div>
              </div>
              <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-white transition-colors duration-300" />
            </motion.a>
          </div>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-zinc-950/60 p-4 rounded-xl flex items-center justify-between group border border-zinc-900 hover:border-zinc-800 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  <link.icon size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[7px] font-mono uppercase tracking-wider text-zinc-600">{link.label}</div>
                  <div className="text-sm font-bold text-white tracking-tight">{link.name}</div>
                </div>
              </div>
              <ArrowUpRight size={12} className="text-zinc-700 group-hover:text-zinc-400 transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
