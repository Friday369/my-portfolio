export default function Home({ setPage }) {
  return (
    <div style={s.page}>

      {/* HOLOGRAPHIC HERO */}
      <div style={s.hero}>
        <div style={s.holoBg} />
        <div style={s.holoShine} />
        <div style={s.heroInner}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={s.tag}>
              <span style={s.tagDot} />
              Available for work · India · Remote
            </div>
          </div>
          <h1 style={s.title}>
            I Build<br />
            Things <span style={s.yellow}>For</span><br />
            The <span style={s.coral}>Web.</span>
          </h1>

          {/* HOLOGRAPHIC PHOTO CARDS */}
          <div style={s.cards}>
            {[
              { emoji: '⚛️', label: 'REACT', rot: '-4deg', mt: '0', bg: 'linear-gradient(135deg,#ff6b4a,#ffe033,#ff6b4a)' },
              { emoji: '🚀', label: 'NODE.JS', rot: '2deg', mt: '-10px', bg: 'linear-gradient(135deg,#4361ee,#c8b4fa,#4361ee)' },
              { emoji: '🛢️', label: 'MONGODB', rot: '-2deg', mt: '0', bg: 'linear-gradient(135deg,#4ade80,#ffe033,#4ade80)' },
            ].map(c => (
              <div key={c.label} style={{ ...s.card, transform: `rotate(${c.rot})`, marginTop: c.mt, background: c.bg }}>
                <div style={s.cardShine} />
                <div style={s.cardEmoji}>{c.emoji}</div>
                <div style={s.cardLabel}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div style={s.bottom}>
        <p style={s.desc}>Frontend developer focused on React & Node.js. I build fast, clean, production-ready apps that work beautifully and ship on time.</p>
        <div style={s.btns}>
          <button style={s.btnA} onClick={() => setPage('work')}>View My Work ↓</button>
          <button style={s.btnB} onClick={() => setPage('contact')}>Get In Touch</button>
        </div>
      </div>

      {/* TICKER */}
      <div style={s.ticker}>
        <div style={s.tickerInner}>
          {['REACT','✦','NODE.JS','✦','MONGODB','✦','EXPRESS','✦','JAVASCRIPT','✦','PYTHON','✦','C++','✦','CSS','✦','GIT','✦','VERCEL','✦','RENDER','✦',
            'REACT','✦','NODE.JS','✦','MONGODB','✦','EXPRESS','✦','JAVASCRIPT','✦','PYTHON','✦','C++','✦','CSS','✦','GIT','✦','VERCEL','✦','RENDER','✦'].map((t,i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

const s = {
  page: { width: '100%', animation: 'fadeScale 0.5s cubic-bezier(0.4,0,0.2,1)' },
  hero: { position: 'relative', width: '100%', padding: '2.5rem 2.5rem 1.5rem', overflow: 'hidden', textAlign: 'center' },
  holoBg: { position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#ff6b4a30,#ffe03350,#4361ee20,#c8b4fa35)', backgroundSize: '400% 400%', animation: 'holoAnim 7s ease infinite', zIndex: 0 },
  holoShine: { position: 'absolute', inset: 0, background: 'linear-gradient(108deg,transparent 38%,rgba(255,255,255,0.32) 50%,transparent 62%)', backgroundSize: '200% 100%', animation: 'shineAnim 3s linear infinite', zIndex: 1 },
  heroInner: { position: 'relative', zIndex: 2 },
  tag: { display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#0a0a0a', color: '#f5f0e8', fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', padding: '0.32rem 0.9rem', marginBottom: '1.5rem', letterSpacing: '0.1em' },
  tagDot: { width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'pulse 2s ease infinite' },
  title: { fontSize: 'clamp(2.8rem,7vw,5.5rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-3px', color: '#0a0a0a', marginBottom: '1.2rem' },
  yellow: { background: '#ffe033', padding: '0 8px' },
  coral: { background: '#ff6b4a', color: '#fff', padding: '0 8px' },
  cards: { display: 'flex', justifyContent: 'center', gap: '1.2rem', margin: '1.2rem 0 0.5rem' },
  card: { width: '90px', height: '120px', border: '2px solid #0a0a0a', position: 'relative', overflow: 'hidden', flexShrink: 0, backgroundSize: '200% 200%', animation: 'holoAnim 4s ease infinite' },
  cardShine: { position: 'absolute', inset: 0, background: 'linear-gradient(108deg,transparent 30%,rgba(255,255,255,0.45) 50%,transparent 70%)', backgroundSize: '200% 100%', animation: 'shineAnim 2s linear infinite' },
  cardEmoji: { position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', zIndex: 2 },
  cardLabel: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.6)', color: '#fff', fontFamily: "'Space Mono', monospace", fontSize: '0.5rem', padding: '0.25rem', textAlign: 'center', letterSpacing: '0.1em', zIndex: 3 },
  bottom: { padding: '1.2rem 2.5rem', borderTop: '2px solid #0a0a0a', margin: '0 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' },
  desc: { fontSize: '0.82rem', color: '#555', lineHeight: 1.85, maxWidth: '360px' },
  btns: { display: 'flex', gap: '10px', flexWrap: 'wrap' },
  btnA: { background: '#ffe033', color: '#0a0a0a', border: '2px solid #0a0a0a', padding: '0.72rem 1.8rem', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', fontFamily: "'Bricolage Grotesque', sans-serif" },
  btnB: { background: 'transparent', color: '#0a0a0a', border: '2px solid #0a0a0a', padding: '0.72rem 1.8rem', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', fontFamily: "'Bricolage Grotesque', sans-serif" },
  ticker: { borderTop: '2px solid #0a0a0a', overflow: 'hidden', whiteSpace: 'nowrap', background: '#ff6b4a', padding: '0.6rem 0' },
  tickerInner: { display: 'inline-flex', gap: '2rem', fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#0a0a0a', fontWeight: 700, letterSpacing: '0.15em', animation: 'tickAnim 20s linear infinite' },
}
