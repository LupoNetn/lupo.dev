import {
  Code2,
  Smartphone,
  Database,
  GitBranch,
  Layers,
  Cpu,
  Globe,
  Zap,
} from "lucide-react"

export interface Skill {
  name: string
  icon: any
  category: string
  color: string
}

export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  image: string
  github: string
  live: string
  featured: boolean
  category: string
  year: string
  duration: string
  team: string
}

export const skills: Skill[] = [
  { name: "Go", icon: Cpu, category: "Backend", color: "from-blue-500 to-indigo-600" },
  { name: "TypeScript", icon: Code2, category: "Language", color: "from-blue-400 to-cyan-500" },
  { name: "Node.js", icon: Zap, category: "Backend", color: "from-green-500 to-emerald-600" },
  { name: "React", icon: Code2, category: "Frontend", color: "from-blue-400 to-blue-600" },
  { name: "Next.js", icon: Globe, category: "Framework", color: "from-zinc-400 to-white" },
  { name: "React Native", icon: Smartphone, category: "Mobile", color: "from-blue-500 to-indigo-600" },
  { name: "Tailwind CSS", icon: Layers, category: "Styling", color: "from-cyan-400 to-blue-500" },
  { name: "Framer Motion", icon: Zap, category: "Animation", color: "from-purple-500 to-pink-500" },
  { name: "PostgreSQL", icon: Database, category: "Database", color: "from-blue-600 to-cyan-700" },
  { name: "Supabase", icon: Globe, category: "Infrastructure", color: "from-emerald-400 to-teal-500" },
]

export const projects: Project[] = [
  {
    id: 1,
    title: "Axile",
    description: "Event ticketing platform built with Next.js and Django.",
    longDescription:
      "A collaborative event management and ticketing platform. Working within a development team, I focused on building the high-performance frontend using Next.js and Tailwind CSS, ensuring real-time seat synchronization and a seamless user experience.",
    tech: ["Next.js", "Django", "Tailwind CSS", "PostgreSQL", "Redis"],
    image: "/axile-img-portfolio.jpg",
    github: "https://github.com/luponetn/frontend-radar",
    live: "https://axile.ng",
    featured: true,
    category: "Full Stack",
    year: "2024",
    duration: "4 months",
    team: "Frontend Developer (Team)",
  },
  {
    id: 2,
    title: "VCME",
    description: "Video conferencing tool using WebRTC and Go.",
    longDescription:
      "A peer-to-peer video calling application featuring real-time media streaming. Developed a high-concurrency signaling server in Go using WebSockets to manage room states and provide end-to-end media handshakes via WebRTC.",
    tech: ["Go", "React", "WebRTC", "WebSocket", "gRPC"],
    image: "/vcme-img-portfolio.jpg",
    github: "https://github.com/luponetn",
    live: "https://vcme.vercel.app",
    featured: true,
    category: "Communication",
    year: "2024",
    duration: "2 months",
    team: "Software Engineer",
  },
  {
    id: 3,
    title: "Notely",
    description: "Local-first task management application with offline support.",
    longDescription:
      "A productivity tool focused on speed and reliability. Implements local-first persistence patterns to ensure a snappy user experience and data availability even without an active internet connection.",
    tech: ["React", "TypeScript", "Tailwind CSS", "IndexedDB"],
    image: "/notelllly.jpg",
    github: "https://github.com/luponetn/notely",
    live: "https://notely-six-alpha.vercel.app",
    featured: false,
    category: "Productivity",
    year: "2025",
    duration: "2 weeks",
    team: "Software Engineer",
  },
]