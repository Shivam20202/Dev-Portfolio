"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center cartoon-bg"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          <div className="relative w-full max-w-md h-64 cartoon-card p-8 flex flex-col items-center justify-center">
            <h2 className="font-display text-4xl text-black mb-6">LOADING...</h2>

            <div className="w-full h-8 bg-gray-200 rounded-full border-4 border-black overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-pink-500 via-yellow-500 to-cyan-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </div>

            <div className="mt-8 relative h-16 w-full">
              {/* Running character animation */}
              <motion.div
                className="absolute bottom-0 left-0"
                animate={{
                  x: ["-10%", "110%"],
                  scaleX: [1, 1, 1, -1, -1, -1, 1, 1],
                }}
                transition={{
                  x: { duration: 2.5, ease: "linear" },
                  scaleX: { duration: 2.5, times: [0, 0.4, 0.45, 0.5, 0.9, 0.95, 1] },
                }}
              >
                <div className="relative w-16 h-16">
                  <div className="absolute bottom-0 w-8 h-12 bg-blue-500 rounded-t-lg" /> {/* Body */}
                  <div className="absolute bottom-12 left-1 w-6 h-6 bg-yellow-200 rounded-full" /> {/* Head */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-2 h-6 bg-blue-500 origin-top"
                    animate={{ rotate: [-30, 30, -30] }}
                    transition={{ duration: 0.3, repeat: Number.POSITIVE_INFINITY }}
                  />{" "}
                  {/* Left leg */}
                  <motion.div
                    className="absolute bottom-0 left-6 w-2 h-6 bg-blue-500 origin-top"
                    animate={{ rotate: [30, -30, 30] }}
                    transition={{ duration: 0.3, repeat: Number.POSITIVE_INFINITY }}
                  />{" "}
                  {/* Right leg */}
                  <motion.div
                    className="absolute bottom-8 left-8 w-5 h-2 bg-blue-500 origin-left"
                    animate={{ rotate: [-30, 30, -30] }}
                    transition={{ duration: 0.3, repeat: Number.POSITIVE_INFINITY }}
                  />{" "}
                  {/* Right arm */}
                  <motion.div
                    className="absolute bottom-8 left-0 w-5 h-2 bg-blue-500 origin-right"
                    animate={{ rotate: [30, -30, 30] }}
                    transition={{ duration: 0.3, repeat: Number.POSITIVE_INFINITY }}
                  />{" "}
                  {/* Left arm */}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
