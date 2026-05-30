const technical = [
  { name: 'React', level: 'med' }, { name: 'Node.js', level: 'med' },
  { name: 'Express', level: 'med' }, { name: 'MongoDB', level: 'med' },
  { name: 'CSS / HTML', level: 'high' }, { name: 'Git', level: 'med' },
]
const languages = [
  { name: 'JavaScript', level: 'high' }, { name: 'Python', level: 'med' },
  { name: 'C++', level: 'med' }, { name: 'HTML', level: 'high' },
  { name: 'CSS', level: 'high' }, { name: 'SQL', level: 'low' },
]
const soft = [
  { name: 'Teamwork', level: 'high' }, { name: 'Communication', level: 'high' },
  { name: 'Polyglot', level: 'high' }, { name: 'Fast Learner', level: 'high' },
  { name: 'Problem Solving', level: 'high' }, { name: 'Ship Mindset', level: 'high' },
]

const dot = (l) => l === 'high' ? '#ffe033' : l === 'med' ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.15)'

function Col({ title, items }) {
  return (
    <div style={s.col}>
      <div style={s.colTitle}>{title}</div>
      {items.map(i => (
        <div key={i.name} style={s.row}>
          <span style={s.name}>{i.name}</span>
          <span style={{ ...s.dot, background: dot(i.level) }} />
        </div>
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <div style={s.page}>
      <div style={s.eyebrow}>Tools & Abilities</div>
      <div style={s.headline}>Skills.</div>
      <div style={s.grid}>
        <Col title="Technical" items={technical} />
        <Col title="Languages" items={languages} />
        <Col title="Soft Skills" items={soft} />
      </div>
    </div>
  )
}

const s = {
  page: { background: '#4361ee', minHeight: 'calc(100vh - 54px)', padding: '2rem 2.5rem', animation: 'fadeScale 0.5s cubic-bezier(0.4,0,0.2,1)' },
  eyebrow: { fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.3rem' },
  headline: { fontSize: '2.8rem', fontWeight: 800, color: '#fff', letterSpacing: '-2px', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.2)' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.15)' },
  col: { background: '#4361ee', padding: '1.5rem 1rem' },
  colTitle: { fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1rem', paddingBottom: '0.7rem', borderBottom: '1px solid rgba(255,255,255,0.12)' },
  row: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' },
  name: { fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 },
  dot: { width: '7px', height: '7px', borderRadius: '50%', flexShrink: 0 },
}