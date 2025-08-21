"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-10 md:py-12 px-6 lg:px-8 bg-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-4 md:mb-0"
          >
            <div className="w-10 h-10  bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-xl flex items-center justify-center">
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
  )
} 