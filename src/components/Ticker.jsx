const stack = ['REACT', 'NODE.JS', 'MONGODB', 'EXPRESS', 'JAVASCRIPT', 'PYTHON', 'C++', 'CSS', 'GIT', 'VERCEL', 'RENDER', 'VITE']

export default function Ticker() {
  const items = [...stack, ...stack]
  return (
    <div style={s.wrap}>
      <style>{`@keyframes tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <div style={s.inner}>
        {items.map((item, i) => (
          <span key={i} style={s.item}>{item} <span style={{ opacity: 0.4 }}>✦</span></span>
        ))}
      </div>
    </div>
  )
}

const s = {
  wrap: { borderTop: '2px solid #0a0a0a', borderBottom: '2px solid #0a0a0a', padding: '0.7rem 0', overflow: 'hidden', whiteSpace: 'nowrap', background: '#ff6b4a', width: '100%' },
  inner: { display: 'inline-flex', gap: '1.5rem', fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#0a0a0a', letterSpacing: '0.15em', fontWeight: 700, animation: 'tick 25s linear infinite' },
  item: { display: 'inline-flex', alignItems: 'center', gap: '8px' },
}