"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

// Import components
import HeroSection from "@/components/sections/HeroSection"
import ContactSection from "@/components/sections/ContactSection"
import AboutSection from "@/components/sections/AboutSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import SkillsSection from "@/components/sections/SkillsSection"

import Footer from '@/components/layout/Footer'
import Navigation from "@/components/layout/Navigation"

// Import data
import { skills, projects, experiences } from "@/lib/data"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  // Refs for sections to detect when they are in view
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  // useInView hook to trigger animations when elements enter the viewport
  const heroInView = useInView(heroRef, { amount: 0.3 })
  const aboutInView = useInView(aboutRef, { amount: 0.3 })
  const skillsInView = useInView(skillsRef, { amount: 0.3 })
  const experienceInView = useInView(experienceRef, { amount: 0.3 })
  const projectsInView = useInView(projectsRef, { amount: 0.2 })
  const contactInView = useInView(contactRef, { amount: 0.3 })

  // Update active section based on scroll position
  useEffect(() => {
    const sections = {
      home: heroInView,
      about: aboutInView,
      skills: skillsInView,
      experience: experienceInView,
      projects: projectsInView,
      contact: contactInView,
    }
    for (const [key, inView] of Object.entries(sections)) {
      if (inView) {
        setActiveSection(key)
        break
      }
    }
  }, [heroInView, aboutInView, skillsInView, experienceInView, projectsInView, contactInView])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-blue-500/20 font-sans antialiased">
      {/* Sleek, static architectural background lighting */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(24,24,27,0.5),transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(9,9,11,0.5),transparent_50%)] pointer-events-none" />

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

        {/* Experience Section */}
        <ExperienceSection experienceRef={experienceRef} experiences={experiences} />

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
