import { useState, useEffect, useRef } from 'react'

// Hook for scroll-triggered animations using Intersection Observer
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
        // Optionally disconnect after first intersection for one-time animations
        if (options.triggerOnce !== false) {
          observer.disconnect()
        }
      } else if (options.triggerOnce === false) {
        setIsIntersecting(false)
      }
    }, { threshold: 0.1, ...options })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options.threshold, options.triggerOnce])

  return [ref, isIntersecting]
}

// Hook for smooth scrolling navigation
export function useSmoothScroll() {
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return scrollTo
}
