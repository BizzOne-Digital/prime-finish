import Link from 'next/link'

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.05 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
)

const services = [
  { label: 'Drywall Installation & Repair', href: '/services#drywall' },
  { label: 'Interior & Exterior Painting', href: '/services#painting' },
  { label: 'Popcorn Ceiling Removal', href: '/services#popcorn' },
  { label: 'Ceiling Repairs & Finishing', href: '/services#ceiling' },
  { label: 'Commercial & Residential', href: '/services#commercial' },
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Areas We Serve', href: '/areas' },
  { label: 'Contact', href: '/contact' },
]

const areas = ['Ottawa', 'Kanata', 'Nepean', 'Orleans', 'Barrhaven', 'Stittsville', 'Gloucester', 'Gatineau']

export default function Footer() {
  return (
    <footer style={{background:'#060e1a'}} className="text-white">
      {/* CTA Band */}
      <div style={{background:'#c8a96e'}} className="py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-bold text-navy-900" style={{color:'#0f2035'}}>Ready to Transform Your Space?</h3>
            <p className="text-navy-700 mt-1" style={{color:'#1e3a5f'}}>Free estimates available — no obligation, no pressure.</p>
          </div>
          <div className="flex gap-3">
            <a href="tel:6137005736" className="bg-navy-900 text-white font-bold px-7 py-3 uppercase tracking-wider text-sm hover:bg-navy-800 transition-colors flex items-center gap-2" style={{background:'#0f2035'}}>
              <PhoneIcon /> Call Now
            </a>
            <Link href="/contact" className="bg-white text-navy-900 font-bold px-7 py-3 uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors" style={{color:'#0f2035'}}>
              Get Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img src="/logo.png" alt="Prime Finish Ottawa" className="h-12 w-auto" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Professional drywall, painting, and finishing services across Ottawa and surrounding areas. Quality workmanship, clean finishes, and guaranteed satisfaction.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/primefinishottawa" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-accent transition-colors"
                style={{'--accent':'#c8a96e'}}>
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/share/195eiUPpWK/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-accent transition-colors">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-widest text-xs mb-5 pb-3 border-b border-white/10">Our Services</h4>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s.label}>
                  <Link href={s.href} className="text-white/60 text-sm hover:text-accent transition-colors flex items-center gap-2" style={{'--accent':'#c8a96e'}}>
                    <span style={{color:'#c8a96e'}}>›</span> {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-widest text-xs mb-5 pb-3 border-b border-white/10">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2">
                    <span style={{color:'#c8a96e'}}>›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-widest text-xs mb-5 pb-3 border-b border-white/10">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <span className="mt-0.5 flex-shrink-0" style={{color:'#c8a96e'}}><PhoneIcon /></span>
                <a href="tel:6137005736" className="hover:text-white transition-colors">613-700-5736</a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <span className="mt-0.5 flex-shrink-0" style={{color:'#c8a96e'}}><MailIcon /></span>
                <a href="mailto:can613ada@gmail.com" className="hover:text-white transition-colors">can613ada@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <span className="mt-0.5 flex-shrink-0" style={{color:'#c8a96e'}}><MapPinIcon /></span>
                <span>Ottawa & Surrounding Areas, Ontario</span>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-white/40 text-xs uppercase tracking-widest mb-3">Areas We Serve</h5>
              <div className="flex flex-wrap gap-2">
                {areas.map(a => (
                  <span key={a} className="text-xs text-white/50 border border-white/10 px-2 py-1">{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">© 2026 Prime Finish Ottawa. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/40 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 text-sm hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
