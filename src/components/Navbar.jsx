export default function Navbar() {
  return (
    <nav style={s.nav}>
      <div style={s.logo}>CS.NARENDRA</div>
      <div style={s.links}>
        <a href="#projects" style={s.link}>Work</a>
        <a href="#skills" style={s.link}>Skills</a>
        <a href="#about" style={s.link}>About</a>
        <a href="#contact" style={s.link}>Contact</a>
        <a href="/resume.pdf" download style={s.btn}>Resume ↗</a>
      </div>
    </nav>
  )
}

const s = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 2.5rem', background: 'rgba(245,240,232,0.97)', borderBottom: '2px solid #0a0a0a', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(10px)' },
  logo: { fontFamily: "'Space Mono', monospace", fontSize: '0.82rem', fontWeight: 700, color: '#0a0a0a', letterSpacing: '0.05em' },
  links: { display: 'flex', gap: '2rem', alignItems: 'center' },
  link: { fontSize: '0.8rem', color: '#0a0a0a', textDecoration: 'none', fontWeight: 500 },
  btn: { background: '#0a0a0a', color: '#f5f0e8', border: 'none', padding: '0.5rem 1.4rem', fontSize: '0.8rem', fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, cursor: 'pointer', textDecoration: 'none' },
}