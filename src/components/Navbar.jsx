export default function Navbar() {
  return (
    <nav style={s.nav}>
      <div style={s.logo}>CS.NARENDRA</div>
      <div style={s.links}>
        <a href="#projects" style={s.link}>Work</a>
        <a href="#skills" style={s.link}>Skills</a>
        <a href="#about" style={s.link}>About</a>
        <a href="#contact" style={s.link}>Contact</a>
      </div>
      <a href="/resume.pdf" download style={s.btn}>Resume ↗</a>
    </nav>
  )
}

const s = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: 'rgba(245,240,232,0.97)', borderBottom: '2px solid #0a0a0a', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(10px)', width: '100%', gap: '1rem' },
  logo: { fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', fontWeight: 700, color: '#0a0a0a', flexShrink: 0 },
  links: { display: 'flex', gap: '1.2rem', alignItems: 'center' },
  link: { fontSize: '0.78rem', color: '#0a0a0a', textDecoration: 'none', fontWeight: 500, whiteSpace: 'nowrap' },
  btn: { background: '#0a0a0a', color: '#f5f0e8', padding: '0.45rem 1rem', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 },
}