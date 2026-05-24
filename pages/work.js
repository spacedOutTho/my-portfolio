import Head from 'next/head'
import Link from 'next/link'

// ─── Split projects into chapters — this solves the multidisciplinary problem ───
// Each chapter gets its own Roman numeral, title, and colour accent.
// Keep to 5–8 total projects across all chapters (research: quality > quantity).

const chapters = [
  {
    numeral: 'I',
    title: 'Game Development',
    years: '2023 — Present',
    description: 'Original games, prototypes, and interactive experiences.',
    projects: [
      {
        id: '01',
        title: 'Project Codename Alpha',
        category: 'Game — Solo',
        year: '2026',
        role: 'Solo developer',
        engine: 'Godot',
        duration: '6 months',
        team: '1 person',
        status: 'Completed',
        description:
          'A short description of what this game is about. The feel, the mechanics, the world. Keep it to two or three sentences max.',
        tech: ['Godot', 'GDScript', 'Blender'],
        color: '#E8C4B8',
        url: null,
      },
      {
        id: '02',
        title: 'Project Codename Beta',
        category: 'Game — Solo',
        year: '2025',
        role: 'Solo developer',
        engine: 'Unity',
        duration: '4 months',
        team: '1 person',
        status: 'In Progress',
        description:
          'Another project description. What problem did it solve, what was interesting about building it, what makes it worth showing.',
        tech: ['Unity', 'C#', 'Aseprite'],
        color: '#D4C4B4',
        url: null,
      },
    ],
  },
  {
    numeral: 'II',
    title: 'Web Development',
    years: '2024 — Present',
    description: 'Custom sites, web apps, and digital tools for real clients.',
    projects: [
      {
        id: '03',
        title: 'Le Café Studio',
        category: 'Web — Client',
        year: '2026',
        role: 'Full-stack developer',
        engine: 'Next.js',
        duration: '3 months',
        team: '1 developer + 1 designer',
        status: 'Completed',
        description:
          'Custom Next.js website with CMS for a wedding photographer. Rebuilt from WordPress with Supabase, Vercel, and premium UI/UX details.',
        tech: ['Next.js', 'Supabase', 'Vercel'],
        color: '#C9A84C',
        url: 'https://le-cafe-studio.vercel.app',
      },
    ],
  },
]

// Flatten for the page counter
const totalProjects = chapters.reduce((acc, ch) => acc + ch.projects.length, 0)

export default function Work() {
  return (
    <>
      <Head>
        <title>Work — [Tvoje Ime]</title>
        <meta
          name="description"
          content="Selected works in game development and web development."
        />
      </Head>

      <main className="work-page">

        {/* ─── Header ─── */}
        <div className="work-header">
          <p className="label sr">
            {totalProjects} Selected Works
          </p>
          <h1 className="work-title sr" style={{ '--delay': '0.1s' }}>
            The Exhibition
          </h1>
          <div
            className="rule--short sr"
            style={{ '--delay': '0.2s', margin: '20px auto 0' }}
          />
        </div>

        {/* ─── Chapters ─── */}
        {chapters.map((chapter, ci) => (
          <section key={chapter.numeral} className="work-chapter">

            {/* Chapter title card — Anderson signature move */}
            <div className={`chapter-card sr`} style={{ '--delay': `${ci * 0.05}s` }}>
              <div className="chapter-card-inner">
                <span className="chapter-numeral label">Chapter {chapter.numeral}</span>
                <h2 className="chapter-title">{chapter.title}</h2>
                <span className="chapter-years mono">{chapter.years}</span>
                <p className="chapter-description">{chapter.description}</p>
              </div>
            </div>

            {/* Projects in this chapter */}
            <div className="work-grid">
              {chapter.projects.map((project, pi) => (
                <article
                  key={project.id}
                  className="exhibit sr"
                  style={{ '--delay': `${pi * 0.1}s` }}
                >
                  {/* Top meta row */}
                  <div className="exhibit-meta">
                    <span className="exhibit-id label">Exhibit {project.id}</span>
                    <span
                      className="exhibit-status label"
                      data-status={project.status}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Image / placeholder */}
                  <div
                    className="exhibit-image"
                    style={{ background: project.color }}
                  >
                    <span className="exhibit-image-label label">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="exhibit-content">
                    <div className="exhibit-header">
                      <h3 className="exhibit-title">{project.title}</h3>
                      <span className="exhibit-year mono">{project.year}</span>
                    </div>

                    <p className="exhibit-description">{project.description}</p>

                    {/* 7-field stat block — per playbook principle #3 */}
                    <div className="exhibit-stat-block">
                      <div className="exhibit-stat-row">
                        <span className="exhibit-stat-key label">Role</span>
                        <span className="exhibit-stat-dots" />
                        <span className="exhibit-stat-val mono">{project.role}</span>
                      </div>
                      <div className="exhibit-stat-row">
                        <span className="exhibit-stat-key label">Engine</span>
                        <span className="exhibit-stat-dots" />
                        <span className="exhibit-stat-val mono">{project.engine}</span>
                      </div>
                      <div className="exhibit-stat-row">
                        <span className="exhibit-stat-key label">Duration</span>
                        <span className="exhibit-stat-dots" />
                        <span className="exhibit-stat-val mono">{project.duration}</span>
                      </div>
                      <div className="exhibit-stat-row">
                        <span className="exhibit-stat-key label">Team</span>
                        <span className="exhibit-stat-dots" />
                        <span className="exhibit-stat-val mono">{project.team}</span>
                      </div>
                    </div>

                    {/* Tech tags */}
                    <div className="exhibit-medium">
                      <span className="label">Medium</span>
                      <div className="exhibit-tags">
                        {project.tech.map((t) => (
                          <span key={t} className="exhibit-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer link */}
                    <div className="exhibit-footer">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="exhibit-link"
                          data-hover
                        >
                          <span>Examine</span>
                          <span className="exhibit-link-arrow">→</span>
                        </a>
                      ) : (
                        <span className="exhibit-link exhibit-link--disabled">
                          Coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </section>
        ))}

        {/* ─── Footer note ─── */}
        <div className="work-footer-note sr">
          <div className="rule" style={{ marginBottom: '24px' }} />
          <p
            className="label"
            style={{ textAlign: 'center', opacity: 0.4 }}
          >
            More works in progress — updated regularly
          </p>
        </div>

      </main>
    </>
  )
}