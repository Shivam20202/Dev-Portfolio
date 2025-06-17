"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX, Music, Pause, Play, ArrowUp, Headphones } from "lucide-react"

export default function SmartMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [showControls, setShowControls] = useState(false)
  const [currentSection, setCurrentSection] = useState("home")
  const [isVisible, setIsVisible] = useState(true)
  const [showUpArrow, setShowUpArrow] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const [showHint, setShowHint] = useState(true)
  const [autoPlayAttempted, setAutoPlayAttempted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.loop = true
    }
  }, [volume])

  // Immediate autoplay attempt when component mounts
  useEffect(() => {
    const attemptAutoPlay = async () => {
      if (audioRef.current && !autoPlayAttempted) {
        setAutoPlayAttempted(true)

        try {
          // Try to play immediately
          await audioRef.current.play()
          setIsPlaying(true)
          setShowHint(false)
        } catch (error) {
          console.log("Immediate autoplay blocked, waiting for user interaction:", error)
          // Keep hint visible for user interaction
        }
      }
    }

    // Small delay to ensure audio element is ready
    const timer = setTimeout(attemptAutoPlay, 1000)
    return () => clearTimeout(timer)
  }, [autoPlayAttempted])

  // Fallback user interaction detection
  useEffect(() => {
  const handleUserInteraction = async () => {
    if (audioRef.current && !isPlaying && !userPaused) {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
        setShowHint(false)
      } catch (error) {
        console.log("Play failed:", error)
      }
    }
  }

  const events = ["click", "touchstart", "keydown", "scroll", "wheel", "mousemove"]
  events.forEach((event) => {
    document.addEventListener(event, handleUserInteraction, { once: true, passive: true })
  })

  const hintTimer = setTimeout(() => {
    setShowHint(false)
  }, 10000)

  return () => {
    events.forEach((event) => {
      document.removeEventListener(event, handleUserInteraction)
    })
    clearTimeout(hintTimer)
  }
}, [isPlaying, userPaused]) // 👈 include userPaused as dependency


  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "education", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setCurrentSection(currentSection)
      }

      // Check if user is near the bottom of the page (footer area)
      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = document.documentElement.scrollTop
      const clientHeight = document.documentElement.clientHeight
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 200

      // Show up arrow instead of music player when near footer
      if (isNearBottom) {
        setIsVisible(false)
        setShowUpArrow(true)
      } else {
        // Show music player on important sections (but not at footer)
        const importantSections = ["home", "about", "contact"]
        setIsVisible(importantSections.includes(currentSection || "home"))
        setShowUpArrow(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const togglePlay = async () => {
  setShowHint(false)

  if (audioRef.current) {
    if (isPlaying) {
      audioRef.current.pause()
      setUserPaused(true) // user manually paused
      setIsPlaying(false)
    } else {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
        setUserPaused(false) // user resumed playing
      } catch (error) {
        console.error("Play failed:", error)
      }
    }
  }
}


  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Audio element with autoplay */}
      <audio
        ref={audioRef}
        src="/music/background-music.mp3"
        preload="auto"
        autoPlay
        muted={false}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(e) => {
          console.log("Audio error:", e)
          setShowHint(false)
        }}
        onCanPlay={() => {
          // Try to play when audio is ready
          if (audioRef.current && !isPlaying) {
            audioRef.current.play().catch(console.error)
          }
        }}
      />

      {/* Smart Music Control Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-6 right-6 z-40"
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onHoverStart={() => setShowControls(true)}
            onHoverEnd={() => setShowControls(false)}
          >
            {/* Helpful Hint */}
            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  className="absolute bottom-16 right-0 cartoon-card bg-gradient-to-r from-purple-500 to-pink-600 text-white p-3 pointer-events-none min-w-[200px]"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Headphones className="w-4 h-4" />
                    <span className="font-bold text-sm">🎵 Background Music</span>
                  </div>
                  <p className="text-xs opacity-90 mb-2">
                    {isPlaying ? "Music is playing! Click to pause" : "Click to play ambient music"}
                  </p>
                  <div className="text-xs opacity-75">🎶 Enjoy the coding vibes!</div>

                  {/* Arrow pointing to button */}
                  <div className="absolute bottom-[-8px] right-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-pink-600" />

                  {/* Animated pulse */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-white/20"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Enhanced Music Button */}
            <motion.button
              onClick={togglePlay}
              className={`w-16 h-16 rounded-full border-4 border-black flex items-center justify-center transition-all duration-300 relative overflow-hidden ${
                isPlaying
                  ? "bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 shadow-2xl shadow-green-500/50 animate-music-pulse"
                  : "bg-gradient-to-br from-slate-400 via-gray-500 to-slate-600 shadow-lg shadow-gray-500/30"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: isPlaying
                  ? "0 0 30px rgba(34, 197, 94, 0.6), 6px 6px 0px #000"
                  : "0 10px 25px rgba(0,0,0,0.2), 4px 4px 0px #000",
              }}
            >
              {/* Rotating ring when playing */}
              {isPlaying && (
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-yellow-400"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={isPlaying ? "pause" : "play"}
                  initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 text-white drop-shadow-lg" />
                  ) : (
                    <Play className="w-7 h-7 text-white ml-1 drop-shadow-lg" />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Enhanced music waves when playing */}
              {isPlaying && (
                <>
                  <motion.div
                    className="absolute inset-0 rounded-full border-3 border-emerald-300"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-green-300"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-teal-300"
                    animate={{ scale: [1, 2.1, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                  />
                </>
              )}

              {/* Sparkle effects when playing */}
              {isPlaying && (
                <>
                  <motion.div
                    className="absolute top-1 right-1 w-2 h-2 bg-yellow-300 rounded-full"
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
                    className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-white rounded-full"
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
                </>
              )}
            </motion.button>

            {/* Compact Controls */}
            <AnimatePresence>
              {showControls && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  className="absolute bottom-20 right-0 cartoon-card bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-700 p-3 min-w-[160px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Music className="w-4 h-4 text-black dark:text-white" />
                    <span className="font-bold text-black dark:text-white text-xs">Background Music</span>
                  </div>

                  {/* Volume Control */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-3 h-3 text-black dark:text-white" />
                      ) : (
                        <Volume2 className="w-3 h-3 text-black dark:text-white" />
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="flex-1 h-1 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #10b981 0%, #10b981 ${volume * 100}%, #e5e7eb ${
                          volume * 100
                        }%, #e5e7eb 100%)`,
                      }}
                    />
                  </div>

                  <div className="text-xs text-black/70 dark:text-white/70 text-center mt-1">
                    {isPlaying ? "🎵 Playing" : "⏸️ Paused"} • {Math.round(volume * 100)}%
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Enhanced music note animations */}
            {isPlaying && (
              <>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-xl pointer-events-none"
                    style={{
                      top: `${-20 - i * 12}px`,
                      left: `${20 + i * 10}px`,
                    }}
                    animate={{
                      y: [-20, -50],
                      opacity: [0, 1, 0],
                      rotate: [0, 360],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.4,
                      ease: "easeOut",
                    }}
                  >
                    🎵
                  </motion.div>
                ))}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Up Arrow Button (shows at footer) */}
      <AnimatePresence>
        {showUpArrow && (
          <motion.div
            className="fixed bottom-6 right-6 z-40"
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <motion.button
              onClick={handleGoToTop}
              className="w-16 h-16 rounded-full border-4 border-black flex items-center justify-center bg-gradient-to-br from-pink-400 to-purple-500 text-white shadow-2xl"
              whileHover={{
                scale: 1.15,
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3), 8px 8px 0px #000",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: "0 10px 30px rgba(0,0,0,0.2), 6px 6px 0px #000",
              }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <ArrowUp className="w-8 h-8 drop-shadow-lg" />
              </motion.div>
              <span className="sr-only">Back to top</span>

              {/* Pulsing ring effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-pink-300"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
