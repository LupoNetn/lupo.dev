"use client"

import { motion, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowUpRight, Code2, Smartphone, Database } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLElement>
  heroY: any
  heroOpacity: any
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ heroRef, heroY, heroOpacity, scrollToSection }: HeroSectionProps) {
  const floatingIcons = [
    { icon: Code2, position: { top: "10%", left: "-10%" }, delay: 0 },
    { icon: Smartphone, position: { top: "20%", right: "-15%" }, delay: 0.5 },
    { icon: Database, position: { bottom: "30%", left: "-5%" }, delay: 1 },
  ]

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-10">
          {/* Hero Text Content */}
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm text-cyan-300 px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-6 shadow-lg border border-cyan-500/20"
            >
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Available for exciting opportunities
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-2 h-2 bg-green-400 rounded-full ml-3"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-8xl font-black text-white mb-4 md:mb-6 leading-tight"
            >
              Hi, I'm{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-br from-[#0f0c29] via-[#302b69] to-[#24243e]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Lupo
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-2xl"
            >
              A Software Engineer specializing in{" "}
              <motion.span className="font-semibold text-transparent bg-gradient-to-br via-slate-50 to-gray-700 bg-clip-text" whileHover={{ scale: 1.1 }}>
                frontend development
              </motion.span>
              , dedicated to building intuitive, high-performance web applications that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-10 md:mb-12 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] hover:from-gray-850 hover:to-gray-950 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  Explore My Work
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold backdrop-blur-sm bg-transparent"
                >
                  Let's Connect
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Visual (Avatar & Floating Icons) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <motion.div className="relative">
              {/* Main Avatar */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="w-72 h-72 md:w-96 md:h-96 mx-auto relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full p-2 shadow-2xl mt-10">
                  <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center border border-gray-700">
                    <Image src={`/me.jpg`} alt="me" width={100} height={100} className="w-full rounded-full"/>
                  </div>
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: item.delay + 1, duration: 0.5 }}
                  className="absolute"
                  style={item.position}
                >
                  <motion.div
                    animate={{
                      y: [-15, 15, -15],
                    }}
                    transition={{
                      y: { duration: 3 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    }}
                    className="w-14 h-14 md:w-16 md:h-16 bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center border border-gray-700"
                  >
                    <item.icon className="w-7 h-7 md:w-8 md:h-8 text-cyan-400" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 