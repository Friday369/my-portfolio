const projects = [
  {
    num: '001', title: 'SpendWise', year: '2025',
    desc: 'Full stack expense tracker with user authentication, MongoDB database, analytics dashboard, category breakdowns, transaction history with search & filters, and a settings page. Built end-to-end from scratch in under a week.',
    stack: ['REACT', 'NODE.JS', 'EXPRESS', 'MONGODB', 'JWT', 'VERCEL', 'RENDER'],
    live: 'https://your-spendwise.vercel.app',
    github: 'https://github.com/Friday369/expense-tracker',
    color: '#ffe033',
  },
  {
    num: '002', title: 'Portfolio Site', year: '2025',
    desc: 'Personal portfolio built and deployed in a single day. Clean design with modular React components, smooth scroll sections, working contact form. Auto-deploys via GitHub pushes to Vercel.',
    stack: ['REACT', 'CSS', 'VITE', 'VERCEL'],
    live: 'https://your-portfolio.vercel.app',
    github: 'https://github.com/Friday369/my-portfolio',
    color: '#c8b4fa',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={s.section}>
      <div style={s.header}>
        <div>
          <div style={s.label}>Selected Work</div>
          <div style={s.title}>Projects</div>
        </div>
        <div style={s.bigNum}>02</div>
      </div>
      {projects.map((p) => (
        <div key={p.num} style={s.project}>
          <div style={s.body}>
            <div style={s.top}>
              <span style={s.idx}>{p.num}</span>
              <span style={s.name}>{p.title}</span>
              <span style={s.badge}>LIVE ●</span>
            </div>
            <div style={s.desc}>{p.desc}</div>
            <div style={s.stack}>
              {p.stack.map(t => <span key={t} style={s.tag}>{t}</span>)}
            </div>
            <div style={s.mobileLinks}>
              <a href={p.live} target="_blank" rel="noreferrer" style={s.linkMain}>Live ↗</a>
              <a href={p.github} target="_blank" rel="noreferrer" style={s.linkSec}>GitHub ↗</a>
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
    </section>
  )
}

const s = {
  section: { width: '100%', padding: '4rem 2rem' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '2px solid #0a0a0a' },
  label: { fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#888', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' },
  title: { fontSize: '2rem', fontWeight: 800, color: '#0a0a0a', letterSpacing: '-1px' },
  bigNum: { fontSize: '3rem', fontWeight: 800, color: '#e8e3db', letterSpacing: '-2px' },
  project: { border: '2px solid #0a0a0a', marginBottom: '12px', display: 'flex', flexWrap: 'wrap' },
  body: { padding: '1.5rem', flex: 1, minWidth: 0 },
  top: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem', flexWrap: 'wrap' },
  idx: { fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#888' },
  name: { fontSize: '1.3rem', fontWeight: 800, color: '#0a0a0a', letterSpacing: '-0.5px' },
  badge: { fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', background: '#4ade80', color: '#0a0a0a', padding: '0.2rem 0.6rem', fontWeight: 700, border: '1px solid #0a0a0a' },
  desc: { fontSize: '0.83rem', color: '#555', lineHeight: 1.8, marginBottom: '1rem' },
  stack: { display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' },
  tag: { fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: '#0a0a0a', border: '1px solid #0a0a0a', padding: '0.2rem 0.6rem', background: '#f5f0e8' },
  mobileLinks: { display: 'flex', gap: '1rem' },
  side: { borderLeft: '2px solid #0a0a0a', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', minWidth: '100px' },
  year: { fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#0a0a0a', opacity: 0.5 },
  links: { display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' },
  linkMain: { fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#0a0a0a', textDecoration: 'none', fontWeight: 700 },
  linkSec: { fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#0a0a0a', textDecoration: 'none', opacity: 0.5 },
}