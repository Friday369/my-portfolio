const projects = [
  {
    num: '01',
    title: 'Portfolio Site',
    desc: 'This very site — built in a day with React and deployed on Vercel.',
    tags: ['React', 'CSS', 'Vercel'],
    link: '#',
  },
  {
    num: '02',
    title: 'Your Next Project',
    desc: 'Add your Day 2 project here. Describe what it does and what you learned.',
    tags: ['React', 'Node.js'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <p style={styles.label}>Projects</p>
      <div style={styles.grid}>
        {projects.map((p) => (
          <div key={p.num} style={styles.card}>
            <div style={styles.num}>{p.num} — 2025</div>
            <div style={styles.title}>{p.title}</div>
            <div style={styles.desc}>{p.desc}</div>
            <div style={styles.tags}>
              {p.tags.map((t) => (
                <span key={t} style={styles.pill}>{t}</span>
              ))}
            </div>
            <a href={p.link} style={styles.link}>View Project →</a>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: { padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' },
  label: { fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5a5678', marginBottom: '2rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' },
  card: { background: '#13121f', border: '0.5px solid #2a2840', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  num: { fontSize: '0.72rem', color: '#4a4670', letterSpacing: '0.1em' },
  title: { fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#e0dcf8' },
  desc: { fontSize: '0.83rem', color: '#6a6688', lineHeight: 1.7 },
  tags: { display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '0.5rem' },
  pill: { fontSize: '0.7rem', background: '#1e1c30', color: '#8b82d4', border: '0.5px solid #3d3670', padding: '0.25rem 0.65rem', borderRadius: '20px' },
  link: { fontSize: '0.83rem', color: '#9b8de8', textDecoration: 'none', marginTop: '0.5rem' },
}