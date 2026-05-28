const stack = ['REACT', 'NODE.JS', 'MONGODB', 'EXPRESS', 'JAVASCRIPT', 'PYTHON', 'C++', 'CSS', 'GIT', 'VERCEL', 'RENDER', 'VITE']

export default function Ticker() {
  const items = [...stack, ...stack]
  return (
    <div style={s.wrap}>
      <div style={s.inner}>
        {items.map((item, i) => (
          <span key={i} style={s.item}>
            {item} {i % 1 === 0 && <span style={s.dot}>✦</span>}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ticker-inner { animation: tick 25s linear infinite; }
      `}</style>
    </div>
  )
}

const s = {
  wrap: { borderTop: '2px solid #0a0a0a', borderBottom: '2px solid #0a0a0a', padding: '0.7rem 0', overflow: 'hidden', whiteSpace: 'nowrap', background: '#ff6b4a' },
  inner: { display: 'inline-flex', gap: '1.5rem', fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#0a0a0a', letterSpacing: '0.15em', fontWeight: 700, animation: 'tick 25s linear infinite' },
  item: { display: 'inline-flex', alignItems: 'center', gap: '8px' },
  dot: { opacity: 0.5 },
}