const facts = [
  { label: 'Location', val: 'India · Remote', bg: '#ffe033' },
  { label: 'GitHub', val: 'Friday369', bg: 'transparent' },
  { label: 'Status', val: '● Available Now', bg: '#c8b4fa' },
  { label: 'Focus', val: 'Full Stack Web', bg: 'transparent' },
  { label: 'Languages Spoken', val: '3+ (Polyglot)', bg: '#ff6b4a', color: '#fff' },
  { label: 'Looking For', val: 'Internship · Junior Role', bg: 'transparent' },
]

export default function About() {
  return (
    <section id="about" style={s.section}>
      <div style={s.left}>
        <h2 style={s.title}>The person<br />behind <span style={s.highlight}>the code.</span></h2>
        <p style={s.text}>I'm a self-taught developer from India who believes the best way to learn is to ship. In 5 days I built two production apps, deployed them live, and learned React, Node.js, MongoDB and JWT auth from scratch. I'm fast, hungry, and I don't stop until it works.</p>
      </div>
      <div style={s.facts}>
        {facts.map(f => (
          <div key={f.label} style={{ ...s.fact, background: f.bg || 'transparent', color: f.color || '#0a0a0a' }}>
            <span style={s.factLabel}>{f.label}</span>
            <span style={s.factVal}>{f.val}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

const s = {
  section: { width: '100%', padding: '4rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' },
  left: {},
  title: { fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0a0a0a', letterSpacing: '-1px', lineHeight: 1.1, marginBottom: '1.2rem' },
  highlight: { background: '#ff6b4a', color: '#fff', padding: '0 6px' },
  text: { fontSize: '0.85rem', color: '#555', lineHeight: 2 },
  facts: { display: 'flex', flexDirection: 'column', border: '2px solid #0a0a0a' },
  fact: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.9rem 1rem', borderBottom: '2px solid #0a0a0a' },
  factLabel: { fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.6, flexShrink: 0, marginRight: '1rem' },
  factVal: { fontSize: '0.82rem', fontWeight: 600, textAlign: 'right' },
}