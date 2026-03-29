import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { mobileMenuVariants } from '@/lib/animations'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false)
    // Wait for exit animation before scrolling
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  return (
    <header
      className={cn(
        'fixed top-0 w-full transition-all duration-300',
        isScrolled
          ? 'border-b border-[#e2e8f0] bg-white/80 backdrop-blur-md'
          : 'bg-transparent'
      )}
      style={{ zIndex: 'var(--z-fixed)' }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo — text with accent initial */}
        <a
          href="#"
          className={cn(
            'text-lg font-medium transition-colors duration-300',
            isScrolled ? 'text-[#0f172a]' : 'text-white'
          )}
        >
          <span className="text-[#2563eb]">N</span>exaCorp
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'text-sm transition-colors duration-300',
                  isScrolled
                    ? 'text-[#475569] hover:text-[#0f172a]'
                    : 'text-white/70 hover:text-white'
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-[#2563eb] px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#1d4ed8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] md:inline-flex"
        >
          Get Started
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={cn(
            'inline-flex items-center justify-center rounded-lg p-2 transition-colors md:hidden',
            isScrolled
              ? 'text-[#475569] hover:text-[#0f172a]'
              : 'text-white/70 hover:text-white'
          )}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="border-t border-[#e2e8f0] bg-white px-6 pb-6 pt-4 md:hidden"
          >
            <ul className="flex flex-col gap-4" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="block text-base text-[#475569] transition-colors hover:text-[#0f172a]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                  className="mt-2 block rounded-full bg-[#2563eb] px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#1d4ed8]"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
