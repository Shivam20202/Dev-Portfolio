"use client"

import { type ReactNode, useEffect, useState } from "react"
import Lenis from "@studio-freight/lenis"

interface SmoothScrollProviderProps {
  children: ReactNode
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    setLenis(lenisInstance)

    const raf = (time: number) => {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Wait a bit to ensure everything is loaded
    setTimeout(() => {
      setIsReady(true)
    }, 500)

    return () => {
      lenisInstance.destroy()
    }
  }, [])

  return <div className={`transition-opacity duration-1000 ${isReady ? "opacity-100" : "opacity-0"}`}>{children}</div>
}
