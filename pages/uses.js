import Head from 'next/head'

// ─── Your actual tools — replace placeholders with what you really use ───
// The specificity is the point. "VS Code with Godot Tools extension" beats "VS Code."
const inventory = [
  {
    category: 'Hardware',
    items: [
      {
        id: '001',
        name: 'Primary Machine',
        value: '[Your computer — model and year]',
        note: 'main development rig',
      },
      {
        id: '002',
        name: 'Display',
        value: '[Monitor — size and model if notable]',
        note: null,
      },
      {
        id: '003',
        name: 'Input',
        value: '[Keyboard / Mouse]',
        note: null,
      },
      {
        id: '004',
        name: 'Audio',
        value: '[Headphones]',
        note: 'critical for game audio testing',
      },
    ],
  },
  {
    category: 'Game Development',
    items: [
      {
        id: '005',
        name: 'Engine (primary)',
        value: 'Godot 4',
        note: 'since 2023 — won\'t go back',
      },
      {
        id: '006',
        name: 'Engine (secondary)',
        value: 'Unity',
        note: 'for client work and legacy projects',
      },
      {
        id: '007',
        name: 'Code Editor',
        value: 'VS Code',
        note: 'with Godot Tools + GitLens',
      },
      {
        id: '008',
        name: 'Pixel Art',
        value: 'Aseprite',
        note: 'irreplaceable for 2D',
      },
      {
        id: '009',
        name: '3D / Modelling',
        value: 'Blender',
        note: 'low-poly focus',
      },
    ],
  },
  {
    category: 'Web Development',
    items: [
      {
        id: '010',
        name: 'Framework',
        value: 'Next.js (Pages Router)',
        note: 'by preference',
      },
      {
        id: '011',
        name: 'Styling',
        value: 'Vanilla CSS',
        note: 'no Tailwind, no regrets',
      },
      {
        id: '012',
        name: 'Database / Backend',
        value: 'Supabase',
        note: 'when a database is needed',
      },
      {
        id: '013',
        name: 'Hosting',
        value: 'Vercel',
        note: 'straightforward deploys',
      },
      {
        id: '014',
        name: 'Email',
        value: 'Resend',
        note: 'for transactional and contact forms',
      },
    ],
  },
  {
    category: 'Design & Thinking',
    items: [
      {
        id: '015',
        name: 'UI Design',
        value: 'Figma',
        note: 'wireframes and component specs',
      },
      {
        id: '016',
        name: 'Notes',
        value: '[Notion / Obsidian / physical notebook]',
        note: 'for design docs and postmortems',
      },
      {
        id: '017',
        name: 'Version Control',
        value: 'Git + GitHub',
        note: null,
      },
      {
        id: '018',
        name: 'Reference',
        value: 'Are.na',
        note: 'visual research and mood boards',
      },
    ],
  },
  {
    category: 'Currently',
    items: [
      {
        id: '019',
        name: 'Reading',
        value: '[Current book — title and author]',
        note: null,
      },
      {
        id: '020',
        name: 'Playing',
        value: '[Game you\'re playing right now]',
        note: 'research, obviously',
      },
      {
        id: '021',
        name: 'Learning',
        value: '[Skill or tool in progress]',
        note: null,
      },
    ],
  },
]

export default function Uses() {
  const totalItems = inventory.reduce((acc, s) => acc + s.items.length, 0)

  return (
    <>
      <Head>
        <title>Uses — [Tvoje Ime]</title>
        <meta
          name="description"
          content="Tools, hardware, and software I use for game and web development."
        />
      </Head>

      <main className="uses-page">

        {/* ─── Header ─── */}
        <div className="uses-header">
          <p className="label sr">Specimen Count: {totalItems}</p>
          <h1 className="uses-title sr" style={{ '--delay': '0.1s' }}>
            The Kit
          </h1>
          <div
            className="rule--short sr"
            style={{ '--delay': '0.2s', margin: '20px auto 0' }}
          />
          <p className="uses-sub sr" style={{ '--delay': '0.3s' }}>
            A full inventory of tools, hardware, and reading material.
            Updated when something changes.
          </p>
        </div>

        {/* ─── Inventory list ─── */}
        <div className="uses-content">
          {inventory.map((section, si) => (
            <div
              key={section.category}
              className="uses-section sr"
              style={{ '--delay': `${si * 0.05}s` }}
            >
              <div className="uses-section-header">
                <span className="label">{section.category}</span>
                <span className="uses-section-count label">
                  {section.items.length} item{section.items.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="uses-items">
                {section.items.map((item) => (
                  <div key={item.id} className="uses-item">
                    <span className="uses-item-id label">{item.id}</span>
                    <span className="uses-item-name">{item.name}</span>
                    <span className="uses-item-dots" />
                    <span className="uses-item-value mono">{item.value}</span>
                    {item.note && (
                      <span className="uses-item-note label">
                        — {item.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="uses-footer sr" style={{ '--delay': '0.1s' }}>
          <div className="rule" style={{ marginBottom: '24px' }} />
          <p
            className="mono"
            style={{ opacity: 0.25, fontSize: '11px', textAlign: 'center' }}
          >
            // Inspired by Wes Anderson&apos;s obsessive prop departments — and uses.tech
          </p>
        </div>

      </main>
    </>
  )
}