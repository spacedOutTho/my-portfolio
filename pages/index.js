import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <Head>
        <title>[Tvoje Ime] — Game Developer</title>
        <meta name="description" content="Game developer based in Rijeka, Croatia. Crafting interactive experiences with precision and style." />
      </Head>

      <main className="lobby">

        {/* Gornji dekorativni red — Anderson uvijek ima labele */}
        <div className="lobby-top-label label sr">
          Est. {new Date().getFullYear()} · Rijeka, Croatia
        </div>

        {/* Centralni blok */}
        <div className="lobby-center">

          {/* Dekorativni okvir oko naslova */}
          <div className={`lobby-frame ${mounted ? 'lobby-frame--visible' : ''}`}>
            <span className="lobby-frame-corner lobby-frame-corner--tl" />
            <span className="lobby-frame-corner lobby-frame-corner--tr" />
            <span className="lobby-frame-corner lobby-frame-corner--bl" />
            <span className="lobby-frame-corner lobby-frame-corner--br" />
          </div>

          <p className="lobby-notice label sr" style={{ '--delay': '0.1s' }}>
            Portfolio · Game Development
          </p>

          <h1 className="lobby-title sr" style={{ '--delay': '0.2s' }}>
            [Tvoje<br />Ime]
          </h1>

          <div className="lobby-divider sr" style={{ '--delay': '0.3s' }}>
            <span className="lobby-divider-line" />
            <span className="lobby-divider-diamond">◆</span>
            <span className="lobby-divider-line" />
          </div>

          <p className="lobby-tagline sr" style={{ '--delay': '0.4s' }}>
            Crafting interactive experiences<br />
            with precision and style.
          </p>

          <div className="lobby-cta sr" style={{ '--delay': '0.55s' }}>
            <Link href="/work" className="lobby-btn" data-hover>
              <span>View Work</span>
              <span className="lobby-btn-arrow">→</span>
            </Link>
            <Link href="/contact" className="lobby-btn-secondary" data-hover>
              Get in touch
            </Link>
          </div>

        </div>

        {/* Donji dekorativni red */}
        <div className="lobby-bottom sr" style={{ '--delay': '0.6s' }}>
          <span className="label">Available for projects</span>
          <span className="lobby-bottom-dot" />
          <span className="label">Open to collaboration</span>
        </div>

        {/* Vertikalni scroll hint */}
        <div className="lobby-scroll-hint sr" style={{ '--delay': '0.8s' }}>
          <span className="lobby-scroll-line" />
          <span className="label">Scroll</span>
        </div>

      </main>
    </>
  )
}