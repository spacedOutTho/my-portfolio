import Head from 'next/head'

const data = {
  name: 'Tin Smajlagić',
  role: 'Game Developer & Digital Marketing Specialist',
  location: 'Zagreb, Croatia',
  available: true,
  bio: [
    'Eight years split between game studios and marketing departments taught me that the hardest part of any project is the same: figuring out what it actually needs to do, and for whom. I have written game design documents that got approved by Epic Games, and employer branding copy that defined how a thousand-person company talks about itself.',
    'On the development side I work primarily in Godot 4 — six solo titles shipped across Itch.io, Steam, and Google Play, all designed, coded, and scored in Ableton Live by one person. I find the constraint clarifying.',
    'Currently studying Software Engineering at Algebra University College, building tools in Python and Next.js on the side, and looking for a team that actually ships things.',
  ],
  stats: [
    { value: '8+', label: 'Years in the industry' },
    { value: '6',  label: 'Solo titles shipped' },
    { value: '2',  label: 'Major storefronts' },
    { value: '1',  label: 'Cup of coffee / day' },
  ],
  skills: [
    { category: 'Game Development', items: ['Godot 4', 'Unreal Engine 4', 'GDScript', 'C#'] },
    { category: 'Art & Audio',       items: ['Aseprite', 'Krita', 'Ableton Live 12', 'GIMP'] },
    { category: 'Web & Tools',       items: ['Next.js', 'Python', 'HTML5', 'Android'] },
    { category: 'Marketing',         items: ['Content Strategy', 'Copywriting', 'Employer Branding', 'Analytics'] },
  ],
  // Add your photo: put the file in /public/photo.jpg and change null to '/photo.jpg'
  photo: null,
}

export default function About() {
  return (
    <>
      <Head>
        <title>About — Tin Smajlagić</title>
        <meta
          name="description"
          content="Game developer and digital marketing specialist based in Zagreb, Croatia."
        />
      </Head>

      <main className="about-page">

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

        <div className="dossier-grid">

          <div className="dossier-left">

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

          <div className="dossier-right">

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

        <div className="dossier-quote sr">
          <div className="dossier-quote-inner">
            <span className="dossier-quote-mark">"</span>
            <p className="dossier-quote-text">
              The best games are the ones that make you feel something
              you didn't know you needed to feel.
            </p>
            <span className="dossier-quote-attr label">
              — Tin Smajlagić
            </span>
          </div>
        </div>

      </main>
    </>
  )
}