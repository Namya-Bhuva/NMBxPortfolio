import { useState, useEffect, useCallback } from 'react'
import './App.css'
import GradientCursor from './components/utils/GradientCursor'
import Preloader from './components/utils/Preloader'
import SectionDivider from './components/utils/SectionDivider'
import ParallaxText from './components/utils/ParallaxText'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

const techMarqueeItems = [
  'React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'TypeScript',
  'Firebase', 'Tailwind CSS', 'Figma', 'Git', 'JavaScript', 'HTML5', 'CSS3'
];

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="app-wrapper">
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}
      <GradientCursor />
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <ParallaxText items={techMarqueeItems} speed={35} />
      <Projects />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <Blog />
      <SectionDivider />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
