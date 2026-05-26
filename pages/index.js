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
        <title>Tin Smajlagić — Game Developer & Digital Marketing Specialist</title>
        <meta name="description" content="Game developer and digital marketing specialist based in Zagreb, Croatia. Eight years shipping games and brand campaigns." />
      </Head>

      <main className="lobby">

        <div className="lobby-top-label label sr">
          Est. 2016 · Zagreb, Croatia
        </div>

        <div className="lobby-center">

          <div className={`lobby-frame ${mounted ? 'lobby-frame--visible' : ''}`}>
            <span className="lobby-frame-corner lobby-frame-corner--tl" />
            <span className="lobby-frame-corner lobby-frame-corner--tr" />
            <span className="lobby-frame-corner lobby-frame-corner--bl" />
            <span className="lobby-frame-corner lobby-frame-corner--br" />
          </div>

          <p className="lobby-notice label sr" style={{ '--delay': '0.1s' }}>
            Game Development · Digital Marketing
          </p>

          <h1 className="lobby-title sr" style={{ '--delay': '0.2s' }}>
            Tin<br />Smajlagić
          </h1>

          <div className="lobby-divider sr" style={{ '--delay': '0.3s' }}>
            <span className="lobby-divider-line" />
            <span className="lobby-divider-diamond">◆</span>
            <span className="lobby-divider-line" />
          </div>

          <p className="lobby-tagline sr" style={{ '--delay': '0.4s' }}>
            Six games shipped solo. Eight years in studios.<br />
            One person who does both.
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

        <div className="lobby-bottom sr" style={{ '--delay': '0.6s' }}>
          <span className="label">Available for projects</span>
          <span className="lobby-bottom-dot" />
          <span className="label">Open to collaboration</span>
        </div>

        <div className="lobby-scroll-hint sr" style={{ '--delay': '0.8s' }}>
          <span className="lobby-scroll-line" />
          <span className="label">Scroll</span>
        </div>

      </main>
    </>
  )
}