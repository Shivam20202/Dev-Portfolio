"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { AnimatePresence } from "framer-motion"

export default function CartoonBackground() {
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = currentTheme === "dark"

  return (
    <motion.div
      className={`fixed inset-0 -z-10 overflow-hidden transition-all duration-1000 ${
        isDark
          ? "bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800"
          : "bg-gradient-to-b from-blue-200 via-yellow-100 to-orange-200"
      }`}
      animate={{
        background: isDark
          ? "linear-gradient(to bottom, #312e81, #581c87, #312e81)"
          : "linear-gradient(to bottom, #bfdbfe, #fef3c7, #fed7aa)",
      }}
      transition={{ duration: 1 }}
    >
      {/* Animated Clouds */}
      <motion.div
        className={`absolute w-32 h-16 rounded-full transition-colors duration-1000 ${
          isDark ? "bg-indigo-700" : "bg-white"
        }`}
        style={{
          top: "10%",
          left: "5%",
          boxShadow: `
            20px 0 0 0 currentColor, 
            40px 0 0 0 currentColor, 
            60px 0 0 0 currentColor,
            80px 0 0 0 currentColor,
            20px 12px 0 0 currentColor, 
            40px 12px 0 0 currentColor, 
            60px 12px 0 0 currentColor,
            80px 12px 0 0 currentColor
          `,
        }}
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className={`absolute w-40 h-20 rounded-full transition-colors duration-1000 ${
          isDark ? "bg-indigo-700" : "bg-white"
        }`}
        style={{
          top: "20%",
          right: "10%",
          boxShadow: `
            25px 0 0 0 currentColor, 
            50px 0 0 0 currentColor, 
            75px 0 0 0 currentColor,
            100px 0 0 0 currentColor,
            25px 15px 0 0 currentColor, 
            50px 15px 0 0 currentColor, 
            75px 15px 0 0 currentColor,
            100px 15px 0 0 currentColor
          `,
        }}
        animate={{ x: [0, -120, 0] }}
        transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className={`absolute w-24 h-12 rounded-full transition-colors duration-1000 ${
          isDark ? "bg-indigo-700" : "bg-white"
        }`}
        style={{
          top: "30%",
          left: "30%",
          boxShadow: `
            15px 0 0 0 currentColor, 
            30px 0 0 0 currentColor, 
            45px 0 0 0 currentColor,
            15px 8px 0 0 currentColor, 
            30px 8px 0 0 currentColor
          `,
        }}
        animate={{ x: [0, 80, 0] }}
        transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Optimized Stars (only in dark mode) */}
      <AnimatePresence>
        {isDark && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Large beautiful stars */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-yellow-200 rounded-full"
                style={{
                  width: `${Math.random() * 6 + 4}px`,
                  height: `${Math.random() * 6 + 4}px`,
                  top: `${Math.random() * 70}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [0.8, 1.3, 0.8],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sun or Moon */}
      <motion.div
        className={`absolute w-32 h-32 rounded-full transition-all duration-1000 ${
          isDark
            ? "bg-gradient-to-br from-blue-200 to-indigo-300 shadow-blue-300/50"
            : "bg-gradient-to-br from-yellow-400 to-orange-500 shadow-yellow-400/70"
        }`}
        style={{ top: "15%", right: "15%" }}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
          boxShadow: isDark ? "0 0 80px 40px rgba(147, 197, 253, 0.3)" : "0 0 80px 40px rgba(251, 191, 36, 0.4)",
        }}
        transition={{
          rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          boxShadow: { duration: 1 },
        }}
      />

      {/* Hills */}
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-[30vh] rounded-t-[50%] opacity-70 transition-colors duration-1000 ${
          isDark ? "bg-indigo-800" : "bg-green-600"
        }`}
        animate={{
          backgroundColor: isDark ? "#1e1b4b" : "#16a34a",
        }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className={`absolute bottom-0 left-[-10%] right-[-10%] h-[20vh] rounded-t-[40%] opacity-70 transition-colors duration-1000 ${
          isDark ? "bg-indigo-700" : "bg-green-500"
        }`}
        animate={{
          backgroundColor: isDark ? "#312e81" : "#22c55e",
        }}
        transition={{ duration: 1 }}
      />

      {/* Trees */}
      <div className="absolute bottom-[20vh] left-[10%] w-20 h-40">
        <motion.div
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-20 rounded-sm transition-colors duration-1000 ${
            isDark ? "bg-yellow-900" : "bg-yellow-800"
          }`}
          animate={{
            backgroundColor: isDark ? "#92400e" : "#a16207",
          }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className={`absolute bottom-[70px] left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full transition-colors duration-1000 ${
            isDark ? "bg-green-800" : "bg-green-600"
          }`}
          animate={{
            rotate: [-2, 2, -2],
            backgroundColor: isDark ? "#166534" : "#16a34a",
          }}
          transition={{
            rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            backgroundColor: { duration: 1 },
          }}
        />
      </div>

      <div className="absolute bottom-[15vh] right-[15%] w-16 h-32">
        <motion.div
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-16 rounded-sm transition-colors duration-1000 ${
            isDark ? "bg-yellow-900" : "bg-yellow-800"
          }`}
          animate={{
            backgroundColor: isDark ? "#92400e" : "#a16207",
          }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className={`absolute bottom-[60px] left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full transition-colors duration-1000 ${
            isDark ? "bg-green-800" : "bg-green-600"
          }`}
          animate={{
            rotate: [2, -2, 2],
            backgroundColor: isDark ? "#166534" : "#16a34a",
          }}
          transition={{
            rotate: { duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            backgroundColor: { duration: 1 },
          }}
        />
      </div>

      {/* Floating elements */}
      <motion.div
        className={`absolute w-8 h-8 rounded-full transition-colors duration-1000 ${
          isDark ? "bg-purple-400" : "bg-pink-400"
        }`}
        style={{ top: "40%", left: "20%" }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          backgroundColor: isDark ? "#c084fc" : "#f472b6",
        }}
        transition={{
          y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          x: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          backgroundColor: { duration: 1 },
        }}
      />

      <motion.div
        className={`absolute w-6 h-6 rounded-full transition-colors duration-1000 ${
          isDark ? "bg-cyan-300" : "bg-yellow-400"
        }`}
        style={{ top: "60%", right: "25%" }}
        animate={{
          y: [0, -15, 0],
          x: [0, -8, 0],
          backgroundColor: isDark ? "#67e8f9" : "#facc15",
        }}
        transition={{
          y: { duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          x: { duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          backgroundColor: { duration: 1 },
        }}
      />

      <motion.div
        className={`absolute w-10 h-10 rounded-full transition-colors duration-1000 ${
          isDark ? "bg-pink-300" : "bg-cyan-400"
        }`}
        style={{ top: "70%", left: "70%" }}
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          backgroundColor: isDark ? "#f9a8d4" : "#22d3ee",
        }}
        transition={{
          y: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          x: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          backgroundColor: { duration: 1 },
        }}
      />
    </motion.div>
  )
}
