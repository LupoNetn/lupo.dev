"use client"

import { motion } from "framer-motion"
import { Cpu } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-20 px-6 lg:px-12 bg-[#010101] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-4 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-zinc-950 border border-zinc-900 rounded-full flex items-center justify-center aura-glow-blue/5">
              <Cpu size={16} className="text-blue-500 md:w-[18px] md:h-[18px]" />
            </div>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] text-zinc-100 font-bold text-shine">LUPO.DEV</span>
          </div>
          <p className="text-zinc-600 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em]">
            Backend Software Engineer
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-zinc-400">Status: Available</span>
          </div>
          <p className="text-zinc-600 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-center md:text-right">
            © {currentYear} LUPO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}