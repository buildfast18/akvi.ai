'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/careers', label: 'Careers' },
    // { href: '/case-studies', label: 'Case Studies' },
    { href: '/contact', label: 'Contact' },
  ],
  services: [
    { href: '/services', label: 'Services' },
    // { href: '/pricing', label: 'Pricing' },
    { href: '/services#consulting', label: 'Software Consulting' },
    { href: '/services#staffing', label: 'Talent & Staffing' },
  ],
  resources: [
    // { href: '/blog', label: 'Blog' },
    // { href: '/case-studies', label: 'Success Stories' },
    { href: '/contact', label: 'Book Consultation' },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' }
]

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/Akvi_logo_3.png"
                alt="Akvi.ai Logo"
                width={140}
                height={50}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              For startups and SMEs that need reliable software talent and delivery support, Akvi.ai is an AI-enabled software consulting and staffing partner.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@akvi.ai"
                className="flex items-center space-x-2 text-white/70 hover:text-light-aqua transition-colors"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                <span>hello@akvi.ai</span>
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center space-x-2 text-white/70 hover:text-light-aqua transition-colors"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>+91-9951827530</span>
              </a>
              <div className="flex items-start space-x-2 text-white/70">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" aria-hidden="true" />
                <span>8-41/22/2/1, West Balaji Hills, Hyderabad, Telangana, India 500039</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-light-aqua transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-light-aqua transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-light-aqua transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <div>
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-light-aqua"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-ocean-teal hover:bg-light-aqua text-white rounded-lg font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Akvi.ai. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-ocean-teal flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

