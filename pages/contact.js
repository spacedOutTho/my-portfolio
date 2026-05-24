import Head from 'next/head'
import { useState } from 'react'

const purposeOptions = [
  'Game development project',
  'Web development project',
  'Collaboration',
  'Job opportunity',
  'Just saying hello',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '',
    date: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setStatus('success')
      setForm({ name: '', email: '', type: '', date: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  return (
    <>
      <Head>
        <title>Contact — [Tvoje Ime]</title>
        <meta name="description" content="Get in touch. Available for game development projects, web work, and collaboration." />
      </Head>

      <main className="contact-page">

        {/* ─── Header ─── */}
        <div className="reception-header">
          <p className="label sr">Open for business</p>
          <h1 className="reception-title sr" style={{ '--delay': '0.1s' }}>
            The Reception
          </h1>
          <div
            className="rule--short sr"
            style={{ '--delay': '0.2s', margin: '20px auto 0' }}
          />
        </div>

        {/* ─── Dva stupca ─── */}
        <div className="reception-grid">

          {/* Lijevo — info */}
          <div className="reception-info sr">

            <div className="reception-info-block">
              <p className="label" style={{ marginBottom: '16px' }}>
                Concierge
              </p>
              <p className="reception-info-name">[Tvoje Ime]</p>
              <p className="reception-info-role label">
                Game &amp; Web Developer
              </p>
            </div>

            <div className="reception-contacts">
              <div className="reception-contact-item">
                <span className="label">Email</span>
                <a
                  href="mailto:tvoj@email.com"
                  className="reception-contact-value"
                  data-hover
                >
                  tvoj@email.com
                </a>
              </div>
              <div className="reception-contact-item">
                <span className="label">GitHub</span>
                <a
                  href="https://github.com/tvoje-korisnicko-ime"
                  target="_blank"
                  rel="noreferrer"
                  className="reception-contact-value"
                  data-hover
                >
                  github.com/[ime]
                </a>
              </div>
              <div className="reception-contact-item">
                <span className="label">Location</span>
                <span className="reception-contact-value">
                  Rijeka, Croatia
                </span>
              </div>
              <div className="reception-contact-item">
                <span className="label">Status</span>
                <span className="reception-contact-value reception-status">
                  ● Available for projects
                </span>
              </div>
            </div>

            {/* Dekorativna napomena */}
            <div className="reception-note">
              <p className="mono">
                // Response time: usually within 24h
              </p>
            </div>

          </div>

          {/* Desno — forma */}
          <div className="reception-form-wrap sr" style={{ '--delay': '0.1s' }}>

            {/* Naslov kartice */}
            <div className="registration-card-header">
              <span className="label">Guest Registration Card</span>
              <span className="label" style={{ opacity: 0.3 }}>
                No. {String(Math.floor(Math.random() * 9000) + 1000)}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="registration-form">

              <div className="rform-row">
                <div className="rform-group">
                  <label htmlFor="name" className="rform-label label">
                    Guest Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="rform-input"
                  />
                </div>
                <div className="rform-group">
                  <label htmlFor="email" className="rform-label label">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="rform-input"
                  />
                </div>
              </div>

              <div className="rform-row">
                <div className="rform-group">
                  <label htmlFor="type" className="rform-label label">
                    Purpose of Visit
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="rform-input rform-select"
                  >
                    <option value="">Select one...</option>
                    {purposeOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="rform-group">
                  <label htmlFor="date" className="rform-label label">
                    Date of Arrival
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="text"
                    placeholder="e.g. June 2026"
                    value={form.date}
                    onChange={handleChange}
                    className="rform-input"
                  />
                </div>
              </div>

              <div className="rform-group">
                <label htmlFor="message" className="rform-label label">
                  Special Requests *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="rform-input rform-textarea"
                />
              </div>

              {/* Submit */}
              <div className="rform-footer">
                <button
                  type="submit"
                  className="rform-submit"
                  disabled={status === 'loading'}
                  data-hover
                >
                  {status === 'loading'
                    ? 'Processing...'
                    : 'Confirm Reservation'}
                </button>

                {status === 'success' && (
                  <div className="rform-success">
                    <span className="rform-stamp">✓ Received</span>
                    <span className="label">
                      Your message has been received. I&apos;ll be in touch.
                    </span>
                  </div>
                )}

                {status === 'error' && (
                  <p className="rform-error mono">{errorMsg}</p>
                )}
              </div>

            </form>
          </div>
        </div>
      </main>
    </>
  )
}