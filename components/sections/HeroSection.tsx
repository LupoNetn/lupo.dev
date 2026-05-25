"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Cpu, Terminal, Shield, ArrowDown } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLElement>
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ heroRef, scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden pt-28 pb-16 bg-[#050505]"
    >
      {/* Immersive Background Effects (Static, High Performance) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-900/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text Content */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col items-center xl:items-start text-center xl:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full mb-6 font-mono text-[9px] uppercase tracking-wider text-zinc-400"
            >
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span>Available for Full-time Roles // Remote</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h1 className="text-6xl md:text-7xl xl:text-8xl font-black text-white mb-4 tracking-tighter leading-[0.9]">
                LUPO<span className="text-zinc-700">.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="max-w-xl text-lg md:text-xl text-zinc-400 font-light leading-relaxed tracking-tight mb-8"
            >
              Software Engineer focused on <span className="text-white font-medium">high-performance backend systems</span>, 
              distributed architectures, and developer tooling. Building reliable infrastructure designed to scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap justify-center xl:justify-start gap-4"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-white text-black hover:bg-zinc-200 h-11 px-6 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
              >
                <span className="flex items-center gap-2">
                  Projects
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 h-11 px-6 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
              >
                Connect
              </Button>
            </motion.div>

            {/* Live Node Monitor Widget */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-8 p-4 bg-zinc-950/80 border border-zinc-900 rounded-2xl w-full max-w-md font-mono text-[10px] text-zinc-500 space-y-2.5 text-left"
            >
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-zinc-300 font-semibold tracking-wider">LIVE NODE MONITOR</span>
                </div>
                <span className="text-zinc-700">US-EAST-1</span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div className="space-y-0.5">
                  <div className="text-zinc-600 tracking-wider">SYSTEM STATUS</div>
                  <div className="text-emerald-400 font-medium tracking-tight">OPERATIONAL</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-zinc-600 tracking-wider">API LATENCY</div>
                  <div className="text-zinc-300 font-medium tracking-tight">~14ms</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-zinc-600 tracking-wider">UPTIME</div>
                  <div className="text-zinc-300 font-medium tracking-tight">99.99%</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-zinc-600 tracking-wider">DEPLOYMENT</div>
                  <div className="text-zinc-300 font-medium tracking-tight">STABLE // V1.2</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual - Sleek Dark Frame */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-12 xl:col-span-5 relative mt-8 xl:mt-0 flex justify-center"
          >
            <div className="relative w-full max-w-[320px] aspect-[4/5] p-1.5 bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-[#080808] rounded-2xl overflow-hidden relative group">
                <Image 
                  src="/me.jpg" 
                  alt="Lupo Profile" 
                  fill 
                  className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-95 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Tech specifications minimal layout */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">ROLE</span>
                    <span className="text-[11px] font-bold text-white uppercase tracking-tight">Backend Dev</span>
                  </div>
                  <div className="flex flex-col items-end gap-0.5">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">ENV</span>
                    <span className="font-mono text-[10px] text-zinc-300 font-medium uppercase tracking-tight">GO / NODE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Clean Scroll Down */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
        onClick={() => scrollToSection("about")}
      >
        <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-wider">Scroll to view</span>
        <ArrowDown size={10} className="text-zinc-500 animate-bounce" />
      </motion.div>
    </section>
  )
}