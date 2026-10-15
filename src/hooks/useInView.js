import { useEffect, useRef, useState } from 'react'

/**
 * Returns a [ref, inView] tuple.
 * The boolean becomes true once the referenced element enters the viewport.
 * Triggers only once then disconnects the observer.
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el) // Trigger once only
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return [ref, inView]
}
