"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Cpu } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({
  activeSection,
  scrollToSection,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-4 md:top-6 left-0 w-full z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-zinc-950/90 backdrop-blur-md border border-zinc-900 max-w-4xl w-full px-4 md:px-6 py-2.5 rounded-full flex justify-between items-center"
      >
        {/* Logo/Name */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection("home")}
        >
          <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-colors duration-300 group-hover:border-zinc-700">
            <Cpu size={12} className="text-zinc-400 group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="font-mono text-xs tracking-tight">
            <span className="text-zinc-100 font-semibold uppercase tracking-wider">LUPO.DEV</span>
          </div>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`font-mono text-[9px] uppercase tracking-wider transition-all duration-300 px-4 py-1.5 rounded-full relative ${
                activeSection === item.toLowerCase()
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <motion.div
                  layoutId="nav_active_bg"
                  className="absolute inset-0 bg-zinc-900 border border-zinc-800/80 rounded-full -z-10"
                  transition={{ duration: 0.2 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => scrollToSection("contact")}
            className="px-4 py-1.5 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 font-mono text-[9px] uppercase tracking-wider rounded-full transition-all duration-300"
          >
            Connect
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
        >
          {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 5 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-14 left-0 w-full bg-zinc-950 border border-zinc-900 rounded-[20px] p-6 space-y-2 shadow-2xl"
            >
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item.toLowerCase())}
                  className={`block w-full text-center py-2.5 font-mono text-[10px] uppercase tracking-wider rounded-lg ${
                    activeSection === item.toLowerCase()
                      ? "bg-zinc-900 text-white border border-zinc-800"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
