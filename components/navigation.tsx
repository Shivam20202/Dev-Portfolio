"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Briefcase, Code, Mail, GraduationCap } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)


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
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Contact", href: "#contact", icon: Mail },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const targetId = href.replace("#", "")
    setActiveSection(targetId)

    const element = document.getElementById(targetId)
    if (element) {
     
      const navHeight = 120 
      const elementPosition = element.offsetTop - navHeight

      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: "smooth",
      })
    }
  }

  const handleLogoClick = () => {
    setActiveSection("home")
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        ref={navRef}
        className={`fixed top-4 left-4 right-4 z-40 transition-all duration-500 ${scrolled ? "top-2" : "top-6"}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`cartoon-card bg-gradient-to-r from-white via-yellow-50 to-white dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-700 p-4 transition-all duration-500 ${
              scrolled ? "shadow-2xl" : "shadow-xl"
            }`}
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #fef3c7 50%, #ffffff 100%)",
              boxShadow: scrolled
                ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 8px 8px 0px #000"
                : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 8px 8px 0px #000",
            }}
          >
            <div className="flex items-center justify-between">
              <motion.button
                onClick={handleLogoClick}
                className="text-3xl font-bold font-display text-black dark:text-white cursor-pointer px-2"
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <span className="gradient-text drop-shadow-lg tracking-wide px-2">S.DEV</span>
              </motion.button>

              <div className="hidden lg:flex items-center space-x-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.href.replace("#", "")
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={`relative px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 border-3 border-black ${
                        isActive
                          ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-lg"
                          : "bg-gradient-to-r from-blue-100 to-purple-100 dark:from-indigo-600 dark:to-purple-600 text-black dark:text-white hover:from-yellow-400 hover:to-orange-400 dark:hover:from-pink-500 dark:hover:to-purple-500"
                      }`}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        boxShadow: isActive ? "0 8px 25px rgba(0,0,0,0.3)" : "0 6px 20px rgba(0,0,0,0.2)",
                      }}
                      whileTap={{ scale: 0.95, y: 0 }}
                      style={{
                        boxShadow: isActive ? "4px 4px 0px #000" : "3px 3px 0px #000",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </div>

                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-black"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  )
                })}
              </div>

              <div className="lg:hidden">
                <motion.button
                  onClick={() => setIsOpen(true)}
                  className="cartoon-button bg-gradient-to-r from-pink-400 to-purple-500 text-white border-black"
                  whileHover={{ scale: 1.05, rotate: [0, 10, -10, 0] }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full border-3 border-black"
          animate={{ rotate: 360, y: [0, -5, 0] }}
          transition={{
            rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            y: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full border-3 border-black"
          animate={{ rotate: -360, y: [0, 5, 0] }}
          transition={{
            rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="relative cartoon-card bg-gradient-to-br from-white via-yellow-50 to-pink-50 dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-700 p-8 w-[90%] max-w-md"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-display text-4xl text-black dark:text-white gradient-text">MENU</h2>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="cartoon-button bg-red-400 text-white border-black hover:bg-red-500"
                  whileHover={{ scale: 1.1, rotate: [0, 90, 0] }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="space-y-4">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.href.replace("#", "")
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                    >
                      <motion.button
                        onClick={() => handleNavClick(item.href)}
                        className={`cartoon-button w-full text-left flex items-center gap-3 border-black ${
                          isActive
                            ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white"
                            : "bg-white dark:bg-indigo-700 text-black dark:text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 dark:hover:from-pink-500 dark:hover:to-purple-500"
                        }`}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-bold">{item.name}</span>
                        {isActive && (
                          <motion.div
                            className="ml-auto w-3 h-3 bg-red-500 rounded-full border-2 border-black"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500 }}
                          />
                        )}
                      </motion.button>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
