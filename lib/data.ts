import {
  Code2,
  Smartphone,
  Database,
  GitBranch,
  Palette,
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
  { name: "React", icon: Code2, category: "Frontend", color: "from-cyan-400 to-blue-500" },
  {
    name: "TypeScript",
    icon: Code2,
    category: "Frontend",
    color: "from-blue-600 to-indigo-500",
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

export const projects: Project[] = [
  {
    id: 1,
    title: "Car Rental Dashboard",
    description: "A robust online store for seamless product browsing and purchasing.",
    longDescription:
      "Developed a Clean car rental dashboard to track income, expenses and car activity in real time.",
    tech:["React", "JavaScript", "Tailwind CSS"],
    image: "/car-rental.jpg",
    github: "https://luponetn.github.io/car-rental-dashboard",
    live: "car-rental-dashboard-henna.vercel.app",
    featured: true,
    category: "Dashboard",
    year: "2025",
    duration: "few days",
    team: "solo",
  },
  {
    id: 2,
    title: "PayOva",
    description: "A secure web system for verifying manual university purchases.",
    longDescription:
      "Implemented a web-based verification system for university manual purchases, ensuring data integrity and secure transaction logging.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Clerk"],
    image: "/payova-img.jpg",
    github: "https://luponetn.github.io/payOva",
    live: "Pay-ova.vercel.app",
    featured: true,
    category: "Web Application",
    year: "2023",
    duration: "still in development..",
    team: "solo",
  },
  {
    id: 3,
    title: "Banking Landing Page",
    description: "High-converting landing page designed for lead generation.",
    longDescription:
      "Crafted a modern and responsive landing page for a bank, focusing on clear calls-to-action and engaging content to maximize lead conversion. Optimized for fast loading and SEO.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/hoobank-img.jpg",
    github:"https://luponetn.github.io/hoo-bank",
    live: "hoo-bank-theta-seven.vercel.app",
    featured: false,
    category: "Marketing",
    year: "2025",
    duration: "A day",
    team: "solo",
  },
  // {
  //   id: 4,
  //   title: "Business Landing Page (Client B)",
  //   description: "Sleek and informative landing page for a service-based business.",
  //   longDescription:
  //     "Developed a visually appealing landing page for a service provider, showcasing their offerings and client testimonials. Features include a contact form and responsive design across all devices.",
  //   tech: ["React", "Gatsby", "CSS Modules"],
  //   image: "/placeholder.svg?height=600&width=800",
  //   github: "#",
  //   live: "#",
  //   featured: false,
  //   category: "Marketing",
  //   year: "2023",
  //   duration: "1 month",
  //   team: "1 developer",
  // },
] 