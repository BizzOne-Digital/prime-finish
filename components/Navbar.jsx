'use client'
import { useState } from 'react'
import Link from 'next/link'

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.05 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services', href: '/services',
    children: [
      { label: 'Drywall Installation & Repair', href: '/services#drywall' },
      { label: 'Interior & Exterior Painting', href: '/services#painting' },
      { label: 'Popcorn Ceiling Removal', href: '/services#popcorn' },
      { label: 'Ceiling Repairs & Finishing', href: '/services#ceiling' },
      { label: 'Commercial & Residential', href: '/services#commercial' },
    ]
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Areas We Serve', href: '/areas' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="Prime Finish Ottawa" className="h-12 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                link.children ? (
                  <div key={link.label} className="relative group">
                    <button className="flex items-center gap-1 font-medium text-sm text-charcoal transition-colors hover:text-accent">
                      {link.label} <ChevronDown />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-accent" style={{borderColor:'#c8a96e'}}>
                      {link.children.map(child => (
                        <Link key={child.label} href={child.href}
                          className="block px-5 py-3 text-sm text-charcoal hover:bg-navy-700 hover:text-white transition-colors border-b border-gray-100 last:border-0"
                          style={{'--hover-bg':'#1e3a5f'}}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={link.label} href={link.href}
                    className="font-medium text-sm text-charcoal transition-colors hover:text-yellow-400">
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:6137005736" className="flex items-center gap-2 text-sm font-medium transition-colors" style={{color:'#1e3a5f'}}>
                <PhoneIcon /> 613-700-5736
              </a>
              <Link href="/contact"
                className="bg-accent text-navy-900 font-bold px-6 py-3 text-sm uppercase tracking-wider hover:brightness-110 transition-all"
                style={{background:'#c8a96e', color:'#0f2035'}}>
                Free Estimate
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 transition-colors"
              style={{color:'#1e3a5f'}}>
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-80 bg-navy-900 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{background:'#0a1628'}}>
          <div className="p-6 pt-20">
            <div className="space-y-1">
              {navLinks.map(link => (
                link.children ? (
                  <div key={link.label}>
                    <button onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-white font-medium hover:bg-navy-700 transition-colors rounded"
                      style={{'--hover-bg':'#1e3a5f'}}>
                      {link.label} <ChevronDown />
                    </button>
                    {servicesOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.children.map(child => (
                          <Link key={child.label} href={child.href}
                            className="block px-4 py-2 text-white/70 text-sm hover:text-white transition-colors"
                            onClick={() => setMobileOpen(false)}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.label} href={link.href}
                    className="block px-4 py-3 text-white font-medium hover:bg-navy-700 transition-colors rounded"
                    onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                )
              ))}
            </div>
            <div className="mt-8 space-y-3">
              <a href="tel:6137005736" className="flex items-center gap-2 text-white/80 px-4">
                <PhoneIcon /> 613-700-5736
              </a>
              <Link href="/contact"
                className="block text-center bg-accent text-navy-900 font-bold px-6 py-4 uppercase tracking-wider"
                style={{background:'#c8a96e', color:'#0f2035'}}
                onClick={() => setMobileOpen(false)}>
                Request Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
