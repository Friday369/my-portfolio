import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Ticker from './components/Ticker'
import About from './components/About'

export default function App() {
  return (
    <div style={{ background: '#f5f0e8', minHeight: '100vh', fontFamily: "'Bricolage Grotesque', sans-serif", width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Ticker />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <footer style={s.footer}>
        <span>© 2025 C.S. NARENDRA — ALL RIGHTS RESERVED</span>
        <span>BUILT WITH REACT · DEPLOYED ON VERCEL</span>
      </footer>
    </div>
  )
}

const s = {
  footer: { background: '#0a0a0a', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: '#444', letterSpacing: '0.08em', width: '100%', flexWrap: 'wrap', gap: '0.5rem' },
}