import {
  Code2,
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

export interface Experience {
  id: number
  company: string
  role: string
  period: string
  description: string
  longDescription: string
  tech: string[]
  link: string
  category: string
}

export const skills: Skill[] = [
  { name: "Go", icon: Cpu, category: "Languages", color: "from-blue-500 to-indigo-600" },
  { name: "Python", icon: Code2, category: "Languages", color: "from-yellow-500 to-amber-600" },
  { name: "Node.js", icon: Zap, category: "Languages", color: "from-green-500 to-emerald-600" },
  { name: "TypeScript", icon: Code2, category: "Languages", color: "from-blue-400 to-cyan-500" },
  { name: "PostgreSQL", icon: Database, category: "Databases", color: "from-blue-600 to-cyan-700" },
  { name: "Redis", icon: Database, category: "Databases", color: "from-red-500 to-rose-600" },
  { name: "NestJS", icon: Layers, category: "Frameworks", color: "from-red-500 to-rose-600" },
  { name: "FastAPI", icon: Zap, category: "Frameworks", color: "from-teal-400 to-emerald-500" },
  { name: "WebSockets", icon: Globe, category: "Protocols & Arch", color: "from-purple-500 to-indigo-600" },
  { name: "Git", icon: GitBranch, category: "Tools", color: "from-orange-500 to-amber-600" },
  { name: "GitHub", icon: Globe, category: "Tools", color: "from-gray-600 to-zinc-800" },
]

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Axile",
    role: "Software Engineer",
    period: "2025 — Present",
    description: "Event ticketing web application frontend.",
    longDescription:
      "An event ticketing platform where I engineered the frontend web application. Built responsive, fast-loading user interfaces using Next.js and integrated with backend services to ensure a seamless and reliable booking process for users during live ticket drops.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://axile.ng",
    category: "Frontend Development",
  },
]

export const projects: Project[] = [
  {
    id: 1,
    title: "VCME",
    description: "Low-latency WebSocket signaling engine for pure peer-to-peer WebRTC media flows.",
    longDescription:
      "A low-latency, pure WebRTC peer-to-peer video calling signaling server architected in Golang. Developed a robust, bidirectional networking layer leveraging the Gorilla WebSocket library to seamlessly handle persistent, real-time client connections. Managed active video chat rooms and peer connection states dynamically using native Go maps paired with sync.Mutex to prevent race conditions and connection leaks, while efficiently routing session descriptions (SDP offers/answers) and ICE candidates between active peers.",
    tech: ["Go", "WebRTC", "Gorilla WebSockets"],
    image: "/vcme-img-portfolio.jpg",
    github: "https://github.com/luponetn/vcme-backend",
    live: "https://vcme.vercel.app",
    featured: true,
    category: "Real-time Systems",
    year: "2025",
    duration: "1 month",
    team: "Backend Engineer",
  },
  {
    id: 2,
    title: "NexusMQ",
    description: "In-process publish/subscribe message broker for high-throughput memory-efficient message routing.",
    longDescription:
      "A zero-dependency, in-process publish/subscribe message broker engineered in Go for high-throughput, memory-efficient message routing. Leveraged Go goroutines and native channel architectures to handle concurrent message delivery asynchronously across dynamic topics. Ensured absolute thread safety and completely eliminated data race conditions under heavy concurrent workloads by implementing granular sync.RWMutex locking mechanisms.",
    tech: ["Go", "Golang", "Concurrency"],
    image: "/nexusmq-img-portfolio.jpg",
    github: "https://github.com/luponetn/nexusmq",
    live: "https://docsnexusmq.vercel.app",
    featured: true,
    category: "Infrastructure & Systems Architecture",
    year: "2025",
    duration: "1 month",
    team: "Backend Engineer",
  },
  {
    id: 3,
    title: "PayCore",
    description: "Fintech transaction simulation engine modeling production-grade immutable ledgers.",
    longDescription:
      "A monolithic fintech simulation engine built in Go utilizing PostgreSQL as a single source of truth for financial transaction records. Implemented a strict double-entry ledger accounting system to maintain accurate account balances, eliminate account discrepancies, and ensure absolute financial reliability. Features a robust idempotency mechanism that parses request body keys sent by the frontend to safely reject duplicate transactions alongside an automated exponential backoff and jitter retry system to handle network flakes gracefully.",
    tech: ["Go", "Gin", "PostgreSQL"],
    image: "/paycore-img-portfolio.jpg",
    github: "https://github.com/luponetn/paycore",
    live: "https://paycore-sigma.vercel.app",
    featured: true,
    category: "Financial Technology",
    year: "2025",
    duration: "1 month",
    team: "Backend Engineer",
  },
  {
    id: 4,
    title: "Hawk",
    description: "Event-driven webhook delivery system ensuring fault-tolerant multi-system event routing.",
    longDescription:
      "A reliable, highly fault-tolerant event-driven webhook delivery system built in TypeScript using Express to manage asynchronous event notifications. Integrated an asynchronous background worker queue utilizing BullMQ and Redis to handle high-volume event processing, queue management, and automated exponential backoff retries. Secured payload deliveries by injecting HMAC-SHA256 cryptographic signatures directly into request headers, enabling receiving servers to securely validate data and payload integrity.",
    tech: ["TypeScript", "Express", "Redis", "BullMQ", "PostgreSQL"],
    image: "/hawk-img-portfolio.jpg",
    github: "https://github.com/luponetn/hawk",
    live: "https://hawk-nine.vercel.app",
    featured: true,
    category: "Developer Infrastructure",
    year: "2025",
    duration: "1 month",
    team: "Backend Engineer",
  },
]