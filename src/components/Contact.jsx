import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section style={styles.section}>
      <p style={styles.label}>Get In Touch</p>
      <div style={styles.box}>
        <h3 style={styles.h3}>Let's work together.</h3>
        <p style={styles.sub}>Open to internships and junior roles. Drop me a message!</p>

        {sent ? (
          <p style={styles.success}>✅ Message sent! I'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={styles.row}>
              <input required style={styles.input} placeholder="Your name" />
              <input required type="email" style={styles.input} placeholder="Your email" />
            </div>
            <textarea required style={{ ...styles.input, ...styles.textarea }} placeholder="Tell me about the opportunity..." />
            <button type="submit" style={styles.btn}>Send Message</button>
          </form>
        )}
      </div>
    </section>
  )
}

const styles = {
  section: { padding: '4rem 2rem 6rem', maxWidth: '800px', margin: '0 auto' },
  label: { fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5a5678', marginBottom: '2rem' },
  box: { background: '#13121f', border: '0.5px solid #2a2840', borderRadius: '14px', padding: '2.5rem' },
  h3: { fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', color: '#f0eeff', margin: '0 0 0.5rem' },
  sub: { fontSize: '0.9rem', color: '#6a6688', margin: '0 0 2rem' },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' },
  input: { width: '100%', background: '#0d0c18', border: '0.5px solid #2a2840', color: '#e0dcf8', fontFamily: 'inherit', fontSize: '0.88rem', padding: '0.75rem 1rem', borderRadius: '8px', boxSizing: 'border-box', outline: 'none' },
  textarea: { display: 'block', minHeight: '110px', resize: 'vertical', marginBottom: '12px' },
  btn: { width: '100%', background: '#6b59d4', color: '#fff', border: 'none', padding: '0.9rem', borderRadius: '8px', fontSize: '0.9rem', fontFamily: 'inherit', cursor: 'pointer' },
  success: { color: '#4caf7d', fontSize: '1rem' },
}