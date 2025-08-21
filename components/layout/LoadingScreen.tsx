"use client"

import { motion, AnimatePresence } from "framer-motion"

interface LoadingScreenProps {
  isLoaded: boolean
}

export default function LoadingScreen({ isLoaded }: LoadingScreenProps) {
  return (
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
  )
} 