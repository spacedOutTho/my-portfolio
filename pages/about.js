import Head from 'next/head'

// ─── Zamijeni s pravim podacima ───
const data = {
  name: '[Tvoje Ime]',
  role: 'Game Developer',
  location: 'Rijeka, Croatia',
  available: true,
  bio: [
    'A short paragraph about who you are. Keep it personal and direct — not a CV, more like how you would introduce yourself at a conference. One or two sentences.',
    'What drives you as a developer. What kind of games or experiences do you want to create. What makes your work different.',
    'Anything else worth knowing. Background, side interests, where you are headed.',
  ],
  stats: [
    { value: '3+',  label: 'Years developing' },
    { value: '10+', label: 'Projects shipped' },
    { value: '2',   label: 'Languages spoken' },
    { value: '1',   label: 'Cup of coffee / day' },
  ],
  skills: [
    { category: 'Game Engines',  items: ['Unity', 'Godot'] },
    { category: 'Languages',     items: ['C#', 'GDScript', 'JavaScript'] },
    { category: 'Tools',         items: ['Blender', 'Photoshop', 'Git'] },
    { category: 'Web',           items: ['Next.js', 'React', 'Supabase'] },
  ],
  // Zamijeni s pravom putanjom kad dodaš sliku u /public
  photo: null,
}

export default function About() {
  return (
    <>
      <Head>
        <title>About — {data.name}</title>
        <meta
          name="description"
          content={`${data.role} based in ${data.location}.`}
        />
      </Head>

      <main className="about-page">

        {/* ─── Page header ─── */}
        <div className="dossier-header">
          <p className="label sr">Classified Document</p>
          <h1 className="dossier-title sr" style={{ '--delay': '0.1s' }}>
            The Dossier
          </h1>
          <div
            className="rule--short sr"
            style={{ '--delay': '0.2s', margin: '20px auto 0' }}
          />
        </div>

        {/* ─── Dva stupca ─── */}
        <div className="dossier-grid">

          {/* Lijevo — fotografija + identification card */}
          <div className="dossier-left">

            {/* Fotografija */}
            <div className="dossier-photo sr">
              {data.photo ? (
                <img src={data.photo} alt={data.name} />
              ) : (
                <div className="dossier-photo-placeholder">
                  <span className="label">Photo on file</span>
                </div>
              )}
              <p className="dossier-photo-label label">
                Fig. 1 — The Developer
              </p>
            </div>

            {/* Identification card — dots između labela i vrijednosti */}
            <div className="dossier-id-card sr" style={{ '--delay': '0.1s' }}>
              <p className="dossier-id-title label">Identification</p>
              <div className="dossier-id-rows">
                <div className="dossier-id-row">
                  <span className="dossier-id-key label">Name</span>
                  <span className="dossier-id-dots" />
                  <span className="dossier-id-value mono">{data.name}</span>
                </div>
                <div className="dossier-id-row">
                  <span className="dossier-id-key label">Role</span>
                  <span className="dossier-id-dots" />
                  <span className="dossier-id-value mono">{data.role}</span>
                </div>
                <div className="dossier-id-row">
                  <span className="dossier-id-key label">Location</span>
                  <span className="dossier-id-dots" />
                  <span className="dossier-id-value mono">{data.location}</span>
                </div>
                <div className="dossier-id-row">
                  <span className="dossier-id-key label">Status</span>
                  <span className="dossier-id-dots" />
                  <span
                    className="dossier-id-value mono"
                    data-available={data.available}
                  >
                    {data.available ? '● Available' : '○ Unavailable'}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Desno — bio + skills */}
          <div className="dossier-right">

            {/* Bio */}
            <div className="dossier-bio">
              <p className="label sr" style={{ marginBottom: '20px' }}>
                Background
              </p>
              {data.bio.map((para, i) => (
                <p
                  key={i}
                  className="dossier-bio-para sr"
                  style={{ '--delay': `${i * 0.08}s` }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Skills — equipment manifest */}
            <div className="dossier-skills sr" style={{ '--delay': '0.2s' }}>
              <p className="label" style={{ marginBottom: '20px' }}>
                Equipment
              </p>
              <div className="dossier-skills-grid">
                {data.skills.map((group) => (
                  <div key={group.category} className="dossier-skill-group">
                    <p className="dossier-skill-category label">
                      {group.category}
                    </p>
                    <div className="dossier-skill-items">
                      {group.items.map((item) => (
                        <span key={item} className="dossier-skill-item mono">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ─── Stats red ─── */}
        <div className="dossier-stats sr" style={{ '--delay': '0.1s' }}>
          {data.stats.map((stat, i) => (
            <>
              <div key={stat.label} className="dossier-stat">
                <span className="dossier-stat-value">{stat.value}</span>
                <span className="dossier-stat-label label">{stat.label}</span>
              </div>
              {i < data.stats.length - 1 && (
                <div key={`div-${i}`} className="dossier-stat-divider" />
              )}
            </>
          ))}
        </div>

        {/* ─── Citat ─── */}
        <div className="dossier-quote sr">
          <div className="dossier-quote-inner">
            <span className="dossier-quote-mark">"</span>
            <p className="dossier-quote-text">
              I believe the best games are the ones that make you feel
              something you didn't expect to feel.
            </p>
            <span className="dossier-quote-attr label">
              — [Tvoje Ime]
            </span>
          </div>
        </div>

      </main>
    </>
  )
}