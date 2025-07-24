"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Smartphone,
  Database,
  GitBranch,
  Palette,
  Calendar,
  User,
  ArrowUpRight,
  Download,
  ExternalLink,
  Users,
  Sparkles,
  Rocket,
  Target,
  Lightbulb,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

  // Custom cursor position with spring physics for smooth movement
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const springConfig = { stiffness: 150, damping: 20, restDelta: 0.001 }
  const mouseX = useSpring(mousePosition.x, springConfig)
  const mouseY = useSpring(mousePosition.y, springConfig)

  useEffect(() => {
    setIsLoaded(true) // Set loaded to true to hide loading animation
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

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

  const skills = [
    { name: "React", icon: Code2, category: "Frontend", color: "from-cyan-400 to-blue-500" },
    {
      name: "TypeScript",
      icon: Code2,
      category: "Frontend",
      color: "from-blue-400 to-indigo-500",
    },
    { name: "Next.js", icon: Code2, category: "Frontend", color: "from-gray-400 to-gray-600" },
    {
      name: "React Native",
      icon: Smartphone,
      category: "Mobile",
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "Tailwind CSS",
      icon: Palette,
      category: "Styling",
      color: "from-teal-400 to-cyan-500",
    },
    {
      name: "JavaScript",
      icon: Code2,
      category: "Frontend",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Supabase",
      icon: Database,
      category: "Backend",
      color: "from-green-400 to-emerald-500",
    },
    { name: "Git", icon: GitBranch, category: "Tools", color: "from-orange-400 to-red-500" },
  ]

  const projects = [
    {
      id: 1,
      title: "E-commerce Store",
      description: "A robust online store for seamless product browsing and purchasing.",
      longDescription:
        "Developed a full-featured e-commerce platform with secure payment gateways, product catalog management, and user authentication. Designed for scalability and a smooth shopping experience.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe"],
      image: "/placeholder.svg?height=600&width=800",
      github: "#",
      live: "#",
      featured: true,
      category: "E-Commerce",
      year: "2024",
      duration: "6 months",
      team: "3 developers",
    },
    {
      id: 2,
      title: "Uni Manual Purchase Web Verification System",
      description: "A secure web system for verifying manual university purchases.",
      longDescription:
        "Implemented a web-based verification system for university manual purchases, ensuring data integrity and secure transaction logging. Features include user roles, audit trails, and a streamlined verification workflow.",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Auth0"],
      image: "/placeholder.svg?height=600&width=800",
      github: "#",
      live: "#",
      featured: true,
      category: "Web Application",
      year: "2023",
      duration: "5 months",
      team: "2 developers",
    },
    {
      id: 3,
      title: "Business Landing Page (Client A)",
      description: "High-converting landing page designed for lead generation.",
      longDescription:
        "Crafted a modern and responsive landing page for a business, focusing on clear calls-to-action and engaging content to maximize lead conversion. Optimized for fast loading and SEO.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/placeholder.svg?height=600&width=800",
      github: "#",
      live: "#",
      featured: false,
      category: "Marketing",
      year: "2023",
      duration: "1 month",
      team: "1 developer",
    },
    {
      id: 4,
      title: "Business Landing Page (Client B)",
      description: "Sleek and informative landing page for a service-based business.",
      longDescription:
        "Developed a visually appealing landing page for a service provider, showcasing their offerings and client testimonials. Features include a contact form and responsive design across all devices.",
      tech: ["React", "Gatsby", "CSS Modules"],
      image: "/placeholder.svg?height=600&width=800",
      github: "#",
      live: "#",
      featured: false,
      category: "Marketing",
      year: "2023",
      duration: "1 month",
      team: "1 developer",
    },
  ]

  // Function to scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden">
      {/* Custom Cursor: A small, subtle dot that follows the mouse */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none z-50 opacity-50"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%", // Center the dot on the cursor
          translateY: "-50%",
        }}
      />

      {/* Loading Animation: Fades out once the page is loaded */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }} // Starts off-screen above
        animate={{ y: 0 }} // Slides into view
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-xl z-40 border-b border-gray-800/50 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Name */}
            <motion.div
              whileHover={{ scale: 1.05 }} // Slight scale on hover
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 180 }} // Rotates 180 degrees on hover
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-bold text-lg">L</span>
              </motion.div>
              <div>
                <div className="text-lg md:text-xl font-bold text-white">Lupo Oluwatobi</div>
                <div className="text-xs text-gray-400">Frontend Developer</div>
              </div>
            </motion.div>

            {/* Desktop Menu Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }} // Starts hidden and slightly below
                  animate={{ opacity: 1, y: 0 }} // Fades in and slides up
                  transition={{ delay: index * 0.1 + 0.3 }} // Staggered delay for each link
                  whileHover={{ y: -2, scale: 1.05 }} // Slight lift and scale on hover
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase() ? "text-cyan-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                  {/* Active section indicator */}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection" // Unique ID for shared layout animation
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
              {/* Resume Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full px-4 py-2 text-sm shadow-lg">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu (conditionally rendered) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }} // Starts hidden and collapsed
              animate={{ opacity: 1, height: "auto" }} // Fades in and expands
              exit={{ opacity: 0, height: 0 }} // Fades out and collapses
              className="lg:hidden bg-gray-900 border-t border-gray-800"
            >
              <div className="px-6 py-4 space-y-4">
                {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                  <motion.button
                    key={item}
                    whileHover={{ x: 10 }} // Slides right on hover
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1], // Scales in and out
              rotate: [0, 360], // Rotates continuously
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
              style={{ y: heroY, opacity: heroOpacity }} // Parallax effect based on scroll
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ scale: 0 }} // Starts scaled down
                animate={{ scale: 1 }} // Scales up
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm text-cyan-300 px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-6 shadow-lg border border-cyan-500/20"
              >
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                Available for exciting opportunities
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }} // Pulsing dot
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-2 h-2 bg-green-400 rounded-full ml-3"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }} // Starts hidden and below
                animate={{ opacity: 1, y: 0 }} // Fades in and slides up
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-8xl font-black text-white mb-4 md:mb-6 leading-tight"
              >
                Hi, I'm{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // Animates gradient position
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%", // Ensures gradient can move
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
                <motion.span className="font-semibold text-cyan-400" whileHover={{ scale: 1.1 }}>
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
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    Explore My Work
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }} // Arrow moves back and forth
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
              initial={{ opacity: 0, scale: 0.8, x: 100 }} // Starts hidden, scaled down, and off to the right
              animate={{ opacity: 1, scale: 1, x: 0 }} // Fades in, scales up, and slides left
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <motion.div className="relative">
                {/* Main Avatar */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10], // Gentle floating up and down
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
                      {/* <User className="w-36 h-36 md:w-48 md:h-48 text-gray-400" /> */}
                      <Image src={`/me.jpg`} alt="me" width={100} height={100} className="w-full rounded-full"/>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Tech Icons (Reduced to 3 for simplicity) */}
                {[
                  { icon: Code2, position: { top: "10%", left: "-10%" }, delay: 0 },
                  { icon: Smartphone, position: { top: "20%", right: "-15%" }, delay: 0.5 },
                  { icon: Database, position: { bottom: "30%", left: "-5%" }, delay: 1 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }} // Starts hidden and scaled down
                    animate={{ opacity: 1, scale: 1 }} // Fades in and scales up
                    transition={{ delay: item.delay + 1, duration: 0.5 }}
                    className="absolute"
                    style={item.position}
                  >
                    <motion.div
                      animate={{
                        y: [-15, 15, -15], // Gentle floating
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

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className="py-20 md:py-32 px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Starts hidden and below
            whileInView={{ opacity: 1, y: 0 }} // Fades in and slides up when in view
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} // Only animate once
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
              <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-200">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <span className="font-semibold text-white">Location</span>
                  </div>
                  <p className="text-gray-300 text-sm">Available worldwide for remote opportunities</p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-200">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span className="font-semibold text-white">Availability</span>
                  </div>
                  <p className="text-gray-300 text-sm">Open to new projects and collaborations</p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-200">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <Code2 className="w-5 h-5 text-cyan-400" />
                    <span className="font-semibold text-white">Experience</span>
                  </div>
                  <p className="text-gray-300 text-sm">3+ years of professional development</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={skillsRef}
        className="py-20 md:py-32 px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm text-cyan-300 px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-6 border border-cyan-500/20"
            >
              <Target className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Technical Expertise
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8">
              Skills That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Deliver Results
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit of cutting-edge technologies and frameworks, refined through years of hands-on
              experience and continuous learning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }} // Starts hidden and below
                whileInView={{ opacity: 1, y: 0 }} // Fades in and slides up
                transition={{ duration: 0.8, delay: index * 0.1 }} // Staggered delay
                whileHover={{ y: -10, scale: 1.05 }} // Lift and scale on hover
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-6 md:p-8 h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-500 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <CardContent className="p-0 relative z-10">
                    <motion.div
                      className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${skill.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg`}
                    >
                      <skill.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{skill.name}</h3>
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs mb-4">
                      {skill.category}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className="py-20 md:py-32 px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm text-purple-300 px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-6 border border-purple-500/20"
            >
              <Lightbulb className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Featured Work
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8">
              Projects That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Make Impact
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how I've helped businesses transform their digital presence with innovative solutions that drive
              real results and user engagement.
            </p>
          </motion.div>

          <div className="space-y-20 md:space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }} // Starts hidden and below
                whileInView={{ opacity: 1, y: 0 }} // Fades in and slides up
                transition={{ duration: 1, delay: index * 0.2 }} // Staggered delay
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-10 md:gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Project Image */}
                <motion.div
                  className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  whileHover={{ scale: 1.02 }} // Slight scale on hover
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-xl md:rounded-3xl shadow-2xl border border-gray-700">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay with buttons */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <motion.div
                      initial={{ opacity: 0, y: 20 }} // Buttons start hidden and below
                      whileHover={{ opacity: 1, y: 0 }} // Fades in and slides up on image hover
                      className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex gap-3 md:gap-4"
                    >
                      <Button className="bg-gray-800/90 text-white hover:bg-gray-700 backdrop-blur-sm flex-1 text-sm md:text-base border border-gray-600 px-3 py-2 md:px-4 md:py-2.5">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                      <Button className="bg-cyan-600/90 hover:bg-cyan-500 backdrop-blur-sm flex-1 text-sm md:text-base px-3 py-2 md:px-4 md:py-2.5">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Project Details */}
                <motion.div
                  className={`space-y-6 md:space-y-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Slides from left/right based on index
                  whileInView={{ opacity: 1, x: 0 }} // Slides into view
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs md:text-sm">
                        {project.category}
                      </Badge>
                      <span className="text-xs md:text-sm text-gray-400">{project.year}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4 md:mb-6 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 md:mb-4 uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }} // Starts hidden and scaled down
                          whileInView={{ opacity: 1, scale: 1 }} // Fades in and scales up
                          transition={{ delay: techIndex * 0.1 }} // Staggered delay
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, y: -2 }} // Lift and scale on hover
                        >
                          <Badge
                            variant="outline"
                            className="bg-gray-800 border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-300 transition-colors text-xs md:text-sm"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{project.team}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="py-20 md:py-32 px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-cyan-500/20 backdrop-blur-sm text-cyan-300 px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-6 border border-cyan-500/20"
            >
              <Rocket className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Ready to Launch
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8">
              Let's Create Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Extraordinary
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your vision into reality? Let's collaborate and build something that makes a real
              difference in the world.
            </p>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  subtitle: "daniellupo30@gmail.com",
                  action: "Send Message",
                  link: "mailto:daniellupo30@gmail.com",
                },
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  subtitle: "Connect with Daniel Lupo",
                  action: "View Profile",
                  link: "https://www.linkedin.com/in/daniel-lupo-a5a7b8202/",
                },
                {
                  icon: Github,
                  title: "GitHub",
                  subtitle: "View luponetn's repositories",
                  action: "Visit GitHub",
                  link: "https://github.com/luponetn",
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 30 }} // Starts hidden and below
                  whileInView={{ opacity: 1, y: 0 }} // Fades in and slides up
                  transition={{ delay: index * 0.2 }} // Staggered delay
                  whileHover={{ scale: 1.05, y: -5 }} // Lift and scale on hover
                  viewport={{ once: true }}
                >
                  <Card className="p-6 md:p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                    <CardContent className="p-0 text-center">
                      <motion.div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                        <contact.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{contact.title}</h3>
                      <p className="text-gray-400 mb-4 text-sm md:text-base">{contact.subtitle}</p>
                      <Button
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 bg-transparent text-sm md:text-base px-3 py-2 md:px-4 md:py-2.5"
                        onClick={() => window.open(contact.link, "_blank")}
                      >
                        {contact.action}
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
                  onClick={() => window.open("mailto:daniellupo30@gmail.com", "_blank")}
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5 mr-3" />
                  Start a Project
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-semibold backdrop-blur-sm transition-all duration-300 bg-transparent"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5 mr-3" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 md:py-12 px-6 lg:px-8 bg-black text-white border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-4 md:mb-0"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <div>
                <div className="text-base md:text-lg font-semibold">Lupo Oluwatobi</div>
                <div className="text-xs text-gray-400">Frontend Developer</div>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-center md:text-right text-xs md:text-sm"
            >
              © 2025 Lupo Oluwatobi. Crafted with passion, precision, and lots of ☕
              <br />
              <span className="text-xs">Built with Next.js, Tailwind CSS, and Framer Motion</span>
            </motion.p>
          </div>
        </div>
      </footer>
    </div>
  )
}
