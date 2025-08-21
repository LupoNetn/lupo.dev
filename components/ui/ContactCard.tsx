"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, LucideIcon } from "lucide-react"

interface ContactCardProps {
  contact: {
    icon: LucideIcon
    title: string
    subtitle: string
    action: string
    link: string
  }
  index: number
}

export default function ContactCard({ contact, index }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.05, y: -5 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 md:p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
        <CardContent className="p-0 text-center">
          <motion.div className="w-14 h-14 md:w-16 md:h-16  bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
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
  )
} 