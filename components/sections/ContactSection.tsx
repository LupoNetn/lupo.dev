"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Rocket, Mail, Linkedin, Github, Download } from "lucide-react"
import ContactCard from "@/components/ui/ContactCard"

interface ContactSectionProps {
  contactRef: React.RefObject<HTMLElement>
}

export default function ContactSection({ contactRef }: ContactSectionProps) {
  const contactInfo = [
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
      link: "https://www.linkedin.com/in/daniel-lupo-o",
    },
    {
      icon: Github,
      title: "GitHub",
      subtitle: "View luponetn's repositories",
      action: "Visit GitHub",
      link: "https://github.com/luponetn",
    },
  ]

  return (
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
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0f0c29] via-[#302b66] to-[#24243f]">
              Extraordinary
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? Let's collaborate and build something that makes a real
            difference in the world.
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {contactInfo.map((contact, index) => (
              <ContactCard key={contact.title} contact={contact} index={index} />
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
                className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] hover:from-gray-850 hover:to-gray-950 text-white  px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
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
  )
} 