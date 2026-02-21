"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Network, Zap, ShieldCheck } from "lucide-react"
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
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative overflow-hidden pt-32 pb-20 bg-[#010101]"
    >
      {/* Immersive Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600 rounded-full blur-[150px]" 
        />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay" />
        
        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.03] to-transparent h-40 w-full animate-scan pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Hero Text Content */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col items-center xl:items-start text-center xl:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-full mb-10 overflow-hidden group"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full aura-glow-blue animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400 group-hover:text-zinc-100 transition-colors">
                Available: <span className="text-blue-500">Core_Architect_v2</span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-6xl md:text-8xl xl:text-[11rem] font-black text-white mb-6 tracking-tighter leading-[0.8]">
                <span className="text-shine">LUPO</span>
                <span className="text-blue-600 drop-shadow-[0_0_30px_rgba(37,99,235,0.4)]">.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="max-w-2xl text-lg md:text-2xl xl:text-3xl text-zinc-400 font-light leading-snug tracking-tight mb-12"
            >
              Building <span className="text-white italic underline-offset-8 decoration-blue-500/40 decoration-1 underline">scalable backend systems</span> for 
              web and mobile applications with a focus on performance and reliability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap justify-center xl:justify-start gap-4 md:gap-6"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-white text-black hover:bg-blue-600 hover:text-white px-8 md:px-12 py-6 md:py-9 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.3em] group relative overflow-hidden transition-all duration-700 aura-glow-blue"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Projects
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-zinc-800 text-zinc-500 hover:text-white hover:bg-white/5 px-8 md:px-12 py-6 md:py-9 rounded-full text-xs md:text-sm font-black tracking-[0.3em] backdrop-blur-sm transition-all duration-700"
              >
                Connect
              </Button>
            </motion.div>

            {/* Technical Metadata Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 md:mt-24 w-full grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 border-t border-white/5 pt-12"
            >
              {[
                { label: "Main Stack", value: "Go / Node.js", icon: Zap },
                { label: "Systems", value: "Real-time / WebSocket", icon: Network },
                { label: "Database", value: "PostgreSQL / Redis", icon: ShieldCheck },
              ].map((item, i) => (
                <div key={i} className="space-y-2 group text-center xl:text-left">
                  <div className="text-[9px] font-mono uppercase text-zinc-500 tracking-[0.4em] flex justify-center xl:justify-start items-center gap-2 group-hover:text-blue-500 transition-colors">
                    <item.icon size={12} strokeWidth={1.5} /> {item.label}
                  </div>
                  <div className="text-base md:text-lg font-mono text-zinc-200 tracking-tighter">{item.value}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Visual - High Aura Artistic Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12 xl:col-span-5 relative mt-12 xl:mt-0"
          >
            <div className="relative w-full max-w-[350px] mx-auto xl:max-w-none aspect-[4/5] p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[32px] md:rounded-[40px] aura-glow-blue animate-aura-float overflow-hidden">
              <div className="w-full h-full bg-black rounded-[30px] md:rounded-[38px] overflow-hidden relative group">
                <Image 
                  src="/me.jpg" 
                  alt="Lupo High Aura" 
                  fill 
                  className="object-cover grayscale brightness-50 md:brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[2s] ease-out"
                />
                
                {/* HUD Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
                
                <div className="absolute top-6 md:top-10 right-6 md:right-10 flex flex-col items-end gap-2">
                  <div className="text-[8px] md:text-[10px] font-mono text-blue-500 bg-black/60 backdrop-blur-md px-2 md:px-3 py-1 md:py-1.5 border border-blue-500/20 rounded-full">SYST_02X</div>
                  <div className="text-[7px] md:text-[8px] font-mono text-zinc-500 tracking-tighter uppercase">ROOT_LEVEL</div>
                </div>
                
                <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 text-left space-y-1 md:space-y-2">
                  <div className="h-0.5 w-8 md:w-12 bg-blue-500 opacity-50 group-hover:w-full transition-all duration-[2s]" />
                  <div className="text-[40px] md:text-[60px] font-black text-white leading-none tracking-tighter opacity-10 group-hover:opacity-100 transition-all duration-1000">X_ARCH</div>
                  <div className="text-[8px] md:text-[10px] font-mono text-zinc-500 uppercase tracking-[0.5em] pl-1">Engineering_Core</div>
                </div>

                {/* Animated Light Sweep */}
                <motion.div 
                  animate={{ left: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12" 
                />
              </div>
            </div>
            
            {/* Ambient Background Aura */}
            <div className="absolute -inset-20 md:-inset-40 bg-blue-600/5 rounded-full blur-[120px] -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Initialize_Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
      </motion.div>
    </section>
  )
}