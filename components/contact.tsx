"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, Send, CheckCircle, XCircle, Loader } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9fcd7bd5-50e9-4f86-8b40-6052bf7e338d", 
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Portfolio Contact from ${formState.name}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormState({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
        setErrorMessage(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
        setErrorMessage("")
      }, 5000)
    }
  }

  return (
    <section id="contact" className="section-container">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-10%" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 dark:text-white">
              Let's Build Something <span className="gradient-text drop-shadow-lg">Epic Together!</span>
            </h2>
            <p className="text-black dark:text-white text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Ready to bring your full-stack vision to life? Let's collaborate and create amazing digital experiences
              from frontend magic to backend wizardry! 🚀
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-bold text-black dark:text-white mb-3">
                    Your Name 👋
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="cartoon-input w-full text-black font-medium placeholder-black/50 dark:bg-indigo-800 dark:text-white dark:placeholder-white/50"
                    placeholder="What should I call you?"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-bold text-black dark:text-white mb-3">
                    Email Address 📧
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="cartoon-input w-full text-black font-medium placeholder-black/50 dark:bg-indigo-800 dark:text-white dark:placeholder-white/50"
                    placeholder="your.awesome@email.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-bold text-black dark:text-white mb-3">
                    Your Project Idea 💡
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="cartoon-input w-full text-black font-medium placeholder-black/50 resize-none dark:bg-indigo-800 dark:text-white dark:placeholder-white/50"
                    placeholder="Tell me about your full-stack project... Frontend? Backend? Database? Let's discuss it all!"
                    disabled={isSubmitting}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="cartoon-button w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white border-black font-bold text-lg py-4 flex items-center justify-center gap-3 disabled:opacity-70"
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.9 }}
                      className="cartoon-card bg-gradient-to-r from-green-400 to-emerald-500 text-white p-4 text-center font-bold flex items-center justify-center gap-3"
                    >
                      <CheckCircle className="w-6 h-6" />
                      <div>
                        <p className="text-lg">Message sent successfully! 🎉</p>
                        <p className="text-sm opacity-90">I'll get back to you within 24 hours!</p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.9 }}
                      className="cartoon-card bg-gradient-to-r from-red-400 to-pink-500 text-white p-4 text-center font-bold flex items-center justify-center gap-3"
                    >
                      <XCircle className="w-6 h-6" />
                      <div>
                        <p className="text-lg">Oops! Something went wrong 😅</p>
                        <p className="text-sm opacity-90">{errorMessage}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-10%" }}
              className="space-y-8"
            >
              {/* Connect With Me */}
              <div className="cartoon-card bg-gradient-to-br from-white via-pink-50 to-yellow-50 dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-700 p-6">
                <h3 className="text-2xl font-bold font-display mb-6 text-black dark:text-white flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-2 border-black flex items-center justify-center">
                    <span className="text-white text-sm">🌟</span>
                  </div>
                  Connect With Me!
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  <motion.a
                    href="https://github.com/Shivam20202"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cartoon-button bg-gradient-to-r from-gray-600 to-black text-white border-black flex items-center justify-center gap-2 py-3"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0 }}
                    viewport={{ once: true }}
                  >
                    <Github className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-bold text-sm">GitHub</div>
                      <div className="text-xs opacity-90">Shivam20202</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/shivam-pandey-70298126b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cartoon-button bg-gradient-to-r from-blue-500 to-blue-700 text-white border-black flex items-center justify-center gap-2 py-3"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Linkedin className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-bold text-sm">LinkedIn</div>
                      <div className="text-xs opacity-90">Shivam Pandey</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="mailto:shivam00001234@gmail.com"
                    className="cartoon-button bg-gradient-to-r from-red-400 to-pink-500 text-white border-black flex items-center justify-center gap-2 py-3"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Mail className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-bold text-sm">Email</div>
                      <div className="text-xs opacity-90">shivam00001234@gmail.com</div>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Let's Build Something Amazing */}
              <div className="cartoon-card bg-gradient-to-br from-white via-green-50 to-cyan-50 dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-700 p-6">
                <h3 className="text-2xl font-bold font-display mb-4 text-black dark:text-white flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full border-2 border-black flex items-center justify-center">
                    <span className="text-white text-sm">🚀</span>
                  </div>
                  Let's Build Something Epic!
                </h3>
                <p className="text-black dark:text-white font-medium leading-relaxed">
                  I'm currently available for full-stack development projects, from React/Next.js frontends to Node.js
                  backends, database design, AI integration, and everything in between! 💻
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
