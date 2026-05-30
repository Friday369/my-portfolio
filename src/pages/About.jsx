const facts = [
  { label: 'Location', val: 'India · Remote', cls: 'f1', bg: '#ffe033', color: '#0a0a0a' },
  { label: 'GitHub', val: 'Friday369', bg: '#f5f0e8', color: '#0a0a0a' },
  { label: 'Status', val: '● Available Now', bg: '#c8b4fa', color: '#0a0a0a' },
  { label: 'Focus', val: 'Full Stack Web', bg: '#f5f0e8', color: '#0a0a0a' },
  { label: 'Languages Spoken', val: '3+ (Polyglot)', bg: '#ff6b4a', color: '#fff' },
  { label: 'Looking For', val: 'Internship · Junior Role', bg: '#f5f0e8', color: '#0a0a0a' },
]

export default function About() {
  return (
    <div style={s.page}>
      <div style={s.eyebrow}>The Person</div>
      <div style={s.headline}>About Me.</div>
      <div style={s.grid}>
        <div>
          <div style={s.holoCard}>
            <div style={s.holoShine} />
            <div style={s.holoInner}>
              <div style={s.holoEmoji}>👨‍💻</div>
              <div style={s.holoLabel}>CS.NARENDRA · DEVELOPER</div>
            </div>
          </div>
          <p style={s.bio}>I'm a self-taught developer from India who believes the best way to learn is to ship. In 5 days I built two production apps, deployed them live, and learned React, Node.js, MongoDB and JWT auth from scratch. I'm fast, hungry, and I don't stop until it works.</p>
        </div>
        <div style={s.facts}>
          {facts.map(f => (
            <div key={f.label} style={{ ...s.fact, background: f.bg, color: f.color }}>
              <span style={s.factLabel}>{f.label}</span>
              <span style={s.factVal}>{f.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const s = {
  page: { padding: '2rem 2.5rem', animation: 'fadeScale 0.5s cubic-bezier(0.4,0,0.2,1)' },
  eyebrow: { fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#888', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.3rem' },
  headline: { fontSize: '2.8rem', fontWeight: 800, color: '#0a0a0a', letterSpacing: '-2px', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid #0a0a0a' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' },
  holoCard: { width: '100%', height: '200px', border: '2px solid #0a0a0a', position: 'relative', overflow: 'hidden', marginBottom: '1.5rem', background: 'linear-gradient(135deg,#ff6b4a,#ffe033,#4361ee,#c8b4fa,#4ade80)', backgroundSize: '400% 400%', animation: 'holoAnim 5s ease infinite' },
  holoShine: { position: 'absolute', inset: 0, background: 'linear-gradient(108deg,transparent 30%,rgba(255,255,255,0.4) 50%,transparent 70%)', backgroundSize: '200% 100%', animation: 'shineAnim 2.5s linear infinite' },
  holoInner: { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2 },
  holoEmoji: { fontSize: '3rem', marginBottom: '0.5rem' },
  holoLabel: { fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#fff', letterSpacing: '0.15em', background: 'rgba(0,0,0,0.4)', padding: '0.2rem 0.6rem' },
  bio: { fontSize: '0.82rem', color: '#555', lineHeight: 2 },
  facts: { display: 'flex', flexDirection: 'column', border: '2px solid #0a0a0a' },
  fact: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1.1rem', borderBottom: '2px solid #0a0a0a' },
  factLabel: { fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.55 },
  factVal: { fontSize: '0.8rem', fontWeight: 700 },
}