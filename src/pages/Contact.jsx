import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <div style={s.page}>
      <div style={s.eyebrow}>Get In Touch</div>
      <div style={s.title}>Let's Work<br />Together.</div>
      <div style={s.sub}>// Open to internships, junior roles & freelance work</div>
      <div style={s.grid}>
        <div>
          {sent ? (
            <div style={s.success}>✅ Message sent! I'll get back to you soon.</div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
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
            { label: 'Response time', val: 'Within 24 hours' },
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
  )
}

const s = {
  page: { background: '#ffe033', minHeight: 'calc(100vh - 54px)', padding: '2rem 2.5rem', animation: 'fadeScale 0.5s cubic-bezier(0.4,0,0.2,1)' },
  eyebrow: { fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#888', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.3rem' },
  title: { fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 800, color: '#0a0a0a', letterSpacing: '-3px', lineHeight: 0.92, marginBottom: '0.6rem' },
  sub: { fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#666', marginBottom: '2rem', letterSpacing: '0.05em' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' },
  input: { width: '100%', background: '#fff', border: '2px solid #0a0a0a', color: '#0a0a0a', fontSize: '0.82rem', padding: '0.72rem 0.9rem', outline: 'none', marginBottom: '8px', display: 'block', boxSizing: 'border-box', fontFamily: "'Bricolage Grotesque', sans-serif" },
  textarea: { resize: 'none', minHeight: '85px' },
  btn: { width: '100%', background: '#0a0a0a', color: '#ffe033', border: 'none', padding: '0.8rem', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', marginTop: '4px', fontFamily: "'Bricolage Grotesque', sans-serif" },
  success: { background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', padding: '1rem', fontSize: '0.9rem' },
  info: { display: 'flex', flexDirection: 'column' },
  infoRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 0', borderBottom: '2px solid rgba(0,0,0,0.08)', flexWrap: 'wrap', gap: '0.5rem' },
  infoLabel: { fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: '#888', letterSpacing: '0.12em', textTransform: 'uppercase' },
  infoVal: { fontSize: '0.8rem', fontWeight: 700, color: '#0a0a0a' },
}