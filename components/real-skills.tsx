"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        color: "from-slate-100 to-slate-200",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        color: "from-slate-100 to-slate-200",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        color: "from-blue-500 to-blue-700",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
        color: "from-purple-500 to-indigo-600",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        color: "from-slate-100 to-slate-200",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        color: "from-purple-600 to-pink-500",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        color: "from-green-500 to-emerald-600",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        color: "from-slate-100 to-slate-200",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        color: "from-slate-100 to-slate-200",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        color: "from-blue-500 to-indigo-600",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        color: "from-orange-500 to-red-600",
      },
      {
        name: "JWT",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jsonwebtokens/jsonwebtokens-original.svg",
        color: "from-yellow-500 to-orange-600",
      },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        color: "from-slate-100 to-slate-200",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        color: "from-slate-100 to-slate-200",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        color: "from-purple-500 to-pink-600",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        color: "from-slate-100 to-slate-200",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        color: "from-blue-500 to-cyan-600",
      },
      {
        name: "HTML/CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        color: "from-orange-500 to-red-500",
      },
    ],
  },
  {
    category: "Specializations",
    items: [
      {
        name: "AI Integration",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
        color: "from-purple-500 to-pink-600",
      },
      {
        name: "RESTful APIs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
        color: "from-slate-100 to-slate-200",
      },
      {
        name: "GraphQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
        color: "from-pink-500 to-purple-600",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        color: "from-blue-400 to-cyan-500",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        color: "from-slate-100 to-slate-200",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
        color: "from-yellow-400 to-orange-500",
      },
    ],
  },
]

export default function RealSkills() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="skills" ref={containerRef} className="section-container overflow-hidden">
      <motion.div className="container mx-auto" style={{ opacity, y }}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-display mb-16 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical <span className="gradient-text drop-shadow-lg">Arsenal!</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-10%" }}
              className="cartoon-card bg-gradient-to-br from-white via-yellow-50 to-pink-50 dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-700 p-6 hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-2xl font-bold font-display mb-6 text-black dark:text-white text-center">
                {skillGroup.category}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <SkillItem key={skill.name} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mt-20 cartoon-card bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-700 p-8 text-center"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <h3 className="text-3xl font-bold font-display mb-4 text-black dark:text-white">
            Ready to Build Your Next Project!
          </h3>
          <p className="text-black dark:text-white text-lg max-w-2xl mx-auto mb-8 font-medium">
            From concept to deployment, I handle the entire development lifecycle. Frontend magic, backend wizardry,
            database design, and AI integration - let's make it happen! 🚀
          </p>
          <motion.button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="cartoon-button bg-gradient-to-r from-pink-400 to-purple-500 text-white border-black font-bold text-lg px-8 py-3"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Collaborate! 💬
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

interface SkillItemProps {
  skill: {
    name: string
    icon: string
    color: string
  }
  index: number
}

function SkillItem({ skill, index }: SkillItemProps) {
  // Set skill levels based on Shivam's expertise
  const skillLevels: { [key: string]: number } = {
    "React.js": 95,
    "Node.js": 92,
    "Express.js": 90,
    MongoDB: 88,
    TypeScript: 85,
    "Next.js": 87,
    "Tailwind CSS": 93,
    PostgreSQL: 85,
    MySQL: 85,
    Redux: 88,
    Bootstrap: 90,
    GitHub: 95,
    Java: 80,
    Figma: 85,
    Git: 90,
    "VS Code": 95,
    "HTML/CSS": 95,
    "AI Integration": 82,
    "RESTful APIs": 92,
    GraphQL: 85,
    Docker: 75,
    AWS: 70,
    Firebase: 85,
    JWT: 88,
  }

  const level = skillLevels[skill.name] || 85

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -5 }}
    >
      <motion.div
        className={`w-16 h-16 mb-3 rounded-xl bg-gradient-to-br ${skill.color} border-3 border-black flex items-center justify-center shadow-lg p-2`}
        whileHover={{
          rotate: [0, 10, -10, 0],
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={skill.icon || "/placeholder.svg"}
          alt={skill.name}
          width={32}
          height={32}
          className="w-8 h-8 object-contain filter drop-shadow-sm"
          onError={(e) => {
            // Fallback to a generic icon if the specific one fails
            const target = e.target as HTMLImageElement
            target.src = "/placeholder.svg?height=32&width=32"
          }}
        />
      </motion.div>

      <span className="text-sm font-bold text-black dark:text-white mb-2 text-center leading-tight min-h-[2.5rem] flex items-center">
        {skill.name}
      </span>

      <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full border-2 border-black overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: index * 0.05 }}
          viewport={{ once: true }}
        />
      </div>

      <span className="text-xs text-black/70 dark:text-white/70 mt-1 font-medium">{level}%</span>
    </motion.div>
  )
}
