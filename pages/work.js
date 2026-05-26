import Head from 'next/head'

// ─── YOUR REAL PROJECTS ───────────────────────────────────────────────
// Two things still need your input (marked with TODO):
//   1. The titles of your solo Itch.io games — add them as separate projects
//      or keep the collection card as-is
//   2. Screenshots/GIFs — drop them in /public/ and replace the color values
// ─────────────────────────────────────────────────────────────────────

const chapters = [
  {
    numeral: 'I',
    title: 'Solo Game Development',
    years: '2024 — Present',
    description: 'Six titles shipped independently — design, code, art, and audio all by one person.',
    projects: [
      {
        id: '01',
        // TODO: replace with your actual Steam game title
        title: 'Discarding Death',
        category: 'Game — Solo',
        year: '2025',
        role: 'Solo developer',
        engine: 'Godot 4',
        duration: 'TBD',
        team: '1 person',
        status: 'Completed',
        description:
          'TODO: 2–3 sentences about this game. What is the mechanic, what is the feel, why is it worth playing.',
        tech: ['Godot 4', 'GDScript', 'Aseprite', 'Ableton Live'],
        color: '#E8C4B8',
        url: 'https://store.steampowered.com/app/3600330',
      },
      {
        id: '02',
        title: 'Itch.io Collection',
        category: 'Games — Solo',
        year: '2024 – Present',
        role: 'Solo developer',
        engine: 'Godot 4 / HTML5',
        duration: 'Ongoing',
        team: '1 person',
        status: 'Ongoing',
        description:
          'Six games published on Itch.io across web, Android, and desktop. Each one a self-contained experiment — mechanics, narrative, and audio all designed and built independently.',
        tech: ['Godot 4', 'HTML5', 'Android', 'GDScript'],
        color: '#D4C4B4',
        url: 'https://shady-bloke.itch.io',
      },
    ],
  },
  {
    numeral: 'II',
    title: 'Professional Game Design',
    years: '2016 — 2021',
    description: 'Studio work — shipped titles, Epic Games presentations, and five years of design documentation.',
    projects: [
      {
        id: '03',
        title: 'Primordials: Battle of Gods',
        category: 'Game — Studio',
        year: '2021',
        role: 'Lead Game Designer',
        engine: 'Custom',
        duration: '2.5 years',
        team: 'Wiregames d.o.o.',
        status: 'Completed',
        description:
          'Led comprehensive game design for a title shipped on both Steam and the Epic Games Store. Wrote and presented the full game design document to Epic Games — approved. Responsible for all mechanics, systems design, and market research.',
        tech: ['Game Design', 'Systems Design', 'UE4', 'Steam', 'Epic Games Store'],
        color: '#C9A84C',
        url: 'https://store.steampowered.com/app/1421200/Primordials_Battle_of_Gods/',
      },
    ],
  },
  {
    numeral: 'III',
    title: 'Web & Tools',
    years: '2024 — Present',
    description: 'Custom web projects and developer tools built for real use cases.',
    projects: [
      {
        id: '04',
        title: 'Numismatic Search Aggregator',
        category: 'Tool — Python / Flask',
        year: '2025',
        role: 'Solo developer',
        engine: 'Python / Flask',
        duration: 'Ongoing',
        team: '1 person',
        status: 'In Progress',
        description:
          'A federated search engine that queries 10 Croatian and international numismatic databases simultaneously — Hrčak, CroRIS, NSK, Europeana, Gallica, and others. Uses ThreadPoolExecutor for parallel requests, Selenium for JavaScript-rendered sources, and a unified JSON API for the frontend.',
        tech: ['Python', 'Flask', 'Selenium', 'BeautifulSoup', 'REST APIs'],
        color: '#B8A898',
        url: null,
      },
      {
        id: '05',
        title: 'Le Café Studio',
        category: 'Web — Client',
        year: '2026',
        role: 'Full-stack developer',
        engine: 'Next.js',
        duration: '3 months',
        team: '1 developer',
        status: 'Completed',
        description:
          'Custom Next.js website for a wedding photographer. Rebuilt from WordPress with Supabase for media management and Vercel for deployment. Focus on performance, image quality, and a premium feel that matched the photographer\'s brand.',
        tech: ['Next.js', 'Supabase', 'Vercel', 'CSS'],
        color: '#E0C878',
        url: 'https://le-cafe-studio.vercel.app',
      },
    ],
  },
]

const totalProjects = chapters.reduce((acc, ch) => acc + ch.projects.length, 0)

export default function Work() {
  return (
    <>
      <Head>
        <title>Work — Tin Smajlagić</title>
        <meta
          name="description"
          content="Selected works in game development, game design, and web development."
        />
      </Head>

      <main className="work-page">

        <div className="work-header">
          <p className="label sr">{totalProjects} Selected Works</p>
          <h1 className="work-title sr" style={{ '--delay': '0.1s' }}>
            The Exhibition
          </h1>
          <div
            className="rule--short sr"
            style={{ '--delay': '0.2s', margin: '20px auto 0' }}
          />
        </div>

        {chapters.map((chapter, ci) => (
          <section key={chapter.numeral} className="work-chapter">

            <div className="chapter-card sr" style={{ '--delay': `${ci * 0.05}s` }}>
              <div className="chapter-card-inner">
                <span className="chapter-numeral label">Chapter {chapter.numeral}</span>
                <h2 className="chapter-title">{chapter.title}</h2>
                <span className="chapter-years mono">{chapter.years}</span>
                <p className="chapter-description">{chapter.description}</p>
              </div>
            </div>

            <div className="work-grid">
              {chapter.projects.map((project, pi) => (
                <article
                  key={project.id}
                  className="exhibit sr"
                  style={{ '--delay': `${pi * 0.1}s` }}
                >
                  <div className="exhibit-meta">
                    <span className="exhibit-id label">Exhibit {project.id}</span>
                    <span className="exhibit-status label" data-status={project.status}>
                      {project.status}
                    </span>
                  </div>

                  <div className="exhibit-image" style={{ background: project.color }}>
                    <span className="exhibit-image-label label">{project.category}</span>
                  </div>

                  <div className="exhibit-content">
                    <div className="exhibit-header">
                      <h3 className="exhibit-title">{project.title}</h3>
                      <span className="exhibit-year mono">{project.year}</span>
                    </div>

                    <p className="exhibit-description">{project.description}</p>

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

                    <div className="exhibit-medium">
                      <span className="label">Medium</span>
                      <div className="exhibit-tags">
                        {project.tech.map((t) => (
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
                          Private project
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </section>
        ))}

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