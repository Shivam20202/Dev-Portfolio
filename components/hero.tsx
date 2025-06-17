"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import ResumeDownload from "@/components/resume-download"

const programmingFacts = [
  {
    icon: "🐛",
    fact: "The first computer bug was an actual bug - a moth found in a Harvard computer in 1947!",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: "☕",
    fact: "Java was originally called Oak, named after an oak tree outside James Gosling's office!",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: "🎮",
    fact: "The first video game was created in 1958 and was called 'Tennis for Two'!",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: "💾",
    fact: "The term 'debugging' was coined by Admiral Grace Hopper in the 1940s!",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: "🌐",
    fact: "The first website ever created is still online at info.cern.ch!",
    color: "from-teal-400 to-blue-500",
  },
  {
    icon: "🔢",
    fact: "Binary code was invented in 1679 by Gottfried Leibniz, way before computers!",
    color: "from-indigo-400 to-purple-500",
  },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentFactIndex, setCurrentFactIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % programmingFacts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const currentFact = programmingFacts[currentFactIndex]

  return (
    <motion.section
      id="home"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-20 md:pt-16 lg:pt-0"
      style={{ opacity, scale, y }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="mb-4 sm:mb-6 inline-block"
        >
          <span className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 cartoon-card bg-gradient-to-r from-white to-yellow-100 dark:from-indigo-800 dark:to-purple-800 text-black dark:text-white font-bold text-sm sm:text-base md:text-lg">
            Shivam Pandey 👨‍💻
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold font-display mb-4 sm:mb-6 tracking-tight leading-tight"
        >
          <motion.span
            className="block text-black dark:text-white mb-2 sm:mb-3 md:mb-4"
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            Building Epic
          </motion.span>
          <motion.span
            className="block gradient-text"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            Full-Stack Solutions!
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 0.8 }}
          className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 font-medium dark:text-white px-4 sm:px-0 leading-relaxed"
        >
          From React frontends to Node.js backends, database design to AI integration - I craft complete digital
          experiences that scale and perform! 🚀
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16"
        >
          <motion.button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="cartoon-button bg-gradient-to-r from-pink-400 to-purple-500 text-white border-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work! 🎨
          </motion.button>

          <motion.button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="cartoon-button bg-white dark:bg-indigo-700 text-black dark:text-white border-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:bg-yellow-400 dark:hover:bg-purple-600 w-full sm:w-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Collaborate! 💬
          </motion.button>

          <div className="w-full sm:w-auto flex justify-center">
            <ResumeDownload />
          </div>
        </motion.div>

        {/* Programming Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.8 }}
          className="max-w-2xl mx-auto px-4 sm:px-0"
        >
          <h3 className="text-base sm:text-lg font-bold dark:text-white mb-3 sm:mb-4">💡 Programming Fun Fact:</h3>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentFactIndex}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`cartoon-card bg-gradient-to-br ${currentFact.color} p-4 sm:p-6`}
            >
              <motion.div
                className="text-3xl sm:text-4xl mb-2 sm:mb-3"
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

              <p className="text-white text-base sm:text-lg font-bold leading-relaxed">{currentFact.fact}</p>
            </motion.div>
          </AnimatePresence>

          {/* Progress indicators */}
          <div className="flex justify-center mt-4 sm:mt-6 gap-2">
            {programmingFacts.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full border-2 border-black dark:border-white ${
                  index === currentFactIndex ? "bg-black dark:bg-white" : "bg-white dark:bg-transparent"
                }`}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentFactIndex(index)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </motion.div>

        {/* Decorative elements - hidden on mobile for better performance */}
        <div className="hidden md:block">
          <motion.div
            className="absolute top-1/4 -left-20 w-40 h-40"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="w-full h-full relative">
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-pink-500 rounded-full border-4 border-black"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
              />
              <motion.div
                className="absolute top-1/4 right-0 w-10 h-10 bg-yellow-400 rounded-full border-4 border-black"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-cyan-400 rounded-full border-4 border-black"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-10 h-10 bg-green-500 rounded-full border-4 border-black"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 -right-20 w-40 h-40"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="w-full h-full relative">
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-purple-500 rounded-full border-4 border-black"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
              />
              <motion.div
                className="absolute top-1/4 right-0 w-10 h-10 bg-red-400 rounded-full border-4 border-black"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-blue-400 rounded-full border-4 border-black"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-10 h-10 bg-orange-500 rounded-full border-4 border-black"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
