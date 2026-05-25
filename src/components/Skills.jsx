const skills = [
  { icon: '⚛️', name: 'React',      level: 'Learning' },
  { icon: '🟨', name: 'JavaScript', level: 'Intermediate' },
  { icon: '🟢', name: 'Node.js',    level: 'Learning' },
  { icon: '🎨', name: 'CSS',        level: 'Intermediate' },
  { icon: '🐙', name: 'Git',        level: 'Learning' },
  { icon: '🗃️', name: 'HTML',       level: 'Solid' },
]

export default function Skills() {
  return (
    <section style={styles.section}>
      <p style={styles.label}>Skills & Tools</p>
      <div style={styles.grid}>
        {skills.map((s) => (
          <div key={s.name} style={styles.card}>
            <div style={styles.icon}>{s.icon}</div>
            <div style={styles.name}>{s.name}</div>
            <div style={styles.level}>{s.level}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: { padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' },
  label: { fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5a5678', marginBottom: '2rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '12px' },
  card: { background: '#13121f', border: '0.5px solid #2a2840', borderRadius: '10px', padding: '1.2rem 1rem', textAlign: 'center' },
  icon: { fontSize: '1.6rem', marginBottom: '0.5rem' },
  name: { fontSize: '0.85rem', color: '#b0aacf', fontWeight: 500 },
  level: { fontSize: '0.72rem', color: '#5a5678', marginTop: '0.2rem' },
}