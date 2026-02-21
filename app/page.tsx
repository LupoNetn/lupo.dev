"use client"

import { useState, useEffect, useRef } from "react"
import { useInView, motion, useSpring, useMotionValue } from "framer-motion"

// Import components
import HeroSection from "@/components/sections/HeroSection"
import ContactSection from "@/components/sections/ContactSection"
import AboutSection from "@/components/sections/AboutSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import SkillsSection from "@/components/sections/SkillsSection"

import Footer from '@/components/layout/Footer'
import Navigation from "@/components/layout/Navigation"

// Import data
import { skills, projects } from "@/lib/data"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  // Refs for sections to detect when they are in view
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  // useInView hook to trigger animations when elements enter the viewport
  const heroInView = useInView(heroRef, { amount: 0.3 })
  const aboutInView = useInView(aboutRef, { amount: 0.3 })
  const skillsInView = useInView(skillsRef, { amount: 0.3 })
  const projectsInView = useInView(projectsRef, { amount: 0.2 })
  const contactInView = useInView(contactRef, { amount: 0.3 })

  // Update active section based on scroll position
  useEffect(() => {
    const sections = {
      home: heroInView,
      about: aboutInView,
      skills: skillsInView,
      projects: projectsInView,
      contact: contactInView,
    }
    for (const [key, inView] of Object.entries(sections)) {
      if (inView) {
        setActiveSection(key)
        break
      }
    }
  }, [heroInView, aboutInView, skillsInView, projectsInView, contactInView])

  // Mouse transformation for aura light
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Function to scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#010101] text-zinc-100 selection:bg-blue-500/30 font-sans">
      {/* High-Aura Mouse Light */}
      <motion.div 
        className="fixed inset-0 z-[1] pointer-events-none opacity-40 mix-blend-screen"
        style={{
          background: `radial-gradient(600px circle at var(--x) var(--y), rgba(59, 130, 246, 0.08), transparent 80%)`,
          //@ts-ignore
          "--x": springX,
          "--y": springY,
        } as any}
      />

      {/* Navigation Bar */}
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      <main className="relative z-10">
        {/* Subtle technical background grid */}
        <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none mask-radial" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        {/* Hero Section */}
        <HeroSection
          heroRef={heroRef}
          scrollToSection={scrollToSection}
        />

        {/* About Section */}
        <AboutSection aboutRef={aboutRef} />

        {/* Skills Section */}
        <SkillsSection skillsRef={skillsRef} skills={skills} />

        {/* Projects Section */}
        <ProjectsSection projectsRef={projectsRef} projects={projects} />

        {/* Contact Section */}
        <ContactSection contactRef={contactRef} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
