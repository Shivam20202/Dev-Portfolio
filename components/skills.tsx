"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", logo: "⚛️", color: "from-blue-400 to-cyan-400" },
      { name: "Next.js", logo: "🔺", color: "from-gray-700 to-black" },
      { name: "TypeScript", logo: "🔷", color: "from-blue-500 to-blue-700" },
      { name: "Redux", logo: "🔄", color: "from-purple-500 to-indigo-600" },
      { name: "Tailwind CSS", logo: "🌊", color: "from-cyan-400 to-blue-500" },
      { name: "Bootstrap", logo: "🅱️", color: "from-purple-600 to-pink-500" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", logo: "🟢", color: "from-green-500 to-emerald-600" },
      { name: "Express.js", logo: "🚂", color: "from-gray-600 to-gray-800" },
      { name: "MongoDB", logo: "🍃", color: "from-green-500 to-green-700" },
      { name: "PostgreSQL", logo: "🐘", color: "from-blue-500 to-indigo-600" },
      { name: "MySQL", logo: "🐬", color: "from-orange-500 to-red-600" },
      { name: "JWT", logo: "🔐", color: "from-yellow-500 to-orange-600" },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "GitHub", logo: "🐙", color: "from-gray-700 to-black" },
      { name: "Java", logo: "☕", color: "from-red-500 to-orange-600" },
      { name: "Figma", logo: "🎨", color: "from-purple-500 to-pink-600" },
      { name: "Authentication", logo: "🔒", color: "from-green-500 to-teal-600" },
      { name: "Cookies", logo: "🍪", color: "from-yellow-400 to-orange-500" },
      { name: "HTML/CSS", logo: "🌐", color: "from-orange-500 to-red-500" },
    ],
  },
  {
    category: "Specializations",
    items: [
      { name: "AI Integration", logo: "🤖", color: "from-purple-500 to-pink-600" },
      { name: "RESTful APIs", logo: "🔌", color: "from-blue-500 to-indigo-600" },
      { name: "GraphQL", logo: "🔗", color: "from-pink-500 to-purple-600" },
      { name: "Performance Optimization", logo: "⚡", color: "from-yellow-400 to-orange-500" },
      { name: "Responsive Design", logo: "📱", color: "from-teal-400 to-cyan-500" },
      { name: "Cross-Browser Compatibility", logo: "🌍", color: "from-green-400 to-blue-500" },
    ],
  },
]

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
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
    logo: string
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
    Authentication: 90,
    JWT: 88,
    Cookies: 85,
    "HTML/CSS": 95,
    "AI Integration": 82,
    "RESTful APIs": 92,
    GraphQL: 85,
    "Performance Optimization": 88,
    "Responsive Design": 95,
    "Cross-Browser Compatibility": 90,
  }

  const level = skillLevels[skill.name] || 85

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -5 }}
    >
      <motion.div
        className={`w-16 h-16 mb-3 rounded-xl bg-gradient-to-br ${skill.color} border-3 border-black flex items-center justify-center text-2xl shadow-lg`}
        whileHover={{
          rotate: [0, 10, -10, 0],
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        }}
        transition={{ duration: 0.5 }}
      >
        <span className="drop-shadow-sm">{skill.logo}</span>
      </motion.div>

      <span className="text-sm font-bold text-black dark:text-white mb-2 text-center leading-tight min-h-[2.5rem] flex items-center">
        {skill.name}
      </span>

      <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full border-2 border-black overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
          viewport={{ once: true }}
        />
      </div>

      <span className="text-xs text-black/70 dark:text-white/70 mt-1 font-medium">{level}%</span>
    </motion.div>
  )
}
