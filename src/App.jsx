import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh', color: '#e8e6f0' }}>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}