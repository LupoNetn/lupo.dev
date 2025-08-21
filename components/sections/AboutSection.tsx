"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Calendar, Code2 } from "lucide-react"

interface AboutSectionProps {
  aboutRef: React.RefObject<HTMLElement>
}

export default function AboutSection({ aboutRef }: AboutSectionProps) {
  const infoCards = [
    {
      icon: Sparkles,
      title: "Location",
      description: "Available worldwide for remote opportunities",
    },
    {
      icon: Calendar,
      title: "Availability",
      description: "Open to new projects and collaborations",
    },
    {
      icon: Code2,
      title: "Experience",
      description: "3+ years of professional development",
    },
  ]

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 md:py-32 px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8">About Me</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer who loves creating digital experiences that make a difference. With a
            strong foundation in modern web technologies, I bring ideas to life through clean, efficient code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="p-6 md:p-8 h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-200">
              <CardContent className="p-0">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">My Journey</h3>
                <div className="space-y-4 md:space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                  <p>
                    My journey into web development started with curiosity and has evolved into a passion for creating
                    meaningful digital experiences. I specialize in frontend development with a keen eye for design
                    and user experience.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and staying up-to-date with the latest industry
                    trends. My approach combines technical expertise with creative problem-solving to deliver
                    solutions that not only work flawlessly but also delight users.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                    projects, or sharing knowledge with the developer community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {infoCards.map((card, index) => (
              <Card key={card.title} className="p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-200">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <card.icon className="w-5 h-5 text-cyan-400" />
                    <span className="font-semibold text-white">{card.title}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 