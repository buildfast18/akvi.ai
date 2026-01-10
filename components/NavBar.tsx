'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { href: '/', label: 'Home', icon: ChevronRight },
  { href: '/services', label: 'Services', icon: ChevronRight },
  // { href: '/case-studies', label: 'Case Studies', icon: ChevronRight },
  { href: '/about', label: 'About', icon: ChevronRight },
  // { href: '/pricing', label: 'Pricing', icon: ChevronRight },
  { href: '/careers', label: 'Careers', icon: ChevronRight },
  { href: '/contact', label: 'Contact', icon: ChevronRight },
]

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 36, 0.1)',
          backdropFilter: isScrolled ? 'blur(16px)' : 'blur(8px)',
          boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 z-50 relative">
              <Image
                src="/Akvi_logo_3.png"
                alt="Akvi.ai Logo"
                width={isScrolled ? 120 : 140}
                height={isScrolled ? 40 : 50}
                className="transition-all duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 group overflow-hidden ${
                      isActive
                        ? 'text-[rgb(255,92,57)] font-semibold'
                        : isScrolled 
                          ? 'text-neutral-dark font-semibold' 
                          : 'text-white font-semibold drop-shadow-lg'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="flex items-center space-x-1 relative">
                      {/* Text rolling effect */}
                      <span className="relative inline-block overflow-hidden" style={{ height: '1.5rem' }}>
                        <motion.span
                          className="flex flex-col"
                          initial={{ y: 0 }}
                          whileHover={{ y: '-1.5rem' }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <span className="block leading-6">{item.label}</span>
                          <span className="block leading-6 text-[rgb(255,92,57)] font-bold">{item.label}</span>
                        </motion.span>
                      </span>
                      <Icon
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isActive 
                            ? 'text-[rgb(255,92,57)]' 
                            : isScrolled 
                              ? 'text-neutral-dark/80' 
                              : 'text-white'
                        } group-hover:rotate-12 group-hover:text-[rgb(255,92,57)]`}
                        aria-hidden="true"
                      />
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[rgb(255,92,57)]/20 rounded-lg -z-10"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                    {/* Hover background */}
                    <motion.div
                      className="absolute inset-0 bg-[rgb(255,92,57)]/10 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </Link>
                )
              })}
              <Link
                href="/contact"
                className="ml-4 px-6 py-2 bg-[rgb(255,92,57)] text-white rounded-lg font-bold hover:bg-[rgb(255,92,57)]/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Talk to an Expert
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors font-semibold ${
                isScrolled 
                  ? 'text-neutral-dark hover:bg-[rgb(255,92,57)]/10 hover:text-[rgb(255,92,57)]' 
                  : 'text-white hover:bg-[rgb(255,92,57)]/20 hover:text-[rgb(255,92,57)] drop-shadow-md'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden bg-white/95 backdrop-blur-lg border-b border-light-aqua/30 shadow-lg"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-2" role="navigation" aria-label="Mobile navigation">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors font-semibold ${
                        isActive
                          ? 'bg-[rgb(255,92,57)]/20 text-[rgb(255,92,57)]'
                          : 'text-neutral-dark hover:bg-[rgb(255,92,57)]/10 hover:text-[rgb(255,92,57)]'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span>{item.label}</span>
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  )
                })}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-6 py-3 bg-[rgb(255,92,57)] text-white rounded-lg font-bold text-center hover:bg-[rgb(255,92,57)]/90 transition-colors shadow-lg"
                >
                  Talk to an Expert
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

