"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Sparkles, Zap } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const [isAnimating, setIsAnimating] = useState(false)
  const [showHint, setShowHint] = useState(true)

  useEffect(() => {
    setMounted(true)

    // Show hint immediately and hide after 8 seconds
    const timer = setTimeout(() => {
      setShowHint(false)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = currentTheme === "dark"

  const handleThemeChange = () => {
    setIsAnimating(true)
    setShowHint(false)
    setTheme(isDark ? "light" : "dark")

    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }

  return (
    <>
      {/* Attention-grabbing Theme Toggle Button - Positioned to avoid navigation */}
      <motion.div className="fixed top-20 right-4 sm:top-24 sm:right-6 md:top-28 md:right-8 lg:top-32 lg:right-12 xl:top-6 xl:right-6 z-50">
        {/* Pulsing background glow */}
        <motion.div
          className={`absolute inset-0 rounded-full blur-xl ${isDark ? "bg-purple-500/40" : "bg-yellow-400/40"}`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Rotating ring */}
        <motion.div
          className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 border-2 sm:border-3 md:border-4 border-dashed border-pink-500 rounded-full -m-1"
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Main button */}
        <motion.button
          onClick={handleThemeChange}
          className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 sm:border-3 md:border-4 border-black flex items-center justify-center transition-all duration-500 overflow-hidden ${
            isDark
              ? "bg-gradient-to-br from-indigo-800 to-purple-900 text-yellow-300 shadow-lg shadow-purple-500/50"
              : "bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg shadow-yellow-500/50"
          }`}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.5, type: "spring", stiffness: 260, damping: 20 }}
          disabled={isAnimating}
        >
          {/* Sparkle effects */}
          <motion.div
            className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0,
            }}
          />
          <motion.div
            className="absolute bottom-0.5 left-0.5 sm:bottom-1 sm:left-1 w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-yellow-200 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-0.5 sm:left-1 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-pink-300 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: 1,
            }}
          />

          {/* Icon with animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={isDark ? "moon" : "sun"}
              initial={{ rotate: -180, opacity: 0, scale: 0 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 180, opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative z-10"
            >
              {isDark ? (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
              ) : (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Animated background gradient */}
          <motion.div
            className={`absolute inset-0 rounded-full ${
              isDark
                ? "bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600"
                : "bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400"
            }`}
            animate={{
              background: isDark
                ? [
                    "linear-gradient(45deg, #9333ea, #ec4899, #4f46e5)",
                    "linear-gradient(90deg, #ec4899, #4f46e5, #9333ea)",
                    "linear-gradient(135deg, #4f46e5, #9333ea, #ec4899)",
                    "linear-gradient(45deg, #9333ea, #ec4899, #4f46e5)",
                  ]
                : [
                    "linear-gradient(45deg, #fb923c, #facc15, #ef4444)",
                    "linear-gradient(90deg, #facc15, #ef4444, #fb923c)",
                    "linear-gradient(135deg, #ef4444, #fb923c, #facc15)",
                    "linear-gradient(45deg, #fb923c, #facc15, #ef4444)",
                  ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.button>

        {/* Floating sparkles around button - Responsive sizing */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-yellow-300 rounded-full"
            style={{
              top: `${15 + Math.sin((i * Math.PI) / 3) * 15}px`,
              left: `${15 + Math.cos((i * Math.PI) / 3) * 15}px`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Hint tooltip - Smart positioning to avoid overlaps */}
        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-full mt-3 right-0 sm:left-[-160px] sm:top-1/2 sm:-translate-y-1/2 sm:mt-0 md:left-[-180px] lg:left-[-200px] cartoon-card bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2 sm:p-3 pointer-events-none max-w-[160px] sm:max-w-none z-10"
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="font-bold text-xs sm:text-sm whitespace-nowrap">Change theme!</span>
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              </div>

              {/* Arrow pointing to button - Responsive positioning */}
              <div className="absolute top-[-6px] right-4 sm:right-[-6px] sm:top-1/2 sm:-translate-y-1/2 w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-b-6 border-b-purple-600 sm:border-l-6 sm:border-l-purple-600 sm:border-t-3 sm:border-t-transparent sm:border-b-3 sm:border-b-transparent sm:border-r-0" />

              {/* Animated pulse */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-white/20"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Animated Theme Transition Overlay */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className="fixed inset-0 z-40 pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Sun to Moon Transition */}
            <motion.div
              className={`absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full ${
                isDark
                  ? "bg-gradient-to-br from-yellow-300 to-yellow-500"
                  : "bg-gradient-to-br from-blue-200 to-indigo-300"
              }`}
              initial={{
                top: isDark ? "20%" : "80%",
                right: isDark ? "8%" : "8%",
                scale: isDark ? 1 : 0.8,
              }}
              animate={{
                top: isDark ? "80%" : "20%",
                right: "8%",
                scale: isDark ? 0.8 : 1,
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                boxShadow: isDark ? "0 0 60px 30px rgba(255, 214, 0, 0.3)" : "0 0 60px 30px rgba(147, 197, 253, 0.3)",
              }}
            />

            {/* Stars Animation (only when going to dark) */}
            {isDark && (
              <>
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-yellow-200 rounded-full"
                    style={{
                      top: `${Math.random() * 60}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0.7, 1],
                      scale: [0, 1, 0.8, 1],
                      rotate: 360,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.3 + Math.random() * 0.5,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </>
            )}

            {/* Clouds Animation - Responsive sizing */}
            <motion.div
              className={`absolute w-12 h-6 sm:w-16 sm:h-8 md:w-20 md:h-10 lg:w-24 lg:h-12 rounded-full ${
                isDark ? "bg-indigo-700" : "bg-white"
              }`}
              style={{
                top: "30%",
                left: "20%",
                boxShadow: `
                  8px 0 0 0 currentColor, 
                  16px 0 0 0 currentColor, 
                  24px 0 0 0 currentColor,
                  8px 4px 0 0 currentColor, 
                  16px 4px 0 0 currentColor
                `,
              }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.7 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            <motion.div
              className={`absolute w-10 h-5 sm:w-14 sm:h-7 md:w-16 md:h-8 lg:w-20 lg:h-10 rounded-full ${
                isDark ? "bg-indigo-700" : "bg-white"
              }`}
              style={{
                top: "50%",
                right: "25%",
                boxShadow: `
                  6px 0 0 0 currentColor, 
                  12px 0 0 0 currentColor, 
                  18px 0 0 0 currentColor,
                  6px 3px 0 0 currentColor, 
                  12px 3px 0 0 currentColor
                `,
              }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.7 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Color Transition Wave */}
            <motion.div
              className={`absolute inset-0 ${
                isDark
                  ? "bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800"
                  : "bg-gradient-to-b from-blue-200 via-yellow-100 to-orange-200"
              }`}
              initial={{ clipPath: "circle(0% at 50% 50%)" }}
              animate={{ clipPath: "circle(150% at 50% 50%)" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
