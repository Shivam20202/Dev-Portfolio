"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, FileText, Sparkles, CheckCircle } from "lucide-react"

export default function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [isDownloaded, setIsDownloaded] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)

    setTimeout(() => {
      setIsDownloading(false)
      setIsDownloaded(true)

      const link = document.createElement("a")
      link.href = "/resume/Shivam-Pandey-Resume.pdf"
      link.download = "Shivam-Pandey-Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setTimeout(() => {
        setIsDownloaded(false)
      }, 3000)
    }, 1500)
  }

  return (
    <motion.div
      className="relative w-full sm:w-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 4.2, duration: 0.8, type: "spring" }}
    >
      {/* Sparkles */}
      <motion.div
        className="absolute -top-2 -right-2 text-yellow-400"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity },
        }}
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>

      <motion.div
        className="absolute -bottom-2 -left-2 text-pink-400"
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
          scale: { duration: 2.5, repeat: Infinity, delay: 0.5 },
        }}
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>

      <motion.button
        onClick={handleDownload}
        disabled={isDownloading}
        className="cartoon-button bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-white border-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto relative overflow-hidden group disabled:opacity-70"
        whileHover={!isDownloading ? { scale: 1.05, y: -2 } : {}}
        whileTap={!isDownloading ? { scale: 0.95 } : {}}
      >
        {/* Hover gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: "-100%" }}
          whileHover={{ x: "0%" }}
          transition={{ duration: 0.3 }}
        />

        {/* Main content */}
        <div className="relative z-10 flex items-center gap-3">
          <AnimatePresence mode="wait">
            {isDownloading ? (
              <motion.div
                key="downloading"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Download className="w-6 h-6" />
                </motion.div>
                <span>Downloading...</span>
              </motion.div>
            ) : isDownloaded ? (
              <motion.div
                key="downloaded"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-6 h-6" />
                <span>Downloaded!</span>
              </motion.div>
            ) : (
              <motion.div
                key="download"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3"
              >
                <FileText className="w-6 h-6" />
                <span>Download Resume</span>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Download className="w-5 h-5" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        {isDownloading && (
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        )}

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        />
      </motion.button>

      {/* Floating message */}
      <motion.div
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-sm font-bold text-black dark:text-white opacity-0"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        📄 Get my latest resume!
      </motion.div>
    </motion.div>
  )
}
