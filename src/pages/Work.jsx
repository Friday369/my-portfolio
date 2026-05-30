const projects = [
  {
    num: '001', name: 'Portfolio Site', year: '2025',
    desc: 'This very website.Personal portfolio with multiple pages, holographic hero effects, cinematic fade+scale page transitions, and bold colorful design. Modular React components. Auto-deploys via GitHub pushes to Vercel.',
    stack: ['REACT', 'CSS', 'VITE', 'VERCEL'],
    github: 'https://github.com/Friday369/my-portfolio',
    color: '#c8b4fa',
  },
  {
    num: '002', name: 'SpendWise', year: '2025',
    desc: 'Full stack expense tracker with user authentication, MongoDB database, analytics dashboard with bar charts, category breakdowns, transaction history with search and filters, and a complete settings page. Built end-to-end from scratch in under a week.',
    stack: ['REACT', 'NODE.JS', 'EXPRESS', 'MONGODB', 'JWT AUTH', 'VERCEL', 'RENDER'],
    live: 'https://expense-tracker-fawn-zeta-81.vercel.app/dashboard',
    github: 'https://github.com/Friday369/expense-tracker',
    color: '#ffe033',
  }
]

export default function Work() {
  return (
    <div style={s.page}>
      <div style={s.eyebrow}>Selected Work</div>
      <div style={s.headline}>Projects.</div>
      {projects.map(p => (
        <div key={p.num} style={s.row}>
          <div style={s.body}>
            <div style={s.top}>
              <span style={s.num}>{p.num}</span>
              <span style={s.name}>{p.name}</span>
              <span style={s.live}>LIVE ●</span>
            </div>
            <div style={s.desc}>{p.desc}</div>
            <div style={s.stack}>
              {p.stack.map(t => <span key={t} style={s.tag}>{t}</span>)}
            </div>
          </div>
          <div style={{ ...s.side, background: p.color }}>
            <span style={s.year}>{p.year}</span>
            <div style={s.links}>
              <a href={p.live} target="_blank" rel="noreferrer" style={s.linkMain}>Live ↗</a>
              <a href={p.github} target="_blank" rel="noreferrer" style={s.linkSec}>GitHub ↗</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const s = {
  page: { padding: '2rem 2.5rem', animation: 'fadeScale 0.5s cubic-bezier(0.4,0,0.2,1)' },
  eyebrow: { fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#888', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.3rem' },
  headline: { fontSize: '2.8rem', fontWeight: 800, color: '#0a0a0a', letterSpacing: '-2px', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid #0a0a0a' },
  row: { display: 'flex', border: '2px solid #0a0a0a', marginBottom: '10px' },
  body: { flex: 1, padding: '1.5rem' },
  top: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.6rem', flexWrap: 'wrap' },
  num: { fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#aaa' },
  name: { fontSize: '1.25rem', fontWeight: 800, color: '#0a0a0a', letterSpacing: '-0.5px' },
  live: { fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', background: '#4ade80', color: '#0a0a0a', padding: '0.15rem 0.5rem', border: '1px solid #0a0a0a', fontWeight: 700 },
  desc: { fontSize: '0.78rem', color: '#555', lineHeight: 1.75, marginBottom: '0.8rem', maxWidth: '560px' },
  stack: { display: 'flex', flexWrap: 'wrap', gap: '5px' },
  tag: { fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', border: '1px solid #ccc', padding: '0.15rem 0.5rem', color: '#555' },
  side: { width: '80px', borderLeft: '2px solid #0a0a0a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '1.2rem 0.5rem' },
  year: { fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: '#0a0a0a', opacity: 0.4 },
  links: { display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' },
  linkMain: { fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#0a0a0a', textDecoration: 'none', fontWeight: 700 },
  linkSec: { fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#0a0a0a', textDecoration: 'none', opacity: 0.5 },
}