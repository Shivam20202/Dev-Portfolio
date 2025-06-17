"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX, Music, Pause, Play } from "lucide-react"

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [showControls, setShowControls] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.loop = true
    }
  }, [volume])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(console.error)
      }
      setIsPlaying(!isPlaying)
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

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        src="/music/background-music.mp3"
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Music Control Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        onHoverStart={() => setShowControls(true)}
        onHoverEnd={() => setShowControls(false)}
      >
        {/* Main Music Button */}
        <motion.button
          onClick={togglePlay}
          className={`w-16 h-16 rounded-full border-4 border-black flex items-center justify-center transition-all duration-300 ${
            isPlaying
              ? "bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-500/30"
              : "bg-gradient-to-br from-gray-400 to-gray-600 shadow-lg shadow-gray-500/30"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4, type: "spring", stiffness: 260, damping: 20 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isPlaying ? "pause" : "play"}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white ml-1" />}
            </motion.div>
          </AnimatePresence>

          {/* Animated music waves when playing */}
          {isPlaying && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-300"
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-emerald-300"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
              />
            </>
          )}
        </motion.button>

        {/* Extended Controls */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="absolute bottom-20 right-0 cartoon-card bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-700 p-4 min-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <Music className="w-5 h-5 text-black dark:text-white" />
                <span className="font-bold text-black dark:text-white text-sm">Background Music</span>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-2 mb-3">
                <button
                  onClick={toggleMute}
                  className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-black dark:text-white" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-black dark:text-white" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${volume * 100}%, #e5e7eb ${
                      volume * 100
                    }%, #e5e7eb 100%)`,
                  }}
                />
              </div>

              {/* Status */}
              <div className="text-xs text-black/70 dark:text-white/70 text-center">
                {isPlaying ? "🎵 Now Playing" : "⏸️ Paused"}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Music note animations */}
        {isPlaying && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl pointer-events-none"
                style={{
                  top: `${-20 - i * 15}px`,
                  left: `${20 + i * 10}px`,
                }}
                animate={{
                  y: [-20, -60],
                  opacity: [0, 1, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.5,
                  ease: "easeOut",
                }}
              >
                🎵
              </motion.div>
            ))}
          </>
        )}
      </motion.div>
    </>
  )
}
