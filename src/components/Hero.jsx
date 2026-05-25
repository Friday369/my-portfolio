export default function Hero() {
  return (
    <section style={styles.hero}>
      <p style={styles.tag}>🟢 Open to opportunities</p>
      <h1 style={styles.h1}>
        Hi, I'm <span style={styles.accent}>C S NarendraVignesh</span>
      </h1>
      <p style={styles.subtitle}>Frontend Developer · React & Node.js</p>
      <p style={styles.desc}>
        I build clean, fast, user-friendly web apps. Currently learning and
        growing every day — open to internships and junior roles.
      </p>
      <div style={styles.btnRow}>
        <a href="#projects" style={styles.btnPrimary}>View My Work</a>
        <a href="/resume.pdf" download style={styles.btnGhost}>Download Resume</a>
      </div>
    </section>
  )
}

const styles = {
  hero: { padding: '6rem 2rem 4rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  tag: { fontSize: '0.85rem', color: '#8b82d4', marginBottom: '1.5rem' },
  h1: { fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#f0eeff', margin: '0 0 0.5rem', lineHeight: 1.1 },
  accent: { color: '#9b8de8', fontStyle: 'italic' },
  subtitle: { fontSize: '1.1rem', color: '#6a6688', margin: '0 0 1rem' },
  desc: { fontSize: '1rem', color: '#8480a8', lineHeight: 1.8, maxWidth: '500px', margin: '0 0 2rem', fontWeight: 300 },
  btnRow: { display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' },
  btnPrimary: { background: '#6b59d4', color: '#fff', padding: '0.8rem 2rem', borderRadius: '6px', textDecoration: 'none', fontSize: '0.9rem' },
  btnGhost: { background: 'transparent', color: '#9490b0', border: '0.5px solid #3d3670', padding: '0.8rem 2rem', borderRadius: '6px', textDecoration: 'none', fontSize: '0.9rem' },
}