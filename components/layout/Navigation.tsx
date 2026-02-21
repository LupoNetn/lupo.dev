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

  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-4 md:top-8 left-0 w-full z-50 flex justify-center px-4 md:px-6">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-black/95 backdrop-blur-xl border border-white/10 max-w-4xl w-full px-4 md:px-8 py-3 md:py-4 rounded-full flex justify-between items-center aura-glow-blue/20"
      >
        {/* Logo/Name */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => scrollToSection("home")}
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center group-hover:border-blue-500/50 transition-all duration-500">
            <Cpu size={14} className="text-blue-500 md:w-4 md:h-4 group-hover:rotate-90 transition-transform duration-700" />
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="font-mono text-sm tracking-tighter">
            <span className="text-white font-black tracking-widest text-shine uppercase">LUPO.DEV</span>
          </div>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center gap-2">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-500 px-5 py-2 rounded-full relative ${
                activeSection === item.toLowerCase()
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-100"
              }`}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <motion.div
                  layoutId="nav_active_bg"
                  className="absolute inset-0 bg-white/5 border border-white/10 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-blue-500 hover:text-white transition-all duration-500 hover:aura-glow-blue"
          >
            Connect
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="md:hidden absolute top-20 left-0 w-full bg-black border border-white/10 rounded-[32px] p-8 space-y-4 shadow-2xl"
            >
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item.toLowerCase())}
                  className={`block w-full text-center py-4 font-mono text-xs uppercase tracking-[0.3em] rounded-2xl ${
                    activeSection === item.toLowerCase()
                      ? "bg-white/10 text-white border border-white/20"
                      : "text-zinc-500"
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
