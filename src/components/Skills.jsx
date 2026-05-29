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

const dotColor = (l) => l === 'high' ? '#ffe033' : l === 'med' ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.15)'

function SkillCol({ title, items }) {
  return (
    <div style={s.col}>
      <div style={s.colTitle}>{title}</div>
      {items.map(i => (
        <div key={i.name} style={s.row}>
          <span style={s.name}>{i.name}</span>
          <span style={{ ...s.dot, background: dotColor(i.level) }}></span>
        </div>
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={s.section}>
      <div style={s.titleRow}>
        <div style={s.title}>Skills & Tools</div>
      </div>
      <div style={s.grid}>
        <SkillCol title="Technical" items={technical} />
        <SkillCol title="Languages" items={languages} />
        <SkillCol title="Soft Skills" items={soft} />
      </div>
    </section>
  )
}

const s = {
  section: { background: '#4361ee', borderTop: '2px solid #0a0a0a', borderBottom: '2px solid #0a0a0a', padding: '4rem 2rem', width: '100%' },
  titleRow: { marginBottom: '2rem' },
  title: { fontSize: '2rem', fontWeight: 800, color: '#fff', letterSpacing: '-1px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#fff' },
  col: { background: '#4361ee', padding: '1.5rem' },
  colTitle: { fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.2rem', paddingBottom: '0.8rem', borderBottom: '1px solid rgba(255,255,255,0.15)' },
  row: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' },
  name: { fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 },
  dot: { width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0 },
}