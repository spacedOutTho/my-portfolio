import Head from 'next/head'
import Link from 'next/link'

const projects = [
  {
    id: '01',
    title: 'Project Codename Alpha',
    category: 'Game Development',
    year: '2026',
    description: 'A short description of what this game is about. The feel, the mechanics, the world. Keep it to two or three sentences max.',
    tech: ['Unity', 'C#', 'HLSL'],
    status: 'Completed',
    color: '#E8C4B8',
  },
  {
    id: '02',
    title: 'Project Codename Beta',
    category: 'Game Development',
    year: '2025',
    description: 'Another project description. What problem did it solve, what was interesting about building it, what makes it worth showing.',
    tech: ['Godot', 'GDScript', 'Blender'],
    status: 'In Progress',
    color: '#D4C4B4',
  },
  {
    id: '03',
    title: 'Le Café Studio',
    category: 'Web Development',
    year: '2026',
    description: 'Custom Next.js website with CMS for a wedding photographer. Rebuilt from WordPress with Supabase, Vercel, and premium UI/UX details.',
    tech: ['Next.js', 'Supabase', 'Vercel'],
    status: 'Completed',
    url: 'https://le-cafe-studio.vercel.app',
    color: '#C9A84C',
  },
  {
    id: '04',
    title: 'Project Codename Delta',
    category: 'Game Development',
    year: '2025',
    description: 'A fourth project. Keep adding as many as you have. The grid adapts automatically.',
    tech: ['Unity', 'C#', 'Photoshop'],
    status: 'Completed',
    color: '#B8A898',
  },
]

export default function Work() {
  return (
    <>
      <Head>
        <title>Work — [Tvoje Ime]</title>
        <meta name="description" content="Selected works in game development and web development." />
      </Head>

      <main className="work-page">

        <div className="work-header">
          <p className="label sr">Selected Works</p>
          <h1 className="work-title sr" style={{ '--delay': '0.1s' }}>
            The Exhibition
          </h1>
          <div className="rule--short sr" style={{ '--delay': '0.2s', margin: '20px auto 0' }} />
        </div>

        <div className="work-grid">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="exhibit sr"
              style={{ '--delay': `${(i % 2) * 0.1}s` }}
            >
              <div className="exhibit-meta">
                <span className="exhibit-id label">Exhibit {project.id}</span>
                <span className="exhibit-status label" data-status={project.status}>
                  {project.status}
                </span>
              </div>

              <div className="exhibit-image" style={{ background: project.color }}>
                <span className="exhibit-image-label label">
                  {project.category}
                </span>
              </div>

              <div className="exhibit-content">
                <div className="exhibit-header">
                  <h2 className="exhibit-title">{project.title}</h2>
                  <span className="exhibit-year mono">{project.year}</span>
                </div>

                <p className="exhibit-description">{project.description}</p>

                <div className="exhibit-medium">
                  <span className="label">Medium</span>
                  <div className="exhibit-tags">
                    {project.tech.map(t => (
                      <span key={t} className="exhibit-tag">{t}</span>
                    ))}
                  </div>
                </div>

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

        <div className="work-footer-note sr">
          <div className="rule" style={{ marginBottom: '24px' }} />
          <p className="label" style={{ textAlign: 'center', opacity: 0.4 }}>
            More works in progress — updated regularly
          </p>
        </div>

      </main>
    </>
  )
}