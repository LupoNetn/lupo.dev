"use client"

import { useState, useEffect, useRef } from "react"
import { useScroll, useTransform, useInView } from "framer-motion"

// Import components
import HeroSection from "@/components/sections/HeroSection"
import  ContactSection  from "@/components/sections/ContactSection"
import  AboutSection  from "@/components/sections/AboutSection"
import  ProjectsSection  from "@/components/sections/ProjectsSection"
import  SkillsSection  from "@/components/sections/SkillsSection"

import Footer from '@/components/layout/Footer'
import CustomCursor from "@/components/layout/CustomCursor"
import LoadingScreen from "@/components/layout/LoadingScreen"
import Navigation from "@/components/layout/Navigation"


// Import data
import { skills, projects } from "@/lib/data"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoaded, setIsLoaded] = useState(false)

  // Refs for sections to detect when they are in view
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  // useInView hook to trigger animations when elements enter the viewport
  const heroInView = useInView(heroRef, { once: true, amount: 0.5 })
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.5 })
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.5 })
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.5 })

  // Scroll progress for hero parallax effect
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    setIsLoaded(true) // Set loaded to true to hide loading animation
  }, [])

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

  // Function to scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-slate-900 text-white overflow-hidden">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Loading Animation */}
      <LoadingScreen isLoaded={isLoaded} />

      {/* Navigation Bar */}
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <HeroSection
        heroRef={heroRef}
        heroY={heroY}
        heroOpacity={heroOpacity}
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

      {/* Footer */}
      <Footer />
    </div>
  )
}
