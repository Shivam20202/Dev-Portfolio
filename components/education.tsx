"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, Award, GraduationCap, BookOpen, ExternalLink, X } from "lucide-react"
import Image from "next/image"

const education = [
  
{
  degree: "B.Tech in Electronics and Communication Engineering",
  institution: "Institute of Engineering and Technology, Agra",
  period: "July 2020 - August 2024",
  description:
    "Studied core concepts of electronics, signal processing, and communication systems, while developing a strong passion for software development. Built full-stack web projects using React, Node.js, and MongoDB, integrating real-world APIs and managing databases effectively. Combined ECE principles with modern web technologies to create robust and interactive applications.",
  icon: <BookOpen className="w-6 h-6" />,
  color: "from-blue-400 to-cyan-500",
},
{
  degree: "Senior Secondary Education (PCM)",
  institution: "Nav Jeevan Mission School, CBSE Board",
  period: "2019",
  description:
    "Completed 12th grade with Physics, Chemistry, and Mathematics from CBSE. Developed strong analytical and problem-solving skills that laid the foundation for engineering and software development.",
  icon: <GraduationCap className="w-6 h-6" />,
  color: "from-amber-400 to-yellow-500",
},

]

const certifications = [
  {
    name: "Frontend Developer (React) Certificate",
    issuer: "HackerRank",
    date: "2024",
    icon: <Award className="w-6 h-6" />,
    color: "from-yellow-400 to-orange-500",
    image: "/hc.jpg?height=300&width=400",
  },
  {
    name: "Cisco Certified Network Associate Introduction to Networks (CCNA)",
    issuer: "Cisco Networking Academy",
    date: "2023",
    icon: <Award className="w-6 h-6" />,
    color: "from-green-400 to-emerald-500",
    image: "/ccna.jpeg?height=300&width=400",
  },
  {
    name: "React JS Certificate",
    issuer: "Scaler",
    date: "2024",
    icon: <Award className="w-6 h-6" />,
    color: "from-pink-400 to-purple-500",
    image: "/scaler.png?height=300&width=400",
  },
  {
    name: "Professional communication ",
    issuer: "Softpro India Computer Technologies (P) Ltd.",
    date: "2021",
    icon: <Award className="w-6 h-6" />,
    color: "from-cyan-400 to-blue-500",
    image: "/softpro.jpg?height=300&width=400",
  },
  
]

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certifications)[0] | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="education" ref={containerRef} className="section-container overflow-hidden">
      <motion.div className="container mx-auto" style={{ opacity, y }}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-display mb-16 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education & <span className="gradient-text drop-shadow-lg">Certifications!</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <motion.h3
              className="text-3xl font-bold font-display mb-8 flex items-center gap-3 text-black dark:text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-3 border-black flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              Education
            </motion.h3>

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-10%" }}
                  className="cartoon-card bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-700 p-6 relative hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="absolute -left-4 top-6 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 border-3 border-black flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div className="ml-6">
                    <h4 className="text-xl font-bold font-display text-black dark:text-white mb-2">{item.degree}</h4>
                    <div className="flex flex-wrap items-center gap-3 text-black/80 dark:text-white/80 mb-4">
                      <span className="font-semibold">{item.institution}</span>
                      <span className="w-2 h-2 rounded-full bg-black/30 dark:bg-white/30" />
                      <span className="flex items-center gap-1 font-medium">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </span>
                    </div>
                    <p className="text-black/70 dark:text-white/70 font-medium leading-relaxed">{item.description}</p>
                  </div>

                  {/* Connecting line */}
                  {index < education.length - 1 && (
                    <div className="absolute left-0 top-14 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 to-cyan-400/50 -ml-0.25 h-16" />
                  )}

                  {/* Decorative element */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-black"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              className="text-3xl font-bold font-display mb-8 flex items-center gap-3 text-black dark:text-white"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-3 border-black flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              Certifications
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  className={`cartoon-card bg-gradient-to-br ${item.color} p-4 cursor-pointer hover:shadow-2xl transition-all duration-300`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCertificate(item)}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-white rounded-full border-2 border-black flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-white bg-black/20 px-2 py-1 rounded-full">{item.date}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-2 leading-tight">{item.name}</h4>
                  <p className="text-xs text-white/90 font-medium">{item.issuer}</p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-white/80 font-medium">Click to view</span>
               
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Continuous Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-10%" }}
          className="cartoon-card bg-gradient-to-br from-white via-green-50 to-blue-50 dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-700 p-8 text-center"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <h3 className="text-3xl font-bold font-display mb-4 text-black dark:text-white">Continuous Learning! 📚</h3>
          <p className="text-black dark:text-white text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            I'm committed to continuous learning and staying at the forefront of web development and creative
            technologies. Currently exploring advanced 3D web experiences and AI-driven interfaces! 🚀
          </p>
        </motion.div>
      </motion.div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedCertificate(null)}
          />

          <motion.div
            className="relative cartoon-card bg-white dark:bg-indigo-800 p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold font-display text-black dark:text-white mb-2">
                  {selectedCertificate.name}
                </h3>
                <p className="text-black/70 dark:text-white/70 font-medium">{selectedCertificate.issuer}</p>
                <p className="text-black/60 dark:text-white/60 font-medium">{selectedCertificate.date}</p>
              </div>
              <motion.button
                onClick={() => setSelectedCertificate(null)}
                className="cartoon-button bg-red-400 text-white border-black p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden border-4 border-black">
              <Image
                src={selectedCertificate.image || "/placeholder.svg"}
                alt={selectedCertificate.name}
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
