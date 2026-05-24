import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Nav() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  // All navigable pages — used for mobile menu and the film counter
  const links = [
    { href: '/',        label: 'Home' },
    { href: '/work',    label: 'Work' },
    { href: '/about',   label: 'About' },
    { href: '/now',     label: 'Now' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav>
        <div className="nav-left">
          <Link
            href="/work"
            className={router.pathname === '/work' ? 'active' : ''}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={router.pathname === '/about' ? 'active' : ''}
          >
            About
          </Link>
        </div>

        <Link href="/" className="nav-logo">
          [Tvoje Ime]
        </Link>

        <div className="nav-right">
          <Link
            href="/now"
            className={router.pathname === '/now' ? 'active' : ''}
          >
            Now
          </Link>
          <Link
            href="/contact"
            className={router.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
          {/* Film counter — Anderson signature detail */}
          <span className="nav-counter mono">
            {String(
              links.findIndex((l) => l.href === router.pathname) + 1 || 1
            ).padStart(2, '0')}{' '}
            /{' '}
            {String(links.length).padStart(2, '0')}
          </span>
        </div>

        <button
          className="burger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <div className="mobile-menu-links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}