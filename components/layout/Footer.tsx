"use client"

import { motion } from "framer-motion"
import { Cpu } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2">
            <Cpu size={12} className="text-zinc-400" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-300 font-medium">LUPO.DEV</span>
          </div>
          <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-wider">
            Backend Software Engineer
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">System Live // US-East-1</span>
          </div>
          <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-wider">
            © {currentYear} LUPO.
          </p>
        </div>
      </div>
    </footer>
  )
}