export default function Navbar({ page, setPage }) {
  const links = ['home', 'work', 'skills', 'about', 'contact']

  return (
    <nav style={s.nav}>
      <div style={s.logo}>CS.NARENDRA</div>
      <div style={s.links}>
        {links.map(l => (
          <button
            key={l}
            onClick={() => setPage(l)}
            style={{ ...s.link, ...(page === l ? s.active : {}) }}
          >
            {l.charAt(0).toUpperCase() + l.slice(1)}
          </button>
        ))}
      </div>
      <a href="/resume.pdf" download style={s.resume}>Resume ↗</a>
    </nav>
  )
}

const s = {
  nav: { position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2.5rem', background: 'rgba(245,240,232,0.96)', borderBottom: '2px solid #0a0a0a', backdropFilter: 'blur(12px)' },
  logo: { fontFamily: "'Space Mono', monospace", fontSize: '0.78rem', fontWeight: 700, color: '#0a0a0a', letterSpacing: '0.05em' },
  links: { display: 'flex', gap: '0.5rem' },
  link: { fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', padding: '0.35rem 0.9rem', border: '1.5px solid transparent', background: 'transparent', color: '#555', transition: 'all 0.2s', borderRadius: '3px', fontFamily: "'Bricolage Grotesque', sans-serif" },
  active: { background: '#0a0a0a', color: '#f5f0e8', borderColor: '#0a0a0a' },
  resume: { background: '#0a0a0a', color: '#f5f0e8', border: 'none', padding: '0.4rem 1.1rem', fontSize: '0.72rem', fontWeight: 700, cursor: 'pointer', textDecoration: 'none', fontFamily: "'Bricolage Grotesque', sans-serif" },
}