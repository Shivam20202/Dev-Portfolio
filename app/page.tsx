import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import RealSkills from "@/components/real-skills"
import Education from "@/components/education"
import FunFacts from "@/components/fun-facts"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SmartMusicPlayer from "@/components/smart-music-player"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <RealSkills />
      <Education />
      <FunFacts />
      <Contact />
      <Footer />
      <SmartMusicPlayer />
    </main>
  )
}
