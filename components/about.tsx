"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="about" ref={containerRef} className="section-container overflow-hidden">
      <motion.div className="container mx-auto" style={{ opacity }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y: y1 }} className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 dark:text-white">
              About <span className="gradient-text">Me!</span>
            </h2>

            {/* Comic-style speech bubble */}
            <div className="relative cartoon-card bg-white dark:bg-indigo-800 p-6 mb-8">
              <div className="absolute -right-4 -top-4 w-12 h-12 bg-pink-400 rounded-full border-4 border-black flex items-center justify-center text-black font-bold text-xl">
                Hi!
              </div>

              <p className="text-black dark:text-white font-bold mb-4">
                I'm Shivam, a passionate full-stack developer who loves building amazing web applications! 😄
              </p>

              <p className="text-black dark:text-white mb-4">
                With expertise in React, Next.js, Node.js, and modern web technologies, I create digital experiences that are
                both functional and delightful.
              </p>

              <p className="text-black dark:text-white">
               Previously worked as a Full-Stack Developer Intern at Aspireit, where I built real-world applications and contributed to AI integration!
              </p>

              {/* Decorative zigzag border at bottom */}
              <div className="absolute -bottom-5 left-0 right-0 h-5 zigzag" />
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                className="cartoon-card bg-white dark:bg-indigo-800 p-4"
                whileHover={{ rotate: [-2, 2, -2, 0], scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-display text-xl text-black dark:text-white mb-2">Super Powers</h3>
                <p className="text-black dark:text-white text-sm">Full-stack development & AI integration</p>
              </motion.div>

              <motion.div
                className="cartoon-card bg-white dark:bg-indigo-800 p-4"
                whileHover={{ rotate: [2, -2, 2, 0], scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-display text-xl text-black dark:text-white mb-2">Experience</h3>
                <p className="text-black dark:text-white text-sm">Building scalable web apps since 2024</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="relative order-1 lg:order-2" style={{ y: y2 }}>
            {/* Character illustration with proper overflow handling */}
            <div className="relative cartoon-card bg-white dark:bg-indigo-800 p-4 aspect-[4/5] overflow-hidden">
              {/* Cartoon character */}
              <div className="relative w-full h-full">
                {/* Background elements - positioned safely within bounds */}
                <motion.div
                  className="absolute top-16 right-12 w-16 h-16 bg-yellow-400 rounded-full opacity-50"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />

                <motion.div
                  className="absolute bottom-24 left-12 w-12 h-12 bg-cyan-400 rounded-full opacity-50"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />

                {/* Character placeholder - replace with actual character image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/shivam.jpg?height=400&width=300"
                    alt="Cartoon developer character"
                    width={300}
                    height={400}
                    className="object-contain"
                  />
                </div>

                {/* Comic style elements - positioned safely */}
                <motion.div
                  className="absolute top-8 left-8 bg-pink-500 text-white font-bold p-2 rounded-lg transform rotate-12 border-4 border-black"
                  animate={{ rotate: [12, 8, 12] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <span className="font-display text-xl">CODE!</span>
                </motion.div>

                <motion.div
                  className="absolute bottom-12 right-8 bg-cyan-400 text-black font-bold p-2 rounded-lg transform -rotate-6 border-4 border-black"
                  animate={{ rotate: [-6, -10, -6] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                >
                  <span className="font-display text-xl">REACT!</span>
                </motion.div>
              </div>
            </div>

            {/* Decorative elements - positioned to avoid cutoff */}
            <motion.div
              className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full border-4 border-black"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <motion.div
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-pink-400 rounded-full border-4 border-black"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
