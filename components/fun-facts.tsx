"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const funFacts = [
  {
    icon: "💻",
    fact: "Built 25+ web apps that impressed users and passed every test with flying colors.",
    color: "from-blue-400 to-cyan-500",
  },

  {
    icon: "🎸",
    fact: "Can fix a React bug while strumming chords on my guitar.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: "🎤",
    fact: "I sing while coding—debugging sounds better in melody!",
    color: "from-purple-400 to-indigo-500",
  },
  {
    icon: "🚀",
    fact: "Interned at Aspireit & Future Steps, where I launched features faster than SpaceX.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: "📱",
    fact: "Designed pixel-perfect UIs that even Figma would approve of.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: "🤖",
    fact: "Integrated AI into my apps—because normal apps are too mainstream.",
    color: "from-orange-400 to-red-500",
  },
  {
    icon: "☕",
    fact: "Fueled by coffee and code—probably 1% blood, 99% caffeine.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: "🎯",
    fact: "Solved 20+ coding problems... and only cried over 5 of them.",
    color: "from-teal-400 to-blue-500",
  },
  {
    icon: "🎧",
    fact: "Code editor, browser tabs, and Spotify—my perfect debugging setup.",
    color: "from-fuchsia-500 to-violet-500",
  },
  {
    icon: "🔥",
    fact: "2024 graduate mixing engineering, design, and dad jokes into every commit.",
    color: "from-amber-400 to-red-500",
  },
]


export default function FunFacts() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length)
    }, 4000) // Change fact every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const currentFact = funFacts[currentFactIndex]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-black">
            Fun <span className="gradient-text drop-shadow-lg">Developer Facts!</span>
          </h2>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFactIndex}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`cartoon-card bg-gradient-to-br ${currentFact.color} p-8 mx-auto max-w-2xl`}
              >
                <motion.div
                  className="text-6xl mb-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  {currentFact.icon}
                </motion.div>

                <p className="text-white text-xl font-bold leading-relaxed">{currentFact.fact}</p>
              </motion.div>
            </AnimatePresence>

            {/* Progress indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {funFacts.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full border-2 border-black ${index === currentFactIndex ? "bg-black" : "bg-white"
                    }`}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentFactIndex(index)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full border-4 border-black opacity-20"
            animate={{
              y: [0, -20, 0],
              rotate: 360,
            }}
            transition={{
              y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
          />

          <motion.div
            className="absolute bottom-10 right-10 w-12 h-12 bg-pink-400 rounded-full border-4 border-black opacity-20"
            animate={{
              y: [0, 20, 0],
              rotate: -360,
            }}
            transition={{
              y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
          />

          <motion.div
            className="absolute top-1/2 right-5 w-8 h-8 bg-cyan-400 rounded-full border-3 border-black opacity-30"
            animate={{
              x: [0, 15, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
