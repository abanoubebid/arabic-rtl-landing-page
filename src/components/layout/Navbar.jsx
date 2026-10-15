import { useState, useEffect, useCallback } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { navLinks, siteConfig } from '../../data/content.js'
import Button from '../ui/Button.jsx'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Show shadow once user scrolls past 20px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = useCallback((href) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="container-custom flex items-center justify-between py-4 px-4 md:px-8"
        aria-label="التنقل الرئيسي"
      >
        {/* ── Logo ── */}
        <a
          href="#"
          className="flex items-center gap-2 font-bold text-xl text-primary-600"
          aria-label={siteConfig.name}
        >
          <span className="flex items-center justify-center w-9 h-9 bg-primary-600 rounded-lg">
            <Zap size={20} className="text-white" aria-hidden="true" />
          </span>
          <span>{siteConfig.name}</span>
        </a>

        {/* ── Desktop Links ── */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="text-neutral-600 hover:text-primary-600 font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:text-primary-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── CTA + Hamburger ── */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#contact')
            }}
          >
            <Button variant="primary" className="hidden md:inline-flex text-sm px-5 py-2">
              تواصل معنا
            </Button>
          </a>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-[72px] bg-white z-40 flex flex-col p-6 gap-4"
          role="dialog"
          aria-modal="true"
          aria-label="قائمة التنقل"
        >
          <ul className="flex flex-col gap-2" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="block px-4 py-3 rounded-xl text-neutral-700 hover:bg-primary-50 hover:text-primary-600 font-medium text-lg transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Button
              variant="primary"
              className="w-full justify-center text-base py-3"
              onClick={() => handleNavClick('#contact')}
            >
              تواصل معنا
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
