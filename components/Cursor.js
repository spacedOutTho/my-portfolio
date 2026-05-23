import { useEffect, useState } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setDotPos({ x: e.clientX, y: e.clientY })
      const isHover = !!e.target.closest(
        'a, button, [data-hover]'
      )
      setHovering(isHover)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      <div
        className={`cursor-ring ${hovering ? 'cursor-ring--hover' : ''}`}
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
        aria-hidden="true"
      />
      <div
        className="cursor-dot"
        style={{ transform: `translate3d(${dotPos.x}px, ${dotPos.y}px, 0)` }}
        aria-hidden="true"
      />
    </>
  )
}