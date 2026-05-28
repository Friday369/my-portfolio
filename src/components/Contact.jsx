import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" style={s.section}>
      <div style={s.inner}>
        <h2 style={s.title}>Let's Work<br />Together.</h2>
        <p style={s.sub}>// Open to internships, junior roles & freelance work</p>
        <div style={s.grid}>
          <div>
            {sent ? (
              <div style={s.success}>✅ Message sent! I'll get back to you soon.</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input required style={s.input} placeholder="Your name" />
                <input required type="email" style={s.input} placeholder="Your email" />
                <textarea required style={{ ...s.input, ...s.textarea }} placeholder="Tell me about the opportunity..." />
                <button type="submit" style={s.btn}>Send Message →</button>
              </form>
            )}
          </div>
          <div style={s.info}>
            {[
              { label: 'GitHub', val: 'github.com/Friday369' },
              { label: 'Location', val: 'India · Remote friendly' },
              { label: 'Status', val: '● Available now' },
              { label: 'Response', val: 'Within 24 hours' },
              { label: 'Open to', val: 'Internship · Junior · Freelance' },
            ].map(r => (
              <div key={r.label} style={s.infoRow}>
                <span style={s.infoLabel}>{r.label}</span>
                <span style={s.infoVal}>{r.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const s = {
  section: { background: '#ffe033', borderTop: '2px solid #0a0a0a', padding: '5rem 4rem' },
  inner: { margin: '0 auto' },
  title: { fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800, color: '#0a0a0a', letterSpacing: '-3px', lineHeight: 0.95, marginBottom: '0.8rem' },
  sub: { fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', color: '#555', marginBottom: '3rem', letterSpacing: '0.05em' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' },
  input: { width: '100%', background: '#fff', border: '2px solid #0a0a0a', color: '#0a0a0a', fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '0.88rem', padding: '0.8rem 1rem', outline: 'none', marginBottom: '10px', boxSizing: 'border-box' },
  textarea: { resize: 'none', minHeight: '100px', display: 'block' },
  btn: { width: '100%', background: '#0a0a0a', color: '#ffe033', border: 'none', padding: '0.9rem 2rem', fontSize: '0.85rem', fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, cursor: 'pointer', marginTop: '6px' },
  success: { color: '#166534', background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '1rem', borderRadius: '4px', fontSize: '0.9rem' },
  info: { display: 'flex', flexDirection: 'column' },
  infoRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '2px solid rgba(0,0,0,0.1)' },
  infoLabel: { fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#888', letterSpacing: '0.15em', textTransform: 'uppercase' },
  infoVal: { fontSize: '0.82rem', color: '#0a0a0a', fontWeight: 600 },
}