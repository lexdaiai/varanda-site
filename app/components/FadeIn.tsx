'use client'
import { useRef, useEffect, useState, ReactNode, CSSProperties } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
  style?: CSSProperties
  className?: string
}

export function FadeIn({ children, delay = 0, direction = 'up', style, className = '' }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setVisible(true); return }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const dirClass = { up: 'anim-up', left: 'anim-left', right: 'anim-right' }[direction]

  return (
    <div
      ref={ref}
      className={`${visible ? 'anim-visible' : dirClass} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}
