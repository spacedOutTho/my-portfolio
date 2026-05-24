import Head from 'next/head'

// ─── UPDATE THIS EVERY 2–4 WEEKS — a stale /now page is worse than none ───
const now = {
  updated: 'May 2026',
  building: {
    title: '[Project codename or real title]',
    description: 'One or two sentences. Name the engine, the mechanic, the genre. The more specific, the better — "a Godot prototype about elevators with physics-based UI" beats "a game."',
    link: null, // add a URL if it\'s public, otherwise leave null
  },
  reading: '[Book title] — [Author]',
  listening: '[Artist or album you\'re on right now]',
  learning: '[One specific thing: a tool, a technique, a system]',
  seeking: 'Small teams (≤15 people), narrative or systemic games, projects that actually ship. Design agencies doing branded work also welcome.',
  notSeeking: 'Gambling, crypto, predatory F2P, or anything that leads with the word "disruptive."',
  available: true,
  location: 'Rijeka, Croatia',
}

export default function Now() {
  return (
    <>
      <Head>
        <title>Now — [Tvoje Ime]</title>
        <meta
          name="description"
          content={`What I'm building, reading, and looking for. Updated ${now.updated}.`}
        />
      </Head>

      <main className="now-page">

        {/* ─── Header ─── */}
        <div className="now-header">
          <p className="label sr">Updated {now.updated}</p>
          <h1 className="now-title sr" style={{ '--delay': '0.1s' }}>
            The Bulletin
          </h1>
          <div
            className="rule--short sr"
            style={{ '--delay': '0.2s', margin: '20px auto 0' }}
          />
          <p className="now-sub sr" style={{ '--delay': '0.3s' }}>
            A snapshot of what I&apos;m doing, reading, and looking for.
            <br />
            Updated roughly every two weeks.
          </p>
        </div>

        {/* ─── Board of index cards ─── */}
        <div className="now-board">

          {/* Building — largest card, most important */}
          <div className="now-pin now-pin--building sr">
            <div className="now-pin-header">
              <p className="now-pin-label label">Currently Building</p>
              <span className="now-pin-stamp mono">// in progress</span>
            </div>
            <h2 className="now-pin-title">{now.building.title}</h2>
            <p className="now-pin-text">{now.building.description}</p>
            {now.building.link && (
              <a
                href={now.building.link}
                className="now-pin-link"
                target="_blank"
                rel="noreferrer"
                data-hover
              >
                <span>View project</span>
                <span className="now-pin-link-arrow">→</span>
              </a>
            )}
          </div>

          {/* Reading */}
          <div className="now-pin sr" style={{ '--delay': '0.05s' }}>
            <p className="now-pin-label label">Currently Reading</p>
            <p className="now-pin-value">{now.reading}</p>
          </div>

          {/* Listening */}
          <div className="now-pin sr" style={{ '--delay': '0.08s' }}>
            <p className="now-pin-label label">Listening To</p>
            <p className="now-pin-value">{now.listening}</p>
          </div>

          {/* Learning */}
          <div className="now-pin sr" style={{ '--delay': '0.11s' }}>
            <p className="now-pin-label label">Learning</p>
            <p className="now-pin-value">{now.learning}</p>
          </div>

          {/* Status */}
          <div className="now-pin now-pin--status sr" style={{ '--delay': '0.14s' }}>
            <p className="now-pin-label label">Availability</p>
            <div className="now-availability">
              <span className={`now-availability-dot ${now.available ? 'now-availability-dot--on' : ''}`} />
              <span className="now-availability-text mono">
                {now.available ? 'Open to new projects' : 'Currently unavailable'}
              </span>
            </div>
            <p className="now-pin-location label">{now.location}</p>
          </div>

          {/* What I'm looking for — manifesto card */}
          <div className="now-pin now-pin--seeking sr" style={{ '--delay': '0.17s' }}>
            <p className="now-pin-label label">What I&apos;m Looking For</p>
            <p className="now-pin-text">{now.seeking}</p>
            <div className="now-pin-not-seeking">
              <span className="label">Not looking for: </span>
              <span className="mono" style={{ fontSize: '12px' }}>{now.notSeeking}</span>
            </div>
          </div>

        </div>

        {/* ─── Footer credit ─── */}
        <div className="now-footer sr" style={{ '--delay': '0.1s' }}>
          <div className="rule" style={{ marginBottom: '24px' }} />
          <p
            className="mono"
            style={{ opacity: 0.25, fontSize: '11px', textAlign: 'center' }}
          >
            // This page is inspired by Derek Sivers&apos; /now page movement — nownownow.com
          </p>
        </div>

      </main>
    </>
  )
}