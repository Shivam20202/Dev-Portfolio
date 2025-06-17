"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import Image from "next/image"

const projects = [

  {
    id: 1,
    title: "Modern Restaurant App",
    description:
      "A responsive restaurant application featuring an organized menu system, about section, and seamless reservation booking with smooth animations and modern UI design.",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    image: "/rest.png?height=600&width=800",
    github: "https://github.com/Shivam20202/Restaurant-App",
    demo: "https://savori-restaurant.netlify.app/",
  },

  {
    id: 2,
    title: "AI Platform",
    description:
      "Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    tags: ["React.js", "Vite", "Tailwind CSS"],
    image: "/ai.png?height=600&width=800",
    github: "https://github.com/Shivam20202/Ai-Platform",
    demo: "https://brainwaveprojectt.netlify.app/",
  },


  {
    id: 3,
    title: "Restaurant Ordering System - MERN Application",
    description:
      "The Digital Diner is a full-stack restaurant ordering web app that lets users browse a categorized menu, manage a cart, and place pickup orders. Built with the MERN stack and Tailwind CSS, it streamlines online order management for both customers and staff.",
    tags: ["Next.js","React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/dinner.png?height=600&width=800",
    github: "https://github.com/Shivam20202/Digital-Dinner",
    demo: "https://digital-diner-taupe.vercel.app/menu",
  },
 
    {
    id: 4,
    title: "E-Commerce MERN Application",
    description:
      "An e-commerce site where users can add, update, delete and see their products with smooth ui and authentication.It is built with MERN stack and includes features like user authentication, product management, product search, product listing.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS"],
    image: "/ecommerce.jpg?height=600&width=800",
    github: "https://github.com/Shivam20202/E-Dashboard-MERN",
    demo: "#",
  },

  {
    id: 5,
    title: "Real-Time News Application",
    description:
      "A dynamic news app with category-based filtering, real-time updates, and responsive design. Integrated with news APIs to display content across multiple categories.",
    tags: ["React.js", "Bootstrap", "RESTful API", "JavaScript"],
    image: "/news.png?height=600&width=800",
    github: "https://github.com/Shivam20202/News-App",
    demo: "https://snews1.netlify.app/",
  },
  {
    id: 6,
    title: "Landing Page",
    description:
      "A landing page which provides online services to the users and is responsive and includes smooth user experience.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/landing.png?height=600&width=800",
    github: "https://github.com/Shivam20202/HOM-Assignment",
    demo: "https://landingpagge2.netlify.app/",
  },
]

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const horizontalRef = useRef<HTMLDivElement>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-50%", "-100%"])

  const handleViewAll = () => {
    setShowAllProjects(true)
  }

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" ref={containerRef} className="section-container overflow-hidden">
      <div className="container mx-auto mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
          <h2 className="text-3xl md:text-4xl font-bold font-display dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <motion.button
            onClick={handleViewAll}
            className="cartoon-button bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white border-black font-bold text-lg px-6 py-3 flex items-center gap-3 relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <Sparkles className="w-5 h-5 relative z-10" />
            <span className="relative z-10">View All Projects</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="relative z-10"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>

            {/* Animated sparkles */}
            <motion.div
              className="absolute top-1 right-1 w-2 h-2 bg-yellow-300 rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
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
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.5,
              }}
            />
          </motion.button>
        </div>
      </div>

      {!showAllProjects ? (
        <div className="relative w-full overflow-hidden">
          <motion.div ref={horizontalRef} style={{ x }} className="flex flex-nowrap">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}

            <div className="flex-shrink-0 w-screen h-[80vh] flex items-center justify-center">
              <div className="glass rounded-xl p-8 max-w-md text-center">
                <h3 className="text-2xl font-bold font-display mb-4 dark:text-white">Want to see more?</h3>

                <p className="text-black/70 dark:text-white/70 mb-6">
                  Check out my complete portfolio with all projects and case studies
                </p>

                <button
                  onClick={handleViewAll}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 flex items-center gap-2 mx-auto"
                >
                  View All Projects
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="container mx-auto">
          {/* Project Showcase */}
          <div className="relative glass rounded-xl overflow-hidden mb-12 border-4 border-black">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="aspect-video relative"
            >
              <Image
                src={projects[currentIndex].image || "/placeholder.svg"}
                alt={projects[currentIndex].title}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold font-display mb-3">{projects[currentIndex].title}</h3>
                <p className="text-white/70 max-w-2xl mb-6">{projects[currentIndex].description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[currentIndex].tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/10 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={projects[currentIndex].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={projects[currentIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevProject}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass rounded-xl overflow-hidden cursor-pointer group border-4 border-black transition-all duration-300 ${
                  index === currentIndex ? "ring-4 ring-purple-500 shadow-2xl" : "hover:shadow-xl"
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-lg font-bold font-display">{project.title}</h4>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-full text-xs bg-white/10 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="px-2 py-0.5 rounded-full text-xs bg-white/10 backdrop-blur-sm">
                          +{project.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    tags: string[]
    image: string
    github: string
    demo: string
  }
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="flex-shrink-0 w-screen h-[80vh] p-4 md:p-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-20%" }}
    >
      <div className="w-full h-full glass rounded-xl overflow-hidden group relative border-4 border-black">
        <motion.div
          className="absolute inset-0 border-4 border-transparent rounded-xl"
          whileHover={{
            borderColor: "#ff6b6b",
            boxShadow: "0 0 30px rgba(255, 107, 107, 0.5)",
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={600}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold font-display mb-3">{project.title}</h3>

          <p className="text-white/70 max-w-lg mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/10 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
