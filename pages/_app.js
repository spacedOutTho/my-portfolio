import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import Cursor from '../components/Cursor'
import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Lenis from 'lenis'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [preloaderHiding, setPreloaderHiding] = useState(false)
  const [preloaderGone, setPreloaderGone] = useState(false)

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })
    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
    return () => {
      lenis.destroy()
      cancelAnimationFrame(rafId)
    }
  }, [])

  // Preloader — samo na prvom loadu
  useEffect(() => {
    const t1 = setTimeout(() => setPreloaderHiding(true), 2000)
    const t2 = setTimeout(() => setPreloaderGone(true), 2700)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  // Scroll reveal — prati promjenu stranice
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    const timer = setTimeout(() => {
      document.querySelectorAll('.sr').forEach(el => observer.observe(el))
    }, 100)
    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [router.asPath])

  return (
    <div>
      {/* Preloader */}
      {!preloaderGone && (
        <div className={`preloader ${preloaderHiding ? 'preloader--hiding' : ''}`}>
          <p className="preloader-notice">Please stand by</p>
          <p className="preloader-title">[Tvoje Ime]</p>
          <div className="preloader-bar">
            <div className="preloader-bar-fill" />
          </div>
          <p className="preloader-sub">// loading portfolio...</p>
        </div>
      )}

      <Cursor />
      <PageTransition />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}