export default function Hero() {
  return (
    <section style={s.hero}>
      <div style={s.tag}>
        <span style={s.dot}></span>
        Available for work · India · Remote
      </div>
      <h1 style={s.title}>
        I Build<br />
        Things <span style={s.yellow}>For</span><br />
        The <span style={s.coral}>Web.</span>
      </h1>
      <div style={s.bottom}>
        <p style={s.desc}>Frontend developer focused on React & Node.js. I build fast, clean, production-ready apps that work beautifully and ship on time.</p>
        <div style={s.btns}>
          <a href="#projects" style={s.btnA}>View My Work ↓</a>
          <a href="#contact" style={s.btnB}>Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

const s = {
  hero: { padding: '4rem 4rem 0', margin: '0 auto' },
  tag: { display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#0a0a0a', color: '#f5f0e8', fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', padding: '0.4rem 1rem', marginBottom: '2rem', letterSpacing: '0.1em' },
  dot: { width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', flexShrink: 0 },
  title: { fontSize: 'clamp(3.5rem, 9vw, 7rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-3px', color: '#0a0a0a', marginBottom: '1rem' },
  yellow: { background: '#ffe033', padding: '0 8px' },
  coral: { background: '#ff6b4a', color: '#fff', padding: '0 8px' },
  bottom: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '2rem 0', borderTop: '2px solid #0a0a0a', marginTop: '2rem', flexWrap: 'wrap', gap: '1rem' },
  desc: { fontSize: '0.9rem', color: '#444', lineHeight: 1.8, maxWidth: '380px', fontWeight: 400 },
  btns: { display: 'flex', gap: '10px', flexWrap: 'wrap' },
  btnA: { background: '#ffe033', color: '#0a0a0a', border: '2px solid #0a0a0a', padding: '0.8rem 2rem', fontSize: '0.85rem', fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, cursor: 'pointer', textDecoration: 'none' },
  btnB: { background: 'transparent', color: '#0a0a0a', border: '2px solid #0a0a0a', padding: '0.8rem 2rem', fontSize: '0.85rem', fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, cursor: 'pointer', textDecoration: 'none' },
}