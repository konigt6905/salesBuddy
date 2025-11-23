import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { useSmoothScroll } from '../hooks/useIntersectionObserver'

// Sticky navigation with scroll-triggered transparency effect
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const scrollTo = useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Features', id: 'features' },
    { label: 'Calculator', id: 'calculator' },
    { label: 'Pipeline', id: 'pipeline' },
    { label: 'Testimonials', id: 'testimonials' },
  ]

  const handleNavClick = (id) => {
    scrollTo(id)
    setMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-black/80 backdrop-blur-lg border-b border-white/10'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white">Sales Buddy</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
              Log In
            </button>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all hover:scale-105">
              Start Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 animate-slide-up">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left text-gray-300 hover:text-white hover:bg-white/5 py-2.5 px-3 rounded-lg transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10 space-y-2">
              <button className="block w-full text-left text-gray-300 hover:text-white hover:bg-white/5 py-2.5 px-3 rounded-lg transition-colors text-sm">
                Log In
              </button>
              <button className="w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
