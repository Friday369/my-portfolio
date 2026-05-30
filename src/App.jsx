import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Work from './pages/Work'
import Skills from './pages/Skills'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#f5f0e8', overflowX: 'hidden' }}>
      <Navbar page={page} setPage={setPage} />
      <div style={{ paddingTop: '54px' }}>
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'work' && <Work />}
        {page === 'skills' && <Skills />}
        {page === 'about' && <About />}
        {page === 'contact' && <Contact />}
      </div>
    </div>
  )
}