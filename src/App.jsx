import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motion.matches || !('IntersectionObserver' in window)) return
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight)
        element.classList.add('reveal-pending')
      observer.observe(element)
    })
    const revealAll = () => {
      if (motion.matches)
        elements.forEach((element) =>
          element.classList.remove('reveal-pending')
        )
    }
    motion.addEventListener('change', revealAll)
    return () => {
      observer.disconnect()
      elements.forEach((element) => element.classList.remove('reveal-pending'))
      motion.removeEventListener('change', revealAll)
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
