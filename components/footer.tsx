"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, Code, Coffee, Zap } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Shivam20202",
      color: "from-gray-600 to-black",
      hoverColor: "hover:from-gray-500 hover:to-gray-800",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/shivam-pandey",
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:from-blue-400 hover:to-blue-600",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:shivam00001234@gmail.com",
      color: "from-red-400 to-pink-500",
      hoverColor: "hover:from-red-300 hover:to-pink-400",
    },
  ]

  return (
    <footer className="relative mt-20 overflow-visible">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-500 via-yellow-500 to-cyan-500" />

      <div className="cartoon-card bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-indigo-900 dark:via-purple-900 dark:to-indigo-800 rounded-none border-x-0 border-b-0 border-t-4 p-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-4xl font-bold font-display mb-4 gradient-text"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                DEV.TOON
              </motion.h3>
              <p className="text-black dark:text-white text-lg font-medium mb-6 leading-relaxed">
                Full-Stack Developer crafting amazing digital experiences with React, Node.js, and modern web
                technologies. Let's build something epic together! 🚀
              </p>

              {/* Fun Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <motion.div
                  className="cartoon-card bg-gradient-to-r from-yellow-400 to-orange-500 p-3 text-center"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Coffee className="w-6 h-6 text-white mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">2847+</div>
                  <div className="text-white text-xs">Cups of Coffee</div>
                </motion.div>

                <motion.div
                  className="cartoon-card bg-gradient-to-r from-green-400 to-emerald-500 p-3 text-center"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Code className="w-6 h-6 text-white mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">25+</div>
                  <div className="text-white text-xs">Projects Built</div>
                </motion.div>

                <motion.div
                  className="cartoon-card bg-gradient-to-r from-purple-400 to-pink-500 p-3 text-center"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Zap className="w-6 h-6 text-white mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">24/7</div>
                  <div className="text-white text-xs">Ready to Code</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Connect Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold font-display mb-6 text-black dark:text-white">Let's Connect!</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.name !== "Email" ? "_blank" : undefined}
                      rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                      className={`cartoon-button bg-gradient-to-r ${social.color} ${social.hoverColor} text-white border-black flex items-center gap-3 py-2 px-4 w-full`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-bold">{social.name}</span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Simple Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t-4 border-black dark:border-white pt-8 text-center"
          >
            <p className="text-black dark:text-white font-bold text-lg flex items-center justify-center gap-2">
              © {currentYear} Shivam Pandey - Made with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-5 h-5 text-red-500 fill-current" />
              </motion.span>
              and lots of ☕
            </p>
          </motion.div>

          {/* Floating Decorative Elements */}
          <motion.div
            className="absolute top-10 right-10 w-12 h-12 bg-yellow-400 rounded-full border-4 border-black opacity-20"
            animate={{
              y: [0, -15, 0],
              rotate: 360,
            }}
            transition={{
              y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
          />

          <motion.div
            className="absolute bottom-10 left-10 w-8 h-8 bg-pink-400 rounded-full border-3 border-black opacity-20"
            animate={{
              y: [0, 10, 0],
              rotate: -360,
            }}
            transition={{
              y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
          />

          <motion.div
            className="absolute top-1/2 left-5 w-6 h-6 bg-cyan-400 rounded-full border-2 border-black opacity-30"
            animate={{
              x: [0, 10, 0],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </footer>
  )
}
